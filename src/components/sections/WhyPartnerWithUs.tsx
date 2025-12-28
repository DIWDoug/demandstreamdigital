import { ShieldCheck, Eye, Rocket, Calculator, Zap, MessageCircle, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const WhyPartnerWithUs = () => {
  const sectionRef = useScrollReveal();
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
    <section ref={sectionRef} className="pt-12 pb-8 lg:pt-16 lg:pb-10 section-light relative reveal-section">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Agencies Choose Us as Their <span className="text-[hsl(76,42%,35%)]">Fulfillment Partner</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a white-label digital marketing partner built by marketers, not a staffing company. Our team delivers agency-grade execution under your brand.
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

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(76,42%,41%)] text-white font-semibold rounded-lg hover:bg-[hsl(76,42%,35%)] transition-colors group"
          >
            Meet the Team Behind the Magic
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;
