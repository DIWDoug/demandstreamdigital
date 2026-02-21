import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

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
  const sectionRef = useScrollReveal();
  
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
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(224,60%,55%)]">
                    {block.eyebrow}
                  </span>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-gray-900 leading-tight">
                    {block.headline}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {block.description}
                  </p>
                  
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
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-green/20 rounded-2xl blur-2xl opacity-50 -z-10 translate-y-4" />
                      <img
                        src={block.imageSrc}
                        alt={descriptiveAlt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-green/20 rounded-2xl blur-2xl opacity-50 -z-10 translate-y-4" />
                      <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl" />
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
