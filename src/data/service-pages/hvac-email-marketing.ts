import { Mail, TrendingUp, Users, Zap, Target, FileText, Settings, Repeat, BarChart3, Search, Map, Sparkles, Star, PenTool } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const hvacEmailMarketingConfig: ServicePageConfig = {
  slug: "hvac-email-marketing",
  title: "HVAC Email Marketing",
  metaTitle: "HVAC Email Marketing: Seasonal Campaigns & Automation | DSD",
  metaDescription: "HVAC email programs for seasonal campaigns, maintenance reminders, and pre-season promotions. Automation that drives repeat revenue all year.",
  canonicalUrl: `${SITE_URL}/hvac-email-marketing`,

  hero: {
    headline: "Email Marketing for",
    highlightedText: "HVAC Companies",
    subheadline: "HVAC businesses run on seasonal demand. Email fills the gaps — spring tune-up promotions, summer emergency follow-ups, fall heating prep, and winter service reminders that keep your schedule full year-round.",
    qualifierLine: "You focus on your technicians and your customers. We handle the email execution that keeps HVAC customers coming back every season.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built for HVAC companies that want repeat business and full maintenance membership rosters."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most HVAC Email Programs Fail",
    intro: "HVAC email often fails because it's seasonal at best — a spring AC tune-up blast and a fall furnace check promo, then silence. There's no system for reactivating customers before they search for a new HVAC company.",
    painPoints: [
      {
        icon: FileText,
        title: "Only Two Sends Per Year",
        body: "One spring email. One fall email. Nothing in between. Your competitors are in the inbox 8-12 times a year building top-of-mind presence. You're showing up twice."
      },
      {
        icon: Settings,
        title: "No Maintenance Membership Automation",
        body: "Maintenance agreements are your most profitable recurring revenue. Without automated renewal reminders and engagement sequences, renewal rates drop and membership value leaks out."
      },
      {
        icon: Users,
        title: "Post-Install Silence",
        body: "A customer buys a new system — $8,000-15,000 — and gets no follow-up sequence. No 30-day check-in. No 1-year anniversary reminder. No cross-sell for service agreements. Revenue left on the table."
      },
      {
        icon: Target,
        title: "No Emergency Reactivation",
        body: "When the no-heat call comes in January, 60% of homeowners can't remember the last HVAC company that serviced their system. Consistent email keeps your company top-of-mind before the emergency."
      },
      {
        icon: TrendingUp,
        title: "Equipment Age Data Ignored",
        body: "You know which customers have aging systems that are 10-12 years old. That's a replacement opportunity sitting in your CRM. Without automated replacement interest sequences, those customers find a competitor."
      }
    ],
    closingLine: "We build HVAC email programs that work across every season and every stage of the customer lifecycle.",
    closingHighlight: "Maintenance memberships grow. Replacement demand converts. Customers don't forget you.",
    ctaText: "Start the Conversation"
  },

  outcomes: {
    headline: "What Changes for Your HVAC Business",
    subheadline: "The outcomes you experience when HVAC email is done right.",
    items: [
      {
        title: "Maintenance Memberships That Renew Themselves",
        description: "Automated renewal reminders, seasonal service confirmations, and member-exclusive offers drive renewal rates above 80%. Your most profitable recurring revenue stream becomes predictable."
      },
      {
        title: "Top-of-Mind Before Emergency Season",
        description: "Year-round touchpoints mean customers remember your name when the no-cool call hits in July. You get the call before they search for a competitor."
      },
      {
        title: "Post-Install Revenue From New System Owners",
        description: "New system installations trigger automated sequences — air quality add-ons, smart thermostat upgrades, and maintenance agreement offers. Every install becomes a long-term customer relationship."
      },
      {
        title: "Replacement Demand From Aging Equipment Owners",
        description: "Equipment age segmentation identifies households where systems are approaching end-of-life. Targeted sequences create replacement conversations before breakdowns force a rushed decision."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From Setup to HVAC Revenue Engine",
    subheadline: "Every HVAC email program is built for your service mix, maintenance program, and seasonal patterns. This is how we sequence the work.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Permission, Infrastructure & Seasonal Welcome",
        description: "Building the technical foundation and HVAC-specific sequences that make everything else possible.",
        activities: [
          "HVAC email program audit and assessment",
          "Authentication setup: SPF, DKIM, DMARC",
          "List hygiene and permission verification",
          "CRM/ServiceTitan integration review",
          "Customer segmentation by equipment age, service history",
          "Welcome sequence for new customers",
          "Post-install follow-up sequence",
          "Template design for HVAC brand",
          "Deliverability baseline establishment",
          "Tracking and analytics configuration"
        ],
        icon: Settings,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Execution",
        title: "Seasonal Campaigns & Maintenance Automation",
        description: "Regular seasonal campaigns and automated sequences that keep HVAC customers engaged and renewing.",
        activities: [
          "Seasonal campaign calendar: spring AC, summer emergency, fall heat, winter prep",
          "Maintenance membership renewal sequences",
          "Post-service review request automation",
          "Preventive maintenance reminder triggers",
          "Emergency availability notifications",
          "Subject line testing program",
          "Send time optimization for homeowners",
          "Monthly performance reporting"
        ],
        icon: Mail,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Expansion",
        title: "Equipment Segmentation & Replacement Demand",
        description: "Delivering the right message based on equipment age, service history, and system type.",
        activities: [
          "Equipment age segmentation for replacement sequences",
          "System-type targeting: furnace, heat pump, central AC",
          "Replacement interest nurture sequences",
          "VIP maintenance member recognition",
          "Commercial account cross-sell sequences",
          "Indoor air quality upgrade campaigns",
          "Smart thermostat and add-on offers"
        ],
        icon: Target,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Optimization",
        title: "Continuous Improvement & Scale",
        description: "Using performance data to improve results and identify new HVAC revenue opportunities.",
        activities: [
          "Deliverability and inbox placement optimization",
          "Inactivity management and list pruning",
          "Automation performance tuning",
          "Cross-channel integration with HVAC SEO",
          "Quarterly strategic reviews",
          "New seasonal opportunity identification"
        ],
        icon: TrendingUp,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Phase duration varies by list size, platform, and HVAC service mix. Most HVAC businesses see measurable engagement improvements within 4-6 weeks."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull Based on HVAC Business Model",
    subheadline: "Each component is scoped based on your service mix, maintenance program, and customer base.",
    blocks: [
      {
        title: "Seasonal Campaign Strategy",
        slug: "campaign-strategy",
        description: "Spring AC tune-up, summer emergency, fall heat prep, and winter service campaigns aligned to HVAC demand cycles.",
        icon: Target
      },
      {
        title: "List Management",
        slug: "list-management",
        description: "HVAC customer segmentation by equipment age, service history, and membership status that protects deliverability.",
        icon: Users
      },
      {
        title: "Maintenance & Post-Install Automation",
        slug: "automation-flows",
        description: "Maintenance membership renewals, post-install follow-ups, replacement interest sequences, and review request automations.",
        icon: Repeat
      },
      {
        title: "Newsletter & Seasonal Campaigns",
        slug: "newsletter-design",
        description: "Brand-consistent HVAC templates, mobile-optimized layouts, and seasonal campaign design.",
        icon: FileText
      },
      {
        title: "A/B Testing",
        slug: "ab-testing",
        description: "Subject line testing, send time optimization, and seasonal offer experiments that improve open and conversion rates.",
        icon: Settings
      },
      {
        title: "Performance Analytics",
        slug: "performance-analytics",
        description: "Open rates, click rates, membership renewal tracking, and revenue attribution reporting by campaign and season.",
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
        point: "You have an existing HVAC customer list",
        detail: "Email marketing requires an audience. HVAC companies with 500+ past customers — even lapsed ones — have strong candidates for reactivation campaigns."
      },
      {
        point: "You run or want to grow a maintenance membership program",
        detail: "Maintenance memberships are the most valuable HVAC recurring revenue stream. Email is the primary retention and recruitment channel when done right."
      },
      {
        point: "You use ServiceTitan, Housecall Pro, or similar CRM",
        detail: "CRM integration lets us segment by equipment age, service history, and membership status. The more data accessible, the more targeted the campaigns."
      },
      {
        point: "You value engagement over vanity metrics",
        detail: "We optimize for renewals, bookings, and booked revenue — not just open rates. A smaller, engaged HVAC list beats a large, dead one."
      },
      {
        point: "You have something worth emailing about",
        detail: "Seasonal demand creates natural campaign hooks. HVAC companies always have timely, relevant reasons to be in their customers' inboxes."
      }
    ],
    notFit: [
      {
        point: "No existing customer list and no lead generation strategy",
        detail: "Email marketing requires an audience. If there is no customer list and no plan to build one, we cannot generate results from nothing."
      },
      {
        point: "Expecting immediate revenue from first campaign",
        detail: "Email programs build over time. First campaigns establish baselines. The maintenance membership retention and replacement demand sequences take months to mature."
      },
      {
        point: "Unwilling to approve content in timely fashion",
        detail: "HVAC email requires consistent sends before seasonal peaks. If approvals take weeks, the spring AC campaign misses the window."
      },
      {
        point: "Purchased or rented email lists",
        detail: "We do not send to purchased lists. All subscribers must be legitimately opted-in customers or contacts who have interacted with your HVAC business."
      }
    ],
    ctaText: "Let's Talk About Your HVAC Business"
  },

  faq: {
    headline: "Frequently Asked Questions",
    groups: [
      {
        category: "Results & Performance",
        items: [
          { question: "What kind of results can HVAC companies expect from email?", answer: "HVAC businesses that implement systematic email programs typically see maintenance membership renewal rates improve 15-25%, and reactivation campaigns generate 3-8x ROI on dormant customer lists within the first 90 days." },
          { question: "How quickly will we see results?", answer: "Seasonal campaigns tied to spring and fall demand can show results within weeks. Maintenance membership retention programs show impact within the first renewal cycle, typically 60-90 days." },
          { question: "How do you measure HVAC email success?", answer: "We track open rates, click rates, maintenance membership renewal rates, and when possible, booking attribution from email campaigns. The real measure is HVAC business impact: seasonal revenue and membership retention." }
        ]
      },
      {
        category: "HVAC-Specific Questions",
        items: [
          { question: "Can you integrate with ServiceTitan or Housecall Pro?", answer: "Yes. We work with your field service management software to segment customers by equipment age, service history, and membership status. CRM data makes HVAC email dramatically more targeted and effective." },
          { question: "How do you handle the off-season for HVAC email?", answer: "The off-season is when you build relationships. We create content calendars with air quality tips, energy efficiency advice, and system longevity content that provides value between peak demand periods." },
          { question: "Can you run maintenance membership recruitment campaigns?", answer: "Yes. Membership recruitment is one of the highest-ROI HVAC email use cases. We build dedicated campaigns targeting past customers who received service but haven't enrolled in a maintenance plan." }
        ]
      },
      {
        category: "Partnership & Process",
        items: [
          { question: "How does communication work?", answer: "You get a dedicated strategist who keeps you informed. We provide reports, seasonal campaign previews for approval, and performance summaries. Simple, clear, no runaround." },
          { question: "Do you require long-term contracts?", answer: "No mandatory long-term contracts. We work month-to-month. That said, HVAC email programs need at least one full seasonal cycle to show their real value." },
          { question: "How often do you send HVAC campaigns?", answer: "Frequency depends on your business and goals. Most HVAC companies benefit from 2-4 campaigns per month — one seasonal campaign, one membership touchpoint, and automated sequences running continuously." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "HVAC Email Marketing Is One Piece of the",
    highlightedText: "360° Growth Engine",
    intro: "Effective HVAC marketing is interconnected.",
    body: "Email reactivates past customers and retains maintenance members. HVAC seasonal campaigns support GBP review velocity. We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: Mail, id: "email-marketing", title: "HVAC Email Marketing", description: "Seasonal campaigns and maintenance retention.", href: "/hvac-email-marketing", isCenter: true },
      { icon: Search, id: "local-seo", title: "HVAC Local SEO", description: "Organic visibility in local search.", href: "/hvac-seo" },
      { icon: Map, id: "google-maps", title: "HVAC GBP SEO", description: "Dominate the local 3-pack.", href: "/hvac-google-maps" },
      { icon: Sparkles, id: "paid-media", title: "HVAC Paid Media", description: "Google Ads for emergency and replacement demand.", href: "/hvac-paid-advertising" },
      { icon: PenTool, id: "content", title: "HVAC Content", description: "Seasonal content that earns authority.", href: "/hvac-content-marketing" },
      { icon: BarChart3, id: "reporting", title: "HVAC Reporting", description: "Dashboards that prove value.", href: "/hvac-reporting" }
    ],
    ctaText: "Explore All HVAC Services",
    ctaHref: "/#services"
  }
};
