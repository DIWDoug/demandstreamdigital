import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQGroup } from "@/types/servicePage";
import { getBlogLinkForFAQ } from "@/lib/blogInternalLinks";

interface FAQConfig {
  headline: string;
  groups: FAQGroup[];
}

interface ServiceGroupedFAQProps {
  config: FAQConfig;
}

const FAQAnswerWithBlogLink = ({ question, answer }: { question: string; answer: string }) => {
  const blogLink = getBlogLinkForFAQ(question);
  
  return (
    <div className="text-text-secondary text-sm leading-relaxed pb-4">
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

const ServiceGroupedFAQ = ({ config }: ServiceGroupedFAQProps) => {
  // FAQ schema is handled at page level via getServiceHubSchema to prevent duplicates

  // Split groups into two columns for better layout
  const midpoint = Math.ceil(config.groups.length / 2);
  const leftGroups = config.groups.slice(0, midpoint);
  const rightGroups = config.groups.slice(midpoint);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {config.headline}
            </h2>
          </div>

          {/* FAQ Groups - Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-10">
              {leftGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border/50">
                    {group.category}
                  </h3>
                  <Accordion type="single" collapsible className="space-y-3">
                    {group.items.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`left-${groupIndex}-${faqIndex}`}
                        className="bg-surface-elevated border border-border/50 rounded-xl px-5 data-[state=open]:border-cta/30"
                      >
                        <AccordionTrigger className="text-left text-foreground hover:text-cta py-4 text-sm font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <FAQAnswerWithBlogLink question={faq.question} answer={faq.answer} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              {rightGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border/50">
                    {group.category}
                  </h3>
                  <Accordion type="single" collapsible className="space-y-3">
                    {group.items.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`right-${groupIndex}-${faqIndex}`}
                        className="bg-surface-elevated border border-border/50 rounded-xl px-5 data-[state=open]:border-cta/30"
                      >
                        <AccordionTrigger className="text-left text-foreground hover:text-cta py-4 text-sm font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <FAQAnswerWithBlogLink question={faq.question} answer={faq.answer} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGroupedFAQ;
