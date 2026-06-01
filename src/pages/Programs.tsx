import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Check, TrendingUp, Zap, Crown, Globe, MapPin, BarChart3, Compass, Plus, Minus } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/SEOHead";
import StreamTexture from "@/components/StreamTexture";
import klarnaLogo from "@/assets/klarna-badge.png";
import paypalCreditLogo from "@/assets/paypal-credit.png";
import paymentMethods from "@/assets/payment-methods.png";


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
    className={`inline-flex items-center text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-md ${
      color === "cta"
        ? "text-cta bg-cta/15 border border-cta/25"
        : "text-accent-blue bg-accent-blue/15 border border-accent-blue/25"
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
  highlights,
  popular = false,
  ctaText = "Schedule a Growth Audit",
  ctaTo = "/grow-qualifier",
}: {
  symbol: string;
  name: string;
  tag: string;
  price: string;
  everything?: string;
  groups: Group[];
  cap: string;
  highlights?: { label: string; value: string }[];
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
          <div className="bg-gold text-navy text-xs font-bold tracking-wider uppercase px-6 py-2 rounded shadow-[0_6px_24px_hsl(var(--gold)/0.35)]">
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
        <div className={`text-center text-lg md:text-xl font-bold tracking-wider uppercase ${accentText}`}>
          {name}
        </div>
        <div className="text-center text-[15.5px] md:text-[16.5px] text-white/70 mt-2 leading-snug">
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

        {/* Highlights stripe */}
        {highlights && highlights.length > 0 && (
          <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-baseline justify-between gap-3 py-3 text-[15px] md:text-[16px]"
              >
                <span className="text-white/65 font-medium">{h.label}</span>
                <span className={`font-bold ${accentText} text-right`}>{h.value}</span>
              </div>
            ))}
          </div>
        )}

        {everything && (
          <div className="mt-5 text-center text-[15px] md:text-base font-semibold text-white/85 border-y border-white/10 py-2.5">
            {everything}
          </div>
        )}

        {/* Feature list */}
        <div className="mt-6 space-y-5">
          {groups.map((g, gi) => (
            <div key={gi}>
              <h4 className={`text-[15px] md:text-base font-bold mb-2.5 ${accentText} opacity-95`}>
                {g.title}
              </h4>
              <ul className="space-y-2.5">
                {g.items.map((item, ii) => (
                  <li
                    key={ii}
                    className="flex items-start gap-2.5 text-[16px] md:text-[17px] text-white/85 leading-snug"
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
            className={`inline-flex items-center justify-center font-bold text-[15px] md:text-base px-7 py-3 rounded transition-colors ${
              popular
                ? "bg-gold text-navy hover:bg-gold/90"
                : "bg-transparent border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-navy"
            }`}
          >
            {ctaText}
          </Link>
          <div className="text-[14px] md:text-[15px] text-white/45 mt-4 leading-snug">{cap}</div>
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
    name: "The Source",
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
    investment: "$2,495 / month",
    ctaTo: "/programs/source",
  },
  {
    id: "current",
    name: "The Current",
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
    investment: "$3,995 / month",
    ctaTo: "/programs/current",
  },
  {
    id: "surge",
    name: "The Surge",
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
    investment: "$5,995 / month",
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
              <span className="font-bold tracking-wider text-sm md:text-base uppercase">
                {t.name}
              </span>
              <span className="hidden md:block text-[13px] md:text-[14px] text-white/55">
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
        className="rounded-b-lg border border-t-0 border-white/[0.08] px-6 md:px-10 py-8 md:py-10 animate-in fade-in-50 duration-300"
        style={{
          background:
            "linear-gradient(160deg, hsl(var(--navy-light)), hsl(var(--navy)))",
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.06), inset 0 -1px 2px rgba(0,0,0,0.35), 0 12px 40px rgba(0,0,0,0.25)",
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
                <div className="text-xs font-semibold uppercase tracking-wider text-cta">
                  {tier.tagline}
                </div>
                <div className="font-extrabold text-white text-[24px] md:text-[28px] tracking-wider leading-none mt-1">
                  {tier.name}
                </div>
              </div>
            </div>

            <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed mb-6">
              {tier.description}
            </p>

            <div className="text-[15px] md:text-base font-bold text-accent-blue mb-3">
              What you walk away with
            </div>
            <ul className="space-y-2.5">
              {tier.outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[16px] md:text-[17px] text-white/85 leading-snug">
                  <Check className="w-[18px] h-[18px] mt-[3px] shrink-0 text-cta" strokeWidth={3} />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stat panel */}
          <div className="rounded-md border border-border-card/70 bg-navy/60 backdrop-blur-sm p-6 space-y-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-white/55 mb-1.5">
                Investment
              </div>
              <div className="font-extrabold text-white text-[28px] leading-none">
                {tier.investment}
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/55 mb-1.5">
                Best For
              </div>
              <div className="text-white/85 text-[15px] md:text-[16px] leading-snug">{tier.bestFor}</div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/55 mb-1.5">
                Timeline
              </div>
              <div className="text-white/85 text-[15px] md:text-[16px] leading-snug">{tier.timeframe}</div>
            </div>
            <Link
              to={tier.ctaTo}
              className="block text-center bg-cta hover:bg-cta-hover text-white font-bold text-sm md:text-[15px] px-5 py-3.5 rounded transition-colors"
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

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-1 md:pt-6 pb-20">
          {/* ───── HERO ───── */}
          <section className="relative -mx-6 px-6 py-4 md:py-12 mb-2 text-center overflow-hidden">
            {/* Radial spotlight wash */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(var(--accent-blue) / 0.18), transparent 70%), linear-gradient(180deg, hsl(var(--navy-light) / 0.6), transparent 80%)",
              }}
            />
            {/* Bottom hairline */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="inline-flex items-center text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-cta bg-cta/15 border border-cta/25 px-2.5 py-1 rounded-md">
              Built for Plumbing &amp; HVAC. Designed to Book More Calls.
            </div>

            <h1 className="font-extrabold text-white mt-2 md:mt-4 mb-2 md:mb-5 leading-[1.02] tracking-[-0.02em] uppercase text-[clamp(26px,7.5vw,88px)]">
              One <span className="text-accent-blue">Stream</span> of Demand.
              <br />
              Three Ways to Grow.
            </h1>

            <p className="text-white/80 text-[14px] sm:text-[19px] max-w-[720px] mx-auto leading-snug md:leading-relaxed">
              Growth systems for plumbing &amp; HVAC companies.{" "}
              <span className="text-white font-semibold">
                Not marketing services. A complete growth system.
              </span>
            </p>
            <p className="text-white font-semibold mt-2 md:mt-3 text-[13px] sm:text-[16px]">
              Everything in Silver carries into Gold. Everything in Gold carries into Diamond.
            </p>

            <div className="inline-block mt-4 md:mt-7 text-[12px] md:text-[13px] text-white/70 border border-white/20 bg-white/[0.06] px-3 md:px-4 py-1.5 rounded">
              ◆ One plumbing company and one HVAC client per market.
            </div>
          </section>

          {/* ───── ONE-TIME SETUP (Foundation Build) ───── */}
          <section
            className="mt-12 rounded-xl border border-cta/30 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--cta) / 0.10), hsl(var(--navy-light)) 55%, hsl(var(--navy)))",
            }}
          >
            {/* Header band */}
            <div className="px-6 sm:px-10 pt-9 pb-7 border-b border-white/[0.07]">
              <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
                <div>
                  <Eyebrow>The Foundation Build</Eyebrow>
                  <h2 className="font-extrabold text-white text-[28px] md:text-[36px] leading-[1.08] tracking-tight mt-3 mb-3">
                    Before any program runs, we build the engine.
                  </h2>
                  <p className="text-white/80 text-[17px] md:text-[18px] leading-relaxed max-w-[680px]">
                    The website is the growth engine, not a brochure. Every Google ranking, ad click,
                    and review has to land somewhere that converts. We build that foundation once.
                    Every program after this drives demand through it.
                  </p>
                  <p className="text-white/55 text-[15px] mt-3">
                    Required for all programs. Billed at signup, work starts day one.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFoundationOpen((v) => !v)}
                    aria-expanded={foundationOpen}
                    className="mt-5 inline-flex items-center gap-2.5 rounded-md border border-cta/40 bg-cta/10 hover:bg-cta/15 text-white font-semibold text-[15px] px-4 py-2.5 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-cta text-white flex items-center justify-center">
                      {foundationOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={3} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={3} />
                      )}
                    </span>
                    {foundationOpen ? "Hide what you get" : "See everything you actually get"}
                  </button>
                </div>

                {/* Price block */}
                <div className="rounded-lg bg-navy/70 border border-cta/40 px-7 py-6 min-w-[240px]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cta">
                    Foundation Build
                  </div>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-2xl font-bold text-white">$</span>
                    <span className="font-extrabold text-white text-[56px] leading-none tracking-tight">
                      4,995
                    </span>
                    <span className="text-white/70 text-base font-semibold ml-1">one time</span>
                  </div>
                  <div className="text-white/65 text-sm mt-2">
                    60-day build. Paid upfront at signup. Work starts day one.
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10 text-[13px] text-white/55">
                    Covers your full foundation build. One-time, not recurring.
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/55 mb-2.5">
                      Payment Options
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-white rounded-md px-2.5 py-1.5 inline-flex items-center text-xs font-semibold text-navy">
                        Credit / Debit
                      </span>
                      <span className="bg-white rounded-md px-2.5 py-1.5 inline-flex items-center">
                        <img src={klarnaLogo} alt="Klarna" className="h-4 w-auto" />
                      </span>
                      <span className="bg-white rounded-md px-2.5 py-1.5 inline-flex items-center">
                        <img src={paypalCreditLogo} alt="PayPal Credit" className="h-4 w-auto" />
                      </span>
                      <span className="bg-white rounded-md px-2.5 py-1.5 inline-flex items-center">
                        <img
                          src={paymentMethods}
                          alt="Visa, Mastercard, American Express, PayPal accepted"
                          className="h-4 w-auto"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables grid (collapsible) */}
            {foundationOpen && (
              <div className="px-6 sm:px-10 pt-9 pb-2 animate-in fade-in-50 slide-in-from-top-2 duration-300">
                <h3 className="font-extrabold text-white text-[22px] md:text-[26px] tracking-tight mb-1.5">
                  What you actually get
                </h3>
                <p className="text-white/65 text-[15px] md:text-base mb-7 max-w-[720px]">
                  A complete, owned, conversion-ready foundation. Built by our team, installed during a
                  60-day onboarding, yours to keep.
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    {
                      Icon: Globe,
                      title: "The Growth Website",
                      items: [
                        "30-page conversion-built website on the DemandStream framework",
                        "Mobile-first, fast-loading, accessibility-ready",
                        "Hub-and-spoke service + service-area page structure",
                        "Financing CTAs, online booking and click-to-call built in",
                        "Schema and structured data across every page",
                        "Your brand kit applied: logo, colors, fonts, imagery",
                      ],
                    },
                    {
                      Icon: MapPin,
                      title: "Google & Local Visibility",
                      items: [
                        "Google Business Profile 110% optimized (every field, category, service, photo, post)",
                        "Local Services Ads (LSA) account stood up and verified",
                        "Citation and listing foundation across core directories",
                        "AI search readiness for AI Maps and answer engines",
                      ],
                    },
                    {
                      Icon: BarChart3,
                      title: "Tracking & Measurement",
                      items: [
                        "Call tracking provisioned for every channel",
                        "Conversion tracking and analytics wired end-to-end",
                        "Reporting dashboard stood up. One view of the funnel",
                        "Attribution mapped from first touch to booked job",
                      ],
                    },
                    {
                      Icon: Compass,
                      title: "Onboarding & Strategy",
                      items: [
                        "Full audit and 6-month growth roadmap",
                        "Kickoff and strategy session with your specialist",
                        "Dedicated Success Specialist assigned for life of program",
                      ],
                    },
                    {
                      Icon: Zap,
                      title: "Why this is the floor, not the ceiling",
                      items: [
                        "We will not run ads to a site we did not build",
                        "We will not promise rankings on a Google Profile we did not optimize",
                        "Every program after this compounds on the same foundation",
                        "Built once. Owned by you. Expanded forever.",
                      ],
                      accent: true,
                    },
                  ].map(({ Icon, title, items, accent }, gi) => (
                    <div
                      key={gi}
                      className={`rounded-lg p-5 sm:p-6 border ${
                        accent
                          ? "bg-cta/[0.06] border-cta/35"
                          : "bg-card border-border-card/70"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-10 h-10 rounded-md flex items-center justify-center border ${
                            accent
                              ? "bg-cta/15 border-cta/40"
                              : "bg-accent-blue/10 border-accent-blue/30"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${accent ? "text-cta" : "text-accent-blue"}`}
                            strokeWidth={2.2}
                          />
                        </div>
                        <h4 className="font-bold text-white text-[17px] md:text-[18px] tracking-tight">
                          {title}
                        </h4>
                      </div>
                      <ul className="space-y-2.5">
                        {items.map((it, ii) => (
                          <li
                            key={ii}
                            className="flex items-start gap-2.5 text-[15px] md:text-base text-white/80 leading-snug"
                          >
                            <Check
                              className={`w-[18px] h-[18px] mt-[3px] shrink-0 ${
                                accent ? "text-cta" : "text-accent-blue"
                              }`}
                              strokeWidth={3}
                            />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Phase strip */}
                <div className="mt-9 grid sm:grid-cols-4 gap-3.5">
                  {[
                    { d: "Days 1 to 15", p: "Audit & Foundation" },
                    { d: "Days 15 to 35", p: "Website & Brand Build" },
                    { d: "Days 35 to 50", p: "Systems & Tracking" },
                    { d: "Days 50 to 60", p: "QA, Launch & Handoff" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="bg-navy/60 border border-border-card/60 rounded-md px-4 py-3.5"
                    >
                      <div className="text-cta font-bold text-sm">{s.d}</div>
                      <div className="text-white/85 text-[15px] md:text-base font-semibold mt-1 leading-snug">
                        {s.p}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA row (always visible) */}
            <div className="px-6 sm:px-10 py-7 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
              <Link
                to="/programs/setup"
                className="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-bold text-base px-7 py-3.5 rounded transition-colors"
              >
                See the full 60-day build →
              </Link>
              <Link
                to="/grow-qualifier"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white/25 hover:border-white/45 text-white font-semibold text-base px-7 py-3 rounded transition-colors"
              >
                Check if your market is open
              </Link>
              <span className="text-white/55 text-[14px]">
                Setup pairs with a monthly program: The Source, The Current, or The Surge.
              </span>
            </div>
          </section>

          {/* ───── TIERS ───── */}
          <section className="mt-12 grid gap-5 md:grid-cols-3 items-start max-w-[440px] md:max-w-none mx-auto">
            <TierCard
              symbol="◇"
              name="The Source"
              tag="Foundation. Get found and capture every lead. For 1 to 5 truck operators."
              price="$2,495"
              groups={source}
              cap="Ad management: flat up to $2,000/mo managed spend"
              ctaTo="/programs/source"
              highlights={[
                { label: "Best For", value: "1 to 5 trucks" },
                { label: "Revenue Range", value: "$400K to $1.5M" },
                { label: "Startup Fee (The Engine)", value: "$4,995" },
                { label: "Ad Spend Cap", value: "Up to $2,000 / mo" },
              ]}
            />
            <TierCard
              symbol="◈"
              name="The Current"
              tag="Active growth. Paid acceleration plus hands-off automation."
              price="$3,995"
              everything="Everything in The Source, plus ↓"
              groups={current}
              cap="Ad management: flat up to $5,000/mo managed spend"
              popular
              ctaTo="/programs/current"
              highlights={[
                { label: "Best For", value: "5 to 15 trucks" },
                { label: "Revenue Range", value: "$1.5M to $4M" },
                { label: "Startup Fee (The Engine)", value: "$4,995" },
                { label: "Ad Spend Cap", value: "Up to $5,000 / mo" },
              ]}
            />
            <TierCard
              symbol="❖"
              name="The Surge"
              tag="Own your market. Take competitors' share."
              price="$5,995"
              everything="Everything in The Current, plus ↓"
              groups={surge}
              cap="Ad management: flat up to $10,000/mo managed spend"
              ctaTo="/programs/surge"
              highlights={[
                { label: "Best For", value: "15+ trucks" },
                { label: "Revenue Range", value: "$4M+" },
                { label: "Startup Fee (The Engine)", value: "$4,995" },
                { label: "Ad Spend Cap", value: "Up to $10,000 / mo" },
              ]}
            />
          </section>

          {/* ───── PAYMENT OPTIONS ───── */}
          <section className="mt-8 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 md:gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 md:px-5 py-2.5">
              <span className="text-[10px] md:text-[11px] font-semibold text-white/60 uppercase tracking-wider">
                Pay with
              </span>
              <span className="hidden md:block w-px h-3.5 bg-white/15" />
              <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
                <span className="text-[11px] md:text-[12px] font-medium text-white/85 bg-white/[0.08] border border-white/10 rounded px-2 py-1">
                  Credit / Debit
                </span>
                <span className="bg-white rounded px-1.5 py-1 inline-flex items-center">
                  <img src={klarnaLogo} alt="Klarna" className="h-3.5 md:h-4 w-auto" />
                </span>
                <span className="bg-white rounded px-1.5 py-1 inline-flex items-center">
                  <img src={paypalCreditLogo} alt="PayPal Credit" className="h-3.5 md:h-4 w-auto" />
                </span>
              </div>
            </div>
            <p className="text-[12px] text-white/45 mt-2.5">
              Monthly program fees can be paid via card or financing. Ad spend is billed separately and paid directly to Google.
            </p>
          </section>

          {/* ───── INVESTMENT TIMELINE MAP ───── */}
          <section className="mt-12">
            <div className="text-center mb-6">
              <Eyebrow>What you actually pay, and when</Eyebrow>
              <h3 className="font-extrabold text-white text-[24px] md:text-[30px] tracking-tight mt-3">
                Investment timeline
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] mt-2 max-w-[640px] mx-auto">
                Using The Current program ($3,995/mo) as an example. The Engine is one time. Ad spend is paid directly to Google.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-8">
              {/* Horizontal rail */}
              <div className="relative">
                <div className="hidden md:block absolute left-0 right-0 top-[22px] h-[2px] bg-gradient-to-r from-cta/60 via-accent-blue/60 to-accent-blue/30" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 relative">
                  {[
                    {
                      label: "The Engine",
                      amount: "$5,000",
                      sub: "Foundation Build",
                      note: "One-time. Paid upfront. 60-day build starts day one.",
                      dot: "bg-cta border-cta",
                      accent: "border-cta/40",
                    },
                    {
                      label: "The Current",
                      amount: "$3,995",
                      sub: "First monthly fee",
                      note: "Program kicks in once The Engine is live. Ad spend paid to Google.",
                      dot: "bg-accent-blue border-accent-blue",
                      accent: "border-accent-blue/40",
                    },
                    {
                      label: "The Current",
                      amount: "$3,995 / mo",
                      sub: "Recurring",
                      note: "Cancel anytime after 90 days. No long contracts.",
                      dot: "bg-accent-blue/70 border-accent-blue/70",
                      accent: "border-accent-blue/30",
                    },
                  ].map((step) => (
                    <div key={step.label} className="relative flex flex-col items-center text-center">
                      <span className={`hidden md:block w-[14px] h-[14px] rounded-full border-2 ${step.dot} relative z-10 mt-[15px] mb-3`} />
                      <div className={`w-full rounded-lg border ${step.accent} bg-navy/60 px-4 py-4`}>
                        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
                          {step.label}
                        </div>
                        <div className="text-white font-extrabold text-[22px] md:text-[24px] mt-1.5 leading-none">
                          {step.amount}
                        </div>
                        <div className="text-[12px] font-semibold text-white/75 mt-1">
                          {step.sub}
                        </div>
                        <p className="text-[12px] text-white/55 mt-2 leading-snug">
                          {step.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals row */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/50">First 60 days</div>
                  <div className="text-white font-extrabold text-[18px] mt-1">$5,000 total</div>
                  <div className="text-[12px] text-white/55 mt-0.5">Foundation Build only. No program fee yet.</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/50">Day 61 onward</div>
                  <div className="text-white font-extrabold text-[18px] mt-1">Program fee monthly</div>
                  <div className="text-[12px] text-white/55 mt-0.5">$3K / $4K / $6K based on tier</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/50">Ad spend</div>
                  <div className="text-white font-extrabold text-[18px] mt-1">Paid to Google</div>
                  <div className="text-[12px] text-white/55 mt-0.5">Your card. Never marked up.</div>
                </div>
              </div>

            </div>
          </section>



          {/* ───── AD SPEND & MANAGEMENT (placed after tiers) ───── */}
          <section
            className="mt-8 rounded-lg p-6 sm:p-8 border border-accent-blue/40"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--navy-light)), hsl(var(--navy)))",
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div className="max-w-[720px]">
                <h3 className="font-extrabold text-white text-[22px] md:text-[26px] tracking-tight">
                  Ad Spend &amp; Management
                </h3>
                <p className="text-white/80 text-[17px] md:text-[18px] mt-3 leading-relaxed">
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
                    className="bg-card/80 border border-border-card/60 rounded px-5 py-3.5 text-[15px] md:text-[16px] text-white/75"
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
            <p className="italic text-white/70 text-[14px] mt-6 max-w-[560px] mx-auto leading-relaxed">
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
