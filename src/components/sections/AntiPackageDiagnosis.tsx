const AntiPackageDiagnosis = () => {
  const diagnosticCards = [
    {
      title: "Markets Aren't Interchangeable",
      body: "Different cities, industries, and competitive landscapes require different effort, pacing, and tactics. Pre-set packages assume uniformity where it doesn't exist."
    },
    {
      title: "Packages Hide Scope Problems",
      body: "Fixed tiers rarely reflect real-world requirements. As campaigns evolve, scope expands quietly, teams over-deliver, and margins erode."
    },
    {
      title: "Execution Becomes Box-Checking",
      body: "When fulfillment is defined by packages, execution follows checklists instead of judgment. The work gets done, but it stops adapting."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-sans font-semibold text-foreground text-center mb-6">
            Why Most White-Label Packages Break Down
          </h2>

          {/* Framing Paragraph */}
          <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-16">
            The problem isn't bad providers. It's structural. Standardized packages force a uniform approach onto work that's inherently variable.
          </p>

          {/* Diagnostic Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {diagnosticCards.map((card, index) => (
              <div 
                key={index}
                className="bg-surface-elevated/50 rounded-xl p-6 lg:p-8 border border-border/30 shadow-sm"
              >
                <strong className="block text-lg font-semibold text-foreground mb-3">
                  {card.title}
                </strong>
                <p className="text-text-secondary text-sm leading-7">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* Transition Line */}
          <p className="text-center text-text-secondary text-lg">
            That's why we don't start with packages. We start with scope, standards, and execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AntiPackageDiagnosis;