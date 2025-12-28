const WhiteLabelExplainer = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              The Partnership Model
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Is White Label Inbound Marketing?
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl">
              We execute under your brand. You keep the client relationship and strategic control.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left: You Keep */}
            <div className="p-6 rounded-xl border border-border/50 bg-surface-elevated">
              <p className="text-accent-blue text-xs font-semibold uppercase tracking-wider mb-4">You Keep</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-0.5">✓</span>
                  <span className="text-foreground">Client relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-0.5">✓</span>
                  <span className="text-foreground">Strategic oversight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-0.5">✓</span>
                  <span className="text-foreground">Brand ownership on all deliverables</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-0.5">✓</span>
                  <span className="text-foreground">Pricing and margin control</span>
                </li>
              </ul>
            </div>

            {/* Right: We Handle */}
            <div className="p-6 rounded-xl border border-border/50 bg-surface-elevated">
              <p className="text-cta text-xs font-semibold uppercase tracking-wider mb-4">We Handle</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cta mt-0.5">→</span>
                  <span className="text-foreground">SEO, paid media, email execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cta mt-0.5">→</span>
                  <span className="text-foreground">White-labeled reports and dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cta mt-0.5">→</span>
                  <span className="text-foreground">Ongoing optimization and testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cta mt-0.5">→</span>
                  <span className="text-foreground">Proactive updates and recommendations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contrast Section - Compact */}
          <div className="pt-8 border-t border-border/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              How This Differs From Typical White Label Providers
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Typical Column */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-text-muted px-3 py-1.5 rounded-full border border-border/50 bg-surface-dark">Task-based execution</span>
                <span className="text-xs text-text-muted px-3 py-1.5 rounded-full border border-border/50 bg-surface-dark">Cheapest-wins fulfillment</span>
                <span className="text-xs text-text-muted px-3 py-1.5 rounded-full border border-border/50 bg-surface-dark">Disconnected specialists</span>
                <span className="text-xs text-text-muted px-3 py-1.5 rounded-full border border-border/50 bg-surface-dark">Inconsistent over time</span>
              </div>
              
              {/* Our Approach Column */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-foreground px-3 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10">System-driven execution</span>
                <span className="text-xs text-foreground px-3 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10">Standards before scale</span>
                <span className="text-xs text-foreground px-3 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10">Dedicated team</span>
                <span className="text-xs text-foreground px-3 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10">Month-to-month continuity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelExplainer;
