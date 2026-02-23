import { Target, Eye, Shield, Handshake, Users, CheckCircle, Sparkles, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

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
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm text-accent-blue uppercase tracking-widest font-medium mb-4">
              Our Foundation
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight max-w-3xl mx-auto">
              Mission, Vision & Values
            </h2>
          </div>

          {/* Mission & Vision - Two column layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {/* Mission */}
            <div className="bg-surface-dark border border-border rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center border-2 border-accent-blue">
                  <Target className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-lg">
                To build connected marketing systems that generate more booked service calls for plumbing and HVAC companies. Every campaign is scoped to your market reality, executed by people who understand how trade businesses operate, and reported in terms that show up on your dispatch board.
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
                To be the growth partner plumbing and HVAC companies never have to second-guess. When operators can trust their marketing is working, they can focus on running strong shops, retaining good techs, and growing on their own terms.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-8">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Core Values</h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Every engagement is built on transparent execution and measurable outcomes. No black boxes. No vanity metrics. No tactics that don't tie back to booked calls.
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
                  We build strategies we can stand behind. No keyword stuffing, no misleading ad copy, no inflated reporting. What we tell you we're doing is exactly what we're doing.
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
                  You see every dollar, every campaign, every result. We report on booked calls, cost per booked call, and booking rate: because those are the numbers that matter to your business.
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
                  We take one plumbing client and one HVAC client per market. Your growth is our only focus in your territory. There is no divided loyalty here.
                </p>
              </div>

              {/* Reliability */}
              <div className="bg-surface-dark/50 border border-border/50 rounded-xl p-6 hover:border-cta/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-cta" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Reliability</h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Same team. Consistent process. Proactive communication. You should never have to chase your marketing partner for updates.
                </p>
              </div>

              {/* Ethical Practices */}
              <div className="bg-surface-dark/50 border border-border/50 rounded-xl p-6 hover:border-cta/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-cta" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Ethical Execution</h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  We use only white-hat SEO and compliant paid advertising practices. Your rankings and reputation are built to last.
                </p>
              </div>

              {/* Competency */}
              <div className="bg-surface-dark/50 border border-border/50 rounded-xl p-6 hover:border-cta/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cta" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Trade Expertise</h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  We understand LSA optimization, service-area SEO, seasonal demand shifts, and the metrics plumbing and HVAC operators actually use to run their businesses.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-24">
              <Link 
                to="/contact" 
                className="btn-cta group"
              >
                Explore a Partnership
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a 
                href={PHONE_HREF}
                className="flex items-center gap-2 px-6 py-4 rounded-lg border border-border text-foreground hover:bg-surface-elevated transition-colors"
              >
                <Phone className="h-5 w-5" />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;