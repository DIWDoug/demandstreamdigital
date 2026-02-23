import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SubtleOrbs from "@/components/SubtleOrbs";
import StreamTexture from "@/components/StreamTexture";

import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <StreamTexture variant="dark" opacity={0.08} />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-radial from-accent-blue/10 to-transparent blur-3xl" />
      </div>
      <SubtleOrbs variant="center" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Ready to <span className="text-accent-blue">Grow Your Business</span> With Marketing That Works?
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            Growth marketing built specifically for plumbing and HVAC companies. More calls, more jobs, more revenue, backed by 15+ years of experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-cta group"
            >
              Get a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a 
              href={PHONE_HREF}
              className="flex items-center gap-2 px-6 py-4 rounded-lg border border-border text-foreground hover:bg-surface-elevated transition-colors"
            >
              <Phone className="h-5 w-5" />
              {PHONE_NUMBER}
            </a>
          </div>
          <p className="text-sm text-text-muted italic mt-6">
            A short conversation to understand your business, your market, and whether we're the right fit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
