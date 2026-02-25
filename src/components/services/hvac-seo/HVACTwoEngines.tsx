import { useState } from "react";
import { ArrowRight, ChevronRight, Thermometer, Map, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const organicPoints = [
  "Clean URL structure aligned to service + city: /ac-repair-dallas/",
  "Three-tier architecture: core service hubs, sub-service specialization, problem-level emergency pages",
  "City pages built around your dispatch radius, not just the nearest major metro",
  "Each page targets a distinct search intent. 'AC replacement' ranks faster than 'HVAC services'"
];

const mapsPoints = [
  "Primary category set to 'HVAC Contractor'. Not 'Home Services' or 'Contractor'",
  "GBP services catalog mirrors your website service pages exactly",
  "Review velocity: post-job SMS acquisition system that runs after every job",
  "Real job photos: AC installs, furnace replacements, heat pump systems, uploaded weekly",
  "Seasonal posting calendar: AC prep in spring, emergency coverage in summer, furnace content in fall, heat pump content before winter",
  "Behavioral signals: click-to-call, direction requests, and photo engagement tracked consistently"
];

const aiGeoPoints = [
  "FAQ schema and structured data markup so your HVAC content gets cited in AI Overviews",
  "Entity optimization: your business name, services, and location connected as a clear knowledge graph signal",
  "Content formatted to answer the exact questions AI systems pull from: 'how long does AC replacement take,' 'signs your heat pump is failing'",
  "Conversational search optimization for voice and assistant queries: 'HVAC company open now near me'",
  "GBP Q&A seeded with high-intent HVAC questions and direct answers"
];

const HVACTwoEngines = () => {
  const [clusterOpen, setClusterOpen] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              The Structure
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              HVAC SEO Runs on Three Systems
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Most HVAC companies think of SEO as one thing. It is three. Organic SEO, Google Maps, and AI & Generative Search each operate on different signals and drive different types of calls. All three have to work.
            </p>
          </div>

          {/* Three Column Cards */}
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* System 1: Organic */}
            <div className="bg-surface-elevated rounded-2xl border border-border p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                  <Thermometer className="h-6 w-6 text-accent-blue" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest mb-0.5">System 1</p>
                  <h3 className="text-base font-semibold text-foreground">Organic HVAC SEO</h3>
                </div>
              </div>
              <p className="text-text-secondary mb-5 leading-relaxed text-sm">
                Organic rankings are structural. Built through page architecture, content quality, and authority signals. The most important structural decision:{" "}
                <span className="text-foreground font-medium">if it's a different phone call, it's a different page.</span>
              </p>
              <ul className="space-y-2.5 mb-5 flex-1">
                {organicPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 shrink-0" />
                    <span className="text-text-secondary text-[13px] leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Collapsed cluster toggle */}
              <div className="border-t border-border/40 pt-4 mb-4">
                <button
                  onClick={() => setClusterOpen(!clusterOpen)}
                  className="flex items-center gap-2 text-accent-blue text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${clusterOpen ? "rotate-90" : ""}`} />
                  View service cluster architecture
                </button>
                {clusterOpen && (
                  <div className="mt-3 bg-background/50 rounded-lg p-4 border border-border/40">
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-2 font-medium">Service Cluster Architecture</p>
                    <p className="text-xs text-text-secondary leading-relaxed mb-2">
                      Every distinct service gets its own page. AC Repair, Furnace Installation, Heat Pump Systems, AC Replacement, Indoor Air Quality, each as a hub with sub-service pages targeting specific high-intent searches.
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      AC Repair · Furnace Repair · Heat Pump · AC Replacement · Furnace Installation · Indoor Air Quality, each as a hub with sub-service pages targeting specific high-intent searches.
                    </p>
                  </div>
                )}
              </div>

              <Link
                to="/hvac-and-plumbing-seo"
                className="inline-flex items-center gap-2 text-accent-blue text-sm font-medium hover:gap-3 transition-all"
              >
                See the full Local SEO approach
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* System 2: Maps */}
            <div className="bg-surface-elevated rounded-2xl border border-border p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center shrink-0">
                  <Map className="h-6 w-6 text-cta" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest mb-0.5">System 2</p>
                  <h3 className="text-base font-semibold text-foreground">Google Maps & GBP</h3>
                </div>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed text-sm">
                Maps rankings respond to GBP activity, review signals, and proximity. Over{" "}
                <span className="text-foreground font-medium">70% of local service searches end at the Map Pack.</span>{" "}
                For emergency HVAC calls, the Map Pack is where the revenue decision happens.
              </p>
              <div className="bg-background/50 rounded-lg p-4 mb-5 border border-border/40">
                <p className="text-xs text-text-muted uppercase tracking-wider mb-2 font-medium">Maps is Behavioral</p>
                <p className="text-xs text-text-secondary leading-relaxed">
                  A GBP profile set up two years ago and never touched is losing ground to competitors posting weekly, uploading real job photos, and responding to every review.
                </p>
              </div>
              <ul className="space-y-2.5 mb-5 flex-1">
                {mapsPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cta mt-2 shrink-0" />
                    <span className="text-text-secondary text-[13px] leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/hvac-google-maps"
                className="inline-flex items-center gap-2 text-cta text-sm font-medium hover:gap-3 transition-all"
              >
                See our GBP & Maps approach
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* System 3: AI & GEO */}
            <div className="bg-surface-elevated rounded-2xl border border-border p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center shrink-0">
                  <Bot className="h-6 w-6 text-accent-green" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest mb-0.5">System 3</p>
                  <h3 className="text-base font-semibold text-foreground">AI & Generative Search</h3>
                </div>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed text-sm">
                AI Overviews now appear above organic results for a growing share of HVAC searches. A homeowner asking "what causes AC to stop cooling" or "how do I know if my heat pump is failing" may never scroll past the AI answer.{" "}
                <span className="text-foreground font-medium">Your content needs to be the source that gets cited.</span>
              </p>
              <div className="bg-background/50 rounded-lg p-4 mb-5 border border-border/40">
                <p className="text-xs text-text-muted uppercase tracking-wider mb-2 font-medium">GEO vs SEO</p>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Traditional SEO earns rankings. Generative Engine Optimization earns citations inside AI answers: a different signal set, but built on the same technical and content foundation.
                </p>
              </div>
              <ul className="space-y-2.5 mb-5 flex-1">
                {aiGeoPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 shrink-0" />
                    <span className="text-text-secondary text-[13px] leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/ai-search-optimization"
                className="inline-flex items-center gap-2 text-accent-green text-sm font-medium hover:gap-3 transition-all"
              >
                See our AI & GEO approach
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <p className="text-center text-text-muted text-sm mt-10 max-w-2xl mx-auto leading-relaxed">
            All three systems feed each other. Strong organic content supports Maps rankings. Reviews and structured data support AI citations. The system compounds when every channel is aligned.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HVACTwoEngines;
