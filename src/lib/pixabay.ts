// Pixabay API utility for fetching high-quality images
const PIXABAY_API_KEY = '53992995-2c7f089b380258092f52d2c81';
const PIXABAY_API_URL = 'https://pixabay.com/api/';

export interface PixabayImage {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  user: string;
  userImageURL: string;
}

export interface PixabayResponse {
  total: number;
  totalHits: number;
  hits: PixabayImage[];
}

export interface SearchOptions {
  query: string;
  imageType?: 'all' | 'photo' | 'illustration' | 'vector';
  orientation?: 'all' | 'horizontal' | 'vertical';
  category?: string;
  minWidth?: number;
  minHeight?: number;
  colors?: string;
  editorsChoice?: boolean;
  safeSearch?: boolean;
  order?: 'popular' | 'latest';
  perPage?: number;
  page?: number;
}

/**
 * Search for images on Pixabay
 * @param options Search options
 * @returns Promise with Pixabay response containing image hits
 */
export async function searchPixabayImages(options: SearchOptions): Promise<PixabayResponse> {
  const params = new URLSearchParams({
    key: PIXABAY_API_KEY,
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

  const response = await fetch(`${PIXABAY_API_URL}?${params.toString()}`);
  
  if (!response.ok) {
    throw new Error(`Pixabay API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Keyword mapping for spoke pages to relevant Pixabay search terms
 * Carefully curated for contextually accurate imagery based on actual page content
 */
export const spokeKeywordMap: Record<string, string> = {
  // Local SEO spokes
  'on-page-optimization': 'website optimization laptop screen professional',
  'technical-seo': 'website loading speed mobile optimization performance',
  'local-keyword-strategy': 'search engine research magnifying glass data',
  'content-development': 'content writing laptop creative professional',
  'link-building': 'network connection handshake partnership business',
  'schema-markup': 'code programming developer screen technology',
  'nap-citations': 'business directory listing contact information',
  
  // GBP SEO spokes
  'gbp-optimization': 'local business storefront shop small business',
  'review-management': 'customer review stars rating feedback',
  'citation-building': 'map location business directory listing',
  'photo-optimization': 'professional photography camera studio business',
  'qa-management': 'customer service support help desk communication',
  'post-scheduling': 'social media calendar planning content schedule',
  
  // Paid Media spokes
  'google-ads': 'digital advertising marketing analytics dashboard',
  'meta-ads': 'social media marketing smartphone mobile advertising',
  'local-service-ads': 'home service contractor plumber electrician professional',
  'retargeting-campaigns': 'target marketing audience advertising funnel',
  'landing-page-design': 'web design landing page conversion creative',
  'conversion-tracking': 'analytics data dashboard metrics performance',
  
  // Email Marketing spokes
  'campaign-strategy': 'email marketing campaign inbox professional',
  'list-management': 'database contacts email list management',
  'automation-flows': 'workflow automation process technology efficiency',
  'newsletter-design': 'email newsletter design template creative',
  'ab-testing': 'testing comparison analytics data experiment',
  'performance-analytics': 'dashboard analytics charts metrics business',
  
  // Authority Building spokes
  'local-links': 'local newspaper publication community journalism',
  'citations': 'business directory listing map location',
  'unstructured-citations': 'podcast microphone video production media',
  'brand-mentions': 'social media discussion community forum online',
  'anchor-text': 'hyperlink web text link chain',
  'sponsorships': 'community event sports team local sponsorship',
  'reputation-signals': 'trust badge certificate award credibility',
  'guest-posts-niche-edits': 'guest blogging writing author laptop',
  
  // Reporting spokes
  'white-label-dashboards': 'business dashboard analytics screen report',
  'monthly-reports': 'report document analytics charts professional',
  'rank-tracking': 'ranking growth chart analytics upward',
  'call-tracking': 'phone call business communication mobile',
  'roi-analysis': 'investment return profit growth chart finance',
  'client-presentations': 'presentation meeting boardroom professional business'
};

/**
 * Get the best Pixabay search keyword for a spoke
 * @param spokeSlug The spoke URL slug
 * @returns The mapped keyword or a sensible default
 */
export function getSpokeKeyword(spokeSlug: string): string {
  return spokeKeywordMap[spokeSlug] || 'digital marketing business';
}

/**
 * Get a single high-quality image for a given search term
 * @param query Search query
 * @returns URL of the large image or null if not found
 */
export async function getPixabayImage(query: string): Promise<string | null> {
  try {
    const response = await searchPixabayImages({
      query,
      imageType: 'photo',
      orientation: 'horizontal',
      editorsChoice: true,
      perPage: 1,
      minWidth: 1200,
    });

    if (response.hits.length > 0) {
      return response.hits[0].largeImageURL;
    }

    // Fallback: try without editors choice
    const fallbackResponse = await searchPixabayImages({
      query,
      imageType: 'photo',
      orientation: 'horizontal',
      perPage: 1,
      minWidth: 1200,
    });

    if (fallbackResponse.hits.length > 0) {
      return fallbackResponse.hits[0].largeImageURL;
    }

    return null;
  } catch (error) {
    console.error('Error fetching Pixabay image:', error);
    return null;
  }
}

/**
 * Get multiple high-quality images for a given search term
 * @param query Search query
 * @param count Number of images to return
 * @returns Array of large image URLs
 */
export async function getPixabayImages(query: string, count: number = 5): Promise<string[]> {
  try {
    const response = await searchPixabayImages({
      query,
      imageType: 'photo',
      orientation: 'horizontal',
      perPage: count,
      minWidth: 1200,
    });

    return response.hits.map(hit => hit.largeImageURL);
  } catch (error) {
    console.error('Error fetching Pixabay images:', error);
    return [];
  }
}
