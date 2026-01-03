import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type InputMode = "decimal" | "numeric";

export type CalculatorInputFieldProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  suffix?: string;
  prefix?: string;
  tooltip?: string;
  inputMode?: InputMode;
  allowDecimal?: boolean;
};

function sanitizeNumericInput(raw: string, allowDecimal: boolean): string {
  const cleaned = allowDecimal ? raw.replace(/[^0-9.]/g, "") : raw.replace(/[^0-9]/g, "");
  if (!allowDecimal) return cleaned;

  // Keep only the first decimal point
  const [head, ...rest] = cleaned.split(".");
  if (rest.length === 0) return cleaned;
  return `${head}.${rest.join("")}`;
}

export function CalculatorInputField({
  label,
  value,
  onChange,
  suffix,
  prefix,
  tooltip,
  inputMode = "decimal",
  allowDecimal = true,
}: CalculatorInputFieldProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label className="block text-sm text-text-muted font-body">{label}</label>
        {tooltip && (
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button" className="text-text-muted hover:text-accent-blue transition-colors">
                  <Info className="h-3.5 w-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs bg-surface-elevated border-border/50 text-foreground z-50">
                <p className="text-sm font-body">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-lg">{prefix}</span>
        )}
        <input
          type="text"
          inputMode={inputMode}
          value={value}
          onChange={(e) => onChange(sanitizeNumericInput(e.target.value, allowDecimal))}
          className={cn(
            "w-full py-3.5 rounded-lg bg-surface-dark border border-border/50 text-foreground text-lg font-medium focus:outline-none focus:border-accent-blue transition-colors",
            prefix ? "pl-8 pr-4" : "px-4",
          )}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm">{suffix}</span>
        )}
      </div>
    </div>
  );
}

export default CalculatorInputField;
