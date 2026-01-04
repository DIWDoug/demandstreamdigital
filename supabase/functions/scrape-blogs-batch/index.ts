import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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

// SSRF protection: validate URL is public and not internal
function isValidPublicUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    
    // Only allow HTTP/HTTPS
    if (!['http:', 'https:'].includes(url.protocol)) {
      return false;
    }
    
    // Block private IP ranges and localhost
    const hostname = url.hostname.toLowerCase();
    const privatePatterns = [
      /^localhost$/i,
      /^127\.\d+\.\d+\.\d+$/,
      /^10\.\d+\.\d+\.\d+$/,
      /^172\.(1[6-9]|2\d|3[01])\.\d+\.\d+$/,
      /^192\.168\.\d+\.\d+$/,
      /^169\.254\.\d+\.\d+$/,
      /^0\.0\.0\.0$/,
      /^::1$/,
      /^fe80:/i,
      /^fc00:/i,
      /^fd00:/i,
    ];
    
    if (privatePatterns.some(pattern => pattern.test(hostname))) {
      return false;
    }
    
    return true;
  } catch {
    return false;
  }
}

async function scrapeBlog(url: string, apiKey: string) {
  let formattedUrl = url.trim();
  if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
    formattedUrl = `https://${formattedUrl}`;
  }

  // SSRF validation
  if (!isValidPublicUrl(formattedUrl)) {
    throw new Error('Invalid or private URL');
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
  const startTime = Date.now();
  const functionName = "scrape-blogs-batch";
  let statusCode = 200;
  let userId: string | undefined;
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  logRequest(req, { functionName });

  try {
    // Authentication check - require valid JWT
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ success: false, error: 'Authorization required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    
    // Verify the user's JWT
    const supabaseAuth = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } }
    });
    
    const { data: { user }, error: authError } = await supabaseAuth.auth.getUser();
    if (authError || !user) {
      statusCode = 401;
      logResponse({ functionName, userId, statusCode, durationMs: Date.now() - startTime });
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid or expired token' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    userId = user.id;

    // Check if user has admin role
    const { data: roleData } = await supabaseAuth
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .single();
    
    if (!roleData) {
      return new Response(
        JSON.stringify({ success: false, error: 'Admin access required' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { urls } = await req.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'URLs array is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Limit batch size to prevent abuse
    if (urls.length > 10) {
      return new Response(
        JSON.stringify({ success: false, error: 'Maximum 10 URLs per batch' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = Deno.env.get('FIRECRAWL_API_KEY');
    if (!apiKey) {
      console.error('FIRECRAWL_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Service configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Use service role key for database operations
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const results: { url: string; success: boolean; slug?: string; error?: string }[] = [];

    console.log('Batch scrape started by user:', user.id, 'for', urls.length, 'URLs');

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
          console.error('Database error for URL:', url, dbError);
          results.push({ url, success: false, error: 'Failed to save content' });
        } else {
          results.push({ url, success: true, slug: blogData.slug });
        }
      } catch (error) {
        console.error('Scrape error for URL:', url, error);
        results.push({ url, success: false, error: 'Failed to process URL' });
      }

      // Small delay between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    const successCount = results.filter(r => r.success).length;
    console.log(`Batch complete: ${successCount}/${urls.length} blogs scraped successfully`);

    logResponse({ functionName, userId, statusCode: 200, durationMs: Date.now() - startTime });
    return new Response(
      JSON.stringify({ success: true, results, summary: { total: urls.length, success: successCount } }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    statusCode = 500;
    console.error('Batch scrape error:', error);
    logResponse({ functionName, userId, statusCode, durationMs: Date.now() - startTime });
    return new Response(
      JSON.stringify({ success: false, error: 'An error occurred processing your request' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
