import { MapPin, Layers, ClipboardList } from "lucide-react";

const AntiPackageDiagnosis = () => {
  const diagnosticCards = [
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

  return (
    <section className="py-20 lg:py-28 bg-background relative">
      {/* Gradient transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-6 text-balance">
            The Problem With Package-Based Fulfillment
          </h2>

          {/* Framing Paragraph */}
          <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto mb-16">
            It's not that fulfillment partners are bad at their jobs. It's that rigid packages weren't designed for work this variable.
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
            That's why we start with scope and standards, not packages and tiers.
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