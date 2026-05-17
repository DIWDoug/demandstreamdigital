import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * LeadConnector / GHL chat widget loader.
 *
 * TCPA / vendor compliance:
 * This widget collects phone numbers and constitutes an SMS opt-in path.
 * The vendor's "Multiple Opt-ins" rule forbids it from coexisting on the same
 * page as any other phone or SMS opt-in form. Our standard lead, contact,
 * audit and qualifier flows all collect phone numbers, so the widget may ONLY
 * mount on the strict allowlist below.
 *
 * Do NOT add the loader to index.html.
 * Do NOT extend this allowlist to any page that renders a phone field,
 * SmsConsentText, ServiceContactForm, HeroForm, ListicleScrollCTA, or
 * LocalGrowthEngine email capture.
 *
 * The allowlist is also exported for the consent CI guard.
 */
export const CHAT_WIDGET_ALLOWLIST: ReadonlyArray<string | RegExp> = [
  "/privacy",
  "/terms",
  "/refund-request",
  "/brand",
  "/style-guide",
  "/region-blocked",
  "/thank-you",
  "/grow/thanks",
  "/grow/booked",
  "/ad-scan/thanks",
];

const SCRIPT_ID = "leadconnector-chat-widget-loader";
const SCRIPT_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const RESOURCES_URL =
  "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
const WIDGET_ID = "6a09c0585ba4f033f861d870";

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function isAllowed(pathname: string): boolean {
  const p = normalizePath(pathname);
  return CHAT_WIDGET_ALLOWLIST.some((entry) =>
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
  // Best-effort cleanup of any nodes the widget injects.
  document
    .querySelectorAll(
      'iframe[src*="leadconnectorhq"], div[id*="lc_chat"], div[id*="leadconnector"], script[src*="leadconnectorhq"]',
    )
    .forEach((node) => node.remove());
}

export default function LeadConnectorChatWidget() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isAllowed(pathname)) {
      mountWidget();
    } else {
      unmountWidget();
    }
    return () => {
      // Always tear the widget down on route change so it cannot bleed onto a
      // page that contains an SMS opt-in form.
      unmountWidget();
    };
  }, [pathname]);

  return null;
}
