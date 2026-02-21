import { useState, useEffect, useRef } from 'react';
import { searchPixabayImages } from '@/lib/pixabay';

interface PixabayImageProps {
  keyword: string;
  fallbackKeyword?: string;
  alt?: string;
  title?: string;
  className?: string;
  placeholderClassName?: string;
  /** Set to true for LCP (Largest Contentful Paint) images - disables lazy loading and sets high priority */
  priority?: boolean;
}

// Cache for storing fetched image URLs to avoid redundant API calls
const imageCache = new Map<string, string>();

/**
 * PixabayImage component with:
 * - Lazy loading for performance
 * - Descriptive alt text based on search keyword
 * - Fallback to default keyword if no direct match found
 */
const PixabayImage = ({ 
  keyword, 
  fallbackKeyword = 'digital marketing business',
  alt,
  title,
  className = '',
  placeholderClassName = '',
  priority = false
}: PixabayImageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Priority images load immediately
  const imgRef = useRef<HTMLDivElement>(null);

  // Generate descriptive alt text based on keyword
  const descriptiveAlt = alt || `${keyword} - growth marketing services for plumbing and HVAC`;
  const descriptiveTitle = title || `${keyword} | Demand Stream Digital`;

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading slightly before in view
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fetch image when in view
  useEffect(() => {
    if (!isInView) return;

    const fetchImage = async () => {
      setIsLoading(true);
      setHasError(false);

      // Check cache first
      const cacheKey = keyword.toLowerCase().trim();
      if (imageCache.has(cacheKey)) {
        setImageUrl(imageCache.get(cacheKey)!);
        setIsLoading(false);
        return;
      }

      try {
        // Try primary keyword
        const response = await searchPixabayImages({
          query: keyword,
          imageType: 'photo',
          orientation: 'horizontal',
          perPage: 3,
          minWidth: 800,
          safeSearch: true,
          order: 'popular'
        });

        if (response.hits.length > 0) {
          const url = response.hits[0].largeImageURL;
          imageCache.set(cacheKey, url);
          setImageUrl(url);
          setIsLoading(false);
          return;
        }

        // Fallback to default keyword
        const fallbackResponse = await searchPixabayImages({
          query: fallbackKeyword,
          imageType: 'photo',
          orientation: 'horizontal',
          perPage: 3,
          minWidth: 800,
          safeSearch: true,
          order: 'popular'
        });

        if (fallbackResponse.hits.length > 0) {
          const url = fallbackResponse.hits[0].largeImageURL;
          imageCache.set(cacheKey, url);
          setImageUrl(url);
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.error('Error fetching Pixabay image:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [isInView, keyword, fallbackKeyword]);

  return (
    <div ref={imgRef} className={`relative ${placeholderClassName}`}>
      {/* Loading placeholder */}
      {(isLoading || !isInView) && (
        <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated to-surface-card rounded-2xl animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-cta/30 border-t-cta animate-spin" />
        </div>
      )}
      
      {/* Error state */}
      {hasError && !isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated to-surface-card rounded-2xl flex items-center justify-center">
          <span className="text-text-muted text-sm">Image unavailable</span>
        </div>
      )}

      {/* Actual image - priority images load eagerly with high fetchpriority */}
      {imageUrl && !hasError && (
        <img
          src={imageUrl}
          alt={descriptiveAlt}
          title={descriptiveTitle}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          // @ts-ignore - fetchpriority is valid HTML but not in React types yet
          fetchpriority={priority ? "high" : undefined}
          className={`w-full h-auto transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      )}
    </div>
  );
};

export default PixabayImage;