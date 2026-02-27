import { forwardRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";

const steps = [
  { title: "Discovery & Alignment", content: "We learn how your HVAC business operates: service area, capacity, dispatch process, and seasonal patterns. This shapes everything that follows." },
  { title: "Scope & Pricing", content: "We scope the campaign architecture based on your service mix, market, and growth targets. You know exactly what you are buying before any work begins." },
  { title: "Smooth Onboarding", content: "Tracking setup, call attribution, and CRM integration happen before a single dollar of ad spend. We do not run campaigns on broken data." },
  { title: "Execute with Precision", content: "Campaigns are built, launched, and refined. Emergency repair campaigns run first. Install and replacement campaigns are layered in as data confirms the foundation." },
  { title: "Deliver & Communicate", content: "Monthly reporting shows cost per booked call by campaign and service type. You see what the dispatch board sees, not just what the ad platform reports." },
  { title: "Delight & Retain", content: "Seasonal bid calendars, capacity throttle protocols, and continuous refinement keep your campaigns aligned with how your HVAC business actually runs." },
];

const HVACSearchAdsContactForm = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Capture Seasonal Demand?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tell us where you operate and what you're working toward. We'll take it from there.
          </p>
          <p className="text-sm text-text-muted mt-3">One HVAC company per market. Your competitors don't get in.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-surface-dark border border-border/50 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left: accordion */}
              <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border/50">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-6">What Happens Next</p>
                <Accordion type="single" collapsible defaultValue="item-4">
                  {steps.map((step, i) => (
                    <AccordionItem key={i} value={`item-${i + 1}`} className="border-border/40">
                      <AccordionTrigger className="text-sm font-semibold text-foreground hover:text-accent-blue">
                        {step.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-text-secondary leading-relaxed">
                        {step.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Right: form */}
              <div className="p-8 lg:p-10">
                <TwoStepContactForm
                  formType="hvac_search_ads_contact"
                  submitButtonText="Claim My Territory"
                  step1ButtonText="Claim My Territory"
                />
                <div className="mt-8 border-t border-border/40 pt-6">
                  <p className="text-xs text-text-muted italic leading-relaxed">
                    "What truly sets them apart is transparency. After past experiences with agencies where SEO felt like a 'black box,' it's refreshing to work with a team that provides real, clear data and explains what's working and why."
                  </p>
                  <p className="text-xs text-text-muted mt-2 font-medium">Pure Plumbing & Air | Google Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HVACSearchAdsContactForm.displayName = "HVACSearchAdsContactForm";
export default HVACSearchAdsContactForm;
