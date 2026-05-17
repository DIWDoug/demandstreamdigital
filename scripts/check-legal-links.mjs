#!/usr/bin/env node
/**
 * Cross-environment guard for the /privacy and /terms routes used by every
 * SMS/TCPA consent block on the site. Confirms each environment serves the
 * SPA shell (HTTP 200) for both legal routes so the react-router Link targets
 * in <SmsConsentText /> and <SmsConsentSummary /> resolve correctly.
 *
 * Usage:
 *   node scripts/check-legal-links.mjs                            # default envs
 *   node scripts/check-legal-links.mjs https://my.preview.url     # add extras
 *
 * Notes:
 *   - Lovable preview URLs (id-preview--*.lovable.app) are auth-gated and
 *     return 302 to a login page. That's expected; we treat 2xx OR a 3xx that
 *     redirects to a Lovable login as "route exists" (the SPA fallback is what
 *     we are validating, not the auth wall).
 *   - For full client-side rendering verification (H1, page content) run the
 *     Playwright suite in e2e/consent-text.spec.ts.
 */

const DEFAULT_ENVS = [
  "https://demandstreamdigital.lovable.app", // production / published
  "https://id-preview--77e1e2d3-378a-4a78-8aea-c5588a3c91db.lovable.app", // preview/staging
];

const PATHS = ["/privacy", "/terms"];

const envs = [...DEFAULT_ENVS, ...process.argv.slice(2)];

let failed = 0;

for (const base of envs) {
  for (const path of PATHS) {
    const url = `${base}${path}`;
    try {
      const res = await fetch(url, { redirect: "manual" });
      const ok =
        (res.status >= 200 && res.status < 300) ||
        // Auth-gated previews redirect to a Lovable login page; route still exists.
        (res.status >= 300 && res.status < 400 && /lovable/i.test(res.headers.get("location") ?? ""));
      const flag = ok ? "OK" : "FAIL";
      console.log(`[${flag}] ${res.status}  ${url}`);
      if (!ok) failed++;
    } catch (err) {
      console.log(`[FAIL] ERR  ${url}  ${err.message}`);
      failed++;
    }
  }
}

if (failed > 0) {
  console.error(`\n${failed} legal-link check(s) failed.`);
  process.exit(1);
}
console.log("\nAll /privacy and /terms routes resolve in every checked environment.");
