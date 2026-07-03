import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Route-gated blocker for the Leadsy AI chat widget.
 * Removes the script and any injected widget elements on pages that must
 * not display a chat widget (e.g. pages with checkout/phone/SMS forms).
 */

const BLOCKED_PATHS = [
  "/ad-scan-offer",
  "/local-lead-ad-scan-offer",
];

const LEADSY_SCRIPT_SELECTOR = 'script#vtag-ai-js';

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

const removeLeadsyChat = () => {
  document.querySelectorAll(LEADSY_SCRIPT_SELECTOR).forEach((node) => node.remove());

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

export function LeadsyChatBlocker() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!BLOCKED_PATHS.includes(pathname)) {
      return;
    }

    removeLeadsyChat();
    const observer = new MutationObserver(removeLeadsyChat);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
