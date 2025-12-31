import { Award, Shield, TrendingUp, Users, Globe, FileText, Handshake, Star, Search, Map, Sparkles, Mail, BarChart3, Share2 } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";

export const authorityConfig: ServicePageConfig = {
  slug: "authority",
  title: "Authority Building",
  metaTitle: "White-Label Authority Building for Agencies | Dialed-In Web",
  metaDescription: "White-label authority building services for agencies. Digital PR, link acquisition, reputation management, and thought leadership that builds lasting credibility.",
  canonicalUrl: "https://dialedinweb.com/white-label-inbound-marketing-services/authority",
  keywords: "white label authority building, digital PR, link building, reputation management, thought leadership",

  hero: {
    headline: "White-Label Authority Building",
    highlightedText: "Services",
    subheadline: "We build the authority signals Google trusts and customers recognize, so rankings hold and brands win long-term.",
    qualifierLine: "White-label authority building for agencies that want lasting visibility, earned credibility, and defensible rankings across competitive markets.",
    ctaText: "Schedule a Discovery Call",
    ctaSubtext: "Start a Conversation"
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most Authority Building Fails",
    intro: "You've seen this before. Links are acquired, citations are built, but local authority never compounds. Rankings stay fragile, and competitors with real community presence keep winning.",
    painPoints: [
      {
        icon: Globe,
        title: "Links Without Relevance",
        body: "Generic directory links Google ignores. The link count grows, but local rankings never move because there's no geographic or industry relevance."
      },
      {
        icon: FileText,
        title: "Citations Without Strategy",
        body: "NAP listings scattered across low-quality directories. No focus on the industry-specific and local sources that actually influence rankings."
      },
      {
        icon: Shield,
        title: "No Strategy, Just Tactics",
        body: "Random acts of link building without a coherent authority plan. Effort wasted on activities that don't compound into local credibility."
      },
      {
        icon: Users,
        title: "Missing Community Signals",
        body: "No local sponsorships, chamber memberships, or community involvement. The trust signals that differentiate local businesses are completely absent."
      }
    ],
    closingLine: "We build authority the hard way: strategically, earned, and compounding.",
    closingHighlight: "That's why it lasts.",
    ctaText: "Schedule a Discovery Call"
  },

  outcomes: {
    headline: "What Actually Changes When Authority Works",
    subheadline: "These outcomes only appear when authority is built correctly and consistently.",
    items: [
      {
        icon: Shield,
        title: "Rankings That Resist Algorithm Updates",
        description: "Authority signals create ranking resilience. Sites with strong authority recover faster from updates and resist competitive pressure."
      },
      {
        icon: TrendingUp,
        title: "Compound Growth Over Time",
        description: "Authority builds on itself. Media coverage leads to more coverage. Links lead to more links. Each win makes the next one easier."
      },
      {
        icon: Users,
        title: "Trust That Converts Visitors",
        description: "Media mentions, awards, and third-party validation build customer confidence. Authority is not just for search engines—it improves conversion."
      },
      {
        icon: Award,
        title: "Competitive Differentiation",
        description: "When competitors cannot match your client's credibility signals, they cannot compete on equal footing. Authority creates moats."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From Baseline to Local Authority",
    subheadline: "Authority building is a long-term strategy. Each phase builds leverage for the next. Skipping steps breaks the system.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Audit & Strategy",
        description: "We assess current authority signals, identify competitive gaps, and map the local link landscape.",
        activities: [
          "Backlink profile audit",
          "Citation audit and cleanup",
          "Competitor authority analysis",
          "Local link opportunity research",
          "Anchor text profile review",
          "Industry directory identification"
        ],
        icon: Shield,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Acquisition",
        title: "Active Link Building",
        description: "Consistent outreach generating quality local links and citations.",
        activities: [
          "Local blog and publication outreach",
          "Community sponsorship execution",
          "Industry directory submissions",
          "Chamber and association memberships",
          "Citation building across verticals",
          "Anchor text diversification"
        ],
        icon: TrendingUp,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Expansion",
        title: "Deepening Local Presence",
        description: "Building on initial wins to expand geographic and industry authority.",
        activities: [
          "Secondary market link building",
          "Niche directory placements",
          "Local event sponsorships",
          "Review generation campaigns",
          "Unstructured citation building",
          "Guest post placements"
        ],
        icon: Award,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Maintenance",
        title: "Sustained Authority & Defense",
        description: "Protecting rankings and continuing to build competitive advantage.",
        activities: [
          "Ongoing link acquisition",
          "Competitor monitoring",
          "Link profile health checks",
          "Citation consistency audits",
          "Quarterly authority reviews",
          "Anchor text rebalancing"
        ],
        icon: Globe,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Foundation typically spans 2-4 months depending on scope and market complexity. Initial ranking movement may appear in 2-3 months. Compounding effects emerge at 6-12 months."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Components of Authority Building",
    subheadline: "Each component is scoped based on industry, market, and competitive landscape—not templated packages.",
    blocks: [
      {
        title: "Local Link Acquisition",
        slug: "local-links",
        description: "Strategic links from local publications, blogs, and community sites.",
        icon: Globe
      },
      {
        title: "Citation Building",
        slug: "citations",
        description: "Industry-specific and local directory listings that signal relevance.",
        icon: FileText
      },
      {
        title: "Anchor Text Diversification",
        slug: "anchor-text",
        description: "Natural anchor profiles that avoid penalties and maximize ranking power.",
        icon: Shield
      },
      {
        title: "Local Sponsorships & Partnerships",
        slug: "local-partnerships",
        description: "Community involvement that creates authentic geographic authority.",
        icon: Handshake
      },
      {
        title: "Industry Directory Listings",
        slug: "industry-directories",
        description: "Professional association and niche directory placements.",
        icon: Award
      },
      {
        title: "Review & Reputation Signals",
        slug: "reputation-signals",
        description: "Review generation and response management that builds trust.",
        icon: Users
      }
    ]
  },

  qualification: {
    eyebrow: "Before We Talk",
    headline: "We Are Selective About Who We Work With",
    subheadline: "Fit matters more than volume. Authority only works when it's earned.",
    goodFit: [
      {
        point: "Your clients are willing to invest in long-term credibility",
        detail: "Authority building is not a quick fix. It requires consistent effort over 6-12+ months. We partner with agencies whose clients understand this timeline."
      },
      {
        point: "You serve clients with genuine expertise worth promoting",
        detail: "We build authority around real expertise and genuine value. Clients need something worth talking about for media and link opportunities to materialize."
      },
      {
        point: "Your clients can participate in content and story development",
        detail: "The best authority building leverages client expertise. Quotes, interviews, and input make placements more valuable and more likely."
      },
      {
        point: "You understand authority as a ranking factor",
        detail: "Authority signals support SEO, but this is a distinct service from keyword optimization. We partner with agencies who understand the difference."
      },
      {
        point: "You value earned media over paid placements",
        detail: "Our focus is genuine, earned authority—not pay-to-play links or sponsored content disguised as editorial. Real authority comes from real credibility."
      }
    ],
    notFit: [
      {
        point: "You work with link brokers or buy links",
        detail: "We build earned authority through legitimate outreach and relationship-based placements. Link buying creates short-term gains with long-term penalties."
      },
      {
        point: "Expecting quick link quantity over quality",
        detail: "We do not sell links by the dozen. Our approach is quality over quantity, which means fewer but more impactful placements."
      },
      {
        point: "Clients with nothing unique to say",
        detail: "Authority building requires genuine expertise or story angles. If there is nothing differentiating about the client, media will not care."
      },
      {
        point: "Crisis reputation management needs",
        detail: "Our focus is proactive authority building. We are not a crisis management firm. Active reputation crises require specialized crisis PR."
      },
      {
        point: "Guaranteed specific placements",
        detail: "We cannot guarantee specific publications or placements. Editorial decisions are outside our control. We can guarantee consistent, strategic effort."
      },
      {
        point: "Short-term engagement expectations",
        detail: "Authority compounds over time. Engagements shorter than 6 months rarely show the full potential of this work."
      }
    ],
    ctaText: "Let's Discuss Your Clients"
  },

  faq: {
    headline: "Frequently Asked Questions",
    groups: [
      {
        category: "Results & Timing",
        items: [
          { question: "How long does it take to build authority?", answer: "Initial wins may appear within 2-3 months, but the compound effects of authority development typically become significant at 6-12 months and continue growing over time." },
          { question: "How is authority measured?", answer: "We track domain authority metrics, link profile growth, media mentions, brand search volume, and referral traffic. The best measure is ranking resilience over time." },
          { question: "Can you guarantee media placements?", answer: "We cannot guarantee specific placements as editorial decisions are outside our control. However, our proven processes and media relationships consistently generate quality placements." }
        ]
      },
      {
        category: "Services & Approach",
        items: [
          { question: "How is this different from link building?", answer: "Link building is one component of authority building, but authority encompasses much more: media coverage, reviews, brand mentions, industry recognition, and overall reputation. We take a holistic approach." },
          { question: "Do you handle crisis reputation management?", answer: "Our focus is proactive authority building rather than reactive crisis management. However, we can help develop strategies to address reputation challenges as part of a comprehensive program." },
          { question: "What industries do you work with?", answer: "We have experience across many industries, with particular depth in professional services, home services, healthcare, and legal. The principles of authority building apply broadly." }
        ]
      },
      {
        category: "Partnership & Process",
        items: [
          { question: "How does white-label communication work?", answer: "We operate 100% white-label. All communication flows through you. We provide reports, strategy updates, and talking points. You maintain the client relationship." },
          { question: "Do you require long-term contracts?", answer: "No mandatory long-term contracts, but we strongly recommend 6+ month commitments for authority building to show meaningful results." },
          { question: "What do you need from clients?", answer: "We need client expertise and availability for quotes, interviews, and content input. The more accessible the client, the better the authority opportunities we can pursue." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Authority Building Is One Piece of the",
    highlightedText: "360° Ecosystem",
    intro: "Authority accelerates every other channel when it's real.",
    body: "Authority signals support SEO rankings. Media coverage drives branded search. Reputation builds trust. We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: Award, id: "authority", title: "Authority Building", description: "PR, links, and reputation that build lasting credibility.", href: "/white-label-inbound-marketing-services/authority", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search results.", href: "/white-label-inbound-marketing-services/local-seo" },
      { icon: Map, id: "google-maps", title: "Google Maps", description: "Dominate the local 3-pack.", href: "/white-label-inbound-marketing-services/google-maps" },
      { icon: Sparkles, id: "paid-media", title: "Paid Media", description: "Google Ads and Meta campaigns.", href: "/white-label-inbound-marketing-services/paid-media" },
      { icon: Star, id: "reputation", title: "Reputation", description: "Review generation and management.", href: "/white-label-inbound-marketing-services/google-maps" },
      { icon: Mail, id: "email-marketing", title: "Email Marketing", description: "Nurture leads into customers.", href: "/white-label-inbound-marketing-services/email-marketing" },
      { icon: BarChart3, id: "reporting", title: "Reporting", description: "White-labeled dashboards.", href: "/white-label-inbound-marketing-services/reporting" },
      { icon: Share2, id: "retargeting", title: "Retargeting", description: "Stay top of mind.", href: "/white-label-inbound-marketing-services/paid-media" }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/white-label-inbound-marketing-services"
  }
};
