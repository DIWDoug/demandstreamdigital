import { ShieldCheck, Eye, Rocket, Calculator, Zap, MessageCircle } from "lucide-react";

const WhyPartnerWithUs = () => {
  const allBenefits = [
    {
      icon: ShieldCheck,
      title: "Trust",
      description: "We treat your business like it's our own. Your clients, your reputation, your margins: we protect them all."
    },
    {
      icon: Eye,
      title: "Clarity",
      description: "Complete transparency on services you're selling. No black boxes, just clear deliverables you can confidently communicate."
    },
    {
      icon: Rocket,
      title: "Execution",
      description: "Held to the highest standard. Structured workflows and attention to detail that reflects the quality your agency is known for."
    },
    {
      icon: Calculator,
      title: "Custom Pricing, Not Packages",
      description: "We use AI to analyze market factors and build pricing that fits each client. No cookie-cutter packages. Every scope reflects real competitive conditions."
    },
    {
      icon: Zap,
      title: "Scale Without Overhead",
      description: "Take on more clients while maintaining your service level. No hiring, training, or managing additional staff."
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Access our team directly. No call centers, just clear, responsive communication when you need it."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Agencies Choose Us as Their <span className="text-cta">Fulfillment Partner</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We're a white-label digital marketing partner built by marketers, not a staffing company. Our team delivers agency-grade execution under your brand.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {allBenefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="text-center p-8 rounded-xl bg-surface-elevated border border-border hover:border-accent-blue/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center p-4 rounded-xl bg-cta/10 border border-cta/20 mb-5">
                <benefit.icon className="w-7 h-7 text-cta" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;
