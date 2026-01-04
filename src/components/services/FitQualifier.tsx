import { useState } from "react";
import { Check, X, ArrowRight, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const FitQualifier = () => {
  const [openGoodFit, setOpenGoodFit] = useState<number | null>(null);
  const [openNotFit, setOpenNotFit] = useState<number | null>(null);

  const goodFit = [
    {
      point: "You're running an established agency",
      detail: "Generally $30K+/month in revenue with existing clients who need ongoing marketing support."
    },
    {
      point: "You have clients but need execution capacity",
      detail: "You're good at sales and relationships. You need reliable people to handle the actual fulfillment."
    },
    {
      point: "You want a system, not just extra hands",
      detail: "You're looking for documented processes, clear communication, and predictable delivery."
    },
    {
      point: "You understand that good work takes time",
      detail: "SEO and local marketing don't produce overnight results. You're willing to set realistic expectations with clients."
    },
    {
      point: "You care about client retention",
      detail: "Keeping clients for years matters more to you than churning through new ones every quarter."
    }
  ];

  const notFit = [
    {
      point: "You're primarily shopping on price",
      detail: "We're not the cheapest option, and we're not trying to be. If budget is the main factor, there are other providers."
    },
    {
      point: "You want to direct every task yourself",
      detail: "We work best with agencies who trust our process. If you need to approve every small decision, the workflow breaks down."
    },
    {
      point: "You're looking for someone to build your pipeline",
      detail: "We handle fulfillment for your existing clients. We don't do agency sales or lead generation for you."
    },
    {
      point: "Your clients aren't willing to participate",
      detail: "Local marketing requires client input: access to accounts, feedback on content, timely approvals. We can't do it alone."
    },
    {
      point: "You need results in 30 days or less",
      detail: "If you're promising clients fast rankings or immediate ROI, we're not the right partner for that conversation."
    }
  ];

  return (
    <section id="fit-qualifier" className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              Before We Talk
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Is This the Right Fit?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              We're selective about who we work with, and you should be too. Here's a quick way to tell if this partnership makes sense for both of us.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Good Fit */}
            <div className="bg-surface-elevated rounded-2xl p-5 sm:p-6 md:p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-cta/10 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-cta" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">This Could Work Well</h3>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {goodFit.map((item, index) => (
                  <li key={index}>
                    <Collapsible 
                      open={openGoodFit === index}
                      onOpenChange={(open) => setOpenGoodFit(open ? index : null)}
                    >
                      <CollapsibleTrigger className="flex items-start gap-2.5 md:gap-3 w-full text-left group cursor-pointer py-2.5 md:py-2 min-h-[44px]">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-cta shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium flex-1 text-sm md:text-base leading-snug">{item.point}</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 text-text-muted transition-transform duration-200 shrink-0 mt-0.5",
                            openGoodFit === index && "rotate-180"
                          )} 
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        <p className="text-text-muted text-sm leading-relaxed pl-6 md:pl-8 pb-2 pt-1">
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
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <X className="h-4 w-4 md:h-5 md:w-5 text-red-500" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">Probably Not a Fit</h3>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {notFit.map((item, index) => (
                  <li key={index}>
                    <Collapsible 
                      open={openNotFit === index}
                      onOpenChange={(open) => setOpenNotFit(open ? index : null)}
                    >
                      <CollapsibleTrigger className="flex items-start gap-2.5 md:gap-3 w-full text-left group cursor-pointer py-2.5 md:py-2 min-h-[44px]">
                        <X className="h-4 w-4 md:h-5 md:w-5 text-red-400 shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium flex-1 text-sm md:text-base leading-snug">{item.point}</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 text-text-muted transition-transform duration-200 shrink-0 mt-0.5",
                            openNotFit === index && "rotate-180"
                          )} 
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        <p className="text-text-muted text-sm leading-relaxed pl-6 md:pl-8 pb-2 pt-1">
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
              href="/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta group inline-flex items-center gap-2"
            >
              Let's Talk Partnership
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitQualifier;
