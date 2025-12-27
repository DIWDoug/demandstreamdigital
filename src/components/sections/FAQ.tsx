import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does white-label fulfillment work?",
    answer: "We operate entirely behind the scenes. You maintain the client relationship, set pricing, and own communication. We handle execution under your brand—clients never know we exist."
  },
  {
    question: "What's the onboarding process like?",
    answer: "Onboarding typically takes 1-2 weeks. We'll gather access credentials, review current campaigns or profiles, and align on expectations. From there, we follow structured workflows with predictable delivery cycles."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "No. We don't require long-term contracts—we work on a month-to-month basis. However, we do have a strict 30-day notice policy. Our retention comes from results, not lock-in agreements."
  },
  {
    question: "How do you handle reporting?",
    answer: "We provide white-labeled reports you can share directly with clients. Reports are clear, focused on outcomes, and designed to support your client conversations—not overwhelm them."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We focus on local service businesses—legal, medical, home services, and similar verticals. Our strategies are built for location-based visibility and lead generation."
  },
  {
    question: "Can I start with just one service?",
    answer: "Absolutely. Many partners start with Local SEO or Google Ads, then expand as trust builds. There's no minimum service requirement."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 lg:py-32 section-light">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg">
              Common questions from agency partners.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:border-[hsl(224,60%,55%)]/30 transition-all duration-300 shadow-sm"
              >
                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
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

export default FAQ;
