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
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, phoneCountryCode, revenue, website }: ContactFormData = await req.json();

    // Validate required fields
    if (!name || !email || !revenue) {
      return new Response(
        JSON.stringify({ error: "Name, email, and revenue are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Saving lead to database:", { name, email, phone, revenue, website });

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert lead into database
    const { data, error } = await supabase
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

    console.log("Lead saved successfully:", data);

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
