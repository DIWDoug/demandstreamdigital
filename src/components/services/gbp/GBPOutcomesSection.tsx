import { Zap, Star, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";

const GBPOutcomesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            What Actually Changes When GBP Works
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            What changes when profiles enter the map pack and authority compounds.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Outcome 1 */}
          <div className="text-center p-8 rounded-xl border bg-surface-elevated border-border/50">
            <div className="inline-flex items-center justify-center p-4 rounded-xl mb-5 bg-cta/10 border border-cta/20">
              <Zap className="w-7 h-7 text-cta" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground text-balance">
              Direct Response From the Map Pack
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              Calls, directions, and website clicks begin flowing as profiles enter the map pack, supported by{" "}
              <Link to="/white-label-reporting" className="text-cta hover:underline">
                call and conversion tracking
              </Link>{" "}
              that proves ROI.
            </p>
          </div>

          {/* Outcome 2 */}
          <div className="text-center p-8 rounded-xl border bg-surface-elevated border-border/50">
            <div className="inline-flex items-center justify-center p-4 rounded-xl mb-5 bg-cta/10 border border-cta/20">
              <Star className="w-7 h-7 text-cta" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground text-balance">
              GBP and Website Signals in Alignment
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              GBP services and website content are aligned through{" "}
              <Link to="/white-label-local-seo" className="text-cta hover:underline">
                Local SEO
              </Link>
              ,{" "}
              <Link to="/white-label-onpage-optimization" className="text-cta hover:underline">
                on-page optimization
              </Link>
              , and{" "}
              <Link to="/white-label-local-keyword-strategy" className="text-cta hover:underline">
                keyword strategy
              </Link>{" "}
              Google trusts.
            </p>
          </div>

          {/* Outcome 3 */}
          <div className="text-center p-8 rounded-xl border bg-surface-elevated border-border/50">
            <div className="inline-flex items-center justify-center p-4 rounded-xl mb-5 bg-cta/10 border border-cta/20">
              <TrendingUp className="w-7 h-7 text-cta" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground text-balance">
              Rich Snippets and 120% Profile Optimization
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              Profiles optimized beyond baseline populate rich snippets automatically. Combined with{" "}
              <Link to="/white-label-technical-seo" className="text-cta hover:underline">
                schema and technical SEO
              </Link>{" "}
              for maximum SERP visibility.
            </p>
          </div>

          {/* Outcome 4 */}
          <div className="text-center p-8 rounded-xl border bg-surface-elevated border-border/50">
            <div className="inline-flex items-center justify-center p-4 rounded-xl mb-5 bg-cta/10 border border-cta/20">
              <Target className="w-7 h-7 text-cta" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground text-balance">
              Hub-Spoke Content Strategy Execution
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              <Link to="/white-label-content-development" className="text-cta hover:underline">
                Service pages
              </Link>
              , FAQs, and{" "}
              <Link to="/white-label-local-seo" className="text-cta hover:underline">
                location content
              </Link>{" "}
              are internally linked to create the topical authority required for map pack visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GBPOutcomesSection;
