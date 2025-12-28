import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { HubFAQ } from "@/data/services";

interface ServiceFAQProps {
  hubTitle: string;
  faqs: HubFAQ[];
}

const ServiceFAQ = ({ hubTitle, faqs }: ServiceFAQProps) => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            {hubTitle} FAQs
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-xl px-6 bg-surface-elevated">
                <AccordionTrigger className="text-left text-foreground hover:text-cta">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary leading-relaxed">
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

export default ServiceFAQ;
