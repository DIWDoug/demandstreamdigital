import rankingFactorsImage from "@/assets/ranking-factor-groups.png";

const LocalRankingFactors = () => {
  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              2026 Research
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Local Search Ranking Factor Groups
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Based on Whitespark's 2026 Local Search Ranking Factors research. The data behind every strategy we build.
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
        </div>
      </div>
    </section>
  );
};

export default LocalRankingFactors;