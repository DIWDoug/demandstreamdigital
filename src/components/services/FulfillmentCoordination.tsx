import { Compass, Clock, CheckSquare } from "lucide-react";

const blocks = [
  {
    icon: Compass,
    title: "Scope Before Work",
    description: "All execution is defined before it begins. We don't absorb requests informally or expand scope by default."
  },
  {
    icon: Clock,
    title: "Cadence Over Chaos",
    description: "Work follows a defined monthly rhythm. Changes are reviewed and applied in the next planning window, not reactively."
  },
  {
    icon: CheckSquare,
    title: "Standards Over Checklists",
    description: "Fulfillment quality is maintained through systems and accountability, not task tracking or micromanagement."
  }
];

const FulfillmentCoordination = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            How Fulfillment Is Coordinated
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blocks.map((block, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-surface-elevated border border-border/50 mb-4">
                  <block.icon className="h-5 w-5 text-text-muted" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {block.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FulfillmentCoordination;
