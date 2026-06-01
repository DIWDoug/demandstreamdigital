import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/SEOHead";
import { type TierData } from "@/data/programs";

// Back-compat exports
export type TierFeatureItem = string | { em: string; rest?: string };
export type TierGroup = { title: string; items: TierFeatureItem[] };
export type TierPageData = TierData & {
  eyebrowColor?: "accent-blue" | "cta";
  upNext?: { label: string; to: string };
  topTierNote?: string;
};

const NAV_TIERS = [
  { slug: "source", label: "SOURCE", to: "/programs/source" },
  { slug: "current", label: "CURRENT", to: "/programs/current" },
  { slug: "surge", label: "SURGE", to: "/programs/surge" },
  { slug: "setup", label: "SETUP", to: "/programs/setup" },
] as const;

const TierPage = ({ data }: { data: TierPageData }) => {
  const flagship = !!data.flagship;
  const accent = flagship ? "cta" : "accent-blue";

  return (
    <>
      <SEOHead title={data.seoTitle} description={data.seoDescription} canonical={data.canonical} />
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
          style={{ background: "radial-gradient(circle, hsl(var(--accent-blue) / 0.08), transparent 65%)" }}
        />

        <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-6 pt-10 pb-20">
          {/* ── Tier switcher ── */}
          <nav className="flex flex-wrap gap-2 mb-10" aria-label="Program tiers">
            {NAV_TIERS.map((t) => {
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
          <header className="max-w-[760px]">
            <div
              className={`text-[11px] font-bold uppercase tracking-[0.22em] flex items-center gap-3 text-${accent}`}
            >
              <span className="text-[26px] leading-none">{data.symbol}</span>
              {data.eyebrow}
            </div>
            <h1 className="font-extrabold text-white mt-3 leading-[1.04] tracking-[-0.015em] text-[clamp(34px,5.4vw,58px)] uppercase">
              {data.name}
            </h1>
            <p className="text-white/75 text-[17px] sm:text-[19px] mt-3 leading-snug">
              {data.tagline}
            </p>
            <p className="mt-4 text-[14px] text-white/55">
              <b className="text-white font-semibold">Best for:</b> {data.bestFor}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/grow-qualifier"
                className="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-bold text-[14.5px] tracking-[0.03em] px-6 py-3 rounded transition-colors"
              >
                Book Free Consultation →
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center bg-transparent border border-border-card/80 text-white/80 hover:text-white hover:border-white/40 font-semibold text-[14px] tracking-[0.03em] px-5 py-3 rounded transition-colors"
              >
                Compare All Programs
              </Link>
            </div>
          </header>

          {/* ── Stat row ── */}
          <section className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {[
              { k: "Monthly Fee", v: data.monthlyPrice, suffix: "/mo" },
              { k: "Startup Fee", v: "$5,000", suffix: " 1x" },
              { k: "Ad Budget", v: data.adSpendCap, suffix: "/mo" },
              { k: "Content / mo", v: data.contentPerMo, suffix: "" },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border-card/70 rounded-md px-4 py-4">
                <div className="text-[10.5px] uppercase tracking-[0.14em] text-white/55 font-semibold">
                  {s.k}
                </div>
                <div className="font-extrabold text-white text-[22px] sm:text-[24px] leading-none mt-1">
                  {s.v}
                  {s.suffix && (
                    <span className="text-[13px] font-semibold text-white/55 ml-0.5">{s.suffix}</span>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* ── Goal ── */}
          <section className="mt-8 border-t border-border-card/40 pt-7">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-cta">Goal</div>
            <p className="text-white text-[17px] sm:text-[18px] mt-2 max-w-[760px] leading-relaxed">
              {data.goal}
            </p>
            {data.everythingIn && (
              <div className="inline-block mt-4 text-[13px] font-semibold text-cta bg-cta/[0.08] border border-cta/35 rounded px-3.5 py-2">
                {data.everythingIn}
              </div>
            )}
          </section>

          {/* ── What's Included (editorial split) ── */}
          <section className="mt-12 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 lg:gap-12 border-t border-border-card/40 pt-10">
            <div>
              <div className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-white/45 mb-3">
                What is Included
              </div>
              <div
                aria-hidden
                className="font-extrabold uppercase leading-[0.88] tracking-[-0.02em] select-none"
                style={{
                  fontSize: "clamp(64px, 10vw, 132px)",
                  color: "transparent",
                  WebkitTextStroke: `1.5px hsl(var(--${accent}) / 0.55)`,
                }}
              >
                {data.name.toUpperCase()}
              </div>
              <p className="text-white/55 text-[14px] mt-4 max-w-[320px] leading-snug">
                Your complete {data.name.toLowerCase()} build. No add-ons required to launch.
              </p>
            </div>

            <ul className="space-y-0 divide-y divide-white/[0.07]">
              {data.groups.flatMap((g) => g.items).map((item, idx) => {
                const isObj = typeof item !== "string";
                return (
                  <li
                    key={idx}
                    className="flex items-start gap-3 py-3 text-[15px] sm:text-[16px] text-white/85 leading-snug"
                  >
                    <Check
                      className={`w-[16px] h-[16px] mt-[5px] shrink-0 text-${accent}`}
                      strokeWidth={3}
                    />
                    <span>
                      {isObj ? (
                        <>
                          <span className="text-white font-semibold">
                            {(item as { em: string }).em}
                          </span>
                          {(item as { rest?: string }).rest}
                        </>
                      ) : (
                        (item as string)
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* ── Fit / Not Fit ── */}
          <section className="mt-12 grid md:grid-cols-2 gap-8 border-t border-border-card/40 pt-10">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-green-500 mb-3">
                A strong fit if
              </div>
              <ul className="space-y-2">
                {data.fit.yes.map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[15px] text-white/80 leading-snug">
                    <span className="mt-[8px] w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-cta mb-3">
                Maybe not yet if
              </div>
              <ul className="space-y-2">
                {data.fit.no.map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[15px] text-white/70 leading-snug">
                    <span className="mt-[8px] w-1.5 h-1.5 rounded-full bg-cta shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Ad spend & management ── */}
          <section className="mt-12 border-t border-border-card/40 pt-8">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-cta">
              Ad Spend &amp; Management
            </div>
            <p
              className="text-white/75 text-[14.5px] mt-2.5 max-w-[780px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.adManagementCopy }}
            />
            <div className="flex flex-wrap gap-3 mt-5">
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
            className="mt-12 text-center rounded-md border border-border-card/60 px-6 py-12"
            style={{ background: "linear-gradient(160deg, hsl(var(--navy-light)), hsl(var(--navy)))" }}
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent-blue">
              Ready to own your market?
            </div>
            <h2 className="font-extrabold text-white text-[28px] sm:text-[32px] tracking-[-0.015em] mt-2.5 mb-2">
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
            {!data.upNext && data.topTierNote && (
              <div className="mt-5 text-[14px] text-white/60 italic max-w-[480px] mx-auto">
                {data.topTierNote}
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
