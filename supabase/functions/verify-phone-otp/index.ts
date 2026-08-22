import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const ACCOUNT_SID = Deno.env.get("TWILIO_ACCOUNT_SID");
const AUTH_TOKEN = Deno.env.get("TWILIO_AUTH_TOKEN");
const VERIFY_SERVICE_SID = Deno.env.get("TWILIO_VERIFY_SERVICE_SID");

const VERIFY_BASE = "https://verify.twilio.com/v2/Services";

// Simple in-memory abuse guards (per isolate). Blocks SMS pumping bursts.
const sendLog = new Map<string, number[]>();
const MAX_SENDS_PER_PHONE = 5;
const WINDOW_MS = 15 * 60 * 1000;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const normalizePhone = (raw: string, countryCode: string) => {
  const digits = String(raw).replace(/\D/g, "");
  if (!digits) return null;
  if (String(raw).trim().startsWith("+")) return `+${digits}`;
  const cc = String(countryCode || "+1").replace(/\D/g, "") || "1";
  if (digits.startsWith(cc) && digits.length > 10) return `+${digits}`;
  return `+${cc}${digits}`;
};

const twilioForm = async (path: string, body: Record<string, string>) => {
  const res = await fetch(`${VERIFY_BASE}/${VERIFY_SERVICE_SID}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(`${ACCOUNT_SID}:${AUTH_TOKEN}`)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body),
  });
  const text = await res.text();
  let parsed: Record<string, unknown> = {};
  try {
    parsed = JSON.parse(text);
  } catch {
    parsed = { raw: text };
  }
  return { ok: res.ok, status: res.status, data: parsed, text };
};

const throttled = (phone: string) => {
  const now = Date.now();
  const hits = (sendLog.get(phone) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= MAX_SENDS_PER_PHONE) {
    sendLog.set(phone, hits);
    return true;
  }
  hits.push(now);
  sendLog.set(phone, hits);
  return false;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  if (!ACCOUNT_SID || !AUTH_TOKEN || !VERIFY_SERVICE_SID) {
    console.error("Twilio Verify env vars missing");
    return json({ error: "Verification is not configured" }, 500);
  }

  try {
    const body = await req.json().catch(() => ({}));
    const action = body?.action;
    const phone = normalizePhone(body?.phone ?? "", body?.phoneCountryCode ?? "+1");

    if (!phone || phone.replace(/\D/g, "").length < 8 || phone.length > 20) {
      return json({ error: "A valid phone number is required" }, 400);
    }

    if (action === "send") {
      if (throttled(phone)) {
        return json({ error: "Too many code requests. Try again in a few minutes." }, 429);
      }
      const result = await twilioForm("/Verifications", { To: phone, Channel: "sms" });
      if (!result.ok) {
        console.error(`Twilio send failed [${result.status}]: ${result.text}`);
        const message =
          typeof result.data?.message === "string"
            ? result.data.message
            : "Could not send the code to that number.";
        return json({ error: message, status: result.status }, result.status === 429 ? 429 : 400);
      }
      return json({ sent: true, to: phone });
    }

    if (action === "check") {
      const code = String(body?.code ?? "").replace(/\D/g, "");
      if (code.length < 4 || code.length > 10) {
        return json({ error: "Enter the 6 digit code we texted you." }, 400);
      }
      const result = await twilioForm("/VerificationCheck", { To: phone, Code: code });
      if (!result.ok) {
        console.error(`Twilio check failed [${result.status}]: ${result.text}`);
        return json({ verified: false, error: "That code is not valid. Request a new one." }, 400);
      }
      const approved = result.data?.status === "approved" && result.data?.valid === true;
      if (!approved) {
        return json({ verified: false, error: "That code is incorrect or expired." }, 400);
      }
      return json({ verified: true });
    }

    return json({ error: "Unknown action" }, 400);
  } catch (error) {
    console.error("verify-phone-otp error:", error);
    return json({ error: "Verification failed. Please try again." }, 500);
  }
});
