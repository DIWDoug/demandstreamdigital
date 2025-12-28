import { ArrowRight } from "lucide-react";
import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";
import wylerPhoto from "@/assets/wyler.jpg";

const WhoWeAre = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header - Full Width */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
              A Message From Doug
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
              Most Agencies Don't Lose Clients Because of Results
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left: Image - Smaller column */}
            <div className="relative lg:col-span-2 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer max-w-sm mx-auto lg:max-w-none">
                  {/* Doug's headshot - visible by default */}
                  <img 
                    src={dougHeadshot} 
                    alt="Doug Bryson, Founder of Dialed-In Web"
                    className="w-full h-auto object-cover rounded-2xl group-hover:opacity-0 transition-opacity duration-300"
                  />
                  {/* Wyler's photo - visible on hover */}
                  <img 
                    src={wylerPhoto} 
                    alt="Wyler, a good boy"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-foreground font-bold text-xl group-hover:hidden">Doug Bryson</p>
                    <p className="text-text-secondary group-hover:hidden">Founder, Dialed-In Web</p>
                    <p className="text-foreground font-bold text-xl hidden group-hover:block">Wyler</p>
                    <p className="text-text-secondary hidden group-hover:block">A good boy. 🐕</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-cta/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent-blue/20 rounded-full blur-3xl" />
              </div>
            </div>

            {/* Right: Content - Larger column */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Letter Content */}
              <div className="relative">
                {/* Opening quote mark */}
                <span className="absolute -left-4 -top-8 text-7xl text-cta/30 font-serif leading-none select-none">"</span>
                
                <div className="space-y-6 text-base lg:text-lg leading-relaxed pl-4 border-l-2 border-cta/20">
                  <p className="text-text-secondary italic">
                    They lose them because fulfillment quietly falls apart.
                  </p>

                  <p className="text-text-secondary">
                    It usually doesn't happen all at once. It shows up as scope getting blurry. Communication getting reactive. Margins thinning. Teams doing more work just to keep things steady. Everyone feels it, but no one names it.
                  </p>
                  
                  <p className="text-foreground font-medium">
                    I've seen this pattern enough times to know it's not a people problem. It's a model problem.
                  </p>
                  
                  <p className="text-text-secondary">
                    Most white-label fulfillment is built to be sold easily, not delivered cleanly over time. Packages look neat on paper, but real markets don't behave that way. Cities differ. Competition shifts. Clients evolve. And the gap between what was sold and what's required grows quietly month after month.
                  </p>
                  
                  <p className="text-foreground font-medium">
                    Dialed-In Web exists because I didn't want to keep pretending that was sustainable.
                  </p>

                  <p className="text-text-secondary">
                    We built this to support agencies who care about doing the work right, setting honest expectations, and protecting their reputation with clients. That means clear scope. Defined standards. And execution that adapts without becoming chaotic.
                  </p>

                  <p className="text-text-secondary">
                    This isn't for agencies chasing shortcuts or volume at any cost. It's for operators who want fulfillment they can stand behind and explain without hedging.
                  </p>
                  
                  <p className="text-text-secondary">
                    If that's how you run your business, we should talk.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between">
                  <p className="font-handwriting text-2xl text-cta">— Doug</p>
                  
                  {/* CTA Button */}
                  <a 
                    href="#contact" 
                    className="btn-cta group inline-flex"
                  >
                    Let's Talk
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
