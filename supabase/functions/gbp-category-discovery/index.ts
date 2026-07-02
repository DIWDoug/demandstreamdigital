const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Simple IP-based rate limiting (in-memory)
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_PER_WINDOW = 8;
const rateCache = new Map<string, { count: number; resetAt: number }>();

function checkRate(key: string) {
  const now = Date.now();
  const entry = rateCache.get(key);
  if (!entry || entry.resetAt < now) {
    rateCache.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_PER_WINDOW) return false;
  entry.count++;
  return true;
}

const SYSTEM_PROMPT = `You are a Google Business Profile (GBP) category expert specializing in the Plumbing and HVAC trades in the United States.

Given a user's business type, keyword, or short description, respond with the best GBP category setup for a Plumbing or HVAC company.

STRICT RULES:
- Only respond for Plumbing, HVAC, drain/sewer, water heater, indoor air quality, and directly adjacent home-service trades.
- If the input is clearly outside Plumbing/HVAC (e.g., "restaurant", "law firm", "salon"), set "outOfScope": true and leave arrays empty; put a short polite explanation in "note".
- Use ONLY real Google Business Profile category names (exact strings Google uses in the GBP category picker). Do not invent categories.
- primaryCategory should be the single best fit.
- secondaryCategories: 3-6 real GBP secondary categories that reinforce topical relevance without diluting the primary.
- services: 8-12 specific service item names a contractor would list under "Services" in GBP.
- pageIdeas: 5-8 website page/URL slug ideas that map to the primary category and top services for local SEO.
- keywords: 6-10 high-intent local search phrases (no city name).
- tip: one concrete optimization tip specific to this category.

Return ONLY valid JSON matching the requested schema. No prose, no markdown fences.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";
  if (!checkRate(ip)) {
    return new Response(JSON.stringify({ error: "Rate limit exceeded. Try again shortly." }), {
      status: 429,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const query = String(body?.query ?? "").trim();
    if (!query || query.length < 2 || query.length > 200) {
      return new Response(JSON.stringify({ error: "Please enter a business type (2-200 chars)." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI service not configured." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userPrompt = `Business input: "${query}"

Respond with JSON only, matching this exact shape:
{
  "outOfScope": boolean,
  "note": string,
  "primaryCategory": { "name": string, "why": string },
  "secondaryCategories": [{ "name": string, "why": string }],
  "services": [string],
  "pageIdeas": [{ "title": string, "slug": string }],
  "keywords": [string],
  "tip": string
}`;

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    });

    if (aiResp.status === 429) {
      return new Response(JSON.stringify({ error: "AI service is busy. Please try again in a moment." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (aiResp.status === 402) {
      return new Response(JSON.stringify({ error: "AI credits exhausted. Please contact us." }), {
        status: 402,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!aiResp.ok) {
      const errText = await aiResp.text();
      console.error("AI gateway error:", aiResp.status, errText);
      return new Response(JSON.stringify({ error: "AI request failed." }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiData = await aiResp.json();
    const content = aiData?.choices?.[0]?.message?.content ?? "";
    const cleaned = String(content).replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();

    let parsed: unknown;
    try {
      parsed = JSON.parse(cleaned);
    } catch (e) {
      console.error("Failed to parse AI JSON:", cleaned.slice(0, 500));
      return new Response(JSON.stringify({ error: "AI returned an invalid response. Please retry." }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ result: parsed }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("gbp-category-discovery error:", err);
    return new Response(JSON.stringify({ error: "Unexpected error." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
