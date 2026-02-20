// Pixabay image search edge function
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 30; // requests per window
const RATE_WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(clientIP: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(clientIP);
  
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return false;
  }
  
  if (entry.count >= RATE_LIMIT) {
    return true;
  }
  
  entry.count++;
  return false;
}

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

interface SearchOptions {
  query: string;
  imageType?: string;
  orientation?: string;
  category?: string;
  minWidth?: number;
  minHeight?: number;
  colors?: string;
  editorsChoice?: boolean;
  safeSearch?: boolean;
  order?: string;
  perPage?: number;
  page?: number;
}

Deno.serve(async (req) => {
  const startTime = Date.now();
  const functionName = "fetch-pixabay-image";
  let statusCode = 200;
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  // Get client IP for rate limiting
  const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                   req.headers.get("cf-connecting-ip") || "unknown";
  
  // Apply rate limiting to prevent API quota exhaustion
  if (isRateLimited(clientIP)) {
    console.warn(`Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ success: false, error: 'Rate limit exceeded. Please try again later.' }),
      { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
  
  // Check for authentication - if present, validate it
  const authHeader = req.headers.get('Authorization');
  let userId = 'anonymous';
  
  if (authHeader?.startsWith('Bearer ')) {
    try {
      const supabaseClient = createClient(
        Deno.env.get('SUPABASE_URL')!,
        Deno.env.get('SUPABASE_ANON_KEY')!,
        { global: { headers: { Authorization: authHeader } } }
      );
      
      const token = authHeader.replace('Bearer ', '');
      const { data, error } = await supabaseClient.auth.getUser(token);
      
      if (!error && data?.user) {
        userId = data.user.id;
      }
    } catch (e) {
      // Auth validation failed, continue as anonymous with rate limiting
      console.log('Auth validation failed, continuing as anonymous');
    }
  }
  
  logRequest(req, { functionName, userId });

  try {
    const options: SearchOptions = await req.json();

    // Input validation
    if (!options.query || typeof options.query !== 'string') {
      return new Response(
        JSON.stringify({ success: false, error: 'Query is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Sanitize query - limit length and remove potentially harmful characters
    const sanitizedQuery = options.query.slice(0, 200).replace(/[<>'"]/g, '');
    
    // Validate numeric parameters
    const perPage = Math.min(Math.max(1, options.perPage || 20), 50);
    const page = Math.max(1, options.page || 1);

    const apiKey = Deno.env.get('PIXABAY_API_KEY');
    if (!apiKey) {
      console.error('PIXABAY_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Service temporarily unavailable' }),
        { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const params = new URLSearchParams({
      key: apiKey,
      q: sanitizedQuery,
      image_type: options.imageType || 'photo',
      orientation: options.orientation || 'horizontal',
      safesearch: String(options.safeSearch !== false),
      order: options.order || 'popular',
      per_page: String(perPage),
      page: String(page),
    });

    if (options.category) params.append('category', options.category);
    if (options.minWidth) params.append('min_width', String(Math.min(options.minWidth, 5000)));
    if (options.minHeight) params.append('min_height', String(Math.min(options.minHeight, 5000)));
    if (options.colors) params.append('colors', options.colors);
    if (options.editorsChoice) params.append('editors_choice', 'true');

    console.log('Fetching Pixabay images for query:', sanitizedQuery);

    const response = await fetch(`https://pixabay.com/api/?${params.toString()}`);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Pixabay API error:', response.status, response.statusText, 'Body:', errorBody);
      return new Response(
        JSON.stringify({ success: false, error: `Pixabay API returned ${response.status}: ${errorBody.substring(0, 200)}` }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();

    console.log('Pixabay returned', data.totalHits, 'hits');

    logResponse({ functionName, userId, statusCode: 200, durationMs: Date.now() - startTime });
    return new Response(
      JSON.stringify(data),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    statusCode = 500;
    console.error('Error fetching Pixabay images:', error);
    logResponse({ functionName, userId, statusCode, durationMs: Date.now() - startTime });
    return new Response(
      JSON.stringify({ success: false, error: 'An error occurred processing your request' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
