import { ArrowRight } from "lucide-react";

const ServicesFinalCTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-cta/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Looking for a Fulfillment Partner, Not Just a Vendor?
          </h2>
          <p className="text-text-secondary mb-8">
            If your agency values clarity, consistency, and disciplined execution, let's start a 
            conversation and see if a partnership makes sense.
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

export default ServicesFinalCTA;
