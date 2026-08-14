---
name: bug-rca-analyzer
description: Use when someone gives a live Jira bug key (or asks "why did TDP-99 happen", "RCA for TDP-99", "root cause of TDP-99") and wants a grounded root cause analysis with an evidence-cited 5-Whys chain, prevention actions, and regression tests - then posts the analysis back to the ticket as a comment only after explicit approval. Not for feature/story tickets - use `jira-ticket-groomer` for those.
argument-hint: <jira bug key, e.g. TDP-99>
---

# Bug RCA Analyzer

Given a live Jira bug key, this skill produces an evidence-grounded root cause analysis: an iterative 5-Whys chain where every step cites a real artifact (commit, prior ticket, log line, doc), a candidate root cause, prevention actions, and regression-test suggestions - and, once approved, posts the result back to the ticket as a comment.

**Relationship to `jira-ticket-groomer`:** grooming plans forward work from a requirement. This skill investigates backward from a symptom. Grooming produces a task breakdown; RCA produces a causal chain. If the ticket is a feature/story, stop and use `jira-ticket-groomer` instead. If it is a bug that also needs task planning after the RCA, run this skill first and hand its output to `jira-ticket-groomer` afterwards.

**Jira site:** `https://adramatch.jira.com/` - all ticket keys, JQL searches, and Confluence lookups below are scoped to this site.

**Delegate by specialization.** This skill is a coordinator - the heavy lifting lives in subagents so the main conversation stays clean:
- `rca-investigator` (`agents/rca-investigator.agent.md`) for the whole evidence-gathering phase - it internally coordinates `scope-impact-mapper`, `deep-research`, the `domain-knowledge-graph` skill, and git/`gh` history, then returns one distilled evidence pack.
- `five-whys-reasoner` (`agents/five-whys-reasoner.agent.md`) for the causal reasoning phase - it takes the evidence pack and produces the 5-Whys chain, candidate root cause, prevention actions, and regression tests. It cannot search or fetch new evidence, only reason over the pack.
- `plan-quality-reviewer` (`agents/plan-quality-reviewer.agent.md`) for a final quality pass on the drafted RCA before posting.

Delegation is agent-initiated, not guaranteed. If a delegation is not available, do the same work inline against the same rules - never lower the grounding bar to compensate.

## Classifications

Two fixed enums drive this workflow. Every RCA must land on exactly one value from each. If a required value is missing or unclear, stop and ask the human rather than guessing.

**Bug type** (read from the Jira ticket field, decided at intake):
- **Regression bug** - the feature previously worked and has started failing.
- **Feature bug** - the bug is in a newly-shipped feature that never worked correctly.
- **Existing bug** - already reported/known elsewhere in Jira; this ticket may be a duplicate.
- **Production bug** - reported from a production environment, typically with runtime error IDs or customer impact.

