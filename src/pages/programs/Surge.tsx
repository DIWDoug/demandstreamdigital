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
  everythingIn: "Everything in Current, plus the below",
  problem: {
    pain: "You've outgrown a single city, you're trading punches with two or three real competitors, and you need a system that wins at scale.",
    body: "At the Surge level, the question is no longer whether you can generate leads. The question is whether you can own a market, expand into the next one, and keep your competitors off the map while you do it. Surge layers multi-channel paid, multi-city service-area expansion, competitive displacement, and custom automation engineered around your operations. Built for shops with the capacity to absorb a surge in booked work and the ambition to be the name everyone in the market hears first.",
  },
  groups: [
    {
      title: "Expansion & Domination",
      items: [
        { em: "Multi-City Service-Area Expansion" },
        "Multi-Channel Paid (Meta, YouTube, Display)",
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
  process: [
    {
      days: "Days 1 to 15",
      phase: "Market Intelligence",
      what: "Deep competitive audit across every city in your expansion footprint. We map competitor visibility, review velocity, and ad presence, and build the displacement plan.",
    },
    {
      days: "Days 16 to 45",
      phase: "Multi-City Build",
      what: "Service-area expansion deploys across target cities. Multi-channel paid (Meta, YouTube, Display) launches alongside Google. Off-site authority placements begin. Cost estimator and AI chatbot go live.",
    },
    {
      days: "Days 46 to 75",
      phase: "Custom Integration",
      what: "Custom workflows wired into your CRM, payment, and calendar stack. Team training sessions delivered. Database reactivation campaign runs against your full customer list.",
    },
    {
      days: "Days 76 to 90",
      phase: "Strategic Review",
      what: "First monthly strategy review with full ROI dashboards, competitive shift report, and a quarterly plan to keep extending the lead.",
    },
  ],
  kpis: [
    {
      metric: "5 to 10x",
      label: "Market visibility footprint",
      detail: "Combined Google, Meta, YouTube, and Display reach across every service-area city.",
    },
    {
      metric: "+40% YoY",
      label: "Booked revenue growth",
      detail: "Operating range for Surge clients in year one of multi-city expansion.",
    },
    {
      metric: "Top 3",
      label: "Local pack rank, every target city",
      detail: "Inside 6 to 9 months across the cities in your expansion plan.",
    },
  ],
  testimonial: {
    quote: "We expanded into two new cities and pushed a competitor out of the top three in the city we already owned. The dashboards make the next move obvious every month.",
    attribution: "President",
    role: "Plumbing & HVAC company, 20+ trucks, multi-city",
    metric: "+40% YoY revenue, year one",
  },
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
  faqs: [
    {
      q: "How many cities can we expand into?",
      a: "Surge is built for multi-city expansion. The practical limit is operational, your truck count, dispatch capacity, and how aggressively you want to acquire share. We map the rollout against capacity in the first 15 days.",
    },
    {
      q: "What does competitive displacement actually mean?",
      a: "We track the top three competitors in every target city: their visibility, ad presence, review velocity, and ranking pages. Then we run displacement campaigns engineered to take their share of voice and their share of clicks in the local pack.",
    },
    {
      q: "Do I keep one competitor per market exclusivity?",
      a: "Yes. One plumbing company and one HVAC company per market across every tier, Surge included. When you expand into a new city, we lock that city for you too.",
    },
    {
      q: "What integrations do you build into?",
      a: "Most major CRM, payment, and field-service platforms used in plumbing and HVAC. ServiceTitan is the most common. We scope integrations during the first 15 days and build them into the custom workflow layer.",
    },
    {
      q: "Is there a setup fee on top of $6,000/mo?",
      a: "Yes. The Foundation Build is $5,000 one-time, billed at signup. Surge does not require additional setup beyond the foundation, but custom integrations and team training are included rather than billed separately.",
    },
    {
      q: "How often do we meet?",
      a: "Monthly strategy reviews are the default cadence at Surge, with priority support between them. Quarterly planning sessions set the next 90 days.",
    },
    {
      q: "Can we step down to Current if we need to?",
      a: "Yes. Month-to-month after the initial term. We will tell you straight if you've outgrown a tier in either direction.",
    },
  ],
  topTierNote: "The top tier. Built for companies ready to own their market.",
  seoTitle: "Surge Program | DemandStream Digital",
  seoDescription:
    "Surge: market domination tier for established plumbing & HVAC companies. $6,000/mo, $10,000 ad spend cap. Multi-city expansion and custom automation.",
  canonical: "https://demandstreamdigital.com/programs/surge",
};

const ProgramsSurge = () => <TierPage data={surgeData} />;

export default ProgramsSurge;
