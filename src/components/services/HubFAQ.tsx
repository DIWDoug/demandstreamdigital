import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { HubFAQ as HubFAQType } from "@/data/services";

interface HubFAQProps {
  title: string;
  faqs: HubFAQType[];
}

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
                  <AccordionContent className="text-text-secondary text-sm pb-5 leading-relaxed">
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

export default HubFAQ;
