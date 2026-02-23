import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Rate limiting
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const rateLimitCache = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitCache.get(key);
  if (rateLimitCache.size > 500) {
    for (const [k, v] of rateLimitCache.entries()) {
      if (v.resetAt < now) rateLimitCache.delete(k);
    }
  }
  if (!entry || entry.resetAt < now) {
    rateLimitCache.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_REQUESTS) return false;
  entry.count++;
  return true;
}

// SSRF protection
function isValidPublicUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    if (!["http:", "https:"].includes(url.protocol)) return false;
    const h = url.hostname.toLowerCase();
    const blocked = [
      /^localhost$/i, /^127\./, /^10\./, /^172\.(1[6-9]|2\d|3[01])\./,
      /^192\.168\./, /^169\.254\./, /^0\.0\.0\.0$/, /^::1$/, /^fe80:/i,
    ];
    return !blocked.some((p) => p.test(h));
  } catch {
    return false;
  }
}

async function fetchPage(url: string): Promise<string | null> {
  if (!isValidPublicUrl(url)) return null;
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; DSDBot/1.0)" },
      redirect: "follow",
    });
    if (!r.ok) return null;
    return await r.text();
  } catch {
    return null;
  }
}

// Basic SEO extraction
function extractSEOData(html: string, url: string) {
  const get = (regex: RegExp) => {
    const m = html.match(regex);
    return m ? m[1]?.trim() : null;
  };

  const title = get(/<title[^>]*>([^<]*)<\/title>/i);
  const metaDesc =
    get(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
    get(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const ogTitle = get(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
  const ogDesc = get(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
  const canonical = get(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const viewport = get(/<meta[^>]*name=["']viewport["'][^>]*content=["']([^"']*)["']/i);

  const h1s = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || []).map((t) =>
    t.replace(/<[^>]+>/g, "").trim()
  );
  const h2s = (html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || []).map((t) =>
    t.replace(/<[^>]+>/g, "").trim()
  );

  const imgTags = html.match(/<img[^>]*>/gi) || [];
  const imgsWithAlt = imgTags.filter((i) => /alt=["'][^"']+["']/i.test(i));

  const semanticTags = ["header", "nav", "main", "article", "section", "footer"];
  const foundSemantic = semanticTags.filter((t) =>
    new RegExp(`<${t}[\\s>]`, "i").test(html)
  );

  const hasSchema = html.includes("application/ld+json");
  const hasRobotsTxt = null; // checked separately
  const hasSitemap = null;

  // Text content for word count
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = text.split(/\s+/).filter((w) => w.length > 0).length;

  // Internal links
  const allLinks = html.match(/href=["']([^"']*?)["']/gi) || [];
  const domain = new URL(url).hostname;
  const internalLinks = allLinks.filter((l) => {
    const href = l.replace(/href=["']/i, "").replace(/["']$/, "");
    try {
      if (href.startsWith("/") || href.startsWith("#")) return true;
      const u = new URL(href);
      return u.hostname === domain;
    } catch {
      return false;
    }
  });

  const externalLinks = allLinks.length - internalLinks.length;

  // Page speed hints
  const hasLazyLoad = /loading=["']lazy["']/i.test(html);
  const hasMinifiedCSS = /<link[^>]*\.min\.css/i.test(html);

  return {
    title,
    titleLength: title?.length || 0,
    metaDesc,
    metaDescLength: metaDesc?.length || 0,
    ogTitle,
    ogDesc,
    canonical,
    viewport: !!viewport,
    h1s,
    h2s,
    totalImages: imgTags.length,
    imagesWithAlt: imgsWithAlt.length,
    foundSemantic,
    missingSemantic: semanticTags.filter((t) => !foundSemantic.includes(t)),
    hasSchema,
    wordCount,
    internalLinks: internalLinks.length,
    externalLinks,
    hasLazyLoad,
    hasMinifiedCSS,
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const startTime = Date.now();

  try {
    const body = await req.json();
    const { url, name, email, phone, phoneCountryCode } = body;

    // Validate
    if (!url || !name || !email || !phone) {
      return new Response(
        JSON.stringify({ error: "URL, name, email, and phone are required" }),
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

    // Rate limit by email
    if (!checkRateLimit(email)) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Format URL
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
      formattedUrl = `https://${formattedUrl}`;
    }

    if (!isValidPublicUrl(formattedUrl)) {
      return new Response(
        JSON.stringify({ error: "Invalid or private URL" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Starting SEO audit for:", formattedUrl);

    // 1. Fetch the page
    const html = await fetchPage(formattedUrl);
    if (!html) {
      return new Response(
        JSON.stringify({ error: "Could not fetch the website. Please check the URL and try again." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 2. Extract SEO data
    const seoData = extractSEOData(html, formattedUrl);

    // 3. Check robots.txt and sitemap
    const baseUrl = new URL(formattedUrl).origin;
    const [robotsResp, sitemapResp] = await Promise.all([
      fetchPage(`${baseUrl}/robots.txt`),
      fetchPage(`${baseUrl}/sitemap.xml`),
    ]);

    const hasRobotsTxt = !!robotsResp;
    const hasSitemap = !!sitemapResp;

    // 4. Use Lovable AI for analysis
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    let aiAnalysis = null;

    if (LOVABLE_API_KEY) {
      try {
        const prompt = `You are an SEO expert analyzing a plumbing or HVAC company website. Analyze the following SEO data and provide a structured audit.

Website: ${formattedUrl}

SEO Data:
- Title: "${seoData.title}" (${seoData.titleLength} chars)
- Meta Description: "${seoData.metaDesc}" (${seoData.metaDescLength} chars)
- H1 Tags: ${JSON.stringify(seoData.h1s)}
- H2 Tags: ${JSON.stringify(seoData.h2s.slice(0, 10))}
- Open Graph Title: "${seoData.ogTitle}"
- Open Graph Description: "${seoData.ogDesc}"
- Canonical URL: "${seoData.canonical}"
- Has Viewport: ${seoData.viewport}
- Images: ${seoData.totalImages} total, ${seoData.imagesWithAlt} with alt text
- Semantic HTML: Found [${seoData.foundSemantic.join(", ")}], Missing [${seoData.missingSemantic.join(", ")}]
- Has Schema/JSON-LD: ${seoData.hasSchema}
- Word Count: ${seoData.wordCount}
- Internal Links: ${seoData.internalLinks}
- External Links: ${seoData.externalLinks}
- Lazy Loading: ${seoData.hasLazyLoad}
- Has robots.txt: ${hasRobotsTxt}
- Has sitemap.xml: ${hasSitemap}

Respond in this exact JSON format (no markdown, no code fences):
{
  "overallScore": <number 0-100>,
  "categories": [
    {
      "name": "On-Page SEO",
      "score": <number 0-100>,
      "status": "pass|warning|fail",
      "findings": ["finding 1", "finding 2"],
      "recommendations": ["rec 1", "rec 2"]
    },
    {
      "name": "Technical SEO",
      "score": <number 0-100>,
      "status": "pass|warning|fail",
      "findings": ["..."],
      "recommendations": ["..."]
    },
    {
      "name": "Content Quality",
      "score": <number 0-100>,
      "status": "pass|warning|fail",
      "findings": ["..."],
      "recommendations": ["..."]
    },
    {
      "name": "Local SEO",
      "score": <number 0-100>,
      "status": "pass|warning|fail",
      "findings": ["..."],
      "recommendations": ["..."]
    },
    {
      "name": "Mobile & Performance",
      "score": <number 0-100>,
      "status": "pass|warning|fail",
      "findings": ["..."],
      "recommendations": ["..."]
    }
  ],
  "topPriorities": ["priority 1", "priority 2", "priority 3"],
  "summary": "2-3 sentence executive summary"
}`;

        const aiResp = await fetch(
          "https://ai.gateway.lovable.dev/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
            },
            body: JSON.stringify({
              model: "google/gemini-2.5-flash",
              messages: [{ role: "user", content: prompt }],
              temperature: 0.3,
            }),
          }
        );

        if (aiResp.ok) {
          const aiData = await aiResp.json();
          const content = aiData.choices?.[0]?.message?.content;
          if (content) {
            // Parse JSON from response (strip markdown fences if present)
            const cleaned = content
              .replace(/```json\n?/g, "")
              .replace(/```\n?/g, "")
              .trim();
            aiAnalysis = JSON.parse(cleaned);
          }
        } else {
          const errText = await aiResp.text();
          console.error("AI analysis failed:", aiResp.status, errText);
        }
      } catch (aiError) {
        console.error("AI analysis error:", aiError);
      }
    }

    // 5. Save lead to DB via service role
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: leadData, error: leadError } = await supabase
      .from("leads")
      .insert({
        name,
        email,
        phone,
        phone_country_code: phoneCountryCode || "+1",
        website: formattedUrl,
        source: "free_seo_audit",
      })
      .select()
      .single();

    if (leadError) {
      console.error("Lead save error:", leadError);
    } else {
      console.log("Lead saved:", leadData?.id);
    }

    // 6. Forward to Zapier/GHL
    const zapierWebhookUrl = Deno.env.get("ZAPIER_WEBHOOK_URL");
    if (zapierWebhookUrl) {
      try {
        const webhookPayload = {
          id: leadData?.id,
          lead_id: leadData?.id,
          lead_type: "Free SEO Audit",
          form_type: "free_seo_audit",
          name,
          email,
          phone,
          phoneCountryCode: phoneCountryCode || "+1",
          website: formattedUrl,
          source: "free_seo_audit",
          audit_score: aiAnalysis?.overallScore || null,
          created_at: leadData?.created_at || new Date().toISOString(),
        };

        const zapResp = await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(webhookPayload),
        });
        const zapText = await zapResp.text();
        console.log("Zapier response:", zapResp.status, zapText.slice(0, 200));
      } catch (zapErr) {
        console.error("Zapier error:", zapErr);
      }
    }

    const durationMs = Date.now() - startTime;
    console.log(`SEO audit completed in ${durationMs}ms`);

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          url: formattedUrl,
          seoData,
          hasRobotsTxt,
          hasSitemap,
          aiAnalysis,
          leadId: leadData?.id || null,
        },
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("SEO audit error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
