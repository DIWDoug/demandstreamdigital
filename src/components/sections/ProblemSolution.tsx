import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { MapPin, Layers, ClipboardList, Target, Shield, RefreshCcw } from "lucide-react";

const ProblemSolution = () => {
  const sectionRef = useScrollReveal();

  const problems = [
    {
      icon: MapPin,
      title: "Every Market Is Different",
      body: "A plumber in Austin faces different competition than one in Seattle. Cookie-cutter packages treat them the same way, and the results show it."
    },
    {
      icon: Layers,
      title: "Scope Gets Messy Fast",
      body: "Campaigns evolve. New priorities emerge. Fixed tiers don't flex with reality, so teams either cut corners or quietly over-deliver and lose margin."
    },
    {
      icon: ClipboardList,
      title: "Checklists Replace Thinking",
      body: "When fulfillment is defined by a package, execution becomes routine. The work gets done, but nobody's asking if it's still the right work."
    }
  ];

  const solutions = [
    {
      icon: Target,
      title: "Scope Comes Before Services",
      body: "Every engagement begins with a clear understanding of the client's market, competition, and goals. We define scope intentionally before work begins."
    },
    {
      icon: Shield,
      title: "Clear Standards and Guardrails",
      body: "Custom does not mean open-ended. Deliverables, communication rhythms, and boundaries are defined upfront, protecting expectations and margins."
    },
    {
      icon: Layers,
      title: "Systems-Driven, Human-Led",
      body: "We use AI-assisted workflows to accelerate research and execution. Specialists make the decisions that matter, while systems remove friction."
    },
    {
      icon: RefreshCcw,
      title: "Built to Adapt",
      body: "Markets change. Algorithms shift. Our structure allows execution to adjust intentionally over time without restarting or blowing up scope."
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
        <div className="max-w-6xl mx-auto">
          
          {/* Problem Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-red-400/80 text-sm font-medium tracking-wider uppercase mb-4 block">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
                Why Package-Based Fulfillment Breaks Down
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                It's not that fulfillment partners are bad at their jobs. It's that rigid packages weren't designed for work this variable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="bg-background/50 rounded-xl p-6 border border-border/30"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                      <problem.icon className="h-4 w-4 text-red-400/80" />
                    </div>
                    <strong className="text-base font-semibold text-foreground">
                      {problem.title}
                    </strong>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {problem.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider with arrow */}
          <div className="flex items-center justify-center mb-20">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="mx-6 w-12 h-12 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Solution Section */}
          <div>
            <div className="text-center mb-12">
              <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
                How We Do It Differently
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Every engagement starts with scope and standards, not packages and tiers. When things change, we surface it early and adjust intentionally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="group bg-background/50 rounded-xl p-6 border border-border/30 hover:border-accent-blue/30 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 group-hover:bg-accent-blue/20 transition-colors">
                      <solution.icon className="h-4 w-4 text-accent-blue" />
                    </div>
                    <div>
                      <strong className="block text-foreground text-base font-semibold mb-2 group-hover:text-accent-blue transition-colors">
                        {solution.title}
                      </strong>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {solution.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Line */}
            <p className="text-center text-text-secondary text-lg mt-12 max-w-xl mx-auto">
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

export default ProblemSolution;
