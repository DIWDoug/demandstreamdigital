import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import type { ContentBlock } from "@/data/spoke-content-blocks";

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
        
        const descriptiveAlt = block.imageAlt || 
          `${block.category} - ${block.headline} | ${spokeSlug?.replace(/-/g, ' ') || 'digital marketing'} services for plumbing and HVAC`;
        const descriptiveTitle = `${block.headline} | ${block.category} | Demand Stream Digital`;
        
        return (
          <div
            key={index}
            className={`py-16 lg:py-24 ${isLight ? "section-light" : "bg-surface-dark"}`}
          >
            <div className="container mx-auto px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                
                {/* Content Side */}
                <div className={`space-y-6 ${isReversed ? "lg:order-2" : ""}`}>
                  <span className={`inline-block text-xs font-bold uppercase tracking-[0.2em] ${isLight ? "text-accent-green" : "text-accent-green"}`}>
                    {block.category}
                  </span>
                  
                  <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight ${isLight ? "text-slate-900" : "text-foreground"}`}>
                    {block.headline}
                  </h2>
                  
                  <p className={`text-base leading-relaxed ${isLight ? "text-slate-600" : "text-text-secondary"}`}>
                    {block.description}
                  </p>
                  
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
                  
                  {block.ctaText && (
                    <div className="pt-4">
                      <Link 
                        to="/contact"
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
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <div className={`w-full h-full ${isLight ? 'bg-gradient-to-br from-slate-200 to-slate-300' : 'bg-gradient-to-br from-surface-elevated to-surface-card'}`} />
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

export default SpokeAlternatingBlocks;
