import { Link } from "react-router-dom";
import type { SpokeDetail } from "@/data/services";

interface HubSpokeDiagramProps {
  hubSlug: string;
  hubTitle: string;
  spokes: SpokeDetail[];
}

const HubSpokeDiagram = ({ hubSlug, hubTitle, spokes }: HubSpokeDiagramProps) => {
  // Calculate positions in a circle around the center
  const getPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    const radius = 42; // Percentage from center
    return {
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
    };
  };

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cta/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
            Service Components
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            {hubTitle} Services
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Every component works together to drive measurable results for your clients.
          </p>
        </div>

        {/* Wheel Diagram */}
        <div className="relative w-full max-w-3xl mx-auto aspect-square mb-12">
          {/* Connection lines SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {/* Outer circle */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="0.3"
              strokeDasharray="2,2"
            />
            {/* Lines to center */}
            {spokes.map((_, index) => {
              const pos = getPosition(index, spokes.length);
              return (
                <line
                  key={index}
                  x1="50"
                  y1="50"
                  x2={pos.x}
                  y2={pos.y}
                  stroke="hsl(var(--border))"
                  strokeWidth="0.3"
                  strokeDasharray="1,1"
                />
              );
            })}
          </svg>

          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-cta/20 to-accent-blue/20 border border-cta/30 flex items-center justify-center z-10">
            <div className="text-center px-2">
              <p className="text-xs lg:text-sm font-semibold text-cta uppercase tracking-wider leading-tight">
                {hubTitle}
              </p>
            </div>
          </div>

          {/* Spoke nodes */}
          {spokes.map((spoke, index) => {
            const pos = getPosition(index, spokes.length);
            
            return (
              <Link
                key={spoke.slug}
                to={`/inbound-marketing-services/${hubSlug}/${spoke.slug}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                }}
              >
                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-xl bg-surface-card border border-border hover:border-cta/50 flex items-center justify-center p-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cta/10">
                  <span className="text-[10px] lg:text-xs font-medium text-foreground text-center leading-tight">
                    {spoke.title}
                  </span>
                </div>
              </Link>
            );
          })}

          {/* Animated pulse rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-48 lg:h-48 rounded-full border border-cta/10 animate-pulse pointer-events-none" />
        </div>

        {/* Spokes List (below diagram for accessibility/SEO) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {spokes.map((spoke) => (
            <Link
              key={spoke.slug}
              to={`/inbound-marketing-services/${hubSlug}/${spoke.slug}`}
              className="group p-4 rounded-xl bg-surface-card/50 border border-border hover:border-cta/30 transition-all"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-cta transition-colors mb-1">
                {spoke.title}
              </h3>
              <p className="text-xs text-text-muted line-clamp-2">
                {spoke.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubSpokeDiagram;
