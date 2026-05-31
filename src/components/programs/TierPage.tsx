
import { Link } from "react-router-dom";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/SEOHead";

export type TierFeatureItem = string | { em: string; rest?: string };
export type TierGroup = { title: string; items: TierFeatureItem[] };

export type TierPageData = {
  slug: "source" | "current" | "surge";
  symbol: string;
  eyebrow: string;        // e.g. "Foundation"
  name: string;           // e.g. "Source"
  tagline: string;
  bestFor: string;        // text after "Best for:"
  monthlyPrice: string;   // "$2,500"
  adSpendCap: string;     // "$2,000"
  contentPerMo: string;   // "3"
  goal: string;
  everythingIn?: string;  // e.g. "Everything in Source, plus ↓"
  groups: TierGroup[];
  fit: { yes: string[]; no: string[] };
  adManagementCopy: string; // sentence describing this tier's cap + terms
  upNext?: { label: string; to: string };
  eyebrowColor?: "accent-blue" | "cta";
  flagship?: boolean;
  seoTitle: string;
  seoDescription: string;
  canonical: string;
};

const TIERS = [
  { slug: "source", label: "SOURCE", to: "/programs/source" },
  { slug: "current", label: "CURRENT", to: "/programs/current" },
  { slug: "surge", label: "SURGE", to: "/programs/surge" },
  { slug: "setup", label: "SETUP", to: "/programs#setup" },
] as const;

