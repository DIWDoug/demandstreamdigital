import { ArrowRight } from "lucide-react";
import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";

const WhoWeAre = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <div>
            <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Built by a Marketer for Marketers
            </h2>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              I've sat in the BNI meetings wondering if this was the right path. I've hired freelancers who disappeared. I've stayed up late fixing work that should have been done right the first time. I've felt the pressure of promising clients results while wondering who was actually going to deliver.
            </p>
            <p className="text-text-secondary mb-6 leading-relaxed">
              I built Dialed-In Web to be the white-label digital marketing partner I always wished existed. Not a vendor. Not a contractor. A partner who actually gives a damn about your agency's success, because I know what it feels like to be on your side of the table.
            </p>
            
            <div className="mb-8 text-right">
              <p className="text-cta font-medium text-lg" style={{ fontFamily: 'cursive' }}>
                — Doug Bryson
              </p>
            </div>

            {/* Hook Value CTA */}
            <div className="p-6 rounded-xl bg-surface-elevated border border-border">
              <p className="text-foreground font-semibold text-lg mb-4">
                Want to see who's behind the scenes?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#contact" 
                  className="btn-cta group flex items-center justify-center gap-2 text-sm px-6 py-3"
                >
                  Meet My Team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="tel:2143072995"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-surface-card transition-colors font-medium text-sm"
                >
                  Call (214) 307-2995
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={dougHeadshot} 
                alt="Doug Bryson, Founder of Dialed-In Web"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-foreground font-bold text-xl">Doug Bryson</p>
                <p className="text-text-secondary">Founder, Dialed-In Web</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cta/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent-blue/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-4 w-2 h-24 bg-gradient-to-b from-cta to-accent-blue rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
