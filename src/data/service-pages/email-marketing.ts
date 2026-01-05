import { Mail, TrendingUp, Users, Zap, Target, FileText, Settings, Repeat, BarChart3, Search, Map, Sparkles, Star, Globe, Share2, PenTool } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";

export const emailMarketingConfig: ServicePageConfig = {
  slug: "email-marketing",
  title: "Email Marketing",
  metaTitle: "Email Marketing Services | White Label Campaigns for Agencies",
  metaDescription: "Launch high-performing email campaigns under your brand. We handle white label strategy, design, and automation for your clients.",
  canonicalUrl: "https://dialedinweb.com/white-label-inbound-marketing-services/email-marketing",

  hero: {
    headline: "White Label Email Marketing for",
    highlightedText: "Local Business Clients",
    subheadline: "For local businesses, email turns one-time customers into regulars and keeps the business top-of-mind between visits. We build email programs that deliver value consistently and drive repeat revenue.",
    qualifierLine: "You stay the hero. We handle the email execution that keeps customers coming back.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built for agencies serving local service businesses and retailers."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most Local Business Email Fails",
    intro: "Most local business email fails because it treats the inbox like a billboard instead of a relationship. Sporadic blasts without strategy. Technical problems that kill deliverability. No reason for customers to open, let alone act. The list becomes noise instead of an asset.",
    painPoints: [
      {
        icon: FileText,
        title: "No Permission Foundation",
        body: "Lists built on weak opt-ins and purchased contacts. Subscribers do not remember signing up. Spam complaints rise. Inbox providers start blocking."
      },
      {
        icon: Settings,
        title: "Technical Breakdowns",
        body: "Emails render poorly on mobile. Links break. Authentication is misconfigured. Messages land in spam instead of the inbox. The technical foundation crumbles."
      },
      {
        icon: Users,
        title: "No Reason to Open",
        body: "Every email is a sales pitch. No helpful content. No service tips. No local relevance. Subscribers tune out because there is nothing worth their attention."
      },
      {
        icon: Target,
        title: "Forgotten Between Visits",
        body: "Customers need HVAC service once a year. Dental cleanings twice. Without consistent, valuable touchpoints, the business fades from memory when it matters most."
      },
      {
        icon: TrendingUp,
        title: "No Automation Beyond Welcome",
        body: "A welcome email exists, then nothing. No post-service follow-ups. No win-back sequences. No review requests. The list sits idle between manual blasts."
      }
    ],
    closingLine: "We build email programs that nurture relationships, stay top of mind, and convert when the timing is right.",
    closingHighlight: "Your clients build lasting customer relationships. You keep the margin you earned.",
    ctaText: "Start the Conversation"
  },

  outcomes: {
    headline: "What Changes for Local Businesses",
    subheadline: "The outcomes your clients experience when email is done right.",
    items: [
      {
        title: "Repeat Revenue on Autopilot",
        description: "Local businesses thrive on repeat customers. Automated sequences remind past customers to return, promote seasonal services, and drive bookings without manual effort."
      },
      {
        title: "Top-of-Mind Between Visits",
        description: "For service businesses with long buying cycles, email keeps the brand present. When the customer is ready to buy again, your client is the first call."
      },
      {
        title: "Inbox Placement That Protects Reputation",
        description: "Proper authentication and list hygiene ensure emails reach the inbox. Deliverability protects sender reputation and maximizes every send."
      },
      {
        title: "Local Relevance at Scale",
        description: "Segmentation by service area, purchase history, and engagement. The right offer reaches the right customer at the right time."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From Setup to Local Revenue Engine",
    subheadline: "Every email program is built for the specific business and local market. This is how we sequence the work.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Permission, Infrastructure & Welcome",
        description: "Building the technical foundation and permission practices that make everything else possible.",
        activities: [
          "Email program audit and assessment",
          "Authentication setup: SPF, DKIM, DMARC",
          "List hygiene and permission verification",
          "Opt-in form optimization",
          "Welcome sequence development",
          "Template design for local brand",
          "Deliverability baseline establishment",
          "Tracking and analytics configuration"
        ],
        icon: Settings,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Execution",
        title: "Campaigns & Automated Follow-Ups",
        description: "Regular campaigns and automated sequences that keep customers engaged and coming back.",
        activities: [
          "Campaign calendar for local relevance",
          "Seasonal and service-specific campaigns",
          "Post-service follow-up sequences",
          "Review request automation",
          "Subject line testing program",
          "Send time optimization",
          "Engagement monitoring",
          "Monthly performance reporting"
        ],
        icon: Mail,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Expansion",
        title: "Segmentation & Targeting",
        description: "Delivering the right message to the right local customer based on their history and interests.",
        activities: [
          "Service-based segmentation",
          "Purchase history targeting",
          "Re-engagement campaigns for lapsed customers",
          "VIP and loyalty recognition",
          "Cross-sell sequences for related services",
          "Referral program integration",
          "Seasonal win-back campaigns"
        ],
        icon: Target,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Optimization",
        title: "Continuous Improvement & Scale",
        description: "Using performance data to improve results and identify new opportunities.",
        activities: [
          "Deliverability and inbox placement optimization",
          "Inactivity management and list pruning",
          "Automation performance tuning",
          "Cross-channel integration with local SEO",
          "Quarterly strategic reviews",
          "New opportunity identification"
        ],
        icon: TrendingUp,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Phase duration varies by list size, platform, and goals. Most local business clients see measurable engagement improvements within 4-6 weeks."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull Based on Business Model",
    subheadline: "Each component is scoped based on the local business model, customer base, and goals.",
    blocks: [
      {
        title: "Campaign Strategy",
        slug: "campaign-strategy",
        description: "Editorial calendars, seasonal campaigns, and send cadence planning tailored to local business cycles.",
        icon: Target
      },
      {
        title: "List Management",
        slug: "list-management",
        description: "Opt-in practices, list hygiene, segmentation, and subscriber cleanup that protects deliverability.",
        icon: Users
      },
      {
        title: "Automation Flows",
        slug: "automation-flows",
        description: "Welcome sequences, post-service follow-ups, win-back campaigns, and review request automations.",
        icon: Repeat
      },
      {
        title: "Newsletter Design",
        slug: "newsletter-design",
        description: "Brand-consistent templates, mobile-optimized layouts, and compelling visual design.",
        icon: FileText
      },
      {
        title: "A/B Testing",
        slug: "ab-testing",
        description: "Subject line testing, send time optimization, and content experiments that improve performance.",
        icon: Settings
      },
      {
        title: "Performance Analytics",
        slug: "performance-analytics",
        description: "Open rates, click rates, conversion tracking, and revenue attribution reporting.",
        icon: BarChart3
      }
    ]
  },

  qualification: {
    eyebrow: "Before We Talk",
    headline: "We Are Selective About Who We Work With",
    subheadline: "Fit matters more than volume. This is who gets results, and who should look elsewhere.",
    goodFit: [
      {
        point: "Your clients have an existing list or clear path to building one",
        detail: "Email marketing requires an audience. Clients need at least 500+ subscribers or a strategy for rapid list growth to see meaningful results."
      },
      {
        point: "You understand email as a long-term channel",
        detail: "Email builds trust over time. We partner with agencies who see email as an ongoing program, not a one-time project."
      },
      {
        point: "Your clients can provide content input and approvals",
        detail: "The best email content reflects client expertise. Clients need to provide input, approve content, and engage with the process."
      },
      {
        point: "You value engagement over vanity metrics",
        detail: "We optimize for opens, clicks, and conversions. Not list size alone. A smaller, engaged list beats a large, dead one."
      },
      {
        point: "Your clients have something worth emailing about",
        detail: "Regular email requires regular value. Clients need offers, content, updates, or insights to share consistently."
      },
      {
        point: "You need a reliable fulfillment partner to replace inconsistent vendors",
        detail: "Transitioning from an inconsistent vendor is seamless. We onboard quickly, establish baselines, and deliver without disruption to your client relationships."
      }
    ],
    notFit: [
      {
        point: "No existing list and no lead generation strategy",
        detail: "Email marketing requires an audience. If there is no list and no plan to build one, we cannot generate results from nothing."
      },
      {
        point: "Expecting massive results from first campaign",
        detail: "Email programs build over time. First campaigns establish baselines. Optimization creates improvement. Patience is required."
      },
      {
        point: "Clients who will not approve content in timely fashion",
        detail: "Email requires consistent sends. If approvals take weeks, the program stalls. We need clients who can engage with the process."
      },
      {
        point: "Purchased or rented email lists",
        detail: "We do not send to purchased lists. This violates best practices and platform terms of service. All subscribers must be legitimately opted-in."
      },
      {
        point: "One-time campaign with no ongoing program",
        detail: "Email marketing is a program, not a project. One-off campaigns without ongoing strategy rarely deliver meaningful value."
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
          { question: "What kind of results can we expect?", answer: "Results vary by industry and list quality, but email typically delivers $36-42 for every $1 spent. We focus on engagement metrics, conversion rates, and revenue attribution." },
          { question: "How quickly will we see results?", answer: "Initial improvements in open rates and engagement often appear within 4-6 weeks. Revenue impact builds over time as automations and list engagement mature." },
          { question: "How do you measure email success?", answer: "We track open rates, click rates, conversion rates, list growth, and when possible, revenue attribution. Regular reporting shows what is working and where we are improving." }
        ]
      },
      {
        category: "Services & Platforms",
        items: [
          { question: "Which email platforms do you work with?", answer: "We work with all major platforms including Mailchimp, Klaviyo, ActiveCampaign, HubSpot, Constant Contact, and others. We can work within existing platforms or recommend the best fit." },
          { question: "Do you write the email copy?", answer: "Yes. Our team writes compelling email copy tailored to the audience and goals. We also A/B test subject lines and content to continuously improve performance." },
          { question: "How do you handle list growth?", answer: "We can implement opt-in forms, lead magnets, and list building strategies as part of a comprehensive program. We also focus on list health to maintain high deliverability." },
          { question: "What about compliance (CAN-SPAM, GDPR)?", answer: "All our email programs are built with compliance in mind. We ensure proper consent, unsubscribe functionality, and data handling that meets regulatory requirements." }
        ]
      },
      {
        category: "Partnership & Process",
        items: [
          { question: "How does white-label communication work?", answer: "We operate 100% white-label. All communication flows through you. We provide reports, content for approval, and talking points. You maintain the client relationship." },
          { question: "Do you require long-term contracts?", answer: "No mandatory long-term contracts. We work month-to-month. That said, email programs need time to mature. Most meaningful results require 3+ months of consistent effort." },
          { question: "How often do you send campaigns?", answer: "Frequency depends on the business and audience. Most clients benefit from 2-4 campaigns per month plus automated sequences. We develop the right cadence during strategy." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Email Marketing Is One Piece of the",
    highlightedText: "360° Ecosystem",
    intro: "Effective local marketing is interconnected.",
    body: "Email nurtures leads from SEO and paid media. Automations convert website visitors. We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: Mail, id: "email-marketing", title: "Email Marketing", description: "Nurture leads and drive repeat business.", href: "/white-label-inbound-marketing-services/email-marketing", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search.", href: "/white-label-inbound-marketing-services/local-seo" },
      { icon: Map, id: "google-maps", title: "GBP SEO", description: "Dominate the local 3-pack.", href: "/white-label-inbound-marketing-services/google-maps" },
      { icon: Sparkles, id: "paid-media", title: "Paid Media", description: "Google Ads and Meta campaigns.", href: "/white-label-inbound-marketing-services/paid-media" },
      { icon: PenTool, id: "content", title: "Content Development", description: "Strategic content that converts.", href: "/white-label-inbound-marketing-services/content-marketing" },
      { icon: BarChart3, id: "reporting", title: "Reporting", description: "White-labeled dashboards.", href: "/white-label-inbound-marketing-services/reporting" }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/white-label-inbound-marketing-services"
  }
};
