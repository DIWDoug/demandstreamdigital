import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * LeadConnector / GHL chat widget loader.
 *
 * TCPA / vendor compliance:
 * This widget collects phone numbers and constitutes an SMS opt-in path.
 * The vendor's "Multiple Opt-ins" rule forbids it from coexisting on the
 * same page as any other phone or SMS opt-in form. We therefore load the
 * widget site-wide EXCEPT on the denylist below, which enumerates every
 * route that still renders a phone field + SmsConsentText.
 *
 * Do NOT add the loader to index.html (we need per-route mount/unmount).
 * If you add a new route that collects a phone number, add it to
 * CHAT_WIDGET_DENYLIST in this file AND to SMS_FORMS in
 * scripts/check-consent-text.mjs.
 *
 * The denylist is also exported for the consent CI guard.
 */
export const CHAT_WIDGET_DENYLIST: ReadonlyArray<string | RegExp> = [
  "/grow-qualifier",
  "/free-audit",
  "/ad-scan",
  "/ad-scan/onboarding",
  "/ad-scan/thanks",
  "/contact",
];

const SCRIPT_ID = "leadconnector-chat-widget-loader";
const SCRIPT_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const RESOURCES_URL =
  "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
const WIDGET_ID = "6a09c0585ba4f033f861d870";
const WIDGET_NODE_SELECTORS = [
  "lead-connector-chat-widget",
  "#lc_text--chat-widget",
  'iframe[src*="leadconnectorhq"]',
  'iframe[src*="msgsndr.com"][src*="chat-widget"]',
  'div[id*="lc_chat"]',
  'div[id*="leadconnector"]',
  'script[src*="leadconnectorhq"]',
].join(", ");

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function isAllowed(pathname: string): boolean {
  const p = normalizePath(pathname);
  return !CHAT_WIDGET_DENYLIST.some((entry) =>
    typeof entry === "string" ? entry === p : entry.test(p),
  );
}

function mountWidget(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = SCRIPT_SRC;
  script.async = true;
  script.setAttribute("data-resources-url", RESOURCES_URL);
  script.setAttribute("data-widget-id", WIDGET_ID);
  script.setAttribute("data-source", "WEB_USER");
  document.body.appendChild(script);
}

function unmountWidget(): void {
  if (typeof document === "undefined") return;
  document.getElementById(SCRIPT_ID)?.remove();
  document.querySelectorAll(WIDGET_NODE_SELECTORS).forEach((node) => node.remove());
}

export default function LeadConnectorChatWidget() {
  const { pathname } = useLocation();

  useEffect(() => {
    const allowed = isAllowed(pathname);

    if (allowed) {
      mountWidget();
    } else {
      unmountWidget();
    }

    const observer =
      !allowed && typeof document !== "undefined"
        ? new MutationObserver(() => unmountWidget())
        : null;

    observer?.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      // Always tear the widget down on route change so it cannot bleed onto a
      // page that contains an SMS opt-in form.
      unmountWidget();
    };
  }, [pathname]);

  return null;
}
