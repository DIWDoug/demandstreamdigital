import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GHL_FORM_ID = "ulVZvsipRkTobQjdrpBy";

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
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Submitting ebook lead to GHL:", { email });

    // Build form data object with required fields
    const formDataPayload = {
      formId: GHL_FORM_ID,
      email: email,
      source: "Ebook Download - Local Growth Engine"
    };

    // GHL requires FormData with stringified JSON in "formData" key
    const formData = new FormData();
    formData.set("formData", JSON.stringify(formDataPayload));

    // Submit to GHL backend form endpoint
    const ghlResponse = await fetch(
      `https://backend.leadconnectorhq.com/forms/submit`,
      {
        method: "POST",
        body: formData,
      }
    );

    const responseText = await ghlResponse.text();
    console.log("GHL response status:", ghlResponse.status);
    console.log("GHL response:", responseText);

    if (!ghlResponse.ok) {
      console.error("GHL form submission error:", responseText);
      throw new Error("Failed to submit lead to GHL");
    }

    let ghlData;
    try {
      ghlData = JSON.parse(responseText);
    } catch {
      ghlData = { raw: responseText };
    }

    console.log("Ebook lead submitted successfully:", ghlData);

    return new Response(
      JSON.stringify({ success: true, data: ghlData }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: any) {
    console.error("Error in submit-ebook-lead function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to submit lead" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
