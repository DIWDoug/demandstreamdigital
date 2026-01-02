import { Target, Eye, Shield, Handshake, Users, CheckCircle, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

const MissionVisionValues = () => {
  const ref = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 relative overflow-hidden bg-background reveal-section"
    >
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
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm text-cta uppercase tracking-widest font-medium mb-4">
              Our Foundation
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight max-w-3xl mx-auto">
              Mission, Vision & Values
            </h2>
          </div>

          {/* Mission & Vision - Two column layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Mission */}
            <div className="bg-surface-dark border border-border rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                  <Target className="w-6 h-6 text-cta" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-lg">
                To help established small businesses increase their leads, traffic, and sales by delivering quality, sustainable digital inbound marketing strategies that are tailor-made to suit the client's industry and local presence, while also helping them maintain a positive online reputation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-surface-dark border border-border rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center border-2 border-accent-blue">
                  <Eye className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-lg">
                To help established small businesses grow in order to support the dreams of their owners and founders while also contributing to the growth of local economies. By joining small business owners on the journey through a mutually invested partnership, we take online marketing off their shoulders—allowing them to focus on what they do best: running their businesses and delighting their customers.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-8">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Core Values</h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                We believe in sustainable, honest, and trustworthy marketing practices. We engage only in "white hat" practices to ensure transparent, honest, and sustainable building on clients' online reputations and search engine rankings.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Integrity */}
              <div className="bg-surface-dark/50 border border-border/50 rounded-xl p-6 hover:border-cta/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-cta" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Integrity</h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  We will be honest and do what we say we are going to do. We practice what we preach and ensure that our own website and online reputation is high.
                </p>
              </div>

              {/* Transparency */}
              <div className="bg-surface-dark/50 border border-border/50 rounded-xl p-6 hover:border-cta/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-cta" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Transparency</h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Clients will be given full reports of the activities that were delivered, and strategies will be agreed upon in advance.
                </p>
              </div>

              {/* Partnership */}
              <div className="bg-surface-dark/50 border border-border/50 rounded-xl p-6 hover:border-cta/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-cta" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Partnership</h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Online marketing activities are best delivered as a partnership between the service provider and the client. There is a mutual investment required to deliver return on investment.
                </p>
              </div>

              {/* Consistency */}
              <div className="bg-surface-dark/50 border border-border/50 rounded-xl p-6 hover:border-cta/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-cta" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Consistency</h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Clients will know who they are working with by name, and a low rate of turnover will be part of the Dialed-In Web culture.
                </p>
              </div>

              {/* Ethical Practices */}
              <div className="bg-surface-dark/50 border border-border/50 rounded-xl p-6 hover:border-cta/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-cta" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Ethical Practices</h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  We provide search engine marketing services that are in line with the major search engines' quality guidelines.
                </p>
              </div>

              {/* Competency */}
              <div className="bg-surface-dark/50 border border-border/50 rounded-xl p-6 hover:border-cta/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cta" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Competency</h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Services will be delivered by the most experienced, expert staff available. Our team invests in their own personal development to stay on top of trends and algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;