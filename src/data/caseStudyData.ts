import { CaseStudy } from "@/pages/CaseStudies";
import { CaseStudyContent } from "@/pages/CaseStudyDetail";

// Thumbnail images
import recreationalBoatingChart from "@/assets/case-studies/recreational-boating-growth-chart.jpg";

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
    client: "Heritage Barn Restoration Partner",
    industry: "Barn Restoration",
    services: ["Local SEO", "GBP Optimization", "Content Development", "Link Building"],
    headline: "Building Organic Authority for a Specialty Barn Restoration Company",
    heroMetric: {
      value: "278%",
      label: "Organic Lead Growth",
    },
    secondaryMetrics: [
      { value: "32", label: "Page 1 Keywords" },
      { value: "5", label: "State Coverage" },
    ],
    roiHighlight: {
      monthlyRevenue: "$85K-$140K",
      roiRange: "45-75x",
      seoSpend: "$1,900/mo",
    },
    challenge: "Niche restoration company with exceptional craftsmanship but minimal online presence, competing against general contractors for high-value barn and historic structure projects.",
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
Building Organic Authority for a Specialty Barn Restoration Company.

In March 2025, we began working with an agency partner serving a specialty barn restoration company in the Midwest. This family-owned business had built an exceptional reputation through word-of-mouth over 25 years, but their online presence didn't reflect their craftsmanship or expertise. Over 9 SEO cycles, we delivered 278% organic lead growth and positioned them as the go-to authority in their niche.

The Challenge.

The client faced unique obstacles in a highly specialized market: virtually no online presence despite 25 years in business, competing against general contractors with larger marketing budgets, a niche service category with limited search volume requiring strategic keyword targeting, no existing content showcasing their portfolio of over 200 completed barn restorations, and serving a five-state region requiring broad geographic targeting.

Our Approach.

We developed a content-first strategy that showcased their expertise and portfolio. Our team created in-depth service pages for each restoration type, including timber frame repair, foundation work, and historic preservation. We built location pages targeting rural communities across five states, implemented before-and-after gallery schema for rich snippets, and launched a strategic link building campaign targeting agricultural and historic preservation publications.

The Results.

The transformation established them as the dominant online authority in barn restoration. They achieved first-page rankings for nearly every relevant keyword in their service area, with organic traffic growing 245% year-over-year. Their content now ranks for informational queries that capture prospects early in the research phase.

Lead Quality and ROI Impact.

Organic traffic now generates 25 to 35 highly qualified leads per month, with average project values ranging from $45,000 for repairs to $180,000 for full restorations. With a 40% close rate on qualified leads, monthly revenue attribution from organic channels reaches $85,000 to $140,000. For an SEO investment of $1,900 per month, that delivers a 45 to 75 times return on investment.
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
    client: "Heritage Barn Restoration Partner",
    industry: "Barn Restoration",
    services: ["Local SEO", "GBP Optimization", "Content Development", "Link Building", "Technical SEO"],
    headline: "Building Organic Authority for a Specialty Barn Restoration Company",
    heroMetric: {
      value: "278%",
      label: "Organic Lead Growth",
    },
    secondaryMetrics: [
      { value: "32", label: "Page 1 Keywords" },
      { value: "5", label: "State Coverage" },
      { value: "245%", label: "Traffic Growth YoY" },
      { value: "45-75x", label: "ROI Range" },
    ],
    challenge: "Our agency partner brought us a family-owned barn restoration company with 25 years of exceptional craftsmanship but virtually no online presence. Despite completing over 200 restorations, they were losing projects to general contractors with stronger digital marketing.",
    challengeDetails: [
      "Virtually no online presence despite 25 years in business and 200+ completed projects",
      "Competing against general contractors with larger marketing budgets",
      "Niche service category with limited but high-intent search volume",
      "No existing content showcasing their extensive portfolio of restorations",
      "Five-state service region requiring broad geographic targeting",
      "High-value projects ($45K-$180K) with long sales cycles requiring trust-building content",
    ],
    solution: "We developed a content-first strategy that showcased their expertise and extensive portfolio. Our approach focused on establishing topical authority in barn restoration through comprehensive service content, strategic location targeting, and authoritative link building from agricultural and preservation publications.",
    solutionDetails: [
      "Created in-depth service pages for each restoration type: timber frame repair, foundation work, roof restoration, and historic preservation",
      "Built location pages targeting rural communities and counties across five states",
      "Implemented before-and-after gallery with proper image schema for rich snippets",
      "Developed a content hub with educational articles on barn preservation, timber frame construction, and historic tax credits",
      "Launched link building campaign targeting agricultural publications, historic preservation societies, and rural lifestyle blogs",
      "Optimized Google Business Profile with project photos, service categories, and review generation",
      "Created video content showcasing restoration processes for YouTube and website embedding",
    ],
    results: "Within 9 months, we established them as the dominant online authority in barn restoration across their five-state region. They achieved first-page rankings for nearly every relevant keyword, with organic traffic growing 245% year-over-year and lead quality dramatically improving.",
    resultDetails: [
      "278% increase in organic leads (form submissions + phone calls)",
      "32 keywords now ranking on page 1 (up from 3)",
      "245% organic traffic growth year-over-year",
      "Featured snippets captured for 8 informational queries",
      "Average lead value increased 40% as content attracted higher-budget projects",
      "Portfolio pages driving 35% of all organic conversions",
      "Reduced dependency on paid advertising by 60%",
    ],
    roiImpact: {
      headline: "Lead Quality & ROI Impact",
      details: [
        "Organic traffic now generates 25–35 highly qualified leads per month",
        "Average project value ranges from $45,000 for repairs to $180,000 for full restorations",
        "Close rate of 40% on qualified organic leads (vs. 15% on paid leads)",
        "Monthly revenue attribution of $85,000–$140,000 from organic channels",
        "SEO investment of $1,900/month delivers 45–75x return",
        "Educational content now captures prospects 6-12 months before project start",
      ],
      metrics: {
        monthlyLeads: "25-35",
        qualifiedLeads: "20-28",
        avgProjectValue: "$45K-$180K",
        closeRate: "40%",
        monthlyRevenue: "$85K-$140K",
        seoSpend: "$1,900/mo",
        roiRange: "45-75x",
      },
    },
    timeline: "March 2025 to Present (9 SEO Cycles)",
    narrationText: barnRestorationNarration,
  },
};

// Helper to get narration text
export const getCaseStudyNarration = (slug: string): string | undefined => {
  return caseStudyFullContent[slug]?.narrationText;
};
