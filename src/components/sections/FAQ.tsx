import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const FAQ = () => {
  const sectionRef = useScrollReveal();
  const faqs = [
    {
      question: "How does a white-label partnership with Dialed-In Web work?",
      answer: "We operate as a fulfillment partner, not a task vendor. Scope, cadence, and responsibilities are defined upfront and executed independently of day-to-day agency shifts. The relationship is built around consistency, not constant adjustment."
    },
    {
      question: "Who is this not a fit for?",
      answer: "This is not for agencies looking to outsource tasks, rent headcount, or absorb rapid client volume. We work best with small, disciplined agencies managing a focused client roster. If your model relies on constant pivots or scale at all costs, this won't be a fit."
    },
    {
      question: "Are you a staffing company or an outsourced team?",
      answer: "No. We are not a staffing company disguised as an agency. We deliver marketing execution with standards, systems, and accountability. We don't place people. We own fulfillment."
    },
    {
      question: "What size agencies do you typically work with?",
      answer: "We partner with agencies operating intentionally, not at mass scale. Most of our partners manage between 1 and 20 active clients at a time. This allows us to maintain scope discipline and protect execution quality on both sides."
    },
    {
      question: "Where is your team based?",
      answer: "Our team is globally distributed by design. We operate across the United States, Portugal, South Africa, Mexico, the Philippines, Nigeria, and Pakistan, with leadership and client success based in the U.S. and Europe. This structure allows us to maintain execution standards and deliver custom fulfillment without forcing an unsustainable, U.S.-only cost model."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "We operate on rolling agreements with a defined 30-day notice period. This structure supports proper planning, resourcing, and execution stability. It's designed for healthy partnerships, not lock-ins."
    },
    {
      question: "What happens if one of our clients cancels mid-engagement?",
      answer: "Our fulfillment operates independently of your client contracts. If a client disengages without proper notice, the agreed 30-day fulfillment period still applies. This policy protects execution quality and prevents reactive resourcing decisions."
    },
    {
      question: "Can we make mid-month scope changes or pivots?",
      answer: "We don't pivot fulfillment mid-cycle based on changing priorities. Work is planned and resourced on a defined monthly cadence, independent of internal agency shifts. Changes are reviewed and applied in the next planning window."
    },
    {
      question: "How do you scope and price fulfillment work?",
      answer: "All work is scoped intentionally before execution begins. We don't absorb new requests informally or expand scope by default. This keeps expectations clear and delivery consistent."
    },
    {
      question: "What happens if something isn't working?",
      answer: "Performance is reviewed during structured check-ins, not in reaction to short-term noise. Adjustments are made deliberately, within scope and planning cadence. We don't chase panic fixes or constant resets."
    }
  ];

  // Split FAQs into two columns
  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midpoint);
  const rightColumn = faqs.slice(midpoint);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 section-light reveal-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg">
              Common questions from agency partners.
            </p>
          </div>

          {/* FAQ Accordion - Two Columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <Accordion type="single" collapsible className="space-y-4">
              {leftColumn.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-left-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:border-[hsl(224,60%,55%)]/30 transition-all duration-300 shadow-sm"
                >
                  <AccordionTrigger className="text-base font-medium text-gray-900 hover:no-underline py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Right Column */}
            <Accordion type="single" collapsible className="space-y-4">
              {rightColumn.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-right-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:border-[hsl(224,60%,55%)]/30 transition-all duration-300 shadow-sm"
                >
                  <AccordionTrigger className="text-base font-medium text-gray-900 hover:no-underline py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
