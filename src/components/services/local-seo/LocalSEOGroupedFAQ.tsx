import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getBlogLinkForFAQ } from "@/lib/blogInternalLinks";

interface FAQ {
  question: string;
  answer: string;
}

// Component to render FAQ answer with optional blog link
const FAQAnswerWithBlogLink = ({ question, answer }: { question: string; answer: string }) => {
  const blogLink = getBlogLinkForFAQ(question);
  
  return (
    <div className="text-text-secondary text-sm pb-5 leading-relaxed">
      {answer}
      {blogLink && (
        <Link 
          to={blogLink.blogUrl}
          className="block mt-3 text-accent-blue underline underline-offset-2 decoration-accent-blue/50 hover:text-cta hover:decoration-cta transition-colors"
        >
          Learn more: {blogLink.blogTitle} →
        </Link>
      )}
    </div>
  );
};

interface FAQGroup {
  title: string;
  faqs: FAQ[];
}

const faqGroups: FAQGroup[] = [
  {
    title: "Results & Timing",
    faqs: [
      { question: "How long does it take to see local SEO results?", answer: "Most campaigns show meaningful movement within 3-4 months, with substantial results by month 6. Competitive markets may take longer, while less competitive areas often see faster wins. We set realistic expectations during discovery based on actual market data." },
      { question: "What are the top ranking factors for the Local Pack?", answer: "The top three factors are Relevance (how well your business matches the search query), Distance (proximity to the searcher), and Prominence (your overall online reputation including reviews, links, and citations). The 2026 Whitespark study shows Google Business Profile signals account for 32% of local pack rankings." },
      { question: "How has the Google Vicinity Update changed local SEO?", answer: "The Vicinity Update made physical proximity the dominant ranking factor. Rankings are now dynamic and change based on where the searcher is standing. This is why cookie-cutter packages fail. We scope every engagement to the actual competitive landscape of each market." },
      { question: "How important are reviews for local rankings?", answer: "Reviews now account for 20% of local ranking factors according to the 2026 Whitespark study, up from 16% in previous years. Review recency, quantity, and response management all matter. We can help implement review generation strategies as part of the engagement." },
    ]
  },
  {
    title: "Eligibility & Fit",
    faqs: [
      { question: "Do you work with service-area businesses without a physical address?", answer: "We specialize in businesses with verified, address-visible Google Business Profile listings. This includes storefronts, offices, and service-area businesses that display their address. We do not work with address-hidden or service-area-only profiles." },
      { question: "Do you work with multi-location businesses?", answer: "Yes. We have specific processes for multi-location SEO including location page strategy, internal linking architecture, and scalable content frameworks. Many of our agency partners specialize in franchises and multi-location brands." },
      { question: "What makes your approach different from package-based providers?", answer: "We scope every engagement to the actual market. A plumber in Boise competes differently than a personal injury lawyer in Chicago. We analyze local competition, proximity dynamics, and search behavior before recommending a strategy. No templates, no one-size-fits-all." },
      { question: "Do you require long-term contracts?", answer: "No. We work month-to-month with a 30-day notice policy. Our retention comes from results, not lock-in agreements. That said, sustainable local SEO requires consistency. Most meaningful results require 3-6 months of focused effort." },
      { question: "How much does local SEO cost?", answer: "Local SEO investment varies based on market competition, number of locations, and scope of work. A single-location business in a moderately competitive market typically starts around $1,500-2,500/month. Multi-location or highly competitive markets require more. We scope every engagement to the actual opportunity, not arbitrary packages." },
    ]
  },
  {
    title: "Process & Reporting",
    faqs: [
      { question: "What is included in your local SEO service?", answer: "Our comprehensive service includes technical SEO audits, on-page optimization, content strategy and development, link building, citation management, GBP optimization, and monthly reporting. We customize scope based on market competition and client goals." },
      { question: "How do you handle client communication?", answer: "We operate as your strategic partner. All communication flows through you. We provide reports, updates, and talking points. You maintain the client relationship and present the work as your own." },
      { question: "How do you handle reporting?", answer: "Monthly reports show what moved, not just what we did. We track rankings, organic traffic, GBP insights, and lead indicators. Reports are unbranded and ready for client presentation. We also provide talking points for your client conversations." },
      { question: "What access do you need from clients?", answer: "We need access to GBP, website CMS, and ideally Google Analytics and Search Console. We also need timely feedback on content drafts and occasional input for review campaigns. The more responsive the client, the faster we can move." },
      { question: "Can you help with GBP suspensions?", answer: "Yes. We have experience recovering suspended GBP listings. The process depends on the suspension reason, but we have successfully restored listings suspended for guideline violations, verification issues, and other common problems." },
    ]
  }
];

const LocalSEOGroupedFAQ = () => {
  // FAQ schema is handled at page level to prevent duplicates

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative">
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Local SEO FAQ
            </h2>
          </div>
          
          {/* Grouped FAQs */}
          <div className="space-y-10">
            {faqGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cta" />
                  {group.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {group.faqs.map((faq, faqIndex) => (
                    <Accordion key={faqIndex} type="single" collapsible>
                      <AccordionItem 
                        value={`faq-${groupIndex}-${faqIndex}`}
                        className="border border-border rounded-xl px-6 bg-surface-elevated data-[state=open]:border-cta/30"
                      >
                        <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 text-base font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <FAQAnswerWithBlogLink question={faq.question} answer={faq.answer} />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOGroupedFAQ;
