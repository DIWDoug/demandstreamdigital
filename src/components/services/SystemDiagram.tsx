import { useEffect, useState } from "react";
import { Eye, Award, MousePointerClick, Wrench, BarChart3, RefreshCcw } from "lucide-react";

const nodes = [
  { icon: Eye, label: "Visibility", angle: -60 },
  { icon: Award, label: "Authority & Trust", angle: 0 },
  { icon: MousePointerClick, label: "Paid Media", angle: 60 },
  { icon: Wrench, label: "Conversion Infrastructure", angle: 120 },
  { icon: BarChart3, label: "Measurement & Reporting", angle: 180 },
  { icon: RefreshCcw, label: "Retention & Re-engagement", angle: 240 },
];

const SystemDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Diagram Container */}
          <div className="relative aspect-square max-w-xl mx-auto mb-8">
            {/* Center Node */}
            <div 
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-cta/20 to-accent-blue/10 border border-cta/30 flex items-center justify-center text-center p-4 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
              <span className="text-foreground font-semibold text-sm md:text-base leading-tight">
                Coordinated<br />Fulfillment
              </span>
            </div>

            {/* Surrounding Nodes */}
            {nodes.map((node, index) => {
              const radius = 42; // percentage from center
              const angleRad = (node.angle * Math.PI) / 180;
              const x = 50 + radius * Math.cos(angleRad);
              const y = 50 + radius * Math.sin(angleRad);
              
              return (
                <div
                  key={index}
                  className={`absolute w-28 h-28 md:w-32 md:h-32 -translate-x-1/2 -translate-y-1/2 transition-all duration-500`}
                  style={{ 
                    left: `${x}%`, 
                    top: `${y}%`,
                    transitionDelay: `${150 + index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: `translate(-50%, -50%) ${isVisible ? 'scale(1)' : 'scale(0.8)'}`
                  }}
                >
                  <div className="w-full h-full rounded-xl bg-surface-elevated border border-border/50 flex flex-col items-center justify-center p-3 text-center hover:border-accent-blue/30 transition-colors">
                    <node.icon className="h-5 w-5 md:h-6 md:w-6 text-accent-blue mb-2" />
                    <span className="text-text-secondary text-xs md:text-sm leading-tight">
                      {node.label}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Connection Lines (subtle) */}
            <svg 
              className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`}
              viewBox="0 0 100 100"
            >
              {nodes.map((node, index) => {
                const radius = 42;
                const angleRad = (node.angle * Math.PI) / 180;
                const x = 50 + radius * Math.cos(angleRad);
                const y = 50 + radius * Math.sin(angleRad);
                
                return (
                  <line
                    key={index}
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke="currentColor"
                    strokeWidth="0.2"
                    className="text-border"
                    strokeDasharray="2,2"
                  />
                );
              })}
            </svg>
          </div>

          {/* Caption */}
          <p className="text-text-muted text-sm text-center max-w-2xl mx-auto leading-relaxed">
            These execution areas are activated and prioritized based on scope and planning cadence. 
            They are not bundled or deployed universally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemDiagram;
