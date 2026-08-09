# Skill runtime pattern

Adapted from walkinglabs/learn-harness-engineering (MIT) — see ../NOTICE.md. Load this when the scenario itself involves authoring a new skill in the target repo (e.g. a repo-specific SKILL.md capturing that codebase's architecture).

## Problem

Skills get bloated fast — it's tempting to cram project facts, credentials, and full reference manuals into a single SKILL.md because "it's convenient to have it all in one place." That convenience is exactly what makes the skill stale, unsafe, and unreadable within a few months.

## Golden rules

- A skill should be **reusable across situations**, not a dump for one project's facts.
- A skill's `description` is what gets it invoked — write it in situational language ("use when X"), not command language ("/do-x"). Front-load distinctive trigger phrases; vague or generic descriptions fail to auto-invoke when they should.
- Keep the SKILL.md body itself short (a router), push detail into `references/` loaded only on demand.

## When to use this pattern

Any time you're deciding what goes directly in a SKILL.md body versus what should live in a bundled `references/`, `templates/`, or `scripts/` file.

## What belongs in a skill

- Reusable workflows and domain procedures (a sequence of steps that applies across repos/situations).
- Templates and skeletons (structure, not specific content).
- Stable helper scripts (deterministic, side-effect-scoped, safe to re-run).

## What does NOT belong in a skill

- Project-specific facts (these belong in that project's own instructions file, not a shared skill — they go stale and don't generalize).
- Credentials or secrets, in any form.
- Large reference manuals inlined into the main body (move to `references/`, load on demand).
- Destructive commands without an explicit approval gate — a skill should never silently `rm`, force-push, or overwrite without the human/agent confirming first.

## Tradeoffs

| Choice | Pro | Con |
|---|---|---|
| Everything in one SKILL.md | Simple to read once | Hits the 500-line/5000-token body limit fast; drowns the router logic in detail |
| Router + on-demand references | Stays fast to scan, scales to more scenarios | Requires discipline to actually write the "load only if…" triggers, and to keep them accurate |

## Gotchas

- A reference file that's never actually loaded because the SKILL.md never tells the agent when to load it is dead weight — every `references/*.md` needs an explicit trigger condition in the skill body's index.
- Don't let "just in case" content accumulate — if a reference hasn't been loaded in practice, that's a signal to prune or fold it into a more relevant existing file, not to keep expanding the index.

## Related patterns

- `lifecycle-bootstrap-pattern.md` — for skills that need to survive across sessions.
- `gotchas.md` — item 11 (skill description triggering) is the auto-invocation failure mode this pattern exists to prevent.
