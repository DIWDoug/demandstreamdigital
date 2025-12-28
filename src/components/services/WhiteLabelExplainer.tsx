import { CheckCircle2 } from "lucide-react";

const WhiteLabelExplainer = () => {
  return (
    <section className="py-16 lg:py-20 bg-background relative">
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

          {/* Compressed Content - One Strong Paragraph */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              White label inbound marketing is a fulfillment partnership where we execute digital marketing 
              under your agency's brand. Strategy documents, reports, client communications—everything 
              stays invisible to your end client. You retain the relationship and strategic oversight. 
              We handle day-to-day execution across SEO, paid media, email, and authority building as a 
              coordinated system, not disconnected services.
            </p>

            <div className="flex items-start gap-3 p-4 bg-surface-elevated border border-border/50 rounded-xl">
              <CheckCircle2 className="h-5 w-5 text-cta mt-0.5 flex-shrink-0" />
              <p className="text-foreground text-sm m-0">
                <strong>Key distinction:</strong> We are not a staffing agency or contractor marketplace. 
                We own fulfillment end-to-end with documented standards, proven systems, and direct 
                accountability for results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelExplainer;