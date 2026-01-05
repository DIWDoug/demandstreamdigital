import { useState, useEffect } from 'react';
import { searchPixabayImages } from '@/lib/pixabay';

interface PixabayHeroImageProps {
  keyword: string;
  fallbackKeyword?: string;
  alt?: string;
  title?: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

// Cache for storing fetched image URLs
const heroImageCache = new Map<string, string>();

/**
 * PixabayHeroImage - Fetches and displays hero/background images from Pixabay
 * Optimized for large hero sections with overlay support
 */
const PixabayHeroImage = ({ 
  keyword, 
  fallbackKeyword = 'business technology office',
  alt,
  title,
  className = '',
  overlay = true,
  overlayOpacity = 0.7
}: PixabayHeroImageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const descriptiveAlt = alt || `${keyword} - white label agency fulfillment services`;
  const descriptiveTitle = title || `${keyword} | Dialed-In Web`;

  useEffect(() => {
    const fetchImage = async () => {
      const cacheKey = keyword.toLowerCase().trim();
      
      if (heroImageCache.has(cacheKey)) {
        setImageUrl(heroImageCache.get(cacheKey)!);
        setIsLoading(false);
        return;
      }

      try {
        const response = await searchPixabayImages({
          query: keyword,
          imageType: 'photo',
          orientation: 'horizontal',
          perPage: 5,
          minWidth: 1920,
          safeSearch: true,
          order: 'popular'
        });

        if (response.hits.length > 0) {
          const url = response.hits[0].largeImageURL;
          heroImageCache.set(cacheKey, url);
          setImageUrl(url);
        } else {
          // Fallback
          const fallbackResponse = await searchPixabayImages({
            query: fallbackKeyword,
            imageType: 'photo',
            orientation: 'horizontal',
            perPage: 5,
            minWidth: 1920,
            safeSearch: true
          });
          
          if (fallbackResponse.hits.length > 0) {
            const url = fallbackResponse.hits[0].largeImageURL;
            heroImageCache.set(cacheKey, url);
            setImageUrl(url);
          }
        }
      } catch (error) {
        console.error('Error fetching Pixabay hero image:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [keyword, fallbackKeyword]);

  if (isLoading) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br from-surface-dark to-background animate-pulse ${className}`} />
    );
  }

  if (!imageUrl) {
    return null;
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <img
        src={imageUrl}
        alt={descriptiveAlt}
        title={descriptiveTitle}
        loading="eager"
        decoding="async"
        // @ts-ignore - fetchpriority is valid HTML but not in React types yet
        fetchpriority="high"
        className="w-full h-full object-cover"
      />
      {overlay && (
        <div 
          className="absolute inset-0 bg-background" 
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
};

export default PixabayHeroImage;