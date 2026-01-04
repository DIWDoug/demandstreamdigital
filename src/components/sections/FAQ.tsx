import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { getFAQPageSchema } from "@/lib/schema";

// Export FAQs for schema usage
export const homepageFAQs = [
  {
    question: "How does a white-label partnership with Dialed-In Web work?",
    answer: "We operate as a fulfillment partner with defined scope, clear communication rhythms, and consistent delivery. You maintain full client ownership while we handle execution behind the scenes."
  },
  {
    question: "Who is this the best fit for?",
    answer: "Agencies that value trust, clarity, and consistent execution. Most of our partners manage between 5 and 20 active clients and prioritize client retention over rapid volume growth."
  },
  {
    question: "Do I have to buy all the services together or can I buy them individually?",
    answer: "You can engage services individually based on what your clients need. Local SEO, GBP optimization, paid media, authority building, email marketing, and reporting can all be scoped separately. That said, they work best together and we often recommend combining services for stronger, more durable results."
  },
  {
    question: "Are you a staffing company or an outsourced team?",
    answer: "Neither. We deliver marketing execution with standards, systems, and accountability. You get a dedicated team that understands your clients, not rotating contractors."
  },
  {
    question: "What size agencies do you typically work with?",
    answer: "We partner with agencies operating intentionally, typically managing 1 to 20 active clients. This allows us to maintain quality and build real working relationships on both sides."
  },
  {
    question: "Where is your team based?",
    answer: "Our team is globally distributed with leadership based in the U.S. This structure allows us to maintain execution standards while offering sustainable pricing for long-term partnerships."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "We start with a 6-month agreement because meaningful results take time to build. After that, we operate on rolling agreements with 30-day notice. This gives both sides stability and flexibility."
  },
  {
    question: "What happens if one of our clients cancels mid-engagement?",
    answer: "We understand that client relationships change. We ask for 30 days notice so we can wrap up work properly and transition cleanly. No penalties, just professional courtesy."
  },
  {
    question: "Can we adjust scope mid-month?",
    answer: "We plan work monthly to ensure quality delivery. For changes, we discuss timing and fit them into the next planning window. This keeps expectations clear for everyone."
  },
  {
    question: "How do you scope and price fulfillment work?",
    answer: "We scope work upfront based on the clients market and goals, then price transparently. You always know what is included before work begins, which protects your margins and client relationships."
  },
  {
    question: "What happens if something is not working?",
    answer: "We review performance together during regular check-ins and adjust deliberately. If something needs to change, we surface it early and work through it together."
  }
];

// Generate FAQ schema for use in page head
export const getHomepageFAQSchema = () => getFAQPageSchema(homepageFAQs);

const FAQ = () => {
  const sectionRef = useScrollReveal();
  const faqs = homepageFAQs;

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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
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
