import { Mail, TrendingUp, Users, Zap, Target, FileText, Settings, Repeat, BarChart3, Search, Map, Sparkles, Star, Globe, Share2 } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";

export const emailMarketingConfig: ServicePageConfig = {
  slug: "email-marketing",
  title: "Email Marketing",
  metaTitle: "White-Label Email Marketing for Agencies | Dialed-In Web",
  metaDescription: "White-label email marketing services for agencies. Campaign strategy, automation sequences, and list management that nurtures leads and drives repeat business.",
  canonicalUrl: "https://dialedinweb.com/white-label-inbound-marketing-services/email-marketing",
  keywords: "white label email marketing, email automation, drip campaigns, email strategy, list management",

  hero: {
    headline: "White Label Email Marketing for",
    highlightedText: "Digital Agencies",
    subheadline: "Email delivers the highest ROI of any marketing channel. We create and manage email programs that nurture leads, drive repeat business, and maximize customer lifetime value—executed entirely under your brand.",
    qualifierLine: "You stay the hero. We handle the email execution that keeps revenue flowing.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built for agencies who understand that the list is the asset."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most Email Marketing Fails",
    intro: "You have seen this before. The email platform is set up, occasional campaigns go out, but open rates decline, automations grow stale, and the list slowly dies from neglect. Email is both science and art: technical infrastructure meets persuasive storytelling. Most programs nail neither.",
    painPoints: [
      {
        icon: FileText,
        title: "No Freebie Magnet Strategy",
        body: "Sign-up forms exist but offer no compelling reason to subscribe. Without valuable lead magnets, list growth stalls and quality suffers."
      },
      {
        icon: Settings,
        title: "Broken Conversion Funnels",
        body: "Welcome sequences built once and never optimized. No systematic path from subscriber to customer. Leads enter but never convert."
      },
      {
        icon: Users,
        title: "Segmentation Is an Afterthought",
        body: "Every subscriber gets the same message regardless of behavior or stage. The right message never reaches the right person at the right time."
      },
      {
        icon: Target,
        title: "Metrics Without Meaning",
        body: "Open rates tracked but never acted on. No deliverability monitoring. No revenue attribution. Data collected but never converted to insight."
      }
    ],
    closingLine: "We build email programs that balance technical precision with persuasive craft.",
    closingHighlight: "Your clients build lasting customer relationships. You keep the margin you earned.",
    ctaText: "Start the Conversation"
  },

  outcomes: {
    headline: "What Actually Changes When Email Works",
    subheadline: "The outcomes your clients experience when email is done right.",
    items: [
      {
        icon: TrendingUp,
        title: "Revenue From Owned Audience",
        description: "Unlike social or paid, the email list is an owned asset. Algorithm changes cannot take it away. A direct line to customers who asked to hear from you."
      },
      {
        icon: Repeat,
        title: "Conversion Funnels That Execute",
        description: "Automated sequences move subscribers from awareness to purchase systematically. Freebie magnets attract. Nurture sequences educate. Conversion emails close."
      },
      {
        icon: Zap,
        title: "Segmentation That Scales Relevance",
        description: "The right message reaches the right person at the right time. Behavior-based targeting delivers personalization without manual effort."
      },
      {
        icon: Target,
        title: "Metrics That Drive Decisions",
        description: "Deliverability, open rates, click rates, and conversions tracked and optimized. Data informs strategy. Performance compounds over time."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From Setup to Revenue Engine",
    subheadline: "Every email program is built for the specific business and audience. This is how we sequence the work.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Freebie Magnets & Core Infrastructure",
        description: "Building the lead capture system and technical foundation that makes everything else possible.",
        activities: [
          "Email program audit and assessment",
          "Customer insight mapping and audience analysis",
          "Freebie magnet strategy development",
          "Opt-in form design and placement",
          "Template design with brand consistency",
          "Welcome sequence creation",
          "Technical setup: SPF, DKIM, DMARC",
          "Tracking and analytics configuration",
          "Deliverability baseline establishment"
        ],
        icon: Settings,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Execution",
        title: "Conversion Funnels & Campaign Cadence",
        description: "Building automated sequences that systematically move subscribers toward purchase.",
        activities: [
          "Conversion funnel mapping and build",
          "Nurture sequence development",
          "Campaign calendar execution",
          "Subject line modeling and testing",
          "A/B testing program launch",
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
        title: "Segmentation & Behavioral Targeting",
        description: "Delivering the right message to the right person based on behavior and demographics.",
        activities: [
          "Advanced segmentation development",
          "Behavioral trigger sequences",
          "Re-engagement campaigns",
          "Cart abandonment sequences",
          "Post-purchase flows",
          "VIP and loyalty programs",
          "Cross-sell and upsell automation"
        ],
        icon: Target,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Optimization",
        title: "Performance Analysis & Scale",
        description: "Turning metrics into insight and insight into improved results.",
        activities: [
          "Deliverability and open rate optimization",
          "Conversion rate analysis",
          "Resource allocation refinement",
          "Automation performance tuning",
          "List health maintenance",
          "Quarterly strategic reviews",
          "New opportunity identification"
        ],
        icon: TrendingUp,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Phase duration varies by list size, platform, and goals. Most clients see measurable engagement improvements within 4-6 weeks."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Components of Email Marketing",
    subheadline: "Each component is scoped based on business model, audience, and goals. Not templated packages.",
    blocks: [
      {
        title: "Freebie Magnets & List Growth",
        slug: "freebie-magnets-list-growth",
        description: "Lead magnets, opt-in forms, and incentive strategies that build lists with qualified subscribers.",
        icon: FileText
      },
      {
        title: "Conversion Funnels",
        slug: "conversion-funnels",
        description: "Automated sequences that move subscribers from awareness to purchase systematically.",
        icon: Settings
      },
      {
        title: "Segmentation & Targeting",
        slug: "segmentation-targeting",
        description: "Behavior-based and demographic segmentation that delivers the right message to the right person.",
        icon: Users
      },
      {
        title: "Subject Line Modeling",
        slug: "subject-line-modeling",
        description: "Proven formulas and A/B testing that increase open rates and drive engagement.",
        icon: Target
      },
      {
        title: "Performance Metrics",
        slug: "performance-metrics",
        description: "Deliverability, open rates, click rates, and conversion tracking that informs optimization.",
        icon: BarChart3
      },
      {
        title: "Brand Consistency & Design",
        slug: "brand-consistency-design",
        description: "Templates and voice guidelines that align email identity with the overall business brand.",
        icon: Zap
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
        detail: "Email builds relationship equity over time. We partner with agencies who see email as ongoing program, not a one-time project."
      },
      {
        point: "Your clients can provide content input and approvals",
        detail: "The best email content reflects client expertise. Clients need to provide input, approve content, and engage with the process."
      },
      {
        point: "You value engagement over vanity metrics",
        detail: "We optimize for opens, clicks, and conversions—not list size alone. A smaller, engaged list beats a large, dead one."
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
          { question: "Do you require long-term contracts?", answer: "No mandatory long-term contracts. We work month-to-month. That said, email programs need time to mature—most meaningful results require 3+ months of consistent effort." },
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
    body: "Email nurtures leads from SEO and paid media. Automations convert website visitors. Reputation content builds trust. We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: Mail, id: "email-marketing", title: "Email Marketing", description: "Nurture leads and drive repeat business.", href: "/white-label-inbound-marketing-services/email-marketing", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search.", href: "/white-label-inbound-marketing-services/local-seo" },
      { icon: Map, id: "google-maps", title: "Google Maps", description: "Dominate the local 3-pack.", href: "/white-label-inbound-marketing-services/google-maps" },
      { icon: Sparkles, id: "paid-media", title: "Paid Media", description: "Google Ads and Meta campaigns.", href: "/white-label-inbound-marketing-services/paid-media" },
      { icon: Star, id: "reputation", title: "Reputation", description: "Review generation and management.", href: "/white-label-inbound-marketing-services/google-maps" },
      { icon: Globe, id: "authority", title: "Authority Building", description: "Links and citations.", href: "/white-label-inbound-marketing-services/local-authority-building" },
      { icon: BarChart3, id: "reporting", title: "Reporting", description: "White-labeled dashboards.", href: "/white-label-inbound-marketing-services/reporting" },
      { icon: Share2, id: "retargeting", title: "Retargeting", description: "Stay top of mind.", href: "/white-label-inbound-marketing-services/paid-media" }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/white-label-inbound-marketing-services"
  }
};
