import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const FAQ = () => {
  const sectionRef = useScrollReveal();
  const faqs = [
    {
      question: "What actually drives local search rankings?",
      answer: "Google evaluates three core factors: relevance (how well your client matches search intent), distance (proximity to the searcher), and prominence (online authority through reviews, citations, and backlinks). We optimize across all three pillars to maximize visibility in both the Local Pack and organic results."
    },
    {
      question: "What's the difference between the Local Pack and organic results?",
      answer: "The Local Pack (map 3-pack) is powered primarily by Google Business Profile optimization, while organic results depend on website authority and on-page SEO. Most local businesses need both—the Pack drives immediate calls, while organic captures research-phase traffic. We build strategies that dominate both."
    },
    {
      question: "How important is NAP consistency really?",
      answer: "Critical. Name, Address, and Phone number consistency across directories, social profiles, and your client's website is a foundational trust signal. Inconsistencies confuse both Google and potential customers. We audit and correct NAP data across structured citations (Yelp, Yellow Pages) and unstructured mentions (blogs, news articles)."
    },
    {
      question: "How do reviews impact local rankings?",
      answer: "Reviews influence both rankings and conversions. Google considers review quantity, velocity, star rating, and keyword mentions. Equally important: response rate. Businesses that actively respond to reviews signal trustworthiness. We help establish review generation systems and response workflows."
    },
    {
      question: "What role do local backlinks play?",
      answer: "Local backlinks signal geographic relevance to Google. Links from local news sites, chambers of commerce, sponsorships, and complementary local businesses carry significant weight. We build geo-relevant link profiles through community partnerships and local PR opportunities."
    },
    {
      question: "How does white-label fulfillment work?",
      answer: (
        <>
          We operate entirely behind the scenes. You maintain the client relationship, set pricing, and own communication. We handle execution under your brand.{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline decoration-dotted cursor-help">Clients never know we exist</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>We're like marketing ninjas. But with fewer throwing stars. 🥷</p>
            </TooltipContent>
          </Tooltip>
          .
        </>
      )
    },
    {
      question: "Do you require long-term contracts?",
      answer: (
        <>
          No. We work on a month-to-month basis with a{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline decoration-dotted cursor-help">30-day notice policy</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>We don't believe in holding people hostage. Bad for morale. 🔓</p>
            </TooltipContent>
          </Tooltip>
          . Our retention comes from results, not lock-in agreements.
        </>
      )
    },
    {
      question: "How do you handle multi-location businesses?",
      answer: "Each location gets its own optimized Google Business Profile, location-specific landing pages, and targeted citation building. We create scalable systems that maintain consistency while allowing for location-specific customization—essential for franchise and multi-location clients."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We focus on local service businesses: legal, medical, home services, and similar verticals. Our strategies are built for location-based visibility and lead generation where proximity and trust signals matter most."
    },
    {
      question: "How do you report on local SEO performance?",
      answer: "We provide white-labeled reports tracking Local Pack rankings, organic visibility, citation health, review metrics, and website traffic from local searches. Reports are designed for client conversations—clear outcomes, not vanity metrics."
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
