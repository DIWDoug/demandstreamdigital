import { Phone, Mail } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";

const CalculatorContactForm = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-semibold uppercase tracking-wider mb-6">
                Ready to Partner?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Start the <span className="text-accent-blue">Conversation</span>
              </h2>
              <p className="text-text-secondary text-lg font-body mb-8">
                Let's discuss how we can help you deliver exceptional results for your clients while you focus on growing your agency.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <a 
                  href={PHONE_HREF}
                  className="flex items-center gap-4 text-text-secondary hover:text-foreground transition-colors group"
                >
                  <span className="w-12 h-12 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm text-text-muted">Call us</p>
                    <p className="text-foreground font-medium">{PHONE_NUMBER}</p>
                  </div>
                </a>

                <a 
                  href="mailto:hello@demandstreamdigital.com"
                  className="flex items-center gap-4 text-text-secondary hover:text-foreground transition-colors group"
                >
                  <span className="w-12 h-12 rounded-lg bg-cta/10 text-cta flex items-center justify-center group-hover:bg-cta group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm text-text-muted">Email us</p>
                    <p className="text-foreground font-medium">hello@demandstreamdigital.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Two-Step Form */}
            <div className="bg-surface-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Tell us about your agency
              </h3>
              
              <TwoStepContactForm
                formType="calculator"
                submitButtonText="Let's Talk"
                step1ButtonText="Continue"
              />

              <p className="text-xs text-text-muted text-center mt-4">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorContactForm;
