import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Shield, MessageSquare, Settings } from "lucide-react";

const ProblemSolution = () => {
  const sectionRef = useScrollReveal();

  const pillars = [
    {
      icon: Shield,
      title: "Trust",
      subtitle: "Earned through consistency",
      body: "You need a marketing partner who delivers the same quality every month. We show up with clear reports, honest updates, and campaigns that actually move the needle for your plumbing or HVAC business."
    },
    {
      icon: MessageSquare,
      title: "Clarity",
      subtitle: "Results you can see",
      body: "No marketing jargon. No vague promises. You'll always know exactly what we're doing, why we're doing it, and how it's driving more calls and jobs to your business."
    },
    {
      icon: Settings,
      title: "Execution",
      subtitle: "Built for your market",
      body: "Every plumbing and HVAC market is different. We scope campaigns around your actual service area, competition, and seasonal demand — so you see real growth, not generic activity."
    }
  ];

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal-section py-20 lg:py-28 bg-[#f9f9f9] relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Trust. Clarity. Execution.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These three things determine whether your marketing investment grows your business or quietly drains it. We built our entire approach around getting them right for plumbing and HVAC companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 lg:p-8 border border-gray-200 hover:border-cta/30 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center mb-5 group-hover:bg-cta/15 transition-colors">
                  <pillar.icon className="h-5 w-5 text-cta" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {pillar.title}
                </h3>
                <p className="text-cta text-sm font-medium mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Generic marketing treats every business the same. We scope to your service area, adapt to your seasonal demand, and build around what actually drives calls — whether that's search, paid ads, email, or reputation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
