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
    question: "How quickly can you ramp up for new projects?",
    answer: "Fast. Our team is structured to scale with your needs—whether you land a large client or need extra hands on short notice. No lengthy onboarding or training delays on your end."
  },
  {
    question: "Is your pricing transparent?",
    answer: "Yes. We use flat-rate pricing with no hidden fees. You'll know exactly what you're paying upfront—no surprise charges for revisions, reporting, or additional requests."
  },
  {
    question: "How is quality guaranteed?",
    answer: "We use proven systems, structured workflows, and industry expertise built over years of local marketing execution. Clear communication and predictable delivery cycles keep accountability high."
  },
  {
    question: "When should I use white-label vs. hiring in-house?",
    answer: "White-label is ideal when you have unpredictable workloads, want to scale without overhead, or need specialized expertise immediately. It lets you say yes to more work without the commitment of full-time hires."
  },
  {
    question: "Who handles client communication?",
    answer: "You do. We stay completely invisible. All strategy discussions, updates, and reporting go through you—your clients never interact with us directly."
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
  },
  {
    question: "What makes you different from other white-label providers?",
    answer: "We're an agency built by marketers, not a staffing company. Our team has hands-on experience running campaigns, so we understand the nuances of client expectations and agency operations."
  }
];

const FAQ = () => {
  // Split FAQs into two columns
  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midpoint);
  const rightColumn = faqs.slice(midpoint);

  return (
    <section className="py-24 lg:py-32 section-light">
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
