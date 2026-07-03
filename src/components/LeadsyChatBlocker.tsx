import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Route-gated Leadsy AI chat widget loader.
 * Injects the Leadsy tag on allowed routes and removes it on routes that
 * must not show a chat widget (e.g. checkout/phone/SMS forms).
 */

const BLOCKED_PATHS = [
  "/ad-scan-offer",
  "/local-lead-ad-scan-offer",
];

const LEADSY_ID = "vtag-ai-js";
const LEADSY_SRC = "https://r2.leadsy.ai/tag.js";
const LEADSY_PID = "PjgO2V7YFmY16I1O";
const LEADSY_VERSION = "062024";

const LEADSY_WIDGET_SELECTORS = [
  "#lc_text-widget",
  ".lc_text-widget",
  ".lc_text-widget--prompt",
  ".lc_text-widget_prompt--prompt-text",
  ".lc_text-widget_prompt--msg-bubble",
  ".lc_text-widget--bubble",
  ".lc_text-widget--iframe",
  '#lc_text-widget--iframe',
  '.widget-open-icon',
  '.widget-close-icon',
  '[aria-label*="chat widget"]',
];

const removeLeadsyWidget = () => {
  document.getElementById(LEADSY_ID)?.remove();

  LEADSY_WIDGET_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      if (node instanceof HTMLElement) {
        node.remove();
      }
    });
  });

  document.querySelectorAll("iframe").forEach((iframe) => {
    if (iframe.src && (iframe.src.includes("leadsy") || iframe.src.includes("vtag"))) {
      iframe.remove();
    }
  });
};

const injectLeadsyTag = () => {
  if (document.getElementById(LEADSY_ID)) return;

  const script = document.createElement("script");
  script.id = LEADSY_ID;
  script.async = true;
  script.src = LEADSY_SRC;
  script.dataset.pid = LEADSY_PID;
  script.dataset.version = LEADSY_VERSION;
  document.head.appendChild(script);
};

export function LeadsyChatBlocker() {
  const { pathname } = useLocation();
  const previousBlocked = useRef(false);

  useEffect(() => {
    console.log("[LeadsyChatBlocker] pathname:", pathname, "blocked:", BLOCKED_PATHS.includes(pathname));
    const blocked = BLOCKED_PATHS.includes(pathname);

    if (blocked) {
      previousBlocked.current = true;
      removeLeadsyWidget();
      const observer = new MutationObserver(() => {
        console.log("[LeadsyChatBlocker] mutation observed, removing");
        removeLeadsyWidget();
      });
      observer.observe(document.body, { childList: true, subtree: true });
      return () => observer.disconnect();
    }

    // Coming from a blocked route to an allowed route: clean up any
    // lingering widget remnants, then inject the tag.
    if (previousBlocked.current) {
      removeLeadsyWidget();
    }
    previousBlocked.current = false;
    injectLeadsyTag();
  }, [pathname]);

  return null;
}
