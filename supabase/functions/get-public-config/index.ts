import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  console.log("get-public-config: Returning public configuration");

  // Only return PUBLIC keys that are safe to expose to the frontend
  const config = {
    recaptchaSiteKey: Deno.env.get("VITE_RECAPTCHA_SITE_KEY") || null,
  };

  console.log("get-public-config: recaptchaSiteKey present:", !!config.recaptchaSiteKey);

  return new Response(JSON.stringify(config), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
