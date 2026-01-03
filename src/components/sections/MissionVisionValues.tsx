import { Target, Eye, Shield, Handshake, Users, CheckCircle, Sparkles, ArrowRight, Phone } from "lucide-react";
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {/* Mission */}
            <div className="bg-surface-dark border border-border rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center border-2 border-cta">
                  <Target className="w-6 h-6 text-cta" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-lg">
                To give agency partners a fulfillment relationship they can rely on. We deliver ethical, results-driven digital marketing that helps local businesses across America grow. Every engagement is scoped to the market reality, executed with precision, and communicated with complete transparency.
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
                To be the fulfillment partner agencies never have to second-guess. We believe when agencies can count on their backend operations, they can focus on growth, client relationships, and building something meaningful. Together, we help American small businesses thrive through marketing that actually works.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-8">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-foreground mb-3">Our Core Values</h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                We believe agency partnerships thrive on reliability and ethical execution. Every engagement is built on sustainable, white-hat practices that protect your reputation and deliver results you can stand behind.
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
                  We do what we say. Your agency can count on deliverables that match the scope, timelines that hold, and work you never have to apologize for.
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
                  Full visibility into every campaign. You get complete reports, agreed-upon strategies, and no surprises. Ever.
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
                  We succeed when you succeed. This is a mutual investment: we bring the execution, you bring the client relationship, and together we deliver results.
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
                  Same team. Same process. Low turnover means your agency works with people who know your clients and deliver consistent quality month after month.
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
                  Only white-hat tactics that align with search engine guidelines. Your clients get sustainable rankings. Your agency keeps its reputation intact.
                </p>
              </div>

              {/* Competency */}
              <div className="bg-surface-dark/50 border border-border/50 rounded-xl p-6 hover:border-cta/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cta/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cta" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">Expertise</h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Experienced specialists, not junior contractors. Our team stays current on algorithms and trends so you can confidently sell what we deliver.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-24">
              <a href="#contact" className="btn-cta group">
                Explore a Partnership
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="tel:2143072995"
                className="flex items-center gap-2 px-6 py-4 rounded-lg border border-border text-foreground hover:bg-surface-elevated transition-colors"
              >
                <Phone className="h-5 w-5" />
                (214) 307-2995
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;