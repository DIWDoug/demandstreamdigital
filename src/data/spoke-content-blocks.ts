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
      category: "Visible Elements",
      headline: "Superior On-Page Optimization",
      description: "The visible layer of on-page optimization covers everything consumers interact with directly. We optimize for both readability and search intent, treating every element as an opportunity to signal relevance.",
      subPoints: [
        { title: "Intent-Focused Title Tags", description: "We prioritize search intent over arbitrary character limits. Title tags up to 100 characters when the context demands it." },
        { title: "CTR-Optimized Meta Descriptions", description: "Following Backlinko best practices, meta descriptions are written like ad copy. The goal is click-through rate." },
        { title: "Header Hierarchy & LSI Signals", description: "H1-H6 tags aligned with natural language patterns and latent semantic indexing." },
        { title: "Hub-Spoke Internal Linking", description: "Every page is connected to its topical cluster. Internal links build authority and guide crawlers." }
      ],
      imageSrc: visibleElementsImg,
      imageAlt: "SEO mind map showing titles, metas, headers, links, and images",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Technical Markup",
      headline: "Structured Data That Earns Rich Results",
      description: "Technical on-page goes beyond visible content. Comprehensive schema markup tells search engines exactly what your content means.",
      subPoints: [
        { title: "LocalBusiness & Organization Schema", description: "Core identity markup that powers Knowledge Panels and map integrations." },
        { title: "Service & About Schema", description: "Structured markup that clarifies what you do, where you do it, and the scope of offerings." },
        { title: "FAQ & Testimonials Markup", description: "FAQ schema targets People Also Ask features. Review schema builds trust signals." },
        { title: "Image Alt Text & Accessibility", description: "Every image optimized for screen readers and search engines." }
      ],
      imageSrc: technicalMarkupImg,
      imageAlt: "Schema markup mind map showing LocalBusiness, Organization, FAQ, Service, Reviews, About",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    },
    {
      category: "Full-Funnel Content",
      headline: "Awareness to Decision. Mapped and Optimized.",
      description: "We approach on-page optimization with the entire customer journey in mind. Each content type is treated uniquely based on funnel stage.",
      subPoints: [
        { title: "Top-of-Funnel Awareness Content", description: "Educational guides and thought leadership that captures early-stage searchers." },
        { title: "Middle-Funnel Consideration Content", description: "Comparison pages and detailed guides that move prospects from awareness to evaluation." },
        { title: "Bottom-Funnel Decision Content", description: "Service pages and case studies designed to capture users ready to take action." },
        { title: "Keyword Density & Semantic Relevance", description: "LSI signals and semantic variations that signal comprehensive coverage." }
      ],
      imageSrc: fullFunnelImg,
      imageAlt: "Marketing funnel showing TOFU, MOFU, BOFU stages",
      ctaText: "Get a Custom Audit",
      ctaHref: "#contact"
    }
  ],

  "technical-seo-audits": [
    {
      category: "Site Architecture",
      headline: "Technical Foundations That Rankings Require",
      description: "Technical SEO issues silently kill rankings. We audit the invisible infrastructure that determines whether search engines can find, crawl, and index your content.",
      subPoints: [
        { title: "Crawlability Analysis", description: "Identify what search engines can and cannot access. Fix crawl budget waste and blocked resources." },
        { title: "Site Structure Optimization", description: "Clear hierarchy that distributes authority and helps users find what they need." },
        { title: "XML Sitemap & Robots.txt", description: "Properly configured directives that guide crawlers to priority content." },
        { title: "Internal Link Architecture", description: "Strategic linking that passes authority and establishes topical relationships." }
      ],
      imageSrc: technicalSeoImg,
      imageAlt: "Technical SEO mind map showing Speed, Audit, Crawl, and Index",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Performance",
      headline: "Core Web Vitals and Page Speed",
      description: "Google uses page experience signals as ranking factors. We optimize the metrics that matter for both rankings and user experience.",
      subPoints: [
        { title: "Largest Contentful Paint (LCP)", description: "Optimize loading performance so main content appears within 2.5 seconds." },
        { title: "First Input Delay (FID)", description: "Ensure pages respond to user interactions within 100 milliseconds." },
        { title: "Cumulative Layout Shift (CLS)", description: "Eliminate unexpected layout shifts that frustrate users and hurt rankings." },
        { title: "Mobile Usability", description: "Responsive design, touch targets, and viewport configuration for mobile-first indexing." }
      ],
      imageSrc: technicalSeoImg,
      imageAlt: "Technical SEO performance metrics",
      ctaText: "Get a Technical Audit",
      ctaHref: "#contact"
    },
    {
      category: "Indexation",
      headline: "Ensuring Every Important Page Gets Indexed",
      description: "If search engines cannot index your pages, they cannot rank them. We identify and fix indexation barriers systematically.",
      subPoints: [
        { title: "Index Coverage Analysis", description: "Review Google Search Console data to identify excluded, errored, and valid pages." },
        { title: "Duplicate Content Resolution", description: "Canonical tags and content consolidation to prevent keyword cannibalization." },
        { title: "Redirect Chain Cleanup", description: "Fix redirect chains and loops that waste crawl budget and dilute authority." },
        { title: "Structured Data Validation", description: "Ensure schema markup is error-free and eligible for rich results." }
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
