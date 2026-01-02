import { TrendingUp, Clock, AlertTriangle, DollarSign, Shield, CheckCircle, XCircle, Target, Lightbulb, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const SEOEducationalContent = () => {
  return (
    <div className="space-y-16">
      {/* SEO Pricing Guide */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <DollarSign className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">SEO Pricing Guide</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Monthly Retainer</p>
            <p className="text-2xl font-bold text-foreground">$500 - $10,000+</p>
            <p className="text-sm text-text-muted mt-2">Most common model for ongoing campaigns</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Project-Based</p>
            <p className="text-2xl font-bold text-foreground">$5,000 - $30,000</p>
            <p className="text-sm text-text-muted mt-2">One-time audits, migrations, launches</p>
          </div>
          <div className="bg-surface-dark rounded-xl p-6 border border-border/30">
            <p className="text-sm text-text-muted mb-2">Hourly Consulting</p>
            <p className="text-2xl font-bold text-foreground">$100 - $300/hr</p>
            <p className="text-sm text-text-muted mt-2">Strategy sessions and advisory</p>
          </div>
        </div>
        <p className="text-text-secondary">
          Pricing varies dramatically based on competition, market size, and campaign scope. A local plumber and a national law firm have vastly different SEO requirements. The calculator above factors in these variables to give you a realistic estimate.
        </p>
      </section>

      {/* What is SEO */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <Target className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">What is SEO?</h2>
        </div>
        <p className="text-text-secondary text-lg mb-8">
          Search Engine Optimization is the practice of improving a website to increase its visibility in organic search results. It combines technical infrastructure, content strategy, and authority building to help search engines understand and rank your pages.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Technical SEO", desc: "Site speed, mobile responsiveness, crawlability, and structured data" },
            { title: "On-Page SEO", desc: "Content optimization, keyword targeting, meta tags, and internal linking" },
            { title: "Off-Page SEO", desc: "Link building, brand mentions, and authority signals from external sources" },
            { title: "Local SEO", desc: "Google Business Profile, citations, reviews, and local pack rankings" }
          ].map((item, i) => (
            <div key={i} className="bg-surface-elevated rounded-xl p-5 border border-border/30">
              <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Commitment of SEO */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <Clock className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">The Commitment of SEO</h2>
        </div>
        <p className="text-text-secondary text-lg mb-8">
          SEO is not a quick fix. It typically takes 6-12 months to see meaningful results, and the best outcomes come from sustained investment over years. But the payoff is substantial: compounding organic traffic that doesn't disappear when you stop paying for ads.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Builds lasting brand visibility",
            "Compounds over time unlike paid ads",
            "Captures high-intent search traffic",
            "Establishes trust and credibility",
            "Reduces long-term customer acquisition costs",
            "Creates defensible competitive advantage"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-surface-dark rounded-lg border border-border/30">
              <CheckCircle className="h-5 w-5 text-cta flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Low Cost is Not Always Better */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-destructive/10">
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Why Low Cost is Not Always Better</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-text-secondary mb-6">
              In SEO, you truly get what you pay for. Agencies charging $200/month cannot deliver the depth of work required to move rankings in competitive markets. They often rely on automation, templated content, and low-quality links that can actually harm your site.
            </p>
            <p className="text-text-secondary">
              Quality SEO requires skilled strategists, writers, developers, and outreach specialists. The time investment alone for a single client can exceed 15-20 hours monthly. Factor in tools, overhead, and expertise: meaningful SEO has real costs.
            </p>
          </div>
          <div className="bg-surface-elevated rounded-xl p-6 border border-border/30">
            <h3 className="text-foreground font-semibold mb-4">Red Flags to Watch For</h3>
            <ul className="space-y-3">
              {[
                "Promises of guaranteed rankings",
                "Unusually low monthly pricing",
                "No clear reporting or communication",
                "Vague descriptions of work performed",
                "Claims of secret techniques"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What Goes Into SEO Pricing */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <BarChart3 className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">What Goes Into SEO Pricing?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Market Competition", desc: "Highly competitive industries like legal, medical, and finance require significantly more resources to rank." },
            { title: "Geographic Scope", desc: "Local SEO for one city costs less than regional or national campaigns targeting multiple markets." },
            { title: "Current Website State", desc: "Sites with technical issues, thin content, or penalties require more upfront work to fix." },
            { title: "Content Requirements", desc: "The volume and complexity of content needed varies by industry and keyword targets." },
            { title: "Link Building Scope", desc: "Authority building through quality backlinks is time-intensive and requires skilled outreach." },
            { title: "Reporting and Strategy", desc: "Ongoing analysis, strategy refinement, and client communication add to the investment." }
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

      {/* What SEO Services Include */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-blue/10">
            <CheckCircle className="h-5 w-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">What SEO Services Typically Include</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Technical Audit & Fixes", items: ["Site speed optimization", "Mobile responsiveness", "Crawl error resolution", "Schema markup"] },
            { title: "Keyword Research", items: ["Competitor analysis", "Search intent mapping", "Opportunity identification", "Keyword prioritization"] },
            { title: "On-Page Optimization", items: ["Title and meta optimization", "Content structure", "Internal linking", "Image optimization"] },
            { title: "Content Strategy", items: ["Content calendar planning", "Blog post creation", "Service page optimization", "Landing page development"] },
            { title: "Link Building", items: ["Digital PR outreach", "Guest posting", "Resource link building", "Local citation building"] },
            { title: "Reporting & Analysis", items: ["Monthly performance reports", "Ranking tracking", "Traffic analysis", "Conversion monitoring"] }
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

      {/* Scams to Avoid */}
      <section className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-destructive/10">
            <Shield className="h-5 w-5 text-destructive" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">SEO Scams to Avoid</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Guaranteed Rankings", desc: "No one can guarantee specific rankings. Google's algorithm considers hundreds of factors outside anyone's control." },
            { title: "Quick Results Promises", desc: "Claims of page 1 rankings in weeks are a major red flag. Real SEO takes months of consistent work." },
            { title: "Secret Techniques", desc: "There are no secret tricks. Effective SEO follows well-documented best practices and requires hard work." },
            { title: "Buying Links in Bulk", desc: "Cheap link packages from link farms will get your site penalized. Quality always beats quantity." },
            { title: "Keyword Stuffing", desc: "Overloading pages with keywords is an outdated tactic that harms rankings and user experience." },
            { title: "Free Trial Traps", desc: "Free trials that require access to your site can result in negative SEO or ransomed content." }
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

      {/* The Value of Investment */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-cta/10">
            <Lightbulb className="h-5 w-5 text-cta" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Your Investment Reflects the Work</h2>
        </div>
        <div className="bg-gradient-to-br from-cta/5 to-accent-blue/5 rounded-2xl p-8 border border-cta/20">
          <p className="text-text-secondary text-lg mb-6">
            SEO is not an expense. It is an investment in your business's future. The work done today compounds over time, building an asset that generates leads and revenue for years to come.
          </p>
          <p className="text-text-secondary">
            Unlike paid advertising where traffic stops the moment you stop paying, SEO creates lasting visibility. A well-optimized website continues to attract organic traffic, build brand authority, and convert visitors into customers long after the initial investment.
          </p>
          <div className="mt-8 pt-6 border-t border-border/30">
            <p className="text-foreground font-medium">
              The question is not "Can I afford SEO?" but rather "Can I afford to let competitors dominate the search results while I remain invisible?"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOEducationalContent;
