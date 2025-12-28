import type { LucideIcon } from "lucide-react";

interface WhyItMattersProps {
  headline: string;
  description: string;
  points: { icon: LucideIcon; title: string; description: string }[];
}

const WhyItMatters = ({ headline, description, points }: WhyItMattersProps) => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{headline}</h2>
          <p className="text-lg text-text-secondary leading-relaxed">{description}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-cta/10 border border-cta/20 mb-6">
                <point.icon className="h-6 w-6 text-cta" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{point.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
