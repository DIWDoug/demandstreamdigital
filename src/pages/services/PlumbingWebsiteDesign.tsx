import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import { SITE_URL } from "@/lib/constants";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

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
  { category: "Plumber (Primary)", page: "/plumbing-website-design/ [parent]", intent: "Brand / market-level" },
  { category: "Drain Cleaning Service", page: "/drain-cleaning-[city]/", intent: "Emergency, high urgency" },
  { category: "Water Heater Installation / Repair", page: "/water-heater-replacement/ + /water-heater-repair/", intent: "Repair urgent / install research" },
  { category: "Sewer Services", page: "/sewer-cleaning/ + /trenchless-sewer-replacement/", intent: "Emergency + project" },
  { category: "Pipe Repair / Repipe", page: "/repipe-specialist/", intent: "Research, high ticket" },
  { category: "Leak Detection", page: "/slab-leak-detection/", intent: "High-anxiety, trust-driven" },
  { category: "Backflow Testing", page: "/backflow-testing-certification/", intent: "Commercial, compliance" },
  { category: "Water Filtration", page: "/water-filtration-installation/", intent: "Upgrade intent, seasonal" },
];

const goodFit = [
  "3 to 40+ truck plumbing operations with a growth mindset",
  "Companies ready for a premium, scalable plumbing web presence",
  "Operators who measure success by booked calls and average ticket",
  "Plumbers who want SEO and paid ads working from day one",
  "Companies where the phone ringing is the only metric that matters",
];

const notFit = [
  "Under $500K revenue looking for a low-cost website option",
  "\"Just need something live\" — bare-minimum website projects",
  "Companies not ready to track calls or measure source performance",
  "Plumbers not planning to scale beyond current truck count",
];

