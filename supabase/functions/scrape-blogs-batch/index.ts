import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

async function scrapeBlog(url: string, apiKey: string) {
  let formattedUrl = url.trim();
  if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
    formattedUrl = `https://${formattedUrl}`;
  }

  console.log('Scraping:', formattedUrl);

  const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: formattedUrl,
      formats: ['markdown', 'html'],
      onlyMainContent: true,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to scrape ${formattedUrl}: ${error}`);
  }

  const data = await response.json();
  const scrapedData = data.data || data;
  const metadata = scrapedData.metadata || {};

  const urlPath = new URL(formattedUrl).pathname;
  const slug = urlPath.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'untitled';

  return {
    slug,
    title: metadata.title || metadata.ogTitle || 'Untitled Blog Post',
    excerpt: metadata.description || metadata.ogDescription || '',
    content: scrapedData.markdown || scrapedData.html || '',
    source_url: formattedUrl,
    featured_image: metadata.ogImage || metadata.image || null,
  };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { urls } = await req.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'URLs array is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = Deno.env.get('FIRECRAWL_API_KEY');
    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, error: 'Firecrawl connector not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const results: { url: string; success: boolean; slug?: string; error?: string }[] = [];

    for (const url of urls) {
      try {
        const blogData = await scrapeBlog(url, apiKey);
        
        const { error: dbError } = await supabase
          .from('blogs')
          .upsert({
            ...blogData,
            updated_at: new Date().toISOString(),
          }, { onConflict: 'slug' });

        if (dbError) {
          results.push({ url, success: false, error: dbError.message });
        } else {
          results.push({ url, success: true, slug: blogData.slug });
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        results.push({ url, success: false, error: errorMessage });
      }

      // Small delay between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    const successCount = results.filter(r => r.success).length;
    console.log(`Batch complete: ${successCount}/${urls.length} blogs scraped successfully`);

    return new Response(
      JSON.stringify({ success: true, results, summary: { total: urls.length, success: successCount } }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Batch scrape error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to scrape blogs';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
