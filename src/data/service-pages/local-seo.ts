import { MapPin, Target, TrendingUp, Shield, Search, FileText, Link2, Settings, Code, Zap, Globe, Sparkles, Mail, BarChart3, Award } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";

export const localSEOConfig: ServicePageConfig = {
  slug: "local-seo",
  title: "Local SEO",
  metaTitle: "White-Label Local SEO Services for Agencies | Dialed-In Web",
  metaDescription: "White-label local SEO fulfillment for agencies. On-page optimization, technical SEO, content strategy, link building, and GBP management that drives organic visibility for your clients.",
  canonicalUrl: "https://dialedinweb.com/white-label-inbound-marketing-services/local-seo",
  keywords: "white label local SEO, white label SEO services, local SEO fulfillment, agency SEO partner, local search optimization",

  hero: {
    headline: "White Label Local SEO for",
    highlightedText: "Digital Agencies",
    subheadline: "We help agencies deliver comprehensive local SEO services that drive organic visibility, qualified traffic, and measurable results for their clients.",
    qualifierLine: "You stay the hero. We handle the execution that makes local rankings happen.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built for agencies serving local businesses in competitive markets."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Cookie-Cutter SEO Packages Fail Local Businesses",
    intro: "Local SEO is not a checklist. It is a competitive discipline where proximity, relevance, and prominence interact dynamically in local search and Google Maps. Generic packages ignore this reality.",
    painPoints: [
      {
        icon: MapPin,
        title: "Proximity Changes Everything",
        body: "Local rankings shift based on where the searcher is standing. A business ranking #1 three miles away may not appear at all from across town."
      },
      {
        icon: Target,
        title: "Competition Varies by Market",
        body: "A plumber in Boise faces different local competition than one in Chicago. Cookie-cutter local SEO packages treat them the same."
      },
      {
        icon: Search,
        title: "Intent Signals Are Local",
        body: "Local searchers have distinct intent patterns. Understanding local search intent is what separates effective local SEO from wasted effort."
      },
      {
        icon: Shield,
        title: "Authority Requirements Differ",
        body: "Some markets require aggressive local link building. Others require citation cleanup and consistency. Generic packages apply the same tactics everywhere."
      },
      {
        icon: TrendingUp,
        title: "Reviews Drive Visibility",
        body: "Review velocity, recency, and response quality influence local rankings. Most packages ignore review strategy entirely or treat it as an afterthought."
      }
    ],
    systemClosing: "Effective local SEO requires scoping to the actual market, not templated deliverables.",
    closingLine: "We scope every engagement to competitive reality.",
    closingHighlight: "That is why our local SEO work performs consistently.",
    ctaText: "Start the Conversation"
  },

  outcomes: {
    headline: "What Actually Changes When Local SEO Works",
    subheadline: "These outcomes only appear when strategy matches market reality.",
    items: [
      {
        icon: TrendingUp,
        title: "Organic Local Visibility That Compounds",
        description: "Rankings achieved today continue driving leads months and years later. Unlike paid ads, SEO builds equity."
      },
      {
        icon: Target,
        title: "Qualified Local Traffic",
        description: "Local searchers are ready to buy. They are not researching. They are looking for a provider right now."
      },
      {
        icon: Shield,
        title: "Competitive Defense in Local Search",
        description: "If you are not ranking, your client's competitors are taking those calls. Local SEO is defensive as much as offensive."
      },
      {
        icon: Zap,
        title: "Sales From Local Organic Visibility",
        description: "Organic traffic converts at higher rates because searchers trust earned results over paid placements."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "How We Execute Local SEO",
    subheadline: "A phased local SEO approach that builds a foundation before chasing rankings. Skipping steps breaks the system.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Technical & On-Page Foundation",
        description: "Audit and fix the fundamentals that determine a site's local ranking ceiling.",
        activities: [
          "Technical SEO audit and fixes",
          "On-page optimization for target locations",
          "Schema markup implementation",
          "NAP consistency audit",
          "Baseline ranking documentation",
          "Competitor analysis"
        ],
        icon: Shield,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Authority",
        title: "Content & Link Building",
        description: "Build the content and authority signals that move rankings.",
        activities: [
          "Service area page development",
          "Local content strategy execution",
          "Link acquisition from local sources",
          "Citation building and cleanup",
          "Review generation strategy"
        ],
        icon: TrendingUp,
        color: "hsl(200, 70%, 50%)"
      },
      {
        phase: 3,
        name: "Velocity",
        title: "Momentum & Expansion",
        description: "Accelerate what is working and expand geographic reach.",
        activities: [
          "Content expansion based on performance",
          "Link velocity increase",
          "New market targeting",
          "Competitor gap analysis",
          "Advanced optimization"
        ],
        icon: Zap,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Dominance",
        title: "Market Leadership",
        description: "Defend positions and maintain competitive advantage.",
        activities: [
          "Defensive optimization",
          "Competitor monitoring",
          "Algorithm update adaptation",
          "Quarterly strategic reviews",
          "Long-term visibility planning"
        ],
        icon: Target,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Phase duration varies by market competitiveness. Most clients see meaningful movement within 3-4 months."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull Based on Market Reality",
    subheadline: "Each component is scoped based on market competition and client goals, not templated packages.",
    blocks: [
      {
        title: "On-Page Optimization",
        slug: "on-page-optimization",
        description: "Location-specific title tags, meta descriptions, headers, and on-page local SEO optimization.",
        icon: FileText
      },
      {
        title: "Technical SEO Audits",
        slug: "technical-seo-audits",
        description: "Site architecture, crawlability, Core Web Vitals, and technical SEO fixes that support local search performance.",
        icon: Settings
      },
      {
        title: "Local Keyword Strategy",
        slug: "local-keyword-strategy",
        description: "Comprehensive local keyword discovery, local search intent analysis, and strategic mapping.",
        icon: Search
      },
      {
        title: "Content Development",
        slug: "content-development",
        description: "Service area pages, local blog content, and FAQ sections designed to capture long-tail local search queries.",
        icon: FileText
      },
      {
        title: "Link Building",
        slug: "link-building",
        description: "Outreach to local publications, community organizations, and relevant sites to build geographic authority.",
        icon: Link2
      },
      {
        title: "Schema Markup",
        slug: "schema-markup",
        description: "LocalBusiness, Service, FAQ, and Review schema implementation to improve local search visibility.",
        icon: Code
      }
    ]
  },

  qualification: {
    eyebrow: "Selective Fit",
    headline: "Is This Right for Your Agency?",
    subheadline: "We work best with agencies who understand that local SEO is a long-term strategic investment, not a quick fix.",
    goodFit: [
      { point: "Your clients have verified, address-visible GBP listings", detail: "Local SEO requires address-visible Google Business Profiles. Service-area-only listings need a different approach." },
      { point: "You need a reliable fulfillment partner to replace inconsistent vendors", detail: "We become an extension of your team with documented processes and predictable delivery." },
      { point: "Your clients understand SEO is a 6-12 month investment", detail: "Rankings don't happen overnight. You set realistic expectations and clients are willing to invest in the process." },
      { point: "You want white-label execution under your brand", detail: "We operate invisibly. Your clients see your brand, your reports, your results." }
    ],
    notFit: [
      { point: "Your clients expect top rankings within weeks", detail: "If you're promising fast results to close deals, we're not the right partner for that conversation." },
      { point: "Clients rely solely on service-area or address-hidden Google Business Profile listings", detail: "These profiles require different tactics. Our local SEO framework is built for address-visible listings." },
      { point: "There's no willingness to invest in content and links", detail: "Local SEO requires ongoing content and authority building. If the budget only covers 'basic optimization,' results will reflect that." },
      { point: "You need guaranteed specific ranking positions", detail: "Anyone guaranteeing rankings is either lying or using black hat tactics that deliver temporary results and long-term penalties. We focus on sustainable, systematic improvement." }
    ],
    ctaText: "Start the Conversation"
  },

  faq: {
    headline: "Frequently Asked Questions",
    groups: [
      {
        category: "Results & Timing",
        items: [
          { question: "How long does it take to see local SEO results?", answer: "Most campaigns show meaningful movement within 3-4 months, with substantial results by month 6. Competitive markets may take longer." },
          { question: "Can you guarantee specific rankings?", answer: "No one can guarantee specific rankings. We focus on systematic improvement based on proven ranking factors and transparent reporting on progress." }
        ]
      },
      {
        category: "Process & Delivery",
        items: [
          { question: "How do you handle client communication?", answer: "We operate 100% white-label. All communication flows through you. We provide reports, updates, and talking points." },
          { question: "What access do you need from clients?", answer: "We need access to Google Business Profile, website CMS, and ideally Google Analytics and Search Console." }
        ]
      },
      {
        category: "Eligibility & Fit",
        items: [
          { question: "Do you work with service-area businesses?", answer: "We specialize in businesses with verified, address-visible Google Business Profile listings." },
          { question: "Do you require long-term contracts?", answer: "No. We work month-to-month with a 30-day notice policy. Our retention comes from results, not lock-in agreements." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The 360° Ecosystem",
    headline: "Local SEO Works Best as Part of a",
    highlightedText: "Coordinated System",
    intro: "While local SEO drives organic visibility in search and Google Maps, it compounds when integrated with the broader inbound ecosystem.",
    body: "GBP optimization, authority building, and paid media all reinforce SEO performance. We can engage these services independently or as a unified strategy.",
    services: [
      {
        icon: MapPin,
        id: "google-maps",
        title: "GBP SEO",
        description: "Dominate the local 3-pack with optimized Google Business Profiles.",
        href: "/white-label-inbound-marketing-services/google-maps"
      },
      {
        icon: Award,
        id: "authority",
        title: "Authority Building",
        description: "Build the off-page signals that make rankings stick.",
        href: "/white-label-inbound-marketing-services/local-authority-building"
      },
      {
        icon: Sparkles,
        id: "paid-media",
        title: "Paid Media",
        description: "Capture demand immediately while organic visibility builds.",
        href: "/white-label-inbound-marketing-services/paid-media"
      },
      {
        icon: Mail,
        id: "email",
        title: "Email Marketing",
        description: "Nurture leads and drive repeat business.",
        href: "/white-label-inbound-marketing-services/email-marketing"
      },
      {
        icon: BarChart3,
        id: "reporting",
        title: "Reporting",
        description: "White-label dashboards that prove value.",
        href: "/white-label-inbound-marketing-services/reporting"
      }
    ],
    ctaText: "Start the Conversation",
    ctaHref: "#contact"
  }
};