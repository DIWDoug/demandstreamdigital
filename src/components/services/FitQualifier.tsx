import { useState } from "react";
import { Check, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import { cn } from "@/lib/utils";

const FitQualifier = () => {
  const [openGoodFit, setOpenGoodFit] = useState<number | null>(null);
  const [openNotFit, setOpenNotFit] = useState<number | null>(null);

  const goodFit = [
    {
      point: "You run a plumbing or HVAC company with annual revenue greater than $500,000",
      detail: "We work best with established shops doing over half a million a year. You've got the trucks and techs — you need a marketing partner who understands the trades."
    },
    {
      point: "You're tired of marketing agencies that don't get your business",
      detail: "Most agencies treat you like every other client. We specialize in plumbing and HVAC — we know your seasonality, your customers, and what actually drives calls."
    },
    {
      point: "You want more calls, not just 'impressions' and 'clicks'",
      detail: "We measure what matters: phone calls, booked jobs, and revenue. If it's not driving real business, we change the approach."
    },
    {
      point: "You understand marketing is an investment, not an expense",
      detail: "The best plumbing and HVAC companies treat marketing like a new truck — it pays for itself many times over when done right."
    },
    {
      point: "You're ready to dominate your local market",
      detail: "Whether you're looking to own your city on Google Maps, outrank competitors, or fill your schedule year-round, we build the system to get you there."
    }
  ];

  const notFit = [
    {
      point: "You're just looking for the cheapest option",
      detail: "Bargain marketing gets bargain results. If price is your only consideration, there are cheaper providers — but you'll get what you pay for."
    },
    {
      point: "You want overnight results",
      detail: "Real local dominance takes 3-6 months to build. If someone promises you page-one rankings in 30 days, they're either lying or using tactics that'll get you penalized."
    },
    {
      point: "You're not willing to answer the phone",
      detail: "We can drive all the calls in the world, but if they go to voicemail or get mishandled, the marketing won't matter. You need a team ready to convert leads."
    },
    {
      point: "You don't serve a physical location or service area",
      detail: "Our strategies are built for local businesses with a Google Business Profile and a defined service territory. National or online-only businesses aren't our specialty."
    },
    {
      point: "You've given up on marketing entirely",
      detail: "We need partners who are committed to growth. If you've mentally checked out on marketing, even the best strategy won't save the investment."
    }
  ];

  return (
    <section id="fit-qualifier" className="py-20 lg:py-28 bg-card border-y border-border relative overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
              Straight Talk
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Are We the Right Fit for Your Shop?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We work with established plumbing and HVAC companies that understand marketing must align with booking rate, close rate, technician utilization, and seasonality — not just traffic.
            </p>
          </div>

          {/* Two Column Layout */}
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
                    <Collapsible 
                      open={openGoodFit === index}
                      onOpenChange={(open) => setOpenGoodFit(open ? index : null)}
                    >
                      <CollapsibleTrigger className="flex items-start gap-2.5 md:gap-3 w-full text-left group cursor-pointer py-2.5 md:py-2 min-h-[44px]">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium flex-1 text-sm md:text-base leading-snug">{item.point}</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0 mt-0.5",
                            openGoodFit === index && "rotate-180"
                          )} 
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        <p className="text-muted-foreground text-sm leading-relaxed pl-6 md:pl-8 pb-2 pt-1">
                          {item.detail}
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
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
                    <Collapsible 
                      open={openNotFit === index}
                      onOpenChange={(open) => setOpenNotFit(open ? index : null)}
                    >
                      <CollapsibleTrigger className="flex items-start gap-2.5 md:gap-3 w-full text-left group cursor-pointer py-2.5 md:py-2 min-h-[44px]">
                        <X className="h-4 w-4 md:h-5 md:w-5 text-red-400 shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium flex-1 text-sm md:text-base leading-snug">{item.point}</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0 mt-0.5",
                            openNotFit === index && "rotate-180"
                          )} 
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        <p className="text-muted-foreground text-sm leading-relaxed pl-6 md:pl-8 pb-2 pt-1">
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
            <Link 
              to="/contact" 
              className="btn-cta group inline-flex items-center gap-2"
            >
              Get Your Free Marketing Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitQualifier;
