import { useState } from "react";
import { Check, X, ArrowRight, ChevronDown } from "lucide-react";
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
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              {config.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {config.headline}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {config.subheadline}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Good Fit */}
            <div className="bg-surface-elevated rounded-2xl p-5 sm:p-6 md:p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-emerald-500" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">This Could Work Well</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {config.goodFit.map((item, index) => (
                  <li key={index}>
                    <Collapsible 
                      open={openGoodFit === index}
                      onOpenChange={(open) => setOpenGoodFit(open ? index : null)}
                    >
                      <CollapsibleTrigger className="flex items-start gap-2.5 md:gap-3 w-full text-left group cursor-pointer py-2.5 md:py-2 min-h-[44px]">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium flex-1 text-sm md:text-base leading-snug">{item.point}</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 text-text-muted transition-transform duration-200 shrink-0 mt-0.5",
                            openGoodFit === index && "rotate-180"
                          )} 
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        <p className="text-text-muted text-sm leading-relaxed pl-6 md:pl-8 pb-3 pt-1">
                          {item.detail}
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="bg-surface-elevated rounded-2xl p-5 sm:p-6 md:p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-500/10 flex items-center justify-center shrink-0">
                  <X className="h-4 w-4 md:h-5 md:w-5 text-slate-400" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">Probably Not a Fit</h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                {config.notFit.map((item, index) => (
                  <li key={index}>
                    <Collapsible 
                      open={openNotFit === index}
                      onOpenChange={(open) => setOpenNotFit(open ? index : null)}
                    >
                      <CollapsibleTrigger className="flex items-start gap-2.5 md:gap-3 w-full text-left group cursor-pointer py-2.5 md:py-2 min-h-[44px]">
                        <X className="h-4 w-4 md:h-5 md:w-5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium flex-1 text-sm md:text-base leading-snug">{item.point}</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 text-text-muted transition-transform duration-200 shrink-0 mt-0.5",
                            openNotFit === index && "rotate-180"
                          )} 
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        <p className="text-text-muted text-sm leading-relaxed pl-6 md:pl-8 pb-3 pt-1">
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
          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="btn-cta group inline-flex items-center gap-2"
            >
              {config.ctaText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFitQualifierSection;
