import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Route-gated blocker for the LeadConnector/GHL chat widget (and the legacy
 * Leadsy tag). Renders nothing. Removes the chat loader scripts and any
 * injected widget elements on pages that must not show a chat widget
 * (e.g. pages with checkout, phone, or SMS forms).
 */

const BLOCKED_PATHS = [
  "/ad-scan-offer",
  "/local-lead-ad-scan-offer",
];

const LEADSY_ID = "vtag-ai-js";
const LEADSY_SRC = "https://r2.leadsy.ai/tag.js";
const LEADSY_PID = "PjgO2V7YFmY16I1O";
const LEADSY_VERSION = "062024";
const CHAT_WIDGET_OFFSET_STYLE_ID = "dsd-chat-widget-mobile-offset";

const CHAT_WIDGET_HOST_SELECTORS = [
  "chat-widget",
  "chat-widget-bubble",
  "chat-widget-launcher",
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

const CHAT_WIDGET_SCRIPT_SELECTORS = [
  'script#vtag-ai-js',
  'script[src*="leadconnectorhq.com/chat-widget"]',
  'script[src*="widgets.leadconnectorhq.com"]',
  'script[src*="leadsy.ai"]',
];

/**
 * Recursively query all shadow roots and remove matching chat widget elements.
 */
const removeFromAllRoots = (selector: string) => {
  const remove = (root: Document | ShadowRoot) => {
    root.querySelectorAll(selector).forEach((node) => {
      if (node instanceof HTMLElement) {
        node.remove();
      }
    });
    root.querySelectorAll("*").forEach((el) => {
      if (el instanceof HTMLElement && el.shadowRoot) {
        remove(el.shadowRoot);
      }
    });
  };
  remove(document);
};

const removeChatWidget = () => {
  CHAT_WIDGET_SCRIPT_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => node.remove());
  });

  CHAT_WIDGET_HOST_SELECTORS.forEach((selector) => {
    removeFromAllRoots(selector);
  });

  document.querySelectorAll("iframe").forEach((iframe) => {
    if (
      iframe.src &&
      (iframe.src.includes("leadsy") ||
        iframe.src.includes("vtag") ||
        iframe.src.includes("leadconnectorhq"))
    ) {
      iframe.remove();
    }
  });
};

const offsetChatWidgetOnMobile = () => {
  document.querySelectorAll("chat-widget").forEach((node) => {
    if (!(node instanceof HTMLElement) || !node.shadowRoot) return;
    if (node.shadowRoot.getElementById(CHAT_WIDGET_OFFSET_STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = CHAT_WIDGET_OFFSET_STYLE_ID;
    style.textContent = `
      @media (max-width: 767px) {
        #lc_text-widget,
        #lc_text-widget--btn,
        .lc_text-widget,
        .lc_text-widget--bubble {
          bottom: calc(5.5rem + env(safe-area-inset-bottom)) !important;
        }

        .lc_text-widget--prompt {
          margin-bottom: 0.75rem !important;
        }
      }
    `;
    node.shadowRoot.appendChild(style);
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

export function LeadConnectorChatWidget() {
  const { pathname } = useLocation();
  const previousBlocked = useRef(false);

  useEffect(() => {
    const blocked = BLOCKED_PATHS.includes(pathname);

    if (blocked) {
      previousBlocked.current = true;
      removeChatWidget();
      const observer = new MutationObserver(removeChatWidget);
      observer.observe(document.head, { childList: true, subtree: true });
      observer.observe(document.body, { childList: true, subtree: true });
      return () => observer.disconnect();
    }

    // Coming from a blocked route to an allowed route: clean up any
    // lingering widget remnants, then inject the legacy Leadsy tag.
    if (previousBlocked.current) {
      removeChatWidget();
    }
    previousBlocked.current = false;
    injectLeadsyTag();
    offsetChatWidgetOnMobile();
    const observer = new MutationObserver(offsetChatWidgetOnMobile);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
