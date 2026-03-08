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
    question: "What does a full-service marketing partnership look like for plumbing and HVAC companies?",
    answer: "We handle SEO, paid advertising, content marketing, email marketing, and reporting, all coordinated as one unified growth strategy. You focus on running your business while we drive calls, leads, and booked jobs through your marketing channels."
  },
  {
    question: "Why do plumbing and HVAC companies need specialized marketing?",
    answer: "Trade businesses compete differently than other industries. You need local visibility, Google Maps rankings, and lead generation that converts to booked service calls — not vanity metrics. Our strategies are built specifically around dispatch capacity, seasonality, and service area coverage."
  },
  {
    question: "How does your marketing approach help my business scale?",
    answer: "We remove the guesswork from marketing. With coordinated SEO, paid ads, and content, your business builds a predictable lead pipeline. As visibility grows, you generate more calls without proportional increases in ad spend."
  },
  {
    question: "What's the difference between working with you versus a general marketing agency?",
    answer: "General agencies spread thin across dozens of industries. We focus exclusively on plumbing and HVAC, which means we already know your competitive landscape, seasonal patterns, and which strategies actually generate booked jobs — not just clicks."
  },
  {
    question: "How do you ensure the quality of SEO and marketing services?",
    answer: "Quality comes from documented processes, transparent reporting, and clear communication. We provide detailed monthly reports, strategy updates, and defined quality standards for every deliverable. Our reputation depends on your results."
  },
  {
    question: "How much does marketing for a plumbing or HVAC company cost?",
    answer: "A typical growth marketing engagement runs $2,000-$5,000/month depending on the number of services, market competition, and your growth goals. This includes 40-45 hours of execution per month across SEO, content, and paid media management."
  },
  {
    question: "What kind of ROI can I expect?",
    answer: "Most of our clients see 5-100x ROI depending on their market and service mix. A plumbing company spending $1,500/month on SEO typically generates $15,000-$50,000+ in revenue from organic leads alone within 6-12 months."
  },
  {
    question: "Can I rebrand reports and dashboards for my own records?",
    answer: "Yes. All deliverables — reports, strategy documents, audits, dashboards — are designed to be clear and actionable. We structure everything for easy review so you always know exactly what's happening with your marketing."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "No. We work month-to-month with a 30-day notice policy. Our retention comes from results, not lock-in agreements. That said, sustainable SEO requires consistency — most meaningful results come within 3-6 months of focused effort."
  },
  {
    question: "Is it worth investing in marketing when I already get referrals?",
    answer: "Referrals are great but unpredictable. Marketing creates a consistent, scalable lead pipeline that doesn't depend on word-of-mouth alone. The businesses that grow fastest combine referral reputation with strong online visibility."
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
    <section id="faq" className="py-20 lg:py-28 section-light relative">
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Plumbing & HVAC Marketing FAQ
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem 
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
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;