import { test, expect, Page } from "@playwright/test";

/**
 * End-to-end guard: every lead form on the site must render the canonical
 * SMS/TCPA consent disclosure (autodialer language, HELP/STOP, Privacy + Terms
 * links) byte-identically. Drift here means a legal compliance regression.
 *
 * Canonical wording lives in `src/components/legal/SmsConsentText.tsx`.
 * If you intentionally change that copy, update both `CANONICAL_AUTODIALER` and
 * `CANONICAL_HELP_STOP` below in the same commit.
 */

// Full canonical autodialer paragraph rendered by <SmsConsentText />.
const CANONICAL_AUTODIALER =
  "By providing your phone number and submitting this form, you agree to receive marketing emails and SMS messages from Demand Stream Digital at the number provided, including messages sent by autodialer. Consent is not a condition of any purchase. Message and data rates may apply. Message frequency varies. Reply HELP for help or STOP to unsubscribe.";

const CANONICAL_HELP_STOP = "Reply HELP for help or STOP to unsubscribe.";

// Canonical summary callout rendered by <SmsConsentSummary /> next to the phone field.
const CANONICAL_SUMMARY_HEADS_UP = "Heads up:";
const CANONICAL_SUMMARY_AUTODIALER =
  "by submitting, you agree to receive marketing calls, SMS, and emails from Demand Stream Digital at the contact info provided (autodialer may be used). Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to opt out, HELP for help.";

/**
 * Asserts the canonical autodialer paragraph + HELP/STOP language + working
 * Privacy/Terms links are present on the page. Uses page.content() so the
 * assertion works regardless of whether the consent block is currently in the
 * viewport.
 */
async function expectCanonicalConsent(page: Page) {
  // Strip HTML tags and normalize whitespace so JSX line wraps don't fail us.
  const text = (await page.content())
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/&amp;/g, "&");

  expect(text, "Canonical autodialer paragraph must render verbatim").toContain(CANONICAL_AUTODIALER);
  expect(text, "HELP/STOP opt-out language must render verbatim").toContain(CANONICAL_HELP_STOP);

  // Both links must exist with the exact route paths the consent component uses.
  const privacy = page.locator('a[href="/privacy"]').first();
  const terms = page.locator('a[href="/terms"]').first();
  await expect(privacy, "Privacy Policy link with href=\"/privacy\" must exist").toHaveCount(1, { timeout: 5000 }).catch(async () => {
    // Allow multiple link instances; just require >= 1.
    expect(await page.locator('a[href="/privacy"]').count()).toBeGreaterThan(0);
  });
  expect(await page.locator('a[href="/terms"]').count()).toBeGreaterThan(0);
}

/**
 * Asserts the SmsConsentSummary "Heads up" callout (rendered next to phone
 * inputs) is on the page with the canonical wording + links.
 */
async function expectCanonicalSummary(page: Page) {
  const text = (await page.content())
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/&amp;/g, "&");

  expect(text, "SmsConsentSummary 'Heads up:' prefix must render").toContain(CANONICAL_SUMMARY_HEADS_UP);
  expect(text, "SmsConsentSummary autodialer/STOP language must render verbatim").toContain(
    CANONICAL_SUMMARY_AUTODIALER,
  );
  expect(await page.locator('a[href="/privacy"]').count()).toBeGreaterThan(0);
  expect(await page.locator('a[href="/terms"]').count()).toBeGreaterThan(0);
}

test.describe("SMS/TCPA consent text renders verbatim on every lead form", () => {
  test("FreeAudit (/free-audit)", async ({ page }) => {
    await page.goto("/free-audit");
    await page.waitForLoadState("networkidle");
    await expectCanonicalConsent(page);
    await expectCanonicalSummary(page);
  });

  test("AdScanOnboarding (/ad-scan/onboarding)", async ({ page }) => {
    await page.goto("/ad-scan/onboarding");
    await page.waitForLoadState("networkidle");
    await expectCanonicalConsent(page);
    await expectCanonicalSummary(page);
  });

  test("TwoStepContactForm (/contact) - summary on step 1", async ({ page }) => {
    await page.goto("/contact");
    await page.waitForLoadState("networkidle");
    // Step 1 of TwoStepContactForm renders <SmsConsentSummary /> next to the phone input.
    await expectCanonicalSummary(page);
  });

  test("HeroForm (/) - canonical paragraph appears on step 2", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Step 1 only collects a website URL. Fill it and submit to advance to step 2,
    // which is where the consent disclosures render.
    const websiteInput = page.locator('input[placeholder="yourcompany.com"]').first();
    await websiteInput.waitFor({ state: "visible", timeout: 10000 });
    await websiteInput.fill("example.com");
    await page.getByRole("button", { name: /Get a Proposal/i }).first().click();

    // Wait for the step-2 heading to appear.
    await expect(page.getByRole("heading", { name: /Almost There/i })).toBeVisible({ timeout: 5000 });

    await expectCanonicalConsent(page);
    await expectCanonicalSummary(page);
  });

  test("GrowthQualifierFlow (/grow-qualifier) - canonical paragraph appears on contact step", async ({ page }) => {
    await page.goto("/grow-qualifier");
    await page.waitForLoadState("networkidle");

    // Walk the qualifier through to the contact step, where consent renders.
    // Each step has a primary "OK" advance button.
    const clickOk = async () => {
      await page.getByRole("button", { name: /^OK$/ }).first().click();
    };

    // Step 1: contractor type
    await page.getByRole("button", { name: /^HVAC$/ }).first().click();
    await clickOk();

    // Step 2: company name
    await page.locator("input[placeholder=\"Acme Plumbing\"]").fill("Test Co");
    await clickOk();

    // Step 3: website
    await page.locator("input[placeholder=\"acmeplumbing.com\"]").fill("test.com");
    await clickOk();

    // Step 4: channels (multi-select; pick at least one)
    await page.getByRole("button", { name: /^Google Ads$/ }).first().click();
    await clickOk();

    // Step 5: revenue. Picking the top tier routes straight to "qualified" and skips the budget gate.
    await page.getByRole("button", { name: /Greater than \$10mm/ }).first().click();
    await clickOk();

    // Qualified interstitial -> click "Continue" to reach the contact step.
    await page.getByRole("button", { name: /^Continue$/ }).first().click();

    // Contact step should now render both consent components.
    await expect(page.locator("text=/Reply HELP for help or STOP to unsubscribe/")).toBeVisible({ timeout: 5000 });
    await expectCanonicalConsent(page);
    await expectCanonicalSummary(page);
  });
});
