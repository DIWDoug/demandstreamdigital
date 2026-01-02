import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const HonestWordOnFulfillment = () => {
  const sectionRef = useScrollReveal();

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden reveal-section"
    >
      {/* Subtle dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
              An Honest Word on Fulfillment
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Most Agencies Don't Lose Clients Because of Results
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Letter Content */}
            <div className="relative order-2 lg:order-1">
              {/* Quotation mark */}
              <div className="absolute -top-2 -left-2 text-6xl text-cta/20 font-serif leading-none">"</div>
              
              <div className="space-y-5 text-text-secondary leading-relaxed pt-8">
                <p className="text-foreground font-medium text-lg">I've been running agencies since 2011.</p>
                
                <p>
                  I've outsourced work to vendors I'd never met, hoping what came back was something I could send to a client. Sometimes it was fine. Sometimes it was a disaster. I never knew what I'd get until it landed in my inbox.
                </p>
                
                <p>
                  I watched other agency owners do the same thing. Buy a "package." Hope it works. When it doesn't, move on. Repeat.
                </p>
                
                <p className="text-foreground font-medium">
                  Then I realized the obvious thing:
                </p>
                
                <p>
                  Every market is different. Every client is different. Cookie-cutter deliverables forced onto unique situations is a race to the bottom.
                </p>
                
                <p className="text-foreground font-medium">
                  So I built something different.
                </p>
                
                <p>
                  Not as a visionary trying to scale. As a marketer who learned by doing the work. I've been the one in the trenches—building campaigns, fixing what broke, understanding why things actually rank.
                </p>
                
                <p>
                  This experience now shapes how we scope, execute, and communicate every engagement.
                </p>
                
                <p className="text-foreground font-medium text-lg pt-4">
                  Work you can explain without flinching. Execution scoped to the actual market. No crossed fingers required.
                </p>
                
                <p>
                  If that sounds like what you've been looking for, let's talk.
                </p>
                
                <p className="text-cta font-medium pt-2">
                  — Doug
                </p>
              </div>
            </div>

            {/* Right - Photo */}
            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-surface-dark to-background border border-border max-w-xs">
                <img 
                  src={dougHeadshot} 
                  alt="Doug Bryson"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-6">
                  <p className="text-xl font-semibold text-foreground">Doug Bryson</p>
                  <p className="text-text-secondary">Founder, Dialed-In Web</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HonestWordOnFulfillment;