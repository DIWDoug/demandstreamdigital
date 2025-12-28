import { Shield, Eye, Target, Users, Phone, Award, Zap, CheckCircle } from "lucide-react";

const whyChooseUs = [
  { icon: Target, title: "Industry Focused", description: "100% focused on local marketing for agencies. We understand your clients and their markets." },
  { icon: Users, title: "Dedicated Strategist", description: "Direct access to your assigned strategist. No ticket systems or support queues." },
  { icon: Eye, title: "Full Transparency", description: "You'll always know exactly what we're doing and why. No black box tactics." },
  { icon: Phone, title: "Call Tracking & Reporting", description: "Every lead tracked and attributed. Prove ROI with data clients can understand." },
  { icon: Award, title: "Proven Results", description: "Track record of helping agencies grow with consistent, reliable fulfillment." },
  { icon: Zap, title: "Fast Turnaround", description: "Quick onboarding and rapid execution. Your clients won't wait, and neither will we." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Agencies Choose Dialed-In Web
          </h2>
          <p className="text-lg text-text-secondary">
            We're not a generalist agency. We're specialists in white-label local marketing fulfillment—and it shows.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-surface-elevated border border-border hover:border-accent-blue/30 transition-colors">
              <div className="p-2.5 rounded-lg bg-cta/10 border border-cta/20 w-fit mb-4">
                <item.icon className="h-5 w-5 text-cta" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
