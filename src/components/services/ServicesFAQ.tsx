import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can we activate only one service area?",
    answer: "Service areas aren't activated in isolation—they're coordinated based on scope. If your client only needs one category of execution, we'll scope and plan accordingly. But activation is always defined by what the work requires, not by selecting from a menu."
  },
  {
    question: "How do scope changes work?",
    answer: "Scope changes are reviewed during structured planning windows, not reactively. If priorities shift mid-cycle, we acknowledge the request and evaluate it for the next planning period. This protects execution quality and prevents constant resets."
  },
  {
    question: "What does coordinated fulfillment mean here?",
    answer: "It means work across channels is planned and executed together, not as isolated tasks. Local SEO, Maps optimization, paid media, and other activities inform each other. This prevents siloed execution and keeps strategy coherent."
  },
  {
    question: "What happens if one of our clients cancels?",
    answer: "Our fulfillment operates independently of your client contracts. If a client disengages without proper notice, the agreed 30-day fulfillment period still applies. This protects execution quality and prevents reactive resourcing decisions."
  },
  {
    question: "Are you a staffing company or an execution partner?",
    answer: "We're an execution partner. We don't place people or rent headcount. We own fulfillment with standards, systems, and accountability. The work is ours to deliver—not yours to manage."
  },
  {
    question: "Where is your team based?",
    answer: "Our team is globally distributed by design, with leadership and client success based in the U.S. and Europe. This structure allows us to maintain execution standards without forcing an unsustainable, single-region cost model."
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
