import fs from "node:fs";
import process from "node:process";

const MAX_INSPECT_LENGTH = 5000;

function readStdin() {
  return new Promise((resolve) => {
    let data = "";
    try {
      process.stdin.setEncoding("utf8");
      process.stdin.on("data", (chunk) => {
        data += chunk;
      });
      process.stdin.on("end", () => resolve(data));
      process.stdin.on("error", () => resolve(data));
    } catch {
      resolve(data);
    }
  });
}

function safeParseJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}

function loadTranscriptText(path) {
  if (!path) {
    return "";
  }

  try {
    return fs.readFileSync(path, "utf8");
  } catch {
    return "";
  }
}

// Truncate + guard so a huge tool payload (e.g. a large commit diff) can't slow or crash this hook.
function safeInspect(value) {
  try {
    return JSON.stringify(value ?? {}).slice(0, MAX_INSPECT_LENGTH).toLowerCase();
  } catch {
    return "";
  }
}

function isLikelyJiraWrite(toolName, toolInput) {
  const name = (toolName || "").toLowerCase();
  const inputText = safeInspect(toolInput);

  const jiraLike = name.includes("atlassian") || name.includes("jira");
  const writeWords = ["comment", "update", "edit", "create", "transition", "delete", "write"];

  const writeLike = writeWords.some((word) => name.includes(word) || inputText.includes(word));
  return jiraLike && writeLike;
}

function hasExplicitApproval(transcriptText, toolInput) {
  const transcript = (transcriptText || "").toLowerCase();
  const inputText = safeInspect(toolInput);

  const approvalPhrasePresent = transcript.includes("approve_jira_comment");

  // Allow posting when this is explicitly a ticket comment write and the approval marker exists.
  const commentWriteIntent = inputText.includes("comment") || inputText.includes("body");

  return approvalPhrasePresent && commentWriteIntent;
}

function allow(reason) {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "allow",
        ...(reason ? { permissionDecisionReason: reason } : {})
      }
    })
  );
  process.exit(0);
}

function askForApproval() {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "ask",
        permissionDecisionReason:
          "Jira write action requires explicit approval phrase in chat: APPROVE_JIRA_COMMENT <TICKET-KEY>."
      },
      systemMessage:
        "Approval required before Jira write: ask user for APPROVE_JIRA_COMMENT <TICKET-KEY>, then retry."
    })
  );
  process.exit(0);
}

async function main() {
  const inputRaw = await readStdin();
  const payload = safeParseJson(inputRaw);

  const toolName = payload.tool_name || "";
  const toolInput = payload.tool_input || {};

  if (!isLikelyJiraWrite(toolName, toolInput)) {
    allow();
    return;
  }

  const transcriptText = loadTranscriptText(payload.transcript_path);
  const approved = hasExplicitApproval(transcriptText, toolInput);

  if (approved) {
    allow("Explicit Jira comment approval marker found in transcript.");
    return;
  }

  askForApproval();
}

try {
  await main();
} catch {
  // Fail open: this guard only gates Jira writes - an internal error here must never
  // block an unrelated tool call (e.g. a plain git commit in another workspace).
  allow("jira-write-guard encountered an internal error; defaulting to allow.");
}
