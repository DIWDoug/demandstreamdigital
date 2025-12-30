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
            The outcomes your clients experience when GBP SEO is done right.
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
              Calls, directions, and website clicks flow directly from optimized profiles—supported by accurate{" "}
              <Link to="/white-label-inbound-marketing-services/reporting" className="text-cta hover:underline">
                call tracking
              </Link>{" "}
              and{" "}
              <Link to="/white-label-inbound-marketing-services/reporting" className="text-cta hover:underline">
                conversion tracking
              </Link>{" "}
              that proves value to your clients.
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
              GBP services and products match the website. Reinforced by{" "}
              <Link to="/white-label-inbound-marketing-services/local-seo" className="text-cta hover:underline">
                Local SEO
              </Link>
              ,{" "}
              <Link to="/white-label-inbound-marketing-services/local-seo/on-page-seo" className="text-cta hover:underline">
                on-page optimization
              </Link>
              , and{" "}
              <Link to="/white-label-inbound-marketing-services/local-seo/local-keyword-strategy" className="text-cta hover:underline">
                local keyword strategy
              </Link>{" "}
              that Google can trust.
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
              <Link to="/white-label-inbound-marketing-services/local-seo/technical-seo" className="text-cta hover:underline">
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
              <Link to="/white-label-inbound-marketing-services/local-seo/content-development" className="text-cta hover:underline">
                Service and product pages
              </Link>
              , supporting FAQs, and{" "}
              <Link to="/white-label-inbound-marketing-services/local-seo" className="text-cta hover:underline">
                location-based content
              </Link>{" "}
              are developed and internally linked to reinforce GBP topical authority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GBPOutcomesSection;
