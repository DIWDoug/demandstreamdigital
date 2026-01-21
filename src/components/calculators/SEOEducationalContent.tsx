import { TrendingUp, Clock, AlertTriangle, DollarSign, Shield, CheckCircle, XCircle, Target, Lightbulb, BarChart3, MapPin } from "lucide-react";
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
            <p className="text-sm text-text-muted mb-2">White-Label Cost</p>
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

      {/* What is Local SEO */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <MapPin className="h-5 w-5 text-cta" />
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
              <div className="p-4 bg-cta/10 rounded-lg border border-cta/30">
                <p className="text-xs text-text-muted mb-1">Expected Monthly Revenue Equivalent</p>
                <p className="text-lg font-semibold text-cta">Projected Visibility × Improved Leads × Close Rate × Avg. Ticket</p>
              </div>
              <p className="text-xs text-text-muted text-center">The delta between current and expected is the SEO opportunity value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Goes Into Local SEO Pricing */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <BarChart3 className="h-5 w-5 text-cta" />
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
          <div className="p-2 rounded-lg bg-cta/10">
            <Lightbulb className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">The White-Label Opportunity</h2>
        </div>
        <div className="bg-gradient-to-br from-cta/5 to-accent-blue/5 rounded-2xl p-8 border border-cta/20">
          <p className="text-text-secondary text-lg mb-6">
            Local SEO is the perfect white-label service. Small businesses need it, but most agencies lack the bandwidth to execute it in-house. With white-label fulfillment, you capture 40-150% margins while we handle the heavy lifting.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-6">
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
              <p className="text-3xl font-bold text-accent-blue">+$149/mo</p>
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
