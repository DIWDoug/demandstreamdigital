import { useState } from "react";
import { ChevronDown, MapPin, Map, MousePointerClick, Share2, FileText, Award, Shield, Eye, Target } from "lucide-react";

const TopicalExpertise = () => {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  // Trust/Clarity/Execution framework layers
  const frameworkLayers = {
    trust: {
      icon: Shield,
      label: "Trust Layer",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "border-emerald-400/20"
    },
    clarity: {
      icon: Eye,
      label: "Clarity Layer", 
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      borderColor: "border-amber-400/20"
    },
    execution: {
      icon: Target,
      label: "Execution Layer",
      color: "text-accent-blue",
      bgColor: "bg-accent-blue/10",
      borderColor: "border-accent-blue/20"
    }
  };

  const hubs = [
    {
      id: "local-seo",
      icon: MapPin,
      title: "White Label Local SEO",
      summary: "Dominate local organic search results and drive qualified traffic from your service areas.",
      framework: {
        trust: "Help clients understand that rankings aren't overnight—they're earned through consistent technical work and content authority.",
        clarity: "Set realistic timelines: 3-6 months for traction, 6-12 months for sustainable rankings. Dependencies include site health, competition, and content velocity.",
        execution: "Requires weekly optimization cycles, content production capacity, and technical SEO expertise across 50+ ranking factors."
      },
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
        }
      ]
    },
    {
      id: "google-maps",
      icon: Map,
      title: "White Label Google Maps Optimization",
      summary: "Own the local 3-pack and drive calls directly from Google Maps listings.",
      framework: {
        trust: "Be honest about what moves the needle in Maps—proximity, reviews, and NAP consistency matter more than any single hack.",
        clarity: "Explain the review velocity needed (2-4/week minimum) and the time to build citation authority (60-90 days for aggregators to propagate).",
        execution: "Requires systematic review management, citation building across 75+ directories, and ongoing GBP optimization."
      },
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
          title: "Structured Citation Consistency",
          description: "NAP accuracy across 75+ directories, ensuring name, address, and phone consistency that Google trusts for local ranking signals."
        },
        {
          title: "Data Aggregator Distribution",
          description: "Strategic submissions to major data aggregators like Data Axle, Localeze, and Foursquare—the sources that feed hundreds of downstream directories."
        },
        {
          title: "Local Pack Ranking Strategy",
          description: "Proximity optimization, category targeting, and competitive analysis to win positions in the local 3-pack for high-intent searches."
        },
        {
          title: "GBP Post Strategy",
          description: "Regular posting cadence with offers, updates, and events that signal activity and engagement to Google's algorithm."
        }
      ]
    },
    {
      id: "google-ads",
      icon: MousePointerClick,
      title: "White Label Google Ads Management",
      summary: "Capture high-intent local searches with campaigns built for calls and form submissions.",
      framework: {
        trust: "Paid media requires investment before insight. The first 30 days are data collection, not performance optimization.",
        clarity: "Budget allocation matters: explain why $1,500/mo minimum is needed for local services, and how CPA improves over 90 days of learning.",
        execution: "Demands weekly bid adjustments, negative keyword management, landing page testing, and conversion tracking expertise."
      },
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
      id: "meta-ads",
      icon: Share2,
      title: "White Label Meta Ads (Facebook & Instagram)",
      summary: "Build local awareness and capture demand through targeted social advertising.",
      framework: {
        trust: "Social ads work differently than search—they create demand rather than capture it. Set expectations for a longer consideration cycle.",
        clarity: "Explain the creative fatigue curve (refresh every 2-3 weeks) and why retargeting is essential for local service conversion.",
        execution: "Requires continuous creative production, audience testing, and pixel/conversion API expertise for accurate tracking."
      },
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
          title: "Cross-Platform Attribution",
          description: "Connecting Meta ad performance to actual leads and revenue using proper tracking and CRM integration."
        }
      ]
    },
    {
      id: "content-marketing",
      icon: FileText,
      title: "White Label Content Marketing",
      summary: "Build topical authority, rank for informational queries, and position your clients as thought leaders that AI models cite.",
      framework: {
        trust: "Content is a long game. Help clients understand that topical authority builds over 6-12 months of consistent publishing.",
        clarity: "Explain the hub-and-spoke model: pillar content supports conversion pages, blog posts capture long-tail, and all of it compounds.",
        execution: "Requires subject matter expertise, consistent publishing velocity (4-8 pieces/month), and strategic internal linking."
      },
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
        }
      ]
    },
    {
      id: "authority-building",
      icon: Award,
      title: "White Label Authority Building",
      summary: "Establish trust signals and credibility markers that support long-term ranking stability.",
      framework: {
        trust: "Backlinks aren't bought—they're earned through relationships, quality content, and genuine value. No shortcuts that risk penalties.",
        clarity: "Authority building is slow: expect 3-6 quality links/month from legitimate sources. Faster usually means riskier.",
        execution: "Requires relationship management, PR expertise, content worth linking to, and ongoing monitoring for link health."
      },
      spokes: [
        {
          title: "Digital PR & Media Placements",
          description: "Press release distribution, journalist outreach, and earned media coverage that builds brand authority and backlink profiles."
        },
        {
          title: "Vendor & Partner Testimonial Links",
          description: "Leveraging existing business relationships—accountants, attorneys, suppliers, software vendors—by offering testimonials in exchange for backlinks from their sites."
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
          title: "HARO & Expert Commentary",
          description: "Responding to journalist queries and providing expert quotes that earn high-authority backlinks from news publications."
        },
        {
          title: "Guest Posting & Thought Leadership",
          description: "Strategic content placement on industry publications that builds authority and drives referral traffic."
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
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="mb-6 text-foreground">
            Deep Expertise Across<br />Local Marketing
          </h2>
          <p className="text-lg text-text-secondary mb-6">
            Each service area is backed by specialized knowledge, proven processes, and years of execution experience. Click any topic to explore what's included.
          </p>
        </div>

        {/* Framework legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(frameworkLayers).map(([key, layer]) => (
            <div 
              key={key}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${layer.bgColor} border ${layer.borderColor}`}
            >
              <layer.icon className={`h-3.5 w-3.5 ${layer.color}`} />
              <span className={`text-xs font-medium ${layer.color}`}>{layer.label}</span>
            </div>
          ))}
        </div>

        {/* Hub cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub, index) => (
            <div 
              key={index}
              id={hub.id}
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
                  isExpanded(index) ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {/* Framework layers */}
                <div className="pt-4 border-t border-border space-y-3 mb-6">
                  <p className="text-xs uppercase tracking-widest text-text-muted mb-3">How we approach this service</p>
                  
                  <div className={`p-3 rounded-lg ${frameworkLayers.trust.bgColor} border ${frameworkLayers.trust.borderColor}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className={`h-3.5 w-3.5 ${frameworkLayers.trust.color}`} />
                      <span className={`text-xs font-semibold ${frameworkLayers.trust.color}`}>Trust Layer</span>
                    </div>
                    <p className="text-text-secondary text-sm">{hub.framework.trust}</p>
                  </div>
                  
                  <div className={`p-3 rounded-lg ${frameworkLayers.clarity.bgColor} border ${frameworkLayers.clarity.borderColor}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Eye className={`h-3.5 w-3.5 ${frameworkLayers.clarity.color}`} />
                      <span className={`text-xs font-semibold ${frameworkLayers.clarity.color}`}>Clarity Layer</span>
                    </div>
                    <p className="text-text-secondary text-sm">{hub.framework.clarity}</p>
                  </div>
                  
                  <div className={`p-3 rounded-lg ${frameworkLayers.execution.bgColor} border ${frameworkLayers.execution.borderColor}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Target className={`h-3.5 w-3.5 ${frameworkLayers.execution.color}`} />
                      <span className={`text-xs font-semibold ${frameworkLayers.execution.color}`}>Execution Layer</span>
                    </div>
                    <p className="text-text-secondary text-sm">{hub.framework.execution}</p>
                  </div>
                </div>

                {/* Spokes list */}
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest text-text-muted">What's included</p>
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
                    Discuss {hub.title.replace('White Label ', '')} for your agency →
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