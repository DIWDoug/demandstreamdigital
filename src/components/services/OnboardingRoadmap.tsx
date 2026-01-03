import { MessageSquare, FileSearch, Handshake, Rocket, BarChart3, RefreshCcw } from "lucide-react";

const OnboardingRoadmap = () => {
  const steps = [
    {
      icon: MessageSquare,
      phase: "Phase 1",
      title: "Discovery Call",
      description: "We learn about your agency, clients, current challenges, and what success looks like. No pitch. Just conversation."
    },
    {
      icon: FileSearch,
      phase: "Phase 2",
      title: "Scope Definition",
      description: "Based on your client mix, we map out exactly what's needed: channels, hours, deliverables, and communication rhythm."
    },
    {
      icon: Handshake,
      phase: "Phase 3",
      title: "Agreement & Access",
      description: "Once aligned, we finalize terms and you grant access to client accounts, assets, and any existing documentation."
    },
    {
      icon: Rocket,
      phase: "Phase 4",
      title: "Kickoff & Execution",
      description: "Work begins. First deliverables roll out. You get a dedicated Slack channel and weekly async updates."
    },
    {
      icon: BarChart3,
      phase: "Phase 5",
      title: "Reporting Cadence",
      description: "Monthly reports you can white-label. Quarterly strategy reviews. Ongoing optimization based on data."
    },
    {
      icon: RefreshCcw,
      phase: "Ongoing",
      title: "Adapt & Scale",
      description: "As your agency grows, we scale with you. Add clients, channels, or services without rebuilding the relationship."
    }
  ];

  return (
    <section id="onboarding" className="py-20 lg:py-28 section-light relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              The Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How Onboarding Works
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From first call to full execution in about three weeks. Here's what to expect.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line - hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cta/50 via-slate-300 to-cta/50" />

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
                    bg-white border border-slate-200 rounded-xl p-6 shadow-sm
                    hover:border-cta/30 transition-colors
                    ${index % 2 === 0 ? 'lg:text-right lg:col-start-1' : 'lg:col-start-2'}
                  `}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center shrink-0">
                        <step.icon className="h-5 w-5 text-cta" />
                      </div>
                      <div>
                        <span className="text-cta text-xs font-medium uppercase tracking-wider">{step.phase}</span>
                        <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cta border-4 border-white shadow-sm" />

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
