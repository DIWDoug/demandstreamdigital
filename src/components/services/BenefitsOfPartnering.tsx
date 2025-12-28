import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  "You will not have to manage day-to-day tasks—freeing your time for strategic work and client relationships.",
  "Knowing that projects will be finished and delivered on schedule frees you to focus on closing deals.",
  "Connect with your dedicated project manager at any time during business hours for status updates.",
  "We free you from the hassle of staffing and managing the costs of an in-house specialist team.",
  "All work is quality-checked and audited by certified digital marketing professionals.",
  "White-labeled deliverables—reports, audits, and strategies—ready to present under your brand."
];

const BenefitsOfPartnering = () => {
  return (
    <section className="py-16 lg:py-20 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Header */}
            <div>
              <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
                What You Get
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Benefits of Partnering With Us
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Here are some of the advantages for your team when you work with 
                a dedicated white label fulfillment partner:
              </p>
              <Link to="/contact">
                <Button className="bg-cta hover:bg-cta/90 text-white">
                  Talk to an Expert
                </Button>
              </Link>
            </div>

            {/* Right - Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface-elevated border border-border/50"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cta/10 flex items-center justify-center">
                    <span className="text-cta font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed pt-1">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfPartnering;
