export type TierFeatureItem = string | { em: string; rest?: string };
export type TierGroup = { title: string; items: TierFeatureItem[] };

export type TierData = {
  slug: "spring" | "current" | "surge";
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
    slug: "spring",
    symbol: "◇",
    eyebrow: "Foundation",
    bestFor: "1 to 2 truck operators getting their first real online presence.",
    name: "Spring",
    tagline:
      "The foundational starter. Get found locally and stop missing calls. For one-truck operators just turning on their online presence.",
    monthlyPrice: "$1,995",
    adSpendCap: "$1,000",
    contentPerMo: "3",
    goal:
      "Lay the foundation: a real website, a fully optimized Google Business Profile, and the automation to capture every call and review that comes in.",
    groups: [
      {
        title: "Visibility & Authority",
        items: [
          { em: "Custom website built for your brand", rest: " — conversion-optimized, mobile-first, owned by you" },
          "Google Business Profile optimization",
          { em: "On-Page Authority Building", rest: " — 3/mo (service · geographic)" },
          "Local citations and trust signals",
        ],
      },
      {
        title: "Lead Generation",
        items: [
          "Google Guaranteed Lead Ads (LSA)",
          "Meta local specials campaigns",
          { em: "5-Star Review Engine", rest: " — automation-powered" },
        ],
      },
      {
        title: "Growth System",
        items: [
          "CRM & Sales Pipeline",
          "Missed-Call Text-Back",
          "24/7 Lead Capture Chat",
        ],
      },
      {
        title: "Partnership & Tracking",
        items: [
          "Dedicated Success Specialist",
          "Call Tracking & Attribution",
          "Monthly Growth Reporting",
        ],
      },
    ],
    fit: {
      yes: [
        "You are a one or two-truck shop just getting started online",
        "Your phone rings from word-of-mouth and you want a real website",
        "You want to stop losing calls when you can't answer",
        "You are not ready to fund paid ads yet",
      ],
      no: [
        "You already do $1M+ in revenue. You have outgrown this tier.",
        "You need demand control today. That is The Current.",
        "You want multi-city expansion. That is The Surge.",
      ],
    },
    adManagementCopy:
      "Your ad spend is always your money, paid to Google directly. Never marked up. Spring includes hands-on LSA management up to <b class='text-white font-semibold'>$1,000/mo</b> in spend. Beyond the cap: 20% of spend.",
    seoTitle: "Spring Program | DemandStream Digital",
    seoDescription:
      "Spring: foundational visibility and lead-capture program for one to two truck plumbing & HVAC operators. $1,995/mo, $3,500 startup fee.",
    canonical: "https://demandstreamdigital.com/programs/spring",
  },
  {
    slug: "current",
    symbol: "◈",
    eyebrow: "Demand Control · Most Popular",
    bestFor: "Growth-focused shops ready to control demand across all four seasons.",
    name: "Current",
    tagline:
      "Demand control across all four seasons. SEO, LSA, Google Ads, and automation working as one system, so booked calls do not depend on the weather.",
    monthlyPrice: "$2,995",
    adSpendCap: "$5,000",
    contentPerMo: "5",
    flagship: true,
    goal:
      "Give you demand control. SEO compounds in the background while paid ads and automation generate booked service calls on demand, every season.",
    everythingIn: "Everything in Spring, plus ↓",
    groups: [
      {
        title: "Demand Control (the difference)",
        items: [
          { em: "Demand control across all four seasons", rest: " — never worry about shoulder season again" },
          { em: "Website included & continuously optimized", rest: " — landing pages, CTAs, and conversion tuning" },
          "Google Ads Management (Search + Performance Max)",
          "Meta special-offer ads (tune-ups, water heater flushes, seasonal)",
          "Retargeting + seasonal campaigns",
        ],
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
        "You are 3+ trucks and want predictable booked-call flow",
        "You are tired of revenue swinging with the seasons",
        "You want SEO compounding and paid demand at the same time",
        "You see marketing as an investment, not an expense",
      ],
      no: [
        "You are a single-truck operator still finding your footing",
        "You are not ready to fund an ad budget",
        "You are competing across many cities. That is Surge.",
      ],
    },
    adManagementCopy:
      "Your ad spend is always your money, paid to Google directly. Never marked up. Current includes hands-on management up to <b class='text-white font-semibold'>$5,000/mo</b> in spend. Beyond the cap: 20% of spend, dropping to 15% above $10,000/mo.",
    seoTitle: "Current Program | DemandStream Digital",
    seoDescription:
      "Current: demand control across all four seasons for plumbing & HVAC. SEO + Google Ads + LSA + automation. $2,995/mo. Most popular tier.",
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
    monthlyPrice: "$5,995",
    adSpendCap: "$10,000",
    contentPerMo: "8 + off-site",
    goal:
      "Expand aggressively across your market with multi-city reach, multi-channel paid, competitive displacement, and custom automation engineered around your business.",
    everythingIn: "Everything in Current, plus ↓",
    groups: [
      {
        title: "Expansion & Domination",
        items: [
          { em: "Custom website + multi-city landing infrastructure" },
          { em: "Multi-City Service-Area Expansion" },
          "Multi-Channel Paid (Meta · YouTube · Display)",
          "Competitive Displacement Campaigns",
          "On-Page Authority Building, 8/mo",
          "Off-Site Authority (quarterly placements)",
          "Reddit SEO & AI Citations",
          "Hiring Ads — scale your team as you grow",
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
        "You are expanding into new cities or service areas",
        "You have the capacity to handle a surge in booked jobs",
        "You want custom automation wired into your operations",
      ],
      no: [
        "You are a single-truck operator just getting started",
        "You are not ready for aggressive ad spend",
        "You have not proven the model at Current first",
      ],
    },
    adManagementCopy:
      "Your ad spend is always your money, paid to Google directly. Never marked up. Surge includes hands-on management up to <b class='text-white font-semibold'>$10,000/mo</b> in spend. Beyond the cap: 20% of spend, dropping to 15% above $10,000/mo.",
    seoTitle: "Surge Program | DemandStream Digital",
    seoDescription:
      "Surge: market domination tier for established plumbing & HVAC companies. $5,995/mo, $10,000 ad spend cap. Multi-city expansion and custom automation.",
    canonical: "https://demandstreamdigital.com/programs/surge",
  },
];

export const getTier = (slug: TierData["slug"]) =>
  TIERS.find((t) => t.slug === slug) ?? TIERS[0];
