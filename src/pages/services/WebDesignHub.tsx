import { ArrowRight, Layout, Shield, Zap, Bot, MousePointerClick, Phone, Palette, X, CheckCircle2, AlertTriangle, TrendingUp, MapPin, Smartphone } from "lucide-react";
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
import { WEB_DESIGN_STEPS } from "@/data/web-design-steps";

const WEB_DESIGN_BIGGER_PICTURE_SERVICES = [
{ label: "Local SEO", href: "/hvac-and-plumbing-seo" },
{ label: "Google Maps / GBP", href: "/plumbing-google-maps" },
{ label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
{ label: "Email Marketing", href: "/plumbing-email-marketing" },
{ label: "Reputation Management", href: "/hvac-and-plumbing-seo" },
{ label: "Reporting & Dashboards", href: "/plumbing-reporting" }];

const WEB_DESIGN_ORBIT_NODES = [
{ label: "Local SEO", angle: 0 },
{ label: "Google Maps / GBP", angle: 60 },
{ label: "Paid Advertising", angle: 120 },
{ label: "Email Marketing", angle: 180 },
{ label: "Reporting & Dashboards", angle: 240 },
{ label: "Reputation Management", angle: 300 }];


const canonicalUrl = `${SITE_URL}/website-design`;
const metaTitle = "Plumbing & HVAC Website Design Built to Rank | DemandStream";
const metaDescription = "Your website isn't generating booked calls? We design plumbing and HVAC websites with service architecture, AI-ready structure, and call-first UX. See how it works.";

const pillars = [
{ icon: Layout, label: "Architecture", body: "Service-level page structure built around how customers search" },
{ icon: Shield, label: "Trust", body: "Credibility signals, reviews, licensing, and real photography" },
{ icon: Zap, label: "Speed", body: "Core Web Vitals compliance and mobile-first build standards" },
{ icon: Bot, label: "AI Structure", body: "Schema, FAQ blocks, and answer-forward content for AI and voice" },
{ icon: MousePointerClick, label: "Conversion", body: "Call-first UX, tracking readiness, and CRM integration paths" },
{ icon: Palette, label: "Beautiful Design", body: "Custom visual identity built to reflect your brand, establish trust, and look unmistakably professional in your market" }];


const failures = [
{
  icon: AlertTriangle,
  problem: "Generic service pages that blend repair and install intent",
  pattern: "Looks good. Doesn't rank.",
  detail: "When repair and install share a page, Google can't clearly attribute search intent. Rankings stay mediocre for both query types."
},
{
  icon: MapPin,
  problem: "No alignment to Google's service taxonomy. The site doesn't reinforce your GBP, limiting Maps visibility.",
  pattern: "Ranks a little. Doesn't convert.",
  detail: "GBP categories and your website's service architecture must mirror each other. Misalignment caps your Map Pack visibility."
},
{
  icon: TrendingUp,
  problem: "No internal structure to scale. Adding a city page or new service breaks everything.",
  pattern: "Converts some. Can't scale.",
  detail: "Template-based sites aren't built to expand. Every new page becomes a manual rebuild that dilutes authority instead of compounding it."
},
{
  icon: Smartphone,
  problem: "No clear conversion path. The visitor doesn't know whether to call, fill out a form, or book online.",
  pattern: "A website built for plumbing and HVAC needs to solve all three.",
  detail: "Friction kills calls. Every page needs a dominant, frictionless path to a booked job based on what that customer type needs to do next."
}];


const webDesignHubQualification = {
  eyebrow: "Selective Fit",
  headline: "Is Website Design Right for Your Company?",
  subheadline: "We work best with established plumbing and HVAC companies that want to own their market, not just check a website box.",
  goodFit: [
  { point: "5 to 40+ truck operations with a growth mindset", detail: "You're running an active dispatch board and want your website to generate more of the calls that fill it." },
  { point: "Companies ready to invest in a premium, scalable web presence", detail: "You understand a performance website is infrastructure, not a commodity. You're ready to build it right." },
  { point: "Owners and GMs who measure success by booked calls and revenue", detail: "You don't care about traffic reports. You care whether the phone rings with jobs that match your margins." },
  { point: "Operators who want SEO and paid advertising to work from day one", detail: "Your site will be built to activate both channels immediately, not require a separate rebuild six months later." },
  { point: "Companies where the phone ringing is the only metric that matters", detail: "Every design and content decision we make is filtered through one question: does this make a customer more likely to call?" }],

  notFit: [
  { point: "Under $500K revenue looking for the lowest price option", detail: "A performance build requires investment. If budget is the primary filter, there are better fits for where you are right now." },
  { point: '"Just need something live" — bare-minimum website projects', detail: "We build revenue infrastructure, not placeholders. Minimum viable websites are not in our scope." },
  { point: "Companies not ready to track calls or measure cost per booked call", detail: "Every site we build includes call tracking. If you're not ready to measure, we can't show you the ROI." },
  { point: "Operations not planning to grow beyond current capacity", detail: "Our builds are designed to scale. If you're not planning to grow, the investment won't make sense." }],

  ctaText: "Claim Your Territory Today"
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
      "url": SITE_URL
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        schemaJson={pageSchema} />
      

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
                Website Design for Plumbing & HVAC
              </h1>
              {/* Subheadline — matches SEO parent page size */}
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-cta mb-6 leading-tight">
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
                "Built to activate SEO and paid advertising from day one"].
                map((bullet, i) =>
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-cta mt-0.5 shrink-0 font-bold">✓</span>
                    <span>{bullet}</span>
                  </li>
                )}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-cta/10 to-accent-blue/5 rounded-2xl blur-xl" />
              <div className="relative bg-surface-dark border border-border/60 rounded-2xl p-6 lg:p-8 shadow-2xl">
                <TwoStepContactForm
                  formType="web_design_hub_hero"
                  submitButtonText="Claim Your Territory Today"
                  step1ButtonText="Claim Your Territory Today" />
                
                <p className="text-center text-xs text-text-muted mt-4">One plumbing client and one HVAC client per market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WEBSITES FAIL — light, redesigned Pattern B */}
      <section className="py-24 lg:py-32 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="mb-12">
              <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-3">The Problem</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight max-w-2xl">
                Why Most 'Pretty' Contractor Websites Don't Perform
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-3xl">
                Design is not the problem. Structure is. Plumbing and HVAC websites need intent-specific pages, GBP alignment, and a conversion path built in from the start, not bolted on later.
              </p>
            </div>

            {/* 2-column problem cards */}
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {failures.map((item, i) =>
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-cta/30 hover:shadow-md transition-all duration-300 group">
                
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cta/8 border border-cta/15 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-cta" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-[15px] leading-snug mb-1">
                        {item.problem}
                      </p>
                      <span className="inline-block text-xs font-semibold text-cta bg-cta/8 px-2.5 py-0.5 rounded-full">
                        {item.pattern}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed pl-14">
                    {item.detail}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom callout bar */}
            <div className="bg-slate-900 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-white text-base leading-relaxed max-w-xl">
                <span className="font-semibold text-white">Every one of these patterns is fixable.</span>{" "}
                <span className="text-slate-300">The sites we build are structured to rank, convert, and scale from launch. Not patched later.</span>
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

      {/* MARKET DOMINATION FRAMEWORK — dark, Pattern A, 6 pillars */}
      <section className="py-24 lg:py-32 bg-[#0F1E2D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Label + centered headline */}
            <div className="text-center mb-10">
              <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">​part of the framework    </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                The Market Domination Framework
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
                A repeatable system for building plumbing and HVAC websites that rank and convert. Structure first. Then design. Then content. Then technical SEO foundation. In that order, every time.
              </p>
            </div>

            {/* Full-width stat/callout bar */}
            <div className="bg-[#162233] border border-white/10 rounded-xl px-8 py-5 mb-10 text-center">
              <p className="text-foreground text-base leading-relaxed">
                Most contractor websites are built in a day and forgotten. Ours are built as a system —{" "}
                <span className="text-accent-blue font-semibold">every page designed to rank, every layout designed to convert, and every decision tied to a booked call.</span>
              </p>
            </div>

            {/* 3-column × 2-row grid for 6 pillars */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {pillars.map((p, i) =>
              <div key={i} className="bg-[#162233] border border-white/10 rounded-xl p-6 flex gap-4 items-start hover:border-accent-blue/30 transition-colors">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-accent-blue/15 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-accent-blue" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground mb-1.5">{p.label}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer note */}
            <p className="text-center text-text-muted text-sm italic">
              When these six elements work together, the website becomes revenue infrastructure, not just a page.
            </p>
          </div>
        </div>
      </section>

      {/* EXCLUSIVITY */}
      <WebDesignExclusivity />

      {/* DIFFERENT CALL = DIFFERENT PAGE — dark, redesigned */}
      <section className="py-24 lg:py-32 bg-[#0F1E2D]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">Architecture Principle</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Different Phone Call = Different Page
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
                If the customer's reason for calling is different, the page should be different. Search engines read repair intent and installation intent as two separate queries. One page can't rank well for both.
              </p>
            </div>

            {/* 3-column layout: intent card, rule callout, intent card */}
            <div className="grid lg:grid-cols-3 gap-6 mb-10">

              {/* Emergency Repair */}
              <div className="bg-[#162233] border border-white/10 rounded-2xl p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cta/15 flex items-center justify-center shrink-0">
                    <span className="text-cta text-lg font-black leading-none">01</span>
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-cta">Emergency Repair</p>
                </div>
                <ul className="space-y-2 mb-5">
                  {['"water heater not working"', '"AC not cooling"', '"drain backup"'].map((q, j) =>
                  <li key={j} className="text-text-muted text-sm italic bg-white/5 rounded-lg px-3 py-2">{q}</li>
                  )}
                </ul>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Customer needs help <span className="text-foreground font-semibold">now</span>. Page must lead with availability, phone number, and same-day booking. No friction.
                  </p>
                </div>
              </div>

              {/* The Rule — center */}
              <div className="bg-accent-blue/10 border border-accent-blue/25 rounded-2xl p-7 flex flex-col items-center text-center justify-center">
                <div className="w-14 h-14 rounded-full bg-accent-blue/20 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-7 h-7 text-accent-blue" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Rule</p>
                <p className="text-foreground text-xl font-bold leading-snug mb-4">
                  One service. One intent. One page.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Blending repair and install onto the same page dilutes your relevance signal for both queries and splits your conversion path for both customer types.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Industry-specific page structure is covered in detail on the Plumbing and HVAC pages below.
                </p>
              </div>

              {/* Install / Replacement */}
              <div className="bg-[#162233] border border-white/10 rounded-2xl p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/15 flex items-center justify-center shrink-0">
                    <span className="text-accent-blue text-lg font-black leading-none">02</span>
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue">Install / Replacement</p>
                </div>
                <ul className="space-y-2 mb-5">
                  {['"water heater replacement cost"', '"new AC unit"', '"whole house repipe"'].map((q, j) =>
                  <li key={j} className="text-text-muted text-sm italic bg-white/5 rounded-lg px-3 py-2">{q}</li>
                  )}
                </ul>
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Customer is <span className="text-foreground font-semibold">researching</span>. Page must lead with trust, options, proof, and pricing context.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom callout */}
            <div className="bg-[#162233] border border-white/10 rounded-xl px-8 py-5 text-center">
              <p className="text-text-secondary text-sm leading-relaxed">
                Every service category in plumbing and HVAC follows this split. The result is a site with <span className="text-foreground font-semibold">2–4× more rankable pages</span> than a generic contractor build — each targeting a distinct intent with a distinct conversion path.
              </p>
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
                { label: "Heading Hierarchy", body: "Signals topic authority to crawlers and AI systems simultaneously" }].
                map((item, i) =>
                <div key={i} className="flex gap-4 items-start bg-surface-elevated border border-border/50 rounded-xl p-5">
                    <div className="shrink-0 w-7 h-7 rounded-full bg-accent-blue/15 flex items-center justify-center mt-0.5">
                      <span className="text-accent-blue text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground mb-1">{item.label}</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY BREAKOUT — light, expanded copy */}
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
                className="group bg-white border border-slate-200 hover:border-cta/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cta/10">
                
                <p className="text-xs font-semibold tracking-widest uppercase text-cta mb-3">Plumbing</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cta transition-colors">
                  Plumbing Website Design
                </h3>
                <div className="space-y-3 mb-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Most plumbing websites make a critical mistake: they blend emergency repair and installation content onto the same page, which means they end up ranking weakly for both. We build around the call types that actually drive plumbing revenue, including water heaters, repiping, drain cleaning, and slab leaks, with separate, intent-aligned pages for every service type.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Each page is structured around where the customer is in their decision. Emergency pages lead with availability and a phone number, because someone with a burst pipe isn't browsing. They're calling. Replacement pages lead with trust, options, and pricing context, because that customer is comparing and needs a reason to choose you.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Every city you serve also gets its own localized page, tied directly to your Google Business Profile. The result is a site that generates calls across every job type, not just the ones you happen to rank for by accident.
                  </p>
                </div>
                <span className="inline-flex items-center text-sm font-medium text-cta gap-2">
                  See the plumbing approach
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link to="/hvac-website-design" className="group bg-white border border-slate-200 hover:border-accent-blue/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/10">
                
                <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">HVAC</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-accent-blue transition-colors">
                  HVAC Website Design
                </h3>
                <div className="space-y-3 mb-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    HVAC has a unique search pattern that most websites completely ignore. Summers and winters drive high-urgency emergency calls, while spring and fall bring comparison shoppers researching replacement costs. A site built around that reality captures both customer types, with separate intent-aligned pages for each and seasonal campaign readiness built into the structure from the start.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We also build around the call types that define HVAC revenue: changeouts, maintenance agreements, and the urgency of no-cool and no-heat calls. Each service gets its own page structured for the customer at that specific moment, whether they need someone out today or are weighing their options for a system replacement.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Maintenance agreement upsell gets dedicated landing pages too, because recurring agreement revenue is the most stable part of any HVAC business, and most websites do nothing to support it.
                  </p>
                </div>
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
      <ServiceBiggerPicture heading="Web Design Is One Piece of the" headingHighlight="Connected Growth System" body1="Your website is the conversion engine everything else drives traffic to. But it compounds when it's built to support SEO, paid ads, and GBP — not just to look good."
      body2="An SEO-architected site earns organic rankings faster and holds them longer. Speed and mobile experience reduce paid ad cost per click and improve conversion rates. Schema markup strengthens local pack visibility. Review integration builds trust on every landing page. When your website is built inside the system, every channel performs better from day one."
      centerLabel="Web Design"
      centerSublabel="Conversion engine for every channel."
      services={WEB_DESIGN_BIGGER_PICTURE_SERVICES}
      orbitNodes={WEB_DESIGN_ORBIT_NODES}
      ctaHref="/plumbing-and-hvac-web-design" />
      

      {/* CONTACT */}
      <ServiceContactForm
        formType="web_design_hub_contact"
        headline="See If Your Market Is Available"
        subheadline="Tell us where you operate and what you're working toward. We'll take it from there."
        exclusivityLine="One plumbing client and one HVAC client per market. Your competitors don't get in."
        steps={WEB_DESIGN_STEPS} />
      

      <Footer />
    </div>);

};

export default WebDesignHub;