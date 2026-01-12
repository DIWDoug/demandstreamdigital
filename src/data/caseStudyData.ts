import { CaseStudy } from "@/pages/CaseStudies";
import { CaseStudyContent } from "@/pages/CaseStudyDetail";

// Thumbnail images
import recreationalBoatingHero from "@/assets/case-studies/recreational-boating-hero.jpg";
import barnRestorationHero from "@/assets/case-studies/barn-restoration-hero.jpg";
import floridaPhotographyHero from "@/assets/case-studies/florida-photography-hero.jpg";
import touristVehicleRentalsHero from "@/assets/case-studies/tourist-vehicle-rentals-hero.jpg";
import customHomeBuilderHero from "@/assets/case-studies/custom-home-builder-hero.jpg";
import auctionHouseHero from "@/assets/case-studies/auction-house-hero.jpg";
import dallasPlumbingHero from "@/assets/case-studies/dallas-plumbing-hero.jpg";
import lasVegasPlumbingHero from "@/assets/case-studies/las-vegas-plumbing-hero.jpg";

// Growth chart images
import recreationalBoatingGrowthChart from "@/assets/case-studies/recreational-boating-growth-chart.png";
import barnRestorationGrowthChart from "@/assets/case-studies/barn-restoration-growth-chart.png";
import floridaPhotographyGrowthChart from "@/assets/case-studies/florida-photography-growth-chart.png";
import touristVehicleRentalsGrowthChart from "@/assets/case-studies/tourist-vehicle-rentals-growth-chart.png";
import customHomeBuilderGrowthChart from "@/assets/case-studies/custom-home-builder-growth-chart.png";
import auctionHouseGrowthChart from "@/assets/case-studies/auction-house-growth-chart.png";
import dallasPlumbingGrowthChart from "@/assets/case-studies/dallas-plumbing-growth-chart.png";
import lasVegasPlumbingGrowthChart from "@/assets/case-studies/las-vegas-plumbing-growth-chart.jpg";

// ============ CASE STUDY CARDS (for landing page) ============
export const caseStudyCards: CaseStudy[] = [
  {
    slug: "recreational-boating-seo",
    client: "Florida Marina Partner",
    industry: "Recreational Boating",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "Transforming Organic Visibility in the Recreational Boating Industry",
    heroMetric: {
      value: "444%",
      label: "YoY Organic Growth",
    },
    secondaryMetrics: [
      { value: "426%", label: "Google Organic Growth" },
      { value: "8", label: "SEO Cycles" },
    ],
    roiHighlight: {
      monthlyRevenue: "$32K-$96K/mo",
      roiRange: "33-100x",
      seoSpend: "$950/mo",
    },
    challenge: "New website launch with zero organic foundation, needing to establish visibility across four geographic locations in a competitive marine industry.",
    thumbnail: recreationalBoatingHero,
    relationshipType: "partner",
  },
  {
    slug: "barn-restoration-seo",
    client: "Northeast Barn Restoration Partner",
    industry: "Barn Restoration",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "Local SEO Growth for a Barn Restoration Company",
    heroMetric: {
      value: "478%",
      label: "YoY Organic Growth",
    },
    secondaryMetrics: [
      { value: "491%", label: "Google Organic Growth" },
      { value: "22", label: "SEO Cycles" },
    ],
    roiHighlight: {
      monthlyRevenue: "$25K-$50K/mo",
      roiRange: "33-66x",
      seoSpend: "$750/mo",
    },
    challenge: "Barn restoration company in the Northeast market with limited organic visibility, competing for local search terms against general contractors.",
    thumbnail: barnRestorationHero,
    relationshipType: "partner",
  },
  {
    slug: "florida-photography-seo",
    client: "South Florida Photography Partner",
    industry: "Photography",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "Local SEO Turnaround for a South Florida Photography Business",
    heroMetric: {
      value: "60pt",
      label: "Performance Turnaround (-28% → +32% YoY Organic Traffic)",
    },
    secondaryMetrics: [
      { value: "-28% → +32%", label: "YoY Organic Traffic Swing" },
      { value: "9", label: "SEO Cycles" },
    ],
    roiHighlight: {
      monthlyRevenue: "$7.2K-$22K/mo",
      roiRange: "5-14x",
      seoSpend: "$1,538/mo",
    },
    challenge: "Reversed severe organic decline from risky PBN tactics — a complete SEO turnaround from -28% to +32% YoY in just 9 months.",
    thumbnail: floridaPhotographyHero,
    relationshipType: "partner",
  },
  {
    slug: "tourist-vehicle-rentals-seo",
    client: "Florida Tourist Rental Partner",
    industry: "Tourist Vehicle Rentals",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "Local SEO Turnaround for a Tourist Vehicle Rental Company",
    heroMetric: {
      value: "+531%",
      label: "Organic New User Growth",
    },
    secondaryMetrics: [
      { value: "+112%", label: "Total Users" },
      { value: "9", label: "SEO Cycles" },
    ],
    roiHighlight: {
      monthlyRevenue: "$6.4K+/mo",
      roiRange: "5x+",
      seoSpend: "$1,318/mo",
    },
    challenge: "Reversed declining organic visibility following PBN dismantling — delivering 531% new user growth and market leadership across multiple tourist destinations.",
    thumbnail: touristVehicleRentalsHero,
    relationshipType: "partner",
  },
  {
    slug: "custom-home-builder-seo",
    client: "Florida Custom Home Builder Partner",
    industry: "Custom Home Building",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "SEO Growth for Custom Home Builder in Tampa Bay",
    heroMetric: {
      value: "+85%",
      label: "Organic Traffic Growth",
    },
    secondaryMetrics: [
      { value: "11", label: "#1 Rankings" },
      { value: "8", label: "SEO Cycles" },
    ],
    roiHighlight: {
      monthlyRevenue: "$300K-$1M+/project",
      roiRange: "200x+",
      seoSpend: "$1,318/mo",
    },
    challenge: "High-end custom home builder with strong brand awareness but significantly under-leveraged organic visibility in the ultra-competitive Tampa Bay luxury home market.",
    thumbnail: customHomeBuilderHero,
    relationshipType: "partner",
  },
  {
    slug: "auction-house-seo",
    client: "Tampa Bay Auction Partner",
    industry: "Auction House",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "Local SEO Dominance for a Multi-Category Auction House",
    heroMetric: {
      value: "+68%",
      label: "Organic Traffic Growth",
    },
    secondaryMetrics: [
      { value: "+64%", label: "Engaged Sessions" },
      { value: "24", label: "SEO Cycles" },
    ],
    roiHighlight: {
      monthlyRevenue: "$50K-$150K/mo",
      roiRange: "50x+",
      seoSpend: "$950/mo",
    },
    challenge: "Well-established auction house seeking to dominate local search across multiple high-value categories including fine art, rare coins, jewelry, watches, and collectibles in competitive Florida markets.",
    thumbnail: auctionHouseHero,
    relationshipType: "partner",
  },
  {
    slug: "dallas-plumbing-seo",
    client: "Dallas Plumbing",
    industry: "Plumbing/Home Services",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "Rapid SEO Growth for Dallas Plumbing Company",
    heroMetric: {
      value: "70",
      label: "Keywords Tracked",
    },
    secondaryMetrics: [
      { value: "2", label: "#1 Rankings" },
      { value: "20+", label: "Top 10 Keywords" },
    ],
    roiHighlight: {
      monthlyRevenue: "$50K+/mo (est.)",
      roiRange: "High ROI",
    },
    challenge: "Plumbing company with stalled organic traffic despite solid domain history, facing fierce competition in the Dallas-Fort Worth metro for high-value service keywords.",
    thumbnail: dallasPlumbingHero,
    relationshipType: "direct",
  },
  {
    slug: "las-vegas-plumbing-seo",
    client: "Las Vegas Plumbing & HVAC",
    industry: "Plumbing & HVAC",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "SEO Recovery for Las Vegas Plumbing & HVAC Company",
    heroMetric: {
      value: "57pt",
      label: "Performance Turnaround (-54% → +3% YoY)",
    },
    secondaryMetrics: [
      { value: "65", label: "Keywords Tracked" },
      { value: "10+", label: "#1 Rankings" },
    ],
    roiHighlight: {
      monthlyRevenue: "$40K+/mo",
      roiRange: "High ROI",
    },
    challenge: "Las Vegas plumbing & HVAC company experiencing multi-year organic decline due to tracking issues, prior mismanagement (RYNO → Blue Corona), and no SEO structure — reversed entirely within 5 months.",
    thumbnail: lasVegasPlumbingHero,
    relationshipType: "direct",
  },
];

