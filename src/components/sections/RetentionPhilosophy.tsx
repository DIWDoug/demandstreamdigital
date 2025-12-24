const RetentionPhilosophy = () => {
  return (
    <section className="py-40 lg:py-52 bg-surface-dark relative overflow-hidden">
      {/* Minimal background - no noise, just subtle depth */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent-blue/20 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* The Mantra - Standalone anchor, no icons, no cards */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Trust. Clarity. Execution.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default RetentionPhilosophy;