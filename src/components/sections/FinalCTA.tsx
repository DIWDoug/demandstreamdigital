import { ArrowRight, Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-radial from-accent-blue/10 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-cta uppercase tracking-widest mb-4 font-medium">
            Join 100+ Agency Partners
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-foreground">
            Ready to Scale Local Without Risk?
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            A white-label partner built for agencies that value execution, stability, and long-term growth. 90% client retention rate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-cta group">
              Start the Conversation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="tel:2143072995"
              className="flex items-center gap-2 px-6 py-4 rounded-lg border border-border text-foreground hover:bg-surface-elevated transition-colors"
            >
              <Phone className="h-5 w-5" />
              (214) 307-2995
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
