import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { pdfUrl, slug, pageCount } = await req.json();
    
    if (!pdfUrl || !slug) {
      return new Response(
        JSON.stringify({ error: "Missing pdfUrl or slug" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // For now, we'll use a simple approach - return placeholder page data
    // In a production environment, you'd use a PDF rendering service like pdf.js or a cloud service
    
    // Since Deno doesn't have native PDF rendering with canvas,
    // we'll return metadata that the frontend can use
    // The actual PDF is already accessible via iframe, so we'll create
    // a hybrid approach where we can still show the flipbook with placeholder pages
    
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Check if we have cached pages
    const { data: cachedPages } = await supabase
      .storage
      .from("case-study-pages")
      .list(`${slug}/`, { limit: 100 });

    if (cachedPages && cachedPages.length > 0) {
      const pageUrls = cachedPages
        .filter(f => f.name.endsWith('.png') || f.name.endsWith('.jpg'))
        .sort((a, b) => {
          const numA = parseInt(a.name.match(/\d+/)?.[0] || "0");
          const numB = parseInt(b.name.match(/\d+/)?.[0] || "0");
          return numA - numB;
        })
        .map(f => {
          const { data } = supabase.storage
            .from("case-study-pages")
            .getPublicUrl(`${slug}/${f.name}`);
          return data.publicUrl;
        });

      return new Response(
        JSON.stringify({ pages: pageUrls, cached: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Return info indicating pages need to be uploaded manually
    // PDF rendering in edge functions is complex due to canvas requirements
    return new Response(
      JSON.stringify({ 
        pages: [],
        message: "PDF pages should be uploaded to the case-study-pages bucket",
        uploadPath: `${slug}/page-1.png, ${slug}/page-2.png, etc.`
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
