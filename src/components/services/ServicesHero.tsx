import { ArrowRight } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cta/5 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cta font-medium uppercase tracking-widest text-sm mb-4">
            White Label Inbound Marketing
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.15]">
            Full-Service White Label Inbound Marketing{" "}
            <span className="text-gradient-primary">for Agencies</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            SEO, paid media, email, and authority building—coordinated fulfillment that scales with your client roster.
          </p>
          <a 
            href="#contact" 
            className="btn-cta group inline-flex items-center px-6 py-3"
          >
            Start a Partner Conversation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
