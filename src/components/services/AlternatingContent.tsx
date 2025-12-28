import { CheckCircle } from "lucide-react";

interface ContentBlock {
  eyebrow: string;
  headline: string;
  description: string;
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

interface AlternatingContentProps {
  blocks: ContentBlock[];
}

const AlternatingContent = ({ blocks }: AlternatingContentProps) => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-32 w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-3xl" />
        <div className="absolute bottom-40 -left-32 w-[600px] h-[600px] rounded-full bg-cta/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="space-y-24 lg:space-y-32">
          {blocks.map((block, index) => {
            const isReversed = index % 2 === 1;
            
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
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue">
                    {block.eyebrow}
                  </span>
                  
                  {/* Headline */}
                  <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-tight">
                    {block.headline}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-lg text-text-secondary leading-relaxed">
                    {block.description}
                  </p>
                  
                  {/* Bullets */}
                  {block.bullets && block.bullets.length > 0 && (
                    <ul className="space-y-3 pt-2">
                      {block.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary">{bullet}</span>
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
                        alt={block.imageAlt || block.headline}
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>
                  ) : (
                    /* Abstract visual placeholder */
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-surface-elevated to-surface-card border border-border rounded-2xl" />
                      {/* Decorative elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 relative">
                          {/* Floating geometric shapes */}
                          <div className="absolute top-0 left-1/4 w-20 h-20 rounded-full bg-accent-blue/20 animate-pulse" style={{ animationDuration: "4s" }} />
                          <div className="absolute bottom-1/4 right-0 w-32 h-32 rounded-full bg-cta/15 animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
                          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-lg bg-accent-blue/10 rotate-12 animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }} />
                          {/* Grid lines */}
                          <div className="absolute inset-0 opacity-20">
                            <div 
                              className="w-full h-full"
                              style={{
                                backgroundImage: `linear-gradient(hsl(var(--accent-blue)/0.3) 1px, transparent 1px),
                                                 linear-gradient(90deg, hsl(var(--accent-blue)/0.3) 1px, transparent 1px)`,
                                backgroundSize: '30px 30px'
                              }}
                            />
                          </div>
                          {/* Central icon area */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-surface-elevated border border-border flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cta to-cta-glow" />
                          </div>
                        </div>
                      </div>
                    </div>
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