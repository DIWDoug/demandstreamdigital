import { TrendingUp, Clock, AlertTriangle, DollarSign, Shield, CheckCircle, XCircle, Target, Lightbulb, BarChart3, MapPin, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const SEOEducationalContent = () => {
  return (
    <div className="space-y-16">
      {/* Local SEO Pricing Guide */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <DollarSign className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Local SEO Pricing Guide</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Partner Cost</p>
            <p className="text-2xl font-bold text-foreground">$604 - $1,979</p>
            <p className="text-sm text-text-muted mt-2">Agency partner pricing per location</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Typical MSRP</p>
            <p className="text-2xl font-bold text-foreground">$846 - $4,948</p>
            <p className="text-sm text-text-muted mt-2">What agencies charge end clients</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Your Margin</p>
            <p className="text-2xl font-bold text-cta">40-150%</p>
            <p className="text-sm text-text-muted mt-2">Healthy markup on fulfillment</p>
          </div>
        </div>
        <p className="text-text-secondary">
          Local SEO pricing varies based on market competition, number of locations, and campaign scope. A single-location plumber in a small town has different needs than a 10-location dental group in a major metro. Our calculator factors in these variables for realistic estimates.
        </p>
      </section>

      {/* Competition Levels Framework */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-amber-500/10">
            <Layers className="h-5 w-5 text-amber-500" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Local SEO Competition Levels Explained</h2>
        </div>
        <p className="text-text-secondary mb-6">
          Local SEO pricing and scope are determined by <strong className="text-foreground">market competition and execution intensity</strong>, not business size, emotion, or guesswork. Different markets require different levels of sustained effort to rank, grow, and hold position. This framework ensures fair pricing, clear expectations, and sustainable delivery.
        </p>

        {/* Three Series Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* LC Series */}
          <div className="bg-surface-dark rounded-xl border border-emerald-500/30 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold">LC</span>
                <span className="text-foreground font-semibold">Low Competition</span>
              </div>
              <p className="text-2xl font-bold text-emerald-500 mb-2">$604 – $1,264</p>
              <p className="text-sm text-text-secondary mb-4">
                Stable, lightly contested, and forgiving. Relatively few competitors are actively investing in SEO, and consistent foundational work is enough to earn and maintain visibility.
              </p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Typical Characteristics</p>
                  <ul className="space-y-1.5 text-xs text-text-muted">
                    <li className="flex items-start gap-2"><CheckCircle className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" /> Low SERP saturation</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" /> Few authoritative competitors</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" /> Slower ranking volatility</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" /> Minimal backlink competition</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Common Industries</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Landscaping", "Cleaning", "Junk Removal", "Pressure Washing", "Pool Service", "Florists", "Photography", "Tutoring"].map((ind, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">{ind}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-emerald-500/5 border-t border-emerald-500/20">
              <p className="text-xs text-emerald-400 font-medium">Expectations</p>
              <p className="text-xs text-text-muted mt-1">Faster initial traction · Lower monthly effort to maintain · Greater ranking stability once momentum is established</p>
            </div>
          </div>

          {/* MC Series */}
          <div className="bg-surface-dark rounded-xl border border-amber-500/40 ring-1 ring-amber-500/20 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold">MC</span>
                <span className="text-foreground font-semibold">Medium Competition</span>
              </div>
              <p className="text-2xl font-bold text-amber-500 mb-2">$962 – $1,622</p>
              <p className="text-sm text-text-secondary mb-4">
                Active, competitive, and winnable with consistency. These markets require real SEO pressure, but not constant escalation.
              </p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Typical Characteristics</p>
                  <ul className="space-y-1.5 text-xs text-text-muted">
                    <li className="flex items-start gap-2"><CheckCircle className="h-3 w-3 text-amber-500 mt-0.5 flex-shrink-0" /> Competitors investing inconsistently</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3 w-3 text-amber-500 mt-0.5 flex-shrink-0" /> Some authoritative players, no total dominance</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3 w-3 text-amber-500 mt-0.5 flex-shrink-0" /> Rankings move with sustained effort</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3 w-3 text-amber-500 mt-0.5 flex-shrink-0" /> Reviews, links, content matter moderately</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Common Industries</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["HVAC", "Plumbing", "Electrical", "Roofing", "Auto Repair", "Towing", "Gyms", "Veterinary", "Restaurants", "Insurance"].map((ind, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400">{ind}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-amber-500/5 border-t border-amber-500/20">
              <p className="text-xs text-amber-400 font-medium">Expectations</p>
              <p className="text-xs text-text-muted mt-1">Results compound steadily · Rankings require maintenance to hold · Pausing effort can cause gradual regression</p>
            </div>
          </div>

          {/* HC Series */}
          <div className="bg-surface-dark rounded-xl border border-destructive/30 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold">HC</span>
                <span className="text-foreground font-semibold">High Competition</span>
              </div>
              <p className="text-2xl font-bold text-destructive mb-2">$1,319 – $1,979</p>
              <p className="text-sm text-text-secondary mb-4">
                Saturated, expensive, and unforgiving. Visibility is actively defended by well-funded competitors and rankings shift quickly if pressure drops.
              </p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Typical Characteristics</p>
                  <ul className="space-y-1.5 text-xs text-text-muted">
                    <li className="flex items-start gap-2"><CheckCircle className="h-3 w-3 text-destructive mt-0.5 flex-shrink-0" /> Saturated Local Pack and organic SERPs</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3 w-3 text-destructive mt-0.5 flex-shrink-0" /> High CPCs indicating strong demand</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3 w-3 text-destructive mt-0.5 flex-shrink-0" /> Aggressive review and authority competition</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3 w-3 text-destructive mt-0.5 flex-shrink-0" /> Volatile rankings, continuous pressure</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Common Industries</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Legal", "Medical", "Dental", "Med Spa", "Plastic Surgery", "Real Estate", "Mortgage", "Multi-Location"].map((ind, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-destructive/10 text-red-400">{ind}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-destructive/5 border-t border-destructive/20">
              <p className="text-xs text-destructive font-medium">Expectations</p>
              <p className="text-xs text-text-muted mt-1">Longer ramp-up periods · Higher ongoing investment · Rankings require continuous defense · Stopping often results in rapid decline</p>
            </div>
          </div>
        </div>

        {/* Pricing Comparison Table */}
        <div className="bg-surface-dark rounded-xl border border-border/30 overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30 bg-background/50">
                  <th className="text-left p-4 font-semibold text-foreground">Tier</th>
                  <th className="text-center p-4 font-semibold text-emerald-500">LC Series</th>
                  <th className="text-center p-4 font-semibold text-amber-500">MC Series</th>
                  <th className="text-center p-4 font-semibold text-destructive">HC Series</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/20">
                  <td className="p-4 text-text-muted">100 (Foundation)</td>
                  <td className="p-4 text-center text-foreground font-medium">$604</td>
                  <td className="p-4 text-center text-foreground font-medium">$962</td>
                  <td className="p-4 text-center text-foreground font-medium">$1,319</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-4 text-text-muted">200 (Growth)</td>
                  <td className="p-4 text-center text-foreground font-medium">$824</td>
                  <td className="p-4 text-center text-foreground font-medium">$1,182</td>
                  <td className="p-4 text-center text-foreground font-medium">$1,539</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-4 text-text-muted">300 (Acceleration)</td>
                  <td className="p-4 text-center text-foreground font-medium">$1,044</td>
                  <td className="p-4 text-center text-foreground font-medium">$1,402</td>
                  <td className="p-4 text-center text-foreground font-medium">$1,759</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-muted">400 (Domination)</td>
                  <td className="p-4 text-center text-foreground font-medium">$1,264</td>
                  <td className="p-4 text-center text-foreground font-medium">$1,622</td>
                  <td className="p-4 text-center text-foreground font-medium">$1,979</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-border/30 bg-background/30">
            <p className="text-xs text-text-muted text-center">
              All prices are monthly wholesale rates. Add +$150/mo for optional Client Success Manager. MSRP calculated at 40-150% markup.
            </p>
          </div>
        </div>

        {/* Small Town Considerations */}
        <div className="bg-gradient-to-br from-accent-blue/5 to-cta/5 rounded-xl p-6 border border-accent-blue/20 mb-8">
          <h3 className="text-foreground font-semibold mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent-blue" />
            Small Town Considerations
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            Population alone does not determine competition level. <strong className="text-foreground">Market reality does.</strong>
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-surface-dark rounded-lg p-4 border border-border/30">
              <p className="text-xs font-semibold text-emerald-400 mb-2">A normally HC industry may drop one tier if:</p>
              <ul className="space-y-1.5 text-xs text-text-muted">
                <li>• Very few real competitors</li>
                <li>• Competitors have weak reviews, links, and content</li>
                <li>• CPCs and paid competition are low</li>
                <li>• Growth goals are steady, not aggressive</li>
              </ul>
            </div>
            <div className="bg-surface-dark rounded-lg p-4 border border-border/30">
              <p className="text-xs font-semibold text-destructive mb-2">A business remains HC if:</p>
              <ul className="space-y-1.5 text-xs text-text-muted">
                <li>• Within commuting distance of a major metro</li>
                <li>• One or two dominant competitors control visibility</li>
                <li>• The service is high-ticket and comparison-driven</li>
                <li>• Aggressive growth is the goal</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-text-muted mt-4 italic">
            It is rare for medical or aesthetic services to qualify as LC, even in small towns.
          </p>
        </div>

        {/* Non-Negotiable Guardrails */}
        <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
          <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
            <Shield className="h-4 w-4 text-cta" />
            Non-Negotiable Guardrails
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Competition level is based on market conditions, not business size",
              "Aggressive growth goals push clients up a tier",
              "Major metros increase competition pressure",
              "Pricing and delivery must align to tier or quality suffers",
              "Scope outside a tier is additional and not absorbed"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-text-muted">
                <span className="text-cta mt-0.5">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-border/30">
            <p className="text-sm text-foreground font-medium">
              Local SEO only works when effort matches competition. This framework ensures that alignment every time.
            </p>
          </div>
        </div>
      </section>

      {/* What is Local SEO */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-green/10">
            <MapPin className="h-5 w-5 text-accent-green" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">What is Local SEO?</h2>
        </div>
        <p className="text-text-secondary text-lg mb-8">
          Local SEO helps small businesses appear in location-based searches—"near me" queries, Google Maps, and the Local 3-Pack. For service-area businesses and brick-and-mortar locations, local search visibility directly translates to phone calls, directions, and foot traffic.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Google Business Profile", desc: "Optimization, posts, Q&A management, and review responses" },
            { title: "NAP Citations", desc: "Consistent Name, Address, Phone across 50+ directories" },
            { title: "Local Link Building", desc: "Community sponsorships, local partnerships, and earned mentions" },
            { title: "Review Management", desc: "Review generation, monitoring, and response automation" }
          ].map((item, i) => (
            <div key={i} className="bg-surface-elevated rounded-xl p-5 border border-border/30">
              <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Organic SEO vs GBP/Maps Rankings */}
      <section className="bg-gradient-to-br from-amber-500/5 to-cta/5 rounded-2xl p-8 md:p-12 border border-amber-500/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-amber-500/10">
            <Layers className="h-5 w-5 text-amber-500" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Organic SEO vs. GBP/Maps Rankings</h2>
        </div>
        <p className="text-text-secondary text-lg mb-6">
          Organic search rankings and Google Business Profile (Maps) rankings <strong className="text-foreground">operate on different algorithms</strong>. While traditional organic SEO tends to be more predictable and controllable, GBP rankings are influenced by factors that are harder to manipulate—particularly searcher proximity.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Organic SEO */}
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-accent-blue" />
              Organic SEO (Traditional)
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Organic rankings are influenced by on-page optimization, backlinks, content quality, and technical SEO. These factors are <strong className="text-foreground">directly controllable</strong> and respond predictably to sustained effort.
            </p>
            <ul className="space-y-2">
              {[
                "Content relevance and depth",
                "Backlink profile and authority",
                "Technical site health",
                "User experience signals",
                "Keyword optimization"
              ].map((item, i) => (
                <li key={i} className="text-sm text-text-muted flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-blue mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* GBP/Maps */}
          <div className="bg-surface-dark rounded-xl p-6 border border-amber-500/30">
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-500" />
              GBP/Maps Rankings
            </h3>
            <p className="text-sm text-text-secondary mb-4">
              Maps rankings are governed by <strong className="text-foreground">Proximity, Prominence, and Relevance</strong>. Because proximity to the searcher is a major factor, rankings can vary dramatically based on where someone is searching from.
            </p>
            <ul className="space-y-2">
              {[
                "Proximity to the searcher (uncontrollable)",
                "Review quantity and quality",
                "GBP profile completeness",
                "Category and service relevance",
                "Citation consistency"
              ].map((item, i) => (
                <li key={i} className="text-sm text-text-muted flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The Three Pillars */}
        <div className="bg-surface-dark rounded-xl p-6 border border-border/30 mb-6">
          <h3 className="text-foreground font-semibold mb-4 text-center">The Three Pillars of GBP Rankings</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
              <p className="text-2xl mb-2">📍</p>
              <p className="text-foreground font-semibold">Proximity</p>
              <p className="text-xs text-text-muted mt-1">How close the business is to the searcher's location</p>
            </div>
            <div className="text-center p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
              <p className="text-2xl mb-2">⭐</p>
              <p className="text-foreground font-semibold">Prominence</p>
              <p className="text-xs text-text-muted mt-1">How well-known the business is (reviews, links, mentions)</p>
            </div>
            <div className="text-center p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
              <p className="text-2xl mb-2">🎯</p>
              <p className="text-foreground font-semibold">Relevance</p>
              <p className="text-xs text-text-muted mt-1">How well the profile matches the search query</p>
            </div>
          </div>
        </div>

        <div className="bg-surface-elevated rounded-xl p-5 border border-border/30">
          <p className="text-sm text-text-secondary">
            <strong className="text-foreground">Key Insight:</strong> While organic SEO efforts do influence local prominence (which helps GBP rankings), the <strong className="text-foreground">proximity factor makes GBP rankings inherently more volatile</strong> and location-dependent. A business can rank #1 in the Local Pack for searchers nearby but not appear at all for someone across town. This is why comprehensive local SEO strategies address both organic and GBP optimization—they work together but require different tactics.
          </p>
        </div>
      </section>

      {/* Why Local SEO Matters for Small Businesses */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <TrendingUp className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Why Local SEO Matters for Small Businesses</h2>
        </div>
        <p className="text-text-secondary text-lg mb-8">
          46% of all Google searches have local intent. When someone searches "plumber near me" or "best dentist in [city]," they're ready to buy. Local SEO ensures your clients show up at that critical moment—not their competitors.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "42% of Local 3-Pack clicks go to the top result",
            "76% of local mobile searches result in a store visit within 24 hours",
            "Reviews influence 93% of consumer buying decisions",
            "Google Business Profile drives 5x more calls than websites",
            "Local SEO costs less than paid ads for sustained visibility",
            "AI Overviews increasingly cite local business data"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-surface-dark rounded-lg border border-border/30">
              <CheckCircle className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How We Calculate SEO Value */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <BarChart3 className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">How We Calculate SEO Value</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-text-secondary mb-6">
              The value of local SEO is measured by comparing <strong className="text-foreground">current monthly revenue equivalent</strong> to <strong className="text-foreground">expected monthly revenue equivalent</strong>. We calculate this by analyzing your client's current visibility, lead volume, and conversion metrics against projected improvements.
            </p>
            <p className="text-text-secondary">
              For example, if a business currently generates $15,000/month from organic local search and our projections show potential for $25,000/month after 6-9 months of SEO work, the $10,000/month lift justifies a $1,500-$2,500 monthly retainer with strong ROI.
            </p>
          </div>
          <div className="bg-surface-elevated rounded-xl p-6 border border-border/30">
            <h3 className="text-foreground font-semibold mb-4">Revenue Equivalent Calculation</h3>
            <div className="space-y-4">
              <div className="p-4 bg-surface-dark rounded-lg border border-border/30">
                <p className="text-xs text-text-muted mb-1">Current Monthly Revenue Equivalent</p>
                <p className="text-lg font-semibold text-foreground">Visibility × Lead Volume × Close Rate × Avg. Ticket</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-accent-blue text-xl">↓</span>
              </div>
              <div className="p-4 bg-accent-green/10 rounded-lg border border-accent-green/30">
                <p className="text-xs text-text-muted mb-1">Expected Monthly Revenue Equivalent</p>
                <p className="text-lg font-semibold text-accent-green">Projected Visibility × Improved Leads × Close Rate × Avg. Ticket</p>
              </div>
              <p className="text-xs text-text-muted text-center">The delta between current and expected is the SEO opportunity value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Goes Into Local SEO Pricing */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-green/10">
            <BarChart3 className="h-5 w-5 text-accent-green" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">What Drives Local SEO Pricing?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Market Competition", desc: "Legal, medical, and home services in major metros require more resources than a florist in a small town." },
            { title: "Number of Locations", desc: "Multi-location businesses need separate GBP optimization, citations, and local pages for each location." },
            { title: "Service Area Size", desc: "Larger service areas require more location pages, more citations, and broader link building." },
            { title: "Current Online Presence", desc: "Businesses with inconsistent citations, no reviews, or technical issues require more upfront cleanup." },
            { title: "Review Velocity Goals", desc: "Aggressive review generation requires automation, follow-up sequences, and platform diversification." },
            { title: "Reporting Requirements", desc: "White-label dashboards, call tracking, and custom reporting add to fulfillment scope." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Local SEO Services Include */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <CheckCircle className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">What Local SEO Services Include</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Google Business Profile", items: ["Profile optimization", "Weekly/monthly posts", "Q&A management", "Photo optimization"] },
            { title: "Citation Management", items: ["50+ directory submissions", "NAP consistency audit", "Duplicate suppression", "Ongoing monitoring"] },
            { title: "On-Page Local SEO", items: ["Location page optimization", "Local schema markup", "Service area targeting", "Internal linking"] },
            { title: "Review Management", items: ["Review generation campaigns", "Response templates", "Platform diversification", "Sentiment monitoring"] },
            { title: "Local Link Building", items: ["Community sponsorships", "Local partnerships", "Chamber of Commerce", "Industry directories"] },
            { title: "Reporting & Tracking", items: ["Rank tracking by location", "Call tracking", "Lead attribution", "White-label dashboards"] }
          ].map((category, i) => (
            <div key={i} className="bg-surface-elevated rounded-xl p-5 border border-border/30">
              <h3 className="text-foreground font-semibold mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, j) => (
                  <li key={j} className="text-sm text-text-muted flex items-start gap-2">
                    <span className="text-cta mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Red Flags */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-destructive/10">
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Local SEO Red Flags</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Guaranteed #1 Rankings", desc: "No one controls Google. Guaranteed positions are a scam." },
            { title: "$99/Month Packages", desc: "Real local SEO requires 10-20+ hours monthly. Do the math." },
            { title: "Fake Reviews", desc: "Google detects and penalizes fake reviews. This destroys rankings." },
            { title: "Bulk Citation Blasts", desc: "Low-quality directories hurt more than help. Quality matters." },
            { title: "No Reporting", desc: "If you can't see what's being done, assume nothing is being done." },
            { title: "Keyword Stuffing GBP", desc: "Adding keywords to your business name violates Google guidelines." }
          ].map((item, i) => (
            <div key={i} className="p-5 bg-surface-dark rounded-xl border border-border/30">
              <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                {item.title}
              </h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Agency Opportunity */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-green/10">
            <Lightbulb className="h-5 w-5 text-accent-green" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">The White-Label Opportunity</h2>
        </div>
        <div className="bg-gradient-to-br from-cta/5 to-accent-blue/5 rounded-2xl p-8 border border-cta/20">
          <p className="text-text-secondary text-lg mb-6">
            Local SEO is the perfect white-label service. Small businesses need it, but most agencies lack the bandwidth to execute it in-house. With white-label fulfillment, you capture 40-150% margins while we handle the heavy lifting.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-cta">$604-$1,979</p>
              <p className="text-sm text-text-muted">Your cost per location</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">$846-$4,948</p>
              <p className="text-sm text-text-muted">Typical client MSRP</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent-blue">$242-$2,969</p>
              <p className="text-sm text-text-muted">Your profit per client</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-500">+$150/mo</p>
              <p className="text-sm text-text-muted">CSM add-on (optional)</p>
            </div>
          </div>
          <div className="pt-6 border-t border-border/30">
            <p className="text-foreground font-medium">
              Every local business needs local SEO. The question is whether you'll be the one to provide it—or watch competitors capture that revenue.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOEducationalContent;
