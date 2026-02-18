import { ClipboardCheck, MessageSquareText, BellOff, GraduationCap, Filter, ArrowRight, Target } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const WhyPartnerWithUs = () => {
  const sectionRef = useScrollReveal();
  const allBenefits = [
    {
      icon: ClipboardCheck,
      title: "Clear Plan. No Surprises.",
      description: "You'll always know what we're working on, what's coming next, and how your budget is being spent. No gray areas, no hidden fees.",
      isQualifier: false
    },
    {
      icon: MessageSquareText,
      title: "Marketing You Can Actually Understand",
      description: "We explain everything in plain English. You'll know what's working, what we're testing, and why — without needing a marketing degree.",
      isQualifier: false
    },
    {
      icon: Target,
      title: "Built for Your Service Area",
      description: "No two plumbing or HVAC markets are the same. We build campaigns around your actual competition, seasonal demand, and service radius.",
      isQualifier: false
    },
    {
      icon: BellOff,
      title: "Problems Get Caught Early",
      description: "We monitor campaigns constantly and flag issues before they cost you money. You'll never be surprised by a bad month.",
      isQualifier: false
    },
    {
      icon: GraduationCap,
      title: "Real Marketers, Not Bots",
      description: "Your campaigns are managed by experienced marketers who understand plumbing, HVAC, and the local search landscape.",
      isQualifier: false
    },
    {
      icon: Filter,
      title: "Not for Everyone",
      description: "If you're looking for the cheapest option or overnight results, we're not the right fit. This works best for companies serious about long-term growth.",
      isQualifier: true
    }
  ];

  return (
    <section ref={sectionRef} className="pt-12 pb-8 lg:pt-16 lg:pb-10 section-light relative reveal-section">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Plumbing & HVAC Owners Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            More calls. Fewer headaches. Marketing you can stand behind.
          </p>
        </div>

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

        <div className="text-center mt-12">
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(76,42%,41%)] text-white font-semibold rounded-lg hover:bg-[hsl(76,42%,35%)] transition-colors group"
          >
            Meet the Team Behind Your Growth
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;
