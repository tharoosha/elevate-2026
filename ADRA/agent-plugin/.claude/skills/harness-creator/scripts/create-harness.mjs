#!/usr/bin/env node
// Adapted from walkinglabs/learn-harness-engineering (MIT) — see ../NOTICE.md
//
// Deterministic scaffolder: detects the target repo's stack and writes the five
// harness skeleton files from templates/. Does NOT decide scenario-specific content
// (real feature entries, sub-agents, which reference docs to copy in) — that
// judgment stays with the LLM agent following SKILL.md. This script only writes
// mechanical, stack-appropriate skeletons with placeholder prose.
//
// NOTE on the --client flag: the *original* walkinglabs script used a flag named
// `--target` to mean "output directory." In adra-agent-plugin, "target" already
// means something else (which client format to generate for), so that flag was
// renamed to `--client` here to avoid a collision with our own vocabulary —
// see harness-creator's SKILL.md "target contract" for the distinction.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  detectPackageManager,
  detectStack,
  readNodeScripts,
  getVerificationCommands,
  writeFileSafe,
  renderTemplate,
} from "./lib/harness-utils.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = path.join(__dirname, "..", "templates");

const AGENT_FILE_BY_CLIENT = {
  claude: "CLAUDE.md",
  copilot: "AGENTS.md",
  cursor: "AGENTS.md",
};

function printHelp() {
  console.log(`create-harness.mjs — scaffold harness engineering artifacts into a repo.

Usage:
  node create-harness.mjs [options]

Options:
  --client <claude|copilot|cursor>   Which client format to generate the instructions
                                      file for. Determines CLAUDE.md vs AGENTS.md.
                                      Default: copilot
  --out-dir <path>                    Repo root to write into. Default: cwd
  --state-dir <name>                  Folder (relative to --out-dir) for the
                                      target-agnostic artifacts. Default: .agent
  --package-manager <pnpm|yarn|bun|npm>
                                      Override JS package-manager auto-detection.
  --scenario <text>                   One-line description of what this harness is
                                      for. Used to seed feature_list.json.
  --project-name <text>                Default: basename of --out-dir.
  --force                             Overwrite existing files instead of skipping them.
  --help                              Show this help.

This script only writes the mechanical skeleton (stack detection, verification
commands, placeholder prose). Filling in real scenario-specific content is the
job of the LLM agent following harness-creator's SKILL.md, not this script.`);
}

function parseArgs(argv) {
  const args = {
    client: "copilot",
    outDir: process.cwd(),
    stateDir: ".agent",
    packageManager: null,
    scenario: "",
    projectName: null,
    force: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    switch (arg) {
      case "--client":
        args.client = argv[++i];
        break;
      case "--out-dir":
        args.outDir = path.resolve(argv[++i]);
        break;
      case "--state-dir":
        args.stateDir = argv[++i];
        break;
      case "--package-manager":
        args.packageManager = argv[++i];
        break;
      case "--scenario":
        args.scenario = argv[++i];
        break;
      case "--project-name":
        args.projectName = argv[++i];
        break;
      case "--force":
        args.force = true;
        break;
      case "--help":
      case "-h":
        args.help = true;
        break;
      default:
        console.error(`Unknown argument: ${arg} (--help for usage)`);
        process.exit(1);
    }
  }

  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    printHelp();
    return;
  }

  if (!Object.prototype.hasOwnProperty.call(AGENT_FILE_BY_CLIENT, args.client)) {
    console.error(
      `Invalid --client "${args.client}" — must be one of: ${Object.keys(AGENT_FILE_BY_CLIENT).join(", ")}`
    );
    process.exit(1);
  }

  const agentFile = AGENT_FILE_BY_CLIENT[args.client];
  const projectName = args.projectName || path.basename(args.outDir);
  const stateDirAbs = path.join(args.outDir, args.stateDir);

  const { stack } = detectStack(args.outDir);
  const packageManager =
    args.packageManager || (stack === "node" ? detectPackageManager(args.outDir) : null);
  const nodeScripts = stack === "node" ? readNodeScripts(args.outDir) : {};
  const verificationCommands = getVerificationCommands(stack, packageManager, nodeScripts);
  const verificationBlock = verificationCommands
    .map((c) => `echo "-- ${c.name} --"\n${c.command}`)
    .join("\n\n");

  const vars = {
    PROJECT_NAME: projectName,
    STACK: stack,
    PACKAGE_MANAGER: packageManager || "n/a",
    STATE_DIR: args.stateDir,
    AGENT_FILE: agentFile,
    SCENARIO: args.scenario || "General agent-reliability setup (no specific scenario given)",
    GENERATED_AT: new Date().toISOString(),
    VERIFICATION_COMMANDS: verificationBlock,
  };

  const plan = [
    { template: "agents.md", dest: path.join(args.outDir, agentFile), mode: null },
    { template: "feature-list.json", dest: path.join(stateDirAbs, "feature_list.json"), mode: null },
    {
      template: "feature-list.schema.json",
      dest: path.join(stateDirAbs, "feature-list.schema.json"),
      mode: null,
    },
    { template: "init.sh", dest: path.join(stateDirAbs, "init.sh"), mode: 0o755 },
    { template: "progress.md", dest: path.join(stateDirAbs, "progress.md"), mode: null },
    {
      template: "session-handoff.md",
      dest: path.join(stateDirAbs, "session-handoff.md"),
      mode: null,
    },
  ];

  console.log(`create-harness: client=${args.client} stack=${stack} out-dir=${args.outDir}`);
  console.log("");

  const results = [];
  for (const item of plan) {
    const templatePath = path.join(TEMPLATES_DIR, item.template);
    const raw = fs.readFileSync(templatePath, "utf8");
    const rendered = renderTemplate(raw, vars);
    const status = writeFileSafe(item.dest, rendered, args.force);
    if (status === "written" && item.mode) {
      try {
        fs.chmodSync(item.dest, item.mode);
      } catch {
        // chmod is a no-op on some platforms/filesystems — non-fatal.
      }
    }
    results.push({ dest: item.dest, status });
    console.log(`  [${status === "written" ? "+" : "="}] ${item.dest} (${status})`);
  }

  const skipped = results.filter((r) => r.status === "skipped-exists");
  console.log("");
  if (skipped.length > 0) {
    console.log(
      `${skipped.length} file(s) already existed and were left untouched. Re-run with --force to overwrite.`
    );
  }
  console.log("Mechanical scaffold complete. Placeholder prose (TODOs) still needs to be");
  console.log("filled in with content grounded in this repo — that's the next step.");
}

main();
