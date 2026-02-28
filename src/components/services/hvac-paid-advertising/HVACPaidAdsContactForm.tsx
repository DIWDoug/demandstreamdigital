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

const steps = [
  {
    title: "Discovery & Alignment",
    content: "We start with a focused conversation to understand your dispatch capacity, service area, and seasonal patterns. No one-size-fits-all approaches. Just clarity on what outcomes are realistic and what budget will support them through each heating and cooling cycle."
  },
  {
    title: "Scope & Pricing",
    content: "Receive transparent pricing that maps to your goals and budget. We outline deliverables, platform scope, and expected timelines upfront so there are never surprises."
  },
  {
    title: "Smooth Onboarding",
    content: "We install call tracking, configure conversion attribution, and build your reporting dashboard before any spend goes live. Attribution integrity comes first."
  },
  {
    title: "Execute with Precision",
    content: "Campaigns are structured by intent, season, and service type. Repair campaigns and install campaigns run separately. Ad copy is written to urgency and booking, not features."
  },
  {
    title: "Deliver & Communicate",
    content: "Weekly refinement cycles across search terms, bids, and audiences. Monthly reports focused on cost per booked call, booking rate, and dispatch load by season."
  },
  {
    title: "Delight & Retain",
    content: "As performance data accumulates, we expand into new keywords, geographies, and channels. Budget follows proven results. We grow with your capacity and your season."
  }
];

interface HVACPaidAdsContactFormProps {
  headline?: string;
}

const HVACPaidAdsContactForm = forwardRef<HTMLElement, HVACPaidAdsContactFormProps>(({ headline }, ref) => {
  return (
    <section id="contact" ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#f9f9f9]" style={{ bottom: '5rem' }} />
      <StreamTexture variant="light" opacity={0.1} />

      <div className="relative pt-24 lg:pt-32 pb-8 z-10">
        <SubtleOrbs variant="top-right" />

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                {headline ?? "Ready to Control Your Demand?"}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tell us where you operate and what you're working toward. We'll take it from there.
              </p>
              <p className="text-sm text-gray-500 font-medium mt-3">
                One HVAC client per market. Your competitors don't get in.
              </p>
            </div>

            <div className="relative z-20 bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] mb-[-5rem]">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

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

                <div>
                  <TwoStepContactForm
                    formType="hvac_paid_ads_contact"
                    submitButtonText="Claim Your Territory Today"
                    step1ButtonText="Claim Your Territory Today"
                  />

                  <div className="mt-8 py-6 border-t border-border">
                    <p className="text-sm text-text-secondary italic text-center">
                      "What truly sets them apart is transparency. After past experiences with agencies where SEO felt like a 'black box,' it's refreshing to work with a team that provides real, clear data and explains what's working and why."
                    </p>
                    <p className="text-xs text-text-muted text-center mt-2">
                      Pure Plumbing &amp; Air | Google Review
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

HVACPaidAdsContactForm.displayName = "HVACPaidAdsContactForm";

export default HVACPaidAdsContactForm;
