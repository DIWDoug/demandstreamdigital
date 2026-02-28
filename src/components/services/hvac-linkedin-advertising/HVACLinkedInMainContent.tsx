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
            Commercial HVAC decisions are not made by homeowners. They are made by the people responsible for keeping buildings operational: property managers who oversee multi-unit portfolios, facility directors who manage maintenance budgets across multiple locations, and operations leaders who sign service agreements with vendors they trust. These buyers are not typing "HVAC near me" into Google. They are making decisions through professional networks and existing vendor relationships.
          </p>
          <p className="text-text-secondary leading-relaxed mb-12 max-w-3xl">
            LinkedIn is the only advertising platform built around professional role and company data. That means you can target a facility director at a 50-location commercial real estate portfolio within your service radius, not a broad homeowner audience that may or may not include anyone with commercial HVAC authority. While every other HVAC company in your market is competing for the same residential search clicks, LinkedIn lets you build commercial relationships in a channel where the competition is nearly absent.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Decision-maker roles you can reach:</h3>
              <ul className="space-y-2">
                {[
                  "Property managers",
                  "Facility directors",
                  "Building owners",
                  "Operations managers",
                  "Multi-location retail and restaurant operators",
                  "HOA and community management companies"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-elevated border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">What LinkedIn targeting enables:</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                LinkedIn's job title, company size, industry, and geography filters let you build an audience of the exact people who control commercial HVAC budgets in your market. No wasted residential impressions. No broad interest targeting that may or may not reach anyone relevant. Every dollar in a LinkedIn campaign reaches someone who could become a contract. A single commercial maintenance agreement with a multi-building portfolio operator can produce more annual booked calls than most residential search campaigns.
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
                bullets: ["Preventative maintenance programs for commercial properties", "Multi-building service agreements for portfolio operators", "Emergency response partnerships with defined response windows", "Seasonal inspection and tune-up contracts", "Priority service agreements for regulated facilities and healthcare properties"],
                body: "The most valuable commercial HVAC relationship is the maintenance contract: a recurring agreement that produces scheduled service calls, seasonal inspections, and priority response partnerships across multiple buildings. LinkedIn campaigns reach the decision-makers who sign these contracts before the renewal cycle begins, before they have an equipment failure, and before a competitor has established the relationship.",
                closing: "Property managers at multi-site portfolios are not evaluating HVAC vendors through Google searches. They are making those decisions through professional networks and vendors who have been present in their channels. A single commercial maintenance contract with a 15-building portfolio or a 5-location restaurant group produces a volume of booked, scheduled calls that no residential emergency campaign can match for consistency."
              },
              {
                title: "Retrofit and Upgrade Campaigns",
                bullets: ["System retrofit and full equipment replacement promotions", "Energy efficiency upgrade campaigns timed to budget planning cycles", "HVAC modernization projects for aging commercial inventory", "Capital expenditure outreach to multi-location operators", "A2L refrigerant transition messaging for compliance-aware buyers"],
                body: "Commercial HVAC retrofits and equipment upgrades are high-ticket, long-cycle decisions. The facility director managing a building with 15-year-old rooftop units knows the replacement is coming. They are waiting for the right budget cycle, the right proposal, and the right vendor to make the case. LinkedIn keeps your company in that conversation throughout the planning process, not just when the equipment failure forces the decision.",
                closing: "The language for commercial upgrade campaigns is different from residential. These buyers care about operational continuity, energy cost reduction, code compliance, and minimal disruption to tenants or operations. LinkedIn campaigns let you speak that language to the right audience. That positioning is what wins the contract when the decision is finally made."
              },
              {
                title: "Geographic and Industry Targeting",
                bullets: ["Job title: facility directors, property managers, operations leads, building owners", "Industry: commercial real estate, hospitality, healthcare, restaurants, retail", "Company size: multi-location operators and portfolio owners", "Geographic radius: matched to your verified commercial service coverage", "Seniority level: director and above for contract-signing authority"],
                body: "Precision targeting is what separates LinkedIn from every other paid channel. A properly structured LinkedIn campaign reaches only the decision-makers within your service area who have the authority to hire a commercial HVAC vendor, eliminating the wasted spend that comes with broad residential audiences.",
                closing: "Tighter targeting produces a lower cost per qualified commercial lead than any broad awareness campaign. The audience is smaller, but every person in it has the authority to sign the contract you want."
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
                <p className="text-sm text-text-secondary leading-relaxed mt-3">{card.closing}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — COMMERCIAL VS RESIDENTIAL */}
      <section id="commercial-vs-residential" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Commercial HVAC Contracts Stabilize What Emergency Work Cannot
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-10">
            Emergency residential calls keep the board moving. Commercial contracts keep the business predictable. Both matter, and they produce very different outcomes for how the year feels to run.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-white/5 border border-red-500/10 rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Residential Emergency Work</h3>
              <ul className="space-y-2">
                {[
                  "Reactive, triggered by equipment failure",
                  "Call volume varies by season and weather",
                  "Single-ticket value per job",
                  "No advance scheduling",
                  "Dependent on search visibility for every call",
                  "Revenue disappears between emergencies",
                  "Margin pressure from price shopping and price-matching"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-text-muted mt-0.5 shrink-0">&#8212;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-green-500/20 rounded-xl p-6">
              <h3 className="font-semibold text-green-400 mb-4">Commercial Contract Work</h3>
              <ul className="space-y-2">
                {[
                  "Scheduled, built on service agreements",
                  "Consistent monthly and quarterly service intervals",
                  "Multi-building volume from a single relationship",
                  "Advance scheduling and recurring dispatch",
                  "Built on relationship and vendor history",
                  "Revenue continues between emergency spikes",
                  "Margin protected by contract terms and scope"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-green-400 mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-text-secondary text-center max-w-3xl mx-auto mb-8 text-sm leading-relaxed">
            LinkedIn advertising builds the commercial side of your business that residential search advertising cannot reach. When both systems run together, you have coverage on the emergency board and a recurring revenue base that keeps the schedule full regardless of how busy or slow the residential market gets.
          </p>
          <div className="text-center">
            <Link to="/contact" className="btn-cta inline-flex items-center gap-2">
              Claim Your Territory Today
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 06 — CREATIVE AND AUDIENCE STRATEGY */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Creative and Audience Strategy for Commercial HVAC LinkedIn Campaigns
          </h2>
          <p className="text-text-secondary mb-12 max-w-3xl">
            LinkedIn performance is driven by credibility, not creativity. The commercial decision-makers you are targeting are professional buyers. They evaluate HVAC vendors on demonstrated competence, compliance, and reliability. The creative that performs best on LinkedIn looks most like proof: case studies, project documentation, certifications, and the kind of professional language that signals you understand commercial HVAC at scale.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Creative</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Commercial HVAC creative should communicate scale, reliability, and professionalism, not urgency. A property manager evaluating vendors does not need to be alarmed. They need to be convinced that your company handles commercial work consistently and shows up when it counts.
              </p>
              <ul className="space-y-3">
                {[
                  "Professional photography from completed commercial installs and rooftop replacements",
                  "Case study content: multi-building maintenance agreements, large retrofit projects, emergency response partnerships",
                  "Short-form video: how a commercial maintenance program works, what an equipment audit looks like, what to expect from a phased rooftop replacement",
                  "Compliance and certification messaging: EPA 608 certified, licensed and bonded, permit-compliant, refrigerant-transition-ready",
                  "Content that speaks the language of commercial buyers: reliability, energy savings, operational continuity, code compliance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Audience</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                LinkedIn audience construction is where the platform earns its value. The same targeting precision that makes LinkedIn more expensive than Facebook display is also what makes it the only channel that can reliably reach commercial decision-makers within your service area.
              </p>
              <ul className="space-y-3">
                {[
                  "Job title targeting within your service radius: facility directors, property managers, operations managers, building owners",
                  "Industry filters: commercial real estate, hospitality, healthcare, restaurant groups, retail chains",
                  "Company size filters matched to the scale of commercial work your team can handle",
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
      </section>

      {/* SECTION 07 — SERVICETITAN TRACKING */}
      <section id="tracking" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <a href="https://business.linkedin.com/marketing-solutions/ads" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">LinkedIn Ads</a> + ServiceTitan: Revenue Tracking on Commercial Campaigns
          </h2>
          <p className="text-text-secondary mb-4 max-w-2xl mx-auto">
            Commercial campaign performance has to connect to revenue, not just lead volume. A LinkedIn campaign that generates 20 form fills from facility directors means nothing if you cannot trace which of those contacts turned into booked service calls and closed contracts. We connect LinkedIn performance to call tracking and job revenue reporting so the reporting answers what the spend actually produced: in booked calls, average ticket, and contract value.
          </p>
          <p className="text-text-secondary mb-10 max-w-3xl mx-auto text-sm">
            We tie LinkedIn performance to the numbers that matter for a commercial HVAC operation: booked calls from commercial leads, cost per booked call against your average commercial ticket, and closed revenue attributed back to campaign source.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { label: "Lead Tracking", sub: "Form fills and landing page completions" },
              { label: "Call Tracking", sub: "Phone calls from ads traced to campaign" },
              { label: "Contract Value", sub: "Booked vs non-booked by lead source" },
              { label: "Revenue Attribution", sub: "Closed job revenue by campaign source" }
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

      {/* SECTION 08 — CHANNEL ECOSYSTEM */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            LinkedIn Reinforces the Full HVAC Growth System
          </h2>
          <p className="text-text-secondary mb-10 max-w-3xl">
            LinkedIn does not replace search or SEO. It reaches the commercial decision-makers those channels cannot. Search captures the homeowner already in an emergency. SEO earns the organic positions that appear when homeowners and facilities managers search for HVAC services. LinkedIn targets the property manager who is not searching Google at all. That manager is making vendor decisions through professional channels that search advertising has no access to. All three have to run together to cover the full market.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { channel: "LinkedIn", body: "Builds commercial contract pipeline. Reaches property managers and facility directors before they put out a bid, in a professional channel where competitors are largely absent and relationship-building happens before the buying decision.", link: null },
              { channel: "Search Ads", body: "Captures urgent residential demand. Homeowners actively searching for emergency or same-day HVAC service book here. This is the volume channel that fills the dispatch board during peak demand.", link: "/hvac-search-ads" },
              { channel: "SEO", body: "Builds long-term organic authority for residential and commercial search queries. Every page that ranks reduces the cost per booked call over time and compounds across the life of the campaign.", link: "/hvac-seo" }
            ].map((c, i) => (
              <div key={i} className="bg-surface-elevated border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">{c.channel}</h3>
                <p className="text-sm text-text-secondary">{c.body}</p>
                {c.link && <Link to={c.link} className="text-xs text-accent-blue hover:underline mt-2 inline-block">Learn more →</Link>}
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted">
            When residential emergency volume and commercial contract revenue run together, the business operates with a stability that either channel alone cannot produce. LinkedIn is what builds the commercial side of that equation. That is what separates a business that survives seasonal swings from one that plans through them.
          </p>
        </div>
      </section>
    </>
  );
};

export default HVACLinkedInMainContent;
