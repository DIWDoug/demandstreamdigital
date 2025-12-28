import { ArrowRight } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-background to-background" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-muted font-medium uppercase tracking-widest text-sm mb-4">
            White-Label Fulfillment Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Digital Marketing Fulfillment,{" "}
            <span className="text-gradient-primary">Executed as a System</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
            We provide white-label SEO, paid media, and retention execution for agencies that value 
            clarity, scope discipline, and long-term client relationships. Services can be engaged 
            individually or as part of a coordinated system, always executed with the same standards 
            and planning cadence.
          </p>
          <a 
            href="#contact" 
            className="btn-cta group inline-flex items-center"
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
