import { MousePointerClick, Zap, Target, TrendingUp, DollarSign, BarChart3, FileText, Settings, Search, Map, Sparkles, Star, Mail, Globe, Share2, Layers, PenTool } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";

export const paidMediaConfig: ServicePageConfig = {
  slug: "paid-media",
  title: "Paid Media",
  metaTitle: "White Label Paid Media Management for Agencies | Google Ads, Meta Ads, LSAs & CRO | Dialed-in Web",
  metaDescription: "Dialed-in Web runs data-driven PPC campaigns across Google, Meta & more. Fully managed and white labeled for your agency.",
  canonicalUrl: "https://dialedinweb.com/white-label-paid-media",

  hero: {
    headline: "White Label Paid Media for",
    highlightedText: "Digital Agencies",
    subheadline: "Paid media works when strategy is proactive and waste is cut systematically. We build the campaigns, tracking, and optimization systems that turn ad spend into measurable pipeline—executed entirely under your brand.",
    qualifierLine: "You stay the hero. We handle the daily refinement that turns ad spend into pipeline.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built for agencies who need results they can stand behind."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most White-Label PPC Fails",
    intro: "You have seen this before. The campaigns launched, spend is flowing, but leads are weak, costs are high, and you are left explaining why the numbers do not match the promises.",
    painPoints: [
      {
        icon: Target,
        title: "Strategy-Free Campaigns",
        body: "Template campaigns ignore local competition, buyer intent, and capacity. Without a clear lead strategy, spend flows but outcomes stay vague."
      },
      {
        icon: DollarSign,
        title: "Spend Without Accountability",
        body: "Budgets go out the door without clean conversion tracking or attribution. When ROI cannot be proven, every invoice becomes a negotiation."
      },
      {
        icon: Settings,
        title: "Set-It-and-Forget-It Management",
        body: "Campaigns need daily attention. Search terms, bids, and audiences drift while performance degrades and no one notices."
      },
      {
        icon: FileText,
        title: "Reporting That Obscures Reality",
        body: "Clients receive dashboards full of clicks and impressions instead of clarity. Data without context creates confusion, not confidence."
      },
      {
        icon: TrendingUp,
        title: "No Process for Scaling Winners",
        body: "When something works, there is no system to expand it. Budget stays flat. Opportunities are missed. Growth stalls at the first plateau."
      }
    ],
    closingLine: "We build paid media specifically for local lead generation, with structure, tracking, and optimization",
    closingHighlight: "agencies can stand behind.",
    ctaText: "Schedule a Discovery Call"
  },

  outcomes: {
    headline: "What Actually Changes When Paid Media Works",
    subheadline: "Proactive strategy paired with systematic refinement. Budget flows toward what converts, away from what does not.",
    items: [
      {
        title: "Leads Start Flowing Immediately",
        description: "Paid media delivers qualified leads within days, not quarters."
      },
      {
        title: "Waste Gets Cut Weekly",
        description: "Underperforming keywords, audiences, and placements are identified and removed every week."
      },
      {
        title: "Efficiency Compounds Monthly",
        description: "Ongoing refinement lowers cost per lead as targeting and messaging improve."
      },
      {
        title: "Scalable Growth When Ready",
        description: "Proven campaigns scale predictably when capacity and goals align."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From Strategy to Scale",
    subheadline: "Every campaign is built for the specific platform, audience, and market—sequenced to generate leads first, then optimize and expand across channels.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Research, Strategy & Infrastructure",
        description: "Comprehensive analysis and tracking setup before any spend goes out the door. This phase typically spans 2-4 weeks and includes a one-time setup fee.",
        activities: [
          "Market and competitor analysis",
          "Campaign structure design by platform",
          "Ad copy, testing frameworks, and landing page conversion review",
          "Conversion tracking setup and linking",
          "Offline conversion setup (if applicable)",
          "Call tracking implementation",
          "Budget allocation framework",
          "Conversion value definition and hierarchy",
          "Master negative keyword lists (Google)",
          "Mobile app placement exclusions (Google Display)",
          "AdRoll retargeting pixel setup"
        ],
        icon: Target,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Audience",
        title: "Targeting & Segmentation",
        description: "Platform-specific audience strategies—search intent for Google, behaviors and interests for Meta, engagement-based retargeting across both.",
        activities: [
          "Keyword research and mapping (Google/LSA)",
          "Interest and behavior audience setup (Meta)",
          "Lookalike audience development (Meta)",
          "Custom audience segmentation (Meta)",
          "Fans, friends of fans, and engagement targeting",
          "Geographic and demographic layering",
          "Retargeting audience setup (engagement-based)",
          "Negative audience and keyword exclusions"
        ],
        icon: Settings,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Optimization",
        title: "Active Refinement",
        description: "This is where campaigns get good. We identify what converts and double down, while systematically eliminating what does not—weekly, across every platform.",
        activities: [
          "Search term analysis and negative keyword exclusions",
          "Master negative placement management (Google Display)",
          "Mobile app and low-quality site exclusions",
          "Audience performance analysis and pruning",
          "Placement and position optimization (Meta)",
          "Ad copy and creative A/B testing",
          "Bid adjustments by device, location, time",
          "Landing page conversion optimization",
          "Budget reallocation to proven winners",
          "Weekly optimization cycles across all platforms"
        ],
        icon: TrendingUp,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Scale",
        title: "Expansion & Cross-Channel Synergy",
        description: "Expanding successful campaigns into new keywords, audiences, and channels while maintaining efficiency.",
        activities: [
          "New keyword and interest expansion",
          "Lookalike expansion and seed audience testing",
          "Cross-channel retargeting (Google Display + Meta)",
          "New campaign type testing (YouTube, Reels, etc.)",
          "Geographic expansion where applicable",
          "Increased budget deployment on winners",
          "Attribution modeling refinement",
          "Quarterly strategic reviews and growth planning"
        ],
        icon: BarChart3,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Every platform requires different tactics. Google means negative keywords and search term exclusions. Meta means testing audiences, interests, and placements. The goal is always the same: direct budget toward what converts."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull Based on Budget and Goals",
    subheadline: "Each component is scoped based on budget, goals, and market dynamics.",
    blocks: [
      {
        title: "Google Ads Management",
        slug: "google-ads",
        description: "Search, display, and shopping campaigns built for local lead generation.",
        icon: Search
      },
      {
        title: "Meta Ads Management",
        slug: "meta-ads",
        description: "Facebook and Instagram campaigns that reach local audiences.",
        icon: Target
      },
      {
        title: "Local Service Ads",
        slug: "local-service-ads",
        description: "Google-verified LSAs with pay-per-lead pricing.",
        icon: Map
      },
      {
        title: "Retargeting & Display",
        slug: "retargeting-campaigns",
        description: "Display and social retargeting via Google, Meta, and AdRoll.",
        icon: Share2
      },
      {
        title: "Landing Page Design",
        slug: "landing-page-design",
        description: "Conversion-focused pages with local trust signals and optimized forms.",
        icon: MousePointerClick
      },
      {
        title: "Conversion Tracking",
        slug: "conversion-tracking",
        description: "Tracking setup that connects clicks to form fills, calls, and revenue.",
        icon: Settings
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
        detail: "We focus on leads and revenue, not impressions and clicks. Our reporting connects spend to outcomes."
      },
      {
        point: "Your clients answer the phone and respond to leads fast",
        detail: "Paid media generates leads quickly. If calls go to voicemail or form submissions sit for days, the investment is wasted."
      },
      {
        point: "You understand paid media requires upfront and ongoing investment",
        detail: "A one-time setup fee covers foundation work. Monthly management fees plus ad spend follow. This is not a cheap channel, but the ROI justifies it when done right."
      }
    ],
    notFit: [
      {
        point: "Ad spend under $1,500/month",
        detail: "Below this threshold, there is not enough budget to generate meaningful data or results."
      },
      {
        point: "No internal process for closing leads",
        detail: "We generate leads, we do not close them. If calls go unanswered or your client lacks a sales process, the investment will not convert to revenue."
      },
      {
        point: "Expecting overnight results without optimization time",
        detail: "Campaigns launch quickly, but optimization takes weeks. Expecting fully refined performance in week one sets everyone up for disappointment."
      },
      {
        point: "Looking for sales training or conversion coaching",
        detail: "Our job ends when the lead comes in. What happens after the form fill or phone call is up to your client's team."
      },
      {
        point: "Price is the only decision factor",
        detail: "Quality paid media management requires investment. If you are shopping purely on management fee, we are not the right fit."
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
          { question: "How quickly will we see results?", answer: "Campaigns launch in 1-2 weeks and typically generate leads within the first week. Performance improves as we gather data and optimize." },
          { question: "What kind of ROI can we expect?", answer: "ROI varies by industry, but we track cost per lead and work to continuously improve it." },
          { question: "What if a campaign is not performing?", answer: "We monitor daily and optimize weekly. If something is not working, we pivot quickly." }
        ]
      },
      {
        category: "Services & Scope",
        items: [
          { question: "Do you manage both Google Ads and Meta Ads?", answer: "Yes. We manage Google Search, Display, Local Service Ads, and the full Meta ecosystem." },
          { question: "Do you create landing pages?", answer: "Yes. We develop conversion-optimized landing pages as part of campaign management." },
          { question: "What is your minimum ad spend requirement?", answer: "We recommend minimum $2,000/month in ad spend to generate meaningful data and results." }
        ]
      },
      {
        category: "Partnership & Process",
        items: [
          { question: "Is there a setup fee?", answer: "Yes. A one-time setup fee covers foundation work including tracking, strategy, and campaign buildout. This ensures campaigns launch correctly the first time." },
          { question: "Are you responsible for closing leads?", answer: "No. We generate leads through advertising. What happens after the call or form submission is up to your client. We are marketers, not sales trainers. If clients lack a process for answering calls and following up, the investment will not convert to revenue." },
          { question: "How does white-label communication work?", answer: "We operate 100% white-label. All communication flows through you." },
          { question: "Do you provide white-labeled reports?", answer: "Yes. All reporting is branded with your agency logo and colors." },
          { question: "Do you require long-term contracts?", answer: "No. We work month-to-month with a 30-day notice policy." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Paid Media Is One Piece of the",
    highlightedText: "360° Ecosystem",
    intro: "Paid media fills the pipeline while SEO compounds demand.",
    body: "Each service works independently, but performance accelerates when they are aligned.",
    services: [
      { icon: Sparkles, id: "paid-media", title: "Paid Media", description: "Google Ads and Meta campaigns for immediate lead generation.", href: "/white-label-paid-media", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search results.", href: "/white-label-local-seo" },
      { icon: Map, id: "google-maps", title: "GBP SEO", description: "Dominate the local 3-pack.", href: "/white-label-google-maps-local-seo" },
      { icon: Mail, id: "email-marketing", title: "Email Marketing", description: "Nurture leads into customers.", href: "/white-label-email-marketing" },
      { icon: PenTool, id: "content", title: "Content Development", description: "Strategic content that converts.", href: "/white-label-content-marketing" },
      { icon: BarChart3, id: "reporting", title: "Reporting", description: "White-labeled dashboards.", href: "/white-label-reporting" }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/white-label-inbound-marketing"
  }
};
