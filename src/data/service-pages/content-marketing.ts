import { FileText, PenTool, BookOpen, Target, Megaphone, BarChart3, Sparkles, MapPin, HelpCircle, Layers, Award, Search, Map, Mail, Shield } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const contentMarketingConfig: ServicePageConfig = {
  slug: "content-marketing",
  title: "Plumbing & HVAC Content Marketing",
  metaTitle: "Plumbing & HVAC Content Marketing for Revenue Growth | DemandStream Digital",
  metaDescription: "Generic content doesn't book plumbing and HVAC calls. We build structured content systems that drive local authority, AI visibility, and booked service calls. See how.",
  canonicalUrl: `${SITE_URL}/plumbing-hvac-content-marketing/`,

  hero: {
    headline: "Plumbing & HVAC",
    highlightedText: "Content Marketing",
    subheadline: "Built for Authority, Rankings, and Booked Calls",
    qualifierLine: "Most contractor content is written to fill a blog page. It ranks for searches outside your service area. It pulls in homeowners who aren't buying. It has no path to a booked call. We build content systems that do the opposite.",
    ctaText: "Claim Your Territory Today",
    ctaSubtext: "No generic blog posts. No filler articles. No word-count marketing."
  },

  problem: {
    eyebrow: "The Problem",
    headline: "Why Most Plumbing & HVAC Content Marketing Doesn't Produce Calls",
    intro: "Plumbing and HVAC are local, intent-driven trades. A homeowner searching \"furnace repair near me\" at 10pm is not browsing. They are calling whoever surfaces first with clear, credible, relevant content. Most contractor content fails that test.",
    painPoints: [
      {
        icon: MapPin,
        title: "Traffic That Never Converts",
        body: "Informational content that pulls traffic from outside your service area. Visits that will never become calls."
      },
      {
        icon: FileText,
        title: "Education That Benefits Competitors",
        body: "\"Ultimate guide\" articles with no conversion structure or CTA. You educate the reader, and your competitor gets the call."
      },
      {
        icon: Layers,
        title: "Authority With Nowhere to Go",
        body: "No internal linking architecture connecting content to service pages. Authority that can't flow where it needs to."
      },
      {
        icon: MapPin,
        title: "Geographic Signals Google Ignores",
        body: "City pages with identical content and swapped city names. Geographic signals that Google dismisses as duplicate content."
      },
      {
        icon: Sparkles,
        title: "Invisible to AI Search",
        body: "No AI-structured formatting — no FAQ blocks, no semantic hierarchy. Invisible to AI overviews and voice search results."
      },
      {
        icon: BarChart3,
        title: "Channels Running in Silos",
        body: "Content disconnected from paid advertising and GBP strategy. Channels operating independently instead of as a system."
      }
    ],
    closingLine: "Traffic that doesn't convert is not growth. It's cost.",
    closingHighlight: "When a homeowner's water heater fails on a Sunday, they don't read blog posts. They scan the Map Pack and the top organic results, and they call. Every content asset we build is designed to support one of those positions.",
    ctaText: "Claim Your Territory Today"
  },

  outcomes: {
    headline: "What Changes When Content Marketing Works",
    subheadline: "These outcomes only appear when content is built around how plumbing and HVAC demand actually works — not around page volume.",
    items: [
      {
        title: "01 — Geographic Market Control",
        description: "Service-area content built around your actual dispatch radius, not the nearest major metro. City-level pages that reinforce GBP service categories, support proximity rankings, and capture the near-me searches your competitors are leaving on the table."
      },
      {
        title: "02 — Topical Authority Recognition",
        description: "Interlinked content clusters that tell Google you are the authoritative source for drain cleaning, water heater replacement, AC repair, or whatever your highest-margin services are. Clusters built to compound — each new page strengthens the ones around it."
      },
      {
        title: "03 — AI Visibility and Citations",
        description: "Semantically structured content formatted so that AI systems — Google AI Overviews, voice search, assistant queries — pull from your pages rather than competitors'. When a homeowner asks \"how long does a water heater last,\" your company is the source that gets cited."
      },
      {
        title: "04 — Lead Generation at Scale",
        description: "Content designed with conversion architecture from the first paragraph. Clear calls to action. Phone-first structure. Internal links to high-conversion service pages. Every asset earns its place by moving the reader toward a booked call."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Structure",
    headline: "The Market Domination Framework™ for Content Marketing",
    subheadline: "Every content engagement runs through this framework. Foundation first. Then infrastructure. Then expansion. Then ongoing optimization. In that order, every time.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Audit & Strategy",
        description: "Before a single piece of content is written, we establish what you already have, what your market needs, and what your competitors are missing.",
        activities: [
          "Content audit of existing pages and performance",
          "Keyword and gap analysis by service and geography",
          "Competitive content research across your market",
          "Hub-and-spoke topic mapping aligned to service architecture",
          "Conversion path planning from content to booked call"
        ],
        icon: Shield,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Infrastructure Build",
        title: "Core Content Build",
        description: "Core content assets that establish your authority and geographic relevance. These are the pages that do the long-term ranking work.",
        activities: [
          "Service-supporting articles aligned to high-intent searches",
          "Geographic content pages built around your dispatch radius",
          "FAQ blocks structured for AI extraction and featured snippets",
          "Internal linking architecture connecting content to service pages"
        ],
        icon: Layers,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Expansion",
        title: "Authority Assets",
        description: "Once the foundation is producing, we expand into higher-authority and higher-conversion assets.",
        activities: [
          "Power posts that establish topical depth on high-margin services",
          "Guides and educational content that support the sales conversation",
          "Case studies that build trust with decision-stage visitors",
          "Lead magnets that capture demand before it goes to a competitor"
        ],
        icon: Target,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Optimization",
        title: "Performance & Iteration",
        description: "Content is not a one-time build. We monitor performance and update assets to maintain rankings, improve conversion, and adapt to AI search changes.",
        activities: [
          "Performance analysis at the asset and cluster level",
          "Content updates to preserve and improve ranking positions",
          "AI structure refinement as search behavior evolves"
        ],
        icon: BarChart3,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Foundation typically spans 2 to 4 weeks. Core content build runs 2 to 3 months. Expansion and optimization assets compound over 6 to 12 months."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull in Competitive Plumbing & HVAC Markets",
    subheadline: "Each content component is scoped based on your market's competition level, your current content gaps, and your highest-margin revenue targets. No standard packages. No fixed deliverable lists that ignore what your market actually requires.",
    blocks: [
      {
        title: "Geographic Content Pages",
        slug: "geographic-content",
        cluster: "Geographic",
        description: "Service-area pages built around your actual dispatch radius. City-level relevance that reinforces GBP categories, supports proximity rankings, and captures near-me searches that convert.",
        icon: MapPin
      },
      {
        title: "Local FAQ Content",
        slug: "local-faq-content",
        cluster: "Geographic",
        description: "Question-and-answer content formatted around real local searches. Structured for AI extraction and featured snippet capture.",
        icon: HelpCircle
      },
      {
        title: "Topical Cluster Build-Outs",
        slug: "topical-clusters",
        cluster: "Authority",
        description: "Hub-and-spoke architecture connecting service hubs to supporting articles to city pages. Every page strengthens the pages around it. Clusters built to compound, not decay.",
        icon: Layers
      },
      {
        title: "Power Posts",
        slug: "power-posts",
        cluster: "Authority",
        description: "\"How long does a water heater last,\" \"Signs your AC needs replacement,\" \"What causes low water pressure.\" Written to rank and to pre-sell.",
        icon: Award
      },
      {
        title: "Case Studies",
        slug: "case-studies",
        cluster: "Authority",
        description: "Real outcome documentation. What the problem was, what we built, what changed. Designed to convert decision-stage visitors who need proof before they call.",
        icon: BarChart3
      },
      {
        title: "E-books & Downloadable Guides",
        slug: "ebooks-guides",
        cluster: "Conversion",
        description: "\"What to Do When Your Furnace Fails,\" \"Homeowner's Guide to Water Heater Replacement.\" Built around your highest-priority services.",
        icon: FileText
      },
      {
        title: "Press Releases",
        slug: "press-releases",
        cluster: "Conversion",
        description: "Locally distributed releases tied to new service offerings, certifications, expansions, and community presence. Builds citation signals and local authority.",
        icon: Megaphone
      }
    ]
  },

  qualification: {
    eyebrow: "Selective Fit",
    headline: "Is Plumbing & HVAC Content Marketing Right for Your Company?",
    subheadline: "We work best with established plumbing and HVAC companies that want to own their service area — not just generate a few more organic visits this month.",
    goodFit: [
      {
        point: "You run a plumbing or HVAC company with an active dispatch board and real service capacity, ideally 3 or more trucks",
        detail: "Content marketing drives call volume over time. Without dispatch and service capacity in place, the leads have nowhere to land."
      },
      {
        point: "You want content that produces booked calls — not impressions, traffic reports, or brand awareness metrics",
        detail: "We build reports around the numbers that show up on the dispatch board. Page views and traffic reports do not."
      },
      {
        point: "You understand that content marketing is a 6 to 12 month investment with compounding returns, not an overnight fix",
        detail: "Content compounds over time. Short-term evaluations produce incomplete data and cut the strategy before it has time to work."
      },
      {
        point: "You are willing to invest in topical authority as a core part of the system, not an optional add-on",
        detail: "Topical authority is the foundation that makes every other content asset more effective. It cannot be skipped."
      },
      {
        point: "You want a growth partner who reports on booked calls and cost per booked call, not just page views",
        detail: "Attribution integrity is a prerequisite. We connect content performance to dispatch board outcomes, not vanity metrics."
      },
      {
        point: "You have a verified, address-visible Google Business Profile",
        detail: "GBP signals reinforce content authority and geographic relevance. A weak or unverified profile limits content effectiveness."
      }
    ],
    notFit: [
      {
        point: "You expect content to produce leads within the first 30 days",
        detail: "Content marketing is a durable channel, not a fast one. Companies expecting immediate results are not a fit for this system."
      },
      {
        point: "You want a set number of blog posts per month regardless of strategy",
        detail: "We do not sell content by volume. Every asset is scoped to your market, your gaps, and your highest-margin services."
      },
      {
        point: "You are not willing to commit to internal linking and service page alignment",
        detail: "Content without internal linking architecture cannot transfer authority where it needs to go. The system requires it."
      },
      {
        point: "You need guaranteed ranking positions for specific keywords",
        detail: "No ethical agency can guarantee specific ranking positions. We guarantee every asset is built to earn its position."
      },
      {
        point: "You are looking for the lowest-cost option available",
        detail: "Quality content management is an investment. Price-first decisions produce price-first results."
      },
      {
        point: "You are not willing to commit to a minimum 6-month engagement after roadmap delivery",
        detail: "Content compounds over time. Engagements shorter than 6 months rarely demonstrate the full potential of the system."
      }
    ],
    ctaText: "Claim Your Territory Today"
  },

  faq: {
    headline: "Frequently Asked Questions About Plumbing & HVAC Content Marketing",
    groups: [
      {
        category: "Results & Timing",
        items: [
          {
            question: "How long does content marketing take to produce booked calls?",
            answer: "Content marketing compounds over time. Most plumbing and HVAC companies see meaningful ranking movement within 3 to 6 months on targeted service and geographic pages. Significant Map Pack support and AI visibility gains typically follow by month 6 to 9. Content is not a fast channel — it is a durable one. The companies that commit to it build lead flow that doesn't disappear when an ad budget changes."
          },
          {
            question: "How do you measure the success of content marketing?",
            answer: "We measure what shows up on your dispatch board — booked calls, cost per booked call, and booking rate by source. We also track ranking positions on service and city pages, organic call volume, and AI citation frequency. We do not lead with traffic or impressions."
          },
          {
            question: "Do you guarantee content ranking positions?",
            answer: "No. Any agency that guarantees specific ranking positions is making a promise they cannot keep. What we guarantee is that every content asset is built to earn a position — with the right structure, intent alignment, and geographic relevance to compete in your market."
          },
          {
            question: "What if we already have some content on our site?",
            answer: "We audit what you have before we build anything new. Existing content that is performing gets protected and reinforced. Content that is cannibalizing rankings or pulling the wrong traffic gets restructured or consolidated. We don't build on top of a broken foundation."
          }
        ]
      },
      {
        category: "Content Marketing vs. Paid Ads",
        items: [
          {
            question: "Should we run content marketing or Google Ads for our plumbing or HVAC company?",
            answer: "Both serve different functions. Paid ads produce immediate call volume and are capacity-adjustable. Content marketing builds durable organic positions that don't require ongoing spend to hold. They work better together — organic authority improves paid ad quality scores, and paid ad data informs which content topics to prioritize."
          },
          {
            question: "How is content marketing different from SEO?",
            answer: "Content marketing is one component of a complete SEO system. It builds the topical depth and geographic relevance that supports organic rankings. But SEO also requires technical foundation, GBP optimization, review velocity, and link authority. Content without the rest of the system underperforms. That's why we build it as part of a connected system, not as a standalone service."
          },
          {
            question: "Can content help generate install leads, not just repair calls?",
            answer: "Yes. Installation intent operates on different search behavior than emergency repair. A homeowner researching \"how long does an AC unit last\" or \"water heater replacement cost\" is in a planning window. Content built around those searches captures demand earlier in the decision cycle — often before the homeowner calls anyone."
          }
        ]
      },
      {
        category: "Process & Delivery",
        items: [
          {
            question: "How do you handle communication and reporting?",
            answer: "You receive clear monthly reporting showing content performance, ranking movement, and call attribution by source. Proactive updates keep you informed at every stage."
          },
          {
            question: "What access do you need from us?",
            answer: "Google Search Console, Google Analytics, Google Business Profile, and your CMS. We keep requirements minimal and handle the technical setup."
          },
          {
            question: "What is your content process for plumbing and HVAC companies?",
            answer: "We start with a foundation audit and topic map. From there, content is built in priority order — highest-margin services and highest-competition gaps first. Every asset goes through a brand voice, SEO, and conversion review before it publishes."
          }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Plumbing & HVAC Content Marketing Is Part of a",
    highlightedText: "Bigger Growth System",
    intro: "Content marketing drives topical authority and geographic relevance. But it produces the strongest results when it works with the rest of the marketing system — not in isolation from it.",
    body: "Your content strengthens your Google Maps performance. Your GBP reviews improve the trust signals that make content convert. Your paid ads capture the demand your content surfaces. Your email marketing reactivates past customers before they search for a new plumber or HVAC company. Your reporting dashboard connects all of it to cost per booked call.",
    services: [
      { icon: PenTool, id: "content-marketing", title: "Content Marketing", description: "Topical authority and geographic relevance.", href: "/plumbing-hvac-content-marketing", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search results.", href: "/hvac-and-plumbing-seo" },
      { icon: Map, id: "google-maps", title: "Google Maps / GBP", description: "Dominate the local 3-pack.", href: "/plumbing-google-maps" },
      { icon: Sparkles, id: "paid-media", title: "Google Ads", description: "Paid search and LSA campaigns.", href: "/hvac-and-plumbing-paid-ads" },
      { icon: Mail, id: "email-marketing", title: "Email Marketing", description: "Reactivate past customers.", href: "/plumbing-email-marketing" },
      { icon: Award, id: "reputation", title: "Reputation Management", description: "Review velocity and trust signals.", href: "/reputation-management" },
      { icon: BarChart3, id: "reporting", title: "Reporting & Dashboards", description: "Connect every channel to cost per booked call.", href: "/reporting-dashboards" }
    ],
    ctaText: "Explore All Plumbing & HVAC Services",
    ctaHref: "/#services"
  }
};
