import { Compass, Clock, CheckSquare } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Scope Before Work",
    description: "What gets executed, how it's prioritized, and how success is measured—all defined before work starts."
  },
  {
    icon: Clock,
    title: "Cadence Over Chaos",
    description: "Monthly planning cycle. No mid-stream pivots. Adjustments reviewed deliberately, not reactively."
  },
  {
    icon: CheckSquare,
    title: "Standards Over Checklists",
    description: "Execution guided by judgment and standards. The goal is durable performance, not activity for activity's sake."
  }
];

const HowWeWork = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How Fulfillment Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-surface-elevated border border-border/50 mb-5">
                  <pillar.icon className="h-6 w-6 text-cta" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom callout */}
          <div className="mt-16 bg-background border border-border/30 rounded-xl p-6 text-center">
            <p className="text-text-secondary text-sm">
              <span className="text-foreground font-medium">We are not a staffing company.</span>{" "}
              We own execution, standards, and accountability for the work we deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
