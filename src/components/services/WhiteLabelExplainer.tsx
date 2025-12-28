import { CheckCircle2, Users, Layers, TrendingUp } from "lucide-react";

const WhiteLabelExplainer = () => {
  const benefits = [
    {
      icon: Users,
      title: "Your Brand, Our Execution",
      description: "All deliverables carry your agency's branding. Your clients never know we exist."
    },
    {
      icon: Layers,
      title: "Coordinated System",
      description: "SEO, paid media, email, and authority building work together—not as disconnected services."
    },
    {
      icon: TrendingUp,
      title: "Scalable Capacity",
      description: "Add client accounts without adding headcount. We scale with your growth."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background relative">
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
          <div className="prose prose-lg prose-invert max-w-none mb-12">
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

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 bg-surface-elevated border border-border/50 rounded-xl"
              >
                <div className="p-2 rounded-lg bg-cta/10 border border-cta/20 w-fit mb-4">
                  <benefit.icon className="h-5 w-5 text-cta" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelExplainer;