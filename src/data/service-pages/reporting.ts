import { BarChart3, CheckCircle, Users, TrendingUp, FileText, Target, Settings, Phone, Search, Map, Sparkles, Star, Mail, Globe, Share2 } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";

export const reportingConfig: ServicePageConfig = {
  slug: "reporting",
  title: "Reporting & Analytics",
  metaTitle: "White-Label Reporting & Analytics for Agencies | Dialed-In Web",
  metaDescription: "White-label reporting and analytics dashboards for agencies. Rank tracking, ROI analysis, and client-ready reports that prove value and retain clients.",
  canonicalUrl: "https://dialedinweb.com/white-label-inbound-marketing-services/reporting",
  keywords: "white label reporting, agency dashboards, rank tracking, marketing analytics, client reporting",

  hero: {
    headline: "White Label Reporting for",
    highlightedText: "Digital Agencies",
    subheadline: "Clients do not leave because of poor results. They leave because they do not understand their results. We provide white-label reporting that proves value, builds trust, and retains clients—delivered under your brand.",
    qualifierLine: "You stay the hero. We handle the reporting that makes cancellations uncomfortable.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built for agencies who know that reporting is retention."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most Agency Reporting Fails",
    intro: "You have seen this before. Reports go out monthly, but clients do not read them. When they do, they are confused. Cancellation conversations start with 'I do not understand what I am getting for my money.'",
    painPoints: [
      {
        icon: FileText,
        title: "Data Dumps, Not Insights",
        body: "Pages of metrics with no narrative. Clients receive spreadsheets instead of stories. Numbers without context create confusion, not confidence."
      },
      {
        icon: Target,
        title: "No Connection to Business Outcomes",
        body: "Rankings and traffic are interesting, but clients care about leads and revenue. Reports that do not connect marketing to money leave value on the table."
      },
      {
        icon: Settings,
        title: "Inconsistent Delivery",
        body: "Reports go out when someone remembers to send them. Inconsistency signals disorganization and erodes client confidence in the partnership."
      },
      {
        icon: Users,
        title: "Generic Templates for Every Client",
        body: "The same report regardless of client goals or preferences. What matters to a plumber differs from what matters to a law firm. One-size-fits-none."
      },
      {
        icon: TrendingUp,
        title: "No Story of Progress",
        body: "Each report exists in isolation. No comparison to last month. No trend lines. No narrative arc. Clients cannot see whether things are improving or declining."
      }
    ],
    closingLine: "We build reporting that tells the story your clients need to hear.",
    closingHighlight: "Clients understand their value. You keep the revenue you earned.",
    ctaText: "Start the Conversation"
  },

  outcomes: {
    headline: "What Actually Changes When Reporting Works",
    subheadline: "The outcomes your agency experiences when clients understand their value.",
    items: [
      {
        title: "Retention Improves Dramatically",
        description: "Clients who understand their results stay longer. Clear reporting transforms month-to-month anxiety into long-term partnerships."
      },
      {
        title: "Client Conversations Get Easier",
        description: "When the report tells the story, you do not have to defend value in every call. Reporting becomes a relationship builder, not a chore."
      },
      {
        title: "Strategy Improves With Data",
        description: "Good reporting is not just for clients. It informs your decisions. Data-driven strategy leads to better results for everyone."
      },
      {
        title: "Upsells Become Natural",
        description: "When clients see clear ROI, investing more makes sense. Reporting that proves value opens the door to expanded scope."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From Setup to Automated Delivery",
    subheadline: "Every reporting program is customized to agency and client needs. This is how we build it.",
    phases: [
      {
        phase: 1,
        name: "Discovery",
        title: "Requirements, Integrations & Baseline",
        description: "Understanding what matters to you and your clients, and connecting the data sources that tell the story.",
        activities: [
          "Requirements gathering by client type",
          "KPI and metric prioritization",
          "Data source identification",
          "Platform integrations (GA, GSC, Ads, etc.)",
          "Call tracking setup (if needed)",
          "Baseline metric establishment",
          "Branding and customization specs"
        ],
        icon: Settings,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Build",
        title: "Dashboard & Report Development",
        description: "Creating the dashboards and report templates that will serve your clients.",
        activities: [
          "Dashboard design and development",
          "Report template creation",
          "Executive summary framework",
          "Data visualization design",
          "White-label branding implementation",
          "Client access configuration",
          "Testing and validation"
        ],
        icon: BarChart3,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Launch",
        title: "Automation & Delivery Setup",
        description: "Establishing automated delivery and ensuring everything works smoothly.",
        activities: [
          "Automated delivery scheduling",
          "Report distribution setup",
          "Client notification configuration",
          "Training and documentation",
          "First report review and refinement",
          "Feedback incorporation"
        ],
        icon: TrendingUp,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Optimize",
        title: "Refinement & Continuous Improvement",
        description: "Ongoing optimization based on client feedback and evolving needs.",
        activities: [
          "Client feedback collection",
          "Report refinement",
          "New metric addition",
          "Dashboard enhancements",
          "Quarterly review and updates",
          "New client onboarding support"
        ],
        icon: Target,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Initial dashboard and report setup typically takes 2-3 weeks. Ongoing refinement is continuous based on feedback."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull Based on Agency Needs",
    subheadline: "Each component is scoped based on your agency needs and client types.",
    blocks: [
      {
        title: "White-Label Dashboards",
        slug: "white-label-dashboards",
        description: "Custom-branded live dashboards that give clients real-time visibility into campaign performance.",
        icon: BarChart3
      },
      {
        title: "Monthly Performance Reports",
        slug: "monthly-performance-reports",
        description: "Comprehensive reports with executive summaries, detailed metrics, and actionable insights.",
        icon: FileText
      },
      {
        title: "Rank Tracking & Visibility",
        slug: "rank-tracking-visibility",
        description: "Daily rank monitoring for target keywords, local pack positions, and visibility trends.",
        icon: TrendingUp
      },
      {
        title: "Call Tracking & Attribution",
        slug: "call-tracking-lead-attribution",
        description: "Dynamic number insertion, call recording, and multi-touch attribution that connects marketing to leads.",
        icon: Phone
      },
      {
        title: "ROI & Revenue Analysis",
        slug: "roi-revenue-analysis",
        description: "Closed-loop reporting that ties marketing activities to revenue outcomes and proves value.",
        icon: Target
      },
      {
        title: "Client Presentation Decks",
        slug: "client-presentation-decks",
        description: "Professional slide decks and QBR materials for strategic client conversations.",
        icon: Users
      }
    ]
  },

  qualification: {
    eyebrow: "Before We Talk",
    headline: "We Are Selective About Who We Work With",
    subheadline: "Fit matters more than volume. This is who gets results, and who should look elsewhere.",
    goodFit: [
      {
        point: "You have active clients who need consistent reporting",
        detail: "Reporting infrastructure makes sense when you have ongoing clients. Agencies with at least 5+ active accounts benefit most from systematized reporting."
      },
      {
        point: "Your clients care about results, not just activity",
        detail: "Our reporting focuses on outcomes—leads, revenue, ROI. We partner with agencies whose clients want to see business impact."
      },
      {
        point: "You want to systematize and scale reporting",
        detail: "Ad-hoc reporting does not scale. We build systems that grow with your agency, reducing per-client reporting effort over time."
      },
      {
        point: "You value presentation as much as data",
        detail: "Data without design is just numbers. We create reports that clients actually want to read—professional, clear, and compelling."
      },
      {
        point: "You are willing to invest in reporting infrastructure",
        detail: "Good reporting requires setup investment. Agencies who see reporting as a retention tool, not a cost center, get the most value."
      },
      {
        point: "You need a reliable fulfillment partner to replace inconsistent vendors",
        detail: "Transitioning from an inconsistent vendor is seamless. We onboard quickly, establish baselines, and deliver without disruption to your client relationships."
      }
    ],
    notFit: [
      {
        point: "Fewer than 5 active clients",
        detail: "For very small client rosters, systematized reporting may be overkill. The investment makes more sense at scale."
      },
      {
        point: "Clients who do not read reports anyway",
        detail: "If clients genuinely do not care about reporting, investing in beautiful reports may not be the priority. Though often this signals a relationship problem."
      },
      {
        point: "Looking for the cheapest possible solution",
        detail: "We build premium reporting experiences. If budget is the only factor, free tools may be a better fit initially."
      },
      {
        point: "Need one-time report, not ongoing system",
        detail: "We build reporting programs, not one-off reports. The value is in systematization and consistency over time."
      },
      {
        point: "Unwilling to share data access",
        detail: "Reporting requires integration with your data sources. If access cannot be granted, we cannot build meaningful reporting."
      }
    ],
    ctaText: "Let's Discuss Your Reporting Needs"
  },

  faq: {
    headline: "Frequently Asked Questions",
    groups: [
      {
        category: "Customization & Branding",
        items: [
          { question: "Can reports be customized for each client?", answer: "Absolutely. We can customize KPIs, metrics, branding, and format for each client based on their specific needs and preferences. Some clients want detailed data; others prefer executive summaries." },
          { question: "Do clients get live dashboard access?", answer: "Yes. We can set up client-facing dashboards that give them real-time visibility into key metrics. Dashboards are fully branded with your agency's look and feel." },
          { question: "Is everything truly white-labeled?", answer: "Yes. All dashboards, reports, and client-facing materials carry your branding only. Clients never see our name or logo." }
        ]
      },
      {
        category: "Technical & Integrations",
        items: [
          { question: "What data sources can you integrate?", answer: "We integrate with Google Analytics, Google Search Console, Google Ads, Meta Ads, call tracking platforms, CRMs, and most major marketing tools. If there is an API, we can usually connect it." },
          { question: "How is rank tracking handled?", answer: "We monitor rankings daily for all target keywords across local pack and organic positions. Rankings are tracked by location for accurate local visibility measurement." },
          { question: "Can you integrate with our existing tools?", answer: "Yes. We work within existing tech stacks rather than requiring platform changes. We connect to what you already use." }
        ]
      },
      {
        category: "Delivery & Support",
        items: [
          { question: "How do you handle client questions about reports?", answer: "We provide you with report walkthroughs and talking points so you can confidently present data to clients. For complex questions, your strategist can provide detailed answers you can relay." },
          { question: "How often are reports delivered?", answer: "Most clients receive monthly reports on a consistent schedule. Dashboards provide real-time access between formal reports. We can adjust frequency based on needs." },
          { question: "What if we need to change metrics or format?", answer: "Reports evolve with client needs. We build flexibility into all our reporting systems and can adjust metrics, format, or focus as requirements change." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Reporting Is One Piece of the",
    highlightedText: "360° Ecosystem",
    intro: "Effective local marketing is interconnected.",
    body: "Reporting proves the value of SEO, paid media, and email. It connects activities to outcomes. We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: BarChart3, id: "reporting", title: "Reporting", description: "Dashboards and reports that prove value.", href: "/white-label-inbound-marketing-services/reporting", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search.", href: "/white-label-inbound-marketing-services/local-seo" },
      { icon: Map, id: "google-maps", title: "GBP SEO", description: "Dominate the local 3-pack.", href: "/white-label-inbound-marketing-services/google-maps" },
      { icon: Sparkles, id: "paid-media", title: "Paid Media", description: "Google Ads and Meta campaigns.", href: "/white-label-inbound-marketing-services/paid-media" },
      { icon: Mail, id: "email-marketing", title: "Email Marketing", description: "Nurture leads into customers.", href: "/white-label-inbound-marketing-services/email-marketing" },
      { icon: Globe, id: "authority", title: "Authority Building", description: "Links and citations.", href: "/white-label-inbound-marketing-services/local-authority-building" }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/white-label-inbound-marketing-services"
  }
};
