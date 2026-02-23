import { BookOpen, Users, GraduationCap } from "lucide-react";

const ContinuingEducation = () => {
  const currentlyStudying = [
    "Google LSA ranking factors and verification requirements for plumbing and HVAC",
    "Local search algorithm updates affecting Maps pack visibility",
    "Hub and spoke SEO methodology for trade service area authority",
    "Call tracking and attribution models for multi-channel service campaigns",
    "AI search integration and its effect on local service queries",
    "GBP service-to-content alignment for maximum local visibility",
    "ServiceTitan and Housecall Pro integration with marketing attribution",
  ];

  const industryVoices = [
    { name: "Whitespark", focus: "Local SEO" },
    { name: "Matt Diggity", focus: "SEO & Link Building" },
    { name: "Neil Patel", focus: "Growth Marketing" },
    { name: "HubSpot", focus: "Inbound Marketing" },
    { name: "Darryl Rosser", focus: "SEO Best Practices" },
    { name: "Josh Nelson", focus: "Agency Growth in the Trades" },
  ];

  return (
    <section className="pt-28 lg:pt-32 pb-24 lg:pb-32 bg-surface-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent-blue/30 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm text-accent-blue uppercase tracking-widest mb-6 font-medium">
            Always Growing
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Staying Ahead of Plumbing & HVAC Marketing Changes
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Local search algorithms change. Google Local Service Ads evolve. The rules around Google Business Profile shift. We stay current so our clients don't have to.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* What We're Studying */}
          <div className="p-8 rounded-2xl bg-surface-elevated/50 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                <BookOpen className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">What We're Studying Now</h3>
            </div>
            
            <div className="space-y-1">
              {currentlyStudying.map((topic, index) => (
                <div key={index} className="flex items-start gap-3 py-3">
                  <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 shrink-0" />
                  <span className="text-text-secondary text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who We Learn From */}
          <div className="p-8 rounded-2xl bg-surface-elevated/50 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                <Users className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Industry Voices We Follow</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {industryVoices.map((voice, index) => (
                <div key={index} className="p-4 rounded-lg bg-surface-dark/50 border border-border/30 transition-all duration-300 hover:border-accent-blue/40 hover:bg-surface-dark/80 hover:scale-[1.02] cursor-default">
                  <p className="font-semibold text-foreground text-sm">{voice.name}</p>
                  <p className="text-text-muted text-xs">{voice.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-accent-blue" />
            <span className="text-sm text-text-muted uppercase tracking-wider font-medium">Our Commitment</span>
          </div>
          <p className="text-text-secondary italic font-serif">
            "When you work with DemandStream, you're getting a team that stays current on what actually moves the needle for plumbing and HVAC companies — not a team recycling last year's playbook."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContinuingEducation;
