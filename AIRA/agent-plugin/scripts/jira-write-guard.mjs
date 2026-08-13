import fs from "node:fs";
import process from "node:process";

function readStdin() {
  return new Promise((resolve) => {
    let data = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (chunk) => {
      data += chunk;
    });
    process.stdin.on("end", () => {
      resolve(data);
    });
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

function isLikelyJiraWrite(toolName, toolInput) {
  const name = (toolName || "").toLowerCase();
  const inputText = JSON.stringify(toolInput || {}).toLowerCase();

  const jiraLike = name.includes("atlassian") || name.includes("jira");
  const writeWords = ["comment", "update", "edit", "create", "transition", "delete", "write"];

  const writeLike = writeWords.some((word) => name.includes(word) || inputText.includes(word));
  return jiraLike && writeLike;
}

function hasExplicitApproval(transcriptText, toolInput) {
  const transcript = (transcriptText || "").toLowerCase();
  const inputText = JSON.stringify(toolInput || {}).toLowerCase();

  const approvalPhrasePresent = transcript.includes("approve_jira_comment");

  // Allow posting when this is explicitly a ticket comment write and the approval marker exists.
  const commentWriteIntent = inputText.includes("comment") || inputText.includes("body");

  return approvalPhrasePresent && commentWriteIntent;
}

const inputRaw = await readStdin();
const payload = safeParseJson(inputRaw);

const toolName = payload.tool_name || "";
const toolInput = payload.tool_input || {};

if (!isLikelyJiraWrite(toolName, toolInput)) {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "allow"
      }
    })
  );
  process.exit(0);
}

const transcriptText = loadTranscriptText(payload.transcript_path);
const approved = hasExplicitApproval(transcriptText, toolInput);

if (approved) {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "allow",
        permissionDecisionReason: "Explicit Jira comment approval marker found in transcript."
      }
    })
  );
  process.exit(0);
}

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
