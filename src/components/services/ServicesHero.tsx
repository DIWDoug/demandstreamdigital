import { ArrowRight } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-background to-background" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-muted font-medium uppercase tracking-widest text-sm mb-4">
            White-Label Fulfillment
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Coordinated Execution,{" "}
            <span className="text-gradient-primary">Not Service Bundles</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
            Fulfillment is activated by scope and planning cadence—not by selecting from a menu. 
            We coordinate execution across channels based on what your client actually needs.
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
