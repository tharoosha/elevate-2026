# Harness gotchas

Adapted from walkinglabs/learn-harness-engineering (MIT) — see ../NOTICE.md. Load this when auditing an existing harness or before generating one, to avoid re-introducing known failure modes.

1. **Treating a prompt file as "the harness."** A single instructions file with no state tracking, no verification, and no scope boundary is not a harness — it's a prompt. Fix: always pair instructions with at least state + verification (see `feature_list.json` / `init.sh`).
2. **Zero-privilege tool access "for security."** Disabling shell/file-edit tools entirely so the agent can't accomplish anything is not the safe option, it's the useless one. Fix: least-privilege, not zero-privilege — grant exactly what the scenario needs.
3. **Storing derivable facts in memory/instructions.** Architecture facts and code patterns copied into an instructions file go stale the moment the code changes. Fix: instructions should point at where to look, not duplicate what's there.
4. **Silent memory/index truncation.** Long-lived state files that grow unbounded eventually get silently truncated by context limits. Fix: keep entries to one-line hooks, push detail into files loaded on demand.
5. **Memoizing context without explicit invalidation.** A cached "what does this repo look like" summary that's never invalidated on mutation becomes actively misleading. Fix: invalidate on every mutation point, not on a timer.
6. **Treating tool concurrency-safety as static.** Whether a tool call is safe to run concurrently depends on the specific call/input, not the tool in the abstract. Fix: evaluate per call, not per tool.
7. **Caching permission-evaluation results.** Permission checks can have side effects and must be re-evaluated fresh on every call — caching a "yes" from an earlier check can silently authorize something that should now be denied.
8. **Assuming async work always passes through a visible "pending" state.** Don't design logic or UI around that assumption — it often doesn't happen the way you'd expect.
9. **Allowing recursive agent forks.** Sub-agents spawning sub-agents multiplies context cost exponentially and is hard to reason about. Fix: enforce a single-level fork invariant.
10. **Partial/selective hook trust.** Hook trust must be all-or-nothing per workspace. Letting one untrusted hook silently degrade to "skip only that one" instead of "skip all hooks" is a security footgun, not a convenience.
11. **Overly tight skill descriptions.** A description under ~150 characters without distinctive trigger language fails to auto-invoke when it should. Fix: front-load the situations that should trigger it, in the description itself, not just the body.
12. **Defaulting sensitive tools to "allow."** Destructive or high-blast-radius tools should default to "ask," not "allow." Require explicit approval for overwrites and irreversible actions.
13. **Cross-contaminating comparative test runs.** An agent with filesystem access will explore sibling directories. When comparing "with harness" vs "without harness" runs, isolate the directories completely or the comparison is meaningless.
14. **Forgetting to reset state between comparative runs.** If `feature_list.json`/`progress.md` still show prior-run evidence, the agent sees "already done" and has no work to do — invalidating the "before" condition. Reset state deliberately before each comparative run.
15. **Mistaking a structural harness score for proof of effectiveness.** A checklist-style audit (is there an instructions file, is there a verification script) tells you the harness is structurally present, not that it actually improves outcomes. Structural scoring is a starting hypothesis, not a substitute for real before/after testing.
