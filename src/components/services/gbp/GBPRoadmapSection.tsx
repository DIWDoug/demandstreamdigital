import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface RoadmapPhase {
  phase: number;
  name: string;
  title: string;
  description: string;
  activities: string[];
  icon: React.ElementType;
  color: string;
}

interface RoadmapConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  phases: RoadmapPhase[];
  footerNote: string;
  executionNote?: string;
}

interface GBPRoadmapSectionProps {
  config: RoadmapConfig;
}

const GBPRoadmapSection = ({ config }: GBPRoadmapSectionProps) => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              {config.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {config.headline}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {config.subheadline}
            </p>
          </div>

          {/* Phases */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.phase}
                  className="bg-surface-elevated border border-border/50 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${phase.color}20` }}
                    >
                      <Icon 
                        className="w-5 h-5" 
                        style={{ color: phase.color }}
                      />
                    </div>
                    <div>
                      <span className="text-xs text-text-muted uppercase tracking-wider">
                        Phase {phase.phase}
                      </span>
                      <p className="text-foreground font-semibold">{phase.name}</p>
                    </div>
                  </div>
                  <h3 className="text-foreground font-medium mb-2">{phase.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Execution Note */}
          {config.executionNote && (
            <p className="text-center mt-10 text-text-secondary text-base">
              {config.executionNote}
            </p>
          )}

          {/* Footer Note */}
          <p className="text-center mt-6 text-text-muted text-sm">
            {config.footerNote}
          </p>

          {/* CTA */}
          <div className="text-center mt-8">
            <a 
              href="/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cta font-medium hover:text-cta/80 transition-colors"
            >
              Discuss Your Roadmap
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GBPRoadmapSection;
