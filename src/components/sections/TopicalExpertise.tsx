import { useState } from "react";
import { ChevronDown, MapPin, Map, MousePointerClick, Share2, FileText, Award } from "lucide-react";

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
          description: "Site architecture, internal linking, crawlability fixes, and Core Web Vitals optimization that help search engines understand your client's service area hierarchy."
        },
        {
          title: "Service Area Page Development",
          description: "Unique, valuable pages for each city, neighborhood, and service area that rank for local intent queries and convert visitors into leads."
        },
        {
          title: "Local Link Acquisition",
          description: "Strategic outreach to local publications, sponsorships, and community organizations that build geographic authority signals Google trusts."
        },
        {
          title: "Competitor Gap Analysis",
          description: "Deep analysis of what's working for local competitors—keywords they rank for, backlinks they've earned, and content gaps you can exploit."
        },
        {
          title: "Local Schema Implementation",
          description: "LocalBusiness, Service, and FAQ schema markup that helps search engines understand business details and display rich results."
        },
        {
          title: "Internal Linking Architecture",
          description: "Strategic internal link structures that distribute authority to priority pages and help users navigate location-based content."
        },
        {
          title: "Mobile-First Optimization",
          description: "Speed, usability, and conversion optimization for mobile users—where most local searches happen."
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
          title: "GBP Post Strategy",
          description: "Regular posting cadence with offers, updates, and events that signal activity and engagement to Google's algorithm."
        },
        {
          title: "Photo & Video Optimization",
          description: "Geotagged imagery, virtual tours, and video content that increases engagement and time-on-listing metrics."
        },
        {
          title: "Q&A Management",
          description: "Proactive question seeding and response management that controls the narrative and captures featured snippet opportunities."
        },
        {
          title: "Multi-Location Management",
          description: "Scalable systems for managing dozens or hundreds of locations with consistent optimization and reporting."
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
          title: "Negative Keyword Management",
          description: "Ongoing refinement of negative keyword lists to eliminate wasted spend and improve lead quality over time."
        },
        {
          title: "Ad Copy Testing & Optimization",
          description: "Continuous A/B testing of headlines, descriptions, and CTAs to improve click-through and conversion rates."
        },
        {
          title: "Local Service Ads (LSA)",
          description: "Google Guaranteed and Google Screened campaign management for service businesses that qualify."
        },
        {
          title: "Performance Max for Local",
          description: "AI-powered campaign structures that leverage Google's machine learning for local lead generation at scale."
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
          title: "Video Ad Production",
          description: "Short-form video content optimized for Reels and Stories that captures attention in the first three seconds."
        },
        {
          title: "Advantage+ Campaign Management",
          description: "Leveraging Meta's AI-powered campaign types for efficient local lead generation and audience discovery."
        },
        {
          title: "Creative Fatigue Monitoring",
          description: "Proactive creative refresh cycles that maintain performance before ad fatigue tanks results."
        },
        {
          title: "Cross-Platform Attribution",
          description: "Connecting Meta ad performance to actual leads and revenue using proper tracking and CRM integration."
        }
      ]
    },
    {
      icon: FileText,
      title: "Content Marketing",
      summary: "Build topical authority, rank for informational queries, and position your clients as thought leaders that AI models cite.",
      spokes: [
        {
          title: "Topical Content Strategy",
          description: "Comprehensive content planning that builds topical authority around core services—the kind of depth that signals expertise to Google and AI."
        },
        {
          title: "Service-Focused Pillar Content",
          description: "In-depth guides and resources that establish expertise on core services and support internal linking to conversion pages."
        },
        {
          title: "Geographic Content Writing",
          description: "Location-specific content that demonstrates local expertise and captures geographic search intent across service areas."
        },
        {
          title: "People Also Ask Optimization",
          description: "Question-focused content structured to capture featured snippets and People Also Ask boxes for informational queries."
        },
        {
          title: "Power Posts & Linkable Assets",
          description: "High-value resources designed to earn backlinks naturally—original research, tools, comprehensive guides, and industry reports."
        },
        {
          title: "AI Visibility & Citation Strategy",
          description: "Content structured for AI model training and citation—clear, authoritative, well-sourced content that LLMs reference in answers."
        },
        {
          title: "Blog Content Production",
          description: "Consistent publishing cadence with SEO-optimized articles that capture long-tail queries and build topical authority over time."
        },
        {
          title: "Content Refresh & Optimization",
          description: "Regular audits and updates to existing content that maintain rankings and improve performance as search intent evolves."
        },
        {
          title: "FAQ & Knowledge Base Content",
          description: "Structured Q&A content that captures voice search queries and provides clear answers search engines can extract."
        },
        {
          title: "Case Study & Social Proof Content",
          description: "Results-focused content that demonstrates expertise and builds trust with prospects researching solutions."
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
          title: "HARO & Expert Commentary",
          description: "Responding to journalist queries and providing expert quotes that earn high-authority backlinks from news publications."
        },
        {
          title: "Guest Posting & Thought Leadership",
          description: "Strategic content placement on industry publications that builds authority and drives referral traffic."
        },
        {
          title: "Podcast & Interview Placements",
          description: "Securing guest appearances on relevant podcasts and interview features that build personal and brand authority."
        },
        {
          title: "Award Submissions & Recognition",
          description: "Identifying and pursuing industry awards, certifications, and recognition opportunities that build credibility signals."
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
                <div className="pt-4 border-t border-border space-y-4">
                  {hub.spokes.map((spoke, spokeIndex) => (
                    <div key={spokeIndex} className="pl-4 border-l-2 border-accent-blue/30">
                      <h4 className="text-sm font-medium text-foreground mb-1">
                        {spoke.title}
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {spoke.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA within expanded card */}
                <div className="mt-6 pt-4 border-t border-border">
                  <a 
                    href="#contact" 
                    className="text-cta hover:text-cta-glow text-sm font-medium transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Discuss {hub.title} for your agency →
                  </a>
                </div>
              </div>

              {/* Collapsed state hint */}
              {!isExpanded(index) && (
                <p className="text-accent-blue text-xs font-medium">
                  {hub.spokes.length} specialized areas — click to explore
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
