import { FileText, PenTool, BookOpen, Target, Megaphone, BarChart3, Sparkles, MapPin, Lightbulb, HelpCircle, Layers, Award, Search, Map, Mail, Shield } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const contentMarketingConfig: ServicePageConfig = {
  slug: "content-marketing",
  title: "Content Marketing",
  metaTitle: "Plumbing Content Marketing: Blogs & SEO Copy | DemandStream",
  metaDescription: "Plumbing content that ranks for drain, sewer, and water heater queries. Service area pages, problem-aware blog posts, and lead magnets written to convert search traffic into booked jobs.",
  canonicalUrl: `${SITE_URL}/plumbing-content-marketing`,

  hero: {
    headline: "Content Marketing for",
    highlightedText: "Plumbing & HVAC Companies",
    subheadline: "We create the content that makes your business visible: service area pages, power posts, lead magnets, and strategic content that converts visitors into booked jobs.",
    qualifierLine: "You focus on your crew and your customers. We handle the research, writing, and optimization that makes content actually work.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built for plumbing and HVAC companies who need content that ranks and converts."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most Content Marketing Fails",
    intro: "You've seen this before. Traffic looks great in the report, but the phone doesn't ring. The problem isn't content volume—it's misunderstood metrics and missing strategy.",
    painPoints: [
      {
        icon: BarChart3,
        title: "Misunderstood Metrics",
        body: "Content ranking for 'People Also Ask' questions inflates organic traffic numbers but serves no one. A Texas plumber ranking for general questions gets California traffic that will never convert."
      },
      {
        icon: MapPin,
        title: "Geographic Mismatch",
        body: "Informational content that ranks nationally but attracts visitors from cities you don't serve. Impressive traffic reports that mean nothing to your bottom line."
      },
      {
        icon: Target,
        title: "No Conversion Architecture",
        body: "The 'Ultimate Guide to Water Heater Repair in Dallas' ranks beautifully—but has no phone number, no contact form, no CTA. It's content, not a lead generation asset."
      },
      {
        icon: FileText,
        title: "Content Without Intent Alignment",
        body: "Blog posts targeting informational queries when your business needs transactional visibility. Traffic from people researching, not people ready to call."
      },
      {
        icon: Sparkles,
        title: "AI-Invisible Content",
        body: "Content that search engines index but AI systems ignore. Without semantic structure and authoritative depth, LLMs will never cite your business in local recommendations."
      }
    ],
    closingLine: "We build content that ranks where it matters and converts when it counts.",
    closingHighlight: "Local relevance. Conversion architecture. Measurable ROI.",
    ctaText: "Start the Conversation"
  },

  outcomes: {
    headline: "What Actually Changes When Content Works",
    subheadline: "These outcomes only appear when content is strategically planned and consistently executed.",
    items: [
      {
        title: "Geographic Market Dominance",
        description: "Service area pages that rank in every target city. Competitors without local content cannot compete for 'near me' and city-specific searches."
      },
      {
        title: "Topical Authority Recognition",
        description: "Deep content that positions your business as the expert Google trusts. Authority compounds as interlinked content reinforces expertise signals."
      },
      {
        title: "Lead Generation at Scale",
        description: "Content assets that capture phone calls and form submissions. Guides and resources that build trust while you sleep."
      },
      {
        title: "AI Visibility and Citations",
        description: "Semantically structured content that AI systems reference. When ChatGPT and Perplexity answer local queries, your business appears."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From Content Gap to Content System",
    subheadline: "Content marketing is infrastructure. Each phase builds leverage for the next. Skipping steps breaks the system.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Audit & Strategy",
        description: "We assess current content, identify gaps, and map the competitive landscape.",
        activities: [
          "Content inventory and gap analysis",
          "Competitor content audit",
          "Keyword opportunity research",
          "Hub-and-spoke topic mapping",
          "Content calendar development",
          "Conversion path planning"
        ],
        icon: Shield,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Infrastructure",
        title: "Core Content Build",
        description: "Creating the foundational content assets that support all other marketing.",
        activities: [
          "Service page optimization",
          "Geographical content creation",
          "Power post development",
          "Schema markup implementation",
          "Internal linking architecture",
          "FAQ content development"
        ],
        icon: Layers,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Expansion",
        title: "Lead Magnets & Growth",
        description: "Building content assets that capture leads and expand reach.",
        activities: [
          "Guide and resource creation",
          "Lead magnet development",
          "Case study production",
          "Press release distribution",
          "AI visibility optimization",
          "Topical cluster expansion"
        ],
        icon: Target,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Optimization",
        title: "Performance & Iteration",
        description: "Refining content based on performance data and expanding what works.",
        activities: [
          "Content performance analysis",
          "Conversion rate optimization",
          "Content refresh program",
          "New opportunity targeting",
          "Competitive gap monitoring",
          "Quarterly strategy reviews"
        ],
        icon: BarChart3,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Foundation typically spans 2-4 weeks. Core content build runs 2-3 months. Lead generation assets compound over 6-12 months."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull Based on Content Goals",
    subheadline: "Each component is scoped based on your market and content gaps.",
    blocks: [
      {
        title: "Geographical Content",
        slug: "geographical-content",
        description: "Service area pages that capture local search intent and support Google Business Profile rankings.",
        icon: MapPin
      },
      {
        title: "Topical Authority",
        slug: "topical-authority",
        description: "Industry expertise articles that build topical authority and support GBP rankings through relevance signals.",
        icon: BookOpen
      },
      {
        title: "Power Posts",
        slug: "power-posts",
        description: "Comprehensive pillar content that dominates competitive keywords.",
        icon: Award
      },
      {
        title: "Guides & Resources",
        slug: "ebooks-guides",
        description: "Long-form downloadable content that captures leads and demonstrates expertise.",
        icon: FileText
      },
      {
        title: "Lead Generation Magnets",
        slug: "lead-magnets",
        description: "Checklists, templates, and tools that convert visitors into contacts.",
        icon: Target
      },
      {
        title: "Press Releases",
        slug: "press-releases",
        description: "Newsworthy announcements distributed to media outlets and news aggregators.",
        icon: Megaphone
      },
      {
        title: "Case Studies",
        slug: "case-studies",
        description: "Success stories that build trust and demonstrate real-world results.",
        icon: BarChart3
      },
      {
        title: "FAQ Content",
        slug: "faq-content",
        description: "Structured Q&A content that captures featured snippets and voice search.",
        icon: HelpCircle
      },
      {
        title: "Hub & Spoke Build-outs",
        slug: "hub-spoke-buildouts",
        description: "Strategic content architecture that maximizes topical authority.",
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
        point: "You understand content as an investment",
        detail: "Content marketing compounds over time. We work with businesses who see content as infrastructure, not an expense line."
      },
      {
        point: "You value quality over quantity",
        detail: "One strategic power post outperforms ten generic blogs. We focus on content that ranks and converts, not content calendars filled with filler."
      },
      {
        point: "You have expertise worth documenting",
        detail: "Great content requires subject matter input. We work with businesses that can provide the insights that make content authoritative."
      },
      {
        point: "You need geographic market coverage",
        detail: "Plumbing and HVAC companies that serve multiple cities or service areas benefit enormously from local content that creates compound visibility."
      },
      {
        point: "You need to replace inconsistent vendors",
        detail: "Transitioning from an inconsistent vendor is seamless. We onboard quickly, establish content baselines, and deliver without disruption."
      }
    ],
    notFit: [
      {
        point: "Expecting AI-generated content at scale",
        detail: "We use AI as a research tool, not a replacement for human expertise. Content that ranks requires original insights and genuine authority."
      },
      {
        point: "Unable to provide subject matter input",
        detail: "The best content comes from real expertise. If you are unresponsive to content interviews or reviews, quality suffers."
      },
      {
        point: "Short-term engagement expectations",
        detail: "Content compounds over time. Engagements shorter than 6 months rarely show the full potential of strategic content marketing."
      },
      {
        point: "Volume-based deliverable expectations",
        detail: "We do not sell content by word count. Our approach prioritizes impact, which sometimes means fewer but more strategic pieces."
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
          { question: "How long does it take to see results from content marketing?", answer: "Initial ranking movement may appear within 2-3 months. Lead generation and conversion improvements often show earlier. Compound effects become significant at 6-12 months." },
          { question: "How do you measure content performance?", answer: "We track rankings, organic traffic, time on page, conversion rates, and lead generation. The real measure is business impact: leads and revenue attributable to content." },
          { question: "How many pieces of content do you produce per month?", answer: "It depends on strategy, not arbitrary quotas. Some businesses need 2 power posts. Others need 20 service area pages. We scope based on goals and gaps." }
        ]
      },
      {
        category: "Services & Approach",
        items: [
          { question: "Do you write the content or do I?", answer: "We handle all writing. We conduct intake interviews to capture your expertise, then create content that reflects your voice and knowledge." },
          { question: "How do you handle content for multiple locations?", answer: "We create unique, locally relevant content for each service area. No duplicate content with city names swapped. Each page provides genuine local value." },
          { question: "What makes your content AI-optimized?", answer: "Semantic structure, clear headings, FAQ schema, and authoritative depth. We structure content so AI systems can parse, understand, and cite it." }
        ]
      },
      {
        category: "Partnership & Process",
        items: [
          { question: "How does content delivery work?", answer: "All content is delivered ready to publish. We can publish directly to your site or deliver via shared drives. Clear, simple, no hassle." },
          { question: "Do you require long-term contracts?", answer: "No mandatory contracts, but we recommend 6+ month commitments. Content compounds over time, and short engagements rarely show full potential." },
          { question: "What do you need to get started?", answer: "Website access, brand guidelines, target keywords, and availability for one intake call. The more context on your expertise, the better the content." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Content Marketing Is One Piece of the",
    highlightedText: "360° Growth Engine",
    intro: "Content powers every other channel when it is done right.",
    body: "Content supports local rankings. Lead magnets grow your contact list. Case studies close deals. We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: PenTool, id: "content-marketing", title: "Content Marketing", description: "Strategic content that ranks and converts.", href: "/plumbing-content-marketing", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search results.", href: "/hvac-and-plumbing-seo" },
      { icon: Map, id: "google-maps", title: "GBP SEO", description: "Dominate the local 3-pack.", href: "/plumbing-google-maps" },
      { icon: Sparkles, id: "paid-media", title: "Paid Media", description: "Google Ads and Meta campaigns.", href: "/plumbing-paid-advertising" },
      { icon: Mail, id: "email-marketing", title: "Email Marketing", description: "Nurture leads into customers.", href: "/plumbing-email-marketing" },
      { icon: Award, id: "authority", title: "Authority Building", description: "Links and citations that compound.", href: "/plumbing-authority-building" },
      { icon: BarChart3, id: "reporting", title: "Reporting", description: "Dashboards that prove value.", href: "/plumbing-reporting" }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/#services"
  }
};
