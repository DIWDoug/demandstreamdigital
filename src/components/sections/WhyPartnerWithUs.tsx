import { ClipboardCheck, MessageSquareText, BellOff, GraduationCap, Compass, Filter, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const WhyPartnerWithUs = () => {
  const sectionRef = useScrollReveal();
  const allBenefits = [
    {
      icon: ClipboardCheck,
      title: "Clear Scope. No Guesswork.",
      description: "Agencies know what's included, how work moves forward, and how changes are handled. Scope is defined early and revisited intentionally, not discovered after issues appear."
    },
    {
      icon: MessageSquareText,
      title: "Work You Can Explain to Clients",
      description: "Fulfillment is delivered in a way agencies can confidently walk clients through, without hedging, scrambling, or overpromising. The work makes sense, and so does the rationale behind it."
    },
    {
      icon: BellOff,
      title: "Fewer Fire Drills. Cleaner Communication.",
      description: "Structured updates and direct communication reduce back-and-forth and prevent small issues from turning into reactive emergencies. Problems surface early, while they're still easy to solve."
    },
    {
      icon: GraduationCap,
      title: "Marketers, Not Rented Headcount.",
      description: "We're not a staffing company assigning whoever is available. Fulfillment is handled by experienced marketers who understand SEO, local markets, and execution standards, not generalists filling seats."
    },
    {
      icon: Compass,
      title: "Execution That Doesn't Drift.",
      description: "Work is reviewed, guided, and adjusted with intent. Execution doesn't quietly slide into box-checking or autopilot just because an account is live."
    },
    {
      icon: Filter,
      title: "Not a Fit for Everyone.",
      description: "This partnership works best for agencies that value clarity, patience, and disciplined execution. If you're chasing shortcuts, aggressive timelines, or volume at all costs, this won't be a fit."
    }
  ];

  return (
    <section ref={sectionRef} className="pt-12 pb-8 lg:pt-16 lg:pb-10 section-light relative reveal-section">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Partnership Looks Like <span className="text-[hsl(76,42%,35%)]">in Practice</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This isn't about features or promises.<br />
            It's about what actually changes when fulfillment is handled with discipline instead of guesswork.
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
