import { ArrowRight } from "lucide-react";

const ServicesFinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cta/8 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-4">
            Ready to Start?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Partner With a White Label Marketing Team,<br className="hidden md:block" /> Not Just a Vendor
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            If your agency values clarity, consistency, and disciplined execution, 
            let's start a conversation and see if a partnership makes sense.
          </p>
          <a 
            href="#contact" 
            className="btn-cta group inline-flex items-center text-lg px-8 py-4"
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
