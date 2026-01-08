import { Award, Shield, TrendingUp, Users, Globe, FileText, Handshake, Star, Search, Map, Sparkles, Mail, BarChart3, Share2, Megaphone, PenTool } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";

export const authorityConfig: ServicePageConfig = {
  slug: "authority",
  title: "Authority Building",
  metaTitle: "White Label Authority Building for Agencies | Wholesale SEO Trust Signals & Backlinks by Dialed-in Web",
  metaDescription: "Dialed-in Web builds online authority through links and signals that boost rankings. Strengthen client SEO. Partner with us today.",
  canonicalUrl: "https://dialedinweb.com/white-label-authority-building",

  hero: {
    headline: "White Label Local Authority Building for",
    highlightedText: "Digital Agencies",
    subheadline: "We build the off-page signals that make local rankings stick: quality links, strategic citations, and community authority that compounds over time.",
    qualifierLine: "You stay the hero. We handle the link building and citation management that makes rankings defensible.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built for agencies serving local businesses in competitive markets."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most Authority Building Fails",
    intro: "You've seen this before. Links are acquired, citations are built, but local authority never compounds. Rankings stay fragile, and competitors with real community presence keep winning.",
    painPoints: [
      {
        icon: Globe,
        title: "Links Without Relevance",
        body: "Generic directory links Google ignores. The link count grows, but local rankings never move because there is no geographic or industry relevance."
      },
      {
        icon: FileText,
        title: "Citations Without Strategy",
        body: "NAP listings scattered across low-quality directories. No focus on the industry-specific and local sources that actually influence rankings."
      },
      {
        icon: Shield,
        title: "No Strategy, Just Tactics",
        body: "Random acts of link building without a coherent authority plan. Effort wasted on activities that do not compound into local credibility."
      },
      {
        icon: Users,
        title: "Missing Community Signals",
        body: "No local sponsorships, chamber memberships, or community involvement. The trust signals that differentiate local businesses are completely absent."
      },
      {
        icon: TrendingUp,
        title: "No Anchor Text Discipline",
        body: "Over-optimized anchors trigger penalties. Under-optimized anchors waste link equity. Without intentional anchor strategy, links underperform or backfire."
      }
    ],
    closingLine: "We build authority the hard way: strategically, earned, and compounding.",
    closingHighlight: "That's why it lasts.",
    ctaText: "Start the Conversation"
  },

  outcomes: {
    headline: "What Actually Changes When Authority Works",
    subheadline: "These outcomes only appear when off-page signals are built correctly and consistently.",
    items: [
      {
        title: "Rankings That Resist Algorithm Updates",
        description: "Strong backlink profiles create ranking resilience. Sites with real authority recover faster from updates and resist competitive pressure."
      },
      {
        title: "Compound Growth Over Time",
        description: "Authority builds on itself. Quality links attract more links. Citations reinforce relevance. Each placement makes the next one easier to earn."
      },
      {
        title: "Local Visibility That Sticks",
        description: "Geographic authority signals strengthen local pack and organic positions. Competitors without local link equity struggle to catch up."
      },
      {
        title: "Competitive Differentiation",
        description: "When competitors cannot match your client's backlink profile and citation depth, they cannot compete on equal footing. Authority creates moats."
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
        description: "Consistent outreach generating quality local links, citations, and brand mentions.",
        activities: [
          "Local blog and publication outreach",
          "Community sponsorship execution",
          "Industry directory submissions",
          "Citation building across verticals",
          "Reddit and Quora engagement",
          "Anchor text diversification"
        ],
        icon: TrendingUp,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Expansion",
        title: "Deepening Local Presence",
        description: "Building on initial wins to expand authority across channels AI engines index.",
        activities: [
          "Secondary market link building",
          "Niche directory placements",
          "Facebook group participation",
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
          "Brand mention monitoring",
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
    headline: "The Levers We Pull Based on Competitive Landscape",
    subheadline: "Each component is scoped based on industry, market, and competitive landscape.",
    blocks: [
      {
        title: "Local Link Acquisition",
        slug: "local-links",
        description: "Strategic links from local publications, blogs, and community sites.",
        icon: Globe
      },
      {
        title: "Unstructured Citations",
        slug: "unstructured-citations",
        description: "Video, audio, image, press release, and Web 2.0 mentions beyond directories.",
        icon: FileText
      },
      {
        title: "Brand Mentions & Social Signals",
        slug: "brand-mentions",
        description: "Reddit, Quora, and Facebook group mentions that AI engines index and reference.",
        icon: Share2
      },
      {
        title: "Anchor Text Diversification",
        slug: "anchor-text",
        description: "Natural anchor profiles that avoid penalties and maximize ranking power.",
        icon: Shield
      },
      {
        title: "Local Sponsorships & Partnerships",
        slug: "sponsorships",
        description: "Community involvement that creates authentic geographic authority.",
        icon: Handshake
      },
      {
        title: "Press Releases",
        slug: "press-releases",
        description: "Newsworthy announcements distributed for visibility and citation building.",
        icon: Megaphone,
        // Links to Content Marketing hub's press releases spoke
      }
    ]
  },

  qualification: {
    eyebrow: "Before We Talk",
    headline: "We Are Selective About Who We Work With",
    subheadline: "Fit matters more than volume. This is who gets results, and who should look elsewhere.",
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
      },
      {
        point: "You need a reliable fulfillment partner to replace inconsistent vendors",
        detail: "Transitioning from an inconsistent vendor is seamless. We onboard quickly, establish baselines, and deliver without disruption to your client relationships."
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
      { icon: Award, id: "authority", title: "Authority Building", description: "Links, citations, and off-page signals that compound.", href: "/white-label-local-authority-building", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search results.", href: "/white-label-local-seo" },
      { icon: Map, id: "google-maps", title: "GBP SEO", description: "Dominate the local 3-pack.", href: "/white-label-gbp-seo" },
      { icon: PenTool, id: "content-marketing", title: "Content Marketing", description: "Strategic content that ranks and converts.", href: "/white-label-content-marketing" },
      { icon: Sparkles, id: "paid-media", title: "Paid Media", description: "Google Ads and Meta campaigns.", href: "/white-label-paid-media" },
      { icon: Mail, id: "email-marketing", title: "Email Marketing", description: "Nurture leads into customers.", href: "/white-label-email-marketing" },
      { icon: BarChart3, id: "reporting", title: "Reporting", description: "White-labeled dashboards.", href: "/white-label-reporting" }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/white-label-inbound-marketing-services"
  }
};