// ============ NARRATION TEXT FOR TTS ============
const recreationalBoatingNarration = `
Transforming Organic Visibility in the Recreational Boating Industry.

In May 2025, we began a strategic SEO partnership with a client in the recreational boating industry, shortly after their agency partner launched a new website. Over the course of eight SEO cycles, we delivered transformative results that culminated in a 444% year-over-year increase in organic sessions by December 2025.

The Challenge.

Our agency partner brought us in as part of a larger marketing strategy that included a full website launch, organic SEO, search ads, and social advertising. The client faced several challenges: a brand new website with no existing organic authority, a competitive marine industry with established local players, four distinct geographic locations requiring localized strategies, and starting from negative 80% year-over-year performance baseline.

Our Approach.

We immediately conducted a historical audit using the Wayback Machine to identify legacy URLs, then implemented a full 301 redirect strategy to prevent traffic loss. We established a 40-keyword strategy across four geographic locations, performed full schema markup implementation, completed data aggregator submissions, and set up Google Business Profile listings with our proprietary 120% optimization methodology.

The Results.

The transformation was nothing short of extraordinary. From a challenging start in January with negative 80% performance, we achieved positive 584% growth by October across all organic channels. We secured multiple top 3 rankings for core terms and achieved high local visibility across Google Maps for all four target locations.

Key metrics include: 444% year-over-year increase in organic sessions, 426% Google organic traffic growth, and consistent month-over-month growth maintained across 8 SEO cycles.

Lead Quality and ROI Impact.

Organic traffic now drives over 130 inbound actions per month, including more than 30 phone clicks. After adjusting for lead quality, we estimate the client receives 40 to 70 qualified organic leads monthly. With even modest conversion of 5 to 10 percent, the client gains 2 to 6 new members per month, each worth approximately $16,000 in lifetime value. That translates to an estimated $32,000 to $96,000 per month in revenue, for just $950 per month in SEO spend — a 33x to 100x return on investment.
`;

const barnRestorationNarration = `
Local SEO Growth for a Barn Restoration Company.

In collaboration with our agency partner, we launched an SEO campaign for a barn restoration company serving the Northeast market. Our engagement began prior to the busy fall season and focused on local keyword visibility, GBP optimization, link building, and content development. We drove a 478% increase in organic sessions, over 491% growth in Google traffic, and secured numerous #1 rankings for high-value local search terms.

The Challenge.

The agency partner engaged us for local SEO, GBP optimization, link building, and content development. Our client success manager and team lead handled monthly reporting and strategy delivery via GPT-powered reports and video walkthroughs. The client needed local visibility in Google Search and Maps, topical authority around barn restoration services, and non-branded lead generation via organic channels.

Our Approach.

Our campaign focused on keyword research and mapping across barn-related services, Google Business Profile optimization, on-page optimization across core service pages including titles, headers, and internal links, content development for service pages and blog, technical audit and implementation covering sitemaps, schema, and speed improvements, setup of foundational structured and unstructured citations, and strategic link building for authority.

The Results.

As of the latest reporting, the site achieved #1 rankings for multiple local and service keywords, including 'Barn remodel [state]' and 'Old barn repair [state]' terms across the Northeast, 'Barn restoration companies near me', 'Pole barn repair contractors near me', and 'Barn roof repair near me'. Visibility spanned across organic desktop (Top 3 across 12+ terms), mobile and local pack (Top 2 for most service queries). Full-year organic performance showed 478% year-over-year growth in total sessions and 491% growth in Google Organic traffic.
`;

const floridaPhotographyNarration = `
Local SEO Turnaround for a South Florida Photography Business.

A Florida-based wedding and family photography business serving South Central Florida partnered with our agency partner in April 2025 after experiencing severe organic visibility decline. At engagement start, organic sessions had plummeted as much as 28% year-over-year. Within nine strategic SEO cycles, we completely reversed this downward trajectory, delivering exceptional results: +32% YoY session growth, +31% engaged session growth, and a 10% lift in engagement rate by December 2025.

The Challenge.

Before partnering with our agency partner, the client worked with another SEO provider whose approach relied heavily on a weak private blog network (PBN). This risky strategy involved exact-match anchor text backlinks pointed from unrelated homepages—a tactic that left a visible footprint and posed significant long-term penalties. In May 2025, the client dismantled the legacy PBN, causing an immediate and sharp drop in organic traffic due to sudden loss of link equity.

Our Approach.

Our team quickly pivoted to stabilize authority through white-hat link building, relevant citations, and high-DR guest post placements. We built a comprehensive citation profile with 150+ citations across major directories and niche-specific platforms. We focused on technical foundation improvements including site speed, mobile optimization, and schema markup to enable all other tactics to perform optimally.

The Results.

From January through August 2025, the client experienced persistent year-over-year organic declines across all key metrics. By September, we achieved our first positive YoY growth at +19%. Momentum compounded with +82% in October, +26% in November, and +32% in December. We secured multiple #1 and #2 rankings for high-intent local photography keywords and established strong rankings across multiple service areas throughout South Central Florida. The complete performance reversal represents a 60 percentage point swing from –28% to +32%.

ROI Impact.

With an average SEO investment of $1,538 per month and a 5% lead conversion rate, the client now generates 20 to 35 qualified leads monthly. With a 30% close rate, that results in 6 to 11 new bookings per month. At an average booking value of $1,200 to $2,000, this translates to $7,200 to $22,000 in monthly revenue potential — a 5x to 14x return on investment.
`;

