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
    answer: "Scope is reviewed during monthly planning. Mid-cycle changes are not introduced."
  },
  {
    question: "What does custom fulfillment mean here?",
    answer: "Customization refers to strategy and prioritization, not unlimited requests or reactive changes."
  },
  {
    question: "What happens if a client cancels?",
    answer: "Fulfillment operates independently of client churn and follows the agreed notice period."
  },
  {
    question: "Are you staffing or execution?",
    answer: "We are an execution partner, not a staffing provider."
  },
  {
    question: "Where is your team based?",
    answer: "Our team is globally distributed to support quality execution and sustainable delivery."
  }
];

const ServicesFAQ = () => {
  return (
    <section className="py-16 lg:py-20 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-8">
            Questions About Services
          </h2>
          
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-border/30 rounded-lg px-4 bg-surface-elevated"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-4 text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary text-sm pb-4 leading-relaxed">
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
