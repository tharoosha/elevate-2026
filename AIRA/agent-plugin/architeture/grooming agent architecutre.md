# Jira Grooming Architecture

This document describes the end-to-end architecture and control flow for the iterative Jira grooming workflow in this plugin.

Sibling doc: [bug-rca-architecture.md](./bug-rca-architecture.md) covers the backward-reasoning bug RCA workflow.

## Scope

The workflow starts from a Jira ticket key, performs multi-source analysis with specialized subagents, iterates with user feedback on missing requirements, and posts a Jira comment only after explicit approval.

## Entry Points

- Skill: `jira-ticket-groomer <KEY>`
- Slash command: `/jira-groom-iterative <KEY>`

## High-Level Flow

```mermaid
flowchart TD
    A[User provides Jira key] --> B[Orchestrator: jira-ticket-groomer]
    B --> C[Fetch ticket, parent context, and subtasks]
    C --> D[Subtask State Auditor: Done vs Not Done and coverage gaps]

    D --> E1[Scope Impact Mapper: repo and cross-repo impact]
    D --> E2[Deep Research: Confluence and Jira precedent]

    E2 --> F1[Tagged matches: labels/components/fix versions/links]
    E2 --> F2[Untagged matches: semantic symptom/module similarity]

    E1 --> G[Requirement Gap Checker]
    F1 --> G
    F2 --> G

    G --> H[Draft grooming plan]
    H --> I[Plan Quality Reviewer]
    I --> J[Show plan and suggested additions to user]

    J --> K{User requests changes?}
    K -->|Yes| L[Revise and regenerate]
    L --> H
    K -->|No| V{Need user flows or diagrams?}

    V -->|Yes| W[Delegate to graph-flow-generator]
    W --> X[Generate Mermaid user flows and diagrams]
    X --> M[Ask explicit approval phrase]
    V -->|No| M[Ask explicit approval phrase]

    M --> N{Approval present?}
    N -->|No| O[Hook guard blocks or asks]
    O --> M
    N -->|Yes| P[Post one Jira comment]
    P --> Q[Return comment link and summary]
```

## Component Graph

```mermaid
flowchart LR
    U[User] --> CMD[jira-groom-iterative prompt]
    U --> SKILL[jira-ticket-groomer skill]

    CMD --> SKILL

    SKILL --> SA[subtask-state-auditor]
    SKILL --> SM[scope-impact-mapper]
    SKILL --> DR[deep-research]
    SKILL --> RG[requirement-gap-checker]
    SKILL --> PQ[plan-quality-reviewer]
    SKILL --> GF[graph-flow-generator]

    SKILL --> HOOK[PreToolUse hook guard]
    HOOK -->|approval missing| BLOCK[deny or ask for approval]
    HOOK -->|approval present| WRITE[allow Jira comment write]
```

## Control Gates

1. Iteration gate
- The orchestrator keeps refining the plan until the user confirms the drafted content is final.

2. Write gate
- Jira writes are guarded by hooks and require explicit approval phrase:
- `APPROVE_JIRA_COMMENT <TICKET-KEY>`

3. Single-side-effect rule
- Only one final Jira comment is posted after final approval.

## Data Sources

- Jira ticket details and subtasks
- Jira historical bugs/tickets in two groups:
  - Tagged matches
  - Untagged matches
- Confluence documentation
- Local and cross-repo code signals

## Output Contract

The final plan should include:

- Impacted areas
- Business and domain context
- Current subtask status (Done vs Not Done)
- Related documentation and precedent (tagged and untagged)
- Suggested additions
- Task breakdown
- Open questions

If requested by the user, also include:

- User flows (Mermaid)
- Technical diagrams such as sequence/component/state flow (Mermaid)

## Safety and Governance

- Subagents are read-only.
- The workflow does not transition status or mutate other Jira fields.
- Posting is restricted to a final approved comment.
