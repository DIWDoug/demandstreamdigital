const guardrails = [
  {
    title: "Scope defined before work begins",
    body: "Market, competition, and goals understood first."
  },
  {
    title: "Boundaries set upfront",
    body: "Deliverables, rhythms, and limits documented."
  },
  {
    title: "Systems accelerate, specialists decide",
    body: "AI-assisted workflows. Human judgment."
  },
  {
    title: "Adjustments, not resets",
    body: "Execution adapts without restarting scope."
  }
];

const ServicesFramework = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-elevated relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          {/* Header - Centered, compressed */}
          <div className="text-center mb-12">
            <p className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4">
              Our Framework
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              How We Approach White Label Fulfillment
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-3xl mx-auto">
              Custom fulfillment only works when it is controlled. We start with structure—scoping each engagement based on location count, competition, and goals—not preset packages. When priorities shift, we surface issues early, align on adjustments, and document changes before execution moves.
            </p>
          </div>

          {/* The Callout - Emotional Anchor */}
          <div className="mb-16">
            <div className="border-l-2 border-accent-blue pl-6 py-4 bg-accent-blue/[0.03]">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                Scope does not quietly expand. Deliverables do not drift. Responsibility is never unclear.
              </p>
              <p className="text-text-muted text-sm mt-3">
                You stay informed, in control, and protected from surprises.
              </p>
            </div>
          </div>

          {/* Guardrails - Restrained, rule-like */}
          <div className="border-t border-border/20 pt-12">
            <p className="text-text-muted text-xs font-medium tracking-widest uppercase mb-8 text-center">
              Guardrails
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {guardrails.map((item, index) => (
                <div 
                  key={index}
                  className="text-center"
                >
                  <p className="text-foreground text-sm font-medium mb-1.5">
                    {item.title}
                  </p>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFramework;
