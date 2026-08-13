import process from "node:process";

const context = {
  hookSpecificOutput: {
    hookEventName: "SessionStart",
    additionalContext:
      "Jira write policy: do not post or edit Jira comments until user gives explicit approval phrase: APPROVE_JIRA_COMMENT <TICKET-KEY>."
  }
};

process.stdout.write(JSON.stringify(context));
