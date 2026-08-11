# adra-agent-plugin

GitHub Copilot agent skills for the Adra product suite (Balancer, Matcher, TaskManager) - grooming, code review, and more to come.

This folder is now structured as an Agent Plugins 1.0 package so it can be distributed and installed as a plugin in VS Code.

## What's here

```
plugin.json       Plugin manifest (name, description, version)
skills/           Agent skills - each <name>/SKILL.md is auto-discovered by Copilot
agents/           Subagents - each <name>.agent.md can be delegated to for focused work
mcp.json          MCP servers this plugin depends on (Jira/Confluence, Azure DevOps)
commands/         Slash commands (`*.prompt.md`) for one-shot workflow entry
hooks.json        Plugin hook configuration
scripts/          Hook scripts and automation helpers
```

Skills (not prompt files) are used deliberately: prompt files are VS Code-editor-only and manual-invoke-only, while skills are an open standard that also works with the Copilot CLI and cloud/agent-host agents, and can auto-trigger from their `description` without anyone typing `/name`.

## Using it

1. Open this repo (or a repo it's been copied into — see Distribution below) in VS Code with GitHub Copilot Chat (or use the Copilot CLI / cloud agent — skills work across all of them).
2. On first use of a skill that touches Jira/Confluence or Azure DevOps, you'll be prompted to authenticate against the relevant MCP server — sign in with your own Atlassian / Microsoft account. Access then follows your existing permissions; nothing is shared across users.
3. Use a skill either by asking naturally (e.g. "work on jira ticket TDP-42" — Copilot matches it by description) or explicitly via `/<name>`:
   - `grooming` — paste an epic/ticket, get a task/subtask breakdown grounded in this codebase. Fully local and read-only; nothing is filed anywhere.
   - `jira-ticket-groomer <KEY>` — give a live Jira ticket key; it investigates codebase impact (including other repos via `gh search code`), business/domain context, related Confluence docs, and similar/past tickets, drafts a grooming plan, and — only after you approve it — posts that plan as a comment on the ticket. The investigation itself (impact analysis, docs, precedent tickets) is delegated to the `deep-research` subagent so the main conversation only sees the distilled findings, not the full search trail; drafting the plan, the approval step, and posting to Jira always happen in the main conversation.
   - `ticket-completeness-checker <KEY or text>` — run a read-only requirement completeness audit before grooming or implementation.
4. Use slash command `/jira-groom-iterative <KEY>` to run the full iterative workflow in one entry point.

## Jira site

`https://adramatch.jira.com/` — the `atlassian` MCP server is scoped to this site; ticket keys and JQL searches in `jira-ticket-groomer` assume it.

## MCP servers

Declared in `mcp.json`:

| Server | Purpose | Auth |
|---|---|---|
| `atlassian` | Jira + Confluence at `adramatch.jira.com` | Per-user OAuth 2.1, first use |
| `azure-devops` | Azure DevOps org `adramatch` (work items, repos) | Per-user Microsoft login, first use. Requires Node.js 20+ locally (runs via `npx @azure-devops/mcp`). |

## Hooks and write guard

- `hooks.json` enables a Jira write guard on `PreToolUse`.
- Jira write actions are gated until chat contains the explicit approval phrase:
   `APPROVE_JIRA_COMMENT <TICKET-KEY>`
- This prevents accidental Jira writes before final user approval.

## Adding a new skill

Create `skills/<name>/SKILL.md` directly - no build step, no package manager. The directory name must match the `name` field. Frontmatter shape:

```md
---
name: <name>
description: What this skill does, and when to use it (this is what drives auto-discovery — be specific).
argument-hint: <what to pass, if anything>
---

# Skill title

...workflow, fully self-contained in this file. Reference any bundled files (scripts, examples) with
relative Markdown links so Copilot picks them up...
```

Use `skills/grooming/SKILL.md` or `skills/jira-ticket-groomer/SKILL.md` as a template. Keep each skill self-contained within its own directory.

## Subagents

The plugin includes specialized read-only subagents:

- `agents/deep-research.agent.md` - multi-source Jira/Confluence/code research.
- `agents/subtask-state-auditor.agent.md` - Done/Not Done subtask audit and coverage checks.
- `agents/scope-impact-mapper.agent.md` - code and cross-repo scope/impact mapping.
- `agents/requirement-gap-checker.agent.md` - missing requirement and regression-gap detection.
- `agents/plan-quality-reviewer.agent.md` - final plan quality checks before write-back.

A few things worth knowing before adding more:

- Delegation is **agent-initiated** - a skill can instruct the main agent to delegate, but it's the main agent's call whether it actually does, so skills shouldn't assume delegation always happens.
- Subagents should stay **read-only** for anything that writes externally (Jira comments, PRs, file edits) - keep write actions and human-approval checkpoints in the main conversation, since a subagent's intermediate output doesn't surface to the user, only its final result does.
- This is a newer part of VS Code's agent surface; behavior (auto-delegation reliability, tool inheritance) is worth re-checking against current docs if something doesn't behave as expected.

Add a new one at `agents/<name>.agent.md` - set `user-invocable: false` if it should only ever run as a subagent, not appear as a selectable chat mode.

## Distribution

- **From source Git URL (recommended):** In VS Code, run `Chat: Install Plugin From Source` and paste this repository URL.
- **Local plugin path:** Add this plugin folder path in `chat.pluginLocations` and set it to `true`.
- **Version updates:** bump `version` in `plugin.json` for each release so update checks detect a new plugin build.
