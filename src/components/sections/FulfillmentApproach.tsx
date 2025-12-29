import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Target, Shield, Layers, RefreshCcw } from "lucide-react";

const FulfillmentApproach = () => {
  const sectionRef = useScrollReveal();
  
  const pillars = [
    {
      icon: Target,
      title: "Scope Comes Before Services",
      body: "Every engagement begins with a clear understanding of the client's market, competition, and goals. Scope is defined intentionally before work begins, so execution matches reality instead of assumptions."
    },
    {
      icon: Shield,
      title: "Clear Standards and Guardrails",
      body: "Custom does not mean open-ended. Deliverables, communication rhythms, and boundaries are clearly defined upfront, protecting expectations, margins, and accountability."
    },
    {
      icon: Layers,
      title: "Systems-Driven, Human-Led Execution",
      body: "We use systems and AI-assisted workflows to accelerate research, planning, and execution. Specialists make the decisions that matter, while systems remove friction and inconsistency."
    },
    {
      icon: RefreshCcw,
      title: "Built to Adapt Without Resetting Everything",
      body: "Markets change. Algorithms shift. Competition evolves. Our structure allows execution to adjust intentionally over time without restarting the engagement or blowing up scope."
    }
  ];

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal-section py-20 lg:py-28 bg-surface-elevated relative overflow-hidden"
    >
      {/* Subtle dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Subtle gradient orbs for depth */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Subtle accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-accent-blue/20 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Header */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="inline-block mb-4">
                <span className="text-accent-blue text-sm font-medium tracking-wider uppercase">
                  Our Framework
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-foreground mb-6 leading-tight">
                How We Approach{" "}
                <span className="text-text-secondary">White Label Fulfillment</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-4 max-w-xl">
                Most fulfillment partners either lock you into rigid packages or leave scope so open that margins disappear. We take a different approach: every engagement starts with a clear picture of the client's market, competition, and goals.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                When things change (and they will), we surface it early, talk through options, and document adjustments before moving forward. You stay in the loop without having to chase updates or manage the work yourself.
              </p>
            </div>

            {/* Right Column - Pillars */}
            <div className="reveal-children space-y-0">
              {pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className={`group py-8 transition-all duration-300 hover:pl-4 opacity-0 translate-y-4 animate-fade-in-up ${
                    index !== pillars.length - 1 ? 'border-b border-border/30' : ''
                  }`}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="flex gap-4">
                    {/* Abstract icon indicator */}
                    <div className="flex-shrink-0">
                      <span 
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-blue/10 text-accent-blue transition-all duration-300 group-hover:bg-accent-blue group-hover:text-white scale-0 animate-scale-in"
                        style={{ 
                          animationDelay: `${index * 150 + 100}ms`,
                          animationFillMode: 'forwards'
                        }}
                      >
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
          <div className="mt-20 pt-12 border-t border-border/20">
            <p className="text-center text-text-secondary text-xl max-w-2xl mx-auto">
              This approach gives agencies{" "}
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

export default FulfillmentApproach;