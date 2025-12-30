import type { Outcome } from "@/types/servicePage";

interface OutcomesConfig {
  headline: string;
  subheadline: string;
  items: Outcome[];
}

interface ServiceOutcomesSectionProps {
  config: OutcomesConfig;
}

const ServiceOutcomesSection = ({ config }: ServiceOutcomesSectionProps) => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            {config.headline}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {config.subheadline}
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {config.items.map((outcome) => (
            <div 
              key={outcome.title}
              className="text-center p-8 rounded-xl border bg-surface-elevated border-border/50"
            >
              <div className="inline-flex items-center justify-center p-4 rounded-xl mb-5 bg-cta/10 border border-cta/20">
                <outcome.icon className="w-7 h-7 text-cta" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground text-balance">
                {outcome.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOutcomesSection;
