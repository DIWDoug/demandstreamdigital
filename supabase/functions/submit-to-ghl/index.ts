import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Request logging middleware
function logRequest(req: Request, context: { functionName: string; userId?: string }) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const userAgent = req.headers.get("user-agent") || "unknown";
  const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                   req.headers.get("cf-connecting-ip") || "unknown";
  
  console.log(JSON.stringify({
    type: "request",
    timestamp,
    function: context.functionName,
    method,
    url,
    userId: context.userId || "anonymous",
    clientIP,
    userAgent: userAgent.substring(0, 100),
  }));
}

function logResponse(context: { functionName: string; userId?: string; statusCode: number; durationMs: number }) {
  const timestamp = new Date().toISOString();
  
  console.log(JSON.stringify({
    type: "response",
    timestamp,
    function: context.functionName,
    userId: context.userId || "anonymous",
    statusCode: context.statusCode,
    durationMs: context.durationMs,
  }));
}

interface ContactFormData {
  name?: string;
  email?: string;
  phone?: string;
  phoneCountryCode?: string;
  revenue?: string;
  website?: string;
  servicesInterested?: string[];
  message?: string;
  formType?: string;
  leadId?: string;
  recaptchaToken?: string;
  company?: string;
  contractorTypes?: string[];
  marketingChannels?: string[];
  budgetAnswer?: string | null;
}


// Rate limiting configuration
const RATE_LIMIT_WINDOW_MINUTES = 15;
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const MAX_IP_SUBMISSIONS_PER_WINDOW = 10; // Higher limit for IP (shared networks)

// Blocked IP ranges (known bad actors, data centers, etc.)
const BLOCKED_IP_PREFIXES: string[] = [
  // Add known malicious IP ranges here
  // Example: "185.220.", "23.129."
];

// In-memory IP rate limit cache (resets on cold start, but provides burst protection)
const ipRateLimitCache = new Map<string, { count: number; resetAt: number }>();

function isIPBlocked(ip: string): boolean {
  if (!ip || ip === "unknown") return false;
  return BLOCKED_IP_PREFIXES.some(prefix => ip.startsWith(prefix));
}

function checkIPRateLimit(ip: string): { allowed: boolean; remaining: number } {
  if (!ip || ip === "unknown") return { allowed: true, remaining: MAX_IP_SUBMISSIONS_PER_WINDOW };
  
  const now = Date.now();
  const windowMs = RATE_LIMIT_WINDOW_MINUTES * 60 * 1000;
  const entry = ipRateLimitCache.get(ip);
  
  // Clean up expired entries periodically
  if (ipRateLimitCache.size > 1000) {
    for (const [key, val] of ipRateLimitCache.entries()) {
      if (val.resetAt < now) ipRateLimitCache.delete(key);
    }
  }
  
  if (!entry || entry.resetAt < now) {
    // New window
    ipRateLimitCache.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: MAX_IP_SUBMISSIONS_PER_WINDOW - 1 };
  }
  
  if (entry.count >= MAX_IP_SUBMISSIONS_PER_WINDOW) {
    return { allowed: false, remaining: 0 };
  }
  
  entry.count++;
  return { allowed: true, remaining: MAX_IP_SUBMISSIONS_PER_WINDOW - entry.count };
}

// Security headers for rate limiting responses
function getRateLimitHeaders(remaining: number, resetSeconds: number): Record<string, string> {
  return {
    ...corsHeaders,
    "Content-Type": "application/json",
    "X-RateLimit-Limit": String(MAX_IP_SUBMISSIONS_PER_WINDOW),
    "X-RateLimit-Remaining": String(Math.max(0, remaining)),
    "X-RateLimit-Reset": String(Math.floor(Date.now() / 1000) + resetSeconds),
    "Retry-After": String(resetSeconds),
  };
}

// reCAPTCHA v3 configuration
const RECAPTCHA_SECRET_KEY = Deno.env.get("RECAPTCHA_SECRET_KEY");
const RECAPTCHA_SCORE_THRESHOLD = 0.5;

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidWebsite = (website: string) => {
  if (!website) return false;
  if (website.length > 2048) return false;
  if (/\s/.test(website)) return false;
  return true;
};

// Verify reCAPTCHA v3 token with Google
async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number; action?: string }> {
  if (!RECAPTCHA_SECRET_KEY) {
    console.log("reCAPTCHA secret key not configured, skipping verification");
    return { success: true };
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    console.log("reCAPTCHA verification result:", JSON.stringify(data));
    
    if (!data.success) {
      console.log("reCAPTCHA token invalid:", data["error-codes"]);
      return { success: false };
    }

    const score = data.score ?? 1.0;
    
    return {
      success: score >= RECAPTCHA_SCORE_THRESHOLD,
      score,
      action: data.action,
    };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return { success: false };
  }
}

