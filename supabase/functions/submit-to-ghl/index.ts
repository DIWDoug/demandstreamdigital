import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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
    const GHL_API_KEY = Deno.env.get("GHL_API_KEY");
    const GHL_LOCATION_ID = Deno.env.get("GHL_LOCATION_ID");

    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.error("Missing GHL credentials");
      throw new Error("Server configuration error");
    }

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

    console.log("Submitting contact to GHL:", { name, email, phone, revenue });

    // Create contact in Go High Level
    const ghlResponse = await fetch(
      `https://services.leadconnectorhq.com/contacts/`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GHL_API_KEY}`,
          "Content-Type": "application/json",
          "Version": "2021-07-28",
        },
        body: JSON.stringify({
          locationId: GHL_LOCATION_ID,
          firstName: name.split(" ")[0],
          lastName: name.split(" ").slice(1).join(" ") || "",
          email: email,
          phone: phone,
          source: "Website Contact Form",
          customFields: [
            {
              key: "agency_monthly_revenue",
              value: revenue
            }
          ],
          tags: ["Website Lead", "Partnership Inquiry"]
        }),
      }
    );

    const ghlData = await ghlResponse.json();

    if (!ghlResponse.ok) {
      console.error("GHL API error:", ghlData);
      throw new Error(ghlData.message || "Failed to create contact in GHL");
    }

    console.log("Contact created successfully:", ghlData);

    return new Response(
      JSON.stringify({ success: true, contactId: ghlData.contact?.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: any) {
    console.error("Error in submit-to-ghl function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to submit contact" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
