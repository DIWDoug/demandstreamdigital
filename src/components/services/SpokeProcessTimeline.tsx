import { Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface SpokeProcessTimelineProps {
  steps: string[];
  spokeTitle: string;
}

const SpokeProcessTimeline = ({ steps, spokeTitle }: SpokeProcessTimelineProps) => {
  const totalSteps = steps.length;

  return (
    <section className="py-16 lg:py-20 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              How We Execute
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              {spokeTitle} Process
            </h2>
          </div>

          {/* Progress Timeline */}
          <div className="space-y-0">
            {steps.map((step, index) => {
              const isLast = index === totalSteps - 1;
              const progressPercent = ((index + 1) / totalSteps) * 100;

              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="flex items-start gap-4 pb-8">
                    {/* Left: Step indicator and line */}
                    <div className="flex flex-col items-center">
                      {/* Step Number Circle */}
                      <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-cta to-accent-blue flex items-center justify-center shadow-lg shadow-cta/20">
                        <span className="text-sm font-bold text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      
                      {/* Connecting Line */}
                      {!isLast && (
                        <div className="w-0.5 h-full min-h-[40px] bg-gradient-to-b from-cta/50 to-border/30 mt-2" />
                      )}
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 pt-1.5">
                      <div className="bg-surface-elevated border border-border/50 rounded-xl p-5 hover:border-cta/30 transition-colors">
                        <p className="text-text-secondary leading-relaxed">{step}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Overall Progress Indicator */}
          <div className="mt-8 pt-8 border-t border-border/40">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-text-muted">Complete Process</span>
              <span className="text-sm font-medium text-cta">{totalSteps} Steps</span>
            </div>
            <div className="relative h-2 bg-surface-elevated rounded-full overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cta to-accent-blue rounded-full transition-all duration-500"
                style={{ width: '100%' }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <div className="w-2 h-2 rounded-full bg-cta" />
                <span>Audit & Discovery</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <div className="w-2 h-2 rounded-full bg-accent-blue" />
                <span>Execution & Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpokeProcessTimeline;
