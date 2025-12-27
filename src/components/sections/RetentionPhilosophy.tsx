import WaveDivider from "@/components/WaveDivider";
import { ShieldCheck, Eye, Rocket } from "lucide-react";

const RetentionPhilosophy = () => {
  const pillars = [
    { icon: ShieldCheck, word: "Trust", delay: "0.1s" },
    { icon: Eye, word: "Clarity", delay: "0.4s" },
    { icon: Rocket, word: "Execution", delay: "0.7s" },
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Small intro */}
          <p className="text-sm text-accent-blue uppercase tracking-widest mb-12 font-medium">
            Our Philosophy
          </p>

          {/* Three pillars with icons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.word}
                className="flex flex-col items-center gap-4 opacity-0 animate-fade-in"
                style={{ animationDelay: pillar.delay, animationFillMode: 'forwards' }}
              >
                <div className="p-4 rounded-2xl bg-accent-blue/10 border border-accent-blue/20">
                  <pillar.icon className="w-10 h-10 text-accent-blue" strokeWidth={1.5} />
                </div>
                <span className="mantra-word text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
                  {pillar.word}.
                </span>
              </div>
            ))}
          </div>

          {/* Supporting text - reduced */}
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            When fulfillment supports the relationship first, results compound over time. 
            And when results compound, marketing becomes easier to retain and scale.
          </p>

          {/* Single powerful closing line */}
          <p className="text-base text-text-muted italic">
            Retention comes from delivery. We focus on delivery.
          </p>
        </div>
      </div>
      
      {/* Wave divider at bottom */}
      <WaveDivider position="bottom" fromColor="hsl(var(--surface-dark))" toColor="hsl(var(--background))" />
    </section>
  );
};

export default RetentionPhilosophy;
