import { Users, Target, Award } from "lucide-react";
import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";

const WhoWeAre = () => {
  const highlights = [
    {
      icon: Users,
      stat: "50+",
      label: "Agency Partners"
    },
    {
      icon: Target,
      stat: "90%",
      label: "Client Retention"
    },
    {
      icon: Award,
      stat: "2019",
      label: "Founded"
    }
  ];

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
              Built From the Trenches of Agency Life
            </h2>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              I've been in the agency space since 2019. I've been the person at the BNI meetings. I've signed up for every online course, outsourced to every country, and been an expert-vetted, top-rated Plus Upwork freelancer.
            </p>
            <p className="text-text-secondary mb-6 leading-relaxed">
              I've worked with everyone from coaches to SaaS companies, national furniture brands to mom-and-pop shops. I've rebranded my company three times. But at the core, I'm a digital producer. I know how to explain what I need to the right audience, and when I have to roll up my sleeves to get the job done, I can and I will.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Dialed-In Web exists because I built the partner I always wished I had.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {highlights.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <item.icon className="w-5 h-5 text-cta mr-2" />
                    <span className="text-2xl font-bold text-foreground">{item.stat}</span>
                  </div>
                  <p className="text-xs text-text-muted uppercase tracking-wide">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={dougHeadshot} 
                alt="Doug Bryson, Founder of Dialed-In Web"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-foreground font-semibold text-lg">Doug Bryson</p>
                <p className="text-text-secondary text-sm">Founder, Dialed-In Web</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cta/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
