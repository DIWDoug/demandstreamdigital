import TierPage, { type TierPageData } from "@/components/programs/TierPage";

const currentData: TierPageData = {
  slug: "current",
  symbol: "◈",
  eyebrow: "Active Growth, Most Popular",
  eyebrowColor: "cta",
  flagship: true,
  name: "Current",
  tagline:
    "Paid acceleration plus a growth system we run for you. More booked calls, hands-off.",
  bestFor:
    "Growth-focused shops ready to scale lead generation with paid plus automation.",
  monthlyPrice: "$4,000",
  adSpendCap: "$5,000",
  contentPerMo: "5",
  goal:
    "Generate more booked service calls through connected paid campaigns and conversion systems, with the pipeline and follow-up run entirely for you.",
  everythingIn: "Everything in Source, plus the below",
  problem: {
    pain: "Your foundation works, but you're still running the CRM yourself and leaving paid demand on the table.",
    body: "By the time a shop is ready for Current, the visibility foundation is producing. The bottleneck shifts. You need paid ads working alongside organic, landing pages built to convert, and an automation layer that actually gets run instead of sitting unused in your CRM. Current takes the operational weight off the owner and turns demand generation into something you measure, not something you manage.",
  },
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
  process: [
    {
      days: "Days 1 to 15",
      phase: "Audit & Strategy",
      what: "Full account audit across Google Ads, conversion paths, CRM workflows, and current cost per booked call. We map the 90-day plan against your capacity and seasonal demand.",
    },
    {
      days: "Days 16 to 30",
      phase: "Paid Activation",
      what: "Google Ads campaigns launch or get rebuilt, retargeting deploys, financing CTAs and high-intent landing pages publish. Conversion tracking is hardened end to end.",
    },
    {
      days: "Days 31 to 60",
      phase: "Automation Handoff",
      what: "Nurture sequences, appointment reminders, review response, and referral program go live. Your team stops running the CRM. We run it for you and report on cost per booked call.",
    },
    {
      days: "Days 61 to 90",
      phase: "Optimize & Scale",
      what: "Quarterly growth planning session. Winning campaigns scale, losers cut, landing pages iterated against real conversion data. Booked-call volume climbs and cost per call drops.",
    },
  ],
  kpis: [
    {
      metric: "2 to 4x",
      label: "Booked calls per month",
      detail: "Combined organic plus paid, vs the month before Current started.",
    },
    {
      metric: "30 to 50%",
      label: "Lower cost per booked call",
      detail: "After 90 days of conversion optimization and campaign tuning.",
    },
    {
      metric: "$0",
      label: "Time you spend on the CRM",
      detail: "Nurture, reminders, review response and follow-up run hands-off.",
    },
  ],
  testimonial: {
    quote: "We stopped touching the CRM. The phones ring, the techs run, and the monthly report tells me exactly what every booked call cost.",
    attribution: "Owner",
    role: "HVAC company, 9 trucks, Sun Belt market",
    metric: "Cost per booked call cut 42%",
  },
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
  faqs: [
    {
      q: "Do I need to start with Source first?",
      a: "Not always. If your Google Business Profile, reviews, and lead-capture systems are already in good shape, you can start at Current. If they aren't, paid ads on a weak foundation waste money. We tell you straight on the call.",
    },
    {
      q: "What ad budget should I plan for?",
      a: "Most Current clients run $3,000 to $5,000 per month in Google Ads spend on top of the monthly fee. Spend is paid directly to Google on your card, never marked up. The cap on managed spend is $5,000/mo, with clear pricing above that.",
    },
    {
      q: "How is this different from a typical PPC agency?",
      a: "A typical PPC agency optimizes for clicks and reports on clicks. We optimize for booked service calls and report on cost per booked call, integrated with your CRM. The campaigns, landing pages, and automation are all one system.",
    },
    {
      q: "Will you really respond to my Google reviews?",
      a: "Yes. Review response is hands-off at Current. Every review, positive or negative, gets a response that fits your brand voice within 24 hours.",
    },
    {
      q: "How fast can we launch?",
      a: "If the Growth Engine is already in place, paid campaigns launch in week two and automation handoff completes inside the first 60 days.",
    },
    {
      q: "Can we scale ad spend mid-quarter?",
      a: "Yes. Spend scales with capacity. We will not push paid harder than your team can answer the phone and run the calls.",
    },
  ],
  upNext: { label: "Step up to SURGE", to: "/programs/surge" },
  seoTitle: "Current Program | DemandStream Digital",
  seoDescription:
    "Current: paid acceleration plus hands-off growth system for plumbing & HVAC. $4,000/mo, $5,000 ad spend cap. Most popular tier.",
  canonical: "https://demandstreamdigital.com/programs/current",
};

const ProgramsCurrent = () => <TierPage data={currentData} />;

export default ProgramsCurrent;
