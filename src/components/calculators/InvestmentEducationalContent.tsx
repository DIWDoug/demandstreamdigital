import { DollarSign, Scale, Clock, Target, CheckCircle, AlertTriangle, TrendingUp, Users, Lightbulb, BarChart3 } from "lucide-react";

const InvestmentEducationalContent = () => {
  return (
    <div className="space-y-16">
      {/* Understanding Agency Pricing */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <DollarSign className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Understanding White-Label Pricing</h2>
        </div>
        <p className="text-text-secondary text-lg mb-8">
          White-label fulfillment pricing is based on the scope of work required, not arbitrary package tiers. The calculator above factors in your client's specific market, industry, and service needs to estimate a realistic investment range.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Small Market / Basic Scope</p>
            <p className="text-2xl font-bold text-foreground">$500 - $1,500/mo</p>
            <p className="text-sm text-text-muted mt-2">1-2 services, single location</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Mid-Market / Full Stack</p>
            <p className="text-2xl font-bold text-foreground">$1,500 - $4,000/mo</p>
            <p className="text-sm text-text-muted mt-2">Multiple services, moderate competition</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Enterprise / Complex</p>
            <p className="text-2xl font-bold text-foreground">$4,000 - $10,000+/mo</p>
            <p className="text-sm text-text-muted mt-2">Multi-location, high competition</p>
          </div>
        </div>
      </section>

      {/* Pricing Models Explained */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <Scale className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Pricing Models Explained</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              title: "Hourly Rate", 
              pros: ["Transparent time tracking", "Flexible scope", "Easy to scale up/down"],
              cons: ["Unpredictable monthly costs", "Incentivizes slow work", "Budget anxiety"],
              best: "Ad-hoc projects, consulting, overflow work"
            },
            { 
              title: "Monthly Retainer", 
              pros: ["Predictable budgeting", "Ongoing relationship", "Strategic focus"],
              cons: ["Less flexibility", "Scope creep risk", "Minimum commitments"],
              best: "Ongoing campaigns, full-service management"
            },
            { 
              title: "Project-Based", 
              pros: ["Clear deliverables", "Fixed budget", "Defined timeline"],
              cons: ["Scope changes costly", "Rush fees common", "Less ongoing support"],
              best: "Website launches, audits, one-time builds"
            },
            { 
              title: "Performance-Based", 
              pros: ["Aligned incentives", "Risk sharing", "Results focus"],
              cons: ["Complex tracking", "Attribution disputes", "Variable costs"],
              best: "Lead generation, affiliate, established accounts"
            }
          ].map((model, i) => (
            <div key={i} className="bg-surface-elevated rounded-xl p-6 border border-border/30">
              <h3 className="text-foreground font-semibold text-lg mb-4">{model.title}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cta mb-2">Pros</p>
                  <ul className="space-y-1">
                    {model.pros.map((pro, j) => (
                      <li key={j} className="text-sm text-text-muted flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-cta flex-shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-destructive mb-2">Cons</p>
                  <ul className="space-y-1">
                    {model.cons.map((con, j) => (
                      <li key={j} className="text-sm text-text-muted flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-text-muted pt-2 border-t border-border/30">
                  <span className="text-foreground font-medium">Best for:</span> {model.best}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <BarChart3 className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">What Affects Your Investment</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Market Size & Competition", desc: "A local plumber in a small town requires far less effort than a personal injury lawyer in Los Angeles." },
            { title: "Number of Locations", desc: "Multi-location businesses need local optimization for each location, multiplying the work required." },
            { title: "Services Required", desc: "A comprehensive stack (SEO + PPC + Email + Reputation) costs more than a single channel." },
            { title: "Current Website State", desc: "Sites needing technical fixes, content creation, or redesign require more upfront investment." },
            { title: "Industry Regulations", desc: "Legal, medical, and financial industries have compliance requirements that add complexity." },
            { title: "Reporting Needs", desc: "Custom dashboards, weekly calls, and detailed reporting add to fulfillment costs." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center text-cta font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Setting Your Margins */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <TrendingUp className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Setting Your Agency Margins</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-text-secondary mb-6">
              Your markup on white-label services is your margin. Most agencies mark up fulfillment costs by 50-150%, depending on the value-add they provide (strategy, client relationships, reporting).
            </p>
            <p className="text-text-secondary">
              The calculator above lets you adjust your MSRP rate to see how different markups affect your profitability while ensuring you remain competitive.
            </p>
          </div>
          <div className="bg-surface-elevated rounded-xl p-6 border border-border/30">
            <h3 className="text-foreground font-semibold mb-4">Healthy Margin Targets</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border/30">
                <span className="text-text-muted">Minimum viable margin</span>
                <span className="text-foreground font-semibold">40-50%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border/30">
                <span className="text-text-muted">Healthy agency margin</span>
                <span className="text-cta font-semibold">75-100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Premium positioning</span>
                <span className="text-foreground font-semibold">100-150%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Creep Warning */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-destructive/10">
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Avoiding Scope Creep</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-text-secondary mb-6">
              Scope creep is the silent margin killer. It happens when work expands beyond the original agreement without corresponding price adjustments. Clear scoping upfront prevents this.
            </p>
            <h3 className="text-foreground font-semibold mb-3">Common Scope Creep Triggers:</h3>
            <ul className="space-y-2">
              {[
                "Vague deliverables in proposals",
                "Unlimited revision policies",
                "Adding locations without repricing",
                "Emergency requests becoming routine",
                "Strategy changes mid-campaign"
              ].map((item, i) => (
                <li key={i} className="text-sm text-text-muted flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-3">How We Prevent It:</h3>
            <ul className="space-y-2">
              {[
                "Detailed scope documentation for every engagement",
                "Clear deliverable counts per month",
                "Change order process for additions",
                "Regular scope reviews with partners",
                "Transparent time tracking on projects"
              ].map((item, i) => (
                <li key={i} className="text-sm text-text-muted flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-cta flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <Lightbulb className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Getting Started with White-Label</h2>
        </div>
        <div className="bg-gradient-to-br from-cta/5 to-accent-blue/5 rounded-2xl p-8 border border-cta/20">
          <p className="text-text-secondary text-lg mb-6">
            White-label fulfillment lets you scale without hiring. You focus on sales and client relationships. We handle the delivery.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { step: "1", title: "Scope the Work", desc: "Use the calculator to estimate investment based on client needs" },
              { step: "2", title: "Set Your Margin", desc: "Add your markup to create a profitable client proposal" },
              { step: "3", title: "We Deliver", desc: "Seamless white-label execution under your brand" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center text-cta font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-foreground font-medium text-center">
            The estimate above is just a starting point. Contact us to discuss your specific client situation and get a precise quote.
          </p>
        </div>
      </section>
    </div>
  );
};

export default InvestmentEducationalContent;
