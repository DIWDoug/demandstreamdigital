import { Layers, Zap, TrendingUp } from "lucide-react";

const SystemPrimer = () => {
  const tiers = [
    {
      icon: Layers,
      label: "Foundation",
      title: "Local SEO Engine",
      description: "Technical optimization, content authority, and citation consistency that compound over time",
      color: "accent-blue"
    },
    {
      icon: Zap,
      label: "Amplification",
      title: "Paid, Content & Authority",
      description: "Google Ads, Meta campaigns, content marketing, and link building that accelerate visibility",
      color: "cta"
    },
    {
      icon: TrendingUp,
      label: "Scale",
      title: "Retention & Operations",
      description: "Reporting, process documentation, and fulfillment systems that support agency growth",
      color: "accent-blue"
    }
  ];

  return (
    <section id="system" className="py-20 lg:py-28 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header - minimal */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            One Inbound System. Multiple Execution Layers.
          </h2>
          <p className="text-text-secondary">
            Start anywhere. Results compound when deployed together.
          </p>
        </div>

        {/* Three-tier horizontal diagram */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            {/* Connecting lines (desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-px bg-gradient-to-r from-border-subtle via-accent-blue/30 to-border-subtle -translate-y-1/2 z-0" />
            
            {tiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative z-10 text-center ${index === 0 ? 'md:scale-105' : ''}`}
              >
                {/* Icon container */}
                <div className={`
                  mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-5
                  ${index === 0 
                    ? 'bg-accent-blue/20 border-2 border-accent-blue/40 shadow-lg shadow-accent-blue/20' 
                    : 'bg-surface-elevated border border-border-subtle'
                  }
                `}>
                  <tier.icon className={`h-7 w-7 ${index === 0 ? 'text-accent-blue' : 'text-text-secondary'}`} />
                </div>

                {/* Label */}
                <p className={`text-xs uppercase tracking-widest font-medium mb-2 ${
                  index === 0 ? 'text-accent-blue' : 'text-text-muted'
                }`}>
                  {tier.label}
                </p>

                {/* Title */}
                <h3 className={`text-lg font-semibold mb-3 ${
                  index === 0 ? 'text-foreground' : 'text-text-secondary'
                }`}>
                  {tier.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
                  {tier.description}
                </p>

                {/* Foundation emphasis */}
                {index === 0 && (
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20">
                    <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                    <span className="text-xs text-accent-blue font-medium">Core Engine</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemPrimer;
