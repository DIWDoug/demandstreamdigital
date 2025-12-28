const FulfillmentApproach = () => {
  const pillars = [
    {
      title: "Scope Comes Before Services",
      body: "Every engagement begins with a clear understanding of the client's market, competition, and goals. Scope is defined intentionally before work begins, so execution matches reality instead of assumptions."
    },
    {
      title: "Clear Standards and Guardrails",
      body: "Custom does not mean open-ended. Deliverables, communication rhythms, and boundaries are clearly defined upfront, protecting expectations, margins, and accountability."
    },
    {
      title: "Systems-Driven, Human-Led Execution",
      body: "We use systems and AI-assisted workflows to accelerate research, planning, and execution. Specialists make the decisions that matter, while systems remove friction and inconsistency."
    },
    {
      title: "Built to Adapt Without Resetting Everything",
      body: "Markets change. Algorithms shift. Competition evolves. Our structure allows execution to adjust intentionally over time without restarting the engagement or blowing up scope."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface-elevated">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Header */}
            <div>
              <h2 className="text-3xl md:text-4xl font-sans font-semibold text-foreground mb-6">
                How We Approach Fulfillment Instead
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-4 max-w-xl">
                Custom fulfillment only works if it's controlled. Our approach is built to adapt to different markets and clients without introducing chaos, scope creep, or operational drag.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                Instead of starting with pre-set services, we start with structure.
              </p>
            </div>

            {/* Right Column - Pillars */}
            <div className="space-y-0">
              {pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className={`py-6 ${index !== pillars.length - 1 ? 'border-b border-border/30' : ''}`}
                >
                  <strong className="block text-foreground text-lg font-semibold mb-2">
                    {pillar.title}
                  </strong>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Line */}
          <p className="text-center text-text-secondary text-lg mt-16">
            This approach gives agencies flexibility without sacrificing control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FulfillmentApproach;