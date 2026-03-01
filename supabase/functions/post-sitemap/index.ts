import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('Fetching blog posts for sitemap...');

    // Fetch all published blog posts
    const { data: posts, error } = await supabase
      .from('blogs')
      .select('slug, updated_at, published_at')
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }

    console.log(`Found ${posts?.length || 0} blog posts`);

    // Generate XML sitemap
    const urls = posts?.map(post => {
      const lastmod = post.updated_at 
        ? new Date(post.updated_at).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0];
      
      return `  <url>
    <loc>https://demandstreamdigital.com/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    }).join('\n') || '';

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`,
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/xml; charset=utf-8',
        },
        status: 200,
      }
    );
  }
});
