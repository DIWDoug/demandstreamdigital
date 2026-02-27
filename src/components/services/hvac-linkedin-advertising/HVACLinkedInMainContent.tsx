import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HVACLinkedInMainContent = () => {
  return (
    <>
      {/* SECTION 03 — WHY LINKEDIN */}
      <section id="why-linkedin" className="py-20 lg:py-28 bg-surface-light scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Most HVAC Companies Ignore LinkedIn. That Creates Opportunity.
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4 max-w-3xl">
            Commercial HVAC decisions are not made by homeowners. They are made by the people responsible for keeping buildings running: property managers, facility directors, and operations leaders who manage HVAC spend across multiple locations.
          </p>
          <p className="text-text-secondary leading-relaxed mb-12 max-w-3xl">
            LinkedIn is the only advertising platform that lets you target these roles by job title, company size, and geography. While competitors focus entirely on residential search, you can build commercial relationships before the bid even goes out.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Decision-maker roles:</h3>
              <ul className="space-y-2">
                {["Property managers", "Facility directors", "Building owners", "Operations managers", "Multi-location retail operators"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Targeting capability:</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                LinkedIn lets you reach these roles directly within your service area. No mass market spend. No wasted residential impressions. Targeted outreach to the people who control commercial HVAC budgets.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Commercial contracts produce a different kind of booked call than residential emergency work. Longer average ticket. Recurring maintenance agreements. Predictable demand across multiple buildings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — CAMPAIGN STRATEGY */}
      <section id="campaign-strategy" className="py-20 lg:py-28 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Commercial HVAC Campaign Strategy
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl">
            Three campaign types that build recurring revenue and long-cycle contract opportunities.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Maintenance Contract Acquisition",
                body: "LinkedIn campaigns that promote your commercial maintenance offering to the people who sign contracts. A single commercial maintenance agreement with a 20-unit portfolio operator can produce more booked calls annually than most residential search campaigns.",
                bullets: ["Preventative maintenance programs", "Multi-building service agreements", "Emergency response partnerships", "Seasonal inspection schedules"]
              },
              {
                title: "Retrofit & Upgrade Campaigns",
                body: "Commercial upgrades involve long sales cycles and capital planning. LinkedIn keeps your brand in the conversation throughout. Messaging focuses on reliability, energy savings, and long-term ROI — the language commercial buyers use.",
                bullets: ["System retrofit promotions", "Energy efficiency upgrades", "HVAC modernization projects", "Capital expenditure outreach"]
              },
              {
                title: "Geographic & Industry Targeting",
                body: "We narrow campaigns to eliminate wasted spend from the first impression. Every dollar spent reaches someone who could become a contract. Tighter targeting produces higher conversion rates and lower cost per booked commercial call.",
                bullets: ["Job title targeting: facility directors, property managers", "Industry filtering: commercial real estate, retail, hospitality", "Company size: multi-location operators", "Geographic radius matched to your coverage"]
              }
            ].map((card, i) => (
              <div key={i} className="bg-surface-elevated border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3">{card.title}</h3>
                <ul className="space-y-1 mb-4">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-text-secondary leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — SERVICETITAN */}
      <section id="tracking" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <a href="https://business.linkedin.com/marketing-solutions/ads" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">LinkedIn advertising</a> + ServiceTitan: Commercial Revenue You Can Measure
          </h2>
          <p className="text-text-secondary mb-4 max-w-2xl mx-auto">
            Commercial advertising that produces impressions and not revenue is not a strategy. Every LinkedIn campaign we run is connected to your reporting stack so you can see what the spend is producing.
          </p>
          <p className="text-text-secondary mb-10 max-w-3xl mx-auto text-sm">
            We tie LinkedIn performance to the numbers that matter for a commercial HVAC operation: booked calls from commercial leads, cost per booked call against your average commercial ticket, and closed revenue attributed back to campaign source.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { label: "Lead Tracking", sub: "Source attribution" },
              { label: "Call Tracking", sub: "Where applicable" },
              { label: "Booking Rate", sub: "Commercial jobs booked" },
              { label: "Closed Revenue", sub: "Job-level reporting" }
            ].map((m, i) => (
              <div key={i} className="bg-white/5 border border-border/40 rounded-lg p-4">
                <p className="font-semibold text-foreground text-sm">{m.label}</p>
                <p className="text-xs text-text-muted mt-1">{m.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted mb-8">Other CRMs supported. ServiceTitan is the primary integration.</p>
          <Link to="/contact" className="btn-cta inline-flex items-center gap-2">
            Claim Your Territory Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SECTION 06 — CHANNEL ECOSYSTEM */}
      <section id="integration" className="py-20 lg:py-28 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            LinkedIn Builds What Search and SEO Cannot
          </h2>
          <p className="text-text-secondary mb-4 max-w-3xl">
            Search and SEO capture homeowners who are already looking. LinkedIn reaches commercial decision-makers before they have even started the process. The combination gives you coverage across both residential urgency and commercial opportunity.
          </p>
          <p className="text-text-secondary mb-10 max-w-3xl text-sm">
            For HVAC companies serious about commercial growth, LinkedIn advertising is the only channel that gets you in front of the right decision-makers at the right company size before a competitor does.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { channel: "LinkedIn", body: "Builds commercial relationships through demand generation targeted at the roles that control HVAC budgets. Supports long sales cycles that Search cannot reach.", link: null },
              { channel: "Search Ads", body: "Captures urgent residential demand. Puts your company in front of homeowners who need service now.", link: "/hvac-search-ads" },
              { channel: "SEO", body: "Builds credibility over time. Organic visibility that compounds and reinforces brand authority across both residential and commercial searches.", link: "/hvac-seo" }
            ].map((c, i) => (
              <div key={i} className="bg-surface-elevated border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">{c.channel}</h3>
                <p className="text-sm text-text-secondary">{c.body}</p>
                {c.link && <Link to={c.link} className="text-xs text-accent-blue hover:underline mt-2 inline-block">Learn more →</Link>}
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted">
            Together, you cover residential volume and commercial stability. Residential booked calls fill the board today. Commercial contracts protect the forecast for the next 12 months.
          </p>
        </div>
      </section>
    </>
  );
};

export default HVACLinkedInMainContent;
