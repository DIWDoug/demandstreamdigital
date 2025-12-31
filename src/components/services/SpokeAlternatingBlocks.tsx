import { Check, Eye, Settings, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

interface ContentBlock {
  eyebrow: string;
  headline: string;
  description: string;
  bullets: string[];
  accentColor: "cta" | "blue" | "slate";
  icon: React.ReactNode;
}

interface SpokeAlternatingBlocksProps {
  blocks: ContentBlock[];
}

const SpokeAlternatingBlocks = ({ blocks }: SpokeAlternatingBlocksProps) => {
  const sectionRef = useScrollReveal();
  
  const getAccentClasses = (accent: ContentBlock["accentColor"]) => {
    switch (accent) {
      case "cta":
        return {
          eyebrow: "text-cta",
          iconBg: "bg-cta/10",
          iconColor: "text-cta",
          checkBg: "bg-cta/10",
          checkColor: "text-cta",
          border: "border-cta/20",
          glow: "from-cta/20 to-cta/5"
        };
      case "blue":
        return {
          eyebrow: "text-accent-blue",
          iconBg: "bg-accent-blue/10",
          iconColor: "text-accent-blue",
          checkBg: "bg-accent-blue/10",
          checkColor: "text-accent-blue",
          border: "border-accent-blue/20",
          glow: "from-accent-blue/20 to-accent-blue/5"
        };
      default:
        return {
          eyebrow: "text-slate-500",
          iconBg: "bg-slate-100",
          iconColor: "text-slate-600",
          checkBg: "bg-slate-100",
          checkColor: "text-slate-600",
          border: "border-slate-200",
          glow: "from-slate-200/50 to-slate-100/30"
        };
    }
  };
  
  return (
    <section ref={sectionRef} className="py-20 lg:py-28 section-light relative overflow-hidden reveal-section">
      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-accent-blue/3 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-cta/3 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="space-y-0">
          {blocks.map((block, index) => {
            const isReversed = index % 2 === 1;
            const accent = getAccentClasses(block.accentColor);
            
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-0 items-stretch ${
                  isReversed ? "" : ""
                }`}
              >
                {/* Content Card */}
                <div 
                  className={`relative p-8 lg:p-12 ${
                    isReversed ? "lg:order-2" : ""
                  } ${index === 0 ? "rounded-tl-2xl" : ""} ${
                    index === blocks.length - 1 && !isReversed ? "rounded-bl-2xl" : ""
                  } ${
                    index === blocks.length - 1 && isReversed ? "rounded-br-2xl" : ""
                  }`}
                  style={{
                    background: "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(210 20% 98%) 100%)"
                  }}
                >
                  {/* Left accent line */}
                  <div className={`absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b ${accent.glow} rounded-full`} />
                  
                  {/* Content */}
                  <div className="pl-6 space-y-5">
                    {/* Icon + Eyebrow */}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${accent.iconBg} flex items-center justify-center`}>
                        {block.icon}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-[0.2em] ${accent.eyebrow}`}>
                        {block.eyebrow}
                      </span>
                    </div>
                    
                    {/* Headline */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
                      {block.headline}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-base text-slate-600 leading-relaxed">
                      {block.description}
                    </p>
                    
                    {/* Bullets */}
                    <ul className="space-y-3 pt-2">
                      {block.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full ${accent.checkBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className={`w-3 h-3 ${accent.checkColor}`} />
                          </div>
                          <span className="text-sm text-slate-600">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Block */}
                <div 
                  className={`relative min-h-[300px] lg:min-h-0 ${
                    isReversed ? "lg:order-1" : ""
                  } ${index === 0 && isReversed ? "rounded-tl-2xl" : ""} ${
                    index === 0 && !isReversed ? "rounded-tr-2xl" : ""
                  } ${
                    index === blocks.length - 1 && isReversed ? "rounded-bl-2xl" : ""
                  } ${
                    index === blocks.length - 1 && !isReversed ? "rounded-br-2xl" : ""
                  }`}
                  style={{
                    background: `linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(220 40% 13%) 100%)`
                  }}
                >
                  {/* Abstract visual */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    {/* Grid pattern */}
                    <div 
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: `linear-gradient(hsl(var(--cta)) 1px, transparent 1px),
                                         linear-gradient(90deg, hsl(var(--cta)) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                      }}
                    />
                    
                    {/* Floating elements */}
                    <div className="relative w-3/4 h-3/4">
                      <div 
                        className={`absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br ${accent.glow} blur-2xl animate-pulse`}
                        style={{ animationDuration: "4s" }}
                      />
                      <div 
                        className={`absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-tl ${accent.glow} blur-2xl animate-pulse`}
                        style={{ animationDuration: "5s", animationDelay: "1s" }}
                      />
                      
                      {/* Central indicator */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className={`w-20 h-20 rounded-2xl ${accent.iconBg} flex items-center justify-center border ${accent.border}`}>
                          <span className="text-3xl font-bold text-white/80">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Pre-configured blocks for On-Page Optimization
export const onPageOptimizationBlocks: ContentBlock[] = [
  {
    eyebrow: "Visible Elements",
    headline: "What Users See. What Search Engines Read.",
    description: "The visible layer of on-page optimization covers everything consumers interact with directly. We optimize for both readability and search intent.",
    bullets: [
      "Intent-focused title tags (we prioritize intent over arbitrary character limits)",
      "CTR-optimized meta descriptions written like ad copy, following Backlinko best practices",
      "Header hierarchies (H1-H6) aligned with natural language and LSI signals",
      "Hub-spoke internal linking architecture for topical authority",
      "Image alt text optimized for accessibility and screen readers"
    ],
    accentColor: "cta",
    icon: <Eye className="w-5 h-5 text-cta" />
  },
  {
    eyebrow: "Technical Markup",
    headline: "Structured Data That Earns Rich Results",
    description: "Technical on-page goes beyond visible content. Comprehensive schema markup tells search engines exactly what your content means, unlocking enhanced SERP features.",
    bullets: [
      "LocalBusiness schema for local search visibility",
      "Organization and About schema for brand authority",
      "Service schema for service-area businesses",
      "FAQ schema targeting People Also Ask features",
      "Testimonials and review markup for trust signals"
    ],
    accentColor: "blue",
    icon: <Settings className="w-5 h-5 text-accent-blue" />
  },
  {
    eyebrow: "Full-Funnel Content",
    headline: "Awareness to Decision. Mapped and Optimized.",
    description: "We approach on-page optimization with the entire customer journey in mind. Each content type is treated uniquely based on where it sits in the funnel.",
    bullets: [
      "Top-of-funnel awareness content (state-of-industry, educational)",
      "Middle-funnel consideration content (comparisons, guides)",
      "Bottom-funnel decision content (service pages, case studies)",
      "Keyword density analysis where still relevant",
      "Content optimization based on LSI signals and semantic relevance"
    ],
    accentColor: "slate",
    icon: <TrendingUp className="w-5 h-5 text-slate-600" />
  }
];

export default SpokeAlternatingBlocks;
