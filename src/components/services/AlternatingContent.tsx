import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";
import { searchPixabayImages } from "@/lib/pixabay";

interface ContentBlock {
  eyebrow: string;
  headline: string;
  description: string;
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
  pixabayKeyword?: string; // Optional keyword for Pixabay lookup
}

interface AlternatingContentProps {
  blocks: ContentBlock[];
}

// Lazy-loaded Pixabay image component
const LazyPixabayImage = ({ 
  keyword, 
  alt, 
  fallbackKeyword = "digital marketing business" 
}: { 
  keyword: string; 
  alt: string;
  fallbackKeyword?: string;
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
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
      try {
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
          setImageUrl(response.hits[0].largeImageURL);
        } else {
          // Fallback
          const fallbackResponse = await searchPixabayImages({
            query: fallbackKeyword,
            imageType: 'photo',
            orientation: 'horizontal',
            perPage: 3,
            minWidth: 800,
            safeSearch: true
          });
          if (fallbackResponse.hits.length > 0) {
            setImageUrl(fallbackResponse.hits[0].largeImageURL);
          }
        }
      } catch (error) {
        console.error('Error fetching Pixabay image:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [isInView, keyword, fallbackKeyword]);

  return (
    <div ref={imgRef} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-cta/20 rounded-2xl blur-2xl opacity-50 -z-10 translate-y-4" />
      
      {/* Loading skeleton */}
      {(isLoading || !isInView) && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse rounded-2xl" />
      )}
      
      {/* Actual image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover rounded-2xl shadow-2xl transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
};

const AlternatingContent = ({ blocks }: AlternatingContentProps) => {
  const sectionRef = useScrollReveal();
  
  // Generate keywords based on headline/eyebrow
  const getKeyword = (block: ContentBlock) => {
    if (block.pixabayKeyword) return block.pixabayKeyword;
    // Generate from eyebrow or headline
    return block.eyebrow.toLowerCase().replace(/[^a-z0-9\s]/g, '') || 'business marketing';
  };
  
  return (
    <section ref={sectionRef} className="py-20 lg:py-28 section-light relative overflow-hidden reveal-section">
      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-32 w-[500px] h-[500px] rounded-full bg-[hsl(224,60%,55%)]/5 blur-3xl" />
        <div className="absolute bottom-40 -left-32 w-[600px] h-[600px] rounded-full bg-[hsl(76,42%,41%)]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="space-y-24 lg:space-y-32">
          {blocks.map((block, index) => {
            const isReversed = index % 2 === 1;
            const descriptiveAlt = block.imageAlt || `${block.eyebrow} - ${block.headline} | Professional marketing services`;
            
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content side */}
                <div className={`space-y-6 ${isReversed ? "lg:order-2" : ""}`}>
                  {/* Eyebrow */}
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(224,60%,55%)]">
                    {block.eyebrow}
                  </span>
                  
                  {/* Headline */}
                  <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-gray-900 leading-tight">
                    {block.headline}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {block.description}
                  </p>
                  
                  {/* Bullets */}
                  {block.bullets && block.bullets.length > 0 && (
                    <ul className="space-y-3 pt-2">
                      {block.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[hsl(76,42%,41%)] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Visual side */}
                <div className={`${isReversed ? "lg:order-1" : ""}`}>
                  {block.imageSrc ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-cta/20 rounded-2xl blur-2xl opacity-50 -z-10 translate-y-4" />
                      <img
                        src={block.imageSrc}
                        alt={descriptiveAlt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>
                  ) : (
                    <LazyPixabayImage 
                      keyword={getKeyword(block)} 
                      alt={descriptiveAlt}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AlternatingContent;