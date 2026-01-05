import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import type { ContentBlock } from "@/data/spoke-content-blocks";
import { useState, useEffect, useRef } from "react";
import { searchPixabayImages, getSpokeKeyword } from "@/lib/pixabay";

interface SpokeAlternatingBlocksProps {
  blocks: ContentBlock[];
  spokeSlug?: string;
}

const SpokeAlternatingBlocks = ({ blocks, spokeSlug }: SpokeAlternatingBlocksProps) => {
  const sectionRef = useScrollReveal();
  
  return (
    <section ref={sectionRef} className="reveal-section">
      {blocks.map((block, index) => {
        const isReversed = index % 2 === 1;
        const isLight = index % 2 === 0;
        
        // Generate descriptive alt and title text based on category and headline
        const descriptiveAlt = block.imageAlt || 
          `${block.category} - ${block.headline} | White label ${spokeSlug?.replace(/-/g, ' ') || 'digital marketing'} services`;
        const descriptiveTitle = `${block.headline} | ${block.category} | Dialed-In Web`;
        
        return (
          <div
            key={index}
            className={`py-16 lg:py-24 ${isLight ? "section-light" : "bg-surface-dark"}`}
          >
            <div className="container mx-auto px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? "" : ""}`}>
                
                {/* Content Side */}
                <div className={`space-y-6 ${isReversed ? "lg:order-2" : ""}`}>
                  {/* Category Badge */}
                  <span className={`inline-block text-xs font-bold uppercase tracking-[0.2em] ${isLight ? "text-cta" : "text-cta"}`}>
                    {block.category}
                  </span>
                  
                  {/* Main Headline */}
                  <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight ${isLight ? "text-slate-900" : "text-foreground"}`}>
                    {block.headline}
                  </h2>
                  
                  {/* Description */}
                  <p className={`text-base leading-relaxed ${isLight ? "text-slate-600" : "text-text-secondary"}`}>
                    {block.description}
                  </p>
                  
                  {/* Sub-points */}
                  <div className="space-y-5 pt-2">
                    {block.subPoints.map((point, pointIndex) => (
                      <div key={pointIndex} className="space-y-1">
                        <h3 className={`text-lg font-semibold ${isLight ? "text-slate-800" : "text-foreground"}`}>
                          {point.title}
                        </h3>
                        <p className={`text-sm leading-relaxed ${isLight ? "text-slate-600" : "text-text-muted"}`}>
                          {point.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  {block.ctaText && (
                    <div className="pt-4">
                      <a 
                        href="/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 btn-cta group"
                      >
                        {block.ctaText}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Image Side - Use imageSrc if provided, otherwise fetch from Pixabay */}
                <div className={`${isReversed ? "lg:order-1" : ""}`}>
                  {block.imageSrc ? (
                    <div className="relative overflow-hidden rounded-xl shadow-2xl">
                      <img 
                        src={block.imageSrc}
                        alt={descriptiveAlt}
                        title={descriptiveTitle}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <PixabayBlockImage 
                      spokeSlug={spokeSlug}
                      category={block.category}
                      headline={block.headline}
                      blockIndex={index}
                      isLight={isLight}
                      alt={descriptiveAlt}
                      title={descriptiveTitle}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

// Cache for storing fetched image URLs to avoid redundant API calls
const pixabayCache = new Map<string, string>();

/**
 * Pixabay-powered image component for content blocks
 * Fetches images based on spoke context and block content
 */
interface PixabayBlockImageProps {
  spokeSlug?: string;
  category: string;
  headline: string;
  blockIndex: number;
  isLight: boolean;
  alt: string;
  title: string;
}

const PixabayBlockImage = ({ spokeSlug, category, headline, blockIndex, isLight, alt, title }: PixabayBlockImageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Build a unique search keyword for each block to avoid duplicates
  const buildSearchKeyword = () => {
    // Get spoke-specific keyword if available
    const spokeKeyword = spokeSlug ? getSpokeKeyword(spokeSlug) : null;
    
    // Use category for the primary context
    const categoryWords = category.toLowerCase().replace(/[^a-z\s]/g, '').trim();
    
    // Extract unique words from headline to differentiate blocks
    const headlineWords = headline.toLowerCase()
      .replace(/[^a-z\s]/g, '')
      .split(' ')
      .filter(w => w.length > 3) // Only meaningful words
      .slice(0, 2)
      .join(' ');
    
    // Create block-specific search queries to avoid duplicates
    const blockVariations = [
      'professional business office',
      'technology digital modern',
      'team collaboration meeting',
      'strategy planning success',
      'analytics data growth',
      'marketing creative work'
    ];
    
    // Use block index to pick a variation suffix
    const variation = blockVariations[blockIndex % blockVariations.length];
    
    // Combine for a unique search query per block
    if (spokeKeyword && spokeKeyword !== 'digital marketing business') {
      // For first block, use spoke keyword; for others, mix with category
      if (blockIndex === 0) {
        return spokeKeyword;
      }
      return `${categoryWords} ${variation}`;
    }
    
    return `${categoryWords} ${headlineWords} ${variation}`;
  };

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
        rootMargin: '200px',
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

      const searchKeyword = buildSearchKeyword();
      const cacheKey = `${spokeSlug || 'default'}-${blockIndex}-${searchKeyword}`;

      // Check cache first
      if (pixabayCache.has(cacheKey)) {
        setImageUrl(pixabayCache.get(cacheKey)!);
        setIsLoading(false);
        return;
      }

      try {
        // Fetch from Pixabay - use page offset based on block index for variety
        const pageNumber = Math.floor(blockIndex / 3) + 1;
        const response = await searchPixabayImages({
          query: searchKeyword,
          imageType: 'photo',
          orientation: 'horizontal',
          perPage: 5,
          page: pageNumber,
          minWidth: 800,
          safeSearch: true,
          order: 'popular'
        });

        if (response.hits.length > 0) {
          // Use a combination of block index and keyword hash for variety
          const keywordHash = searchKeyword.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
          const imageIndex = (blockIndex + keywordHash) % response.hits.length;
          const url = response.hits[imageIndex].largeImageURL;
          pixabayCache.set(cacheKey, url);
          setImageUrl(url);
          setIsLoading(false);
          return;
        }

        // Fallback search with block-specific variation
        const fallbackQueries = [
          'business professional workspace',
          'technology computer modern',
          'team office collaboration',
          'marketing strategy planning',
          'digital analytics dashboard',
          'creative professional work'
        ];
        const fallbackQuery = fallbackQueries[blockIndex % fallbackQueries.length];
        
        const fallbackResponse = await searchPixabayImages({
          query: fallbackQuery,
          imageType: 'photo',
          orientation: 'horizontal',
          perPage: 5,
          page: blockIndex + 1,
          minWidth: 800,
          safeSearch: true,
          order: 'popular'
        });

        if (fallbackResponse.hits.length > 0) {
          const imageIndex = blockIndex % fallbackResponse.hits.length;
          const url = fallbackResponse.hits[imageIndex].largeImageURL;
          pixabayCache.set(cacheKey, url);
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
  }, [isInView, spokeSlug, category, headline, blockIndex]);

  return (
    <div ref={imgRef} className="relative aspect-[4/3]">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cta/20 to-accent-blue/20 rounded-2xl blur-2xl opacity-40 -z-10 translate-y-4" />
      
      {/* Loading skeleton */}
      {(isLoading || !isInView) && (
        <div className={`absolute inset-0 rounded-2xl ${isLight ? 'bg-slate-200' : 'bg-surface-elevated'} animate-pulse flex items-center justify-center`}>
          <div className="w-12 h-12 rounded-full border-2 border-cta/30 border-t-cta animate-spin" />
        </div>
      )}
      
      {/* Error fallback */}
      {hasError && !isLoading && (
        <div className={`absolute inset-0 rounded-2xl ${isLight ? 'bg-slate-100' : 'bg-surface-elevated'} flex items-center justify-center`}>
          <span className="text-text-muted text-sm">Image unavailable</span>
        </div>
      )}
      
      {/* Actual image with lazy loading */}
      {imageUrl && !hasError && (
        <img
          src={imageUrl}
          alt={alt}
          title={title}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover rounded-2xl shadow-2xl border border-border/20 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};

export default SpokeAlternatingBlocks;
