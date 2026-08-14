import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pluginRoot = path.resolve(__dirname, "..");
const memoryRoot = path.join(pluginRoot, "semantic-memory");
const markdownDir = path.join(memoryRoot, "markdown");
const metadataDir = path.join(memoryRoot, "metadata");
const graphDir = path.join(memoryRoot, "graph");
const graphFile = path.join(graphDir, "knowledge-graph.json");

const ARTICLE_LINK_PATTERN = /#article:([a-zA-Z0-9]+)@Success-Center/g;

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function flattenTopics(topics) {
  if (!topics || typeof topics !== "object") {
    return [];
  }

  const flat = [];
  for (const [category, values] of Object.entries(topics)) {
    for (const value of Array.isArray(values) ? values : []) {
      flat.push({ category, value });
    }
  }
  return flat;
}

function extractRelatedArticleIds(markdownText) {
  const ids = new Set();
  let match;
  while ((match = ARTICLE_LINK_PATTERN.exec(markdownText)) !== null) {
    ids.add(match[1]);
  }
  return [...ids];
}

function buildGraph() {
  const markdownFiles = fs
    .readdirSync(markdownDir)
    .filter((name) => name.endsWith(".md"));

  const documentNodes = [];
  const conceptNodeIds = new Set();
  const conceptNodes = [];
  const edges = [];

  for (const fileName of markdownFiles) {
    const articleId = path.basename(fileName, ".md");
    const markdownPath = path.join(markdownDir, fileName);
    const metadataPath = path.join(metadataDir, `${articleId}.json`);

    const markdownText = fs.readFileSync(markdownPath, "utf8");
    const metadata = fs.existsSync(metadataPath) ? readJson(metadataPath) : {};

    const topics = flattenTopics(metadata.topics);

    documentNodes.push({
      id: articleId,
      type: "Document",
      title: metadata.title || articleId,
      summary: metadata.summary || "",
      path: `semantic-memory/markdown/${fileName}`,
      lastModifiedDate: metadata.lastModifiedDate || null
    });

    for (const { category, value } of topics) {
      const conceptId = `concept:${category}:${value}`;
      if (!conceptNodeIds.has(conceptId)) {
        conceptNodeIds.add(conceptId);
        conceptNodes.push({ id: conceptId, type: "Concept", category, name: value });
      }
      edges.push({ from: articleId, to: conceptId, type: "TAGGED_AS" });
    }

    for (const relatedId of extractRelatedArticleIds(markdownText)) {
      if (relatedId !== articleId) {
        edges.push({ from: articleId, to: relatedId, type: "RELATES_TO" });
      }
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    nodes: [...documentNodes, ...conceptNodes],
    edges
  };
}

const graph = buildGraph();
fs.mkdirSync(graphDir, { recursive: true });
fs.writeFileSync(graphFile, JSON.stringify(graph, null, 2));

console.log(
  `Knowledge graph built: ${graph.nodes.length} nodes, ${graph.edges.length} edges -> ${path.relative(pluginRoot, graphFile)}`
);
