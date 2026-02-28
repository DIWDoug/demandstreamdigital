import { BarChart3, CheckCircle, Users, TrendingUp, FileText, Target, Settings, Phone, Search, Map, Sparkles, Mail, PenTool } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const hvacReportingConfig: ServicePageConfig = {
  slug: "hvac-reporting",
  title: "HVAC Reporting & Analytics",
  metaTitle: "HVAC Marketing Reporting | Seasonal Dashboards, Call Attribution & Revenue Analysis | Demand Stream Digital",
  metaDescription: "Marketing reports for HVAC companies that show exactly what's driving calls, booked jobs, and revenue — by season, by campaign, by service type. No more guessing.",
  canonicalUrl: `${SITE_URL}/hvac-reporting`,

  hero: {
    headline: "HVAC Marketing Reporting That",
    highlightedText: "Shows Revenue, Not Just Traffic",
    subheadline: "HVAC businesses run on seasonal demand. Your reporting should show which campaigns are filling your schedule in July and which ones are wasting budget in November — tracked all the way through to booked revenue.",
    qualifierLine: "You focus on running your HVAC business. We handle the reporting that keeps you informed and investing with confidence.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built for HVAC companies who want to see results, not just activity."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most HVAC Marketing Reporting Fails",
    intro: "HVAC reporting fails because it reports on marketing activity instead of HVAC business outcomes. You're getting traffic reports when you need call reports. You're getting click data when you need booked revenue.",
    painPoints: [
      {
        icon: FileText,
        title: "Seasonal Performance Invisible in Reports",
        body: "Your busiest two months drive 60% of revenue. Generic monthly reports don't isolate peak season performance from off-season performance. You can't see if your summer campaigns are actually working."
      },
      {
        icon: Target,
        title: "Calls Are There — Attribution Isn't",
        body: "The phone rings. Jobs get booked. But which marketing channel drove that call — Google Ads, organic search, GBP, or email? Without call tracking attribution, you're guessing where to reinvest."
      },
      {
        icon: Settings,
        title: "No Revenue Visibility by Service Type",
        body: "AC repair, furnace install, maintenance agreements, and duct work have very different ticket values. Reports that show 'leads' without revenue context can't tell you which campaigns are actually profitable."
      },
      {
        icon: Users,
        title: "Maintenance Membership Reporting Doesn't Exist",
        body: "Maintenance agreements are your most profitable recurring revenue. Most HVAC marketing reports don't track membership growth, renewal rates, or the marketing activities that drove them."
      },
      {
        icon: TrendingUp,
        title: "No Story of Seasonal Progress Year-Over-Year",
        body: "HVAC is seasonal. The only meaningful comparison is this July vs. last July — not this month vs. last month. Reports without year-over-year seasonal comparisons hide whether the business is actually growing."
      }
    ],
    closingLine: "We build HVAC reporting that tells the story you actually need to run your business.",
    closingHighlight: "Seasonal performance. Call attribution. Revenue by service type.",
    ctaText: "Start the Conversation"
  },

  outcomes: {
    headline: "What Actually Changes When HVAC Reporting Works",
    subheadline: "The outcomes you experience when you understand your HVAC marketing performance by season and by channel.",
    items: [
      {
        title: "Confidence in Seasonal Marketing Investment",
        description: "When you can see exactly which campaigns filled your schedule in peak season and which didn't, you invest with confidence. No more guessing before summer."
      },
      {
        title: "Call Attribution That Closes the Loop",
        description: "Every inbound call tracked to its source — Google Ads, organic, GBP, email, direct. You know exactly where booked revenue comes from so you can invest more in what's working."
      },
      {
        title: "Maintenance Membership Growth Tracked",
        description: "Membership enrollment trends, renewal rates, and the marketing activities that drove new member sign-ups — all in one dashboard. Your recurring revenue stream becomes measurable."
      },
      {
        title: "Year-Over-Year Seasonal Comparisons",
        description: "This July vs. last July. This pre-season vs. last pre-season. HVAC businesses need seasonal benchmarks, not month-over-month comparisons that ignore demand cycles."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From HVAC Data Chaos to Automated Revenue Intelligence",
    subheadline: "Every HVAC reporting program is customized to your service mix, seasonal patterns, and business goals. This is how we build it.",
    phases: [
      {
        phase: 1,
        name: "Discovery",
        title: "HVAC KPIs, Integrations & Seasonal Baseline",
        description: "Understanding what matters to your HVAC business and connecting the data sources that tell the story.",
        activities: [
          "HVAC business goals and KPI prioritization",
          "Service type revenue mapping: repair vs. install vs. maintenance",
          "Seasonal demand cycle documentation",
          "Platform integrations (GA, GSC, Google Ads, Meta)",
          "Call tracking setup with dynamic number insertion",
          "ServiceTitan or CRM integration assessment",
          "Seasonal baseline metric establishment",
          "Branding and customization specs"
        ],
        icon: Settings,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Build",
        title: "HVAC Dashboard & Seasonal Report Development",
        description: "Creating HVAC-specific dashboards and report templates that surface the data you actually need.",
        activities: [
          "HVAC seasonal performance dashboard",
          "Call attribution tracking by marketing channel",
          "Maintenance membership growth tracking",
          "Service type revenue attribution",
          "Year-over-year seasonal comparison framework",
          "Branded reporting implementation",
          "Testing and validation"
        ],
        icon: BarChart3,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Launch",
        title: "Automation & Seasonal Delivery Setup",
        description: "Establishing automated delivery timed to HVAC business cycles.",
        activities: [
          "Pre-season performance review automation",
          "Post-peak season reporting delivery",
          "Monthly performance report scheduling",
          "Notification configuration for key thresholds",
          "Training on dashboard interpretation",
          "First seasonal report review and refinement"
        ],
        icon: TrendingUp,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Optimize",
        title: "Seasonal Refinement & Continuous Improvement",
        description: "Ongoing optimization based on your HVAC business feedback and evolving seasonal needs.",
        activities: [
          "Post-season performance reviews",
          "Pre-season investment planning reports",
          "New service metric addition",
          "Dashboard enhancements",
          "Quarterly strategic reviews",
          "Onboarding support for new HVAC services"
        ],
        icon: Target,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Initial HVAC dashboard and report setup typically takes 2-3 weeks. Seasonal refinement is continuous based on feedback and business cycles."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull Based on Your HVAC Business",
    subheadline: "Each component is scoped based on your HVAC service mix, seasonal patterns, and reporting goals.",
    blocks: [
      {
        title: "HVAC Performance Dashboards",
        slug: "branded-dashboards",
        description: "Live dashboards that show calls, booked revenue, and seasonal campaign performance in real time.",
        icon: BarChart3
      },
      {
        title: "Seasonal Performance Reports",
        slug: "monthly-performance-reports",
        description: "Monthly reports with seasonal context, year-over-year comparisons, and HVAC service type attribution.",
        icon: FileText
      },
      {
        title: "HVAC Rank Tracking & Visibility",
        slug: "rank-tracking-visibility",
        description: "Daily rank monitoring for seasonal HVAC queries, local pack positions, and year-round visibility trends.",
        icon: TrendingUp
      },
      {
        title: "HVAC Call Tracking & Attribution",
        slug: "call-tracking-lead-attribution",
        description: "Dynamic number insertion and call recording that connects marketing channels to booked HVAC calls.",
        icon: Phone
      },
      {
        title: "HVAC ROI & Revenue Analysis",
        slug: "roi-revenue-analysis",
        description: "Revenue attribution by service type — repair, install, maintenance — that connects marketing spend to HVAC business outcomes.",
        icon: Target
      },
      {
        title: "Strategic Review Decks",
        slug: "client-presentation-decks",
        description: "Pre-season and post-season performance reviews with investment recommendations for the next demand cycle.",
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
        point: "You have active HVAC marketing campaigns that need reporting",
        detail: "HVAC reporting infrastructure makes sense when you have ongoing marketing. Businesses investing in SEO, paid media, or email across multiple seasons benefit most."
      },
      {
        point: "You care about booked revenue, not just leads",
        detail: "Our reporting connects marketing spend to revenue — by service type, by season. We work with HVAC companies who want to see business impact, not vanity metrics."
      },
      {
        point: "You want to understand seasonal campaign performance",
        detail: "If you've ever wondered whether your summer Google Ads campaign actually drove the calls you think it did, our attribution reporting answers that question definitively."
      },
      {
        point: "You have or want a maintenance membership program",
        detail: "Maintenance memberships are HVAC's most valuable recurring revenue. We build reporting that makes membership growth and retention visible and measurable."
      },
      {
        point: "You are willing to invest in reporting infrastructure",
        detail: "Good HVAC reporting requires setup investment. Businesses who see reporting as a growth tool — not a cost center — get the most value."
      }
    ],
    notFit: [
      {
        point: "No active HVAC marketing campaigns to report on",
        detail: "Reporting requires marketing activities to measure. Without active seasonal campaigns, there is nothing meaningful to track."
      },
      {
        point: "Looking for the cheapest possible solution",
        detail: "We build premium HVAC reporting experiences with full call attribution and seasonal context. If budget is the only factor, free tools may be a better fit initially."
      },
      {
        point: "Need one-time report, not ongoing system",
        detail: "We build HVAC reporting programs, not one-off reports. The value is in systematization across seasonal cycles — tracking this summer against last summer."
      },
      {
        point: "Unwilling to share data access",
        detail: "HVAC reporting requires integration with Google Ads, Analytics, call tracking, and ideally CRM data. If access cannot be granted, we cannot build meaningful attribution."
      }
    ],
    ctaText: "Let's Talk About Your HVAC Reporting Needs"
  },

  faq: {
    headline: "Frequently Asked Questions",
    groups: [
      {
        category: "HVAC-Specific Questions",
        items: [
          { question: "Can you track calls specifically from HVAC emergency queries?", answer: "Yes. Dynamic call tracking assigns unique numbers to different marketing channels and campaigns. We can isolate calls from emergency queries like 'AC repair near me' separately from organic, GBP, and paid media calls." },
          { question: "Can you integrate with ServiceTitan?", answer: "Yes. ServiceTitan integration lets us connect marketing attribution to actual booked revenue, service type, and ticket value. Call tracking data flows into the same reporting framework so you see the complete picture from click to cash." },
          { question: "Can you show year-over-year seasonal comparisons?", answer: "Yes — and this is one of the most valuable HVAC reporting features. Comparing this July to last July shows real growth. We build seasonal benchmarks into every HVAC reporting program." }
        ]
      },
      {
        category: "Technical & Integrations",
        items: [
          { question: "What data sources can you integrate for HVAC reporting?", answer: "We integrate with Google Analytics, Google Search Console, Google Ads, Meta Ads, call tracking platforms, and ServiceTitan/Housecall Pro. If there is an API, we can usually connect it." },
          { question: "How is HVAC rank tracking handled?", answer: "We monitor rankings daily for seasonal HVAC queries — no-cool, no-heat, maintenance, replacement — across local pack and organic positions in your service area." },
          { question: "Can you track maintenance membership growth through marketing attribution?", answer: "Yes. We build custom tracking for membership enrollment and renewal tied back to the marketing channels and campaigns that drove each new member." }
        ]
      },
      {
        category: "Delivery & Support",
        items: [
          { question: "How do you handle pre-season reporting for HVAC?", answer: "We build pre-season performance packages — delivered before spring AC season and before fall heating season — that summarize what worked last year and recommend investment priorities for the upcoming demand cycle." },
          { question: "How often are HVAC reports delivered?", answer: "Most HVAC businesses receive monthly reports on a consistent schedule, plus pre-season and post-season strategic reviews. Dashboards provide real-time access between formal reports." },
          { question: "Do you require long-term contracts?", answer: "No. We work month-to-month. HVAC reporting value is highest across multiple seasonal cycles — tracking improvements year-over-year — but we don't require lock-in agreements." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "HVAC Reporting Is One Piece of the",
    highlightedText: "360° Growth Engine",
    intro: "Effective HVAC marketing is interconnected.",
    body: "HVAC reporting proves the value of SEO, paid media, and seasonal campaigns. It connects call attribution to revenue by service type. We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: BarChart3, id: "reporting", title: "HVAC Reporting", description: "Seasonal dashboards and revenue attribution.", href: "/hvac-reporting", isCenter: true },
      { icon: Search, id: "local-seo", title: "HVAC Local SEO", description: "Organic visibility in local search.", href: "/hvac-seo" },
      { icon: Map, id: "google-maps", title: "HVAC GBP SEO", description: "Dominate the local 3-pack.", href: "/hvac-google-maps" },
      { icon: Sparkles, id: "paid-media", title: "HVAC Paid Media", description: "Google Ads for emergency demand.", href: "/hvac-paid-advertising" },
      { icon: Mail, id: "email-marketing", title: "HVAC Email Marketing", description: "Seasonal campaigns and maintenance retention.", href: "/hvac-email-marketing" },
      { icon: PenTool, id: "content", title: "HVAC Content Marketing", description: "Seasonal content that earns authority.", href: "/hvac-content-marketing" }
    ],
    ctaText: "Explore All HVAC Services",
    ctaHref: "/#services"
  }
};
