import { Eye, Award, MousePointerClick, Wrench, BarChart3, RefreshCcw } from "lucide-react";

const pillars = [
  { icon: Eye, label: "Visibility", color: "hsl(76, 42%, 41%)" },
  { icon: Award, label: "Authority", color: "hsl(224, 60%, 55%)" },
  { icon: MousePointerClick, label: "Paid Media", color: "hsl(35, 90%, 50%)" },
  { icon: Wrench, label: "Conversion", color: "hsl(280, 60%, 55%)" },
  { icon: BarChart3, label: "Measurement", color: "hsl(190, 70%, 45%)" },
  { icon: RefreshCcw, label: "Retention", color: "hsl(340, 70%, 50%)" },
];

// Positions for hexagonal layout
const positions = [
  { x: 50, y: 8 },   // top
  { x: 88, y: 30 },  // top-right
  { x: 88, y: 70 },  // bottom-right
  { x: 50, y: 92 },  // bottom
  { x: 12, y: 70 },  // bottom-left
  { x: 12, y: 30 },  // top-left
];

const GrowthEngineDiagram = () => {
  return (
    <div className="relative w-full aspect-square max-w-xs lg:max-w-sm">
      {/* Outer glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cta/20 via-accent-blue/10 to-cta/20 rounded-full blur-2xl" />
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Hexagon outline */}
        <polygon 
          points="50,8 88,30 88,70 50,92 12,70 12,30" 
          fill="none" 
          stroke="hsl(var(--border))" 
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />
        {/* Lines to center */}
        {positions.map((pos, i) => (
          <line 
            key={i}
            x1="50" y1="50" 
            x2={pos.x} y2={pos.y}
            stroke="hsl(var(--border))"
            strokeWidth="0.3"
            strokeDasharray="1,1"
          />
        ))}
      </svg>

      {/* Center hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-cta/20 to-accent-blue/20 border border-cta/30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-[10px] lg:text-xs font-semibold text-cta uppercase tracking-wider">Growth</p>
          <p className="text-[10px] lg:text-xs font-semibold text-cta uppercase tracking-wider">Engine</p>
        </div>
      </div>

      {/* Pillar nodes */}
      {pillars.map((pillar, index) => {
        const pos = positions[index];
        const Icon = pillar.icon;
        
        return (
          <div
            key={index}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ 
              left: `${pos.x}%`, 
              top: `${pos.y}%`,
            }}
          >
            {/* Node */}
            <div 
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ 
                background: `linear-gradient(135deg, ${pillar.color}20, ${pillar.color}10)`,
                border: `1px solid ${pillar.color}40`
              }}
            >
              <Icon 
                className="h-5 w-5 lg:h-6 lg:w-6 mb-0.5" 
                style={{ color: pillar.color }}
              />
              <span 
                className="text-[8px] lg:text-[9px] font-medium"
                style={{ color: pillar.color }}
              >
                {pillar.label}
              </span>
            </div>
          </div>
        );
      })}

      {/* Animated pulse rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40 rounded-full border border-cta/10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-56 lg:h-56 rounded-full border border-accent-blue/5" />
    </div>
  );
};

export default GrowthEngineDiagram;