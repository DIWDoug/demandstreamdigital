import TierPage, { type TierPageData } from "@/components/programs/TierPage";

const sourceData: TierPageData = {
  slug: "source",
  symbol: "◇",
  eyebrow: "Foundation",
  name: "Source",
  tagline:
    "Get found and capture every lead. The visibility foundation for plumbing & HVAC growth.",
  bestFor: "1 to 5 truck operators building consistent local lead flow.",
  monthlyPrice: "$2,500",
  adSpendCap: "$2,000",
  contentPerMo: "3",
  goal:
    "Establish the visibility and lead-capture foundation that turns local searches into booked service calls, and the system to never miss one.",
  problem: {
    pain: "You're invisible on Google and the leads that do come through fall through the cracks.",
    body: "Most small plumbing and HVAC shops have a Google Business Profile that ranks below their competitors, no real review engine, and no system to catch the calls they miss after 5pm. Source fixes the three things that decide whether a homeowner in your service area ever finds you, ever trusts you, and ever actually books.",
  },
  groups: [
    {
      title: "Visibility & Authority",
      items: [
        "Google Maps Domination",
        "AI Maps Visibility",
        { em: "On-Page Authority Building", rest: " 3/mo (service, topical, geographic)" },
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
  process: [
    {
      days: "Days 1 to 15",
      phase: "Audit & Baseline",
      what: "Full visibility audit. We benchmark your Google Business Profile, review velocity, and current booked-call rate against the top three competitors in your service area.",
    },
    {
      days: "Days 16 to 30",
      phase: "Build & Optimize",
      what: "Google Business Profile rebuilt to 110%, review engine deployed, missed-call text-back and lead-capture chat installed, call tracking provisioned across every channel.",
    },
    {
      days: "Days 31 to 60",
      phase: "Launch & Compound",
      what: "Local Services Ads go live, first three on-page authority pages publish, review coaching begins with your team. We watch the booked-call rate climb week over week.",
    },
    {
      days: "Days 61 to 90",
      phase: "Scale Foundation",
      what: "Citation depth expands, second wave of authority pages publishes, reactivation email begins. By day 90 you have a foundation that compounds without you touching it.",
    },
  ],
  kpis: [
    {
      metric: "3 to 5x",
      label: "Google Business Profile views",
      detail: "Discovery and direct searches combined, 90 days vs baseline.",
    },
    {
      metric: "20 to 40",
      label: "New 5-star reviews",
      detail: "First 90 days with the review engine and team coaching in place.",
    },
    {
      metric: "0 missed",
      label: "After-hours leads",
      detail: "Missed-call text-back and 24/7 chat catch the calls you used to lose.",
    },
  ],
  testimonial: {
    quote: "We were getting maybe two calls a week from Google. Three months in, the phone won't stop ringing and we know exactly which job came from where.",
    attribution: "Operations Lead",
    role: "Plumbing company, 4 trucks, Texas market",
    metric: "+318% booked calls in 90 days",
  },
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
  faqs: [
    {
      q: "Is the $5,000 setup fee included in Source?",
      a: "No. The Growth Engine is a one-time $5,000 investment billed at signup and is required for every program. Source is the monthly engagement that runs on top of that foundation.",
    },
    {
      q: "How fast will I see results?",
      a: "Most Source clients see Google Business Profile views climb within 30 days, the first new reviews land in week two, and the missed-call recovery starts paying for the program inside the first month. Real booked-call growth from organic visibility compounds across months 2 to 6.",
    },
    {
      q: "Do you only work with plumbing and HVAC?",
      a: "Yes. Plumbing and HVAC only. One plumbing company and one HVAC company per market. We do not work with electrical, general contractors, or franchises.",
    },
    {
      q: "What happens if I outgrow Source?",
      a: "You step up to Current. Everything you built at Source carries over, and we layer in paid acceleration, conversion optimization, and hands-off automation. Most clients move up between month 4 and month 9.",
    },
    {
      q: "Am I locked into a long contract?",
      a: "There is an initial term to give the work time to compound. After the initial term it is month-to-month. We earn the next month every month.",
    },
    {
      q: "Who handles my ad spend?",
      a: "You do. Ad spend is paid directly to Google on your card and never marked up. We manage the campaigns up to the included cap.",
    },
  ],
  upNext: { label: "Step up to CURRENT", to: "/programs/current" },
  seoTitle: "Source Program | DemandStream Digital",
  seoDescription:
    "Source: the visibility and lead-capture foundation for plumbing & HVAC companies. $2,500/mo, $5,000 one-time setup. One company per market.",
  canonical: "https://demandstreamdigital.com/programs/source",
};

const ProgramsSource = () => <TierPage data={sourceData} />;

export default ProgramsSource;
