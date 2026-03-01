import { BarChart3, CheckCircle, Users, TrendingUp, FileText, Target, Settings, Phone, Search, Map, Sparkles, Star, Mail, Globe, Share2, PenTool } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const reportingConfig: ServicePageConfig = {
  slug: "reporting",
  title: "Reporting & Analytics",
  metaTitle: "Plumbing & HVAC Marketing Reporting & Analytics | DSD",
  metaDescription: "Marketing reports for plumbing and HVAC companies that show exactly what's working. Dashboards, rank tracking, call attribution, and ROI analysis.",
  canonicalUrl: `${SITE_URL}/plumbing-reporting`,

  hero: {
    headline: "Reporting & Analytics for",
    highlightedText: "Plumbing & HVAC Companies",
    subheadline: "You should never wonder where your marketing dollars are going. We provide clear, honest reporting that proves value, builds trust, and shows exactly what's driving calls and booked jobs.",
    qualifierLine: "You focus on running your business. We handle the reporting that keeps you informed and confident.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built for plumbing and HVAC companies who want to see results, not just activity."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most Marketing Reporting Fails",
    intro: "You have seen this before. Reports go out monthly, but you do not read them. When you do, you are confused. The conversation always starts with 'I do not understand what I am getting for my money.'",
    painPoints: [
      {
        icon: FileText,
        title: "Data Dumps, Not Insights",
        body: "Pages of metrics with no narrative. You receive spreadsheets instead of stories. Numbers without context create confusion, not confidence."
      },
      {
        icon: Target,
        title: "No Connection to Business Outcomes",
        body: "Rankings and traffic are interesting, but you care about leads and revenue. Reports that do not connect marketing to money leave value on the table."
      },
      {
        icon: Settings,
        title: "Inconsistent Delivery",
        body: "Reports go out when someone remembers to send them. Inconsistency signals disorganization and erodes confidence in the partnership."
      },
      {
        icon: Users,
        title: "Generic Templates for Every Business",
        body: "The same report regardless of your goals or preferences. What matters to a plumber differs from what matters to an HVAC company. One-size-fits-none."
      },
      {
        icon: TrendingUp,
        title: "No Story of Progress",
        body: "Each report exists in isolation. No comparison to last month. No trend lines. No narrative arc. You cannot see whether things are improving or declining."
      }
    ],
    closingLine: "We build reporting that tells the story you need to hear.",
    closingHighlight: "You understand your value. Your marketing dollars are accountable.",
    ctaText: "Start the Conversation"
  },

  outcomes: {
    headline: "What Actually Changes When Reporting Works",
    subheadline: "The outcomes you experience when you understand your marketing performance.",
    items: [
      {
        title: "Confidence in Your Marketing Investment",
        description: "When you understand your results, you invest with confidence. Clear reporting transforms uncertainty into strategic decision-making."
      },
      {
        title: "Better Conversations With Your Team",
        description: "When the report tells the story, you do not have to guess at what is working. Reporting becomes a decision tool, not a chore."
      },
      {
        title: "Strategy Improves With Data",
        description: "Good reporting informs better decisions. Data-driven strategy leads to better results and smarter investments."
      },
      {
        title: "Growth Becomes Predictable",
        description: "When you see clear ROI, investing more makes sense. Reporting that proves value opens the door to scaling what works."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From Setup to Automated Delivery",
    subheadline: "Every reporting program is customized to your business needs. This is how we build it.",
    phases: [
      {
        phase: 1,
        name: "Discovery",
        title: "Requirements, Integrations & Baseline",
        description: "Understanding what matters to you and connecting the data sources that tell the story.",
        activities: [
          "Requirements gathering based on your goals",
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
        description: "Creating the dashboards and report templates that will serve your business.",
        activities: [
          "Dashboard design and development",
          "Report template creation",
          "Executive summary framework",
          "Data visualization design",
          "Branded reporting implementation",
          "Access configuration",
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
          "Notification configuration",
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
        description: "Ongoing optimization based on your feedback and evolving needs.",
        activities: [
          "Feedback collection",
          "Report refinement",
          "New metric addition",
          "Dashboard enhancements",
          "Quarterly review and updates",
          "Onboarding support for new services"
        ],
        icon: Target,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Initial dashboard and report setup typically takes 2-3 weeks. Ongoing refinement is continuous based on feedback."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull Based on Your Needs",
    subheadline: "Each component is scoped based on your business needs and goals.",
    blocks: [
      {
        title: "Custom Dashboards",
        slug: "branded-dashboards",
        description: "Live dashboards that give you real-time visibility into campaign performance.",
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
        title: "Strategic Review Decks",
        slug: "client-presentation-decks",
        description: "Professional slide decks and QBR materials for strategic growth conversations.",
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
        point: "You have active marketing campaigns that need reporting",
        detail: "Reporting infrastructure makes sense when you have ongoing marketing. Businesses investing in SEO, paid media, or email benefit most from systematized reporting."
      },
      {
        point: "You care about results, not just activity",
        detail: "Our reporting focuses on outcomes—leads, revenue, ROI. We work with businesses who want to see business impact, not vanity metrics."
      },
      {
        point: "You want to understand where your marketing dollars go",
        detail: "Our reports connect spend to results. You will always know what is working and what needs to change."
      },
      {
        point: "You value clear presentation as much as data",
        detail: "Data without design is just numbers. We create reports that you actually want to read—professional, clear, and compelling."
      },
      {
        point: "You are willing to invest in reporting infrastructure",
        detail: "Good reporting requires setup investment. Businesses who see reporting as a growth tool, not a cost center, get the most value."
      },
      {
        point: "You need to replace inconsistent vendors",
        detail: "Transitioning from an inconsistent vendor is seamless. We onboard quickly, establish baselines, and deliver without disruption."
      }
    ],
    notFit: [
      {
        point: "No active marketing campaigns to report on",
        detail: "Reporting requires marketing activities to measure. Without active campaigns, there is nothing meaningful to track."
      },
      {
        point: "You do not look at reports anyway",
        detail: "If you genuinely do not care about reporting, investing in reports may not be the priority. Though often this signals a bigger problem."
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
    ctaText: "Let's Talk About Your Reporting Needs"
  },

  faq: {
    headline: "Frequently Asked Questions",
    groups: [
      {
        category: "Customization & Branding",
        items: [
          { question: "Can reports be customized for my business?", answer: "Absolutely. We can customize KPIs, metrics, branding, and format based on your specific needs and preferences. Some businesses want detailed data; others prefer executive summaries." },
          { question: "Do I get live dashboard access?", answer: "Yes. We can set up dashboards that give you real-time visibility into key metrics. Dashboards are clean, professional, and easy to understand." },
          { question: "Is everything branded to my business?", answer: "Yes. All dashboards, reports, and materials carry your branding. Professional and consistent." }
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
          { question: "How do you handle questions about reports?", answer: "We provide report walkthroughs and talking points so you always understand what you're looking at. For complex questions, your strategist can provide detailed answers." },
          { question: "How often are reports delivered?", answer: "Most businesses receive monthly reports on a consistent schedule. Dashboards provide real-time access between formal reports. We can adjust frequency based on needs." },
          { question: "What if we need to change metrics or format?", answer: "Reports evolve with your needs. We build flexibility into all our reporting systems and can adjust metrics, format, or focus as requirements change." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Reporting Is One Piece of the",
    highlightedText: "360° Growth Engine",
    intro: "Effective local marketing is interconnected.",
    body: "Reporting proves the value of SEO, paid media, and email. It connects activities to outcomes. We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: BarChart3, id: "reporting", title: "Reporting", description: "Dashboards and reports that prove value.", href: "/plumbing-reporting", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search.", href: "/hvac-and-plumbing-seo" },
      { icon: Map, id: "google-maps", title: "GBP SEO", description: "Dominate the local 3-pack.", href: "/plumbing-google-maps" },
      { icon: Sparkles, id: "paid-media", title: "Paid Media", description: "Google Ads and Meta campaigns.", href: "/plumbing-paid-advertising" },
      { icon: Mail, id: "email-marketing", title: "Email Marketing", description: "Nurture leads into customers.", href: "/plumbing-email-marketing" },
      { icon: PenTool, id: "content", title: "Content Development", description: "Strategic content that converts.", href: "/plumbing-content-marketing" }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/#services"
  }
};
