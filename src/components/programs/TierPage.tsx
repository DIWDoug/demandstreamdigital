import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Plus, Minus, Star, ArrowRight } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/SEOHead";
import { type TierData } from "@/data/programs";

// Back-compat exports
export type TierFeatureItem = string | { em: string; rest?: string };
export type TierGroup = { title: string; items: TierFeatureItem[] };

export type TierProblem = {
  pain: string;
  body: string;
};

export type TierPhase = {
  days: string;
  phase: string;
  what: string;
};

export type TierKPI = {
  metric: string;
  label: string;
  detail: string;
};

export type TierTestimonial = {
  quote: string;
  attribution: string;
  role: string;
  metric: string;
};

export type TierFAQ = { q: string; a: string };

export type TierPageData = TierData & {
  eyebrowColor?: "accent-blue" | "cta";
  upNext?: { label: string; to: string };
  topTierNote?: string;
  problem?: TierProblem;
  process?: TierPhase[];
  kpis?: TierKPI[];
  testimonial?: TierTestimonial;
  faqs?: TierFAQ[];
};

const NAV_TIERS = [
  { slug: "source", label: "SOURCE", to: "/programs/source" },
  { slug: "current", label: "CURRENT", to: "/programs/current" },
  { slug: "surge", label: "SURGE", to: "/programs/surge" },
  { slug: "setup", label: "SETUP", to: "/programs/setup" },
] as const;

const FAQItem = ({ q, a }: TierFAQ) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border-card/60 bg-navy-light rounded-md">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-[15.5px] leading-snug">{q}</span>
        {open ? (
          <Minus className="w-4 h-4 shrink-0 text-cta" strokeWidth={3} />
        ) : (
          <Plus className="w-4 h-4 shrink-0 text-cta" strokeWidth={3} />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-1 text-[14.5px] text-white/75 leading-relaxed">{a}</div>
      )}
    </div>
  );
};

// Static class maps so Tailwind JIT can detect them.
const ACCENT_CLASSES = {
  cta: {
    text: "text-cta",
    bg: "bg-cta",
    border: "border-cta",
    bgSoft: "bg-cta/[0.08]",
    borderSoft: "border-cta/35",
    activePill: "bg-cta text-white border-cta",
  },
  "accent-blue": {
    text: "text-accent-blue",
    bg: "bg-accent-blue",
    border: "border-accent-blue",
    bgSoft: "bg-accent-blue/[0.08]",
    borderSoft: "border-accent-blue/35",
    activePill: "bg-accent-blue text-white border-accent-blue",
  },
} as const;

