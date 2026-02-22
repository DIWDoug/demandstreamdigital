import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { getFAQPageSchema } from "@/lib/schema";
import StreamTexture from "@/components/StreamTexture";

export const homepageFAQs = [
  {
    question: "How does marketing for plumbing companies work?",
    answer: "We start with a strategy call to understand your business, service area, and goals. From there, we build a custom marketing plan and handle execution: SEO, Google Maps, paid ads, reputation management. You focus on running your business and dispatching techs."
  },
  {
    question: "What is the best marketing strategy for HVAC companies?",
    answer: "The best HVAC marketing strategy combines local SEO, Google Maps optimization, and paid advertising, aligned to seasonal demand patterns. We engineer campaigns around peak cooling and heating seasons, shoulder months, and technician capacity to maximize booked jobs year-round."
  },
  {
    question: "How long does HVAC SEO take?",
    answer: "Paid ads can start generating calls within the first few weeks. SEO and reputation building typically take 3–6 months to show significant momentum. We set realistic expectations upfront so there are no surprises."
  },
  {
    question: "How much does plumbing marketing cost?",
    answer: "We scope work based on your market, competition, and goals, then price transparently. Most plumbing and HVAC companies invest between $2,000–$8,000/month depending on services and market size. You always know exactly what's included before we start."
  },
  {
    question: "Do you offer exclusive service areas?",
    answer: "Yes. We limit the number of clients we take on per market to avoid conflicts. When you partner with us, we're fully invested in your growth, not splitting attention between you and a competitor across town."
  },
  {
    question: "How is this different from other marketing companies?",
    answer: "We only work with plumbing and HVAC companies. That means every campaign, every keyword, and every ad is built around what actually drives calls in your industry. No generic templates. No rotating freelancers."
  },
  {
    question: "What size companies do you typically work with?",
    answer: "We work with plumbing and HVAC companies of all sizes, from owner-operators to multi-truck operations. Our sweet spot is businesses doing $25k+ in monthly revenue that are ready to invest in consistent growth."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "We start with a 6-month agreement because meaningful SEO and marketing results take time to build. After that, we operate on rolling agreements with 30-day notice. This gives both sides stability and flexibility."
  },
  {
    question: "What happens if I want to pause or cancel?",
    answer: "We ask for 30 days notice so we can wrap up work properly and transition everything cleanly. No penalties, no hard feelings. Just professional courtesy."
  },
  {
    question: "Where is your team based?",
    answer: "Our leadership is based in Dallas, TX with team members across the U.S. This allows us to maintain high execution standards while keeping pricing sustainable for long-term partnerships."
  },
  {
    question: "What happens if something isn't working?",
    answer: "We review performance together during regular check-ins and adjust deliberately. If something needs to change, we surface it early and work through it together, not wait until it's a problem."
  }
];

export const getHomepageFAQSchema = () => getFAQPageSchema(homepageFAQs);

const FAQ = () => {
  const sectionRef = useScrollReveal();
  const faqs = homepageFAQs;

  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midpoint);
  const rightColumn = faqs.slice(midpoint);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 section-light reveal-section relative overflow-hidden">
      <StreamTexture variant="light" opacity={0.1} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              Common Questions from Trade Business Owners
            </h2>
            <p className="text-lg text-slate-600">
              Common questions from plumbing & HVAC business owners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Accordion type="single" collapsible className="space-y-4">
              {leftColumn.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-left-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:border-primary/30 transition-all duration-300 shadow-sm"
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

            <Accordion type="single" collapsible className="space-y-4">
              {rightColumn.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-right-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-6 data-[state=open]:border-primary/30 transition-all duration-300 shadow-sm"
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
