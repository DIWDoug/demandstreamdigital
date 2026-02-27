import { forwardRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";

const steps = [
  { title: "Discovery & Alignment", content: "We learn how your plumbing business operates: service area, capacity, dispatch process, and call patterns. This shapes everything that follows." },
  { title: "Scope & Pricing", content: "We scope the campaign architecture based on your service mix, market, and growth targets. You know exactly what you are buying before any work begins." },
  { title: "Smooth Onboarding", content: "Tracking setup, call attribution, and CRM integration happen before a single dollar of ad spend. We do not run campaigns on broken data." },
  { title: "Execute with Precision", content: "Campaigns are built, launched, and refined. Emergency campaigns run first. Water heater, repipe, and drain campaigns layer in as data confirms the foundation." },
  { title: "Deliver & Communicate", content: "Monthly reporting shows cost per booked call by campaign and service type. You see what the dispatch board sees, not just what the ad platform reports." },
  { title: "Delight & Retain", content: "Geo bid refinements, capacity throttle protocols, and continuous optimization keep your campaigns aligned with how your plumbing business actually runs." },
];

const PlumbingSearchAdsContactForm = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Capture Emergency Demand?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tell us where you operate and what you're working toward. We'll take it from there.
          </p>
          <p className="text-sm text-text-muted mt-3">One plumbing company per market. Your competitors don't get in.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-surface-dark border border-border/50 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
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

              <div className="p-8 lg:p-10">
                <TwoStepContactForm
                  formType="plumbing_search_ads_contact"
                  submitButtonText="Claim My Territory"
                  step1ButtonText="Claim My Territory"
                />
                <div className="mt-6 p-6 rounded-lg" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
                  <div className="mb-3" style={{ color: '#F59E0B', fontSize: '16px', letterSpacing: '2px' }}>★★★★★</div>
                  <p className="leading-relaxed mb-4" style={{ color: '#374151', fontSize: '14px', fontStyle: 'normal', fontWeight: 400 }}>
                    "What truly sets them apart is transparency. After past experiences with agencies where SEO felt like a 'black box,' it's refreshing to work with a team that provides real, clear data and explains what's working and why."
                  </p>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <span className="font-bold" style={{ color: '#0F172A', fontSize: '13px' }}>Pure Plumbing & Air</span>
                      <span className="ml-1" style={{ color: '#6B7280', fontSize: '13px', fontWeight: 400 }}>· Google Review</span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-white shrink-0" style={{ background: '#DC2626', fontSize: '12px' }}>40% year-over-year revenue increase</span>
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

PlumbingSearchAdsContactForm.displayName = "PlumbingSearchAdsContactForm";
export default PlumbingSearchAdsContactForm;
