import { ArrowRight, Layout, Shield, Zap, Bot, MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import { SITE_URL } from "@/lib/constants";

const canonicalUrl = `${SITE_URL}/website-design`;
const metaTitle = "Plumbing & HVAC Website Design Built to Rank | DemandStream";
const metaDescription = "Your website isn't generating booked calls? We design plumbing and HVAC websites with service architecture, AI-ready structure, and call-first UX. See how it works.";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

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
    problem: "No alignment to Google's service taxonomy — the site doesn't reinforce your GBP, limiting Maps visibility.",
    pattern: "Ranks a little. Doesn't convert.",
  },
  {
    problem: "No internal architecture to scale — adding a city page or new service breaks everything.",
    pattern: "Converts some. Can't scale.",
  },
  {
    problem: "No clear conversion path — the visitor doesn't know whether to call, fill out a form, or book online.",
    pattern: "A website built for plumbing and HVAC needs to solve all three.",
  },
];

const goodFit = [
  "5 to 40+ truck operations with a growth mindset",
  "Companies ready to invest in a premium, scalable web presence",
  "Owners and GMs who measure success by booked calls and revenue",
  "Operators who want SEO and paid advertising to work from day one",
  "Companies where the phone ringing is the only metric that matters",
];

const notFit = [
  "Under $500K revenue looking for the lowest price option",
  "\"Just need something live\" — minimum viable website projects",
  "Companies not ready to track calls or measure cost per booked call",
  "Operations not planning to grow beyond current capacity",
];

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

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cta/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 py-20">
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
                Premium, trust-heavy websites engineered for visibility, booked calls, and long-term market position.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Most contractor websites look fine. They just don't work. They aren't built for how customers search, how Google reads service intent, or how a phone call actually gets booked. We design plumbing and HVAC websites with service architecture, local intent, and conversion flow built into every page. Not a brochure. Revenue infrastructure.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Service-level page architecture (not generic pages that blend intent)",
                  "Alignment to Google Business Profile service taxonomy",
                  "AI-ready structure — clear answers, FAQ blocks, schema by default",
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

      <SectionDivider />

      {/* WHY WEBSITES FAIL */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Problem</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Why Most 'Pretty' Contractor Websites Don't Perform
            </h2>
            <p className="text-text-secondary leading-relaxed mb-12 max-w-2xl">
              A new contractor website goes live. It looks clean. The owner is happy. Three months later, the phone hasn't moved. This happens constantly. The reason is always the same: the site was built to look good, not to rank or convert.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {failures.map((item, i) => (
                <div key={i} className="bg-card border border-border/60 rounded-xl p-6">
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">{item.problem}</p>
                  <p className="text-accent-blue text-sm font-semibold">{item.pattern}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* MARKET DOMINATION FRAMEWORK */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Framework</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              The Market Domination Framework™ for Website Design
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4 max-w-2xl">
              The Market Domination Framework™ is a repeatable system for building plumbing and HVAC websites that rank and convert. It isn't a template. It isn't a theme swap. It's a structured approach built specifically around how plumbing and HVAC customers search — and what it takes to turn that search into a booked call.
            </p>
            <p className="text-text-secondary leading-relaxed mb-12 max-w-2xl">
              Every website we build runs through this framework. Architecture first. Then design. Then content structure. Then technical SEO foundation. In that order, every time.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pillars.map((p, i) => (
                <div key={i} className="bg-background border border-border/60 rounded-xl p-6 flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-accent-blue" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground mb-1">{p.label}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
              <div className="bg-background border border-border/60 rounded-xl p-6 flex items-center">
                <p className="text-text-secondary text-sm leading-relaxed italic">
                  When these five elements work together, the website becomes a platform — not just a page. It activates your SEO investment. It compounds over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* DIFFERENT CALL = DIFFERENT PAGE */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Architecture Principle</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Different Phone Call = Different Page
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  This is the rule that drives our website architecture: if the customer's reason for calling is different, the page should be different. Search engines interpret repair intent and installation intent as two distinct queries. When you blend them onto one page, you confuse Google, you confuse the customer, and your conversion rate drops.
                </p>
                <div className="p-5 rounded-xl bg-accent-blue/8 border border-accent-blue/25">
                  <p className="text-accent-blue font-semibold leading-relaxed">
                    Detailed service architecture for plumbing and HVAC is covered on each industry-specific page below.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-card border border-border/60 rounded-xl p-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-cta mb-3">Repair Intent</p>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>"water heater not working"</li>
                    <li>"AC not cooling"</li>
                    <li>"drain backup"</li>
                  </ul>
                  <p className="text-sm text-text-secondary mt-4 leading-relaxed">
                    Urgency-driven. Customer wants a fast answer and a same-day call. Page must lead with availability and booking.
                  </p>
                </div>
                <div className="bg-card border border-border/60 rounded-xl p-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Install / Replacement Intent</p>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>"water heater replacement cost"</li>
                    <li>"new AC unit installation"</li>
                    <li>"whole house repipe"</li>
                  </ul>
                  <p className="text-sm text-text-secondary mt-4 leading-relaxed">
                    Research-driven. Customer is comparing options and prices. Page must lead with trust, options, and proof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* AI & VOICE */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">AI-Ready by Default</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Built for AI, Voice Search, and Modern Discovery
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Customers are finding plumbing and HVAC companies through AI assistants, voice queries, and featured answer blocks — not just the traditional ten blue links. Every website we build is structured to perform in this environment.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  This isn't a feature add. It's how we build by default. When your competitor's site is still structured for 2018, yours is ready for what's actually happening now.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Answer Blocks", body: "Built into all service pages — structured for featured snippets and AI results" },
                  { label: "FAQ Architecture", body: "Written for voice and conversational query formats, not industry jargon" },
                  { label: "Schema by Default", body: "LocalBusiness, Service, and FAQPage schema implemented at build" },
                  { label: "Heading Hierarchy", body: "Signals topic authority to crawlers and AI systems simultaneously" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-background border border-border/60 rounded-xl p-5">
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

      <SectionDivider />

      {/* INDUSTRY BREAKOUT */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Choose Your Industry</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Built for Your Trade
            </h2>
            <p className="text-text-secondary leading-relaxed mb-12 max-w-2xl">
              Website design for plumbing and website design for HVAC aren't the same thing. The call types are different. The seasonality is different. The customer research process is different. Our industry-specific pages cover the architecture, content strategy, and service page structure built specifically for each trade.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link
                to="/plumbing-website-design"
                className="group bg-card border border-border/60 hover:border-cta/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cta/10"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-cta mb-3">Plumbing</p>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-cta transition-colors">
                  Plumbing Website Design
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Built around the call types that drive plumbing revenue — water heaters, repiping, drain cleaning, slab leaks. Architecture that matches how customers search for plumbing help.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-cta gap-2">
                  See the plumbing approach
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                to="/hvac-website-design"
                className="group bg-card border border-border/60 hover:border-accent-blue/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/10"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">HVAC</p>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent-blue transition-colors">
                  HVAC Website Design
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
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

      <SectionDivider />

      {/* WHO THIS IS FOR */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Selective Fit</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-tight">
              Who This Is For
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-background border border-border/60 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-cta/20 flex items-center justify-center">
                    <span className="text-cta text-sm font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Good Fit</h3>
                </div>
                <ul className="space-y-3">
                  {goodFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                      <span className="text-cta mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background border border-border/60 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                    <span className="text-destructive text-sm font-bold">✕</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Not a Fit</h3>
                </div>
                <ul className="space-y-3">
                  {notFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                      <span className="text-destructive mt-0.5 shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-text-secondary text-center text-sm">If you're building for scale, this is built for you. If you're looking for a cheap website, there are better options for where you are right now.</p>
          </div>
        </div>
      </section>

      {/* EXCLUSIVITY + FINAL CTA */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--cta)) 0%, transparent 60%),
                            radial-gradient(circle at 70% 50%, hsl(var(--accent-blue)) 0%, transparent 60%)`
        }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold uppercase tracking-wider mb-6">
              Exclusivity
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              One Plumbing Company. One HVAC Company. Per Market.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4 max-w-2xl mx-auto">
              When you work with DemandStream, your competitors don't. We take one plumbing client and one HVAC client per service area. The website we build is designed to put you ahead — not split between you and the shop down the street.
            </p>
            <p className="text-muted-foreground text-base mb-10">
              If your market is available, it's worth finding out now.
            </p>
            <Link to="/contact" className="btn-cta group inline-flex items-center gap-2">
              Claim Your Territory Today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDesignHub;
