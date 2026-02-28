import { forwardRef } from "react";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";

const PlumbingLinkedInContactForm = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Ready to Build a Commercial Plumbing Pipeline in Your Market?
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Tell us where you operate and what you're building toward. We'll take it from there.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold text-accent-blue uppercase tracking-widest mb-4">One plumbing company per market. Your competitors don't get in.</p>
              <blockquote className="border-l-2 border-cta pl-5 mt-8">
                <p className="text-text-secondary italic leading-relaxed mb-3">
                  "They're trustworthy, they communicate clearly and really consistently, which is sometimes rare in today's world."
                </p>
                <footer className="text-sm text-text-muted">— Trevor Anderson, Founder &amp; CEO, Andersen Collaborative</footer>
              </blockquote>
            </div>
            <div className="bg-surface-elevated/90 backdrop-blur-md border border-border rounded-2xl p-6 lg:p-8 shadow-xl">
              <TwoStepContactForm
                formType="plumbing_linkedin_contact"
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

PlumbingLinkedInContactForm.displayName = "PlumbingLinkedInContactForm";

export default PlumbingLinkedInContactForm;
