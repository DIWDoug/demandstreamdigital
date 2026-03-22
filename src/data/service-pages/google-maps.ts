import { Map, MapPin, Zap, Users, Target, Star, MessageSquare, Globe, Layers, TrendingUp, Search, Sparkles, Mail, BarChart3, Share2, PenTool } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const googleMapsConfig: ServicePageConfig = {
  slug: "google-maps",
  title: "Google Business Pro SEO",
  metaTitle: "Plumbing Google Maps SEO & GBP Optimization | DemandStream",
  metaDescription: "Google Business Profile management for plumbing and HVAC. Reviews, citations, posts, and local pack strategy that puts your company in the map pack.",
  canonicalUrl: `${SITE_URL}/plumbing-google-maps`,

  hero: {
    headline: "Earn and Hold Google Maps Visibility",
    highlightedText: "Google Business Pro SEO for Plumbing & HVAC",
    subheadline: "We help plumbing and HVAC companies earn and hold Google Maps visibility through GBP optimization built for competitive local markets.",
    bullets: [
      "No cookie-cutter profile setups",
      "No generic posting calendars",
      "No ignoring competitive signals"
    ],
    qualifierLine: "Every engagement is scoped to the local pack landscape, category dynamics, and your capacity so execution matches the market.",
    integrationNote: "GBP SEO, Local SEO, and Authority Building overlap by design. Engaged independently they create lift, but coordinated they drive durable map pack visibility.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Tell us about your business. We'll take it from there."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most GBP Management Fails",
    intro: "The profile was claimed and optimized once, but months later visibility is flat and competitors are outranking you in your own backyard.",
    painPoints: [
      {
        icon: Users,
        title: "Set It and Forget It Kills Rankings",
        body: "Profiles require ongoing optimization. Posts, photos, Q&A, and attributes are not optional. Neglected profiles lose ground to active competitors."
      },
      {
        icon: Star,
        title: "Reviews Are Inconsistent or Ignored",
        body: "Review velocity matters. 60% of reviewers expect response within 2 days. Sporadic generation and template responses signal neglect."
      },
      {
        icon: Globe,
        title: "Citations Are Incomplete or Inconsistent",
        body: "NAP inconsistencies confuse search engines and erode trust signals. Incomplete citation profiles hurt E-E-A-T."
      },
      {
        icon: Target,
        title: "No Strategy for Proximity Dynamics",
        body: "The Vicinity Update made location dominant. Without a proximity-aware strategy, visibility collapses outside the immediate area."
      },
      {
        icon: Layers,
        title: "GBP and Website Are Disconnected",
        body: "Services in GBP don't match website pages. Categories misalign, signals fragment, and rich snippets fail to populate."
      }
    ],
    systemClosing: "",
    closingLine: "All five failures share one root problem: no operating system for ongoing GBP management. We provide that system",
    closingHighlight: "so visibility compounds instead of decaying.",
    ctaText: "Schedule a Discovery Call"
  },

  outcomes: {
    headline: "What Actually Changes When GBP Works",
    subheadline: "What changes as profiles enter the map pack and authority compounds",
    items: [
      {
        title: "Direct Response From the Map Pack",
        description: "Calls, directions, and website clicks flow directly from optimized profiles without friction or wasted demand."
      },
      {
        title: "GBP and Website Signals in Alignment",
        description: "GBP services and products align directly with the website, creating consistent signals Google can trust."
      },
      {
        title: "Rich Snippets and 120% Profile Optimization",
        description: "Profiles optimized beyond baseline populate rich snippets automatically. Attributes, services, products, and categories are maximized for visibility."
      },
      {
        title: "Hub-Spoke Content Strategy Execution",
        description: "Service pages, FAQs, and location content are internally linked to create the topical authority required for map pack visibility."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From Profile Audit to Pack Dominance",
    subheadline: "Every engagement is scoped to the market and sequenced to earn map pack visibility first, then compound it.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Audit, Gap Analysis & Citation Foundation",
        description: "Comprehensive GBP audit, service gap analysis between GBP and website, competitor analysis, and citation foundation that establishes control.",
        activities: [
          "Complete GBP audit against best practices",
          "Service gap analysis: GBP services vs. website pages",
          "Competitor analysis for core ranking terms",
          "Content recommendations based on competitor build-out",
          "Category and attribute optimization",
          "Business description rewrite",
          "Service and product catalog setup",
          "Photo audit and initial optimization",
          "Competitor citation audit via Whitespark",
          "Core citation submissions (50+ directories)",
          "Unstructured citations: image, audio, video syndication",
          "Social foundation setup for natural syndication",
          "Industry association recommendations (Chamber of Commerce, trade associations, vertical directories)",
          "Data aggregator submissions",
          "Review audit and baseline establishment",
          "Review response SOP development",
          "Posting schedule established",
          "Tracking and reporting setup"
        ],
        icon: Layers,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Velocity",
        title: "Review Generation & Topical Authority",
        description: "Systematic review acquisition, continued citation building through competitor gap analysis, and topical content development that supports GBP relevance.",
        activities: [
          "Review generation campaign launch",
          "Weekly posting schedule execution",
          "Professional review response drafting",
          "Photo drip feed and optimization",
          "Q&A monitoring and management",
          "Competitor citation gap analysis",
          "Continued structured citation building",
          "Quarterly unstructured citations: image, audio, video",
          "Topical content building: FAQ expansions",
          "People Also Ask content development",
          "Hub-spoke content linking structure",
          "Localized link building outreach",
          "Monthly performance reporting"
        ],
        icon: TrendingUp,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Expansion",
        title: "Geographic Reach & Power Content",
        description: "Strategic service area content, power posts, and continued citation authority that expands visibility beyond immediate proximity.",
        activities: [
          "Service area content strategy execution",
          "Hyperlocal landing page development",
          "Power posts for topical authority",
          "Geographic content expansion",
          "Competitor citation gap analysis (ongoing)",
          "Quarterly unstructured citations: image, audio, video",
          "Continued structured citation building",
          "Localized link building authority",
          "Review velocity acceleration",
          "Advanced attribute optimization",
          "Seasonal campaign planning",
          "Multi-location coordination (if applicable)"
        ],
        icon: Zap,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Dominance",
        title: "Market Leadership & Sustained Authority",
        description: "Maintaining top positions through continued citation building, localized link authority, and defensive optimization against competitive threats.",
        activities: [
          "Defensive optimization protocols",
          "Competitor monitoring and response",
          "Ongoing competitor citation gap analysis",
          "Quarterly unstructured citations: image, audio, video",
          "Continued structured citation building",
          "Localized link building authority (ongoing)",
          "Algorithm update adaptation",
          "Advanced review strategy",
          "Quarterly strategic reviews",
          "New feature adoption (as Google releases)",
          "Long-term visibility planning"
        ],
        icon: Target,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    executionNote: "",
    footerNote: "Execution is fully managed with documented scope and clear checkpoints. Phase duration varies by market competitiveness. Most businesses see meaningful pack movement within 3-4 months."
  },

  buildingBlocks: {
    eyebrow: "Earn and Hold Google Maps Visibility",
    headline: "The Levers We Pull Based on Market Reality",
    subheadline: "The components below are applied based on market competition and your goals, not templates.",
    blocks: [
      {
        title: "GBP Profile Optimization",
        slug: "gbp-optimization",
        description: "Profile optimization across categories, attributes, services, products, and descriptions to maximize relevance signals.",
        icon: MapPin
      },
      {
        title: "Review Generation & Response",
        slug: "review-management",
        description: "Systematic review acquisition and response management to build trust and improve rankings.",
        icon: Star
      },
      {
        title: "Citation Building & Cleanup",
        slug: "citation-building",
        description: "NAP consistency across 50+ directories and data aggregators to validate business information and build authority.",
        icon: Globe
      },
      {
        title: "GBP Posting & Content",
        slug: "post-scheduling",
        description: "Posts, offers, and updates to signal activity to Google and engage searchers.",
        icon: MessageSquare
      },
      {
        title: "Photo & Media Management",
        slug: "photo-optimization",
        description: "Photo strategy, geotagging, and visual content to increase engagement and trust.",
        icon: Map
      },
      {
        title: "Local Pack Strategy",
        slug: "qa-management",
        description: "Service and product gap analysis with topical map matching between GBP and website pages.",
        icon: Target
      }
    ]
  },

  qualification: {
    eyebrow: "Before We Talk",
    headline: "We Are Selective About Who We Work With",
    subheadline: "",
    goodFit: [
      {
        point: "Verified GBPs with physical addresses",
        detail: "We specialize in GBP optimization for businesses with address-visible profiles. Storefronts, offices, and service-area businesses that display their address."
      },
      {
        point: "Competitive local markets",
        detail: "GBP optimization delivers the most value when there is real competition for the local pack. Competitive metros and suburbs are our specialty."
      },
      {
        point: "Ongoing management, not one-time optimization",
        detail: "Google Maps visibility requires ongoing effort. We work with businesses who understand that GBP management is a continuous service, not a project."
      },
      {
        point: "Willingness to participate in review generation",
        detail: "Review velocity requires your cooperation. You need to ask customers for reviews. We provide the systems; you need to use them."
      },
      {
        point: "Focus on retention over quick wins",
        detail: "Our approach builds sustainable visibility that compounds over time. If your goal is long-term growth, this partnership makes sense."
      },
      {
        point: "Need to replace inconsistent vendors",
        detail: "Transitioning from an inconsistent vendor is seamless. We onboard quickly, establish baselines, and deliver without disruption."
      }
    ],
    notFit: [
      {
        point: "Service-area businesses without visible addresses",
        detail: "Address-hidden GBP listings compete differently. Our core specialty is businesses with visible physical locations."
      },
      {
        point: "Expectations of pack positions in days",
        detail: "GBP optimization takes time. Meaningful visibility improvements typically require 2-4 months of consistent effort."
      },
      {
        point: "Price is the primary decision factor",
        detail: "Quality GBP management has real costs. If budget is the primary factor, the math will not work for either of us."
      },
      {
        point: "Inability or refusal to ask for reviews",
        detail: "Review velocity is critical. If you will not participate in review generation, results will suffer."
      },
      {
        point: "One-time optimization with no continuity",
        detail: "GBP visibility degrades without ongoing attention. We do not offer one-time optimization services."
      }
    ],
    ctaText: "Let's Talk About Your Business"
  },

  faq: {
    headline: "Frequently Asked Questions",
    groups: [
      {
        category: "Results & Timing",
        items: [
          { question: "How long does it take to see Google Maps results?", answer: "Most businesses see meaningful movement in local pack positions within 2-4 months. Competitive markets may take longer. We set realistic expectations during discovery based on actual market data." },
          { question: "How do you improve Google Maps rankings?", answer: "Maps rankings depend on three factors: relevance, distance, and prominence. We optimize relevance through category and keyword optimization, build prominence through reviews and citations, and help businesses serve wider areas through strategic content and optimization." },
          { question: "Can you guarantee first-page rankings?", answer: "No one can guarantee specific rankings. What we can guarantee is consistent, strategic optimization based on proven methodologies. Our track record demonstrates the results this approach produces." },
          { question: "What is the difference between GBP optimization and Local SEO?", answer: "GBP optimization focuses specifically on Google Business Profile visibility—rankings in the local 3-pack and Maps. Local SEO is broader, encompassing organic search results, on-page optimization, technical SEO, and link building. GBP optimization is one component of a complete local SEO strategy, and the two work together." },
          { question: "How does GBP SEO support AI search and local answers?", answer: "AI search systems like Google's AI Overviews pull information from trusted, well-structured sources. A fully optimized GBP with consistent NAP data, reviews, and schema markup increases the likelihood of being cited in AI-generated local answers." }
        ]
      },
      {
        category: "Services & Process",
        items: [
          { question: "Do you handle review responses?", answer: "Yes. We draft professional responses to all reviews—positive and negative—for your approval before posting. Our responses are designed to build trust with potential customers while addressing any concerns raised." },
          { question: "What about fake or spam reviews?", answer: "We have processes for identifying and reporting fake reviews to Google. While removal is not guaranteed, we are successful in getting many policy-violating reviews removed. We also help build authentic review volume to dilute any negative impact." },
          { question: "Can you help with suspended listings?", answer: "Yes. We have experience recovering suspended GBP listings. The process depends on the suspension reason, but we have successfully restored listings suspended for guideline violations, verification issues, and other common problems." },
          { question: "How do you handle multi-location businesses?", answer: "We have specific processes for multi-location GBP management including bulk optimization, centralized reporting, and scalable review management." }
        ]
      },
      {
        category: "Partnership & Pricing",
        items: [
          { question: "How is pricing determined?", answer: "GBP management pricing depends on the number of locations, market competitiveness, and scope of services. We scope every engagement to the actual opportunity rather than arbitrary packages." },
          { question: "Do you require long-term contracts?", answer: "No. We work month-to-month with a 30-day notice policy. Our retention comes from results, not lock-in agreements. That said, meaningful GBP results require consistency over time." },
          { question: "How does communication work?", answer: "You get a dedicated strategist who keeps you informed with regular updates, monthly reports, and clear next steps. We handle the execution so you can focus on running your business." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "GBP SEO Is One Piece of the",
    highlightedText: "360° Growth Engine",
    intro: "GBP SEO acts as the demand capture layer, supported by authority, relevance, and conversion infrastructure across the ecosystem.",
    body: "Google Maps visibility improves when reinforced by local SEO, review strategy, and consistent NAP signals. We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: Map, id: "google-maps", title: "Google Business Pro SEO", description: "The demand capture layer for local businesses.", href: "/plumbing-google-maps", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search results.", href: "/hvac-and-plumbing-seo" },
      { icon: Sparkles, id: "paid-media", title: "Paid Media", description: "Accelerate results with Google Ads and Meta campaigns.", href: "/plumbing-paid-advertising" },
      { icon: Mail, id: "email-marketing", title: "Email Marketing", description: "Turn one-time customers into repeat buyers.", href: "/plumbing-email-marketing" },
      { icon: PenTool, id: "content", title: "Content Development", description: "Strategic content that converts.", href: "/plumbing-content-marketing" },
      { icon: BarChart3, id: "reporting", title: "Reporting", description: "Dashboards that prove value.", href: "/plumbing-reporting" }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/#services"
  }
};
