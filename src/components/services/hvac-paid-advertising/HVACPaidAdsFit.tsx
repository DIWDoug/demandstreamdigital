import { useState } from "react";
import { Check, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const goodFit = [
  { point: "You run an HVAC company with active dispatch and real service capacity, ideally 2 or more trucks", detail: "Paid ads drive call volume fast. Without dispatch and service capacity in place, the spend has nowhere to land." },
  { point: "You track booking rate or are willing to start before spend begins", detail: "Booking rate is the core metric. If it is not being measured today, we start there before any spend goes live." },
  { point: "You use ServiceTitan, Housecall Pro, or a similar CRM for job tracking", detail: "CRM data closes the loop between campaign spend and closed job revenue. It also surfaces which call types are actually profitable." },
  { point: "You want to report on cost per booked call, not impressions or clicks", detail: "We build reports around the numbers that show up on the dispatch board. Impressions and CTR do not." },
  { point: "You understand Google Ads campaigns require a 6-month minimum to measure correctly", detail: "Campaign learning cycles and seasonal variance both require time. Short-term evaluations produce incomplete data." },
  { point: "You have a verified, address-visible Google Business Profile with active reviews", detail: "GBP signals feed Quality Scores and LSA performance. A weak or unverified profile limits paid ad efficiency." }
];

const notFit = [
  { point: "You have no call tracking or booking rate visibility", detail: "Without call tracking, we cannot measure cost per booked call. That is the foundation every campaign decision rests on." },
  { point: "You have no dispatch control or consistent booking process", detail: "Paid ads generate calls. If answered calls are not converting to booked jobs, the spend has no path to ROI." },
  { point: "You are looking for the cheapest cost-per-lead regardless of call quality", detail: "Quality paid media management is an investment. Price-first decisions typically produce price-first results." },
  { point: "You expect top performance without a tracking foundation in place", detail: "Attribution integrity is a prerequisite. Running spend without it produces data that cannot be used for decisions." },
  { point: "You want to pause and restart spend based on monthly cash flow", detail: "Campaign learning cycles require consistent data. Irregular spend disrupts algorithm optimization and raises cost per lead." },
  { point: "You do not serve a physical service area with address-visible operations", detail: "Local paid advertising is built around service radius targeting. Without a physical service area, the model does not apply." }
];

const HVACPaidAdsFit = () => {
  const [openGood, setOpenGood] = useState<number | null>(null);
  const [openBad, setOpenBad] = useState<number | null>(null);

  return (
    <section id="fit" className="py-20 lg:py-28 bg-card border-y border-border scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-4">Selective Fit</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Is This the Right Fit for Your HVAC Company?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We work best with operators who have the dispatch capacity and tracking infrastructure in place to handle what search campaigns bring in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">

            <div className="bg-background rounded-2xl p-5 sm:p-6 md:p-8 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">This Could Work Well</h3>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {goodFit.map((item, i) => (
                  <li key={i}>
                    <Collapsible open={openGood === i} onOpenChange={(open) => setOpenGood(open ? i : null)}>
                      <CollapsibleTrigger className="flex items-start gap-2.5 md:gap-3 w-full text-left group cursor-pointer py-2.5 md:py-2 min-h-[44px]">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium flex-1 text-sm md:text-base leading-snug">{item.point}</span>
                        <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0 mt-0.5", openGood === i && "rotate-180")} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        <p className="text-muted-foreground text-sm leading-relaxed pl-6 md:pl-8 pb-2 pt-1">{item.detail}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background rounded-2xl p-5 sm:p-6 md:p-8 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <X className="h-4 w-4 md:h-5 md:w-5 text-red-500" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">Probably Not a Fit</h3>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {notFit.map((item, i) => (
                  <li key={i}>
                    <Collapsible open={openBad === i} onOpenChange={(open) => setOpenBad(open ? i : null)}>
                      <CollapsibleTrigger className="flex items-start gap-2.5 md:gap-3 w-full text-left group cursor-pointer py-2.5 md:py-2 min-h-[44px]">
                        <X className="h-4 w-4 md:h-5 md:w-5 text-red-400 shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium flex-1 text-sm md:text-base leading-snug">{item.point}</span>
                        <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0 mt-0.5", openBad === i && "rotate-180")} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                        <p className="text-muted-foreground text-sm leading-relaxed pl-6 md:pl-8 pb-2 pt-1">{item.detail}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 btn-cta group">
              Claim Your Territory Today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HVACPaidAdsFit;
