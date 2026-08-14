---
name: domain-knowledge-graph
description: Query the shipped Adra domain knowledge graph (generated from semantic-memory markdown articles) to find related concepts, workflows, and precedent documentation for a topic. Use when domain/business context is needed for grooming, ticket investigation, or general questions about Adra product behavior.
argument-hint: <topic, feature name, or keyword to look up>
---

# Domain Knowledge Graph

This skill answers domain questions using the knowledge graph generated from the plugin's shipped documentation corpus, instead of guessing or searching the web.

## Data sources

- Source markdown articles: `semantic-memory/markdown/*.md`
- Source metadata (title, summary, topics): `semantic-memory/metadata/*.json`
- Generated graph artifact: `semantic-memory/graph/knowledge-graph.json`
- Regenerate the graph with: `node scripts/build-knowledge-graph.mjs` (run after markdown/metadata changes)

## Graph shape

- `Document` nodes: one per markdown article, with `id`, `title`, `summary`, `path`.
- `Concept` nodes: one per topic tag, with `category` and `name`.
- Edges:
  - `TAGGED_AS`: Document -> Concept
  - `RELATES_TO`: Document -> Document (derived from in-article "Related Articles" links)

## Workflow

1. Read `semantic-memory/graph/knowledge-graph.json`.
2. Match the user's topic/keyword against `Document.title`, `Document.summary`, and `Concept.name`.
3. Follow `TAGGED_AS` and `RELATES_TO` edges outward one hop to gather closely related documents and concepts.
4. For each relevant `Document` node, open the actual markdown file at its `path` to pull grounded detail - never answer from the graph metadata alone.
5. Summarize findings; do not fabricate a document, concept, or relationship that isn't in the graph.

## Output format

**Matched concepts** - concept names found, grouped by category.

**Related documents** - `<title>` (`path`) - one-line relevance note, sourced from the actual markdown content.

**Related workflows/precedent** - documents connected via `RELATES_TO` that add context.

**Not found** - anything asked for that has no matching node in the graph.

## Notes

- This skill is read-only against the graph and markdown files; it never edits them.
- If the graph file is missing or stale, say so and suggest running the build script rather than guessing at content.
