import { forwardRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SubtleOrbs from "@/components/SubtleOrbs";
import StreamTexture from "@/components/StreamTexture";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";

const ContactForm = forwardRef<HTMLElement>((_, ref) => {
  const steps = [
    {
      title: "Discovery & Alignment",
      content: "We start with a focused conversation to understand your business goals, service area, and growth targets. No cookie-cutter approaches. Just clarity on what will show results."
    },
    {
      title: "Scope & Pricing",
      content: "Receive transparent pricing that protects your bottom line. We map out deliverables and set clear expectations upfront so there are never surprises."
    },
    {
      title: "Smooth Onboarding",
      content: "We handle setup across your Google Business Profile, website, ad accounts, and review platforms so you can focus on running your crew."
    },
    {
      title: "Execute with Precision",
      content: "Our team handles the heavy lifting: SEO, Google Ads, content, and reputation management. You focus on jobs while we drive calls."
    },
    {
      title: "Deliver & Communicate",
      content: "You receive clear monthly reports showing leads, calls, and ROI. Proactive updates keep you informed every step of the way."
    },
    {
      title: "Delight & Retain",
      content: "We go beyond delivery — helping you exceed growth targets, build a stronger local reputation, and keep your schedule booked year-round."
    }
  ];

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden">
      {/* Background that stops where the card bleeds */}
      <div className="absolute inset-0 bg-[#f9f9f9]" style={{ bottom: '5rem' }} />
      <StreamTexture variant="light" opacity={0.1} />
      
      <div className="relative pt-24 lg:pt-32 pb-8 z-10">
        <SubtleOrbs variant="top-right" />
        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Centered Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                See If Your Market Is Available
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tell us where you operate and what you're working toward. We'll take it from there.
              </p>
              <p className="text-sm text-gray-500 font-medium mt-3">
                We only partner with one plumbing and one HVAC company per market.
              </p>
            </div>

            {/* Bleed-over Card */}
            <div className="relative z-20 bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] mb-[-5rem]">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Accordion */}
              <div className="bg-[hsl(213,64%,12%)] rounded-xl p-6">
                  <Accordion type="single" collapsible defaultValue="item-4" className="space-y-3">
                    {steps.map((step, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="bg-white/10 border border-white/15 rounded-lg px-5 data-[state=open]:border-accent-blue/40 data-[state=open]:shadow-lg data-[state=open]:shadow-accent-blue/10 transition-all duration-300"
                      >
                        <AccordionTrigger className="text-lg font-medium text-white hover:no-underline py-4">
                          <div className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full bg-accent-blue/20 text-accent-blue text-sm font-bold flex items-center justify-center shrink-0">{index + 1}</span>
                            <span>{step.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-white/70 pb-4 pl-14">
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
                    submitButtonText="Get a Free Proposal"
                    step1ButtonText="Continue"
                  />

                  {/* Partner Quote */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-text-secondary italic text-center">
                      "What truly sets them apart is transparency. After past experiences with agencies where SEO felt like a 'black box,' it's refreshing to work with a team that provides real, clear data and explains what's working and why."
                    </p>
                    <p className="text-xs text-text-muted text-center mt-2">
                      Pure Plumbing & Air — Google Review
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
