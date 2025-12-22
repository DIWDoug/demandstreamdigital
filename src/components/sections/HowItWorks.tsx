import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    title: "Define Your Scope",
    content: "After you complete our discovery form, we schedule a kickoff call to understand your agency's services, client profile, and goals. We'll confirm which services you want to outsource, what reporting your clients expect, and how we'll deliver under your brand."
  },
  {
    title: "Get Wholesale Pricing",
    content: "You'll receive custom pricing based on your services and volume. All rates are structured to support strong agency markups, so you can price your packages confidently and profitably."
  },
  {
    title: "Onboard Your Clients",
    content: "Upload your first client through our partner portal. Add your logo, choose your preferred report layout, and complete a simple intake form to start fulfillment under your brand."
  },
  {
    title: "Let Us Execute",
    content: "We manage the campaign execution behind the scenes: from SEO audits, on-page work, and link building to PPC setup, GBP optimization, and reputation campaigns. You stay client-facing while we do the heavy lifting."
  },
  {
    title: "Deliver Results",
    content: "You receive white-labeled deliverables ready for client presentation. Every report includes your logo and branding so it looks and feels like your own work."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-text-secondary text-lg md:text-xl mb-10">
            A predictable onboarding process designed for agencies that value control and execution.
          </p>
          
          <Accordion type="single" collapsible className="space-y-3">
            {steps.map((step, index) => (
              <AccordionItem 
                key={index} 
                value={`step-${index}`}
                className="border-0 rounded-xl bg-surface-card overflow-hidden border-l-4 border-l-cta"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-surface-elevated/50 transition-colors text-left">
                  <span className="text-lg font-medium text-foreground">
                    {step.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0">
                  <p className="text-text-secondary leading-relaxed">
                    {step.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
