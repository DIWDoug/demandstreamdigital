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
    heroDescription: "We help agencies deliver comprehensive local SEO services that drive organic visibility, qualified traffic, and measurable results for their clients. Our white-label local SEO fulfillment covers everything from on-page optimization to link building, executed with the precision your agency reputation demands.",
    integrationNote: "Local SEO, GBP SEO, and Authority Building work hand in hand. While each can be engaged independently, they overlap significantly and deliver the strongest results when coordinated as a unified effort.",
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
        title: "On-Page Optimization",
        slug: "on-page-optimization",
        description: "Location-specific title tags, meta descriptions, headers, and content that signals relevance for every target market.",
        fullDescription: "On-page optimization is where local SEO fundamentals meet strategic execution. We optimize every element that search engines use to understand what your client's pages are about and which geographic areas they serve.",
        benefits: ["Improved keyword rankings for location-specific searches", "Higher click-through rates from search results", "Better understanding by search engines of service areas", "Enhanced rich snippet opportunities", "Foundation for all other local SEO activities"],
        deliverables: ["Title tag and meta description optimization", "Header structure optimization (H1-H6)", "Image optimization with geo-relevant alt text", "Internal linking structure", "NAP consistency audit and fixes", "Content optimization for target keywords"],
        process: ["Comprehensive on-page audit", "Keyword mapping to pages", "Optimization implementation", "Post-implementation verification", "Ongoing monitoring"]
      },
      {
        title: "Technical SEO Audits",
        slug: "technical-seo-audits",
        description: "Site architecture, crawlability, Core Web Vitals, and technical fixes that remove barriers to ranking.",
        fullDescription: "Technical SEO issues silently kill rankings. We audit site architecture, crawlability, page speed, mobile usability, and indexation to identify and fix the technical barriers preventing your clients from ranking.",
        benefits: ["Clear site hierarchy for search engines", "Faster page load times", "Improved mobile experience", "Better crawl efficiency", "Scalable structure for growth"],
        deliverables: ["Technical SEO audit with priorities", "Site architecture recommendations", "XML sitemap optimization", "Robots.txt optimization", "Core Web Vitals improvements", "Mobile usability fixes"],
        process: ["Crawl analysis", "Technical barrier identification", "Prioritized roadmap", "Implementation or specifications", "Verification and monitoring"]
      },
      {
        title: "Local Keyword Strategy",
        slug: "local-keyword-strategy",
        description: "Comprehensive local keyword discovery, search intent analysis, and strategic mapping to pages.",
        fullDescription: "Effective local SEO starts with understanding what people actually search for in each market. We go beyond basic keyword research to understand search intent, seasonal patterns, and competitive dynamics, then map keywords strategically.",
        benefits: ["Complete picture of search demand", "Strategic targeting without cannibalization", "Understanding of competitive difficulty", "Quick-win opportunity identification", "Foundation for content strategy"],
        deliverables: ["Comprehensive keyword research", "Search volume and difficulty analysis", "Keyword-to-page mapping", "Content gap identification", "Competitor keyword analysis", "Priority recommendations"],
        process: ["Seed keyword identification", "Keyword expansion", "Search intent classification", "Competitive analysis", "Strategic mapping", "Priority ranking"]
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
        description: "LocalBusiness, Service, FAQ, and Review schema implementation that enhances search visibility.",
        fullDescription: "Schema markup helps search engines understand your client's business and can unlock rich snippets in search results. We implement LocalBusiness, Service, FAQ, and Review schema to maximize visibility and click-through rates.",
        benefits: ["Enhanced search result appearance", "Rich snippet eligibility", "Better search engine understanding", "Improved click-through rates", "Competitive differentiation in SERPs"],
        deliverables: ["Schema audit and recommendations", "LocalBusiness schema implementation", "Service schema markup", "FAQ schema for key pages", "Review schema integration", "Schema testing and validation"],
        process: ["Current schema audit", "Opportunity identification", "Schema development", "Implementation", "Testing and validation", "Ongoing monitoring"]
      }
    ]
  },
  {
    icon: Map,
    title: "GBP SEO",
    slug: "google-maps",
    summary: "Own the local 3-pack and drive calls directly from Google Maps listings.",
    heroDescription: "We help agencies dominate Google Maps results for their clients. From GBP optimization to review management, our white-label GBP services ensure your clients appear prominently when local customers search. The local 3-pack drives 42% of clicks on local search results. We help you own it.",
    integrationNote: "GBP SEO, Local SEO, and Authority Building work hand in hand. While each can be engaged independently, they overlap significantly and deliver the strongest results when coordinated as a unified effort.",
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
        title: "GBP Optimization",
        slug: "gbp-optimization",
        description: "Complete profile optimization including categories, attributes, services, products, and description for maximum visibility.",
        fullDescription: "Your client's Google Business Profile is their digital storefront on Google Maps. We optimize every element from primary and secondary categories to business attributes, services, products, and description to maximize visibility and conversions.",
        benefits: ["Improved visibility in local pack", "Higher engagement from searchers", "Better conversion from views to actions", "Competitive advantage", "Foundation for Maps optimization"],
        deliverables: ["Complete GBP audit and optimization", "Category and attribute optimization", "Service and product catalog setup", "Business description optimization", "Profile completeness maximization", "Ongoing profile maintenance"],
        process: ["Profile audit against best practices", "Competitive GBP analysis", "Optimization implementation", "Performance monitoring", "Ongoing refinement"]
      },
      {
        title: "Review Management",
        slug: "review-management",
        description: "Systematic review generation strategies and professional response management that builds trust and rankings.",
        fullDescription: "Reviews are the social proof that converts searchers into customers. We implement systematic review generation campaigns and professional response management that demonstrates the business cares about customer feedback.",
        benefits: ["Increased review volume and velocity", "Improved star rating over time", "Better conversion from profile views", "Demonstrated customer care", "Competitive advantage in review metrics"],
        deliverables: ["Review generation campaign setup", "Review request templates", "Response drafting for all reviews", "Review monitoring and alerts", "Monthly review performance reports", "Reputation trend analysis"],
        process: ["Review audit and competitive analysis", "Generation campaign strategy", "Template and workflow development", "Ongoing response drafting", "Performance tracking"]
      },
      {
        title: "Citation Building",
        slug: "citation-building",
        description: "NAP consistency across 50+ directories, data aggregators, and industry-specific platforms.",
        fullDescription: "Citations are mentions of your client's business name, address, and phone number across the web. We build and maintain citations across the directories that matter, ensuring NAP consistency that validates business information with Google.",
        benefits: ["Improved local pack rankings", "Consistent business information", "Enhanced trust signals for Google", "Referral traffic from directories", "Foundation for local authority"],
        deliverables: ["Citation audit and cleanup", "Core citation building (50+ sites)", "Data aggregator submissions", "Industry-specific directories", "Ongoing citation monitoring", "NAP consistency maintenance"],
        process: ["Current citation audit", "Inconsistency cleanup", "Core directory submissions", "Data aggregator distribution", "Industry directory submission", "Ongoing monitoring"]
      },
      {
        title: "Photo Optimization",
        slug: "photo-optimization",
        description: "Professional photo management, geotagging, and visual content strategies that increase engagement.",
        fullDescription: "Visual content significantly impacts GBP engagement and conversion. We develop photo strategies that showcase the business professionally and manage ongoing photo content to keep profiles fresh and engaging.",
        benefits: ["Higher engagement rates on GBP", "Improved trust and credibility", "Better conversion from views", "Competitive differentiation", "Fresh profile appearance"],
        deliverables: ["Photo audit and recommendations", "Photo optimization and geotagging", "Cover and logo optimization", "Ongoing photo updates", "User photo management", "Visual content calendar"],
        process: ["Current photo audit", "Competitive visual analysis", "Photo strategy development", "Optimization implementation", "Ongoing content management"]
      },
      {
        title: "Q&A Management",
        slug: "qa-management",
        description: "Proactive question seeding, answer management, and monitoring that builds trust and captures search queries.",
        fullDescription: "The Q&A section of Google Business Profile is often overlooked but influences both rankings and conversions. We proactively seed common questions with helpful answers and monitor for new questions to respond promptly.",
        benefits: ["Capture additional search queries", "Build trust with potential customers", "Control the narrative", "Reduce repetitive customer inquiries", "Competitive differentiation"],
        deliverables: ["Q&A audit and strategy", "Question seeding with answers", "Ongoing Q&A monitoring", "Response drafting for new questions", "Competitor Q&A analysis", "Monthly Q&A reporting"],
        process: ["Current Q&A audit", "Question opportunity identification", "Question seeding implementation", "Monitoring setup", "Ongoing response management"]
      },
      {
        title: "Post Scheduling",
        slug: "post-scheduling",
        description: "Weekly GBP posts with offers, updates, and events that keep profiles active and engaging.",
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
    heroDescription: "For local businesses, email turns one-time customers into regulars and keeps the business top-of-mind between visits. We build email programs that deliver value consistently and drive repeat revenue for your agency's local business clients.",
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
        description: "Welcome sequences, post-service follow-ups, win-back campaigns, and review request automations.",
        fullDescription: "Automation keeps the relationship going around the clock. Welcome sequences orient new subscribers. Post-service follow-ups request reviews. Win-back campaigns bring lapsed customers home. All working automatically while you focus on other priorities.",
        benefits: ["24/7 customer nurturing", "Consistent follow-up execution", "Review generation integration", "Lapsed customer recovery", "Scalable engagement"],
        deliverables: ["Welcome sequence development", "Post-service automation", "Review request integration", "Win-back campaigns", "Customer journey mapping", "Performance tracking"],
        process: ["Customer journey mapping", "Sequence strategy development", "Email content creation", "Technical implementation", "Testing and launch", "Ongoing optimization"]
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
    heroDescription: "We build the off-page signals that make local rankings stick: quality links, strategic citations, and community authority that compounds over time. White-label link building and citation management for agencies serving local businesses.",
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
        title: "Local Links",
        slug: "local-links",
        description: "Strategic link acquisition from local publications, community blogs, and geographic sources that build regional authority.",
        fullDescription: "Local authority requires links with geographic relevance. We target local news sites, community blogs, chamber of commerce sites, and regional publications that signal to search engines your client is a trusted local business.",
        benefits: ["Geographic relevance signals", "Local publication visibility", "Community trust building", "Regional authority establishment", "Competitive differentiation"],
        deliverables: ["Local publication outreach", "Community blog placements", "Local news coverage", "Regional directory submissions", "Geographic link tracking", "Monthly acquisition reporting"],
        process: ["Local opportunity research", "Outreach strategy development", "Relationship building", "Placement execution", "Link documentation", "Performance analysis"]
      },
      {
        title: "Citations",
        slug: "citations",
        description: "Industry-specific directories, data aggregators, and professional listings that validate business legitimacy.",
        fullDescription: "Citations build foundational authority signals that search engines use to validate business legitimacy. We secure placements across industry-specific directories, general citation platforms, data aggregators, and professional associations relevant to each client's vertical.",
        benefits: ["NAP consistency across the web", "Industry-relevant authority signals", "Vertical-specific credibility", "Referral traffic from directories", "Foundation for local authority"],
        deliverables: ["Industry directory submissions", "General citation building (50+ sites)", "Data aggregator submissions", "Professional association listings", "NAP consistency audit", "Citation performance tracking"],
        process: ["Industry landscape analysis", "Directory prioritization", "Submission execution", "Profile optimization", "Ongoing monitoring", "Performance reporting"]
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
