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
              You Didn't Start Your Agency to Feel This Stuck
            </h2>
            
            {/* Identify */}
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              You wanted freedom. You wanted to build something of your own. I get it. That was me too.
            </p>
            
            {/* Struggle */}
            <div className="space-y-4 mb-6">
              <p className="text-text-secondary leading-relaxed">
                <span className="text-foreground font-semibold">But then reality hit.</span> Freelancers ghosted you mid-project. "Experts" delivered work you had to redo at 2am. Every new client felt like a gamble.
              </p>
              <p className="text-text-secondary leading-relaxed">
                More time managing chaos than growing your business. More time apologizing than celebrating. And that gut feeling you're the only one who can't figure this out.
              </p>
            </div>
            
            {/* Solution */}
            <p className="text-text-secondary mb-8 leading-relaxed">
              <span className="text-foreground font-semibold">I built Dialed-In Web to be the partner I wished I had.</span> One who delivers. Answers the phone. Treats your clients like my own.
            </p>
            
            {/* Power Punch CTA */}
            <a 
              href="#contact" 
              className="btn-cta group inline-flex items-center gap-2 text-sm px-8 py-4 font-semibold"
            >
              Let's Fix That
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

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
