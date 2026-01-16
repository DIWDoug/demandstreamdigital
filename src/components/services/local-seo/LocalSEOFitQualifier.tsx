import { useState } from "react";
import { Check, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const LocalSEOFitQualifier = () => {
  const [openGoodFit, setOpenGoodFit] = useState<number | null>(null);
  const [openNotFit, setOpenNotFit] = useState<number | null>(null);

  const goodFit = [
    {
      point: "Your clients have a physical address on their Google Business Profile",
      detail: "We specialize in local SEO for businesses with verified, address-visible GBP listings. This includes storefronts, offices, and service-area businesses that display their address. We do not work with address-hidden or service-area-only profiles."
    },
    {
      point: "You serve clients in competitive local markets",
      detail: "Local SEO delivers the most value when there is real competition for rankings. If your clients operate in metros or competitive suburbs where multiple businesses fight for the same keywords, our approach makes the difference."
    },
    {
      point: "You want measurable results, not just activity reports",
      detail: "We focus on outcomes: improved rankings, increased organic traffic, and more qualified leads. Monthly reports show what moved, not just what we did. If metrics are not improving, we adjust the strategy."
    },
    {
      point: "You understand that competitive markets require time",
      detail: "A plumber in a small town may see movement in weeks. A personal injury attorney in Los Angeles takes months. We set realistic timelines based on actual market data during discovery, not optimistic guesses."
    },
    {
      point: "Your clients can provide necessary access and feedback",
      detail: "Effective local SEO requires access to GBP, website CMS, and occasionally Google Analytics. We also need timely feedback on content drafts and occasional input for review generation campaigns."
    },
    {
      point: "You value long-term client retention over quick wins",
      detail: "Our approach is built for sustainable rankings that compound over time. If your goal is keeping clients for years rather than churning through new ones, this partnership makes sense."
    }
  ];

  const notFit = [
    {
      point: "Your clients only have service-area profiles without addresses",
      detail: "Address-hidden GBP listings (true service-area businesses) compete differently and often require strategies outside our core specialty. We focus on businesses with visible physical locations."
    },
    {
      point: "You need e-commerce or national SEO",
      detail: "Our expertise is local search. If your clients sell products online, target national audiences, or need enterprise-level SEO, we are not the right fit."
    },
    {
      point: "You are primarily comparing vendors on price",
      detail: "Quality local SEO has real costs. If budget is the primary factor and you are looking for the cheapest option, the math will not work for either of us."
    },
    {
      point: "Short-term ranking expectations drive poor outcomes",
      detail: "Quick wins occasionally happen, but setting that expectation creates problems. Sustainable local SEO takes three to six months to show meaningful, lasting results."
    },
    {
      point: "Client participation is not available",
      detail: "We handle execution, but local SEO cannot happen in a vacuum. If clients cannot provide GBP access, approve content, or participate in review campaigns, results will suffer."
    },
    {
      point: "You want to resell without understanding the work",
      detail: "We operate white-label, but you still need enough knowledge to set expectations and answer basic client questions. If you want a completely hands-off resale, this is not the right partnership."
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
              We Are Selective About Who We Work With
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Fit matters more than volume. This is who gets results, and who should look elsewhere.
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
                <h3 className="text-lg md:text-xl font-semibold text-foreground">This Partnership Works When</h3>
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
                <h3 className="text-lg md:text-xl font-semibold text-foreground">This Is Not Built For</h3>
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
            <Link 
              to="/contact" 
              className="btn-cta group inline-flex items-center gap-2"
            >
              Let's Discuss Your Clients
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOFitQualifier;
