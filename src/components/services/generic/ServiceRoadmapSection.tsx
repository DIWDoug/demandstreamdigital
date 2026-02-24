import { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";
import type { RoadmapPhase } from "@/types/servicePage";

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
  const [activePhase, setActivePhase] = useState(1);
  const [showAllActivities, setShowAllActivities] = useState(false);
  const activeData = config.phases.find(p => p.phase === activePhase) || config.phases[0];

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-green mb-4">
            {config.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
            {config.headline}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {config.subheadline}
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="mb-8">
          {/* Mobile dropdown */}
          <div className="lg:hidden">
            <select
              value={activePhase}
              onChange={(e) => setActivePhase(Number(e.target.value))}
              className="w-full p-4 rounded-xl bg-surface-elevated border border-border text-foreground text-base font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta/50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.5rem'
              }}
            >
              {config.phases.map((phase) => (
                <option key={phase.phase} value={phase.phase}>
                  {phase.name}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop tabs - no timeline connector */}
          <div className="hidden lg:flex gap-3">
            {config.phases.map((phase) => {
              const isActive = phase.phase === activePhase;
              const Icon = phase.icon;
              
              return (
                <button
                  key={phase.phase}
                  onClick={() => setActivePhase(phase.phase)}
                  className={`relative flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 flex-1 ${
                    isActive 
                      ? "bg-surface-elevated border-transparent shadow-md" 
                      : "bg-transparent border-border hover:border-text-muted"
                  }`}
                  style={isActive ? { borderColor: phase.color } : undefined}
                >
                  <div 
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300`}
                    style={{ background: isActive ? `${phase.color}20` : undefined }}
                  >
                    <Icon className="w-5 h-5" style={{ color: isActive ? phase.color : undefined }} />
                  </div>
                  <span className={`text-sm font-semibold transition-colors ${
                    isActive ? "text-foreground" : "text-text-muted"
                  }`}>
                    {phase.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active phase details */}
        <div 
          className="rounded-2xl border p-8 bg-surface-elevated shadow-sm animate-fade-in"
          style={{ borderColor: `${activeData.color}40` }}
          key={activePhase}
        >
          {/* Phase 1 duration callout */}
          {activePhase === 1 && (
            <div className="flex items-center gap-2 mb-6 px-4 py-2.5 rounded-lg bg-surface-dark border border-border w-fit">
              <span className="text-sm text-text-secondary">
                <span className="font-semibold text-foreground">Longest phase:</span> Foundation typically spans 2 to 4 months depending on scope and market complexity.
              </span>
            </div>
          )}
          
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${activeData.color}15` }}
            >
              <activeData.icon className="w-6 h-6" style={{ color: activeData.color }} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{activeData.title}</h3>
              <p className="text-text-muted text-sm">{activeData.name}</p>
            </div>
          </div>
          
          <p className="text-lg text-text-secondary mb-8">{activeData.description}</p>

          {/* Activities */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">What This Phase Includes</h4>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {activeData.activities.slice(0, 6).map((activity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle 
                    className="w-4 h-4 mt-0.5 flex-shrink-0" 
                    style={{ color: activeData.color }} 
                  />
                  <span className="text-text-secondary">{activity}</span>
                </li>
              ))}
            </ul>
            
            {activeData.activities.length > 6 && (
              <>
                <ul 
                  className={`grid md:grid-cols-2 gap-x-8 gap-y-3 mt-3 transition-all duration-300 overflow-hidden ${
                    showAllActivities ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!showAllActivities}
                >
                  {activeData.activities.slice(6).map((activity, index) => (
                    <li key={index + 6} className="flex items-start gap-3">
                      <CheckCircle 
                        className="w-4 h-4 mt-0.5 flex-shrink-0" 
                        style={{ color: activeData.color }} 
                      />
                      <span className="text-text-secondary">{activity}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setShowAllActivities(!showAllActivities)}
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-accent-green hover:text-accent-green/80 transition-colors"
                >
                  <span>{showAllActivities ? "Show less" : "View full execution checklist"}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllActivities ? "rotate-180" : ""}`} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Execution Note */}
        {config.executionNote && config.executionNote.length > 0 && (
          <p className="mt-8 text-text-secondary text-base text-center">
            {config.executionNote}
          </p>
        )}

        {/* Bottom note */}
        <p className={`${config.executionNote && config.executionNote.length > 0 ? 'mt-4' : 'mt-8'} text-text-muted text-sm text-center`}>
          {config.footerNote}
        </p>
      </div>
    </section>
  );
};

export default ServiceRoadmapSection;
