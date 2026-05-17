#!/usr/bin/env node
/**
 * TCPA / SMS consent diff-check
 * ---------------------------------------------------------------------------
 * Guards two invariants across every lead form on the site:
 *
 *   1. The canonical TCPA paragraph is defined exactly ONCE, inside
 *      <SmsConsentText> at src/components/legal/SmsConsentText.tsx.
 *   2. Each of the five lead forms renders <SmsConsentText> (i.e. nobody has
 *      forked or hand-pasted the legal copy back into a form file).
 *
 * Run:  bun scripts/check-consent-text.mjs
 *       node scripts/check-consent-text.mjs
 *
 * Exits 1 on any drift so it can be wired into CI.
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const CONSENT_COMPONENT = "src/components/legal/SmsConsentText.tsx";

const FORMS = [
  "src/components/sections/HeroForm.tsx",
  "src/components/forms/GrowthQualifierFlow.tsx",
  "src/components/forms/TwoStepContactForm.tsx",
  "src/pages/FreeAudit.tsx",
  "src/pages/AdScanOnboarding.tsx",
];

/**
 * The canonical TCPA paragraph. Whitespace is collapsed before comparison so
 * JSX line-wraps do not cause false positives, but every word must match
 * byte-for-byte after collapse.
 */
const CANONICAL_TCPA = `
  By providing your phone number and submitting this form, you agree to receive
  marketing emails and SMS messages from Demand Stream Digital at the number
  provided, including messages sent by autodialer. Consent is not a condition
  of any purchase. Message and data rates may apply. Message frequency varies.
  Reply HELP for help or STOP to unsubscribe. View our
`;

const normalize = (s) => s.replace(/\s+/g, " ").trim();
const read = (rel) => readFileSync(resolve(ROOT, rel), "utf8");

const errors = [];
const ok = (msg) => console.log(`  ok    ${msg}`);
const fail = (msg) => {
  errors.push(msg);
  console.log(`  FAIL  ${msg}`);
};

console.log("\nTCPA / SMS consent diff-check");
console.log("================================================================");

// --- 1. Canonical text lives in SmsConsentText.tsx ---------------------------
console.log(`\n[1/3] Canonical paragraph defined in ${CONSENT_COMPONENT}`);
const componentSrc = read(CONSENT_COMPONENT);
const componentNormalized = normalize(componentSrc);
const canonicalNormalized = normalize(CANONICAL_TCPA);

if (componentNormalized.includes(canonicalNormalized)) {
  ok("canonical TCPA paragraph found in SmsConsentText");
} else {
  fail(
    "canonical TCPA paragraph NOT found in SmsConsentText. " +
      "Update CANONICAL_TCPA in this script and the component together.",
  );
}

// --- 2. No form file inlines its own copy of the TCPA paragraph -------------
console.log("\n[2/3] No form has its own forked copy of the TCPA paragraph");
for (const form of FORMS) {
  const src = normalize(read(form));
  if (src.includes(canonicalNormalized)) {
    fail(
      `${form} appears to inline the canonical TCPA paragraph. ` +
        "Remove the duplicate and render <SmsConsentText /> instead.",
    );
  } else {
    ok(`${form} does not duplicate the legal copy`);
  }
}

// --- 3. Every form actually renders <SmsConsentText /> ----------------------
console.log("\n[3/3] Every form renders <SmsConsentText />");
for (const form of FORMS) {
  const src = read(form);
  const importsIt = /from\s+["']@\/components\/legal\/SmsConsentText["']/.test(src);
  const rendersIt = /<SmsConsentText\b/.test(src);
  if (importsIt && rendersIt) {
    ok(`${form} imports and renders <SmsConsentText />`);
  } else {
    fail(
      `${form} is missing <SmsConsentText /> (imports=${importsIt}, renders=${rendersIt}). ` +
        "Every lead form must render the shared consent component.",
    );
  }
}

console.log("\n================================================================");
if (errors.length > 0) {
  console.log(`FAILED: ${errors.length} consent drift issue(s) detected.\n`);
  process.exit(1);
} else {
  console.log(`PASSED: all ${FORMS.length} forms share byte-identical consent copy.\n`);
}
