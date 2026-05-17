#!/usr/bin/env node
/**
 * LeadConnector / GHL chat widget guard.
 *
 * Vendor TCPA rule: the LeadConnector chat widget collects phone numbers and
 * counts as an SMS opt-in path. It may NEVER be embedded site-wide, and may
 * only mount on the strict allowlist defined in
 * src/components/integrations/LeadConnectorChatWidget.tsx.
 *
 * This script enforces three invariants:
 *   1. index.html does NOT contain the loader script (it must be route-gated).
 *   2. The loader URL only appears inside the dedicated widget component.
 *   3. The component is mounted exactly once, from src/App.tsx.
 *
 * Run:  node scripts/check-chat-widget.mjs
 * Exits 1 on any drift so it can be wired into CI.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const WIDGET_COMPONENT =
  "src/components/integrations/LeadConnectorChatWidget.tsx";
const APP_FILE = "src/App.tsx";
const LOADER_HOST = "widgets.leadconnectorhq.com";

const errors = [];
const read = (rel) => readFileSync(resolve(ROOT, rel), "utf8");

// 1. index.html must NOT contain the loader.
try {
  const html = read("index.html");
  if (html.includes(LOADER_HOST)) {
    errors.push(
      "index.html embeds the LeadConnector chat widget loader. " +
        "The widget must be route-gated through <LeadConnectorChatWidget />. " +
        "Remove the <script> tag from index.html.",
    );
  }
} catch {
  errors.push("index.html not found.");
}

// 2. The loader URL may only appear inside the dedicated widget component.
function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) {
      if (entry === "node_modules" || entry.startsWith(".")) continue;
      yield* walk(full);
    } else if (/\.(tsx?|jsx?|html|mjs|cjs)$/.test(entry)) {
      yield full;
    }
  }
}

const allowedRefs = new Set([
  resolve(ROOT, WIDGET_COMPONENT),
  resolve(ROOT, "scripts/check-chat-widget.mjs"),
]);

for (const file of walk(resolve(ROOT, "src"))) {
  const contents = readFileSync(file, "utf8");
  if (contents.includes(LOADER_HOST) && !allowedRefs.has(file)) {
    errors.push(
      `Unexpected LeadConnector loader reference in ${file}. ` +
        `Only ${WIDGET_COMPONENT} may reference ${LOADER_HOST}.`,
    );
  }
}

// 3. The component must be mounted from App.tsx exactly once.
try {
  const app = read(APP_FILE);
  const mounts = (app.match(/<LeadConnectorChatWidget\b/g) || []).length;
  if (mounts !== 1) {
    errors.push(
      `${APP_FILE} must mount <LeadConnectorChatWidget /> exactly once ` +
        `(found ${mounts}).`,
    );
  }
} catch {
  errors.push(`${APP_FILE} not found.`);
}

if (errors.length > 0) {
  console.error("\nChat widget guard FAILED:\n");
  for (const e of errors) console.error("  - " + e);
  console.error("");
  process.exit(1);
}

console.log("Chat widget guard passed.");
