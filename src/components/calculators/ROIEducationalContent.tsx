import { TrendingUp, Target, BarChart3, Calculator, Lightbulb, CheckCircle, DollarSign, Users, Clock } from "lucide-react";

const ROIEducationalContent = () => {
  return (
    <div className="space-y-16">
      {/* Understanding Marketing ROI */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <TrendingUp className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Understanding Marketing ROI</h2>
        </div>
        <p className="text-text-secondary text-lg mb-8">
          Return on Investment (ROI) measures the profitability of your marketing efforts. It answers the fundamental question: for every dollar spent on marketing, how much revenue does it generate?
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Average B2B Marketing ROI</p>
            <p className="text-2xl font-bold text-foreground">5:1 Ratio</p>
            <p className="text-sm text-text-muted mt-2">$5 revenue for every $1 spent</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Excellent ROI Benchmark</p>
            <p className="text-2xl font-bold text-foreground">10:1 Ratio</p>
            <p className="text-sm text-text-muted mt-2">Indicates highly efficient campaigns</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Break-Even Point</p>
            <p className="text-2xl font-bold text-foreground">2:1 Ratio</p>
            <p className="text-sm text-text-muted mt-2">Minimum viable return</p>
          </div>
        </div>
      </section>

      {/* Why ROI Matters */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <Target className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Why ROI Matters for Agency Partners</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-text-secondary mb-6">
              As an agency partner, your ability to demonstrate ROI is directly tied to client retention and growth. Clients who understand the value of their investment stay longer and spend more.
            </p>
            <p className="text-text-secondary">
              The calculator above helps you translate marketing activities into business outcomes your clients understand: leads, customers, and revenue.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "68%", label: "of clients leave due to perceived lack of value" },
              { stat: "3x", label: "longer retention when ROI is clearly demonstrated" },
              { stat: "42%", label: "more likely to expand services with ROI proof" },
              { stat: "5x", label: "easier to justify budget increases" }
            ].map((item, i) => (
              <div key={i} className="bg-surface-elevated rounded-xl p-5 border border-border/30">
                <p className="text-2xl font-bold text-cta mb-1">{item.stat}</p>
                <p className="text-sm text-text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The ROI Formula */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <Calculator className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">The ROI Formula Explained</h2>
        </div>
        <div className="bg-surface-dark rounded-xl p-6 border border-border/30 mb-8">
          <p className="text-lg font-mono text-foreground text-center">
            ROI = ((Revenue - Cost) / Cost) × 100
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-foreground font-semibold mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm font-bold">1</span>
              Calculate Total Revenue
            </h3>
            <p className="text-sm text-text-muted">
              New customers from marketing × average customer value = total revenue generated
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm font-bold">2</span>
              Subtract Marketing Cost
            </h3>
            <p className="text-sm text-text-muted">
              Include all marketing expenses: agency fees, ad spend, tools, and content creation
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue text-sm font-bold">3</span>
              Express as Percentage
            </h3>
            <p className="text-sm text-text-muted">
              Divide by cost and multiply by 100 to get ROI percentage
            </p>
          </div>
        </div>
      </section>

      {/* Factors That Impact ROI */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <BarChart3 className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Factors That Impact Marketing ROI</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Conversion Rate", desc: "Small improvements in conversion rate compound into significant revenue gains over time." },
            { title: "Customer Lifetime Value", desc: "Repeat customers and referrals multiply the value of each initial acquisition." },
            { title: "Lead Quality", desc: "Higher-quality leads convert at better rates and become more valuable customers." },
            { title: "Sales Process", desc: "How quickly and effectively leads are followed up directly impacts close rates." },
            { title: "Market Conditions", desc: "Competition, seasonality, and economic factors influence campaign performance." },
            { title: "Attribution Accuracy", desc: "Proper tracking ensures you measure the true impact of marketing efforts." }
          ].map((item, i) => (
            <div key={i} className="bg-surface-elevated rounded-xl p-5 border border-border/30">
              <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Improving Client ROI */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <TrendingUp className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">How to Improve Your Client's ROI</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Optimize Conversion Points", items: ["A/B test landing pages", "Improve form completion rates", "Streamline checkout processes", "Add trust signals and social proof"] },
            { title: "Increase Average Order Value", items: ["Upselling and cross-selling", "Bundle pricing strategies", "Premium tier offerings", "Loyalty programs"] },
            { title: "Reduce Customer Acquisition Cost", items: ["Improve targeting precision", "Refine keyword strategies", "Eliminate wasted ad spend", "Leverage organic channels"] },
            { title: "Extend Customer Lifetime Value", items: ["Email nurture sequences", "Retention campaigns", "Referral programs", "Customer success initiatives"] }
          ].map((category, i) => (
            <div key={i} className="p-5 bg-surface-dark rounded-xl border border-border/30">
              <h3 className="text-foreground font-semibold mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, j) => (
                  <li key={j} className="text-sm text-text-muted flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-cta flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Presentation Tips */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <Lightbulb className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Presenting ROI to Clients</h2>
        </div>
        <div className="bg-gradient-to-br from-cta/5 to-accent-blue/5 rounded-2xl p-8 border border-cta/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-foreground font-semibold mb-4">Do:</h3>
              <ul className="space-y-3">
                {[
                  "Use their actual numbers whenever possible",
                  "Show month-over-month progress",
                  "Connect marketing metrics to business outcomes",
                  "Acknowledge external factors that impacted results",
                  "Highlight compound growth over time"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-4">Avoid:</h3>
              <ul className="space-y-3">
                {[
                  "Vanity metrics without business context",
                  "Overpromising future results",
                  "Ignoring underperforming campaigns",
                  "Comparing to unrealistic benchmarks",
                  "Technical jargon clients won't understand"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-muted">
                    <span className="text-destructive mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ROIEducationalContent;
