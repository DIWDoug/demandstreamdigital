import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is white label inbound marketing?",
    answer: "White label inbound marketing is when an agency outsources the execution of digital marketing services—like SEO, paid media, email marketing, and content—to a fulfillment partner who delivers the work under the agency's brand. The agency maintains the client relationship while the fulfillment partner handles strategy and execution."
  },
  {
    question: "What services are included in your white label inbound marketing?",
    answer: "Our white label inbound marketing includes six core service areas: Local SEO (on-page, technical, content, links), Google Maps optimization, paid media (Google Ads and Meta ads), email marketing and automation, authority building (digital PR, citations, reviews), and comprehensive reporting. Each service can be engaged individually or as part of a coordinated system."
  },
  {
    question: "Can we start with a single service before committing to full inbound marketing?",
    answer: "Yes. Many agency partners begin with a single service—often Local SEO or Google Ads—to establish trust and working rhythm. Standalone services are scoped intentionally and executed with the same standards as full white label inbound marketing partnerships."
  },
  {
    question: "How does your white label fulfillment pricing work?",
    answer: "We price based on scope and hours, not rigid packages. A typical full-service white label inbound marketing engagement runs $2,000-$5,000/month depending on the number of channels activated and client complexity. We operate at approximately $50-60/hour for execution."
  },
  {
    question: "How do scope changes work mid-campaign?",
    answer: "Scope is reviewed during monthly planning. Mid-cycle changes are not introduced without proper planning. This protects execution quality and prevents reactive resourcing decisions that compromise results."
  },
  {
    question: "Are you a staffing company or a white label execution partner?",
    answer: "We are a white label execution partner, not a staffing agency. We do not place people or rent headcount. We own fulfillment end-to-end with documented standards, proven systems, and accountability for results."
  },
  {
    question: "What makes your white label inbound marketing different?",
    answer: "We execute inbound marketing as a coordinated system, not siloed services. Visibility, authority, paid media, conversion infrastructure, measurement, and retention all work together. This systems approach delivers better results than disconnected tactics."
  },
  {
    question: "Do you require long-term contracts for white label partnerships?",
    answer: "We operate on rolling agreements with a defined 30-day notice period. This supports proper planning and execution stability—designed for healthy partnerships, not lock-ins. Most partners stay for years because the work performs."
  }
];

// Generate FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const ServicesFAQ = () => {
  return (
    <section className="py-20 lg:py-28 section-light relative">
      {/* Gradient transition from dark section */}
      <div className="section-divider absolute top-0" />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              White Label Inbound Marketing FAQ
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border border-gray-200 rounded-xl px-6 bg-white data-[state=open]:border-cta/30 shadow-sm"
              >
                <AccordionTrigger className="text-left text-gray-900 hover:no-underline py-5 text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm pb-5 leading-relaxed">
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
