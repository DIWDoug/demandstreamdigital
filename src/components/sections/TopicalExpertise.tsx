import { useState } from "react";
import { ChevronDown, MapPin, Map, MousePointerClick, Share2, Mail, Award } from "lucide-react";

const TopicalExpertise = () => {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const hubs = [
    {
      icon: MapPin,
      title: "Local SEO",
      summary: "Dominate local organic search results and drive qualified traffic from your service areas.",
      spokes: [
        {
          title: "On-Page Local Optimization",
          description: "Location-specific title tags, meta descriptions, schema markup, and content that signals relevance to search engines for every target market."
        },
        {
          title: "Technical SEO for Multi-Location",
          description: "Site architecture, internal linking, and crawlability fixes that help search engines understand your client's service area hierarchy."
        },
        {
          title: "Local Content Strategy",
          description: "Service area pages, location-specific blog content, and FAQ sections that capture long-tail local search queries."
        },
        {
          title: "Local Link Acquisition",
          description: "Outreach to local publications, sponsorships, and community organizations that build geographic authority signals."
        },
        {
          title: "Keyword Research & Mapping",
          description: "Comprehensive local keyword discovery, search intent analysis, and strategic mapping to pages for maximum organic visibility."
        },
        {
          title: "Competitor & Market Analysis",
          description: "Deep analysis of local competitors' strategies, ranking factors, and market opportunities to identify gaps and advantages."
        }
      ]
    },
    {
      icon: Map,
      title: "Google Maps Optimization",
      summary: "Own the local 3-pack and drive calls directly from Google Maps listings.",
      spokes: [
        {
          title: "Google Business Profile Management",
          description: "Complete profile optimization including categories, attributes, services, products, and posts that maximize visibility in map results."
        },
        {
          title: "Review Generation & Response",
          description: "Systematic review acquisition strategies and professional response management that builds trust and improves rankings."
        },
        {
          title: "Citation Building & Cleanup",
          description: "NAP consistency across 50+ directories, data aggregators, and industry-specific platforms that validate business legitimacy."
        },
        {
          title: "Local Pack Ranking Strategy",
          description: "Proximity optimization, category targeting, and competitive analysis to win positions in the local 3-pack for high-intent searches."
        },
        {
          title: "Photo & Media Optimization",
          description: "Professional photo management, virtual tours, and visual content strategies that increase engagement and click-through rates."
        },
        {
          title: "Multi-Location GBP Management",
          description: "Scalable systems for managing dozens or hundreds of locations with consistent branding and optimized performance."
        }
      ]
    },
    {
      icon: MousePointerClick,
      title: "Google Ads Management",
      summary: "Capture high-intent local searches with campaigns built for calls and form submissions.",
      spokes: [
        {
          title: "Local Search Campaign Structure",
          description: "Service area targeting, location-specific ad groups, and keyword strategies designed for local lead generation economics."
        },
        {
          title: "Landing Page Optimization",
          description: "Conversion-focused landing pages with local trust signals, click-to-call buttons, and form optimization for maximum lead capture."
        },
        {
          title: "Bid Strategy & Budget Allocation",
          description: "Smart bidding configurations and budget pacing that maximize lead volume within client profitability targets."
        },
        {
          title: "Call Tracking & Attribution",
          description: "Call recording, lead scoring, and multi-touch attribution that proves ROI and informs optimization decisions."
        },
        {
          title: "Ad Copy & Extension Testing",
          description: "Continuous A/B testing of headlines, descriptions, callouts, and sitelinks to improve quality scores and conversion rates."
        },
        {
          title: "Negative Keyword Management",
          description: "Ongoing search term analysis and negative keyword refinement to eliminate waste and improve lead quality."
        }
      ]
    },
    {
      icon: Share2,
      title: "Meta Ads (Facebook & Instagram)",
      summary: "Build local awareness and capture demand through targeted social advertising.",
      spokes: [
        {
          title: "Local Audience Targeting",
          description: "Geographic, demographic, and interest-based audiences tailored to each client's service area and ideal customer profile."
        },
        {
          title: "Creative Strategy & Production",
          description: "Thumb-stopping ad creative, video content, and carousel formats optimized for local service businesses."
        },
        {
          title: "Retargeting & Lookalike Campaigns",
          description: "Website visitor retargeting and lookalike audience expansion that keeps clients top-of-mind through the buying journey."
        },
        {
          title: "Lead Form & Conversion Optimization",
          description: "Native lead forms, Messenger automation, and landing page integration that reduces friction and increases conversion rates."
        },
        {
          title: "Campaign Budget Optimization",
          description: "Strategic budget allocation across campaigns, ad sets, and placements to maximize return on ad spend."
        },
        {
          title: "Performance Reporting & Insights",
          description: "Detailed analytics dashboards, audience insights, and actionable recommendations for continuous improvement."
        }
      ]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      summary: "Nurture leads and drive repeat business through strategic email campaigns and automation.",
      spokes: [
        {
          title: "Campaign Strategy & Design",
          description: "Custom email templates, compelling copy, and strategic send schedules that maximize open rates and conversions."
        },
        {
          title: "Automation Sequences",
          description: "Welcome series, nurture flows, and re-engagement campaigns that work around the clock to convert leads into customers."
        },
        {
          title: "List Management & Segmentation",
          description: "Clean list hygiene, audience segmentation, and targeted messaging that improves deliverability and engagement."
        },
        {
          title: "Performance Analytics",
          description: "Open rates, click-through tracking, A/B testing insights, and ROI analysis to continuously optimize campaign performance."
        },
        {
          title: "Drip Campaign Development",
          description: "Multi-touch email sequences tailored to buyer stages that systematically move prospects toward conversion."
        },
        {
          title: "Deliverability & Compliance",
          description: "SPF, DKIM, and DMARC configuration, CAN-SPAM compliance, and sender reputation management for maximum inbox placement."
        }
      ]
    },
    {
      icon: Award,
      title: "Authority Building",
      summary: "Establish trust signals and credibility markers that support long-term ranking stability.",
      spokes: [
        {
          title: "Digital PR & Media Placements",
          description: "Press release distribution, journalist outreach, and earned media coverage that builds brand authority and backlink profiles."
        },
        {
          title: "Industry Directory Listings",
          description: "Strategic placement in industry-specific directories, professional associations, and accreditation sites that signal expertise."
        },
        {
          title: "Local Sponsorship & Partnerships",
          description: "Community event sponsorships, local charity partnerships, and chamber of commerce involvement that create authentic local signals."
        },
        {
          title: "Reputation & Trust Management",
          description: "Review monitoring, sentiment analysis, and brand mention tracking that protects and enhances online reputation."
        },
        {
          title: "Thought Leadership Content",
          description: "Expert articles, guest posts, and industry commentary that positions clients as trusted authorities in their field."
        },
        {
          title: "Awards & Recognition Strategy",
          description: "Strategic award submissions, certification pursuits, and accolade promotion that builds credibility and differentiates from competitors."
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
    <section className="py-24 lg:py-32 bg-surface-dark relative">
      {/* Smooth transition from ServicesGrid */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6 text-foreground">
            Deep Expertise Across<br />Local Marketing
          </h2>
          <p className="text-lg text-text-secondary">
            Each service area is backed by specialized knowledge, proven processes, and years of execution experience. Click any topic to explore what's included.
          </p>
        </div>

        {/* Hub cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub, index) => (
            <div 
              key={index}
              className={`premium-card cursor-pointer transition-all duration-300 ${
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

              {/* Spokes - expanded content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded(index) ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-4 border-t border-border space-y-5">
                  {hub.spokes.map((spoke, spokeIndex) => (
                    <div key={spokeIndex} className="pl-4 border-l-2 border-accent-blue/30">
                      <a 
                        href="#contact" 
                        className="text-sm font-medium text-foreground hover:text-accent-blue transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {spoke.title} →
                      </a>
                      <p className="text-text-secondary text-sm leading-relaxed mt-1">
                        {spoke.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA within expanded card - Olive for action */}
                <div className="mt-6 pt-4 border-t border-border">
                  <a 
                    href="#contact" 
                    className="text-cta hover:text-[hsl(76,42%,51%)] text-sm font-medium transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Discuss {hub.title} for your agency →
                  </a>
                </div>
              </div>

              {/* Collapsed state hint */}
              {!isExpanded(index) && (
                <p className="text-accent-blue text-xs font-medium">
                  {hub.spokes.length} specialized areas. Click to explore
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicalExpertise;
