import { Helmet } from "react-helmet-async";
import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";
import wylerPhoto from "@/assets/wyler.jpg";

const WhoWeAre = () => {
  // Author schema for E-E-A-T and AI/LLM visibility
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Doug Bryson",
    "jobTitle": "CEO & Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "Dialed-In Web"
    },
    "description": "Digital marketing veteran with 14+ years of hands-on experience. Started ranking local businesses in Nashville in 2011. Managed millions in paid advertising. Expert-vetted Upwork specialist. Author of The Local Growth Engine.",
    "knowsAbout": [
      "Local SEO",
      "Google Business Profile Optimization", 
      "Google Ads",
      "Meta Ads",
      "Amazon PPC",
      "White-Label Agency Fulfillment",
      "Inbound Marketing Strategy"
    ],
    "alumniOf": [
      { "@type": "Organization", "name": "Horton Group" },
      { "@type": "Organization", "name": "iProspect" }
    ],
    "award": "Expert-Vetted Upwork Freelancer (Top 1%)",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Expert-Vetted Upwork Specialist"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(authorSchema)}
        </script>
      </Helmet>
      <section className="py-24 lg:py-32 relative overflow-hidden bg-background">
        {/* Subtle dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header - Full Width */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
              An Honest Word on Fulfillment
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight max-w-3xl mx-auto">
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
                <span className="absolute -left-3 -top-8 text-6xl text-cta/25 font-handwriting leading-none select-none">"</span>
                
                <div className="font-handwriting space-y-6 text-lg lg:text-xl leading-relaxed pl-4 border-l-2 border-cta/20">
                  <p className="text-foreground font-medium">
                    <span className="float-left text-5xl lg:text-6xl font-semibold text-cta leading-none mr-2 mt-1">I</span>'ve been running agencies since 2011.
                  </p>

                  <p className="text-text-secondary">
                    I've sat through the BNI meetings. Done the cold outreach. Outsourced work to vendors I'd never met, crossing my fingers that what came back would be something I could actually send to a client.
                  </p>

                  <p className="text-text-secondary">
                    Sometimes it was fine. Sometimes it was a disaster. And the worst part? I never really knew what I was going to get until it landed in my inbox.
                  </p>
                  
                  <p className="text-text-secondary">
                    I watched other agency owners do the same thing. Buy a "package." Hope it works. When it doesn't, blame the client. Move on. Repeat.
                  </p>

                  <p className="text-foreground font-medium">
                    Then I realized the obvious thing nobody wants to admit:
                  </p>

                  <p className="text-text-secondary">
                    One size doesn't fit all. Every market is different. Every client is different. And when you force cookie-cutter deliverables onto unique situations, you're in a race to the bottom. Nobody wins.
                  </p>
                  
                  <p className="text-text-secondary">
                    The other problem? Most agency people can't explain SEO in a way that builds trust. They hedge. They use jargon. Clients feel confused, then skeptical, then gone.
                  </p>

                  <p className="text-foreground font-medium">
                    So I built something different.
                  </p>

                  <p className="text-text-secondary">
                    Not as a visionary trying to scale. As a marketer who learned the work by doing it. I've been the one in the trenches. Building campaigns. Fixing what broke. Understanding why things actually rank.
                  </p>

                  <p className="text-foreground font-medium">
                    This is fulfillment built by a marketer, for marketers.
                  </p>
                  
                  <p className="text-text-secondary">
                    Work you can explain without flinching. Execution scoped to the actual market. No crossed fingers required.
                  </p>
                  
                  <p className="text-text-secondary">
                    If that sounds like what you've been looking for, let's talk.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-8 pt-6 border-t border-border/30">
                  <span className="font-handwriting text-4xl text-cta block">— Doug</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default WhoWeAre;
