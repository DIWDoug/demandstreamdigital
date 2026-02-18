import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const HonestWordOnFulfillment = () => {
  const sectionRef = useScrollReveal();

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 bg-card border-y border-border relative overflow-hidden reveal-section"
    >
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
              An Honest Word on Marketing
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Most Plumbing & HVAC Companies Don't Fail Because of Bad Work
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="relative flex justify-center lg:justify-start lg:ml-28">
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-muted to-background border border-border max-w-xs shadow-lg">
                <img 
                  src={dougHeadshot} 
                  alt="Doug Bryson - Founder and CEO of Dialed-In Local, growth marketing for plumbing and HVAC companies"
                  title="Doug Bryson | Founder, Dialed-In Local"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-6">
                  <p className="text-xl font-semibold text-foreground">Doug Bryson</p>
                  <p className="text-muted-foreground">Founder, Dialed-In Local</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-2 -left-2 text-6xl text-cta/30 font-serif leading-none">"</div>
              
              <div className="space-y-5 text-muted-foreground leading-relaxed pt-8 font-handwriting text-lg">
                <p className="text-foreground font-medium text-lg">I've been in digital marketing since 2011.</p>
                
                <p>
                  I've worked with hundreds of local service businesses — plumbers, HVAC techs, contractors. Most of them had been burned by a marketing company before they found us. Vague promises, zero transparency, and campaigns that felt like they were built for someone else's business.
                </p>
                
                <p>
                  I watched great companies waste thousands on "packages" that didn't account for their market, their competition, or their seasonal demand.
                </p>
                
                <p className="text-foreground font-medium">
                  Then I realized the obvious thing:
                </p>
                
                <p>
                  Every market is different. Every plumbing and HVAC company is different. Cookie-cutter marketing doesn't work for businesses that depend on local customers finding them at the right moment.
                </p>
                
                <p className="text-foreground font-medium">
                  So I built something different.
                </p>
                
                <p>
                  Not as a tech bro chasing scale. As a marketer who learned by doing the work — building campaigns, fixing what broke, understanding why some businesses dominate their local market while others stay invisible.
                </p>
                
                <p>
                  That experience now shapes how we scope, execute, and report on every engagement.
                </p>
                
                <p className="text-foreground font-medium text-lg pt-4">
                  Marketing you can understand. Campaigns built for your actual market. Results you can see in your phone ringing.
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
      </div>
    </section>
  );
};

export default HonestWordOnFulfillment;
