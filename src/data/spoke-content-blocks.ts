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
      category: "Market Research & Discovery",
      headline: "Finding What Your Market Actually Searches",
      description: "Effective local SEO starts with understanding real search behavior in each specific market. Generic keyword lists miss the nuances that drive local rankings.",
      subPoints: [
        { title: "Local Search Volume Analysis", description: "Search demand varies dramatically by city. We analyze volume patterns specific to each geographic market, not just national averages." },
        { title: "Competitor Keyword Mining", description: "Identify every keyword your competitors rank for. Find the gaps where they are weak and the opportunities they have missed entirely." },
        { title: "Long-Tail Opportunity Discovery", description: "Lower-competition phrases with high conversion intent. These are often the queries closest to a purchase decision." },
        { title: "People Also Ask Expansion", description: "Google's PAA boxes reveal the questions people actually ask. Each question becomes a content opportunity." },
        { title: "Seasonal Trend Mapping", description: "Search demand fluctuates throughout the year. We map patterns to plan content before demand peaks, not after." },
        { title: "Search Console Data Mining", description: "Your existing impressions reveal keywords you are already close to ranking for. Low-hanging fruit identified first." }
      ],
      imageSrc: keywordStrategyImg,
      imageAlt: "Keywords mind map showing Intent, Volume, Local, Gaps, and Map",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Intent Classification",
      headline: "Understanding Why People Search",
      description: "Search intent determines what content should rank. A page optimized for the wrong intent will never reach page one, no matter how well it is written.",
      subPoints: [
        { title: "Informational Intent", description: "Users seeking answers and education. These queries need blog posts, guides, and how-to content. They build topical authority." },
        { title: "Commercial Investigation", description: "Users comparing options before deciding. Comparison pages, reviews, and 'best of' lists capture this stage of the journey." },
        { title: "Transactional Intent", description: "Users ready to take action. Service pages with clear calls to action and trust signals convert these searches." },
        { title: "Local Intent Signals", description: "Queries with 'near me,' city names, or proximity modifiers trigger the local pack. Different optimization required." },
        { title: "SERP Feature Analysis", description: "The results Google shows reveal what it thinks the intent is. We analyze the SERP before targeting any keyword." },
        { title: "Intent Mismatch Identification", description: "Existing pages targeting the wrong intent are identified. Content realigned or new pages created to match." }
      ],
      imageSrc: keywordStrategyImg,
      imageAlt: "Keyword intent classification diagram",
      ctaText: "Get Keyword Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Strategic Keyword Mapping",
      headline: "Every Keyword Mapped to a Page",
      description: "Keywords without a destination are wasted opportunities. Keyword cannibalization happens when multiple pages compete for the same term. We prevent both.",
      subPoints: [
        { title: "One Keyword, One Page", description: "Each target keyword assigned to exactly one page. No internal competition, no diluted authority." },
        { title: "Content Gap Identification", description: "Keywords that need new pages are flagged. The content roadmap prioritizes highest-impact opportunities." },
        { title: "Cannibalization Resolution", description: "Existing pages competing for the same keywords are consolidated or differentiated. Authority concentrated, not split." },
        { title: "Priority Scoring", description: "Keywords ranked by a combination of volume, difficulty, intent, and business value. Resources focused on highest ROI targets." },
        { title: "Topical Cluster Planning", description: "Keywords grouped into hub-spoke clusters. Each cluster builds authority for a core topic through comprehensive coverage." },
        { title: "Rank Tracking Configuration", description: "Target keywords added to tracking tools with proper geo-targeting. Progress measured against mapped destinations." }
      ],
      imageSrc: keywordStrategyImg,
      imageAlt: "Keyword mapping strategy diagram",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "content-development": [
    {
      category: "Location-Specific Service Pages",
      headline: "Service Content That Signals Local Relevance",
      description: "Generic service pages do not rank in local search. Google needs proof that you serve specific markets. We create content that provides that proof without looking templated.",
      subPoints: [
        { title: "City-Specific Service Pages", description: "Unique content for each service area. Not find-and-replace templates with city names swapped. Genuinely distinct pages." },
        { title: "Local Context Integration", description: "References to neighborhoods, landmarks, local regulations, and market conditions. Signals that you actually operate there." },
        { title: "Service Area Hierarchy", description: "Primary locations get comprehensive pages. Secondary areas get appropriate coverage without cannibalizing the core." },
        { title: "Conversion-Focused Structure", description: "Clear calls to action, local phone numbers, embedded maps, and trust signals specific to each location." },
        { title: "Schema Integration", description: "LocalBusiness and Service schema embedded on every location page. Eligibility for rich results established." },
        { title: "Internal Link Architecture", description: "Location pages connected to the hub structure. Authority flows from pillar content to local landing pages." }
      ],
      imageSrc: contentDevelopmentImg,
      imageAlt: "Content mind map showing Service, Location, Blog, FAQ, and Guide",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Blog & Topical Authority",
      headline: "Content Clusters That Make Service Pages Rank",
      description: "Service pages alone rarely rank for competitive terms. Supporting content builds the topical authority that signals expertise to search engines and LLMs.",
      subPoints: [
        { title: "Hub-Spoke Architecture", description: "Pillar pages cover core topics comprehensively. Supporting articles link back and cover subtopics in depth." },
        { title: "FAQ Expansion Strategy", description: "Common questions transformed into standalone articles. Targets People Also Ask features and provides LLM citation fodder." },
        { title: "Local Industry Coverage", description: "Content relevant to your specific market and industry. Attracts local links and establishes geographic authority." },
        { title: "Semantic Chunking for AI", description: "Content structured with clear headings, quotable statements, and complete answers. Optimized for LLM extraction and citation." },
        { title: "Seasonal Content Calendar", description: "Publishing schedule aligned with search demand patterns. Content live before seasonal spikes, not after." },
        { title: "Information Gain Focus", description: "Original insights, data, and perspectives. Content that adds value beyond what already exists, not just rewrites." }
      ],
      imageSrc: contentDevelopmentImg,
      imageAlt: "Content strategy diagram",
      ctaText: "Get Content Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Content Optimization & Refresh",
      headline: "Making Existing Content Work Harder",
      description: "Sometimes the best opportunity is improving what you already have. Pages with existing authority and backlinks can be transformed into ranking assets.",
      subPoints: [
        { title: "Content Performance Audit", description: "Pages ranked by traffic, rankings, and potential. Underperformers with ranking potential prioritized for optimization." },
        { title: "Search Intent Realignment", description: "Pages that target the wrong intent are restructured. Content matched to what the SERP actually shows." },
        { title: "Thin Content Expansion", description: "Pages below 1,000 words expanded with valuable detail. Comprehensive coverage that satisfies the query completely." },
        { title: "Freshness Updates", description: "Outdated statistics, screenshots, and examples replaced. Current year added to titles where appropriate." },
        { title: "Consolidation Strategy", description: "Multiple pages competing for the same keyword merged. Authority concentrated instead of split across weak pages." },
        { title: "Internal Link Injection", description: "Optimized pages connected to the broader site architecture. Links from high-authority pages directed to refreshed content." }
      ],
      imageSrc: contentDevelopmentImg,
      imageAlt: "Content optimization diagram",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "link-building": [
    {
      category: "Local Link Acquisition",
      headline: "Geographic Authority Through Community Links",
      description: "Local link building is not about volume. Links from locally relevant sources signal geographic authority that national competitors cannot replicate.",
      subPoints: [
        { title: "Local News & Publication Outreach", description: "Earn coverage in local news sites, community blogs, and regional industry publications. Editorial links that carry weight." },
        { title: "Chamber of Commerce & Business Associations", description: "Membership directories from established local organizations. Trusted sources that signal community presence." },
        { title: "Sponsorship & Event Links", description: "Local sports teams, charity events, school programs, and community initiatives. Real involvement that earns real links." },
        { title: "Local Business Partnerships", description: "Complementary businesses in the same market. Vendor pages, partner directories, and reciprocal relationships." },
        { title: "Local Resource Pages", description: "City and county websites, tourism boards, and community resource lists. Government and .edu links where appropriate." },
        { title: "Hyperlocal Content Promotion", description: "Content about local topics promoted to local audiences. Shares and links from people who care about the market." }
      ],
      imageSrc: linkBuildingImg,
      imageAlt: "Links mind map showing Local, Sponsor, Press, Community",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Authority & Editorial Links",
      headline: "Earning Links That Move Rankings",
      description: "Not all links are equal. A single link from a trusted, relevant source can outweigh dozens of low-quality directory submissions.",
      subPoints: [
        { title: "Guest Posting on Relevant Sites", description: "Expert content contributed to industry publications and respected blogs. Bylines that build authority and earn links." },
        { title: "Linkable Asset Creation", description: "Original research, tools, templates, and guides that attract natural editorial links. Content worth linking to." },
        { title: "Broken Link Reclamation", description: "Find broken links on relevant sites pointing to competitor or dead content. Offer your content as a replacement." },
        { title: "Unlinked Brand Mention Conversion", description: "Identify mentions of your brand that do not include a link. Reach out and convert mentions to actual links." },
        { title: "HARO & Journalist Outreach", description: "Respond to journalist queries with expert commentary. Earn links from news sites and major publications." },
        { title: "Digital PR Campaigns", description: "Newsworthy angles, data studies, and expert commentary that earn coverage. Links from authoritative sources." }
      ],
      imageSrc: linkBuildingImg,
      imageAlt: "Authority link building diagram",
      ctaText: "Get Link Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Link Profile Health",
      headline: "Natural Profiles That Avoid Penalties",
      description: "Over-optimized anchor text triggers penalties. Unnatural link velocity raises flags. We build diverse, natural-looking profiles that search engines reward.",
      subPoints: [
        { title: "Anchor Text Diversification", description: "Strategic mix of branded, naked URL, generic, and keyword anchors. No single anchor type dominates the profile." },
        { title: "Link Velocity Management", description: "Steady acquisition that mimics natural growth patterns. No sudden spikes that trigger algorithmic scrutiny." },
        { title: "Referring Domain Diversity", description: "Links from a variety of sources, not concentrated on a few domains. Broad authority signals across the profile." },
        { title: "Toxic Link Monitoring", description: "Regular audits to identify spammy or harmful links. Disavow file maintained and submitted when necessary." },
        { title: "Competitor Gap Analysis", description: "Identify link sources your competitors have that you do not. Prioritize opportunities where outreach is likely to succeed." },
        { title: "Link Attribution Tracking", description: "New links monitored and attributed to specific campaigns. ROI on link building efforts measured and reported." }
      ],
      imageSrc: linkBuildingImg,
      imageAlt: "Anchor text strategy diagram",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "schema-markup": [
    {
      category: "Business Identity Schema",
      headline: "Structured Data That Defines Your Business",
      description: "Schema markup tells search engines exactly what your business is, where it operates, and what it offers. This powers Knowledge Panels, rich results, and AI visibility.",
      subPoints: [
        { title: "LocalBusiness Schema", description: "Core identity markup including business name, address, phone, hours, service area, payment methods, and business type." },
        { title: "Organization Schema", description: "Brand-level markup that establishes corporate identity, logo, social profiles, and founding information." },
        { title: "Person & Team Schema", description: "Founder and key team member markup that builds E-E-A-T signals. Connects expertise to the business entity." },
        { title: "Contact Point Schema", description: "Multiple contact methods structured clearly. Sales, support, and billing contacts distinguished for search engines." },
        { title: "Same-As & Social Profiles", description: "Official social media and directory profiles linked to the business entity. Reinforces brand identity across platforms." },
        { title: "Geo Coordinates & Service Area", description: "Precise location data and service area polygons. Powers map integrations and local pack eligibility." }
      ],
      imageSrc: schemaMarkupImg,
      imageAlt: "Schema mind map showing Local, FAQ, About, Org, Service",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Service & Offer Schema",
      headline: "Structured Data for What You Offer",
      description: "Service schema helps search engines understand what you provide and where. This enables rich results that display service details directly in search.",
      subPoints: [
        { title: "Service Schema", description: "Individual service definitions with descriptions, service areas, duration estimates, and pricing indicators." },
        { title: "ServiceArea Schema", description: "Geographic coverage areas that match Google Business Profile settings. City, region, or radius-based definitions." },
        { title: "Offer & Price Schema", description: "Pricing information structured for rich results. Starting prices, price ranges, and promotional offers." },
        { title: "AggregateRating Schema", description: "Review and rating data structured for star displays in search results. Rating count, average, and best/worst values." },
        { title: "AreaServed Nesting", description: "Service area schema nested properly within LocalBusiness markup. Geographic relevance signals strengthened." },
        { title: "HasOfferCatalog Schema", description: "Full service catalogs structured for search engines. Complete offerings discoverable through structured data." }
      ],
      imageSrc: schemaMarkupImg,
      imageAlt: "Service schema markup diagram",
      ctaText: "Get Schema Audit",
      ctaHref: "#contact"
    },
    {
      category: "Content & Rich Result Schema",
      headline: "Rich Results for Every Content Type",
      description: "Beyond business identity, schema markup unlocks enhanced search appearances for FAQ content, reviews, articles, how-to guides, and more.",
      subPoints: [
        { title: "FAQ Schema", description: "Question and answer pairs structured for FAQ rich results. Targets People Also Ask features and expands SERP real estate." },
        { title: "Review & Testimonial Schema", description: "Customer reviews structured for star rating displays. Review author, date, and rating clearly marked." },
        { title: "Article & Blog Schema", description: "News and blog content structured for Google News, Discover, and Top Stories eligibility." },
        { title: "HowTo & Step Schema", description: "Step-by-step content formatted for how-to rich results. Images, tools, and supplies included." },
        { title: "Breadcrumb Schema", description: "Navigation hierarchy structured for breadcrumb displays in search results. Improves click-through rates." },
        { title: "Video & Image Schema", description: "Media content structured for video carousels and image search. Thumbnails, duration, and descriptions included." }
      ],
      imageSrc: schemaMarkupImg,
      imageAlt: "Content schema markup diagram",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ]
};
