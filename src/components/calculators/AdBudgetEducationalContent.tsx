import { DollarSign, Target, BarChart3, TrendingUp, AlertTriangle, CheckCircle, Lightbulb, Zap, Users, PieChart } from "lucide-react";

const AdBudgetEducationalContent = () => {
  return (
    <div className="space-y-16">
      {/* Understanding Ad Budgets */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <DollarSign className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Understanding Ad Budget Allocation</h2>
        </div>
        <p className="text-text-secondary text-lg mb-8">
          Effective ad budget allocation is both science and art. The calculator above helps you project outcomes based on industry benchmarks, but success depends on continuous optimization and strategic refinement.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Recommended Ad Spend</p>
            <p className="text-2xl font-bold text-foreground">15-20%</p>
            <p className="text-sm text-text-muted mt-2">Of target revenue for growth</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Average CPM (Cost Per 1000)</p>
            <p className="text-2xl font-bold text-foreground">$11.20</p>
            <p className="text-sm text-text-muted mt-2">Across digital platforms</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Average CTR</p>
            <p className="text-2xl font-bold text-foreground">1.91%</p>
            <p className="text-sm text-text-muted mt-2">Industry median click-through rate</p>
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <PieChart className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Platform Performance Comparison</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { platform: "Google Ads", cpc: "$2.69", ctr: "3.17%", conv: "3.75%", best: "High-intent search traffic" },
            { platform: "Meta Ads", cpc: "$1.72", ctr: "0.90%", conv: "9.21%", best: "Brand awareness, retargeting" },
            { platform: "LinkedIn Ads", cpc: "$5.26", ctr: "0.44%", conv: "6.1%", best: "B2B lead generation" },
            { platform: "Microsoft Ads", cpc: "$1.54", ctr: "2.83%", conv: "2.94%", best: "Lower competition, older demo" }
          ].map((item, i) => (
            <div key={i} className="bg-surface-elevated rounded-xl p-5 border border-border/30">
              <h3 className="text-foreground font-semibold mb-4">{item.platform}</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Avg CPC</span>
                  <span className="text-foreground font-medium">{item.cpc}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Avg CTR</span>
                  <span className="text-foreground font-medium">{item.ctr}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Avg Conv</span>
                  <span className="text-foreground font-medium">{item.conv}</span>
                </div>
              </div>
              <p className="text-xs text-cta">{item.best}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-text-muted mt-4 text-center">
          Benchmarks based on industry averages. Your results will vary based on targeting, creative quality, and landing page optimization.
        </p>
      </section>

      {/* The Ad Funnel Explained */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <Target className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">The Advertising Funnel Explained</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { stage: "Impressions", icon: "👁️", desc: "How many times your ad is displayed to potential customers", metric: "CPM (Cost Per Mille)" },
            { stage: "Clicks", icon: "👆", desc: "Users who click through to your website or landing page", metric: "CTR (Click-Through Rate)" },
            { stage: "Conversions", icon: "🎯", desc: "Visitors who complete a desired action (lead, purchase)", metric: "CVR (Conversion Rate)" },
            { stage: "Revenue", icon: "💰", desc: "Actual sales generated from converted customers", metric: "ROAS (Return on Ad Spend)" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-foreground font-semibold mb-2">{item.stage}</h3>
              <p className="text-sm text-text-muted mb-3">{item.desc}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-medium">
                {item.metric}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Optimization Levers */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <Zap className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Levers to Improve Performance</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Targeting Precision", desc: "Narrow your audience to reach only the most relevant prospects. Broad targeting wastes budget." },
            { title: "Ad Creative Quality", desc: "Compelling visuals and copy dramatically improve CTR. Test multiple variations constantly." },
            { title: "Landing Page Experience", desc: "Your landing page is where conversions happen. Speed, clarity, and relevance are critical." },
            { title: "Bid Strategy", desc: "Choose the right bidding approach: maximize clicks, conversions, or target ROAS based on goals." },
            { title: "Negative Keywords", desc: "Exclude irrelevant searches to prevent wasted spend on low-intent traffic." },
            { title: "Remarketing", desc: "Retarget visitors who did not convert. They already know you and convert at higher rates." }
          ].map((item, i) => (
            <div key={i} className="bg-surface-elevated rounded-xl p-5 border border-border/30">
              <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Budget Mistakes */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-destructive/10">
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Common Budget Mistakes to Avoid</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { mistake: "Starting Too Small", fix: "Budgets under $1,000/month struggle to generate enough data for optimization. Start with enough to learn." },
            { mistake: "No Conversion Tracking", fix: "Without proper tracking, you are flying blind. Set up conversion tracking before spending a dollar." },
            { mistake: "Set and Forget", fix: "Campaigns require weekly optimization. Neglected accounts bleed budget on underperforming ads." },
            { mistake: "Chasing Vanity Metrics", fix: "Impressions and clicks mean nothing without conversions. Focus on cost per acquisition." },
            { mistake: "Ignoring Mobile", fix: "60%+ of traffic is mobile. Ensure your landing pages are mobile-optimized." },
            { mistake: "No Landing Page Testing", fix: "Your ad is only half the equation. A/B test landing pages to maximize conversion rates." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-foreground font-semibold mb-1">{item.mistake}</h3>
                <p className="text-sm text-text-muted">{item.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Budget Scaling */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <TrendingUp className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">When to Scale Your Budget</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-text-secondary mb-6">
              Scaling too early wastes money. Scaling too late leaves revenue on the table. The key is watching the right signals.
            </p>
            <h3 className="text-foreground font-semibold mb-3">Scale When You See:</h3>
            <ul className="space-y-2">
              {[
                "Consistent positive ROAS over 4+ weeks",
                "Conversion costs below target CPA",
                "Impression share limited by budget",
                "Quality scores at 7+ on key terms",
                "Landing page conversion rate stable"
              ].map((item, i) => (
                <li key={i} className="text-sm text-text-muted flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-cta flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-elevated rounded-xl p-6 border border-border/30">
            <h3 className="text-foreground font-semibold mb-4">Scaling Best Practices</h3>
            <div className="space-y-4">
              <div className="pb-3 border-b border-border/30">
                <p className="text-foreground font-medium mb-1">Gradual Increases</p>
                <p className="text-sm text-text-muted">Scale by 15-20% per week to maintain performance stability</p>
              </div>
              <div className="pb-3 border-b border-border/30">
                <p className="text-foreground font-medium mb-1">Expand Targeting</p>
                <p className="text-sm text-text-muted">Add new audiences, keywords, or placements as you scale</p>
              </div>
              <div>
                <p className="text-foreground font-medium mb-1">Monitor Closely</p>
                <p className="text-sm text-text-muted">Watch for efficiency drops as competition increases</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Expert Help */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <Lightbulb className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">When to Get Expert Help</h2>
        </div>
        <div className="bg-gradient-to-br from-cta/5 to-accent-blue/5 rounded-2xl p-8 border border-cta/20">
          <p className="text-text-secondary text-lg mb-6">
            Paid advertising is complex. Platform updates, algorithm changes, and competitive dynamics require constant attention. Many businesses waste 20-40% of their ad budget due to poor management.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { stat: "20-40%", label: "Average wasted ad spend" },
              { stat: "10+ hrs", label: "Weekly optimization time" },
              { stat: "3-6 mo", label: "Time to master platforms" },
              { stat: "2-3x", label: "ROI improvement with pros" }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-surface-dark rounded-xl border border-border/30">
                <p className="text-2xl font-bold text-cta mb-1">{item.stat}</p>
                <p className="text-xs text-text-muted">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-foreground font-medium text-center">
            Partner with us for white-label paid media management. We handle the campaigns. You grow your agency.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AdBudgetEducationalContent;
