import { MapPin, Layers, ClipboardList } from "lucide-react";

const AntiPackageDiagnosis = () => {
  const diagnosticCards = [
    {
      icon: MapPin,
      title: "Markets Aren't Interchangeable",
      body: "Different cities, industries, and competitive landscapes require different effort, pacing, and tactics. Pre-set packages assume uniformity where it doesn't exist."
    },
    {
      icon: Layers,
      title: "Packages Hide Scope Problems",
      body: "Fixed tiers rarely reflect real-world requirements. As campaigns evolve, scope expands quietly, teams over-deliver, and margins erode."
    },
    {
      icon: ClipboardList,
      title: "Execution Becomes Box-Checking",
      body: "When fulfillment is defined by packages, execution follows checklists instead of judgment. The work gets done, but it stops adapting."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background relative">
      {/* Gradient transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-sans font-semibold text-foreground text-center mb-6">
            Why Most White-Label Digital Marketing Packages Break Down
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
                className="bg-surface-dark rounded-xl p-6 lg:p-8 border border-border/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <card.icon className="h-5 w-5 text-accent-blue" />
                  </div>
                  <strong className="text-lg font-semibold text-foreground">
                    {card.title}
                  </strong>
                </div>
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
      
      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/0 via-background/50 to-background pointer-events-none" />
      
      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default AntiPackageDiagnosis;