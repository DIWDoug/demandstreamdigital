import { useState } from "react";
import { MapPin, Globe, Sparkles, TrendingUp, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

interface RankingFactor {
  rank: number;
  name: string;
  impact: "high" | "medium" | "low";
}

interface Category {
  id: string;
  title: string;
  icon: typeof MapPin;
  color: string;
  glowColor: string;
  description: string;
  factors: RankingFactor[];
}

const categories: Category[] = [
  {
    id: "local-pack",
    title: "Local Pack / Maps",
    icon: MapPin,
    color: "hsl(76, 42%, 41%)",
    glowColor: "hsl(76, 42%, 41%)",
    description: "Factors that influence visibility in Google's local 3-pack and Maps results",
    factors: [
      { rank: 1, name: "Primary GBP Category", impact: "high" },
      { rank: 2, name: "Proximity to Searcher", impact: "high" },
      { rank: 3, name: "Keywords in GBP Title", impact: "high" },
      { rank: 4, name: "Physical Address in City", impact: "high" },
      { rank: 5, name: "Business Open at Search Time", impact: "medium" },
      { rank: 6, name: "High Numerical Rating (4-5★)", impact: "medium" },
    ]
  },
  {
    id: "local-organic",
    title: "Local Organic",
    icon: Globe,
    color: "hsl(224, 60%, 55%)",
    glowColor: "hsl(224, 60%, 55%)",
    description: "Factors driving rankings in traditional organic search results with local intent",
    factors: [
      { rank: 1, name: "Quality & Authority of Links", impact: "high" },
      { rank: 2, name: "Dedicated Page for Each Service", impact: "high" },
      { rank: 3, name: "Keywords in Title Tag", impact: "high" },
      { rank: 4, name: "Domain Authority", impact: "medium" },
      { rank: 5, name: "Geographic Keyword in Content", impact: "medium" },
      { rank: 6, name: "Internal Linking Structure", impact: "medium" },
    ]
  },
  {
    id: "ai-visibility",
    title: "AI Search Visibility",
    icon: Sparkles,
    color: "hsl(280, 60%, 55%)",
    glowColor: "hsl(280, 60%, 55%)",
    description: "New factors influencing how AI systems like ChatGPT and Gemini recommend businesses",
    factors: [
      { rank: 1, name: "Presence on 'Best Of' Lists", impact: "high" },
      { rank: 2, name: "Dedicated Service Pages", impact: "high" },
      { rank: 3, name: "Industry Domain Prominence", impact: "high" },
      { rank: 4, name: "Citation Consistency", impact: "medium" },
      { rank: 5, name: "Structured Data Markup", impact: "medium" },
      { rank: 6, name: "Expert Content & Reviews", impact: "medium" },
    ]
  },
  {
    id: "conversion",
    title: "Conversion Factors",
    icon: TrendingUp,
    color: "hsl(35, 90%, 50%)",
    glowColor: "hsl(35, 90%, 50%)",
    description: "Elements that turn searchers into customers once they find the business",
    factors: [
      { rank: 1, name: "High Star Rating (4-5★)", impact: "high" },
      { rank: 2, name: "Positive Review Sentiment", impact: "high" },
      { rank: 3, name: "Mobile-Friendly Website", impact: "high" },
      { rank: 4, name: "Response to Reviews", impact: "medium" },
      { rank: 5, name: "Recent Review Activity", impact: "medium" },
      { rank: 6, name: "Photos in GBP Listing", impact: "medium" },
    ]
  }
];

const RankingFactorsInfographic = () => {
  const [activeCategory, setActiveCategory] = useState<string>("local-pack");
  const sectionRef = useScrollReveal();
  
  const activeCat = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-background relative overflow-hidden reveal-section">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-colors duration-700"
          style={{ background: activeCat.glowColor }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-blue/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
            2026 Research
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Local Search Ranking Factors
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Based on Whitespark's comprehensive study with 47 industry experts analyzing 187 ranking signals. 
            Understanding these factors is essential for any successful local SEO campaign.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 lg:gap-12">
          {/* Category selector */}
          <div className="space-y-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = category.id === activeCategory;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                    isActive 
                      ? "bg-surface-elevated border-transparent shadow-lg" 
                      : "bg-transparent border-border hover:border-border-subtle hover:bg-surface-elevated/50"
                  }`}
                  style={{
                    boxShadow: isActive ? `0 0 40px ${category.glowColor}20` : undefined
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive ? "scale-110" : "group-hover:scale-105"
                      }`}
                      style={{ 
                        background: isActive ? `${category.color}20` : "hsl(var(--surface-card))",
                        border: `1px solid ${isActive ? category.color : "hsl(var(--border))"}` 
                      }}
                    >
                      <Icon 
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: isActive ? category.color : "hsl(var(--text-secondary))" }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-text-secondary group-hover:text-foreground"
                      }`}>
                        {category.title}
                      </h3>
                      {isActive && (
                        <p className="text-sm text-text-muted mt-1 animate-fade-in">
                          {category.description}
                        </p>
                      )}
                    </div>
                    <ChevronRight 
                      className={`w-5 h-5 transition-all duration-300 ${
                        isActive 
                          ? "opacity-100 translate-x-0" 
                          : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
                      }`}
                      style={{ color: isActive ? category.color : undefined }}
                    />
                  </div>
                </button>
              );
            })}

            {/* Source attribution */}
            <div className="pt-4 mt-4 border-t border-border">
              <p className="text-xs text-text-muted">
                Source: Whitespark Local Search Ranking Factors 2026
              </p>
              <a 
                href="https://whitespark.ca/local-search-ranking-factors/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-accent-blue hover:underline"
              >
                View full research →
              </a>
            </div>
          </div>

          {/* Factors display */}
          <div className="relative">
            {/* Card container */}
            <div 
              className="rounded-2xl border p-6 lg:p-8 transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, hsl(var(--surface-elevated)), hsl(var(--surface-card)))`,
                borderColor: `${activeCat.color}30`,
                boxShadow: `0 20px 60px -20px ${activeCat.glowColor}30`
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
                <activeCat.icon 
                  className="w-6 h-6"
                  style={{ color: activeCat.color }}
                />
                <h3 className="text-xl font-semibold text-foreground">
                  Top {activeCat.title} Factors
                </h3>
              </div>

              {/* Factors list */}
              <div className="space-y-4">
                {activeCat.factors.map((factor, index) => {
                  const barWidth = 100 - (index * 10);
                  
                  return (
                    <div 
                      key={factor.name}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        {/* Rank badge */}
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                          style={{
                            background: index < 3 ? `${activeCat.color}20` : "hsl(var(--surface-dark))",
                            color: index < 3 ? activeCat.color : "hsl(var(--text-muted))",
                            border: `1px solid ${index < 3 ? activeCat.color : "hsl(var(--border))"}`
                          }}
                        >
                          {factor.rank}
                        </div>
                        
                        {/* Factor name */}
                        <span className={`flex-1 ${
                          index < 3 ? "text-foreground font-medium" : "text-text-secondary"
                        }`}>
                          {factor.name}
                        </span>

                        {/* Impact badge */}
                        <span 
                          className={`text-xs px-2 py-1 rounded-full ${
                            factor.impact === "high" 
                              ? "bg-cta/20 text-cta" 
                              : factor.impact === "medium"
                              ? "bg-accent-blue/20 text-accent-blue"
                              : "bg-surface-dark text-text-muted"
                          }`}
                        >
                          {factor.impact}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="h-1.5 bg-surface-dark rounded-full overflow-hidden ml-12">
                        <div 
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{ 
                            width: `${barWidth}%`,
                            background: `linear-gradient(90deg, ${activeCat.color}, ${activeCat.glowColor})`,
                            opacity: index < 3 ? 1 : 0.5
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer insight */}
              <div 
                className="mt-8 pt-6 border-t border-border"
              >
                <p className="text-sm text-text-secondary leading-relaxed">
                  <span className="font-semibold text-foreground">Key insight:</span>{" "}
                  {activeCategory === "local-pack" && "GBP category selection remains the single most controllable ranking factor. Choose your primary category carefully—it directly signals relevance to Google."}
                  {activeCategory === "local-organic" && "Quality backlinks and dedicated service pages are essential. Generic sites with thin content struggle to compete in local organic results."}
                  {activeCategory === "ai-visibility" && "This is the newest frontier in local search. Citations are becoming 'the new link' as AI systems use them to validate business legitimacy."}
                  {activeCategory === "conversion" && "Rankings mean nothing without conversions. A strong review profile with recent activity is often the difference between a call and a bounce."}
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div 
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-30 transition-colors duration-500"
              style={{ background: activeCat.color }}
            />
            <div 
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-3xl opacity-20 transition-colors duration-500"
              style={{ background: activeCat.color }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingFactorsInfographic;