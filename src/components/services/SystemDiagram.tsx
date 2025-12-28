import { useEffect, useState } from "react";
import { Eye, Award, MousePointerClick, Wrench, BarChart3, RefreshCcw } from "lucide-react";

const nodes = [
  { icon: Eye, label: "Visibility", position: "top-left" },
  { icon: Award, label: "Authority & Trust", position: "top-right" },
  { icon: MousePointerClick, label: "Paid Media", position: "right" },
  { icon: BarChart3, label: "Measurement & Reporting", position: "bottom-right" },
  { icon: RefreshCcw, label: "Retention & Re-engagement", position: "bottom-left" },
  { icon: Wrench, label: "Conversion Infrastructure", position: "left" },
];

const getPosition = (position: string) => {
  switch (position) {
    case "top-left": return { top: "8%", left: "20%" };
    case "top-right": return { top: "8%", right: "20%" };
    case "right": return { top: "45%", right: "5%" };
    case "bottom-right": return { bottom: "8%", right: "20%" };
    case "bottom-left": return { bottom: "8%", left: "20%" };
    case "left": return { top: "45%", left: "5%" };
    default: return {};
  }
};

const SystemDiagram = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
            The Bigger Picture
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            How Services Connect
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Diagram Container */}
          <div className="relative aspect-[4/3] max-w-3xl mx-auto mb-10">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }} />
            </div>

            {/* Center Node */}
            <div 
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-52 md:h-52 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cta/30 via-accent-blue/20 to-cta/10 border-2 border-cta/40 flex items-center justify-center text-center p-6 shadow-[0_0_60px_-10px] shadow-cta/30">
                <div>
                  <span className="text-foreground font-bold text-base md:text-lg leading-tight block">
                    Coordinated
                  </span>
                  <span className="text-foreground font-bold text-base md:text-lg leading-tight block">
                    Fulfillment
                  </span>
                  <span className="text-cta text-xs mt-2 block uppercase tracking-wider">
                    System Center
                  </span>
                </div>
              </div>
            </div>

            {/* Surrounding Nodes */}
            {nodes.map((node, index) => {
              const positionStyle = getPosition(node.position);
              
              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-500`}
                  style={{ 
                    ...positionStyle,
                    transitionDelay: `${150 + index * 80}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)'
                  }}
                >
                  <div className="w-32 h-24 md:w-36 md:h-28 rounded-xl bg-surface-elevated border border-border/60 flex flex-col items-center justify-center p-3 text-center hover:border-accent-blue/40 hover:bg-surface-elevated/80 transition-all duration-300 group cursor-default">
                    <div className="w-9 h-9 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-2 group-hover:bg-accent-blue/20 transition-colors">
                      <node.icon className="h-4 w-4 text-accent-blue" />
                    </div>
                    <span className="text-text-secondary text-xs md:text-sm leading-tight font-medium">
                      {node.label}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Decorative Connection Lines */}
            <svg 
              className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              viewBox="0 0 400 300"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--accent-blue))" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="hsl(var(--accent-blue))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--accent-blue))" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Orbital ring */}
              <ellipse 
                cx="200" cy="150" rx="140" ry="100" 
                fill="none" 
                stroke="url(#lineGradient)" 
                strokeWidth="1"
                strokeDasharray="4,8"
                className="animate-[spin_60s_linear_infinite]"
                style={{ transformOrigin: '200px 150px' }}
              />
            </svg>
          </div>

          {/* Caption */}
          <p className="text-text-muted text-sm text-center max-w-2xl mx-auto leading-relaxed">
            These execution areas can be engaged individually or as part of a coordinated system, 
            depending on scope and planning cadence. They are not bundled or deployed universally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemDiagram;
