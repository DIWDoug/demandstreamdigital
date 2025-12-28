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
    // Partnership-Focused Questions
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
      question: "How do you scope and price campaigns?",
      answer: "We don't use fixed packages. Every engagement starts with a discovery call to understand the client's market, competition, and goals. From there, we build a custom scope and price that protects your margins while delivering the right level of effort."
    },
    {
      question: "What's your communication process like?",
      answer: "You get direct access to your dedicated strategist via email and scheduled calls. We provide proactive updates, respond within one business day, and flag issues before they become problems. No ticket systems or support queues."
    },
    {
      question: "How do you handle reporting?",
      answer: "We provide white-labeled reports designed for client conversations. Clear outcomes, progress tracking, and next steps. Reports are ready for your client presentations with your branding, not ours."
    },
    {
      question: "What industries do you work with?",
      answer: "We focus on local service businesses: legal, medical, home services, automotive, real estate, and similar verticals. Our strategies are built for location-based visibility where proximity and trust signals matter most."
    },
    {
      question: "How long does it take to see results?",
      answer: "Initial improvements can happen within weeks. Meaningful ranking gains typically take 3-6 months depending on competition. We set realistic expectations upfront and provide monthly progress tracking so you can communicate timelines confidently."
    },
    {
      question: "What happens if something isn't working?",
      answer: "We monitor performance continuously and adjust strategy proactively. If results aren't tracking, we diagnose the issue, propose adjustments, and implement changes. You're never left wondering what's happening or why."
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
