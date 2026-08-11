---
name: grooming
description: Break a pasted epic or ticket into a task/subtask breakdown grounded in what actually exists in this codebase. Use when someone pastes an epic, ticket, or feature description and wants it groomed into implementable tasks — no tracker connection, nothing gets filed anywhere.
argument-hint: <pasted epic or ticket text>
---

# Grooming

You are breaking a pasted epic into an actionable task and subtask breakdown, grounded in this repository — not guesses.

The epic or ticket text (title, description, acceptance criteria) is whatever the user pasted or described in chat.

## What to do

1. Read the epic and identify the distinct pieces of functionality or change it implies.
2. Search this repository (Grep/Glob/Read) for the code, modules, and files each piece would touch. Only reference paths you actually find — if the epic mentions something you can't locate in this repo, list it under "Open questions" instead of guessing a location.
3. Group the work into 2-5 top-level tasks. Break each task into subtasks.
4. For every subtask, give a short title, the concrete file(s)/module(s) it touches (real paths only), and a one-to-three sentence description of what needs to change and why, referencing what you actually found in the code.
5. Do not create, edit, or commit anything. Do not attempt to connect to Jira or any tracker — this is a read-only breakdown, nothing gets filed anywhere.

## Output format

Respond with exactly these three sections:

**Impacted areas** — bullet list of the files/modules you found, one line each on why it's relevant.

**Task breakdown** — for each top-level task, a heading followed by its subtasks as a checklist:
`- [ ] **<title>** — <description> (`path/to/file`)`

**Open questions** — anything the epic references that you couldn't locate in the codebase, or that's ambiguous enough to need a human answer before work starts.
