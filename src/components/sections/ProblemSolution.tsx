import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Shield, MessageSquare, Settings, ArrowRight } from "lucide-react";

const ProblemSolution = () => {
  const sectionRef = useScrollReveal();

  const pillars = [
    {
      icon: Shield,
      title: "Trust",
      subtitle: "Earned through consistency",
      body: "You need a partner who shows up the same way every month. We deliver on defined commitments, surface issues early, and never leave you guessing about the status of client work."
    },
    {
      icon: MessageSquare,
      title: "Clarity",
      subtitle: "Work you can explain",
      body: "Your team should be able to confidently discuss what's happening and why. We structure execution and reporting so you can stand behind the work without hedging or scrambling."
    },
    {
      icon: Settings,
      title: "Execution",
      subtitle: "Scoped to each market",
      body: "Every client's market is different. We scope work to match the actual competitive landscape and adjust as conditions change. No templates. No forcing square pegs into round holes."
    }
  ];

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal-section py-20 lg:py-28 bg-surface-dark relative overflow-hidden"
    >
      {/* Subtle dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
              Trust. Clarity. Execution.
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              These three things determine whether fulfillment strengthens your agency or quietly erodes it. We built our entire approach around getting them right.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="group bg-background/50 rounded-xl p-6 lg:p-8 border border-border/30 hover:border-accent-blue/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-5 group-hover:bg-accent-blue/20 transition-colors">
                  <pillar.icon className="h-5 w-5 text-accent-blue" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {pillar.title}
                </h3>
                <p className="text-accent-blue text-sm font-medium mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          {/* Supporting Context - brings in customization rationale */}
          <div className="text-center">
            <p className="text-text-muted text-base max-w-2xl mx-auto mb-8">
              Pre-built packages look clean on paper but rarely match real-world requirements. We took a different path: scope before services, standards before scale, and honest expectations from the start.
            </p>
            <a 
              href="#about" 
              className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 font-medium transition-colors group"
            >
              See how we work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;