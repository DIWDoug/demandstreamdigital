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
