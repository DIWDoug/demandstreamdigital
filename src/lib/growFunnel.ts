declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
    __dsdGrowLeadFired?: boolean;
  }
}

const LEAD_VERIFIED_KEY = "dsd_grow_lead_verified";
const LEAD_TTL_MS = 10 * 60 * 1000;

export type VerifiedGrowLead = {
  formType: string;
};

export function pushGrowDataLayer(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

export function safeTrackCustom(eventName: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;

  try {
    window.fbq("trackCustom", eventName, payload);
  } catch {
    // no-op
  }
}

export function safeTrackLead(contentCategory: string) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;

  try {
    window.fbq("track", "Lead", { content_category: contentCategory });
  } catch {
    // no-op
  }
}

export function markGrowLeadVerified(formType: string) {
  if (typeof window === "undefined") return;

  sessionStorage.setItem(
    LEAD_VERIFIED_KEY,
    JSON.stringify({ ts: Date.now(), formType })
  );
}

export function consumeGrowLeadVerified(): VerifiedGrowLead | null {
  if (typeof window === "undefined") return null;

  const raw = sessionStorage.getItem(LEAD_VERIFIED_KEY);
  if (!raw) return null;

  sessionStorage.removeItem(LEAD_VERIFIED_KEY);

  try {
    const parsed = JSON.parse(raw) as { ts?: number; formType?: string };
    if (!parsed.ts || Date.now() - parsed.ts > LEAD_TTL_MS) return null;
    if (!parsed.formType) return null;

    return { formType: parsed.formType };
  } catch {
    return null;
  }
}

export function isBookingSuccessfulMessage(data: unknown) {
  if (!data) return false;

  if (typeof data === "string") {
    return data.toLowerCase().includes("bookingsuccessful");
  }

  if (typeof data === "object") {
    const maybeRecord = data as Record<string, unknown>;
    const value = [maybeRecord.type, maybeRecord.event, maybeRecord.name]
      .filter(Boolean)
      .map(String)
      .join(" ")
      .toLowerCase();

    return value.includes("bookingsuccessful") || value.includes("booking_successful");
  }

  return false;
}