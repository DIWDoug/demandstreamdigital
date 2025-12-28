import { CheckCircle } from "lucide-react";

interface ServiceBenefitsProps {
  headline: string;
  items: string[];
}

const ServiceBenefits = ({ headline, items }: ServiceBenefitsProps) => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">{headline}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-surface-elevated border border-border">
                <CheckCircle className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
