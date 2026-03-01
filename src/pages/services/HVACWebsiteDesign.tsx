import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import ServiceFitQualifierSection from "@/components/services/generic/ServiceFitQualifierSection";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";
import { SITE_URL } from "@/lib/constants";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";

const canonicalUrl = `${SITE_URL}/hvac-website-design`;
const metaTitle = "HVAC Website Design for Seasonal Demand | DSD";
const metaDescription = "Your HVAC website isn't built for seasonal demand or search intent. We design HVAC contractor websites with separate pages for repair, install, and maintenance. Built to rank and convert.";

const anchorItems = [
  { label: "Why They Fail", href: "#why-they-fail" },
  { label: "The Framework", href: "#framework" },
  { label: "Page Architecture", href: "#architecture" },
  { label: "Seasonal Intent", href: "#seasonal" },
  { label: "GBP Alignment", href: "#gbp" },
  { label: "Who It's For", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const gbpRows = [
  { category: "Air Conditioning Repair", page: "/ac-repair-[city]/", intent: "Emergency — same-day service" },
  { category: "Air Conditioning Installation", page: "/ac-installation-[city]/", intent: "Install — estimate request" },
  { category: "Heating Repair", page: "/heating-repair-[city]/", intent: "Emergency — furnace / heat pump" },
  { category: "Heating System Installation", page: "/furnace-installation-[city]/", intent: "Install — equipment selection" },
  { category: "Heat Pump Services", page: "/heat-pump-installation-[city]/", intent: "Research — efficiency & rebates" },
  { category: "HVAC Maintenance", page: "/hvac-maintenance-agreement/", intent: "Retention — membership conversion" },
  { category: "Ductless Mini-Split", page: "/ductless-mini-split-[city]/", intent: "Research — add-on or replacement" },
];

const hvacWebDesignQualification = {
  eyebrow: "Selective Fit",
  headline: "Is HVAC Website Design Right for Your Company?",
  subheadline: "We work best with established HVAC companies that want to own their seasonal market with a website built for real call volume.",
  goodFit: [
    { point: "5 to 40+ truck HVAC operations with a growth or scale mindset", detail: "You run an active dispatch board and want your website to fill it during peak and shoulder season." },
    { point: "Companies running seasonal campaigns who need landing pages that actually convert", detail: "You're spending on paid advertising and need pages that match that spend with real booking performance." },
    { point: "Operators preparing to scale with heat pump and ductless services", detail: "Equipment transitions require new page structure. We build that in from the start, not as an add-on." },
    { point: "HVAC companies ready to build or expand a maintenance agreement base", detail: "Shoulder season is the highest-value window for maintenance enrollment. Your site needs to be built for it." },
    { point: "Owners who measure success by booked calls, not traffic reports", detail: "Every design decision is filtered through one question: does this generate a dispatched call?" },
  ],
  notFit: [
    { point: "Under $500K revenue looking for the lowest-cost option", detail: "A performance build requires investment. If budget is the primary filter, there are better fits for where you are." },
    { point: '"Just need something online" — companies not ready to invest in performance', detail: "We build revenue infrastructure. Checkbox websites are not in scope." },
    { point: "Operations not planning to track calls or measure cost per booked call", detail: "Every site includes call tracking. Without measurement, the investment can't show its return." },
    { point: "Companies not ready to activate SEO or paid advertising after launch", detail: "The site is built to power both channels. Without activating them, you won't recover the investment." },
  ],
  ctaText: "Claim Your Territory Today",
};

const failureItems = [
  {
    title: "Heating and Cooling Mixed Onto One Page",
    body: "A homeowner searching 'AC repair' and a homeowner searching 'furnace repair' have completely different intent. One page can't serve both well. Google reads blurred search intent as lower relevance for both terms.",
  },
  {
    title: "Repair and Installation Blended Together",
    body: "'AC Repair & Installation' on one page confuses search intent and reduces your ranking potential for both terms. You lose the repair call and the install lead.",
  },
  {
    title: "No Seasonal Urgency in the UX",
    body: "Emergency callers don't want to read three paragraphs before finding your number. Peak-season pages need to be built for speed and clarity. The phone number should be the first thing they see.",
  },
  {
    title: "No Structure to Scale",
    body: "Adding a heat pump page, a ductless page, or a new city later breaks everything because the site wasn't built with structure in mind. Every addition becomes a rebuild.",
  },
];

const HVACWebsiteDesign = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HVAC Website Design",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "HVAC Web Design Service",
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
                <Link to="/website-design" className="hover:text-foreground transition-colors">Website Design</Link>
                <span className="text-border">/</span>
                <span className="text-foreground">HVAC</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 leading-tight">
                HVAC Website Design
              </h1>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-cta mb-6 leading-tight">
                Built to Rank and Convert
              </p>
              <p className="text-text-secondary leading-relaxed mb-4 font-medium">
                A premium HVAC website built around seasonal demand, service-level structure, and a call-first experience that fills your dispatch board.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                HVAC companies run on seasonal urgency. Your website needs to match that reality. When a homeowner searches for AC repair in July or a furnace replacement in November, the page they land on needs to answer the right question, build trust fast, and make it easy to call. Most HVAC websites don't do that.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Seasonal intent structure: separate pages for no-cool, no-heat, and replacement research",
                  "Repair vs. install separation. Google reads these as distinct intents.",
                  "Heat pump and ductless-ready page structure for equipment transitions",
                  "Maintenance agreement conversion paths built into service pages",
                  "Google Business Profile alignment: categories, services, and page signals working together",
                  "AI-ready structure with schema, FAQs, and answer blocks by default",
                  "ServiceTitan-compatible booking UX with call tracking from day one",
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
                  formType="hvac_web_design_hero"
                  submitButtonText="Claim Your Territory Today"
                  step1ButtonText="Claim Your Territory Today"
                />
                <p className="text-center text-xs text-text-muted mt-4">One HVAC company per market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceHubAnchorNav items={anchorItems} />

      {/* WHY HVAC WEBSITES FAIL — light, Pattern B */}
      <section id="why-they-fail" className="py-24 lg:py-32 bg-[#F8F9FA] scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
              {/* LEFT — 45% */}
              <div className="lg:sticky lg:top-32">
                <p className="text-cta text-xs font-semibold uppercase tracking-widest mb-4">The Problem</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Why Most HVAC Websites Don't Generate Consistent Booked Calls
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-5">
                  HVAC is one of the most search-driven trades. Homeowners search when they're in pain: no cooling in July, no heat in January. That urgency is your opportunity. But only if your website is built to capture it.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-5">
                  Most HVAC websites are built once and left static. Same pages, same messaging, year-round. That's a missed opportunity on every front.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  The result is a site that may rank for the company name and little else — invisible when homeowners are searching during the moments that generate calls.
                </p>
                {/* Blockquote — left red border, italic */}
                <blockquote className="border-l-4 border-cta pl-5 mb-6">
                  <p className="text-slate-700 text-base italic leading-relaxed">
                    "When a homeowner searches 'AC not cooling' at 7pm in July, they are not browsing. They are calling whoever shows up first with a clear booking path. That page has to be built specifically for that moment."
                  </p>
                </blockquote>
                <p className="text-slate-600 leading-relaxed mb-8">
                  The four failure patterns on the right aren't edge cases. They are the default state for most HVAC websites. Each one has a direct structural fix.
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

              {/* RIGHT — 55%, stacked items, no card borders, generous spacing */}
              <div className="space-y-8">
                {failureItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-9 h-9 rounded-lg bg-cta/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-cta text-xs font-bold">✕</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-[15px] mb-2">{item.title}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORK — dark, Pattern A */}
      <section id="framework" className="py-24 lg:py-32 bg-[#0F1E2D] scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Label + centered headline */}
            <div className="text-center mb-10">
              <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">The Framework</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                The Market Domination Framework™ Applied to HVAC
              </h2>
              <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
                Built for your market, your climate, and your service mix. The call types are different from plumbing. The seasonal pressure is different. The equipment transitions happening right now create content and trust requirements a generic website can't address.
              </p>
            </div>

            {/* Full-width stat/callout bar */}
            <div className="bg-[#162233] border border-white/10 rounded-xl px-8 py-5 mb-10 text-center">
              <p className="text-foreground text-base leading-relaxed">
                An HVAC company with a no-cool emergency page, a furnace repair page, and a heat pump install page ranks for three distinct customer intents.{" "}
                <span className="text-accent-blue font-semibold">A company with one HVAC services page competes for none of them effectively.</span>
              </p>
            </div>

            {/* 2x2 card grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                { label: "Architecture", body: "Separate pages for cooling, heating, heat pumps, ductless, and maintenance. Each page is built for the specific intent of that customer." },
                { label: "Trust", body: "NATE certifications, EPA 608 credentials, real team photography, and financing options positioned where they convert." },
                { label: "Speed", body: "Mobile-first build throughout. Most emergency HVAC searches happen on phones during peak discomfort. A slow page loses that call." },
                { label: "Conversion", body: "Urgency-matched CTAs: emergency pages lead with the phone number. Install and replacement pages lead with estimates and equipment options." },
              ].map((p, i) => (
                <div key={i} className="bg-[#162233] border border-white/10 rounded-xl p-7">
                  <p className="text-base font-bold text-foreground mb-2">{p.label}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-text-muted text-sm italic">
              Every HVAC website we build runs through this framework. Structure determines whether your SEO investment compounds or stalls.
            </p>
          </div>
        </div>
      </section>

      {/* FOUR CALL TYPES — light, 60/40 numbered layout */}
      <section id="architecture" className="py-24 lg:py-32 bg-[#F8F9FA] scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">Architecture Principle</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Different Phone Call = Different Page
            </h2>
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Left 3/5 — four call types as numbered rows */}
              <div className="lg:col-span-3">
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  An HVAC company gets calls for at least four distinct reasons. Each represents a different customer, a different intent, and a different conversion path. One page cannot serve all four without losing calls to whoever built a dedicated page.
                </p>
                {[
                  {
                    num: "01",
                    type: "AC Repair",
                    intent: "Emergency / urgency",
                    color: "text-cta",
                    note: "Customer is hot and wants help today. Lead with your number, availability, and same-day booking. Zero friction.",
                  },
                  {
                    num: "02",
                    type: "AC Replacement / New System",
                    intent: "Research / purchase",
                    color: "text-accent-blue",
                    note: "Customer is comparing options. Lead with equipment overview, trust signals, pricing context, and financing.",
                  },
                  {
                    num: "03",
                    type: "Furnace / Heating Repair",
                    intent: "Emergency / urgency",
                    color: "text-cta",
                    note: "No heat in winter is a genuine emergency. Credibility and response speed are what convert this customer.",
                  },
                  {
                    num: "04",
                    type: "Furnace Install / Heat Pump / Ductless",
                    intent: "Research / comparison",
                    color: "text-accent-blue",
                    note: "Shoulder season planning. Heat pump and ductless pages must address equipment comparisons, rebates, and refrigerant transitions.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex gap-6 py-6 ${i < 3 ? "border-b border-slate-200" : ""}`}>
                    <span className={`text-4xl font-black leading-none shrink-0 ${item.color} opacity-20`}>{item.num}</span>
                    <div>
                      <p className={`text-xs font-semibold tracking-widest uppercase mb-1 ${item.color}`}>{item.type}</p>
                      <p className="text-xs text-slate-400 italic mb-3">{item.intent}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right 2/5 — rule callout */}
              <div className="lg:col-span-2 lg:sticky lg:top-32">
                <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
                  <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">The Principle</p>
                  <p className="text-slate-900 text-lg font-bold leading-snug mb-4">
                    Four call types. Four page families.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    When heating and cooling share a page, both rank worse and both convert at a lower rate. Separation is what creates clarity for search engines and for customers.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The GBP alignment section below shows how each page maps directly to your Google Business Profile service categories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEASONAL INTENT — dark, 60/40 numbered layout */}
      <section id="seasonal" className="py-24 lg:py-32 bg-[#0F1E2D] scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">Seasonal Architecture</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Website Should Match Your Climate Calendar
            </h2>
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Left 3/5 — numbered season rows */}
              <div className="lg:col-span-3">
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  HVAC demand is not flat. It spikes in peak season, dips in shoulder season, and shifts between cooling and heating markets. A website built with one set of pages serves none of those moments well.
                </p>
                {[
                  {
                    num: "01",
                    season: "Peak Season",
                    label: "No-Cool / Emergency AC",
                    icon: "☀",
                    queries: ['"AC not working"', '"AC repair near me"', '"air conditioning emergency"'],
                    note: "Built for speed and phone-first. Customer is hot and needs help now. Every extra click loses the call.",
                  },
                  {
                    num: "02",
                    season: "Heating Season",
                    label: "No-Heat / Furnace Repair",
                    icon: "❄",
                    queries: ['"furnace not working"', '"heat pump repair"', '"emergency heating service"'],
                    note: "Built for urgency and credibility. Customer is cold, anxious, and checking credentials before they call.",
                  },
                  {
                    num: "03",
                    season: "Shoulder Season",
                    label: "Replacement Research + Maintenance",
                    icon: "◐",
                    queries: ['"new AC cost"', '"heat pump installation"', '"HVAC maintenance plan"'],
                    note: "Built for estimates and membership enrollment. This is where maintenance agreement conversions happen.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex gap-6 py-7 ${i < 2 ? "border-b border-white/10" : ""}`}>
                    <span className="text-4xl font-black leading-none shrink-0 text-accent-blue opacity-25">{item.num}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base">{item.icon}</span>
                        <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue">{item.season}</p>
                      </div>
                      <p className="text-sm font-bold text-foreground mb-3">{item.label}</p>
                      <ul className="space-y-1 text-text-muted text-sm italic mb-3">
                        {item.queries.map((q, j) => <li key={j}>{q}</li>)}
                      </ul>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right 2/5 — callout */}
              <div className="lg:col-span-2 lg:sticky lg:top-32">
                <div className="bg-[#162233] border border-white/10 rounded-2xl p-7">
                  <p className="text-xs font-semibold tracking-widest uppercase text-cta mb-4">Shoulder Season</p>
                  <p className="text-foreground text-base font-bold leading-snug mb-4">
                    The highest-value window for maintenance agreement enrollment.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    A customer who isn't in emergency mode is far more likely to consider a maintenance plan. But only if your site presents it clearly and makes enrollment easy.
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    We build that conversion path into the site structure from the start, not as an afterthought.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GBP ALIGNMENT — light */}
      <section id="gbp" className="py-24 lg:py-32 bg-[#F8F9FA] scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">GBP Alignment</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Your Website and Your Google Business Profile Must Work Together
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Your Google Business Profile is your Maps ranking foundation. Your website is what reinforces it. When the two are aligned — matching categories, matching services, matching signals — your Maps visibility improves. We build HVAC websites with GBP taxonomy in mind from the start.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white border-b border-slate-200">
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-accent-blue">GBP Category / Service</th>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-accent-blue">Matching Website Page</th>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-accent-blue">Primary Intent</th>
                  </tr>
                </thead>
                <tbody>
                  {gbpRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-[#F8F9FA]" : "bg-white"}>
                      <td className="p-4 text-slate-900 font-medium">{row.category}</td>
                      <td className="p-4 text-slate-400 font-mono text-xs">{row.page}</td>
                      <td className="p-4 text-slate-600">{row.intent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTIVE FIT */}
      <ServiceFitQualifierSection config={hvacWebDesignQualification} />

      {/* CONTACT */}
      <ServiceContactForm
        formType="hvac_web_design_contact"
        headline="See If Your Market Is Available"
        subheadline="Tell us where you operate and what you're working toward. We'll take it from there."
        exclusivityLine="One HVAC company per market. Your competitors don't get in."
      />

      <Footer />
    </div>
  );
};


export default HVACWebsiteDesign;
