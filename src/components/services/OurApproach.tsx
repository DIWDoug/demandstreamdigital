import SubtleOrbs from "@/components/SubtleOrbs";

interface OurApproachProps {
  headline: string;
  description: string;
  steps: { number: string; title: string; description: string }[];
}

const OurApproach = ({ headline, description, steps }: OurApproachProps) => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <SubtleOrbs variant="scattered" />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{headline}</h2>
          <p className="text-lg text-text-secondary leading-relaxed">{description}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-cta/10 border border-cta/20 flex items-center justify-center">
                <span className="text-cta font-bold text-lg">{step.number}</span>
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
