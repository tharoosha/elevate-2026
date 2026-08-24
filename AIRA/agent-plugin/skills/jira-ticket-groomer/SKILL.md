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

1. **Fetch the ticket, subtask state, and classify the template.** Use the `atlassian` MCP to get the issue by key from `adramatch.jira.com`: summary, description, issue type, parent/epic, components, labels, and any already-linked issues, including subtasks. Run `subtask-state-auditor` on the result to build a subtask status snapshot grouped into Done and Not Done - existing subtasks feed into step 8/10 so new suggestions don't duplicate covered ground. Classify the ticket's `issue type` into one of two output templates:
   - **Bug template** - issue type is Bug/Defect.
   - **Story/Improvement/Epic template** - issue type is Story, Task, Improvement, Epic, or anything else non-bug.
   If the MCP tool needs a site/cloud ID and you're not sure which one, resolve it against `https://adramatch.jira.com/` rather than guessing. If the key doesn't resolve, stop and ask - don't guess a similarly-named ticket.

2. **Impact and dependency analysis.** *(delegate to `scope-impact-mapper`)*
   - In this repo: Grep/Glob/Read for the modules, files, and symbols the ticket's description implies. Only cite paths you actually found.
   - In other repos (when the ticket suggests cross-repo impact, e.g. a shared package or a service boundary): use `gh search code` / `gh api search/code` scoped to the org - this works without cloning every repo locally, but does require the caller to already have `gh auth login` done with org access. If `gh` isn't authenticated or a search comes back empty, say so plainly rather than assuming no impact.
   - Anything the ticket references that isn't findable this way goes to Open Questions, same as `grooming`.
   - For a **Bug**, also resolve a human-readable feature/module name for each impacted path - check for a nearby README or docs `.md` file describing that module and use its title/heading rather than just the raw path, so "Impact" reads as a feature name, not only a file list.

3. **Business and domain context (Story/Improvement/Epic) or bug summary (Bug).** Pull from the ticket's own description and parent epic, plus whatever step 2 surfaces in-repo (READMEs, domain docs, comments). Summarize in plain terms what part of the business this touches and why - don't pad this with generic restatement of the ticket title. (Not delegated - this is a quick synthesis step, not a search.)

4. **Relevant documentation.** *(delegate to `deep-research`)* Search Confluence via the `atlassian` MCP using keywords from the ticket's title/component/domain. List pages actually returned, each with a link and a one-line note on why it's relevant. No hits is a valid, statable outcome.

5. **Similar or previously resolved tickets and bugs.** *(delegate to `deep-research`)* Search Jira (JQL) via the `atlassian` MCP in two buckets:
   - **Tagged matches:** issues/bugs sharing labels, components, fix versions, or explicit links with this ticket, weighted toward Done/Resolved status.
   - **Untagged matches:** issues/bugs that do not share labels/components but match by title/description keywords, duplicate language, stack traces, affected module names, or acceptance-criteria semantics.
   For each real hit, summarize what was actually implemented, and link its PR/commit if the ticket references one - the goal is reusing precedent, not re-deriving the approach from nothing.
   For a **Bug**, lead with Tagged matches (same label/component - this is the primary signal for "Similar History") and treat Untagged matches as secondary; for each hit, note what the root cause turned out to be and how it was fixed, not just what was implemented.

Steps 2, 4, and 5 can be delegated together in one `deep-research` call (it accepts an argument naming the topic/ticket and which sources to check) rather than three separate calls, if that's more efficient - the subagent's own instructions cover all three source types.

6. **Recent changes (Bug only).** Not delegated - inline in this conversation. For the files/modules identified in step 2, check recent history (for example `git log` on those paths, or recent PRs/releases if visible via `gh`) for changes that could plausibly have introduced the bug. If git/gh history isn't accessible from here, say so plainly rather than guessing a cause. Skip this step entirely for Story/Improvement/Epic tickets.

7. **Possible cause (Bug only).** Not delegated - a synthesis step, not a search. Using evidence from steps 2, 3, 5, and 6 only, state a suspected root cause, the specific evidence that points to it, and a confidence level (High/Medium/Low). If the evidence is too thin to point anywhere, say the cause is undetermined with Low confidence rather than inventing one. Skip this step entirely for Story/Improvement/Epic tickets.

