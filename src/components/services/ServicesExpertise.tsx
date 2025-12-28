import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin, Map, MousePointerClick, Share2, Mail, Award } from "lucide-react";

const hubs = [
  {
    icon: MapPin,
    title: "Local SEO",
    slug: "local-seo",
    summary: "White label local SEO services that dominate organic search results and drive qualified traffic from your clients' service areas.",
    spokes: [
      { title: "On-Page Local Optimization", description: "Location-specific title tags, meta descriptions, schema markup, and content that signals relevance." },
      { title: "Technical SEO for Multi-Location", description: "Site architecture, internal linking, and crawlability fixes for service area hierarchy." },
      { title: "Local Content Strategy", description: "Service area pages, location-specific content, and FAQ sections that capture long-tail queries." },
      { title: "Local Link Acquisition", description: "Outreach to local publications and community organizations that build geographic authority." },
      { title: "Keyword Research & Mapping", description: "Comprehensive local keyword discovery, search intent analysis, and strategic mapping to pages." },
      { title: "Competitor & Market Analysis", description: "Deep analysis of local competitors' strategies, ranking factors, and market opportunities." },
    ]
  },
  {
    icon: Map,
    title: "Google Maps Optimization",
    slug: "google-maps",
    summary: "White label Google Maps optimization to own the local 3-pack and drive calls directly from Google Business Profile listings.",
    spokes: [
      { title: "Google Business Profile Management", description: "Complete profile optimization including categories, attributes, services, and posts." },
      { title: "Review Generation & Response", description: "Systematic review acquisition and professional response management." },
      { title: "Citation Building & Cleanup", description: "NAP consistency across 50+ directories and data aggregators." },
      { title: "Local Pack Ranking Strategy", description: "Proximity optimization and category targeting for high-intent searches." },
      { title: "Photo & Media Optimization", description: "Professional photo management, virtual tours, and visual content strategies." },
      { title: "Multi-Location GBP Management", description: "Scalable systems for managing dozens or hundreds of locations with consistent branding." },
    ]
  },
  {
    icon: MousePointerClick,
    title: "Paid Media",
    slug: "paid-media",
    summary: "White label paid media management for Google Ads and Meta ads—campaigns built for calls and conversions.",
    spokes: [
      { title: "Local Search Campaign Structure", description: "Service area targeting and keyword strategies for local lead generation." },
      { title: "Landing Page Optimization", description: "Conversion-focused pages with local trust signals and form optimization." },
      { title: "Bid Strategy & Budget Allocation", description: "Smart bidding and budget pacing that maximizes lead volume." },
      { title: "Call Tracking & Attribution", description: "Call recording, lead scoring, and multi-touch attribution." },
      { title: "Ad Copy & Extension Testing", description: "Continuous A/B testing of headlines, descriptions, and callouts to improve performance." },
      { title: "Negative Keyword Management", description: "Ongoing search term analysis and refinement to eliminate waste and improve lead quality." },
    ]
  },
  {
    icon: Share2,
    title: "Meta Ads",
    slug: "paid-media",
    summary: "White label social advertising on Facebook and Instagram to build local awareness and capture demand.",
    spokes: [
      { title: "Local Audience Targeting", description: "Geographic, demographic, and interest-based audiences for each service area." },
      { title: "Creative Strategy & Production", description: "Thumb-stopping ad creative and video content optimized for local service businesses." },
      { title: "Retargeting & Lookalike Campaigns", description: "Website visitor retargeting and lookalike audience expansion." },
      { title: "Lead Form Optimization", description: "Native lead forms and landing page integration for conversions." },
      { title: "Campaign Budget Optimization", description: "Strategic budget allocation across campaigns and ad sets to maximize ROAS." },
      { title: "Performance Reporting & Insights", description: "Detailed analytics dashboards, audience insights, and actionable recommendations." },
    ]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    slug: "email-marketing",
    summary: "White label email marketing to nurture leads and drive repeat business through strategic campaigns and automation.",
    spokes: [
      { title: "Campaign Strategy & Design", description: "Custom templates and send schedules that maximize engagement." },
      { title: "Automation Sequences", description: "Welcome series and nurture flows that convert leads into customers." },
      { title: "List Management & Segmentation", description: "Clean list hygiene and audience segmentation for better deliverability." },
      { title: "Performance Analytics", description: "Open rates, A/B testing insights, and ROI analysis." },
      { title: "Drip Campaign Development", description: "Multi-touch email sequences tailored to buyer stages that move prospects toward conversion." },
      { title: "Deliverability & Compliance", description: "SPF, DKIM, DMARC configuration, CAN-SPAM compliance, and sender reputation management." },
    ]
  },
  {
    icon: Award,
    title: "Authority Building",
    slug: "authority",
    summary: "White label authority building to establish trust signals and credibility markers that support ranking stability.",
    spokes: [
      { title: "Digital PR & Media Placements", description: "Press distribution and earned media that builds authority." },
      { title: "Industry Directory Listings", description: "Strategic placement in industry-specific directories and associations." },
      { title: "Local Sponsorships & Partnerships", description: "Community event sponsorships that create authentic local signals." },
      { title: "Reputation & Trust Management", description: "Review monitoring, sentiment analysis, and brand mention tracking." },
      { title: "Thought Leadership Content", description: "Expert articles and guest posts that position clients as authorities." },
      { title: "Awards & Recognition Strategy", description: "Strategic award submissions and certification pursuits that build credibility." },
    ]
  }
];

const ServicesExpertise = () => {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpandedIndices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const isExpanded = (index: number) => expandedIndices.has(index);

  return (
    <section className="py-20 lg:py-28 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent-blue text-sm font-medium uppercase tracking-widest mb-3">
              White Label Inbound Marketing Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Deep Expertise Across Inbound Marketing
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Each white label inbound marketing service is backed by specialized knowledge and proven processes. 
              Click any topic to explore what&apos;s included, or visit the service page for full details.
            </p>
          </div>

          {/* Hub Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hubs.map((hub, index) => (
              <div 
                key={index}
                className={`bg-surface-elevated border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  isExpanded(index) 
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
                      isExpanded(index) ? "rotate-180" : ""
                    }`} 
                  />
                </div>

                <p className="text-text-secondary text-sm mb-3">
                  {hub.summary}
                </p>

                {/* Spokes - Crawlable */}
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    isExpanded(index) ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-border/50 space-y-4">
                    {hub.spokes.map((spoke, spokeIndex) => (
                      <div key={spokeIndex} className="pl-3 border-l-2 border-accent-blue/30">
                        <p className="text-sm font-medium text-foreground">{spoke.title}</p>
                        <p className="text-text-secondary text-xs mt-1">{spoke.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Internal link to service page */}
                  <Link 
                    to={`/services/${hub.slug}`}
                    className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent-blue hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View full {hub.title} service details →
                  </Link>
                </div>

                {!isExpanded(index) && (
                  <p className="text-accent-blue text-xs font-medium">
                    {hub.spokes.length} areas — Click to explore
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesExpertise;