const TierPage = ({ data }: { data: TierPageData }) => {
  return (
    <>
      <SEOHead title={data.seoTitle} description={data.seoDescription} canonical={data.canonical} />
      <Header />

      <main className="bg-navy text-white pt-16 relative overflow-hidden">
        {/* radial glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-44 left-[20%] w-[640px] h-[640px] rounded-full"
          style={{
            background: `radial-gradient(circle, hsl(var(--cta) / ${data.flagship ? 0.18 : 0.1}), transparent 65%)`,
          }}
        />
        {data.flagship && (
          <div
            aria-hidden
            className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 w-[820px] h-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, hsl(var(--cta-glow) / 0.22), transparent 70%)",
            }}
          />
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-56 -right-10 w-[580px] h-[580px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--accent-blue) / 0.10), transparent 65%)" }}
        />

        <div className="relative z-10 max-w-[1040px] mx-auto px-6 pt-10 pb-20">
          {/* ── Tier switcher ── */}
          <nav className="flex flex-wrap gap-2 mb-10" aria-label="Program tiers">
            {TIERS.map((t) => {
              const active = t.slug === data.slug;
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
            <div className="text-[12px] font-bold uppercase tracking-[0.21em] text-accent-blue flex items-center gap-3">
              <span className="text-[30px] leading-none">{data.symbol}</span>
              {data.eyebrow}
            </div>
            <h1 className="font-extrabold text-white mt-2 mb-1.5 leading-[1.04] tracking-[-0.015em] text-[clamp(34px,5.4vw,56px)]">
              {data.name}
            </h1>
            <p className="text-white/75 text-[19px] max-w-[620px] leading-snug">{data.tagline}</p>
            <p className="mt-3.5 text-[14px] text-white/55">
              <b className="text-white font-semibold">Best for:</b> {data.bestFor}
            </p>
          </section>

          {/* ── 4-stat row ── */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-8 mb-2">
            {[
              { k: "Monthly", v: data.monthlyPrice, suffix: "/mo" },
              { k: "Setup", v: "$5,000", suffix: " 1x" },
              { k: "Ad spend cap", v: data.adSpendCap, suffix: "/mo" },
              { k: "Content / mo", v: data.contentPerMo, suffix: "" },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border-card/70 rounded-lg px-4 py-4">
                <div className="text-[11px] tracking-[0.09em] uppercase text-white/55 font-semibold">
                  {s.k}
                </div>
                <div className="font-extrabold text-[24px] mt-1 text-white leading-none">
                  {s.v}
                  {s.suffix && (
                    <span className="text-[14px] font-semibold text-white/55 ml-0.5">{s.suffix}</span>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* ── The Goal ── */}
          <section
            className="mt-7 rounded-lg border border-cta/30 px-6 py-6"
            style={{
              background: "linear-gradient(120deg, hsl(var(--cta) / 0.09), hsl(var(--navy-light)))",
            }}
          >
            <h3 className="text-[12px] tracking-[0.17em] uppercase text-cta font-bold">The Goal</h3>
            <p className="text-white text-[17px] mt-2 max-w-[760px] leading-relaxed">{data.goal}</p>
            {data.everythingIn && (
              <div className="inline-block mt-3 text-[13px] font-semibold text-cta bg-cta/[0.08] border border-cta/35 rounded px-3.5 py-2">
                {data.everythingIn}
              </div>
            )}
          </section>

          {/* ── What's Included ── */}
          <section className="mt-9">
            <h2 className="font-extrabold text-[24px] tracking-[-0.015em] text-white">What's Included</h2>
            <p className="text-white/55 text-[14px] mb-4">Your complete foundation.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {data.groups.map((g, gi) => (
                <div key={gi} className="bg-card border border-border-card/70 rounded-lg p-5">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.13em] text-accent-blue mb-2.5">
                    {g.title}
                  </h4>
                  <ul className="space-y-0">
                    {g.items.map((item, ii) => (
                      <li key={ii} className="relative pl-5 text-[14px] text-white/75 py-1 leading-snug">
                        <span className="absolute left-0.5 top-[10px] w-1.5 h-1.5 rounded-full bg-accent-blue/80" />
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
          </section>

          {/* ── Fit / Not Fit ── */}
          <section className="mt-9">
            <h2 className="font-extrabold text-[24px] tracking-[-0.015em] text-white">
              Is {data.name} Right for You?
            </h2>
            <p className="text-white/55 text-[14px] mb-4">A quick gut check before we talk.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border-card/70 rounded-lg p-5">
                <h4 className="text-[13px] font-bold mb-2.5 flex items-center gap-2 text-green-500">
                  ✓ A strong fit if
                </h4>
                <ul className="space-y-0">
                  {data.fit.yes.map((t, i) => (
                    <li key={i} className="relative pl-[22px] text-[14px] text-white/75 py-1 leading-snug">
                      <span className="absolute left-0 top-[9px] w-[9px] h-[9px] rounded-full bg-green-500" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border-card/70 rounded-lg p-5">
                <h4 className="text-[13px] font-bold mb-2.5 flex items-center gap-2 text-cta">
                  × Maybe not yet if
                </h4>
                <ul className="space-y-0">
                  {data.fit.no.map((t, i) => (
                    <li key={i} className="relative pl-[22px] text-[14px] text-white/75 py-1 leading-snug">
                      <span className="absolute left-0 top-[9px] w-[9px] h-[9px] rounded-full bg-cta" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── Ad spend & management ── */}
          <section className="mt-9 rounded-lg bg-navy-light border border-border-card/70 px-6 py-6">
            <h3 className="text-[12px] font-bold tracking-[0.17em] uppercase text-cta">
              Ad Spend &amp; Management
            </h3>
            <p
              className="text-white/75 text-[14px] mt-2.5 max-w-[780px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.adManagementCopy }}
            />
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="bg-card border border-border-card/70 rounded px-4 py-3 text-[13px] text-white/70">
                <b className="block text-white font-extrabold text-[17px] leading-tight">
                  {data.adSpendCap}
                </b>
                managed spend included
              </div>
              <div className="bg-card border border-border-card/70 rounded px-4 py-3 text-[13px] text-white/70">
                <b className="block text-white font-extrabold text-[17px] leading-tight">20%</b>
                over cap
              </div>
              <div className="bg-card border border-border-card/70 rounded px-4 py-3 text-[13px] text-white/70">
                <b className="block text-white font-extrabold text-[17px] leading-tight">15%</b>
                above $10k/mo
              </div>
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
            {data.upNext && (
              <div className="mt-5 text-[14px] text-white/70">
                Ready for more?{" "}
                <Link to={data.upNext.to} className="text-accent-blue font-semibold hover:underline">
                  {data.upNext.label} →
                </Link>
              </div>
            )}
          </section>

          <p className="text-white/45 text-[12px] mt-8 text-center leading-relaxed">
            DemandStream Digital. Growth systems for plumbing &amp; HVAC.
            <br />
            Month-to-month after the initial term. Ad spend billed separately as pass-through.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TierPage;
