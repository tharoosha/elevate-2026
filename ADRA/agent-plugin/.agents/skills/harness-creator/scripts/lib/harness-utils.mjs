// Adapted from walkinglabs/learn-harness-engineering (MIT) — see ../../NOTICE.md
// Stack/package-manager detection and file-write helpers for create-harness.mjs.

import fs from "node:fs";
import path from "node:path";

/**
 * Detect the JS package manager in use by lockfile presence.
 * @param {string} dir
 * @returns {"pnpm"|"yarn"|"bun"|"npm"|null} null if no package.json present at all.
 */
export function detectPackageManager(dir) {
  if (!fs.existsSync(path.join(dir, "package.json"))) return null;
  if (fs.existsSync(path.join(dir, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(dir, "yarn.lock"))) return "yarn";
  if (fs.existsSync(path.join(dir, "bun.lockb"))) return "bun";
  return "npm";
}

/**
 * Detect the primary language/ecosystem of a repo by manifest file presence.
 * Checked in a fixed priority order; first match wins.
 * @param {string} dir
 * @returns {{stack: string, manifest: string|null}}
 */
export function detectStack(dir) {
  const checks = [
    { stack: "dotnet", glob: [".csproj", ".sln"] },
    { stack: "node", files: ["package.json"] },
    { stack: "python", files: ["pyproject.toml", "requirements.txt", "setup.py"] },
    { stack: "go", files: ["go.mod"] },
    { stack: "rust", files: ["Cargo.toml"] },
    { stack: "java-maven", files: ["pom.xml"] },
    { stack: "java-gradle", files: ["build.gradle", "build.gradle.kts"] },
  ];

  for (const check of checks) {
    if (check.files) {
      for (const f of check.files) {
        const p = path.join(dir, f);
        if (fs.existsSync(p)) return { stack: check.stack, manifest: f };
      }
    }
    if (check.glob) {
      const entries = safeReadDir(dir);
      for (const entry of entries) {
        if (check.glob.some((ext) => entry.endsWith(ext))) {
          return { stack: check.stack, manifest: entry };
        }
      }
    }
  }

  return { stack: "generic", manifest: null };
}

function safeReadDir(dir) {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

/**
 * Read package.json scripts (if present) so init.sh can prefer real project scripts
 * over generic per-stack guesses.
 * @param {string} dir
 * @returns {Record<string,string>}
 */
export function readNodeScripts(dir) {
  const pkgPath = path.join(dir, "package.json");
  if (!fs.existsSync(pkgPath)) return {};
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    return pkg.scripts || {};
  } catch {
    return {};
  }
}

/**
 * Return the verification command set for a detected stack. Used to fill init.sh.
 * Node commands prefer real package.json scripts when they exist; otherwise these
 * are documented placeholders the human/agent must confirm or replace.
 * @param {string} stack
 * @param {"pnpm"|"yarn"|"bun"|"npm"|null} packageManager
 * @param {Record<string,string>} nodeScripts
 */
export function getVerificationCommands(stack, packageManager, nodeScripts = {}) {
  const run = (script) => {
    switch (packageManager) {
      case "pnpm":
        return `pnpm run ${script}`;
      case "yarn":
        return `yarn ${script}`;
      case "bun":
        return `bun run ${script}`;
      default:
        return `npm run ${script}`;
    }
  };

  switch (stack) {
    case "node": {
      const cmds = [];
      for (const script of ["lint", "typecheck", "test", "build"]) {
        if (nodeScripts[script]) cmds.push({ name: script, command: run(script) });
      }
      if (cmds.length === 0) {
        cmds.push({
          name: "unknown",
          command: "# No lint/typecheck/test/build scripts found in package.json — add project verification commands here.",
        });
      }
      return cmds;
    }
    case "python":
      return [
        { name: "compile", command: "python -m compileall ." },
        { name: "test", command: "pytest" },
      ];
    case "go":
      return [
        { name: "vet", command: "go vet ./..." },
        { name: "test", command: "go test ./..." },
        { name: "build", command: "go build ./..." },
      ];
    case "rust":
      return [
        { name: "check", command: "cargo check" },
        { name: "test", command: "cargo test" },
      ];
    case "java-maven":
      return [{ name: "verify", command: "mvn verify" }];
    case "java-gradle":
      return [{ name: "check", command: "./gradlew check" }];
    case "dotnet":
      return [
        { name: "build", command: "dotnet build" },
        { name: "test", command: "dotnet test" },
      ];
    default:
      return [
        {
          name: "unknown",
          command: "# No recognized package manifest detected. Replace this section with the project's verification commands.",
        },
      ];
  }
}

/**
 * Write a file, respecting existing content unless force is set.
 * @returns {"written"|"skipped-exists"}
 */
export function writeFileSafe(filePath, content, force = false) {
  if (fs.existsSync(filePath) && !force) {
    return "skipped-exists";
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
  return "written";
}

/**
 * Simple ${TOKEN} template interpolation — no external templating dependency.
 * @param {string} template
 * @param {Record<string,string>} vars
 */
export function renderTemplate(template, vars) {
  return template.replace(/\$\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : match
  );
}
