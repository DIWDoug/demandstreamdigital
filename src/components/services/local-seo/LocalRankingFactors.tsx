import { Star, MapPin, Link2, FileText, Clock, MessageSquare, Building2, Navigation } from "lucide-react";
import rankingFactorsImage from "@/assets/ranking-factors-analysis.jpg";

const LocalRankingFactors = () => {
  const factors = [
    {
      icon: MapPin,
      label: "Google Business Profile",
      weight: "32%",
      description: "Proximity, categories, keywords in business name, and profile completeness"
    },
    {
      icon: Star,
      label: "Reviews & Ratings",
      weight: "20%",
      description: "Review quantity, recency, velocity, and response management"
    },
    {
      icon: FileText,
      label: "On-Page Signals",
      weight: "15%",
      description: "NAP consistency, keyword presence, and domain authority"
    },
    {
      icon: MessageSquare,
      label: "Behavioral Signals",
      weight: "9%",
      description: "Click-through rates, mobile clicks-to-call, and real-time engagement"
    },
    {
      icon: Link2,
      label: "Link Authority",
      weight: "8%",
      description: "Quality and local relevance of inbound links"
    },
    {
      icon: Building2,
      label: "Citation Signals",
      weight: "6%",
      description: "Accuracy across directories, critical for AI visibility"
    },
    {
      icon: Clock,
      label: "Business Hours",
      weight: "5th Factor",
      description: "Openness at search time now directly impacts visibility"
    },
    {
      icon: Navigation,
      label: "Proximity",
      weight: "#1 Factor",
      description: "Physical distance is now the dominant ranking signal"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              2026 Ranking Factors
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              What Actually Moves the Needle
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              Based on Whitespark's 2026 Local Search Ranking Factors research, these signals guide where we focus effort and why cookie-cutter approaches fail.
            </p>
          </div>

          {/* Two Column: Factors + Vicinity Callout */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
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

            {/* Right: Vicinity Update + Reviews Callout */}
            <div className="space-y-6">
              {/* Vicinity Update Card */}
              <div className="bg-surface-elevated border border-cta/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-cta" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">The Vicinity Update Changed Everything</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Google's Vicinity Update made physical proximity the dominant ranking factor for local results. Rankings are now dynamic, changing based on where a user is standing, sometimes street by street.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  This is why cookie-cutter packages fail. A business in a dense urban market competes differently than one in a suburban area. A lawyer in downtown Chicago faces different proximity dynamics than a plumber in a small town.
                </p>
                <p className="text-foreground text-sm font-medium">
                  One-size-fits-all SEO ignores these realities. We scope every engagement to the actual competitive landscape.
                </p>
              </div>

              {/* Reviews Callout */}
              <div className="relative">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border/50 bg-surface-elevated">
                  <img 
                    src={rankingFactorsImage} 
                    alt="Local search ranking factors analysis" 
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                </div>
                
                {/* Reviews Stat Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-surface-dark/95 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-5 h-5 text-cta" />
                    <p className="text-foreground font-semibold">Reviews Now at 20%</p>
                  </div>
                  <p className="text-text-muted text-xs">
                    Review signals have grown from 16% to 20% of local ranking factors. Review recency is now the 11th most influential factor overall. A strategic review campaign is essential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalRankingFactors;
