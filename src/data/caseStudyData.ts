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
    slug: "hvac-plumbing-seo",
    client: "Midwest HVAC & Plumbing Partner",
    industry: "Home Services",
    services: ["Local SEO", "GBP Optimization", "Review Management", "Content Development"],
    headline: "Dominating Local Search for a Multi-Location Home Services Provider",
    heroMetric: {
      value: "312%",
      label: "Organic Lead Growth",
    },
    secondaryMetrics: [
      { value: "47", label: "Page 1 Keywords" },
      { value: "6", label: "Service Areas" },
    ],
    roiHighlight: {
      monthlyRevenue: "$45K-$72K",
      roiRange: "25-40x",
      seoSpend: "$1,800/mo",
    },
    challenge: "Established business struggling with inconsistent online presence across six service areas, losing market share to aggressive local competitors with stronger digital footprints.",
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

const hvacPlumbingNarration = `
Dominating Local Search for a Multi-Location Home Services Provider.

In February 2025, we partnered with an agency serving a well-established HVAC and plumbing company in the Midwest. Despite 15 years in business and excellent service quality, they were losing ground to competitors with stronger digital presences. Over 10 SEO cycles, we delivered a complete transformation that resulted in 312% organic lead growth.

The Challenge.

The client faced multiple obstacles: inconsistent business information across more than 40 citations, six service areas with competing Google Business Profiles, low review volume averaging just 12 reviews per location compared to competitors with 50 or more, an outdated website with poor mobile experience, and no structured data implementation causing missed rich snippet opportunities.

Our Approach.

We executed a comprehensive local SEO overhaul beginning with NAP consistency remediation across all business directories. Our team created six location-specific landing pages with unique content and local schema markup, launched automated review generation campaigns, and optimized all Google Business Profiles using our proprietary 120% methodology. We also rebuilt service pages to eliminate keyword cannibalization and improved Core Web Vitals scores from 45 to 92 on mobile.

The Results.

Within 10 months, the transformation was remarkable. The client moved from page 2 and 3 rankings to dominant page 1 positions for high-intent service keywords. Review count increased from 72 total to over 340 across all locations, with average star rating improving from 4.2 to 4.8 stars. Organic traffic grew 267% year-over-year.

Lead Quality and ROI Impact.

Organic and local pack traffic now generates over 85 qualified leads per month. With an average job value ranging from $1,200 for repairs to $8,500 for installations, and a 35% conversion rate from lead to booked appointment, monthly revenue attribution from organic channels reaches $45,000 to $72,000. For an SEO investment of $1,800 per month, that delivers a 25 to 40 times return on investment. Emergency service calls, which carry the highest margins, increased 156% from improved local pack visibility.
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
  "hvac-plumbing-seo": {
    slug: "hvac-plumbing-seo",
    client: "Midwest HVAC & Plumbing Partner",
    industry: "Home Services",
    services: ["Local SEO", "GBP Optimization", "Review Management", "Content Development", "Technical SEO"],
    headline: "Dominating Local Search for a Multi-Location Home Services Provider",
    heroMetric: {
      value: "312%",
      label: "Organic Lead Growth",
    },
    secondaryMetrics: [
      { value: "47", label: "Page 1 Keywords" },
      { value: "6", label: "Service Areas" },
      { value: "4.8★", label: "Avg. Review Rating" },
      { value: "25-40x", label: "ROI Range" },
    ],
    challenge: "Our agency partner brought us a well-established HVAC and plumbing company that had been in business for 15 years but was losing ground to competitors with stronger digital presences. Despite excellent service quality and customer satisfaction, their online visibility was fragmented and inconsistent.",
    challengeDetails: [
      "Inconsistent NAP (Name, Address, Phone) data across 40+ citations",
      "Six service area locations with competing Google Business Profiles",
      "Low review volume (avg. 12 reviews per location) compared to competitors (50+)",
      "Outdated website with poor mobile experience and slow load times",
      "No structured data or schema markup implementation",
      "Keyword cannibalization between service pages",
    ],
    solution: "We executed a comprehensive local SEO overhaul starting with NAP consistency remediation across all citations. Our team restructured the website's service pages to eliminate cannibalization, implemented location-specific landing pages, and launched an aggressive review generation campaign that transformed their online reputation.",
    solutionDetails: [
      "Audited and corrected NAP data across 40+ business directories and citations",
      "Created 6 location-specific landing pages with unique content and local schema markup",
      "Implemented LocalBusiness and Service schema across all relevant pages",
      "Launched automated review request campaigns via SMS and email post-service",
      "Optimized all 6 Google Business Profiles with our 120% methodology",
      "Rebuilt service pages with proper keyword targeting and internal linking",
      "Improved Core Web Vitals scores from 45 to 92 (mobile)",
      "Established monthly content calendar focusing on seasonal HVAC topics",
    ],
    results: "Within 10 months, the client experienced a complete transformation in local search visibility. They moved from page 2-3 rankings to dominant page 1 positions for high-intent service keywords, while their review profile became a significant competitive advantage.",
    resultDetails: [
      "312% increase in organic leads (form submissions + phone calls)",
      "47 keywords now ranking on page 1 (up from 8)",
      "Review count increased from 72 total to 340+ across all locations",
      "Average star rating improved from 4.2 to 4.8 stars",
      "Organic traffic increased 267% year-over-year",
      "Local pack visibility for 'emergency' keywords in all 6 service areas",
      "Bounce rate decreased 34% with improved site speed",
    ],
    roiImpact: {
      headline: "Lead Quality & ROI Impact",
      details: [
        "Organic and local pack traffic now generates 85+ qualified leads per month",
        "Average job value of $1,200 for repairs, $8,500 for installations",
        "Conversion rate of 35% from lead to booked appointment",
        "Monthly revenue attribution of $45,000–$72,000 from organic channels",
        "SEO investment of $1,800/month delivers 25–40x return",
        "Emergency service calls (highest margin) up 156% from local pack visibility",
      ],
      metrics: {
        monthlyActions: "85+",
        qualifiedLeads: "60-75",
        avgJobValue: "$1,200-$8,500",
        conversionRate: "35%",
        monthlyRevenue: "$45K-$72K",
        seoSpend: "$1,800/mo",
        roiRange: "25-40x",
      },
    },
    timeline: "February 2025 to Present (10 SEO Cycles)",
    narrationText: hvacPlumbingNarration,
  },
};

// Helper to get narration text
export const getCaseStudyNarration = (slug: string): string | undefined => {
  return caseStudyFullContent[slug]?.narrationText;
};
