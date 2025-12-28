

const WhiteLabelExplainer = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              The Partnership Model
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Is White Label Inbound Marketing?
            </h2>
          </div>

          {/* Full Description for SEO Value */}
          <div className="prose prose-lg prose-invert max-w-none space-y-6">
            <p className="text-text-secondary text-lg leading-relaxed">
              White label inbound marketing is a fulfillment partnership where we execute digital marketing 
              under your agency's brand. Strategy documents, reports, client communications—everything 
              stays invisible to your end client. You retain the relationship and strategic oversight. 
              We handle day-to-day execution across SEO, paid media, email, and authority building as a 
              coordinated system, not disconnected services.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              Unlike traditional outsourcing models that rely on fragmented freelancers or offshore teams, 
              white label inbound marketing provides agencies with a dedicated fulfillment partner who 
              understands the complete customer journey. From technical SEO audits and Google Business 
              Profile optimization to paid media management and email nurture sequences, every service 
              is designed to work together—driving qualified leads through a coordinated inbound strategy.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              This model allows marketing agencies to scale service offerings without hiring specialists, 
              maintain consistent quality across client accounts, and focus on what they do best: 
              building client relationships and developing strategy. The end client sees only your brand, 
              your reports, and your results—while we handle the execution behind the scenes.
            </p>
          </div>

          {/* Contrast Section */}
          <div className="mt-12 pt-10 border-t border-border/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              How This Differs From Typical White Label Providers
            </h3>
            <p className="text-text-secondary text-base mb-6">
              Most white label providers focus on tasks and volume. We focus on controlled execution, accountability, and long-term delivery.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Typical Column */}
              <div>
                <p className="text-text-muted text-xs uppercase tracking-wider mb-3">Typical White Label</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-text-muted mt-1">—</span>
                    Task-based execution
                  </li>
                  <li className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-text-muted mt-1">—</span>
                    Cheapest-wins fulfillment
                  </li>
                  <li className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-text-muted mt-1">—</span>
                    Disconnected specialists
                  </li>
                  <li className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-text-muted mt-1">—</span>
                    Inconsistent delivery over time
                  </li>
                </ul>
              </div>
              
              {/* Our Approach Column */}
              <div>
                <p className="text-accent-blue text-xs uppercase tracking-wider mb-3">Our Approach</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-foreground text-sm">
                    <span className="text-accent-blue mt-1">✓</span>
                    Scoped, system-driven execution
                  </li>
                  <li className="flex items-start gap-2 text-foreground text-sm">
                    <span className="text-accent-blue mt-1">✓</span>
                    Standards before scale
                  </li>
                  <li className="flex items-start gap-2 text-foreground text-sm">
                    <span className="text-accent-blue mt-1">✓</span>
                    Dedicated delivery team
                  </li>
                  <li className="flex items-start gap-2 text-foreground text-sm">
                    <span className="text-accent-blue mt-1">✓</span>
                    Continuity month after month
                  </li>
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