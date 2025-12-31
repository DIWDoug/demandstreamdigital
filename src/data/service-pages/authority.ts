import { Award, Shield, TrendingUp, Users, Globe, FileText, Handshake, Star, Search, Map, Sparkles, Mail, BarChart3, Share2 } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";

export const authorityConfig: ServicePageConfig = {
  slug: "authority",
  title: "Authority Building",
  metaTitle: "White-Label Authority Building for Agencies | Dialed-In Web",
  metaDescription: "White-label authority building services for agencies. Local link acquisition, citation building, and off-page SEO that creates lasting ranking power.",
  canonicalUrl: "https://dialedinweb.com/white-label-inbound-marketing-services/authority",
  keywords: "white label link building, local authority building, citation building, off-page SEO, local link acquisition",

  hero: {
    headline: "White-Label Authority Building",
    highlightedText: "Services",
    subheadline: "We build the off-page signals that make local rankings stick: quality links, strategic citations, and community authority that compounds over time.",
    qualifierLine: "White-label authority building for agencies that want defensible rankings and sustainable local visibility.",
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
        point: "You understand authority as a ranking factor",
        detail: "Links and citations support local rankings when done right. We partner with agencies who understand how off-page signals compound over time."
      },
      {
        point: "Your clients have a real business worth promoting",
        detail: "We build authority around legitimate local businesses. Quality link sources want to associate with real companies doing good work."
      },
      {
        point: "You value quality placements over link volume",
        detail: "Our focus is relevant, earned links from real sites. Not bulk directory submissions or low-quality link packages."
      }
    ],
    notFit: [
      {
        point: "You work with link brokers or buy links",
        detail: "We build earned authority through legitimate outreach. Link buying creates short-term gains with long-term penalties."
      },
      {
        point: "Expecting dozens of links per month",
        detail: "We do not sell links by volume. Our approach prioritizes relevance and quality, which means fewer but more impactful placements."
      },
      {
        point: "Clients in spammy or gray-hat industries",
        detail: "Quality link sources vet who they link to. Businesses in questionable verticals struggle to earn legitimate authority signals."
      },
      {
        point: "Guaranteed specific placements or DA targets",
        detail: "We cannot guarantee specific sites or domain authority thresholds. We can guarantee consistent, strategic outreach and quality standards."
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
          { question: "How long does it take to see results from link building?", answer: "Initial ranking movement may appear within 2-3 months. Compound effects typically become significant at 6-12 months as authority signals accumulate." },
          { question: "How do you measure authority?", answer: "We track domain rating, referring domains, citation flow, and anchor text distribution. The real measure is sustained ranking improvements over time." },
          { question: "Can you guarantee specific DA or DR increases?", answer: "We cannot guarantee specific metric thresholds. Domain authority is a third-party estimate, not a Google metric. We focus on earning quality links that move rankings." }
        ]
      },
      {
        category: "Services & Approach",
        items: [
          { question: "What types of links do you build?", answer: "Local publications, industry directories, community sponsorships, guest posts on relevant blogs, and niche-specific resources. Every link is earned through outreach, not purchased." },
          { question: "How do you handle anchor text?", answer: "We maintain natural anchor text profiles with a mix of branded, naked URL, and contextual anchors. Over-optimization is a penalty risk we actively avoid." },
          { question: "Do you build citations as part of this service?", answer: "Yes. Structured citations on industry directories and local business listings are part of our authority building approach. We focus on quality and relevance over volume." }
        ]
      },
      {
        category: "Partnership & Process",
        items: [
          { question: "How does white-label communication work?", answer: "We operate 100% white-label. All reporting and deliverables are branded as yours. You maintain the client relationship." },
          { question: "Do you require long-term contracts?", answer: "No mandatory contracts, but we recommend 6+ month commitments. Authority compounds over time, and short engagements rarely show full potential." },
          { question: "What do you need from clients to get started?", answer: "Access to their website, current backlink profile, and target keywords. The more context on their competitive landscape, the faster we can build a strategy." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Authority Building Is One Piece of the",
    highlightedText: "360° Ecosystem",
    intro: "Links and citations accelerate every other channel when they're done right.",
    body: "Off-page authority supports local rankings. Quality backlinks build domain strength. Citations reinforce geographic relevance. We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: Award, id: "authority", title: "Authority Building", description: "Links, citations, and off-page signals that compound.", href: "/white-label-inbound-marketing-services/authority", isCenter: true },
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
