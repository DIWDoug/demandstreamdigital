import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/SEOHead";

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
  const dotColor = popular ? "bg-cta" : "bg-accent-blue/80";
  const headingColor = popular ? "text-cta" : "text-accent-blue";

  return (
    <div
      className={`relative rounded-lg bg-card border p-6 sm:p-7 ${
        popular
          ? "border-cta/55 shadow-[0_0_48px_hsl(var(--cta-glow)/0.18)] md:-translate-y-2"
          : "border-border-card/70"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta text-white text-[10px] font-bold tracking-[0.12em] uppercase px-3.5 py-1 rounded-full whitespace-nowrap">
          ★ Most Popular
        </div>
      )}

      <div className="flex items-center gap-2.5 font-extrabold text-[23px] tracking-[0.03em] text-white">
        <span className={`text-[18px] ${headingColor}`}>{symbol}</span>
        {name}
      </div>

      <p className="text-[13px] text-white/70 mt-2 min-h-[36px] leading-snug">{tag}</p>

      <div className="mt-4 text-[38px] font-extrabold tracking-tight text-white leading-none">
        {price}
        <span className="text-[15px] font-semibold text-white/50 ml-0.5">/mo</span>
      </div>

      {everything && (
        <div className="mt-3 text-[12px] font-semibold text-cta bg-cta/[0.08] border border-cta/35 rounded px-3 py-2">
          {everything}
        </div>
      )}

      <div className="mt-4 space-y-4">
        {groups.map((g, gi) => (
          <div key={gi}>
            <h4 className={`text-[11px] font-bold uppercase tracking-[0.13em] mb-2 ${headingColor}`}>
              {g.title}
            </h4>
            <ul className="space-y-1">
              {g.items.map((item, ii) => (
                <li
                  key={ii}
                  className="relative pl-5 text-[13.5px] text-white/70 leading-snug py-1"
                >
                  <span
                    className={`absolute left-0.5 top-[10px] w-1.5 h-1.5 rounded-full ${dotColor}`}
                  />
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <>
                      <span className="text-white font-semibold">{item.em}</span>
                      {item.rest}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link
        to={ctaTo}
        className="btn-cta w-full mt-5"
      >
        {ctaText}
      </Link>

      <div className="text-[12px] text-white/45 border-t border-border-card/70 mt-4 pt-3">
        {cap}
      </div>
    </div>
  );
};

const Programs = () => {
  const source: Group[] = [
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
      title: "Automation — Stepped Up",
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
      items: ["On-Page Authority Building — 5/mo", "Quarterly Growth Planning"],
    },
  ];

  const surge: Group[] = [
    {
      title: "Expansion & Domination",
      items: [
        { em: "Multi-City Service-Area Expansion" },
        "Multi-Channel Paid (Meta · YouTube · Display)",
        "Competitive Displacement Campaigns",
        "On-Page Authority Building — 8/mo",
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
        {/* Soft radial glows (matches other dark sections) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-44 left-[20%] w-[640px] h-[640px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--cta) / 0.10), transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-56 -right-10 w-[580px] h-[580px] rounded-full"
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
            <div className="text-white/55 text-[13px] max-w-[520px] leading-relaxed">
              Your complete foundation: 30-page growth website · Google Business Profile
              optimization · call tracking &amp; conversion setup · schema &amp;
              structured data · CRM &amp; automation install · starter brand kit.
            </div>
          </section>

          {/* ───── TIERS ───── */}
          <section className="mt-6 grid gap-5 md:grid-cols-3 items-start max-w-[440px] md:max-w-none mx-auto">
            <TierCard
              symbol="◇"
              name="SOURCE"
              tag="Foundation — get found & capture every lead. For 1–5 truck operators."
              price="$2,500"
              groups={source}
              cap="Ad management: flat up to $2,000/mo managed spend"
              ctaTo="/programs/source"
            />
            <TierCard
              symbol="◈"
              name="CURRENT"
              tag="Active growth — paid acceleration + hands-off automation."
              price="$4,000"
              everything="Everything in Source, plus ↓"
              groups={current}
              cap="Ad management: flat up to $5,000/mo managed spend"
              popular
            />
            <TierCard
              symbol="❖"
              name="SURGE"
              tag="Market domination — own your territory, take competitors' share."
              price="$6,000"
              everything="Everything in Current, plus ↓"
              groups={surge}
              cap="Ad management: flat up to $10,000/mo managed spend"
            />
          </section>

          {/* ───── AD SPEND & MANAGEMENT ───── */}
          <section className="mt-10 rounded-lg bg-navy-light border border-border-card/70 p-6 sm:p-7">
            <h3 className="text-[13px] font-bold tracking-[0.17em] uppercase text-cta">
              Ad Spend &amp; Management
            </h3>
            <p className="text-white/70 text-[14px] mt-2.5 max-w-[780px] leading-relaxed">
              Your ad spend is always your money, paid to Google directly. Never marked up.
              Each program includes hands-on management of your campaigns up to its spend
              cap. Beyond the cap, management is billed as a small percentage of spend.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              {[
                { b: "Included", rest: "management up to each tier's cap" },
                { b: "20%", rest: "on spend above your cap" },
                { b: "15%", rest: "on spend above $10,000/mo" },
              ].map((p, i) => (
                <div
                  key={i}
                  className="bg-card border border-border-card/70 rounded px-4 py-3 text-[13px] text-white/70"
                >
                  <b className="block text-white font-extrabold text-[18px] leading-tight">
                    {p.b}
                  </b>
                  {p.rest}
                </div>
              ))}
            </div>
          </section>

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
