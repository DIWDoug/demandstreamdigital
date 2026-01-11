import { CaseStudy } from "@/pages/CaseStudies";
import { CaseStudyContent } from "@/pages/CaseStudyDetail";

// Thumbnail images
import recreationalBoatingChart from "@/assets/case-studies/recreational-boating-growth-chart.jpg";
import barnRestorationChart from "@/assets/case-studies/barn-restoration-growth-chart.png";

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
    thumbnail: recreationalBoatingChart,
  },
  {
    slug: "barn-restoration-seo",
    client: "Northeast Barn Restoration Partner",
    industry: "Barn Restoration",
    services: ["Local SEO", "Technical SEO", "Citation Building", "Link Building"],
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
    challenge: "Barn restoration company in New York market with limited organic visibility, competing for local search terms against general contractors.",
    thumbnail: barnRestorationChart,
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

In collaboration with our agency partner, we launched an SEO campaign for a barn restoration company serving the New York market. Our engagement began prior to the busy fall season and focused on local keyword visibility, technical optimization, and citation/link building. Within five months, we drove a 478% increase in organic sessions, over 491% growth in Google traffic, and secured numerous #1 rankings for high-value local search terms.

The Challenge.

The agency partner engaged us as part of a larger marketing strategy that included paid social, website redesign, and local SEO. Our role was strictly SEO-focused, with our client success manager and team lead handling monthly reporting and strategy delivery via GPT-powered reports and video walkthroughs. The client needed local visibility in Google Search and Maps, topical authority around barn restoration services, and non-branded lead generation via organic channels.

Our Approach.

Our campaign launched mid-year and focused on keyword research and mapping across barn-related services, on-page optimization across core service pages including titles, headers, and internal links, technical audit and implementation covering sitemaps, schema, and speed improvements, setup of foundational structured and unstructured citations, GSC cleanup and indexing verification, and competitive SERP gap analysis with a roadmap for content support.

The Results.

As of September 2025, the site achieved #1 rankings for multiple local and service keywords, including 'Barn remodel New York', 'Old barn repair New York', 'Barn restoration companies New York', 'Pole barn repair contractors near me', and 'Barn roof repair near me'. Visibility spanned across organic desktop (Top 3 across 12+ terms), mobile and local pack (Top 2 for most service queries). Full-year organic performance from March to December 2025 versus 2024 showed 4,512 sessions (up 496.8%), 4,074 Google Organic sessions (up 522%), and significant growth across Bing and DuckDuckGo as well.
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
    heroImage: recreationalBoatingChart,
    pdfDownload: "/case-studies/recreational-boating-seo.pdf",
    narrationText: recreationalBoatingNarration,
  },
  "barn-restoration-seo": {
    slug: "barn-restoration-seo",
    client: "Northeast Barn Restoration Partner",
    industry: "Barn Restoration",
    services: ["Local SEO", "Technical SEO", "Citation Building", "Link Building", "On-Page SEO"],
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
    challenge: "Our agency partner engaged us as part of a larger marketing strategy that included paid social, website redesign, and local SEO. The client needed to establish local visibility in the competitive New York barn restoration market, build topical authority, and generate non-branded leads via organic channels.",
    challengeDetails: [
      "Limited organic visibility in a niche local market",
      "Competing against general contractors with broader marketing reach",
      "Need for local visibility in both Google Search and Maps",
      "Required topical authority around specialized barn restoration services",
      "Non-branded lead generation via organic channels as primary goal",
      "Coordination with paid advertising running alongside SEO efforts",
    ],
    solution: "We launched a focused local SEO campaign targeting the New York market, beginning prior to the busy fall season. Our approach combined local keyword optimization, technical SEO improvements, and strategic citation/link building to establish dominance in barn restoration search results.",
    solutionDetails: [
      "Keyword research and mapping across barn-related services",
      "On-page optimization across core service pages (titles, headers, internal links)",
      "Technical audit and implementation (sitemaps, schema, speed improvements)",
      "Setup of foundational structured and unstructured citations",
      "GSC cleanup and indexing verification",
      "Competitive SERP gap analysis and roadmap for content support",
      "Monthly reporting via GPT-powered reports and video walkthroughs",
    ],
    results: "Within 22 SEO cycles, we achieved extraordinary growth across all organic channels. The site now dominates local search results for barn restoration keywords in New York, with multiple #1 rankings secured for high-value local search terms.",
    resultDetails: [
      "478% year-over-year increase in organic sessions (October 2024 to October 2025)",
      "491% year-over-year traffic growth from Google search specifically",
      "522% growth in Google Organic sessions (655 to 4,074)",
      "#1 rankings for 'Barn remodel New York', 'Old barn repair New York', 'Barn restoration companies New York'",
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
        monthlyRevenue: "$25K-$50K",
        seoSpend: "$750/mo",
        roiRange: "33-66x",
      },
    },
    timeline: "May 2024 to Present (22 SEO Cycles)",
    heroImage: barnRestorationChart,
    narrationText: barnRestorationNarration,
  },
};

// Helper to get narration text
export const getCaseStudyNarration = (slug: string): string | undefined => {
  return caseStudyFullContent[slug]?.narrationText;
};
