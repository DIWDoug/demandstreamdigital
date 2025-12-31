import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import type { ContentBlock } from "@/data/spoke-content-blocks";
import { useState } from "react";

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
        
        // Generate descriptive alt text based on category and headline
        const descriptiveAlt = block.imageAlt || 
          `${block.category} - ${block.headline} | Professional ${spokeSlug?.replace(/-/g, ' ') || 'digital marketing'} services`;
        
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
                      <Link 
                        to={block.ctaHref || "#contact"}
                        className="inline-flex items-center gap-2 btn-cta group"
                      >
                        {block.ctaText}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Image Side */}
                <div className={`${isReversed ? "lg:order-1" : ""}`}>
                  {block.imageSrc ? (
                    <LazyImage 
                      src={block.imageSrc} 
                      alt={descriptiveAlt}
                      isLight={isLight}
                    />
                  ) : (
                    /* Abstract visual placeholder */
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <div 
                        className={`absolute inset-0 ${isLight ? "bg-gradient-to-br from-slate-100 to-slate-200" : "bg-gradient-to-br from-surface-elevated to-surface-card"} border border-border/30 rounded-2xl`}
                      />
                      {/* Grid pattern */}
                      <div 
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage: `linear-gradient(hsl(var(--cta)) 1px, transparent 1px),
                                           linear-gradient(90deg, hsl(var(--cta)) 1px, transparent 1px)`,
                          backgroundSize: '30px 30px'
                        }}
                      />
                      {/* Floating elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 relative">
                          <div 
                            className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-cta/10 animate-pulse"
                            style={{ animationDuration: "4s" }}
                          />
                          <div 
                            className="absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full bg-accent-blue/10 animate-pulse"
                            style={{ animationDuration: "5s", animationDelay: "1s" }}
                          />
                          {/* Step number */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className={`w-20 h-20 rounded-2xl ${isLight ? "bg-white border-slate-200" : "bg-surface-elevated border-border/50"} border flex items-center justify-center shadow-lg`}>
                              <span className={`text-3xl font-bold ${isLight ? "text-cta" : "text-cta"}`}>
                                {String(index + 1).padStart(2, '0')}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

/**
 * Lazy-loaded image component with loading state
 */
interface LazyImageProps {
  src: string;
  alt: string;
  isLight: boolean;
}

const LazyImage = ({ src, alt, isLight }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cta/20 to-accent-blue/20 rounded-2xl blur-2xl opacity-40 -z-10 translate-y-4" />
      
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className={`absolute inset-0 rounded-2xl ${isLight ? 'bg-slate-200' : 'bg-surface-elevated'} animate-pulse`} />
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div className={`aspect-[4/3] rounded-2xl ${isLight ? 'bg-slate-100' : 'bg-surface-elevated'} flex items-center justify-center`}>
          <span className="text-text-muted text-sm">Image unavailable</span>
        </div>
      )}
      
      {/* Actual image with lazy loading */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-auto rounded-2xl shadow-2xl border border-border/20 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};

export default SpokeAlternatingBlocks;
