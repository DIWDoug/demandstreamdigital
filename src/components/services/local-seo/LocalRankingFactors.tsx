import { useState } from "react";
import { Star, MapPin, Link2, FileText, Clock, MessageSquare, Building2, Navigation } from "lucide-react";
import rankingFactorsImage from "@/assets/ranking-factors-analysis.jpg";

interface Factor {
  icon: typeof Star;
  label: string;
  weight: string;
  description: string;
  detail: {
    title: string;
    body: string;
  };
}

const LocalRankingFactors = () => {
  const [activeFactor, setActiveFactor] = useState<number | null>(null);

  const factors: Factor[] = [
    {
      icon: MapPin,
      label: "Google Business Profile",
      weight: "32%",
      description: "Proximity, categories, keywords in business name, and profile completeness",
      detail: {
        title: "GBP Signals Dominate",
        body: "Google Business Profile signals account for 32% of local pack rankings. Proximity to the searcher, primary category selection, and keywords in the business name are the top individual factors. Complete, active profiles consistently outrank sparse ones."
      }
    },
    {
      icon: Star,
      label: "Reviews & Ratings",
      weight: "20%",
      description: "Review quantity, recency, velocity, and response management",
      detail: {
        title: "Reviews Now at 20%",
        body: "Review signals have grown from 16% to 20% of local ranking factors. Review recency is now the 11th most influential factor overall. A strategic review campaign with consistent response management is essential for competitive markets."
      }
    },
    {
      icon: FileText,
      label: "On-Page Signals",
      weight: "15%",
      description: "NAP consistency, keyword presence, and domain authority",
      detail: {
        title: "On-Page Foundation",
        body: "On-page signals account for 15% of rankings. This includes NAP consistency, location keywords in title tags and content, domain authority, and mobile-friendliness. Technical SEO remains foundational even as proximity gains weight."
      }
    },
    {
      icon: MessageSquare,
      label: "Behavioral Signals",
      weight: "9%",
      description: "Click-through rates, mobile clicks-to-call, and real-time engagement",
      detail: {
        title: "User Behavior Matters",
        body: "Behavioral signals at 9% include click-through rates from search results, mobile clicks-to-call, and dwell time. Google watches how users interact with listings to gauge relevance and quality."
      }
    },
    {
      icon: Link2,
      label: "Link Authority",
      weight: "8%",
      description: "Quality and local relevance of inbound links",
      detail: {
        title: "Links Still Matter",
        body: "Link signals at 8% continue a downward trend but remain important for competitive markets. Local relevance matters more than raw domain authority. Links from local news, chambers of commerce, and industry associations carry extra weight."
      }
    },
    {
      icon: Building2,
      label: "Citation Signals",
      weight: "6%",
      description: "Accuracy across directories, critical for AI visibility",
      detail: {
        title: "Citations for AI Visibility",
        body: "Citation signals at 6% are foundational for NAP consistency. More importantly, citations feed the data sources that AI models like ChatGPT and Gemini use to recommend businesses. Accurate citations mean better AI visibility."
      }
    },
    {
      icon: Clock,
      label: "Business Hours",
      weight: "5th Factor",
      description: "Openness at search time now directly impacts visibility",
      detail: {
        title: "Open Businesses Win",
        body: "Business hours openness is now the 5th most influential individual factor. Businesses effectively disappear from the local pack after they close. Extended hours or 24/7 availability creates a ranking advantage."
      }
    },
    {
      icon: Navigation,
      label: "Proximity",
      weight: "#1 Factor",
      description: "Physical distance is now the dominant ranking signal",
      detail: {
        title: "Vicinity Update Changed Everything",
        body: "The Vicinity Update made physical proximity the dominant ranking factor. Rankings are now dynamic, changing based on where the searcher is standing. This is why cookie-cutter packages fail: every market has different proximity dynamics."
      }
    }
  ];

  const activeDetail = activeFactor !== null ? factors[activeFactor].detail : {
    title: "The Vicinity Update Changed Everything",
    body: "Google's Vicinity Update made physical proximity the dominant ranking factor. Rankings are now dynamic, changing based on where a user is standing. This is why cookie-cutter packages fail. We scope every engagement to the actual competitive landscape."
  };

  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              Latest Ranking Factors
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              What Actually Moves the Needle
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Based on Whitespark's Local Search Ranking Factors research. The data behind every strategy we build.
            </p>
          </div>

          {/* Two Column: Factors + Dynamic Callout */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Factor Grid */}
            <div className="grid grid-cols-2 gap-4">
              {factors.map((factor, index) => (
                <button
                  key={index}
                  onMouseEnter={() => setActiveFactor(index)}
                  onMouseLeave={() => setActiveFactor(null)}
                  onClick={() => setActiveFactor(activeFactor === index ? null : index)}
                  className={`bg-surface-elevated border rounded-xl p-4 text-left transition-all duration-200 ${
                    activeFactor === index 
                      ? "border-cta ring-2 ring-cta/20 scale-[1.02]" 
                      : "border-border/50 hover:border-cta/30"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      activeFactor === index ? "bg-cta/20" : "bg-cta/10"
                    }`}>
                      <factor.icon className="w-4 h-4 text-cta" />
                    </div>
                    <span className={`font-bold text-lg transition-colors ${
                      activeFactor === index ? "text-cta" : "text-cta"
                    }`}>{factor.weight}</span>
                  </div>
                  <p className="text-foreground font-semibold text-sm mb-1">{factor.label}</p>
                  <p className="text-text-muted text-xs leading-relaxed">{factor.description}</p>
                </button>
              ))}
            </div>

            {/* Right: Image with Dynamic Callout */}
            <div className="space-y-0">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[16/9] rounded-t-2xl overflow-hidden border border-b-0 border-border/50 bg-surface-elevated">
                  <img 
                    src={rankingFactorsImage} 
                    alt="Local search ranking factors analysis" 
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                </div>
              </div>
              
              {/* Dynamic Detail Card - updates on hover */}
              <div 
                className="bg-surface-dark/95 backdrop-blur-sm rounded-b-2xl p-5 border border-t-0 border-border/50 transition-all duration-300"
                key={activeFactor}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-cta/10 flex items-center justify-center">
                    {activeFactor !== null ? (
                      (() => {
                        const Icon = factors[activeFactor].icon;
                        return <Icon className="w-4 h-4 text-cta" />;
                      })()
                    ) : (
                      <Navigation className="w-4 h-4 text-cta" />
                    )}
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{activeDetail.title}</p>
                    <p className="text-text-muted text-xs">Source: Whitespark 2026</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {activeDetail.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalRankingFactors;
