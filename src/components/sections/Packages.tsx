const Packages = () => {
  const factors = [
    "City size & population density",
    "Local competition & SERP difficulty",
    "Industry & service vertical",
    "Website age & technical foundation",
    "Google Maps competitive pressure",
    "Lead value & conversion economics",
    "Market saturation & growth potential"
  ];

  return (
    <section className="py-24 lg:py-32 gradient-section relative">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Packages Built Around Real Local Factors
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We scope work based on the variables that actually affect local performance.
            </p>
          </div>

          {/* Pill-style factors */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {factors.map((factor, index) => (
              <span key={index} className="pill-badge">
                {factor}
              </span>
            ))}
          </div>

          {/* Framing line */}
          <p className="text-center text-base text-text-muted italic max-w-xl mx-auto">
            This is how agencies sound prepared without overpromising.
          </p>
        </div>
      </div>

      <div className="section-divider absolute bottom-0" />
    </section>
  );
};

export default Packages;
