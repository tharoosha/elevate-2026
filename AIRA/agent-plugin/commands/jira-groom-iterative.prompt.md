---
name: jira-groom-iterative
description: Run iterative Jira ticket grooming with subtask status, parallel deep research, tagged and untagged bug/ticket precedent checks, missing-requirement detection, and final Jira-comment approval gate.
argument-hint: <jira ticket key, e.g. TDP-42>
agent: agent
---

Run the `jira-ticket-groomer` skill for the provided Jira ticket key.

Execution requirements:

1. Fetch ticket details and existing subtasks, and report Done vs Not Done.
2. Delegate deep investigation where applicable.
3. Include related ticket and bug precedent in two groups:
   - Tagged matches (labels/components/fix versions/explicit links)
   - Untagged matches (semantic keyword/symptom/module similarity)
4. Propose missing requirement additions and ask for user confirmation to include them.
5. Iterate until user confirms the plan is final.
6. Before posting to Jira, ask for explicit final approval in this exact form:
   `APPROVE_JIRA_COMMENT <TICKET-KEY>`
7. Only after that approval, post one Jira comment and return the comment link.
