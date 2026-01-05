import { cn } from "@/lib/utils";

export interface Factor {
  label: string;
  current: number | string;
  baseline: number;
  impact: number;
  unit?: string;
}

interface FactorBreakdownProps {
  factors: Factor[];
  title?: string;
  baselineLabel?: string;
}

const FactorBreakdown = ({ 
  factors, 
  title = "Performance Factors",
  baselineLabel 
}: FactorBreakdownProps) => {
  const getColor = (impact: number, isInverse = false) => {
    // For inverse metrics (like cost), lower is better
    if (isInverse) {
      if (impact > 1.2) return "bg-emerald-500";
      if (impact > 0.9) return "bg-yellow-500";
      return "bg-red-500";
    }
    // Normal metrics: higher is better
    if (impact > 1.3) return "bg-emerald-500";
    if (impact > 0.9) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getTextColor = (impact: number) => {
    if (impact >= 1.3) return "text-emerald-400";
    if (impact >= 0.9) return "text-yellow-400";
    return "text-red-400";
  };

  const formatValue = (current: number | string, unit?: string) => {
    if (typeof current === 'string') return current;
    if (unit === "$") return `$${current.toLocaleString()}`;
    if (unit === "%") return `${current}%`;
    if (unit === "x") return `${current}x`;
    return current.toLocaleString();
  };

  return (
    <div className="bg-surface-dark rounded-xl p-5 border border-border/30">
      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">{title}</p>
      <div className="space-y-3">
        {factors.map((factor, i) => {
          const impactPercent = Math.min(100, Math.max(10, factor.impact * 40));
          const isInverse = factor.label.toLowerCase().includes("cost") || factor.label.toLowerCase().includes("investment");
          
          return (
            <div key={i} className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-text-muted">{factor.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-text-secondary">{formatValue(factor.current, factor.unit)}</span>
                  <span className={cn("font-medium", getTextColor(factor.impact))}>
                    {factor.impact >= 1 ? "+" : ""}{Math.round((factor.impact - 1) * 100)}%
                  </span>
                </div>
              </div>
              <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                <div 
                  className={cn("h-full rounded-full transition-all", getColor(factor.impact, isInverse))}
                  style={{ width: `${impactPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {baselineLabel && (
        <p className="text-[10px] text-text-muted/60 mt-3">
          {baselineLabel}
        </p>
      )}
    </div>
  );
};

export default FactorBreakdown;
