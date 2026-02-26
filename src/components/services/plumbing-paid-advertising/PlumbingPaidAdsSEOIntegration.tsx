import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const integrationRows = [
  {
    label: "SEO lowers blended cost per booked call",
    body: "Every organic call that books reduces the average acquisition cost across your paid budget."
  },
  {
    label: "Reviews improve Quality Score",
    body: "Google rewards advertisers with strong reputation signals. Better scores mean lower cost per click."
  },
  {
    label: "Paid and organic together build trust",
    body: "Showing in both Map Pack and paid results on the same search increases call preference over competitors showing in only one."
  },
  {
    label: "Retargeting supports organic visitors",
    body: "A homeowner who found you through SEO but did not call can be recaptured through paid retargeting before they book with a competitor."
  },
  {
    label: "Revenue data improves both channels",
    body: "Closed job revenue tied to keyword source tells both SEO and paid campaigns which searches actually produce profitable work."
  }
];

const PlumbingPaidAdsSEOIntegration = () => {
  return (
    <section id="seo-paid" className="py-20 lg:py-28 bg-card border-y border-border scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Connection</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Search Rankings and Paid Ads Together. The Market Stays Yours.
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left — body paragraphs */}
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                Pay-per-click captures the call right now. Organic search builds the authority that makes every call cheaper over time.
              </p>
              <p>
                When both run together, the blended cost per booked call drops. Organic traffic converts at a higher rate when your reviews are strong and your Google Business Profile is active. Google Ads campaigns perform better when the landing pages behind them are built for intent, not recycled from a generic site.
              </p>
              <p>
                The data crossfeeds. Keywords that drive booked calls in paid campaigns inform which pages to build organically. Review velocity from the reputation system improves Quality Scores. Every channel makes the others more efficient.
              </p>
            </div>

            {/* Right — accordion */}
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

export default PlumbingPaidAdsSEOIntegration;
