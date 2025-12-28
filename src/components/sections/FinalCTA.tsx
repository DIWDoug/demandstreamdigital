import { ArrowRight, Phone } from "lucide-react";
import SubtleOrbs from "@/components/SubtleOrbs";

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-radial from-accent-blue/10 to-transparent blur-3xl" />
      </div>
      <SubtleOrbs variant="center" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-foreground">
            Ready to <span className="text-pop">Scale Your Agency</span> Without the Overhead?
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            A white-label digital marketing partner built for agencies that value execution, reliability, and long-term success. 90% client retention rate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-cta group">
              Explore a Partnership
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
          <p className="text-sm text-text-muted italic mt-6">
            Short conversation to understand your agency, your clients, and whether partnership makes sense.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
