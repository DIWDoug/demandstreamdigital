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

// Verified real Google Business Profile categories (US) for Plumbing & HVAC.
// Source: categories present in the GBP category picker. Do NOT add categories
// that are not on this list without verifying them in the live GBP UI.
const ALLOWED_GBP_CATEGORIES = [
  // Plumbing
  "Plumber",
  "Drainage service",
  "Septic system service",
  "Gasfitter",
  "Hot water system supplier",
  "Water softening equipment supplier",
  "Water filter supplier",
  "Water pump supplier",
  "Water tank cleaning service",
  "Water damage restoration service",
  "Bathroom remodeler",
  "Kitchen remodeler",
  "Pipe supplier",
  // HVAC
  "HVAC contractor",
  "Heating contractor",
  "Air conditioning contractor",
  "Air conditioning repair service",
  "Air conditioning system supplier",
  "Furnace repair service",
  "Furnace parts supplier",
  "Heating equipment supplier",
  "Boiler supplier",
  "Boiler service",
  "Heat pump supplier",
  "Air duct cleaning service",
  "Air filter supplier",
  "Insulation contractor",
  "Ventilating equipment manufacturer",
  "Mechanical contractor",
  "Fireplace store",
  // Adjacent / cross-trade (only when clearly relevant)
  "Contractor",
  "General contractor",
  "Repair service",
];

const SYSTEM_PROMPT = `You are a Google Business Profile (GBP) category expert specializing in the Plumbing and HVAC trades in the United States.

Given a user's business type, keyword, or short description, respond with the best GBP category setup for a Plumbing or HVAC company.

STRICT RULES:
- Only respond for Plumbing, HVAC, drain/sewer, water heater, indoor air quality, and directly adjacent home-service trades.
- If the input is clearly outside Plumbing/HVAC (e.g., "restaurant", "law firm", "salon"), set "outOfScope": true and leave arrays empty; put a short polite explanation in "note".
- CATEGORY WHITELIST: You MUST pick primaryCategory.name and every secondaryCategories[].name VERBATIM from this exact list. Do not paraphrase, pluralize, reword, translate, or invent. If nothing on the list fits, return fewer categories (or zero secondaries) rather than making one up.
${ALLOWED_GBP_CATEGORIES.map((c) => `  - ${c}`).join("\n")}
- primaryCategory: the single best fit from the whitelist. Include a match "score" from 0-100 and a short "matchReason" (e.g., "Exact keyword match found", "Closest whitelisted category for this service intent").
- secondaryCategories: 0-5 items from the whitelist. Quality over quantity. Only include a secondary if it is genuinely a different service line the business actually performs and would take real phone calls for. Never pad the list. It is OK (and often correct) to return 0-2 secondaries. Never include the primary again. Each item MUST include a "score" from 60-89 reflecting relevance, sorted highest to lowest.
- Score guidance: 90-100 = perfect/exact match, 80-89 = excellent match, 70-79 = great match, 60-69 = good match. Never return a secondary below 60.
- For each category, the "why" must be a short, concrete reason grounded in the input, not generic filler.
- services: 8-12 specific service item names a contractor would list under "Services" in GBP. CRITICAL: never mix repair and installation in the same services list. A repair intent and an installation/replacement intent are different phone calls and belong on separate GBP profiles/pages. Infer intent from the input (e.g., "water heater repair" => repair/diagnostic/leak services only; "water heater installation" => install/replace/haul-away services only). If the input is generic (e.g., just "plumber" or "HVAC"), pick ONE intent lane (default to repair/service) and stay in that lane for every service item. Do not include installation items in a repair list or repair items in an installation list.
- pageIdeas: 6-9 website page ideas. Each item MUST have a "type" of exactly "Service Page", "Location Page", or "FAQ Page", plus a short "description". Include one "Location Page" for the primary category and one "FAQ Page"; the rest should be "Service Page" entries mapped to the top services (in the SAME intent lane as the services list). Slugs must be lowercase, hyphenated, no leading slash, and end with "-your-city" for Service and Location pages.
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
  "primaryCategory": { "name": string, "score": number, "matchReason": string, "why": string },
  "secondaryCategories": [{ "name": string, "score": number, "why": string }],
  "services": [string],
  "pageIdeas": [{ "title": string, "slug": string, "type": "Service Page" | "Location Page" | "FAQ Page", "description": string }],
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

    // Enforce the whitelist server-side so hallucinated categories never reach the UI.
    const allowedSet = new Set(ALLOWED_GBP_CATEGORIES.map((c) => c.toLowerCase()));
    if (parsed && typeof parsed === "object") {
      const p = parsed as any;
      const isAllowed = (name: unknown) =>
        typeof name === "string" && allowedSet.has(name.trim().toLowerCase());
      if (p.primaryCategory && !isAllowed(p.primaryCategory?.name)) {
        p.primaryCategory = { name: "", why: "No verified GBP category matched. Review manually." };
      }
      if (Array.isArray(p.secondaryCategories)) {
        const primaryName = String(p.primaryCategory?.name ?? "").trim().toLowerCase();
        const seen = new Set<string>();
        p.secondaryCategories = p.secondaryCategories.filter((c: any) => {
          if (!isAllowed(c?.name)) return false;
          const key = String(c.name).trim().toLowerCase();
          if (key === primaryName || seen.has(key)) return false;
          seen.add(key);
          return true;
        });
      }
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
