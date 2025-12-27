import { ShieldCheck, Eye, Rocket, Settings, Zap, MessageCircle, Brain } from "lucide-react";

const WhyPartnerWithUs = () => {
  const corePillars = [
    {
      icon: ShieldCheck,
      title: "Trust",
      description: "We treat your business like it's our own. Your clients, your reputation, your margins—we protect them all."
    },
    {
      icon: Eye,
      title: "Clarity",
      description: "Complete transparency on services you're selling. No black boxes—just clear deliverables you can confidently communicate."
    },
    {
      icon: Rocket,
      title: "Execution",
      description: "Held to the highest standard. Structured workflows and attention to detail that reflects the quality your agency is known for."
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Workflows",
      description: "We leverage ChatGPT, Claude, and cutting-edge AI tools to accelerate research, content, and optimization—delivering faster, smarter results."
    },
    {
      icon: Settings,
      title: "Full Control",
      description: "You set the tone of your brand. Strategy, pricing, and client communication remain entirely yours."
    },
    {
      icon: Zap,
      title: "Scale Without Overhead",
      description: "Take on more clients while maintaining your service level. No hiring, training, or managing additional staff."
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Access our team directly. No call centers—just clear, responsive communication when you need it."
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
            We're an agency built by marketers—not a staffing company. Our team is intensively trained and held to the same standards you'd expect from your own.
          </p>
        </div>

        {/* Core Pillars - Trust, Clarity, Execution */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {corePillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="text-center p-8 rounded-xl bg-gradient-to-br from-white to-[#F0F0ED] border border-gray-300/50"
              style={{ boxShadow: 'inset 0 3px 6px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06), 0 8px 20px rgba(0,0,0,0.1)' }}
            >
              <div className="inline-flex items-center justify-center p-4 rounded-xl bg-[hsl(76,42%,41%)]/10 border border-[hsl(76,42%,41%)]/20 mb-5">
                <pillar.icon className="w-7 h-7 text-[hsl(76,42%,35%)]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits - Now with consistent embossed style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-[#F0F0ED] border border-gray-300/50"
              style={{ boxShadow: 'inset 0 3px 6px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06), 0 8px 20px rgba(0,0,0,0.1)' }}
            >
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-[hsl(76,42%,41%)]/10 border border-[hsl(76,42%,41%)]/20 mb-4">
                <benefit.icon className="h-5 w-5 text-[hsl(76,42%,35%)]" strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                {benefit.title}
              </h4>
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