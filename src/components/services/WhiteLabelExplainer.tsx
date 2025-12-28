const WhiteLabelExplainer = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              The Partnership Model
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Is White Label Inbound Marketing?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A fulfillment partnership where we execute under your brand—invisibly.
            </p>
          </div>

          {/* Two Column Card */}
          <div className="premium-card py-10">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12">
              {/* You Keep */}
              <div>
                <p className="text-sm text-text-muted uppercase tracking-widest mb-4">
                  You Keep
                </p>
                <p className="text-lg text-foreground mb-6">
                  Client relationships, strategic oversight, and full control over pricing and positioning.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-2.5 flex-shrink-0" />
                    <span>Own all client communication and reporting</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-2.5 flex-shrink-0" />
                    <span>Set your own margins and service bundles</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-2.5 flex-shrink-0" />
                    <span>Maintain brand ownership on every deliverable</span>
                  </li>
                </ul>
              </div>

              {/* Divider for mobile */}
              <div className="md:hidden section-divider" />

              {/* We Handle */}
              <div className="md:border-l md:border-border md:pl-12">
                <p className="text-sm text-accent-blue uppercase tracking-widest mb-4">
                  We Handle
                </p>
                <p className="text-lg text-foreground mb-6">
                  Day-to-day execution across SEO, paid media, email, and authority building as a coordinated system.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 flex-shrink-0" />
                    <span>Campaign execution and ongoing optimization</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 flex-shrink-0" />
                    <span>White-labeled reports ready for client presentation</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 flex-shrink-0" />
                    <span>Proactive updates and strategic recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contrast Section - Compact */}
          <div className="mt-10 pt-8 border-t border-border/20">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              How This Differs From Typical White Label Providers
            </h3>
            <p className="text-text-secondary text-sm mb-5">
              Most focus on tasks and volume. We focus on controlled execution and long-term delivery.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-text-muted text-xs uppercase tracking-wider mb-2">Typical</p>
                <ul className="space-y-1.5 text-text-muted">
                  <li>— Task-based execution</li>
                  <li>— Disconnected specialists</li>
                  <li>— Inconsistent over time</li>
                </ul>
              </div>
              <div>
                <p className="text-accent-blue text-xs uppercase tracking-wider mb-2">Our Approach</p>
                <ul className="space-y-1.5 text-foreground">
                  <li>✓ System-driven execution</li>
                  <li>✓ Dedicated delivery team</li>
                  <li>✓ Month-to-month continuity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelExplainer;
