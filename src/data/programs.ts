export type TierFeatureItem = string | { em: string; rest?: string };
export type TierGroup = { title: string; items: TierFeatureItem[] };

export type TierData = {
  slug: "source" | "current" | "surge";
  symbol: string;
  eyebrow: string;
  bestFor: string;
  name: string;
  tagline: string;
  monthlyPrice: string;
  adSpendCap: string;
  contentPerMo: string;
  goal: string;
  everythingIn?: string;
  groups: TierGroup[];
  fit: { yes: string[]; no: string[] };
  adManagementCopy: string;
  flagship?: boolean;
  seoTitle: string;
  seoDescription: string;
  canonical: string;
};

export const TIERS: TierData[] = [
  {
    slug: "source",
    symbol: "◇",
    eyebrow: "Foundation",
    bestFor: "1 to 5 truck operators building consistent local lead flow.",
    name: "Source",
    tagline:
      "Get found and capture every lead. The visibility foundation for plumbing & HVAC growth.",
    monthlyPrice: "$2,500",
    adSpendCap: "$2,000",
    contentPerMo: "3",
    goal:
      "Establish the visibility and lead-capture foundation that turns local searches into booked service calls, and the system to never miss one.",
    groups: [
      {
        title: "Visibility & Authority",
        items: [
          "Google Maps Domination",
          "AI Maps Visibility",
          { em: "On-Page Authority Building", rest: " — 3/mo (service · topical · geographic)" },
          "Local Authority & Trust Signals",
        ],
      },
      {
        title: "Lead Generation",
        items: [
          "Google Guaranteed Lead Ads (LSA)",
          { em: "5-Star Review Engine + Review Coaching" },
        ],
      },
      {
        title: "Growth System",
        items: [
          "CRM & Sales Pipeline",
          "Missed-Call Text-Back",
          "24/7 Lead Capture Chat",
          "Customer Reactivation Email",
        ],
      },
      {
        title: "Partnership & Tracking",
        items: [
          "Dedicated Success Specialist",
          "Call Tracking & Attribution",
          "Monthly Growth Reporting",
          "6-Month Roadmap into Current",
        ],
      },
    ],
    fit: {
      yes: [
        "You serve a real, defined service area",
        "You answer the phone and follow up on leads",
        "You want a foundation that compounds month over month",
        "You're tired of agencies that report clicks, not calls",
      ],
      no: [
        "You're already running heavy paid ads and need management now",
        "You need multi-city expansion today",
        "You want done-for-you outbound. That's not this tier.",
      ],
    },
    adManagementCopy:
      "Your ad spend is always your money, paid to Google directly. Never marked up. Source includes hands-on management up to <b class='text-white font-semibold'>$2,000/mo</b> in spend. Beyond the cap: 20% of spend, dropping to 15% above $10,000/mo.",
    seoTitle: "Source Program | DemandStream Digital",
    seoDescription:
      "Source: the visibility and lead-capture foundation for plumbing & HVAC companies. $2,500/mo, $5,000 one-time setup. One company per market.",
    canonical: "https://demandstreamdigital.com/programs/source",
  },
  {
    slug: "current",
    symbol: "◈",
    eyebrow: "Active Growth · Most Popular",
    bestFor: "Growth-focused shops ready to scale lead generation with paid + automation.",
    name: "Current",
    tagline:
      "Paid acceleration plus a growth system we run for you. More booked calls, hands-off.",
    monthlyPrice: "$4,000",
    adSpendCap: "$5,000",
    contentPerMo: "5",
    flagship: true,
    goal:
      "Generate more booked service calls through connected paid campaigns and conversion systems, with the pipeline and follow-up run entirely for you.",
    everythingIn: "Everything in Source, plus ↓",
    groups: [
      {
        title: "Paid Acquisition",
        items: ["Google Ads Management", "Retargeting", "Seasonal Campaigns"],
      },
      {
        title: "Conversion",
        items: [
          "Landing Page Optimization",
          "Financing CTA Optimization",
          "Conversion Rate Optimization",
        ],
      },
      {
        title: "Automation, Stepped Up",
        items: [
          "Referral Program System",
          "Advanced Nurture (email + SMS)",
          "Appointment Reminders & Follow-ups",
          { em: "Review Response Management" },
          { em: "Hands-Off Automation Management" },
        ],
      },
      {
        title: "Content & Planning",
        items: ["On-Page Authority Building, 5/mo", "Quarterly Growth Planning"],
      },
    ],
    fit: {
      yes: [
        "You're ready to invest in paid ads to accelerate",
        "You want to stop running your own CRM and follow-up",
        "You have steady inbound and want to scale it",
        "You see marketing as an investment, not an expense",
      ],
      no: [
        "You haven't built your visibility foundation yet (start with Source)",
        "You're not ready to fund an ad budget",
        "You're competing across many cities. That's Surge.",
      ],
    },
    adManagementCopy:
      "Your ad spend is always your money, paid to Google directly. Never marked up. Current includes hands-on management up to <b class='text-white font-semibold'>$5,000/mo</b> in spend. Beyond the cap: 20% of spend, dropping to 15% above $10,000/mo.",
    seoTitle: "Current Program | DemandStream Digital",
    seoDescription:
      "Current: paid acceleration plus hands-off growth system for plumbing & HVAC. $4,000/mo, $5,000 ad spend cap. Most popular tier.",
    canonical: "https://demandstreamdigital.com/programs/current",
  },
  {
    slug: "surge",
    symbol: "❖",
    eyebrow: "Market Domination",
    bestFor: "Established companies competing in larger or more competitive markets.",
    name: "Surge",
    tagline:
      "Own your territory and take competitors' share. Advanced visibility, automation, and expansion.",
    monthlyPrice: "$6,000",
    adSpendCap: "$10,000",
    contentPerMo: "8 + off-site",
    goal:
      "Expand aggressively across your market with multi-city reach, multi-channel paid, competitive displacement, and custom automation engineered around your business.",
    everythingIn: "Everything in Current, plus ↓",
    groups: [
      {
        title: "Expansion & Domination",
        items: [
          { em: "Multi-City Service-Area Expansion" },
          "Multi-Channel Paid (Meta · YouTube · Display)",
          "Competitive Displacement Campaigns",
          "On-Page Authority Building, 8/mo",
          "Off-Site Authority (quarterly placements)",
          "Competitive Visibility Tracking",
          "Competitive Review Tracking",
        ],
      },
      {
        title: "Premium Tools",
        items: [
          "HVAC / Plumbing Cost Estimator",
          "AI Chatbot Optimization",
          "Advanced ROI Dashboards",
        ],
      },
      {
        title: "Custom Automation",
        items: [
          "Custom Workflows",
          "CRM / Payment / Calendar Integrations",
          { em: "Team Training" },
          "Database Reactivation Campaign",
        ],
      },
      {
        title: "Partnership",
        items: ["Monthly Strategy Reviews", "Priority Support"],
      },
    ],
    fit: {
      yes: [
        "You want to own, not just compete in, your market",
        "You're expanding into new cities or service areas",
        "You have the capacity to handle a surge in booked jobs",
        "You want custom automation wired into your operations",
      ],
      no: [
        "You're a single-truck operator just getting started",
        "You're not ready for aggressive ad spend",
        "You haven't proven the model at Source or Current first",
      ],
    },
    adManagementCopy:
      "Your ad spend is always your money, paid to Google directly. Never marked up. Surge includes hands-on management up to <b class='text-white font-semibold'>$10,000/mo</b> in spend. Beyond the cap: 20% of spend, dropping to 15% above $10,000/mo.",
    seoTitle: "Surge Program | DemandStream Digital",
    seoDescription:
      "Surge: market domination tier for established plumbing & HVAC companies. $6,000/mo, $10,000 ad spend cap. Multi-city expansion and custom automation.",
    canonical: "https://demandstreamdigital.com/programs/surge",
  },
];

export const getTier = (slug: TierData["slug"]) =>
  TIERS.find((t) => t.slug === slug) ?? TIERS[0];
