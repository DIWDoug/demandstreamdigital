import { useState } from "react";
import { ChevronDown, MapPin, Map, MousePointerClick, Share2, FileText, Award } from "lucide-react";

const TopicalExpertise = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      id: "local-seo",
      icon: MapPin,
      title: "White Label Local SEO",
      summary: "Dominate local organic search results.",
      spokes: [
        "On-Page Local Optimization",
        "Technical SEO for Multi-Location",
        "Service Area Page Development",
        "Local Link Acquisition",
        "Competitor Gap Analysis",
        "Local Schema Implementation"
      ]
    },
    {
      id: "google-maps",
      icon: Map,
      title: "White Label Google Maps Optimization",
      summary: "Own the local 3-pack.",
      spokes: [
        "Google Business Profile Management",
        "Review Generation & Response",
        "Structured Citation Consistency",
        "Data Aggregator Distribution",
        "Local Pack Ranking Strategy",
        "GBP Post Strategy"
      ]
    },
    {
      id: "google-ads",
      icon: MousePointerClick,
      title: "White Label Google Ads",
      summary: "Capture high-intent local searches.",
      spokes: [
        "Local Search Campaign Structure",
        "Landing Page Optimization",
        "Bid Strategy & Budget Allocation",
        "Call Tracking & Attribution",
        "Local Service Ads (LSA)",
        "Performance Max for Local"
      ]
    },
    {
      id: "meta-ads",
      icon: Share2,
      title: "White Label Meta Ads",
      summary: "Build local awareness through social.",
      spokes: [
        "Local Audience Targeting",
        "Creative Strategy & Production",
        "Retargeting & Lookalike Campaigns",
        "Lead Form Optimization",
        "Video Ad Production",
        "Cross-Platform Attribution"
      ]
    },
    {
      id: "content-marketing",
      icon: FileText,
      title: "White Label Content Marketing",
      summary: "Build topical authority that ranks.",
      spokes: [
        "Topical Content Strategy",
        "Service-Focused Pillar Content",
        "Geographic Content Writing",
        "AI Visibility & Citation Strategy",
        "Blog Content Production",
        "Content Refresh & Optimization"
      ]
    },
    {
      id: "authority-building",
      icon: Award,
      title: "White Label Authority Building",
      summary: "Establish trust signals that last.",
      spokes: [
        "Digital PR & Media Placements",
        "Vendor & Partner Testimonial Links",
        "Industry Directory Listings",
        "Local Sponsorship & Partnerships",
        "HARO & Expert Commentary",
        "Guest Posting & Thought Leadership"
      ]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header - simplified */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-foreground">
            Full-Stack Local Marketing
          </h2>
          <p className="text-text-secondary">
            Everything your agency needs. Delivered under your brand.
          </p>
        </div>

        {/* Clean grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              id={service.id}
              className={`group cursor-pointer rounded-xl p-6 transition-all duration-300 border ${
                expandedIndex === index 
                  ? "bg-surface-elevated border-accent-blue/40" 
                  : "bg-surface-card/50 border-border/30 hover:border-border/60"
              }`}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <service.icon className="h-5 w-5 text-accent-blue" />
                  <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
                </div>
                <ChevronDown 
                  className={`h-4 w-4 text-text-muted transition-transform duration-200 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </div>

              {/* Summary */}
              <p className="text-sm text-text-secondary mb-3">
                {service.summary}
              </p>

              {/* Expanded spokes */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-3 border-t border-border/30">
                  <ul className="space-y-2">
                    {service.spokes.map((spoke, spokeIndex) => (
                      <li 
                        key={spokeIndex}
                        className="text-sm text-text-muted flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-accent-blue rounded-full" />
                        {spoke}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicalExpertise;