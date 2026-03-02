import { FileText, PenTool, Target, Megaphone, BarChart3, Sparkles, MapPin, HelpCircle, Layers, Award, Search, Map, Mail, Shield, BookOpen } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const hvacContentMarketingConfig: ServicePageConfig = {
  slug: "hvac-content-marketing",
  title: "HVAC Content Marketing",
  metaTitle: "HVAC Content Marketing for Seasonal Authority & Booked Calls | DemandStream Digital",
  metaDescription: "HVAC content built around repair intent, replacement authority, and seasonal demand — not generic blog volume. See how DemandStream builds content systems for HVAC companies.",
  canonicalUrl: `${SITE_URL}/hvac-content-marketing/`,

  hero: {
    headline: "HVAC",
    highlightedText: "Content Marketing",
    subheadline: "Built to Rank and Convert",
    qualifierLine: "When a homeowner's AC stops working in August, they don't browse options. They call whoever shows up in the Map Pack first with a clear, credible, local answer. HVAC content has one job: get your company into that position.",
    ctaText: "Claim Your Territory Today",
    ctaSubtext: "No generic blog libraries. No filler articles. No content built just to fill a publishing calendar."
  },

  problem: {
    eyebrow: "The Problem",
    headline: "Why Generic Contractor Content Fails HVAC Companies",
    intro: "HVAC is not a general home services business. It is a seasonal, regulated, capacity-constrained trade where the buying decision splits two ways: emergency repair or planned replacement. Generic content packages apply the same topic lists and the same publishing cadence to HVAC companies, dentists, and landscapers. They don't account for how HVAC calls actually happen.",
    painPoints: [
      {
        icon: Target,
        title: "Emergency Intent and Install Intent Are Different Searches",
        body: "A homeowner searching \"AC not cooling\" has different intent than one searching \"AC replacement cost.\" Each requires a different page, different copy, and a different conversion path. Content that blends them ranks poorly for both and converts neither."
      },
      {
        icon: MapPin,
        title: "Proximity Shifts Rankings Dramatically",
        body: "An HVAC company ranking at the top from three miles away may not appear at all for a searcher across the service area. Google weights proximity heavily for emergency local searches. A strategy that ignores ZIP-level competition leaves high-margin no-cool and no-heat calls on the table."
      },
      {
        icon: Award,
        title: "Review Velocity Is a Trust Signal, Not a Bonus",
        body: "When a homeowner finds two HVAC companies in the Map Pack, the one with more recent reviews and a response to each one gets the call. Review recency and response discipline are direct ranking and conversion factors — not add-ons."
      },
      {
        icon: Layers,
        title: "Service Specificity Matters for Rankings",
        body: "A homeowner searching \"heat pump installation near me\" has different intent than one searching \"HVAC company.\" Each distinct service needs its own page. Generic catch-all HVAC pages rank well for nothing because they signal relevance for everything and authority for nothing."
      },
      {
        icon: BarChart3,
        title: "After-Hours No-Cool Calls Are High-Margin Calls",
        body: "HVAC emergencies don't follow business hours. After-hours no-cool and no-heat calls are often the highest-margin jobs in the mix — the customer is not price shopping, they need help now. Your content and GBP have to be configured to capture that demand around the clock."
      }
    ],
    closingLine: "When a homeowner's AC stops working in August, they don't read guides. They search and call whoever shows up in the Map Pack. HVAC content has to be built around that urgency — not applied from a template designed for every trade.",
    closingHighlight: "Effective content requires scoping to your actual market — your services, your service area, your competition.",
    ctaText: "Claim Your Territory Today"
  },

  outcomes: {
    headline: "What Changes When HVAC Content Marketing Works",
    subheadline: "These outcomes only appear when content is built around how demand actually works.",
    items: [
      {
        title: "01 — More No-Cool and No-Heat Emergency Bookings",
        description: "The calls that matter most in HVAC happen at the worst times. When your company ranks in the Map Pack and top organic results for emergency HVAC searches in your service area, those calls come to you. Every month you hold those positions, the calls keep coming."
      },
      {
        title: "02 — Higher Booking Rate for Repair and Install Searches",
        description: "Organic local searchers are pre-qualified. They found your company because you showed up for the exact service they needed, in the area they needed it. A homeowner searching \"heat pump installation near me\" who finds your dedicated heat pump page is closer to booking than a general ad click."
      },
      {
        title: "03 — Defending Your Service Area Through Peak Season",
        description: "If your HVAC company is not ranking for AC repair, furnace replacement, and heat pump installation in your market, a competitor is. A competitor with consistent GBP activity and strong service area pages will outrank you on emergency calls regardless of how good your technicians are."
      },
      {
        title: "04 — Revenue Stability Through Heating and Cooling Cycles",
        description: "HVAC revenue spikes around heat waves, freeze events, and system failures. When your organic presence is strong year-round, you build a more stable baseline of maintenance, tune-up, and replacement calls. That baseline is what lets you plan capacity, manage payroll, and grow without relying entirely on seasonal spikes."
      }
    ]
  },

  roadmap: {
    eyebrow: "Where We Start",
    headline: "HVAC Content Starts With the Phone, Not Rankings",
    subheadline: "Before we write a single piece of content, we look at what searches your customers are actually making, which services produce your highest average ticket, and which content gaps your competitors haven't closed yet.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Audit & HVAC Content Strategy",
        description: "We assess current content, identify seasonal gaps, and map the HVAC competitive content landscape before anything is written.",
        activities: [
          "HVAC content inventory and gap analysis",
          "Keyword and gap analysis by service and geography",
          "Competitive content research across your market",
          "Hub-and-spoke topic mapping aligned to service architecture",
          "Seasonal content calendar development",
          "Conversion path planning from content to booked call"
        ],
        icon: Shield,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Infrastructure Build",
        title: "Core HVAC Content Build",
        description: "Core content assets that establish your authority and geographic relevance. These are the pages that do the long-term ranking work.",
        activities: [
          "Service-supporting articles aligned to high-intent HVAC searches",
          "Geographic content pages built around your dispatch radius",
          "Seasonal power posts published before demand peaks",
          "FAQ blocks structured for AI extraction and featured snippets",
          "Internal linking architecture connecting content to service pages"
        ],
        icon: Layers,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Expansion",
        title: "Replacement Demand & Lead Magnets",
        description: "Once the foundation is producing, we expand into higher-authority and higher-conversion assets.",
        activities: [
          "Power posts targeting replacement research intent",
          "Guides and educational content that support the sales conversation",
          "Case studies that build trust with decision-stage visitors",
          "Lead magnets that capture demand before it goes to a competitor",
          "Maintenance agreement content for recurring revenue support"
        ],
        icon: Target,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Optimization",
        title: "Seasonal Performance & Iteration",
        description: "Content is not a one-time build. We monitor performance and update assets to maintain rankings, improve conversion, and adapt to AI search changes.",
        activities: [
          "Performance analysis at the asset and cluster level",
          "Content updates to preserve and improve ranking positions",
          "Pre-season content refreshes before peak demand windows",
          "AI structure refinement as search behavior evolves"
        ],
        icon: BarChart3,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Foundation typically spans 2 to 4 weeks. Core HVAC content build runs 2 to 3 months. Expansion and optimization assets compound over 6 to 12 months."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull in Competitive HVAC Markets",
    subheadline: "Each component is scoped based on your market's competition level, your current content gaps, and your highest-margin revenue targets. No standard packages.",
    blocks: [
      {
        title: "Service Area Content",
        slug: "service-area-content",
        cluster: "Geographic",
        description: "City and neighborhood-level pages built around your actual dispatch radius. Structured to reinforce GBP service categories, support proximity rankings, and capture near-me searches that convert to booked calls.",
        icon: MapPin
      },
      {
        title: "Seasonal Geographic Content",
        slug: "seasonal-geographic-content",
        cluster: "Geographic",
        description: "Market-specific content built around your climate calendar. Pre-season AC content before summer demand. Pre-season heating content before the first cold snap. Shoulder-season content around maintenance agreements.",
        icon: BookOpen
      },
      {
        title: "HVAC Service Clusters",
        slug: "hvac-service-clusters",
        cluster: "Topical Authority",
        description: "Authority clusters built around your highest-margin services — repair and replacement separated intentionally. AC, furnace, heat pump, ductless systems, maintenance plans. Each cluster: hub page, supporting articles, FAQ assets, and city variations.",
        icon: Layers
      },
      {
        title: "Power Posts",
        slug: "power-posts",
        cluster: "Topical Authority",
        description: "\"How long does an AC unit last,\" \"signs your furnace needs replacing,\" \"how much does AC replacement cost,\" \"what causes short cycling.\" Written to rank at position one and to pre-sell the service.",
        icon: Award
      },
      {
        title: "Case Studies",
        slug: "case-studies",
        cluster: "Topical Authority",
        description: "Documented outcomes from real HVAC campaigns. What the problem was, what we built, what changed in the dispatch board. Designed to convert decision-stage visitors who need proof before they call.",
        icon: BarChart3
      },
      {
        title: "Downloadable Guides",
        slug: "downloadable-guides",
        cluster: "Conversion",
        description: "\"What to Do When Your AC Stops Working,\" \"HVAC Maintenance Checklist for Homeowners,\" \"How to Know If You Need a New Furnace.\" Captures intent before it goes to a competitor.",
        icon: FileText
      },
      {
        title: "Maintenance Agreement Content",
        slug: "maintenance-agreement-content",
        cluster: "Conversion",
        description: "Content structured to support membership and maintenance agreement sales — the recurring revenue base that stabilizes call flow between peaks.",
        icon: Target
      }
    ]
  },

  qualification: {
    eyebrow: "Selective Fit",
    headline: "Is HVAC Content Marketing Right for Your Company?",
    subheadline: "We work best with established HVAC companies that want to own their service area — not just generate a few more organic visits this month.",
    goodFit: [
      {
        point: "You run an HVAC company with an active dispatch board and real service capacity, ideally 2 or more trucks",
        detail: "Content marketing drives call volume over time. Without dispatch and service capacity in place, the leads have nowhere to land."
      },
      {
        point: "You want content that produces booked calls — not impressions, traffic reports, or brand awareness metrics",
        detail: "We build reports around the numbers that show up on the dispatch board. Page views and traffic reports are not how we measure results."
      },
      {
        point: "You understand that HVAC content marketing is a 6 to 12 month investment with compounding returns, not an overnight fix",
        detail: "Content compounds over time. Short-term evaluations produce incomplete data and cut the strategy before it has time to work."
      },
      {
        point: "You are willing to invest in topical authority as a core part of the system, not an optional add-on",
        detail: "Topical authority is the foundation that makes every other content asset more effective. It cannot be skipped."
      },
      {
        point: "You want a growth partner who reports on booked calls and cost per booked call, not just page views and rankings",
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
        detail: "We do not sell content by volume. Every asset is scoped to your market, your seasonal gaps, and your highest-margin services."
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
        detail: "HVAC content compounds across seasonal cycles. Engagements shorter than 6 months rarely demonstrate the full potential of the system."
      }
    ],
    ctaText: "Claim Your Territory Today"
  },

  faq: {
    headline: "Frequently Asked Questions About HVAC Content Marketing",
    groups: [
      {
        category: "Results & Timing",
        items: [
          {
            question: "How long does HVAC content marketing take to produce booked calls?",
            answer: "Most HVAC companies see meaningful ranking movement within 3 to 6 months on targeted service and geographic pages. Map Pack support and AI visibility gains typically follow by month 6 to 9. The companies that commit to content build lead flow that doesn't disappear when an ad budget changes or a peak season ends."
          },
          {
            question: "How much does HVAC content marketing cost?",
            answer: "Engagements are scoped based on your market's competition level, your current content gaps, and the services you want to lead with. We don't sell fixed post packages. We scope what your market actually requires."
          },
          {
            question: "Do you guarantee HVAC content rankings?",
            answer: "No. Any agency that guarantees specific ranking positions is making a promise they cannot keep. What we guarantee is that every asset is built with the right structure, service intent, and geographic relevance to compete in your market."
          },
          {
            question: "What if we already have HVAC content on our site?",
            answer: "We audit what you have before we build anything new. Existing content that is performing gets protected and reinforced. Content that is cannibalizing rankings or pulling the wrong traffic gets restructured or consolidated."
          }
        ]
      },
      {
        category: "HVAC Content vs. Paid Ads",
        items: [
          {
            question: "Should I run HVAC SEO or Google Ads?",
            answer: "Both serve different functions. Google Ads produce immediate call volume. Content builds durable organic positions that don't require ongoing spend to hold. They work better together — organic authority improves paid ad quality scores, and paid ad data informs which content topics to prioritize first."
          },
          {
            question: "How do you measure the success of HVAC content marketing?",
            answer: "We measure booked calls, cost per booked call, and call volume by source. We also track ranking positions on service and city pages and organic call attribution by service type. Page views and impressions are not how we report results."
          },
          {
            question: "Can SEO help generate install leads, not just repair calls?",
            answer: "Yes. A homeowner researching \"how long does an AC unit last\" or \"HVAC replacement cost\" is in a planning window. Content built around those searches captures demand earlier in the decision cycle — often before the homeowner calls anyone. Repair and install content are built as separate clusters so neither dilutes the other."
          },
          {
            question: "How does HVAC content perform differently during peak season?",
            answer: "Pre-season content published before summer or winter demand hits your market captures search volume at the moment it rises. Companies with content already ranking when the first heat wave or cold snap hits capture those calls before competitors who are scrambling to publish."
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
            question: "What is your content process for HVAC companies?",
            answer: "Foundation audit and topic map first. Then content is built in priority order — highest-margin services and highest-competition gaps first, with seasonal timing built into the production schedule. Every asset goes through a brand voice, SEO, and conversion review before it publishes."
          },
          {
            question: "How do you build links for HVAC companies?",
            answer: "Local and trade-specific outreach: ACCA links, supplier directories, chamber listings, and community publications. Every link evaluated for geographic and trade relevance — not just domain authority."
          }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "HVAC Content Marketing Is Part of a",
    highlightedText: "Bigger Growth System",
    intro: "Content marketing drives topical authority and geographic relevance. But it produces the strongest results when it works with the rest of the marketing system — not in isolation from it.",
    body: "Your content strengthens your Google Maps performance. Your GBP reviews improve the trust signals that make content convert. Your paid ads capture the demand your content surfaces. Your email marketing reactivates past customers before they search for a new HVAC company. Your reporting dashboard connects all of it to cost per booked call.",
    services: [
      { icon: PenTool, id: "content-marketing", title: "HVAC Content Marketing", description: "Seasonal content that ranks and converts.", href: "/hvac-content-marketing", isCenter: true },
      { icon: Search, id: "local-seo", title: "HVAC Local SEO", description: "Organic visibility in local search results.", href: "/hvac-seo" },
      { icon: Map, id: "google-maps", title: "HVAC Google Maps / GBP", description: "Dominate the local 3-pack.", href: "/hvac-google-maps" },
      { icon: Sparkles, id: "paid-media", title: "HVAC Google Ads", description: "Paid search and LSA for emergency demand.", href: "/hvac-paid-advertising" },
      { icon: Mail, id: "email-marketing", title: "HVAC Email Marketing", description: "Seasonal campaigns and maintenance retention.", href: "/hvac-email-marketing" },
      { icon: BarChart3, id: "reporting", title: "HVAC Reporting", description: "Connect every channel to cost per booked call.", href: "/hvac-reporting" }
    ],
    ctaText: "Explore All HVAC Services",
    ctaHref: "/#services"
  }
};