const touristVehicleRentalsNarration = `
Local SEO Turnaround for a Tourist Vehicle Rental Company.

A tourist vehicle rental company partnered with our agency partner in April 2025 after several months of declining organic visibility. Within nine SEO cycles, we reversed that trajectory, delivering substantial year-over-year session growth, improved engagement, and expanded rankings across multiple high-intent local search terms.

The Challenge.

Before the engagement, the client had worked with another SEO provider whose strategy relied heavily on a private blog network with exact-match anchor text backlinks and a visible footprint. In May 2025, the client dismantled the legacy PBN, which caused a sharp drop in traffic. We stepped in to detoxify these harmful backlinks and stabilize rankings through clean link-building and improved on-page execution. We also provided strategic direction on the timing of a new website launch to minimize disruption during peak seasons.

Our Approach.

The agency partner supporting this account also engaged in paid search advertising throughout the campaign. We consistently recommend this as a strategic complement to SEO — allowing paid media to generate leads and brand visibility while SEO efforts build organic equity over time. Our execution included on-page SEO audits and optimizations, structured and unstructured citation building, data aggregate submissions, Google Business Profile optimization with 120% completeness, guest post outreach on DR40+ domains, social media signal syndication, and hyper-local citation expansion.

The Results.

Within nine SEO cycles from April to December 2025, we reversed the declining trajectory and built a foundation of clean SEO practices. Total users increased by 112%, with a remarkable 531% growth in new users. Engagement rate improved by 28% and average engagement time increased by 79%. We secured number one rankings for critical keywords like city golf cart rental and achieved Local Pack and Finder dominance across multiple locations.

ROI Impact.

The campaign generated over $6,440 in direct purchase revenue within the tracking period, with organic search driving 93% of all traffic. For $1,318 per month in SEO spend, the business achieved a 5x+ return on investment. The business is now in a strong position to scale in 2026.
`;

const customHomeBuilderNarration = `
SEO Growth for Custom Home Builder in Tampa Bay.

A high-end custom home builder based in Florida partnered with our agency partner in May 2025 to improve non-branded organic visibility. Despite having a strong brand and local awareness, their organic performance was significantly under-leveraged, especially given their authority and presence in the local Google Maps pack. They had no homepage content, limited internal linking, and little-to-no supporting content on-site.

The client had aesthetic and simplicity requirements, preferring a minimal, design-forward website — which limited our ability to implement typical on-page optimizations. Instead, the SEO strategy focused heavily on off-page work and technical adjustments, as well as GBP optimization.

The Challenge.

The client faced several unique challenges: no homepage content (still true today), limited ability to publish blog content or build internal page structures, a competitive industry with high-value transactional keywords, and no accurate analytics data prior to May 2025.

Our Approach.

Our execution approach was built around a phased SEO structure. In the foundational phase, we conducted a full on-page audit and optimization, including technical SEO and internal linking strategy. We submitted to structured and unstructured citation directories, set up data aggregators to ensure NAP consistency, implemented Google Business Profile enhancements for Local Pack visibility, and established performance reporting infrastructure.

Ongoing monthly execution included continued GBP optimization and maintenance ensuring presence in the top 3 local listings, guest post outreach and link insertions with high-relevance DR40+ partners, backlink gap analysis, social signal syndication, additional citation development, and ongoing internal linking refinements.

The Results.

Within eight months, we delivered remarkable results. Organic sessions increased by 85% from 1,161 to 2,149, with peak performance of 2,375 sessions in September — a 94% increase from May. We secured 11 number one rankings and 9 number two rankings across organic and local search, all achieved with no new blog content or page publications.

Key ranking achievements include number one positions for 'luxury custom home builders' on desktop and mobile, 'new homes for sale FL' in local search, 'home builders FL' on mobile, 'new home builders' across desktop, mobile, and local pack, and 'new home construction company' across all platforms.

ROI Impact.

Tampa Bay custom home builds range from $300,000 to over $1 million, with high-end luxury homes exceeding $1 million with land and finishes. Each organic lead represents substantial lifetime value. For just $1,318 per month in SEO spend, the potential return on a single conversion exceeds 200x.
`;

const auctionHouseNarration = `
Local SEO Dominance for a Multi-Category Auction House.

A well-established auction house in the Tampa Bay area partnered with our agency to transform their local organic visibility and drive qualified search traffic across multiple high-value categories including fine art, rare coins, jewelry, watches, collectibles, and firearms. Over the course of a nearly two-year engagement, we implemented a comprehensive local SEO strategy focused exclusively on visibility growth within Florida markets, resulting in exceptional performance gains.

The Challenge.

Our agency partner engaged us to help a multi-category auction house achieve dominant local search visibility across the Tampa Bay region and broader Florida markets. The business offered diverse auction categories from fine art to firearms, requiring a sophisticated keyword strategy that could capture intent across multiple verticals while maintaining geographic precision.

Our Approach.

We developed a comprehensive local SEO strategy combining technical excellence with geographic precision. This included full schema implementation for auction events and inventory, Google Business Profile optimization across target locations, category-specific keyword mapping for all major auction verticals, and strategic preparation for peak auction seasons to maximize visibility during high-demand periods.

The Results.

The transformation was substantial over the two-year engagement. Total sessions increased by 68% year-over-year, with engaged sessions growing by 64%. Peak seasonal performance saw some months nearly triple the previous year's traffic. The auction house achieved top positions for numerous high-intent keywords including Tampa Auction House at Position 3 in Maps and Organic, Clearwater Auction in Top 3 Google Maps, and State Auctions in Florida at Position 2 in organic search.

Category-Specific Success.

Beyond general auction terms, the strategy delivered Page 1 visibility for category-specific searches across all major product lines. Coin auctions, artwork auctions, jewelry auctions, and firearms auctions all achieved prominent rankings for geo-targeted keywords, ensuring the auction house appeared prominently when potential bidders searched for specific items in their local area.

Key Success Factors.

Several critical factors contributed to the sustained growth. Geographic precision ensured focused targeting on high-value Florida markets. Category depth provided comprehensive optimization across all major auction categories. Technical excellence including structured data and proper schema implementation created a solid foundation. Seasonal optimization maximized visibility during peak auction periods when buyer intent was strongest.
`;

const dallasPlumbingNarration = `
Rapid SEO Growth for Dallas Plumbing Company.

A Dallas-based plumbing company partnered with our team in mid-2025 to execute a full SEO and digital visibility overhaul. Prior to our engagement, the client had active Google Analytics tracking, allowing us to measure precise year-over-year growth. Over the course of just five months, we achieved significant keyword ranking increases, strong growth in Google Organic traffic, and improved search visibility in the highly competitive Dallas-Fort Worth metro.

The Challenge.

The client is a local plumbing company offering services like emergency plumbing, leak detection, water heater installation and repair, and sump pump service. Despite having a solid domain history, their organic traffic had plateaued and visibility was buried behind competitors. The competitive nature of the Dallas plumbing market meant established players dominated search results for high-value service keywords.

Our Approach.

Our relationship began with a newly developed SEO Roadmap project — a comprehensive one-time audit and strategic analysis. This roadmap was created to clearly showcase expertise, uncover high-value opportunities, and act as a strategic appetizer before the full-service SEO engagement. The roadmap led to a 6-month SEO commitment starting in August 2025.

We focused on high-profitability services first, prioritizing gas line repair, hydrojetting, sump pump repair, main water line repair, and emergency plumbing services. We applied a hub-and-spoke methodology, creating topically relevant clusters around each core service. We used the Compact Keyword Strategy focusing on one keyword per page, and the Core30 Strategy for localized hub-and-spoke implementation.

The Results.

We now track 70 keywords with strong rankings across high-value plumbing services. We secured #1 rankings for 'hydro jetting services' and 'hydro jetting service', with gains of 26 and 30 positions respectively since September. We also achieved #2 for 'drainage cleaning services', #3 for 'hydro jetting services near me', #4 for 'plumbing services in dallas tx' and 'emergency plumbing services', and Top 10 positions for numerous other high-value terms including 'water heater repair dallas tx', 'plumbing leak detection services', and 'best plumbers in dallas texas'.
`;

