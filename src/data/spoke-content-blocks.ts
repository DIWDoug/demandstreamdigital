// Spoke-specific content blocks for the alternating layout
// Each spoke has customized content organized by category

// On-Page Optimization illustrations
import onPageTitlesImg from "@/assets/spoke/on-page-titles.png";
import onPageStructureImg from "@/assets/spoke/on-page-structure.png";
import onPageLinksImg from "@/assets/spoke/on-page-links.png";

// Technical SEO illustrations
import technicalStructureImg from "@/assets/spoke/technical-structure.png";
import technicalCrawlingImg from "@/assets/spoke/technical-crawling.png";
import technicalDuplicateImg from "@/assets/spoke/technical-duplicate.png";
import technicalSpeedImg from "@/assets/spoke/technical-speed.png";

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

// Review Management illustrations
import reviewGenerationImg from "@/assets/spoke/review-generation.png";
import reviewPsychologyImg from "@/assets/spoke/review-psychology.png";
import reviewResponseImg from "@/assets/spoke/review-response.png";
import reviewPlatformsImg from "@/assets/spoke/review-platforms.png";
import reviewMonitoringImg from "@/assets/spoke/review-monitoring.png";

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
  "technical-seo": [
    { question: "Why does technical SEO matter for local businesses?", answer: "Multi-location sites create technical complexity. If Google can't crawl and index your location pages, those markets don't exist in search. Technical issues silently kill local visibility." },
    { question: "How long does technical SEO take to show results?", answer: "Indexation fixes show impact within 1-2 weeks. Page speed improvements affect local rankings over 4-8 weeks as Google re-evaluates Core Web Vitals." },
    { question: "Do you implement fixes or just provide recommendations?", answer: "Both. We provide specifications for developer teams and can implement directly via CMS access. Most technical fixes we handle ourselves." },
    { question: "What tools do you use for local technical SEO?", answer: "Screaming Frog, site audit tools, Google Search Console, PageSpeed Insights, and Lighthouse. We validate location page issues across multiple tools." },
    { question: "How do you prioritize technical fixes?", answer: "Location page indexation first, then site architecture, then duplicate location content, then mobile speed. We fix what blocks local rankings before marginal optimizations." },
    { question: "Does technical SEO help with AI visibility?", answer: "Yes. Clean site structure and schema markup help AI systems understand your content. Structured data improves the accuracy of AI citations and increases chances of appearing in AI-generated local results." }
  ],
  "local-keyword-strategy": [
    { question: "How do you identify seed keywords?", answer: "We start with your services, products, and customer pain points. These become seed keywords that we expand with location modifiers like city names, neighborhoods, landmarks, and ZIP codes." },
    { question: "What's the difference between implicit and explicit local keywords?", answer: "Explicit keywords specify a location ('plumber Dallas'). Implicit keywords don't mention location but still trigger local results ('emergency plumber'). We target both to capture full search demand." },
    { question: "How do you find competitor keyword gaps?", answer: "We analyze which keywords competitors rank for that you don't. These 'untapped' opportunities often represent quick wins where you're missing visibility." },
    { question: "Do you account for 'near me' searches?", answer: "Absolutely. 'Near me' and implicit local queries are core to local keyword strategy. We map these to appropriate page types and GBP optimization." },
    { question: "How do you handle multi-location keyword research?", answer: "Each location gets distinct keyword research and mapping. Different markets have different search behaviors. We prevent cannibalization across locations." },
    { question: "How do keywords inform GBP optimization?", answer: "Keyword research informs GBP category selection and description optimization. Alignment between website keywords and GBP signals strengthens local rankings." }
  ],
  "content-development": [
    { question: "Who writes the content?", answer: "Our in-house content team with local SEO expertise. We never use AI-generated content without substantial human editing and subject matter expertise." },
    { question: "How do you ensure content is unique per location?", answer: "Each location page includes market-specific details: local landmarks, regulations, service area specifics, hours, contact info, and unique value propositions. Boilerplate 'doorway pages' with only city names swapped violate Google's guidelines and we never create them." },
    { question: "What is your content approval process?", answer: "Draft delivered for review, single revision round included, then final approval before publishing. Additional revisions available at added cost." },
    { question: "Do you provide ongoing content or one-time pieces?", answer: "Both. We offer one-time content projects and monthly retainer packages for ongoing blog content, location pages, and content refreshes." },
    { question: "How do you optimize content for AI visibility?", answer: "Clear section headings, quotable statements, complete answers to questions, and semantic chunking that LLMs can parse and cite accurately. FAQ blocks are particularly effective for AI extraction." }
  ],
  "link-building": [
    { question: "What types of links do you build?", answer: "Editorial links from local news, industry publications, chamber of commerce directories, local sponsorships, and guest contributions. No PBNs or paid link schemes." },
    { question: "How many links per month should we expect?", answer: "Quality over quantity. Typically 5-15 relevant links monthly depending on campaign scope. One link from a trusted local source beats 50 low-quality submissions." },
    { question: "Do you build links to specific pages or just homepage?", answer: "Strategic distribution. Homepage and service pages for authority, location pages for geographic signals, and blog content for topical relevance." },
    { question: "How do you measure link building success?", answer: "Referring domain growth, Domain Authority changes, ranking improvements for targeted pages, and referral traffic from acquired links." },
    { question: "What is your approach to anchor text?", answer: "Natural distribution: branded anchors, naked URLs, generic terms, and occasional keyword-rich anchors. Over-optimization triggers penalties." }
  ],
  "schema-markup": [
    { question: "What schema types do you implement?", answer: "LocalBusiness, Organization, Service, FAQ, Review, Breadcrumb, and Article schema. Additional types added based on content and rich result opportunities." },
    { question: "How do you test schema implementation?", answer: "Google Rich Results Test, Schema.org validator, and Search Console enhancement reports. We verify eligibility for all applicable rich results." },
    { question: "Does schema directly improve rankings?", answer: "Schema itself is not a direct ranking factor. However, rich results from schema can significantly improve click-through rates, which indirectly benefits rankings." },
    { question: "How often should schema be updated?", answer: "Updated when business information changes, new services are added, or Google announces new supported schema types. Quarterly reviews recommended." },
    { question: "Can schema help with AI search visibility?", answer: "Yes. Structured data helps LLMs understand entity relationships, business details, and content structure. Clean schema improves chances of accurate AI citations and AI Overview inclusion." }
  ],
  "nap-citations": [
    { question: "What is a NAP citation?", answer: "A citation is any online mention of your business name, address, and phone number. Citations on trusted directories validate business identity with Google and feed the sources AI systems reference." },
    { question: "How many citations do you build?", answer: "We start with 50+ core citations across major directories and data aggregators, then add industry-specific platforms. Quality and consistency matter more than raw quantity." },
    { question: "How long until citations impact rankings?", answer: "Most citations appear in Google's index within 2-4 weeks. Ranking impact typically shows within 4-8 weeks as NAP consistency signals propagate." },
    { question: "Do you clean up incorrect citations?", answer: "Yes. Citation cleanup is the first step. We identify and correct inconsistencies before building new citations. Conflicting NAP data actively hurts rankings." },
    { question: "Why do citations matter for AI visibility?", answer: "Google's AI Overviews cite trusted third-party sources like Yelp, TripAdvisor, and industry directories. Accurate listings on these platforms increase chances of AI citation." },
    { question: "What are data aggregators?", answer: "Data aggregators like Foursquare, Data Axle, and Neustar distribute business information to hundreds of directories. Submitting to aggregators ensures consistent NAP across the citation ecosystem." }
  ],
  // GBP SEO FAQs
  "gbp-optimization": [
    { question: "How long until GBP changes affect rankings?", answer: "Profile optimizations can show impact within 1-2 weeks. Competitive markets may take longer as other signals like reviews and citations need to build." },
    { question: "Do you need access to the GBP account?", answer: "Yes. We need manager-level access to make optimizations, respond to reviews, and create posts. Owner access remains with the business." },
    { question: "Can you help with new GBP verification?", answer: "Yes. We guide clients through the verification process and troubleshoot issues. Verification method depends on business type and Google's requirements." },
    { question: "How do secondary categories affect rankings?", answer: "Secondary categories expand the range of searches your listing appears for. We research competitor categories and add relevant ones to maximize keyword coverage." },
    { question: "Does GBP optimization help with AI Overviews?", answer: "Yes. AI Overviews often pull directly from GBP data including description, services, hours, and attributes. A complete, accurate profile improves AI citation accuracy." }
  ],
  "review-management": [
    { question: "Can you guarantee a certain star rating?", answer: "No. We implement systems that generate more reviews from satisfied customers, which typically improves ratings over time. Businesses with 4.5+ stars get nearly 4x more clicks than those below 4 stars, so the investment matters." },
    { question: "How do you handle fake negative reviews?", answer: "We report policy-violating reviews to Google with documentation. Removal is not guaranteed but we have a strong success rate with legitimate violations. We also focus on building authentic review volume to dilute negative impact." },
    { question: "Do you respond to reviews as the business?", answer: "We draft responses for your approval. Once templates and brand voice are established, we can respond directly. 60% of reviewers expect a response within 2 days, so speed matters." },
    { question: "Why does review response matter for SEO and conversions?", answer: "Google confirms responses strengthen local presence. 46% of consumers avoid businesses that argue with customers, and 54% avoid businesses where responses don't solve cited problems. Response quality directly impacts both rankings and conversions." },
    { question: "What should customers mention in reviews?", answer: "Specific services and location help with traditional rankings and AI visibility. But authenticity matters most. We craft request templates that encourage natural, detailed reviews without scripting customers." },
    { question: "How many reviews per month should we target?", answer: "That depends on competitive analysis. 39% of customers filter for recent reviews, so consistent monthly velocity matters more than a one-time push. We set targets based on what local pack leaders are generating." },
    { question: "Which platforms matter beyond Google?", answer: "66% of reviewers focus on Google, but 42% prefer Facebook, 36% Yelp, and 16% NextDoor. AI Overviews also cite Yelp, TripAdvisor, and industry-specific platforms. We recommend platform diversification for both SEO and AI visibility." },
    { question: "What are common review request mistakes to avoid?", answer: "Never offer incentives for reviews (forbidden by most platforms). Never use a review kiosk (shared IP triggers filters). Never ask staff or family to review. Never gate reviews by sentiment. These shortcuts backfire." }
  ],
  "citation-building": [
    { question: "How many citations do you build?", answer: "We start with 50+ core citations and add industry-specific directories. Quality and relevance matter more than raw quantity." },
    { question: "How long until citations are indexed?", answer: "Most citations appear in Google's index within 2-4 weeks. Some directories take longer to be crawled." },
    { question: "Do you clean up existing incorrect citations?", answer: "Yes. Citation cleanup is included. We identify and correct inconsistencies before building new citations." },
    { question: "Why do citations matter for AI visibility?", answer: "AI Overviews cite trusted third-party sources like Yelp and industry directories. Accurate, consistent listings on these platforms increase AI citation eligibility." }
  ],
  "photo-optimization": [
    { question: "Do you take photos for GBP?", answer: "We optimize photos you provide. If professional photography is needed, we can recommend local photographers." },
    { question: "How many photos should a GBP have?", answer: "We recommend at least 10-15 high-quality photos covering interior, exterior, team, and services. More is better if quality is maintained." },
    { question: "Can users upload inappropriate photos?", answer: "Yes, but we monitor for this and report policy violations for removal. We also ensure your photos dominate the listing." }
  ],
  "qa-management": [
    { question: "Can anyone ask questions on GBP?", answer: "Yes. Any Google user can ask questions, and any user can answer. This is why proactive management and monitoring are essential." },
    { question: "How many questions should we seed?", answer: "We typically seed 10-15 questions covering common customer inquiries, objections, and keyword-rich topics." },
    { question: "Can questions be removed?", answer: "Questions violating Google policies can be reported for removal. Legitimate questions cannot be removed but can be answered authoritatively." }
  ],
  "post-scheduling": [
    { question: "How often should we post to GBP?", answer: "Weekly posting is our standard. More frequent posting shows diminishing returns for most businesses." },
    { question: "What types of posts work best?", answer: "Offers with clear CTAs typically drive the most engagement. Updates and events also perform well when timely and relevant." },
    { question: "How long do GBP posts stay visible?", answer: "Posts remain visible for 6 months, but they're most effective in the first 7 days. Regular posting ensures fresh content." }
  ],
  // Paid Media FAQs
  "google-ads": [
    { question: "What's the minimum budget for Google Ads?", answer: "We recommend $2,000/month minimum ad spend for local campaigns. This provides enough data for optimization and meaningful results." },
    { question: "How quickly will we see results?", answer: "Initial leads typically appear within the first week. Optimization over 30-60 days significantly improves cost per lead." },
    { question: "Do you require long-term contracts?", answer: "No. Month-to-month with 30-day notice. Results keep clients, not contracts." }
  ],
  "meta-ads": [
    { question: "Is Facebook still effective for local businesses?", answer: "Yes. Meta's targeting capabilities make it highly effective for local awareness and lead generation, especially for visual services." },
    { question: "What creative do you need from us?", answer: "High-quality photos of work, team, and location. We can create ad copy and design. Video is optional but performs well." },
    { question: "How do lead forms compare to landing pages?", answer: "Lead forms have higher completion rates but sometimes lower quality. We test both and optimize for your specific situation." }
  ],
  "local-service-ads": [
    { question: "What's the Google Guarantee?", answer: "Google backs services up to a lifetime limit. Customers can request refunds for unsatisfactory work. It builds trust and improves conversions." },
    { question: "Can we dispute bad leads?", answer: "Yes. We dispute leads that don't meet LSA criteria and have a strong track record of getting credits for invalid leads." },
    { question: "What industries qualify for LSA?", answer: "Home services, legal, financial, health, and many other categories. We verify eligibility during discovery." }
  ],
  "retargeting-campaigns": [
    { question: "How long should we retarget visitors?", answer: "Typically 30-90 days depending on sales cycle. We segment by recency and adjust messaging accordingly." },
    { question: "Won't retargeting annoy people?", answer: "With proper frequency capping and relevant messaging, retargeting reminds rather than annoys. We monitor closely." },
    { question: "What platforms do you use for retargeting?", answer: "Google Display, YouTube, Meta, and search remarketing. Platform selection depends on where your audience spends time." }
  ],
  "landing-page-design": [
    { question: "Do we need separate landing pages for each campaign?", answer: "Ideally yes. Message match between ads and landing pages improves conversion rates and Quality Scores." },
    { question: "Can you work with our existing website?", answer: "Yes. We can create landing pages within your CMS or use dedicated landing page platforms depending on needs." },
    { question: "How long does landing page development take?", answer: "Typically 1-2 weeks from content approval to launch. Rush timelines available when needed." }
  ],
  "conversion-tracking": [
    { question: "What if we can't install tracking code?", answer: "We work with your developer or use Google Tag Manager. Most sites can accommodate tracking with minimal technical work." },
    { question: "Can you track phone calls?", answer: "Yes. Dynamic number insertion tracks calls from all digital sources with full attribution." },
    { question: "How do you handle offline conversions?", answer: "We can import CRM data to connect leads to sales, providing true ROI visibility." }
  ],
  // Email Marketing FAQs
  "campaign-strategy": [
    { question: "How often should we email our list?", answer: "Depends on your audience and content. Weekly is common for newsletters, but promotional frequency varies. We test and optimize." },
    { question: "What email platform do you work with?", answer: "We work with most major platforms including Mailchimp, Klaviyo, HubSpot, and others. We recommend based on needs." },
    { question: "Can you help with list building?", answer: "Yes. Lead magnet development, signup form optimization, and list growth strategies are all part of our approach." }
  ],
  "list-management": [
    { question: "How do you handle unsubscribes?", answer: "Unsubscribes are processed immediately and automatically. We ensure compliance with all anti-spam regulations." },
    { question: "Should we buy email lists?", answer: "Never. Purchased lists have poor engagement, damage sender reputation, and violate most email platform terms." },
    { question: "How often should we clean our list?", answer: "Ongoing. We remove hard bounces immediately and run re-engagement campaigns before removing inactive subscribers." }
  ],
  "automation-flows": [
    { question: "What automations should we start with?", answer: "Welcome sequence first, then post-service review requests, then abandonment recovery. Build from there based on results." },
    { question: "How complex can automations get?", answer: "As complex as needed. We build multi-branch flows with conditional logic, but start simple and add complexity based on data." },
    { question: "Can automations integrate with our CRM?", answer: "Yes. Most major CRMs integrate with email platforms. Service dates can automatically trigger review request sequences." },
    { question: "How do you time review request emails?", answer: "Shortly after positive service experience, at peak satisfaction. Follow-up reminder 3-7 days later. The #1 reason customers don't review is they forget." },
    { question: "What makes a review request email convert?", answer: "Personalization (use name, reference specific service), direct review links (30% skip because process is confusing), and gratitude (63% of reviewers want to show appreciation)." }
  ],
  "newsletter-design": [
    { question: "Do we need to provide design assets?", answer: "Brand guidelines and logo are helpful. We can work with existing templates or create new designs aligned with your brand." },
    { question: "How do you handle dark mode?", answer: "We design templates that render well in both light and dark modes, testing across major email clients." },
    { question: "Can we edit templates ourselves?", answer: "Yes. We build templates in your platform's editor so your team can make updates as needed." }
  ],
  "ab-testing": [
    { question: "How long should tests run?", answer: "Until statistical significance is reached. Typically 24-48 hours for subject lines, longer for content tests." },
    { question: "What should we test first?", answer: "Subject lines typically have the biggest impact. Then send times, then content and CTAs." },
    { question: "How many variants should we test?", answer: "Start with A/B (two variants). Multivariate testing requires larger lists for valid results." }
  ],
  "performance-analytics": [
    { question: "What's a good open rate?", answer: "Industry averages vary (15-25%), but your own trends matter more. We benchmark against your history and improve from there." },
    { question: "How do you track revenue from email?", answer: "Through conversion tracking, UTM parameters, and e-commerce integration where available." },
    { question: "How often will we receive reports?", answer: "Monthly standard, with post-campaign reports for major sends. Real-time dashboard access available." }
  ],
  // Authority Building FAQs
  "local-links": [
    { question: "How long until local links impact rankings?", answer: "Initial impact within 4-8 weeks as links are indexed. Compound effects build over 3-6 months." },
    { question: "What makes a 'local' link?", answer: "Links from sources with geographic relevance: local news, community sites, regional publications, and local organizations." },
    { question: "Do you guarantee link placements?", answer: "We guarantee effort and typically achieve 5-15 quality placements monthly. Specific site placements cannot be guaranteed." }
  ],
  "citations": [
    { question: "Aren't citations outdated?", answer: "Citations remain a foundational ranking factor. They're not as exciting as links, but inconsistent citations actively hurt rankings." },
    { question: "How do you find industry citations?", answer: "We research each client's vertical to identify relevant directories, associations, and platforms competitors use." },
    { question: "Do you build citations internationally?", answer: "We focus on directories relevant to service areas. For local businesses, that typically means US directories and local platforms." }
  ],
  "brand-mentions": [
    { question: "Isn't Reddit marketing spammy?", answer: "Done wrong, yes. We focus on genuinely helpful participation that adds value. No promotional spam, ever." },
    { question: "How do brand mentions help SEO?", answer: "Unlinked mentions contribute to entity recognition. They also feed LLM training data for AI visibility." },
    { question: "Can you manage our social media?", answer: "Brand mentions focus on third-party platforms where customers discuss services. Traditional social management is a separate service." }
  ],
  "anchor-text": [
    { question: "What's a natural anchor text profile?", answer: "Primarily branded and naked URLs, with smaller percentages of generic, partial match, and exact match anchors." },
    { question: "Can anchor text trigger penalties?", answer: "Yes. Over-optimized profiles with too many exact-match anchors can trigger manual actions or algorithmic penalties." },
    { question: "How do you control anchor text from earned links?", answer: "We provide guidance to publications and suggest anchor text, but ultimately earned links have natural variation." }
  ],
  "sponsorships": [
    { question: "How much do sponsorships cost?", answer: "Varies widely from $100 youth sports jerseys to $5,000+ major events. We identify opportunities matching budget and goals." },
    { question: "Do all sponsorships include links?", answer: "Not automatically. We negotiate link inclusion in sponsorship agreements and verify placement." },
    { question: "Can you find sponsorships in our area?", answer: "Yes. We research local opportunities specific to each client's market and industry." }
  ],
  "reputation-signals": [
    { question: "How do you generate reviews ethically?", answer: "We implement systems that make it easy for happy customers to leave reviews. No fake reviews, no incentives, ever." },
    { question: "Can you remove negative reviews?", answer: "Only reviews violating platform policies can be removed. We report violations and help generate positive reviews to improve overall rating." },
    { question: "What platforms matter most for reviews?", answer: "Google is primary for most local businesses. Industry-specific platforms matter for certain verticals (Yelp for restaurants, Avvo for lawyers, etc.)." }
  ],
  // Reporting FAQs
  "white-label-dashboards": [
    { question: "Can clients access dashboards directly?", answer: "Yes. We set up secure client logins with appropriate access levels. They see your branding throughout." },
    { question: "What data sources can you connect?", answer: "Most major platforms with APIs: Google Analytics, Search Console, Ads, Meta, call tracking, CRMs, and more." },
    { question: "How often does dashboard data update?", answer: "Most data refreshes daily. Some sources update hourly. Real-time for certain metrics." }
  ],
  "monthly-reports": [
    { question: "When are monthly reports delivered?", answer: "By the 5th of each month for the previous month's data. Consistent timing you can count on." },
    { question: "Can we customize report format?", answer: "Yes. We adjust KPIs, sections, detail level, and format based on each client's needs and preferences." },
    { question: "Do you provide talking points for client calls?", answer: "Yes. Each report includes key points, wins to highlight, and suggested framing for challenges." }
  ],
  "rank-tracking": [
    { question: "How often do you check rankings?", answer: "Weekly standard. Daily tracking available for competitive situations or during active campaigns." },
    { question: "Do you track mobile and desktop separately?", answer: "Yes. Mobile and desktop rankings can differ significantly. We track both independently." },
    { question: "What about local pack vs organic rankings?", answer: "We track both. Local 3-pack positions are tracked separately from organic website rankings." }
  ],
  "call-tracking": [
    { question: "Do callers see tracking numbers or real numbers?", answer: "They see tracking numbers that forward instantly to real numbers. Call quality is identical." },
    { question: "Can you use our local area codes?", answer: "Yes. We provision local numbers that match your market for caller trust." },
    { question: "Are calls recorded?", answer: "Recording is optional and disclosed per legal requirements. It's valuable for quality assurance and lead qualification." }
  ],
  "roi-analysis": [
    { question: "What if we can't track revenue directly?", answer: "We use lead values based on close rates and average transaction values. Directional ROI is still calculable." },
    { question: "How accurate is ROI calculation?", answer: "Accuracy depends on data quality. With good tracking and CRM integration, we can be very precise. Without, we use reasonable estimates." },
    { question: "Can you prove marketing is profitable?", answer: "In most cases, yes. Clear attribution, reasonable lead values, and consistent tracking let us demonstrate return." }
  ],
  "client-presentations": [
    { question: "Can you present directly to our clients?", answer: "We operate white-label, so you present. But we can join calls for technical questions if introduced appropriately." },
    { question: "What format are presentations?", answer: "PowerPoint/Google Slides standard. PDF exports available. Screen-share optimized." },
    { question: "How far in advance do you need for presentation prep?", answer: "3-5 business days ideal. Rush turnaround possible for existing clients with established templates." }
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

  "technical-seo": [
    {
      category: "Site Structure & Architecture",
      headline: "Local Sites Need Flat, Crawlable Structure",
      description: "Multi-location sites create technical complexity fast. Service pages, location pages, and blog content need clear hierarchy so Google indexes every market correctly.",
      subPoints: [
        { title: "Flat Architecture", description: "Every location and service page within 3 clicks of homepage. Deep pages get crawled and indexed." },
        { title: "Location Hub Structure", description: "City pages grouped under state or region. No orphan location pages without internal links." },
        { title: "Service Area URLs", description: "URLs follow logical patterns: /locations/dallas/ or /plumber-dallas/. Google understands geographic targeting." },
        { title: "Breadcrumbs Navigation", description: "Breadcrumbs show location hierarchy and appear in local search results." },
        { title: "Cross-Linking Strategy", description: "Service pages link to relevant location pages. Location pages link to service details. Authority flows intentionally." },
        { title: "Siloed Categories", description: "Services, locations, and blog content organized in clear silos. Google understands site purpose at a glance." }
      ],
      imageSrc: technicalStructureImg,
      imageAlt: "Local site architecture diagram",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Crawling & Indexation",
      headline: "Every Location Page Must Be Indexed",
      description: "If Google can't find your client's location pages, those markets don't exist in search. Multi-location businesses often have dozens of unindexed pages.",
      subPoints: [
        { title: "Page Indexing Report", description: "Search Console coverage reviewed per location. Excluded city pages investigated immediately." },
        { title: "Location Page Crawl", description: "Screaming Frog validates all location URLs are discoverable and returning 200 status." },
        { title: "XML Sitemap by Location", description: "Location pages included in sitemap. No 404s, redirects, or noindexed market pages." },
        { title: "GSC Inspect Tool", description: "Problem location pages inspected individually. Rendering issues blocking local content fixed." },
        { title: "Service Area Linking", description: "Internal links from homepage and service pages point to each location. No orphaned markets." },
        { title: "Robots.txt Review", description: "Directives audited so location directories and city pages are not accidentally blocked." }
      ],
      imageSrc: technicalCrawlingImg,
      imageAlt: "Location page indexation workflow",
      ctaText: "Get Technical Analysis",
      ctaHref: "#contact"
    },
    {
      category: "Duplicate & Thin Content",
      headline: "Location Pages Must Be Unique",
      description: "Find-and-replace location pages hurt rankings. Google treats thin location content as doorway pages. Each market needs genuine differentiation.",
      subPoints: [
        { title: "Location Page Audit", description: "Every city page reviewed for unique content. Template-only pages flagged for expansion." },
        { title: "Canonical Strategy", description: "Service pages canonicalize correctly. Location variations don't compete with each other." },
        { title: "Thin Content Expansion", description: "Location pages below 500 words expanded with market-specific details, landmarks, and service notes." },
        { title: "Service Area Differentiation", description: "Neighboring city pages include unique value propositions. No duplicate service descriptions." },
        { title: "Parameter Handling", description: "URL parameters from filters or tracking don't create duplicate location page variations." },
        { title: "Noindex Utility Pages", description: "Thank you pages, internal tools, and tag archives noindexed. Only valuable pages compete." }
      ],
      imageSrc: technicalDuplicateImg,
      imageAlt: "Location content quality diagram",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    },
    {
      category: "PageSpeed & Core Web Vitals",
      headline: "Mobile Speed Wins Local Search",
      description: "Local searches are overwhelmingly mobile. Slow location pages lose clicks to faster competitors. Core Web Vitals directly affect local rankings.",
      subPoints: [
        { title: "Location Page Size", description: "Each city page optimized for mobile. Images compressed, scripts deferred." },
        { title: "LCP Under 2.5s", description: "Hero images and maps load fast. Largest Contentful Paint passes on mobile devices." },
        { title: "INP Under 200ms", description: "Click-to-call buttons and forms respond instantly. No JavaScript delays on interaction." },
        { title: "CLS Near Zero", description: "Maps and images don't shift layout. No unexpected movement when location content loads." },
        { title: "Third-Party Script Audit", description: "Review widgets, chat tools, and tracking pixels. Each adds mobile load time." },
        { title: "Mobile Usability", description: "Touch targets sized for thumbs. Phone numbers tappable. Forms work on small screens." }
      ],
      imageSrc: technicalSpeedImg,
      imageAlt: "Mobile speed optimization for local",
      ctaText: "Get Speed Analysis",
      ctaHref: "#contact"
    }
  ],

  "local-keyword-strategy": [
    {
      category: "Seed Development",
      headline: "Build Your Keyword Foundation",
      description: "Local keyword research starts with seed keywords built from your business, not generic lists. We identify terms from services, products, and customer pain points.",
      subPoints: [
        { title: "Service Terms", description: "Every service you offer becomes a seed keyword. Variations and synonyms captured." },
        { title: "Product Terms", description: "Specific products and brands people search for. Inventory-aligned keywords." },
        { title: "Pain Point Terms", description: "Problems customers face that you solve. 'Leaky faucet' not just 'plumber'." },
        { title: "Location Modifiers", description: "Cities, neighborhoods, landmarks, ZIP codes, and street names combined with seeds." },
        { title: "Near Me Variations", description: "'Near me' and spatial terms that make local intent explicit." },
        { title: "Competitor Seeds", description: "Terms competitors rank for mined and added to seed list." }
      ],
      imageSrc: keywordResearchImg,
      imageAlt: "Seed keyword development methodology",
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Intent Classification",
      headline: "Implicit vs Explicit Local Intent",
      description: "Local queries have local intent, but that intent can be explicit or implicit. We identify both types to capture full search demand.",
      subPoints: [
        { title: "Explicit Keywords", description: "'Plumber Dallas' or 'dentist near me.' Location specified, intent clear." },
        { title: "Implicit Keywords", description: "'Emergency plumber' or 'same day dentist.' No location, but Google delivers local results." },
        { title: "Local Pack Triggers", description: "Keywords that trigger the local pack identified. Different optimization required." },
        { title: "SERP Analysis", description: "What Google shows reveals intent. We analyze before targeting any keyword." },
        { title: "Intent Mismatch", description: "Pages targeting wrong intent identified. Content realigned or new pages created." },
        { title: "Transactional Focus", description: "Users ready to act get priority. Service pages with clear CTAs convert these searches." }
      ],
      imageSrc: keywordIntentImg,
      imageAlt: "Local intent classification framework",
      ctaText: "Get Keyword Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Gap Analysis & Mapping",
      headline: "Every Keyword Mapped to a URL",
      description: "Competitor gap analysis reveals terms rivals rank for that you're missing. Keyword mapping ensures every target has a destination page.",
      subPoints: [
        { title: "Competitor Gap", description: "Keywords competitors rank for but you don't. Untapped opportunities prioritized." },
        { title: "Personal Difficulty", description: "Difficulty scored based on your site's authority vs top rankers. Feasibility assessed." },
        { title: "One-to-One Mapping", description: "Each keyword assigned to one URL. No internal competition or diluted authority." },
        { title: "New Page Identification", description: "Keywords needing new pages flagged. Location pages, service pages, or blog content." },
        { title: "Multi-Location Sets", description: "Each location gets distinct keyword mapping. No cannibalization across markets." },
        { title: "GBP Alignment", description: "Keywords inform GBP categories and description. Website and profile signal consistency." }
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
      headline: "Unique Content That Signals Local Relevance",
      description: "Generic service pages do not rank locally. Google needs proof you serve specific markets. Boilerplate 'doorway pages' with only location names swapped violate guidelines and get penalized.",
      subPoints: [
        { title: "City-Specific Pages", description: "100% unique content per service area. Local landmarks, regulations, service notes. Not templates with city names swapped." },
        { title: "Local Context", description: "Neighborhoods, landmarks, parking details, and regional specifics. Signals that you actually operate there." },
        { title: "Area Hierarchy", description: "Primary locations get comprehensive pages. Secondary areas get appropriate depth based on opportunity." },
        { title: "Conversion Focus", description: "Local phone numbers, embedded Google Maps, hours, and location-specific trust signals." },
        { title: "Schema Integration", description: "LocalBusiness and Service schema on every location page for rich results and AI visibility." },
        { title: "Link Architecture", description: "Location pages connected to hub structure. Internal links from homepage and service pages distribute authority." }
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
  ],

  "nap-citations": [
    {
      category: "Citation Audit",
      headline: "Find Every Citation Issue",
      description: "Inconsistent NAP data actively hurts rankings. We audit every existing citation and identify conflicts before they compound.",
      subPoints: [
        { title: "Full Citation Scan", description: "Semrush, BrightLocal, and manual research to find every mention of the business online." },
        { title: "NAP Inconsistencies", description: "Name variations, old addresses, wrong phone numbers identified and documented." },
        { title: "Duplicate Listings", description: "Multiple listings on the same platform found. Suppression candidates flagged." },
        { title: "Historic Data", description: "Previous business names, addresses, and numbers tracked for cleanup." },
        { title: "Competitor Comparison", description: "Citation counts and sources compared against local pack leaders." },
        { title: "AI Source Audit", description: "Yelp, TripAdvisor, and industry directories checked for AI Overview eligibility." }
      ],
      ctaText: "Start Citation Audit",
      ctaHref: "#contact"
    },
    {
      category: "Citation Correction",
      headline: "Fix Before You Build",
      description: "Building new citations on top of inconsistent data wastes effort. We clean up existing issues first.",
      subPoints: [
        { title: "Priority Platforms", description: "Major platforms corrected first. Google, Yelp, Facebook, Apple Maps take priority." },
        { title: "Data Aggregator Updates", description: "Foursquare, Data Axle, Neustar updated to propagate corrections downstream." },
        { title: "Suppression Requests", description: "Duplicate listings suppressed or merged into single authoritative listings." },
        { title: "Old Address Removal", description: "Previous locations updated or removed to eliminate confusion." },
        { title: "Phone Number Standardization", description: "All listings updated to primary business number. Tracking numbers unified." },
        { title: "Verification", description: "Corrections verified after propagation. Nothing assumed complete until confirmed." }
      ],
      ctaText: "Get Citation Cleanup",
      ctaHref: "#contact"
    },
    {
      category: "Citation Building",
      headline: "Strategic Directory Submissions",
      description: "Not all citations are equal. We prioritize directories Google trusts and AI systems cite.",
      subPoints: [
        { title: "Core 50+ Directories", description: "Google, Apple Maps, Bing, Yelp, Facebook, and the directories that matter most." },
        { title: "Data Aggregators", description: "Submissions to Foursquare, Data Axle, and Neustar that feed hundreds of downstream sites." },
        { title: "Industry Directories", description: "Vertical-specific directories that signal expertise. Competitor gap analysis included." },
        { title: "Local Directories", description: "Chamber of commerce, local business associations, and community platforms." },
        { title: "AI Citation Sources", description: "Platforms AI Overviews cite: Yelp, TripAdvisor, OpenTable, and industry-specific sites." },
        { title: "Ongoing Monitoring", description: "Quarterly audits catch new inconsistencies. NAP maintained over time." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  // =============================================
  // GBP SEO SPOKES
  // =============================================
  
  "gbp-optimization": [
    {
      category: "Profile Foundation",
      headline: "Complete GBP Profiles That Rank",
      description: "An incomplete profile is an invisible profile. We optimize every element Google uses for local pack placement and AI Overview citations.",
      subPoints: [
        { title: "Primary Category", description: "The single most important ranking factor. Selected based on search volume and competitive analysis." },
        { title: "Secondary Categories", description: "Up to 9 additional categories that expand visibility for related services and AI query matching." },
        { title: "Business Description", description: "750 characters optimized for keywords and AI extraction. First 250 characters most critical." },
        { title: "Service Catalog", description: "Complete service listings with descriptions and pricing that match website content for signal consistency." },
        { title: "Attributes", description: "Every applicable attribute checked. AI Overviews pull attribute data for recommendations." },
        { title: "Hours & Special Hours", description: "Accurate hours including holidays. Incorrect hours trigger negative reviews and AI inaccuracies." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "#contact"
    },
    {
      category: "Competitive Positioning",
      headline: "Outrank the Current Pack Leaders",
      description: "Entering the local pack requires understanding who's there and why. We analyze and exploit competitive gaps.",
      subPoints: [
        { title: "Pack Analysis", description: "Current pack holders dissected. Categories, reviews, citations, and signals documented." },
        { title: "Gap Identification", description: "Missing attributes, services, and content that competitors have and you lack." },
        { title: "Signal Matching", description: "Reviews, citations, and website signals aligned to match or exceed pack leaders." },
        { title: "Proximity Strategy", description: "Service area optimization to expand reach beyond physical location." },
        { title: "Velocity Planning", description: "Review and citation acquisition paced to close gaps systematically." },
        { title: "Monitoring", description: "Weekly pack tracking to catch position changes and respond quickly." }
      ],
      ctaText: "Get Competitive Analysis",
      ctaHref: "#contact"
    },
    {
      category: "Ongoing Optimization",
      headline: "Profiles That Stay Optimized",
      description: "GBP optimization is not a one-time task. We maintain profiles against Google updates, competitive pressure, and AI search changes.",
      subPoints: [
        { title: "Weekly Posts", description: "Fresh content signals activity. Offers, updates, and events scheduled weekly." },
        { title: "Photo Updates", description: "New photos monthly. Geotagged, optimized, and strategically captioned." },
        { title: "Q&A Management", description: "Questions seeded proactively. Community questions answered within 24 hours." },
        { title: "Review Monitoring", description: "New reviews flagged immediately. Response drafts provided same day." },
        { title: "Insights Analysis", description: "Monthly performance review. Search queries, actions, and direction requests tracked." },
        { title: "AI Visibility Check", description: "AI Overview citations monitored. Profile data verified for accuracy in AI-generated results." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "review-management": [
    {
      category: "Review Generation",
      headline: "Systematic Review Acquisition That Works",
      description: "51% of customers leave reviews when asked directly, but 30% skip reviews because the process is confusing. We eliminate friction and build systems that generate consistent reviews. For automated email sequences, see our Email Marketing Automation Flows.",
      subPoints: [
        { title: "Timing Strategy", description: "Requests sent at optimal moments: shortly after positive service experience, at peak satisfaction. Timing is everything." },
        { title: "Multi-Channel Requests", description: "54% prefer email, 45% prefer in-person, 29% prefer SMS. We deploy all channels based on customer preferences." },
        { title: "Direct Review Links", description: "Shortened links straight to the review form. No navigation required. 30% skip reviews due to confusing process." },
        { title: "Personalized Templates", description: "Use customer name, reference specific service. Generic requests get ignored." },
        { title: "Follow-Up Reminders", description: "The #1 reason customers don't review: they forget. Friendly reminders on receipts, packaging, and follow-up emails." },
        { title: "Email Automation Integration", description: "Pairs with Email Marketing automation flows for hands-off review generation at scale via post-service sequences." }
      ],
      imageSrc: reviewGenerationImg,
      imageAlt: "Review generation strategy mind map",
      ctaText: "Start Review Generation",
      ctaHref: "#contact"
    },
    {
      category: "Request Psychology",
      headline: "Understanding Why Customers Review",
      description: "Effective review requests tap into customer motivations. 73% write reviews to share their experience, 63% to show appreciation, 38% to provide feedback, and 21% specifically want a response.",
      subPoints: [
        { title: "Community Motivation", description: "73% want to share experience with others. Frame requests around helping the community." },
        { title: "Appreciation Channel", description: "63% use reviews to show gratitude. Mention how much a review would mean to your team." },
        { title: "Feedback Seekers", description: "38% want businesses to improve. Show in responses that you take feedback to heart." },
        { title: "Response Expectations", description: "21% write reviews to get a response. Prove you respond to every review to encourage participation." },
        { title: "Staff Training", description: "Verbal requests work when rapport exists. Train staff to ask when customers seem happy." },
        { title: "Social Prompts", description: "Ask specific questions on social media that prompt review-style responses with platform links." }
      ],
      imageSrc: reviewPsychologyImg,
      imageAlt: "Customer review psychology and motivations",
      ctaText: "Get Review Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Response Management",
      headline: "Responses That Build Trust and Rankings",
      description: "64% of customers expect response to negative reviews, 40% expect response to positive reviews, and 60% expect to hear back within 2 days. Response quality directly impacts whether future customers leave reviews.",
      subPoints: [
        { title: "Speed Matters", description: "60% expect response within 2 days. We respond within 24-48 hours to exceed expectations." },
        { title: "Negative Recovery", description: "46% avoid businesses that argue with customers. 54% avoid businesses that don't solve cited problems. We're empathetic and solution-focused." },
        { title: "Problem Resolution", description: "Always state how you've addressed concerns. 54% avoid businesses where responses don't solve problems." },
        { title: "Genuine Apologies", description: "47% avoid businesses that don't apologize when customers cite problems. Acknowledge and take responsibility." },
        { title: "Service Keywords", description: "Natural service and location mentions in responses. AI systems parse response content for recommendations." },
        { title: "Brand Voice", description: "Responses match client personality. Never sound robotic or templated. Professional, warm, or casual as appropriate." }
      ],
      imageSrc: reviewResponseImg,
      imageAlt: "Review response management workflow",
      ctaText: "Get Response Management",
      ctaHref: "#contact"
    },
    {
      category: "Platform Diversification",
      headline: "Reviews Across All Platforms That Matter",
      description: "66% of reviewers focus on Google, but 42% prefer Facebook, 36% focus on Yelp, and 16% use NextDoor. Platform diversity protects reputation if any single platform filters reviews.",
      subPoints: [
        { title: "Google Priority", description: "Primary platform for local pack visibility. But not the only platform that matters." },
        { title: "Facebook Reviews", description: "42% of reviewers spend most time here. Important for social proof and AI source data." },
        { title: "Yelp Strategy", description: "36% focus on Yelp. Note: Yelp prohibits directly asking for reviews. Build presence through profile completeness." },
        { title: "Industry Verticals", description: "TripAdvisor, OpenTable, Healthgrades, Avvo. AI Overviews cite industry-specific platforms." },
        { title: "First-Party Reviews", description: "Feature honest reviews on your own website. Diversification protects against platform filtering." },
        { title: "NextDoor Presence", description: "16% of reviewers focus here. Hyperlocal platform for neighborhood businesses." }
      ],
      imageSrc: reviewPlatformsImg,
      imageAlt: "Multi-platform review diversification strategy",
      ctaText: "Diversify Reviews",
      ctaHref: "#contact"
    },
    {
      category: "Reputation Monitoring",
      headline: "Never Miss a Review",
      description: "AI Overviews cite Yelp, TripAdvisor, and industry directories. We monitor everywhere that matters for rankings and AI visibility with instant alerts.",
      subPoints: [
        { title: "Instant Alerts", description: "New reviews trigger immediate notifications. Response workflows activated same day." },
        { title: "Multi-Platform Monitoring", description: "Google, Facebook, Yelp, TripAdvisor, and industry sites. All AI source platforms tracked." },
        { title: "Sentiment Tracking", description: "Overall sentiment trends tracked monthly. Early warning for service issues before they compound." },
        { title: "Fake Review Detection", description: "Suspicious reviews identified and reported for removal when policy violations exist." },
        { title: "Recency Tracking", description: "39% of customers filter for recent reviews. We track velocity to ensure fresh review flow." },
        { title: "Monthly Reporting", description: "Review metrics, sentiment trends, platform performance, and AI visibility in client reports." }
      ],
      imageSrc: reviewMonitoringImg,
      imageAlt: "Review monitoring and alerts dashboard",
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "citation-building": [
    {
      category: "Core Citations",
      headline: "Foundation Citations That Matter",
      description: "Not all citations are equal. We prioritize the directories that Google actually trusts and uses.",
      subPoints: [
        { title: "Data Aggregators", description: "Submissions to Neustar, Foursquare, and Data Axle that feed hundreds of downstream sites." },
        { title: "Core Directories", description: "Google, Apple Maps, Bing, Yelp, Facebook, and the 50+ sites that matter most." },
        { title: "NAP Consistency", description: "Name, address, phone formatted identically everywhere. No variations." },
        { title: "Category Matching", description: "Business categories aligned with GBP primary and secondary categories." },
        { title: "Description Optimization", description: "Unique descriptions for major directories. Duplicate content avoided." },
        { title: "Link Opportunities", description: "Directories that allow website links prioritized for referral traffic." }
      ],
      ctaText: "Start Citation Building",
      ctaHref: "#contact"
    },
    {
      category: "Industry Citations",
      headline: "Vertical-Specific Authority",
      description: "Industry directories signal expertise to Google. We identify and secure placements in your vertical.",
      subPoints: [
        { title: "Industry Research", description: "Comprehensive mapping of directories relevant to each client's vertical." },
        { title: "Association Listings", description: "Trade associations, professional organizations, and industry bodies." },
        { title: "Niche Platforms", description: "Vertical-specific review sites and directories that competitors use." },
        { title: "Credential Verification", description: "Licenses, certifications, and credentials added where platforms support them." },
        { title: "Local Chambers", description: "Chamber of commerce and local business association memberships secured." },
        { title: "Competitor Gap Analysis", description: "Directories where competitors appear but client does not." }
      ],
      ctaText: "Get Industry Citations",
      ctaHref: "#contact"
    },
    {
      category: "Citation Cleanup",
      headline: "Fix What's Broken First",
      description: "Inconsistent citations hurt rankings. We find and fix every incorrect listing before building new ones.",
      subPoints: [
        { title: "Audit & Discovery", description: "Comprehensive scan for existing citations. Incorrect, duplicate, and outdated listings found." },
        { title: "Suppression Requests", description: "Duplicate listings suppressed or merged. One authoritative listing per platform." },
        { title: "Update Submissions", description: "Incorrect information updated to match verified NAP data." },
        { title: "Old Address Cleanup", description: "Previous locations updated or removed. No confusion about current address." },
        { title: "Phone Number Fixes", description: "Old numbers, tracking numbers, and variations corrected to primary." },
        { title: "Ongoing Monitoring", description: "Quarterly audits to catch new inconsistencies as they appear." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "photo-optimization": [
    {
      category: "Photo Strategy",
      headline: "Visual Content That Converts",
      description: "GBP photos directly impact engagement and conversions. We develop comprehensive visual strategies.",
      subPoints: [
        { title: "Photo Audit", description: "Current photos reviewed for quality, relevance, and competitive benchmarking." },
        { title: "Category Coverage", description: "Interior, exterior, team, products, and services. All categories filled." },
        { title: "Cover Photo", description: "Hero image optimized for maximum impact. First impression matters." },
        { title: "Logo Quality", description: "Logo uploaded at proper resolution. No pixelation or cropping issues." },
        { title: "Competitor Analysis", description: "Visual strategies of pack leaders analyzed and exceeded." },
        { title: "Photo Calendar", description: "Monthly photo additions scheduled. Fresh content signals activity." }
      ],
      ctaText: "Start Photo Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Technical Optimization",
      headline: "Photos Optimized for Search",
      description: "Photo optimization goes beyond quality. We ensure every image works for both users and search engines.",
      subPoints: [
        { title: "Geotagging", description: "Location data embedded in image metadata. Geographic signals reinforced." },
        { title: "File Naming", description: "Descriptive filenames with keywords. Not IMG_1234.jpg." },
        { title: "Alt Text", description: "Google extracts descriptions. Keywords and context included naturally." },
        { title: "Size Optimization", description: "Images compressed for fast loading without quality loss." },
        { title: "Format Selection", description: "Proper formats for different photo types. Quality preserved." },
        { title: "Aspect Ratios", description: "Photos cropped to display correctly in GBP interface." }
      ],
      ctaText: "Get Photo Optimization",
      ctaHref: "#contact"
    },
    {
      category: "User Photo Management",
      headline: "Control Your Visual Narrative",
      description: "Customers upload photos too. We monitor and manage user-generated content to protect brand image.",
      subPoints: [
        { title: "UGC Monitoring", description: "User-uploaded photos reviewed weekly. Inappropriate content flagged." },
        { title: "Removal Requests", description: "Policy-violating photos reported for removal. Brand protected." },
        { title: "Positive Amplification", description: "Great customer photos highlighted through owner responses." },
        { title: "Photo Tagging", description: "User photos tagged with relevant categories when helpful." },
        { title: "Competition Awareness", description: "Competitor photos on your listing identified and addressed." },
        { title: "Trend Analysis", description: "What customers photograph reveals what they value. Insights extracted." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "qa-management": [
    {
      category: "Q&A Seeding",
      headline: "Control the Questions Asked",
      description: "Don't wait for random questions. We proactively seed the Q&A section with questions that help you convert.",
      subPoints: [
        { title: "Question Research", description: "Common customer questions identified from sales teams and competitors." },
        { title: "Keyword Questions", description: "Questions that contain target keywords seeded naturally." },
        { title: "Objection Handling", description: "Questions that address common concerns and objections." },
        { title: "Service Questions", description: "Questions about services, pricing, and availability." },
        { title: "Differentiators", description: "Questions that let you highlight competitive advantages." },
        { title: "Local Context", description: "Questions about service areas, parking, and local details." }
      ],
      ctaText: "Start Q&A Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Answer Optimization",
      headline: "Answers That Convert Searchers",
      description: "Q&A answers are micro-content that influences decisions. We craft answers that inform and convert.",
      subPoints: [
        { title: "Complete Answers", description: "Thorough responses that fully address the question asked." },
        { title: "Keyword Integration", description: "Natural keyword mentions without stuffing. Services and locations included." },
        { title: "Call to Action", description: "Answers that guide next steps. Call, visit website, or stop by." },
        { title: "Trust Signals", description: "Credentials, experience, and guarantees mentioned where relevant." },
        { title: "Link Opportunities", description: "Where appropriate, links to relevant website pages included." },
        { title: "Upvote Strategy", description: "Best answers upvoted to appear first. Authority answers promoted." }
      ],
      ctaText: "Get Q&A Optimization",
      ctaHref: "#contact"
    },
    {
      category: "Monitoring & Response",
      headline: "Never Miss a Question",
      description: "Community questions need fast responses. We monitor and respond before incorrect information spreads.",
      subPoints: [
        { title: "Real-Time Alerts", description: "New questions trigger immediate notifications. Fast response critical." },
        { title: "Community Corrections", description: "Incorrect community answers corrected with authoritative responses." },
        { title: "Spam Management", description: "Irrelevant or spam questions flagged for removal." },
        { title: "Competitor Monitoring", description: "Competitor Q&A sections analyzed for opportunity identification." },
        { title: "Response Templates", description: "Pre-approved templates for common questions enable fast responses." },
        { title: "Monthly Reporting", description: "Q&A metrics included in performance reports. Questions as insights." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "post-scheduling": [
    {
      category: "Content Strategy",
      headline: "Posts That Drive Engagement",
      description: "GBP posts signal activity and provide conversion opportunities. We develop content calendars that perform.",
      subPoints: [
        { title: "Post Types", description: "Updates, offers, events, and products. Each type serves different purposes." },
        { title: "Content Calendar", description: "Monthly calendar planned in advance. Consistent publishing schedule." },
        { title: "Seasonal Alignment", description: "Content aligned with holidays, seasons, and business cycles." },
        { title: "Promotion Strategy", description: "Offers and specials timed for maximum impact and urgency." },
        { title: "Event Promotion", description: "Upcoming events and sales highlighted with dedicated posts." },
        { title: "Evergreen Content", description: "Service highlights and value propositions that work year-round." }
      ],
      ctaText: "Start Post Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Post Optimization",
      headline: "Maximum Impact Per Post",
      description: "Every post is an opportunity to appear in search results and drive action. We optimize every element.",
      subPoints: [
        { title: "Keyword Integration", description: "Target keywords included naturally in post content." },
        { title: "Compelling CTAs", description: "Clear calls to action. Call now, learn more, book online." },
        { title: "Image Selection", description: "Eye-catching images that stop scrollers and reinforce message." },
        { title: "Character Limits", description: "Content optimized for display. First 100 characters most visible." },
        { title: "Link Strategy", description: "Destination URLs tracked for attribution. Landing pages matched to offers." },
        { title: "Button Selection", description: "CTA buttons matched to post purpose. Book, order, call, or shop." }
      ],
      ctaText: "Get Post Optimization",
      ctaHref: "#contact"
    },
    {
      category: "Performance Tracking",
      headline: "Measure What Matters",
      description: "Post performance reveals what your audience cares about. We track, analyze, and optimize continuously.",
      subPoints: [
        { title: "View Tracking", description: "Post views tracked to identify content that gets attention." },
        { title: "Click Analysis", description: "CTA clicks measured. Which posts drive action?" },
        { title: "Content Testing", description: "Different content types tested. Data drives strategy evolution." },
        { title: "Timing Analysis", description: "Post timing optimized based on engagement patterns." },
        { title: "Competitive Benchmarking", description: "Competitor posting frequency and content analyzed." },
        { title: "Monthly Reporting", description: "Post performance included in GBP reports. Insights shared." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  // =============================================
  // PAID MEDIA SPOKES
  // =============================================

  "google-ads": [
    {
      category: "Campaign Architecture",
      headline: "Structure Built for Local Leads",
      description: "Campaign structure determines efficiency. We build architectures optimized for local lead generation, not e-commerce metrics.",
      subPoints: [
        { title: "Account Structure", description: "Campaigns organized by service line and geography. Budget control where it matters." },
        { title: "Match Type Strategy", description: "Keyword match types balanced for reach and relevance. Waste minimized." },
        { title: "Negative Keywords", description: "Comprehensive negative keyword lists. No spend on irrelevant searches." },
        { title: "Geographic Targeting", description: "Precise location targeting by radius, zip, or custom area. No wasted impressions." },
        { title: "Ad Scheduling", description: "Ads shown during business hours or peak conversion times. Budget concentrated." },
        { title: "Device Optimization", description: "Bids adjusted by device based on conversion performance data." }
      ],
      ctaText: "Start Google Ads Campaign",
      ctaHref: "#contact"
    },
    {
      category: "Ad Creative",
      headline: "Ads That Convert Local Searchers",
      description: "Ad copy is the first impression. We write ads that speak to local intent and drive calls and form submissions.",
      subPoints: [
        { title: "Headline Testing", description: "Multiple headlines tested continuously. Winners scaled, losers replaced." },
        { title: "Local Proof Points", description: "Years in business, reviews, local credentials. Trust built in 30 characters." },
        { title: "Call Extensions", description: "Phone numbers displayed prominently. Click-to-call enabled on mobile." },
        { title: "Location Extensions", description: "Address and map displayed. Local presence reinforced." },
        { title: "Sitelink Strategy", description: "Sitelinks expanded ad real estate. Services, areas, and CTAs linked." },
        { title: "Responsive Search Ads", description: "RSAs tested systematically. Google's machine learning leveraged." }
      ],
      ctaText: "Get Ad Creative Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Optimization & Bidding",
      headline: "Continuous Improvement, Weekly",
      description: "Set-it-and-forget-it fails. We optimize campaigns weekly based on performance data and market changes.",
      subPoints: [
        { title: "Bid Adjustments", description: "Bids modified by location, time, device, and audience based on performance." },
        { title: "Search Term Mining", description: "Actual search terms reviewed weekly. New keywords and negatives added." },
        { title: "Quality Score", description: "Landing page and ad relevance optimized for lower costs and better positions." },
        { title: "Budget Reallocation", description: "Spend shifted toward converting campaigns. Underperformers cut or fixed." },
        { title: "Competitor Monitoring", description: "Auction insights reviewed. Competitive pressure identified and addressed." },
        { title: "Performance Max", description: "Automated campaigns tested where appropriate. Manual control where needed." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "meta-ads": [
    {
      category: "Audience Strategy",
      headline: "Reach the Right Local Audience",
      description: "Meta's targeting power is unmatched. We build audiences that match your ideal customer profile precisely.",
      subPoints: [
        { title: "Geographic Targeting", description: "Radius, zip code, and custom area targeting. Local focus maintained." },
        { title: "Demographic Layers", description: "Age, income, homeowner status, and life events layered for precision." },
        { title: "Interest Targeting", description: "Relevant interests and behaviors added without over-narrowing." },
        { title: "Custom Audiences", description: "Website visitors, customer lists, and engagement audiences leveraged." },
        { title: "Lookalike Audiences", description: "Best customers expanded to similar prospects. Scale with quality." },
        { title: "Exclusions", description: "Existing customers and irrelevant segments excluded. Budget protected." }
      ],
      ctaText: "Start Meta Ads Campaign",
      ctaHref: "#contact"
    },
    {
      category: "Creative Development",
      headline: "Visual Content That Stops Scrolls",
      description: "Meta is a visual platform. We develop creative that captures attention and drives action in the feed.",
      subPoints: [
        { title: "Image Ads", description: "Static images that communicate value instantly. Tested and optimized." },
        { title: "Video Ads", description: "Short-form video that tells stories. First 3 seconds critical." },
        { title: "Carousel Ads", description: "Multiple services or locations showcased. Engagement increased." },
        { title: "Ad Copy", description: "Primary text, headlines, and descriptions tested for response." },
        { title: "Format Testing", description: "Different formats tested to find what works for each audience." },
        { title: "Creative Refresh", description: "Ads rotated before fatigue sets in. Fresh creative queued." }
      ],
      ctaText: "Get Creative Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Lead Generation",
      headline: "Leads Without Leaving Facebook",
      description: "Meta lead forms reduce friction. We optimize forms and follow-up for maximum lead quality and volume.",
      subPoints: [
        { title: "Lead Form Design", description: "Forms optimized for completion rate without sacrificing lead quality." },
        { title: "Pre-Fill Strategy", description: "Auto-filled fields reduce friction. Custom questions filter quality." },
        { title: "Thank You Pages", description: "Custom confirmations that set expectations and provide next steps." },
        { title: "CRM Integration", description: "Leads delivered to CRM instantly. No manual downloads needed." },
        { title: "Follow-Up Speed", description: "Lead notification systems ensure fast response. Speed matters." },
        { title: "Lead Quality Analysis", description: "Lead quality tracked and fed back into targeting optimization." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "local-service-ads": [
    {
      category: "Profile Setup",
      headline: "Google Guaranteed Visibility",
      description: "LSAs put verified businesses at the top of search. We set up and optimize profiles for maximum lead volume.",
      subPoints: [
        { title: "Verification", description: "Background checks and license verification completed. Google Guaranteed badge earned." },
        { title: "Service Categories", description: "All relevant services added. Visibility expanded for related searches." },
        { title: "Service Areas", description: "Geographic coverage precisely defined. No leads from outside service area." },
        { title: "Business Hours", description: "Availability windows set. Leads only during times you can answer." },
        { title: "Profile Optimization", description: "Photos, description, and highlights optimized for conversion." },
        { title: "Review Integration", description: "Google reviews prominently displayed. Social proof drives calls." }
      ],
      ctaText: "Start LSA Campaign",
      ctaHref: "#contact"
    },
    {
      category: "Lead Management",
      headline: "Maximize Lead Quality & Volume",
      description: "LSAs operate on a pay-per-lead model. We optimize for lead quality while maintaining volume.",
      subPoints: [
        { title: "Lead Screening", description: "Call recordings reviewed. Unqualified leads disputed for credit." },
        { title: "Dispute Process", description: "Invalid leads disputed within window. Refunds secured." },
        { title: "Response Speed", description: "Fast response improves ranking and conversion. Systems established." },
        { title: "Call Handling", description: "Scripts and protocols for phone staff. Leads converted, not lost." },
        { title: "Booking Workflow", description: "Lead to appointment workflow streamlined. No leads falling through cracks." },
        { title: "Quality Feedback", description: "Lead quality data fed back into optimization decisions." }
      ],
      ctaText: "Get Lead Management",
      ctaHref: "#contact"
    },
    {
      category: "Ranking Optimization",
      headline: "Stay at the Top of LSA Results",
      description: "LSA ranking depends on multiple factors. We optimize every element that influences position.",
      subPoints: [
        { title: "Review Volume", description: "Consistent review generation improves LSA ranking. Systems implemented." },
        { title: "Response Rate", description: "Answering leads quickly improves ranking. Accountability established." },
        { title: "Budget Management", description: "Weekly budgets set for consistent visibility. No feast or famine." },
        { title: "Bid Strategy", description: "Max lead costs optimized for volume within profitability targets." },
        { title: "Competitor Monitoring", description: "Competitor presence and pricing tracked. Strategy adjusted." },
        { title: "Performance Tracking", description: "Cost per lead, booking rate, and ROI tracked and reported." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "retargeting-campaigns": [
    {
      category: "Audience Segmentation",
      headline: "Right Message, Right Moment",
      description: "Not all website visitors are equal. We segment audiences for personalized retargeting that converts.",
      subPoints: [
        { title: "Page-Based Segments", description: "Visitors segmented by pages viewed. Service interest identified." },
        { title: "Engagement Depth", description: "Time on site and pages viewed indicate intent level." },
        { title: "Recency Windows", description: "Recent visitors get different treatment than older audiences." },
        { title: "Converter Exclusion", description: "Existing leads and customers excluded. No wasted impressions." },
        { title: "Abandonment Recovery", description: "Form starters and quote requesters specifically targeted." },
        { title: "Cross-Device", description: "Users followed across devices. Desktop research, mobile conversion." }
      ],
      ctaText: "Start Retargeting",
      ctaHref: "#contact"
    },
    {
      category: "Multi-Platform Reach",
      headline: "Stay Visible Everywhere They Browse",
      description: "Retargeting works across platforms. We create coordinated campaigns that maintain presence without fatigue.",
      subPoints: [
        { title: "Display Network", description: "Google Display reaches 90% of internet users. Visual retargeting deployed." },
        { title: "YouTube", description: "Video retargeting builds brand familiarity before decision." },
        { title: "Meta Retargeting", description: "Facebook and Instagram feed ads reach users in social context." },
        { title: "Search Remarketing", description: "RLSA adjusts search bids for previous visitors." },
        { title: "Frequency Capping", description: "Impression limits prevent annoyance. Visibility without stalking." },
        { title: "Sequential Messaging", description: "Ad sequence builds from awareness to consideration to action." }
      ],
      ctaText: "Get Multi-Platform Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Conversion Optimization",
      headline: "Turn Warm Traffic Into Leads",
      description: "Retargeting brings visitors back. We optimize landing experiences to convert these warm prospects.",
      subPoints: [
        { title: "Custom Landing Pages", description: "Dedicated pages for retargeting traffic. Message consistency maintained." },
        { title: "Offer Strategy", description: "Incentives tested for retargeting audiences. What brings them back?" },
        { title: "Social Proof", description: "Reviews and testimonials prominently featured. Trust rebuilt." },
        { title: "Urgency Elements", description: "Limited-time messaging tested. Procrastination overcome." },
        { title: "Form Optimization", description: "Shorter forms for warm traffic. Friction reduced." },
        { title: "Attribution Tracking", description: "Retargeting contribution to conversions measured and reported." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "landing-page-design": [
    {
      category: "Conversion-Focused Design",
      headline: "Pages Built to Generate Leads",
      description: "Landing pages are where campaigns succeed or fail. We design pages optimized for local lead generation.",
      subPoints: [
        { title: "Above-the-Fold", description: "Value proposition, trust signals, and CTA visible without scrolling." },
        { title: "Mobile-First", description: "Designed for mobile conversion. Touch-friendly, fast-loading." },
        { title: "Click-to-Call", description: "Phone numbers tap-to-call on mobile. No copying required." },
        { title: "Form Placement", description: "Forms visible and accessible. Multiple placement options tested." },
        { title: "Trust Signals", description: "Reviews, credentials, and guarantees prominently displayed." },
        { title: "Local Elements", description: "Service area, local address, and market-specific content included." }
      ],
      ctaText: "Start Landing Page Design",
      ctaHref: "#contact"
    },
    {
      category: "Content Strategy",
      headline: "Content That Converts Clickers",
      description: "Landing page content must answer questions and drive action. We craft content that moves visitors to contact.",
      subPoints: [
        { title: "Headline Testing", description: "Headlines tested continuously. Clear value propositions that resonate." },
        { title: "Benefit Focus", description: "Customer benefits emphasized over features. What's in it for them?" },
        { title: "Objection Handling", description: "Common concerns addressed before they become barriers." },
        { title: "Social Proof", description: "Reviews, case studies, and testimonials integrated naturally." },
        { title: "Service Details", description: "Clear explanation of what's included. No confusion about offering." },
        { title: "Strong CTAs", description: "Action-oriented language. Clear next steps for visitors." }
      ],
      ctaText: "Get Content Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Performance Optimization",
      headline: "Faster Pages, Higher Conversions",
      description: "Page speed and experience directly impact conversion rates. We optimize every technical element.",
      subPoints: [
        { title: "Load Speed", description: "Sub-3-second load times. Every second costs conversions." },
        { title: "Core Web Vitals", description: "LCP, INP, and CLS optimized. Better UX, better Quality Scores." },
        { title: "A/B Testing", description: "Continuous testing of headlines, layouts, and CTAs." },
        { title: "Heatmap Analysis", description: "User behavior tracked. Design decisions informed by data." },
        { title: "Form Analytics", description: "Drop-off points identified. Forms optimized for completion." },
        { title: "Quality Score Impact", description: "Landing page experience improves ad costs and positions." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "conversion-tracking": [
    {
      category: "Tracking Implementation",
      headline: "Measure Every Conversion",
      description: "You can't optimize what you don't measure. We implement comprehensive tracking for calls, forms, and more.",
      subPoints: [
        { title: "Call Tracking", description: "Dynamic number insertion tracks calls to source. Attribution complete." },
        { title: "Form Tracking", description: "All form submissions tracked with full attribution data." },
        { title: "Event Tracking", description: "Button clicks, video plays, and micro-conversions captured." },
        { title: "Cross-Domain", description: "Tracking maintained across domains. No attribution gaps." },
        { title: "Offline Imports", description: "CRM data connected. Lead-to-sale tracking enabled." },
        { title: "Testing & QA", description: "All tracking verified before launch. No data gaps." }
      ],
      ctaText: "Start Tracking Implementation",
      ctaHref: "#contact"
    },
    {
      category: "Attribution Setup",
      headline: "Know What Actually Works",
      description: "Last-click attribution misses the full picture. We implement models that reveal true campaign value.",
      subPoints: [
        { title: "Multi-Touch", description: "Credit distributed across touchpoints. Assist value recognized." },
        { title: "Platform Integration", description: "Google Ads, Meta, and analytics platforms connected." },
        { title: "Conversion Windows", description: "Attribution windows set appropriately for sales cycles." },
        { title: "View-Through", description: "Display and video view-through conversions captured." },
        { title: "First-Click Analysis", description: "Discovery channels credited for introducing prospects." },
        { title: "Custom Models", description: "Attribution models customized to business reality." }
      ],
      ctaText: "Get Attribution Setup",
      ctaHref: "#contact"
    },
    {
      category: "Reporting & Analysis",
      headline: "Data That Drives Decisions",
      description: "Raw data is useless without analysis. We transform tracking data into actionable insights.",
      subPoints: [
        { title: "Conversion Reporting", description: "Clear reporting on what converted, from where, at what cost." },
        { title: "Cost Per Lead", description: "True cost per lead by campaign, ad group, and keyword." },
        { title: "Quality Analysis", description: "Lead quality tracked. Not all conversions are equal." },
        { title: "Trend Identification", description: "Performance trends spotted early. Opportunities and problems identified." },
        { title: "Optimization Recommendations", description: "Data translated into specific optimization actions." },
        { title: "Client Reporting", description: "White-labeled reports that prove value to end clients." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  // =============================================
  // EMAIL MARKETING SPOKES
  // =============================================

  "campaign-strategy": [
    {
      category: "Strategic Planning",
      headline: "Email Strategy That Drives Revenue",
      description: "Random emails get random results. We develop strategic email programs aligned with business goals.",
      subPoints: [
        { title: "Goal Alignment", description: "Email objectives tied to business outcomes. Not vanity metrics." },
        { title: "Customer Journey", description: "Emails mapped to buyer journey. Right message, right time." },
        { title: "Segmentation Strategy", description: "Lists segmented for relevance. Personalization at scale." },
        { title: "Campaign Calendar", description: "Annual planning with flexibility. Consistent presence maintained." },
        { title: "Competitive Analysis", description: "Competitor email programs analyzed. Opportunities identified." },
        { title: "KPI Definition", description: "Success metrics defined upfront. Measurement framework established." }
      ],
      ctaText: "Start Campaign Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Campaign Types",
      headline: "Emails for Every Objective",
      description: "Different goals require different approaches. We deploy the right campaign type for each objective.",
      subPoints: [
        { title: "Promotional", description: "Offers, sales, and limited-time promotions that drive action." },
        { title: "Educational", description: "Value-add content that builds authority and trust." },
        { title: "Newsletters", description: "Regular updates that maintain relationships and top-of-mind." },
        { title: "Announcements", description: "New services, changes, and company news delivered professionally." },
        { title: "Re-engagement", description: "Win-back campaigns for lapsed customers and subscribers." },
        { title: "Seasonal", description: "Holiday and seasonal campaigns timed for maximum impact." }
      ],
      ctaText: "Get Campaign Planning",
      ctaHref: "#contact"
    },
    {
      category: "Execution Excellence",
      headline: "Flawless Campaign Delivery",
      description: "Strategy means nothing without execution. We ensure every campaign deploys perfectly, every time.",
      subPoints: [
        { title: "Content Creation", description: "Compelling copy and design that represents the brand." },
        { title: "QA Process", description: "Multi-device testing. Links, images, and rendering verified." },
        { title: "Send Optimization", description: "Timing optimized based on audience behavior data." },
        { title: "Deliverability", description: "Sender reputation protected. Inbox placement maximized." },
        { title: "List Hygiene", description: "Bounces and unengaged subscribers managed proactively." },
        { title: "Performance Tracking", description: "Opens, clicks, and conversions tracked and analyzed." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "list-management": [
    {
      category: "List Building",
      headline: "Grow Quality Subscriber Lists",
      description: "Bigger lists aren't better lists. We focus on growing engaged subscribers who want to hear from you.",
      subPoints: [
        { title: "Opt-In Strategy", description: "Lead magnets and signup forms that attract ideal subscribers." },
        { title: "Double Opt-In", description: "Confirmed subscribers only. List quality protected." },
        { title: "Welcome Sequence", description: "New subscribers onboarded properly. Expectations set." },
        { title: "Source Tracking", description: "Subscriber sources tracked. Best channels identified." },
        { title: "Lead Qualification", description: "Signup forms collect data for segmentation." },
        { title: "Compliance", description: "GDPR, CAN-SPAM, and privacy regulations followed." }
      ],
      ctaText: "Start List Building",
      ctaHref: "#contact"
    },
    {
      category: "List Hygiene",
      headline: "Clean Lists Perform Better",
      description: "Dead subscribers kill deliverability. We maintain list health through systematic hygiene practices.",
      subPoints: [
        { title: "Bounce Management", description: "Hard bounces removed immediately. Soft bounces monitored." },
        { title: "Engagement Scoring", description: "Subscribers scored by activity. Inactive segments identified." },
        { title: "Re-Engagement", description: "Dormant subscribers targeted for re-engagement before removal." },
        { title: "Sunset Policies", description: "Unengaged subscribers removed on schedule. Deliverability protected." },
        { title: "Duplicate Removal", description: "Duplicate entries merged. Clean data maintained." },
        { title: "Validation", description: "Email addresses validated for format and deliverability." }
      ],
      ctaText: "Get List Hygiene",
      ctaHref: "#contact"
    },
    {
      category: "Segmentation",
      headline: "Right Message to Right People",
      description: "Segmentation dramatically improves performance. We divide lists for personalized, relevant messaging.",
      subPoints: [
        { title: "Demographic Segments", description: "Age, location, and demographic data used for targeting." },
        { title: "Behavioral Segments", description: "Past purchases and website behavior inform content." },
        { title: "Engagement Segments", description: "Active, occasional, and dormant subscribers treated differently." },
        { title: "Interest Segments", description: "Subscriber interests and preferences drive content matching." },
        { title: "Lifecycle Segments", description: "New vs. established customers receive appropriate messaging." },
        { title: "Custom Segments", description: "Business-specific segments created for unique needs." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "automation-flows": [
    {
      category: "Welcome Automation",
      headline: "First Impressions That Convert",
      description: "Welcome sequences set the tone for the relationship. We create onboarding flows that engage and convert.",
      subPoints: [
        { title: "Immediate Welcome", description: "First email delivered instantly. Expectations set, value delivered." },
        { title: "Introduction Series", description: "Multi-email sequence that introduces brand and offerings." },
        { title: "Value Delivery", description: "Promised content or offer delivered. Trust established." },
        { title: "Engagement Prompts", description: "Calls to action that drive website visits and engagement." },
        { title: "Preference Collection", description: "Subscriber preferences gathered for future personalization." },
        { title: "Conversion Path", description: "Welcome sequence designed to drive first conversion." }
      ],
      ctaText: "Start Welcome Automation",
      ctaHref: "#contact"
    },
    {
      category: "Review Generation Automation",
      headline: "Turn Happy Customers Into Reviews",
      description: "51% of customers leave reviews when asked directly. We build automated sequences timed to peak satisfaction moments with personalization that converts. Integrates with GBP Review Management for full reputation system.",
      subPoints: [
        { title: "Optimal Timing", description: "Requests triggered shortly after positive service experience. Timing is everything for conversion." },
        { title: "Personalized Requests", description: "Customer name, specific service referenced. Generic asks get ignored." },
        { title: "Direct Review Links", description: "Shortened links straight to review form. 30% skip reviews because the process is confusing." },
        { title: "Follow-Up Reminders", description: "The #1 reason customers don't review: they forget. Automated reminder 3-7 days later." },
        { title: "Platform Options", description: "Dynamic links to Google, Facebook, Yelp, or industry sites. Let customers choose their preferred platform." },
        { title: "GBP Integration", description: "Works with GBP Review Management for response workflows, sentiment tracking, and monthly reporting." }
      ],
      ctaText: "Start Review Automation",
      ctaHref: "#contact"
    },
    {
      category: "Behavioral Triggers",
      headline: "Automated Response to Actions",
      description: "Behavior triggers timely, relevant emails. We set up automations that respond to what subscribers do.",
      subPoints: [
        { title: "Browse Abandonment", description: "Website visitors reminded of viewed content or services." },
        { title: "Cart Abandonment", description: "Incomplete purchases recovered with reminder sequences." },
        { title: "Post-Service Sequence", description: "Thank you, review request, and rebooking reminder. Timed for peak satisfaction." },
        { title: "Milestone Emails", description: "Anniversaries, birthdays, and relationship milestones acknowledged." },
        { title: "Re-Engagement", description: "Inactivity triggers win-back campaigns before subscribers go cold." },
        { title: "Lead Nurture", description: "Prospects nurtured through consideration phase to decision." }
      ],
      ctaText: "Get Behavioral Automation",
      ctaHref: "#contact"
    },
    {
      category: "Integration & Workflow",
      headline: "Connected Systems That Work",
      description: "Email automation depends on data flow. We ensure systems talk to each other seamlessly for review requests, follow-ups, and win-back campaigns.",
      subPoints: [
        { title: "CRM Integration", description: "Customer data synced bidirectionally. Service dates trigger review requests automatically." },
        { title: "Review Platform Links", description: "Dynamic links to Google, Facebook, Yelp, or industry sites based on customer segment." },
        { title: "Lead Scoring", description: "Engagement updates lead scores for sales prioritization." },
        { title: "SMS Fallback", description: "29% prefer text requests. Automation triggers SMS when email unopened." },
        { title: "Testing Framework", description: "Automation flows tested before activation. Edge cases handled." },
        { title: "Performance Monitoring", description: "Review generation rates tracked. Sequences optimized based on results." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "newsletter-design": [
    {
      category: "Design System",
      headline: "Brand-Consistent Templates",
      description: "Professional design builds credibility. We create templates that look great and represent the brand.",
      subPoints: [
        { title: "Brand Guidelines", description: "Colors, fonts, and imagery aligned with brand standards." },
        { title: "Template Library", description: "Reusable templates for different campaign types." },
        { title: "Header & Footer", description: "Consistent branding elements across all emails." },
        { title: "Visual Hierarchy", description: "Layout guides readers through content logically." },
        { title: "Whitespace", description: "Clean layouts that don't overwhelm. Breathing room included." },
        { title: "Imagery Standards", description: "Photo and graphic standards maintained for consistency." }
      ],
      ctaText: "Start Design System",
      ctaHref: "#contact"
    },
    {
      category: "Mobile Optimization",
      headline: "Perfect on Every Device",
      description: "Most emails open on mobile. We design responsive templates that work everywhere.",
      subPoints: [
        { title: "Responsive Layout", description: "Single-column mobile view. Multi-column desktop when appropriate." },
        { title: "Touch Targets", description: "Buttons sized for finger taps. No tiny links." },
        { title: "Font Sizing", description: "Readable on small screens. No squinting required." },
        { title: "Image Scaling", description: "Images resize appropriately. No horizontal scrolling." },
        { title: "Preview Text", description: "Pre-header text optimized for inbox preview." },
        { title: "Client Testing", description: "Rendering tested across email clients. Outlook, Gmail, Apple Mail." }
      ],
      ctaText: "Get Mobile Optimization",
      ctaHref: "#contact"
    },
    {
      category: "Conversion Elements",
      headline: "Design That Drives Action",
      description: "Beautiful emails that don't convert are useless. We design for both aesthetics and action.",
      subPoints: [
        { title: "CTA Buttons", description: "Prominent buttons that stand out and invite clicks." },
        { title: "Social Proof", description: "Reviews and testimonials integrated naturally." },
        { title: "Urgency Elements", description: "Countdown timers and deadline messaging when appropriate." },
        { title: "Click Mapping", description: "Content arranged to guide readers toward desired action." },
        { title: "Link Strategy", description: "Multiple pathways to conversion without clutter." },
        { title: "Footer Optimization", description: "Footer includes secondary CTAs and contact options." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "ab-testing": [
    {
      category: "Test Strategy",
      headline: "Systematic Testing That Learns",
      description: "Random testing teaches nothing. We develop testing roadmaps that build knowledge over time.",
      subPoints: [
        { title: "Hypothesis Development", description: "Tests based on hypotheses, not hunches. Learning objectives defined." },
        { title: "Priority Matrix", description: "High-impact, low-effort tests prioritized. Quick wins first." },
        { title: "Sample Sizing", description: "Statistical significance requirements calculated. Valid results ensured." },
        { title: "Testing Calendar", description: "Consistent testing schedule. Continuous improvement." },
        { title: "Documentation", description: "Test results documented. Knowledge base built over time." },
        { title: "Learning Application", description: "Winning variations implemented. Insights applied broadly." }
      ],
      ctaText: "Start Testing Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Subject Line Testing",
      headline: "Maximize Open Rates",
      description: "Subject lines determine whether emails get opened. We test systematically to find what works.",
      subPoints: [
        { title: "Length Testing", description: "Short vs. long subjects. Character limits explored." },
        { title: "Personalization", description: "Name, location, and dynamic elements tested." },
        { title: "Emoji Usage", description: "Emoji impact measured. Brand appropriateness considered." },
        { title: "Urgency Language", description: "Deadline and scarcity language tested responsibly." },
        { title: "Question vs. Statement", description: "Different formats compared for engagement." },
        { title: "Preview Text", description: "Pre-header text optimized alongside subjects." }
      ],
      ctaText: "Get Subject Line Testing",
      ctaHref: "#contact"
    },
    {
      category: "Content & CTA Testing",
      headline: "Improve Clicks and Conversions",
      description: "Opens mean nothing without clicks. We test content and CTAs for maximum engagement.",
      subPoints: [
        { title: "CTA Button Copy", description: "Action-oriented text vs. benefit-focused. What drives clicks?" },
        { title: "CTA Placement", description: "Above fold, multiple placements, and positioning tested." },
        { title: "Content Length", description: "Long-form vs. short-form. What holds attention?" },
        { title: "Image vs. Text", description: "Visual vs. text-heavy layouts compared." },
        { title: "Offer Testing", description: "Different incentives and value propositions measured." },
        { title: "Send Time", description: "Day of week and time of day optimized for audience." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "performance-analytics": [
    {
      category: "Metric Tracking",
      headline: "Measure What Matters",
      description: "Email generates data. We focus on metrics that indicate real business value, not vanity numbers.",
      subPoints: [
        { title: "Open Rates", description: "Inbox placement and subject line effectiveness measured." },
        { title: "Click Rates", description: "Content engagement and CTA performance tracked." },
        { title: "Conversion Tracking", description: "Email-attributed leads and sales measured." },
        { title: "Revenue Attribution", description: "Dollar value tied to email campaigns where possible." },
        { title: "List Growth", description: "Subscriber acquisition and churn rates monitored." },
        { title: "Deliverability", description: "Bounce rates, spam complaints, and inbox placement tracked." }
      ],
      ctaText: "Start Analytics Tracking",
      ctaHref: "#contact"
    },
    {
      category: "Reporting & Insights",
      headline: "Data Transformed Into Action",
      description: "Numbers need interpretation. We turn data into insights that drive better decisions.",
      subPoints: [
        { title: "Campaign Reports", description: "Post-campaign analysis with clear performance assessment." },
        { title: "Trend Analysis", description: "Performance trends identified over time. Direction understood." },
        { title: "Segment Performance", description: "How different audiences respond to different content." },
        { title: "Competitive Benchmarks", description: "Performance compared to industry standards." },
        { title: "Recommendations", description: "Each report includes specific optimization suggestions." },
        { title: "Executive Summaries", description: "High-level overviews for stakeholder communication." }
      ],
      ctaText: "Get Performance Reporting",
      ctaHref: "#contact"
    },
    {
      category: "Continuous Optimization",
      headline: "Get Better Every Month",
      description: "Analytics enable improvement. We use data to continuously optimize email performance.",
      subPoints: [
        { title: "Monthly Reviews", description: "Regular performance reviews identify opportunities." },
        { title: "A/B Test Integration", description: "Test results inform ongoing strategy evolution." },
        { title: "Audience Refinement", description: "Segmentation improved based on response patterns." },
        { title: "Content Optimization", description: "Top-performing content types and topics expanded." },
        { title: "Timing Refinement", description: "Send schedules optimized for audience behavior." },
        { title: "Technical Improvements", description: "Deliverability and rendering issues addressed proactively." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  // =============================================
  // AUTHORITY BUILDING SPOKES
  // =============================================

  "local-links": [
    {
      category: "Local Publication Outreach",
      headline: "Links From Trusted Local Sources",
      description: "Local publications carry geographic authority. We secure coverage in news sites and community blogs.",
      subPoints: [
        { title: "Local News Sites", description: "Coverage in regional news outlets. Legitimate editorial opportunities." },
        { title: "Community Blogs", description: "Hyperlocal blogs and community websites targeted." },
        { title: "Story Angles", description: "Newsworthy angles developed. Community interest focus." },
        { title: "Press Outreach", description: "Relationships built with local journalists and editors." },
        { title: "Contributed Content", description: "Bylined articles placed in relevant publications." },
        { title: "Event Coverage", description: "Local events used for coverage opportunities." }
      ],
      ctaText: "Start Local Link Building",
      ctaHref: "#contact"
    },
    {
      category: "Community Connections",
      headline: "Authority Through Local Involvement",
      description: "Genuine community involvement generates authentic links. We identify and facilitate opportunities.",
      subPoints: [
        { title: "Chamber of Commerce", description: "Membership and involvement in local chambers." },
        { title: "Business Associations", description: "Industry and regional business groups joined." },
        { title: "Nonprofit Partnerships", description: "Local charity involvement that generates links and goodwill." },
        { title: "Educational Connections", description: "School and university partnership opportunities." },
        { title: "Government Resources", description: ".gov and .edu links through legitimate channels." },
        { title: "Community Events", description: "Sponsorship and participation in local events." }
      ],
      ctaText: "Get Community Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Link Quality & Tracking",
      headline: "Quality Over Quantity Always",
      description: "One trusted local link beats fifty low-quality submissions. We focus on links that actually move rankings.",
      subPoints: [
        { title: "Quality Assessment", description: "Every opportunity evaluated for relevance and authority." },
        { title: "Link Monitoring", description: "Acquired links monitored for continued value." },
        { title: "Competitor Gap", description: "Links competitors have that client lacks identified." },
        { title: "Anchor Diversity", description: "Natural anchor text distribution maintained." },
        { title: "Monthly Reporting", description: "Links acquired, pending, and performance tracked." },
        { title: "Disavow Monitoring", description: "Toxic links identified and addressed if needed." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "citations": [
    {
      category: "Core Citation Building",
      headline: "Foundation Directories That Matter",
      description: "Citation building starts with core directories. We secure accurate listings across the sites Google trusts.",
      subPoints: [
        { title: "Data Aggregators", description: "Neustar, Foursquare, Data Axle. Distribution that scales." },
        { title: "Core 50+", description: "Google, Bing, Apple, Yelp, Facebook, and essential directories." },
        { title: "NAP Consistency", description: "Identical business information everywhere. No variations." },
        { title: "Category Accuracy", description: "Categories matched to GBP for signal consistency." },
        { title: "Description Uniqueness", description: "Unique descriptions where platforms allow. No duplicate content." },
        { title: "Enhanced Listings", description: "Photos, hours, and services added where supported." }
      ],
      ctaText: "Start Citation Building",
      ctaHref: "#contact"
    },
    {
      category: "Industry Citations",
      headline: "Vertical-Specific Authority",
      description: "Industry directories signal expertise. We identify and secure placements in relevant verticals.",
      subPoints: [
        { title: "Industry Research", description: "Complete mapping of directories for client's vertical." },
        { title: "Professional Associations", description: "Trade organizations and professional body listings." },
        { title: "Niche Directories", description: "Specialized platforms for specific industries." },
        { title: "Credential Listings", description: "Licenses and certifications featured where applicable." },
        { title: "Competitor Analysis", description: "Where competitors are listed that client is not." },
        { title: "Authority Prioritization", description: "Higher-authority directories prioritized." }
      ],
      ctaText: "Get Industry Citations",
      ctaHref: "#contact"
    },
    {
      category: "Citation Maintenance",
      headline: "Keep Citations Clean Forever",
      description: "Citations degrade over time. We maintain accuracy and address issues before they hurt rankings.",
      subPoints: [
        { title: "Quarterly Audits", description: "All citations reviewed for accuracy regularly." },
        { title: "Inconsistency Cleanup", description: "Wrong addresses, phones, and names corrected." },
        { title: "Duplicate Suppression", description: "Competing listings merged or removed." },
        { title: "Old Location Cleanup", description: "Previous addresses updated across all platforms." },
        { title: "New Opportunity ID", description: "New directories identified and added." },
        { title: "Performance Tracking", description: "Citation growth and accuracy monitored and reported." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "brand-mentions": [
    {
      category: "Platform Strategy",
      headline: "Strategic Presence on Key Platforms",
      description: "Brand mentions on discussion platforms feed AI discovery. We build authentic presence where it matters.",
      subPoints: [
        { title: "Reddit Engagement", description: "Helpful participation in relevant subreddits. No spam, real value." },
        { title: "Quora Answers", description: "Expert answers to questions in client's domain." },
        { title: "Facebook Groups", description: "Community participation in local and industry groups." },
        { title: "Forum Presence", description: "Industry-specific forums identified and engaged." },
        { title: "Platform Research", description: "Where target audience discusses client's services." },
        { title: "Authentic Voice", description: "Genuine helpfulness, not promotional spam." }
      ],
      ctaText: "Start Brand Mention Strategy",
      ctaHref: "#contact"
    },
    {
      category: "AI Discovery Signals",
      headline: "Feeding the Answer Engines",
      description: "LLMs learn from web discussions. We ensure client expertise is represented in training data sources.",
      subPoints: [
        { title: "Quotable Content", description: "Answers structured for LLM extraction and citation." },
        { title: "Entity Building", description: "Consistent brand references that build entity recognition." },
        { title: "Topical Authority", description: "Expertise demonstrated across related topics." },
        { title: "Source Diversity", description: "Mentions spread across platforms for natural distribution." },
        { title: "Freshness Signals", description: "Ongoing engagement keeps brand current in discussions." },
        { title: "Quality Standards", description: "Every mention adds genuine value. No filler content." }
      ],
      ctaText: "Get AI Visibility Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Monitoring & Reporting",
      headline: "Track Brand Visibility Growth",
      description: "Brand mention impact takes time to compound. We track and report on visibility growth.",
      subPoints: [
        { title: "Mention Monitoring", description: "Brand mentions tracked across platforms." },
        { title: "Sentiment Analysis", description: "Positive, negative, and neutral mentions categorized." },
        { title: "Share of Voice", description: "How client compares to competitors in discussions." },
        { title: "Traffic Attribution", description: "Website visits from mention sources tracked." },
        { title: "Opportunity Alerts", description: "New conversation opportunities flagged in real-time." },
        { title: "Monthly Reporting", description: "Brand visibility metrics included in reports." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "anchor-text": [
    {
      category: "Profile Analysis",
      headline: "Understand Your Current Profile",
      description: "Anchor text profile determines penalty risk and ranking power. We analyze and strategize accordingly.",
      subPoints: [
        { title: "Distribution Audit", description: "Current anchor text distribution mapped and analyzed." },
        { title: "Competitor Comparison", description: "How client profile compares to ranking competitors." },
        { title: "Risk Assessment", description: "Over-optimization and unnatural patterns identified." },
        { title: "Gap Identification", description: "Missing anchor types that should be represented." },
        { title: "Historical Analysis", description: "How profile has changed over time." },
        { title: "Strategy Development", description: "Target distribution defined for future links." }
      ],
      ctaText: "Start Anchor Analysis",
      ctaHref: "#contact"
    },
    {
      category: "Diversification Strategy",
      headline: "Natural Profiles That Rank",
      description: "Natural anchor profiles include variety. We ensure link building creates sustainable, safe profiles.",
      subPoints: [
        { title: "Branded Anchors", description: "Company name and brand variations. Foundation of natural profiles." },
        { title: "Naked URLs", description: "Raw URL anchors for natural appearance." },
        { title: "Generic Anchors", description: "Click here, learn more, and natural phrases." },
        { title: "Partial Match", description: "Keywords included naturally in longer phrases." },
        { title: "Exact Match", description: "Used sparingly and strategically for key pages." },
        { title: "Co-Citation", description: "Mentions alongside competitor brands for context." }
      ],
      ctaText: "Get Diversification Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Ongoing Management",
      headline: "Maintain Profile Health",
      description: "Anchor profiles need ongoing attention. We monitor and adjust as new links are built.",
      subPoints: [
        { title: "New Link Guidance", description: "Anchor text recommendations for every link opportunity." },
        { title: "Monthly Monitoring", description: "Profile tracked as new links are indexed." },
        { title: "Adjustment Signals", description: "When to shift strategy based on ranking changes." },
        { title: "Penalty Prevention", description: "Proactive adjustments before problems occur." },
        { title: "Algorithm Monitoring", description: "Google updates watched for anchor-related changes." },
        { title: "Quarterly Reviews", description: "Strategic reviews of profile health and direction." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "sponsorships": [
    {
      category: "Opportunity Identification",
      headline: "Find Sponsorships That Matter",
      description: "Not all sponsorships are equal. We identify opportunities that generate links and local visibility.",
      subPoints: [
        { title: "Local Events", description: "Community events, festivals, and local gatherings." },
        { title: "Youth Sports", description: "Little league, school teams, and youth programs." },
        { title: "Charity Events", description: "Fundraisers, walks, and nonprofit initiatives." },
        { title: "Educational Programs", description: "School events, scholarships, and educational support." },
        { title: "Industry Events", description: "Trade shows, conferences, and industry gatherings." },
        { title: "Link Verification", description: "Sponsorship link value verified before commitment." }
      ],
      ctaText: "Start Sponsorship Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Coordination & Execution",
      headline: "Manage Sponsorships Professionally",
      description: "Sponsorships require coordination. We handle logistics to ensure link value is captured.",
      subPoints: [
        { title: "Outreach Management", description: "Professional communication with event organizers." },
        { title: "Agreement Review", description: "Sponsorship terms include website link requirements." },
        { title: "Asset Delivery", description: "Logos, descriptions, and URLs provided to organizers." },
        { title: "Link Verification", description: "Links checked after event pages go live." },
        { title: "Follow-Up", description: "Missing or incorrect links addressed promptly." },
        { title: "Relationship Building", description: "Ongoing relationships for annual opportunities." }
      ],
      ctaText: "Get Sponsorship Coordination",
      ctaHref: "#contact"
    },
    {
      category: "Value Maximization",
      headline: "Get More Than Just a Link",
      description: "Sponsorships offer benefits beyond links. We help clients maximize total value from involvement.",
      subPoints: [
        { title: "PR Opportunities", description: "Local media coverage of sponsorship secured when possible." },
        { title: "Social Proof", description: "Community involvement featured in marketing materials." },
        { title: "Content Creation", description: "Blog posts and social content about involvement." },
        { title: "Networking", description: "Event attendance for relationship building." },
        { title: "Brand Visibility", description: "Logo placement and signage value captured." },
        { title: "ROI Tracking", description: "Total value of sponsorship tracked and reported." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "reputation-signals": [
    {
      category: "Review Generation",
      headline: "Systematic Review Acquisition",
      description: "Reviews are reputation currency. We implement systems that generate consistent positive reviews.",
      subPoints: [
        { title: "Review Systems", description: "Automated and manual review request workflows implemented." },
        { title: "Platform Priority", description: "Google first, then industry-specific platforms." },
        { title: "Timing Optimization", description: "Requests sent at moments of maximum satisfaction." },
        { title: "Response Templates", description: "Professional responses drafted for all reviews." },
        { title: "Velocity Targets", description: "Monthly review goals based on competitive analysis." },
        { title: "Quality Monitoring", description: "Review content monitored for testimonial opportunities." }
      ],
      ctaText: "Start Review Generation",
      ctaHref: "#contact"
    },
    {
      category: "Testimonial Strategy",
      headline: "Turn Reviews Into Marketing Assets",
      description: "Great reviews should work harder. We transform customer feedback into conversion tools.",
      subPoints: [
        { title: "Testimonial Collection", description: "Best reviews identified for marketing use." },
        { title: "Permission Process", description: "Customer approval secured for expanded use." },
        { title: "Format Adaptation", description: "Testimonials formatted for different channels." },
        { title: "Video Testimonials", description: "Video review opportunities identified and facilitated." },
        { title: "Case Study Development", description: "Detailed success stories from willing customers." },
        { title: "Website Integration", description: "Testimonials strategically placed for conversion impact." }
      ],
      ctaText: "Get Testimonial Strategy",
      ctaHref: "#contact"
    },
    {
      category: "Trust Signal Building",
      headline: "Credibility That Converts",
      description: "Trust signals extend beyond reviews. We build comprehensive credibility frameworks.",
      subPoints: [
        { title: "Credential Display", description: "Licenses, certifications, and awards prominently featured." },
        { title: "Association Badges", description: "Industry memberships and affiliations displayed." },
        { title: "Media Mentions", description: "Press coverage and features highlighted." },
        { title: "Security Signals", description: "Trust badges and security certifications where applicable." },
        { title: "Social Proof", description: "Customer counts, years in business, and success metrics." },
        { title: "Third-Party Validation", description: "BBB, industry ratings, and external reviews integrated." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  // =============================================
  // REPORTING SPOKES
  // =============================================

  "white-label-dashboards": [
    {
      category: "Dashboard Design",
      headline: "Branded Dashboards Clients Love",
      description: "Dashboards are your agency's face. We build fully branded interfaces that impress and inform.",
      subPoints: [
        { title: "Complete Branding", description: "Your logo, colors, and design language throughout." },
        { title: "Custom URL", description: "Dashboard hosted on your subdomain when desired." },
        { title: "Client Access", description: "Secure login for client self-service viewing." },
        { title: "Mobile Responsive", description: "Dashboards work on any device. No pinching required." },
        { title: "Role-Based Views", description: "Different views for different stakeholders." },
        { title: "White-Label Completely", description: "Zero mention of underlying technology or our company." }
      ],
      ctaText: "Start Dashboard Design",
      ctaHref: "#contact"
    },
    {
      category: "Data Integration",
      headline: "All Data in One Place",
      description: "Marketing data is scattered. We pull everything together for unified visibility.",
      subPoints: [
        { title: "Google Analytics", description: "Traffic, behavior, and conversion data integrated." },
        { title: "Search Console", description: "Ranking, impression, and click data displayed." },
        { title: "Advertising Platforms", description: "Google Ads, Meta Ads, and other platforms connected." },
        { title: "Call Tracking", description: "Call volume, sources, and outcomes integrated." },
        { title: "CRM Data", description: "Lead and sales data for ROI visibility." },
        { title: "Custom Sources", description: "Additional data sources connected via API when needed." }
      ],
      ctaText: "Get Data Integration",
      ctaHref: "#contact"
    },
    {
      category: "Real-Time Updates",
      headline: "Always Current Information",
      description: "Stale data is useless data. We ensure dashboards show current performance at all times.",
      subPoints: [
        { title: "Automatic Refresh", description: "Data updated automatically on schedule." },
        { title: "Live Connections", description: "Direct API connections for real-time accuracy." },
        { title: "Alert Configuration", description: "Notifications for significant changes or issues." },
        { title: "Date Range Flexibility", description: "View any time period with a few clicks." },
        { title: "Comparison Views", description: "Period-over-period comparisons built in." },
        { title: "Data Quality", description: "Connection health monitored. Issues flagged immediately." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "monthly-reports": [
    {
      category: "Report Structure",
      headline: "Reports That Tell the Story",
      description: "Data without narrative is noise. We structure reports that communicate value clearly.",
      subPoints: [
        { title: "Executive Summary", description: "Key takeaways upfront. Busy clients read this first." },
        { title: "KPI Dashboard", description: "Most important metrics at a glance." },
        { title: "Performance Details", description: "Deep dive into each channel and campaign." },
        { title: "Work Completed", description: "Clear record of activities performed." },
        { title: "Recommendations", description: "Actionable next steps based on data." },
        { title: "Appendix Data", description: "Supporting details for clients who want depth." }
      ],
      ctaText: "Start Monthly Reporting",
      ctaHref: "#contact"
    },
    {
      category: "Customization",
      headline: "Reports Tailored to Each Client",
      description: "Different clients need different information. We customize reports to match priorities.",
      subPoints: [
        { title: "KPI Selection", description: "Metrics chosen based on client goals and services." },
        { title: "Branding", description: "Your agency's look and feel throughout." },
        { title: "Format Options", description: "PDF, web-based, or presentation format available." },
        { title: "Frequency", description: "Monthly standard, weekly or quarterly available." },
        { title: "Detail Level", description: "Executive summaries or comprehensive deep dives." },
        { title: "Language", description: "Technical terms translated to business impact." }
      ],
      ctaText: "Get Custom Reports",
      ctaHref: "#contact"
    },
    {
      category: "Delivery & Support",
      headline: "Reports Ready for Client Presentation",
      description: "Reports should be client-ready, not first drafts. We prepare everything for your conversations.",
      subPoints: [
        { title: "Consistent Schedule", description: "Reports delivered on the same day each month." },
        { title: "Talking Points", description: "Key points highlighted for client conversations." },
        { title: "Question Prep", description: "Anticipated questions addressed proactively." },
        { title: "Presentation Ready", description: "Formats suitable for screen sharing and meetings." },
        { title: "Follow-Up Support", description: "Questions about data answered quickly." },
        { title: "Client Feedback", description: "Report format refined based on client preferences." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "rank-tracking": [
    {
      category: "Tracking Setup",
      headline: "Track What Matters Where It Matters",
      description: "Local rankings vary by location. We track from the places that matter for each client.",
      subPoints: [
        { title: "Keyword Selection", description: "Target keywords tracked based on strategy priorities." },
        { title: "Location Grid", description: "Rankings tracked from multiple points in service area." },
        { title: "Map Pack Tracking", description: "Local 3-pack positions monitored separately from organic." },
        { title: "Competitor Tracking", description: "Competitor rankings tracked for context." },
        { title: "Device Separation", description: "Mobile and desktop rankings tracked independently." },
        { title: "Frequency", description: "Weekly tracking standard. Daily available when needed." }
      ],
      ctaText: "Start Rank Tracking",
      ctaHref: "#contact"
    },
    {
      category: "Analysis & Insights",
      headline: "Turn Rankings Into Strategy",
      description: "Rank data should inform action. We analyze trends and translate them into recommendations.",
      subPoints: [
        { title: "Trend Analysis", description: "Ranking direction over time, not just snapshots." },
        { title: "Volatility Monitoring", description: "Unusual movement flagged for investigation." },
        { title: "Algorithm Impact", description: "Google updates correlated with ranking changes." },
        { title: "Opportunity Identification", description: "Keywords close to page one prioritized." },
        { title: "Competitor Movement", description: "When competitors move, you know why." },
        { title: "Strategic Recommendations", description: "Ranking data translated into action items." }
      ],
      ctaText: "Get Ranking Analysis",
      ctaHref: "#contact"
    },
    {
      category: "Reporting Integration",
      headline: "Rankings in Context",
      description: "Rankings alone don't tell the story. We integrate rank data with traffic and conversion metrics.",
      subPoints: [
        { title: "Visibility Score", description: "Aggregate ranking performance in single metric." },
        { title: "Traffic Correlation", description: "Ranking changes linked to traffic impact." },
        { title: "Conversion Connection", description: "How rankings translate to leads and revenue." },
        { title: "Share of Voice", description: "Market visibility compared to competitors." },
        { title: "Client Reports", description: "Ranking data presented clearly for non-technical clients." },
        { title: "Historical Context", description: "Where rankings were, are, and are trending." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "call-tracking": [
    {
      category: "Tracking Implementation",
      headline: "Know Where Every Call Comes From",
      description: "Phone calls are often the most valuable leads. We implement tracking to attribute every call.",
      subPoints: [
        { title: "Dynamic Number Insertion", description: "Website visitors see trackable numbers. Source captured." },
        { title: "Offline Tracking", description: "Print, TV, and offline sources tracked with dedicated numbers." },
        { title: "Campaign Numbers", description: "Specific numbers for specific campaigns and channels." },
        { title: "Call Recording", description: "Calls recorded for quality and lead qualification." },
        { title: "Integration", description: "Call data connected to analytics and CRM." },
        { title: "Local Numbers", description: "Local area codes maintained for caller trust." }
      ],
      ctaText: "Start Call Tracking",
      ctaHref: "#contact"
    },
    {
      category: "Call Analytics",
      headline: "Understand Call Quality and Value",
      description: "Call volume is meaningless without quality. We analyze calls to understand true value.",
      subPoints: [
        { title: "Call Duration", description: "Call length indicates engagement level." },
        { title: "First-Time Callers", description: "New vs. repeat callers distinguished." },
        { title: "Call Outcomes", description: "Appointments, quotes, and conversions tracked." },
        { title: "Missed Calls", description: "Missed call volume and patterns identified." },
        { title: "Call Timing", description: "Peak call times identified for staffing." },
        { title: "Quality Scoring", description: "Calls categorized by lead quality." }
      ],
      ctaText: "Get Call Analytics",
      ctaHref: "#contact"
    },
    {
      category: "Attribution & ROI",
      headline: "Connect Calls to Marketing Spend",
      description: "Call tracking closes the attribution loop. We connect calls to campaigns and calculate ROI.",
      subPoints: [
        { title: "Source Attribution", description: "Every call tied to originating channel and campaign." },
        { title: "Cost Per Call", description: "True cost calculated including all spend." },
        { title: "Revenue Attribution", description: "Calls connected to revenue when CRM integrated." },
        { title: "Channel Comparison", description: "Which channels drive calls vs. forms vs. chats." },
        { title: "Multi-Touch", description: "Call credit distributed across touchpoints." },
        { title: "ROI Reporting", description: "Clear ROI visibility in client reports." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "roi-analysis": [
    {
      category: "Attribution Framework",
      headline: "Connect Marketing to Revenue",
      description: "ROI requires connecting marketing to money. We build frameworks that prove value.",
      subPoints: [
        { title: "Conversion Tracking", description: "All conversion points tracked and valued." },
        { title: "Lead Value", description: "Average lead values established per service and channel." },
        { title: "Customer Value", description: "Lifetime value considered, not just first transaction." },
        { title: "Multi-Touch", description: "Credit distributed across the customer journey." },
        { title: "Offline Connection", description: "CRM and sales data connected where possible." },
        { title: "Model Customization", description: "Attribution model matched to business reality." }
      ],
      ctaText: "Start ROI Analysis",
      ctaHref: "#contact"
    },
    {
      category: "ROI Calculation",
      headline: "Clear Return on Investment",
      description: "We calculate and present ROI in terms clients and stakeholders understand.",
      subPoints: [
        { title: "Channel ROI", description: "Return calculated per marketing channel." },
        { title: "Campaign ROI", description: "Individual campaign performance measured." },
        { title: "Blended ROI", description: "Overall marketing ROI across all activities." },
        { title: "Trend Analysis", description: "ROI improvement over time demonstrated." },
        { title: "Benchmark Comparison", description: "Performance compared to industry standards." },
        { title: "Projection", description: "Expected returns from continued investment." }
      ],
      ctaText: "Get ROI Calculation",
      ctaHref: "#contact"
    },
    {
      category: "Strategic Application",
      headline: "Use ROI Data to Optimize Spend",
      description: "ROI data should drive decisions. We translate analysis into actionable recommendations.",
      subPoints: [
        { title: "Budget Recommendations", description: "Where to invest more and where to cut." },
        { title: "Channel Optimization", description: "Shift spend toward highest-returning channels." },
        { title: "Efficiency Improvements", description: "How to improve returns from current spend." },
        { title: "Growth Modeling", description: "Expected results from increased investment." },
        { title: "Stakeholder Communication", description: "ROI presented for executive understanding." },
        { title: "Quarterly Reviews", description: "Regular ROI analysis informs strategy evolution." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ],

  "client-presentations": [
    {
      category: "Presentation Design",
      headline: "Slides That Impress and Inform",
      description: "Client presentations represent your agency. We create materials that look professional and communicate clearly.",
      subPoints: [
        { title: "Agency Branding", description: "Your brand applied consistently throughout." },
        { title: "Visual Design", description: "Clean, professional layouts that enhance understanding." },
        { title: "Data Visualization", description: "Charts and graphs that communicate at a glance." },
        { title: "Narrative Flow", description: "Information structured for logical progression." },
        { title: "Key Takeaways", description: "Most important points highlighted clearly." },
        { title: "Template Library", description: "Reusable templates for consistent presentation." }
      ],
      ctaText: "Start Presentation Design",
      ctaHref: "#contact"
    },
    {
      category: "Content Development",
      headline: "Stories That Justify Investment",
      description: "Presentations should build confidence. We develop content that reinforces value and trust.",
      subPoints: [
        { title: "Performance Summary", description: "Results presented with appropriate context." },
        { title: "Win Highlights", description: "Successes featured prominently." },
        { title: "Challenge Framing", description: "Setbacks explained with action plans." },
        { title: "Strategy Updates", description: "What's next and why it matters." },
        { title: "Industry Context", description: "Performance relative to market conditions." },
        { title: "Recommendation Support", description: "Data that supports strategic recommendations." }
      ],
      ctaText: "Get Presentation Content",
      ctaHref: "#contact"
    },
    {
      category: "Meeting Support",
      headline: "Ready for Client Conversations",
      description: "Great presentations need great presenters. We prepare you for successful client meetings.",
      subPoints: [
        { title: "Talking Points", description: "Key messages for each slide documented." },
        { title: "Q&A Preparation", description: "Anticipated questions with suggested responses." },
        { title: "Objection Handling", description: "Prepared responses for common concerns." },
        { title: "Upsell Opportunities", description: "Where to introduce additional services." },
        { title: "Follow-Up Templates", description: "Post-meeting communication prepared." },
        { title: "Debrief Support", description: "Help processing meeting feedback." }
      ],
      ctaText: "Schedule a Consultation",
      ctaHref: "#contact"
    }
  ]
};
