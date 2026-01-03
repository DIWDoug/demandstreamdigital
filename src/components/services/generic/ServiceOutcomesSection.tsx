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
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            {config.headline}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {config.subheadline}
          </p>
        </div>

        {/* Outcomes Grid with numbering for visual flow */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {config.items.map((outcome, index) => {
            // Different accent colors for visual distinction
            const accentColors = [
              'bg-cta/10 border-cta/20 text-cta',
              'bg-accent-blue/10 border-accent-blue/20 text-accent-blue',
              'bg-amber-500/10 border-amber-500/20 text-amber-500',
              'bg-purple-500/10 border-purple-500/20 text-purple-500'
            ];
            const colorClass = accentColors[index % accentColors.length];
            
            return (
              <div 
                key={outcome.title}
                className="text-center p-8 rounded-xl border bg-surface-elevated border-border/50"
              >
                <div className="flex items-center justify-center mb-5">
                  {outcome.icon ? (
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-text-muted/60 uppercase tracking-wider">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className={`inline-flex items-center justify-center p-4 rounded-xl border ${colorClass}`}>
                        <outcome.icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                    </div>
                  ) : (
                    <span className={`text-4xl font-bold ${accentColors[index % accentColors.length].split(' ')[2]}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground text-balance">
                  {outcome.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceOutcomesSection;
