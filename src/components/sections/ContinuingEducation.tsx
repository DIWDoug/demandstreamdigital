import { BookOpen, Users } from "lucide-react";

const ContinuingEducation = () => {
  const currentlyStudying = [
    "Google LSA ranking factors and verification requirements for plumbing and HVAC",
    "Local search algorithm updates affecting Maps pack visibility",
    "Hub and spoke SEO methodology for trade service area authority",
    "Call tracking and attribution models for multi-channel service campaigns",
    "AI search integration and its effect on local service queries",
    "GBP service-to-content alignment for maximum local visibility",
    "ServiceTitan and Housecall Pro integration with marketing attribution",
    "Multi-location GMB optimization strategies",
    "Advanced local citation building techniques",
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
    <section className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Continuing Education
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            The digital landscape never stops evolving, and neither do we. Our team stays ahead of algorithm changes and masters emerging strategies before they go mainstream.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* What We're Studying */}
          <div className="p-8 rounded-2xl bg-surface-elevated border border-border/60">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                <BookOpen className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">What We're Studying Now</h3>
            </div>

            <div className="space-y-0">
              {currentlyStudying.map((topic, index) => (
                <div key={index} className="flex items-start gap-3 py-3 border-b border-border/20 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 shrink-0" />
                  <span className="text-text-secondary text-sm leading-relaxed">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Voices */}
          <div className="p-8 rounded-2xl bg-surface-elevated border border-border/60">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                <Users className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Industry Voices We Follow</h3>
            </div>

            <div className="grid grid-cols-3 gap-0">
              {industryVoices.map((voice, index) => (
                <div
                  key={index}
                  className="py-4 px-3 border-b border-r border-border/20 last:border-b-0 [&:nth-child(3n)]:border-r-0 [&:nth-last-child(-n+3)]:border-b-0"
                >
                  <p className="font-semibold text-foreground text-sm leading-snug mb-0.5">{voice.name}</p>
                  <p className="text-text-muted text-xs leading-snug">{voice.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinuingEducation;
