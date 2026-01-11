import { CaseStudy } from "@/pages/CaseStudies";
import { CaseStudyContent } from "@/pages/CaseStudyDetail";

// Thumbnail images
import recreationalBoatingHero from "@/assets/case-studies/recreational-boating-hero.jpg";
import barnRestorationHero from "@/assets/case-studies/barn-restoration-hero.jpg";
import floridaPhotographyHero from "@/assets/case-studies/florida-photography-hero.jpg";

// ============ CASE STUDY CARDS (for landing page) ============
export const caseStudyCards: CaseStudy[] = [
  {
    slug: "recreational-boating-seo",
    client: "Florida Marina Partner",
    industry: "Recreational Boating",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Technical SEO"],
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
      monthlyRevenue: "$32K-$96K",
      roiRange: "33-100x",
      seoSpend: "$950/mo",
    },
    challenge: "New website launch with zero organic foundation, needing to establish visibility across four geographic locations in a competitive marine industry.",
    thumbnail: recreationalBoatingHero,
  },
  {
    slug: "barn-restoration-seo",
    client: "Northeast Barn Restoration Partner",
    industry: "Barn Restoration",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development"],
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
      monthlyRevenue: "$25K-$50K",
      roiRange: "33-66x",
      seoSpend: "$750/mo",
    },
    challenge: "Barn restoration company in the Northeast market with limited organic visibility, competing for local search terms against general contractors.",
    thumbnail: barnRestorationHero,
  },
  {
    slug: "florida-photography-seo",
    client: "South Florida Photography Partner",
    industry: "Photography",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Technical SEO"],
    headline: "Local SEO Turnaround for a South Florida Photography Business",
    heroMetric: {
      value: "60pt",
      label: "Performance Turnaround",
    },
    secondaryMetrics: [
      { value: "-28% → +32%", label: "YoY Swing" },
      { value: "9", label: "SEO Cycles" },
    ],
    roiHighlight: {
      monthlyRevenue: "$4.5K-$10K",
      roiRange: "3-6.5x",
      seoSpend: "$1,538/mo",
    },
    challenge: "Reversed severe organic decline from risky PBN tactics — a complete SEO turnaround from -28% to +32% YoY in just 9 months.",
    thumbnail: floridaPhotographyHero,
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

As of the latest reporting, the site achieved #1 rankings for multiple local and service keywords, including 'Barn remodel [state]' and 'Old barn repair [state]' terms across the Northeast, 'Barn restoration companies near me', 'Pole barn repair contractors near me', and 'Barn roof repair near me'. Visibility spanned across organic desktop (Top 3 across 12+ terms), mobile and local pack (Top 2 for most service queries). Full-year organic performance showed 4,512 sessions (up 496.8%), 4,074 Google Organic sessions (up 522%), and significant growth across Bing and DuckDuckGo as well.
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

With an average SEO investment of $1,538 per month, the client is now positioned to generate 25–50 organic leads monthly. Assuming a modest conversion rate of 5–10%, this results in 1–5 new bookings monthly. At an average booking value of $1,200–$2,000, this translates to $4,500–$10,000 in monthly revenue, for a projected 3x–6.5x return on investment.
`;

// ============ FULL CASE STUDY CONTENT (for detail pages) ============
export const caseStudyFullContent: Record<string, CaseStudyContent> = {
  "recreational-boating-seo": {
    slug: "recreational-boating-seo",
    client: "Florida Marina Partner",
    industry: "Recreational Boating",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Technical SEO", "Content Development"],
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
    pdfDownload: "/case-studies/recreational-boating-seo.pdf",
    narrationText: recreationalBoatingNarration,
  },
  "barn-restoration-seo": {
    slug: "barn-restoration-seo",
    client: "Northeast Barn Restoration Partner",
    industry: "Barn Restoration",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Content Development"],
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
    pdfDownload: "/case-studies/barn-restoration-seo.pdf",
    narrationText: barnRestorationNarration,
  },
  "florida-photography-seo": {
    slug: "florida-photography-seo",
    client: "South Florida Photography Partner",
    industry: "Photography",
    services: ["Local SEO", "GBP Optimization", "Link Building", "Technical SEO", "Citation Building"],
    headline: "Local SEO Turnaround for a South Florida Photography Business",
    heroMetric: {
      value: "+32%",
      label: "Year-over-Year Session Growth",
    },
    secondaryMetrics: [
      { value: "+31%", label: "Engaged Sessions" },
      { value: "9", label: "SEO Cycles" },
      { value: "60pt", label: "Performance Swing" },
      { value: "3-6.5x", label: "ROI Range" },
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
        "Client positioned to generate 25–50 organic leads per month",
        "Assuming 5–10% conversion rate, results in 1–5 new bookings monthly",
        "Average booking value of $1,200–$2,000 per photography session",
        "Translates to $4,500–$10,000 in monthly revenue",
        "For just $1,538/month in SEO spend — a 3x to 6.5x return on investment",
        "Gains driven by consistent visibility improvements and GMB engagement",
      ],
      metrics: {
        monthlyLeads: "25-50",
        conversionRate: "5-10%",
        newBookings: "1-5",
        avgBookingValue: "$1,200-$2,000",
        monthlyRevenue: "$4.5K-$10K",
        seoSpend: "$1,538/mo",
        roiRange: "3-6.5x",
      },
    },
    timeline: "April 2025 to December 2025 (9 SEO Cycles)",
    heroImage: floridaPhotographyHero,
    pdfDownload: "/case-studies/florida-photography-seo.pdf",
    narrationText: floridaPhotographyNarration,
  },
};

// Helper to get narration text
export const getCaseStudyNarration = (slug: string): string | undefined => {
  return caseStudyFullContent[slug]?.narrationText;
};
