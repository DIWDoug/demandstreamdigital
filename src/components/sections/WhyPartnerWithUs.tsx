import { ClipboardCheck, MessageSquareText, BellOff, GraduationCap, Compass, Filter, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const WhyPartnerWithUs = () => {
  const sectionRef = useScrollReveal();
  const allBenefits = [
    {
      icon: ClipboardCheck,
      title: "Clear Scope. No Guesswork.",
      description: "You'll know what's included, how work progresses, and how changes are handled—before issues surface.",
      isQualifier: false
    },
    {
      icon: MessageSquareText,
      title: "Work You Can Defend",
      description: "Every deliverable is structured so you can walk clients through it with confidence—no hedging required.",
      isQualifier: false
    },
    {
      icon: BellOff,
      title: "Fewer Fire Drills",
      description: "Structured updates and direct communication catch small issues before they become client emergencies.",
      isQualifier: false
    },
    {
      icon: GraduationCap,
      title: "Marketers, Not Rented Headcount",
      description: "Experienced specialists who understand SEO and local markets—not generalists filling seats.",
      isQualifier: false
    },
    {
      icon: Compass,
      title: "Execution That Doesn't Drift",
      description: "Work is reviewed and adjusted with intent. No quiet slide into autopilot or box-checking.",
      isQualifier: false
    },
    {
      icon: Filter,
      title: "Not for Everyone",
      description: "This works for agencies that value clarity and disciplined execution—not shortcuts or volume at all costs.",
      isQualifier: true
    }
  ];

  return (
    <section ref={sectionRef} className="pt-12 pb-8 lg:pt-16 lg:pb-10 section-light relative reveal-section">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Fulfillment Shouldn't Be the Reason You Lose Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Missed deadlines. Unexplained ranking drops. Work you can't defend in a client call.<br />
            Here's what changes when fulfillment is handled with discipline.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {allBenefits.map((benefit) => (
            <div 
              key={benefit.title}
              className={`text-center p-8 rounded-xl border ${
                benefit.isQualifier 
                  ? 'bg-gradient-to-br from-gray-100 to-gray-200/80 border-gray-300/70' 
                  : 'bg-gradient-to-br from-white to-[#F0F0ED] border-gray-300/50'
              }`}
              style={{ 
                boxShadow: benefit.isQualifier 
                  ? 'inset 0 2px 4px rgba(255,255,255,0.6), inset 0 -2px 4px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.08)' 
                  : 'inset 0 3px 6px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06), 0 8px 20px rgba(0,0,0,0.1)' 
              }}
            >
              <div className={`inline-flex items-center justify-center p-4 rounded-xl mb-5 ${
                benefit.isQualifier 
                  ? 'bg-gray-400/15 border border-gray-400/25' 
                  : 'bg-[hsl(76,42%,41%)]/10 border border-[hsl(76,42%,41%)]/20'
              }`}>
                <benefit.icon className={`w-7 h-7 ${benefit.isQualifier ? 'text-gray-500' : 'text-[hsl(76,42%,35%)]'}`} strokeWidth={1.5} />
              </div>
              <h3 className={`text-lg md:text-xl font-semibold mb-3 ${benefit.isQualifier ? 'text-gray-700' : 'text-gray-900'}`}>
                {benefit.title}
              </h3>
              <p className={`text-sm leading-relaxed ${benefit.isQualifier ? 'text-gray-500' : 'text-gray-600'}`}>
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
