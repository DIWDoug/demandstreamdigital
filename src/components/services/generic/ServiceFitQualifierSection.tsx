import { useState } from "react";
import { Check, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { FitCriterion } from "@/types/servicePage";

interface QualificationConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  goodFit: FitCriterion[];
  notFit: FitCriterion[];
  ctaText: string;
}

interface ServiceFitQualifierSectionProps {
  config: QualificationConfig;
}

const ServiceFitQualifierSection = ({ config }: ServiceFitQualifierSectionProps) => {
  const [openGoodFit, setOpenGoodFit] = useState<number | null>(null);
  const [openNotFit, setOpenNotFit] = useState<number | null>(null);

  return (
    <section id="qualification" className="py-24 lg:py-32 bg-[#0F1E2D] scroll-mt-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1.5 rounded-md bg-[#0D1B2A] border border-white/10 text-white text-xs font-semibold uppercase tracking-widest mb-4">
              {config.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {config.headline}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              {config.subheadline}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">

            {/* Good Fit */}
            <div className="bg-[#1A2E44] rounded-xl border border-white/10 overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center gap-3 px-6 py-5 border-b border-white/8">
                <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>
                <h3 className="text-base font-semibold text-foreground">This Could Work Well</h3>
              </div>
              {/* Items */}
              <ul>
                {config.goodFit.map((item, index) => (
                  <li key={index} className={cn(index < config.goodFit.length - 1 && "border-b border-white/[0.06]")}>
                    <Collapsible
                      open={openGoodFit === index}
                      onOpenChange={(open) => setOpenGoodFit(open ? index : null)}
                    >
                      <CollapsibleTrigger className="flex items-start gap-3 w-full text-left cursor-pointer px-6 py-4 hover:bg-white/[0.03] transition-colors">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium flex-1 text-sm leading-snug">{item.point}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-text-muted transition-transform duration-200 shrink-0 mt-0.5",
                            openGoodFit === index && "rotate-180"
                          )}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        <p className="text-text-muted text-sm leading-relaxed px-6 pb-4 pt-0 pl-[52px]">
                          {item.detail}
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="bg-[#1A2E44] rounded-xl border border-white/10 overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center gap-3 px-6 py-5 border-b border-white/8">
                <div className="w-8 h-8 rounded-full bg-cta/15 flex items-center justify-center shrink-0">
                  <X className="h-4 w-4 text-cta" />
                </div>
                <h3 className="text-base font-semibold text-foreground">Probably Not a Fit</h3>
              </div>
              {/* Items */}
              <ul>
                {config.notFit.map((item, index) => (
                  <li key={index} className={cn(index < config.notFit.length - 1 && "border-b border-white/[0.06]")}>
                    <Collapsible
                      open={openNotFit === index}
                      onOpenChange={(open) => setOpenNotFit(open ? index : null)}
                    >
                      <CollapsibleTrigger className="flex items-start gap-3 w-full text-left cursor-pointer px-6 py-4 hover:bg-white/[0.03] transition-colors">
                        <X className="h-4 w-4 text-cta shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium flex-1 text-sm leading-snug">{item.point}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-text-muted transition-transform duration-200 shrink-0 mt-0.5",
                            openNotFit === index && "rotate-180"
                          )}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        <p className="text-text-muted text-sm leading-relaxed px-6 pb-4 pt-0 pl-[52px]">
                          {item.detail}
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link
              to="/contact"
              className="btn-cta group inline-flex items-center gap-2"
            >
              {config.ctaText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceFitQualifierSection;
