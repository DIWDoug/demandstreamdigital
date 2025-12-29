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
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              Before We Talk
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Is This the Right Fit?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              We're selective about who we work with, and you should be too. Here's a quick way to tell if this partnership makes sense for both of us.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Good Fit */}
            <div className="bg-surface-elevated rounded-2xl p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center">
                  <Check className="h-5 w-5 text-cta" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">This Could Work Well</h3>
              </div>
              <ul className="space-y-3">
                {goodFit.map((item, index) => (
                  <li key={index}>
                    <Collapsible 
                      open={openGoodFit === index}
                      onOpenChange={(open) => setOpenGoodFit(open ? index : null)}
                    >
                      <CollapsibleTrigger className="flex items-center gap-3 w-full text-left group cursor-pointer py-2">
                        <Check className="h-5 w-5 text-cta shrink-0" />
                        <span className="text-foreground font-medium flex-1">{item.point}</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 text-text-muted transition-transform duration-200",
                            openGoodFit === index && "rotate-180"
                          )} 
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        <p className="text-text-muted text-sm leading-relaxed pl-8 pb-2 pt-1">
                          {item.detail}
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="bg-surface-elevated rounded-2xl p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Probably Not a Fit</h3>
              </div>
              <ul className="space-y-3">
                {notFit.map((item, index) => (
                  <li key={index}>
                    <Collapsible 
                      open={openNotFit === index}
                      onOpenChange={(open) => setOpenNotFit(open ? index : null)}
                    >
                      <CollapsibleTrigger className="flex items-center gap-3 w-full text-left group cursor-pointer py-2">
                        <X className="h-5 w-5 text-red-400 shrink-0" />
                        <span className="text-foreground font-medium flex-1">{item.point}</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 text-text-muted transition-transform duration-200",
                            openNotFit === index && "rotate-180"
                          )} 
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        <p className="text-text-muted text-sm leading-relaxed pl-8 pb-2 pt-1">
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
              Let's See If We're a Match
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitQualifier;
