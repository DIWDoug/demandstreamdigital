import { Shield, Clock, Eye, DollarSign, Lock, CheckCircle } from "lucide-react";

const HowWeOperate = () => {
  const principles = [
    { icon: Eye, label: "Transparency" },
    { icon: Clock, label: "Consistency" },
    { icon: Shield, label: "White-Glove Delivery" },
    { icon: DollarSign, label: "Margin Protection" },
    { icon: Lock, label: "Confidentiality" },
    { icon: CheckCircle, label: "Reliability" }
  ];

  return (
    <section className="py-20 lg:py-24 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-10 text-foreground">
            How We Operate
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-card border border-border"
              >
                <principle.icon className="h-4 w-4 text-text-secondary" />
                <span className="text-sm text-foreground">{principle.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeOperate;
