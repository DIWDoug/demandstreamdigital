// Spoke-specific content blocks for the alternating layout
// Each spoke has customized content organized by category

import visibleElementsImg from "@/assets/spoke/visible-elements.png";
import technicalMarkupImg from "@/assets/spoke/technical-markup.png";
import fullFunnelImg from "@/assets/spoke/full-funnel.png";
import technicalSeoImg from "@/assets/spoke/technical-seo.png";
import keywordStrategyImg from "@/assets/spoke/keyword-strategy.png";
import contentDevelopmentImg from "@/assets/spoke/content-development.png";
import linkBuildingImg from "@/assets/spoke/link-building.png";
import schemaMarkupImg from "@/assets/spoke/schema-markup.png";

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

export const spokeContentBlocks: Record<string, ContentBlock[]> = {
  "on-page-optimization": [
    {
      category: "Title Tags & Meta Descriptions",
      headline: "Click-Worthy Titles That Rank and Convert",
      description: "Title tags give search engines a high-level overview of what your page is about. We optimize them for both rankings and click-through rate, because showing up is only half the battle.",
      subPoints: [
        { title: "Keyword Placement Strategy", description: "Target keywords placed near the front of the title tag. The closer to the beginning, the stronger the relevance signal." },
        { title: "Character Length Optimization", description: "Titles kept between 50-60 characters to display fully in search results. Longer when context demands it." },
        { title: "CTR-Boosting Modifiers", description: "Strategic use of modifiers like 'best,' 'guide,' and location terms to capture long-tail variations." },
        { title: "Unique Descriptions Per Page", description: "Every page gets a distinct meta description written like ad copy. Google bolds matching terms, which lifts click-through rates." },
        { title: "Emotional Resonance Without Clickbait", description: "Positive emotional triggers in titles increase CTR by 4%. We use them strategically without crossing into spam territory." },
        { title: "Freshness Signals", description: "Current year added to titles and descriptions for time-sensitive content. Users want to know your information is current." }
      ],
      imageSrc: visibleElementsImg,
      imageAlt: "SEO mind map showing titles, metas, headers, links, and images",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Content Structure & Keywords",
      headline: "Strategic Keyword Placement That Signals Relevance",
      description: "Keywords still matter. But placement, frequency, and context matter more. We optimize content so search engines confidently understand what each page is about.",
      subPoints: [
        { title: "First 100 Words Rule", description: "Primary keyword appears early in the content. Google weights terms higher when they show up at the beginning." },
        { title: "Header Hierarchy (H1-H6)", description: "Single H1 per page with target keyword. Subheadings (H2-H6) use semantic variations to reinforce topical coverage." },
        { title: "Natural Keyword Frequency", description: "Target keywords mentioned multiple times without stuffing. Enough repetition to confirm the topic, not enough to trigger penalties." },
        { title: "Long-Tail Integration", description: "Related phrases from 'People Also Ask' and 'Related Searches' woven into content for broader coverage." },
        { title: "Semantic Chunking for LLMs", description: "Content broken into clearly defined sections with descriptive subheads. Each section answers a specific question completely." },
        { title: "FAQ Sections for AI Visibility", description: "Real questions answered in dedicated FAQ blocks. LLMs extract and cite these more reliably than buried paragraphs." }
      ],
      imageSrc: technicalMarkupImg,
      imageAlt: "Content structure diagram showing headers, keywords, and semantic organization",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    },
    {
      category: "Internal Links & Images",
      headline: "The Hidden Signals That Compound Authority",
      description: "Internal links distribute authority across your site. Optimized images add context for both users and crawlers. Together, they create a web of relevance signals.",
      subPoints: [
        { title: "Authority Flow Strategy", description: "Links from high-authority pages directed to pages that need ranking boosts. Deliberate internal linking, not random footer links." },
        { title: "Keyword-Rich Anchor Text", description: "Descriptive anchor text that tells users and search engines what the linked page is about. Natural language, not forced keywords." },
        { title: "Hub-Spoke Architecture", description: "Pillar pages connected to supporting content. Every page belongs to a topical cluster with clear internal pathways." },
        { title: "Image Filename Optimization", description: "Descriptive filenames that include relevant keywords. 'on-page-seo-checklist.png' instead of 'IMG_4521.jpg'." },
        { title: "Alt Text for Accessibility & SEO", description: "Every image gets descriptive alt text that serves screen readers and adds another relevance signal for search engines." },
        { title: "SEO-Friendly URLs", description: "Short, keyword-inclusive URLs that communicate page topic at a glance. No unnecessary parameters or session IDs." }
      ],
      imageSrc: fullFunnelImg,
      imageAlt: "Internal linking structure diagram",
      ctaText: "Get a Custom Audit",
      ctaHref: "#contact"
    }
  ],

  "technical-seo-audits": [
    {
      category: "Crawlability & Site Architecture",
      headline: "Technical Foundations That Rankings Require",
      description: "Technical SEO issues silently kill rankings. If search engines cannot find, crawl, or understand your content, nothing else matters. We audit the invisible infrastructure first.",
      subPoints: [
        { title: "Crawl Budget Analysis", description: "Identify what search engines can and cannot access. Fix blocked resources, infinite loops, and crawl traps that waste your budget." },
        { title: "Site Structure Optimization", description: "Clear hierarchy that distributes authority efficiently. Important pages within 3 clicks of the homepage." },
        { title: "XML Sitemap Configuration", description: "Sitemaps that include only indexable, canonical URLs. No redirects, no 404s, no noindexed pages." },
        { title: "Robots.txt Audit", description: "Directives reviewed to ensure critical resources are not accidentally blocked. JavaScript and CSS accessible to crawlers." },
        { title: "Internal Link Architecture", description: "Strategic linking from high-authority pages to priority targets. Orphan pages identified and connected." },
        { title: "URL Structure Review", description: "Clean, logical URL paths. No dynamic parameters, session IDs, or unnecessary depth." }
      ],
      imageSrc: technicalSeoImg,
      imageAlt: "Technical SEO mind map showing Speed, Audit, Crawl, and Index",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Core Web Vitals & Page Experience",
      headline: "Page Speed That Affects Rankings and Revenue",
      description: "Google uses page experience signals as ranking factors. Slow pages lose visitors before they even see your content. We optimize the metrics that move the needle.",
      subPoints: [
        { title: "Largest Contentful Paint (LCP)", description: "Main content loads within 2.5 seconds. Server response, render-blocking resources, and image optimization addressed." },
        { title: "Interaction to Next Paint (INP)", description: "Pages respond to user interactions within 200 milliseconds. JavaScript execution optimized for responsiveness." },
        { title: "Cumulative Layout Shift (CLS)", description: "Visual stability maintained during load. No unexpected layout shifts that frustrate users or hurt rankings." },
        { title: "Mobile-First Performance", description: "Responsive design, appropriate touch targets, and viewport configuration. Mobile experience prioritized since that is how Google indexes." },
        { title: "Image Optimization", description: "Proper formats (WebP, AVIF), lazy loading for below-fold images, and appropriate sizing to reduce payload." },
        { title: "Third-Party Script Audit", description: "External scripts evaluated for performance impact. Defer, async, or remove what is slowing the page down." }
      ],
      imageSrc: technicalSeoImg,
      imageAlt: "Technical SEO performance metrics",
      ctaText: "Get a Technical Audit",
      ctaHref: "#contact"
    },
    {
      category: "Indexation & Structured Data",
      headline: "Every Important Page Indexed. Every Rich Result Earned.",
      description: "If search engines cannot index your pages, they cannot rank them. Schema markup unlocks rich results that increase visibility and click-through rates.",
      subPoints: [
        { title: "Index Coverage Analysis", description: "Google Search Console data reviewed to identify excluded, errored, and crawled-but-not-indexed pages. Root causes fixed." },
        { title: "Duplicate Content Resolution", description: "Canonical tags properly implemented. Competing pages consolidated to concentrate authority." },
        { title: "Redirect Chain Cleanup", description: "Redirect chains and loops eliminated. Direct paths from old URLs to current destinations." },
        { title: "Schema Markup Implementation", description: "LocalBusiness, FAQ, Review, Service, and Organization schema added where appropriate. Validated for rich result eligibility." },
        { title: "Rich Snippet Optimization", description: "FAQ schema targets People Also Ask. Product and review schema displays ratings in search results." },
        { title: "HTTPS & Security", description: "Secure protocol confirmed site-wide. Mixed content issues resolved. Security headers reviewed." }
      ],
      imageSrc: technicalSeoImg,
      imageAlt: "Technical SEO indexation diagram",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "local-keyword-strategy": [
    {
      category: "Discovery",
      headline: "Finding What Your Market Actually Searches",
      description: "Effective local SEO starts with understanding what people actually search for in each market. We go beyond basic keyword research to uncover real demand.",
      subPoints: [
        { title: "Local Search Demand Analysis", description: "Understand search volume patterns specific to each geographic market." },
        { title: "Competitor Keyword Mining", description: "Identify what competitors rank for and where gaps exist." },
        { title: "Long-Tail Opportunity Discovery", description: "Find lower-competition phrases with high conversion intent." },
        { title: "Seasonal Pattern Recognition", description: "Map search trends throughout the year for proactive content planning." }
      ],
      imageSrc: keywordStrategyImg,
      imageAlt: "Keywords mind map showing Intent, Volume, Local, Gaps, and Map",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Intent Classification",
      headline: "Understanding Why People Search",
      description: "Search intent determines what content should rank. We classify every keyword by intent to ensure the right page targets the right query.",
      subPoints: [
        { title: "Informational Intent", description: "Users seeking answers and education. Blog posts and guides." },
        { title: "Commercial Investigation", description: "Users comparing options. Comparison pages and reviews." },
        { title: "Transactional Intent", description: "Users ready to take action. Service pages and contact forms." },
        { title: "Local Intent Signals", description: "Proximity modifiers and local pack triggers." }
      ],
      imageSrc: keywordStrategyImg,
      imageAlt: "Keyword intent classification diagram",
      ctaText: "Get Keyword Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Strategic Mapping",
      headline: "Every Keyword Mapped to a Page",
      description: "Keywords without a destination are wasted opportunities. We create a strategic map that assigns every target keyword to a specific page.",
      subPoints: [
        { title: "Keyword-to-Page Assignment", description: "Each keyword gets one target page to prevent cannibalization." },
        { title: "Content Gap Identification", description: "Find keywords that need new pages to target them effectively." },
        { title: "Priority Ranking", description: "Focus resources on keywords with the best ROI potential." },
        { title: "Tracking Setup", description: "Configure rank tracking for ongoing visibility monitoring." }
      ],
      imageSrc: keywordStrategyImg,
      imageAlt: "Keyword mapping strategy diagram",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "content-development": [
    {
      category: "Service Pages",
      headline: "Location-Specific Service Content",
      description: "Generic service pages do not rank in local search. We create location-specific content that signals relevance to each market you serve.",
      subPoints: [
        { title: "City-Specific Service Pages", description: "Unique content for each service area, not templated location swaps." },
        { title: "Local Context Integration", description: "References to neighborhoods, landmarks, and local market conditions." },
        { title: "Conversion-Focused Copy", description: "Clear calls to action and trust signals specific to each location." },
        { title: "Schema Markup Integration", description: "Service and LocalBusiness schema for rich result eligibility." }
      ],
      imageSrc: contentDevelopmentImg,
      imageAlt: "Content mind map showing Service, Location, Blog, FAQ, and Guide",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Blog Content",
      headline: "Topical Authority Through Strategic Publishing",
      description: "Blog content builds the topical authority that makes service pages rank. We create content clusters that establish expertise.",
      subPoints: [
        { title: "Hub-Spoke Content Architecture", description: "Pillar pages surrounded by supporting content that covers every angle." },
        { title: "FAQ Expansion", description: "Transform common questions into comprehensive content targeting People Also Ask." },
        { title: "Local Industry Coverage", description: "Content relevant to your market and industry that attracts local links." },
        { title: "Seasonal Content Calendar", description: "Proactive publishing aligned with search demand patterns." }
      ],
      imageSrc: contentDevelopmentImg,
      imageAlt: "Content strategy diagram",
      ctaText: "Get Content Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Content Optimization",
      headline: "Making Existing Content Work Harder",
      description: "Sometimes the best opportunity is improving what you already have. We audit and optimize existing content for better performance.",
      subPoints: [
        { title: "Content Audit", description: "Identify underperforming pages with ranking potential." },
        { title: "Refresh and Expansion", description: "Update outdated content and expand thin pages." },
        { title: "Consolidation Strategy", description: "Merge competing pages to concentrate authority." },
        { title: "Internal Link Integration", description: "Connect optimized content to the broader site architecture." }
      ],
      imageSrc: contentDevelopmentImg,
      imageAlt: "Content optimization diagram",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "link-building": [
    {
      category: "Local Links",
      headline: "Geographic Authority Through Community Links",
      description: "Local link building is not about volume. It is about earning links from sources that signal geographic relevance and community trust.",
      subPoints: [
        { title: "Local Publication Outreach", description: "Earn coverage in local news sites, blogs, and industry publications." },
        { title: "Community Organization Links", description: "Chamber of Commerce, business associations, and local directories." },
        { title: "Sponsorship Opportunities", description: "Local events, sports teams, and charitable organizations." },
        { title: "Local Business Partnerships", description: "Reciprocal relationships with complementary local businesses." }
      ],
      imageSrc: linkBuildingImg,
      imageAlt: "Links mind map showing Local, Sponsor, Press, Community",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Authority Building",
      headline: "Earning Links That Move Rankings",
      description: "Not all links are equal. We focus on earning links from authoritative sources that search engines trust.",
      subPoints: [
        { title: "Guest Posting", description: "Contribute expert content to relevant industry publications." },
        { title: "Resource Link Building", description: "Create linkable assets that attract natural editorial links." },
        { title: "Broken Link Reclamation", description: "Find broken links pointing to competitor content and offer alternatives." },
        { title: "Unlinked Mention Conversion", description: "Turn brand mentions into actual links." }
      ],
      imageSrc: linkBuildingImg,
      imageAlt: "Authority link building diagram",
      ctaText: "Get Link Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Anchor Text Strategy",
      headline: "Natural Link Profiles That Avoid Penalties",
      description: "Over-optimized anchor text triggers penalties. We build diverse, natural-looking link profiles that search engines reward.",
      subPoints: [
        { title: "Anchor Text Diversification", description: "Mix of branded, naked URL, and natural phrase anchors." },
        { title: "Link Velocity Management", description: "Steady acquisition that mimics natural growth patterns." },
        { title: "Link Profile Analysis", description: "Monitor and maintain healthy anchor text ratios." },
        { title: "Competitor Gap Analysis", description: "Identify link sources competitors have that you do not." }
      ],
      imageSrc: linkBuildingImg,
      imageAlt: "Anchor text strategy diagram",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "schema-markup": [
    {
      category: "Business Identity",
      headline: "Structured Data That Defines Your Business",
      description: "Schema markup tells search engines exactly what your business is, where it operates, and what it offers. This powers rich results and AI visibility.",
      subPoints: [
        { title: "LocalBusiness Schema", description: "Core identity markup including NAP, hours, service area, and business type." },
        { title: "Organization Schema", description: "Brand-level markup that establishes corporate identity and authority." },
        { title: "About Schema", description: "Founder and team information that builds trust and E-E-A-T signals." },
        { title: "Contact Schema", description: "Multiple contact points and methods clearly structured for search engines." }
      ],
      imageSrc: schemaMarkupImg,
      imageAlt: "Schema mind map showing Local, FAQ, About, Org, Service",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Service Markup",
      headline: "Structured Data for What You Offer",
      description: "Service schema helps search engines understand the specific services you provide and where you provide them.",
      subPoints: [
        { title: "Service Schema", description: "Individual service definitions with descriptions, areas, and pricing indicators." },
        { title: "ServiceArea Schema", description: "Geographic coverage that matches Google Business Profile service areas." },
        { title: "Offer Schema", description: "Pricing and availability information for service-based businesses." },
        { title: "AggregateRating Schema", description: "Review and rating markup that can appear in search results." }
      ],
      imageSrc: schemaMarkupImg,
      imageAlt: "Service schema markup diagram",
      ctaText: "Get Schema Audit",
      ctaHref: "#contact"
    },
    {
      category: "Content Markup",
      headline: "Rich Results for Every Content Type",
      description: "Beyond business identity, schema markup can unlock rich results for FAQ content, reviews, articles, and more.",
      subPoints: [
        { title: "FAQ Schema", description: "Targets People Also Ask and FAQ rich results in search." },
        { title: "Review Schema", description: "Display star ratings and review counts directly in search results." },
        { title: "Article Schema", description: "News and blog content structured for Google News and Discover." },
        { title: "HowTo Schema", description: "Step-by-step content formatted for rich result display." }
      ],
      imageSrc: schemaMarkupImg,
      imageAlt: "Content schema markup diagram",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ]
};