const failureItems = [
  {
    title: "The \"Plumbing Services\" Catch-All",
    body: "One page trying to rank for every service. It doesn't rank for anything specific, so calls from high-value searches — water heater replacement, repipe, hydro-jet — go to competitors with dedicated pages.",
  },
  {
    title: "GBP and Website Disconnected",
    body: "Your Google Business Profile lists services. Your website should mirror that taxonomy. When it doesn't, you're splitting the authority signal Google needs to rank you in Maps.",
  },
  {
    title: "Emergency Intent Gets Buried",
    body: "A homeowner with an active leak isn't reading a brochure page. They need to see a phone number and a booking path in under three seconds. If your site doesn't deliver that on mobile, they move to the next result.",
  },
  {
    title: "No City-Level Structure",
    body: "Plumbing is local. A company covering eight cities needs eight pages, not one page with a list of cities in the footer. Without city-specific pages, local search performance stays flat outside the primary market.",
  },
  {
    title: "No Trust Signals",
    body: "Plumbing is high-ticket, high-trust. A customer deciding between you and the next company is looking for reviews, licensing, real photos, and proof of recent work. If those elements aren't prominent, they move on.",
  },
  {
    title: "No Tracking at Launch",
    body: "Most contractor websites go live with no call tracking and no attribution. That means every dollar spent on ads or SEO from day one is invisible. You can't improve what you can't measure.",
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

      {/* HERO — dark */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cta/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <nav className="flex items-center gap-2 text-xs text-text-muted mb-6 flex-wrap" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <span className="text-border">/</span>
                <Link to="/website-design" className="hover:text-foreground transition-colors">Website Design</Link>
                <span className="text-border">/</span>
                <span className="text-foreground">Plumbing</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 leading-tight">
                Plumbing Website Design
              </h1>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-cta mb-6 leading-tight">
                Built to Rank and Convert
              </p>
              <p className="text-text-secondary leading-relaxed mb-4 font-medium">
                Trade-specific website structure for plumbing companies that want more booked service calls, not just more traffic.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Most plumbing websites are built like brochures. A services page. A contact form. Some stock photos of a truck. They look reasonable. They don't generate calls. A plumbing website built for actual performance is organized around how customers search: by problem, by urgency, by service type.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Separate pages for emergency drain, water heater, repipe, and sewer. No catch-all.",
                  "Aligned to your GBP service catalog so Maps and web reinforce each other",
                  "AI-ready structure: answer blocks and FAQs for the actual questions homeowners ask",
                  "Call-first UX with emergency reassurance above the fold on mobile",
                  "Built to activate plumbing SEO and paid advertising from day one",
                  "ServiceTitan-compatible: booking flow and call tracking ready at launch",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-cta mt-0.5 shrink-0 font-bold">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-cta/10 to-accent-blue/5 rounded-2xl blur-xl" />
              <div className="relative bg-surface-dark border border-border/60 rounded-2xl p-6 lg:p-8 shadow-2xl">
                <TwoStepContactForm
                  formType="plumbing_web_design_hero"
                  submitButtonText="Claim Your Territory Today"
                  step1ButtonText="Claim Your Territory Today"
                />
                <p className="text-center text-xs text-text-muted mt-4">One plumbing company per market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceHubAnchorNav items={anchorItems} />

      {/* WHY PLUMBING WEBSITES FAIL — light, Pattern B */}
      <section id="why-they-fail" className="py-24 lg:py-32 bg-[#F8F9FA] scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left sticky column */}
              <div className="lg:sticky lg:top-32">
                <p className="text-cta text-xs font-semibold uppercase tracking-widest mb-4">The Problem</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Why Most Plumbing Websites Don't Generate Calls
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Plumbing has a wide service range. That range is also the reason most plumbing websites underperform. The standard approach is to dump everything onto a single Plumbing Services page.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  That page tries to rank for drain cleaning, water heater replacement, slab leak repair, and repipe, all at once. It ranks for none of them.
                </p>
                <div className="bg-gradient-to-r from-cta/5 to-transparent border-l-4 border-cta rounded-r-xl px-5 py-4 mb-8">
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    A homeowner with an active leak isn't browsing service menus. They need a phone number and a booking path in under three seconds. If your site doesn't deliver that on mobile, they call the next result.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-cta hover:bg-cta/90 text-white font-medium rounded-lg transition-colors text-sm"
                  >
                    Claim Your Territory Today
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-cta hover:border-cta hover:text-white font-medium transition-all text-sm"
                  >
                    <Phone className="h-4 w-4" />
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              {/* Right: stacked icon rows, no card boxes */}
              <div>
                {failureItems.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-start gap-4 py-6">
                      <div className="w-9 h-9 rounded-lg bg-cta/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-cta text-xs font-bold">✕</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 text-[15px] mb-1.5">{item.title}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                    {i < failureItems.length - 1 && <hr className="border-t border-slate-200" />}
                  </div>
                ))}
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

      {/* WHO THIS IS FOR + EXCLUSIVITY — light */}
      <section id="fit" className="py-24 lg:py-32 bg-[#F8F9FA] scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-cta text-xs font-semibold uppercase tracking-widest mb-4">Selective Fit</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Who This Is For
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-cta/20 flex items-center justify-center">
                    <span className="text-cta text-sm font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Good Fit</h3>
                </div>
                <ul className="space-y-3">
                  {goodFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                      <span className="text-cta mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-500 text-sm font-bold">✕</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Not a Fit</h3>
                </div>
                <ul className="space-y-3">
                  {notFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                      <span className="text-red-500 mt-0.5 shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Exclusivity block */}
            <div className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 text-center shadow-sm">
              <span className="inline-block px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-semibold uppercase tracking-wider mb-6">
                Exclusivity
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                One Plumbing Company Per Market.
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
                When you work with DemandStream, your competitors don't. We take one plumbing client per service area. The plumbing website we build is designed exclusively to put your company ahead, not split between you and the shop down the street.
              </p>
              <p className="text-slate-600 mb-8">If your market is available, it's worth finding out now.</p>
              <Link to="/contact" className="btn-cta group inline-flex items-center gap-2">
                Claim Your Territory Today
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT — dark */}
      <section id="contact" className="py-24 lg:py-32 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build a Plumbing Website That Actually Generates Calls?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10">
              Your current website is either generating booked plumbing calls or it isn't. If the phone isn't ringing at the rate it should, the structure is the problem, not the ad budget. One market. One plumbing company. Built around your territory.
            </p>
            <div className="bg-surface-elevated border border-border/50 rounded-2xl p-6 lg:p-8">
              <TwoStepContactForm
                formType="plumbing_web_design_contact"
                submitButtonText="Claim Your Territory Today"
                step1ButtonText="Claim Your Territory Today"
              />
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <Link to="/website-design" className="text-sm text-text-muted hover:text-foreground transition-colors flex items-center gap-1">
                ← Back to Website Design
              </Link>
              <Link to="/hvac-website-design" className="text-sm text-accent-blue hover:text-foreground transition-colors flex items-center gap-1">
                HVAC Website Design
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlumbingWebsiteDesign;
