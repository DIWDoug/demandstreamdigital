import { ClipboardCheck, MessageSquareText, BellOff, Cpu, Filter, ArrowRight, BarChart3, UserCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import StreamTexture from "@/components/StreamTexture";

const WhyPartnerWithUs = () => {
  const sectionRef = useScrollReveal();
  const allBenefits = [
    {
      icon: ClipboardCheck,
      title: "Monthly Strategy Reviews",
      description: "Every month we walk through what's working, what's changing, and what's next. No guessing, no waiting for quarterly reports.",
      isQualifier: false
    },
    {
      icon: UserCheck,
      title: "Dedicated Account Lead",
      description: "One point of contact who knows your business inside and out. Not a rotating door of reps who need to be caught up every call.",
      isQualifier: false
    },
    {
      icon: BarChart3,
      title: "Clarity Dashboards",
      description: "See your rankings, leads, ad spend, and booked calls in one place. No digging through spreadsheets or waiting for a report.",
      isQualifier: false
    },
    {
      icon: BellOff,
      title: "Problems Get Caught Early",
      description: "We monitor campaigns constantly and catch issues before they show up in your numbers. No surprise bad months.",
      isQualifier: false
    },
    {
      icon: Cpu,
      title: "AI-Resourced Strategy",
      description: "We use AI tools to increase output, sharpen targeting, and stretch your budget further — all guided by experienced marketers who know the trades.",
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
    <section ref={sectionRef} className="pt-12 pb-8 lg:pt-16 lg:pb-10 section-light relative reveal-section overflow-hidden">
      <StreamTexture variant="light" opacity={0.1} />
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
         <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-blue mb-3">The Partnership</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Working With Us Looks Like
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every campaign is built around how customers search for plumbers and HVAC companies in your specific market, and what it takes to get them to call.
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
                  : 'bg-accent-blue/10 border border-accent-blue/20'
              }`}>
                <benefit.icon className={`w-7 h-7 ${benefit.isQualifier ? 'text-gray-500' : 'text-accent-blue'}`} strokeWidth={1.5} />
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
            className="btn-cta group"
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
