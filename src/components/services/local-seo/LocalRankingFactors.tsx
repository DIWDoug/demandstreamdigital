import rankingFactorsImage from "@/assets/ranking-factor-groups.png";

const LocalRankingFactors = () => {
  return (
    <section className="py-14 lg:py-20 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header - more compact */}
          <div className="text-center mb-8">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              2026 Research
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              Local Search Ranking Factor Groups
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Based on Whitespark's 2026 Local Search Ranking Factors research.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={rankingFactorsImage} 
              alt="2026 Local Search Ranking Factor Groups - Local Pack/Maps, Local Organic, and AI Search visibility factors from Whitespark research" 
              className="w-full h-auto"
            />
          </div>

          {/* Caption - why this matters */}
          <p className="text-center mt-5 text-slate-500 text-sm italic">
            This research informs how we prioritize local SEO investment in every plumbing and HVAC market we work in. GBP signals and review signals together account for over 50% of Map Pack ranking weight — which is why both are core to our system, not optional add-ons.
          </p>

          {/* Source Link */}
          <p className="text-center mt-2 text-slate-400 text-xs">
            Source:{" "}
            <a 
              href="https://whitespark.ca/local-search-ranking-factors/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cta hover:text-cta/80 underline transition-colors"
            >
              Whitespark 2026 Local Search Ranking Factors
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalRankingFactors;