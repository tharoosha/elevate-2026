---
description: Scaffold agent harness artifacts (instructions file, state tracking, verification script, session handoff) into the current repo for a given scenario.
input:
  - scenario: "What you want harnessed, e.g. 'set up testing infrastructure', 'onboarding for this repo', 'a specific module'."
  - target: "Optional: claude, copilot, or cursor — controls the generated instructions file format (CLAUDE.md vs AGENTS.md). Defaults to copilot if left blank."
allowed-tools: [Read, Grep, Glob, Write, Bash]
argument-hint: <scenario> [target: claude|copilot|cursor]
---

# Harness Creator: ${input:scenario}

Target: ${input:target}. If that's blank, treat it as `copilot` — that is the deliberate default, not a missing value to ask about.

This is the explicit, deliberate-activation entry point for the `harness-creator` skill bundled in this package. Locate and follow it exactly:

1. If a native skill-invocation mechanism is available in this client, invoke the `harness-creator` skill directly with `scenario=${input:scenario}` and `target=${input:target}`.
2. Otherwise, find and read its `SKILL.md` — depending on which client compiled this command, it will be installed at one of: `.claude/skills/harness-creator/SKILL.md`, `.agents/skills/harness-creator/SKILL.md`. Read whichever exists, then follow its workflow exactly, using `scenario=${input:scenario}` and `target=${input:target}` as the inputs it expects.

Do not improvise a different workflow — SKILL.md defines the audit-first, minimal-scope, ask-before-overwrite process this command must follow, including the target contract (which file format to generate) and the `.agent/` output-location rules. This command exists so `/harness-creator` works as an explicit, typed action, in addition to the skill's own auto-trigger-by-description behavior — both activation paths are intentional.
