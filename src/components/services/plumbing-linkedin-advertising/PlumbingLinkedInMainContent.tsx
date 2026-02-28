import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PlumbingLinkedInMainContent = () => {
  return (
    <>
      {/* SECTION 03 — WHY LINKEDIN MATTERS */}
      <section id="why-linkedin" className="py-20 lg:py-28 bg-surface-light scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Most Plumbing Companies Ignore LinkedIn. That Creates Opportunity.
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4 max-w-3xl">
              Commercial plumbing decisions are not made by homeowners. They are made by the people responsible for keeping buildings operational — property managers who oversee multi-unit portfolios, facility directors who manage maintenance budgets across multiple locations, and operations leaders who sign service agreements with vendors they trust. These buyers are not typing "plumber near me" into Google. They are making decisions through professional networks and existing vendor relationships.
            </p>
            <p className="text-text-secondary leading-relaxed mb-10 max-w-3xl">
              LinkedIn is the only advertising platform built around professional role and company data. That means you can target a facility director at a 50-location commercial real estate portfolio within your service radius — not a broad homeowner audience that may or may not include anyone with commercial plumbing authority. While every other plumbing company in your market is competing for the same residential search clicks, LinkedIn lets you build commercial relationships in a channel where the competition is nearly absent.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-elevated border border-border rounded-xl p-8">
                <h3 className="font-bold text-foreground mb-4">Decision-Maker Roles You Can Reach</h3>
                <ul className="space-y-3">
                  {[
                    "Property managers",
                    "Facility directors",
                    "Building owners",
                    "Operations managers",
                    "Multi-location retail and restaurant operators",
                    "HOA and community management companies"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface-elevated border border-border rounded-xl p-8">
                <h3 className="font-bold text-foreground mb-4">What LinkedIn Targeting Enables</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  LinkedIn's job title, company size, industry, and geography filters let you build an audience of the exact people who control commercial plumbing budgets in your market. No wasted residential impressions. No broad interest targeting that may or may not reach anyone relevant. Every dollar in a LinkedIn campaign reaches someone who could become a contract — and a single commercial maintenance agreement with a multi-building portfolio operator can produce more annual booked calls than most residential search campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — CAMPAIGN STRATEGY */}
      <section id="campaign-strategy" className="py-20 lg:py-28 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Commercial Plumbing Campaign Strategy
            </h2>
            <p className="text-lg text-text-secondary mb-10">Three campaign types that build recurring revenue and long-cycle contract opportunities.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Maintenance Contract Acquisition",
                  body: "The most valuable commercial plumbing relationship is the maintenance contract — a recurring agreement that produces scheduled service calls, annual inspections, and priority response partnerships across multiple buildings. LinkedIn campaigns reach the decision-makers who sign these contracts before the renewal cycle begins, before they have a crisis, and before a competitor has established the relationship.",
                  bullets: [
                    "Preventative maintenance programs for commercial properties",
                    "Multi-building service agreements for portfolio operators",
                    "Emergency response partnerships with defined response windows",
                    "Backflow testing and annual certification programs",
                    "Inspection and compliance contracts for regulated facilities"
                  ],
                  closing: "Property managers at multi-site portfolios are not evaluating plumbing vendors through Google searches. A maintenance contract with a 15-unit residential portfolio or a 5-location restaurant operator produces a volume of booked, scheduled calls that no emergency residential campaign can match for consistency."
                },
                {
                  title: "Repiping and Infrastructure Campaigns",
                  body: "Commercial repiping and infrastructure upgrades are high-ticket, long-cycle decisions. The operator managing a building with 40-year-old galvanized pipes knows the problem is coming — they are just waiting for the right moment, the right budget cycle, and the right vendor to make the case. LinkedIn keeps your company in that conversation throughout the planning process, not just when the emergency forces the issue.",
                  bullets: [
                    "Commercial repipe and repiping promotions",
                    "Water line infrastructure upgrade campaigns",
                    "Sewer and drain system rehabilitation projects",
                    "Capital expenditure outreach timed to budget planning cycles",
                    "Multi-building hydro-jet and drain maintenance packages"
                  ],
                  closing: "The language for commercial infrastructure campaigns is different from residential. These buyers care about operational continuity, code compliance, long-term cost reduction, and minimal disruption to tenants or operations."
                },
                {
                  title: "Geographic and Industry Targeting",
                  body: "Precision targeting is what separates LinkedIn from every other paid channel. A properly structured LinkedIn campaign reaches only the decision-makers within your service area who have the authority to hire a commercial plumbing vendor — eliminating the wasted spend that comes with broad residential audiences.",
                  bullets: [
                    "Job title: facility directors, property managers, operations leads, building owners",
                    "Industry: commercial real estate, hospitality, healthcare, restaurants, retail",
                    "Company size: multi-location operators and portfolio owners",
                    "Geographic radius: matched to your verified commercial service coverage",
                    "Seniority level: director and above for contract-signing authority"
                  ],
                  closing: "Tighter targeting produces a lower cost per qualified commercial lead than any broad awareness campaign. The audience is smaller, but every person in it has the authority to sign the contract you want."
                }
              ].map((card, i) => (
                <div key={i} className="bg-surface-elevated border border-border rounded-xl p-7 flex flex-col">
                  <h3 className="font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{card.body}</p>
                  <ul className="space-y-2 mb-4">
                    {card.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-text-muted italic mt-auto">{card.closing}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — COMMERCIAL VS RESIDENTIAL */}
      <section id="commercial-vs-residential" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Commercial Plumbing Contracts Stabilize What Emergency Work Cannot
            </h2>
            <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
              Emergency residential calls keep the board moving. Commercial contracts keep the business predictable. Both matter — but they produce very different outcomes for how the year feels to run.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="font-bold text-text-muted mb-4 text-sm uppercase tracking-wider">Residential Emergency</h3>
                <ul className="space-y-2">
                  {[
                    "Reactive and urgent",
                    "Variable call volume by season and weather",
                    "Single-ticket value per job",
                    "No advance scheduling",
                    "Dependent on search visibility for every call",
                    "Revenue disappears between emergencies"
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 shrink-0">&#10007;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 border border-cta/30 rounded-xl p-8">
                <h3 className="font-bold text-cta mb-4 text-sm uppercase tracking-wider">Commercial Contract</h3>
                <ul className="space-y-2">
                  {[
                    "Scheduled and predictable",
                    "Consistent monthly and quarterly service intervals",
                    "Multi-building volume from a single relationship",
                    "Advance scheduling and recurring dispatch",
                    "Built on relationship and vendor history",
                    "Revenue continues between emergency spikes"
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-text-secondary text-center text-sm max-w-3xl mx-auto mb-10">
              LinkedIn advertising builds the commercial side of your business that residential search advertising cannot reach. When both systems run together, you have coverage on the emergency board and a recurring revenue base that keeps the schedule full regardless of how busy or slow the residential market gets.
            </p>
            <div className="text-center">
              <Link to="/contact" className="btn-cta inline-flex items-center gap-2">
                Claim Your Territory Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — CREATIVE AND AUDIENCE */}
      <section className="py-20 lg:py-28 bg-background scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Creative and Audience Strategy for Commercial Plumbing LinkedIn Campaigns
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10 max-w-3xl">
              LinkedIn performance is driven by credibility, not creativity. The commercial decision-makers you are targeting are professional buyers — they evaluate vendors on demonstrated competence, compliance, and reliability. The creative that performs best on LinkedIn is the creative that looks most like proof: case studies, project documentation, certifications, and the kind of professional language that signals you understand commercial plumbing at scale.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-3">Creative</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Commercial plumbing creative should communicate scale, compliance, and reliability — not urgency. A property manager evaluating vendors does not need to be alarmed. They need to be convinced that your company handles commercial work professionally and shows up consistently.
                </p>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">What performs:</p>
                <ul className="space-y-2">
                  {[
                    "Professional photography from completed commercial projects",
                    "Case study content: multi-building maintenance agreements, large repipe projects, commercial hydro-jet programs",
                    "Short-form video: how a commercial maintenance program works, what to expect from a building-wide repipe",
                    "Compliance and certification messaging: licensed, bonded, permit-compliant, backflow-certified",
                    "Content that speaks the language of commercial buyers — reliability, operational continuity, code compliance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3">Audience</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  LinkedIn audience construction is where the platform earns its value. The same targeting precision that makes LinkedIn more expensive than Facebook display is also what makes it the only channel that can reliably reach commercial decision-makers within your service area.
                </p>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">How we build audiences:</p>
                <ul className="space-y-2">
                  {[
                    "Job title targeting within your service radius: facility directors, property managers, operations managers, building owners",
                    "Industry filters: commercial real estate, hospitality, healthcare, restaurant groups, retail chains",
                    "Company size filters matched to the scale of work your team can handle",
                    "Look-alike audiences built from existing commercial customer data",
                    "Retargeting pools from LinkedIn company page visitors and content engagers",
                    "Seniority-level filters to reach people with contract-signing authority"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — TRACKING */}
      <section id="tracking" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              LinkedIn + ServiceTitan: Revenue Tracking on Commercial Campaigns
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              Commercial campaign performance has to connect to revenue, not just lead volume. A LinkedIn campaign that generates 20 form fills from facility directors means nothing if you cannot trace which of those contacts turned into booked service calls and closed contracts. We connect <a href="https://business.linkedin.com/marketing-solutions/ads" target="_blank" rel="noopener noreferrer" className="text-accent-blue underline underline-offset-2">LinkedIn Ads</a> performance to call tracking and job revenue reporting so the reporting answers what the spend actually produced — in booked calls, average ticket, and contract value.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Lead Tracking", desc: "Form fills and landing page completions" },
                { label: "Call Tracking", desc: "Phone calls from ads traced to campaign" },
                { label: "Contract Value", desc: "Booked vs non-booked by lead source" },
                { label: "Revenue Attribution", desc: "Closed job revenue by campaign source" }
              ].map((m, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="font-bold text-foreground text-sm mb-1">{m.label}</p>
                  <p className="text-text-muted text-xs">{m.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm mb-8">Other CRMs supported. ServiceTitan is the primary integration.</p>
            <Link to="/contact" className="btn-cta inline-flex items-center gap-2">
              Claim Your Territory Today
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 08 — SYSTEM INTEGRATION */}
      <section className="py-20 lg:py-28 bg-surface-light scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              LinkedIn Reinforces the Full Plumbing Growth System
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10 max-w-3xl">
              LinkedIn does not replace search or SEO — it reaches the commercial decision-makers those channels cannot. Search captures the residential homeowner already in crisis. SEO earns the organic positions that appear when homeowners search for plumbing services. LinkedIn targets the property manager who is not searching Google at all — who is making vendor decisions through professional channels that search advertising has no access to. All three have to run together to cover the full market.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { channel: "Search Ads", desc: "Captures urgent residential demand. Homeowners actively searching for emergency or same-day plumbing service book here. This is the volume channel that fills the dispatch board during peak demand." },
                { channel: "SEO", desc: "Builds long-term organic authority for residential and commercial search queries. Every page that ranks reduces the cost per booked call over time and compounds across the life of the campaign." },
                { channel: "LinkedIn", desc: "Builds commercial contract pipeline. Reaches property managers and facility directors before they put out a bid — in a professional channel where competitors are largely absent and relationship-building happens before the buying decision." }
              ].map((col, i) => (
                <div key={i} className="bg-surface-elevated border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">{col.channel}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{col.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-text-secondary text-sm max-w-3xl mx-auto">
              When residential emergency volume and commercial contract revenue run together, the business operates with a stability that either channel alone cannot produce. LinkedIn is what builds the commercial side of that equation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlumbingLinkedInMainContent;
