interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

interface OurApproachProps {
  eyebrow?: string;
  headline: string;
  description: string;
  steps: ApproachStep[];
}

const OurApproach = ({ eyebrow = "Our Process", headline, description, steps }: OurApproachProps) => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cta/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            {headline}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>

        {/* Steps - alternating layout */}
        <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative ${isLeft ? "lg:pr-8" : "lg:pl-8"}`}
              >
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div 
                    className="hidden lg:block absolute top-16 w-px h-[calc(100%+3rem)] bg-gradient-to-b from-border via-border to-transparent"
                    style={{ 
                      left: isLeft ? "auto" : "0",
                      right: isLeft ? "0" : "auto"
                    }}
                  />
                )}

                <div className="flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-surface-elevated to-surface-card border border-border flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent-blue">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;