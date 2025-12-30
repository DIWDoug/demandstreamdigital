import { Settings, FileText, Link2, MapPin, Star, Search } from "lucide-react";

const pillars = [
  { icon: Settings, label: "Technical Foundation", description: "Fast, crawlable, mobile-first sites that Google rewards" },
  { icon: FileText, label: "On-Page Optimization", description: "Pages that rank for the searches your clients need to own" },
  { icon: Search, label: "Content That Converts", description: "Service pages and blogs that attract ready-to-buy customers" },
  { icon: Link2, label: "Authority Building", description: "Links and citations that signal trust to search engines" },
  { icon: MapPin, label: "Google Business Profile", description: "The listing that drives 84% of local discovery searches" },
  { icon: Star, label: "Reviews That Sell", description: "A steady stream of 5-star reviews that close deals before the first call" },
];

const LocalSEOExplainer = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div>
              <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
                Why Local SEO Matters
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                46% of Google Searches Have Local Intent
              </h2>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                When someone searches "plumber near me" or "best dentist in Austin," they are ready to buy. Local SEO puts your clients in front of these high-intent customers at the exact moment they are looking.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                The businesses that show up in the local 3-pack and top organic results capture 70% of the clicks. Everyone else fights over scraps.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We handle the technical work, the content, the links, and the ongoing optimization. You take credit for the results.
              </p>
            </div>

            {/* Right: Pillar Grid */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                {pillars.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-surface-elevated border border-border/50 rounded-xl p-4 sm:p-5 hover:border-accent-blue/30 transition-colors"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-2 sm:mb-3">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue" />
                    </div>
                    <p className="text-foreground font-semibold text-sm sm:text-base mb-1">{item.label}</p>
                    <p className="text-text-muted text-xs sm:text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOExplainer;
