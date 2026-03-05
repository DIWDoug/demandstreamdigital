import { ArrowRight, Phone, AlertTriangle, Map, Eye, Globe, ShieldOff, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import ServiceFitQualifierSection from "@/components/services/generic/ServiceFitQualifierSection";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";
import PlumbingPaidAdsExclusivity from "@/components/services/plumbing-paid-advertising/PlumbingPaidAdsExclusivity";
import { SITE_URL } from "@/lib/constants";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import { WEB_DESIGN_STEPS } from "@/data/web-design-steps";

const canonicalUrl = `${SITE_URL}/plumbing-website-design`;
const metaTitle = "Plumbing Website Design Built to Rank & Book Calls | DSD";
const metaDescription = "Generic plumbing websites don't get calls. We build plumber websites with service architecture, GBP alignment, and emergency-first UX that converts traffic into booked jobs.";

const anchorItems = [
  { label: "Why They Fail", href: "#why-they-fail" },
  { label: "The Framework", href: "#framework" },
  { label: "Page Architecture", href: "#architecture" },
  { label: "GBP Alignment", href: "#gbp" },
  { label: "Who It's For", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const serviceCluster = [
  {
    heading: "Emergency Drain & Sewer",
    items: ["Main line backup / stoppage", "Hydro-jet drain cleaning", "Camera inspection / sewer scope", "Spot repair", "Trenchless sewer replacement"],
  },
  {
    heading: "Water Heater",
    items: ["Water heater repair", "Water heater replacement", "Tankless installation", "Expansion tank", "Anode rod service"],
  },
  {
    heading: "Repiping & Water Quality",
    items: ["Whole-house repipe", "PRV replacement", "Slab leak detection & repair", "Backflow testing", "Water filtration installation"],
  },
  {
    heading: "Fixtures & Plumbing Repairs",
    items: ["Toilet repair & replacement", "Faucet & fixture repair", "Hose bibb replacement", "Garbage disposal", "Under-sink leak repair"],
  },
];

const gbpRows = [
  { category: "Plumber (Primary)", page: "/plumbing-[city]-[state]", intent: "Brand / market-level" },
  { category: "Drain Cleaning Service", page: "/drain-cleaning-[city]-[state]", intent: "Emergency, high urgency" },
  { category: "Water Heater Installation / Repair", page: "/water-heater-installation-[city]-[state] + /water-heater-repair-[city]-[state]", intent: "Repair urgent / install research" },
  { category: "Sewer Services", page: "/sewer-cleaning-[city]-[state] + /trenchless-sewer-replacement-[city]-[state]", intent: "Emergency + project" },
  { category: "Pipe Repair / Repipe", page: "/repipe-specialist-[city]-[state]", intent: "Research, high ticket" },
  { category: "Leak Detection", page: "/slab-leak-detection-[city]-[state]", intent: "High-anxiety, trust-driven" },
  { category: "Backflow Testing", page: "/backflow-testing-certification-[city]-[state]", intent: "Commercial, compliance" },
  { category: "Water Filtration", page: "/water-filtration-installation-[city]-[state]", intent: "Upgrade intent, seasonal" },
];

const plumbingWebDesignQualification = {
  eyebrow: "Selective Fit",
  headline: "Is Plumbing Website Design Right for Your Company?",
  subheadline: "We work best with established plumbing companies that want to own their market with a website built to generate booked calls.",
  goodFit: [
    { point: "3 to 40+ truck plumbing operations with a growth mindset", detail: "You're running an active dispatch board and want your website to bring in more of the calls that fill it." },
    { point: "Companies ready for a premium, scalable plumbing web presence", detail: "You understand a performance website is built once and built right — not rebuilt every two years." },
    { point: "Operators who measure success by booked calls and average ticket", detail: "Traffic reports don't matter to you. The phone ringing with the right jobs does." },
    { point: "Plumbers who want SEO and paid ads working from day one", detail: "Your site will be structured to activate both channels at launch, not require a separate rebuild." },
    { point: "Companies where the phone ringing is the only metric that matters", detail: "Every design and structural decision is filtered through one question: does this generate a call?" },
  ],
  notFit: [
    { point: "Under $500K revenue looking for a low-cost website option", detail: "A performance build requires investment. If budget is the primary filter, there are better fits right now." },
    { point: '"Just need something live" — bare-minimum website projects', detail: "We build revenue infrastructure. Minimum viable placeholders are not in scope." },
    { point: "Companies not ready to track calls or measure source performance", detail: "Every site includes call tracking. If you're not ready to measure, the investment won't show its return." },
    { point: "Plumbers not planning to scale beyond current truck count", detail: "Our builds are designed to scale. If growth isn't the goal, the investment won't make sense." },
  ],
  ctaText: "Claim Your Territory Today",
};

const failureItems = [
  {
    icon: AlertTriangle,
    title: 'The "Plumbing Services" Catch-All',
    body: "One page trying to rank for every service. It doesn't rank for anything specific, so calls from high-value searches — water heater replacement, repipe, hydro-jet — go to competitors with dedicated pages.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: Map,
    title: "GBP and Website Disconnected",
    body: "Your Google Business Profile lists services. Your website should mirror that taxonomy. When it doesn't, you're splitting the authority signal Google needs to rank you in Maps.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Eye,
    title: "Emergency Intent Gets Buried",
    body: "A homeowner with an active leak isn't reading a brochure page. They need to see a phone number and a booking path in under three seconds. If your site doesn't deliver that on mobile, they move to the next result.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
  {
    icon: Globe,
    title: "No City-Level Structure",
    body: "Plumbing is local. A company covering eight cities needs eight pages, not one page with a list of cities in the footer. Without city-specific pages, local search performance stays flat outside the primary market.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: ShieldOff,
    title: "No Trust Signals",
    body: "Plumbing is high-ticket, high-trust. A customer deciding between you and the next company is looking for reviews, licensing, real photos, and proof of recent work. If those elements aren't prominent, they move on.",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    icon: BarChart2,
    title: "No Tracking at Launch",
    body: "Most contractor websites go live with no call tracking and no attribution. That means every dollar spent on ads or SEO from day one is invisible. You can't improve what you can't measure.",
    color: "text-cta",
    bg: "bg-cta/10",
  },
];

const PlumbingWebsiteDesign = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing Website Design",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Plumbing Web Design Service",
    "provider": {
      "@type": "Organization",
      "name": "Demand Stream Digital",
      "url": SITE_URL,
    },
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        keywords="plumbing website design, plumber web design, plumbing website, custom plumbing website, plumbing contractor website design"
        schemaJson={pageSchema}
      />

      <Header />

      {/* HERO */}
      <section className="relative min-h-[70vh] gradient-hero noise-overlay flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 hidden sm:block">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/40 to-cta/20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(hsl(var(--cta)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cta)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="container mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div>
              <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
                <Link to="/" className="text-text-muted hover:text-foreground transition-colors">Home</Link>
                <span className="text-text-muted">/</span>
                <Link to="/website-design" className="text-text-muted hover:text-foreground transition-colors">Website Design</Link>
                <span className="text-text-muted">/</span>
                <span className="text-accent-blue">Plumbing</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 leading-tight">
                Plumbing Website Design
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-cta mb-6 leading-tight">
                Built to Rank and Convert
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                Trade-specific website structure for plumbing companies that want more booked service calls, not just more traffic.
              </p>
              <div className="max-w-xl mb-4">
                <p className="text-base text-text-secondary leading-relaxed mb-4">
                  Most plumbing websites are built like brochures. A services page. A contact form. Some stock photos of a truck. They look reasonable. They don't generate calls.
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Separate pages for emergency drain, water heater, repipe, and sewer. No catch-all.",
                    "Aligned to your GBP service catalog so Maps and web reinforce each other",
                    "AI-ready structure: answer blocks and FAQs for the actual questions homeowners ask",
                    "Call-first UX with emergency reassurance above the fold on mobile",
                    "Built to activate plumbing SEO and paid advertising from day one",
                    "ServiceTitan-compatible: booking flow and call tracking ready at launch",
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-cta mt-0.5">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-text-muted">Plumbing companies only. No general contractors.</p>
            </div>
            {/* Right column — form card */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              <div className="bg-surface-elevated/90 backdrop-blur-md border border-border rounded-2xl p-6 lg:p-8 shadow-xl">
                <h2 className="text-xl font-semibold text-foreground mb-2">See If Your Market Is Available</h2>
                <p className="text-sm text-text-muted mb-6">Tell us about your business. We'll take it from there.</p>
                <TwoStepContactForm
                  formType="plumbing_web_design_hero"
                  submitButtonText="Claim My Territory"
                  step1ButtonText="Claim My Territory"
                />
                <p className="text-xs text-text-muted text-center mt-4">One plumbing company per market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceHubAnchorNav items={anchorItems} />

      {/* WHY PLUMBING WEBSITES FAIL — light, redesigned 2×2 cards */}
      <section id="why-they-fail" className="py-24 lg:py-32 bg-[#F8F9FA] scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="mb-12">
              <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-3">The Problem</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight max-w-2xl">
                Why Most Plumbing Websites Don't Generate Calls
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-3xl">
                Plumbing has a wide service range — and that range is exactly why most plumbing websites underperform. The standard approach is to dump everything onto a single Plumbing Services page that ranks for nothing specific and converts even less.
              </p>
            </div>

            {/* 2×3 problem cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {failureItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-cta/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${item.bg} border border-cta/15 flex items-center justify-center shrink-0`}>
                        <Icon className={`h-5 w-5 ${item.color}`} strokeWidth={1.5} />
                      </div>
                      <p className="font-bold text-slate-900 text-[15px] leading-snug pt-1">
                        {item.title}
                      </p>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom callout bar */}
            <div className="bg-slate-900 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-white text-base leading-relaxed max-w-xl">
                <span className="font-semibold text-white">Every one of these patterns is fixable.</span>{" "}
                <span className="text-slate-300">A homeowner with an active leak needs a phone number in under three seconds. Every build we do is structured to deliver that — and rank for the searches that bring that homeowner in.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta hover:bg-cta/90 text-white font-semibold rounded-lg transition-colors text-sm whitespace-nowrap">
                  Claim Your Territory
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white hover:bg-white/10 font-medium transition-all text-sm whitespace-nowrap">
                  <Phone className="h-4 w-4" />
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET DOMINATION FRAMEWORK — dark, Pattern A */}
      <section id="framework" className="py-24 lg:py-32 bg-[#0F1E2D] scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Label + centered headline */}
            <div className="text-center mb-10">
              <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">The Framework</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                The Market Domination Framework™ for Plumbing
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
                Organized around service clusters — not a single Plumbing Services page. Every plumbing website we build starts with how customers search and works backward to structure, content, and conversion flow.
              </p>
            </div>

            {/* Full-width stat/callout bar */}
            <div className="bg-[#162233] border border-white/10 rounded-xl px-8 py-5 mb-10 text-center">
              <p className="text-foreground text-base leading-relaxed">
                A homeowner with an active leak searches by problem and urgency, not by service category.{" "}
                <span className="text-accent-blue font-semibold">A plumbing website that doesn't reflect that structure loses high-value calls to competitors who do.</span>
              </p>
            </div>

            {/* 2x2 card grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { label: "Architecture", body: "Dedicated pages per service cluster. Drain cleaning, water heaters, repiping, and sewer each get their own page built around actual search behavior." },
                { label: "Trust", body: "Reviews, licensing, warranties, and real job photos positioned where they reduce friction on high-ticket decisions." },
                { label: "Speed", body: "Core Web Vitals compliance built in. Emergency searches happen on phones in high-stress moments. A slow site loses those calls." },
                { label: "Conversion", body: "Emergency-first UX with a clear call path above the fold on mobile. Call tracking and CRM integration ready from launch day." },
              ].map((p, i) => (
                <div key={i} className="bg-[#162233] border border-white/10 rounded-xl p-7">
                  <p className="text-base font-bold text-foreground mb-2">{p.label}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>

            {/* Service cluster map */}
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-6">Plumbing Service Cluster Map</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {serviceCluster.map((cluster, i) => (
                <div key={i} className="bg-[#162233] border border-white/10 rounded-xl p-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-cta mb-3">{cluster.heading}</p>
                  <ul className="space-y-1.5">
                    {cluster.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-text-secondary text-sm">
                        <span className="w-1 h-1 rounded-full bg-cta shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-center text-text-muted text-sm italic mt-8">
              The cluster map above reflects how each service type is structured on a fully built plumbing website. Every cluster gets its own page family.
            </p>
          </div>
        </div>
      </section>

      {/* DIFFERENT CALL = DIFFERENT PAGE — light, 60/40 numbered layout */}
      <section id="architecture" className="py-24 lg:py-32 bg-[#F8F9FA] scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">Architecture Principle</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Different Plumbing Call = Different Page
            </h2>
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Left 3/5 — numbered intent rows */}
              <div className="lg:col-span-3">
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  A homeowner with a burst pipe at 2am is not the same customer as someone researching repipe estimates. The search is different. The urgency is different. The conversion path is different. Serving them from the same page costs you both calls.
                </p>
                {[
                  {
                    num: "01",
                    label: "Emergency Intent",
                    color: "text-cta",
                    queries: ['"plumber near me"', '"burst pipe repair [city]"', '"sewage backup"', '"water heater not working"'],
                    note: "Lead with phone number, show availability, remove every point of friction. Every extra second costs a call.",
                  },
                  {
                    num: "02",
                    label: "Research Intent",
                    color: "text-accent-blue",
                    queries: ['"water heater replacement cost"', '"whole house repipe estimate"', '"trenchless sewer replacement"', '"tankless installation"'],
                    note: "Lead with trust, process, and proof. Show options and pricing context. Earn the estimate request.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex gap-6 py-7 ${i < 1 ? "border-b border-slate-200" : ""}`}>
                    <span className={`text-4xl font-black leading-none shrink-0 ${item.color} opacity-25`}>{item.num}</span>
                    <div>
                      <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${item.color}`}>{item.label}</p>
                      <ul className="space-y-1 text-slate-500 text-sm italic mb-4">
                        {item.queries.map((q, j) => <li key={j}>{q}</li>)}
                      </ul>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right 2/5 — page architecture examples */}
              <div className="lg:col-span-2 lg:sticky lg:top-32">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">Page Architecture Examples</p>
                  <div className="space-y-3">
                    {[
                      ["Emergency Drain Cleaning", "call-first, urgency"],
                      ["Water Heater Repair", "same-day, trust"],
                      ["Water Heater Replacement", "research, options"],
                      ["Whole-House Repipe", "project, process"],
                      ["Slab Leak Detection", "high-anxiety, proof"],
                      ["Trenchless Sewer Replacement", "method, cost"],
                      ["Sewer Camera Inspection", "diagnostic, process"],
                    ].map(([label, note], i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="text-cta text-xs shrink-0 mt-1">→</span>
                        <div>
                          <p className="text-sm font-medium text-slate-900 leading-tight">{label}</p>
                          <p className="text-xs text-slate-400 italic">{note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GBP ALIGNMENT — dark */}
      <section id="gbp" className="py-24 lg:py-32 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">GBP Alignment</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Your GBP and Website Must Speak the Same Language
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
                Your Google Business Profile is what drives Maps visibility. Your website is what converts that visibility into a call. When the two are disconnected, you lose ranking power in both. We map your website's service page structure to your GBP service catalog at the build stage.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-elevated border-b border-border/60">
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-accent-blue">GBP Category / Service</th>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-accent-blue">Matching Website Page</th>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-accent-blue">Search Intent</th>
                  </tr>
                </thead>
                <tbody>
                  {gbpRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-surface-dark" : "bg-surface-elevated"}>
                      <td className="p-4 text-foreground font-medium">{row.category}</td>
                      <td className="p-4 text-text-muted font-mono text-xs">{row.page}</td>
                      <td className="p-4 text-text-secondary">{row.intent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTIVE FIT */}
      <ServiceFitQualifierSection config={plumbingWebDesignQualification} />

      {/* EXCLUSIVITY */}
      <PlumbingPaidAdsExclusivity />

      {/* CONTACT */}
      <ServiceContactForm
        formType="plumbing_web_design_contact"
        headline="See If Your Market Is Available"
        subheadline="Tell us where you operate and what you're working toward. We'll take it from there."
        exclusivityLine="One plumbing company per market. Your competitors don't get in."
        steps={WEB_DESIGN_STEPS}
      />

      <Footer />
    </div>
  );
};

export default PlumbingWebsiteDesign;