const lasVegasPlumbingNarration = `
SEO Recovery for Las Vegas Plumbing & HVAC Company.

This Las Vegas-based plumbing and HVAC company partnered directly with our SEO team in August 2025, following a comprehensive SEO Roadmap we delivered in July. The brand had previously experienced long-term year-over-year declines in both total and Google organic traffic due to tracking issues, prior mismanagement, and no SEO structure. By launching a structured multi-phase campaign focused on on-page repairs, safe off-page link building, and a Hub-and-Spoke content strategy, the company reversed its negative trend and achieved measurable gains in visibility, rankings, and user engagement.

The Challenge.

Prior to working with us, the client had been with RYNO, which was later acquired by Blue Corona. During that transition, their account was reassigned multiple times, leading to inconsistent strategy, poor communication, and ultimately, stagnation in results. Our July SEO Roadmap uncovered missing GA4 filters, lost historical redirects, and low-quality backlinks — all of which were resolved before campaign launch.

It's important to note that the client also runs paid advertising campaigns managed by a separate partner agency. The organic traffic and ranking improvements documented in this case study are exclusively the result of our SEO efforts and are tracked independently from any paid search activity.

Our Approach.

We began with a detailed Roadmap Phase in July 2025: full visual, on-page, and technical audit, competitor backlink gap analysis, disavow and link detox, historical URL redirect mapping, keyword clustering and mapping, and schema recommendations. Phase 1 Foundation in August 2025 included structured and unstructured citation cleanup, on-page optimization and schema deployment, GSC indexing and sitemap cleanup, GA4 event setup, and GBP optimization. Phase 2 and beyond focused on off-page authority: monthly guest posts on safe, niche-relevant domains, GBP posting and QA updates, and mixed-link campaigns with unstructured citations and niche edits. Our content strategy used Hub-and-Spoke methodology with topical authority building, Core30 and Compact Keyword frameworks, and spokes-of-spokes for deeper support pages.

The Results.

The data tells a powerful story of recovery. From -54% year-over-year decline in February 2025 to +3% year-over-year growth in December 2025 — a complete reversal of multi-year negative trends in just 10 months. SEO execution began August 2025, first measurable gains were visible in September, and we achieved positive year-over-year growth by December.

We now track 65 keywords with strong rankings across the board. Position 1 rankings include 'plumbing and hvac services', 'plumbing fixture replacement', 'duct insulation contractors near me', 'tankless water heater solutions', and 'new water heater installation services'. Position 2 rankings include 'water line repair las vegas', 'air duct repair las vegas', 'heater repair near me', 'plumbing leak detection', and 'general plumbing services'. We also secured Position 5 for 'plumbing las vegas' — a high-volume term with 4,400 monthly searches.

Revenue and ROI Impact.

In December 2025, the client achieved approximately $40,000 in year-over-year revenue growth directly attributable to organic traffic improvements. This figure represents the incremental revenue compared to the same period the prior year. Given the diverse service mix across plumbing, HVAC, water heater, and emergency services, revenue per job varies significantly. However, the overall trajectory demonstrates strong ROI from the SEO investment.
`;

