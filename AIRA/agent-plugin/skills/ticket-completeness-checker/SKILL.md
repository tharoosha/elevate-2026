---
name: ticket-completeness-checker
description: Use when a Jira ticket needs a read-only completeness audit before grooming or implementation; checks requirement coverage, missing acceptance criteria, dependency gaps, and regression-risk blind spots.
argument-hint: <jira ticket key or pasted requirement>
---

# Ticket Completeness Checker

Run a read-only completeness check before implementation planning.

## Workflow

1. Gather requirement text and acceptance criteria.
2. Cross-check existing subtasks and planned tasks.
3. Highlight missing requirement elements.
4. Propose additions with rationale and risk level.

## Output format

**Coverage summary** - what is already covered.

**Missing items** - what should be added before implementation.

**Risk notes** - likely regression risks if missing items are ignored.
