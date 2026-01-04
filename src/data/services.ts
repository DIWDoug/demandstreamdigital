import { MapPin, Map, MousePointerClick, Mail, Award, BarChart3, Target, TrendingUp, Users, Shield, Zap, CheckCircle, PenTool, FileText, BookOpen, Megaphone, Sparkles, HelpCircle, Layers, Lightbulb } from "lucide-react";
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

export interface HeroDescription {
  intro: string;
  bullets: string[];
  closing: string;
}

export interface Hub {
  icon: LucideIcon;
  title: string;
  slug: string;
  summary: string;
  heroHeadline?: string; // Optional custom headline (defaults to "White-Label {title} Services")
  heroSubtitle?: string; // Optional custom subtitle
  heroDescription: string | HeroDescription;
  integrationNote?: string;
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
    heroDescription: {
      intro: "We help agencies deliver white-label local SEO built around competitive reality, not templated packages.",
      bullets: [
        "No pre-set local SEO packages",
        "No one-size-fits-all deliverables",
        "No guessing what a market actually needs"
      ],
      closing: "Every engagement is scoped to competition, geography, and client goals so execution matches the market, not a price sheet."
    },
    integrationNote: "Local SEO, Google Business Profile optimization, and authority building work hand in hand. Each service can be engaged independently, but they deliver the strongest results when coordinated as a unified local search strategy.",
    whyItMatters: {
      headline: "Why Local SEO Matters for Your Clients",
      description: "76% of consumers who search for 'near me' visit a business within a day. When someone searches for services in their area, your clients need to appear, not their competitors. Local SEO is the foundation of sustainable lead generation for service-area businesses.",
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
        "Trust: Deliverables match scope. Timelines are honored. No surprises.",
        "Clarity: Detailed reports and talking points you can present with confidence",
        "Execution: Work moves forward without you managing it",
        "Direct access to your dedicated strategist for questions and updates",
        "Scalable processes that grow with your agency",
        "No contracts. Results keep you coming back, not lock-in agreements."
      ]
    },
    faqs: [
      { question: "How long does it take to see local SEO results?", answer: "Most campaigns show meaningful movement within 3-4 months, with substantial results by month 6. Competitive markets may take longer, while less competitive areas often see faster wins. We set realistic expectations during discovery based on actual market data." },
      { question: "How much does local SEO cost?", answer: "Local SEO investment varies based on market competition, number of locations, and scope of work. A single-location business in a moderately competitive market typically starts around $1,500-2,500/month. Multi-location or highly competitive markets require more. We scope every engagement to the actual opportunity, not arbitrary packages." },
      { question: "Can I do local SEO myself?", answer: "You can handle basics like claiming your Google Business Profile and ensuring NAP consistency. But competitive local rankings require technical expertise, ongoing content development, link building relationships, and constant algorithm adaptation. Most businesses find the ROI of professional management far exceeds DIY efforts." },
      { question: "What are the top ranking factors for the Local Pack?", answer: "The top three factors are Relevance (how well your business matches the search query), Distance (proximity to the searcher), and Prominence (your overall online reputation including reviews, links, and citations). The 2026 Whitespark study shows Google Business Profile signals account for 32% of local pack rankings." },
      { question: "Why is my business not showing up on Google Maps?", answer: "Common causes include an unverified or suspended Google Business Profile, incorrect category selection, incomplete profile information, or being outcompeted by businesses closer to the searcher. We audit all these factors and develop a strategy to improve visibility in your target areas." },
      { question: "Does social media affect local SEO?", answer: "Social media doesn't directly impact local rankings, but it contributes to overall brand prominence and can drive reviews, citations, and branded searches—all of which do matter. We view social as part of the broader 360° ecosystem that supports SEO performance." },
      { question: "How do AI Overviews affect local SEO?", answer: "AI Overviews pull information from trusted sources including GBP data, review platforms like Yelp and TripAdvisor, and well-structured website content. Our local SEO approach optimizes for both traditional rankings and AI visibility through schema markup, NAP consistency across AI-cited platforms, and content structured for LLM extraction." },
      { question: "Do you work with multi-location businesses?", answer: "Yes. We have specific processes for multi-location SEO including location page strategy, internal linking architecture, and scalable content frameworks. Many of our agency partners specialize in franchises and multi-location brands." },
      { question: "What is included in your local SEO service?", answer: "Our comprehensive service includes technical SEO audits, on-page optimization, keyword strategy with implicit and explicit local intent classification, content development, link building, NAP citation management, and monthly reporting. We customize scope based on market competition and client goals." },
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
        title: "On-Page Optimization",
        slug: "on-page-optimization",
        description: "Visible and technical on-page elements optimized for search engines and user experience across the entire funnel.",
        fullDescription: "On-page optimization is part visible, part technical. We optimize every element search engines use to understand page relevance: header hierarchies following natural language and LSI signals, hub-spoke internal linking, content built around topical authority, and technical markup that earns rich results.",
        benefits: [
          "Improved keyword rankings through semantic relevance and LSI optimization",
          "Higher click-through rates from CTR-focused meta descriptions written like ad copy",
          "Rich snippet eligibility through comprehensive schema markup",
          "Clear topical authority via hub-spoke content architecture",
          "Full-funnel coverage from awareness articles to decision-stage content",
          "Accessibility compliance with descriptive image alt text"
        ],
        deliverables: [
          "Intent-focused title tags (we prioritize intent over arbitrary character limits)",
          "CTR-optimized meta descriptions following Backlinko best practices",
          "Header tag hierarchy (H1-H6) aligned with natural language and LSI",
          "Hub-spoke internal linking structure",
          "Content optimization based on LSI signals and semantic relevance",
          "Image alt text optimization for accessibility and SEO",
          "FAQ content development targeting People Also Ask",
          "Schema markup: LocalBusiness, Organization, Service, FAQ, Testimonials, About",
          "Keyword density analysis where still relevant",
          "Funnel-mapped content: top (awareness), middle (consideration), bottom (decision)"
        ],
        process: [
          "Comprehensive on-page audit using SEMrush methodology",
          "Keyword mapping to pages with intent classification",
          "Header hierarchy and content structure planning",
          "Visible element optimization (titles, metas, headers, content, images)",
          "Technical markup implementation (schema, structured data)",
          "Internal linking architecture execution",
          "Post-implementation verification and ongoing monitoring"
        ]
      },
      {
        title: "Technical SEO",
        slug: "technical-seo",
        description: "Site architecture, crawlability, Core Web Vitals, and indexation fixes that remove barriers to ranking.",
        fullDescription: "Technical SEO issues silently kill rankings. If Google can't crawl, render, and index your content, nothing else matters. We optimize site architecture, fix crawlability issues, eliminate duplicate content, improve page speed, and ensure mobile usability so search engines can fully access and understand every page.",
        benefits: ["Flat, organized site architecture that Google can fully crawl", "Faster page load times through size reduction and optimization", "Zero duplicate content issues through canonical and noindex implementation", "Mobile-first usability that passes Core Web Vitals", "Clean URL structure with logical hierarchy"],
        deliverables: ["Complete technical SEO audit with prioritized fixes", "Site architecture analysis and recommendations", "XML sitemap optimization and validation", "Robots.txt and meta robots configuration", "Core Web Vitals and page speed improvements", "Duplicate content resolution via canonicals and noindex", "Internal linking structure optimization", "Mobile usability issue remediation"],
        process: ["Crawl analysis with Screaming Frog and Search Console", "Site structure and architecture review", "Indexation issue identification and resolution", "Duplicate and thin content remediation", "Page speed optimization", "Mobile usability verification", "Ongoing monitoring and quarterly re-audits"]
      },
      {
        title: "Local Keyword Strategy",
        slug: "local-keyword-strategy",
        description: "Seed keyword development, implicit vs explicit local intent analysis, competitor gap research, and strategic mapping to pages.",
        fullDescription: "Effective local SEO starts with understanding what people actually search for in each market. We identify seed keywords from your services, products, and customer pain points, then expand with location modifiers including cities, neighborhoods, landmarks, and ZIP codes. We distinguish between explicit local keywords ('plumber Dallas') and implicit keywords that trigger the local pack without location terms. Competitor gap analysis reveals terms rivals rank for that you're missing.",
        benefits: ["Complete picture of local search demand per market", "Implicit and explicit local keyword coverage", "Strategic targeting without cannibalization", "Competitor keyword gaps identified and prioritized", "Quick-win opportunities from existing impressions", "Foundation for content and GBP strategy"],
        deliverables: ["Seed keyword development from services, products, and pain points", "Location modifier research including landmarks and ZIP codes", "Implicit vs explicit intent classification", "Local pack trigger analysis", "Competitor keyword gap analysis", "Keyword-to-page mapping with target URLs", "Personal difficulty scoring based on current authority", "Multi-location keyword sets where applicable"],
        process: ["Seed keyword identification from business offerings", "Location modifier research per market", "Keyword expansion and local intent classification", "Competitor gap analysis", "Personal difficulty evaluation", "Strategic mapping to existing and future pages", "Priority ranking by volume, difficulty, and value"]
      },
      {
        title: "Content Development",
        slug: "content-development",
        description: "Service area pages, location-specific blog content, and FAQ sections that capture long-tail local queries.",
        fullDescription: "Content is what separates local SEO winners from also-rans. We develop content strategies that capture search demand across the entire customer journey, from awareness queries to high-intent searches.",
        benefits: ["Capture long-tail queries competitors miss", "Build topical authority", "Support link building efforts", "Improve engagement metrics", "Create reusable content frameworks"],
        deliverables: ["Content audit and gap analysis", "Service area page content", "Blog content calendar and execution", "FAQ content development", "Content briefs", "Internal linking recommendations"],
        process: ["Keyword research and gap analysis", "Content strategy development", "Service area page creation", "Ongoing content production", "Performance tracking"]
      },
      {
        title: "Link Building",
        slug: "link-building",
        description: "Outreach to local publications, sponsorships, and community organizations that build geographic authority.",
        fullDescription: "Links remain a critical ranking factor for local SEO. We focus on acquiring links from locally-relevant sources: local news sites, community organizations, industry associations, and directories that signal geographic relevance.",
        benefits: ["Improved domain authority", "Geographic relevance signals", "Referral traffic from local sources", "Brand visibility in publications", "Competitive advantage"],
        deliverables: ["Link opportunity research", "Outreach campaign execution", "Guest post content creation", "Local sponsorship identification", "Monthly acquisition reporting", "Competitor backlink analysis"],
        process: ["Competitor backlink analysis", "Opportunity identification", "Outreach strategy", "Personalized outreach", "Content creation", "Tracking and reporting"]
      },
      {
        title: "Schema Markup",
        slug: "schema-markup",
        description: "Connected @graph schema with LocalBusiness, Organization, Person, and Service entities that unlocks rich results and AI citations.",
        fullDescription: "Schema markup helps search engines and AI systems understand your client's business without NLP interpretation. We implement connected @graph structures using @id properties to link LocalBusiness, Organization, Person, and Service entities into page-level knowledge graphs. This includes sameAs links to social profiles, knowsAbout properties for topical authority, and rigorous three-step validation before deployment.",
        benefits: ["Page-level knowledge graphs with connected entities", "Rich result eligibility for stars, FAQs, and breadcrumbs", "AI Overview citation accuracy through explicit structured data", "E-E-A-T signals via Person schema with knowsAbout properties", "sameAs validation linking to authoritative external sources", "Reduced NLP guesswork for search engines and LLMs"],
        deliverables: ["Connected schema audit with relationship mapping", "@graph structure with @id entity connections", "LocalBusiness + Organization + Person schema", "Service schema with offers and ratings", "FAQ and Article schema for content pages", "Three-step validation (Schema.org, Rich Results, Classy Schema)", "AI citation verification via LLM testing"],
        process: ["Current schema audit and visualization", "Entity relationship planning", "@graph structure development", "sameAs and knowsAbout implementation", "Three-step validation workflow", "Deployment and Search Console monitoring", "Quarterly audits and AI visibility checks"]
      },
      {
        title: "NAP Citations",
        slug: "nap-citations",
        description: "NAP consistency audits, citation cleanup, and strategic directory submissions that validate business identity.",
        fullDescription: "Citations are mentions of your client's business name, address, and phone number across the web. Consistent NAP data validates business identity with Google and feeds the trusted third-party sources that AI Overviews cite. We audit, clean, and build citations across directories that matter for both traditional local rankings and AI visibility.",
        benefits: ["Improved local pack rankings through NAP consistency", "AI Overview source eligibility via trusted directories", "Enhanced trust signals for Google's local algorithm", "Referral traffic from high-authority directories", "Foundation for local authority building", "Reduced ranking suppression from conflicting data"],
        deliverables: ["Complete NAP audit using citation tools", "Incorrect citation correction and cleanup", "Core citation building across 50+ directories", "Data aggregator submissions (Foursquare, Data Axle, Neustar)", "Industry-specific directory submissions", "AI source audit for Yelp, TripAdvisor, and vertical platforms", "Ongoing NAP monitoring and maintenance"],
        process: ["Current NAP audit with Semrush/BrightLocal", "Inconsistency identification and cleanup", "Core directory submissions", "Data aggregator distribution", "Industry directory submission", "AI visibility verification", "Ongoing monitoring and quarterly re-audits"]
      }
    ]
  },
  {
    icon: Map,
    title: "GBP SEO",
    slug: "google-maps",
    summary: "Own the local 3-pack and drive calls directly from Google Maps listings.",
    heroDescription: {
      intro: "We help agencies earn and hold Google Maps visibility for their clients through white-label GBP optimization built for competitive local markets.",
      bullets: [
        "No cookie-cutter profile setups",
        "No generic posting calendars",
        "No ignoring competitive signals"
      ],
      closing: "Every engagement is scoped to the local pack landscape, category dynamics, and client capacity so execution matches the market."
    },
    integrationNote: "GBP SEO, Local SEO, and Authority Building overlap by design. Engaged independently they create lift, but coordinated they drive durable map pack visibility.",
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
        "Trust: Defined scope, consistent delivery, no silent failures",
        "Clarity: Reports and processes you can explain to clients with confidence",
        "Execution: Work moves forward on schedule without you managing it",
        "Review generation campaigns with response drafting and approval workflows",
        "Citation building and cleanup across 50+ directories",
        "Direct strategist access for questions and real-time updates"
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
        title: "GBP Profile Optimization",
        slug: "gbp-optimization",
        description: "Complete profile optimization including categories, attributes, services, products, and description for maximum visibility and AI citations.",
        fullDescription: "Your client's Google Business Profile is their digital storefront on Google Maps and increasingly the source AI Overviews pull for local recommendations. We optimize every element from primary and secondary categories to business attributes, services, products, and description to maximize visibility in the local pack and AI-generated results.",
        benefits: ["Improved visibility in local pack and AI Overviews", "Higher engagement from searchers through complete profiles", "Better conversion from views to actions", "AI Overview citation eligibility through structured attributes", "Expanded keyword coverage through secondary categories", "Foundation for Maps optimization and AI visibility"],
        deliverables: ["Complete GBP audit and optimization", "Primary and secondary category optimization", "Business attribute maximization for AI extraction", "Service and product catalog with keyword alignment", "Business description optimization for AI parsing", "Profile completeness maximization", "Ongoing profile maintenance"],
        process: ["Profile audit against best practices", "Competitive GBP analysis", "Category expansion research", "Optimization implementation", "AI visibility verification", "Performance monitoring", "Ongoing refinement"]
      },
      {
        title: "Review Generation & Response",
        slug: "review-management",
        description: "Systematic review generation, professional responses, and reputation monitoring across all platforms that matter for rankings and AI visibility.",
        fullDescription: "Reviews account for 20% of local ranking factors and 93% of consumers read local reviews before choosing a business. We implement systematic review generation using proven tactics: 51% of customers leave reviews when asked, but 30% skip reviews because the process is confusing. We eliminate friction with direct links, clear instructions, and multi-channel requests timed to peak satisfaction moments.",
        benefits: [
          "Increased review volume: 51% of customers leave reviews when asked directly",
          "Platform diversification across Google (66%), Facebook (42%), Yelp (36%), and industry sites",
          "Response strategy that exceeds expectations (60% expect response within 2 days)",
          "AI Overview eligibility through Yelp, TripAdvisor, and vertical platforms AI systems cite",
          "Review recency signals: 39% of customers filter for recent reviews first",
          "Trust signals that drive conversion: businesses with 4.5+ stars get 4x more clicks"
        ],
        deliverables: [
          "Review generation campaign with direct links, QR codes, and multiple platform options",
          "Multi-channel request strategy: email (54% prefer), in-person (45%), SMS (29%)",
          "Personalized request templates that convert and reminder sequences",
          "Professional response drafting within 24-48 hours for all reviews",
          "Monthly review performance reports with sentiment analysis",
          "AI platform monitoring for Yelp, TripAdvisor, OpenTable, and industry directories"
        ],
        process: ["Review audit and competitive analysis", "Generation campaign strategy with optimal timing windows", "Multi-channel request system implementation", "Response workflow with brand voice templates", "Performance tracking and monthly strategy refinement"]
      },
      {
        title: "Citation Building & Cleanup",
        slug: "citation-building",
        description: "NAP consistency across 50+ directories, data aggregators, and industry-specific platforms.",
        fullDescription: "Citations are mentions of your client's business name, address, and phone number across the web. We build and maintain citations across the directories that matter, ensuring NAP consistency that validates business information with Google.",
        benefits: ["Improved local pack rankings", "Consistent business information", "Enhanced trust signals for Google", "Referral traffic from directories", "Foundation for local authority"],
        deliverables: ["Citation audit and cleanup", "Core citation building (50+ sites)", "Data aggregator submissions", "Industry-specific directories", "Ongoing citation monitoring", "NAP consistency maintenance"],
        process: ["Current citation audit", "Inconsistency cleanup", "Core directory submissions", "Data aggregator distribution", "Industry directory submission", "Ongoing monitoring"]
      },
      {
        title: "Photo & Media Management",
        slug: "photo-optimization",
        description: "Professional photo management, geotagging, and visual content strategies that increase engagement.",
        fullDescription: "Visual content significantly impacts GBP engagement and conversion. We develop photo strategies that showcase the business professionally and manage ongoing photo content to keep profiles fresh and engaging.",
        benefits: ["Higher engagement rates on GBP", "Improved trust and credibility", "Better conversion from views", "Competitive differentiation", "Fresh profile appearance"],
        deliverables: ["Photo audit and recommendations", "Photo optimization and geotagging", "Cover and logo optimization", "Ongoing photo updates", "User photo management", "Visual content calendar"],
        process: ["Current photo audit", "Competitive visual analysis", "Photo strategy development", "Optimization implementation", "Ongoing content management"]
      },
      {
        title: "Local Pack Strategy",
        slug: "qa-management",
        description: "Service and product gap analysis with topical map matching between GBP and website pages.",
        fullDescription: "The Q&A section of Google Business Profile is often overlooked but influences both rankings and conversions. We proactively seed common questions with helpful answers and monitor for new questions to respond promptly.",
        benefits: ["Capture additional search queries", "Build trust with potential customers", "Control the narrative", "Reduce repetitive customer inquiries", "Competitive differentiation"],
        deliverables: ["Q&A audit and strategy", "Question seeding with answers", "Ongoing Q&A monitoring", "Response drafting for new questions", "Competitor Q&A analysis", "Monthly Q&A reporting"],
        process: ["Current Q&A audit", "Question opportunity identification", "Question seeding implementation", "Monitoring setup", "Ongoing response management"]
      },
      {
        title: "GBP Posting & Content",
        slug: "post-scheduling",
        description: "Posts, offers, and updates to signal activity to Google and engage searchers.",
        fullDescription: "Regular GBP posts signal to Google that the business is active and engaged. We create and schedule weekly posts featuring offers, updates, events, and content that keeps profiles fresh and drives engagement.",
        benefits: ["Active profile signals to Google", "Increased customer engagement", "Promotion of offers and events", "Fresh content for searchers", "Competitive advantage"],
        deliverables: ["Post content calendar", "Weekly post creation", "Offer and event posts", "Image selection and optimization", "Post performance tracking", "Monthly engagement reporting"],
        process: ["Content calendar development", "Post creation and scheduling", "Image optimization", "Performance monitoring", "Calendar refinement"]
      }
    ]
  },
  {
    icon: MousePointerClick,
    title: "Paid Media",
    slug: "paid-media",
    summary: "Capture high-intent local searches with campaigns built for calls and form submissions.",
    heroDescription: {
      intro: "We manage white-label paid media campaigns built around lead economics, not vanity metrics.",
      bullets: [
        "No one-size-fits-all campaign structures",
        "No set-it-and-forget-it management",
        "No hiding behind impressions and clicks"
      ],
      closing: "Every campaign is scoped to market competition, client economics, and conversion goals so spend matches reality, not a budget template."
    },
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
        "Trust: Transparent reporting that connects spend to leads. No hidden metrics.",
        "Clarity: Weekly updates and monthly strategy reviews. You always know what's happening.",
        "Execution: Daily monitoring, weekly optimization. Campaigns improve without you managing them.",
        "Landing page development with conversion tracking built in",
        "Call tracking and lead attribution so ROI is provable",
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
        title: "Google Ads",
        slug: "google-ads",
        description: "Search, display, and Performance Max campaigns built for local lead generation and measurable ROI.",
        fullDescription: "Google Ads remains the highest-intent advertising platform for local businesses. We build and manage search campaigns, display remarketing, and Performance Max strategies specifically designed for local lead generation economics.",
        benefits: ["Highest-intent traffic capture", "Immediate visibility for money keywords", "Scalable lead generation", "Precise geographic targeting", "Measurable cost per lead"],
        deliverables: ["Campaign structure and buildout", "Keyword research and mapping", "Ad copy development", "Extension optimization", "Bid strategy configuration", "Ongoing optimization and reporting"],
        process: ["Market and competitor analysis", "Campaign architecture design", "Build and launch", "Initial optimization period", "Weekly refinement", "Monthly strategy review"]
      },
      {
        title: "Meta Ads",
        slug: "meta-ads",
        description: "Facebook and Instagram campaigns for local awareness, lead generation, and retargeting at scale.",
        fullDescription: "Meta's targeting capabilities make it ideal for local businesses looking to build awareness and generate leads. We manage campaigns across Facebook and Instagram with creative, audience, and placement strategies optimized for local conversions.",
        benefits: ["Broad local awareness building", "Precise demographic targeting", "Visual storytelling capability", "Lower cost per impression", "Strong retargeting performance"],
        deliverables: ["Campaign structure and setup", "Audience research and building", "Creative development", "Placement optimization", "Lead form or landing page strategy", "Performance reporting"],
        process: ["Audience research", "Campaign architecture", "Creative development", "Launch and testing", "Ongoing optimization", "Scale winning combinations"]
      },
      {
        title: "Local Service Ads",
        slug: "local-service-ads",
        description: "Google Guaranteed campaigns that generate calls directly from search results for service businesses.",
        fullDescription: "Local Service Ads put verified businesses at the top of search results with a Google Guarantee badge. We manage LSA campaigns including profile optimization, review management, and bid strategies to maximize call volume for service-area businesses.",
        benefits: ["Top-of-page visibility", "Google Guaranteed trust signal", "Pay-per-lead model", "Direct phone calls from search", "High-intent local prospects"],
        deliverables: ["LSA profile setup and optimization", "Service category configuration", "Review strategy integration", "Budget and bid management", "Lead dispute management", "Performance tracking and reporting"],
        process: ["Eligibility verification", "Profile optimization", "Service area configuration", "Launch and monitoring", "Ongoing bid management", "Lead quality review"]
      },
      {
        title: "Retargeting Campaigns",
        slug: "retargeting-campaigns",
        description: "Display, social, and search remarketing that brings warm prospects back to convert.",
        fullDescription: "Most visitors don't convert on the first visit. Retargeting keeps your client's business in front of interested prospects across Google Display, YouTube, Meta, and search until they're ready to take action.",
        benefits: ["Higher conversion rates from warm traffic", "Lower cost per acquisition", "Extended brand visibility", "Multi-platform reach", "Nurture prospects to conversion"],
        deliverables: ["Audience segmentation strategy", "Retargeting pixel implementation", "Creative development by funnel stage", "Cross-platform campaign setup", "Frequency management", "Attribution reporting"],
        process: ["Audience analysis and segmentation", "Pixel and tracking setup", "Creative strategy development", "Campaign launch", "Performance optimization", "Cross-platform coordination"]
      },
      {
        title: "Landing Page Design",
        slug: "landing-page-design",
        description: "Conversion-focused pages with local trust signals, click-to-call, and form optimization.",
        fullDescription: "Traffic without conversion is wasted spend. We design and build landing pages specifically for local lead generation with trust signals, clear calls-to-action, mobile optimization, and forms that convert visitors into leads.",
        benefits: ["Higher conversion rates", "Lower cost per lead", "Better Quality Scores", "Improved mobile experience", "Clear performance attribution"],
        deliverables: ["Landing page design and development", "A/B testing framework", "Form optimization", "Click-to-call implementation", "Trust signal integration", "Page speed optimization"],
        process: ["Current page audit", "Competitive analysis", "Design and development", "A/B testing implementation", "Ongoing conversion optimization"]
      },
      {
        title: "Conversion Tracking",
        slug: "conversion-tracking",
        description: "Call tracking, form tracking, and multi-touch attribution that proves ROI and informs optimization.",
        fullDescription: "For local businesses, every lead needs to be tracked back to its source. We implement comprehensive conversion tracking including call recording, form submissions, and multi-touch attribution so you can prove ROI and make data-driven decisions.",
        benefits: ["True ROI measurement", "Call and form attribution", "Lead quality insights", "Optimization data", "Client-ready reporting"],
        deliverables: ["Call tracking setup", "Form tracking implementation", "Dynamic number insertion", "Google Tag Manager configuration", "Attribution modeling", "Conversion reporting dashboard"],
        process: ["Tracking requirements assessment", "Platform selection and setup", "Technical implementation", "Testing and verification", "Reporting configuration", "Ongoing maintenance"]
      }
    ]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    slug: "email-marketing",
    summary: "Nurture local customers and drive repeat business through strategic email programs.",
    heroDescription: {
      intro: "We build white-label email programs that turn one-time customers into repeat revenue, not just subscribers.",
      bullets: [
        "No blast-and-pray sending",
        "No ignoring the customer journey",
        "No automation without strategy"
      ],
      closing: "Every program is scoped to customer lifecycle, service frequency, and business goals so emails drive return visits, not unsubscribes."
    },
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
        "Trust: Campaigns sent on schedule with approval workflows. No surprises in client inboxes.",
        "Clarity: Performance reports that show opens, clicks, and revenue. You can explain results with confidence.",
        "Execution: Automation runs 24/7 without you managing it. Sequences work while you sleep.",
        "Custom template design matching client brand guidelines",
        "List management and hygiene that protects deliverability",
        "Review request automation integrated with GBP strategy"
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
        title: "Campaign Strategy",
        slug: "campaign-strategy",
        description: "Editorial calendars, seasonal campaigns, and send cadence planning tailored to local business cycles.",
        fullDescription: "Effective email programs start with strategy. We develop editorial calendars aligned with local business cycles, seasonal opportunities, and customer behavior patterns. Every campaign serves a purpose and fits the bigger picture.",
        benefits: ["Strategic alignment with business goals", "Seasonal opportunity capture", "Consistent send cadence", "Higher engagement through relevance", "Reduced campaign fatigue"],
        deliverables: ["Annual campaign calendar", "Seasonal campaign planning", "Send cadence strategy", "Campaign theme development", "Content angle identification", "Performance goal setting"],
        process: ["Business cycle analysis", "Seasonal opportunity mapping", "Calendar development", "Campaign theme creation", "Ongoing calendar refinement"]
      },
      {
        title: "List Management",
        slug: "list-management",
        description: "Opt-in practices, list hygiene, segmentation, and subscriber cleanup that protects deliverability.",
        fullDescription: "Healthy lists drive healthy results. We establish proper opt-in practices, maintain list hygiene, segment for relevance, and manage inactive subscribers. This protects sender reputation and ensures messages reach engaged audiences.",
        benefits: ["Protected sender reputation", "Higher deliverability rates", "Reduced spam complaints", "More relevant messaging", "Lower sending costs"],
        deliverables: ["Permission audit and cleanup", "Opt-in form optimization", "Segmentation strategy", "Inactive subscriber protocols", "List growth tactics", "Ongoing hygiene maintenance"],
        process: ["Current list assessment", "Permission verification", "Segmentation implementation", "Cleanup protocols", "Ongoing monitoring"]
      },
      {
        title: "Automation Flows",
        slug: "automation-flows",
        description: "Welcome sequences, post-service review requests, win-back campaigns, and behavioral trigger automations.",
        fullDescription: "Automation keeps relationships running around the clock. Welcome sequences orient new subscribers. Post-service sequences request reviews at peak satisfaction moments (51% of customers leave reviews when asked directly). Win-back campaigns recover lapsed customers. All working automatically with personalization that converts.",
        benefits: ["24/7 customer nurturing and review generation", "Review requests timed to peak satisfaction moments", "Personalized messaging using customer name and service details", "Multi-channel support: email primary, SMS fallback (29% prefer text)", "Consistent follow-up execution that customers forget without", "Lapsed customer recovery before they go cold"],
        deliverables: ["Welcome sequence development", "Post-service review request automation with optimal timing", "Direct review links to Google, Facebook, Yelp, or industry sites", "Follow-up reminder sequences (3-7 day cadence)", "Win-back campaigns", "Performance tracking and conversion optimization"],
        process: ["Customer journey mapping with review touchpoints", "Sequence strategy development", "Personalized email content creation", "Review link generation and platform options", "Technical implementation and CRM integration", "Testing, launch, and ongoing optimization"]
      },
      {
        title: "Newsletter Design",
        slug: "newsletter-design",
        description: "Brand-consistent templates, mobile-optimized layouts, and compelling visual design.",
        fullDescription: "Professional design builds credibility. We create brand-consistent templates that look great on every device, load quickly, and drive action. From layout to imagery to typography, every element reinforces the brand and guides the reader.",
        benefits: ["Professional brand presentation", "Mobile-first responsiveness", "Consistent visual identity", "Higher engagement rates", "Improved click-through rates"],
        deliverables: ["Custom template design", "Mobile optimization", "Header and footer templates", "Promotional email templates", "Newsletter templates", "Template documentation"],
        process: ["Brand guidelines review", "Template architecture planning", "Design development", "Cross-device testing", "Template library creation"]
      },
      {
        title: "A/B Testing",
        slug: "ab-testing",
        description: "Subject line testing, send time optimization, and content experiments that improve performance.",
        fullDescription: "Data-driven optimization beats guesswork. We test subject lines, send times, content formats, and calls to action systematically. Each test builds knowledge that compounds into better performance over time.",
        benefits: ["Continuous performance improvement", "Data-driven decisions", "Higher open rates", "Improved click-through rates", "Optimized send timing"],
        deliverables: ["Testing strategy development", "Subject line testing", "Send time optimization", "Content format testing", "CTA testing", "Test result analysis and reporting"],
        process: ["Baseline establishment", "Test hypothesis development", "Test execution", "Results analysis", "Winning variant implementation", "Next test planning"]
      },
      {
        title: "Performance Analytics",
        slug: "performance-analytics",
        description: "Open rates, click rates, conversion tracking, and revenue attribution reporting.",
        fullDescription: "You can't improve what you don't measure. We track every meaningful metric from opens and clicks to conversions and revenue. Reports tell the story of what's working and what needs attention.",
        benefits: ["Clear performance visibility", "Revenue attribution", "Actionable insights", "Trend identification", "ROI demonstration"],
        deliverables: ["Analytics dashboard setup", "Monthly performance reports", "Conversion tracking integration", "Revenue attribution setup", "Trend analysis", "Optimization recommendations"],
        process: ["Tracking implementation", "Baseline establishment", "Ongoing monitoring", "Monthly reporting", "Insight development", "Recommendation delivery"]
      }
    ]
  },
  {
    icon: Award,
    title: "Local Authority Building",
    slug: "local-authority-building",
    summary: "Build the off-page signals that make local rankings stick: quality links, citations, and community authority.",
    heroDescription: {
      intro: "We build white-label authority campaigns that make local rankings stick, not just temporarily improve.",
      bullets: [
        "No low-quality link farms",
        "No ignoring anchor text discipline",
        "No citation blasts without strategy"
      ],
      closing: "Every campaign is scoped to competitive gaps, geographic relevance, and long-term stability so authority compounds, not collapses."
    },
    integrationNote: "Authority Building, Local SEO, and GBP SEO work hand in hand. While each can be engaged independently, they overlap significantly and deliver the strongest results when coordinated as a unified effort.",
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
        "Trust: Ethical, earned links only. No shortcuts that risk client domains.",
        "Clarity: Monthly reports showing links acquired, anchor distribution, and authority growth.",
        "Execution: Outreach runs continuously. Links accumulate without you managing campaigns.",
        "Citation building across industry and local directories",
        "Anchor text diversification to avoid over-optimization penalties",
        "Long-term ranking stability that compounds over time"
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
        title: "Local Links",
        slug: "local-links",
        description: "Strategic link acquisition from local publications, community blogs, and geographic sources that build regional authority.",
        fullDescription: "Local authority requires links with geographic relevance. We target local news sites, community blogs, chamber of commerce sites, and regional publications that signal to search engines your client is a trusted local business.",
        benefits: ["Geographic relevance signals", "Local publication visibility", "Community trust building", "Regional authority establishment", "Competitive differentiation"],
        deliverables: ["Local publication outreach", "Community blog placements", "Local news coverage", "Regional directory submissions", "Geographic link tracking", "Monthly acquisition reporting"],
        process: ["Local opportunity research", "Outreach strategy development", "Relationship building", "Placement execution", "Link documentation", "Performance analysis"]
      },
      {
        title: "Unstructured Citations",
        slug: "unstructured-citations",
        description: "Video, image, audio, Web 2.0, and press release citations that build authority beyond traditional directories.",
        fullDescription: "Unstructured citations are brand mentions embedded in media-rich content rather than structured business listings. Unlike NAP citations in directories, these mentions appear in videos, podcasts, infographics, press releases, and Web 2.0 platforms—signals that search engines and AI systems increasingly value for entity authority.",
        benefits: ["Media-rich authority signals beyond directories", "AI discovery through diverse content formats", "Entity validation across multiple mediums", "Press release syndication visibility", "Web 2.0 platform presence", "Podcast and video mention leverage"],
        deliverables: ["Video citation placement strategy", "Image citation and infographic distribution", "Podcast and audio mention coordination", "Web 2.0 platform profile creation", "Press release syndication", "Unstructured citation tracking and reporting"],
        process: ["Content asset audit", "Platform and channel identification", "Media creation or coordination", "Distribution execution", "Mention documentation", "Performance analysis"]
      },
      {
        title: "Brand Mentions",
        slug: "brand-mentions",
        description: "Strategic presence on Reddit, Quora, and social platforms that builds organic visibility and feeds AI discovery.",
        fullDescription: "Brand mentions across discussion platforms create organic signals that search engines and AI systems increasingly value. We build strategic presence on Reddit, Quora, and relevant social platforms through genuine engagement that positions your clients as helpful resources.",
        benefits: ["Organic brand visibility", "AI discovery signals", "Community trust building", "Topical relevance signals", "Unstructured citation value"],
        deliverables: ["Reddit community engagement", "Quora topic responses", "Social platform monitoring", "Mention opportunity identification", "Strategic response development", "Brand mention tracking"],
        process: ["Platform research", "Engagement strategy", "Monitoring setup", "Response execution", "Documentation", "Performance analysis"]
      },
      {
        title: "Anchor Text",
        slug: "anchor-text",
        description: "Natural anchor text distribution and diversification that maximizes ranking power without over-optimization.",
        fullDescription: "Anchor text strategy determines whether links help or hurt. We manage anchor text distribution across all link building efforts to maintain natural profiles that maximize ranking power while avoiding over-optimization penalties.",
        benefits: ["Natural link profile appearance", "Maximized ranking power", "Penalty risk avoidance", "Strategic keyword targeting", "Long-term profile health"],
        deliverables: ["Anchor text audit", "Distribution strategy", "Target anchor planning", "Ongoing profile monitoring", "Competitor anchor analysis", "Monthly profile reporting"],
        process: ["Current profile analysis", "Competitor benchmarking", "Strategy development", "Implementation guidelines", "Ongoing monitoring", "Quarterly review"]
      },
      {
        title: "Sponsorships",
        slug: "sponsorships",
        description: "Local event sponsorships, charity partnerships, and community involvement that generate authentic authority signals.",
        fullDescription: "Sponsorships create authentic community connections that generate high-quality backlinks and brand visibility. We identify and coordinate local event sponsorships, charity partnerships, and community involvement opportunities that build genuine local authority.",
        benefits: ["Authentic community connection", "High-quality sponsorship links", "Local brand visibility", "Community goodwill", "PR opportunities"],
        deliverables: ["Sponsorship opportunity research", "Outreach and coordination", "Link placement verification", "Event participation support", "Coverage documentation", "ROI tracking"],
        process: ["Opportunity identification", "Value assessment", "Outreach execution", "Sponsorship coordination", "Link verification", "Performance reporting"]
      },
      {
        title: "Reputation Signals",
        slug: "reputation-signals",
        description: "Review generation, testimonial placements, and trust signals that reinforce authority and credibility.",
        fullDescription: "Reputation signals reinforce authority through social proof. We implement review generation strategies, secure testimonial placements, and build trust signals across platforms that search engines use to assess business credibility and prominence.",
        benefits: ["Enhanced trust signals", "Review volume growth", "Third-party credibility", "Prominence factor improvement", "Conversion rate support"],
        deliverables: ["Review generation strategy", "Testimonial outreach", "Trust badge implementation", "Review platform optimization", "Reputation monitoring", "Monthly reputation reporting"],
        process: ["Current reputation audit", "Strategy development", "Campaign implementation", "Ongoing monitoring", "Response management", "Performance tracking"]
      }
    ]
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    slug: "reporting",
    summary: "Transparent dashboards and white-label reports that prove value and retain clients.",
    heroDescription: {
      intro: "We build white-label reporting that proves value and retains clients, not just displays data.",
      bullets: [
        "No data dumps without narrative",
        "No vanity metrics that obscure results",
        "No reports clients don't understand"
      ],
      closing: "Every dashboard is scoped to client priorities, KPIs that matter, and the story you need to tell so reporting drives retention, not confusion."
    },
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
        "Trust: Consistent, on-time delivery. Reports arrive when expected, every time.",
        "Clarity: Data presented in plain language. You can explain results without translating jargon.",
        "Execution: Dashboards update automatically. Reports generate without manual effort.",
        "Real-time dashboards clients can access anytime with your branding",
        "Talking points for every report so client conversations go smoothly",
        "ROI and lead attribution that proves your value"
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
  },
  // CONTENT MARKETING HUB
  {
    icon: PenTool,
    title: "Content Marketing",
    slug: "content-marketing",
    summary: "Strategic content that ranks, converts, and positions your clients as local market leaders.",
    heroDescription: {
      intro: "We help agencies deliver white-label content marketing built around strategy, not word counts.",
      bullets: [
        "No generic blog posts",
        "No AI-generated filler content",
        "No content without conversion purpose"
      ],
      closing: "Every piece is scoped to drive rankings, capture leads, or build authority—not just check a box."
    },
    integrationNote: "Content marketing powers every other channel. Strategic content supports SEO, feeds email campaigns, and builds the authority that makes paid media more effective.",
    whyItMatters: {
      headline: "Why Content Marketing Matters for Your Clients",
      description: "Content is the foundation of digital visibility. Without strategic content, local businesses cannot rank, cannot capture leads, and cannot demonstrate the expertise that earns customer trust.",
      points: [
        { icon: Target, title: "Capture Search Demand", description: "Strategic content captures the queries your client's customers are searching. Every piece is an opportunity to rank and convert." },
        { icon: TrendingUp, title: "Compound Authority Over Time", description: "Content builds on itself. Each piece strengthens topical authority and creates opportunities for internal linking and lead capture." },
        { icon: Shield, title: "Own the Conversation", description: "When competitors have thin content, strategic depth becomes a moat. Content leadership is defensible competitive advantage." }
      ]
    },
    ourApproach: {
      headline: "Our Content Marketing Approach",
      description: "We've refined our process across hundreds of content campaigns. Here's how we deliver results for your clients:",
      steps: [
        { number: "01", title: "Content Audit & Strategy", description: "We analyze existing content, identify gaps, map competitor coverage, and develop a strategy aligned with business goals." },
        { number: "02", title: "Keyword & Topic Mapping", description: "Hub-and-spoke topic architecture, keyword targeting with intent classification, and content calendar development." },
        { number: "03", title: "Core Content Build", description: "Service pages, geographical content, power posts, and FAQ content that captures search demand across the customer journey." },
        { number: "04", title: "Lead Magnet Development", description: "E-books, guides, checklists, and tools that convert visitors into email subscribers and qualified leads." },
        { number: "05", title: "Performance & Iteration", description: "Monthly analysis, content refresh programs, and continuous optimization based on ranking and conversion data." }
      ]
    },
    benefits: {
      headline: "What Your Agency Gets",
      items: [
        "Trust: Content that ranks and converts, not just fills a calendar",
        "Clarity: Detailed briefs and strategy documentation you can present to clients",
        "Execution: Work moves forward without you managing writers",
        "Direct access to your dedicated content strategist",
        "Scalable processes that grow with your agency",
        "No contracts. Results keep you coming back, not lock-in agreements."
      ]
    },
    faqs: [
      { question: "How long does it take to see results from content marketing?", answer: "Initial ranking movement typically appears within 2-3 months. Lead generation can begin immediately with lead magnets. Compound effects become significant at 6-12 months as content authority builds." },
      { question: "How many pieces of content do you produce per month?", answer: "We scope based on strategy, not arbitrary quotas. Some clients need 2 power posts. Others need 20 service area pages. We recommend based on gaps and goals, not volume targets." },
      { question: "Do you write the content or do clients provide it?", answer: "We handle all writing. We conduct intake interviews to capture client expertise, then create content that reflects their voice and knowledge. Client review is part of the process." },
      { question: "How do you handle content for multiple locations?", answer: "We create unique, locally relevant content for each service area. No duplicate content with city names swapped. Each page provides genuine local value and targets location-specific keywords." },
      { question: "What makes your content AI-optimized?", answer: "Semantic structure, clear headings, FAQ schema, and authoritative depth. We structure content so AI systems can parse, understand, and cite it in AI Overviews and LLM responses." },
      { question: "Do you require long-term contracts?", answer: "No. We work month-to-month with a 30-day notice policy. Content compounds over time, so we recommend 6+ month commitments, but results keep you coming back—not contracts." },
      { question: "How does white-label content delivery work?", answer: "All content is delivered under your brand. We can publish directly to client sites or deliver via shared drives. You maintain the client relationship and present the work as your own." }
    ],
    spokes: [
      {
        title: "Geographical Content",
        slug: "geographical-content",
        description: "Service area pages and city-specific content that captures local search intent.",
        fullDescription: "Local businesses need local content. We create unique, valuable pages for every service area that capture 'near me' and city-specific searches while avoiding doorway page penalties.",
        benefits: ["Rank in every target city", "Capture 'near me' searches", "Build geographic authority", "Avoid duplicate content penalties", "Support local pack rankings"],
        deliverables: ["Service area page content", "City-specific landing pages", "Neighborhood content where relevant", "Local schema markup", "Internal linking architecture", "Geographic keyword targeting"],
        process: ["Service area mapping", "Keyword research per location", "Unique content development", "Local schema implementation", "Internal linking setup", "Performance tracking"]
      },
      {
        title: "Topical Content",
        slug: "topical-content",
        description: "Industry expertise articles that build authority and answer customer questions.",
        fullDescription: "Topical content demonstrates expertise and captures informational queries. We create articles that position your client as the authority Google trusts for their industry.",
        benefits: ["Build topical authority", "Capture long-tail queries", "Support E-E-A-T signals", "Create internal linking opportunities", "Feed social and email channels"],
        deliverables: ["Industry expertise articles", "How-to guides", "Educational content", "Comparison content", "Seasonal/timely content", "Content refresh updates"],
        process: ["Topic cluster mapping", "Keyword research", "Content brief development", "Writing and optimization", "Internal linking", "Performance tracking"]
      },
      {
        title: "Power Posts",
        slug: "power-posts",
        description: "Comprehensive pillar content that dominates competitive keywords.",
        fullDescription: "Power posts are definitive resources on high-value topics. These 2,000-5,000+ word pieces become the hub of topic clusters and earn links, rankings, and authority.",
        benefits: ["Dominate competitive keywords", "Earn natural backlinks", "Establish definitive authority", "Support hub-and-spoke architecture", "Create evergreen assets"],
        deliverables: ["Comprehensive pillar content", "Visual elements and graphics", "Internal linking structure", "FAQ sections", "Schema markup", "Content promotion plan"],
        process: ["Competitive analysis", "Outline development", "Comprehensive writing", "Visual creation", "Optimization", "Promotion and link building"]
      },
      {
        title: "E-books & Guides",
        slug: "ebooks-guides",
        description: "Long-form downloadable content that captures leads and demonstrates expertise.",
        fullDescription: "E-books and guides are premium content assets that capture email addresses while demonstrating deep expertise. They're the cornerstone of content-driven lead generation.",
        benefits: ["Capture qualified leads", "Demonstrate expertise", "Build email lists", "Support nurture campaigns", "Create repurposable content"],
        deliverables: ["E-book content writing", "Professional design", "Landing page copy", "Email sequence integration", "Lead magnet funnel", "Promotion strategy"],
        process: ["Topic selection", "Outline and structure", "Content development", "Design and formatting", "Landing page creation", "Funnel integration"]
      },
      {
        title: "Lead Generation Magnets",
        slug: "lead-magnets",
        description: "Checklists, templates, and tools that convert visitors into email subscribers.",
        fullDescription: "Lead magnets are quick-value assets that capture email addresses. Checklists, templates, calculators, and tools that solve immediate problems while building your client's list.",
        benefits: ["High conversion rates", "Low production cost", "Quick implementation", "Segment subscribers", "Support automation"],
        deliverables: ["Checklist development", "Template creation", "Tool design", "Landing page copy", "Thank you page optimization", "Email integration"],
        process: ["Magnet concept development", "Content creation", "Design and formatting", "Landing page setup", "Automation integration", "A/B testing"]
      },
      {
        title: "Press Releases",
        slug: "press-releases",
        description: "Newsworthy announcements distributed to media outlets and news aggregators.",
        fullDescription: "Press releases distribute newsworthy announcements to media outlets, news aggregators, and industry publications. They build brand visibility and create citation opportunities.",
        benefits: ["Media visibility", "Citation building", "Brand awareness", "Authority signals", "News aggregator inclusion"],
        deliverables: ["Press release writing", "Distribution strategy", "Media list development", "Follow-up outreach", "Coverage tracking", "Citation documentation"],
        process: ["News angle development", "Press release writing", "Distribution execution", "Media follow-up", "Coverage monitoring", "Citation tracking"]
      },
      {
        title: "AIO Content",
        slug: "aio-content",
        description: "AI-optimized content structured for LLM citations and AI Overview inclusion.",
        fullDescription: "AIO (AI Optimization) content is structured for AI systems to parse, understand, and cite. As AI Overviews and LLM-powered search grow, content must be optimized for these new visibility channels.",
        benefits: ["AI Overview inclusion", "LLM citation eligibility", "Future-proof content", "Semantic structure", "Voice search optimization"],
        deliverables: ["Semantic content structure", "FAQ schema implementation", "Clear heading hierarchies", "Authoritative depth", "Entity optimization", "Citation-friendly formatting"],
        process: ["AI visibility audit", "Content restructuring", "Schema implementation", "Authority building", "Performance monitoring", "Ongoing optimization"]
      },
      {
        title: "Case Studies",
        slug: "case-studies",
        description: "Success stories that build trust and demonstrate real-world results.",
        fullDescription: "Case studies are proof assets that document real results. They build trust, support sales conversations, and demonstrate the outcomes your client's services deliver.",
        benefits: ["Build prospect trust", "Support sales process", "Document results", "Create social proof", "Enable client testimonials"],
        deliverables: ["Client interview", "Case study writing", "Visual design", "Testimonial extraction", "Distribution strategy", "Sales enablement"],
        process: ["Client selection", "Interview and research", "Story development", "Design and formatting", "Client approval", "Distribution"]
      },
      {
        title: "FAQ Content",
        slug: "faq-content",
        description: "Structured Q&A content that captures featured snippets and voice search.",
        fullDescription: "FAQ content captures question-based queries and earns featured snippets. Structured Q&A content is also essential for voice search and AI systems that answer user questions.",
        benefits: ["Featured snippet eligibility", "Voice search optimization", "AI visibility", "User experience improvement", "Long-tail keyword capture"],
        deliverables: ["FAQ research and development", "Structured Q&A content", "FAQ schema markup", "Page integration", "Internal linking", "Performance tracking"],
        process: ["Question research", "Answer development", "Schema implementation", "Page integration", "Snippet optimization", "Ongoing expansion"]
      },
      {
        title: "Hub & Spoke Build-outs",
        slug: "hub-spoke-buildouts",
        description: "Strategic content architecture that maximizes topical authority.",
        fullDescription: "Hub-and-spoke content architecture organizes content into topic clusters with pillar pages at the center. This structure maximizes topical authority and creates clear paths for users and search engines.",
        benefits: ["Maximize topical authority", "Clear content organization", "Strategic internal linking", "User experience improvement", "Scalable content framework"],
        deliverables: ["Topic cluster mapping", "Pillar page development", "Supporting content creation", "Internal linking architecture", "Content gap analysis", "Expansion roadmap"],
        process: ["Topic cluster identification", "Pillar page creation", "Spoke content development", "Internal linking implementation", "Performance analysis", "Ongoing expansion"]
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
