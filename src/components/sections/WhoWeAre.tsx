import { Helmet } from "react-helmet-async";
import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";
import wylerPhoto from "@/assets/wyler.jpg";

const WhoWeAre = () => {
  // Author schema for E-E-A-T and AI/LLM visibility - following Backlinko best practices
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://dialedinweb.com/#founder",
    "name": "Doug Bryson",
    "jobTitle": "CEO & Founder",
    "worksFor": {
      "@type": "Organization",
      "@id": "https://dialedinweb.com/#organization",
      "name": "Dialed-In Web",
      "url": "https://dialedinweb.com"
    },
    "description": "Digital marketing veteran with 14+ years of hands-on experience. Started ranking local businesses in Nashville in 2011. Managed millions in paid advertising. Expert-vetted Upwork specialist. Author of The Local Growth Engine.",
    "knowsAbout": [
      { "@type": "Thing", "name": "Local SEO", "sameAs": "https://en.wikipedia.org/wiki/Local_search_(Internet)" },
      { "@type": "Thing", "name": "Google Business Profile Optimization" },
      { "@type": "Thing", "name": "Google Ads", "sameAs": "https://en.wikipedia.org/wiki/Google_Ads" },
      { "@type": "Thing", "name": "Meta Advertising" },
      { "@type": "Thing", "name": "Amazon PPC" },
      { "@type": "Thing", "name": "White-Label Agency Fulfillment" },
      { "@type": "Thing", "name": "Inbound Marketing", "sameAs": "https://en.wikipedia.org/wiki/Inbound_marketing" }
    ],
    "alumniOf": [
      { "@type": "Organization", "name": "Horton Group" },
      { "@type": "Organization", "name": "iProspect", "sameAs": "https://en.wikipedia.org/wiki/IProspect" }
    ],
    "award": "Expert-Vetted Upwork Freelancer (Top 1%)",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Expert-Vetted Upwork Specialist"
    },
    "sameAs": [
      "https://www.linkedin.com/in/dougbryson",
      "https://www.upwork.com/freelancers/~01dougbryson"
    ]
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
                    I've been running agencies since 2011.
                  </p>

                  <p className="text-text-secondary">
                    I've outsourced work to vendors I'd never met, hoping what came back was something I could send to a client. Sometimes it was fine. Sometimes it was a disaster. I never knew what I'd get until it landed in my inbox.
                  </p>
                  
                  <p className="text-text-secondary">
                    I watched other agency owners do the same thing. Buy a "package." Hope it works. When it doesn't, move on. Repeat.
                  </p>

                  <p className="text-foreground font-medium">
                    Then I realized the obvious thing:
                  </p>

                  <p className="text-text-secondary">
                    Every market is different. Every client is different. Cookie-cutter deliverables forced onto unique situations is a race to the bottom.
                  </p>

                  <p className="text-foreground font-medium">
                    So I built something different.
                  </p>

                  <p className="text-text-secondary">
                    Not as a visionary trying to scale. As a marketer who learned by doing the work. I've been the one in the trenches—building campaigns, fixing what broke, understanding why things actually rank.
                  </p>

                  <p className="text-foreground font-medium">
                    This experience now shapes how we scope, execute, and communicate every engagement.
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
