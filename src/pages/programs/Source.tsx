import TierPage, { type TierPageData } from "@/components/programs/TierPage";

const sourceData: TierPageData = {
  slug: "source",
  symbol: "◇",
  eyebrow: "Foundation",
  name: "Source",
  tagline:
    "Get found and capture every lead. The visibility foundation for plumbing & HVAC growth.",
  bestFor: "1–5 truck operators building consistent local lead flow.",
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
  upNext: { label: "Step up to CURRENT", to: "/programs/current" },
  seoTitle: "Source Program | DemandStream Digital",
  seoDescription:
    "Source: the visibility and lead-capture foundation for plumbing & HVAC companies. $2,500/mo, $5,000 one-time setup. One company per market.",
  canonical: "https://demandstreamdigital.com/programs/source",
};

const ProgramsSource = () => <TierPage data={sourceData} />;

export default ProgramsSource;
