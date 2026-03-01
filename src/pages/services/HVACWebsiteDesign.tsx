import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import TwoStepContactForm from "@/components/forms/TwoStepContactForm";
import { SITE_URL } from "@/lib/constants";

const canonicalUrl = `${SITE_URL}/hvac-website-design`;
const metaTitle = "HVAC Website Design for Seasonal Demand | DSD";
const metaDescription = "Your HVAC website isn't built for seasonal demand or search intent. We design HVAC contractor websites with separate pages for repair, install, and maintenance. Built to rank and convert.";

const SectionDivider = () => (
  <div className="container mx-auto px-6 lg:px-8">
    <hr className="border-t border-border/40" />
  </div>
);

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

const goodFit = [
  "5 to 40+ truck HVAC operations with a growth or scale mindset",
  "Companies running seasonal campaigns who need landing pages that actually convert",
  "Operators preparing to scale with heat pump and ductless services",
  "HVAC companies ready to build or expand a maintenance agreement base",
  "Owners who measure success by booked calls, not traffic reports",
];

const notFit = [
  "Under $500K revenue looking for the lowest-cost option",
  "\"Just need something online\" — companies not ready to invest in performance",
  "Operations not planning to track calls or measure cost per booked call",
  "Companies not ready to activate SEO or paid advertising after launch",
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
                A premium HVAC website built around seasonal demand, service-level architecture, and a call-first experience that fills your dispatch board.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                HVAC companies run on seasonal urgency. Your website needs to match that reality. When a homeowner searches for AC repair in July or a furnace replacement in November, the page they land on needs to answer the right question, build trust fast, and make it easy to call. Most HVAC websites don't do that.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Seasonal intent architecture — separate pages for no-cool, no-heat, and replacement research",
                  "Repair vs. install separation — Google reads these as distinct intents",
                  "Heat pump and ductless-ready page structure for equipment transitions",
                  "Maintenance agreement conversion paths built into service pages",
                  "Google Business Profile alignment — categories, services, and page signals working together",
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

      {/* WHY HVAC WEBSITES FAIL */}
      <section id="why-they-fail" className="py-20 lg:py-28 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Problem</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why Most HVAC Websites Don't Generate Consistent Booked Calls
            </h2>
            <p className="text-text-secondary leading-relaxed mb-12 max-w-2xl">
              HVAC is one of the most search-driven trades. Homeowners search when they're in pain — no cooling in July, no heat in January. That urgency is your opportunity. But only if your website is built to capture it.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Heating and Cooling Mixed Onto One Page",
                  body: "A homeowner searching \"AC repair\" and a homeowner searching \"furnace repair\" have completely different intent. One page can't serve both well — and Google knows it. Lower rankings because search intent is blurred.",
                  cost: "Lower rankings + higher cost per booked call",
                },
                {
                  title: "Repair and Installation Blended Together",
                  body: "\"AC Repair & Installation\" on one page confuses search intent and dilutes your ranking potential for both terms. You lose the repair call and the install lead.",
                  cost: "Missed peak-season volume",
                },
                {
                  title: "No Seasonal Urgency in the UX",
                  body: "Emergency callers don't want to read three paragraphs before finding your number. Peak-season pages need to be built for speed and clarity. The phone number should be the first thing they see.",
                  cost: "Maintenance agreement revenue left uncaptured",
                },
                {
                  title: "No Architecture to Scale",
                  body: "Adding a heat pump page, a ductless page, or a new city later breaks everything — because the site wasn't built with structure in mind. Every addition becomes a rebuild.",
                  cost: "Shoulder-season instability",
                },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border/60 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">{item.body}</p>
                  <p className="text-cta text-xs font-semibold">{item.cost}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FRAMEWORK */}
      <section id="framework" className="py-20 lg:py-28 bg-card border-y border-border scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Framework</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              The Market Domination Framework™ Applied to HVAC Website Design
            </h2>
            <p className="text-text-secondary leading-relaxed mb-12 max-w-2xl">
              Every website we build for an HVAC company runs through this system. It isn't customized from scratch each time — but the specifics inside it are built for your market, your climate, and your service mix. The call types are different. The seasonal pressure is different. The equipment transition happening right now creates new content and trust requirements a generic website doesn't address.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Architecture", body: "Separate pages for cooling, heating, heat pumps, ductless, and maintenance" },
                { label: "Trust", body: "NATE certifications, EPA 608 credentials, reviews, financing, and real team photography" },
                { label: "Speed", body: "Mobile-first build — most HVAC emergency searches happen on phones in the field" },
                { label: "AI Structure", body: "FAQ blocks for repair vs. replace, sizing, refrigerant transitions, and cost questions" },
                { label: "Conversion", body: "Urgency-matched CTAs — emergency pages lead with phone, install pages lead with estimates" },
              ].map((p, i) => (
                <div key={i} className="bg-background border border-border/60 rounded-xl p-6">
                  <p className="text-sm font-bold text-foreground mb-2">{p.label}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FOUR CALL TYPES */}
      <section id="architecture" className="py-20 lg:py-28 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Architecture Principle</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Different Phone Call = Different Page
            </h2>
            <p className="text-text-secondary leading-relaxed mb-12 max-w-2xl">
              An HVAC company gets calls for at least four distinct reasons. Each one represents different intent, a different customer mindset, and a different conversion path. One page can't serve all four. We build separate pages for each call type — because it's the only way to give each customer the experience that actually converts.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  type: "AC Repair",
                  intent: "Emergency / urgency intent",
                  description: "Customer is hot, uncomfortable, and wants help today. They searched \"AC not cooling\" or \"HVAC repair near me.\" They need to see your number immediately and know you can come out fast.",
                  goal: "Fast phone call. Availability front-and-center. Same-day booking.",
                  color: "cta",
                },
                {
                  type: "AC Replacement / New System",
                  intent: "Research / purchase intent",
                  description: "Customer is comparing options. They searched \"AC replacement cost\" or \"new AC unit installation.\" They want to understand equipment options, pricing ranges, and why your company is the right choice.",
                  goal: "Estimate request. Trust signals. Equipment overview. Financing options.",
                  color: "accent-blue",
                },
                {
                  type: "Furnace / Heating Repair",
                  intent: "Emergency / urgency intent",
                  description: "No-heat in winter is a genuine emergency. Customer wants to know you can respond fast, that your tech is qualified, and that they won't be overcharged in a vulnerable moment.",
                  goal: "Fast phone call. Credibility signals. Clear emergency process.",
                  color: "cta",
                },
                {
                  type: "Furnace Install / Heat Pump / Ductless",
                  intent: "Research / comparison intent",
                  description: "Customer is planning a replacement, often during shoulder season. Heat pump and ductless searches are growing. Pages need to address equipment comparisons, efficiency claims, and refrigerant transition questions.",
                  goal: "Estimate or consultation request. Equipment education. Rebate and financing information.",
                  color: "accent-blue",
                },
              ].map((item, i) => (
                <div key={i} className={`bg-card border rounded-xl p-6 ${item.color === "cta" ? "border-cta/20" : "border-accent-blue/20"}`}>
                  <p className={`text-xs font-semibold tracking-widest uppercase mb-1 ${item.color === "cta" ? "text-cta" : "text-accent-blue"}`}>{item.type}</p>
                  <p className="text-xs text-text-muted mb-3">{item.intent}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.description}</p>
                  <p className={`text-sm font-semibold ${item.color === "cta" ? "text-cta" : "text-accent-blue"}`}>
                    Page goal: {item.goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SEASONAL INTENT ARCHITECTURE */}
      <section id="seasonal" className="py-20 lg:py-28 bg-card border-y border-border scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Seasonal Architecture</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Website Should Match Your Climate Calendar
            </h2>
            <p className="text-text-secondary leading-relaxed mb-12 max-w-2xl">
              HVAC demand isn't flat. It spikes in peak season, dips in shoulder season, and shifts completely between cooling and heating markets. Your website needs to be built with that calendar in mind. Most HVAC websites are static — same pages, same messaging, year-round. That's a missed opportunity.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: "☀",
                  season: "Peak Season",
                  label: "No-Cool / Emergency AC",
                  queries: ['"AC not working"', '"AC repair near me"', '"air conditioning emergency"'],
                  note: "Pages built for speed & phone-first",
                },
                {
                  icon: "❄",
                  season: "Heating Season",
                  label: "No-Heat / Furnace Repair",
                  queries: ['"furnace not working"', '"heat pump repair"', '"emergency heating"'],
                  note: "Pages built for urgency & credibility",
                },
                {
                  icon: "◐",
                  season: "Shoulder Season",
                  label: "Replacement Research + Maintenance",
                  queries: ['"new AC cost"', '"heat pump installation"', '"HVAC maintenance plan"'],
                  note: "Pages built for estimates & membership",
                },
              ].map((item, i) => (
                <div key={i} className="bg-background border border-border/60 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-1">{item.season}</p>
                  <p className="text-sm font-bold text-foreground mb-4">{item.label}</p>
                  <ul className="space-y-1.5 mb-4">
                    {item.queries.map((q, j) => (
                      <li key={j} className="text-xs text-text-secondary italic">{q}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-cta font-medium">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-xl bg-accent-blue/8 border border-accent-blue/25">
              <p className="text-accent-blue font-semibold text-sm leading-relaxed">
                Shoulder season is where maintenance agreement conversions happen. A customer who isn't in emergency mode is far more likely to consider a maintenance plan — but only if your site presents it clearly and makes enrollment easy. We build that conversion path into the site structure from the start.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* GBP ALIGNMENT */}
      <section id="gbp" className="py-20 lg:py-28 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">GBP Alignment</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Website and Your Google Business Profile Must Work Together
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10 max-w-2xl">
              Your Google Business Profile is your Maps ranking foundation. Your website is what reinforces it. When the two are aligned — matching categories, matching services, matching signals — your Maps visibility improves. We build HVAC websites with GBP taxonomy in mind from the start.
            </p>

            <div className="overflow-x-auto rounded-xl border border-border/60">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-card border-b border-border/60">
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-accent-blue">GBP Category / Service</th>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-accent-blue">Matching Website Page</th>
                    <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-accent-blue">Primary Intent</th>
                  </tr>
                </thead>
                <tbody>
                  {gbpRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-card"}>
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

      <SectionDivider />

      {/* WHO THIS IS FOR + EXCLUSIVITY */}
      <section id="fit" className="py-20 lg:py-28 bg-card border-y border-border scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Selective Fit</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 leading-tight">
              Who This Is For
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
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

            {/* Exclusivity block */}
            <div className="relative overflow-hidden bg-background border border-border/60 rounded-2xl p-8 lg:p-12 text-center">
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--cta)) 0%, transparent 70%)`
              }} />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-cta/10 text-cta text-xs font-semibold uppercase tracking-wider mb-6">
                  Exclusivity
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  One HVAC Company Per Market. That's the Model.
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4 max-w-xl mx-auto">
                  When you work with DemandStream, your HVAC competitors don't. We take one HVAC client per service area — one company gets the architecture, the SEO foundation, the paid activation, and the reputation system.
                </p>
                <p className="text-text-secondary mb-4">Your competitor can't buy the same thing. That's by design.</p>
                <p className="text-text-secondary mb-8">If your market is available, it's worth finding out now.</p>
                <Link to="/contact" className="btn-cta group inline-flex items-center gap-2">
                  Claim Your Territory Today
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 lg:py-28 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build an HVAC Website That Performs All Year?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10">
              Most HVAC websites were built to check a box. We build HVAC websites to fill a dispatch board — peak season, shoulder season, and everything in between. One market. One HVAC partner. Built for your territory.
            </p>
            <div className="bg-card border border-border/60 rounded-2xl p-6 lg:p-8">
              <TwoStepContactForm
                formType="hvac_web_design_contact"
                submitButtonText="Claim Your Territory Today"
                step1ButtonText="Claim Your Territory Today"
              />
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <Link to="/website-design" className="text-sm text-text-muted hover:text-foreground transition-colors">
                ← Back to Website Design
              </Link>
              <Link to="/plumbing-website-design" className="text-sm text-accent-blue hover:text-foreground transition-colors flex items-center gap-1">
                Plumbing Website Design
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

export default HVACWebsiteDesign;
