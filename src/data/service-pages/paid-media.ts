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
    subheadline: "Your clients need leads today, not in six months. We build and manage Google Ads and Meta campaigns that generate qualified local leads at scale, executed entirely under your brand.",
    qualifierLine: "You stay the hero. We handle the execution that keeps clients growing and confident.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built for agencies who need results they can stand behind."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most White-Label PPC Fails Your Clients",
    intro: "You have seen this before. The campaigns launched, spend is flowing, but leads are weak, costs are high, and you are left explaining why the numbers do not match the promises.",
    painPoints: [
      {
        icon: Target,
        title: "Generic Campaigns, Generic Results",
        body: "Cookie-cutter campaign structures ignore local market dynamics. A service business in Dallas competes differently than one in Portland. Template campaigns deliver template results."
      },
      {
        icon: DollarSign,
        title: "Spend Without Strategy",
        body: "Budget goes out the door without clear conversion goals or attribution. When you cannot prove ROI, every invoice becomes a negotiation."
      },
      {
        icon: Settings,
        title: "Set It and Forget It Management",
        body: "Campaigns need daily attention, not weekly glances. Search terms go unchecked, bids drift, and performance degrades while no one is watching."
      },
      {
        icon: FileText,
        title: "Reports That Confuse Rather Than Clarify",
        body: "Clients receive data dumps instead of insights. Impressions and clicks mean nothing if you cannot connect them to leads and revenue."
      }
    ],
    closingLine: "We build campaigns from the ground up for local lead generation",
    closingHighlight: "so clients get leads they can count and you keep the margin you earned.",
    ctaText: "See How We Build Campaigns"
  },

  outcomes: {
    headline: "What Actually Changes When Paid Media Works",
    subheadline: "What changes when campaigns are built for local lead generation and optimized weekly.",
    items: [
      {
        icon: Zap,
        title: "Leads Start Flowing Immediately",
        description: "Unlike SEO, paid media delivers from day one. Qualified leads within the first week, not the first quarter."
      },
      {
        icon: Target,
        title: "Spend Connects to Revenue",
        description: "Every dollar is tracked. Call tracking, form attribution, and conversion data prove what the investment produces."
      },
      {
        icon: TrendingUp,
        title: "Performance Compounds Monthly",
        description: "Daily optimization and weekly refinement compound into continuously improving results."
      },
      {
        icon: DollarSign,
        title: "Scalable Growth When Ready",
        description: "When campaigns work, scale them up. Predictable lead generation that matches capacity and growth goals."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From Strategy to Scale",
    subheadline: "Every campaign is built for the specific market and goals, sequenced to generate leads first, then optimize and expand.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Strategy, Structure & Launch",
        description: "Campaign architecture designed for local lead generation, with proper tracking and attribution from day one.",
        activities: [
          "Market and competitor analysis",
          "Keyword research and mapping",
          "Campaign structure design",
          "Geographic targeting configuration",
          "Ad copy development and testing setup",
          "Extension creation and optimization",
          "Landing page audit or development",
          "Call tracking implementation",
          "Conversion tracking setup",
          "Bid strategy selection",
          "Budget allocation framework",
          "Campaign launch and initial monitoring"
        ],
        icon: Target,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Optimization",
        title: "Refinement & Efficiency",
        description: "Data-driven optimization that reduces waste and improves lead quality and volume.",
        activities: [
          "Search term analysis and negative keyword management",
          "Ad copy A/B testing",
          "Bid adjustments by device, location, time",
          "Quality Score improvement",
          "Landing page conversion optimization",
          "Audience refinement",
          "Budget reallocation based on performance",
          "Weekly optimization cycles"
        ],
        icon: Settings,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Expansion",
        title: "Scaling What Works",
        description: "Expanding successful campaigns into new keywords, audiences, and channels.",
        activities: [
          "New keyword expansion",
          "Audience expansion testing",
          "New campaign type testing (Display, YouTube, etc.)",
          "Geographic expansion where applicable",
          "Increased budget deployment",
          "Cross-channel strategy (Google + Meta)",
          "Retargeting campaign development"
        ],
        icon: TrendingUp,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Dominance",
        title: "Market Leadership & Sustained Performance",
        description: "Maintaining competitive advantage while maximizing efficiency at scale.",
        activities: [
          "Competitive monitoring and response",
          "Advanced bidding strategies",
          "Attribution modeling refinement",
          "Quarterly strategic reviews",
          "New platform feature adoption",
          "Long-term growth planning"
        ],
        icon: BarChart3,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Execution happens entirely under your brand, with documented scope and clear checkpoints. Most clients see meaningful lead flow within 2-4 weeks."
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
    headline: "We Are Selective About Who We Work With",
    subheadline: "Fit matters more than volume. This is who gets results, and who should look elsewhere.",
    goodFit: [
      {
        point: "Your clients have realistic budget expectations",
        detail: "We recommend minimum $2,000/month in ad spend for local campaigns. Less than that rarely generates enough data or leads to prove value."
      },
      {
        point: "You want accountability, not just activity",
        detail: "We focus on leads and revenue, not impressions and clicks. Our reporting connects spend to outcomes so you can prove ROI."
      },
      {
        point: "Your clients can handle lead volume",
        detail: "Paid media can turn on quickly. Clients need the capacity to answer calls and follow up with leads, or the investment is wasted."
      },
      {
        point: "You understand paid media requires investment",
        detail: "Management fees plus ad spend. This is not a cheap channel, but the ROI justifies the investment when done right."
      },
      {
        point: "You value long-term optimization over quick launches",
        detail: "Campaigns improve over time with data. We partner with agencies who understand that month three is better than month one."
      }
    ],
    notFit: [
      {
        point: "Ad spend under $1,500/month",
        detail: "Below this threshold, there is not enough budget to generate meaningful data or results. We cannot recommend paid media for micro-budgets."
      },
      {
        point: "Expecting overnight results without optimization time",
        detail: "Campaigns launch quickly, but optimization takes weeks. Expecting fully refined performance in week one sets everyone up for disappointment."
      },
      {
        point: "Clients who cannot track or follow up with leads",
        detail: "If leads go unanswered or cannot be tracked, we cannot optimize effectively and cannot prove value."
      },
      {
        point: "Price is the only decision factor",
        detail: "Quality paid media management requires investment. If you are shopping purely on management fee, we are not the right fit."
      },
      {
        point: "One-time campaign setup with no ongoing management",
        detail: "Paid media requires continuous optimization. We do not offer setup-only services."
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
          { question: "How quickly will we see results?", answer: "Campaigns can launch within 1-2 weeks and typically generate leads within the first week of running. Performance improves over time as we gather data and optimize." },
          { question: "What kind of ROI can we expect?", answer: "ROI varies by industry and market, but our goal is always positive return on ad spend. We track cost per lead and work to continuously improve it." },
          { question: "What if a campaign is not performing?", answer: "We monitor campaigns daily and make optimization decisions weekly. If something is not working, we identify it quickly and pivot. Our goal is always to improve performance, not just maintain it." }
        ]
      },
      {
        category: "Services & Scope",
        items: [
          { question: "Do you manage both Google Ads and Meta Ads?", answer: "Yes. We are certified in both platforms and manage campaigns across Google Search, Display, Local Service Ads, and the full Meta ecosystem including Facebook and Instagram." },
          { question: "Do you create landing pages?", answer: "Yes. We can develop conversion-optimized landing pages as part of campaign management. Strong landing pages are critical to campaign success." },
          { question: "How do you track and report on ROI?", answer: "We implement call tracking, form tracking, and conversion attribution so you can show clients exactly what their ad spend produces. Our reports connect spend to leads." },
          { question: "What is your minimum ad spend requirement?", answer: "We recommend minimum $2,000/month in ad spend for local campaigns to generate meaningful data and results. We work with agencies to determine appropriate budgets based on market competition and goals." }
        ]
      },
      {
        category: "Partnership & Process",
        items: [
          { question: "How does white-label communication work?", answer: "We operate 100% white-label. All communication flows through you. We provide reports, updates, and talking points. You maintain the client relationship." },
          { question: "Do you require long-term contracts?", answer: "No. We work month-to-month with a 30-day notice policy. Our retention comes from results, not lock-in agreements." },
          { question: "What access do you need?", answer: "We need Google Ads and/or Meta Ads account access, website access for tracking implementation, and ideally CRM access for closed-loop attribution." }
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
