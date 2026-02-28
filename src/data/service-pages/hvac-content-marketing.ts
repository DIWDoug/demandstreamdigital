import { FileText, PenTool, BookOpen, Target, Megaphone, BarChart3, Sparkles, MapPin, Lightbulb, HelpCircle, Layers, Award, Search, Map, Mail, Shield } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const hvacContentMarketingConfig: ServicePageConfig = {
  slug: "hvac-content-marketing",
  title: "HVAC Content Marketing",
  metaTitle: "HVAC Content Marketing | Seasonal Blog Posts, Service Area Pages & SEO Copy | Demand Stream Digital",
  metaDescription: "Blog posts, service area pages, and SEO copy written specifically for HVAC companies. Seasonal content that ranks for no-cool, no-heat, and maintenance queries — and converts to booked calls.",
  canonicalUrl: `${SITE_URL}/hvac-content-marketing`,

  hero: {
    headline: "Content Marketing for",
    highlightedText: "HVAC Companies",
    subheadline: "We create the content that makes your HVAC business visible: seasonal service area pages, power posts around emergency queries, and topical authority content that captures demand from no-cool calls to system replacement research.",
    qualifierLine: "You focus on your technicians and service capacity. We handle the research, writing, and optimization that makes HVAC content actually work.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built for HVAC companies who need content that ranks for seasonal demand and converts to booked jobs."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most HVAC Content Marketing Fails",
    intro: "HVAC content often fails because it chases generic home improvement traffic instead of the seasonal, emergency, and replacement queries that actually book jobs. You rank for questions. You need to rank for intent.",
    painPoints: [
      {
        icon: BarChart3,
        title: "Traffic That Can't Call You",
        body: "HVAC content ranking for 'how to change an air filter' gets DIY traffic from homeowners who don't want to hire you. Impressive traffic numbers. Zero booked calls."
      },
      {
        icon: MapPin,
        title: "Seasonal Demand Windows Missed",
        body: "No-cool content published in October. No-heat content published in April. HVAC demand is acutely seasonal — missing the window by even 6 weeks means your content ranks when no one is searching."
      },
      {
        icon: Target,
        title: "No Conversion Architecture",
        body: "An HVAC blog post ranking for 'AC repair [city]' with no phone number above the fold, no emergency contact CTA, and no trust signals. It ranks but it doesn't convert."
      },
      {
        icon: FileText,
        title: "No Replacement Intent Content",
        body: "Equipment replacement is a $8,000-15,000 transaction. Homeowners research for weeks before calling. Without content targeting 'how long does an HVAC system last' and 'when to replace HVAC,' competitors own that research phase."
      },
      {
        icon: Sparkles,
        title: "AI-Invisible for Local HVAC Queries",
        body: "AI search systems now answer 'best HVAC company near me' queries directly. Without semantically structured, authority-rich HVAC content, your business isn't being cited in those answers."
      }
    ],
    closingLine: "We build HVAC content that ranks in the right season for the right intent and converts to booked calls.",
    closingHighlight: "Seasonal relevance. Emergency intent. Measurable booking attribution.",
    ctaText: "Start the Conversation"
  },

  outcomes: {
    headline: "What Actually Changes When HVAC Content Works",
    subheadline: "These outcomes only appear when HVAC content is strategically planned around seasonal demand patterns.",
    items: [
      {
        title: "Seasonal Keyword Dominance",
        description: "No-cool content ranking before summer demand spikes. No-heat content ranking before winter. Service area pages capturing 'HVAC near me' searches in every city you serve."
      },
      {
        title: "Replacement Research Ownership",
        description: "Long-form content around system age, efficiency ratings, and replacement considerations positions your business as the trusted advisor — not just a repair company."
      },
      {
        title: "Lead Generation From Organic Traffic",
        description: "Emergency intent content with conversion architecture built in. Guides and resources that build trust and generate calls from homeowners researching HVAC problems."
      },
      {
        title: "AI Visibility for HVAC Local Queries",
        description: "Semantically structured HVAC content that AI systems reference when answering local queries. When ChatGPT and Perplexity answer HVAC questions in your market, your business appears."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From HVAC Content Gap to Content System",
    subheadline: "HVAC content marketing is infrastructure built around demand seasonality. Each phase builds leverage for the next.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Audit & HVAC Content Strategy",
        description: "We assess current content, identify seasonal gaps, and map the HVAC competitive content landscape.",
        activities: [
          "HVAC content inventory and gap analysis",
          "Competitor content audit for HVAC in your market",
          "Seasonal keyword opportunity research",
          "Emergency intent content mapping",
          "Hub-and-spoke HVAC topic architecture",
          "Seasonal content calendar development",
          "Conversion path planning for HVAC calls"
        ],
        icon: Shield,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Infrastructure",
        title: "Core HVAC Content Build",
        description: "Creating the foundational HVAC content assets that support all other marketing.",
        activities: [
          "HVAC service page optimization",
          "Service area pages by city and county",
          "Seasonal power posts: no-cool, no-heat",
          "Equipment type pages: furnace, heat pump, central AC",
          "Schema markup implementation",
          "Internal linking architecture",
          "Emergency HVAC FAQ content"
        ],
        icon: Layers,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Expansion",
        title: "Replacement Demand & Lead Magnets",
        description: "Building HVAC content assets that capture replacement research and generate leads.",
        activities: [
          "System replacement guides by equipment type",
          "Lead magnet development: HVAC inspection checklists",
          "Before-and-after case studies",
          "Manufacturer comparison content",
          "AI visibility optimization",
          "Topical cluster expansion"
        ],
        icon: Target,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Optimization",
        title: "Seasonal Performance & Iteration",
        description: "Refining HVAC content based on seasonal performance data and expanding what converts.",
        activities: [
          "Seasonal content performance analysis",
          "Conversion rate optimization by page type",
          "Content refresh program before peak seasons",
          "New service area targeting",
          "Competitive gap monitoring",
          "Quarterly strategy reviews"
        ],
        icon: BarChart3,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Foundation typically spans 2-4 weeks. Core HVAC content build runs 2-3 months. Replacement demand content and authority signals compound over 6-12 months."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull Based on HVAC Content Goals",
    subheadline: "Each component is scoped based on your HVAC market, seasonal patterns, and content gaps.",
    blocks: [
      {
        title: "Service Area Pages",
        slug: "geographical-content",
        description: "HVAC service area pages that capture city-specific searches and support Google Business Profile rankings.",
        icon: MapPin
      },
      {
        title: "Seasonal Topical Authority",
        slug: "topical-authority",
        description: "In-depth HVAC content around no-cool, no-heat, maintenance, and replacement topics that build topical authority.",
        icon: BookOpen
      },
      {
        title: "Seasonal Power Posts",
        slug: "power-posts",
        description: "Comprehensive pillar content around high-value HVAC queries that dominates seasonal demand periods.",
        icon: Award
      },
      {
        title: "HVAC Guides & Resources",
        slug: "ebooks-guides",
        description: "Long-form guides around system replacement, efficiency upgrades, and maintenance that capture replacement research traffic.",
        icon: FileText
      },
      {
        title: "Lead Generation Magnets",
        slug: "lead-magnets",
        description: "HVAC inspection checklists, seasonal prep guides, and tools that convert organic visitors into booked estimates.",
        icon: Target
      },
      {
        title: "Case Studies",
        slug: "case-studies",
        description: "HVAC installation and efficiency upgrade success stories that build trust with homeowners researching replacements.",
        icon: BarChart3
      },
      {
        title: "Emergency HVAC FAQ Content",
        slug: "faq-content",
        description: "Structured Q&A content targeting no-cool, no-heat, and HVAC troubleshooting queries for featured snippets.",
        icon: HelpCircle
      },
      {
        title: "Hub & Spoke Build-outs",
        slug: "hub-spoke-buildouts",
        description: "HVAC content architecture connecting equipment types, seasonal services, and service areas into a topical authority structure.",
        icon: Layers
      }
    ]
  },

  qualification: {
    eyebrow: "Before We Talk",
    headline: "We Are Selective About Who We Work With",
    subheadline: "Fit matters more than volume. This is who gets results, and who should look elsewhere.",
    goodFit: [
      {
        point: "You understand content as a seasonal investment",
        detail: "HVAC content marketing compounds over time and peaks with seasonal demand. We work with businesses who see content as infrastructure, not an expense line."
      },
      {
        point: "You serve multiple cities or a large service area",
        detail: "HVAC companies that serve multiple cities or counties benefit enormously from service area pages that create compound local visibility."
      },
      {
        point: "You want to own the replacement research conversation",
        detail: "System replacement is your highest-ticket transaction. HVAC companies who invest in replacement-intent content build a durable pipeline of high-value leads."
      },
      {
        point: "You have technical expertise worth documenting",
        detail: "Great HVAC content requires real technical input. We work with operators who can share the insights — equipment types, failure patterns, seasonal scenarios — that make content authoritative."
      },
      {
        point: "You need to replace inconsistent vendors",
        detail: "Transitioning from an inconsistent content vendor is seamless. We onboard quickly, establish content baselines, and deliver without disruption."
      }
    ],
    notFit: [
      {
        point: "Expecting AI-generated content at scale",
        detail: "We use AI as a research tool, not a replacement for human HVAC expertise. Content that ranks for emergency and replacement queries requires genuine authority."
      },
      {
        point: "Unable to provide technical subject matter input",
        detail: "The best HVAC content comes from real operator knowledge. If you are unavailable for content interviews, quality suffers."
      },
      {
        point: "Short-term engagement expectations",
        detail: "HVAC content compounds over seasonal cycles. Engagements shorter than 6 months rarely show the full potential of strategic content marketing."
      },
      {
        point: "Volume-based deliverable expectations",
        detail: "We do not sell HVAC content by blog count. Our approach prioritizes impact — seasonal power posts and conversion-optimized service area pages over generic filler."
      }
    ],
    ctaText: "Let's Talk About Your HVAC Business"
  },

  faq: {
    headline: "Frequently Asked Questions",
    groups: [
      {
        category: "Results & Timing",
        items: [
          { question: "How long does HVAC content marketing take to show results?", answer: "Initial ranking movement may appear within 2-3 months. Seasonal content that's published before peak demand periods — spring content live by March, fall content live by September — captures the full demand window." },
          { question: "How do you measure HVAC content performance?", answer: "We track rankings for seasonal HVAC queries, organic traffic from service area pages, and call attribution from content pages. The real measure is leads and booked calls attributable to organic content." },
          { question: "How many pieces of HVAC content do you produce per month?", answer: "It depends on strategy and gaps, not arbitrary quotas. Some HVAC companies need 6 service area pages. Others need 2 seasonal power posts. We scope based on market and seasonal opportunity." }
        ]
      },
      {
        category: "HVAC-Specific Questions",
        items: [
          { question: "Do you understand seasonal HVAC demand patterns?", answer: "Yes. We build content calendars around HVAC demand seasonality — publishing no-cool content before summer, pre-season maintenance content in spring, and no-heat content before winter. Timing matters as much as quality." },
          { question: "How do you handle content for different HVAC system types?", answer: "We create distinct content for central AC, heat pump, furnace, mini-split, and duct work — because homeowners search differently by system type. Equipment-specific content captures intent that generic HVAC pages miss." },
          { question: "Can you create content that ranks in AI search results?", answer: "Semantic structure, clear headings, FAQ schema, and authoritative depth help AI systems parse, understand, and cite HVAC content. We structure content for both traditional search rankings and AI citation." }
        ]
      },
      {
        category: "Partnership & Process",
        items: [
          { question: "How does HVAC content delivery work?", answer: "All content is delivered ready to publish. We can publish directly to your site or deliver via shared drives. Clear, simple, no hassle." },
          { question: "Do you require long-term contracts?", answer: "No mandatory contracts, but we recommend 6+ month commitments. HVAC content compounds across seasonal cycles, and short engagements rarely capture the full potential." },
          { question: "What do you need to get started?", answer: "Website access, service area map, target service types, and availability for one HVAC intake call. The more context on your equipment specialties and target markets, the better the content." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "HVAC Content Marketing Is One Piece of the",
    highlightedText: "360° Growth Engine",
    intro: "HVAC content powers every other channel when it is built around seasonal demand.",
    body: "Seasonal content supports local HVAC rankings. Service area pages reinforce GBP relevance. Replacement guides convert organic traffic that paid ads can retarget. We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: PenTool, id: "content-marketing", title: "HVAC Content Marketing", description: "Seasonal content that ranks and converts.", href: "/hvac-content-marketing", isCenter: true },
      { icon: Search, id: "local-seo", title: "HVAC Local SEO", description: "Organic visibility in local search results.", href: "/hvac-seo" },
      { icon: Map, id: "google-maps", title: "HVAC GBP SEO", description: "Dominate the local 3-pack.", href: "/hvac-google-maps" },
      { icon: Sparkles, id: "paid-media", title: "HVAC Paid Media", description: "Google Ads for emergency demand.", href: "/hvac-paid-advertising" },
      { icon: Mail, id: "email-marketing", title: "HVAC Email Marketing", description: "Seasonal campaigns and maintenance retention.", href: "/hvac-email-marketing" },
      { icon: BarChart3, id: "reporting", title: "HVAC Reporting", description: "Dashboards that prove value.", href: "/hvac-reporting" }
    ],
    ctaText: "Explore All HVAC Services",
    ctaHref: "/#services"
  }
};