8. **Missing-requirement / recommended-action check.** Delegate to `requirement-gap-checker` using outputs from steps 1-7. For a Story/Improvement/Epic, identify missing functional/non-functional requirements, business rules, and acceptance criteria. For a Bug, identify missing validation/regression-prevention tasks and any follow-up needed to confirm the root cause from step 7. These findings get folded directly into the template's own sections in step 10 - there is no separate "Suggested additions" section.

9. **Human checkpoint for additions.** Show the draft plan plus what step 8 found in chat and ask if these additions should be included. If the user says yes, incorporate them into the relevant section and regenerate the plan. If the user asks for edits, revise and re-show. Repeat until the user confirms the plan is final.

10. **Draft the grooming plan** using the template that matches the classification from step 1.

   ### Story/Improvement/Epic template

   ```
   
   AIRA — Story/Improvement/Epic Insights
   ──────────

   1. UNDERSTANDING (Business goal)

   ──────────
   2. REQUIREMENTS (Functional/Non-functional requirements, Business rules)

   ──────────
   3. ACCEPTANCE CRITERIA

   ──────────
   4. IMPACT & DEPENDENCIES (Impacted modules, Dependencies, Related features)

   ──────────
   5. KNOWLEDGE (Relevant documentation, Similar tasks / features, Existing implementations)

   ──────────
   6. IMPLEMENTATION CHECKLIST (Development, UX / Design, QA / Testing)

   ──────────
   7. OPEN QUESTIONS (Decisions required before development)
   ```

   Fill each line from: ① step 3; ② the ticket's own acceptance criteria plus step 8's missing-requirement findings; ③ step 2 (impacted modules/dependencies) plus step 5 (related features found as precedent); ④ step 4 (documentation) and step 5 (similar tasks/features, existing implementations); ⑤ the task breakdown split into Development / UX / QA buckets instead of arbitrary top-level tasks, as a checklist: `- [ ] **<title>** - <description> (`path/to/file`)`; ⑥ anything referenced but not locatable, or ambiguous enough to need a human answer, plus unresolved items from step 9.

   ### Bug template

   ```
   AIRA — Bug Insights
   ──────────

   ① BUG SUMMARY

   ② IMPACT (Affected feature / module, Related files, Severity / business impact)

   ③ SIMILAR HISTORY (Similar bugs, Previous incidents, Previous root causes / fixes)

   ④ RECENT CHANGES (Related releases, Recent code / configuration changes)

   ⑤ POSSIBLE CAUSE (Suspected root cause, Evidence, Confidence)

   ⑥ RECOMMENDED ACTION (Task breakdown)

   ⑦ MISSING INFORMATION
   ```

   Fill each line from: ① step 3; ② step 2 (feature/module names resolved from docs, related file paths, and a severity/business-impact judgment grounded in the ticket + step 3); ③ step 5 (Tagged matches first, then Untagged); ④ step 6; ⑤ step 7, verbatim (suspected cause, evidence, confidence); ⑥ the task breakdown as a checklist: `- [ ] **<title>** - <description> (`path/to/file`)`, including any validation/regression-prevention tasks from step 8; ⑦ anything referenced but not locatable, or ambiguous enough to need a human answer, plus unresolved items from step 9.

   After drafting, run `plan-quality-reviewer` and incorporate high-confidence fixes before presenting to the user.

11. **Optional visualization checkpoint.** Ask the user if they want user flows or diagrams (for example: user flow, sequence diagram, component diagram, state flow). If yes, delegate to `graph-flow-generator` and include the generated Mermaid diagrams in the response.

   If no, continue without diagrams.

12. **Human checkpoint before Jira write.** Show the full drafted plan in chat (plus optional diagrams if requested). Do not proceed to step 13 until the user explicitly confirms - if they ask for edits, revise and re-show before asking again. For unambiguous approval, ask for this exact confirmation phrase: `APPROVE_JIRA_COMMENT <TICKET-KEY>`.

13. **Post to Jira.** Once approved, add the plan as a comment on the ticket via the `atlassian` MCP, formatted for Jira's markup (translate the boxed template into Jira markup headings, not literal box-drawing characters). Report back the comment link. Stop there - no status transition, no other side effects.

## Notes for first live run

The exact `atlassian` MCP tool names (issue-get, JQL search, Confluence search, add-comment) depend on what the MCP server exposes once authenticated - use whatever tools it actually surfaces for each capability above; if a capability isn't available, say so explicitly in the relevant section rather than skipping it silently.
