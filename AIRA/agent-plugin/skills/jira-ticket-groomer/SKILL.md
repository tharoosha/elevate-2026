---
name: jira-ticket-groomer
description: Use when someone gives a live Jira ticket key and wants it groomed - review existing subtasks (done/open), investigate codebase impact/dependencies (including other repos), business/domain context, related documentation, and related historical tickets/bugs (tagged and untagged), then iteratively produce a grooming plan and post it back to the ticket as a comment only after explicit approval. For a pasted epic with no tracker connection or write-back, use the grooming skill instead.
argument-hint: <jira ticket key, e.g. TDP-42>
---

# Jira Ticket Groomer

Given a live Jira ticket key, this skill produces the same grounded, no-guessing task breakdown that the `grooming` skill produces for a pasted epic - but sourced from the real ticket, enriched with codebase impact analysis, business/domain context, related documentation, and precedent from similar or previously resolved tickets/bugs (both tagged and untagged) - and, once approved, posts the result back to the ticket.

**Jira site:** `https://adramatch.jira.com/` - all ticket keys, JQL searches, and Confluence lookups below are scoped to this site.

**Delegate by specialization.** Use subagents to keep this conversation concise while preserving grounded evidence:
- `subtask-state-auditor` (`agents/subtask-state-auditor.agent.md`) for subtask Done/Not Done and coverage gaps.
- `scope-impact-mapper` (`agents/scope-impact-mapper.agent.md`) for code and cross-repo impact mapping.
- `deep-research` (`agents/deep-research.agent.md`) for Jira/Confluence precedent and multi-source investigation.
- `requirement-gap-checker` (`agents/requirement-gap-checker.agent.md`) for missing requirement additions.
- `plan-quality-reviewer` (`agents/plan-quality-reviewer.agent.md`) for final quality review before posting.
- `graph-flow-generator` (`agents/graph-flow-generator.agent.md`) for optional user flows and Mermaid diagrams.

Delegation is agent-initiated, not guaranteed. If delegation is not available, do the same work inline and keep all grounding rules.

## Hard rules

- **Ground everything.** Every impacted file/module, every doc link, every "similar ticket" reference must come from an actual tool call result. If you can't find something the ticket implies, put it under Open Questions - never invent a path, a doc, or a ticket number.
- **Never post to Jira without explicit human approval of the drafted plan first.** A comment on a shared ticket is visible to the whole team and hard to walk back cleanly - treat it like a PR: draft, show, confirm, then act.
- **Comment-only.** Never transition the ticket's status, never edit other fields (assignee, labels, sprint, etc.), never write to Confluence. If the workflow seems to call for any of that, say so and stop - don't do it silently.
- **Read-only against code.** Never edit, create, or commit files in this or any other repo.

## Workflow

1. **Fetch the ticket and subtask state.** Use the `atlassian` MCP to get the issue by key from `adramatch.jira.com`: summary, description, issue type, parent/epic, components, labels, and any already-linked issues, including subtasks. Run `subtask-state-auditor` on the result to build a subtask status snapshot grouped into Done and Not Done, and include it in the final draft under context. If the MCP tool needs a site/cloud ID and you're not sure which one, resolve it against `https://adramatch.jira.com/` rather than guessing. If the key doesn't resolve, stop and ask - don't guess a similarly-named ticket.

2. **Impact and dependency analysis.** *(delegate to `scope-impact-mapper`)*
   - In this repo: Grep/Glob/Read for the modules, files, and symbols the ticket's description implies. Only cite paths you actually found.
   - In other repos (when the ticket suggests cross-repo impact, e.g. a shared package or a service boundary): use `gh search code` / `gh api search/code` scoped to the org - this works without cloning every repo locally, but does require the caller to already have `gh auth login` done with org access. If `gh` isn't authenticated or a search comes back empty, say so plainly rather than assuming no impact.
   - Anything the ticket references that isn't findable this way goes to Open Questions, same as `grooming`.

