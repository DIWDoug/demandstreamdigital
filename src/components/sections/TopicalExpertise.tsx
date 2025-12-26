import { useState } from "react";
import { ChevronDown, MapPin, Map, MousePointerClick, Share2, FileText, Award } from "lucide-react";

const TopicalExpertise = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      id: "local-seo",
      icon: MapPin,
      title: "White Label Local SEO",
      summary: "Dominate local organic search results with comprehensive on-page optimization, technical SEO foundations, and strategic link acquisition that positions your clients as the obvious choice in their market.",
      description: "Local SEO requires understanding how Google interprets geographic relevance, service intent, and business authority. We build the complete technical and content foundation that allows local businesses to rank consistently across their service areas.",
      spokes: [
        { name: "On-Page Local Optimization", detail: "Title tags, meta descriptions, header structure, and content optimization aligned to local search intent and geographic modifiers." },
        { name: "Technical SEO for Multi-Location", detail: "Site architecture, internal linking, crawl optimization, and structured data implementation for businesses serving multiple areas." },
        { name: "Service Area Page Development", detail: "Unique, substantive pages for each service-location combination that satisfy both user intent and search engine quality guidelines." },
        { name: "Local Link Acquisition", detail: "Strategic outreach to local organizations, industry directories, and community partners that build genuine geographic relevance." },
        { name: "Competitor Gap Analysis", detail: "Systematic evaluation of competitor positioning, keyword opportunities, and content gaps that inform strategy and prioritization." },
        { name: "Local Schema Implementation", detail: "LocalBusiness, Service, and geographic schema markup that helps search engines understand business context and service areas." }
      ]
    },
    {
      id: "google-maps",
      icon: Map,
      title: "White Label Google Maps Optimization",
      summary: "Own the local 3-pack with comprehensive Google Business Profile management, review generation systems, and citation consistency that establishes your clients as trusted local authorities.",
      description: "The local pack is where most local searches convert. We manage every signal that influences map rankings—from profile completeness to review velocity to citation accuracy across the data ecosystem.",
      spokes: [
        { name: "Google Business Profile Management", detail: "Complete profile optimization including categories, attributes, services, products, and ongoing content that maximizes visibility and conversion." },
        { name: "Review Generation & Response", detail: "Systematic review acquisition workflows and professional response templates that build reputation and demonstrate customer engagement." },
        { name: "Structured Citation Consistency", detail: "NAP accuracy across core directories, industry-specific listings, and local data sources that establish business legitimacy." },
        { name: "Data Aggregator Distribution", detail: "Submission to major data aggregators that feed business information to hundreds of downstream directories and platforms." },
        { name: "Local Pack Ranking Strategy", detail: "Ongoing optimization focused on the specific signals that influence local pack placement including proximity, relevance, and prominence." },
        { name: "GBP Post Strategy", detail: "Regular posting cadence with offers, updates, and content that keeps profiles active and engaging for potential customers." }
      ]
    },
    {
      id: "google-ads",
      icon: MousePointerClick,
      title: "White Label Google Ads",
      summary: "Capture high-intent local searches with precisely structured campaigns, optimized landing pages, and attribution systems that prove ROI to clients every month.",
      description: "Local paid search requires understanding service-based buying behavior, geographic bid modifiers, and the landing page experience that converts clicks into calls. We build campaigns that deliver measurable leads.",
      spokes: [
        { name: "Local Search Campaign Structure", detail: "Account architecture designed for local service businesses including geographic targeting, ad scheduling, and keyword segmentation." },
        { name: "Landing Page Optimization", detail: "Conversion-focused landing pages with clear calls-to-action, trust signals, and tracking implementation that maximize lead quality." },
        { name: "Bid Strategy & Budget Allocation", detail: "Smart bidding implementation, budget pacing, and ongoing optimization that balances volume with cost-per-acquisition targets." },
        { name: "Call Tracking & Attribution", detail: "Phone call tracking, form submission attribution, and reporting infrastructure that connects ad spend to actual business outcomes." },
        { name: "Local Service Ads (LSA)", detail: "Google Guaranteed and Screened setup, review management, and optimization for service businesses in eligible categories." },
        { name: "Performance Max for Local", detail: "Asset optimization, audience signals, and creative strategy for Google's AI-driven campaign type focused on local objectives." }
      ]
    },
    {
      id: "meta-ads",
      icon: Share2,
      title: "White Label Meta Ads",
      summary: "Build local awareness and generate leads through Facebook and Instagram with creative strategy, precise targeting, and retargeting systems that nurture prospects into customers.",
      description: "Social advertising for local businesses requires understanding how to reach geographic audiences, create thumb-stopping creative, and build retargeting sequences that move prospects through the consideration journey.",
      spokes: [
        { name: "Local Audience Targeting", detail: "Geographic targeting, interest-based segmentation, and custom audience development that reaches the right local prospects." },
        { name: "Creative Strategy & Production", detail: "Ad creative development including static images, carousels, and short-form video optimized for local service messaging." },
        { name: "Retargeting & Lookalike Campaigns", detail: "Website visitor retargeting, customer list lookalikes, and sequential messaging that nurtures prospects toward conversion." },
        { name: "Lead Form Optimization", detail: "Meta lead form setup, qualification questions, and CRM integration that delivers quality leads directly to client systems." },
        { name: "Video Ad Production", detail: "Short-form video content designed for social consumption including testimonial clips, service showcases, and promotional content." },
        { name: "Cross-Platform Attribution", detail: "Conversion tracking, pixel implementation, and reporting that connects social ad spend to measurable business outcomes." }
      ]
    },
    {
      id: "content-marketing",
      icon: FileText,
      title: "White Label Content Marketing",
      summary: "Build topical authority that ranks in search engines and gets cited by AI systems through strategic content development, pillar page architecture, and ongoing optimization.",
      description: "Content marketing for local businesses requires understanding topical authority, geographic content strategy, and the evolving landscape of AI-driven search. We create content systems that compound over time.",
      spokes: [
        { name: "Topical Content Strategy", detail: "Content planning based on topical authority principles, keyword clustering, and competitive content gap analysis." },
        { name: "Service-Focused Pillar Content", detail: "Comprehensive pillar pages for core services that establish expertise and serve as hubs for supporting content." },
        { name: "Geographic Content Writing", detail: "Location-specific content that demonstrates local expertise without creating thin doorway pages that risk algorithmic penalties." },
        { name: "AI Visibility & Citation Strategy", detail: "Content optimization for AI systems including structured data, clear entity relationships, and authoritative sourcing." },
        { name: "Blog Content Production", detail: "Ongoing blog content that addresses customer questions, demonstrates expertise, and supports internal linking architecture." },
        { name: "Content Refresh & Optimization", detail: "Systematic content auditing and updating that maintains relevance, improves performance, and prevents content decay." }
      ]
    },
    {
      id: "authority-building",
      icon: Award,
      title: "White Label Authority Building",
      summary: "Establish trust signals that last through digital PR, strategic link acquisition, and industry positioning that builds genuine authority over time.",
      description: "Authority cannot be manufactured—it must be earned through consistent visibility, genuine relationships, and content that demonstrates expertise. We build the backlink profiles and brand signals that establish long-term credibility.",
      spokes: [
        { name: "Digital PR & Media Placements", detail: "Press release distribution, journalist outreach, and media placement strategies that generate coverage and high-authority links." },
        { name: "Vendor & Partner Testimonial Links", detail: "Strategic relationship development with vendors, suppliers, and partners that results in genuine testimonial placements and backlinks." },
        { name: "Industry Directory Listings", detail: "Submission to relevant industry associations, professional organizations, and niche directories that signal expertise and legitimacy." },
        { name: "Local Sponsorship & Partnerships", detail: "Community involvement strategies including local sponsorships, event partnerships, and nonprofit relationships that build local authority." },
        { name: "HARO & Expert Commentary", detail: "Journalist query responses and expert commentary placements that position clients as authoritative sources in their industries." },
        { name: "Guest Posting & Thought Leadership", detail: "Strategic content placement on industry publications and relevant platforms that builds visibility and earns contextual backlinks." }
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
                {expandedIndex === index ? service.description : service.summary}
              </p>

              {/* Expanded spokes */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-4 border-t border-border/30 space-y-4">
                  {service.spokes.map((spoke, spokeIndex) => (
                    <div key={spokeIndex}>
                      <h4 className="text-sm font-medium text-foreground mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent-blue rounded-full flex-shrink-0" />
                        {spoke.name}
                      </h4>
                      <p className="text-sm text-text-muted pl-3.5">
                        {spoke.detail}
                      </p>
                    </div>
                  ))}
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