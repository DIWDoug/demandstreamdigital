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
    question: "How much does plumbing marketing cost?",
    answer: "Most plumbing and HVAC companies invest between $2,000 and $8,000 per month in digital marketing, depending on their market size, competition level, and growth goals. That range typically covers a combination of local SEO, Google Ads, Google Maps optimization, and reputation management. We scope every engagement based on your specific service area and competitive landscape, not a one-size-fits-all package. During our strategy call, we'll walk through exactly what's included, what results to expect, and how we measure ROI so you know where every dollar goes before we start."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "We start with a 6-month agreement because meaningful SEO and marketing results take time to build. After that, we operate on rolling agreements with 30-day notice. This gives both sides stability and flexibility."
  },
  {
    question: "What happens if something isn't working?",
    answer: "We review performance together during regular check-ins and adjust deliberately. If something needs to change, we surface it early and work through it together, not wait until it's a problem."
  },
  {
    question: "How is this different from other marketing companies?",
    answer: "We only work with plumbing and HVAC companies — that's it. Every keyword strategy, ad campaign, landing page, and content piece is built specifically for how homeowners search for plumbing and HVAC services. We don't rotate between industries or apply generic templates. Our team understands trade-specific challenges like seasonal demand fluctuations, dispatcher capacity, EPA compliance language, and high-ticket service line positioning. That depth of focus means faster results, fewer wasted dollars, and a marketing partner who actually understands your business model."
  },
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
    answer: "HVAC SEO is a longer-term investment that typically takes 3 to 6 months to show significant traction, though some improvements, like Google Business Profile optimization and on-page fixes, can produce gains within the first 30 to 60 days. The timeline depends on your market's competitiveness, the current state of your website, and how established your online presence is. Paid advertising (Google Ads and Local Services Ads) can start generating calls within the first few weeks while SEO builds momentum. We set realistic expectations during our strategy call so you know exactly what to expect at each stage of the engagement."
  },
  {
    question: "What size companies do you typically work with?",
    answer: "We work with plumbing and HVAC companies of all sizes, from owner-operators to multi-truck operations. Our sweet spot is businesses doing $25k+ in monthly revenue that are ready to invest in consistent growth."
  },
  {
    question: "Do you offer exclusive service areas?",
    answer: "Yes. Market exclusivity is a core part of how we operate. We limit the number of clients we take on in each geographic area to make sure there's zero conflict of interest. When you partner with DemandStream Digital, we're fully invested in helping you own your local market, not splitting our attention between you and a competitor across town. Your SEO strategy, ad targeting, and content development are all built to give you a competitive edge, not shared with another company fighting for the same keywords and customers. Once a market is taken, it's taken."
  },
  {
    question: "What happens if I want to pause or cancel?",
    answer: "During the initial six-month engagement, we ask that you stay committed so we can build real momentum. After six months, we move to a rolling agreement with 30 days notice. No penalties, no hard feelings. Just professional courtesy."
  },
  {
    question: "What is plumbing SEO?",
    answer: "Plumbing SEO is the process of improving your website, Google Business Profile, and online presence so your plumbing company ranks higher in local search results. When homeowners search for terms like 'plumber near me' or 'emergency plumber in [city],' SEO helps your business appear at the top, driving more calls and booked jobs."
  },
  {
    question: "What is HVAC SEO?",
    answer: "HVAC SEO focuses on improving your heating and cooling company's visibility in local search results. This includes targeting keywords like 'AC repair near me,' 'furnace installation [city],' and 'HVAC company near me.' A strong HVAC SEO strategy combines on-page improvements, Google Maps visibility, reviews, and local content to generate consistent leads year-round."
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
             <p className="text-sm font-semibold uppercase tracking-wider text-accent-blue mb-3">FAQs</p>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
               Questions Contractors Ask
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
