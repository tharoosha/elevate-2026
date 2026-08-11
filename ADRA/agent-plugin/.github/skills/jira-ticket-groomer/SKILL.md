---
name: jira-ticket-groomer
description: Use when someone gives a live Jira ticket key and wants it groomed — investigate codebase impact/dependencies (including other repos), business/domain context, related documentation, and similar or previously resolved tickets, then produce a grooming plan and post it back to the ticket as a comment. For a pasted epic with no tracker connection or write-back, use the grooming skill instead.
argument-hint: <jira ticket key, e.g. TDP-42>
---

# Jira Ticket Groomer

Given a live Jira ticket key, this skill produces the same grounded, no-guessing task breakdown that the `grooming` skill produces for a pasted epic — but sourced from the real ticket, enriched with codebase impact analysis, business/domain context, related documentation, and precedent from similar or previously resolved tickets — and, once approved, posts the result back to the ticket.

**Relationship to `grooming`:** `grooming` stays paste-only and fully read-only (no tracker connection, nothing filed). This skill is the live, tracker-connected sibling — it reads from and writes to Jira. Pick based on whether you have a ticket key or pasted text, and whether a Jira comment should result.

**Jira site:** `https://adramatch.jira.com/` — all ticket keys, JQL searches, and Confluence lookups below are scoped to this site.

**Delegate the investigation.** Steps 2, 4, and 5 below are multi-source research that can run long and don't need to clutter this conversation with every search and dead end. Delegate them to the `deep-research` subagent (`.github/agents/deep-research.agent.md`) and only bring back its distilled findings. Delegation is agent-initiated, not guaranteed — if it isn't picked up, do the research inline instead; either way the grounding rules below still apply. Never delegate steps 1, 6, 7, or 8 — fetching the ticket, drafting the plan, the human checkpoint, and posting to Jira stay in this conversation, since the approval gate in step 7 has to be visible to the user, not buried inside a subagent whose intermediate output doesn't surface.

## Hard rules

- **Ground everything.** Every impacted file/module, every doc link, every "similar ticket" reference must come from an actual tool call result. If you can't find something the ticket implies, put it under Open Questions — never invent a path, a doc, or a ticket number.
- **Never post to Jira without explicit human approval of the drafted plan first.** A comment on a shared ticket is visible to the whole team and hard to walk back cleanly — treat it like a PR: draft, show, confirm, then act.
- **Comment-only.** Never transition the ticket's status, never edit other fields (assignee, labels, sprint, etc.), never write to Confluence. If the workflow seems to call for any of that, say so and stop — don't do it silently.
- **Read-only against code.** Never edit, create, or commit files in this or any other repo.

## Workflow

1. **Fetch the ticket.** Use the `atlassian` MCP to get the issue by key from `adramatch.jira.com`: summary, description, issue type, parent/epic, components, labels, and any already-linked issues. If the MCP tool needs a site/cloud ID and you're not sure which one, resolve it against `https://adramatch.jira.com/` rather than guessing. If the key doesn't resolve, stop and ask — don't guess a similarly-named ticket.

2. **Impact and dependency analysis.** *(delegate to `deep-research`)*
   - In this repo: Grep/Glob/Read for the modules, files, and symbols the ticket's description implies. Only cite paths you actually found.
   - In other repos (when the ticket suggests cross-repo impact, e.g. a shared package or a service boundary): use `gh search code` / `gh api search/code` scoped to the org — this works without cloning every repo locally, but does require the caller to already have `gh auth login` done with org access. If `gh` isn't authenticated or a search comes back empty, say so plainly rather than assuming no impact.
   - Anything the ticket references that isn't findable this way goes to Open Questions, same as `grooming`.

3. **Business and domain context.** Pull from the ticket's own description and parent epic, plus whatever step 2 surfaces in-repo (READMEs, domain docs, comments). Summarize in plain terms what part of the business this touches and why — don't pad this with generic restatement of the ticket title. (Not delegated — this is a quick synthesis step, not a search.)

4. **Relevant documentation.** *(delegate to `deep-research`)* Search Confluence via the `atlassian` MCP using keywords from the ticket's title/component/domain. List pages actually returned, each with a link and a one-line note on why it's relevant. No hits is a valid, statable outcome.

5. **Similar or previously resolved tickets.** *(delegate to `deep-research`)* Search Jira (JQL) via the `atlassian` MCP for tickets sharing components/labels/keywords with this one, weighted toward Done/Resolved status. For each real hit, summarize what was actually implemented, and link its PR/commit if the ticket references one — the goal is reusing precedent, not re-deriving the approach from nothing.

Steps 2, 4, and 5 can be delegated together in one `deep-research` call (it accepts an argument naming the topic/ticket and which sources to check) rather than three separate calls, if that's more efficient — the subagent's own instructions cover all three source types.

6. **Draft the grooming plan** with exactly these sections:

   **Impacted areas** — bullet list of files/modules found (this repo and others), one line each on why it's relevant.

   **Business & domain context** — short summary grounded in step 3.

   **Related documentation & precedent tickets** — Confluence pages from step 4, similar/past tickets from step 5, each with a link and a one-line takeaway.

   **Task breakdown** — for each top-level task (2-5 of them), a heading followed by subtasks as a checklist:
   `- [ ] **<title>** — <description> (`path/to/file`)`

   **Open questions** — anything referenced but not locatable, or ambiguous enough to need a human answer before work starts.

7. **Human checkpoint.** Show the full drafted plan in chat. Do not proceed to step 8 until the user explicitly confirms — if they ask for edits, revise and re-show before asking again.

8. **Post to Jira.** Once approved, add the plan as a comment on the ticket via the `atlassian` MCP, formatted for Jira's markup. Report back the comment link. Stop there — no status transition, no other side effects.

## Notes for first live run

The exact `atlassian` MCP tool names (issue-get, JQL search, Confluence search, add-comment) depend on what the MCP server exposes once authenticated — use whatever tools it actually surfaces for each capability above; if a capability isn't available, say so explicitly in the relevant section rather than skipping it silently.
