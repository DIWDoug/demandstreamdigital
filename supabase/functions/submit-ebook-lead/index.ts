import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Segmentation for ebook leads in GHL
const GHL_TAG = "ebook_local_growth_engine";
const GHL_SOURCE = "Ebook Download - Local Growth Engine";
const GHL_API_VERSION = "2021-07-28";

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

    const apiKey = Deno.env.get("GHL_API_KEY");
    const locationId = Deno.env.get("GHL_LOCATION_ID");

    if (!apiKey || !locationId) {
      console.error("Missing required GHL env vars", {
        hasApiKey: Boolean(apiKey),
        hasLocationId: Boolean(locationId),
      });

      return new Response(
        JSON.stringify({ error: "Lead capture is temporarily unavailable" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // NOTE: GHL's /forms/submit endpoints can require captchaV3.
    // Using the authenticated Contacts API avoids that.
    console.log("Upserting ebook lead contact in GHL:", { email, tag: GHL_TAG });

    const ghlPayload = {
      locationId,
      email,
      tags: [GHL_TAG],
      source: GHL_SOURCE,
    };

    const ghlResponse = await fetch(
      "https://services.leadconnectorhq.com/contacts/upsert",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          Version: GHL_API_VERSION,
        },
        body: JSON.stringify(ghlPayload),
      }
    );

    const responseText = await ghlResponse.text();
    console.log("GHL response status:", ghlResponse.status);
    console.log("GHL response:", responseText);

    if (!ghlResponse.ok) {
      console.error("GHL contact upsert error:", responseText);
      throw new Error("Failed to submit lead to GHL");
    }

    let ghlData: unknown;
    try {
      ghlData = JSON.parse(responseText);
    } catch {
      ghlData = { raw: responseText };
    }

    console.log("Ebook lead upserted successfully:", ghlData);

    return new Response(JSON.stringify({ success: true, data: ghlData }), {
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
