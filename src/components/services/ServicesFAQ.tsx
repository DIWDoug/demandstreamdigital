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
    question: "What is white label inbound marketing and how does it work?",
    answer: "White label inbound marketing is a partnership model where agencies outsource digital marketing execution to a fulfillment partner who delivers all work under the agency's brand. The agency owns the client relationship and strategic direction. The fulfillment partner handles day-to-day execution—SEO, paid media, email marketing, content, reporting—invisibly. The end client never knows a partner is involved."
  },
  {
    question: "Why do agencies use white label digital marketing?",
    answer: "Agencies use white label digital marketing to expand service offerings without hiring specialists, maintain quality through documented processes, and scale accounts without proportional overhead increases. It eliminates recruitment costs, training time, and management burden while providing immediate access to specialized expertise across multiple marketing disciplines."
  },
  {
    question: "How does white labeling help an agency scale?",
    answer: "White labeling removes the constraint of internal capacity. Agencies can accept new clients and service lines immediately without hiring delays. Fixed overhead stays controlled while revenue grows. This model also reduces risk—if client volume fluctuates, you're not carrying underutilized staff."
  },
  {
    question: "What is the difference between white label and outsourcing?",
    answer: "Traditional outsourcing often means fragmented freelancers or offshore teams handling isolated tasks. White label fulfillment is a complete system: strategy, execution, reporting, and ongoing optimization across all channels—delivered as a coordinated service under your brand with consistent standards and accountability."
  },
  {
    question: "How do I ensure the quality of white label SEO and marketing services?",
    answer: "Quality assurance comes from documented processes, transparent reporting, and clear communication rhythms. We provide detailed work logs, monthly performance reviews, and defined quality standards for every deliverable. You maintain oversight and approval authority. Our reputation depends on your client results."
  },
  {
    question: "Who communicates with the end client in a white label model?",
    answer: "You do. The agency maintains all client communication. We operate behind the scenes, providing you with reports, strategy recommendations, and execution updates that you present under your brand. Some partners prefer we join calls silently or draft responses for them to send—we adapt to your preference."
  },
  {
    question: "Can I rebrand reports and dashboards as my own?",
    answer: "Yes. All deliverables—reports, strategy documents, audits, dashboards—are designed to be white labeled. We remove our branding and structure everything for you to present directly to clients. Many partners add their logo and customize the presentation layer."
  },
  {
    question: "How much does white label digital marketing cost?",
    answer: "A typical full-service white label inbound marketing engagement runs $2,000-$5,000/month depending on the number of channels activated and client complexity. Single-service engagements start lower. We price based on scope and hours at approximately $50-60/hour for execution—allowing you healthy margin on standard agency rates."
  },
  {
    question: "How do agencies price white label services for profit?",
    answer: "Most agency partners apply a 40-60% markup on our rates. If we charge $3,000/month for fulfillment, you might bill your client $5,000-$6,000. Your margin covers client management, strategic oversight, and relationship development. The math works because you're not carrying full-time specialist salaries."
  },
  {
    question: "Is white label marketing ethical for clients?",
    answer: "Yes. Agencies routinely use specialized partners, contractors, and vendors to deliver services—it's standard practice. What matters is results and accountability. Your client hired you for outcomes, not to verify who executes each task. Transparency with your team is recommended; disclosure to clients is your choice."
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
