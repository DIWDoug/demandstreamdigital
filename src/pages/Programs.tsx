import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Check, TrendingUp, Zap, Crown } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/SEOHead";
import StreamTexture from "@/components/StreamTexture";


/* ─── Tokens used (existing design system) ───────────────────────────────
   --cta (brick red)        : buttons, badges, most-popular border + glow
   --navy / --navy-light    : page + setup band backgrounds
   --card / --border-card   : tier cards, ad-spend pills
   --accent-blue            : eyebrow labels, secondary accents, "stream"
   --gold                   : scarcity callout
   Inter (global)           : all body & headings
   Lora italic (page-scoped): testimonial quote only
   ──────────────────────────────────────────────────────────────────────── */

const Eyebrow = ({ children, color = "cta" }: { children: React.ReactNode; color?: "cta" | "accent-blue" }) => (
  <div
    className={`text-[12px] font-bold uppercase tracking-[0.21em] ${
      color === "cta" ? "text-cta" : "text-accent-blue"
    }`}
  >
    {children}
  </div>
);

type Group = { title: string; items: (string | { em: string; rest?: string })[] };

const TierCard = ({
  symbol,
  name,
  tag,
  price,
  everything,
  groups,
  cap,
  popular = false,
  ctaText = "View Full Details",
  ctaTo = "/grow-qualifier",
}: {
  symbol: string;
  name: string;
  tag: string;
  price: string;
  everything?: string;
  groups: Group[];
  cap: string;
  popular?: boolean;
  ctaText?: string;
  ctaTo?: string;
}) => {
  const accentText = popular ? "text-gold" : "text-accent-blue";
  const accentBorder = popular ? "border-gold" : "border-accent-blue/40";
  const checkColor = popular ? "text-gold" : "text-accent-blue";

  return (
    <div className={`relative ${popular ? "md:-translate-y-3" : ""}`}>
      {popular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-fit z-10">
          <div className="bg-gold text-navy text-[12px] font-extrabold tracking-[0.18em] uppercase px-6 py-2 rounded shadow-[0_6px_24px_hsl(var(--gold)/0.35)]">
            ★ Most Popular
          </div>
        </div>
      )}

      <div
        className={`relative rounded-md bg-card border-2 ${accentBorder} p-7 sm:p-8 ${
          popular ? "shadow-[0_0_60px_hsl(var(--gold)/0.18)]" : ""
        }`}
      >
        {/* Phase label */}
        <div className={`text-center text-[15px] font-bold tracking-[0.22em] uppercase ${accentText}`}>
          {name}
        </div>
        <div className="text-center text-[14.5px] text-white/70 mt-2 tracking-[0.01em] leading-snug">
          {tag}
        </div>

        {/* Price block */}
        <div className="text-center mt-6">
          <div className={`inline-flex items-start font-extrabold ${accentText} leading-none`}>
            <span className="text-[28px] mt-3 mr-1">$</span>
            <span className="text-[68px] tracking-tight">{price.replace(/[$,/mo]/g, "").replace(",", "")}</span>
            <span className="text-[14px] mt-3 ml-1 opacity-80">™</span>
          </div>
          <div className="text-[14.5px] italic text-white/65 mt-1.5">Per Month</div>
        </div>


        {everything && (
          <div className="mt-5 text-center text-[13px] font-bold uppercase tracking-[0.12em] text-white/85 border-y border-white/10 py-2.5">
            {everything}
          </div>
        )}

        {/* Feature list */}
        <div className="mt-6 space-y-5">
          {groups.map((g, gi) => (
            <div key={gi}>
              <h4 className={`text-[12.5px] font-bold uppercase tracking-[0.16em] mb-2.5 ${accentText} opacity-90`}>
                {g.title}
              </h4>
              <ul className="space-y-2.5">
                {g.items.map((item, ii) => (
                  <li
                    key={ii}
                    className="flex items-start gap-2.5 text-[15.5px] text-white/85 leading-snug"
                  >
                    <Check className={`w-[18px] h-[18px] mt-[3px] shrink-0 ${checkColor}`} strokeWidth={3} />
                    <span>
                      {typeof item === "string" ? (
                        item
                      ) : (
                        <>
                          <span className="text-white font-semibold">{item.em}</span>
                          {item.rest}
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-7 pt-6 border-t border-white/10 text-center">
          <Link
            to={ctaTo}
            className={`inline-flex items-center justify-center font-extrabold tracking-[0.14em] uppercase text-[13px] px-7 py-3 rounded transition-colors ${
              popular
                ? "bg-gold text-navy hover:bg-gold/90"
                : "bg-transparent border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-navy"
            }`}
          >
            {ctaText}
          </Link>
          <div className="text-[13px] text-white/45 mt-4 leading-snug">{cap}</div>
        </div>
      </div>
    </div>
  );
};


type ShowcaseTier = {
  id: string;
  name: string;
  Icon: typeof TrendingUp;
  tagline: string;
  description: string;
  outcomes: string[];
  bestFor: string;
  timeframe: string;
  investment: string;
  ctaTo: string;
};

const SHOWCASE_TIERS: ShowcaseTier[] = [
  {
    id: "source",
    name: "SOURCE",
    Icon: TrendingUp,
    tagline: "Foundation Phase",
    description:
      "Built for 1 to 5 truck operators ready to stop relying on word-of-mouth. We install the visibility, review, and lead-capture systems that turn your service area into a predictable booking engine. Every call gets answered, every lead gets followed up, and every search shows your name first.",
    outcomes: [
      "Rank in the Google Maps 3-pack for your top service categories",
      "Capture missed-call leads automatically via text-back",
      "Build a 5-star reputation that converts browsers into bookings",
      "Centralize every lead in one CRM with full call tracking",
    ],
    bestFor: "1 to 5 trucks. $400K to $1.5M revenue.",
    timeframe: "Foundation laid in 60 days. Compounds month over month.",
    investment: "$2,500 / month",
    ctaTo: "/programs/source",
  },
  {
    id: "current",
    name: "CURRENT",
    Icon: Zap,
    tagline: "Acceleration Phase",
    description:
      "Everything in Source, plus the paid acceleration and hands-off automation layer. We layer Google Ads, retargeting, and seasonal campaigns on top of your organic foundation, then automate the follow-up so booked-call rates climb without adding staff. This is the tier most operators graduate into within 6 months.",
    outcomes: [
      "Daily booked-call flow from Google Ads + LSA combined",
      "Landing pages and CRO tuned to your highest-margin services",
      "Advanced nurture sequences across email and SMS",
      "Quarterly growth planning with a dedicated specialist",
    ],
    bestFor: "5 to 15 trucks. $1.5M to $4M revenue.",
    timeframe: "Paid traction in 30 days. Compounding lift through quarter two.",
    investment: "$4,000 / month",
    ctaTo: "/programs/current",
  },
  {
    id: "surge",
    name: "SURGE",
    Icon: Crown,
    tagline: "Ownership Phase",
    description:
      "Everything in Current, plus multi-city expansion and competitive displacement. Designed for the operator who wants to own the metro. We push into adjacent service areas, run multi-channel paid across Meta, YouTube, and Display, and actively track and unseat competitors in your top zip codes.",
    outcomes: [
      "Multi-city service-area expansion with dedicated landing infrastructure",
      "Competitive displacement campaigns against named competitors",
      "Custom workflows tied to CRM, payment, and calendar systems",
      "Priority support with monthly strategy reviews",
    ],
    bestFor: "15+ trucks. $4M+ revenue. Multi-location operators.",
    timeframe: "Market share shifts in 90 days. Territory ownership in 12 months.",
    investment: "$6,000 / month",
    ctaTo: "/programs/surge",
  },
];

const TierShowcase = () => {
  const [active, setActive] = useState(SHOWCASE_TIERS[0].id);
  const tier = SHOWCASE_TIERS.find((t) => t.id === active) ?? SHOWCASE_TIERS[0];
  const Icon = tier.Icon;

  return (
    <section className="mt-16">
      <div className="text-center mb-8">
        <Eyebrow color="accent-blue">Compare the Tiers</Eyebrow>
        <h2 className="font-extrabold text-white text-[28px] md:text-[34px] tracking-[-0.01em] mt-2.5">
          Which growth phase are you in?
        </h2>
        <p className="text-white/65 text-[15px] max-w-[620px] mx-auto mt-3 leading-relaxed">
          Each program builds on the last. Pick the tier that matches your truck count, revenue, and how
          aggressively you want to take market share.
        </p>
      </div>

      {/* Tab Triggers */}
      <div className="grid grid-cols-3 gap-0 border-b border-white/10 mb-0">
        {SHOWCASE_TIERS.map((t) => {
          const isActive = t.id === active;
          const TIcon = t.Icon;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`group relative flex flex-col items-center justify-center gap-1.5 px-3 py-4 md:py-5 transition-colors ${
                isActive ? "text-white" : "text-white/45 hover:text-white/75"
              }`}
            >
              <TIcon
                className={`w-5 h-5 transition-colors ${
                  isActive ? "text-cta" : "text-white/40 group-hover:text-white/60"
                }`}
                strokeWidth={2}
              />
              <span className="font-extrabold tracking-[0.18em] text-[13px] md:text-[15px] uppercase">
                {t.name}
              </span>
              <span className="hidden md:block text-[11px] tracking-wide text-white/45">
                {t.tagline}
              </span>
              {isActive && (
                <span className="absolute -bottom-px left-0 right-0 h-[3px] bg-cta" />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div
        key={tier.id}
        className="rounded-b-lg border border-t-0 border-border-card/70 px-6 md:px-10 py-8 md:py-10 animate-in fade-in-50 duration-300"
        style={{
          background:
            "linear-gradient(160deg, hsl(var(--navy-light)), hsl(var(--navy)))",
        }}
      >
        <div className="grid md:grid-cols-[1fr_minmax(280px,360px)] gap-8 md:gap-12 items-start">
          {/* Left: narrative */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-md bg-cta/15 border border-cta/30 flex items-center justify-center">
                <Icon className="w-5 h-5 text-cta" strokeWidth={2.2} />
              </div>
              <div>
                <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-cta">
                  {tier.tagline}
                </div>
                <div className="font-extrabold text-white text-[24px] md:text-[28px] tracking-[0.04em] leading-none mt-1">
                  {tier.name}
                </div>
              </div>
            </div>

            <p className="text-white/80 text-[15.5px] leading-relaxed mb-6">
              {tier.description}
            </p>

            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent-blue mb-3">
              What you walk away with
            </div>
            <ul className="space-y-2.5">
              {tier.outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px] text-white/85 leading-snug">
                  <Check className="w-[18px] h-[18px] mt-[3px] shrink-0 text-cta" strokeWidth={3} />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stat panel */}
          <div className="rounded-md border border-border-card/70 bg-navy/60 backdrop-blur-sm p-6 space-y-5">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1.5">
                Investment
              </div>
              <div className="font-extrabold text-white text-[28px] leading-none">
                {tier.investment}
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1.5">
                Best For
              </div>
              <div className="text-white/85 text-[14px] leading-snug">{tier.bestFor}</div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1.5">
                Timeline
              </div>
              <div className="text-white/85 text-[14px] leading-snug">{tier.timeframe}</div>
            </div>
            <Link
              to={tier.ctaTo}
              className="block text-center bg-cta hover:bg-cta-hover text-white font-extrabold tracking-[0.12em] uppercase text-[13px] px-5 py-3.5 rounded transition-colors"
            >
              Explore {tier.name} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const source: Group[] = [
    {
      title: "Visibility & Authority",
      items: [
        "Google Maps Ownership",
        "AI Maps Visibility",
        "On-Page Authority Building",
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
  ];

  const current: Group[] = [
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
      items: ["On-Page Authority Building", "Quarterly Growth Planning"],
    },
  ];

  const surge: Group[] = [
    {
      title: "Expansion & Market Ownership",
      items: [
        { em: "Multi-City Service-Area Expansion" },
        "Multi-Channel Paid (Meta · YouTube · Display)",
        "Competitive Displacement Campaigns",
        "On-Page Authority Building",
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
  ];

  return (
    <>
      <SEOHead
        title="Programs & Pricing | DemandStream Digital"
        description="Three growth programs for plumbing and HVAC companies. SOURCE, CURRENT, and SURGE. One plumbing company and one HVAC client per market."
        canonical="https://demandstreamdigital.com/programs"
      />
      <Helmet>
        {/* Page-scoped Lora load for the testimonial quote only */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,400..600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />

      <main className="bg-navy text-white pt-16 relative overflow-hidden">
        <StreamTexture variant="dark" opacity={0.09} />

        {/* Fine grid texture overlay (matches homepage hero) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(hsl(213 64% 16% / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(213 64% 16% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Animated flowing accent lines (matches homepage hero) */}
        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-100,320 C150,280 350,420 600,350 S950,220 1200,300 S1400,400 1540,340"
            fill="none"
            stroke="hsl(210 55% 50% / 0.12)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 40,15; 0,0; -30,-10; 0,0"
              dur="25s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M-50,360 C200,320 400,460 650,380 S1000,250 1250,340 S1450,440 1540,380"
            fill="none"
            stroke="hsl(210 55% 50% / 0.07)"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -35,20; 0,0; 25,-15; 0,0"
              dur="30s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M-80,580 C200,540 450,660 700,590 S1050,470 1300,550 S1450,630 1540,580"
            fill="none"
            stroke="hsl(210 55% 50% / 0.08)"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 30,-12; 0,0; -25,18; 0,0"
              dur="35s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M-60,400 C180,370 380,490 630,420 S980,310 1230,380 S1430,470 1540,420"
            fill="none"
            stroke="hsl(210 55% 50% / 0.05)"
            strokeWidth="1"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -20,10; 0,0; 35,-8; 0,0"
              dur="40s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* Soft radial glows (matches other dark sections) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-44 left-[20%] w-[640px] h-[640px] rounded-full z-0"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--cta) / 0.10), transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-56 -right-10 w-[580px] h-[580px] rounded-full z-0"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--accent-blue) / 0.10), transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-12 pb-20">
          {/* ───── HERO ───── */}
          <section>
            <Eyebrow>Programs &amp; Pricing</Eyebrow>
            <h1 className="font-extrabold text-white mt-3 mb-4 leading-[1.08] tracking-[-0.01em] text-[clamp(30px,4.6vw,48px)]">
              One <span className="text-accent-blue">stream</span> of demand.
              <br />
              Three ways to grow.
            </h1>
            <p className="text-white/75 text-[17px] sm:text-[18px] max-w-[660px] leading-relaxed">
              Growth systems for plumbing &amp; HVAC companies. Built to drive more booked
              service calls.{" "}
              <b className="text-white font-semibold">
                Not marketing services. A complete growth system.
              </b>
            </p>
            <div className="inline-block mt-5 text-[13px] text-gold border border-gold/35 bg-gold/[0.07] px-3.5 py-1.5 rounded">
              ◆ One plumbing company and one HVAC client per market.
            </div>
          </section>

          {/* ───── SETUP BANNER ───── */}
          <section
            className="mt-10 mb-2 rounded-lg p-6 sm:p-7 flex flex-wrap items-center justify-between gap-5 border border-cta/35"
            style={{
              background:
                "linear-gradient(120deg, hsl(var(--cta) / 0.10), hsl(var(--navy-light)))",
            }}
          >
            <div>
              <div className="text-[12px] font-bold tracking-[0.17em] uppercase text-cta">
                One-Time Setup
              </div>
              <div className="font-extrabold text-[34px] leading-none mt-1 text-white">
                $5,000
              </div>
              <div className="text-white/70 text-[14px] mt-1">
                60-day build · billed at signup, work starts day one
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-3">
              <div className="text-white/55 text-[13px] max-w-[520px] leading-relaxed text-left sm:text-right">
                Your complete foundation: 30-page growth website · Google Business Profile
                optimization · call tracking &amp; conversion setup · schema &amp;
                structured data · CRM &amp; automation install · starter brand kit.
              </div>
              <Link
                to="/programs/setup"
                className="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-bold text-[13px] tracking-[0.03em] px-5 py-2.5 rounded transition-colors"
              >
                See What's Included →
              </Link>
            </div>
          </section>

          {/* ───── AD SPEND & MANAGEMENT ───── */}
          <section
            className="mt-6 rounded-lg p-6 sm:p-8 border border-accent-blue/40"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--navy-light)), hsl(var(--navy)))",
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div className="max-w-[720px]">
                <h3 className="text-[14px] font-bold tracking-[0.18em] uppercase text-accent-blue">
                  Ad Spend &amp; Management
                </h3>
                <p className="text-white/80 text-[16px] mt-3 leading-relaxed">
                  Your ad spend is always your money, paid to Google directly. Never marked up.
                  Every tier includes hands-on campaign management up to its spend cap.
                  Beyond the cap, management is billed as a small percentage of spend.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {[
                  { b: "Included", rest: "up to each tier's cap" },
                  { b: "20%", rest: "on spend above your cap" },
                  { b: "15%", rest: "above $10,000/mo" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className="bg-card/80 border border-border-card/60 rounded px-5 py-3.5 text-[14px] text-white/75"
                  >
                    <b className="block text-white font-extrabold text-[20px] leading-tight">
                      {p.b}
                    </b>
                    {p.rest}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ───── TIERS ───── */}
          <section className="mt-6 grid gap-5 md:grid-cols-3 items-start max-w-[440px] md:max-w-none mx-auto">
            <TierCard
              symbol="◇"
              name="SOURCE"
              tag="Foundation. Get found and capture every lead. For 1 to 5 truck operators."
              price="$2,500"
              groups={source}
              cap="Ad management: flat up to $2,000/mo managed spend"
              ctaTo="/programs/source"
            />
            <TierCard
              symbol="◈"
              name="CURRENT"
              tag="Active growth. Paid acceleration plus hands-off automation."
              price="$4,000"
              everything="Everything in Source, plus ↓"
              groups={current}
              cap="Ad management: flat up to $5,000/mo managed spend"
              popular
              ctaTo="/programs/current"
            />
            <TierCard
              symbol="❖"
              name="SURGE"
              tag="Own your market. Take competitors' share."
              price="$6,000"
              everything="Everything in Current, plus ↓"
              groups={surge}
              cap="Ad management: flat up to $10,000/mo managed spend"
              ctaTo="/programs/surge"
            />
          </section>

          {/* ───── TIER SHOWCASE (tabbed deep-dive) ───── */}
          <TierShowcase />

          {/* ───── CLOSING CTA ───── */}
          <section
            className="mt-10 text-center rounded-lg border border-border-card/70 px-6 py-12"
            style={{
              background:
                "linear-gradient(160deg, hsl(var(--navy-light)), hsl(var(--navy)))",
            }}
          >
            <Eyebrow color="accent-blue">Ready to own your market?</Eyebrow>
            <h2 className="font-extrabold text-white text-[30px] tracking-[-0.01em] mt-2.5 mb-2">
              Claim Your Territory
            </h2>
            <p className="text-white/70 text-[15px] max-w-[520px] mx-auto mb-6 leading-relaxed">
              One plumbing company and one HVAC company per market. A short, no-pressure
              conversation to confirm fit before any pitch.
            </p>
            <Link
              to="/grow-qualifier"
              className="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-bold text-[15px] tracking-[0.03em] px-7 py-3.5 rounded transition-colors"
            >
              Schedule a Growth Audit →
            </Link>
            <p
              className="italic text-white/70 text-[14px] mt-6 max-w-[560px] mx-auto leading-relaxed"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              "What truly sets them apart is transparency. A team that provides real, clear
              data and explains what's working and why."
            </p>
          </section>

          <p className="text-white/45 text-[12px] mt-9 text-center leading-relaxed">
            DemandStream Digital. Growth systems for plumbing &amp; HVAC.
            <br />
            Programs are month-to-month after the initial term. Ad spend billed separately
            as pass-through.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Programs;
