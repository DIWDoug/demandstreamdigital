import { Helmet } from "react-helmet-async";
import logo from "@/assets/demandstream-digital-logo.svg";

const Swatch = ({
  name,
  hex,
  hsl,
  usage,
  text = "white",
}: {
  name: string;
  hex: string;
  hsl: string;
  usage: string;
  text?: "white" | "black";
}) => (
  <div className="rounded-lg overflow-hidden border border-border-card bg-white shadow-sm">
    <div
      className="h-28 flex items-end p-4"
      style={{ background: hex, color: text === "white" ? "#fff" : "#111827" }}
    >
      <span className="font-bold text-lg">{name}</span>
    </div>
    <div className="p-4 space-y-1">
      <div className="font-mono text-sm text-text-primary">{hex}</div>
      <div className="font-mono text-xs text-text-muted">hsl({hsl})</div>
      <div className="text-sm text-text-secondary pt-2">{usage}</div>
    </div>
  </div>
);

const Section = ({
  eyebrow,
  title,
  children,
  dark,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <section
    className={dark ? "bg-navy text-white" : "section-light"}
    style={{ paddingTop: 96, paddingBottom: 96 }}
  >
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="text-center mb-12">
        <div
          className={`text-xs font-bold tracking-[0.2em] uppercase mb-3 ${
            dark ? "text-accent-blue" : "text-cta"
          }`}
        >
          {eyebrow}
        </div>
        <h2 className={dark ? "text-white" : "text-text-primary"}>{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default function BrandGuide() {
  return (
    <>
      <Helmet>
        <title>Brand & Style Guide | DemandStream Digital</title>
        <meta
          name="description"
          content="The official brand and style guide for DemandStream Digital. Logo, color, typography, components, and voice."
        />
        <link rel="canonical" href="https://demandstreamdigital.com/brand" />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy text-white" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-accent-blue mb-4">
            Brand System v1.1
          </div>
          <h1 className="text-white mb-6">Brand &amp; Style Guide</h1>
          <p className="text-xl text-white/80 max-w-2xl mb-10">
            The visual language that powers DemandStream Digital. Built for Plumbing and HVAC operators who need clarity, authority, and conversion.
          </p>
          <a
            href="/brand-style-guide.pdf"
            className="btn-cta inline-block"
            download
          >
            Download PDF Version
          </a>
        </div>
      </section>

      {/* Logo */}
      <Section eyebrow="01 — Identity" title="Logo">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-navy rounded-lg p-12 flex items-center justify-center">
            <img src={logo} alt="DemandStream Digital logo on navy" className="max-w-[360px] w-full" />
          </div>
          <div className="bg-white border border-border-card rounded-lg p-12 flex items-center justify-center">
            <img
              src={logo}
              alt="DemandStream Digital logo on white"
              className="max-w-[360px] w-full"
              style={{ filter: "invert(1)" }}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white border border-border-card rounded-lg p-6">
            <h3 className="mb-2">Clearspace</h3>
            <p className="text-text-secondary text-sm">
              Maintain a minimum clearspace equal to the cap height of the wordmark on all sides.
            </p>
          </div>
          <div className="bg-white border border-border-card rounded-lg p-6">
            <h3 className="mb-2">Minimum size</h3>
            <p className="text-text-secondary text-sm">
              Do not render the wordmark smaller than 120px wide on screen, or 1 inch in print.
            </p>
          </div>
          <div className="bg-white border border-border-card rounded-lg p-6">
            <h3 className="mb-2">Backgrounds</h3>
            <p className="text-text-secondary text-sm">
              Primary use is white wordmark on Navy. Inverted dark wordmark only on solid Off-white.
            </p>
          </div>
        </div>
      </Section>

      {/* Color */}
      <Section eyebrow="02 — Color" title="Color Palette" dark>
        <div className="mb-10">
          <h3 className="text-white mb-6">Core</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Swatch name="Navy" hex="#0D1B2A" hsl="210 53% 11%" usage="Primary dark surface, navigation, footer." />
            <Swatch name="Navy Light" hex="#1A2E44" hsl="210 44% 18%" usage="Cards and elevated surfaces on dark." />
            <Swatch name="Brand Red" hex="#C0392B" hsl="6 63% 46%" usage="All CTAs, announcement bar, stat numbers." />
            <Swatch name="Off-white" hex="#F7F8FA" hsl="0 0% 98%" usage="Light section backgrounds." text="black" />
          </div>
        </div>
        <div>
          <h3 className="text-white mb-6">Accents</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Swatch name="Accent Blue" hex="#4A90B8" hsl="204 43% 51%" usage="Split headline second lines, icons." />
            <Swatch name="Teal" hex="#2E7D86" hsl="184 49% 35%" usage="Review metric badges only." />
            <Swatch name="Gold" hex="#F59E0B" hsl="38 92% 50%" usage="Star ratings only." />
            <Swatch name="Green" hex="#16A34A" hsl="142 71% 36%" usage="Success states, confirmations." />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-white mb-6">Text &amp; Borders</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Swatch name="Text Primary" hex="#111827" hsl="220 20% 10%" usage="Body text on light surfaces." />
            <Swatch name="Text Muted" hex="#6B7280" hsl="220 9% 42%" usage="Captions, fine print." />
            <Swatch name="Border" hex="#D1D5DB" hsl="220 13% 86%" usage="Hairline dividers." text="black" />
            <Swatch name="Border Card" hex="#E5E7EB" hsl="220 13% 91%" usage="Card outlines on light." text="black" />
          </div>
        </div>
      </Section>

      {/* Typography */}
      <Section eyebrow="03 — Typography" title="Type System">
        <div className="bg-white border border-border-card rounded-lg p-10 mb-8">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-cta mb-3">Single Family</div>
          <div className="text-7xl font-bold text-text-primary mb-2">Inter</div>
          <p className="text-text-secondary">
            Inter is used exclusively across the entire system. No secondary or serif fonts. Weights 400, 600, 700, 900.
          </p>
        </div>

        <div className="space-y-4">
          {[
            { label: "H1 / 48–56px Bold", className: "text-5xl font-bold", sample: "Win every booked call." },
            { label: "H2 / 32–36px Bold", className: "text-4xl font-bold", sample: "Built for Plumbing and HVAC." },
            { label: "H3 / 22–24px SemiBold", className: "text-2xl font-semibold", sample: "Different phone call, different page." },
            { label: "Body / 16px Regular", className: "text-base", sample: "We build conversion engines, not décor. Every page is engineered to capture demand, not impress designers." },
            { label: "Caption / 13px Muted", className: "text-sm text-text-muted", sample: "Source: ServiceTitan revenue data, 2024." },
            { label: "Eyebrow / 11px Bold Uppercase", className: "text-xs font-bold uppercase tracking-[0.2em] text-cta", sample: "Section Label" },
          ].map((t) => (
            <div key={t.label} className="bg-white border border-border-card rounded-lg p-6">
              <div className="text-xs font-bold tracking-[0.15em] uppercase text-text-muted mb-3">{t.label}</div>
              <div className={`${t.className} text-text-primary`}>{t.sample}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Components */}
      <Section eyebrow="04 — Components" title="Core Components" dark>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="premium-card">
            <h3 className="text-white mb-4">Primary CTA</h3>
            <button className="btn-cta">Check Your Market</button>
            <p className="text-white/60 text-sm mt-4">
              Red #C0392B. 14px / 28px padding. 4px radius. Bold uppercase tracking 0.04em.
            </p>
          </div>
          <div className="premium-card">
            <h3 className="text-white mb-4">Stat Number</h3>
            <div className="stat-number">40%</div>
            <p className="text-white/60 text-sm mt-4">
              Inter Black 48–64px clamp. Always Brand Red. Pair with short black caption.
            </p>
          </div>
          <div className="premium-card">
            <h3 className="text-white mb-4">Pill Badge</h3>
            <span className="pill-badge">Plumbing &amp; HVAC</span>
            <p className="text-white/60 text-sm mt-4">
              Rounded full. Elevated surface with subtle border. Secondary text only.
            </p>
          </div>
          <div className="premium-card">
            <h3 className="text-white mb-4">Step Badge</h3>
            <div className="step-badge">01</div>
            <p className="text-white/60 text-sm mt-4">
              40px circle. Accent Blue gradient. Used in roadmaps and process sections.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white text-text-primary rounded-lg border border-border-card p-6">
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} style={{ color: "#F59E0B" }}>★</span>
              ))}
            </div>
            <p className="text-text-primary font-medium mb-4">
              "DemandStream rebuilt our pipeline. We grew 40% YoY without adding a single tech."
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: "#2E7D86", color: "#fff" }}>
              <span className="font-bold text-sm">+40% YoY</span>
            </div>
            <div className="text-sm text-text-muted mt-3">Pure Plumbing &amp; Air</div>
          </div>
          <div className="bg-white text-text-primary rounded-lg border border-border-card p-6">
            <h3 className="mb-2">Light Card</h3>
            <p className="text-text-secondary text-sm">
              8px radius. 1px border-card. 32px internal padding. Used on Off-white sections.
            </p>
          </div>
        </div>
      </Section>

      {/* Layout */}
      <Section eyebrow="05 — Layout" title="Spacing &amp; Rhythm">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Section padding", v: "96px top & bottom", d: "Vertical rhythm on every alternating section." },
            { t: "Container", v: "max 1400px", d: "Centered. 24px gutter on mobile, 48px on desktop." },
            { t: "Grid gap", v: "24px standard", d: "Card grids use a consistent 24px gutter." },
            { t: "Radius", v: "4px / 8px", d: "Buttons & inputs 4px. Cards 8px. No pill radii outside badges." },
            { t: "Alternation", v: "Dark ↔ Light", d: "Navy #0D1B2A and Off-white #F7F8FA, separated by WaveDividers." },
            { t: "Eyebrow", v: "Centered, Red", d: "11px bold uppercase, 0.2em tracking, always above H2." },
          ].map((r) => (
            <div key={r.t} className="bg-white border border-border-card rounded-lg p-6">
              <div className="text-xs font-bold tracking-[0.15em] uppercase text-cta mb-2">{r.t}</div>
              <div className="text-2xl font-bold text-text-primary mb-2">{r.v}</div>
              <div className="text-sm text-text-secondary">{r.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Voice */}
      <Section eyebrow="06 — Voice" title="Voice &amp; Writing Style" dark>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="premium-card">
            <h3 className="text-white mb-4">Do</h3>
            <ul className="space-y-3 text-white/80">
              <li>• Lead with operational reality: booked calls, capacity, revenue.</li>
              <li>• Use specific, trade-aware language. Plumbing and HVAC only.</li>
              <li>• Short sentences. Periods, commas, colons. No em-dashes.</li>
              <li>• Use "own" instead of "dominate".</li>
              <li>• Name "Google Business Pro SEO" in full.</li>
            </ul>
          </div>
          <div className="premium-card">
            <h3 className="text-white mb-4">Don't</h3>
            <ul className="space-y-3 text-white/80">
              <li>• Marketing jargon (synergy, unlock, leverage, game-changer).</li>
              <li>• Em-dashes anywhere in copy.</li>
              <li>• Mention Electrical, Franchise, or General Contractor work.</li>
              <li>• Mix in serif or handwriting fonts. Inter only.</li>
              <li>• Use red for anything other than CTAs and stats.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-navy-light border border-white/10 rounded-lg p-8">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-accent-blue mb-3">
            Tagline Pattern
          </div>
          <div className="text-3xl text-white font-bold leading-tight">
            "Different phone call, <span className="text-accent-blue">different page.</span>"
          </div>
          <p className="text-white/60 mt-4">
            Split-headline format: black/white first line, Accent Blue second line for emphasis.
          </p>
        </div>
      </Section>

      <section className="bg-navy text-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-white mb-4">Take it with you.</h2>
          <p className="text-white/70 mb-8">
            Download the full brand and style guide as a portable PDF.
          </p>
          <a href="/brand-style-guide.pdf" className="btn-cta inline-block" download>
            Download PDF
          </a>
        </div>
      </section>
    </>
  );
}
