import WaveDivider from "@/components/WaveDivider";
import { ShieldCheck, Eye, Rocket } from "lucide-react";

const RetentionPhilosophy = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Trust",
      description: "We treat your business like it's our own. Your clients, your reputation, your margins—we protect them all. You can hand off execution knowing it's in capable hands."
    },
    {
      icon: Eye,
      title: "Clarity",
      description: "We arm you with complete clarity on the services you're selling. No black boxes, no confusion—just transparent processes and clear deliverables you can confidently communicate."
    },
    {
      icon: Rocket,
      title: "Execution",
      description: "Our execution is held to the highest standard. Structured workflows, consistent delivery cycles, and attention to detail that reflects the quality your agency is known for."
    }
  ];

  return (
    <section className="py-32 lg:py-40 bg-surface-dark relative overflow-hidden">
      {/* Wave divider at top */}
      <WaveDivider position="top" fromColor="hsl(var(--background))" toColor="hsl(var(--surface-dark))" />
      
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent-blue/30 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm text-accent-blue uppercase tracking-widest mb-6 font-medium">
            Why Agencies Partner With Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Trust. Clarity. Execution.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A white-label partnership only works when you can trust the work, understand what you're selling, and count on flawless delivery. We built our process around all three.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="text-center p-8 rounded-2xl bg-surface-elevated/50 border border-border/50 backdrop-blur-sm opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <div className="inline-flex items-center justify-center p-4 rounded-xl bg-accent-blue/10 border border-accent-blue/20 mb-6">
                <pillar.icon className="w-8 h-8 text-accent-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Wave divider at bottom */}
      <WaveDivider position="bottom" fromColor="hsl(var(--surface-dark))" toColor="hsl(var(--background))" />
    </section>
  );
};

export default RetentionPhilosophy;
