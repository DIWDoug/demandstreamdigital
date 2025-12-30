import { Star, MapPin, Link2, FileText, Settings, MessageSquare, Building2, TrendingUp } from "lucide-react";
import rankingFactorsImage from "@/assets/ranking-factors-analysis.jpg";

const LocalRankingFactors = () => {
  const factors = [
    {
      icon: MapPin,
      label: "Google Business Profile",
      weight: "32%",
      description: "Proximity, categories, and profile completeness"
    },
    {
      icon: Star,
      label: "Reviews & Ratings",
      weight: "16%",
      description: "Review quantity, velocity, and response management"
    },
    {
      icon: FileText,
      label: "On-Page Signals",
      weight: "19%",
      description: "NAP consistency, keyword presence, and domain authority"
    },
    {
      icon: Link2,
      label: "Link Authority",
      weight: "11%",
      description: "Quality and relevance of inbound links"
    },
    {
      icon: Building2,
      label: "Citation Consistency",
      weight: "7%",
      description: "Accuracy across directories and data aggregators"
    },
    {
      icon: MessageSquare,
      label: "Behavioral Signals",
      weight: "8%",
      description: "Click-through rates, mobile clicks-to-call, and engagement"
    },
    {
      icon: Settings,
      label: "Personalization",
      weight: "4%",
      description: "Search history and location-based personalization"
    },
    {
      icon: TrendingUp,
      label: "Social Signals",
      weight: "3%",
      description: "Social engagement and brand mentions"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              What Actually Matters
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Local Search Ranking Factors
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Understanding what Google weighs helps focus effort where it matters. These factors, based on industry research from Whitespark and BrightLocal, guide our prioritization.
            </p>
          </div>

          {/* Two Column: Factors + Image */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Factor Grid */}
            <div className="grid grid-cols-2 gap-4">
              {factors.map((factor, index) => (
                <div 
                  key={index}
                  className="bg-surface-elevated border border-border/50 rounded-xl p-4 hover:border-cta/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cta/10 flex items-center justify-center shrink-0">
                      <factor.icon className="w-4 h-4 text-cta" />
                    </div>
                    <span className="text-cta font-bold text-lg">{factor.weight}</span>
                  </div>
                  <p className="text-foreground font-semibold text-sm mb-1">{factor.label}</p>
                  <p className="text-text-muted text-xs leading-relaxed">{factor.description}</p>
                </div>
              ))}
            </div>

            {/* Right: Visual/Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 bg-surface-elevated">
                <img 
                  src={rankingFactorsImage} 
                  alt="Local search ranking factors analysis visualization" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Callout */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface-dark/95 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <p className="text-foreground font-semibold text-sm mb-1">Reviews Matter More Than Ever</p>
                <p className="text-text-muted text-xs">
                  Review signals have grown from 10% to 16% of local ranking factors over the past five years. A strategic review campaign is no longer optional.
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
