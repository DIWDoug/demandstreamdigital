import { ShieldCheck, Eye, Rocket, Brain, Zap, MessageCircle } from "lucide-react";

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
      icon: Brain,
      title: "AI-Powered Workflows",
      description: "We leverage ChatGPT, Claude, and cutting-edge AI tools to accelerate research, content, and optimization for faster results."
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
    <section className="pt-12 pb-24 lg:pt-16 lg:pb-32 section-light relative">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Agencies <span className="text-[hsl(76,42%,35%)]">Partner</span> With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're an agency built by marketers, not a staffing company. Our team is intensively trained and held to the same standards you'd expect from your own.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {allBenefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="text-center p-8 rounded-xl bg-gradient-to-br from-white to-[#F0F0ED] border border-gray-300/50"
              style={{ boxShadow: 'inset 0 3px 6px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06), 0 8px 20px rgba(0,0,0,0.1)' }}
            >
              <div className="inline-flex items-center justify-center p-4 rounded-xl bg-[hsl(76,42%,41%)]/10 border border-[hsl(76,42%,41%)]/20 mb-5">
                <benefit.icon className="w-7 h-7 text-[hsl(76,42%,35%)]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0" />
    </section>
  );
};

export default WhyPartnerWithUs;
