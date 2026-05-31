import TierPage, { type TierPageData } from "@/components/programs/TierPage";

const surgeData: TierPageData = {
  slug: "surge",
  symbol: "❖",
  eyebrow: "Market Domination",
  name: "Surge",
  tagline:
    "Own your territory and take competitors' share. Advanced visibility, automation, and expansion.",
  bestFor:
    "Established companies competing in larger or more competitive markets.",
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
  topTierNote: "The top tier. Built for companies ready to own their market.",
  seoTitle: "Surge Program | DemandStream Digital",
  seoDescription:
    "Surge: market domination tier for established plumbing & HVAC companies. $6,000/mo, $10,000 ad spend cap. Multi-city expansion and custom automation.",
  canonical: "https://demandstreamdigital.com/programs/surge",
};

const ProgramsSurge = () => <TierPage data={surgeData} />;

export default ProgramsSurge;
