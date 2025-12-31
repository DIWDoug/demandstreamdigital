import { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { RoadmapPhase } from "@/types/servicePage";
import { cn } from "@/lib/utils";

interface RoadmapConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  phases: RoadmapPhase[];
  executionNote?: string;
  footerNote: string;
}

interface ServiceRoadmapSectionProps {
  config: RoadmapConfig;
}

const ServiceRoadmapSection = ({ config }: ServiceRoadmapSectionProps) => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(1); // Phase 1 expanded by default

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cta mb-4">
            {config.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
            {config.headline}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {config.subheadline}
          </p>
        </div>

        {/* Collapsible Phases */}
        <div className="max-w-4xl space-y-4">
          {config.phases.map((phase) => {
            const isExpanded = expandedPhase === phase.phase;
            const Icon = phase.icon;
            const isPhaseOne = phase.phase === 1;
            
            return (
              <Collapsible
                key={phase.phase}
                open={isExpanded}
                onOpenChange={(open) => setExpandedPhase(open ? phase.phase : null)}
              >
                <CollapsibleTrigger 
                  className={cn(
                    "w-full rounded-xl border p-5 transition-all text-left group cursor-pointer",
                    isExpanded 
                      ? "bg-surface-elevated border-border/50" 
                      : "bg-surface-elevated/50 border-border/30 hover:border-border/50",
                    isPhaseOne && !isExpanded && "ring-1 ring-cta/20"
                  )}
                  style={{ 
                    borderLeftWidth: '4px',
                    borderLeftColor: phase.color 
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div 
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center transition-all",
                          isPhaseOne ? "w-12 h-12" : ""
                        )}
                        style={{ background: `${phase.color}20` }}
                      >
                        <Icon 
                          className={cn("w-5 h-5", isPhaseOne && "w-6 h-6")} 
                          style={{ color: phase.color }} 
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                            Phase {phase.phase}
                          </span>
                          {isPhaseOne && (
                            <span className="text-xs font-medium text-cta bg-cta/10 px-2 py-0.5 rounded">
                              Foundation
                            </span>
                          )}
                        </div>
                        <h3 className={cn(
                          "font-semibold text-foreground",
                          isPhaseOne ? "text-lg" : "text-base"
                        )}>
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 text-text-muted transition-transform duration-200",
                        isExpanded && "rotate-180"
                      )} 
                    />
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                  <div 
                    className="rounded-b-xl border border-t-0 p-6 bg-surface-elevated"
                    style={{ borderColor: `${phase.color}40` }}
                  >
                    {/* Phase 1 duration callout */}
                    {isPhaseOne && (
                      <div className="flex items-center gap-2 mb-5 px-4 py-2.5 rounded-lg bg-surface-dark border border-border w-fit">
                        <span className="text-sm text-text-secondary">
                          <span className="font-semibold text-foreground">Longest phase:</span> Foundation typically spans 2 to 4 months depending on scope and market complexity.
                        </span>
                      </div>
                    )}
                    
                    <p className="text-text-secondary mb-6">{phase.description}</p>

                    {/* Activities */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                        What This Phase Includes
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                        {phase.activities.map((activity, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle 
                              className="w-4 h-4 mt-0.5 flex-shrink-0" 
                              style={{ color: phase.color }} 
                            />
                            <span className="text-text-secondary text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>

        {/* Execution Note */}
        {config.executionNote && config.executionNote.length > 0 && (
          <p className="mt-8 text-text-secondary text-base text-center max-w-4xl">
            {config.executionNote}
          </p>
        )}

        {/* Bottom note */}
        <p className={`${config.executionNote && config.executionNote.length > 0 ? 'mt-4' : 'mt-8'} text-text-muted text-sm text-center max-w-4xl`}>
          {config.footerNote}
        </p>
      </div>
    </section>
  );
};

export default ServiceRoadmapSection;
