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

interface EbookLeadData {
  email: string;
  recaptchaToken?: string;
}

// reCAPTCHA configuration
const RECAPTCHA_SECRET_KEY = Deno.env.get("RECAPTCHA_SECRET_KEY");
const RECAPTCHA_SCORE_THRESHOLD = 0.5;

// Verify reCAPTCHA token with Google
async function verifyRecaptcha(token: string, clientIP: string): Promise<{ success: boolean; score?: number; action?: string }> {
  if (!RECAPTCHA_SECRET_KEY) {
    console.log("reCAPTCHA secret key not configured, skipping verification");
    return { success: true };
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}&remoteip=${clientIP}`,
    });

    const data = await response.json();
    console.log("reCAPTCHA verification result:", { success: data.success, score: data.score, action: data.action });
    
    return {
      success: data.success && (data.score === undefined || data.score >= RECAPTCHA_SCORE_THRESHOLD),
      score: data.score,
      action: data.action,
    };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return { success: false };
  }
}

serve(async (req) => {
  const startTime = Date.now();
  const functionName = "submit-ebook-lead";
  let statusCode = 200;
  
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  logRequest(req, { functionName });

  try {
    const { email, recaptchaToken }: EbookLeadData = await req.json();

    // Get client IP for rate limiting and reCAPTCHA
    const clientIP =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";

    // Verify reCAPTCHA token if provided
    if (recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken, clientIP);
      if (!recaptchaResult.success) {
        console.log("reCAPTCHA verification failed:", recaptchaResult);
        return new Response(
          JSON.stringify({ error: "Security verification failed. Please try again." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    } else if (RECAPTCHA_SECRET_KEY) {
      // If reCAPTCHA is configured but no token provided
      console.log("reCAPTCHA token missing for ebook submission");
      return new Response(
        JSON.stringify({ error: "Security verification required. Please try again." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

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
        JSON.stringify({ error: "An error occurred processing your request" }),
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

    logResponse({ functionName, statusCode: 200, durationMs: Date.now() - startTime });
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    statusCode = 500;
    console.error("Error in submit-ebook-lead function:", error);
    logResponse({ functionName, statusCode, durationMs: Date.now() - startTime });
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
