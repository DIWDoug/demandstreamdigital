import { Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface-dark relative overflow-hidden">
      {/* Minimal background - quiet confidence */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Simple, inevitable headline */}
          <h2 className="font-medium mb-6 text-foreground">
            The agencies that scale without chaos
            <br />
            <span className="text-text-secondary">all made the same decision.</span>
          </h2>
          
          <p className="text-text-secondary mb-10">
            90% client retention. No long-term contracts required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="btn-cta"
            >
              See If We're a Fit
            </a>
            <a 
              href="tel:2143072995"
              className="flex items-center gap-2 px-6 py-4 rounded-lg border border-border text-text-secondary hover:text-foreground hover:border-border-card transition-colors"
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
