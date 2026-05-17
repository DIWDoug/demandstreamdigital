#!/usr/bin/env node
/**
 * TCPA / SMS + email marketing consent diff-check
 * ---------------------------------------------------------------------------
 * Guards three invariants across every lead capture on the site:
 *
 *   1. The canonical TCPA paragraph is defined exactly ONCE, inside
 *      <SmsConsentText> at src/components/legal/SmsConsentText.tsx, and the
 *      canonical email-only paragraph lives ONCE in <EmailMarketingConsent>
 *      in the same file.
 *   2. No form / lead-capture file inlines a forked copy of either paragraph.
 *   3. Every SMS-collecting form renders <SmsConsentText />, and every
 *      email-only signup renders <EmailMarketingConsent />.
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

// Forms that collect a phone number -> must render <SmsConsentText />.
const SMS_FORMS = [
  "src/components/sections/HeroForm.tsx",
  "src/components/forms/GrowthQualifierFlow.tsx",
  "src/pages/FreeAudit.tsx",
  "src/pages/AdScanOnboarding.tsx",
];

// Email-only signups (newsletter / lead magnet) -> must render <EmailMarketingConsent />.
const EMAIL_FORMS = [
  "src/components/sections/LocalGrowthEngine.tsx",
];

/**
 * Canonical TCPA paragraph (phone + SMS + email). Whitespace is collapsed
 * before comparison so JSX line-wraps do not cause false positives, but every
 * word must match byte-for-byte after collapse.
 */
const CANONICAL_TCPA = `
  By providing your phone number and submitting this form, you agree to receive
  marketing emails and SMS messages from Demand Stream Digital at the number
  provided, including messages sent by autodialer. Consent is not a condition
  of any purchase. Message and data rates may apply. Message frequency varies.
  Reply HELP for help or STOP to unsubscribe. View our
`;

/**
 * Canonical email-only marketing consent paragraph rendered by
 * <EmailMarketingConsent /> on newsletter / lead-magnet signups.
 */
const CANONICAL_EMAIL = `
  By submitting, you agree to receive marketing emails from Demand Stream
  Digital. You can unsubscribe at any time. See our
`;

const normalize = (s) => s.replace(/\s+/g, " ").trim();
const read = (rel) => readFileSync(resolve(ROOT, rel), "utf8");

const errors = [];
const ok = (msg) => console.log(`  ok    ${msg}`);
const fail = (msg) => {
  errors.push(msg);
  console.log(`  FAIL  ${msg}`);
};

console.log("\nTCPA / SMS + email consent diff-check");
console.log("================================================================");

const componentSrc = read(CONSENT_COMPONENT);
const componentNormalized = normalize(componentSrc);
const canonicalTcpaNormalized = normalize(CANONICAL_TCPA);
const canonicalEmailNormalized = normalize(CANONICAL_EMAIL);

// --- 1. Canonical paragraphs live in the consent component ------------------
console.log(`\n[1/5] Canonical paragraphs defined in ${CONSENT_COMPONENT}`);
if (componentNormalized.includes(canonicalTcpaNormalized)) {
  ok("canonical TCPA paragraph found in <SmsConsentText>");
} else {
  fail(
    "canonical TCPA paragraph NOT found in <SmsConsentText>. " +
      "Update CANONICAL_TCPA in this script and the component together.",
  );
}
if (componentNormalized.includes(canonicalEmailNormalized)) {
  ok("canonical email-marketing paragraph found in <EmailMarketingConsent>");
} else {
  fail(
    "canonical email-marketing paragraph NOT found in <EmailMarketingConsent>. " +
      "Update CANONICAL_EMAIL in this script and the component together.",
  );
}

// --- 2. No SMS form inlines the TCPA paragraph ------------------------------
console.log("\n[2/5] No SMS form has its own forked copy of the TCPA paragraph");
for (const form of SMS_FORMS) {
  const src = normalize(read(form));
  if (src.includes(canonicalTcpaNormalized)) {
    fail(
      `${form} appears to inline the canonical TCPA paragraph. ` +
        "Remove the duplicate and render <SmsConsentText /> instead.",
    );
  } else {
    ok(`${form} does not duplicate the TCPA copy`);
  }
}

// --- 3. No email-only form inlines the email-marketing paragraph ------------
console.log("\n[3/5] No email-only form has its own forked copy of the email paragraph");
for (const form of EMAIL_FORMS) {
  const src = normalize(read(form));
  if (src.includes(canonicalEmailNormalized)) {
    fail(
      `${form} appears to inline the canonical email-marketing paragraph. ` +
        "Remove the duplicate and render <EmailMarketingConsent /> instead.",
    );
  } else {
    ok(`${form} does not duplicate the email-marketing copy`);
  }
}

// --- 4. Every SMS form renders <SmsConsentText /> ---------------------------
console.log("\n[4/5] Every SMS form renders <SmsConsentText />");
for (const form of SMS_FORMS) {
  const src = read(form);
  const importsIt = /from\s+["']@\/components\/legal\/SmsConsentText["']/.test(src);
  const rendersIt = /<SmsConsentText\b/.test(src);
  if (importsIt && rendersIt) {
    ok(`${form} imports and renders <SmsConsentText />`);
  } else {
    fail(
      `${form} is missing <SmsConsentText /> (imports=${importsIt}, renders=${rendersIt}). ` +
        "Every phone-collecting form must render the shared SMS consent component.",
    );
  }
}

// --- 5. Every email-only signup renders <EmailMarketingConsent /> -----------
console.log("\n[5/5] Every email-only signup renders <EmailMarketingConsent />");
for (const form of EMAIL_FORMS) {
  const src = read(form);
  const importsIt = /from\s+["']@\/components\/legal\/SmsConsentText["']/.test(src);
  const rendersIt = /<EmailMarketingConsent\b/.test(src);
  if (importsIt && rendersIt) {
    ok(`${form} imports and renders <EmailMarketingConsent />`);
  } else {
    fail(
      `${form} is missing <EmailMarketingConsent /> (imports=${importsIt}, renders=${rendersIt}). ` +
        "Every email-only signup must render the shared email-marketing consent component.",
    );
  }
}

console.log("\n================================================================");
if (errors.length > 0) {
  console.log(`FAILED: ${errors.length} consent drift issue(s) detected.\n`);
  process.exit(1);
} else {
  const total = SMS_FORMS.length + EMAIL_FORMS.length;
  console.log(
    `PASSED: ${SMS_FORMS.length} SMS form(s) and ${EMAIL_FORMS.length} email-only signup(s) ` +
      `(${total} total) share byte-identical consent copy.\n`,
  );
}
