import { FileText, PenTool, Target, Megaphone, BarChart3, Sparkles, MapPin, HelpCircle, Layers, Award, Search, Map, Mail, Shield, BookOpen } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const plumbingContentMarketingConfig: ServicePageConfig = {
  slug: "plumbing-content-marketing",
  title: "Plumbing Content Marketing",
  metaTitle: "Plumbing Content Marketing for Local Authority & Booked Calls | DemandStream Digital",
  metaDescription: "Plumbing content that ranks for the searches that book calls — not traffic that never converts. See how DemandStream builds authority content systems for plumbing companies.",
  canonicalUrl: `${SITE_URL}/plumbing-content-marketing/`,

  hero: {
    headline: "Plumbing",
    highlightedText: "Content Marketing",
    subheadline: "Built to Rank and Convert",
    qualifierLine: "When a homeowner searches \"emergency plumber near me\" or \"water heater replacement cost,\" they are not browsing options. They are calling whoever shows up with a credible, relevant, local answer. Plumbing content has one job: get your company into that position.",
    ctaText: "Claim Your Territory Today",
    ctaSubtext: "No generic listicles. No filler blogs. No content that exists just to exist."
  },

  problem: {
    eyebrow: "The Problem",
    headline: "Why Generic Contractor Content Fails Plumbing Companies",
    intro: "Plumbing is not a general home services business. It is an emergency-driven, reputation-sensitive trade where the buying decision happens in under two minutes. Generic content packages apply the same topic lists, the same keyword formulas, and the same publishing cadence to plumbers, dentists, and dog groomers. They don't account for how plumbing searches actually behave.",
    painPoints: [
      {
        icon: Target,
        title: "Emergency Intent Dominates Plumbing Search",
        body: "The highest-value plumbing searches are urgent: \"emergency plumber near me,\" \"burst pipe repair,\" \"water heater not working.\" These are not research queries. They are active emergencies. Content has to be built around that urgency, not retrofitted from a template built for informational queries."
      },
      {
        icon: MapPin,
        title: "Proximity Shifts Rankings Dramatically",
        body: "A plumbing company ranking at the top from three miles away may not appear at all for a searcher on the other side of the service area. Google weights proximity heavily for emergency local searches. A strategy that ignores ZIP-level competition leaves high-margin calls on the table every day."
      },
      {
        icon: Award,
        title: "Review Velocity Is a Trust Signal, Not a Bonus",
        body: "When a homeowner finds two plumbers in the Map Pack, the one with more recent reviews and a response to each one gets the call. Review recency and response discipline are direct ranking and conversion factors — not nice-to-haves. They are part of the system."
      },
      {
        icon: Layers,
        title: "Service Specificity Matters for Rankings",
        body: "A homeowner searching \"tankless water heater installation near me\" has different intent than one searching \"plumber near me.\" Each distinct service needs its own page. Generic catch-all plumbing pages rank well for nothing because they signal relevance for everything and authority for nothing."
      },
      {
        icon: BarChart3,
        title: "After-Hours Calls Are High-Margin Calls",
        body: "Plumbing emergencies don't follow business hours. After-hours calls are often the highest-margin jobs in the mix — the customer is not price shopping, they need a plumber now. Your content and GBP have to be configured to capture that demand around the clock."
      }
    ],
    closingLine: "When a homeowner's pipe bursts at midnight, they don't read articles. They call whoever shows up in the Map Pack with clear, specific, local content.",
    closingHighlight: "Effective content requires scoping to your actual market — your services, your service area, your competition.",
    ctaText: "Claim Your Territory Today"
  },

  outcomes: {
    headline: "What Changes When Plumbing Content Marketing Works",
    subheadline: "These outcomes only appear when content is built around how demand actually works.",
    items: [
      {
        title: "01 — More Emergency Bookings From Organic Search",
        description: "The calls that matter most in plumbing happen at the worst times. When your company ranks in the Map Pack and top organic results for emergency plumber searches in your service area, those calls come to you — not the competitor who outspent you on ads. Every month you hold those positions, the calls keep coming."
      },
      {
        title: "02 — Higher Booking Rate on Organic Calls",
        description: "Organic local searchers are pre-qualified. They found your company because you showed up for the exact service they needed, in the area they needed it. A homeowner searching \"hydro jetting near me\" who finds your dedicated hydro jetting page is closer to booking than a general ad click."
      },
      {
        title: "03 — Defending Your Service Area",
        description: "If your plumbing company is not ranking for water heater replacements, slab leaks, and drain cleaning in your market, a competitor is. A competitor with consistent GBP activity and strong service area pages will outrank you on emergency calls regardless of how good your techs are."
      },
      {
        title: "04 — Revenue Stability Through Predictable Call Flow",
        description: "Plumbing revenue spikes around freeze events, burst pipes, and water heater failures. When your organic presence is strong year-round, you build a more stable baseline of drain cleaning, water heater maintenance, and repiping calls. That baseline is what lets you plan capacity, manage payroll, and grow without relying entirely on seasonal spikes."
      }
    ]
  },

  roadmap: {
    eyebrow: "Where We Start",
    headline: "Plumbing Content Starts With Call Intent, Not Traffic Volume",
    subheadline: "Before we write a single piece of content, we look at what searches your customers are actually making, which services produce your highest average ticket, and which content gaps your competitors haven't closed yet.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Audit & Plumbing Content Strategy",
        description: "We assess current content, identify gaps, and map the plumbing competitive content landscape before anything is written.",
        activities: [
          "Plumbing content inventory and gap analysis",
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
        title: "Core Plumbing Content Build",
        description: "Core content assets that establish your authority and geographic relevance. These are the pages that do the long-term ranking work.",
        activities: [
          "Service-supporting articles aligned to high-intent plumbing searches",
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
        title: "Authority Assets & Lead Magnets",
        description: "Once the foundation is producing, we expand into higher-authority and higher-conversion assets.",
        activities: [
          "Power posts targeting high-margin service intent",
          "Guides and educational content that support the sales conversation",
          "Case studies that build trust with decision-stage visitors",
          "Lead magnets that capture demand before it goes to a competitor",
          "Emergency content architecture for after-hours search capture"
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
    footerNote: "Foundation typically spans 2 to 4 weeks. Core plumbing content build runs 2 to 3 months. Expansion and optimization assets compound over 6 to 12 months."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull in Competitive Plumbing Markets",
    subheadline: "Each component is scoped based on your market's competition level, your current content gaps, and your highest-margin revenue targets. No standard packages.",
    blocks: [
      {
        title: "Service Area Content",
        slug: "service-area-content",
        cluster: "Geographic",
        description: "City and neighborhood-level pages built around your actual dispatch radius. Structured to reinforce GBP service categories, support proximity rankings, and capture near-me searches that convert.",
        icon: MapPin
      },
      {
        title: "Local FAQ Content",
        slug: "local-faq-content",
        cluster: "Geographic",
        description: "Question-and-answer content built around real local plumbing searches. \"Who are the best plumbers in [city],\" \"does [city] require permits for water heater replacement.\" Structured for AI extraction and local intent.",
        icon: HelpCircle
      },
      {
        title: "Plumbing Service Clusters",
        slug: "plumbing-service-clusters",
        cluster: "Topical Authority",
        description: "Authority clusters built around your highest-margin services — drain cleaning, sewer repair, water heater replacement, slab leak detection, gas line services, repiping. Each cluster: hub page, supporting articles, FAQ assets, and city variations.",
        icon: Layers
      },
      {
        title: "Power Posts",
        slug: "power-posts",
        cluster: "Topical Authority",
        description: "\"How long does a water heater last,\" \"signs of a slab leak,\" \"what causes low water pressure,\" \"how much does repiping cost.\" Written to rank at position one and to pre-sell the service.",
        icon: Award
      },
      {
        title: "Case Studies",
        slug: "case-studies",
        cluster: "Topical Authority",
        description: "Documented outcomes from real plumbing jobs and campaigns. What the problem was, what changed, what the result was. Designed to convert decision-stage visitors who need proof before they call.",
        icon: BarChart3
      },
      {
        title: "Downloadable Guides",
        slug: "downloadable-guides",
        cluster: "Conversion",
        description: "\"What to Do When Your Pipes Freeze,\" \"Plumbing Maintenance Checklist for New Homeowners.\" Captures intent before it goes to a competitor.",
        icon: FileText
      },
      {
        title: "Emergency Content Architecture",
        slug: "emergency-content-architecture",
        cluster: "Conversion",
        description: "Content structured for after-hours, high-urgency searches. Clear answer formatting, prominent phone CTAs, GBP alignment, and schema markup. Built to capture the highest-margin calls in the mix.",
        icon: Target
      }
    ]
  },

  qualification: {
    eyebrow: "Selective Fit",
    headline: "Is Plumbing Content Marketing Right for Your Company?",
    subheadline: "We work best with established plumbing companies that want to own their service area — not just generate a few more organic visits this month.",
    goodFit: [
      {
        point: "You run a plumbing company with an active dispatch board and real service capacity, ideally 2 or more trucks",
        detail: "Content marketing drives call volume over time. Without dispatch and service capacity in place, the leads have nowhere to land."
      },
      {
        point: "You want content that produces booked calls — not impressions, traffic reports, or brand awareness metrics",
        detail: "We build reports around the numbers that show up on the dispatch board. Page views and traffic reports are not how we measure results."
      },
      {
        point: "You understand that plumbing content marketing is a 6 to 12 month investment with compounding returns, not an overnight fix",
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
    headline: "Frequently Asked Questions About Plumbing Content Marketing",
    groups: [
      {
        category: "Results & Timing",
        items: [
          {
            question: "How long does plumbing content marketing take to produce booked calls?",
            answer: "Most plumbing companies see meaningful ranking movement within 3 to 6 months on targeted service and geographic pages. Map Pack support and AI visibility gains typically follow by month 6 to 9. The companies that commit to content build lead flow that doesn't disappear when an ad budget changes."
          },
          {
            question: "How much does plumbing content marketing cost?",
            answer: "Content marketing engagements are scoped based on your market's competition level, your current content gaps, and the services you want to lead with. We don't sell fixed post packages. We scope what your market actually requires."
          },
          {
            question: "Do you guarantee plumbing content rankings?",
            answer: "No. Any agency that guarantees specific ranking positions is making a promise they cannot keep. What we guarantee is that every asset is built with the right structure, service intent, and geographic relevance to compete in your market."
          },
          {
            question: "What if we already have plumbing content on our site?",
            answer: "We audit what you have before we build anything new. Existing content that is performing gets protected and reinforced. Content that is cannibalizing rankings or pulling the wrong traffic gets restructured or consolidated."
          }
        ]
      },
      {
        category: "Plumbing Content vs. Paid Ads",
        items: [
          {
            question: "Should I run plumbing content marketing or Google Ads?",
            answer: "Both serve different functions. Google Ads produce immediate call volume. Content builds durable organic positions that don't require ongoing spend to hold. They work better together — organic authority improves paid ad quality scores, and paid ad data informs which content topics to prioritize first."
          },
          {
            question: "How do you measure the success of plumbing content marketing?",
            answer: "We measure booked calls, cost per booked call, and call volume by source. We also track ranking positions on service and city pages and organic call attribution. Page views and impressions are not how we report results."
          },
          {
            question: "Can content help generate install leads, not just repair calls?",
            answer: "Yes. A homeowner researching \"water heater replacement cost\" or \"how long do pipes last before repiping\" is in a planning window. Content built around those searches captures demand earlier in the decision cycle — often before the homeowner calls anyone."
          }
        ]
      },
      {
        category: "Process & Delivery",
        items: [
          {
            question: "How do you handle communication and reporting?",
            answer: "You receive clear monthly reporting showing content performance, ranking movement, and call attribution. Proactive updates keep you informed at every stage."
          },
          {
            question: "What is your content process for plumbing companies?",
            answer: "Foundation audit and topic map first. Then content is built in priority order — highest-margin services and highest-competition gaps first. Every asset goes through a brand voice, SEO, and conversion review before it publishes."
          },
          {
            question: "How do you build content for plumbing companies without making it sound generic?",
            answer: "We write from the trade up. Every piece of content is built around how plumbing customers actually search, how plumbing calls actually happen, and what makes a homeowner choose one plumber over another. We don't start from a content template and add plumbing keywords."
          }
        ]
      }
    ]
  },

  // No ecosystem section on child pages — lives on parent hub only
  ecosystem: {
    eyebrow: "",
    headline: "",
    highlightedText: "",
    intro: "",
    body: "",
    services: [],
    ctaText: "",
    ctaHref: ""
  }
};
