import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { Eye, MessageSquare, Settings, Equal } from "lucide-react";
import StreamTexture from "@/components/StreamTexture";


const ProblemSolution = () => {
  const sectionRef = useScrollReveal();

  const pillars = [
    {
      icon: Eye,
      title: "Transparency",
      subtitle: "Complete visibility at every step",
      body: "You see every piece of work being done, where your budget is going, and the strategy behind every decision. Progress, intention, and the thinking behind the method. Not just activity reports."
    },
    {
      icon: MessageSquare,
      title: "Clarity",
      subtitle: "Results you can see",
      body: "You understand what is working and why. No marketing jargon."
    },
    {
      icon: Settings,
      title: "Execution",
      subtitle: "Built for your market",
      body: "SEO, Google Business Profile, paid ads, reputation management, email marketing, and web design. All handled by specialists who know plumbing and HVAC."
    }
  ];

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="reveal-section py-20 lg:py-28 bg-background relative overflow-hidden"
    >
      <StreamTexture variant="dark" opacity={0.09} />
      
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Marketing Built for Plumbing & HVAC Operators
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most marketing agencies treat plumbing and HVAC companies like any other business. We don't. We build strategies around how customers search for plumbers and HVAC services in your local market, and how to turn that visibility into booked jobs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="group bg-white/5 rounded-xl p-6 lg:p-8 border border-white/10 hover:border-accent-blue/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-white/15 transition-colors">
                  <pillar.icon className="h-5 w-5 text-accent-blue" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {pillar.title}
                </h3>
                <p className="text-accent-blue text-sm font-medium mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          {/* = Trust conclusion */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-white/20" />
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
              <Equal className="h-5 w-5 text-accent-blue" />
              <span className="text-2xl font-black text-foreground tracking-widest uppercase">Trust</span>
            </div>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Generic marketing treats every business the same. We build around your service area, your competition, and what actually drives calls, whether that's search, paid ads, email, or reputation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
