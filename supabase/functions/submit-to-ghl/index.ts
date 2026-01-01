import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GHL_FORM_ID = "nhDPKj4E2XSEVGDkoU7U";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  revenue: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, revenue }: ContactFormData = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !revenue) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
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

    console.log("Submitting to GHL form:", { name, email, phone, revenue });

    // Submit to GHL form endpoint
    const ghlResponse = await fetch(
      `https://services.leadconnectorhq.com/forms/submit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formId: GHL_FORM_ID,
          name: name,
          email: email,
          phone: phone,
          agency_monthly_revenue: revenue,
          source: "Website Contact Form"
        }),
      }
    );

    const responseText = await ghlResponse.text();
    console.log("GHL response status:", ghlResponse.status);
    console.log("GHL response:", responseText);

    if (!ghlResponse.ok) {
      console.error("GHL form submission error:", responseText);
      throw new Error("Failed to submit form to GHL");
    }

    let ghlData;
    try {
      ghlData = JSON.parse(responseText);
    } catch {
      ghlData = { raw: responseText };
    }

    console.log("Form submitted successfully:", ghlData);

    return new Response(
      JSON.stringify({ success: true, data: ghlData }),
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
