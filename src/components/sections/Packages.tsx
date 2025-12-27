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
    <section className="py-24 lg:py-32 section-light relative">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="mb-6">
              Packages Built Around Real Local Factors
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              We scope work based on the variables that actually affect local performance.
            </p>
          </div>

          {/* Pill-style factors */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {factors.map((factor, index) => (
              <span key={index} className="inline-flex items-center px-4 py-2 text-sm rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                {factor}
              </span>
            ))}
          </div>

          {/* Framing line */}
          <p className="text-center text-base text-gray-500 italic max-w-xl mx-auto">
            This is how agencies sound prepared without overpromising.
          </p>
        </div>
      </div>

      <div className="section-divider absolute bottom-0" />
    </section>
  );
};

export default Packages;
