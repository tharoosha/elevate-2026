# Lifecycle bootstrap pattern

Adapted from walkinglabs/learn-harness-engineering (MIT) — see ../NOTICE.md. Load this when the scenario involves multi-session work, session resumption, or anything that needs to survive a restart — directly relevant to `session-handoff.md`.

## Problem

Long-running or multi-session agent work loses context between sessions unless something explicit carries it forward. Relying on conversation history alone fails the moment a session restarts, times out, or gets handed to a different agent/person.

## Golden rules

- Every session should be able to **bootstrap from files alone**, not from remembered conversation.
- Bootstrap order matters: read instructions → read state → read the prior handoff → verify the environment (run `init.sh`) → only then start work.
- **Hook trust is all-or-nothing per workspace.** If a workspace is untrusted, skip all lifecycle hooks — never selectively skip just the "risky-looking" ones and run the rest, since that gives a false sense of partial safety.

## When to use this pattern

Any harness where work is expected to span more than one sitting, or where a different session/agent might need to pick up mid-task.

## Implementation patterns

- **Fixed startup procedure**, stated explicitly in the instructions file (see `templates/agents.md`'s "Startup rules" section): read order, then run verification, before any other action.
- **State as the source of truth**, not conversation memory: `feature_list.json` for what's done/blocked/in-progress, `progress.md` for the current session's narrative, `session-handoff.md` for the explicit "here's what the next session needs to know."
- **Two-phase state transitions**: mark work `in-progress` before starting, `pass` only after verification actually runs — never jump straight to `pass` on self-report.
- **Dependency-ordered bootstrap**: if there are multiple setup stages, state their dependency order explicitly (this is exactly what `feature_list.json`'s `dependencies` array encodes) rather than assuming an agent will infer the right order.

## Tradeoffs

| Choice | Pro | Con |
|---|---|---|
| Explicit session-handoff.md every session | Reliable resumption, low ambiguity | Extra step at the end of every session; easy to skip under time pressure |
| Rely on progress.md alone | Less overhead | Weaker for true multi-agent handoff — no dedicated "next steps" contract |

## Bootstrap verification checklist (adapt per scenario)

- [ ] Instructions file exists and is current (no stale TODOs left unresolved).
- [ ] `feature_list.json` validates against its schema.
- [ ] `init.sh` runs clean on an untouched checkout.
- [ ] `session-handoff.md`, if present, has a concrete "Recommended next step" — not a placeholder.
- [ ] No hook in the lifecycle chain silently no-ops in an untrusted workspace without saying so.

## Gotchas

- See `gotchas.md` items 10 (partial hook trust) and 14 (forgetting to reset state between runs) — both are lifecycle-bootstrap failures specifically.

## Related patterns

- `skill-runtime-pattern.md` — if the bootstrap itself needs to be packaged as a reusable skill rather than a one-off script.
