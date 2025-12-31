// Spoke-specific content blocks for the alternating layout
// Each spoke has customized content organized by category

// On-Page Optimization illustrations
import onPageTitlesImg from "@/assets/spoke/on-page-titles.png";
import onPageStructureImg from "@/assets/spoke/on-page-structure.png";
import onPageLinksImg from "@/assets/spoke/on-page-links.png";

// Technical SEO illustrations
import technicalCrawlImg from "@/assets/spoke/technical-crawl.png";
import technicalVitalsImg from "@/assets/spoke/technical-vitals.png";
import technicalSchemaImg from "@/assets/spoke/technical-schema.png";

// Keyword Strategy illustrations
import keywordResearchImg from "@/assets/spoke/keyword-research.png";
import keywordIntentImg from "@/assets/spoke/keyword-intent.png";
import keywordMappingImg from "@/assets/spoke/keyword-mapping.png";

// Content Development illustrations
import contentLocationImg from "@/assets/spoke/content-location.png";
import contentBlogImg from "@/assets/spoke/content-blog.png";
import contentRefreshImg from "@/assets/spoke/content-refresh.png";

// Link Building illustrations
import linkLocalImg from "@/assets/spoke/link-local.png";
import linkAuthorityImg from "@/assets/spoke/link-authority.png";
import linkHealthImg from "@/assets/spoke/link-health.png";

// Schema Markup illustrations
import schemaBusinessImg from "@/assets/spoke/schema-business.png";
import schemaServiceImg from "@/assets/spoke/schema-service.png";
import schemaRichImg from "@/assets/spoke/schema-rich.png";

interface SubPoint {
  title: string;
  description: string;
}

