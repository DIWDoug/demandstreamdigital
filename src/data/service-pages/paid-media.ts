import { MousePointerClick, Zap, Target, TrendingUp, DollarSign, BarChart3, FileText, Settings, Search, Map, Sparkles, Star, Mail, Globe, Share2 } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";

export const paidMediaConfig: ServicePageConfig = {
  slug: "paid-media",
  title: "Paid Media",
  metaTitle: "White-Label Paid Media Management for Agencies | Dialed-In Web",
  metaDescription: "White-label Google Ads and Meta Ads management for agencies. Local search campaigns, landing page optimization, and ROI-focused paid media that generates leads.",
  canonicalUrl: "https://dialedinweb.com/white-label-inbound-marketing-services/paid-media",
  keywords: "white label paid media, google ads management, meta ads, local PPC, lead generation campaigns",

  hero: {
    headline: "White Label Paid Media for",
    highlightedText: "Digital Agencies",
    subheadline: "Every day without a working campaign costs your client $500+ in lost leads. We build Google Ads, Meta Ads, and Local Service Ads that generate 15-40 qualified leads per month, executed entirely under your brand.",
    qualifierLine: "You stay the hero. We make the phone ring.",
    ctaText: "Start the Conversation",
    ctaSubtext: "For agencies tired of explaining poor results."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Your Clients Are Bleeding $3,000/Month on Broken Campaigns",
    intro: "You know exactly how this ends. $2,500 in ad spend. 47 clicks. 2 junk leads. And a client asking why they should keep paying you.",
    painPoints: [
      {
        icon: Target,
        title: "$127 Per Lead Instead of $35",
        body: "Generic campaigns burn 3x the budget they should. A plumber in Phoenix competes differently than one in Seattle. Template setups bleed money from day one."
      },
      {
        icon: DollarSign,
        title: "Zero Proof When the Invoice Arrives",
        body: "No call tracking. No form attribution. No way to prove that $3,000 generated anything. Every monthly invoice becomes a churn conversation."
      },
      {
        icon: Settings,
        title: "Campaigns That Nobody Is Watching",
        body: "Search terms filling with garbage. Bids drifting 40% above target. Performance degrading week over week while your vendor runs a weekly 10-minute check."
      },
      {
        icon: FileText,
        title: "Reports That Make Clients More Confused",
        body: "12 pages of impressions, CTR, and quality scores. Zero connection to revenue. Clients have no idea if the investment is working."
      }
    ],
    closingLine: "We build campaigns that generate 15-40 leads per month at $25-50 per lead",
    closingHighlight: "so you can show clients exactly what their money produced.",
    ctaText: "See How We Build Campaigns"
  },

  outcomes: {
    headline: "What Changes When Campaigns Actually Work",
    subheadline: "Specific, measurable results within 30 days.",
    items: [
      {
        icon: Zap,
        title: "First Leads Within 7 Days",
        description: "Campaigns launch in 1-2 weeks. Qualified calls and form fills start the first week of spend. Not the first quarter."
      },
      {
        icon: Target,
        title: "Every Dollar Tracked to Revenue",
        description: "Call tracking, form attribution, and CRM integration. Show clients that $2,500 generated 47 leads worth $94,000 in closed revenue."
      },
      {
        icon: TrendingUp,
        title: "Cost Per Lead Drops 30-50% by Month 3",
        description: "Daily bid adjustments, weekly negative keyword updates, and monthly strategy refinement compound into consistently improving efficiency."
      },
      {
        icon: DollarSign,
        title: "Predictable Growth You Can Scale",
        description: "Once a campaign produces $35 leads at 4:1 ROAS, scale the budget and watch revenue follow."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From Zero to 40+ Leads Per Month",
    subheadline: "A proven 4-phase system that generates leads in week one and compounds performance every month.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Launch in 10-14 Days",
        description: "Campaign architecture built for your client's specific market, with tracking that proves every dollar.",
        activities: [
          "Competitor ad analysis and gap identification",
          "Keyword research with cost-per-lead projections",
          "Campaign structure for local lead generation",
          "Geographic and demographic targeting",
          "Ad copy written to beat competitor CTR",
          "All extensions configured for maximum visibility",
          "Landing page audit or development",
          "Call tracking with recording enabled",
          "Conversion tracking across all touchpoints",
          "Bid strategy matched to budget and goals",
          "Budget allocation framework",
          "Campaign launch with 72-hour monitoring"
        ],
        icon: Target,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Optimization",
        title: "Cut Cost Per Lead 30-50%",
        description: "Daily attention that eliminates waste and drives efficiency most vendors ignore.",
        activities: [
          "Daily search term review and negative keyword updates",
          "Ad copy A/B testing with statistical significance",
          "Bid adjustments by device, location, and hour",
          "Quality Score improvement for lower CPCs",
          "Landing page conversion rate optimization",
          "Audience refinement based on lead quality",
          "Budget reallocation to top performers",
          "Weekly optimization cycles with documented changes"
        ],
        icon: Settings,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Expansion",
        title: "Scale to 60+ Leads Per Month",
        description: "Once unit economics work, expand into new keywords, audiences, and channels.",
        activities: [
          "New keyword expansion into adjacent services",
          "Audience expansion with lookalike targeting",
          "Display and YouTube remarketing campaigns",
          "Geographic expansion into new service areas",
          "Budget increases matched to lead capacity",
          "Cross-channel strategy (Google + Meta)",
          "Retargeting sequences for unconverted traffic"
        ],
        icon: TrendingUp,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Dominance",
        title: "Own the Market",
        description: "Maintain competitive advantage while maximizing efficiency at scale.",
        activities: [
          "Competitive monitoring and rapid response",
          "Advanced bidding strategies for market leadership",
          "Attribution modeling across all channels",
          "Quarterly strategic reviews with growth planning",
          "New platform feature adoption",
          "Long-term expansion and diversification"
        ],
        icon: BarChart3,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Everything happens under your brand. First leads typically arrive within 7-10 days of launch."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Components of Paid Media Management",
    subheadline: "Each component is scoped based on budget, goals, and market dynamics.",
    blocks: [
      {
        title: "Google Ads Management",
        slug: "google-ads-management",
        description: "Search, display, and shopping campaigns built for local lead generation and performance.",
        icon: Search
      },
      {
        title: "Meta Ads Management",
        slug: "meta-ads-management",
        description: "Facebook and Instagram campaigns that reach local audiences and drive qualified leads.",
        icon: Target
      },
      {
        title: "Local Service Ads",
        slug: "local-service-ads",
        description: "Google-verified LSAs that put your clients at the top of local search with pay-per-lead pricing.",
        icon: Map
      },
      {
        title: "Retargeting Campaigns",
        slug: "retargeting-campaigns",
        description: "Display and social retargeting that keeps your clients top of mind with past visitors.",
        icon: Share2
      },
      {
        title: "Landing Page Design",
        slug: "landing-page-design",
        description: "Conversion-focused landing pages with local trust signals, click-to-call, and optimized forms.",
        icon: MousePointerClick
      },
      {
        title: "Conversion Tracking",
        slug: "conversion-tracking",
        description: "Proper tracking setup that connects every click to form fills, calls, and revenue.",
        icon: Settings
      },
      {
        title: "Call Tracking & Attribution",
        slug: "call-tracking-attribution",
        description: "Call recording, dynamic number insertion, and multi-touch attribution for complete visibility.",
        icon: BarChart3
      },
      {
        title: "ROI Analysis & Reporting",
        slug: "roi-analysis-reporting",
        description: "White-labeled reports that connect ad spend to leads and revenue your clients understand.",
        icon: DollarSign
      }
    ]
  },

  qualification: {
    eyebrow: "Before We Talk",
    headline: "This Works When the Conditions Are Right",
    subheadline: "Paid media is powerful, but it requires the right setup to succeed. Here is who sees results.",
    goodFit: [
      {
        point: "Minimum $2,000/month ad spend",
        detail: "Below this threshold, there is not enough data to optimize. $2,000+ generates the 50-100 clicks per week needed to prove what works."
      },
      {
        point: "Clients who answer the phone",
        detail: "We can generate 40 calls per month. If 30% go to voicemail, 12 leads are wasted. Clients need systems to capture every opportunity."
      },
      {
        point: "You want leads, not impressions",
        detail: "Our reports show cost per lead, cost per acquisition, and revenue attribution. If you want vanity metrics, we are not the right partner."
      },
      {
        point: "You need a reliable fulfillment partner",
        detail: "Agencies come to us after inconsistent vendors burned client trust. We execute with documented scope and clear accountability."
      },
      {
        point: "Month 3 matters more than week 1",
        detail: "First-week campaigns are good. Third-month campaigns are 40% more efficient. We partner with agencies who value compounding performance."
      }
    ],
    notFit: [
      {
        point: "Ad spend under $1,500/month",
        detail: "There is not enough budget to generate statistical significance. We cannot recommend paid media until spend supports proper optimization."
      },
      {
        point: "Expecting 50 leads in week one",
        detail: "Campaigns launch fast, but optimization takes 4-8 weeks. Week one delivers leads. Month three delivers efficiency."
      },
      {
        point: "No CRM or lead tracking",
        detail: "If we cannot see which leads became customers, we cannot optimize for revenue. Closed-loop attribution is required."
      },
      {
        point: "Price is the only factor",
        detail: "Quality paid media costs $1,000-2,500/month in management fees. If you are shopping on price alone, the cheapest option will cost more in wasted spend."
      },
      {
        point: "Setup only, no ongoing management",
        detail: "Campaigns degrade without daily attention. We do not offer launch-and-leave services."
      }
    ],
    ctaText: "Let's Discuss Your Clients"
  },

  faq: {
    headline: "Frequently Asked Questions",
    groups: [
      {
        category: "Results & Performance",
        items: [
          { question: "How fast will leads start coming in?", answer: "Campaigns launch in 10-14 days. Most clients see qualified leads within the first 7 days of ad spend. First-month volume is good. Third-month efficiency is 30-50% better." },
          { question: "What cost per lead should we expect?", answer: "Depends on market and service. Local service businesses typically see $25-75 per lead. We track CPL weekly and optimize to drive it down consistently." },
          { question: "What happens if a campaign underperforms?", answer: "We monitor daily and optimize weekly. If a campaign is not hitting targets by week 3, we diagnose root cause and pivot strategy. Our goal is always improvement, not maintenance." }
        ]
      },
      {
        category: "Services & Scope",
        items: [
          { question: "Which platforms do you manage?", answer: "Google Search, Google Display, Google Local Service Ads, YouTube, Facebook, and Instagram. Most local clients start with Google Search and expand once unit economics are proven." },
          { question: "Do you build landing pages?", answer: "Yes. We develop conversion-optimized landing pages with local trust signals, click-to-call, and forms designed to convert. Landing page quality directly impacts cost per lead." },
          { question: "How do you prove ROI to clients?", answer: "Call tracking with recording, form attribution, and CRM integration. Our reports show exactly how many leads came from each campaign and what revenue they generated." },
          { question: "What is the minimum ad spend?", answer: "$2,000/month minimum for local campaigns. Below this, there is not enough data to optimize effectively. We help agencies set appropriate budgets based on market competition." }
        ]
      },
      {
        category: "Partnership & Process",
        items: [
          { question: "Is everything truly white-label?", answer: "100%. All reports, communications, and deliverables are branded as your agency. Your clients never know we exist. You maintain the relationship and the margin." },
          { question: "Do you require contracts?", answer: "No. Month-to-month with 30-day notice. We keep clients through performance, not lock-in. Average client tenure is 18+ months because the results compound." },
          { question: "What access do you need to start?", answer: "Google Ads and/or Meta Ads account access, website access for tracking pixels, and ideally CRM access so we can optimize for closed revenue, not just leads." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Paid Media Is One Piece of the",
    highlightedText: "360° Ecosystem",
    intro: "Effective local marketing is interconnected. Paid media fills the pipeline while SEO builds, retargeting keeps you top of mind, and email nurtures leads.",
    body: "We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: Sparkles, id: "paid-media", title: "Paid Media", description: "Google Ads and Meta campaigns for immediate lead generation.", href: "/white-label-inbound-marketing-services/paid-media", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search results.", href: "/white-label-inbound-marketing-services/local-seo" },
      { icon: Map, id: "google-maps", title: "Google Maps", description: "Dominate the local 3-pack.", href: "/white-label-inbound-marketing-services/google-maps" },
      { icon: Star, id: "reputation", title: "Reputation", description: "Build trust with review generation.", href: "/white-label-inbound-marketing-services/google-maps" },
      { icon: Mail, id: "email-marketing", title: "Email Marketing", description: "Nurture leads into customers.", href: "/white-label-inbound-marketing-services/email-marketing" },
      { icon: Globe, id: "authority", title: "Authority Building", description: "PR and backlinks that build trust.", href: "/white-label-inbound-marketing-services/authority" },
      { icon: BarChart3, id: "reporting", title: "Reporting", description: "White-labeled dashboards.", href: "/white-label-inbound-marketing-services/reporting" },
      { icon: Share2, id: "retargeting", title: "Retargeting", description: "Stay top of mind with display ads.", href: "/white-label-inbound-marketing-services/paid-media" }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/white-label-inbound-marketing-services"
  }
};
