import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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
  leadId?: string; // Step 2 should update the Step 1 record when provided
}

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MINUTES = 15;
const MAX_SUBMISSIONS_PER_WINDOW = 5;

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidWebsite = (website: string) => {
  // Allow domains without protocol (e.g. agency.com)
  if (!website) return false;
  if (website.length > 2048) return false;
  if (/\s/.test(website)) return false;
  return true;
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

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
    } = body;

    // Get client IP for rate limiting
    const clientIP =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";

    const isStep1 = !!formType && formType.endsWith("_step1");

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
      return new Response(
        JSON.stringify({ error: "Too many submissions. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
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
            throw new Error("Failed to save lead");
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
          throw new Error("Failed to save lead");
        }

        data = insertData;
        console.log("Lead saved successfully:", data);
      }
    } else {
      console.log("Missing email; skipping DB insert/update");
    }

    // Forward to Zapier webhook (used to reach CRM)
    const zapierWebhookUrl = Deno.env.get("ZAPIER_WEBHOOK_URL");
    const zapier: { attempted: boolean; status?: number; ok?: boolean } = {
      attempted: false,
    };

    if (!zapierWebhookUrl) {
      console.log("Zapier webhook URL not configured (ZAPIER_WEBHOOK_URL missing)");
    } else {
      zapier.attempted = true;

      const payload = {
        id: data.id,
        lead_id: data.id,
        lead_stage: isStep1 ? "step1" : "step2",
        lead_type,
        form_type: formType || "unknown",
        name,
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

    return new Response(JSON.stringify({ success: true, data, zapier }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in submit-to-ghl function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to submit form" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
