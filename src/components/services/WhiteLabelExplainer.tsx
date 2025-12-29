import { Search, MousePointerClick, Mail, Award, FileText, TrendingUp } from "lucide-react";

const components = [
  { icon: Search, label: "SEO", description: "Organic visibility in search results" },
  { icon: MousePointerClick, label: "Paid Media", description: "Google & Meta ad campaigns" },
  { icon: Mail, label: "Email", description: "Nurture sequences & automation" },
  { icon: Award, label: "Authority", description: "PR, backlinks & trust signals" },
  { icon: FileText, label: "Content", description: "Blogs, landing pages & assets" },
  { icon: TrendingUp, label: "Analytics", description: "Tracking, reporting & optimization" },
];

const WhiteLabelExplainer = () => {
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
                The Methodology
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                What is inbound marketing?
              </h2>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                Inbound marketing is a system for attracting customers through relevant content and experiences while strategically using paid media to accelerate visibility as you build long-term assets.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Instead of chasing leads, you build visibility where buyers are already searching. SEO captures intent. Paid media accelerates reach. Email nurtures relationships. Authority building earns trust. Content ties it all together.
              </p>
              <p className="text-text-secondary leading-relaxed">
                When these channels work as a coordinated system—not siloed tactics—the compounding effect drives consistent, measurable growth over time.
              </p>
            </div>

            {/* Right: Component Grid */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                {components.map((item, index) => (
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

export default WhiteLabelExplainer;
