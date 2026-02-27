import { forwardRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";

const steps = [
  { title: "Discovery & Alignment", content: "We start by understanding your service area, trade focus, competitors, and what a booked call is worth. This shapes every architecture decision." },
  { title: "Scope & Pricing", content: "Based on the number of service pages, location pages, and integrations required, we scope the project and provide a fixed-price proposal." },
  { title: "Design & Wireframe", content: "We build a full design prototype for review before development begins. You see the layout, copy direction, and conversion architecture before a line of code is written." },
  { title: "Build & Integrate", content: "Development, call tracking setup, CRM integration, and SEO foundation are all delivered together — not patched in after launch." },
  { title: "QA & Launch", content: "Full cross-device testing, Core Web Vitals verification, and pre-launch SEO audit before the site goes live." },
  { title: "Post-Launch Support", content: "30-day post-launch monitoring with priority support. Optional ongoing management available as part of a broader growth program." },
];

const WebDesignContactForm = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-card border-t border-border scroll-mt-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Build a Site That Actually Books Calls?
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Tell us where you operate and what you're building. We'll confirm if your market is available and scope the right build.
            </p>
            <p className="text-xs text-text-muted mt-2">One plumbing client and one HVAC client per market.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — process accordion */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">How It Works</p>
              <Accordion type="single" collapsible defaultValue="item-2">
                {steps.map((step, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                    <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">
                      {i + 1} {step.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-text-secondary leading-relaxed">
                      {step.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right — form */}
            <div>
              <TwoStepContactForm
                formType="web_design_contact"
                submitButtonText="Claim Your Territory Today"
                step1ButtonText="Claim Your Territory Today"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

WebDesignContactForm.displayName = "WebDesignContactForm";
export default WebDesignContactForm;
