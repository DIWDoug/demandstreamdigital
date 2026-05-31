import TierPage, { type TierPageData } from "@/components/programs/TierPage";

const currentData: TierPageData = {
  slug: "current",
  symbol: "◈",
  eyebrow: "Active Growth · Most Popular",
  eyebrowColor: "cta",
  flagship: true,
  name: "Current",
  tagline:
    "Paid acceleration plus a growth system we run for you. More booked calls, hands-off.",
  bestFor:
    "Growth-focused shops ready to scale lead generation with paid + automation.",
  monthlyPrice: "$4,000",
  adSpendCap: "$5,000",
  contentPerMo: "5",
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
  upNext: { label: "Step up to SURGE", to: "/programs/surge" },
  seoTitle: "Current Program | DemandStream Digital",
  seoDescription:
    "Current: paid acceleration plus hands-off growth system for plumbing & HVAC. $4,000/mo, $5,000 ad spend cap. Most popular tier.",
  canonical: "https://demandstreamdigital.com/programs/current",
};

const ProgramsCurrent = () => <TierPage data={currentData} />;

export default ProgramsCurrent;
