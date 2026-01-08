import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { HubFAQ as HubFAQType } from "@/data/services";
import { getBlogLinkForFAQ } from "@/lib/blogInternalLinks";

interface HubFAQProps {
  title: string;
  faqs: HubFAQType[];
}

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

const HubFAQ = ({ title, faqs }: HubFAQProps) => {
  // FAQ schema is handled at page level via getServiceHubSchema to prevent duplicates

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative">
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {title} FAQ
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem 
                  value={`faq-${index}`}
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
      </div>
    </section>
  );
};

export default HubFAQ;
