import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/SEOHead";

const TIERS = [
  { slug: "source", label: "SOURCE", to: "/programs/source" },
  { slug: "current", label: "CURRENT", to: "/programs/current" },
  { slug: "surge", label: "SURGE", to: "/programs/surge" },
  { slug: "setup", label: "SETUP", to: "/programs/setup" },
] as const;

type Item = string | { em: string; rest?: string };
type Group = { title: string; items: Item[] };

const GROUPS: Group[] = [
  {
    title: "The Growth Website",
    items: [
      "30-page growth website on the DemandStream framework",
      "Mobile-first, conversion-built layouts",
      "Hub-and-spoke service + service-area structure",
      "Financing CTAs, booking & click-to-call built in",
      "Schema / structured data across every page",
      "Your brand kit applied: logo, colors, fonts, images",
    ],
  },
  {
    title: "Google & Local Visibility",
    items: [
      "Google Business Profile full optimization",
      "Local Services Ads (LSA) account setup",
      "Citation & listing foundation",
      "AI search readiness (AI Maps + answer engines)",
    ],
  },
  {
    title: "Tracking & Measurement",
    items: [
      "Call tracking provisioned",
      "Conversion tracking + analytics",
      "Reporting dashboard stood up",
    ],
  },
  {
    title: "Systems & Automation",
    items: [
      "CRM + sales pipeline configured",
      "Missed-call text-back, lead-capture chat, review engine",
      "Customer reactivation email connected",
    ],
  },
  {
    title: "Onboarding & Strategy",
    items: [
      "Audit & 6-month growth roadmap",
      "Kickoff + strategy session",
      "Dedicated Success Specialist assigned",
    ],
  },
];

const PHASES = [
  {
    days: "Days 1–15",
    phase: "Audit & Foundation",
    what: (
      <>
        We map the next 6–12 months before anything is built.{" "}
        <b className="text-white font-semibold">Audit, strategy, brand kit, and framework kickoff.</b>
      </>
    ),
  },
  {
    days: "Days 16–40",
    phase: "Build & Visibility",
    what: (
      <>
        Your <b className="text-white font-semibold">30-page growth website</b> goes up, Google Business
        Profile is optimized, tracking + schema installed.
      </>
    ),
  },
  {
    days: "Days 41–55",
    phase: "Systems & Content",
    what: (
      <>
        <b className="text-white font-semibold">CRM and automation installed</b>, content loaded, full QA
        across the site and systems.
      </>
    ),
  },
  {
    days: "Days 56–60",
    phase: "Launch",
    what: (
      <>
        Final review, your site goes live, and{" "}
        <b className="text-white font-semibold">Local Services Ads activate</b>.
      </>
    ),
  },
];

