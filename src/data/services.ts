import { MapPin, Map, MousePointerClick, Mail, Award, BarChart3, Target, TrendingUp, Users, Shield, Zap, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SpokeDetail {
  title: string;
  description: string;
  slug: string;
  fullDescription: string;
  benefits: string[];
  deliverables: string[];
  process: string[];
}

export interface HubFAQ {
  question: string;
  answer: string;
}

export interface Hub {
  icon: LucideIcon;
  title: string;
  slug: string;
  summary: string;
  heroDescription: string;
  whyItMatters: {
    headline: string;
    description: string;
    points: { icon: LucideIcon; title: string; description: string }[];
  };
  ourApproach: {
    headline: string;
    description: string;
    steps: { number: string; title: string; description: string }[];
  };
  benefits: {
    headline: string;
    items: string[];
  };
  faqs: HubFAQ[];
  spokes: SpokeDetail[];
}

// Simplified Spoke interface for backwards compatibility
export interface Spoke {
  title: string;
  description: string;
  slug: string;
}

export const hubs: Hub[] = [
  {
    icon: MapPin,
    title: "Local SEO",
    slug: "local-seo",
    summary: "Dominate local organic search results and drive qualified traffic from your service areas.",
    heroDescription: "We help agencies deliver comprehensive local SEO services that drive organic visibility, qualified traffic, and measurable results for their clients. Our white-label local SEO fulfillment covers everything from on-page optimization to link building, executed with the precision your agency reputation demands.",
    whyItMatters: {
      headline: "Why Local SEO Matters for Your Clients",
      description: "46% of all Google searches have local intent. When someone searches for services in their area, your clients need to appear, not their competitors. Local SEO is the foundation of sustainable lead generation for service-area businesses.",
      points: [
        { icon: Target, title: "Capture High-Intent Traffic", description: "Local searchers are ready to buy. They're not researching. They're looking for a provider right now." },
        { icon: TrendingUp, title: "Compound Returns Over Time", description: "Unlike paid ads, SEO builds equity. Rankings achieved today continue driving leads months and years later." },
        { icon: Shield, title: "Defend Against Competitors", description: "If you're not ranking, your client's competitors are taking those calls. Local SEO is defensive as much as offensive." }
      ]
    },
    ourApproach: {
      headline: "Our Local SEO Approach",
      description: "We've refined our process across hundreds of local campaigns. Here's how we deliver results for your clients:",
      steps: [
        { number: "01", title: "Technical Foundation", description: "We audit site architecture, fix crawlability issues, implement schema markup, and ensure the technical foundation supports ranking goals." },
        { number: "02", title: "On-Page Optimization", description: "Location-specific title tags, meta descriptions, header structure, and content optimization for every target market." },
        { number: "03", title: "Content Development", description: "Service area pages, location content, blog strategy, and FAQ sections that capture long-tail queries and demonstrate expertise." },
        { number: "04", title: "Authority Building", description: "Strategic link acquisition from local publications, industry sites, and community organizations that build geographic relevance." },
        { number: "05", title: "Ongoing Optimization", description: "Monthly reporting, rank tracking, competitor monitoring, and continuous refinement based on performance data." }
      ]
    },
    benefits: {
      headline: "What Your Agency Gets",
      items: [
        "Fully white-labeled deliverables with your branding",
        "Detailed monthly reports ready for client presentation",
        "Direct access to your dedicated strategist",
        "Transparent communication on strategy and progress",
        "Scalable processes that grow with your agency",
        "No contracts. Just quality work that keeps you coming back"
      ]
    },
    faqs: [
      { question: "How long does it take to see local SEO results?", answer: "Most campaigns show meaningful movement within 3-4 months, with substantial results by month 6. Competitive markets may take longer, while less competitive areas often see faster wins. We set realistic expectations during discovery based on actual market data." },
      { question: "How much does local SEO cost?", answer: "Local SEO investment varies based on market competition, number of locations, and scope of work. A single-location business in a moderately competitive market typically starts around $1,500-2,500/month. Multi-location or highly competitive markets require more. We scope every engagement to the actual opportunity, not arbitrary packages." },
      { question: "Can I do local SEO myself?", answer: "You can handle basics like claiming your Google Business Profile and ensuring NAP consistency. But competitive local rankings require technical expertise, ongoing content development, link building relationships, and constant algorithm adaptation. Most businesses find the ROI of professional management far exceeds DIY efforts." },
      { question: "What are the top ranking factors for the Local Pack?", answer: "The top three factors are Relevance (how well your business matches the search query), Distance (proximity to the searcher), and Prominence (your overall online reputation including reviews, links, and citations). The 2026 Whitespark study shows Google Business Profile signals account for 32% of local pack rankings." },
      { question: "Why is my business not showing up on Google Maps?", answer: "Common causes include an unverified or suspended Google Business Profile, incorrect category selection, incomplete profile information, or being outcompeted by businesses closer to the searcher. We audit all these factors and develop a strategy to improve visibility in your target areas." },
      { question: "Does social media affect local SEO?", answer: "Social media doesn't directly impact local rankings, but it contributes to overall brand prominence and can drive reviews, citations, and branded searches—all of which do matter. We view social as part of the broader 360° ecosystem that supports SEO performance." },
      { question: "Do you work with multi-location businesses?", answer: "Yes. We have specific processes for multi-location SEO including location page strategy, internal linking architecture, and scalable content frameworks. Many of our agency partners specialize in franchises and multi-location brands." },
      { question: "What is included in your local SEO service?", answer: "Our comprehensive service includes technical SEO audits, on-page optimization, content strategy and development, link building, citation management, Google Business Profile optimization, and monthly reporting. We customize scope based on market competition and client goals." },
      { question: "How do you handle client communication?", answer: "We operate 100% white-label. All communication flows through you. We provide reports, updates, and talking points. You maintain the client relationship and present the work as your own." },
      { question: "How has the Google Vicinity Update changed local SEO?", answer: "The Vicinity Update made physical proximity the dominant ranking factor. Rankings are now dynamic and change based on where the searcher is standing. This is why cookie-cutter packages fail. We scope every engagement to the actual competitive landscape of each market." },
      { question: "How important are reviews for local rankings?", answer: "Reviews now account for 20% of local ranking factors according to the 2026 Whitespark study, up from 16% in previous years. Review recency, quantity, and response management all matter. We can help implement review generation strategies as part of the engagement." },
      { question: "Do you work with service-area businesses without a physical address?", answer: "We specialize in businesses with verified, address-visible Google Business Profile listings. This includes storefronts, offices, and service-area businesses that display their address. We do not work with address-hidden or service-area-only profiles." },
      { question: "What makes your approach different from package-based providers?", answer: "We scope every engagement to the actual market. A plumber in Boise competes differently than a personal injury lawyer in Chicago. We analyze local competition, proximity dynamics, and search behavior before recommending a strategy. No templates, no one-size-fits-all." },
      { question: "Do you require long-term contracts?", answer: "No. We work month-to-month with a 30-day notice policy. Our retention comes from results, not lock-in agreements. That said, sustainable local SEO requires consistency. Most meaningful results require 3-6 months of focused effort." },
      { question: "Can you help with Google Business Profile suspensions?", answer: "Yes. We have experience recovering suspended GBP listings. The process depends on the suspension reason, but we have successfully restored listings suspended for guideline violations, verification issues, and other common problems." },
      { question: "How do you handle reporting?", answer: "Monthly reports show what moved, not just what we did. We track rankings, organic traffic, GBP insights, and lead indicators. Reports are white-labeled and ready for client presentation. We also provide talking points for your client conversations." },
      { question: "What access do you need from clients?", answer: "We need access to Google Business Profile, website CMS, and ideally Google Analytics and Search Console. We also need timely feedback on content drafts and occasional input for review campaigns. The more responsive the client, the faster we can move." }
    ],
    spokes: [
      {
        title: "On-Page Local Optimization",
        slug: "on-page-local-optimization",
        description: "Location-specific title tags, meta descriptions, schema markup, and content that signals relevance to search engines for every target market.",
        fullDescription: "On-page optimization is where local SEO fundamentals meet strategic execution. We optimize every element that search engines use to understand what your client's pages are about and which geographic areas they serve. From title tags that include target locations to schema markup that tells Google exactly where the business operates, we leave no on-page element unoptimized.",
        benefits: [
          "Improved keyword rankings for location-specific searches",
          "Higher click-through rates from search results",
          "Better understanding by search engines of service areas",
          "Enhanced rich snippet opportunities in SERPs",
          "Foundation for all other local SEO activities"
        ],
        deliverables: [
          "Title tag and meta description optimization for all pages",
          "Header structure optimization (H1-H6)",
          "LocalBusiness schema markup implementation",
          "Image optimization with geo-relevant alt text",
          "Internal linking structure for location pages",
          "NAP consistency audit and fixes"
        ],
        process: [
          "Comprehensive on-page audit of existing site",
          "Keyword mapping to pages and locations",
          "Optimization implementation or detailed instructions",
          "Schema markup deployment and testing",
          "Post-implementation verification and reporting"
        ]
      },
      {
        title: "Technical SEO for Multi-Location",
        slug: "technical-seo-multi-location",
        description: "Site architecture, internal linking, and crawlability fixes that help search engines understand your client's service area hierarchy.",
        fullDescription: "Multi-location businesses face unique technical SEO challenges. How do you structure a site to rank for dozens or hundreds of locations without creating duplicate content issues? How do you help Google understand the relationship between corporate pages and location pages? We've solved these problems across industries from home services to healthcare to retail franchises.",
        benefits: [
          "Clear site hierarchy that search engines can crawl efficiently",
          "No duplicate content penalties across location pages",
          "Proper canonicalization for multi-location content",
          "Faster indexing of new location pages",
          "Scalable structure that grows with the business"
        ],
        deliverables: [
          "Technical SEO audit with prioritized recommendations",
          "Site architecture recommendations or implementation",
          "XML sitemap optimization for locations",
          "Robots.txt optimization",
          "Page speed optimization for Core Web Vitals",
          "Mobile usability fixes"
        ],
        process: [
          "Crawl analysis using enterprise tools",
          "Identification of technical barriers to ranking",
          "Prioritized roadmap based on impact and effort",
          "Implementation or developer-ready specifications",
          "Verification testing and ongoing monitoring"
        ]
      },
      {
        title: "Local Content Strategy",
        slug: "local-content-strategy",
        description: "Service area pages, location-specific blog content, and FAQ sections that capture long-tail local search queries.",
        fullDescription: "Content is what separates local SEO winners from also-rans. We develop content strategies that capture search demand across the entire customer journey, from awareness queries to high-intent 'near me' searches. Every piece of content is designed to serve both users and search engines while building topical authority in your client's industry.",
        benefits: [
          "Capture long-tail search queries competitors miss",
          "Build topical authority in the client's industry",
          "Support link building with linkable content assets",
          "Improve engagement metrics that influence rankings",
          "Create reusable content frameworks for scale"
        ],
        deliverables: [
          "Content audit and gap analysis",
          "Service area page templates and content",
          "Blog content calendar and execution",
          "FAQ content development",
          "Content briefs for client-produced content",
          "Internal linking recommendations"
        ],
        process: [
          "Keyword research and content gap analysis",
          "Content strategy and calendar development",
          "Service area page creation or optimization",
          "Ongoing blog content production",
          "Performance tracking and optimization"
        ]
      },
      {
        title: "Local Link Acquisition",
        slug: "local-link-acquisition",
        description: "Outreach to local publications, sponsorships, and community organizations that build geographic authority signals.",
        fullDescription: "Links remain a critical ranking factor, but for local SEO, the right links matter more than raw quantity. We focus on acquiring links from locally-relevant sources: local news sites, community organizations, industry associations, and business directories that signal geographic relevance to search engines.",
        benefits: [
          "Improved domain authority for local rankings",
          "Geographic relevance signals from local links",
          "Referral traffic from community sources",
          "Brand visibility in local publications",
          "Competitive advantage in link-driven rankings"
        ],
        deliverables: [
          "Link opportunity research and outreach list",
          "Outreach campaign execution",
          "Guest post content creation",
          "Local sponsorship identification",
          "Monthly link acquisition reporting",
          "Competitor backlink analysis"
        ],
        process: [
          "Competitor backlink analysis",
          "Local link opportunity identification",
          "Outreach strategy development",
          "Personalized outreach execution",
          "Content creation for placements",
          "Link tracking and reporting"
        ]
      },
      {
        title: "Keyword Research & Mapping",
        slug: "keyword-research-mapping",
        description: "Comprehensive local keyword discovery, search intent analysis, and strategic mapping to pages for maximum organic visibility.",
        fullDescription: "Effective local SEO starts with understanding what people actually search for in each market. We go beyond basic keyword research to understand search intent, seasonal patterns, and competitive dynamics. Then we map keywords to pages strategically to avoid cannibalization and maximize ranking potential.",
        benefits: [
          "Complete picture of search demand in target markets",
          "Strategic keyword targeting that avoids cannibalization",
          "Understanding of competitive difficulty by keyword",
          "Identification of quick-win opportunities",
          "Foundation for content and optimization strategy"
        ],
        deliverables: [
          "Comprehensive keyword research document",
          "Search volume and difficulty analysis",
          "Keyword-to-page mapping",
          "Content gap identification",
          "Competitor keyword analysis",
          "Priority recommendations by opportunity"
        ],
        process: [
          "Seed keyword identification",
          "Keyword expansion using multiple data sources",
          "Search intent classification",
          "Competitive analysis by keyword",
          "Strategic mapping to existing and needed pages",
          "Priority ranking based on opportunity and effort"
        ]
      },
      {
        title: "Competitor & Market Analysis",
        slug: "competitor-market-analysis",
        description: "Deep analysis of local competitors' strategies, ranking factors, and market opportunities to identify gaps and advantages.",
        fullDescription: "You can't win without knowing who you're up against. We analyze the competitive landscape in every target market—understanding who ranks, why they rank, and where the opportunities exist. This intelligence informs every tactical decision from content to links to technical optimization.",
        benefits: [
          "Clear understanding of competitive dynamics",
          "Identification of competitor weaknesses to exploit",
          "Benchmarks for realistic goal-setting",
          "Strategic insights that inform all tactics",
          "Early warning on competitive threats"
        ],
        deliverables: [
          "Competitor identification and profiling",
          "Ranking analysis by keyword category",
          "Backlink profile comparison",
          "Content gap analysis vs. competitors",
          "Technical comparison and opportunities",
          "Strategic recommendations based on findings"
        ],
        process: [
          "Competitor identification in each market",
          "Multi-dimensional competitive analysis",
          "Strength and weakness assessment",
          "Opportunity identification",
          "Strategic recommendation development",
          "Ongoing competitive monitoring"
        ]
      },
      {
        title: "AEO for Local",
        slug: "aeo-local",
        description: "Answer engine optimization that positions your business for AI-powered search results, voice queries, and featured snippets.",
        fullDescription: "AI-powered search is reshaping how customers find local businesses. ChatGPT, Google's AI Overviews, Perplexity, and voice assistants are increasingly the first touchpoint for local searches. We optimize your clients' content and digital presence to appear in these AI-generated answers—not just traditional search results.",
        benefits: [
          "Visibility in AI-generated search summaries and overviews",
          "Featured snippet capture for voice search queries",
          "Future-proofing against the shift to conversational search",
          "Structured data that AI engines can parse and cite",
          "Competitive advantage as AI search adoption accelerates"
        ],
        deliverables: [
          "AI visibility audit across ChatGPT, Gemini, and Perplexity",
          "Structured data and schema markup optimization",
          "FAQ content development for conversational queries",
          "Entity optimization for knowledge graph inclusion",
          "Voice search keyword integration",
          "Monthly AI visibility tracking and reporting"
        ],
        process: [
          "Baseline audit of current AI search visibility",
          "Competitive AI presence analysis",
          "Schema and structured data implementation",
          "Content optimization for conversational queries",
          "Entity and knowledge graph optimization",
          "Ongoing monitoring and refinement"
        ]
      },
      {
        title: "Analytics & Reporting",
        slug: "analytics-reporting",
        description: "Tracking setup, goal configuration, and monthly performance reporting that connects SEO activity to business outcomes.",
        fullDescription: "Without proper tracking, you can't prove value. We implement comprehensive analytics infrastructure that captures every meaningful user action—from organic visits to calls to form submissions. Then we translate that data into client-ready reports that demonstrate ROI and inform ongoing strategy.",
        benefits: [
          "Clear attribution of SEO efforts to business results",
          "Monthly reports that justify ongoing investment",
          "Data-driven optimization decisions",
          "Goal tracking that captures calls, forms, and conversions",
          "Competitive benchmarking and trend analysis"
        ],
        deliverables: [
          "Google Analytics 4 setup and configuration",
          "Goal and conversion tracking implementation",
          "Call tracking integration",
          "Custom dashboard creation",
          "Monthly performance reports (white-labeled)",
          "Quarterly strategy review presentations"
        ],
        process: [
          "Analytics audit and gap identification",
          "Tracking implementation and verification",
          "Baseline performance documentation",
          "Monthly report generation and delivery",
          "Quarterly performance reviews and strategy refinement"
        ]
      },
      {
        title: "Reputation Management",
        slug: "reputation-management",
        description: "Review generation strategy, response management, and reputation monitoring to build trust and improve local rankings.",
        fullDescription: "Reviews are the new word-of-mouth. They influence rankings, click-through rates, and conversion. We implement systematic review generation campaigns, manage responses professionally, and monitor reputation across platforms to protect and enhance your clients' online presence.",
        benefits: [
          "Increased review volume and improved star ratings",
          "Professional response management that builds trust",
          "Early warning on negative reviews and reputation threats",
          "Improved local pack rankings through review signals",
          "Competitive advantage through social proof"
        ],
        deliverables: [
          "Review generation campaign setup and management",
          "Review response drafting (all platforms)",
          "Reputation monitoring and alerts",
          "Competitor review benchmarking",
          "Monthly reputation reports",
          "Crisis response protocols"
        ],
        process: [
          "Current reputation audit and competitive analysis",
          "Review generation strategy development",
          "Campaign implementation and workflow setup",
          "Ongoing response management",
          "Monthly performance tracking and optimization"
        ]
      }
    ]
  },
  {
    icon: Map,
    title: "GBP SEO",
    slug: "google-maps",
    summary: "Own the local 3-pack and drive calls directly from Google Maps listings.",
    heroDescription: "We help agencies dominate Google Maps results for their clients. From GBP optimization to review management, our white-label GBP services ensure your clients appear prominently when local customers search. The local 3-pack drives 42% of clicks on local search results. We help you own it.",
    whyItMatters: {
      headline: "Why GBP SEO Matters for Local Businesses",
      description: "The local 3-pack appears in 93% of local searches. These three map listings capture the majority of clicks for local intent queries. If your clients are not in the pack, they are invisible to most local searchers.",
      points: [
        { icon: Zap, title: "Direct Response Channel", description: "Maps listings drive calls, directions, and website visits directly from search results. No click-through required." },
        { icon: Users, title: "Trust Through Reviews", description: "Star ratings and review counts build instant credibility. A strong GBP profile converts browsers into callers." },
        { icon: Target, title: "High-Intent Traffic", description: "Someone searching on Maps is looking to buy now. This is the highest-intent traffic in local marketing." }
      ]
    },
    ourApproach: {
      headline: "Our GBP SEO Approach",
      description: "We have optimized thousands of Google Business Profiles across every industry. Here is our proven process:",
      steps: [
        { number: "01", title: "Profile Audit & Optimization", description: "Complete GBP audit covering categories, attributes, services, products, description, and all profile elements that influence visibility." },
        { number: "02", title: "Review Strategy", description: "Systematic review generation campaigns and professional response management that builds trust and improves rankings." },
        { number: "03", title: "Citation Foundation", description: "NAP consistency across 50+ directories and data aggregators that validate business information and build authority." },
        { number: "04", title: "Ongoing Management", description: "Regular posts, Q&A monitoring, photo updates, and continuous optimization based on insights data." },
        { number: "05", title: "Performance Tracking", description: "Weekly ranking checks, monthly reporting, and strategic recommendations based on performance trends." }
      ]
    },
    benefits: {
      headline: "What Your Agency Gets",
      items: [
        "Complete white-label GBP management",
        "Review generation campaigns and response drafting",
        "Citation building and cleanup across 50+ sites",
        "Weekly local pack ranking tracking",
        "Monthly reports with actionable insights",
        "Direct strategist access for questions and updates"
      ]
    },
    faqs: [
      { question: "How do you improve Google Maps rankings?", answer: "Maps rankings depend on three factors: relevance, distance, and prominence. We optimize relevance through category and keyword optimization, build prominence through reviews and citations, and help businesses serve wider areas through strategic content and optimization." },
      { question: "Do you handle review responses?", answer: "Yes. We draft professional responses to all reviews—positive and negative—for your approval before posting. Our responses are designed to build trust with potential customers while addressing any concerns raised." },
      { question: "What about fake or spam reviews?", answer: "We have processes for identifying and reporting fake reviews to Google. While removal isn't guaranteed, we're successful in getting many policy-violating reviews removed. We also help build authentic review volume to dilute any negative impact." },
      { question: "Can you help with suspended listings?", answer: "Yes. We have experience recovering suspended GBP listings. The process depends on the suspension reason, but we've successfully restored listings suspended for guideline violations, verification issues, and other common problems." }
    ],
    spokes: [
      {
        title: "Google Business Profile Management",
        slug: "google-business-profile-management",
        description: "Complete profile optimization including categories, attributes, services, products, and posts that maximize visibility in map results.",
        fullDescription: "Your client's Google Business Profile is their digital storefront on Google Maps. We optimize every element, from primary and secondary categories to business attributes, services, products, and description. A fully optimized profile signals relevance to Google and builds trust with potential customers.",
        benefits: ["Improved visibility in local pack results", "Higher engagement from search browsers", "Better conversion from views to actions", "Competitive advantage over incomplete profiles", "Foundation for all Maps optimization"],
        deliverables: ["Complete GBP audit and optimization", "Category and attribute optimization", "Service and product catalog setup", "Business description optimization", "Photo strategy and management", "Weekly GBP posts"],
        process: ["Profile audit against best practices", "Competitive GBP analysis", "Optimization implementation", "Photo and media optimization", "Ongoing post management", "Performance monitoring"]
      },
      {
        title: "Review Generation & Response",
        slug: "review-generation-response",
        description: "Systematic review acquisition strategies and professional response management that builds trust and improves rankings.",
        fullDescription: "Reviews are the social proof that converts searchers into customers. We implement systematic review generation campaigns that build authentic review volume over time, plus professional response management that demonstrates the business cares about customer feedback.",
        benefits: ["Increased review volume and velocity", "Improved star rating over time", "Better conversion from profile views", "Demonstrated customer care through responses", "Competitive advantage in review metrics"],
        deliverables: ["Review generation campaign setup", "Review request email/SMS templates", "Response drafting for all reviews", "Review monitoring and alerts", "Monthly review performance reports", "Reputation trend analysis"],
        process: ["Review audit and competitive analysis", "Generation campaign strategy", "Template and workflow development", "Ongoing response drafting", "Performance tracking and optimization"]
      },
      {
        title: "Citation Building & Cleanup",
        slug: "citation-building-cleanup",
        description: "NAP consistency across 50+ directories, data aggregators, and industry-specific platforms that validate business legitimacy.",
        fullDescription: "Citations (mentions of your client's business name, address, and phone number) are a core ranking factor for local search. We build and maintain citations across the directories that matter, ensuring NAP consistency that validates business information with Google.",
        benefits: ["Improved local pack rankings", "Consistent business information across the web", "Enhanced trust signals for Google", "Referral traffic from directory listings", "Foundation for local authority"],
        deliverables: ["Citation audit and cleanup", "Core citation building (50+ sites)", "Data aggregator submissions", "Industry-specific directory submissions", "Ongoing citation monitoring", "NAP consistency maintenance"],
        process: ["Current citation audit", "Inconsistency identification and cleanup", "Core directory submissions", "Data aggregator distribution", "Industry directory identification and submission", "Ongoing monitoring and maintenance"]
      },
      {
        title: "Local Pack Ranking Strategy",
        slug: "local-pack-ranking-strategy",
        description: "Proximity optimization, category targeting, and competitive analysis to win positions in the local 3-pack for high-intent searches.",
        fullDescription: "Getting into the local 3-pack requires a strategic approach that addresses all ranking factors. We develop custom strategies based on competitive analysis, market dynamics, and business characteristics to systematically improve pack positions.",
        benefits: ["Higher visibility for money keywords", "More calls and direction requests", "Competitive displacement strategy", "Measurable ranking improvements", "Data-driven optimization"],
        deliverables: ["Local pack ranking audit", "Competitive gap analysis", "Custom ranking strategy", "Implementation roadmap", "Weekly ranking tracking", "Monthly strategy refinement"],
        process: ["Current ranking assessment", "Competitive analysis", "Strategy development", "Tactical implementation", "Performance monitoring", "Ongoing optimization"]
      },
      {
        title: "Photo & Media Optimization",
        slug: "photo-media-optimization",
        description: "Professional photo management, virtual tours, and visual content strategies that increase engagement and click-through rates.",
        fullDescription: "Visual content significantly impacts GBP engagement and conversion. We develop photo strategies that showcase the business professionally, implement virtual tours where appropriate, and manage ongoing photo content to keep profiles fresh and engaging.",
        benefits: ["Higher engagement rates on GBP", "Improved trust and credibility", "Better conversion from views to actions", "Competitive differentiation", "Fresh, updated profile appearance"],
        deliverables: ["Photo audit and recommendations", "Photo optimization and geotagging", "Virtual tour coordination", "Ongoing photo updates", "User photo management", "Visual content calendar"],
        process: ["Current photo audit", "Competitive visual analysis", "Photo strategy development", "Optimization implementation", "Ongoing content management"]
      },
      {
        title: "Multi-Location GBP Management",
        slug: "multi-location-gbp-management",
        description: "Scalable systems for managing dozens or hundreds of locations with consistent branding and optimized performance.",
        fullDescription: "Managing GBP at scale requires different processes than single-location optimization. We've built systems to manage hundreds of locations efficiently while maintaining quality and consistency across every profile.",
        benefits: ["Consistent optimization across all locations", "Scalable processes that don't break", "Centralized reporting and insights", "Efficient multi-location management", "Brand consistency across profiles"],
        deliverables: ["Multi-location audit and strategy", "Bulk optimization implementation", "Centralized management system", "Location-level reporting", "Scalable review management", "Ongoing optimization at scale"],
        process: ["Portfolio audit and assessment", "Scalable process development", "Bulk implementation", "Centralized monitoring setup", "Ongoing management and optimization"]
      }
    ]
  },
  {
    icon: MousePointerClick,
    title: "Paid Media",
    slug: "paid-media",
    summary: "Capture high-intent local searches with campaigns built for calls and form submissions.",
    heroDescription: "We manage Google Ads and Meta Ads campaigns that generate qualified local leads at scale. Our white-label paid media services give agencies the expertise to deliver measurable ROI for their clients without building an internal team. Every campaign is built for conversions, not vanity metrics.",
    whyItMatters: {
      headline: "Why Paid Media Matters for Local Businesses",
      description: "While SEO builds long-term visibility, paid media delivers leads today. For businesses that need immediate results or operate in highly competitive markets, paid advertising is often the fastest path to consistent lead generation.",
      points: [
        { icon: Zap, title: "Immediate Visibility", description: "Start generating leads within days, not months. Paid media fills the pipeline while organic strategies build momentum." },
        { icon: Target, title: "Precise Targeting", description: "Reach exactly the right prospects based on location, demographics, interests, and search intent. No wasted impressions." },
        { icon: TrendingUp, title: "Scalable Growth", description: "When campaigns work, scale them up. Paid media offers controllable, predictable growth that matches business capacity." }
      ]
    },
    ourApproach: {
      headline: "Our Paid Media Approach",
      description: "We build campaigns from the ground up with local lead generation in mind. Here's how we deliver results:",
      steps: [
        { number: "01", title: "Strategy & Structure", description: "Campaign architecture designed for local markets: geographic targeting, keyword strategies, and account structure that maximizes efficiency." },
        { number: "02", title: "Creative Development", description: "Ad copy, extensions, and creative assets built to drive local conversions. We test continuously to improve performance." },
        { number: "03", title: "Landing Page Optimization", description: "Conversion-focused landing pages with local trust signals, click-to-call functionality, and optimized forms." },
        { number: "04", title: "Bid Management", description: "Smart bidding strategies and budget allocation that maximize lead volume within profitability targets." },
        { number: "05", title: "Continuous Optimization", description: "Daily monitoring, weekly optimization, and monthly strategy reviews to continuously improve performance." }
      ]
    },
    benefits: {
      headline: "What Your Agency Gets",
      items: [
        "Complete campaign management across Google and Meta",
        "Landing page development and optimization",
        "Call tracking and lead attribution setup",
        "Weekly optimization and bid management",
        "Monthly ROI reporting for client presentations",
        "Direct access to certified paid media specialists"
      ]
    },
    faqs: [
      { question: "What's your minimum ad spend requirement?", answer: "We recommend a minimum of $2,000/month in ad spend for local campaigns to generate meaningful data and results. However, we work with agencies to determine appropriate budgets based on market competition and client goals." },
      { question: "Do you manage both Google Ads and Meta Ads?", answer: "Yes. We're certified in both platforms and manage campaigns across Google Search, Display, Local Service Ads, and the full Meta ecosystem including Facebook and Instagram." },
      { question: "How do you track and report on ROI?", answer: "We implement call tracking, form tracking, and conversion attribution so you can show clients exactly what their ad spend produces. Our reports connect spend to leads to help justify investment." },
      { question: "What if a campaign isn't performing?", answer: "We monitor campaigns daily and make optimization decisions weekly. If something isn't working, we identify it quickly and pivot. Our goal is always to improve performance, not just maintain it." }
    ],
    spokes: [
      {
        title: "Local Search Campaign Structure",
        slug: "local-search-campaign-structure",
        description: "Service area targeting, location-specific ad groups, and keyword strategies designed for local lead generation economics.",
        fullDescription: "The structure of a paid search campaign determines its ceiling for performance. We build campaign architectures specifically designed for local lead generation, with geographic targeting, keyword organization, and account structure that maximizes Quality Score and conversion efficiency.",
        benefits: ["Higher Quality Scores and lower CPCs", "Better targeting precision", "Easier optimization and scaling", "Cleaner performance data", "Foundation for long-term success"],
        deliverables: ["Campaign structure strategy", "Geographic targeting setup", "Keyword research and organization", "Ad group structure", "Campaign settings optimization", "Audience layer implementation"],
        process: ["Market and competitor analysis", "Keyword research and mapping", "Campaign architecture design", "Build and launch", "Initial optimization period", "Ongoing refinement"]
      },
      {
        title: "Landing Page Optimization",
        slug: "landing-page-optimization",
        description: "Conversion-focused landing pages with local trust signals, click-to-call buttons, and form optimization for maximum lead capture.",
        fullDescription: "Traffic without conversion is wasted spend. We build and optimize landing pages designed specifically for local lead generation, with trust signals, clear calls-to-action, mobile optimization, and forms that convert visitors into leads.",
        benefits: ["Higher conversion rates", "Lower cost per lead", "Better Quality Scores", "Improved mobile experience", "Clear performance attribution"],
        deliverables: ["Landing page design and development", "A/B testing framework", "Form optimization", "Click-to-call implementation", "Trust signal integration", "Page speed optimization"],
        process: ["Current page audit", "Competitive analysis", "New page development or optimization", "A/B testing implementation", "Ongoing conversion optimization"]
      },
      {
        title: "Bid Strategy & Budget Allocation",
        slug: "bid-strategy-budget-allocation",
        description: "Smart bidding configurations and budget pacing that maximize lead volume within client profitability targets.",
        fullDescription: "Bid management is where campaigns are won or lost. We configure smart bidding strategies based on campaign goals, manage budget allocation across campaigns and ad groups, and continuously optimize to maximize lead volume within profitability constraints.",
        benefits: ["Maximized lead volume within budget", "Efficient spend allocation", "Automated optimization at scale", "Data-driven bid decisions", "Profitability-focused management"],
        deliverables: ["Bid strategy selection and configuration", "Budget allocation framework", "ROAS/CPA target setting", "Bid adjustment implementation", "Budget pacing management", "Performance monitoring"],
        process: ["Goal and constraint definition", "Strategy selection", "Initial configuration", "Learning period monitoring", "Ongoing optimization"]
      },
      {
        title: "Call Tracking & Attribution",
        slug: "call-tracking-attribution",
        description: "Call recording, lead scoring, and multi-touch attribution that proves ROI and informs optimization decisions.",
        fullDescription: "For local businesses, phone calls are often the most valuable conversion. We implement call tracking that connects every call to its source, enabling true ROI measurement and data-driven optimization decisions.",
        benefits: ["True ROI measurement", "Call source attribution", "Lead quality insights", "Optimization data", "Client-ready reporting"],
        deliverables: ["Call tracking setup and configuration", "Dynamic number insertion", "Call recording implementation", "Integration with ad platforms", "Attribution modeling", "Call analytics reporting"],
        process: ["Tracking requirements assessment", "Platform selection and setup", "Technical implementation", "Testing and verification", "Reporting configuration"]
      },
      {
        title: "Ad Copy & Extension Testing",
        slug: "ad-copy-extension-testing",
        description: "Continuous A/B testing of headlines, descriptions, callouts, and sitelinks to improve quality scores and conversion rates.",
        fullDescription: "Ad copy is your first impression. We continuously test headlines, descriptions, and extensions to improve click-through rates, Quality Scores, and ultimately conversion rates. Every test is designed to generate actionable insights.",
        benefits: ["Higher click-through rates", "Improved Quality Scores", "Lower cost per click", "Better conversion rates", "Continuous improvement"],
        deliverables: ["Ad copy strategy and development", "Extension creation and optimization", "A/B testing framework", "Performance analysis", "Winning ad identification", "Ongoing creative refresh"],
        process: ["Competitive ad analysis", "Initial ad development", "Testing framework setup", "Ongoing testing and analysis", "Winner implementation and iteration"]
      },
      {
        title: "Negative Keyword Management",
        slug: "negative-keyword-management",
        description: "Ongoing search term analysis and negative keyword refinement to eliminate waste and improve lead quality.",
        fullDescription: "Every dollar spent on irrelevant clicks is a dollar wasted. We maintain aggressive negative keyword management to ensure ad spend goes only toward qualified prospects, improving both efficiency and lead quality.",
        benefits: ["Reduced wasted spend", "Improved lead quality", "Higher conversion rates", "Better ROI", "Cleaner campaign data"],
        deliverables: ["Search term analysis", "Negative keyword lists", "Account-level negatives", "Campaign-level refinement", "Ongoing monitoring", "Waste reduction reporting"],
        process: ["Initial search term audit", "Negative list development", "Implementation across campaigns", "Ongoing search term review", "Continuous refinement"]
      }
    ]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    slug: "email-marketing",
    summary: "Nurture local customers and drive repeat business through strategic email programs.",
    heroDescription: "For local businesses, email turns one-time customers into regulars and keeps the business top-of-mind between visits. We build email programs that respect subscriber expectations, deliver value consistently, and drive repeat revenue for your agency's local business clients.",
    whyItMatters: {
      headline: "Why Email Marketing Matters for Local Businesses",
      description: "Local customers need your client's services periodically, not constantly. Between visits, email keeps the relationship warm, builds authority, and ensures the business is the first call when the need arises.",
      points: [
        { icon: TrendingUp, title: "Highest ROI Channel", description: "Email delivers $42 for every $1 spent on average. For local businesses with repeat customers, that ROI compounds with each return visit." },
        { icon: Users, title: "Top-of-Mind Between Visits", description: "HVAC service once a year. Dental cleanings twice. Email fills the gap, keeping the business present until the next need emerges." },
        { icon: Zap, title: "Repeat Revenue Engine", description: "Automated sequences remind past customers to return, promote seasonal services, and drive bookings without manual effort." }
      ]
    },
    ourApproach: {
      headline: "Our Local Email Marketing Approach",
      description: "We build email programs that nurture relationships, establish authority, and convert when the timing is right:",
      steps: [
        { number: "01", title: "Technical Foundation", description: "Proper opt-in practices, authentication setup, and list hygiene that protect sender reputation and ensure inbox placement." },
        { number: "02", title: "Relationship Nurturing", description: "Content that positions the business as a helpful resource: seasonal tips, maintenance reminders, and local expertise." },
        { number: "03", title: "Stay Top of Mind", description: "Consistent touchpoints that keep the brand present between service visits, so customers remember who to call." },
        { number: "04", title: "Convert When Ready", description: "Targeted offers and timely promotions that drive action when the customer is ready to buy." },
        { number: "05", title: "Build Local Authority", description: "Educational content and community involvement that positions the business as the trusted local expert." }
      ]
    },
    benefits: {
      headline: "What Your Agency Gets",
      items: [
        "Complete email marketing management",
        "Custom template design and development",
        "Automation sequence building",
        "Regular campaign sends",
        "List management and hygiene",
        "Detailed performance reporting"
      ]
    },
    faqs: [
      { question: "Which email platforms do you work with?", answer: "We work with all major platforms including Mailchimp, Klaviyo, ActiveCampaign, HubSpot, Constant Contact, and others. We can work within your client's existing platform or recommend the best fit for their needs." },
      { question: "Do you write the email copy?", answer: "Yes. Our team writes compelling email copy tailored to the audience and goals. We also A/B test subject lines and content to continuously improve performance." },
      { question: "How do you handle list growth?", answer: "We can implement opt-in forms, lead magnets, and list building strategies as part of a comprehensive email program. We also focus on list health to maintain high deliverability." },
      { question: "What about compliance (CAN-SPAM, GDPR)?", answer: "All our email programs are built with compliance in mind. We ensure proper consent, unsubscribe functionality, and data handling that meets regulatory requirements." }
    ],
    spokes: [
      {
        title: "Permission & List Building",
        slug: "permission-list-building",
        description: "Proper opt-in practices and list growth that build quality subscriber relationships from day one.",
        fullDescription: "Permission is foundational. We establish proper opt-in practices, verify existing lists, and build growth strategies that attract engaged local subscribers. Quality over quantity protects sender reputation and maximizes engagement.",
        benefits: ["Strong permission foundation", "Protected sender reputation", "Higher engagement rates", "Reduced spam complaints", "Quality subscriber acquisition"],
        deliverables: ["Permission audit", "Opt-in form optimization", "List verification and cleanup", "Growth strategy development", "Compliance review", "Best practice documentation"],
        process: ["Current list assessment", "Permission gap identification", "Opt-in optimization", "Growth tactic implementation", "Ongoing monitoring"]
      },
      {
        title: "Deliverability & Authentication",
        slug: "deliverability-authentication",
        description: "SPF, DKIM, DMARC configuration and inbox placement optimization that protects sender reputation.",
        fullDescription: "Getting emails into the inbox is the first requirement for success. We configure technical authentication, monitor deliverability metrics, and maintain sender reputation so every email has the best chance of reaching subscribers.",
        benefits: ["Higher inbox placement", "Protected sender reputation", "Reduced spam filtering", "Improved open rates", "Technical compliance"],
        deliverables: ["SPF, DKIM, DMARC setup", "Deliverability audit", "Sender reputation monitoring", "Bounce and complaint management", "Blacklist monitoring", "Technical documentation"],
        process: ["Technical audit", "Authentication configuration", "Monitoring setup", "Ongoing maintenance", "Issue resolution"]
      },
      {
        title: "Subscriber Lifecycle Automation",
        slug: "subscriber-lifecycle-automation",
        description: "Welcome sequences, post-service follow-ups, and re-engagement campaigns that work around the clock.",
        fullDescription: "Automation handles the subscriber lifecycle from first opt-in to re-engagement. Welcome sequences orient new subscribers. Post-service follow-ups request reviews. Re-engagement campaigns win back lapsed customers. All automatically.",
        benefits: ["24/7 subscriber nurturing", "Consistent follow-up", "Review generation integration", "Lapsed customer recovery", "Scalable engagement"],
        deliverables: ["Welcome sequence development", "Post-service automation", "Review request integration", "Re-engagement campaigns", "Lifecycle mapping", "Performance tracking"],
        process: ["Lifecycle mapping", "Sequence strategy", "Email development", "Technical setup", "Testing and launch", "Ongoing optimization"]
      },
      {
        title: "Local Segmentation",
        slug: "local-segmentation",
        description: "Service-based and geographic targeting that delivers relevant offers to the right local customers.",
        fullDescription: "Relevance drives results for local businesses. We segment by service history, location, purchase behavior, and engagement patterns. The right offer reaches the right customer at the right time.",
        benefits: ["Higher engagement rates", "More relevant messaging", "Reduced unsubscribes", "Better conversion rates", "Local market targeting"],
        deliverables: ["Segmentation strategy", "Service-based segments", "Geographic targeting", "Behavioral triggers", "Dynamic content setup", "Segment performance tracking"],
        process: ["Customer data analysis", "Segmentation strategy", "Technical implementation", "Content customization", "Testing and refinement"]
      },
      {
        title: "Campaign Strategy & Design",
        slug: "campaign-strategy-design",
        description: "Seasonal campaigns, service promotions, and brand-consistent templates for local businesses.",
        fullDescription: "Local businesses have seasonal patterns and service-specific opportunities. We develop campaign calendars that align with local market rhythms, design templates that reflect brand standards, and create content that gives subscribers value.",
        benefits: ["Seasonal relevance", "Brand consistency", "Local market alignment", "Higher engagement", "Professional presentation"],
        deliverables: ["Campaign calendar", "Template design", "Seasonal campaign development", "Service promotion sequences", "A/B testing program", "Performance reporting"],
        process: ["Local market analysis", "Calendar development", "Template design", "Content creation", "Testing and optimization"]
      },
      {
        title: "Performance & Inactivity Management",
        slug: "performance-inactivity-management",
        description: "Metrics tracking, list hygiene, and subscriber cleanup that maintains program health.",
        fullDescription: "Healthy email programs require ongoing maintenance. We track key metrics, manage inactive subscribers, and maintain list hygiene. Inactivity management protects deliverability and ensures resources focus on engaged subscribers.",
        benefits: ["Clear performance visibility", "Protected deliverability", "Reduced sending costs", "Higher engagement rates", "Program health maintenance"],
        deliverables: ["Analytics dashboard", "Performance reporting", "Inactivity identification", "Re-engagement sequences", "List pruning protocols", "Ongoing hygiene maintenance"],
        process: ["Tracking setup", "Baseline establishment", "Ongoing monitoring", "Inactivity management", "Regular reporting"]
      }
    ]
  },
  {
    icon: Award,
    title: "Local Authority Building",
    slug: "local-authority-building",
    summary: "Build the off-page signals that make local rankings stick: quality links, citations, and community authority.",
    heroDescription: "We build the off-page signals that make local rankings stick: quality links, strategic citations, and community authority that compounds over time. White-label link building and citation management for agencies serving local businesses.",
    whyItMatters: {
      headline: "Why Local Authority Building Matters",
      description: "Off-page signals are a core ranking factor for local search. Backlinks, citations, and community connections tell Google your client's business is legitimate, relevant, and trusted in their market.",
      points: [
        { icon: Shield, title: "Ranking Stability", description: "Strong backlink profiles create ranking resilience. Sites with real authority recover faster from algorithm updates and resist competitive pressure." },
        { icon: TrendingUp, title: "Compound Growth", description: "Authority builds on itself. Quality links attract more links. Citations reinforce relevance. Each placement makes the next one easier to earn." },
        { icon: Users, title: "Local Visibility That Sticks", description: "Geographic authority signals strengthen local pack and organic positions. Competitors without local link equity struggle to catch up." }
      ]
    },
    ourApproach: {
      headline: "Our Local Authority Building Approach",
      description: "We build authority through strategic, earned efforts focused on local relevance:",
      steps: [
        { number: "01", title: "Authority Audit", description: "Analysis of current backlink profile, citation health, and competitive gaps to identify opportunities." },
        { number: "02", title: "Local Link Acquisition", description: "Strategic outreach to local publications, blogs, and community sites that build geographic relevance." },
        { number: "03", title: "Citation Building", description: "Industry-specific and local directory listings that signal expertise and reinforce NAP consistency." },
        { number: "04", title: "Community Signals", description: "Sponsorships, chamber memberships, and local partnerships that create authentic authority." },
        { number: "05", title: "Anchor Text Management", description: "Natural anchor profiles that maximize ranking power while avoiding over-optimization penalties." }
      ]
    },
    benefits: {
      headline: "What Your Agency Gets",
      items: [
        "Strategic local link acquisition campaigns",
        "Citation building across industry directories",
        "Anchor text diversification and monitoring",
        "Community sponsorship coordination",
        "Monthly authority building reports",
        "Long-term ranking stability"
      ]
    },
    faqs: [
      { question: "How is this different from general link building?", answer: "We focus specifically on local relevance: geographic signals, community connections, and industry-specific placements that move local rankings. Generic link building often misses these critical local authority signals." },
      { question: "How long does it take to see results?", answer: "Initial ranking movement may appear within 2-3 months. Compound effects typically become significant at 6-12 months as authority signals accumulate and reinforce each other." },
      { question: "Can you guarantee specific DA increases?", answer: "We cannot guarantee specific metric thresholds. Domain authority is a third-party estimate, not a Google metric. We focus on earning quality links that actually move rankings." },
      { question: "Do you build citations as part of this service?", answer: "Yes. Structured citations on industry directories and local business listings are a core component of our local authority building approach." }
    ],
    spokes: [
      {
        title: "PR Placement",
        slug: "pr-placement",
        description: "Strategic journalist outreach through Featured.com (formerly HARO), Qwoted, and direct media pitching for earned coverage.",
        fullDescription: "We secure earned media coverage through systematic journalist outreach. Using platforms like Featured.com (formerly HARO) and Qwoted, we connect your clients with journalists actively seeking expert sources. This generates high-authority backlinks and third-party credibility that paid placements cannot replicate.",
        benefits: ["High-authority editorial backlinks", "Third-party credibility and trust", "Brand visibility in respected publications", "Thought leadership positioning", "Organic media relationships over time"],
        deliverables: ["Featured.com/HARO monitoring and response", "Qwoted opportunity identification", "Direct journalist outreach campaigns", "Story angle development", "Quote and source preparation", "Coverage tracking and reporting"],
        process: ["Media opportunity identification", "Story angle and hook development", "Source preparation with client", "Pitch and response execution", "Follow-up and relationship building", "Coverage documentation and link tracking"]
      },
      {
        title: "Local Citations",
        slug: "local-citations",
        description: "Industry-specific directories, general citation platforms, and professional association listings that validate business legitimacy.",
        fullDescription: "Citations build the foundational authority signals that search engines use to validate business legitimacy. We secure placements across industry-specific directories (dental, legal, heavy machinery, etc.), general citation platforms, and professional associations relevant to each client's vertical.",
        benefits: ["Industry-relevant authority signals", "NAP consistency across the web", "Vertical-specific credibility", "Referral traffic from directories", "Foundation for local authority"],
        deliverables: ["Industry directory research and submission", "General citation building (50+ sites)", "Professional association identification", "Data aggregator submissions", "NAP consistency audit and maintenance", "Citation performance tracking"],
        process: ["Industry landscape analysis", "Directory opportunity prioritization", "Application and submission execution", "Profile optimization", "Ongoing monitoring and maintenance", "Performance reporting"]
      },
      {
        title: "Brand Mentions",
        slug: "brand-mentions",
        description: "Strategic presence on Reddit, Quora, and social platforms that builds organic brand visibility and topical relevance.",
        fullDescription: "Brand mentions across discussion platforms create organic signals that search engines increasingly value. We build strategic presence on Reddit, Quora, and relevant social platforms through genuine engagement that positions your clients as helpful resources in their space.",
        benefits: ["Organic brand visibility", "Topical relevance signals", "Community trust building", "Referral traffic from engaged audiences", "Unstructured citation value"],
        deliverables: ["Reddit community identification and engagement", "Quora topic monitoring and responses", "Social platform brand monitoring", "Mention opportunity identification", "Strategic response development", "Brand mention tracking and reporting"],
        process: ["Platform and community research", "Engagement strategy development", "Ongoing monitoring setup", "Strategic response execution", "Mention documentation", "Performance analysis"]
      },
      {
        title: "Guest Posts & Niche Edits",
        slug: "guest-posts-niche-edits",
        description: "Quality content placements and contextual link insertions on relevant industry and local publications.",
        fullDescription: "Guest posting and niche edits provide contextually relevant backlinks from established publications. We secure placements through genuine editorial relationships, creating content that provides value to readers while building your client's authority profile.",
        benefits: ["Contextually relevant backlinks", "Industry publication visibility", "Thought leadership positioning", "Referral traffic potential", "Long-term link equity"],
        deliverables: ["Publication outreach and relationship building", "Guest post content creation", "Niche edit opportunity identification", "Link placement negotiation", "Content quality assurance", "Link tracking and reporting"],
        process: ["Target publication identification", "Outreach and pitch development", "Content creation or edit identification", "Placement negotiation", "Quality verification", "Link documentation and monitoring"]
      },
      {
        title: "Trust-Building Links",
        slug: "trust-building-links",
        description: "Foundational link-building through Web 2.0 properties, document uploads, and manual outreach that establishes baseline authority.",
        fullDescription: "Trust-building links form the foundation of a healthy backlink profile. We execute manual link-building through Web 2.0 platforms, document sharing sites, and other foundational tactics that create the baseline authority every domain needs before more aggressive strategies take effect.",
        benefits: ["Baseline authority establishment", "Diverse link profile foundation", "Supporting signals for higher-authority links", "Consistent link velocity", "Risk-managed link building"],
        deliverables: ["Web 2.0 property creation and linking", "Document uploads (PDF, presentations)", "Social profile establishment", "Foundational directory submissions", "Link velocity management", "Portfolio diversity tracking"],
        process: ["Current profile audit", "Foundation gap identification", "Platform selection and prioritization", "Content creation for placements", "Submission and verification", "Ongoing portfolio maintenance"]
      },
      {
        title: "Local Authority Building",
        slug: "local-authority-building",
        description: "Local associations, community blogs, press releases, and geographic link opportunities that establish regional relevance.",
        fullDescription: "Local authority requires geographic relevance signals that national link building cannot provide. We target local associations, community blogs, chamber of commerce memberships, and Google-embedded press releases that establish your client as a trusted local business.",
        benefits: ["Geographic relevance signals", "Community trust and visibility", "Local publication backlinks", "Association credibility", "Press release distribution value"],
        deliverables: ["Local association identification and outreach", "Community blog placement", "Chamber of commerce submissions", "Press release writing and distribution", "Local sponsorship opportunity research", "Geographic link tracking"],
        process: ["Local opportunity research", "Association and community outreach", "Press release development", "Placement execution", "Link documentation", "Local authority reporting"]
      }
    ]
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    slug: "reporting",
    summary: "Transparent dashboards and white-label reports that prove value and retain clients.",
    heroDescription: "We provide white-label reporting and analytics dashboards that help agencies demonstrate value and retain clients. From rank tracking to ROI analysis, our reporting services give you the data story your clients need to see, presented with your branding and ready for delivery.",
    whyItMatters: {
      headline: "Why Reporting Matters for Client Retention",
      description: "Clients don't leave agencies because of poor results. They leave because they don't understand their results. Clear, consistent reporting is the difference between retained clients and churned accounts.",
      points: [
        { icon: CheckCircle, title: "Prove Your Value", description: "When clients can see exactly what they're getting, they stay. Reports transform abstract services into tangible results." },
        { icon: Users, title: "Build Trust", description: "Transparency builds relationships. Regular reporting demonstrates accountability and keeps clients engaged with their investment." },
        { icon: TrendingUp, title: "Drive Strategy", description: "Good reporting isn't just for clients. It informs your strategy. Data-driven decisions lead to better results for everyone." }
      ]
    },
    ourApproach: {
      headline: "Our Reporting Approach",
      description: "We build reporting that tells the story your clients need to hear:",
      steps: [
        { number: "01", title: "Requirements Gathering", description: "Understanding what matters to each client—the KPIs they care about, the format they prefer, and the story you need to tell." },
        { number: "02", title: "Dashboard Development", description: "Custom-branded dashboards that give clients real-time visibility into the metrics that matter most." },
        { number: "03", title: "Report Design", description: "Monthly reports that combine data with narrative. Not just what happened, but why it matters and what's next." },
        { number: "04", title: "Delivery Setup", description: "Automated delivery schedules that ensure clients receive reports consistently, on time, every time." },
        { number: "05", title: "Continuous Improvement", description: "Ongoing refinement based on client feedback and evolving needs to keep reporting relevant and valuable." }
      ]
    },
    benefits: {
      headline: "What Your Agency Gets",
      items: [
        "Completely white-labeled with your branding",
        "Real-time dashboards clients can access anytime",
        "Monthly reports with executive summaries",
        "Automated delivery on your schedule",
        "Rank tracking and visibility monitoring",
        "ROI and lead attribution reporting"
      ]
    },
    faqs: [
      { question: "Can reports be customized for each client?", answer: "Absolutely. We can customize KPIs, metrics, branding, and format for each client based on their specific needs and preferences. Some clients want detailed data; others prefer executive summaries." },
      { question: "Do clients get live dashboard access?", answer: "Yes. We can set up client-facing dashboards that give them real-time visibility into key metrics. Dashboards are fully branded with your agency's look and feel." },
      { question: "What data sources can you integrate?", answer: "We integrate with Google Analytics, Google Search Console, Google Ads, Meta Ads, call tracking platforms, CRMs, and most major marketing tools. If there's an API, we can usually connect it." },
      { question: "How do you handle client questions about reports?", answer: "We provide you with report walkthroughs and talking points so you can confidently present data to clients. For complex questions, your strategist can provide detailed answers you can relay to clients." }
    ],
    spokes: [
      {
        title: "White-Label Dashboards",
        slug: "white-label-dashboards",
        description: "Custom-branded live dashboards that give clients real-time visibility into campaign performance and key metrics.",
        fullDescription: "Live dashboards give clients immediate access to the metrics that matter, reducing questions and building transparency. Our dashboards are fully branded with your agency identity and designed for clarity.",
        benefits: ["Real-time metric visibility", "Reduced client questions", "Professional presentation", "Your branding throughout", "Client self-service access"],
        deliverables: ["Custom dashboard design", "Data source integration", "Branded interface", "Client access setup", "Training documentation", "Ongoing maintenance"],
        process: ["Requirements gathering", "Data integration", "Dashboard design", "Branding implementation", "Testing and refinement", "Launch and training"]
      },
      {
        title: "Monthly Performance Reports",
        slug: "monthly-performance-reports",
        description: "Comprehensive monthly reports with executive summaries, detailed metrics, and actionable insights delivered on schedule.",
        fullDescription: "Monthly reports tell the story of progress. We combine data with narrative to help clients understand not just what happened, but why it matters and what's planned next.",
        benefits: ["Clear progress documentation", "Client confidence building", "Retention tool", "Strategy alignment", "Professional presentation"],
        deliverables: ["Executive summary", "Detailed metric analysis", "Trend visualization", "Recommendations section", "Competitive context", "Next month preview"],
        process: ["Data collection", "Analysis and insights", "Report creation", "Quality review", "Delivery scheduling", "Follow-up support"]
      },
      {
        title: "Rank Tracking & Visibility",
        slug: "rank-tracking-visibility",
        description: "Daily rank monitoring for target keywords, local pack positions, and organic visibility trends across all locations.",
        fullDescription: "Rank tracking provides the visibility metrics that clients care about most. We monitor positions daily and report trends that demonstrate SEO progress over time.",
        benefits: ["Daily ranking data", "Trend visualization", "Competitive comparison", "Alert on significant changes", "Progress demonstration"],
        deliverables: ["Keyword list setup", "Daily tracking configuration", "Ranking reports", "Visibility trend analysis", "Competitor tracking", "Alert configuration"],
        process: ["Keyword research and selection", "Tracking setup", "Baseline establishment", "Ongoing monitoring", "Regular reporting"]
      },
      {
        title: "Call Tracking & Lead Attribution",
        slug: "call-tracking-lead-attribution",
        description: "Dynamic number insertion, call recording, and multi-touch attribution that connects marketing spend to actual leads.",
        fullDescription: "For local businesses, calls are often the most valuable conversion. Our call tracking connects every call to its marketing source, enabling true ROI measurement.",
        benefits: ["Call source attribution", "Marketing ROI clarity", "Lead quality insights", "Call recording access", "Multi-touch understanding"],
        deliverables: ["Call tracking setup", "Dynamic number implementation", "Recording configuration", "Attribution modeling", "Integration with reporting", "Call analytics dashboard"],
        process: ["Technical assessment", "Platform selection", "Implementation", "Testing and verification", "Integration with reporting", "Ongoing monitoring"]
      },
      {
        title: "ROI & Revenue Analysis",
        slug: "roi-revenue-analysis",
        description: "Closed-loop reporting that ties marketing activities to revenue outcomes and proves the value of your services.",
        fullDescription: "ROI reporting connects marketing spend to business outcomes. When clients can see the revenue their investment generates, retention becomes much easier.",
        benefits: ["Clear ROI demonstration", "Investment justification", "Budget optimization data", "Client confidence", "Renewal support"],
        deliverables: ["ROI framework development", "Revenue tracking setup", "Conversion value assignment", "ROI dashboards", "Monthly ROI reports", "Year-over-year analysis"],
        process: ["Conversion definition", "Value assignment", "Tracking implementation", "Reporting configuration", "Ongoing analysis"]
      },
      {
        title: "Client Presentation Decks",
        slug: "client-presentation-decks",
        description: "Professional slide decks and QBR materials that help you communicate wins and strategic recommendations to clients.",
        fullDescription: "Sometimes clients need more than a report. They need a presentation. We create professional slide decks for quarterly business reviews and strategic discussions.",
        benefits: ["Professional presentation materials", "Client-ready slides", "Strategic narrative support", "QBR preparation", "Win communication"],
        deliverables: ["Presentation template development", "Monthly or quarterly slide updates", "Executive summary slides", "Strategy recommendation slides", "Visual design", "Speaker notes"],
        process: ["Template design", "Data integration", "Narrative development", "Visual polish", "Delivery preparation", "Presentation support"]
      }
    ]
  }
];

export const getHubBySlug = (slug: string): Hub | undefined => {
  return hubs.find(hub => hub.slug === slug);
};

export const getSpokeBySlug = (hubSlug: string, spokeSlug: string): { hub: Hub; spoke: SpokeDetail } | undefined => {
  const hub = getHubBySlug(hubSlug);
  if (!hub) return undefined;
  const spoke = hub.spokes.find(s => s.slug === spokeSlug);
  if (!spoke) return undefined;
  return { hub, spoke };
};
