import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const HonestWordOnFulfillment = () => {
  const sectionRef = useScrollReveal();

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 bg-background relative overflow-hidden reveal-section"
    >
      {/* Subtle dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
              An Honest Word on Fulfillment
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Most Agencies Don't Lose Clients Because of Results
            </h2>
          </div>

          {/* Author Card */}
          <div className="bg-surface-dark border border-border rounded-2xl p-8 lg:p-10">
            {/* Author Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50">
              <img 
                src={dougHeadshot} 
                alt="Doug Bryson"
                className="w-16 h-16 rounded-full object-cover border-2 border-cta/30"
              />
              <div>
                <p className="text-lg font-semibold text-foreground">Doug Bryson</p>
                <p className="text-sm text-text-secondary">Founder, Dialed-In Web</p>
              </div>
            </div>

            {/* Letter Content */}
            <div className="space-y-5 text-text-secondary leading-relaxed font-serif">
              <p>I've been running agencies since 2011.</p>
              
              <p>
                I've outsourced work to vendors I'd never met, hoping what came back was something I could send to a client. Sometimes it was fine. Sometimes it was a disaster. I never knew what I'd get until it landed in my inbox.
              </p>
              
              <p>
                I watched other agency owners do the same thing. Buy a "package." Hope it works. When it doesn't, move on. Repeat.
              </p>
              
              <p className="text-foreground font-medium">
                Then I realized the obvious thing:
              </p>
              
              <p className="text-lg text-foreground border-l-4 border-cta pl-6 py-2 bg-cta/5 rounded-r-lg">
                Every market is different. Every client is different. Cookie-cutter deliverables forced onto unique situations is a race to the bottom.
              </p>
              
              <p>
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
        </div>
      </div>
    </section>
  );
};

export default HonestWordOnFulfillment;