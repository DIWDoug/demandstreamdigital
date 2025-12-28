import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can we start with a single service?",
    answer: "Yes. Some partners begin with a single service to establish trust and working rhythm. Standalone services are scoped intentionally and executed with the same standards as full partnerships."
  },
  {
    question: "How do scope changes work?",
    answer: "Scope is reviewed during monthly planning. Mid-cycle changes are not introduced. This protects execution quality and prevents reactive resourcing decisions."
  },
  {
    question: "What happens if one of our clients cancels?",
    answer: "Our fulfillment operates independently of your client contracts. If a client disengages without proper notice, the agreed 30-day fulfillment period still applies."
  },
  {
    question: "Are you a staffing company or an execution partner?",
    answer: "We're an execution partner. We don't place people or rent headcount. We own fulfillment with standards, systems, and accountability."
  },
  {
    question: "Where is your team based?",
    answer: "Our team is globally distributed by design, with leadership and client success based in the U.S. and Europe. This allows us to maintain standards without forcing an unsustainable cost model."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "We operate on rolling agreements with a defined 30-day notice period. This supports proper planning and execution stability—designed for healthy partnerships, not lock-ins."
  }
];

const ServicesFAQ = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Services FAQ
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-border/40 rounded-xl px-6 bg-surface-elevated data-[state=open]:border-accent-blue/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary text-sm pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
