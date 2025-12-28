import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin, Map, MousePointerClick, Share2, Mail, Award } from "lucide-react";

const hubs = [
  {
    icon: MapPin,
    title: "Local SEO",
    slug: "local-seo",
    whatItSolves: "Organic visibility in local search results",
    whenActivated: "Foundation for most local businesses",
    spokes: ["On-page optimization", "Technical SEO", "Local content", "Link acquisition", "Keyword research"]
  },
  {
    icon: Map,
    title: "Google Maps Optimization",
    slug: "google-maps",
    whatItSolves: "Dominate the local 3-pack for high-intent searches",
    whenActivated: "When local pack visibility drives calls",
    spokes: ["GBP management", "Review generation", "Citation building", "Photo optimization", "Multi-location management"]
  },
  {
    icon: MousePointerClick,
    title: "Paid Media",
    slug: "paid-media",
    whatItSolves: "Capture demand through intentional spend",
    whenActivated: "When immediate lead flow is priority",
    spokes: ["Search campaigns", "Landing pages", "Bid strategy", "Call tracking", "Ad testing"]
  },
  {
    icon: Share2,
    title: "Meta Ads",
    slug: "paid-media",
    whatItSolves: "Build awareness and capture social demand",
    whenActivated: "When visual storytelling fits the market",
    spokes: ["Audience targeting", "Creative strategy", "Retargeting", "Lead forms", "Performance reporting"]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    slug: "email-marketing",
    whatItSolves: "Nurture leads and drive repeat business",
    whenActivated: "When list size supports engagement",
    spokes: ["Campaign design", "Automation sequences", "List segmentation", "Performance analytics", "Deliverability"]
  },
  {
    icon: Award,
    title: "Authority Building",
    slug: "authority",
    whatItSolves: "Trust signals that support ranking stability",
    whenActivated: "When credibility unlocks next-level results",
    spokes: ["Digital PR", "Directory listings", "Local sponsorships", "Thought leadership", "Awards strategy"]
  }
];

const ServicesExpertise = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              White Label Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              White Label Inbound Marketing Services
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Each service solves a specific problem. Click to explore what's included, 
              or visit the service page for details.
            </p>
          </div>

          {/* Hub Cards - Simplified */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hubs.map((hub, index) => (
              <div 
                key={index}
                className={`bg-surface-elevated border rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                  expandedIndex === index 
                    ? "border-accent-blue/50 ring-1 ring-accent-blue/20" 
                    : "border-border/50 hover:border-border"
                }`}
                onClick={() => toggleExpand(index)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent-blue/10 border border-accent-blue/20">
                      <hub.icon className="h-5 w-5 text-accent-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{hub.title}</h3>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-text-muted transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`} 
                  />
                </div>

                {/* What it solves */}
                <p className="text-foreground font-medium text-sm mb-1">
                  {hub.whatItSolves}
                </p>
                <p className="text-text-muted text-xs">
                  {hub.whenActivated}
                </p>

                {/* Expanded - Spokes + Link */}
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 mt-4 border-t border-border/50">
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {hub.spokes.map((spoke, spokeIndex) => (
                        <span 
                          key={spokeIndex} 
                          className="text-xs px-2 py-1 bg-surface-dark rounded-md text-text-secondary"
                        >
                          {spoke}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/inbound-marketing-services/${hub.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View {hub.title} details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesExpertise;