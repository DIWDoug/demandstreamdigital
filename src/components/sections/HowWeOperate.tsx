import { Shield, Clock, Eye, DollarSign, Lock, CheckCircle } from "lucide-react";
import SubtleOrbs from "@/components/SubtleOrbs";
import operationsIllustration from "@/assets/illustrations/operations-mindmap.png";

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
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
      <SubtleOrbs variant="scattered" />
      
      {/* Decorative watercolor illustration */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-72 h-48 opacity-[0.07] pointer-events-none hidden lg:block">
        <img src={operationsIllustration} alt="" className="w-full h-full object-contain" aria-hidden="true" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-72 h-48 opacity-[0.07] pointer-events-none hidden lg:block scale-x-[-1]">
        <img src={operationsIllustration} alt="" className="w-full h-full object-contain" aria-hidden="true" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-10 text-foreground">
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
