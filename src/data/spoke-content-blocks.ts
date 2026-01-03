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

// Stock images for spokes without custom illustrations
import citationBuildingImg from "@/assets/stock/citation-building.jpg";
import reviewManagementImg from "@/assets/stock/review-management.jpg";
import photoOptimizationImg from "@/assets/stock/photo-optimization.jpg";
import qaManagementImg from "@/assets/stock/qa-management.jpg";
import postSchedulingImg from "@/assets/stock/post-scheduling.jpg";
import googleAdsImg from "@/assets/stock/google-ads.jpg";
import metaAdsImg from "@/assets/stock/meta-ads.jpg";
import emailMarketingImg from "@/assets/stock/email-marketing.jpg";
import localSeoImg from "@/assets/stock/local-seo.jpg";
import gbpOptimizationImg from "@/assets/stock/gbp-optimization.jpg";
import linkBuildingImg from "@/assets/stock/link-building.jpg";
import schemaMarkupImg from "@/assets/stock/schema-markup.jpg";
import contentDevelopmentImg from "@/assets/stock/content-development.jpg";
import reportingImg from "@/assets/stock/reporting.jpg";
import whiteLabelDashboardsImg from "@/assets/spoke/white-label-dashboards.png";
import dataIntegrationTabletImg from "@/assets/spoke/data-integration-tablet.png";
import rankTrackingLaptopImg from "@/assets/spoke/rank-tracking-laptop.png";
import rankAnalysisDashboardImg from "@/assets/spoke/rank-analysis-dashboard.jpg";
import realTimeDashboardMeetingImg from "@/assets/spoke/real-time-dashboard-meeting.png";
import rankingsInContextImg from "@/assets/spoke/rankings-in-context.png";
import reportHistoryTabletImg from "@/assets/spoke/report-history-tablet.png";
import reportingPresentationImg from "@/assets/spoke/reporting-presentation.png";
import reportsCustomizationImg from "@/assets/spoke/reports-customization.png";
import clientConversationsImg from "@/assets/spoke/client-conversations.png";
import brandedDashboardsClientsImg from "@/assets/spoke/branded-dashboards-clients.png";
import callTrackingImplementationImg from "@/assets/spoke/call-tracking-implementation.jpg";
import callAnalyticsDashboardImg from "@/assets/spoke/call-analytics-dashboard.png";
import callAnalyticsQualityValueImg from "@/assets/spoke/call-analytics-quality-value.jpg";
import callAttributionRoiImg from "@/assets/spoke/call-attribution-roi.png";
import callTrackingAttributionLoopImg from "@/assets/spoke/call-tracking-attribution-loop.jpg";
import attributionFrameworkDashboardImg from "@/assets/spoke/attribution-framework-dashboard.png";
import roiCalculationDashboardImg from "@/assets/spoke/roi-calculation-dashboard.png";
import budgetOptimizationDashboardImg from "@/assets/spoke/budget-optimization-dashboard.png";
import presentationSlidesDesignImg from "@/assets/spoke/presentation-slides-design.png";
import presentationRoiStoriesImg from "@/assets/spoke/presentation-roi-stories.png";
import localServiceAdsImg from "@/assets/stock/local-service-ads.jpg";
import retargetingImg from "@/assets/stock/retargeting.jpg";

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
    { question: "What schema types do you implement?", answer: "LocalBusiness, Organization, Person, Service, FAQ, Review, Breadcrumb, Article, and Product schema. We use an @graph structure to connect entities—your business, its founder, services, and locations—into a page-level knowledge graph that machines understand explicitly." },
    { question: "How do you test schema implementation?", answer: "Three-step validation: Schema.org validator catches syntax errors, Google Rich Results Test confirms eligibility, and Classy Schema visualization verifies entity connections. We check that relationships render correctly before deployment." },
    { question: "What is connected schema and why does it matter?", answer: "Connected schema uses @id properties to link entities together. Instead of isolated markup, we create relationships—Organization connected to Person (founder), LocalBusiness connected to Service offerings. This context is how machines understand your business without NLP guesswork." },
    { question: "How do sameAs and knowsAbout properties help?", answer: "sameAs links your entity to authoritative sources like LinkedIn, Crunchbase, and social profiles. knowsAbout connects to Wikipedia/Wikidata concepts for topic disambiguation. Both strengthen E-E-A-T signals for traditional search and improve AI system accuracy." },
    { question: "Does schema directly improve rankings?", answer: "Schema itself is not a direct ranking factor. However, it reduces the computational work search engines need to understand your content, enables rich results that improve CTR, and increases AI citation accuracy—all of which compound into ranking benefits." },
    { question: "How often should schema be updated?", answer: "Updated when business information changes, new services are added, team members change, or Google announces new supported types. Quarterly reviews recommended. We also monitor for syntax errors that can silently break markup." },
    { question: "Can schema help with AI search visibility?", answer: "Absolutely. AI systems like ChatGPT, Perplexity, and Google AI Overviews rely on structured data to understand, summarize, and cite content accurately. Clean, connected schema gives these systems explicit answers rather than forcing NLP interpretation of unstructured text." }
  ],
  "nap-citations": [
    { question: "What is a NAP citation?", answer: "A citation is any online mention of your business name, address, and phone number. NAP data accounts for 7% of all local ranking factors. 73% of users lose trust when listings contain incorrect information." },
    { question: "How many citations do you build?", answer: "We start with 50+ core citations across major directories and data aggregators, then add industry-specific platforms. Businesses with complete, consistent listings see up to 25% more local search visibility." },
    { question: "How long until citations impact rankings?", answer: "Most citations appear in Google's index within 2-4 weeks. Data aggregator submissions propagate to hundreds of downstream sites over 4-8 weeks as NAP consistency signals compound." },
    { question: "What happens if citations are inconsistent?", answer: "Inconsistent NAP details can lead to a 41% drop in search rankings. 80% of mobile users lose confidence when contact details don't match across platforms. We fix conflicts before building." },
    { question: "Do you clean up incorrect citations?", answer: "Yes. Citation cleanup is the first priority. Nearly half of all businesses have missing or incorrect online information. We audit, identify conflicts, and correct inconsistencies before building new citations." },
    { question: "How often should citations be audited?", answer: "We recommend audits every 3-6 months. Some platforms allow public edits, meaning your details could be changed without your knowledge. Regular monitoring catches errors before they hurt rankings." },
    { question: "Why do citations matter for AI visibility?", answer: "AI Overviews cite trusted third-party sources like Yelp, TripAdvisor, and industry directories. 68% of consumers verify business details across multiple sources before reaching out." },
    { question: "What are data aggregators?", answer: "Data aggregators like Foursquare, Data Axle, and Neustar distribute business information to hundreds of directories automatically. Submitting to aggregators ensures consistent NAP across the entire citation ecosystem." }
  ],
  // GBP SEO FAQs
  "gbp-optimization": [
    { question: "How long until GBP changes affect rankings?", answer: "Profile optimizations can show impact within 1-2 weeks. Competitive markets may take longer as other signals like reviews and citations need to build. Google's data shows completed profiles are 70% more likely to receive visits." },
    { question: "Do you need access to the GBP account?", answer: "Yes. We need manager-level access to make optimizations, respond to reviews, and create posts. Owner access remains with the business." },
    { question: "What tools do you use for GBP optimization?", answer: "We use GMB Everywhere for profile audits, competitor analysis, and ongoing optimization. It provides insights into category usage, attribute gaps, and optimization opportunities that manual review would miss." },
    { question: "Can you help with new GBP verification?", answer: "Yes. We guide clients through verification—phone, text, email, video call, or postcard depending on what Google offers. Businesses with Search Console-verified domains can often get instant verification." },
    { question: "How do secondary categories affect rankings?", answer: "Secondary categories expand the range of searches your listing appears for. We research competitor categories and add up to 9 relevant ones to maximize keyword coverage and AI query matching." },
    { question: "What makes a good business description?", answer: "750 characters maximum, with the first 250 being most critical. We include relevant keywords naturally (no stuffing), address customer pain points, and explain how your services solve problems. This supports both rankings and E-E-A-T signals." },
    { question: "Does GBP optimization help with AI Overviews?", answer: "Yes. AI Overviews pull directly from GBP data including description, services, hours, and attributes. A complete, accurate profile with strong E-E-A-T signals improves AI citation accuracy." }
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
    { question: "What is a citation and why does it matter?", answer: "A citation is any online mention of your NAP (name, address, phone). NAP data accounts for 7% of all local ranking factors. 73% of users lose trust in a brand when its listing contains incorrect information, so consistency directly impacts both rankings and conversions." },
    { question: "How many citations do you build?", answer: "We start with 50+ core citations across major directories and data aggregators, then add industry-specific platforms. Businesses with complete, consistent listings see up to 25% more local search visibility compared to those with incomplete profiles." },
    { question: "What tools do you use for citation building?", answer: "We recommend Whitespark for citation building and tracking—it's the industry standard. We also use BrightLocal for audits and monitoring. Both tools help us identify gaps, track submissions, and monitor NAP consistency over time." },
    { question: "How long until citations are indexed?", answer: "Most citations appear in Google's index within 2-4 weeks. Data aggregator submissions (Neustar, Foursquare, Data Axle) propagate to hundreds of downstream sites over 4-8 weeks." },
    { question: "What happens if citations are inconsistent?", answer: "Inconsistent NAP details can lead to a 41% drop in search rankings. 80% of mobile users lose confidence when contact details do not match across platforms. We fix conflicts before building new citations." },
    { question: "Do you clean up existing incorrect citations?", answer: "Yes. Citation cleanup is the first priority. Nearly half of all businesses have missing or incorrect online information. We audit, identify conflicts, and correct inconsistencies before building. Building on a broken foundation wastes effort." },
    { question: "How often should citations be audited?", answer: "We recommend audits every 3-6 months. Some platforms allow public edits, meaning your details could be changed without your knowledge. Regular monitoring catches errors before they hurt rankings." },
    { question: "Why do citations matter for AI visibility?", answer: "AI Overviews cite trusted third-party sources like Yelp and industry directories. 68% of consumers verify business details across multiple sources before reaching out. Accurate, consistent listings increase AI citation eligibility." }
  ],
  "photo-optimization": [
    { question: "Do you take photos for GBP?", answer: "We optimize photos you provide. If professional photography is needed, we can recommend local photographers. Original photos only—we never use stock photos as they lack authenticity." },
    { question: "How many photos should a GBP have?", answer: "We recommend at least 10-15 high-quality photos covering interior, exterior, team, products, and services. More is better if quality is maintained. Your cover photo is most critical—it appears next to your listing in the Map Pack." },
    { question: "How do you geotag photos?", answer: "We use tools like GeoImgr and LeadSnap to embed location data in image metadata. For service-area businesses, we also recommend customers upload photos with their reviews—iPhones geotag by default, so a review photo from a customer's home signals service area reach." },
    { question: "Why do customer review photos matter for service areas?", answer: "When customers upload photos with reviews from their location (home, office), those images are geotagged to that address. For service-area businesses like HVAC or plumbers, this signals to Google that you actually served that area. It's authentic, user-generated proof of service radius." },
    { question: "How do you optimize photo filenames?", answer: "We rename files with descriptive keywords like 'hvac-repair-dallas-tx.jpg' instead of generic 'IMG_1234.jpg'. This helps Google understand the image content for search and accessibility." },
    { question: "Can users upload inappropriate photos?", answer: "Yes, anyone can add photos. We monitor weekly for policy violations and submit removal requests to Google. We ensure your photos dominate the listing so user uploads don't control your visual narrative." }
  ],
  "qa-management": [
    { question: "Can anyone ask questions on GBP?", answer: "Yes. Any Google user can ask questions, and any user can answer—even competitors. This is why proactive management and monitoring are essential to control the narrative." },
    { question: "How many questions should we seed?", answer: "We typically seed 10-15 questions covering common customer inquiries, objections, and keyword-rich topics. This pre-emptively answers what customers want to know before random users provide incorrect information." },
    { question: "What tools do you use for Q&A management?", answer: "We use GMB Everywhere for monitoring and management. It provides alerts for new questions, tracks community answers, and helps us respond quickly before incorrect information spreads." },
    { question: "Can questions be removed?", answer: "Questions violating Google policies can be reported for removal. Legitimate questions cannot be removed but can be answered authoritatively. We respond within 24 hours before incorrect community answers spread." }
  ],
  "post-scheduling": [
    { question: "How often should we post to GBP?", answer: "Weekly posting is our standard. GBP expert Darren Shaw notes that most businesses treat GBP like social media—but it's the one platform people visit with intent to buy. We focus on conversion-driving posts, not engagement metrics." },
    { question: "What tools do you use for post scheduling?", answer: "We use LeadSnap, Brand2Social, and Buffer depending on client needs and existing tech stack. These tools allow us to schedule posts in advance and maintain consistent weekly publishing." },
    { question: "What types of posts work best?", answer: "Offers with clear CTAs typically drive the most engagement and conversions. Updates and events also perform well when timely and relevant. Every post should answer: what can the customer buy, book, or do right now?" },
    { question: "How long do GBP posts stay visible?", answer: "Posts remain visible for 6 months, but they're most effective in the first 7 days. Regular weekly posting ensures fresh content signals activity to Google." },
    { question: "What CTA buttons are available?", answer: "Book, Order online, Buy, Learn more, Sign up, and Call now. We match button type to post purpose—'Order online' for restaurants, 'Book' for appointments, 'Call now' for service businesses." }
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
  "monthly-performance-reports": [
    { question: "When are monthly reports delivered?", answer: "By the 5th of each month for the previous month's data. Consistent timing you can count on." },
    { question: "Can we customize report format?", answer: "Yes. We adjust KPIs, sections, detail level, and format based on each client's needs and preferences." },
    { question: "Do you provide talking points for client calls?", answer: "Yes. Each report includes key points, wins to highlight, and suggested framing for challenges." }
  ],
  "rank-tracking-visibility": [
    { question: "How often do you check rankings?", answer: "Weekly standard. Daily tracking available for competitive situations or during active campaigns." },
    { question: "Do you track mobile and desktop separately?", answer: "Yes. Mobile and desktop rankings can differ significantly. We track both independently." },
    { question: "What about local pack vs organic rankings?", answer: "We track both. Local 3-pack positions are tracked separately from organic website rankings." }
  ],
  "call-tracking-lead-attribution": [
    { question: "Do callers see tracking numbers or real numbers?", answer: "They see tracking numbers that forward instantly to real numbers. Call quality is identical." },
    { question: "Can you use our local area codes?", answer: "Yes. We provision local numbers that match your market for caller trust." },
    { question: "Are calls recorded?", answer: "Recording is optional and disclosed per legal requirements. It's valuable for quality assurance and lead qualification." }
  ],
  "roi-revenue-analysis": [
    { question: "What if we can't track revenue directly?", answer: "We use lead values based on close rates and average transaction values. Directional ROI is still calculable." },
    { question: "How accurate is ROI calculation?", answer: "Accuracy depends on data quality. With good tracking and CRM integration, we can be very precise. Without, we use reasonable estimates." },
    { question: "Can you prove marketing is profitable?", answer: "In most cases, yes. Clear attribution, reasonable lead values, and consistent tracking let us demonstrate return." }
  ],
  "client-presentation-decks": [
    { question: "Can you present directly to our clients?", answer: "We operate white-label, so you present. But we can join calls for technical questions if introduced appropriately." },
    { question: "What format are presentations?", answer: "PowerPoint/Google Slides standard. PDF exports available. Screen-share optimized." },
    { question: "How far in advance do you need for presentation prep?", answer: "3-5 business days ideal. Rush turnaround possible for existing clients with established templates." }
  ],
  // Content Marketing Spokes FAQs
  "geographical-content": [
    { question: "How do you avoid doorway page penalties?", answer: "Each location page includes unique local content: landmarks, area-specific services, regulations, and genuine value. Never just city names swapped in templates." },
    { question: "How many service area pages can you create?", answer: "As many as needed. We prioritize by opportunity and competition, then build systematically." },
    { question: "Do geographic pages help with Google Business Profile rankings?", answer: "Yes. Service area pages reinforce GBP signals and support local 3-pack visibility for each market." },
    { question: "What's included in each service area page?", answer: "Unique content, local schema markup, internal linking, keyword targeting specific to that market, and clear conversion paths." },
    { question: "How long until geographic content ranks?", answer: "New pages typically show ranking movement within 2-4 months. Less competitive markets often rank faster." }
  ],
  "topical-content": [
    { question: "How does topical content differ from regular blog posts?", answer: "Topical content is strategically planned to build authority on core topics. It's organized in clusters, not random posts." },
    { question: "Do you write for both search engines and readers?", answer: "Always. Content must be useful to humans first. Search optimization enhances discoverability without sacrificing quality." },
    { question: "How do you measure topical authority?", answer: "Rankings across topic clusters, featured snippets earned, and organic traffic growth for related keywords." },
    { question: "Can topical content generate leads?", answer: "Yes, with proper conversion architecture. CTAs, internal links to service pages, and content upgrades turn readers into leads." },
    { question: "How often should topical content be published?", answer: "Consistency matters more than volume. We recommend a sustainable cadence that builds clusters over time." }
  ],
  "power-posts": [
    { question: "How long is a typical power post?", answer: "2,000 to 5,000+ words depending on the topic. The goal is comprehensive coverage, not word count targets." },
    { question: "How do power posts support other content?", answer: "They anchor hub-and-spoke clusters. Supporting content links to power posts, concentrating topical authority." },
    { question: "Do power posts earn backlinks?", answer: "Definitive resources attract natural links from writers citing sources. This is a primary purpose of power posts." },
    { question: "How long until a power post ranks?", answer: "Competitive keywords may take 6-12 months. Less competitive topics often rank within 2-4 months." },
    { question: "What's included in power post production?", answer: "Research, outline, writing, visuals, FAQ sections, schema markup, internal linking, and conversion touchpoints." }
  ],
  "ebooks-guides": [
    { question: "Do you handle e-book design?", answer: "Yes. We deliver professionally designed, branded PDFs ready for lead generation." },
    { question: "What topics make good e-books?", answer: "Topics that attract qualified leads—problems your client's services solve. Downloads should indicate purchase intent." },
    { question: "Can e-books be repurposed?", answer: "Absolutely. E-book chapters become blog posts, social content, email sequences, and more." },
    { question: "Do you write landing page copy?", answer: "Yes. Conversion-focused landing page copy is included in e-book production." },
    { question: "How do you integrate e-books with email marketing?", answer: "We can set up thank you pages, email delivery, and follow-up sequence integration with most platforms." }
  ],
  "lead-magnets": [
    { question: "What types of lead magnets work best?", answer: "It depends on the audience. Checklists and templates work for action-oriented prospects. Calculators engage analytical buyers." },
    { question: "How quickly can you create a lead magnet?", answer: "Simple checklists in 1-2 weeks. More complex tools or calculators take 3-4 weeks." },
    { question: "Do you build landing pages for lead magnets?", answer: "We provide landing page copy. Implementation depends on the client's platform." },
    { question: "Can you A/B test lead magnet offers?", answer: "Yes. We recommend testing headlines, offers, and formats to optimize conversion rates." },
    { question: "How do you measure lead magnet success?", answer: "Conversion rate, email quality (open/click rates), and downstream engagement toward sales." }
  ],
  "press-releases": [
    { question: "How often should press releases be issued?", answer: "Only when there's genuine news. Quality over quantity. 4-8 per year is typical for most businesses." },
    { question: "What distribution networks do you use?", answer: "We select networks based on goals: local coverage, industry verticals, or broad syndication." },
    { question: "Do press releases help with SEO?", answer: "They create citations and brand mentions. Links from news syndication support authority signals." },
    { question: "Can press releases appear in Google News?", answer: "Yes, when distributed through recognized wire services. Timing and news value affect visibility." },
    { question: "What makes a press release newsworthy?", answer: "Milestones, expansions, awards, community involvement, original research, or significant partnerships." }
  ],
  "case-studies": [
    { question: "How do you get clients to participate in case studies?", answer: "We help identify willing clients and make the process easy. A 30-minute interview is usually all that's needed." },
    { question: "What results make a good case study?", answer: "Quantifiable outcomes, compelling challenges overcome, and clients willing to be named publicly." },
    { question: "Can case studies be anonymous?", answer: "Yes, but named case studies are more credible. We work with clients to find the right balance." },
    { question: "What formats do you deliver?", answer: "Web page, PDF, and presentation slide formats. Optimized for each use case." },
    { question: "How long does case study production take?", answer: "2-3 weeks from interview to final approval. Complex stories may take longer." }
  ],
  "faq-content": [
    { question: "How do you find the right questions to answer?", answer: "Search data, customer service logs, sales objections, competitor analysis, and industry forums." },
    { question: "Does FAQ content help with voice search?", answer: "Yes. Question-answer format matches voice query patterns and earns featured snippets." },
    { question: "Where should FAQ content live on a site?", answer: "Service pages, dedicated FAQ pages, and embedded within relevant blog content." },
    { question: "How do you implement FAQ schema?", answer: "JSON-LD markup that enables rich FAQ results in search. Validated against Google's requirements." },
    { question: "How often should FAQs be updated?", answer: "Review quarterly. Add new questions as customer inquiries evolve and search behavior changes." }
  ],
  "hub-spoke-buildouts": [
    { question: "What's the difference between a hub and a spoke?", answer: "Hubs are comprehensive pillar pages. Spokes are supporting articles that link to the hub and cover subtopics." },
    { question: "How many spokes should each hub have?", answer: "5-15 is typical. Enough to cover the topic thoroughly without thin content." },
    { question: "Do you create both hubs and spokes?", answer: "Yes. We plan the cluster structure and create all content to ensure cohesive architecture." },
    { question: "How long does a full cluster buildout take?", answer: "2-4 months for a complete cluster with hub and 8-12 spokes. Phased delivery available." },
    { question: "Can you build clusters around existing content?", answer: "Yes. We audit existing content, identify gaps, and build out missing pieces to complete clusters." }
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
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "schema-markup": [
    {
      category: "Connected Entity Schema",
      headline: "Page-Level Knowledge Graphs",
      description: "We build connected schema using @graph structures with unique @id properties—creating explicit relationships between your business, founders, services, and locations that machines understand without interpretation.",
      subPoints: [
        { title: "LocalBusiness + Organization", description: "Core identity schema with legalName, taxID, founder, and contactPoint properties." },
        { title: "Person Schema", description: "Founder and team markup with worksFor, knowsAbout, and sameAs for E-E-A-T authority." },
        { title: "@id Connections", description: "Unique identifiers linking entities. Person → Organization → Service all connected." },
        { title: "sameAs Validation", description: "LinkedIn, Crunchbase, social profiles linked to validate entity with external sources." },
        { title: "knowsAbout Topics", description: "Wikipedia/Wikidata links for topic disambiguation. Expertise connected to entities." },
        { title: "Geo Coordinates", description: "hasMap linking to GBP. Precise location and service area polygons." }
      ],
      imageSrc: schemaBusinessImg,
      imageAlt: "Connected entity schema graph structure",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Service & Product Schema",
      headline: "Structured Data for Offerings",
      description: "Service schema connects offerings to your LocalBusiness entity. Enables rich results with pricing, availability, and ratings that AI systems can cite accurately.",
      subPoints: [
        { title: "Service Definitions", description: "Individual services with areaServed, offers, and aggregateRating properties." },
        { title: "hasOfferCatalog", description: "Full service catalogs structured. Offerings discoverable via schema and AI parsing." },
        { title: "Pricing & Offers", description: "priceRange, priceCurrency, and availability structured for rich results." },
        { title: "Aggregate Ratings", description: "reviewCount, ratingValue, bestRating for star displays in SERPs." },
        { title: "makesOffer Property", description: "Service-based businesses linking what they offer directly to entity." },
        { title: "mainEntity Connections", description: "Service pages declaring primary topic. Strengthens page-entity relationship." }
      ],
      imageSrc: schemaServiceImg,
      imageAlt: "Service and offer schema markup",
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Rich Result Schema",
      headline: "Enhanced Search Appearances",
      description: "Beyond identity, schema unlocks rich results for FAQ, reviews, articles, and more—expanding SERP real estate and feeding AI systems quotable structured answers.",
      subPoints: [
        { title: "FAQPage Schema", description: "Q&A pairs for FAQ rich results. Expands SERP footprint and feeds AI Overviews." },
        { title: "Review Schema", description: "Customer reviews with author, datePublished, reviewRating for star displays." },
        { title: "Article Schema", description: "Blog content with author Person schema linked. News and Discover eligibility." },
        { title: "BreadcrumbList", description: "Navigation hierarchy for breadcrumb displays. Improves CTR and site understanding." },
        { title: "HowTo Schema", description: "Step-by-step content with images, tools, totalTime for rich results." },
        { title: "WebPage + WebSite", description: "Homepage and key pages structured with isPartOf relationships to website entity." }
      ],
      imageSrc: schemaRichImg,
      imageAlt: "Content rich result schema types",
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    },
    {
      category: "Validation & Monitoring",
      headline: "Three-Step Schema Verification",
      description: "Schema markup is only valuable if it's error-free and connected properly. We use a rigorous validation workflow before deployment and ongoing monitoring after.",
      subPoints: [
        { title: "Schema.org Validator", description: "Syntax error detection. Missing commas and braces silently break markup." },
        { title: "Rich Results Test", description: "Google's tool confirms eligibility for specific rich result types." },
        { title: "Classy Schema Visualization", description: "Entity relationship mapping. Verifies connections render as knowledge graph." },
        { title: "Search Console Monitoring", description: "Enhancement reports track valid items, errors, and warnings over time." },
        { title: "ChatGPT Verification", description: "LLM summarization test. If AI can't parse your schema, neither can others." },
        { title: "Quarterly Audits", description: "Schema reviewed when business info changes. Syntax errors caught before impact." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    }
  ],

  "nap-citations": [
    {
      category: "Citation Audit",
      headline: "Find Every Inconsistency First",
      description: "Nearly half of all businesses have missing or incorrect online information. 73% of users lose trust when listings contain errors. We audit before building to ensure the foundation is solid.",
      subPoints: [
        { title: "Full Citation Scan", description: "BrightLocal, Moz Local, and manual research to find every mention of the business online." },
        { title: "NAP Inconsistencies", description: "Name variations, old addresses, wrong phone numbers identified. Even 'St.' vs 'Street' differences matter for consistency." },
        { title: "Duplicate Listings", description: "Multiple listings on the same platform dilute SEO authority. Duplicates identified for suppression or merge." },
        { title: "Unclaimed Profiles", description: "Unclaimed listings can be edited by competitors or random users. We identify and claim control of all profiles." },
        { title: "Competitor Comparison", description: "Citation counts and sources compared against local pack leaders to identify opportunities." },
        { title: "AI Source Audit", description: "Yelp, TripAdvisor, Healthgrades, and vertical directories checked for AI Overview eligibility." }
      ],
      imageSrc: citationBuildingImg,
      imageAlt: "Citation audit and management process",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Citation Correction",
      headline: "Fix What's Broken Before Building",
      description: "Inconsistent NAP details can lead to a 41% drop in search rankings. 80% of mobile users lose confidence when contact details don't match. We fix every incorrect listing before building new ones.",
      subPoints: [
        { title: "Priority Platforms", description: "Google Business Profile, Apple Maps, Bing Places, Yelp, and Facebook corrected first. These directly impact rankings." },
        { title: "Data Aggregator Updates", description: "Foursquare, Data Axle, Neustar updated to propagate corrections to hundreds of downstream sites." },
        { title: "Suppression Requests", description: "Duplicate listings suppressed or merged. One authoritative listing per platform. No confusion." },
        { title: "Standardized Format", description: "Uniform spelling, abbreviations, and layout applied. 'Street' vs 'St.' standardized across all platforms." },
        { title: "Phone Number Fixes", description: "Old numbers, tracking numbers, and variations corrected to primary. Consistency is non-negotiable." },
        { title: "Verification", description: "Corrections verified after propagation. Nothing assumed complete until confirmed in index." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Core Citation Building",
      headline: "Foundation Citations That Establish Trust",
      description: "NAP data accounts for 7% of all local ranking factors. Businesses with complete, consistent listings see up to 25% more local search visibility. We prioritize the directories that matter most.",
      subPoints: [
        { title: "Core 50+ Directories", description: "Google, Apple Maps, Bing, Yelp, Facebook, and the directories that directly impact local rankings." },
        { title: "Data Aggregators", description: "Submissions to Foursquare, Data Axle, and Neustar that feed hundreds of downstream sites automatically." },
        { title: "Photo Enhancement", description: "Profiles with at least one photo see up to 16% more leads. We add visuals to differentiate from text-only listings." },
        { title: "Category Matching", description: "Business categories aligned with GBP primary and secondary categories for signal consistency." },
        { title: "Description Optimization", description: "Unique descriptions with local keywords for major directories. No duplicate content across platforms." },
        { title: "E-E-A-T Foundation", description: "Consistent citations from reputable directories build the trust signals Google's algorithms prioritize." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    },
    {
      category: "Industry Citations",
      headline: "Vertical-Specific Authority",
      description: "Industry directories signal expertise and attract customers already searching for your services. HomeAdvisor, Angi, Healthgrades, and Zocdoc generate higher-quality leads than general directories.",
      subPoints: [
        { title: "Industry Research", description: "Comprehensive mapping of directories relevant to each client's vertical. Plumbers get Angi, doctors get Healthgrades." },
        { title: "Association Spotlights", description: "Chamber of commerce, trade associations, and industry bodies. Member spotlights create valuable citations." },
        { title: "Niche Platforms", description: "Vertical-specific review sites: Healthgrades for medical, Avvo for legal, Houzz for home services." },
        { title: "Credential Verification", description: "Licenses, certifications, and credentials added where platforms support them for authority signals." },
        { title: "Competitor Gap Analysis", description: "Directories where competitors appear but client does not. Citation parity closes ranking gaps." },
        { title: "Quarterly Maintenance", description: "Audits every 3-6 months catch new inconsistencies. Some platforms allow public edits without notification." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    }
  ],

  // =============================================
  // GBP SEO SPOKES
  // =============================================
  
  "gbp-optimization": [
    {
      category: "Profile Foundation",
      headline: "Complete GBP Profiles That Rank",
      description: "Google's data shows users are 70% more likely to visit businesses with completed profiles and 50% more likely to purchase. We optimize every element Google uses for local pack placement and AI Overview citations.",
      subPoints: [
        { title: "Primary Category", description: "The single most important ranking factor. Selected based on search volume and competitive analysis." },
        { title: "Secondary Categories", description: "Up to 9 additional categories that expand visibility for related services and AI query matching." },
        { title: "Business Description", description: "750 characters optimized for keywords without stuffing. First 250 characters most critical—addressing customer pain points and solutions." },
        { title: "Service & Product Catalogs", description: "Complete listings with descriptions, pricing, photos, and CTAs that match website content for E-E-A-T signal consistency." },
        { title: "Attributes", description: "Every applicable attribute checked—accessibility, payment methods, amenities. AI Overviews pull attribute data for recommendations." },
        { title: "Hours & Special Hours", description: "Accurate hours including holidays. Incorrect hours trigger negative reviews and AI inaccuracies." }
      ],
      imageSrc: gbpOptimizationImg,
      imageAlt: "Google Business Profile optimization dashboard",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Competitive Positioning",
      headline: "Outrank the Current Pack Leaders",
      description: "Entering the local pack requires understanding who's there and why. Google's E-E-A-T signals favor businesses that demonstrate Experience, Expertise, Authoritativeness, and Trust—which a complete profile reinforces.",
      subPoints: [
        { title: "Pack Analysis", description: "Current pack holders dissected. Categories, reviews, citations, and signals documented." },
        { title: "Gap Identification", description: "Missing attributes, services, and content that competitors have and you lack." },
        { title: "Signal Matching", description: "Reviews, citations, and website signals aligned to match or exceed pack leaders." },
        { title: "Proximity Strategy", description: "Service area optimization to expand reach beyond physical location." },
        { title: "Velocity Planning", description: "Review and citation acquisition paced to close gaps systematically." },
        { title: "E-E-A-T Alignment", description: "Profile optimization reinforcing expertise and trust signals Google's algorithms prioritize." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Ongoing Optimization",
      headline: "Profiles That Stay Optimized",
      description: "GBP optimization is not a one-time task. We maintain profiles against Google updates, competitive pressure, and AI search changes with weekly activity.",
      subPoints: [
        { title: "Weekly Posts", description: "Fresh content signals activity. Offers, updates, and events scheduled weekly—treating GBP as purchase intent, not social media." },
        { title: "Photo Updates", description: "New photos monthly. Original images only—no stock photos. Geotagged, descriptively named, and strategically captioned." },
        { title: "Q&A Management", description: "Questions seeded proactively. Community questions answered within 24 hours before incorrect info spreads." },
        { title: "Review Monitoring", description: "New reviews flagged immediately. Response drafts provided same day. 60% of reviewers expect response within 2 days." },
        { title: "Insights Analysis", description: "Monthly performance review. Search queries, interactions, directions, website clicks, and calls tracked." },
        { title: "AI Visibility Check", description: "AI Overview citations monitored. Profile data verified for accuracy in AI-generated local results." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "review-management": [
    {
      category: "Review Generation",
      headline: "Systematic Review Acquisition That Works",
      description: "51% of customers leave reviews when asked directly, but 30% skip reviews because the process is confusing. We eliminate friction and build systems that generate consistent reviews. Reviews are a direct ranking factor for local search.",
      subPoints: [
        { title: "Timing Strategy", description: "Requests sent at optimal moments: shortly after positive service experience, at peak satisfaction. Timing is everything." },
        { title: "Multi-Channel Requests", description: "54% prefer email, 45% prefer in-person, 29% prefer SMS. We deploy all channels based on customer preferences." },
        { title: "Direct Review Links", description: "Shortened links straight to the review form shared via email, SMS, or social. No navigation required. 30% skip reviews due to confusing process." },
        { title: "Personalized Templates", description: "Use customer name, reference specific service. Generic requests get ignored." },
        { title: "Detailed Experience Prompts", description: "Ask customers to describe their experience in detail rather than scripting keywords. Google bolds terms that match search queries naturally." },
        { title: "Email Automation Integration", description: "Pairs with Email Marketing automation flows for hands-off review generation at scale via post-service sequences." }
      ],
      imageSrc: reviewGenerationImg,
      imageAlt: "Review generation strategy mind map",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Request Psychology",
      headline: "Understanding Why Customers Review",
      description: "Effective review requests tap into customer motivations. 73% write reviews to share their experience, 63% to show appreciation, 38% to provide feedback, and 21% specifically want a response.",
      subPoints: [
        { title: "Community Motivation", description: "73% want to share experience with others. Frame requests around helping the community find great businesses." },
        { title: "Appreciation Channel", description: "63% use reviews to show gratitude. Mention how much a review would mean to your team." },
        { title: "Feedback Seekers", description: "38% want businesses to improve. Show in responses that you take feedback to heart and act on it." },
        { title: "Response Expectations", description: "21% write reviews to get a response. Prove you respond to every review to encourage more participation." },
        { title: "Staff Training", description: "Verbal requests work when rapport exists. Train staff to ask when customers seem satisfied with service." },
        { title: "Natural Keyword Inclusion", description: "Customers who mention specific services help rankings. Google surfaces terms mentioned often as clickable filters." }
      ],
      imageSrc: reviewPsychologyImg,
      imageAlt: "Customer review psychology and motivations",
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Response Management",
      headline: "Responses That Build Trust and Rankings",
      description: "64% of customers expect response to negative reviews, 40% expect response to positive reviews, and 60% expect to hear back within 2 days. Response quality directly impacts whether future customers leave reviews and choose your business.",
      subPoints: [
        { title: "Speed Matters", description: "Respond as quickly as possible. 60% expect response within 2 days. We respond within 24-48 hours to exceed expectations." },
        { title: "Stay Professional", description: "Negative reviews require calm, measured responses. Never get defensive or confrontational. 46% avoid businesses that argue with customers." },
        { title: "Acknowledge and Solve", description: "Address their specific concerns directly. 54% avoid businesses where responses don't solve cited problems." },
        { title: "Offer Direct Contact", description: "For negative reviews, invite customers to contact you directly to discuss the issue. This moves resolution offline and shows commitment." },
        { title: "Brand Voice Consistency", description: "Responses match client personality and are consistent with all online content. Professional, warm, or casual as appropriate." },
        { title: "Learn From Feedback", description: "Genuine negative reviews highlight areas for improvement. We help businesses extract actionable insights from criticism." }
      ],
      imageSrc: reviewResponseImg,
      imageAlt: "Review response management workflow",
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    },
    {
      category: "Platform Diversification",
      headline: "Reviews Across All Platforms That Matter",
      description: "66% of reviewers focus on Google, but 42% prefer Facebook, 36% focus on Yelp, and 16% use NextDoor. Platform diversity protects reputation and ensures AI systems find consistent information across sources.",
      subPoints: [
        { title: "Google Priority", description: "Primary platform for local pack visibility and star ratings displayed prominently in search results." },
        { title: "Facebook Reviews", description: "42% of reviewers spend most time here. Important for social proof, referral traffic, and AI source data." },
        { title: "Yelp Strategy", description: "36% focus on Yelp. Note: Yelp prohibits directly asking for reviews. Build presence through profile completeness and engagement." },
        { title: "Industry Verticals", description: "TripAdvisor, OpenTable, Healthgrades, Avvo. AI Overviews cite industry-specific platforms for recommendations." },
        { title: "First-Party Reviews", description: "Feature honest reviews on your own website. Diversification protects against platform filtering algorithms." },
        { title: "NextDoor Presence", description: "16% of reviewers focus here. Hyperlocal platform ideal for neighborhood service businesses." }
      ],
      imageSrc: reviewPlatformsImg,
      imageAlt: "Multi-platform review diversification strategy",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Reputation Monitoring",
      headline: "Never Miss a Review",
      description: "AI Overviews cite Yelp, TripAdvisor, and industry directories. We monitor everywhere that matters for rankings and AI visibility with instant alerts and centralized response management.",
      subPoints: [
        { title: "Instant Alerts", description: "New reviews trigger immediate notifications. Response workflows activated same day across all platforms." },
        { title: "Centralized Dashboard", description: "All reviews from Google, Facebook, Yelp, and industry sites in one place. No platform left unchecked." },
        { title: "Sentiment Tracking", description: "Overall sentiment trends tracked monthly. Early warning for service issues before they compound into reputation problems." },
        { title: "Fake Review Detection", description: "Suspicious reviews identified and reported for removal when policy violations exist. We document violations for successful appeals." },
        { title: "Recency Tracking", description: "39% of customers filter for recent reviews. We track velocity to ensure fresh review flow matches or exceeds competitors." },
        { title: "Monthly Reporting", description: "Review metrics, sentiment trends, platform performance, competitor comparison, and AI visibility in client reports." }
      ],
      imageSrc: reviewMonitoringImg,
      imageAlt: "Review monitoring and alerts dashboard",
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    }
  ],

  "citation-building": [
    {
      category: "Core Citations",
      headline: "Foundation Citations That Establish Trust",
      description: "NAP data accounts for 7% of all local ranking factors. Businesses with complete, consistent listings see up to 25% more local search visibility. We prioritize the directories that matter most for rankings and customer trust.",
      subPoints: [
        { title: "Data Aggregators", description: "Submissions to Neustar, Foursquare, and Data Axle that feed hundreds of downstream sites automatically." },
        { title: "Core Directories", description: "Google Business Profile, Apple Maps, Bing Places, Yelp, and Facebook. These directly influence local search and Map Pack results." },
        { title: "NAP Consistency", description: "Name, address, phone formatted identically everywhere. Even minor variations like 'St.' vs 'Street' can hurt credibility and rankings." },
        { title: "Category Matching", description: "Business categories aligned with GBP primary and secondary categories for signal consistency across platforms." },
        { title: "Photo Enhancement", description: "Profiles with at least one photo see up to 16% more leads. We add visuals to differentiate from text-only listings." },
        { title: "E-E-A-T Foundation", description: "Consistent citations from reputable directories build the trust signals Google's algorithms prioritize." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Industry Citations",
      headline: "Vertical-Specific Authority",
      description: "Industry directories signal expertise and attract customers already searching for your services. HomeAdvisor, Angi, Healthgrades, and Zocdoc generate higher-quality leads than general directories.",
      subPoints: [
        { title: "Industry Research", description: "Comprehensive mapping of directories relevant to each client's vertical. Plumbers, electricians, and contractors get different platforms than healthcare or legal." },
        { title: "Association Spotlights", description: "Chamber of commerce, trade associations, and industry bodies. Member spotlights create valuable citations with authority signals." },
        { title: "Niche Platforms", description: "Vertical-specific review sites where competitors have presence. Healthgrades for medical, Avvo for legal, Houzz for home services." },
        { title: "Credential Verification", description: "Licenses, certifications, and credentials added where platforms support them. Authority signals that differentiate from unlicensed competitors." },
        { title: "Local Organizations", description: "State associations, downtown business groups, and community organizations. Featured member programs create citation opportunities." },
        { title: "Competitor Gap Analysis", description: "Directories where competitors appear but client does not. Citation parity closes ranking gaps systematically." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "#contact"
    },
    {
      category: "Citation Audit",
      headline: "Find Every Inconsistency First",
      description: "Nearly half of all businesses have missing or incorrect online information. 73% of users lose trust when listings contain errors. We audit before building to ensure the foundation is solid.",
      subPoints: [
        { title: "Full Citation Scan", description: "BrightLocal, Moz Local, and manual research to find every mention of the business online." },
        { title: "NAP Inconsistencies", description: "Name variations, old addresses, wrong phone numbers identified. Even small differences like 'LLC' vs no 'LLC' matter." },
        { title: "Duplicate Listings", description: "Multiple listings on the same platform dilute SEO authority. Duplicates identified for suppression or merge." },
        { title: "Unclaimed Profiles", description: "Unclaimed listings can be edited by competitors or random users. We claim and secure control of all profiles." },
        { title: "Public Edit Monitoring", description: "Some platforms allow user-suggested changes. We check for unauthorized edits that could harm accuracy." },
        { title: "Competitor Comparison", description: "Citation counts and sources compared against local pack leaders to identify opportunities." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    },
    {
      category: "Citation Cleanup",
      headline: "Fix What's Broken Before Building",
      description: "Inconsistent NAP details can lead to a 41% drop in search rankings. 80% of mobile users lose confidence when contact details don't match. We fix every incorrect listing before building new ones.",
      subPoints: [
        { title: "Conflict Resolution", description: "Conflicting NAP details corrected to master format. Google cannot rank what it cannot trust." },
        { title: "Suppression Requests", description: "Duplicate listings suppressed or merged. One authoritative listing per platform. No confusion." },
        { title: "Old Address Cleanup", description: "Previous locations updated or removed. Stale addresses confuse customers and search engines." },
        { title: "Phone Number Fixes", description: "Old numbers, tracking numbers, and variations corrected to primary. Consistency is non-negotiable." },
        { title: "Standardized Format", description: "Uniform spelling, abbreviations, and layout applied. 'Street' vs 'St.' standardized across all platforms." },
        { title: "Quarterly Maintenance", description: "Audits every 3-6 months catch new inconsistencies before they compound into ranking problems." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    }
  ],

  "photo-optimization": [
    {
      category: "Photo Strategy",
      headline: "Visual Content That Converts",
      description: "GBP photos directly impact engagement and conversions. Your cover photo is the first thing customers see in the Map Pack—it must draw users in and accurately represent your business.",
      subPoints: [
        { title: "Photo Audit", description: "Current photos reviewed for quality, relevance, and competitive benchmarking against pack leaders." },
        { title: "Category Coverage", description: "Interior, exterior, team, products, and services. All categories filled with 10-15+ high-quality images minimum." },
        { title: "Cover Photo", description: "Hero image optimized for maximum impact. Most likely to appear next to your listing in the Map Pack—first impression matters." },
        { title: "Logo Quality", description: "Logo uploaded at proper resolution. No pixelation, cropping issues, or outdated branding." },
        { title: "Authenticity First", description: "Original photos only—never stock photos. Stock images lack originality and often don't represent your business accurately." },
        { title: "Photo Calendar", description: "Monthly photo additions scheduled. Fresh content signals activity and keeps profile current." }
      ],
      imageSrc: photoOptimizationImg,
      imageAlt: "Photo optimization and visual content strategy",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Technical Optimization",
      headline: "Photos Optimized for Search",
      description: "Photo optimization goes beyond quality. We ensure every image works for both users and search engines through proper naming, metadata, and geotagging using tools like GeoImgr and LeadSnap.",
      subPoints: [
        { title: "Geotagging Tools", description: "We use GeoImgr and LeadSnap to embed precise location data in image EXIF metadata. Geographic signals reinforce local relevance." },
        { title: "Descriptive Filenames", description: "Optimized filenames with keywords—'hvac-repair-dallas-tx.jpg' not 'IMG_1234.jpg'. Location and service keywords included." },
        { title: "Alt Text & Captions", description: "Google extracts descriptions. Keywords and context included naturally for accessibility and search visibility." },
        { title: "Size Optimization", description: "Images compressed for fast loading without quality loss. Adheres to Google's format requirements." },
        { title: "Format Selection", description: "Proper formats for different photo types. JPG for photos, PNG for logos. Quality preserved." },
        { title: "Aspect Ratios", description: "Photos cropped to display correctly in GBP interface without awkward cuts or distortion." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Service-Area Photo Strategy",
      headline: "Customer Photos Prove Service Radius",
      description: "For service-area businesses, customer-uploaded review photos are geotagging gold. When a customer posts a photo from their home with their review, that image is tagged to their location—authentic proof you serve that area.",
      subPoints: [
        { title: "Review Photo Requests", description: "We encourage customers to upload photos with their reviews. iPhones and most smartphones geotag images by default—free geographic signals." },
        { title: "Service Area Proof", description: "A customer's photo from their home signals to Google that your HVAC, plumbing, or landscaping company actually served that location." },
        { title: "Authentic Signals", description: "User-generated geotagged photos are more credible than business-uploaded images. They're real proof of service delivery." },
        { title: "Geographic Expansion", description: "As customers in new areas leave photo reviews, your service footprint expands organically in Google's eyes." },
        { title: "Review Training", description: "We provide scripts for asking customers to include photos. Simple requests dramatically increase photo submission rates." },
        { title: "Competitor Advantage", description: "Most service businesses don't leverage customer photo geotagging. This is an underutilized ranking signal." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    },
    {
      category: "User Photo Management",
      headline: "Control Your Visual Narrative",
      description: "Google lets customers add images to your GBP. We monitor user-generated content to protect brand image while amplifying positive customer photos that help rankings.",
      subPoints: [
        { title: "UGC Monitoring", description: "User-uploaded photos reviewed weekly. Inappropriate, inaccurate, or off-brand content flagged immediately." },
        { title: "Removal Requests", description: "Policy-violating photos reported for removal via Google's process. Brand reputation protected." },
        { title: "Positive Amplification", description: "Great customer photos highlighted through owner responses. Geotagged customer photos especially valuable." },
        { title: "Photo Dominance", description: "Your photos should dominate your listing. We ensure owner content outweighs random user uploads." },
        { title: "Competitor Awareness", description: "Competitor photos or spam on your listing identified and addressed through proper channels." },
        { title: "Trend Analysis", description: "What customers photograph reveals what they value. Insights extracted for marketing and service improvement." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      imageSrc: qaManagementImg,
      imageAlt: "Q&A management and customer engagement",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "post-scheduling": [
    {
      category: "Content Strategy",
      headline: "Posts That Drive Conversions, Not Just Engagement",
      description: "As GBP expert Darren Shaw notes: 'GBP is the one platform people visit with intent to BUY.' We treat posts as conversion opportunities, not social media content.",
      subPoints: [
        { title: "Post Types", description: "Updates, offers, events, and products. Offers with clear CTAs typically drive the most engagement and conversions." },
        { title: "Content Calendar", description: "Monthly calendar planned in advance. Weekly posting is our standard—more frequent shows diminishing returns." },
        { title: "Seasonal Alignment", description: "Content aligned with holidays, seasons, and business cycles. Timely and relevant beats evergreen for engagement." },
        { title: "Promotion Strategy", description: "Offers and specials with urgency and clear calls to action. Posts remain visible for 6 months but are most effective in the first 7 days." },
        { title: "Event Promotion", description: "Upcoming events and sales highlighted with dedicated posts. Event posts get special treatment in GBP display." },
        { title: "Purchase Intent Focus", description: "Every post answers: what can the customer buy, book, or do right now? Social-style posts get ignored." }
      ],
      imageSrc: postSchedulingImg,
      imageAlt: "Social media and GBP post scheduling",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Post Optimization",
      headline: "Maximum Impact Per Post",
      description: "Every post is an opportunity to appear in search results and drive action. We optimize every element for clicks and conversions.",
      subPoints: [
        { title: "Keyword Integration", description: "Target keywords included naturally in post content. First 100 characters most visible in previews." },
        { title: "Compelling CTAs", description: "Clear calls to action with appropriate buttons: Book, Order online, Buy, Learn more, Sign up, or Call now." },
        { title: "Image Selection", description: "Eye-catching original images—never stock photos. Images that stop scrollers and reinforce the message." },
        { title: "Character Optimization", description: "Content optimized for display. Front-load value proposition in first 100 characters." },
        { title: "Link Strategy", description: "Destination URLs tracked for attribution. Landing pages matched to offers for conversion optimization." },
        { title: "Button Matching", description: "CTA button type matched to post purpose. 'Order online' for restaurants, 'Book' for appointments, 'Call now' for services." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Performance Tracking",
      headline: "Measure What Drives Business",
      description: "Post performance reveals what your audience cares about. We track interactions, search queries, directions, website clicks, and calls—the metrics that matter.",
      subPoints: [
        { title: "Interaction Tracking", description: "Calls, bookings, direction requests, and website clicks tracked. Total interactions measured over time." },
        { title: "Search Query Analysis", description: "Which search terms trigger your profile? We identify keywords driving visibility and optimize accordingly." },
        { title: "Click Analysis", description: "CTA clicks measured by post type. Which content drives action? Data drives strategy evolution." },
        { title: "Direction Requests", description: "Users requesting directions signal high purchase intent. We track this as a key conversion indicator." },
        { title: "Year-Over-Year Comparison", description: "Performance compared across time periods to eliminate seasonality and identify real trends." },
        { title: "Monthly Reporting", description: "Complete GBP performance dashboard. Search queries, interactions, and post engagement in client reports." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      imageSrc: googleAdsImg,
      imageAlt: "Google Ads campaign management dashboard",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      imageSrc: metaAdsImg,
      imageAlt: "Meta ads audience targeting strategy",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      imageSrc: localServiceAdsImg,
      imageAlt: "Local Service Ads profile setup",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      imageSrc: retargetingImg,
      imageAlt: "Retargeting campaign audience segmentation",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      imageSrc: emailMarketingImg,
      imageAlt: "Email marketing campaign strategy",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      imageSrc: linkBuildingImg,
      imageAlt: "Local link building and outreach",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
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
      imageSrc: realTimeDashboardMeetingImg,
      imageAlt: "Team meeting with dashboard presentation showing real-time analytics data",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      imageSrc: dataIntegrationTabletImg,
      imageAlt: "Tablet showing unified reporting dashboard with data integration",
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      imageSrc: whiteLabelDashboardsImg,
      imageAlt: "White-label dashboard and reporting interface",
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "monthly-performance-reports": [
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
      imageSrc: reportHistoryTabletImg,
      imageAlt: "Tablet displaying report history dashboard with monthly rankings and work delivery reports",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      imageSrc: reportsCustomizationImg,
      imageAlt: "Laptop showing report customization dashboard with branding and configuration options",
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      imageSrc: reportingPresentationImg,
      imageAlt: "Video call screen share showing monthly performance report with presenter and viewer",
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "rank-tracking-visibility": [
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
      imageSrc: rankTrackingLaptopImg,
      imageAlt: "Laptop showing keyword ranking report with position tracking data",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      imageSrc: rankAnalysisDashboardImg,
      imageAlt: "iMac displaying Google Business Profile dashboard with keyword rankings in modern office",
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      imageSrc: rankingsInContextImg,
      imageAlt: "Team meeting reviewing ranking analytics dashboard on large display",
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "call-tracking-lead-attribution": [
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
      imageSrc: callTrackingImplementationImg,
      imageAlt: "Call tracking implementation dashboard showing call volume by source, recent calls list, and tracking setup status",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      imageSrc: callAnalyticsQualityValueImg,
      imageAlt: "Call analytics infographic showing call duration, first-time callers, call outcomes, missed calls, call timing, and quality scoring",
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      imageSrc: callTrackingAttributionLoopImg,
      imageAlt: "Call tracking attribution loop infographic showing source attribution, cost per call, revenue attribution, channel comparison, multi-touch, and ROI reporting",
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "roi-revenue-analysis": [
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
      imageSrc: attributionFrameworkDashboardImg,
      imageAlt: "Marketing attribution framework dashboard showing conversion tracking funnel, lead values, customer lifetime value, and multi-touch attribution",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      imageSrc: roiCalculationDashboardImg,
      imageAlt: "ROI calculation dashboard showing channel ROI, campaign performance comparison, blended ROI gauges, and industry benchmarks",
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      imageSrc: budgetOptimizationDashboardImg,
      imageAlt: "Strategic budget optimization dashboard showing channel efficiency, growth modeling, spend optimization suggestions, and executive summary",
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "client-presentation-decks": [
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
      imageSrc: presentationSlidesDesignImg,
      imageAlt: "Marketing agency presentation slides on conference room screen showing data visualizations, charts, and branded design",
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
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
      imageSrc: presentationRoiStoriesImg,
      imageAlt: "Executive summary presentation on laptop showing ROI results, win highlights, strategy roadmap, and investment justification",
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
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
      imageSrc: clientConversationsImg,
      imageAlt: "Agency presenting performance reports to client via video call with dashboard screen share",
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "unstructured-citations": [
    {
      category: "What Are Unstructured Citations",
      headline: "Authority Signals Beyond Business Directories",
      description: "Unstructured citations are brand mentions embedded in media-rich content rather than structured NAP listings. They appear in videos, podcasts, infographics, press releases, and Web 2.0 platforms—signals that search engines and AI systems increasingly value for entity authority.",
      subPoints: [
        { title: "Definition", description: "Any mention of a business name, brand, or URL that isn't in a traditional directory format. These validate entity existence to search engines." },
        { title: "Why They Matter", description: "Google and AI systems triangulate entity data from diverse sources. Unstructured citations from varied media formats strengthen entity graphs." },
        { title: "Difference from NAP Citations", description: "NAP citations are structured listings (name, address, phone). Unstructured citations are organic mentions in content, media, and discussions." },
        { title: "Authority Signal", description: "When brands appear across multiple content formats, it signals real-world relevance beyond paid directory listings." },
        { title: "AI Visibility", description: "Large language models and AI Overviews increasingly cite video transcripts, podcast mentions, and social discussions as authority signals." },
        { title: "Compound Effect", description: "Each unstructured citation creates a new pathway for discovery—both by users and by AI crawlers indexing diverse content." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Video Citations",
      headline: "Brand Mentions in Video Content",
      description: "Video citations include mentions of a business in YouTube videos, Vimeo content, TikTok, and other video platforms. Transcriptions are indexed by search engines, making video mentions powerful authority signals.",
      subPoints: [
        { title: "YouTube Mentions", description: "Brand mentions in YouTube descriptions, titles, and spoken content (transcribed) create indexable citations." },
        { title: "Video Testimonials", description: "Customer testimonials mentioning the business create authentic third-party validation signals." },
        { title: "Tutorial Content", description: "How-to videos mentioning tools, services, or businesses drive both citations and referral traffic." },
        { title: "Interview Features", description: "Being featured in industry interviews or podcasts with video components creates high-authority citations." },
        { title: "Transcript Indexing", description: "Google transcribes and indexes spoken mentions. Video content = text content for SEO purposes." },
        { title: "Multi-Platform", description: "Citations distributed across YouTube, Vimeo, TikTok, and embedded video create diverse signal sources." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Audio Citations",
      headline: "Podcast and Audio Mentions",
      description: "Audio citations come from podcast appearances, radio mentions, and audio content platforms. As podcast indexing improves, these mentions become increasingly valuable for entity authority.",
      subPoints: [
        { title: "Podcast Features", description: "Guest appearances on industry podcasts generate high-quality citations with contextual relevance." },
        { title: "Show Notes", description: "Podcast show notes typically include backlinks and brand mentions that get indexed." },
        { title: "Audio Transcription", description: "Platforms like Spotify and Apple now index podcast transcripts, making spoken mentions crawlable." },
        { title: "Interview Syndication", description: "A single podcast interview often gets published to multiple platforms and directories." },
        { title: "Niche Authority", description: "Industry-specific podcasts attract targeted audiences and create topical authority signals." },
        { title: "Long-Form Context", description: "Extended audio content provides rich context around brand mentions, strengthening relevance signals." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    },
    {
      category: "Image Citations",
      headline: "Visual Content and Infographic Mentions",
      description: "Image citations occur when brands are mentioned in infographics, visual guides, and image-based content that gets shared and embedded across the web. Alt text and surrounding context create indexable mentions.",
      subPoints: [
        { title: "Infographic Distribution", description: "Branded infographics shared across sites generate citations in alt text, captions, and attribution." },
        { title: "Visual Guides", description: "How-to images and process diagrams with brand attribution create citation opportunities." },
        { title: "Image Search Visibility", description: "Properly attributed images appear in Google Image search, creating additional discovery pathways." },
        { title: "Pinterest & Visual Platforms", description: "Pin descriptions and image metadata on visual platforms create indexable brand mentions." },
        { title: "Embeddable Assets", description: "Creating shareable visual assets encourages organic embedding and citation across third-party sites." },
        { title: "Schema Attribution", description: "ImageObject schema with creator and contributor markup strengthens citation signals." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Web 2.0 Citations",
      headline: "Social and Community Platform Mentions",
      description: "Web 2.0 citations include brand mentions on social platforms, forums, and user-generated content sites. These signals are increasingly important for AI systems that scrape discussion platforms for entity validation.",
      subPoints: [
        { title: "Reddit Mentions", description: "Brand mentions in relevant subreddits create organic citations that AI systems heavily weight." },
        { title: "Quora Answers", description: "Thoughtful responses mentioning brands create high-context citations indexed by search engines." },
        { title: "Facebook Groups", description: "Active participation in industry groups generates mentions within engaged communities." },
        { title: "Medium & Blogs", description: "Articles on Medium, Blogger, and WordPress.com create citations with full content context." },
        { title: "Forum Participation", description: "Industry-specific forums and communities offer niche citation opportunities." },
        { title: "AI Training Data", description: "Web 2.0 content feeds LLM training sets. Mentions on these platforms influence AI recommendation systems." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Press Release Citations",
      headline: "Syndicated News Distribution",
      description: "Press release citations leverage news syndication networks to distribute brand mentions across hundreds of news sites and media outlets. When done strategically, they create a burst of diverse citations.",
      subPoints: [
        { title: "Wire Distribution", description: "Press releases distributed via newswires appear on hundreds of news sites simultaneously." },
        { title: "News Site Pickup", description: "Legitimate news angles can generate organic pickup by journalists and publications." },
        { title: "Google News Visibility", description: "Syndicated releases often appear in Google News, creating high-visibility citations." },
        { title: "Anchor Diversity", description: "Press releases allow strategic anchor text placement within natural editorial context." },
        { title: "Entity Validation", description: "News mentions signal to search engines that a business is newsworthy and relevant." },
        { title: "AI Overview Sourcing", description: "Google and AI systems treat news mentions as trust signals for entity information." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  // Content Marketing Spokes
  "geographical-content": [
    {
      category: "Why Geographic Content Matters",
      headline: "Local Search Demands Local Content",
      description: "Service area pages capture the searches that matter most to local businesses. Beyond organic rankings, geographic content directly supports Google Business Profile visibility in the local 3-pack.",
      subPoints: [
        { title: "Near Me Intent", description: "'Near me' searches have grown 500% in recent years. Geographic content captures this intent." },
        { title: "GBP Ranking Support", description: "Location-specific pages send relevance signals that strengthen GBP rankings in the local 3-pack." },
        { title: "Market Expansion", description: "Each service area page opens a new geographic market to organic traffic and map results." },
        { title: "Competitor Displacement", description: "Many competitors lack geographic depth. Service area pages create immediate advantages." },
        { title: "Conversion Relevance", description: "Local content converts better. Visitors see you serve their specific area." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Avoiding Doorway Page Penalties",
      headline: "Unique Value Per Location—Not City Name Swaps",
      description: "Google penalizes 'doorway pages' that offer no unique value per location. We create genuinely useful content for each market with local landmarks, regulations, service specifics, and community context.",
      subPoints: [
        { title: "Local Landmarks", description: "Reference neighborhoods, landmarks, and local context that prove market familiarity." },
        { title: "Area-Specific Services", description: "Highlight service variations, regulations, or considerations unique to each area." },
        { title: "Unique Value Proposition", description: "Each page explains why you're the right choice for that specific market." },
        { title: "Local Schema", description: "LocalBusiness schema with accurate NAP data for each service area." },
        { title: "Internal Linking", description: "Strategic linking between geographic pages builds topical authority." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Geographic Content Strategy",
      headline: "Systematic Market Coverage",
      description: "We map your service areas, prioritize by opportunity and competition, and build content systematically. The result is comprehensive geographic coverage that compounds over time.",
      subPoints: [
        { title: "Service Area Mapping", description: "Define primary, secondary, and expansion markets based on business priorities." },
        { title: "Keyword Research Per Location", description: "Each market gets unique keyword research—search behavior varies by city." },
        { title: "Competitive Gap Analysis", description: "Identify which markets lack competitor content for quick wins." },
        { title: "Prioritized Rollout", description: "High-opportunity markets first, then systematic expansion." },
        { title: "Performance Tracking", description: "Monitor rankings and traffic per location to inform ongoing strategy." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "topical-content": [
    {
      category: "Building Topical Authority",
      headline: "Expertise That Search Engines Trust",
      description: "Topical content builds authority that Google rewards. Deep expertise on industry topics strengthens both organic rankings and Google Business Profile visibility through relevance signals.",
      subPoints: [
        { title: "E-E-A-T Signals", description: "Experience, Expertise, Authority, Trust—topical depth demonstrates all four." },
        { title: "GBP Relevance", description: "Topical authority on your website reinforces what your GBP signals to Google about your expertise." },
        { title: "Long-Tail Capture", description: "Deep coverage captures hundreds of long-tail queries automatically." },
        { title: "AI Visibility", description: "Comprehensive coverage makes content more likely to be cited by AI systems." },
        { title: "Competitive Moat", description: "Topical authority compounds over time and is difficult for competitors to replicate." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Content Types",
      headline: "The Building Blocks of Topical Authority",
      description: "Different content types serve different purposes within a topical cluster. We create the mix that builds authority while serving user needs at every stage of the customer journey.",
      subPoints: [
        { title: "How-To Guides", description: "Step-by-step content that demonstrates expertise and captures informational queries." },
        { title: "Educational Articles", description: "In-depth explanations of concepts, processes, and industry knowledge." },
        { title: "Comparison Content", description: "Side-by-side evaluations that capture high-intent research queries." },
        { title: "Problem/Solution Content", description: "Address customer pain points with actionable solutions." },
        { title: "Industry Updates", description: "Timely content on trends, regulations, and news builds ongoing relevance." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "From Traffic to Leads",
      headline: "Topical Content With Conversion Architecture",
      description: "Informational content attracts visitors, but without conversion architecture, it's just traffic. We build topical content with strategic CTAs, internal links, and paths to lead capture.",
      subPoints: [
        { title: "Strategic CTAs", description: "Contextual calls-to-action that match user intent at each content type." },
        { title: "Internal Linking", description: "Guide visitors from informational content toward service pages." },
        { title: "Content Upgrades", description: "Offer related downloadables to capture email addresses." },
        { title: "Service Integration", description: "Naturally connect expertise content to service offerings." },
        { title: "Conversion Tracking", description: "Measure which topics drive leads, not just traffic." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "power-posts": [
    {
      category: "What Is a Power Post",
      headline: "Definitive Resources That Dominate Search",
      description: "Power posts are comprehensive pillar content—2,000 to 5,000+ words that definitively cover a topic. They become the hub of topic clusters, earn natural backlinks, and rank for competitive keywords.",
      subPoints: [
        { title: "Comprehensive Coverage", description: "Cover every angle of a topic so users never need to look elsewhere." },
        { title: "Hub-and-Spoke Center", description: "Power posts anchor topic clusters with supporting content linking in." },
        { title: "Link Magnet", description: "Definitive resources earn natural backlinks from writers citing sources." },
        { title: "Evergreen Value", description: "Well-maintained power posts drive traffic for years." },
        { title: "Competitive Keywords", description: "The depth required to rank for competitive terms." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Power Post Anatomy",
      headline: "Structure That Ranks and Converts",
      description: "Great power posts aren't just long—they're strategically structured for both search engines and readers. Clear sections, visual elements, and conversion touchpoints throughout.",
      subPoints: [
        { title: "Strategic Headings", description: "H2/H3 structure that captures featured snippets and aids navigation." },
        { title: "Visual Elements", description: "Charts, diagrams, and images that break up text and add value." },
        { title: "Table of Contents", description: "Jump links that improve UX and generate sitelinks in search." },
        { title: "FAQ Sections", description: "Structured Q&A that captures question-based queries." },
        { title: "Conversion Points", description: "CTAs placed throughout—not just at the end." },
        { title: "Schema Markup", description: "FAQ, HowTo, and Article schema for rich result eligibility." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "The Conversion Problem",
      headline: "Power Posts Without CTAs Are Just Content",
      description: "A power post that ranks but doesn't convert is a missed opportunity. We build conversion architecture into every power post—phone numbers, forms, and clear next steps.",
      subPoints: [
        { title: "Above-the-Fold CTA", description: "Contact options visible before scrolling begins." },
        { title: "In-Content CTAs", description: "Contextual conversion opportunities at natural decision points." },
        { title: "Sticky Elements", description: "Phone numbers or forms that stay visible while scrolling." },
        { title: "Related Services", description: "Clear connections to service pages and offerings." },
        { title: "Lead Magnets", description: "Downloadable content offers to capture email addresses." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "ebooks-guides": [
    {
      category: "Lead Generation Assets",
      headline: "E-books That Build Lists and Demonstrate Expertise",
      description: "E-books and guides are premium content assets that capture email addresses while demonstrating deep expertise. They're the cornerstone of content-driven lead generation.",
      subPoints: [
        { title: "Email Capture", description: "Gated content that converts visitors into subscribers." },
        { title: "Expertise Demonstration", description: "Long-form content that proves authority and builds trust." },
        { title: "Sales Enablement", description: "Resources that support sales conversations and objection handling." },
        { title: "Nurture Fuel", description: "Content that feeds email sequences and automation." },
        { title: "Repurposable Assets", description: "E-books can be broken into blog posts, social content, and more." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "E-book Production",
      headline: "From Concept to Designed Asset",
      description: "We handle the complete e-book production process: topic selection, outline, writing, design, and delivery. You get a polished asset ready for lead generation.",
      subPoints: [
        { title: "Topic Strategy", description: "Identify topics that attract qualified leads, not just downloads." },
        { title: "Outline Development", description: "Structure that delivers value and guides readers through the content." },
        { title: "Professional Writing", description: "Expert content that reflects your client's authority." },
        { title: "Design & Formatting", description: "Branded, professional layout that elevates perceived value." },
        { title: "Landing Page Copy", description: "Conversion-focused page copy that sells the download." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Lead Magnet Funnel",
      headline: "From Download to Customer",
      description: "An e-book without a funnel is a missed opportunity. We help integrate e-books into lead nurture sequences that move subscribers toward becoming customers.",
      subPoints: [
        { title: "Thank You Page Optimization", description: "Immediate next steps after download—don't waste the momentum." },
        { title: "Email Sequence Integration", description: "Follow-up emails that continue the conversation." },
        { title: "Segmentation", description: "Tag subscribers by topic interest for targeted follow-up." },
        { title: "Sales Handoff", description: "Clear triggers for when to move leads to sales conversations." },
        { title: "Performance Tracking", description: "Measure downloads, email engagement, and downstream conversions." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "lead-magnets": [
    {
      category: "Quick-Value Lead Capture",
      headline: "Checklists, Templates, and Tools That Convert",
      description: "Lead magnets are quick-value assets that capture email addresses with minimal friction. Checklists, templates, calculators, and tools that solve immediate problems while building your client's list.",
      subPoints: [
        { title: "High Conversion", description: "Quick-value offers convert better than lengthy e-books for cold traffic." },
        { title: "Low Production Cost", description: "Faster to create than comprehensive guides." },
        { title: "Immediate Value", description: "Subscribers get instant gratification, building positive association." },
        { title: "Segmentation Signal", description: "The magnet they choose reveals their priorities and pain points." },
        { title: "Entry Point", description: "Start relationships with valuable exchanges, not cold outreach." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Lead Magnet Types",
      headline: "Match the Offer to the Audience",
      description: "Different audiences respond to different offers. We help identify and create the lead magnets that will resonate with your client's ideal customers.",
      subPoints: [
        { title: "Checklists", description: "Step-by-step lists that simplify complex processes." },
        { title: "Templates", description: "Pre-built frameworks that save time and reduce friction." },
        { title: "Calculators", description: "Interactive tools that provide personalized insights." },
        { title: "Cheat Sheets", description: "Quick-reference guides that provide ongoing value." },
        { title: "Swipe Files", description: "Examples and templates that can be adapted immediately." },
        { title: "Mini-Courses", description: "Email-delivered lessons that build engagement over time." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Optimization & Testing",
      headline: "Improving Lead Magnet Performance",
      description: "Lead magnets should be tested and optimized like any conversion asset. We help improve performance through landing page optimization and offer refinement.",
      subPoints: [
        { title: "Landing Page Testing", description: "Headline, copy, and design variations to improve conversion." },
        { title: "Offer Positioning", description: "How you describe the value matters as much as the content." },
        { title: "Form Optimization", description: "Balancing information capture with conversion friction." },
        { title: "Delivery Experience", description: "Immediate access and clear next steps." },
        { title: "Performance Metrics", description: "Track conversion rates, email quality, and downstream engagement." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "press-releases": [
    {
      category: "Strategic News Distribution",
      headline: "Press Releases That Build Authority",
      description: "Press releases distribute newsworthy announcements to media outlets, news aggregators, and industry publications. Done strategically, they build brand visibility and create citation opportunities.",
      subPoints: [
        { title: "News Wire Distribution", description: "Syndication across hundreds of news sites and aggregators." },
        { title: "Citation Building", description: "Each pickup creates a new brand mention and potential backlink." },
        { title: "Brand Visibility", description: "Appear in Google News and industry publications." },
        { title: "Authority Signals", description: "News mentions signal legitimacy to search engines and AI systems." },
        { title: "Controlled Narrative", description: "Shape how your news is presented across the web." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Newsworthy Angles",
      headline: "What Makes a Press Release Work",
      description: "Not every announcement deserves a press release. We help identify genuinely newsworthy angles that will get picked up and create real authority signals.",
      subPoints: [
        { title: "Business Milestones", description: "Expansions, anniversaries, awards, and achievements." },
        { title: "New Services/Products", description: "Launches that provide genuine value to the market." },
        { title: "Community Involvement", description: "Sponsorships, charitable work, and local engagement." },
        { title: "Industry Insights", description: "Original research, surveys, or expert commentary." },
        { title: "Executive Changes", description: "Key hires and leadership announcements." },
        { title: "Partnerships", description: "Strategic alliances and collaborations." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Distribution Strategy",
      headline: "Maximizing Reach and Impact",
      description: "Where and how a press release is distributed determines its impact. We use strategic distribution to maximize pickup, citations, and authority signals.",
      subPoints: [
        { title: "Wire Selection", description: "Choose distribution networks based on goals and industry." },
        { title: "Timing Strategy", description: "Publish timing affects pickup rates and visibility." },
        { title: "Media List", description: "Targeted outreach to relevant journalists and publications." },
        { title: "Follow-Up Outreach", description: "Personal follow-up to increase pickup chances." },
        { title: "Coverage Tracking", description: "Monitor pickup, citations, and backlinks generated." },
        { title: "Repurposing", description: "Leverage release content for blog posts and social." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "case-studies": [
    {
      category: "Proof That Builds Trust",
      headline: "Case Studies That Close Deals",
      description: "Case studies document real results and build prospect trust. They're proof assets that support sales conversations and demonstrate the outcomes your client's services deliver.",
      subPoints: [
        { title: "Social Proof", description: "Third-party validation that reduces purchase risk." },
        { title: "Sales Enablement", description: "Concrete examples for sales conversations." },
        { title: "Objection Handling", description: "Proof points that address common concerns." },
        { title: "SEO Value", description: "Industry and service-specific content that ranks." },
        { title: "Testimonial Extraction", description: "Quotes and endorsements for multi-channel use." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Case Study Structure",
      headline: "The Story Arc That Persuades",
      description: "Effective case studies follow a proven structure: challenge, solution, results. We develop case studies that tell compelling stories while hitting the key proof points.",
      subPoints: [
        { title: "The Challenge", description: "What problem was the client facing? What was at stake?" },
        { title: "The Solution", description: "What approach did you take? Why this strategy?" },
        { title: "The Results", description: "Quantified outcomes with specific metrics and timeframes." },
        { title: "Client Voice", description: "Direct quotes that add authenticity and emotion." },
        { title: "Visual Proof", description: "Screenshots, charts, and before/after comparisons." },
        { title: "The Takeaway", description: "What can prospects learn and apply?" }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Production Process",
      headline: "From Client Selection to Published Asset",
      description: "We handle the complete case study production process: identifying the right clients, conducting interviews, writing the story, and designing the final asset.",
      subPoints: [
        { title: "Client Selection", description: "Identify clients with compelling stories and willingness to participate." },
        { title: "Interview Process", description: "Structured conversations that extract the best stories." },
        { title: "Data Gathering", description: "Collect metrics, screenshots, and proof points." },
        { title: "Story Development", description: "Craft narratives that resonate with target prospects." },
        { title: "Design & Format", description: "Professional layout for web, PDF, and presentation use." },
        { title: "Approval Process", description: "Client review and sign-off before publication." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "faq-content": [
    {
      category: "Capturing Question-Based Search",
      headline: "FAQ Content That Wins Featured Snippets",
      description: "FAQ content captures the questions your customers are asking. Structured Q&A earns featured snippets, supports voice search, and feeds AI systems that answer user queries.",
      subPoints: [
        { title: "Featured Snippet Eligibility", description: "Well-structured FAQs earn position zero in search results." },
        { title: "Voice Search Optimization", description: "Question-answer format matches voice query patterns." },
        { title: "AI Visibility", description: "FAQ format is ideal for AI extraction and citation." },
        { title: "Long-Tail Capture", description: "Each question targets specific query variations." },
        { title: "User Experience", description: "Visitors find quick answers to common questions." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "FAQ Research",
      headline: "Finding the Questions That Matter",
      description: "Effective FAQ content starts with research. We identify the questions real customers ask—from search data, sales conversations, and competitor analysis.",
      subPoints: [
        { title: "Search Query Analysis", description: "Mining 'People Also Ask' and related queries." },
        { title: "Customer Service Mining", description: "Questions from support tickets and sales calls." },
        { title: "Competitor FAQs", description: "What questions are competitors answering?" },
        { title: "Industry Forums", description: "Questions asked in Reddit, Quora, and community groups." },
        { title: "Keyword Research", description: "Question-based keywords with search volume." },
        { title: "Sales Team Input", description: "Objections and questions from sales conversations." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Technical Implementation",
      headline: "Schema and Structure for Maximum Impact",
      description: "FAQ content requires proper technical implementation to earn rich results and AI visibility. We ensure FAQs are structured for both users and machines.",
      subPoints: [
        { title: "FAQ Schema Markup", description: "Structured data that enables rich FAQ results in search." },
        { title: "Page Integration", description: "Strategic placement within service and content pages." },
        { title: "Accordion Design", description: "Expandable format that improves user experience." },
        { title: "Answer Optimization", description: "Concise, complete answers that satisfy user intent." },
        { title: "Internal Linking", description: "Connect FAQ answers to relevant service pages." },
        { title: "Ongoing Expansion", description: "Add new questions as search behavior evolves." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ],

  "hub-spoke-buildouts": [
    {
      category: "Content Architecture",
      headline: "Hub-and-Spoke Strategy for Topical Authority",
      description: "Hub-and-spoke content architecture organizes content into topic clusters with pillar pages at the center. This structure maximizes topical authority and creates clear paths for users and search engines.",
      subPoints: [
        { title: "Topic Clusters", description: "Related content organized around central themes." },
        { title: "Pillar Pages", description: "Comprehensive hub content that anchors each cluster." },
        { title: "Spoke Content", description: "Supporting articles that link back to the hub." },
        { title: "Internal Linking", description: "Strategic connections that distribute authority." },
        { title: "Semantic Relevance", description: "Topical depth that search engines reward." }
      ],
      ctaText: "Start the Conversation",
      ctaHref: "/contact"
    },
    {
      category: "Planning and Mapping",
      headline: "Strategic Cluster Development",
      description: "Effective hub-and-spoke architecture requires upfront planning. We map topic clusters, identify content gaps, and create a buildout roadmap.",
      subPoints: [
        { title: "Topic Identification", description: "Define the core topics that matter to your audience." },
        { title: "Cluster Mapping", description: "Organize subtopics around each hub theme." },
        { title: "Gap Analysis", description: "Identify missing content within existing clusters." },
        { title: "Competition Research", description: "How are competitors structuring their content?" },
        { title: "Prioritization", description: "Build high-value clusters first." },
        { title: "Content Calendar", description: "Phased approach to cluster completion." }
      ],
      ctaText: "Schedule a Discovery Call",
      ctaHref: "/contact"
    },
    {
      category: "Implementation",
      headline: "Building Connected Content Ecosystems",
      description: "Hub-and-spoke implementation requires coordinated content creation and technical setup. We build complete clusters that work as integrated systems.",
      subPoints: [
        { title: "Pillar Page Creation", description: "Comprehensive hub content that defines the topic." },
        { title: "Spoke Development", description: "Supporting content that covers subtopics in depth." },
        { title: "Linking Architecture", description: "Strategic internal links that connect content." },
        { title: "Navigation Integration", description: "Menu and category structures that support clusters." },
        { title: "Performance Tracking", description: "Monitor cluster performance and adjust." },
        { title: "Expansion Planning", description: "Roadmap for adding new clusters over time." }
      ],
      ctaText: "Explore Partnership",
      ctaHref: "/contact"
    }
  ]
};
