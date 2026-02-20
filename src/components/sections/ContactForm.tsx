import { forwardRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SubtleOrbs from "@/components/SubtleOrbs";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";

const ContactForm = forwardRef<HTMLElement>((_, ref) => {
  const steps = [
    {
      title: "Discovery & Alignment",
      content: "We start with a deep-dive conversation to understand your agency's goals, client base, and fulfillment needs. No cookie-cutter approaches. Just clarity."
    },
    {
      title: "Scope & Pricing",
      content: "Receive transparent, agency-friendly pricing that protects your margins. We map out deliverables and set clear expectations upfront."
    },
    {
      title: "Seamless Onboarding",
      content: "We provide white-label onboarding materials so your clients never know we exist. Your brand, your process, zero friction."
    },
    {
      title: "Execute with Precision",
      content: "Our team handles the heavy lifting: campaigns, optimizations, and reporting. You focus on growing your agency while we deliver."
    },
    {
      title: "Deliver & Communicate",
      content: "You receive white-labeled deliverables ready for client presentation. Proactive updates keep you informed every step of the way."
    },
    {
      title: "Delight & Retain",
      content: "We go beyond delivery—helping you exceed client expectations, strengthen relationships, and build long-term retention."
    }
  ];

  return (
    <section id="contact" ref={ref} className="relative">
      {/* Background that stops where the card bleeds */}
      <div className="absolute inset-0 bg-[#f9f9f9]" style={{ bottom: '5rem' }} />
      
      <div className="relative pt-24 lg:pt-32 pb-8">
        <SubtleOrbs variant="top-right" />
        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Centered Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Fulfillment in <span className="text-cta">6 Clear Steps</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A predictable process designed for agencies that value control and client delight. All steps are executed behind the scenes, under your brand, with you retaining full client ownership.
              </p>
            </div>

            {/* Bleed-over Card */}
            <div className="relative z-20 bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] mb-[-5rem]">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left Column - Accordion */}
                <div>
                  <Accordion type="single" collapsible defaultValue="item-4" className="space-y-3">
                    {steps.map((step, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="bg-white border border-gray-200 rounded-lg px-5 data-[state=open]:border-cta/30 data-[state=open]:shadow-lg data-[state=open]:shadow-cta/10 transition-all duration-300"
                      >
                        <AccordionTrigger className="text-lg font-medium text-foreground hover:no-underline py-4">
                          <div className="flex items-center gap-4">
                            <span className="step-badge">{index + 1}</span>
                            <span>{step.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-text-secondary pb-4 pl-14">
                          {step.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Right Column - Two-Step Form */}
                <div>
                  <TwoStepContactForm
                    formType="fulfillment_steps"
                    submitButtonText="Explore a Partnership"
                    step1ButtonText="Continue"
                  />

                  {/* Partner Quote */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-text-secondary italic text-center">
                      "They're trustworthy, they communicate clearly and really consistently, which is sometimes rare in today's world."
                    </p>
                    <p className="text-xs text-text-muted text-center mt-2">
                      Trevor Anderson, Founder & CEO, Anderson Collaborative
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
