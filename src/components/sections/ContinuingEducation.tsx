import { BookOpen, Users } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const ContinuingEducation = () => {
  const currentlyStudying = [
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
    "Hub & Spoke SEO methodology for topical authority domination",
    "Whitespark's Local Search Ranking Factors 2026 deep dive",
    "High-impact link building through strategic outreach campaigns",
    "AI-powered SEO tactics that future-proof your rankings",
    "Ryan Reynolds' workout routine (for research purposes)",
    "GBP service-to-content expansion for maximum local visibility",
    "Operational Streamlining for agency efficiency",
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
          <div className="p-8 rounded-2xl bg-surface-elevated border border-border/60 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                <BookOpen className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">What We're Studying Now</h3>
            </div>

            <ScrollArea className="h-80">
              <div className="space-y-0 pr-4">
                {currentlyStudying.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 py-3 border-b border-border/20 last:border-0">
                    <div className="w-2 h-2 rounded-full bg-accent-blue mt-2 shrink-0" />
                    <span className="text-text-secondary text-sm leading-relaxed">{topic}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
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
