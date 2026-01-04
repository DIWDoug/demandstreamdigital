const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const options: SearchOptions = await req.json();

    if (!options.query) {
      return new Response(
        JSON.stringify({ success: false, error: 'Query is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = Deno.env.get('PIXABAY_API_KEY');
    if (!apiKey) {
      console.error('PIXABAY_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Service configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const params = new URLSearchParams({
      key: apiKey,
      q: options.query,
      image_type: options.imageType || 'photo',
      orientation: options.orientation || 'horizontal',
      safesearch: String(options.safeSearch !== false),
      order: options.order || 'popular',
      per_page: String(options.perPage || 20),
      page: String(options.page || 1),
    });

    if (options.category) params.append('category', options.category);
    if (options.minWidth) params.append('min_width', String(options.minWidth));
    if (options.minHeight) params.append('min_height', String(options.minHeight));
    if (options.colors) params.append('colors', options.colors);
    if (options.editorsChoice) params.append('editors_choice', 'true');

    console.log('Fetching Pixabay images for query:', options.query);

    const response = await fetch(`https://pixabay.com/api/?${params.toString()}`);

    if (!response.ok) {
      console.error('Pixabay API error:', response.status, response.statusText);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to fetch images' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();

    console.log('Pixabay returned', data.totalHits, 'hits');

    return new Response(
      JSON.stringify(data),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching Pixabay images:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'An error occurred processing your request' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