3. **Business and domain context.** Pull from the ticket's own description and parent epic, plus whatever step 2 surfaces in-repo (READMEs, domain docs, comments). Also consult the `domain-knowledge-graph` skill for the ticket's key topic/feature terms to ground the explanation in the shipped Adra documentation corpus rather than guessing. Summarize in plain terms what part of the business this touches and why - don't pad this with generic restatement of the ticket title.

4. **Relevant documentation.** *(delegate to `deep-research`)* Search Confluence via the `atlassian` MCP using keywords from the ticket's title/component/domain. List pages actually returned, each with a link and a one-line note on why it's relevant. No hits is a valid, statable outcome.

5. **Similar or previously resolved tickets and bugs.** *(delegate to `deep-research`)* Search Jira (JQL) via the `atlassian` MCP in two buckets:
   - **Tagged matches:** issues/bugs sharing labels, components, fix versions, or explicit links with this ticket, weighted toward Done/Resolved status.
   - **Untagged matches:** issues/bugs that do not share labels/components but match by title/description keywords, duplicate language, stack traces, affected module names, or acceptance-criteria semantics.
   For each real hit, summarize what was actually implemented, and link its PR/commit if the ticket references one - the goal is reusing precedent, not re-deriving the approach from nothing.

Steps 2, 4, and 5 can be delegated together in one `deep-research` call (it accepts an argument naming the topic/ticket and which sources to check) rather than three separate calls, if that's more efficient - the subagent's own instructions cover all three source types.

6. **Missing-requirement check and additions.** Delegate to `requirement-gap-checker` using outputs from steps 1-5. Identify what is missing in the current ticket requirement and draft a clear "Suggested additions" list (scope clarifications, missing acceptance criteria, dependency tasks, validation tasks, and bug-regression prevention tasks learned from precedent).

7. **Human checkpoint for additions.** Show the draft plan plus "Suggested additions" in chat and ask if these additions should be included. If the user says yes, incorporate them into the task breakdown and regenerate the plan. If the user asks for edits, revise and re-show. Repeat until the user confirms the plan is final.

8. **Draft the grooming plan** with exactly these sections:

   **Impacted areas** - bullet list of files/modules found (this repo and others), one line each on why it's relevant.

   **Business & domain context** - short summary grounded in step 3.

   **Current subtask status** - grouped list of existing subtasks under Done and Not Done.

   **Related documentation & precedent tickets/bugs** - Confluence pages from step 4, and ticket/bug hits from step 5 split into Tagged matches and Untagged matches, each with a link and a one-line takeaway.

   **Suggested additions** - specific requirement/task additions proposed from the gap check.

   **Task breakdown** - for each top-level task (2-5 of them), a heading followed by subtasks as a checklist:
   `- [ ] **<title>** - <description> (`path/to/file`)`

   **Open questions** - anything referenced but not locatable, or ambiguous enough to need a human answer before work starts.

   After drafting, run `plan-quality-reviewer` and incorporate high-confidence fixes before presenting to the user.

9. **Optional visualization checkpoint.** Ask the user if they want user flows or diagrams (for example: user flow, sequence diagram, component diagram, state flow). If yes, delegate to `graph-flow-generator` and include the generated Mermaid diagrams in the response.

   If no, continue without diagrams.

10. **Human checkpoint before Jira write.** Show the full drafted plan in chat (plus optional diagrams if requested). Do not proceed to step 11 until the user explicitly confirms - if they ask for edits, revise and re-show before asking again. For unambiguous approval, ask for this exact confirmation phrase: `APPROVE_JIRA_COMMENT <TICKET-KEY>`.

11. **Post to Jira.** Once approved, add the plan as a comment on the ticket via the `atlassian` MCP, formatted for Jira's markup. Report back the comment link. Stop there - no status transition, no other side effects.

## Notes for first live run

The exact `atlassian` MCP tool names (issue-get, JQL search, Confluence search, add-comment) depend on what the MCP server exposes once authenticated - use whatever tools it actually surfaces for each capability above; if a capability isn't available, say so explicitly in the relevant section rather than skipping it silently.