**Root cause category** (chosen by the reasoner from the terminal step's evidence at the end of the 5-Whys):
- **Code error** - the code as written does not implement the intended behavior correctly.
- **Configuration error** - code is correct but was run/deployed with wrong config.
- **Data error** - code and config are correct; input data was malformed or unexpected.
- **Design error** - behavior is as designed, but the design itself is wrong for the requirement.
- **Existing Bug** - root cause is a prior known defect elsewhere that this ticket newly surfaces (distinct from bug type "Existing bug", which is about whether the report is a duplicate).
- **Requirement error** - requirements were ambiguous, missing, or contradictory; code matched the ambiguous spec.
- **Test error** - the bug exists because a test was missing, wrong, or disabled.
- **Dependency issue** - root cause is in a third-party library, upstream service, platform, or hardware.

Exactly one root cause category per RCA. If two look plausible, pick the more specific/actionable one and record the ambiguity under Open Questions.

## Hard rules

- **Ground every causal claim.** Every "why" step, every candidate cause, every prevention action must be tied to at least one real artifact returned by a tool call: a commit SHA, PR number, ticket key, log line, doc path, or code path. No citation - move it to Open Questions and stop the chain there.
- **No fabricated artifacts.** Never invent a commit hash, PR number, ticket key, log line, file path, or documentation link. If `gh` is not authenticated, an MCP tool is unavailable, or a search returns empty, say so plainly rather than filling the gap.
- **Distinguish trigger from root cause.** The commit that surfaced the bug is often not the root cause. When both apply, name both explicitly and label each.
- **Evidence-gated 5-Whys.** At each step, list 2-4 candidate causes with evidence for each, pick the most-supported as the next effect, and record the pruned candidates as "considered and ruled out because ...". If no candidate has evidence, stop and mark the chain as inconclusive at that depth.
- **Explicit stop conditions.** Stop when (a) depth reaches 5, (b) the current cause is outside the team's control (upstream vendor, third-party service, hardware), (c) it is a policy/process gap rather than a code defect, or (d) it is already documented as a known limitation. Always report the depth reached and why it stopped.
- **Never post to Jira without explicit human approval of the drafted RCA first.** A comment on a shared bug ticket is visible to the whole team and hard to walk back cleanly - treat it like a PR: draft, show, confirm, then act.
- **Comment-only.** Never transition the ticket's status, never edit other fields (assignee, labels, priority, sprint), never file new tickets, never write to Confluence. If the workflow seems to call for any of that, say so and stop - do not do it silently.
- **Read-only against code.** Never edit, create, or commit files in this or any other repo. RCA proposes prevention actions; a human or a separate skill implements them.
- **One RCA per invocation.** Do not silently start analyzing linked or similar tickets. Reference them as evidence, do not chain into full RCAs for them.

## Workflow

1. **Confirm it is a bug and fetch context.** Use the `atlassian` MCP to fetch the issue from `adramatch.jira.com`: summary, description, `issuetype`, the **bug type** field (already selected on the ticket at creation), priority, components, labels, affected/fix versions, reporter, all comments, and any linked issues. If `issuetype` is not `Bug` (or the label/component set does not indicate a defect), stop and suggest `jira-ticket-groomer` instead. If the key does not resolve, stop and ask - do not guess a similarly-named ticket. Validate the bug type value against the enum in the **Classifications** section: if missing, unset, or not one of the four allowed values, stop and ask the user which one to use rather than inferring one from ticket signals.

2. **Extract the symptom and reproduction signal.** From the description and comments, pull out: the observable symptom in one sentence, any stack trace or error message verbatim, steps to reproduce if stated, affected environment, first-seen timestamp if given, and user impact scope if stated. Anything the ticket implies but does not state goes to Open Questions. This is the input the investigator needs.

3. **Delegate evidence gathering to `rca-investigator`.** Hand off the ticket key, the bug type from step 1, the symptom, and any stack trace or error message from step 2. The investigator weights its searches by bug type (regression -> change history first; feature -> implementing PR + spec; existing -> precedent search first; production -> environment + first-seen + runtime signals) and internally coordinates code area mapping, change history, expected-behavior lookup, and precedent search, then returns a single evidence pack in the shape defined by `agents/rca-investigator.agent.md`. Do not run those source-specific searches yourself in the main conversation - if delegation is unavailable, do them inline against the same rules and produce the same pack shape.

4. **Sanity-check the evidence pack.** Confirm the pack has non-empty sections where the ticket suggests findings should exist, and note "not found" entries as-is - they are valid outcomes, not gaps to fill in. Do not add artifacts to the pack from outside the investigator's output. The pack, from here on, is the sole evidence the reasoner is allowed to cite.

5. **Delegate causal reasoning to `five-whys-reasoner`.** Hand off the evidence pack verbatim. The reasoner returns the 5-Whys chain (with candidates, pruning, stop reason), the candidate root cause (with trigger vs root cause labeling if applicable), prevention actions, and regression tests, in the shape defined by `agents/five-whys-reasoner.agent.md`. It does not search or fetch new evidence - that isolation is deliberate. If delegation is unavailable, run the same procedure inline over the pack and against the same stop conditions.

6. **Draft the RCA** with exactly these sections:

   **Symptom** - one sentence from step 2, plus verbatim stack trace or error message if any.

   **Bug type** - one label from the bug-type enum, sourced from the Jira ticket field in step 1.

   **Reproduction and environment** - steps, environment, first-seen timestamp, impact scope. Missing items go to Open Questions.

   **Affected code area** - from the investigator's pack, one line each on why it is relevant.

   **Expected behavior** - from the investigator's pack, citing the specific help article(s).

   **Change history** - from the investigator's pack, each with a one-line note. State plainly if tooling was unavailable.

   **Precedent bugs and postmortems** - from the investigator's pack, split into Tagged matches and Untagged matches, each with a link and a one-line takeaway on the actual fix.

   **5-Whys chain** - the reasoner's chain verbatim, showing at each step the effect, the candidate causes with their evidence citations, the picked cause, and the pruned candidates with rule-out reasons. End with the depth reached and stop reason.

   **Candidate root cause** - from the reasoner's output. Label trigger vs root cause if both apply.

   **Root cause category** - exactly one label from the root-cause-category enum, chosen by the reasoner from the terminal step's evidence, with a one-line justification citing that evidence.

   **Prevention actions** - the reasoner's checklist, each `- [ ] <action> - <rationale> (<citation>)`.

   **Regression tests to add** - the reasoner's checklist, each `- [ ] <test description> - covers <cause> (<file path>)`.

   **Open questions** - the union of the investigator's **Not found** section and the reasoner's **Reasoning gaps** section, plus anything the ticket implies but does not state. Empty evidence in any section is a valid, statable outcome and belongs here.

   After drafting, run `plan-quality-reviewer` and incorporate high-confidence fixes before presenting to the user.

7. **Human checkpoint before Jira write.** Show the full drafted RCA in chat. Do not proceed to step 8 until the user explicitly confirms - if they ask for edits, revise and re-show before asking again. For unambiguous approval, ask for this exact confirmation phrase: `APPROVE_JIRA_COMMENT <TICKET-KEY>`.

8. **Post to Jira.** Once approved, add the RCA as a comment on the ticket via the `atlassian` MCP, formatted for Jira's markup. Report back the comment link. Stop there - no status transition, no priority change, no new tickets, no other side effects.

## Output format

See step 6 for the exact section order and headings the drafted RCA must use. Every bullet in every section either carries a citation from the investigator's pack (or the reasoner's chain over that pack) or lives under **Open questions** - there is no third category.

## Notes for first live run

- The exact `atlassian` MCP tool names (issue-get, JQL search, Confluence search, add-comment) depend on what the MCP server exposes once authenticated - use whatever tools it actually surfaces for each capability above; if a capability isn't available, say so explicitly in the relevant section rather than skipping it silently.
- If git or `gh` tooling is not available in the current environment, the Change history section should state that plainly and continue - do not invent commit hashes to fill the gap.
- Runtime error data (Sentry/Datadog/Azure Monitor) is not currently wired via MCP. If the ticket references dashboards or error IDs from those systems, list them under Open Questions rather than pretending they were queried.
- The 5-Whys chain is a reasoning tool, not a completeness proof. If evidence runs out at depth 2, stopping at depth 2 with a clear reason is a better outcome than fabricating depth 5.
