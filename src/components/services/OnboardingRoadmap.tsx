import { MessageSquare, FileSearch, Handshake, Rocket, BarChart3, RefreshCcw } from "lucide-react";

const OnboardingRoadmap = () => {
  const steps = [
    {
      icon: MessageSquare,
      week: "Week 1",
      title: "Discovery Call",
      description: "We learn about your agency, clients, current challenges, and what success looks like. No pitch—just conversation."
    },
    {
      icon: FileSearch,
      week: "Week 1-2",
      title: "Scope Definition",
      description: "Based on your client mix, we map out exactly what's needed: channels, hours, deliverables, and communication rhythm."
    },
    {
      icon: Handshake,
      week: "Week 2",
      title: "Agreement & Access",
      description: "Once aligned, we finalize terms and you grant access to client accounts, assets, and any existing documentation."
    },
    {
      icon: Rocket,
      week: "Week 3",
      title: "Kickoff & Execution",
      description: "Work begins. First deliverables roll out. You get a dedicated Slack channel and weekly async updates."
    },
    {
      icon: BarChart3,
      week: "Month 1+",
      title: "Reporting Cadence",
      description: "Monthly reports you can white-label. Quarterly strategy reviews. Ongoing optimization based on data."
    },
    {
      icon: RefreshCcw,
      week: "Ongoing",
      title: "Adapt & Scale",
      description: "As your agency grows, we scale with you. Add clients, channels, or services without rebuilding the relationship."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              The Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How Onboarding Works
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              From first call to full execution in about three weeks. Here's what to expect.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line - hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/50 via-cta/50 to-accent-blue/50" />

            <div className="space-y-8 lg:space-y-0">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                    index % 2 === 0 ? '' : 'lg:direction-rtl'
                  }`}
                >
                  {/* Card */}
                  <div className={`
                    bg-surface-dark border border-border/30 rounded-xl p-6 
                    hover:border-accent-blue/30 transition-colors
                    ${index % 2 === 0 ? 'lg:text-right lg:col-start-1' : 'lg:col-start-2'}
                  `}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0">
                        <step.icon className="h-5 w-5 text-accent-blue" />
                      </div>
                      <div>
                        <span className="text-cta text-xs font-medium uppercase tracking-wider">{step.week}</span>
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent-blue border-4 border-background" />

                  {/* Empty space for alternating layout */}
                  <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingRoadmap;
