import { Settings, FileText, Link2, MapPin, Star, Search } from "lucide-react";

const pillars = [
  { icon: Settings, label: "Technical Foundation", description: "Site architecture, crawlability, and schema markup" },
  { icon: FileText, label: "On-Page Optimization", description: "Visual and technical page-level optimization" },
  { icon: Search, label: "Content Development", description: "Service pages, location content, and blog strategy" },
  { icon: Link2, label: "Authority Building", description: "Local links, citations, and PR campaigns" },
  { icon: MapPin, label: "Google Business Profile", description: "Profile optimization and ongoing management" },
  { icon: Star, label: "Reviews & Reputation", description: "Review generation and response management" },
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
                The Foundation
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                What is Local SEO?
              </h2>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                Local SEO is the practice of optimizing a business's online presence to attract customers from local searches. When someone searches for "plumber near me" or "best dentist in Austin," local SEO determines which businesses appear.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                It encompasses everything from technical website optimization to Google Business Profile management, content strategy, citation building, and review generation. Each component reinforces the others to build a comprehensive local presence.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Unlike national SEO, local SEO requires understanding geographic signals, local search behavior, and the unique ranking factors that determine visibility in the local pack and organic results.
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
