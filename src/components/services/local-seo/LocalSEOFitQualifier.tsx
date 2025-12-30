import { useState } from "react";
import { Check, X, ArrowRight, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const LocalSEOFitQualifier = () => {
  const [openGoodFit, setOpenGoodFit] = useState<number | null>(null);
  const [openNotFit, setOpenNotFit] = useState<number | null>(null);

  const goodFit = [
    {
      point: "Your clients are service-area businesses",
      detail: "Local SEO works best for businesses serving geographic areas: contractors, medical practices, law firms, restaurants, and similar service providers."
    },
    {
      point: "You need multi-location expertise",
      detail: "We've handled everything from single locations to 100+ location franchises. Scaling local SEO without duplicate content issues requires specific processes."
    },
    {
      point: "You want rankings, not just reports",
      detail: "We focus on outcomes. Rankings, traffic, and leads matter more than vanity metrics and activity logs."
    },
    {
      point: "You understand competitive markets take time",
      detail: "A plumber in a small town may see results in weeks. A personal injury lawyer in LA takes months. We set realistic timelines based on actual market data."
    },
    {
      point: "Client cooperation is available",
      detail: "Review generation, GBP access, and content approvals require client participation. We can't do local SEO in a vacuum."
    }
  ];

  const notFit = [
    {
      point: "You need e-commerce or national SEO",
      detail: "Our specialization is local. If your clients sell products online or target national audiences, we're not the right fit."
    },
    {
      point: "You're selling SEO as a loss leader",
      detail: "Quality local SEO has real costs. If you're pricing below market to win deals, the math won't work for either of us."
    },
    {
      point: "You expect rankings in 30 days",
      detail: "Quick wins sometimes happen, but setting that expectation creates problems. Sustainable local SEO takes 3-6 months to show meaningful results."
    },
    {
      point: "You want to white-label without learning",
      detail: "We handle fulfillment, but you still need to understand enough to have client conversations and set expectations."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              The Right Fit
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Is White-Label Local SEO Right for You?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Local SEO is our specialty. Here's who we work best with.
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
                <h3 className="text-lg md:text-xl font-semibold text-foreground">Ideal for Local SEO</h3>
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
              href="#contact" 
              className="btn-cta group inline-flex items-center gap-2"
            >
              Let's Discuss Your Clients
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOFitQualifier;
