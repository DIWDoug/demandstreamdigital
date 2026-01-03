import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

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
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid or expired token' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

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

    const { url } = await req.json();

    if (!url) {
      return new Response(
        JSON.stringify({ success: false, error: 'URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Format URL
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = `https://${formattedUrl}`;
    }

    // SSRF validation
    if (!isValidPublicUrl(formattedUrl)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid or private URL' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = Deno.env.get('FIRECRAWL_API_KEY');
    if (!apiKey) {
      console.error('FIRECRAWL_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Firecrawl connector not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Scraping blog URL:', formattedUrl, 'by user:', user.id);

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

    const data = await response.json();

    if (!response.ok) {
      console.error('Firecrawl API error:', data);
      return new Response(
        JSON.stringify({ success: false, error: data.error || `Request failed with status ${response.status}` }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Extract blog data from scraped content
    const scrapedData = data.data || data;
    const metadata = scrapedData.metadata || {};
    
    // Generate slug from URL
    const urlPath = new URL(formattedUrl).pathname;
    const slug = urlPath.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'untitled';
    
    // Extract title from metadata or content
    const title = metadata.title || metadata.ogTitle || 'Untitled Blog Post';
    
    // Extract excerpt from description or first paragraph
    const excerpt = metadata.description || metadata.ogDescription || '';
    
    // Get featured image
    const featuredImage = metadata.ogImage || metadata.image || null;
    
    // Get main content
    const content = scrapedData.markdown || scrapedData.html || '';

    // Use service role key for database operations
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: blog, error: dbError } = await supabase
      .from('blogs')
      .upsert({
        slug,
        title,
        excerpt,
        content,
        source_url: formattedUrl,
        featured_image: featuredImage,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'slug' })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ success: false, error: dbError.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Blog saved successfully:', blog.slug);
    
    return new Response(
      JSON.stringify({ success: true, blog }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error scraping blog:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to scrape blog';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
