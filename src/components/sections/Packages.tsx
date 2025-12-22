const Packages = () => {
  const factorClusters = [
    {
      label: "Market Factors",
      factors: ["City size & population density", "Market saturation & growth potential", "Geographic expansion plans"]
    },
    {
      label: "Competitive Factors", 
      factors: ["Local competition & SERP difficulty", "Google Maps competitive pressure", "Industry & service vertical"]
    },
    {
      label: "Economic Factors",
      factors: ["Lead value & conversion economics", "Website age & technical foundation", "Budget allocation priorities"]
    }
  ];

  return (
    <section className="py-24 lg:py-32 section-light relative">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header - Reframed as Risk Control */}
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              Professional Scoping
            </p>
            <h2 className="mb-6">
              What We Scope So You Don't Overpromise
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Variables that actually affect local performance—and why we account for them upfront.
            </p>
          </div>

          {/* Factor Clusters */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {factorClusters.map((cluster, index) => (
              <div key={index} className="text-center md:text-left">
                <h4 className="text-sm uppercase tracking-widest text-[hsl(76,42%,35%)] font-semibold mb-4">
                  {cluster.label}
                </h4>
                <ul className="space-y-2">
                  {cluster.factors.map((factor, fIndex) => (
                    <li key={fIndex} className="text-gray-700 text-sm">
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Reinforcement statement */}
          <div className="text-center border-t border-gray-200 pt-8">
            <p className="text-gray-500 italic max-w-xl mx-auto">
              This is how agencies sound prepared without overpromising.
              We bring predictability to conversations that usually go sideways.
            </p>
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0" />
    </section>
  );
};

export default Packages;
