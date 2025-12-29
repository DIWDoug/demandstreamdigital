import { ClipboardCheck, MessageSquareText, BellOff, GraduationCap, Compass, Filter, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const WhyPartnerWithUs = () => {
  const sectionRef = useScrollReveal();
  const allBenefits = [
    {
      icon: ClipboardCheck,
      title: "Clear Scope From Day One",
      description: "You'll know exactly what's included and how the work moves forward. No surprises, no scope creep.",
      isQualifier: false
    },
    {
      icon: MessageSquareText,
      title: "Work You Can Walk Clients Through",
      description: "Every deliverable is structured so you can explain it confidently. Your clients understand the value.",
      isQualifier: false
    },
    {
      icon: BellOff,
      title: "Problems Surface Early",
      description: "Regular updates and direct communication mean small issues get caught before they become big ones.",
      isQualifier: false
    },
    {
      icon: GraduationCap,
      title: "Actual Marketers Doing the Work",
      description: "Experienced specialists who know SEO and local markets. People who've done this for years.",
      isQualifier: false
    },
    {
      icon: Compass,
      title: "Consistent Quality Over Time",
      description: "The work stays sharp month after month. Accounts don't quietly drift into autopilot.",
      isQualifier: false
    },
    {
      icon: Filter,
      title: "We're Selective Too",
      description: "This works best for agencies who value clarity and patience over shortcuts and aggressive timelines.",
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
            What Actually Changes When Fulfillment Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            When fulfillment runs smoothly, everything else gets easier. Here's what that looks like.
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
            Meet the Team Behind the Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;
