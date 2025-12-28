import { CheckCircle2 } from "lucide-react";

const WhiteLabelExplainer = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative">
      {/* Gradient transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              Understanding the Model
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Is White Label Inbound Marketing?
            </h2>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              White label inbound marketing is a partnership model where agencies outsource the execution of 
              digital marketing services to a specialized fulfillment partner. The partner delivers all work 
              under the agency's brand—strategy documents, reports, client communications, and campaign 
              management—while remaining invisible to the end client.
            </p>
            
            <p className="text-text-secondary leading-relaxed mb-6">
              Unlike traditional outsourcing or freelancer arrangements, white label inbound marketing provides 
              a complete system: Local SEO, Google Maps optimization, paid media (Google Ads and Meta), email 
              marketing, authority building, and reporting—all coordinated to work together rather than 
              operating as disconnected services.
            </p>

            <p className="text-text-secondary leading-relaxed mb-6">
              This model allows agencies to expand service offerings without hiring specialists, maintain 
              quality control through documented processes, and scale client accounts without proportionally 
              increasing overhead. The agency retains the client relationship and strategic oversight while 
              the fulfillment partner handles day-to-day execution.
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