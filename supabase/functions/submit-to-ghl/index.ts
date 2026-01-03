import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  phoneCountryCode?: string;
  revenue: string;
  website?: string;
  formType?: string;
}

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MINUTES = 15;
const MAX_SUBMISSIONS_PER_WINDOW = 5;

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, phoneCountryCode, revenue, website, formType }: ContactFormData = await req.json();

    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";

    // Map formType to human-readable lead_type for Zapier
    const leadTypeMap: Record<string, string> = {
      hero_homepage: "Homepage Hero Form",
      service_hub_hero: "Service Page Hero Form",
      service_hub_hero_step1: "Service Page Hero (Step 1 - Website Only)",
      fulfillment_steps: "Fulfillment Steps Form",
      contact_page: "Contact Page Form",
      calculator: "Calculator Form",
    };
    const lead_type = leadTypeMap[formType || ""] || "Contact Form";

    // Step 1 partial leads only require website - skip validation and allow partial data
    const isPartialLead = formType === "service_hub_hero_step1";
    
    // Validate required fields (skip for partial leads)
    if (!isPartialLead && (!name || !email || !revenue)) {
      return new Response(
        JSON.stringify({ error: "Name, email, and revenue are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format (skip for partial leads with no email)
    if (!isPartialLead && email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ error: "Invalid email format" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Rate limiting check - count recent submissions from same IP or email
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString();
    
    // Check submissions by email (if provided) to prevent email-based spam
    let recentSubmissions = 0;
    if (email) {
      const { count: emailCount } = await supabase
        .from("leads")
        .select("*", { count: "exact", head: true })
        .eq("email", email)
        .gte("created_at", windowStart);
      
      recentSubmissions = emailCount || 0;
    }

    console.log(`Rate limit check: ${recentSubmissions} submissions from ${email || clientIP} in last ${RATE_LIMIT_WINDOW_MINUTES} minutes`);

    if (recentSubmissions >= MAX_SUBMISSIONS_PER_WINDOW) {
      console.log(`Rate limit exceeded for ${email || clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many submissions. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Saving lead to database:", { name, email, phone, revenue, website, formType });

    let data: any = { id: null, created_at: new Date().toISOString() };

    // Only insert to database for full leads (partial leads skip DB, just go to Zapier)
    if (!isPartialLead) {
      const { data: insertData, error } = await supabase
        .from("leads")
        .insert({
          name,
          email,
          phone,
          phone_country_code: phoneCountryCode || "+1",
          revenue,
          website,
          source: "contact_form",
        })
        .select()
        .single();

      if (error) {
        console.error("Database insert error:", error);
        throw new Error("Failed to save lead");
      }

      data = insertData;
      console.log("Lead saved successfully:", data);
    } else {
      console.log("Partial lead (step 1) - skipping DB insert, forwarding to Zapier only");
    }

    // Forward to Zapier webhook
    const zapierWebhookUrl = Deno.env.get("ZAPIER_WEBHOOK_URL");
    if (zapierWebhookUrl) {
      try {
        const zapierResponse = await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: data.id,
            lead_type,
            form_type: formType || "unknown",
            name,
            email,
            phone,
            phoneCountryCode: phoneCountryCode || "+1",
            revenue,
            website,
            source: "contact_form",
            created_at: data.created_at,
          }),
        });
        console.log("Zapier webhook response:", zapierResponse.status);
      } catch (zapierError) {
        console.error("Zapier webhook error:", zapierError);
        // Don't fail the request if Zapier fails
      }
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: any) {
    console.error("Error in submit-to-ghl function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to submit form" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