export interface ContentBlock {
  category: string;
  headline: string;
  description: string;
  subPoints: SubPoint[];
  imageSrc?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface SpokeFAQ {
  question: string;
  answer: string;
}

// Spoke-specific FAQs
export const spokeFAQs: Record<string, SpokeFAQ[]> = {
  "on-page-optimization": [
    { question: "How long until on-page changes affect rankings?", answer: "Most on-page optimizations show measurable impact within 2-4 weeks as Google recrawls and reindexes updated pages. Competitive keywords may take 2-3 months for full effect." },
    { question: "Do you rewrite all content or just optimize it?", answer: "We optimize existing content structure, headings, and keyword placement. Full rewrites are only recommended when content quality or search intent alignment requires it." },
    { question: "How do you handle pages already ranking well?", answer: "We apply conservative changes to protect existing rankings while testing improvements. High-performing pages get monitoring rather than aggressive optimization." },
    { question: "What access do you need for on-page work?", answer: "CMS access for content updates, Google Search Console for performance data, and ideally Analytics access to track user behavior changes." },
    { question: "Do you optimize for voice search and AI?", answer: "Yes. FAQ sections, semantic chunking, and quotable statements are structured for LLM extraction and voice search snippets." }
  ],
  "technical-seo-audits": [
    { question: "How long does a technical SEO audit take?", answer: "A comprehensive technical audit typically takes 5-7 business days depending on site size. Enterprise sites with thousands of pages may require additional time." },
    { question: "Do you implement fixes or just provide recommendations?", answer: "We provide prioritized recommendations with implementation specifications. For clients with developer resources, we provide specs. For others, we can implement directly." },
    { question: "What tools do you use for technical audits?", answer: "Screaming Frog, Sitebulb, Google Search Console, PageSpeed Insights, and custom crawl configurations. We validate findings across multiple tools." },
    { question: "How do you prioritize technical fixes?", answer: "Issues are ranked by impact on crawlability, indexation, and Core Web Vitals. Critical blockers first, then high-impact quick wins, then incremental improvements." },
    { question: "Do you audit mobile and desktop separately?", answer: "Google uses mobile-first indexing, so mobile is primary. We audit both but prioritize mobile performance and usability issues." }
  ],
  "local-keyword-strategy": [
    { question: "How many keywords do you research per market?", answer: "We focus on quality over quantity. Typically 50-200 highly relevant keywords per service area, mapped by intent and priority rather than bulk lists." },
    { question: "Do you account for 'near me' searches?", answer: "Absolutely. 'Near me' and implicit local queries are core to local keyword strategy. We map these to appropriate page types and GBP optimization." },
    { question: "How often should keyword strategy be updated?", answer: "Full strategy reviews quarterly. Ongoing monitoring catches new opportunities and shifting search patterns between reviews." },
    { question: "What data sources do you use?", answer: "Search Console impression data, SEMrush/Ahrefs for volume estimates, Google Ads Keyword Planner for local modifiers, and SERP analysis for intent validation." },
    { question: "How do you handle multi-location keyword mapping?", answer: "Each location gets distinct keyword mapping to prevent cannibalization. Hub pages target broader terms while location pages target geo-modified queries." }
  ],
  "content-development": [
    { question: "Who writes the content?", answer: "Our in-house content team with local SEO expertise. We never use AI-generated content without substantial human editing and subject matter expertise." },
    { question: "How do you ensure content is unique per location?", answer: "Each location page includes market-specific details: local landmarks, regulations, service area specifics, and unique value propositions. No find-and-replace templates." },
    { question: "What is your content approval process?", answer: "Draft delivered for review, single revision round included, then final approval before publishing. Additional revisions available at added cost." },
    { question: "Do you provide ongoing content or one-time pieces?", answer: "Both. We offer one-time content projects and monthly retainer packages for ongoing blog content, location pages, and content refreshes." },
    { question: "How do you optimize content for featured snippets?", answer: "Structured formatting with clear definitions, numbered lists, and direct answers to common questions. FAQ sections specifically target People Also Ask." }
  ],
  "link-building": [
    { question: "What types of links do you build?", answer: "Editorial links from local news, industry publications, chamber of commerce directories, local sponsorships, and guest contributions. No PBNs or paid link schemes." },
    { question: "How many links per month should we expect?", answer: "Quality over quantity. Typically 5-15 relevant links monthly depending on campaign scope. One link from a trusted local source beats 50 low-quality submissions." },
    { question: "Do you build links to specific pages or just homepage?", answer: "Strategic distribution. Homepage and service pages for authority, location pages for geographic signals, and blog content for topical relevance." },
    { question: "How do you measure link building success?", answer: "Referring domain growth, Domain Rating/Authority changes, ranking improvements for targeted pages, and referral traffic from acquired links." },
    { question: "What is your approach to anchor text?", answer: "Natural distribution: branded anchors, naked URLs, generic terms, and occasional keyword-rich anchors. Over-optimization triggers penalties." }
  ],
  "schema-markup": [
    { question: "What schema types do you implement?", answer: "LocalBusiness, Organization, Service, FAQ, Review, Breadcrumb, and Article schema. Additional types added based on content and rich result opportunities." },
    { question: "How do you test schema implementation?", answer: "Google Rich Results Test, Schema.org validator, and Search Console enhancement reports. We verify eligibility for all applicable rich results." },
    { question: "Does schema directly improve rankings?", answer: "Schema itself is not a direct ranking factor. However, rich results from schema can significantly improve click-through rates, which indirectly benefits rankings." },
    { question: "How often should schema be updated?", answer: "Updated when business information changes, new services are added, or Google announces new supported schema types. Quarterly reviews recommended." },
    { question: "Can schema help with AI search visibility?", answer: "Yes. Structured data helps LLMs understand entity relationships, business details, and content structure. Clean schema improves chances of accurate AI citations." }
  ]
};

export const spokeContentBlocks: Record<string, ContentBlock[]> = {
  "on-page-optimization": [
    {
      category: "Title Tags & Meta Descriptions",
      headline: "Titles That Rank and Drive Clicks",
      description: "Title tags give search engines a high-level overview of what your page is about. We optimize them for both rankings and click-through rate.",
      subPoints: [
        { title: "Keyword Placement", description: "Target keywords placed near the front of the title tag. The closer to the beginning, the stronger the relevance signal." },
        { title: "Character Limits", description: "Titles under 100 characters with priority keywords in the first 60. Google may truncate, but the important terms display." },
        { title: "CTR Modifiers", description: "Strategic use of modifiers like 'best,' 'guide,' and location terms to capture long-tail variations." },
        { title: "Unique Descriptions", description: "Every page gets a distinct meta description written like ad copy. Google bolds matching terms." },
        { title: "Emotional Triggers", description: "Positive emotional hooks in titles increase CTR by 4%. Used strategically, never as clickbait." },
        { title: "Freshness Signals", description: "Current year added to titles for time-sensitive content. Users want current information." }
      ],
      imageSrc: onPageTitlesImg,
      imageAlt: "Title and meta optimization diagram",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Content Structure & Keywords",
      headline: "Keyword Placement That Signals Relevance",
      description: "Keywords still matter. Placement, frequency, and context matter more. We optimize content so search engines understand what each page is about.",
      subPoints: [
        { title: "First 100 Words", description: "Primary keyword appears early. Google weights terms higher when they show up at the beginning." },
        { title: "Header Hierarchy", description: "Single H1 with target keyword. Subheadings use semantic variations to reinforce topical coverage." },
        { title: "Natural Frequency", description: "Target keywords mentioned multiple times without stuffing. Confirm the topic, avoid penalties." },
        { title: "Long-Tail Phrases", description: "Related phrases from 'People Also Ask' woven into content for broader coverage." },
        { title: "LLM-Ready Chunks", description: "Content broken into clear sections with descriptive subheads. Each section answers one question." },
        { title: "FAQ for AI", description: "Real questions in dedicated FAQ blocks. LLMs extract these more reliably than buried paragraphs." }
      ],
      imageSrc: onPageStructureImg,
      imageAlt: "Content structure and keyword hierarchy diagram",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    },
    {
      category: "Internal Links & Images",
      headline: "Hidden Signals That Build Authority",
      description: "Internal links distribute authority. Optimized images add context for users and crawlers. Together, they compound relevance signals.",
      subPoints: [
        { title: "Authority Flow", description: "Links from high-authority pages directed to pages that need ranking boosts. Deliberate, not random." },
        { title: "Anchor Text", description: "Descriptive anchors that tell users and search engines what the linked page covers. Natural language." },
        { title: "Hub-Spoke Links", description: "Pillar pages connected to supporting content. Every page belongs to a topical cluster." },
        { title: "Image Filenames", description: "Descriptive filenames with keywords. 'on-page-seo-checklist.png' not 'IMG_4521.jpg'." },
        { title: "Alt Text", description: "Every image gets descriptive alt text for accessibility and SEO relevance signals." },
        { title: "Clean URLs", description: "Short, keyword-inclusive URLs. No parameters or session IDs cluttering the path." }
      ],
      imageSrc: onPageLinksImg,
      imageAlt: "Internal linking architecture diagram",
      ctaText: "Get a Custom Audit",
      ctaHref: "#contact"
    }
  ],

  "technical-seo-audits": [
    {
      category: "Crawlability & Architecture",
      headline: "Technical Foundations for Rankings",
      description: "Technical SEO issues silently kill rankings. If search engines cannot crawl and understand your content, nothing else matters.",
      subPoints: [
        { title: "Crawl Budget", description: "Identify blocked resources, infinite loops, and crawl traps that waste your crawl budget." },
        { title: "Site Structure", description: "Clear hierarchy that distributes authority. Important pages within 3 clicks of homepage." },
        { title: "XML Sitemaps", description: "Sitemaps with only indexable, canonical URLs. No redirects, 404s, or noindexed pages." },
        { title: "Robots.txt", description: "Directives reviewed so critical resources are not accidentally blocked from crawlers." },
        { title: "Internal Links", description: "Strategic linking from authority pages to priority targets. Orphan pages identified." },
        { title: "URL Structure", description: "Clean, logical paths. No dynamic parameters, session IDs, or unnecessary depth." }
      ],
      imageSrc: technicalCrawlImg,
      imageAlt: "Site architecture and crawlability diagram",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Core Web Vitals",
      headline: "Page Speed That Affects Rankings",
      description: "Google uses page experience as a ranking factor. Slow pages lose visitors before they see your content.",
      subPoints: [
        { title: "LCP Optimization", description: "Main content loads within 2.5 seconds. Server response and render-blocking resources addressed." },
        { title: "INP Performance", description: "Pages respond to interactions within 200ms. JavaScript execution optimized for speed." },
        { title: "CLS Prevention", description: "Visual stability during load. No unexpected layout shifts that hurt rankings." },
        { title: "Mobile-First", description: "Responsive design with proper touch targets. Mobile experience prioritized for indexing." },
        { title: "Image Formats", description: "WebP/AVIF formats, lazy loading, and proper sizing to reduce payload." },
        { title: "Script Audit", description: "External scripts evaluated for impact. Defer, async, or remove what slows the page." }
      ],
      imageSrc: technicalVitalsImg,
      imageAlt: "Core Web Vitals performance metrics",
      ctaText: "Get a Technical Audit",
      ctaHref: "#contact"
    },
    {
      category: "Indexation & Schema",
      headline: "Every Page Indexed. Rich Results Earned.",
      description: "If search engines cannot index pages, they cannot rank them. Schema unlocks rich results that boost visibility.",
      subPoints: [
        { title: "Index Coverage", description: "Search Console data reviewed for excluded and errored pages. Root causes fixed." },
        { title: "Duplicate Resolution", description: "Canonical tags properly implemented. Competing pages consolidated." },
        { title: "Redirect Cleanup", description: "Redirect chains eliminated. Direct paths from old URLs to destinations." },
        { title: "Schema Implementation", description: "LocalBusiness, FAQ, Review, and Service schema added and validated." },
        { title: "Rich Snippets", description: "FAQ schema targets PAA. Product schema displays ratings in results." },
        { title: "Security & HTTPS", description: "Secure protocol confirmed. Mixed content resolved. Security headers reviewed." }
      ],
      imageSrc: technicalSchemaImg,
      imageAlt: "Indexation and structured data diagram",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "local-keyword-strategy": [
    {
      category: "Market Research",
      headline: "Find What Your Market Searches",
      description: "Effective local SEO starts with understanding real search behavior in each market. Generic lists miss the nuances.",
      subPoints: [
        { title: "Local Volume", description: "Search demand analyzed per city, not national averages. Markets differ dramatically." },
        { title: "Competitor Mining", description: "Every keyword competitors rank for identified. Gaps and opportunities found." },
        { title: "Long-Tail Discovery", description: "Lower-competition phrases with high conversion intent. Closest to purchase decisions." },
        { title: "PAA Expansion", description: "Google's People Also Ask reveals real questions. Each becomes content opportunity." },
        { title: "Seasonal Mapping", description: "Demand fluctuations tracked. Content planned before peaks, not after." },
        { title: "GSC Mining", description: "Existing impressions reveal keywords you almost rank for. Low-hanging fruit first." }
      ],
      imageSrc: keywordResearchImg,
      imageAlt: "Local keyword research methodology",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Intent Classification",
      headline: "Understanding Why People Search",
      description: "Search intent determines what content should rank. Wrong intent means page one is impossible.",
      subPoints: [
        { title: "Informational", description: "Users seeking education. Blog posts, guides, and how-to content. Builds authority." },
        { title: "Commercial", description: "Users comparing options. Comparison pages and reviews capture this stage." },
        { title: "Transactional", description: "Users ready to act. Service pages with clear CTAs convert these searches." },
        { title: "Local Signals", description: "'Near me' and city terms trigger local pack. Different optimization required." },
        { title: "SERP Analysis", description: "Results Google shows reveal intent. We analyze before targeting any keyword." },
        { title: "Mismatch Fixes", description: "Pages targeting wrong intent identified. Content realigned or pages created." }
      ],
      imageSrc: keywordIntentImg,
      imageAlt: "Search intent classification framework",
      ctaText: "Get Keyword Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Strategic Mapping",
      headline: "Every Keyword Mapped to a Page",
      description: "Keywords without destinations are wasted. Cannibalization splits authority. We prevent both.",
      subPoints: [
        { title: "One-to-One Mapping", description: "Each keyword assigned to one page. No internal competition or diluted authority." },
        { title: "Gap Identification", description: "Keywords needing new pages flagged. Roadmap prioritizes highest impact." },
        { title: "Cannibalization Fix", description: "Competing pages consolidated or differentiated. Authority concentrated." },
        { title: "Priority Scoring", description: "Keywords ranked by volume, difficulty, intent, and value. Focus on ROI." },
        { title: "Cluster Planning", description: "Keywords grouped into hub-spoke clusters for comprehensive topical coverage." },
        { title: "Tracking Setup", description: "Target keywords added to tools with geo-targeting. Progress measured." }
      ],
      imageSrc: keywordMappingImg,
      imageAlt: "Keyword-to-page mapping strategy",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "content-development": [
    {
      category: "Location Pages",
      headline: "Content That Signals Local Relevance",
      description: "Generic service pages do not rank locally. Google needs proof you serve specific markets.",
      subPoints: [
        { title: "City-Specific Pages", description: "Unique content per service area. Not templates with city names swapped." },
        { title: "Local Context", description: "Neighborhoods, landmarks, regulations. Signals that you operate there." },
        { title: "Area Hierarchy", description: "Primary locations get comprehensive pages. Secondary areas get appropriate depth." },
        { title: "Conversion Focus", description: "Local phone numbers, embedded maps, and location-specific trust signals." },
        { title: "Schema Integration", description: "LocalBusiness and Service schema on every location page." },
        { title: "Link Architecture", description: "Location pages connected to hub structure. Authority flows properly." }
      ],
      imageSrc: contentLocationImg,
      imageAlt: "Location page content structure",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Blog & Authority",
      headline: "Clusters That Make Service Pages Rank",
      description: "Service pages alone rarely rank competitively. Supporting content builds topical authority.",
      subPoints: [
        { title: "Hub-Spoke Architecture", description: "Pillar pages cover core topics. Supporting articles link back with depth." },
        { title: "FAQ Expansion", description: "Questions transformed into articles. Targets PAA and provides LLM fodder." },
        { title: "Local Industry", description: "Content relevant to your market. Attracts local links and authority." },
        { title: "AI-Ready Structure", description: "Clear headings, quotable statements, complete answers. LLM-optimized." },
        { title: "Seasonal Calendar", description: "Publishing aligned with demand. Content live before spikes." },
        { title: "Information Gain", description: "Original insights and data. Value beyond rewrites of existing content." }
      ],
      imageSrc: contentBlogImg,
      imageAlt: "Content cluster strategy diagram",
      ctaText: "Get Content Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Content Refresh",
      headline: "Make Existing Content Work Harder",
      description: "Sometimes the best opportunity is improving what exists. Pages with backlinks can transform.",
      subPoints: [
        { title: "Performance Audit", description: "Pages ranked by traffic, rankings, and potential. Underperformers prioritized." },
        { title: "Intent Realignment", description: "Pages targeting wrong intent restructured. Content matched to SERP." },
        { title: "Thin Content Fix", description: "Pages below threshold expanded with valuable detail." },
        { title: "Freshness Updates", description: "Outdated stats and examples replaced. Current year added where appropriate." },
        { title: "Consolidation", description: "Multiple pages for same keyword merged. Authority concentrated." },
        { title: "Link Injection", description: "Optimized pages connected to site architecture from authority pages." }
      ],
      imageSrc: contentRefreshImg,
      imageAlt: "Content optimization workflow",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "link-building": [
    {
      category: "Local Acquisition",
      headline: "Geographic Authority Through Links",
      description: "Local links signal geographic authority that national competitors cannot replicate.",
      subPoints: [
        { title: "Local Publications", description: "Coverage in local news, community blogs, and regional publications." },
        { title: "Chambers & Associations", description: "Membership directories from established local organizations." },
        { title: "Sponsorships", description: "Local sports, charity events, schools. Real involvement, real links." },
        { title: "Business Partnerships", description: "Complementary businesses. Vendor pages and partner directories." },
        { title: "Resource Pages", description: "City websites, tourism boards, community lists. Government and .edu links." },
        { title: "Hyperlocal Promotion", description: "Local content promoted to local audiences. Shares from people who care." }
      ],
      imageSrc: linkLocalImg,
      imageAlt: "Local link acquisition sources",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Authority Links",
      headline: "Earning Links That Move Rankings",
      description: "One link from a trusted source outweighs dozens of low-quality submissions.",
      subPoints: [
        { title: "Guest Posting", description: "Expert content on industry publications. Bylines that build authority." },
        { title: "Linkable Assets", description: "Original research, tools, templates. Content worth linking to." },
        { title: "Broken Link Reclamation", description: "Find broken links on relevant sites. Offer your content as replacement." },
        { title: "Unlinked Mentions", description: "Brand mentions without links identified. Converted to actual links." },
        { title: "HARO Outreach", description: "Expert commentary for journalists. Links from news and major publications." },
        { title: "Digital PR", description: "Newsworthy angles and data studies. Coverage from authoritative sources." }
      ],
      imageSrc: linkAuthorityImg,
      imageAlt: "Authority link building tactics",
      ctaText: "Get Link Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Profile Health",
      headline: "Natural Profiles That Avoid Penalties",
      description: "Over-optimized anchors trigger penalties. Unnatural velocity raises flags. We build naturally.",
      subPoints: [
        { title: "Anchor Diversity", description: "Branded, naked URL, generic, and keyword anchors mixed naturally." },
        { title: "Velocity Management", description: "Steady acquisition mimicking natural growth. No sudden spikes." },
        { title: "Domain Diversity", description: "Links from variety of sources. Not concentrated on few domains." },
        { title: "Toxic Monitoring", description: "Regular audits for harmful links. Disavow file maintained." },
        { title: "Competitor Gaps", description: "Link sources competitors have identified. Prioritized for outreach." },
        { title: "Attribution Tracking", description: "New links monitored and attributed to campaigns. ROI measured." }
      ],
      imageSrc: linkHealthImg,
      imageAlt: "Link profile health analysis",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "schema-markup": [
    {
      category: "Business Identity",
      headline: "Structured Data That Defines You",
      description: "Schema tells search engines what your business is, where it operates, and what it offers.",
      subPoints: [
        { title: "LocalBusiness", description: "Name, address, phone, hours, service area, payment methods, business type." },
        { title: "Organization", description: "Brand identity, logo, social profiles, and founding information." },
        { title: "Person Schema", description: "Team member markup building E-E-A-T. Expertise connected to entity." },
        { title: "Contact Points", description: "Multiple contact methods structured. Sales, support, billing distinguished." },
        { title: "Same-As Links", description: "Social and directory profiles linked to business entity." },
        { title: "Geo Coordinates", description: "Precise location and service area polygons. Powers map integrations." }
      ],
      imageSrc: schemaBusinessImg,
      imageAlt: "Business identity schema types",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Service Schema",
      headline: "Structured Data for What You Offer",
      description: "Service schema helps search engines understand offerings. Enables rich results with details.",
      subPoints: [
        { title: "Service Definitions", description: "Individual services with descriptions, areas, duration, and pricing." },
        { title: "Service Areas", description: "Geographic coverage matching GBP. City, region, or radius-based." },
        { title: "Pricing Schema", description: "Starting prices, ranges, and promotions structured for rich results." },
        { title: "Aggregate Ratings", description: "Review data structured for star displays. Count, average, best/worst." },
        { title: "Area Nesting", description: "Service area nested within LocalBusiness. Geographic signals strengthened." },
        { title: "Offer Catalogs", description: "Full service catalogs structured. Offerings discoverable via schema." }
      ],
      imageSrc: schemaServiceImg,
      imageAlt: "Service and offer schema markup",
      ctaText: "Get Schema Audit",
      ctaHref: "#contact"
    },
    {
      category: "Rich Result Schema",
      headline: "Rich Results for Every Content Type",
      description: "Beyond identity, schema unlocks enhanced search appearances for FAQ, reviews, articles, and more.",
      subPoints: [
        { title: "FAQ Schema", description: "Q&A pairs for FAQ rich results. Targets PAA and expands SERP real estate." },
        { title: "Review Schema", description: "Customer reviews structured for ratings display. Author, date, rating marked." },
        { title: "Article Schema", description: "Blog content structured for News, Discover, and Top Stories eligibility." },
        { title: "HowTo Schema", description: "Step content for rich results. Images, tools, and supplies included." },
        { title: "Breadcrumbs", description: "Navigation hierarchy for breadcrumb displays. Improves CTR." },
        { title: "Video Schema", description: "Media structured for carousels. Thumbnails, duration, descriptions." }
      ],
      imageSrc: schemaRichImg,
      imageAlt: "Content rich result schema types",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ]
};