// ============ FULL CASE STUDY CONTENT (for detail pages) ============
export const caseStudyFullContent: Record<string, CaseStudyContent> = {
  "recreational-boating-seo": {
    slug: "recreational-boating-seo",
    client: "Florida Marina Partner",
    industry: "Recreational Boating",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "Transforming Organic Visibility in the Recreational Boating Industry",
    heroMetric: {
      value: "444%",
      label: "Year-over-Year Organic Growth",
    },
    secondaryMetrics: [
      { value: "426%", label: "Google Organic Traffic" },
      { value: "8", label: "SEO Cycles" },
      { value: "4", label: "Geographic Locations" },
      { value: "33-100x", label: "ROI Range" },
    ],
    challenge: "Our agency partner brought us in as part of a larger marketing strategy that included a full website launch, organic SEO, search ads, and social advertising. The client needed to establish organic visibility from scratch after a complete website rebuild in the competitive recreational boating industry.",
    challengeDetails: [
      "Brand new website with no existing organic authority or indexed pages",
      "Competitive marine industry with established local players",
      "Four distinct geographic locations requiring localized SEO strategies",
      "Starting from -80% year-over-year performance baseline in January",
      "Required seamless white-label execution maintaining agency partner relationships",
    ],
    solution: "We immediately conducted a historical audit using the Wayback Machine to identify legacy URLs, then implemented a full 301 redirect strategy to prevent traffic loss. Our comprehensive approach involved technical SEO, Google Business Profile optimization, backlink building, and full white-label support that maintained seamless client relationships through custom reporting and live video follow-ups.",
    solutionDetails: [
      "Established a 40-keyword strategy across four geographic locations",
      "Performed full schema markup implementation including Open Graph, Twitter cards, and service-level schema",
      "Completed data aggregator submissions and set up Google Business Profile listings with our proprietary '120% optimization' methodology",
      "Executed technical SEO clean-up including crawl errors, mobile usability, and sitemap/robots.txt optimization",
      "Partnered with the existing content team to align new content with keyword mapping and service targets",
      "Initiated guest posting campaigns and contextual link insertions for authority building",
      "Delivered all reporting via white-label video walkthroughs and GPT-generated summaries",
    ],
    results: "The transformation was nothing short of extraordinary. From a challenging start in January with -80% performance, we achieved +584% growth by October across all organic channels. We secured multiple #1-#3 rankings for core terms and achieved high local visibility across Google Maps.",
    resultDetails: [
      "444% year-over-year increase in organic sessions by December 2025",
      "426% year-over-year traffic growth from Google search specifically",
      "Growth trajectory from -80% in January to +584% by October",
      "Multiple #1-#3 rankings secured for core service terms",
      "High local visibility across Google Maps for all four target locations",
      "Consistent month-over-month growth maintained across 8 SEO cycles",
    ],
    roiImpact: {
      headline: "Lead Quality & ROI Impact",
      details: [
        "Organic traffic now drives over 130 inbound actions/month, including ~30+ phone clicks",
        "After adjusting for lead quality, we estimate the client receives 40–70 qualified organic leads monthly",
        "With even modest conversion (5–10%), the client gains 2–6 new members/month",
        "Each member is worth approximately $16,000 in lifetime value",
        "Translates to an estimated $32,000–$96,000/month in revenue",
        "For just $950/month in SEO spend — a 33x to 100x return on investment",
      ],
      metrics: {
        monthlyActions: "130+",
        qualifiedLeads: "40-70",
        newMembersPerMonth: "2-6",
        lifetimeValue: "$16,000",
        monthlyRevenue: "$32K-$96K",
        seoSpend: "$950/mo",
        roiRange: "33-100x",
      },
    },
    timeline: "April 2025 to Present (8 SEO Cycles)",
    heroImage: recreationalBoatingHero,
    growthChart: recreationalBoatingGrowthChart,
    pdfDownload: "/case-studies/recreational-boating-seo.pdf",
    narrationText: recreationalBoatingNarration,
  },
  "barn-restoration-seo": {
    slug: "barn-restoration-seo",
    client: "Northeast Barn Restoration Partner",
    industry: "Barn Restoration",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "Local SEO Growth for a Barn Restoration Company",
    heroMetric: {
      value: "478%",
      label: "Year-over-Year Organic Growth",
    },
    secondaryMetrics: [
      { value: "491%", label: "Google Organic Traffic" },
      { value: "22", label: "SEO Cycles" },
      { value: "522%", label: "Google Sessions Growth" },
      { value: "33-66x", label: "ROI Range" },
    ],
    challenge: "Our agency partner engaged us for local SEO, GBP optimization, link building, and content development. The client needed to establish local visibility in the competitive Northeast barn restoration market, build topical authority, and generate non-branded leads via organic channels.",
    challengeDetails: [
      "Limited organic visibility in a niche local market",
      "Competing against general contractors with broader marketing reach",
      "Need for local visibility in both Google Search and Maps",
      "Required topical authority around specialized barn restoration services",
      "Non-branded lead generation via organic channels as primary goal",
      "Coordination with paid advertising running alongside SEO efforts",
    ],
    solution: "We launched a focused local SEO campaign targeting the Northeast market, beginning prior to the busy fall season. Our approach combined GBP optimization, strategic link building, content development, and technical SEO improvements to establish dominance in barn restoration search results.",
    solutionDetails: [
      "Google Business Profile optimization with our proprietary methodology",
      "Keyword research and mapping across barn-related services",
      "Content development for service pages and blog articles",
      "On-page optimization across core service pages (titles, headers, internal links)",
      "Technical audit and implementation (sitemaps, schema, speed improvements)",
      "Strategic link building for authority and local relevance",
      "Setup of foundational structured and unstructured citations",
      "Monthly reporting via GPT-powered reports and video walkthroughs",
    ],
    results: "Over 22 SEO cycles, we achieved extraordinary growth across all organic channels. The site now dominates local search results for barn restoration keywords in the Northeast, with multiple #1 rankings secured for high-value local search terms.",
    resultDetails: [
      "478% year-over-year increase in organic sessions (October 2024 to October 2025)",
      "491% year-over-year traffic growth from Google search specifically",
      "522% growth in Google Organic sessions (655 to 4,074)",
      "#1 rankings for 'Barn remodel [state]', 'Old barn repair [state]', 'Barn restoration companies [state]'",
      "#1 rankings for 'Pole barn repair contractors near me', 'Barn roof repair near me'",
      "Top 3 visibility across 12+ terms on organic desktop",
      "Top 2 local pack positions for most service queries",
      "278% growth in Bing traffic, 300% growth in DuckDuckGo traffic",
    ],
    roiImpact: {
      headline: "Lead Quality & ROI Impact",
      details: [
        "Organic traffic now drives consistent inbound leads for barn restoration projects",
        "Average project value for barn restorations ranges from $15,000–$75,000",
        "With modest conversion rates, client gains 2–4 new projects/month from organic",
        "Translates to an estimated $25,000–$50,000/month in revenue",
        "For just $750/month in SEO spend — a 33x to 66x return on investment",
        "Paid advertising running alongside helps fund and accelerate organic results",
      ],
      metrics: {
        totalSessions: "4,512",
        googleSessions: "4,074",
        engagedSessions: "2,628",
        sessionGrowth: "+496.8%",
        monthlyActions: "50+ (est.)",
        qualifiedLeads: "15-25 (est.)",
        monthlyRevenue: "$25K-$50K",
        seoSpend: "$750/mo",
        roiRange: "33-66x",
      },
    },
    timeline: "May 2024 to Present (22 SEO Cycles)",
    heroImage: barnRestorationHero,
    growthChart: barnRestorationGrowthChart,
    pdfDownload: "/case-studies/barn-restoration-seo.pdf",
    narrationText: barnRestorationNarration,
  },
  "florida-photography-seo": {
    slug: "florida-photography-seo",
    client: "South Florida Photography Partner",
    industry: "Photography",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "Local SEO Turnaround for a South Florida Photography Business",
    heroMetric: {
      value: "60pt",
      label: "Performance Turnaround (-28% → +32% YoY Organic Traffic)",
    },
    secondaryMetrics: [
      { value: "-28% → +32%", label: "YoY Organic Traffic Swing" },
      { value: "+31%", label: "Engaged Sessions" },
      { value: "9", label: "SEO Cycles" },
      { value: "5-14x", label: "ROI Range" },
    ],
    challenge: "A Florida-based wedding and family photography business partnered with our agency partner in April 2025 after experiencing severe organic visibility decline of -28% year-over-year due to legacy PBN tactics from a previous SEO provider.",
    challengeDetails: [
      "Severe organic decline of -28% year-over-year at engagement start",
      "Previous SEO provider used risky private blog network (PBN) tactics",
      "Exact-match anchor text backlinks from unrelated homepages left visible footprints",
      "May 2025 PBN dismantling caused immediate sharp traffic drop",
      "Needed to transition from risky tactics to sustainable white-hat SEO",
      "Struggled to maintain visibility across key service areas in South Central Florida",
    ],
    solution: "Our team quickly pivoted to stabilize authority through white-hat link building, relevant citations, and high-DR guest post placements. We built a sustainable foundation with 150+ citations and DR60-79 backlinks, ultimately recovering and exceeding previous performance baselines.",
    solutionDetails: [
      "White-hat link building with high-DR (60-79) guest post placements",
      "Comprehensive citation building with 150+ citations across major and niche directories",
      "Technical foundation improvements including site speed and mobile optimization",
      "Schema markup implementation for enhanced local visibility",
      "NAP (Name, Address, Phone) consistency across all platforms",
      "Location-specific content development for geographic markets",
      "Google Business Profile optimization with regular posts and engagement",
      "Integrated approach combining SEO with paid search for immediate leads",
    ],
    results: "Within nine strategic SEO cycles, we completely reversed the downward trajectory, delivering a 60 percentage point swing from -28% to +32% year-over-year session growth. We secured multiple #1 and #2 rankings for high-intent local photography keywords.",
    resultDetails: [
      "+32% year-over-year session growth by December 2025",
      "+31% engaged session growth",
      "+10% lift in engagement rate",
      "60 percentage point performance swing (from -28% to +32%)",
      "Multiple #1 and #2 rankings for high-intent local keywords",
      "Strong rankings across multiple service areas in South Central Florida",
      "September marked first positive YoY growth at +19%",
      "+82% growth in October, +26% in November, +32% in December",
    ],
    roiImpact: {
      headline: "Lead Quality & ROI Impact",
      details: [
        "At a 5% lead conversion rate, organic traffic yields 20–35 qualified leads monthly",
        "With a 30% close rate, results in 6–11 new bookings monthly",
        "Average booking value of $1,200–$2,000 per photography session",
        "Translates to $7,200–$22,000 in monthly revenue potential",
        "For just $1,538/month in SEO spend — a 5x to 14x return on investment",
      ],
      metrics: {
        qualifiedLeads: "20-35 (est.)",
        newBookings: "6-11",
        avgBookingValue: "$1,200-$2,000",
        monthlyRevenue: "$7.2K-$22K",
        seoSpend: "$1,538/mo",
        roiRange: "5-14x",
      },
    },
    timeline: "April 2025 to December 2025 (9 SEO Cycles)",
    heroImage: floridaPhotographyHero,
    growthChart: floridaPhotographyGrowthChart,
    pdfDownload: "/case-studies/florida-photography-seo.pdf",
    narrationText: floridaPhotographyNarration,
  },
  "tourist-vehicle-rentals-seo": {
    slug: "tourist-vehicle-rentals-seo",
    client: "Florida Tourist Rental Partner",
    industry: "Tourist Vehicle Rentals",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "Local SEO Turnaround for a Tourist Vehicle Rental Company",
    heroMetric: {
      value: "+531%",
      label: "Organic New User Growth",
    },
    secondaryMetrics: [
      { value: "+112%", label: "Total Users" },
      { value: "+28%", label: "Engagement Rate" },
      { value: "9", label: "SEO Cycles" },
      { value: "5x+", label: "ROI Range" },
    ],
    challenge: "A tourist vehicle rental company partnered with our agency partner in April 2025 after several months of declining organic visibility. The client had previously worked with another SEO provider whose strategy relied heavily on a private blog network (PBN) with exact-match anchor text backlinks and a visible footprint.",
    challengeDetails: [
      "Previous SEO provider used risky private blog network (PBN) tactics with exact-match anchor text",
      "May 2025 PBN dismantling caused sharp traffic drop",
      "Needed to detoxify harmful backlinks and stabilize rankings",
      "Established domain authority but high design quality website with limited content",
      "Required strategic timing of new website launch to minimize peak season disruption",
      "Multi-location strategy needed across tourist destinations",
    ],
    solution: "We stepped in to detoxify harmful backlinks and stabilize rankings through clean link-building and improved on-page execution. The agency partner also engaged in paid search advertising throughout the campaign — a strategic complement allowing paid media to generate leads while SEO builds organic equity.",
    solutionDetails: [
      "Month 1–2: On-page SEO audit & optimizations, structured and unstructured citation building",
      "Data aggregate submissions and GBP optimization (120%+ completeness)",
      "Reporting configuration & Link Whisper internal linking tool setup",
      "Month 2–3: Launch guest post outreach (2–3/month via partner network)",
      "Social media signal syndication and competitor backlink gap analysis",
      "Hyper-local citation expansion and GBP content updates",
      "Month 4+: Continued guest posting on DR40+ domains",
      "Regular GBP maintenance and photo updates",
      "Social posting and syndication with sustained citation strategy",
      "Strategic timing and execution of site relaunch",
    ],
    results: "Within nine SEO cycles from April to December 2025, we reversed the declining trajectory and built a foundation of clean SEO practices following the prior PBN-related penalty. By aligning local search strategy with technical precision and multi-location coverage, this tourist rental business is now positioned to scale in 2026.",
    resultDetails: [
      "+531% dramatic increase in new users discovering the business",
      "+112% increase in total users (December 2025 vs. January 2026)",
      "+28% improvement in engagement rate",
      "+79% increase in average engagement time",
      "+108% increase in event count",
      "Detoxification of harmful PBN backlinks",
      "#1 rankings for '{city} golf cart rental' and related terms",
      "#1 for '{city} rentals golf cart' and 'golf cart rental {city} {state}'",
      "Top 3 rankings for 'rent golf carts {city}' and 'luxury golf cart rental near me'",
      "Local Pack & Finder dominance across multiple locations",
    ],
    roiImpact: {
      headline: "Lead Quality & ROI Impact",
      details: [
        "Organic search now drives 93% of all traffic",
        "Over $6,440 in direct purchase revenue tracked within period",
        "508 key events recorded from organic traffic",
        "Google organic alone delivered 1,313 users (100% YoY growth)",
        "For $1,318/month in SEO spend — a 5x+ return on investment",
        "Strong foundation established for continued 2026 growth",
      ],
      metrics: {
        totalUsers: "1,406",
        newUsers: "1,313",
        engagementRate: "69.86%",
        purchaseRevenue: "$6,440+",
        monthlyRevenue: "$6.4K+",
        seoSpend: "$1,318/mo",
        roiRange: "5x+",
      },
    },
    timeline: "April 2025 to December 2025 (9 SEO Cycles)",
    heroImage: touristVehicleRentalsHero,
    growthChart: touristVehicleRentalsGrowthChart,
    pdfDownload: "/case-studies/tourist-vehicle-rentals-seo.pdf",
    narrationText: touristVehicleRentalsNarration,
  },
  "custom-home-builder-seo": {
    slug: "custom-home-builder-seo",
    client: "Florida Custom Home Builder Partner",
    industry: "Custom Home Building",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "SEO Growth for Custom Home Builder in Tampa Bay",
    heroMetric: {
      value: "+85%",
      label: "Organic Traffic Growth",
    },
    secondaryMetrics: [
      { value: "2,149", label: "Monthly Sessions" },
      { value: "11", label: "#1 Rankings" },
      { value: "8", label: "SEO Cycles" },
      { value: "200x+", label: "ROI Range" },
    ],
    challenge: "A high-end custom home builder based in Florida partnered with our agency partner in May 2025 to improve non-branded organic visibility. Despite having a strong brand and local awareness, their organic performance was significantly under-leveraged. They had no homepage content, limited internal linking, and little-to-no supporting content on-site.",
    challengeDetails: [
      "No homepage content (still true today)",
      "Limited ability to publish blog content or build internal page structures",
      "Client had aesthetic and simplicity requirements, preferring a minimal, design-forward website",
      "Ultra-competitive Tampa Bay luxury home building market with high-value transactional keywords",
      "No accurate analytics data available prior to May 2025",
      "Design constraints limited typical on-page optimization opportunities",
    ],
    solution: "The SEO strategy focused heavily on off-page work and technical adjustments, as well as GBP optimization. Our execution approach was built around a phased SEO structure to maximize results within the client's design constraints.",
    solutionDetails: [
      "Full on-page audit and optimization, including technical SEO and internal linking strategy (manual + plugin-assisted)",
      "Submission to structured and unstructured citation directories",
      "Setup of data aggregators to ensure NAP consistency across platforms",
      "Google Business Profile enhancements to improve Local Pack visibility",
      "Performance reporting infrastructure setup in foundational phase",
      "Continued GBP optimization ensuring presence in top 3 local listings",
      "Guest post outreach and link insertions with high-relevance DR40+ partners",
      "Backlink gap analysis to identify and close gaps with top competitors",
      "Social signal syndication via branded channels",
      "Ongoing monitoring and refinement of internal linking structure",
    ],
    results: "The campaign delivered remarkable results within 8 months. Organic sessions increased by 85% with no new blog content or page publications required. Traffic remained highly transactional in nature with strong upward momentum despite no content publication.",
    resultDetails: [
      "85% increase in organic sessions (1,161 to 2,149) in 8 months",
      "Peak performance of 2,375 sessions in September (+94% from May)",
      "11 #1 rankings across desktop, mobile, and local search",
      "9 #2 rankings for competitive terms",
      "Growth achieved with no new blog content or page publications",
      "#1 for 'luxury custom home builders' (Desktop & Mobile)",
      "#1 for 'new homes for sale {city} FL' (Local)",
      "#1 for 'home builders in {city} FL' (Mobile)",
      "#1 for 'new home builders' (Desktop, Mobile, Local Pack)",
      "#1 for 'new home construction company' (Desktop, Mobile, Local Pack)",
      "#1 for 'custom home building process' (Local)",
      "#1 for 'custom build homes' (Bing)",
    ],
    roiImpact: {
      headline: "Market Context & Revenue Impact",
      details: [
        "Tampa Bay custom home builds range from $300,000 to over $1 million",
        "High-end luxury custom homes can exceed $1 million with land and finishes",
        "Average construction cost of $150/sq ft with significant project complexity",
        "Each organic lead represents substantial lifetime value",
        "Rankings align with significant transactional intent and revenue potential",
        "For just $1,318/month in SEO spend — a 200x+ return on a single conversion",
      ],
      metrics: {
        monthlyTraffic: "2,149",
        peakTraffic: "2,375 (Sept)",
        trafficGrowth: "+85%",
        projectValue: "$300K-$1M+",
        monthlyRevenue: "$300K-$1M+/project",
        seoSpend: "$1,318/mo",
        roiRange: "200x+",
      },
    },
    timeline: "May 2025 to December 2025 (8 SEO Cycles)",
    heroImage: customHomeBuilderHero,
    growthChart: customHomeBuilderGrowthChart,
    pdfDownload: "/case-studies/custom-home-builder-seo.pdf",
    narrationText: customHomeBuilderNarration,
    noContentBadge: true,
  },
  "auction-house-seo": {
    slug: "auction-house-seo",
    client: "Tampa Bay Auction Partner",
    industry: "Auction House",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "Local SEO Dominance for a Multi-Category Auction House",
    heroMetric: {
      value: "+68%",
      label: "Organic Traffic Growth",
    },
    secondaryMetrics: [
      { value: "+64%", label: "Engaged Sessions" },
      { value: "~2yrs", label: "Partnership Duration" },
      { value: "Top 3", label: "Local Pack Rankings" },
      { value: "50x+", label: "ROI Range" },
    ],
    challenge: "Our agency partner engaged us to help a well-established auction house in the Tampa Bay area achieve dominant local search visibility across multiple high-value categories. The business offered diverse auction categories from fine art to firearms, requiring a sophisticated keyword strategy across multiple verticals while maintaining geographic precision in competitive Florida markets.",
    challengeDetails: [
      "Multi-category auction business spanning fine art, coins, jewelry, watches, and collectibles",
      "Competitive Tampa Bay and Clearwater local markets",
      "Required geographic precision across multiple Florida locations",
      "Seasonal demand fluctuations requiring strategic timing",
      "Category-specific keyword complexity across diverse product lines",
      "Need for dominant Local Pack visibility in addition to organic rankings",
    ],
    solution: "We developed a comprehensive local SEO strategy combining technical excellence with geographic precision. Our approach focused on category-specific optimization while preparing for seasonal demand peaks to maximize visibility during critical revenue periods.",
    solutionDetails: [
      "Full structured data and schema markup implementation",
      "Google Business Profile optimization for Tampa Bay and Clearwater markets",
      "Category-specific keyword mapping across all major auction verticals",
      "Strategic seasonal optimization for peak auction periods",
      "Local citation building and geographic targeting",
      "Technical foundation improvements including site architecture optimization",
      "Multi-location visibility strategy for broader Florida reach",
      "High-quality engagement metric optimization",
    ],
    results: "The nearly two-year engagement delivered exceptional results with 68% total session growth and 64% engaged session increase. The auction house achieved dominant local rankings across all major category keywords and geographic targets, with peak seasonal months showing nearly triple year-over-year traffic.",
    resultDetails: [
      "+68% year-over-year increase in total sessions",
      "+64% growth in high-quality engaged sessions",
      "Peak months showing nearly 3x previous year's traffic",
      "Position 3 for 'Tampa Auction House' in Maps + Organic",
      "Top 3 in Google Maps for 'Clearwater Auction'",
      "Position 2 for 'State Auctions in Florida' in organic search",
      "Page 1 visibility for coin auction city-specific searches",
      "Page 1 visibility for fine art auction queries",
      "Dominant seasonal performance during peak summer months",
    ],
    roiImpact: {
      headline: "Sustainable Growth & Revenue Impact",
      details: [
        "Auction activity surged during summer months with nearly triple traffic",
        "Organic search became dominant acquisition source at 89.58% of traffic",
        "High engagement rates indicating qualified auction bidders",
        "Dominant Local Pack visibility drives in-person auction attendance",
        "Category-specific rankings capture high-intent buyers across all verticals",
        "Two-year partnership demonstrates sustainable, compounding results",
      ],
      metrics: {
        monthlyTraffic: "3,000+",
        organicShare: "89.58%",
        trafficGrowth: "+68%",
        engagementGrowth: "+64%",
        monthlyRevenue: "$50K-$150K/mo",
        seoSpend: "$950/mo",
        roiRange: "50x+",
      },
    },
    timeline: "2022 to 2024 (~2 Years, 24 SEO Cycles)",
    heroImage: auctionHouseHero,
    pdfDownload: "/case-studies/auction-house-seo.pdf",
    narrationText: auctionHouseNarration,
  },
  "dallas-plumbing-seo": {
    slug: "dallas-plumbing-seo",
    client: "Dallas Plumbing",
    industry: "Plumbing/Home Services",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "Rapid SEO Growth for Dallas Plumbing Company",
    heroMetric: {
      value: "70",
      label: "Keywords Tracked (Jan 2026)",
    },
    secondaryMetrics: [
      { value: "2", label: "#1 Rankings" },
      { value: "20+", label: "Top 10 Keywords" },
      { value: "50+", label: "First Page Keywords" },
      { value: "High", label: "ROI" },
    ],
    challenge: "A Dallas-based plumbing company with a solid domain history had hit a plateau — organic traffic stagnated and visibility was buried behind competitors in one of the most competitive metro markets in Texas.",
    challengeDetails: [
      "Organic traffic had plateaued despite solid domain history",
      "Visibility buried behind established competitors in Dallas-Fort Worth",
      "High-value service keywords dominated by larger players",
      "Competitive market requiring strategic keyword prioritization",
      "Needed comprehensive technical, on-page, and off-page strategy",
      "Required focus on high-profitability services for maximum ROI",
    ],
    solution: "We began with a detailed foundational audit and SEO Roadmap — a comprehensive one-time analysis that led to a 6-month SEO commitment. Our strategy prioritized high-profitability services and applied hub-and-spoke methodology with topically relevant content clusters.",
    solutionDetails: [
      "Full site audit covering technical, visual, and on-page elements",
      "Competitor keyword and backlink gap analysis",
      "Historical URL redirect map and backlink recovery",
      "Guest post scripting, prospecting, and outreach",
      "Disavow toxic backlinks and link detox",
      "On-Page SEO: Schema, keyword-mapped metas, internal linking, sitemap cleanup",
      "Off-Page SEO: Structured & unstructured citations, brand mentions, backlink gap wins",
      "Content: Monthly PowerPosts and service page optimization",
      "Local SEO: GBP maintenance with 15+ posts monthly, competitive benchmarking",
      "Hub-and-spoke methodology with Core30 Strategy implementation",
      "Compact Keyword Strategy: One keyword per page for topical focus",
    ],
    results: "70 keywords now tracked with strong rankings across high-value plumbing services. Multiple #1 rankings secured for hydrojetting terms, with 20+ keywords in Top 10 and 50+ on Page 1.",
    resultDetails: [
      "70 keywords tracked with majority on Page 1",
      "#1 for 'hydro jetting services' (▲26 from Sep)",
      "#1 for 'hydro jetting service' (▲30 from Sep)",
      "#2 for 'drainage cleaning services' (▲18 from Sep)",
      "#3 for 'hydro jetting services near me' (▲37 from Sep)",
      "#4 for 'plumbing services in dallas tx' (▲96 from Sep)",
      "#4 for 'emergency plumbing services' (6.6K search vol, ▲96 from Sep)",
      "#4 for 'water heater servicing near me' (290 search vol)",
      "#5 for 'water heater repair dallas tx' (320 search vol)",
      "#5 for 'plumbing leak detection services' (260 search vol)",
      "#6 for 'emergency plumbing service' (360 search vol, ▲94 from Sep)",
      "#6 for 'plumbing services dallas' (▲61 from Sep)",
      "#7 for 'best plumbers in dallas texas' (210 search vol, ▲30 from Sep)",
      "#7 for 'drain cleaning in dallas' (▲93 from Sep)",
    ],
    roiImpact: {
      headline: "Ranking Velocity & Revenue Impact",
      details: [
        "70 keywords tracked with majority ranking on Page 1",
        "Dominant rankings for high-profitability services: hydrojetting, emergency plumbing, water heater",
        "#1 rankings for hydrojetting terms with significant position gains",
        "Multiple keywords with massive gains (▲90+ positions from September)",
        "High-volume keywords like 'emergency plumbing services' (6.6K searches) now in Top 5",
        "Strong foundation for continued growth in competitive Dallas market",
      ],
      metrics: {
        keywordsTracked: "70",
        position1Rankings: "2",
        top10Keywords: "20+",
        firstPageKeywords: "50+",
        monthlyRevenue: "$50K+ (est.)",
        roiRange: "High",
      },
    },
    timeline: "July 2025 to Present (Ongoing Engagement)",
    heroImage: dallasPlumbingHero,
    growthChart: dallasPlumbingGrowthChart,
    pdfDownload: "/case-studies/dallas-plumbing-seo.pdf",
    narrationText: dallasPlumbingNarration,
  },
  "las-vegas-plumbing-seo": {
    slug: "las-vegas-plumbing-seo",
    client: "Las Vegas Plumbing & HVAC",
    industry: "Plumbing & HVAC",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development", "Authority", "Customized Reporting"],
    headline: "SEO Recovery for Las Vegas Plumbing & HVAC Company",
    heroMetric: {
      value: "57pt",
      label: "Performance Turnaround (-54% → +3% YoY Organic Traffic)",
    },
    secondaryMetrics: [
      { value: "65", label: "Keywords Tracked" },
      { value: "10+", label: "#1 Rankings" },
      { value: "15+", label: "#2 Rankings" },
      { value: "25x+", label: "ROI Range" },
    ],
    challenge: "This Las Vegas-based plumbing and HVAC company had experienced long-term year-over-year declines due to tracking issues, prior mismanagement from agency transitions (RYNO → Blue Corona), and no structured SEO foundation. Previous campaigns became lost in the shuffle with limited progress.",
    challengeDetails: [
      "Multi-year year-over-year organic traffic decline (-54% at worst)",
      "Previous agency transitions led to inconsistent strategy and poor communication",
      "Missing GA4 filters and fragmented performance tracking",
      "Lost historical redirects causing traffic leakage",
      "Low-quality backlinks from prior campaigns requiring detox",
      "No structured SEO methodology or keyword strategy in place",
    ],
    solution: "We delivered a comprehensive SEO Roadmap in July 2025, then launched a structured multi-phase campaign in August 2025 focused on on-page repairs, safe off-page link building, and a Hub-and-Spoke content strategy. Within 5 months, we reversed the negative trend entirely.",
    solutionDetails: [
      "July 2025 Roadmap: Full visual, on-page, and technical audit",
      "Competitor backlink gap analysis and link detox/disavow",
      "Historical URL redirect mapping and recovery",
      "Keyword clustering and mapping with schema recommendations",
      "Phase 1 Foundation: Structured & unstructured citation cleanup",
      "On-page optimization and schema deployment across all service pages",
      "GSC indexing and sitemap cleanup, GA4 event setup",
      "GBP optimization with our proprietary 120% methodology",
      "Phase 2+: Monthly guest posts on safe, niche-relevant domains",
      "GBP posting and QA updates, mixed-link campaigns",
      "Hub-and-Spoke content methodology with Core30 and Compact Keyword frameworks",
    ],
    results: "From -54% YoY decline in February 2025 to +3% YoY growth in December 2025 — a complete 57 percentage point swing reversing multi-year negative trends in just 10 months. 65 keywords now tracked, with strong rankings across plumbing, HVAC, and specialty services.",
    resultDetails: [
      "57 percentage point performance swing (-54% to +3% YoY)",
      "First positive YoY growth achieved by December 2025",
      "65 keywords tracked with majority in Top 7 positions",
      "#1 for 'plumbing and hvac services'",
      "#1 for 'plumbing fixture replacement'",
      "#1 for 'duct insulation contractors near me'",
      "#1 for 'duct insulation companies near me'",
      "#1 for 'tankless water heater solutions'",
      "#1 for 'new water heater installation services'",
      "#2 for 'water line repair las vegas' (▲15 from Sep)",
      "#2 for 'air duct repair las vegas' (▲8 from Sep)",
      "#2 for 'heater repair near me' (▲8 from Sep)",
      "#2 for 'plumbing leak detection'",
      "#2 for 'general plumbing services'",
      "#5 for 'plumbing las vegas' (4.4K search vol)",
    ],
    roiImpact: {
      headline: "Recovery Trajectory & Revenue Impact",
      details: [
        "Complete reversal of multi-year decline trajectory within 5 months of execution",
        "Strategic focus on high-profit services: water heaters, HVAC, plumbing",
        "10+ #1 rankings and 15+ #2 rankings for high-conversion service terms",
        "65 keywords tracked with majority ranking in Top 7 positions",
        "December 2025: $40K year-over-year revenue growth attributable to organic",
        "Strong ROI from focused SEO execution",
      ],
      metrics: {
        keywordsTracked: "65",
        position1Rankings: "10+",
        position2Rankings: "15+",
        performanceSwing: "57pt",
        monthlyRevenue: "$40K+",
        roiRange: "High",
      },
    },
    timeline: "August 2025 to Present (5+ SEO Cycles)",
    heroImage: lasVegasPlumbingHero,
    growthChart: lasVegasPlumbingGrowthChart,
    pdfDownload: "/case-studies/las-vegas-plumbing-seo.pdf",
    narrationText: lasVegasPlumbingNarration,
    relationshipType: "direct",
  },
};

// Helper to get narration text
export const getCaseStudyNarration = (slug: string): string | undefined => {
  return caseStudyFullContent[slug]?.narrationText;
};
