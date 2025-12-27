import WaveDivider from "@/components/WaveDivider";
import { ShieldCheck, Eye, Rocket } from "lucide-react";

const RetentionPhilosophy = () => {
  return (
    <section className="py-32 lg:py-40 bg-surface-dark relative overflow-hidden">
      {/* Wave divider at top */}
      <WaveDivider position="top" fromColor="hsl(var(--background))" toColor="hsl(var(--surface-dark))" />
      
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent-blue/30 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Small intro */}
          <p className="text-sm text-accent-blue uppercase tracking-widest mb-12 font-medium">
            Our Philosophy
          </p>

          {/* The Mantra with inline icons */}
          <h2 className="mantra mb-16 flex flex-col items-center gap-6">
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              <span className="flex items-center gap-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-accent-blue" strokeWidth={1.5} />
                <span>Trust.</span>
              </span>
              <span className="flex items-center gap-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <Eye className="w-8 h-8 md:w-10 md:h-10 text-accent-blue" strokeWidth={1.5} />
                <span>Clarity.</span>
              </span>
            </div>
            <span className="flex items-center gap-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              <Rocket className="w-8 h-8 md:w-10 md:h-10 text-accent-blue" strokeWidth={1.5} />
              <span>Execution.</span>
            </span>
          </h2>

          {/* Supporting text */}
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
