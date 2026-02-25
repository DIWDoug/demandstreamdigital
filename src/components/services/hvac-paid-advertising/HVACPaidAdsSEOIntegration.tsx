import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const integrationRows = [
  {
    label: "SEO lowers blended cost per booked call",
    body: "Every organic HVAC call that books reduces the average acquisition cost across your paid budget."
  },
  {
    label: "Reviews improve Quality Score",
    body: "Google rewards advertisers with strong reputation signals. Better scores mean lower cost per click on the same keywords."
  },
  {
    label: "Paid and organic together build call preference",
    body: "Showing in both the Map Pack and paid results on the same search makes competitors less likely to get the call."
  },
  {
    label: "Retargeting captures organic visitors who did not book",
    body: "A homeowner who found you through HVAC SEO but did not call can be recaptured before they book with a competitor."
  },
  {
    label: "Revenue data improves both channels",
    body: "Closed job revenue tied to keyword source tells both SEO and paid campaigns which searches produce profitable work."
  }
];

const HVACPaidAdsSEOIntegration = () => {
  return (
    <section id="seo-paid" className="py-20 lg:py-28 bg-card border-y border-border scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Connection</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 max-w-2xl">
            HVAC SEO and Paid Advertising<br /> Together Control the Market
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                Paid advertising captures the call right now. SEO builds the authority that makes every call cheaper over time.
              </p>
              <p>
                When both run together, the blended cost per booked call drops. Organic traffic from HVAC SEO converts at a higher rate when your GBP reviews are strong and your Maps presence is active. Paid campaigns perform better when landing pages are built for HVAC search intent — not generic contractor pages.
              </p>
              <p>
                The data crossfeeds. Keywords that produce booked calls in paid campaigns inform which service pages to build organically. Review velocity from the reputation system improves paid ad Quality Scores. When every channel is connected, each one performs better than it would alone.
              </p>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-2">
                {integrationRows.map((row, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-border/60 rounded-lg overflow-hidden px-4"
                  >
                    <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline py-4">
                      {row.label}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-text-secondary leading-relaxed pb-4">
                      {row.body}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACPaidAdsSEOIntegration;
