import { useState } from "react";
import { ChevronDown, MapPin, Map, MousePointerClick, Mail, PenTool, BarChart3, Phone, ArrowRight } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const TopicalExpertise = () => {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const hubs = [
    {
      icon: MapPin,
      title: "Local SEO",
      slug: "local-seo",
      summary: "Dominate local organic search results and drive qualified traffic from your service areas.",
      spokes: [
        {
          title: "On-Page Optimization",
          slug: "on-page-optimization",
          description: "Location-specific title tags, meta descriptions, schema markup, and content that signals relevance to search engines for every target market."
        },
        {
          title: "Technical SEO",
          slug: "technical-seo",
          description: "Site architecture, internal linking, and crawlability fixes that help search engines understand your client's service area hierarchy."
        },
        {
          title: "Local Keyword Strategy",
          slug: "local-keyword-strategy",
          description: "Seed keyword development from services and pain points, implicit vs explicit local intent classification, competitor gap analysis, and keyword-to-URL mapping."
        },
        {
          title: "Content Development",
          slug: "content-development",
          description: "Service area pages, location-specific blog content, and FAQ sections that capture long-tail local search queries."
        },
        {
          title: "Link Building",
          slug: "link-building",
          description: "Outreach to local publications, sponsorships, and community organizations that build geographic authority signals."
        },
        {
          title: "Schema Markup",
          slug: "schema-markup",
          description: "Structured data implementation including LocalBusiness, FAQ, and service schemas that enhance visibility in search results and AI Overviews."
        },
        {
          title: "NAP Citations",
          slug: "nap-citations",
          description: "NAP consistency audits, citation cleanup, and directory submissions that validate business identity for rankings and AI visibility."
        }
      ]
    },
    {
      icon: Map,
      title: "GBP SEO",
      slug: "google-maps",
      summary: "Own the local 3-pack and drive calls directly from Google Maps listings.",
      spokes: [
        {
          title: "GBP Profile Optimization",
          slug: "gbp-optimization",
          description: "Complete profile optimization including categories, attributes, services, products, and posts that maximize visibility in map results and AI Overviews."
        },
        {
          title: "Review Generation & Response",
          slug: "review-management",
          description: "Systematic review acquisition strategies and professional response management that builds trust, improves rankings, and feeds AI recommendation systems."
        },
        {
          title: "Citation Building & Cleanup",
          slug: "citation-building",
          description: "NAP consistency across 50+ directories, data aggregators, and AI-cited platforms like Yelp and TripAdvisor that validate business legitimacy."
        },
        {
          title: "Photo & Media Management",
          slug: "photo-optimization",
          description: "Professional photo management, geotagging, and visual content strategies that increase engagement and click-through rates."
        },
        {
          title: "Local Pack Strategy",
          slug: "qa-management",
          description: "Service and product gap analysis with topical map matching between GBP and website pages."
        },
        {
          title: "GBP Posting & Content",
          slug: "post-scheduling",
          description: "Strategic GBP posts, offers, and updates that signal activity and engage searchers."
        }
      ]
    },
    {
      icon: MousePointerClick,
      title: "Paid Media",
      slug: "paid-media",
      summary: "Capture high-intent local searches with campaigns built for calls and form submissions.",
      spokes: [
        {
          title: "Google Ads",
          slug: "google-ads",
          description: "Search, display, and shopping campaigns with service area targeting, location-specific ad groups, and keyword strategies designed for local lead generation."
        },
        {
          title: "Meta Ads",
          slug: "meta-ads",
          description: "Facebook and Instagram campaigns with geographic, demographic, and interest-based audiences tailored to each client's service area."
        },
        {
          title: "Local Service Ads",
          slug: "local-service-ads",
          description: "Google-verified LSAs with pay-per-lead pricing for service businesses."
        },
        {
          title: "Retargeting Campaigns",
          slug: "retargeting-campaigns",
          description: "Website visitor retargeting and lookalike audience expansion via Google Display, Meta, and AdRoll."
        },
        {
          title: "Landing Page Design",
          slug: "landing-page-design",
          description: "Conversion-focused landing pages with local trust signals, click-to-call buttons, and form optimization."
        },
        {
          title: "Conversion Tracking",
          slug: "conversion-tracking",
          description: "Call tracking, form tracking, and multi-touch attribution that proves ROI and informs optimization."
        }
      ]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      slug: "email-marketing",
      summary: "Nurture leads and drive repeat business through strategic email campaigns and automation.",
      spokes: [
        {
          title: "Campaign Strategy",
          slug: "campaign-strategy",
          description: "Editorial calendars, seasonal campaigns, and send cadence planning tailored to local business cycles."
        },
        {
          title: "List Management",
          slug: "list-management",
          description: "Opt-in practices, list hygiene, segmentation, and subscriber cleanup that protects deliverability."
        },
        {
          title: "Automation Flows",
          slug: "automation-flows",
          description: "Welcome sequences, post-service follow-ups, win-back campaigns, and review request automations."
        },
        {
          title: "Newsletter Design",
          slug: "newsletter-design",
          description: "Brand-consistent templates, mobile-optimized layouts, and compelling visual design."
        },
        {
          title: "A/B Testing",
          slug: "ab-testing",
          description: "Subject line testing, send time optimization, and content experiments that improve performance."
        },
        {
          title: "Performance Analytics",
          slug: "performance-analytics",
          description: "Open rates, click rates, conversion tracking, and revenue attribution reporting."
        }
      ]
    },
    {
      icon: PenTool,
      title: "Content Development",
      slug: "content-marketing",
      summary: "Strategic content that ranks locally, converts visitors, and feeds AI discovery systems.",
      spokes: [
        {
          title: "Geographical Content",
          slug: "geographical-content",
          description: "Service area pages that capture local search intent and support Google Business Profile rankings."
        },
        {
          title: "Topical Content",
          slug: "topical-content",
          description: "Industry expertise articles that build topical authority and support GBP rankings through relevance signals."
        },
        {
          title: "Power Posts",
          slug: "power-posts",
          description: "Comprehensive pillar content that dominates competitive keywords and establishes thought leadership."
        },
        {
          title: "E-books & Guides",
          slug: "ebooks-guides",
          description: "Long-form downloadable content that captures leads and demonstrates expertise."
        },
        {
          title: "Lead Generation Magnets",
          slug: "lead-magnets",
          description: "Checklists, templates, and tools that convert visitors into email subscribers."
        },
        {
          title: "Case Studies",
          slug: "case-studies",
          description: "Success stories that build trust and demonstrate real-world results."
        }
      ]
    },
    {
      icon: BarChart3,
      title: "Reporting",
      slug: "reporting",
      summary: "White-label dashboards and reports that prove value and keep clients informed.",
      spokes: [
        {
          title: "White-Label Dashboards",
          slug: "white-label-dashboards",
          description: "Custom-branded dashboards that aggregate performance data across all marketing channels."
        },
        {
          title: "Monthly Performance Reports",
          slug: "monthly-performance-reports",
          description: "Comprehensive monthly reports with insights, recommendations, and next-step actions."
        },
        {
          title: "Rank Tracking & Visibility",
          slug: "rank-tracking-visibility",
          description: "Local and organic rank tracking across target keywords and geographic areas."
        },
        {
          title: "Call Tracking & Attribution",
          slug: "call-tracking-lead-attribution",
          description: "Call recording, lead scoring, and attribution that connects marketing to phone leads."
        },
        {
          title: "ROI & Revenue Analysis",
          slug: "roi-revenue-analysis",
          description: "Revenue attribution and ROI calculations that justify marketing investment."
        },
        {
          title: "Client Presentation Decks",
          slug: "client-presentation-decks",
          description: "Executive summaries and presentation-ready materials for client meetings."
        }
      ]
    }
  ];

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
    <section id="expertise" className="py-24 lg:py-32 bg-surface-dark relative">
      {/* Smooth transition from ServicesGrid */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Deep Expertise Across<br />Local Marketing
          </h2>
          <p className="text-lg text-text-secondary">
            Each service area is backed by specialized knowledge, proven processes, and years of execution experience. Click any topic to explore what's included.
          </p>
        </div>

        {/* Hub cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub, index) => {
            // Map slugs to anchor IDs for the sticky nav
            const anchorMap: Record<string, string> = {
              'local-seo': 'local-seo',
              'google-maps': 'gbp-seo',
              'paid-media': 'paid-media',
              'email-marketing': 'email',
              'content-marketing': 'content',
              'reporting': 'reporting'
            };
            const anchorId = anchorMap[hub.slug] || hub.slug;
            
            return (
            <div 
              id={anchorId}
              key={index}
              className={`premium-card cursor-pointer transition-all duration-300 scroll-mt-32 ${
                isExpanded(index) 
                  ? "ring-1 ring-accent-blue/50 bg-surface-elevated" 
                  : "hover:translate-y-[-2px]"
              }`}
              onClick={() => toggleExpand(index)}
            >
              {/* Hub header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-accent-blue/10 border border-accent-blue/20">
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

              {/* Hub summary */}
              <p className="text-text-secondary text-sm mb-4">
                {hub.summary}
              </p>

              {/* Spokes - always in DOM for crawlability, visually hidden when collapsed */}
              <div 
                className={`transition-all duration-300 ${
                  isExpanded(index) 
                    ? "grid-rows-[1fr] opacity-100" 
                    : "grid-rows-[0fr] opacity-0 pointer-events-none"
                }`}
                style={{ display: 'grid' }}
                aria-hidden={!isExpanded(index)}
              >
                <div className="overflow-hidden">
                  <div className="pt-4 border-t border-border space-y-5">
                    {hub.spokes.map((spoke, spokeIndex) => (
                      <div key={spokeIndex} className="pl-4 border-l-2 border-accent-blue/30">
                        <a 
                          href={`/white-label-inbound-marketing-services/${hub.slug}/${spoke.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-foreground hover:text-accent-blue transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {spoke.title} →
                        </a>
                        <p className="text-text-secondary text-sm leading-relaxed mt-1">
                          {spoke.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA within expanded card */}
                  <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center gap-3">
                    <a 
                      href={`/white-label-inbound-marketing-services/${hub.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue hover:text-accent-blue/80 text-sm font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn more about {hub.title} →
                    </a>
                    <span className="hidden sm:inline text-text-muted">|</span>
                    <a 
                      href="/contact" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cta hover:text-[hsl(76,42%,51%)] text-sm font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Discuss for your agency →
                    </a>
                  </div>
                </div>
              </div>

              {/* Collapsed state hint */}
              {!isExpanded(index) && (
                <p className="text-accent-blue text-xs font-medium">
                  {hub.spokes.length} specialized areas. Click to explore
                </p>
              )}
            </div>
          );
          })}
        </div>
        
        {/* Section-level CTAs - below cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <a 
            href="/contact" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2"
          >
            Explore a Partnership
            <ArrowRight className="h-4 w-4" />
          </a>
          <a 
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-foreground hover:text-accent-blue font-medium transition-colors"
          >
            <Phone className="h-4 w-4" />
            {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopicalExpertise;
