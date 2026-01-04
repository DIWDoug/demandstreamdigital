import { MapPin, Map, Target, TrendingUp, Shield, Search, FileText, Link2, Settings, Code, Zap, Globe, Sparkles, Mail, BarChart3, Award, PenTool } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";

export const localSEOConfig: ServicePageConfig = {
  slug: "local-seo",
  title: "Local SEO",
  metaTitle: "White Label Local SEO Services for Agencies | Dialed-In Web | Fulfillment Partner",
  metaDescription: "White label local SEO for agencies. On-page, technical, content & link building. Scale your services without hiring. Get a free consultation.",
  canonicalUrl: "https://dialedinweb.com/white-label-inbound-marketing-services/local-seo",

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
        title: "Organic Local Visibility That Compounds",
        description: "Rankings achieved today continue driving leads months and years later. Unlike paid ads, SEO builds equity."
      },
      {
        title: "Qualified Local Traffic",
        description: "Local searchers are ready to buy. They are not researching. They are looking for a provider right now."
      },
      {
        title: "Competitive Defense in Local Search",
        description: "If you are not ranking, your client's competitors are taking those calls. Local SEO is defensive as much as offensive."
      },
      {
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
        description: "Audit and fix the fundamentals that determine a site's local ranking ceiling. No amount of content or links will move rankings if the foundation is broken.",
        activities: [
          "Complete technical SEO audit and priority fix list",
          "Core Web Vitals optimization",
          "On-page optimization for target locations and services",
          "LocalBusiness and Service schema markup implementation",
          "NAP consistency audit across all platforms",
          "Internal linking structure optimization",
          "URL structure and site architecture review",
          "Baseline ranking documentation",
          "Competitor backlink and content analysis",
          "Google Search Console and Analytics configuration"
        ],
        icon: Shield,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Authority",
        title: "Content & Link Building",
        description: "Build the content and authority signals that move rankings. Content fills topical gaps. Links build domain strength. Both require consistent execution.",
        activities: [
          "Service area page development with LLM-ready semantic structure",
          "Local content strategy execution aligned to keyword map",
          "FAQ content expansion targeting People Also Ask",
          "Link acquisition from local publications and community sites",
          "Citation building across industry and local directories",
          "Data aggregator submissions for NAP syndication",
          "Review generation strategy and response templates",
          "Guest post outreach to relevant local blogs",
          "Brand mention monitoring and acquisition"
        ],
        icon: TrendingUp,
        color: "hsl(200, 70%, 50%)"
      },
      {
        phase: 3,
        name: "Velocity",
        title: "Momentum & Expansion",
        description: "Accelerate what is working and expand geographic reach. Double down on content types driving traffic. Scale link acquisition channels performing well.",
        activities: [
          "Content expansion based on performance data",
          "Hyperlocal landing pages for high-value service areas",
          "Link velocity increase through proven channels",
          "New market targeting based on client capacity",
          "Competitor gap analysis for content opportunities",
          "Advanced schema implementation for rich results",
          "AI Overview optimization through structured content",
          "Review velocity acceleration campaigns",
          "Cross-linking between location and service pages"
        ],
        icon: Zap,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Dominance",
        title: "Market Leadership & Defense",
        description: "Defend positions and maintain competitive advantage. Rankings earned require ongoing protection. Competitors will target your client's success.",
        activities: [
          "Defensive optimization against competitor advances",
          "Continuous competitor monitoring and response",
          "Algorithm update adaptation and recovery",
          "Quarterly strategic reviews and roadmap updates",
          "Content refresh and consolidation audits",
          "Link profile health monitoring",
          "New service and location expansion",
          "AI visibility tracking and optimization",
          "Long-term visibility planning and goal setting"
        ],
        icon: Target,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    executionNote: "Each phase builds on the previous. Foundation work is non-negotiable. Content without technical health underperforms. Links without content have nothing to point to.",
    footerNote: "Phase duration varies by market competitiveness and client capacity. Most clients see meaningful movement within 3-4 months, with substantial results by month 6."
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
        title: "Technical SEO",
        slug: "technical-seo",
        description: "Site architecture, crawlability, Core Web Vitals, and technical SEO fixes that support local search performance.",
        icon: Settings
      },
      {
        title: "Local Keyword Strategy",
        slug: "local-keyword-strategy",
        description: "Seed keyword development, implicit vs explicit local intent classification, competitor gap analysis, and keyword-to-URL mapping.",
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
        description: "LocalBusiness, Service, FAQ, and Review schema that unlocks rich results and AI Overview citations.",
        icon: Code
      },
      {
        title: "NAP Citations",
        slug: "nap-citations",
        description: "NAP consistency audits, citation cleanup, and strategic directory submissions that validate business identity for rankings and AI visibility.",
        icon: Globe
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
          { question: "How long does it take to see local SEO results?", answer: "Most campaigns show meaningful movement within 3-4 months, with substantial results by month 6. Competitive markets may take longer. We document baseline rankings and track progress monthly so you can see exactly how visibility is improving." },
          { question: "Can you guarantee specific rankings?", answer: "No one can guarantee specific rankings. Google's algorithm considers hundreds of factors, many outside anyone's control. We focus on systematic improvement based on proven ranking factors and transparent reporting on progress." },
          { question: "How do AI Overviews affect local SEO?", answer: "AI Overviews pull from trusted sources including GBP data, review platforms, and structured website content. Our approach optimizes for both traditional rankings and AI visibility through schema markup, NAP consistency, and LLM-ready content structure with semantic chunking." },
          { question: "What happens if rankings drop?", answer: "Ranking fluctuations are normal, especially after algorithm updates. We monitor rankings daily and investigate significant drops immediately. Our approach builds sustainable visibility that recovers faster than competitors relying on shortcuts." },
          { question: "How do you measure local SEO success?", answer: "We track rankings across target keywords and locations, organic traffic from local searches, GBP impressions and actions, and ultimately leads and conversions. Monthly reports connect activities to outcomes so you can demonstrate value to clients." }
        ]
      },
      {
        category: "Process & Delivery",
        items: [
          { question: "How do you handle client communication?", answer: "We operate 100% white-label. All communication flows through you. We provide reports, updates, and talking points. Your clients never know we exist." },
          { question: "What access do you need from clients?", answer: "We need access to Google Business Profile, website CMS, and ideally Google Analytics and Search Console. We can work with limited access but recommend full access for best results." },
          { question: "How often do you report on progress?", answer: "We provide comprehensive monthly reports with ranking changes, traffic data, completed activities, and next-month priorities. Dashboards provide real-time visibility between reports." },
          { question: "What is your content creation process?", answer: "We research topics based on keyword data and competitor gaps, create content briefs, write optimized content with semantic structure for both users and AI, and deliver for your review before publishing." },
          { question: "How do you build links for local businesses?", answer: "We focus on relevant local sources: community organizations, local publications, industry directories, and sponsorship opportunities. Every link is earned through outreach, not purchased." }
        ]
      },
      {
        category: "Eligibility & Fit",
        items: [
          { question: "Do you work with service-area businesses?", answer: "We specialize in businesses with verified, address-visible Google Business Profile listings. Service-area-only businesses require different tactics and may not be the best fit for our core local SEO framework." },
          { question: "Do you require long-term contracts?", answer: "No. We work month-to-month with a 30-day notice policy. Our retention comes from results, not lock-in agreements. That said, local SEO is a long-term investment and most meaningful results require 6+ months of consistent effort." },
          { question: "What industries do you work with?", answer: "We work with local service businesses across most industries: HVAC, plumbing, legal, dental, medical, home services, and more. We have deep experience in competitive verticals where local visibility drives real revenue." },
          { question: "Can you take over from another SEO provider?", answer: "Yes. We audit existing work, document current rankings, identify quick wins and ongoing issues, and build a transition plan. Most handoffs complete within 2-4 weeks without disruption." },
          { question: "What if my client has multiple locations?", answer: "We have specific processes for multi-location local SEO including centralized strategy, location-specific execution, and scalable reporting. Pricing scales with location count." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Local SEO Is One Piece of the",
    highlightedText: "360° Ecosystem",
    intro: "While local SEO drives organic visibility in search and Google Maps, it compounds when integrated with the broader inbound ecosystem.",
    body: "GBP optimization, authority building, and paid media all reinforce SEO performance. We can engage these services independently or as a unified strategy.",
    services: [
      {
        icon: MapPin,
        id: "local-seo",
        title: "Local SEO",
        description: "Organic visibility in local search results.",
        href: "/white-label-inbound-marketing-services/local-seo",
        isCenter: true
      },
      {
        icon: Map,
        id: "google-maps",
        title: "GBP SEO",
        description: "Dominate the local 3-pack with optimized Google Business Profiles.",
        href: "/white-label-inbound-marketing-services/google-maps"
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
        icon: PenTool,
        id: "content",
        title: "Content Development",
        description: "Strategic content that ranks and converts.",
        href: "/white-label-inbound-marketing-services/content-marketing"
      },
      {
        icon: BarChart3,
        id: "reporting",
        title: "Reporting",
        description: "White-label dashboards that prove value.",
        href: "/white-label-inbound-marketing-services/reporting"
      }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/white-label-inbound-marketing-services"
  }
};