const Setup = () => {
  return (
    <>
      <SEOHead
        title="One-Time Setup | The Foundation Build | DemandStream Digital"
        description="The $5,000 foundation build required for all DemandStream programs. 30-page growth website, GBP optimization, tracking, CRM and automation. 60 days, billed at signup."
        canonical="https://demandstreamdigital.com/programs/setup"
      />
      <Header />

      <main className="bg-navy text-white pt-16 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-44 left-[20%] w-[640px] h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--cta) / 0.10), transparent 65%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-56 -right-10 w-[580px] h-[580px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--accent-blue) / 0.10), transparent 65%)" }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-10 pb-20">
          {/* ── Tier switcher ── */}
          <nav className="flex flex-wrap gap-2 mb-10" aria-label="Program tiers">
            {TIERS.map((t) => {
              const active = t.slug === "setup";
              return (
                <Link
                  key={t.slug}
                  to={t.to}
                  className={`text-[13px] font-semibold tracking-[0.04em] px-4 py-2 rounded transition-colors border ${
                    active
                      ? "bg-cta text-white border-cta"
                      : "bg-card text-white/75 border-border-card/70 hover:text-white hover:border-cta/50"
                  }`}
                >
                  {t.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Hero ── */}
          <section>
            <div className="text-xs font-semibold uppercase tracking-wider text-cta flex items-center gap-3">
              <span className="text-[30px] leading-none">■</span>
              One-Time Setup
            </div>
            <h1 className="font-extrabold text-white mt-2 mb-1.5 leading-[1.04] tracking-[-0.015em] text-[clamp(34px,5.4vw,56px)]">
              The Foundation Build
            </h1>
            <p className="text-white/75 text-[19px] max-w-[620px] leading-snug">
              We don't market broken websites. Every client launches on a proven plumbing &amp; HVAC growth
              framework. Built once, expanded forever.
            </p>
            <p className="mt-3.5 text-[14px] text-white/55">
              <b className="text-white font-semibold">Required for all programs.</b> Billed at signup, work
              starts day one.
            </p>
          </section>

          {/* ── 4-stat row ── */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-8 mb-2">
            {[
              { k: "Investment", v: "$5,000", suffix: " 1x" },
              { k: "Timeline", v: "60", suffix: " days" },
              { k: "Billing", v: "At signup", suffix: "", small: true },
              { k: "Website", v: "30", suffix: " pages" },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border-card/70 rounded-lg px-4 py-4">
                <div className="text-xs uppercase tracking-wider text-white/55 font-semibold">
                  {s.k}
                </div>
                <div
                  className={`font-extrabold mt-1 text-white leading-none ${
                    s.small ? "text-[18px]" : "text-[24px]"
                  }`}
                >
                  {s.v}
                  {s.suffix && (
                    <span className="text-[14px] font-semibold text-white/55 ml-0.5">{s.suffix}</span>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* ── Why a real build ── */}
          <section
            className="mt-7 rounded-lg border border-cta/30 px-6 py-6"
            style={{
              background: "linear-gradient(120deg, hsl(var(--cta) / 0.09), hsl(var(--navy-light)))",
            }}
          >
            <h3 className="text-xs uppercase tracking-wider text-cta font-semibold">Why a real build</h3>
            <p className="text-white text-[17px] mt-2 max-w-[760px] leading-relaxed">
              The website is the growth engine, not a brochure. Everything else (Google, reviews, ads,
              automation) exists to feed it. We build the engine right, then every program drives demand
              through it.
            </p>
          </section>

          {/* ── What's Included ── */}
          <section className="mt-9">
            <h2 className="font-extrabold text-[24px] tracking-[-0.015em] text-white">What's Included</h2>
            <p className="text-white/55 text-[14px] mb-4">
              The complete foundation, built and installed during onboarding.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {GROUPS.map((g, gi) => (
                <div key={gi} className="bg-card border border-border-card/70 rounded-lg p-5">
                <h4 className="text-sm font-bold text-accent-blue mb-2.5">
                  {g.title}
                </h4>
                  <ul className="space-y-0">
                    {g.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="relative pl-5 text-[14px] text-white/75 py-1 leading-snug"
                      >
                        <span className="absolute left-0.5 top-[10px] w-1.5 h-1.5 rounded-full bg-accent-blue/80" />
                        {typeof item === "string" ? item : (
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
          </section>

          {/* ── 60-Day Build timeline ── */}
          <section className="mt-9">
            <h2 className="font-extrabold text-[24px] tracking-[-0.015em] text-white">The 60-Day Build</h2>
            <p className="text-white/55 text-[14px] mb-4">
              A structured sequence. No guesswork, visible progress from day one.
            </p>
            <div className="grid gap-3">
              {PHASES.map((p, i) => (
                <div
                  key={i}
                  className="bg-card border border-border-card/70 rounded-lg p-5 grid sm:grid-cols-[160px_1fr] gap-1.5 sm:gap-5"
                >
                  <div>
                    <div className="font-extrabold text-cta text-[15px]">{p.days}</div>
                    <div className="text-[11px] tracking-[0.09em] uppercase text-accent-blue font-bold mt-1">
                      {p.phase}
                    </div>
                  </div>
                  <div className="text-white/75 text-[14px] leading-snug">{p.what}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Closing CTA ── */}
          <section
            className="mt-9 text-center rounded-lg border border-border-card/70 px-6 py-12"
            style={{ background: "linear-gradient(160deg, hsl(var(--navy-light)), hsl(var(--navy)))" }}
          >
            <div className="text-[12px] font-bold uppercase tracking-[0.21em] text-accent-blue">
              Ready to own your market?
            </div>
            <h2 className="font-extrabold text-white text-[30px] tracking-[-0.015em] mt-2.5 mb-2">
              Claim Your Territory
            </h2>
            <p className="text-white/70 text-[15px] max-w-[520px] mx-auto mb-6 leading-relaxed">
              One plumbing company and one HVAC company per market. A short, no-pressure conversation to
              confirm fit before any pitch.
            </p>
            <Link
              to="/grow-qualifier"
              className="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-bold text-[15px] tracking-[0.03em] px-7 py-3.5 rounded transition-colors"
            >
              Schedule a Growth Audit →
            </Link>
            <div className="mt-5 text-[14px] text-white/70">
              Setup pairs with a monthly program:{" "}
              <Link to="/programs/source" className="text-accent-blue font-semibold hover:underline">
                Source
              </Link>{" "}
              ·{" "}
              <Link to="/programs/current" className="text-accent-blue font-semibold hover:underline">
                Current
              </Link>{" "}
              ·{" "}
              <Link to="/programs/surge" className="text-accent-blue font-semibold hover:underline">
                Surge
              </Link>
            </div>
          </section>

          <p className="text-white/45 text-[12px] mt-8 text-center leading-relaxed">
            DemandStream Digital. Growth systems for plumbing &amp; HVAC.
            <br />
            Setup billed at signup. Monthly program begins the same day.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Setup;
