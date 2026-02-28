import { useState } from "react";
import { Check, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export interface FitItem {
  point: string;
  detail?: string;
}

export interface ServiceFitSectionProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  body?: string;
  goodFit: FitItem[];
  notFit: FitItem[];
  ctaLabel?: string;
  ctaHref?: string;
  /** Trade noun for the exclusivity block e.g. "Plumbing" | "HVAC" */
  tradeNoun: string;
  exclusivityBody?: string;
}

const ServiceFitSection = ({
  eyebrow = "Selective Fit",
  heading,
  subheading,
  body,
  goodFit,
  notFit,
  ctaLabel = "Claim Your Territory Today",
  ctaHref = "/contact",
  tradeNoun,
  exclusivityBody,
}: ServiceFitSectionProps) => {
  const [openGood, setOpenGood] = useState<number | null>(null);
  const [openNot, setOpenNot] = useState<number | null>(null);

  const defaultExclusivityBody = `When you work with DemandStream, your competitors don't. We take one ${tradeNoun.toLowerCase()} client per service area. That keeps our incentives fully aligned with yours — every strategy, every campaign, and every dollar of spend is working to put your company ahead in your market, not divided between you and the company across town. If your market is available, it's worth finding out now. If it isn't, we'll tell you that too.`;

  return (
    <>
      {/* FIT */}
      <section id="fit" className="py-20 lg:py-28 bg-card border-y border-border scroll-mt-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
              <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
                {eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {heading}
              </h2>
              {subheading && (
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {subheading}
                </p>
              )}
              {body && (
                <p className="text-muted-foreground text-base max-w-2xl mx-auto mt-4">
                  {body}
                </p>
              )}
            </div>

            {/* Two-column cards */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Good Fit */}
              <div className="bg-background rounded-2xl p-5 sm:p-6 md:p-8 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-5 md:mb-6">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">This Could Work Well</h3>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  {goodFit.map((item, index) => (
                    <li key={index}>
                      {item.detail ? (
                        <Collapsible
                          open={openGood === index}
                          onOpenChange={(open) => setOpenGood(open ? index : null)}
                        >
                          <CollapsibleTrigger className="flex items-start gap-2.5 md:gap-3 w-full text-left group cursor-pointer py-2.5 md:py-2 min-h-[44px]">
                            <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-foreground font-medium flex-1 text-sm md:text-base leading-snug">{item.point}</span>
                            <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0 mt-0.5", openGood === index && "rotate-180")} />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                            <p className="text-muted-foreground text-sm leading-relaxed pl-6 md:pl-8 pb-2 pt-1">{item.detail}</p>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <div className="flex items-start gap-2.5 md:gap-3 py-2">
                          <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm md:text-base leading-snug">{item.point}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not a Fit */}
              <div className="bg-background rounded-2xl p-5 sm:p-6 md:p-8 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-5 md:mb-6">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <X className="h-4 w-4 md:h-5 md:w-5 text-red-500" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">Probably Not a Fit</h3>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  {notFit.map((item, index) => (
                    <li key={index}>
                      {item.detail ? (
                        <Collapsible
                          open={openNot === index}
                          onOpenChange={(open) => setOpenNot(open ? index : null)}
                        >
                          <CollapsibleTrigger className="flex items-start gap-2.5 md:gap-3 w-full text-left group cursor-pointer py-2.5 md:py-2 min-h-[44px]">
                            <X className="h-4 w-4 md:h-5 md:w-5 text-red-400 shrink-0 mt-0.5" />
                            <span className="text-foreground font-medium flex-1 text-sm md:text-base leading-snug">{item.point}</span>
                            <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0 mt-0.5", openNot === index && "rotate-180")} />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                            <p className="text-muted-foreground text-sm leading-relaxed pl-6 md:pl-8 pb-2 pt-1">{item.detail}</p>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <div className="flex items-start gap-2.5 md:gap-3 py-2">
                          <X className="h-4 w-4 md:h-5 md:w-5 text-red-400 shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm md:text-base leading-snug">{item.point}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link to={ctaHref} className="btn-cta group inline-flex items-center gap-2">
                {ctaLabel} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXCLUSIVITY */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--cta)) 0%, transparent 60%),
                            radial-gradient(circle at 70% 50%, hsl(var(--accent-blue)) 0%, transparent 60%)`
        }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <p className="text-xs font-bold tracking-widest text-accent-blue uppercase mb-3">EXCLUSIVITY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            One {tradeNoun} Company. Per Market.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            {exclusivityBody ?? defaultExclusivityBody}
          </p>
          <Link to={ctaHref} className="btn-cta group inline-flex items-center gap-2">
            {ctaLabel} →
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServiceFitSection;
