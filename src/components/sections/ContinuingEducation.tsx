import { BookOpen, TrendingUp, Users, Lightbulb, GraduationCap, Podcast } from "lucide-react";

const ContinuingEducation = () => {
  const currentlyStudying = [
    "AI-powered search optimization & LLM visibility",
    "Local algorithm updates & ranking factors",
    "Advanced conversion rate optimization",
    "First-party data strategies post-cookie",
  ];

  const industryVoices = [
    { name: "Neil Patel", focus: "Growth Marketing" },
    { name: "Whitespark CA", focus: "Local SEO" },
    { name: "Alex Hormozi", focus: "Offer Strategy" },
    { name: "Caleb Ulku", focus: "AI SEO Proximity Ranking" },
    { name: "Matt Diggity", focus: "SEO & Link Building" },
    { name: "Lead Gen Jay", focus: "Lead Generation" },
    { name: "Edward Sturm", focus: "Growth Hacking" },
    { name: "HubSpot", focus: "Inbound Marketing" },
    { name: "Single Grain", focus: "Digital Marketing" },
    { name: "Darryl Rosser", focus: "SEO Best Practices" },
    { name: "Matthew Woodward", focus: "Link Building & Outreach" },
    { name: "Josh Nelson", focus: "Agency Growth" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-cta/30 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm text-cta uppercase tracking-widest mb-6 font-medium">
            Always Growing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Continuing Education
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The digital landscape never stops evolving—and neither do we. Our team is committed to continuous learning, staying ahead of algorithm changes, and mastering emerging strategies before they become mainstream.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What We're Studying */}
          <div className="p-8 rounded-2xl bg-surface-elevated/50 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cta/10 border border-cta/20">
                <BookOpen className="w-6 h-6 text-cta" />
              </div>
              <h3 className="text-xl font-bold text-foreground">What We're Studying Now</h3>
            </div>
            <ul className="space-y-4">
              {currentlyStudying.map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cta mt-2 shrink-0" />
                  <span className="text-text-secondary">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Learn From */}
          <div className="p-8 rounded-2xl bg-surface-elevated/50 border border-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                <Users className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Industry Voices We Follow</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {industryVoices.map((voice, index) => (
                <div key={index} className="p-4 rounded-lg bg-surface-dark/50 border border-border/30">
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
            <GraduationCap className="w-5 h-5 text-cta" />
            <span className="text-sm text-text-muted uppercase tracking-wider font-medium">Our Commitment</span>
          </div>
          <p className="text-text-secondary italic">
            "When you partner with us, you're not just getting today's best practices—you're getting a team that's already preparing for tomorrow's."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContinuingEducation;