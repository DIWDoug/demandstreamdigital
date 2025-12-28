import { Target, Shield, Layers, RefreshCcw } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Scope Comes Before Services",
    body: "Every engagement begins with clear understanding of the client's market, competition, and goals. Scope is defined intentionally before work begins."
  },
  {
    icon: Shield,
    title: "Clear Standards and Guardrails",
    body: "Custom does not mean open-ended. Deliverables, communication rhythms, and boundaries are clearly defined upfront."
  },
  {
    icon: Layers,
    title: "Systems-Driven, Human-Led",
    body: "We use systems and AI-assisted workflows to accelerate execution. Specialists make the decisions that matter."
  },
  {
    icon: RefreshCcw,
    title: "Built to Adapt Without Resetting",
    body: "Markets change. Our structure allows execution to adjust intentionally over time without restarting or blowing up scope."
  }
];

const ServicesFramework = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-elevated relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Header */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4">
                Our Framework
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
                How We Approach{" "}
                <span className="text-text-secondary">White Label Fulfillment</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-4">
                Custom fulfillment only works when it is controlled. Our approach adapts to different markets without introducing chaos or scope creep. We start with structure, not services, scoping each engagement based on real factors like location count, competition, and client goals rather than preset packages.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                When performance dips or priorities change, nothing happens in the dark. We surface issues early, align on adjustments, and document changes before execution shifts. Scope does not quietly expand, deliverables do not drift, and responsibility is never unclear. You stay informed, in control, and protected from surprises while we handle the work behind the scenes.
              </p>
            </div>

            {/* Right Column - Pillars */}
            <div className="space-y-0">
              {pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className={`group py-8 transition-all duration-300 hover:pl-4 ${
                    index !== pillars.length - 1 ? 'border-b border-border/30' : ''
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-blue/10 text-accent-blue transition-all duration-300 group-hover:bg-accent-blue group-hover:text-white">
                        <pillar.icon className="w-3.5 h-3.5" strokeWidth={2} />
                      </span>
                    </div>
                    <div>
                      <strong className="block text-foreground text-lg font-semibold mb-2 group-hover:text-accent-blue transition-colors duration-300">
                        {pillar.title}
                      </strong>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Line */}
          <div className="mt-16 pt-10 border-t border-border/20">
            <p className="text-center text-text-secondary text-lg max-w-2xl mx-auto">
              This gives agencies{" "}
              <span className="text-foreground font-medium">flexibility</span>{" "}
              without sacrificing{" "}
              <span className="text-foreground font-medium">control</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFramework;
