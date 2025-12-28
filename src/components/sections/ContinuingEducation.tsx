import { BookOpen, TrendingUp, Users, Lightbulb, GraduationCap, Podcast } from "lucide-react";

const ContinuingEducation = () => {
  const currentlyStudying = [
    "Hub & Spoke SEO methodology for topical authority domination",
    "Whitespark's Local Search Ranking Factors 2026 deep dive",
    "High-impact link building through strategic outreach campaigns",
    "AI-powered SEO tactics that future-proof your rankings",
    "Ryan Reynolds' workout routine (for research purposes)",
    "GBP service-to-content expansion for maximum local visibility",
    "Operational Streamlining for agency efficiency",
    "Cameron Herold's COO Alliance leadership systems",
    "How to teach my dog to speak Mandarin",
    "Edward Sturm's Compact Keywords strategy",
    "Caleb Ulku's AI SEO Mastery framework",
    "The logistics of Taylor Swift's Eras Tour (it's actually impressive)",
    "Matthew Woodward's Search Logistics Content approach",
    "Advanced local citation building techniques",
    "Multi-location GMB optimization strategies",
    "The art of bonsai tree trimming (patience is a virtue)",
    "Conversion rate optimization for service businesses",
    "Client retention and upsell frameworks",
    "Schema markup for enhanced SERP visibility",
    "Review generation and reputation management tactics",
    "Local landing page optimization best practices",
    "Google Business Profile post strategies",
    "Competitor analysis and gap identification",
    "Technical SEO auditing methodologies",
    "Go High Level CRM automation and workflows",
    "Loganix link building and citation strategies",
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
      {/* Top divider from LocalGrowthEngine light section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FCFCFA] to-transparent opacity-10" />
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-cta/30 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm text-accent-blue uppercase tracking-widest mb-6 font-medium">
            Always Growing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Continuing Education
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            The digital landscape never stops evolving, and neither do we. Our team is committed to continuous learning, staying ahead of algorithm changes, and mastering emerging strategies before they become mainstream.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* What We're Studying - Scrolling */}
          <div className="p-8 rounded-2xl bg-surface-elevated/50 border border-border/50 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                <BookOpen className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold text-foreground">What We're Studying Now</h3>
            </div>
            
            {/* Scrolling container */}
            <div className="relative h-[400px] overflow-hidden">
              {/* Fade overlays */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-surface-elevated/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-surface-elevated/80 to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling content */}
              <div className="animate-scroll-vertical">
                {[...currentlyStudying, ...currentlyStudying].map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 py-3">
                    <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 shrink-0" />
                    <span className="text-text-secondary text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
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
          <p className="text-text-secondary italic">
            "When you partner with us, you're not just getting today's best practices—you're getting a team that's already preparing for tomorrow's."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContinuingEducation;