import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

interface SubPoint {
  title: string;
  description: string;
}

interface ContentBlock {
  category: string;
  headline: string;
  description: string;
  subPoints: SubPoint[];
  imageSrc?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaHref?: string;
}

interface SpokeAlternatingBlocksProps {
  blocks: ContentBlock[];
}

const SpokeAlternatingBlocks = ({ blocks }: SpokeAlternatingBlocksProps) => {
  const sectionRef = useScrollReveal();
  
  return (
    <section ref={sectionRef} className="reveal-section">
      {blocks.map((block, index) => {
        const isReversed = index % 2 === 1;
        const isLight = index % 2 === 0;
        
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
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cta/20 to-accent-blue/20 rounded-2xl blur-2xl opacity-40 -z-10 translate-y-4" />
                      <img
                        src={block.imageSrc}
                        alt={block.imageAlt || block.headline}
                        className="w-full h-auto rounded-2xl shadow-2xl border border-border/20"
                      />
                    </div>
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

// Pre-configured blocks for On-Page Optimization (Dialed In style)
export const onPageOptimizationBlocks: ContentBlock[] = [
  {
    category: "Visible Elements",
    headline: "Superior On-Page Optimization",
    description: "The visible layer of on-page optimization covers everything consumers interact with directly. We optimize for both readability and search intent, treating every element as an opportunity to signal relevance.",
    subPoints: [
      {
        title: "Intent-Focused Title Tags",
        description: "We prioritize search intent over arbitrary character limits. Title tags up to 100 characters when the context demands it, always leading with the primary keyword and intent signal."
      },
      {
        title: "CTR-Optimized Meta Descriptions",
        description: "Following Backlinko best practices, meta descriptions are written like ad copy. The goal is click-through rate, not keyword stuffing."
      },
      {
        title: "Header Hierarchy & LSI Signals",
        description: "H1-H6 tags aligned with natural language patterns and latent semantic indexing. The structure tells search engines exactly what the page is about."
      },
      {
        title: "Hub-Spoke Internal Linking",
        description: "Every page is connected to its topical cluster. Internal links build authority and guide both users and crawlers through your content architecture."
      }
    ],
    ctaText: "Start the Conversation",
    ctaHref: "#contact"
  },
  {
    category: "Technical Markup",
    headline: "Structured Data That Earns Rich Results",
    description: "Technical on-page goes beyond visible content. Comprehensive schema markup tells search engines exactly what your content means, unlocking enhanced SERP features and AI engine visibility.",
    subPoints: [
      {
        title: "LocalBusiness & Organization Schema",
        description: "Core identity markup that powers Knowledge Panels, map integrations, and brand entity signals across Google's ecosystem."
      },
      {
        title: "Service & About Schema",
        description: "Service-area businesses get structured markup that clarifies what you do, where you do it, and the scope of your offerings."
      },
      {
        title: "FAQ & Testimonials Markup",
        description: "FAQ schema targets People Also Ask features. Review schema builds trust signals directly in search results."
      },
      {
        title: "Image Alt Text & Accessibility",
        description: "Every image optimized for screen readers and search engines. Accessibility isn't optional—it's a ranking factor and user experience imperative."
      }
    ],
    ctaText: "Schedule a Consultation",
    ctaHref: "#contact"
  },
  {
    category: "Full-Funnel Content",
    headline: "Awareness to Decision. Mapped and Optimized.",
    description: "We approach on-page optimization with the entire customer journey in mind. Each content type is treated uniquely based on where it sits in the funnel and what the user needs at that stage.",
    subPoints: [
      {
        title: "Top-of-Funnel Awareness Content",
        description: "State-of-industry articles, educational guides, and thought leadership that captures early-stage searchers and establishes topical authority."
      },
      {
        title: "Middle-Funnel Consideration Content",
        description: "Comparison pages, detailed guides, and 'how to choose' content that moves prospects from awareness to active evaluation."
      },
      {
        title: "Bottom-Funnel Decision Content",
        description: "Service pages, case studies, and conversion-focused content designed to capture users ready to take action."
      },
      {
        title: "Keyword Density & Semantic Relevance",
        description: "We still pay attention to keyword density where it matters, combined with LSI signals and semantic variations that signal comprehensive coverage."
      }
    ],
    ctaText: "Get a Custom Audit",
    ctaHref: "#contact"
  }
];

export default SpokeAlternatingBlocks;
