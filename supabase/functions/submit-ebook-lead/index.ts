import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EbookLeadData {
  email: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: EbookLeadData = await req.json();

    // Validate email
    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Rate limiting - 15 minute window, 5 max submissions per email
    const windowStart = new Date(Date.now() - 15 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabase
      .from("leads")
      .select("*", { count: "exact", head: true })
      .eq("email", email)
      .gte("created_at", windowStart);

    if (countError) {
      console.error("Rate limit check error:", countError);
    }

    if ((count || 0) >= 5) {
      console.log("Rate limit exceeded for email:", email);
      return new Response(
        JSON.stringify({ error: "Too many submissions. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Saving ebook lead to database:", { email });

    // Insert lead into database
    const { data, error } = await supabase
      .from("leads")
      .insert({
        email,
        source: "ebook_local_growth_engine",
      })
      .select()
      .single();

    if (error) {
      console.error("Database insert error:", error);
      return new Response(
        JSON.stringify({ error: "Unable to process your request" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Ebook lead saved successfully:", data);

    // Forward to Zapier webhook
    const zapierWebhookUrl = Deno.env.get("ZAPIER_WEBHOOK_URL");
    if (zapierWebhookUrl) {
      try {
        const zapierResponse = await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: data.id,
            lead_type: "Ebook Download",
            email,
            source: "ebook_local_growth_engine",
            created_at: data.created_at,
          }),
        });
        console.log("Zapier webhook response:", zapierResponse.status);
      } catch (zapierError) {
        console.error("Zapier webhook error:", zapierError);
        // Don't fail the request if Zapier fails
      }
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in submit-ebook-lead function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to submit lead" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
