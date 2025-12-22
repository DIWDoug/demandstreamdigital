import WaveDivider from "@/components/WaveDivider";

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

          {/* The Mantra - Visually dominant */}
          <h2 className="mantra mb-16">
            relationship. results. marketing.
          </h2>

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
