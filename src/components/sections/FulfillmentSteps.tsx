import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  {
    title: "Discovery & Alignment",
    content: "We start with a deep-dive conversation to understand your agency's goals, client base, and fulfillment needs. No cookie-cutter approaches. Just clarity."
  },
  {
    title: "Scope & Pricing",
    content: "Receive transparent, agency-friendly pricing that protects your margins. We map out deliverables and set clear expectations upfront."
  },
  {
    title: "Seamless Onboarding",
    content: "We provide white-label onboarding materials so your clients never know we exist. Your brand, your process, zero friction."
  },
  {
    title: "Execute with Precision",
    content: "Our team handles the heavy lifting: campaigns, optimizations, and reporting. You focus on growing your agency while we deliver."
  },
  {
    title: "Deliver & Communicate",
    content: "You receive white-labeled deliverables ready for client presentation. Proactive updates keep you informed every step of the way."
  }
];

const FulfillmentSteps = () => {
  return (
    <section className="py-16 lg:py-24 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold uppercase tracking-wider mb-4">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fulfillment in <span className="text-cta">5 Clear Steps</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A predictable process designed for agencies that value control and client delight.
            </p>
          </div>

          {/* Steps Accordion */}
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {steps.map((step, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background/50 border border-border rounded-lg px-5 data-[state=open]:border-cta/30 data-[state=open]:shadow-lg data-[state=open]:shadow-cta/10 transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-medium text-foreground hover:no-underline py-4">
                  <div className="flex items-center gap-4">
                    <span className="step-badge">{index + 1}</span>
                    <span>{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary pb-4 pl-14">
                  {step.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FulfillmentSteps;