const TierPage = ({ data }: { data: TierPageData }) => {
  const flagship = !!data.flagship;
  const accentKey: "cta" | "accent-blue" = flagship ? "cta" : "accent-blue";
  const accent = accentKey;
  const A = ACCENT_CLASSES[accentKey];


  return (
    <>
      <SEOHead title={data.seoTitle} description={data.seoDescription} canonical={data.canonical} />
      <Header />

      <main className="bg-navy text-white pt-16 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-44 left-[20%] w-[640px] h-[640px] rounded-full"
          style={{ background: `radial-gradient(circle, hsl(var(--${accent}) / 0.12), transparent 65%)` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[40%] -right-10 w-[580px] h-[580px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(var(--accent-blue) / 0.06), transparent 65%)" }}
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
                      ? A.activePill
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
              className={`text-[11px] font-bold uppercase tracking-[0.22em] flex items-center gap-3 ${A.text}`}
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
                Book Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
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

          {/* ── Problem ── */}
          {data.problem && (
            <section className="mt-14 border-t border-border-card/40 pt-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 lg:gap-12">
              <div>
                <div className={`text-[10.5px] font-bold uppercase tracking-[0.22em] ${A.text} mb-3`}>
                  The Pain This Solves
                </div>
                <h2 className="font-extrabold text-white text-[26px] sm:text-[30px] leading-tight tracking-[-0.015em]">
                  {data.problem.pain}
                </h2>
              </div>
              <div className="border-l-2 border-cta/70 pl-6">
                <p className="text-white/80 text-[16px] sm:text-[17px] leading-relaxed">
                  {data.problem.body}
                </p>
              </div>
            </section>
          )}

          {/* ── Goal ── */}
          <section className="mt-12 border-t border-border-card/40 pt-7">
            <div className={`text-[11px] font-bold uppercase tracking-[0.18em] ${A.text}`}>Goal</div>
            <p className="text-white text-[17px] sm:text-[18px] mt-2 max-w-[760px] leading-relaxed">
              {data.goal}
            </p>
            {data.everythingIn && (
              <div className={`inline-block mt-4 text-[13px] font-semibold ${A.text} ${A.bgSoft} border ${A.borderSoft} rounded px-3.5 py-2`}>
                {data.everythingIn}
              </div>
            )}
          </section>

          {/* ── What's Included (collapsible) ── */}
          <section className="mt-12 border-t border-border-card/40 pt-10">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 lg:gap-12">
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

              <div className="flex items-start justify-end lg:pt-4">
                <button
                  onClick={() => setIncludedOpen((o) => !o)}
                  className="inline-flex items-center gap-2.5 bg-card border border-border-card/70 hover:border-border-card rounded-full px-5 py-3 transition-colors"
                  aria-expanded={includedOpen}
                  aria-controls="included-content"
                >
                  <span className="text-[14px] font-semibold text-white/85">
                    {includedOpen ? "Hide everything" : "See everything you get"}
                  </span>
                  {includedOpen ? (
                    <Minus className="w-4 h-4 text-cta" strokeWidth={3} />
                  ) : (
                    <Plus className="w-4 h-4 text-cta" strokeWidth={3} />
                  )}
                </button>
              </div>
            </div>

            {includedOpen && (
              <div id="included-content" className="mt-8 space-y-7 max-w-[860px]">
                {data.groups.map((g, gi) => (
                  <div key={gi}>
                    <div className={`text-[10.5px] font-bold uppercase tracking-[0.18em] ${A.text} mb-2`}>
                      {g.title}
                    </div>
                    <ul className="space-y-0 divide-y divide-white/[0.07]">
                      {g.items.map((item, idx) => {
                        const isObj = typeof item !== "string";
                        return (
                          <li
                            key={idx}
                            className="flex items-start gap-3 py-3 text-[15px] sm:text-[16px] text-white/85 leading-snug"
                          >
                            <Check
                              className={`w-[16px] h-[16px] mt-[5px] shrink-0 ${A.text}`}
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
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* ── Process Timeline ── */}
          {data.process && data.process.length > 0 && (
            <section className="mt-14 border-t border-border-card/40 pt-10">
              <div className={`text-[10.5px] font-bold uppercase tracking-[0.22em] ${A.text} mb-2`}>
                How We Roll It Out
              </div>
              <h2 className="font-extrabold text-white text-[26px] sm:text-[30px] tracking-[-0.015em] mb-6">
                Your first 90 days, mapped.
              </h2>
              <div className="grid gap-3">
                {data.process.map((p, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border-card/70 rounded-md p-5 grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-6"
                  >
                    <div>
                      <div className={`font-extrabold ${A.text} text-[15px]`}>{p.days}</div>
                      <div className="text-[10.5px] uppercase tracking-[0.16em] text-white/55 font-semibold mt-1">
                        {p.phase}
                      </div>
                    </div>
                    <div className="text-white/80 text-[14.5px] leading-relaxed">{p.what}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── KPIs ── */}
          {data.kpis && data.kpis.length > 0 && (
            <section className="mt-14 border-t border-border-card/40 pt-10">
              <div className={`text-[10.5px] font-bold uppercase tracking-[0.22em] ${A.text} mb-2`}>
                Outcomes You Should Expect
              </div>
              <h2 className="font-extrabold text-white text-[26px] sm:text-[30px] tracking-[-0.015em] mb-6">
                The metrics this tier is built to move.
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.kpis.map((k, i) => (
                  <div key={i} className="bg-card border border-border-card/70 rounded-md p-5">
                    <div className={`font-extrabold ${A.text} text-[34px] leading-none tracking-tight`}>
                      {k.metric}
                    </div>
                    <div className="text-white font-semibold text-[14.5px] mt-2">{k.label}</div>
                    <div className="text-white/60 text-[13px] mt-1.5 leading-snug">{k.detail}</div>
                  </div>
                ))}
              </div>
              <p className="text-white/45 text-[12px] mt-4 leading-snug max-w-[760px]">
                Outcomes vary by market, capacity, and how fast you answer the phone. These are operating
                ranges across our plumbing &amp; HVAC clients on this tier.
              </p>
            </section>
          )}

          {/* ── Testimonial ── */}
          {data.testimonial && (
            <section className="mt-14 border-t border-border-card/40 pt-10">
              <div className="bg-white border border-border-card/70 rounded-md p-8 sm:p-10 text-navy">
                <div className="flex items-center gap-1 mb-4">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-navy text-[19px] sm:text-[22px] font-semibold leading-snug tracking-[-0.01em]">
                  &ldquo;{data.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div className="font-bold text-navy text-[15px]">{data.testimonial.attribution}</div>
                    <div className="text-navy/60 text-[13px]">{data.testimonial.role}</div>
                  </div>
                  <div className="inline-block bg-accent-blue/15 text-accent-blue border border-accent-blue/30 rounded px-3 py-1.5 text-[13px] font-bold">
                    {data.testimonial.metric}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ── Fit / Not Fit ── */}
          <section className="mt-14 grid md:grid-cols-2 gap-8 border-t border-border-card/40 pt-10">
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
          <section className="mt-14 border-t border-border-card/40 pt-8">
            <div className={`text-[11px] font-bold uppercase tracking-[0.18em] ${A.text}`}>
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

          {/* ── FAQ ── */}
          {data.faqs && data.faqs.length > 0 && (
            <section className="mt-14 border-t border-border-card/40 pt-10">
              <div className={`text-[10.5px] font-bold uppercase tracking-[0.22em] ${A.text} mb-2`}>
                Questions, Answered
              </div>
              <h2 className="font-extrabold text-white text-[26px] sm:text-[30px] tracking-[-0.015em] mb-6">
                {data.name} FAQ
              </h2>
              <div className="grid gap-3 max-w-[860px]">
                {data.faqs.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} />
                ))}
              </div>
            </section>
          )}

          {/* ── Closing CTA ── */}
          <section
            className="mt-14 text-center rounded-md border border-border-card/60 px-6 py-12"
            style={{ background: "linear-gradient(160deg, hsl(var(--navy-light)), hsl(var(--navy)))" }}
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent-blue">
              If your market is available...
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
              Schedule a Growth Audit <ArrowRight className="w-4 h-4 ml-2" />
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
