const ProofStats = () => {
  const stats = [
    {
      number: "5+",
      label: "Years Experience",
      description: "Trusted white-label partner"
    },
    {
      number: "90%",
      label: "Client Retention",
      description: "Long-term partnerships"
    },
    {
      number: "100+",
      label: "Agency Partners",
      description: "Across the US & Canada"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-surface-dark relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-radial from-cta/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="stat-number mb-3 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-text-muted">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofStats;