serve(async (req) => {
  const startTime = Date.now();
  const functionName = "submit-to-ghl";
  let statusCode = 200;
  
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  logRequest(req, { functionName });

  try {
    const body: ContactFormData = await req.json();

    const {
      name,
      email,
      phone,
      phoneCountryCode,
      revenue,
      website,
      servicesInterested,
      message,
      formType,
      leadId,
      recaptchaToken,
      company,
      contractorTypes,
      marketingChannels,
      budgetAnswer,
    } = body;


    // Get client IP for rate limiting and reCAPTCHA
    const clientIP =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";

    // Check if IP is blocked
    if (isIPBlocked(clientIP)) {
      console.log(`Blocked IP attempted submission: ${clientIP}`);
      statusCode = 403;
      logResponse({ functionName, statusCode, durationMs: Date.now() - startTime });
      return new Response(
        JSON.stringify({ error: "Access denied" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check IP-based rate limit (in-memory, burst protection)
    const ipRateLimit = checkIPRateLimit(clientIP);
    if (!ipRateLimit.allowed) {
      console.log(`IP rate limit exceeded for ${clientIP}`);
      statusCode = 429;
      logResponse({ functionName, statusCode, durationMs: Date.now() - startTime });
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: getRateLimitHeaders(0, RATE_LIMIT_WINDOW_MINUTES * 60) }
      );
    }

    const isStep1 = !!formType && formType.endsWith("_step1");

    // Verify reCAPTCHA token when one is supplied.
    // If the browser could not produce a token (blocked script, extension, offline),
    // we still accept the lead: honeypot + IP/email rate limiting remain in force.
    // Losing a real lead is worse than letting a rare unverified one through.
    let recaptchaVerified = false;
    if (!isStep1 && recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      if (!recaptchaResult.success) {
        console.log("reCAPTCHA verification failed:", recaptchaResult);
        return new Response(
          JSON.stringify({ error: "Security verification failed. Please try again." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      recaptchaVerified = true;
    } else if (!isStep1 && RECAPTCHA_SECRET_KEY && !recaptchaToken) {
      console.log("reCAPTCHA token missing for step 2 submission; accepting with rate-limit protection only");
    }


    // Map formType to human-readable lead_type for automations
    const leadTypeMap: Record<string, string> = {
      hero_homepage: "Homepage Hero Form",
      hero_homepage_step1: "Homepage Hero (Step 1 - Contact + Website)",

      service_hub_hero: "Service Page Hero Form",
      service_hub_hero_step1: "Service Page Hero (Step 1 - Contact + Website)",

      fulfillment_steps: "Fulfillment Steps Form",
      fulfillment_steps_step1: "Fulfillment Steps (Step 1 - Contact + Website)",

      blog_contact_form: "Blog Sidebar Form",
      blog_contact_form_step1: "Blog Sidebar (Step 1 - Contact + Website)",

      contact_page: "Contact Page Form",
      contact_page_step1: "Contact Page (Step 1 - Contact + Website)",

      calculator: "Calculator Form",
      calculator_step1: "Calculator (Step 1 - Contact + Website)",
    };

    const lead_type = leadTypeMap[formType || ""] || "Contact Form";

    // Validate required fields
    if (isStep1) {
      if (!name?.trim() || !email?.trim() || !website?.trim()) {
        return new Response(
          JSON.stringify({ error: "Name, email, and website are required" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      if (!isValidEmail(email)) {
        return new Response(JSON.stringify({ error: "Invalid email format" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      if (!isValidWebsite(website)) {
        return new Response(JSON.stringify({ error: "Invalid website" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    } else {
      if (!name?.trim() || !email?.trim() || !phone?.trim() || !revenue?.trim()) {
        return new Response(
          JSON.stringify({ error: "Name, email, phone, and revenue are required" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      if (!isValidEmail(email)) {
        return new Response(JSON.stringify({ error: "Invalid email format" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      if (website && !isValidWebsite(website)) {
        return new Response(JSON.stringify({ error: "Invalid website" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // Validate servicesInterested payload shape (optional)
    const sanitizedServicesInterested = Array.isArray(servicesInterested)
      ? servicesInterested
          .filter((s) => typeof s === "string")
          .map((s) => s.trim())
          .filter((s) => s.length > 0)
          .slice(0, 20)
      : undefined;

    // Create database client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Rate limiting check - count recent submissions from same email (preferred)
    const windowStart = new Date(
      Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000
    ).toISOString();

    let recentSubmissions = 0;
    if (email) {
      const { count: emailCount } = await supabase
        .from("leads")
        .select("*", { count: "exact", head: true })
        .eq("email", email)
        .gte("created_at", windowStart);

      recentSubmissions = emailCount || 0;
    }

    console.log(
      `Rate limit check: ${recentSubmissions} submissions from ${email || clientIP} in last ${RATE_LIMIT_WINDOW_MINUTES} minutes`
    );

    if (recentSubmissions >= MAX_SUBMISSIONS_PER_WINDOW) {
      console.log(`Rate limit exceeded for ${email || clientIP}`);
      statusCode = 429;
      logResponse({ functionName, statusCode, durationMs: Date.now() - startTime });
      return new Response(
        JSON.stringify({ error: "Too many submissions. Please try again later." }),
        { status: 429, headers: getRateLimitHeaders(0, RATE_LIMIT_WINDOW_MINUTES * 60) }
      );
    }

    // Save lead to database when email is present (step 1 inserts, step 2 updates)
    let data: any = { id: null, created_at: new Date().toISOString() };

    if (email) {
      if (!isStep1 && leadId) {
        const { data: updatedData, error: updateError } = await supabase
          .from("leads")
          .update({
            name: name ?? null,
            phone: phone ?? null,
            phone_country_code: phoneCountryCode || "+1",
            revenue: revenue ?? null,
            website: website ?? null,
            source: "contact_form",
          })
          .eq("id", leadId)
          .select()
          .maybeSingle();

        if (updateError) {
          console.error("Database update error:", updateError);
        }

        if (updatedData) {
          data = updatedData;
          console.log("Lead updated successfully:", data);
        } else {
          // Fallback: if leadId not found, insert a new record
          const { data: insertData, error: insertError } = await supabase
            .from("leads")
            .insert({
              name: name ?? null,
              email,
              phone: phone ?? null,
              phone_country_code: phoneCountryCode || "+1",
              revenue: revenue ?? null,
              website: website ?? null,
              source: "contact_form",
            })
            .select()
            .single();

          if (insertError) {
            console.error("Database insert error:", insertError);
            throw new Error("submission_failed");
          }

          data = insertData;
          console.log("Lead saved successfully (fallback insert):", data);
        }
      } else {
        // Step 1: insert
        const { data: insertData, error: insertError } = await supabase
          .from("leads")
          .insert({
            name: name ?? null,
            email,
            phone: phone ?? null,
            phone_country_code: phoneCountryCode || "+1",
            revenue: revenue ?? null,
            website: website ?? null,
            source: "contact_form_step1",
          })
          .select()
          .single();

        if (insertError) {
          console.error("Database insert error:", insertError);
          throw new Error("submission_failed");
        }

        data = insertData;
        console.log("Lead saved successfully:", data);
      }
    } else {
      console.log("Missing email; skipping DB insert/update");
    }

    // Pre-compute contact fields for downstream webhooks.
    const fullName = typeof name === "string" ? name.trim() : "";
    const nameParts = fullName.split(/\s+/).filter(Boolean);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ");
    const rawPhone = typeof phone === "string" ? phone.replace(/\D/g, "") : "";
    const cc = (phoneCountryCode || "+1").replace(/\D/g, "");
    const phoneE164 = rawPhone
      ? rawPhone.startsWith(cc)
        ? `+${rawPhone}`
        : `+${cc}${rawPhone}`
      : "";

    // Forward to the legacy Zapier webhook for non-grow funnels only.
    // The grow funnel now routes exclusively to Upcall below; the old grow Zap
    // webhook is disabled and should be removed from your Zapier account.
    const isGrowFunnel = typeof formType === "string" && formType.startsWith("grow");
    const zapierWebhookUrl = !isGrowFunnel ? Deno.env.get("ZAPIER_WEBHOOK_URL") : undefined;
    const zapier: { attempted: boolean; status?: number; ok?: boolean } = {
      attempted: false,
    };

    if (!zapierWebhookUrl) {
      if (!isGrowFunnel) {
        console.log("Zapier webhook URL not configured");
      }
    } else {
      zapier.attempted = true;

      const payload = {
        id: data.id,
        lead_id: data.id,
        lead_stage: isStep1 ? "step1" : "step2",
        lead_type,
        form_type: formType || "unknown",
        name,
        // Upcall-friendly contact fields
        first_name: firstName,
        last_name: lastName,
        phone_e164: phoneE164,
        email,
        phone,
        phoneCountryCode: phoneCountryCode || "+1",
        revenue,
        website,
        servicesInterested: sanitizedServicesInterested,
        message: typeof message === "string" ? message.slice(0, 5000) : undefined,
        source: isStep1 ? "contact_form_step1" : "contact_form",
        created_at: data.created_at,
      };

      console.log("Sending webhook to Zapier:", {
        lead_type,
        form_type: payload.form_type,
        source: payload.source,
        has_id: !!payload.id,
      });

      try {
        const zapierResponse = await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        zapier.status = zapierResponse.status;
        zapier.ok = zapierResponse.ok;

        const responseText = await zapierResponse.text().catch(() => "");
        console.log(
          "Zapier webhook response:",
          zapierResponse.status,
          responseText.slice(0, 300)
        );
      } catch (zapierError) {
        console.error("Zapier webhook error:", zapierError);
        // Don't fail the request if Zapier fails
      }
    }

    // Forward the same lead to the Upcall Zap (all contact forms, completed leads only)
    // Slim, flat payload named to match Upcall's "Add Contact" fields 1:1.
    const upcallWebhookUrl = Deno.env.get("ZAPIER_WEBHOOK_URL_UPCALL");
    if (upcallWebhookUrl && !isStep1 && phoneE164) {
      const revenueLabels: Record<string, string> = {
        under_500k: "Less than $500k",
        "500k_1mm": "Between $500k and $1mm",
        "1mm_5mm": "Between $1mm and $5mm",
        "5mm_10mm": "Between $5mm and $10mm",
        "10mm_plus": "Greater than $10mm",
      };
      const clean = (v: unknown) =>
        typeof v === "string" ? v.trim().slice(0, 300) : "";
      const cleanList = (v: unknown) =>
        Array.isArray(v)
          ? v.map((x) => clean(x)).filter(Boolean)
          : [];

      const tradeType = cleanList(contractorTypes).join(", ");
      const channelList = cleanList(marketingChannels);
      const services = cleanList(sanitizedServicesInterested);
      const revenueLabel = revenue
        ? revenueLabels[clean(revenue)] || clean(revenue)
        : "";

      const notesLines: string[] = [
        `Email: ${email || ""}`,
        `Phone: ${phoneE164}`,
        `Trade Type: ${tradeType}`,
        `Company Name: ${clean(company)}`,
        `Website: ${clean(website)}`,
        "Currently Getting Calls By Doing:",
        ...(channelList.length
          ? channelList.map((c) => `  - ${c}`)
          : ["  - (none selected)"]),
        `12 Month Revenue: ${revenueLabel}`,
      ];

      if (budgetAnswer) {
        notesLines.push(`Can Invest In Growth: ${clean(budgetAnswer)}`);
      }
      if (services.length) {
        notesLines.push(`Services Interested: ${services.join(", ")}`);
      }
      if (typeof message === "string" && message.trim()) {
        notesLines.push(`Message: ${message.trim().slice(0, 1000)}`);
      }
      notesLines.push(`Lead Source: ${lead_type || formType || "Website"}`);
      if (!recaptchaVerified) {
        notesLines.push("Note: bot check unverified (script blocked in browser)");
      }

      const upcallPayload = {
        // Upcall-ready fields
        phone_number: phoneE164,
        first_name: firstName,
        last_name: lastName,
        company_name: clean(company) || clean(website),
        title: lead_type || "",
        notes: notesLines.join("\n"),
        email: email || "",
        // Segmentable fields for Zapier filtering / mapping
        trade_type: tradeType,
        website: clean(website),
        marketing_channels: channelList.join(", "),
        revenue_band: revenueLabel,
        budget_answer: clean(budgetAnswer),
        services_interested: services.join(", "),
        lead_source: lead_type || formType || "Website",
        recaptcha_status: recaptchaVerified ? "verified" : "unverified",
        raw_message: typeof message === "string" ? message.trim().slice(0, 1000) : "",
      };

      try {
        const upcallResponse = await fetch(upcallWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(upcallPayload),
        });
        console.log("Upcall webhook response:", upcallResponse.status);
      } catch (upcallError) {
        console.error("Upcall webhook error:", upcallError);
      }
    } else if (!upcallWebhookUrl) {
      console.log("Upcall webhook URL not configured");
    }


    logResponse({ functionName, statusCode: 200, durationMs: Date.now() - startTime });
    return new Response(JSON.stringify({ success: true, data, zapier }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    statusCode = 500;
    console.error("Error in submit-to-ghl function:", error);
    logResponse({ functionName, statusCode, durationMs: Date.now() - startTime });
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
