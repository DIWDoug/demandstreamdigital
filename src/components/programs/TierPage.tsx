import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Plus, Minus, Check } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/SEOHead";
import { TIERS, type TierData } from "@/data/programs";

// Back-compat exports for existing imports
export type TierFeatureItem = string | { em: string; rest?: string };
export type TierGroup = { title: string; items: TierFeatureItem[] };
export type TierPageData = TierData & {
  eyebrowColor?: "accent-blue" | "cta";
  upNext?: { label: string; to: string };
  topTierNote?: string;
};

interface TierPageProps {
  data: TierData;
}

const TierRow = ({
  tier,
  open,
  onToggle,
}: {
  tier: TierData;
  open: boolean;
  onToggle: () => void;
}) => {
  const flagship = !!tier.flagship;
  return (
    <article
      id={tier.slug}
      className={`border ${
        open ? "border-cta/50" : "border-border-card/60"
      } rounded-md bg-card transition-colors`}
    >
      {/* ── Trigger row ── */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${tier.slug}-panel`}
        className="w-full flex items-center gap-4 sm:gap-6 px-5 sm:px-7 py-5 sm:py-6 text-left group"
      >
        <span
          aria-hidden
          className={`text-[28px] sm:text-[34px] leading-none shrink-0 ${
            flagship ? "text-cta" : "text-accent-blue"
          }`}
        >
          {tier.symbol}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="font-extrabold text-white uppercase tracking-[0.05em] text-[22px] sm:text-[28px] leading-none">
              {tier.name}
            </h2>
            <span
              className={`text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.18em] ${
                flagship ? "text-cta" : "text-accent-blue"
              }`}
            >
              {tier.eyebrow}
            </span>
          </div>
          <p className="text-white/60 text-[13.5px] sm:text-[14.5px] mt-1.5 leading-snug line-clamp-2 sm:line-clamp-1">
            {tier.tagline}
          </p>
        </div>

        <div className="hidden sm:flex flex-col items-end shrink-0 mr-2">
          <span className="text-[11px] uppercase tracking-[0.14em] text-white/45 font-semibold">
            Monthly
          </span>
          <span className="font-extrabold text-white text-[20px] leading-none mt-1">
            {tier.monthlyPrice}
            <span className="text-[12px] text-white/50 ml-0.5">/mo</span>
          </span>
        </div>

        <span
          className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
            open
              ? "border-cta text-cta bg-cta/10"
              : "border-border-card/80 text-white/60 group-hover:border-white/40"
          }`}
        >
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      {/* ── Panel ── */}
      {open && (
        <div
          id={`${tier.slug}-panel`}
          className="px-5 sm:px-7 pb-8 pt-2 border-t border-border-card/40"
        >
          {/* Stat row + Goal */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-start pt-6">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">
                Best For
              </div>
              <p className="text-white text-[16px] sm:text-[17px] mt-1.5 leading-relaxed">
                {tier.bestFor}
              </p>

              <div className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-cta">
                Goal
              </div>
              <p className="text-white/85 text-[15.5px] sm:text-[16.5px] mt-1.5 leading-relaxed max-w-[680px]">
                {tier.goal}
              </p>
            </div>

            <div className="grid grid-cols-3 lg:flex lg:flex-col gap-3 lg:gap-2 lg:min-w-[200px] lg:border-l lg:border-border-card/60 lg:pl-6">
              {[
                { k: "Monthly Fee", v: tier.monthlyPrice, suffix: "/mo" },
                { k: "Startup Fee", v: "$5,000", suffix: " 1x" },
                { k: "Ad Budget", v: tier.adSpendCap, suffix: "/mo" },
              ].map((s, i) => (
                <div key={i} className="lg:py-1.5">
                  <div className="text-[10.5px] uppercase tracking-[0.14em] text-white/50 font-semibold">
                    {s.k}
                  </div>
                  <div className="font-extrabold text-white text-[20px] sm:text-[22px] leading-none mt-1">
                    {s.v}
                    <span className="text-[12px] font-semibold text-white/50 ml-0.5">
                      {s.suffix}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included — editorial split */}
          <div className="mt-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 lg:gap-12 border-t border-border-card/40 pt-8">
            {/* Stencil tier name */}
            <div className="relative">
              <div className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-white/45 mb-3">
                What is Included
              </div>
              <div
                aria-hidden
                className="font-extrabold uppercase leading-[0.88] tracking-[-0.02em] select-none"
                style={{
                  fontSize: "clamp(56px, 9vw, 120px)",
                  color: "transparent",
                  WebkitTextStroke: `1.5px hsl(var(--${
                    flagship ? "cta" : "accent-blue"
                  }) / 0.55)`,
                }}
              >
                {tier.name.toUpperCase()}
              </div>
              {tier.everythingIn && (
                <div className="mt-4 inline-block text-[12.5px] font-semibold text-cta bg-cta/[0.08] border border-cta/35 rounded px-3 py-1.5">
                  {tier.everythingIn}
                </div>
              )}
            </div>

            {/* Flat feature list */}
            <ul className="space-y-0 divide-y divide-white/[0.07]">
              {tier.groups.flatMap((g) =>
                g.items.map((item, ii) => ({ g, item, ii })),
              ).map(({ item }, idx) => {
                const isObj = typeof item !== "string";
                return (
                  <li
                    key={idx}
                    className="flex items-start gap-3 py-3 text-[15px] sm:text-[16px] text-white/85 leading-snug"
                  >
                    <Check
                      className={`w-[16px] h-[16px] mt-[5px] shrink-0 ${
                        flagship ? "text-cta" : "text-accent-blue"
                      }`}
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

          {/* Fit / Not Fit */}
          <div className="mt-10 grid md:grid-cols-2 gap-6 border-t border-border-card/40 pt-8">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-green-500 mb-3">
                A strong fit if
              </div>
              <ul className="space-y-2">
                {tier.fit.yes.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[15px] text-white/80 leading-snug"
                  >
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
                {tier.fit.no.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[15px] text-white/70 leading-snug"
                  >
                    <span className="mt-[8px] w-1.5 h-1.5 rounded-full bg-cta shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ad spend & management */}
          <div className="mt-8 border-t border-border-card/40 pt-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-cta">
              Ad Spend &amp; Management
            </div>
            <p
              className="text-white/70 text-[14px] mt-2 max-w-[760px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: tier.adManagementCopy }}
            />
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/grow-qualifier"
              className="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-bold text-[14.5px] tracking-[0.03em] px-6 py-3 rounded transition-colors"
            >
              Book Free Consultation →
            </Link>
            <span className="text-[13px] text-white/55">
              One plumbing &amp; one HVAC company per market.
            </span>
          </div>
        </div>
      )}
    </article>
  );
};

const TierPage = ({ data }: TierPageProps) => {
  const [openSlug, setOpenSlug] = useState<TierData["slug"]>(data.slug);
  const mainRef = useRef<HTMLElement>(null);

  // Keep panel in sync if user navigates between /programs/* routes
  useEffect(() => {
    setOpenSlug(data.slug);
  }, [data.slug]);

  return (
    <>
      <SEOHead
        title={data.seoTitle}
        description={data.seoDescription}
        canonical={data.canonical}
      />
      <Header />

      <main
        ref={mainRef}
        className="bg-navy text-white pt-16 relative overflow-hidden"
      >
        {/* subtle wash */}
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
              "radial-gradient(circle, hsl(var(--accent-blue) / 0.08), transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-6 pt-10 pb-20">
          {/* ── Page intro ── */}
          <header className="mb-10 max-w-[760px]">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-cta">
              Our Programs
            </div>
            <h1 className="font-extrabold text-white mt-2 leading-[1.05] tracking-[-0.015em] text-[clamp(32px,5vw,52px)]">
              Three Phases. One Growth System.
            </h1>
            <p className="text-white/70 text-[16px] sm:text-[17px] mt-3 leading-relaxed">
              Pick the phase that matches where your plumbing or HVAC company is
              today. Each tier builds on the last. Tap to expand and see what's
              inside.
            </p>
          </header>

          {/* ── Accordion ── */}
          <div className="space-y-3.5">
            {TIERS.map((t) => (
              <TierRow
                key={t.slug}
                tier={t}
                open={openSlug === t.slug}
                onToggle={() =>
                  setOpenSlug((cur) => (cur === t.slug ? ("" as TierData["slug"]) : t.slug))
                }
              />
            ))}
          </div>

          {/* ── Setup callout ── */}
          <section
            className="mt-10 rounded-md border border-border-card/60 px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-card"
          >
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-blue">
                Required for every program
              </div>
              <div className="font-extrabold text-white text-[20px] mt-1">
                The Foundation Build · $5,000 one-time
              </div>
              <p className="text-white/65 text-[14px] mt-1 max-w-[560px] leading-snug">
                30-page growth website, GBP optimization, tracking, CRM and
                automation. 60-day build, then your program runs on top.
              </p>
            </div>
            <Link
              to="/programs/setup"
              className="inline-flex items-center justify-center bg-transparent border border-accent-blue/70 text-accent-blue hover:bg-accent-blue hover:text-navy font-bold text-[14px] tracking-[0.03em] px-5 py-2.5 rounded transition-colors shrink-0"
            >
              See the Setup →
            </Link>
          </section>

          {/* ── Closing CTA ── */}
          <section
            className="mt-10 text-center rounded-md border border-border-card/60 px-6 py-12"
            style={{
              background:
                "linear-gradient(160deg, hsl(var(--navy-light)), hsl(var(--navy)))",
            }}
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent-blue">
              Ready to own your market?
            </div>
            <h2 className="font-extrabold text-white text-[28px] sm:text-[32px] tracking-[-0.015em] mt-2.5 mb-2">
              Claim Your Territory
            </h2>
            <p className="text-white/70 text-[15px] max-w-[520px] mx-auto mb-6 leading-relaxed">
              One plumbing company and one HVAC company per market. A short,
              no-pressure conversation to confirm fit before any pitch.
            </p>
            <Link
              to="/grow-qualifier"
              className="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-bold text-[15px] tracking-[0.03em] px-7 py-3.5 rounded transition-colors"
            >
              Schedule a Growth Audit →
            </Link>
          </section>

          <p className="text-white/45 text-[12px] mt-8 text-center leading-relaxed">
            DemandStream Digital. Growth systems for plumbing &amp; HVAC.
            <br />
            Month-to-month after the initial term. Ad spend billed separately as
            pass-through.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TierPage;
