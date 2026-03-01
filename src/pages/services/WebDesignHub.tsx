import { ArrowRight, Layout, Shield, Zap, Bot, MousePointerClick, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import ServiceFitQualifierSection from "@/components/services/generic/ServiceFitQualifierSection";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";
import ServiceBiggerPicture from "@/components/services/generic/ServiceBiggerPicture";
import WebDesignExclusivity from "@/components/services/web-design/WebDesignExclusivity";
import { SITE_URL, PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const WEB_DESIGN_BIGGER_PICTURE_SERVICES = [
  { label: "Local SEO", href: "/hvac-and-plumbing-seo" },
  { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
  { label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
  { label: "Email Marketing", href: "/plumbing-email-marketing" },
  { label: "Reputation Management", href: "/hvac-and-plumbing-seo" },
  { label: "Reporting & Dashboards", href: "/plumbing-reporting" },
];
const WEB_DESIGN_ORBIT_NODES = [
  { label: "Local SEO", angle: 0 },
  { label: "Google Maps / GBP", angle: 60 },
  { label: "Paid Advertising", angle: 120 },
  { label: "Email Marketing", angle: 180 },
  { label: "Reporting & Dashboards", angle: 240 },
  { label: "Reputation Management", angle: 300 },
];

const canonicalUrl = `${SITE_URL}/website-design`;
const metaTitle = "Plumbing & HVAC Website Design Built to Rank | DemandStream";
const metaDescription = "Your website isn't generating booked calls? We design plumbing and HVAC websites with service architecture, AI-ready structure, and call-first UX. See how it works.";

const pillars = [
  { icon: Layout, label: "Architecture", body: "Service-level page structure built around how customers search" },
  { icon: Shield, label: "Trust", body: "Credibility signals, reviews, licensing, and real photography" },
  { icon: Zap, label: "Speed", body: "Core Web Vitals compliance and mobile-first build standards" },
  { icon: Bot, label: "AI Structure", body: "Schema, FAQ blocks, and answer-forward content for AI and voice" },
  { icon: MousePointerClick, label: "Conversion", body: "Call-first UX, tracking readiness, and CRM integration paths" },
];

const failures = [
  {
    problem: "Generic service pages that blend repair and install intent",
    pattern: "Looks good. Doesn't rank.",
  },
  {
    problem: "No alignment to Google's service taxonomy. The site doesn't reinforce your GBP, limiting Maps visibility.",
    pattern: "Ranks a little. Doesn't convert.",
  },
  {
    problem: "No internal structure to scale. Adding a city page or new service breaks everything.",
    pattern: "Converts some. Can't scale.",
  },
  {
    problem: "No clear conversion path. The visitor doesn't know whether to call, fill out a form, or book online.",
    pattern: "A website built for plumbing and HVAC needs to solve all three.",
  },
];

const webDesignHubQualification = {
  eyebrow: "Selective Fit",
  headline: "Is Website Design Right for Your Company?",
  subheadline: "We work best with established plumbing and HVAC companies that want to own their market, not just check a website box.",
  goodFit: [
    { point: "5 to 40+ truck operations with a growth mindset", detail: "You're running an active dispatch board and want your website to generate more of the calls that fill it." },
    { point: "Companies ready to invest in a premium, scalable web presence", detail: "You understand a performance website is infrastructure, not a commodity. You're ready to build it right." },
    { point: "Owners and GMs who measure success by booked calls and revenue", detail: "You don't care about traffic reports. You care whether the phone rings with jobs that match your margins." },
    { point: "Operators who want SEO and paid advertising to work from day one", detail: "Your site will be built to activate both channels immediately, not require a separate rebuild six months later." },
    { point: "Companies where the phone ringing is the only metric that matters", detail: "Every design and content decision we make is filtered through one question: does this make a customer more likely to call?" },
  ],
  notFit: [
    { point: "Under $500K revenue looking for the lowest price option", detail: "A performance build requires investment. If budget is the primary filter, there are better fits for where you are right now." },
    { point: '"Just need something live" — bare-minimum website projects', detail: "We build revenue infrastructure, not placeholders. Minimum viable websites are not in our scope." },
    { point: "Companies not ready to track calls or measure cost per booked call", detail: "Every site we build includes call tracking. If you're not ready to measure, we can't show you the ROI." },
    { point: "Operations not planning to grow beyond current capacity", detail: "Our builds are designed to scale. If you're not planning to grow, the investment won't make sense." },
  ],
  ctaText: "Claim Your Territory Today",
};

const WebDesignHub = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Design for Plumbing & HVAC Companies",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Web Design Service",
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
                <span className="text-foreground">Website Design</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 leading-tight">
                Website Design for Plumbing & HVAC Companies
              </h1>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-cta mb-6 leading-tight">
                Built to Rank and Convert
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Premium, trust-heavy websites built for visibility, booked calls, and long-term market position.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Most contractor websites look fine. They just don't work. They aren't built for how customers search, how Google reads service intent, or how a phone call actually gets booked. We design plumbing and HVAC websites with service structure, local intent, and conversion flow built into every page. Not a brochure. Revenue infrastructure.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Service-level page structure (not generic pages that blend intent)",
                  "Alignment to Google Business Profile service taxonomy",
                  "AI-ready structure with clear answers, FAQ blocks, and schema by default",
                  "Call-first UX with tracking and CRM readiness (ServiceTitan-friendly)",
                  "Built to activate SEO and paid advertising from day one",
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-cta mt-0.5 shrink-0 font-bold">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-cta/10 to-accent-blue/5 rounded-2xl blur-xl" />
              <div className="relative bg-surface-dark border border-border/60 rounded-2xl p-6 lg:p-8 shadow-2xl">
                <TwoStepContactForm
                  formType="web_design_hub_hero"
                  submitButtonText="Claim Your Territory Today"
                  step1ButtonText="Claim Your Territory Today"
                />
                <p className="text-center text-xs text-text-muted mt-4">One plumbing client and one HVAC client per market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WEBSITES FAIL — light, Pattern B */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
              {/* LEFT — 45% */}
              <div className="lg:sticky lg:top-32">
                <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">The Problem</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Why Most 'Pretty' Contractor Websites Don't Perform
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-5">
                  A new contractor website goes live. It looks clean. The owner is happy. Three months later, the phone hasn't moved.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-5">
                  This happens constantly. The reason is always the same: the site was built to look good, not to rank or convert.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Design is not the problem. Structure is the problem. Plumbing and HVAC websites need intent-specific pages, GBP alignment, and a conversion path built in from the start.
                </p>
                {/* Blockquote — left red border, italic */}
                <blockquote className="border-l-4 border-cta pl-5 mb-6">
                  <p className="text-slate-700 text-base italic leading-relaxed">
                    "A website built for plumbing and HVAC needs separate intent pages, GBP alignment, and a clear call path. Not a brochure designed to win a design award."
                  </p>
                </blockquote>
                <p className="text-slate-600 leading-relaxed mb-8">
                  The four patterns on the right are the same patterns we see on every underperforming contractor site. If your current website has any of them, the structure is costing you calls.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-cta hover:bg-[#A93226] text-white font-bold rounded tracking-wide transition-colors text-sm"
                  >
                    Claim Your Territory Today
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded border border-slate-300 text-slate-700 hover:bg-cta hover:border-cta hover:text-white font-medium transition-all text-sm"
                  >
                    <Phone className="h-4 w-4" />
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              {/* RIGHT — 55%, 5 stacked items, no card borders */}
              <div className="space-y-8">
                {failures.map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-9 h-9 rounded-lg bg-cta/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-cta text-xs font-bold">✕</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-[15px] mb-2">{item.problem}</p>
                      <p className="text-accent-blue text-sm font-semibold leading-relaxed">{item.pattern}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET DOMINATION FRAMEWORK — dark, Pattern A */}
      <section className="py-24 lg:py-32 bg-[#0F1E2D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Label + centered headline */}
            <div className="text-center mb-10">
              <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">The Framework</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                The Market Domination Framework™
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
                A repeatable system for building plumbing and HVAC websites that rank and convert. Structure first. Then design. Then content. Then technical SEO foundation. In that order, every time.
              </p>
            </div>

            {/* Full-width stat/callout bar */}
            <div className="bg-[#162233] border border-white/10 rounded-xl px-8 py-5 mb-10 text-center">
              <p className="text-foreground text-base leading-relaxed">
                A plumbing company at a 45% booking rate loses half its ad spend to leads that never convert. The framework starts by fixing structure, not budget.{" "}
                <span className="text-accent-blue font-semibold">Structure is what activates SEO and paid advertising from day one.</span>
              </p>
            </div>

            {/* 2x2 card grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {pillars.map((p, i) => (
                <div key={i} className="bg-[#162233] border border-white/10 rounded-xl p-7 flex gap-5 items-start">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-accent-blue/15 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-accent-blue" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground mb-2">{p.label}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <p className="text-center text-text-muted text-sm italic">
              When these five elements work together, the website becomes revenue infrastructure, not just a page.
            </p>
          </div>
        </div>
      </section>

      {/* DIFFERENT CALL = DIFFERENT PAGE — light, 60/40 split */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">Architecture Principle</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Different Phone Call = Different Page
            </h2>
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Left 3/5 — primary explanation */}
              <div className="lg:col-span-3">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  If the customer's reason for calling is different, the page should be different. Search engines read repair intent and installation intent as two separate queries. One page can't rank well for both — it confuses Google's relevance signal and reduces conversion for each customer type.
                </p>
                {/* Numbered intent rows */}
                {[
                  {
                    num: "01",
                    label: "Emergency Repair",
                    color: "text-cta",
                    queries: ['"water heater not working"', '"AC not cooling"', '"drain backup"'],
                    note: "Customer needs help now. Page must lead with availability, phone number, and same-day booking. No friction.",
                  },
                  {
                    num: "02",
                    label: "Install / Replacement",
                    color: "text-accent-blue",
                    queries: ['"water heater replacement cost"', '"new AC unit"', '"whole house repipe"'],
                    note: "Customer is researching. Page must lead with trust, options, proof, and pricing context.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex gap-6 py-6 ${i < 1 ? "border-b border-slate-200" : ""}`}>
                    <span className={`text-4xl font-black leading-none shrink-0 ${item.color} opacity-30`}>{item.num}</span>
                    <div>
                      <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${item.color}`}>{item.label}</p>
                      <ul className="space-y-1 text-slate-500 text-sm italic mb-3">
                        {item.queries.map((q, j) => <li key={j}>{q}</li>)}
                      </ul>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right 2/5 — callout */}
              <div className="lg:col-span-2 lg:sticky lg:top-32">
                <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
                  <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">The Rule</p>
                  <p className="text-slate-900 text-lg font-bold leading-snug mb-4">
                    One service. One intent. One page.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    When you blend repair and install onto the same page, you dilute your relevance signal for both queries and split your conversion path for both customer types.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Industry-specific page structure is covered in detail on the Plumbing and HVAC pages below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & VOICE — dark */}
      <section className="py-24 lg:py-32 bg-surface-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">AI-Ready by Default</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Built for AI, Voice Search, and Modern Discovery
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Customers are finding plumbing and HVAC companies through AI assistants, voice queries, and featured answer blocks, not just the traditional ten blue links. Every website we build is structured to perform in this environment.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  This isn't a feature add. It's how we build by default. When your competitor's site is still structured for 2018, yours is ready for what's actually happening now.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Answer Blocks", body: "Built into all service pages — structured for featured snippets and AI results" },
                  { label: "FAQ Structure", body: "Written for voice and conversational query formats, not industry jargon" },
                  { label: "Schema by Default", body: "LocalBusiness, Service, and FAQPage schema implemented at build" },
                  { label: "Heading Hierarchy", body: "Signals topic authority to crawlers and AI systems simultaneously" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-surface-elevated border border-border/50 rounded-xl p-5">
                    <div className="shrink-0 w-7 h-7 rounded-full bg-accent-blue/15 flex items-center justify-center mt-0.5">
                      <span className="text-accent-blue text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground mb-1">{item.label}</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY BREAKOUT — light */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">Choose Your Industry</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Built for Your Trade
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Website design for plumbing and website design for HVAC aren't the same thing. The call types are different. The seasonality is different. The customer research process is different. Our industry-specific pages cover the structure, content strategy, and service page setup built specifically for each trade.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link
                to="/plumbing-website-design"
                className="group bg-white border border-slate-200 hover:border-cta/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cta/10"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-cta mb-3">Plumbing</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cta transition-colors">
                  Plumbing Website Design
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Built around the call types that drive plumbing revenue: water heaters, repiping, drain cleaning, slab leaks. Structure that matches how customers search for plumbing help.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-cta gap-2">
                  See the plumbing approach
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                to="/hvac-website-design"
                className="group bg-white border border-slate-200 hover:border-accent-blue/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/10"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">HVAC</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-accent-blue transition-colors">
                  HVAC Website Design
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Built around seasonal demand, changeouts, maintenance agreements, and no-cool/no-heat urgency. Site structure that works year-round and captures maintenance agreement revenue.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-accent-blue gap-2">
                  See the HVAC approach
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTIVE FIT */}
      <ServiceFitQualifierSection config={webDesignHubQualification} />

      {/* BIGGER PICTURE */}
      <ServiceBiggerPicture
        heading="Web Design Is One Piece of the"
        headingHighlight="Connected Growth System"
        body1="Your website is the conversion engine everything else drives traffic to. But it compounds when it's built to support SEO, paid ads, and GBP — not just to look good."
        body2="An SEO-architected site earns organic rankings faster and holds them longer. Speed and mobile experience reduce paid ad cost per click and improve conversion rates. Schema markup strengthens local pack visibility. Review integration builds trust on every landing page. When your website is built inside the system, every channel performs better from day one."
        centerLabel="Web Design"
        centerSublabel="Conversion engine for every channel."
        services={WEB_DESIGN_BIGGER_PICTURE_SERVICES}
        orbitNodes={WEB_DESIGN_ORBIT_NODES}
        ctaHref="/plumbing-and-hvac-web-design"
      />

      {/* EXCLUSIVITY */}
      <WebDesignExclusivity />

      {/* CONTACT */}
      <ServiceContactForm
        formType="web_design_hub_contact"
        headline="See If Your Market Is Available"
        subheadline="Tell us where you operate and what you're working toward. We'll take it from there."
        exclusivityLine="One plumbing client and one HVAC client per market. Your competitors don't get in."
      />

      <Footer />
    </div>
  );
};

export default WebDesignHub;
