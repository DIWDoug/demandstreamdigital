import { useState } from "react";
import { ArrowRight, ChevronRight, Droplets, Map } from "lucide-react";
import { Link } from "react-router-dom";

const organicPoints = [
  "Every distinct service gets its own page — water heater, drain cleaning, slab leak, repiping, hydro jetting",
  "Clean URL structure aligned to service + city: /water-heater-replacement-dallas/",
  "Three-tier architecture: core service hubs → sub-service specialization → problem-level emergency pages",
  "City pages built around your dispatch radius, not just the nearest major metro",
  "Each page targets a distinct search intent — 'tankless installation' ranks faster than 'plumbing services'"
];

const mapsPoints = [
  "Primary category set to 'Plumber' — not 'Home Services' or 'Contractor'",
  "GBP services catalog mirrors your website service pages exactly",
  "Review velocity: post-job SMS acquisition system that runs after every job",
  "Real job photos — water heater installs, drain cleaning, slab leak repairs — uploaded weekly",
  "Seasonal posting calendar: freeze prep in fall, water heater content before winter, drain cleaning in spring",
  "Behavioral signals: click-to-call, direction requests, and photo engagement tracked consistently"
];

const PlumbingTwoEngines = () => {
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
              Plumbing SEO Runs on Two Engines
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Most plumbing companies think of SEO as one thing. It is two. Organic SEO and Google Maps SEO operate on different signals, reward different inputs, and drive different types of calls. Both have to work.
            </p>
          </div>

          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Engine 1: Organic */}
            <div className="bg-surface-elevated rounded-2xl border border-border p-6 lg:p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                  <Droplets className="h-7 w-7 text-accent-blue" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest mb-1">Engine 1</p>
                  <h3 className="text-xl font-semibold text-foreground">Organic Plumbing SEO</h3>
                </div>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed text-sm">
                Organic rankings are structural. They are built through page architecture, content quality, technical health, and authority signals. The most important structural decision:{" "}
                <span className="text-foreground font-medium">if it's a different phone call, it's a different page.</span>
              </p>
              <ul className="space-y-3 mb-6 flex-1">
                {organicPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 shrink-0" />
                    <span className="text-text-secondary text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Collapsed toggle */}
              <div className="border-t border-border/40 pt-4 mb-5">
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
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Water Heater · Drain Cleaning · Sewer Line · Emergency Plumbing · Repiping · Slab Leak Detection — each as a hub with sub-service pages targeting specific high-intent searches.
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

            {/* Engine 2: Maps */}
            <div className="bg-surface-elevated rounded-2xl border border-border p-6 lg:p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-cta/10 flex items-center justify-center shrink-0">
                  <Map className="h-7 w-7 text-cta" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-widest mb-1">Engine 2</p>
                  <h3 className="text-xl font-semibold text-foreground">Google Maps & GBP</h3>
                </div>
              </div>
              <p className="text-text-secondary mb-4 leading-relaxed text-sm">
                Maps rankings respond to GBP activity, review signals, and proximity. Over{" "}
                <span className="text-foreground font-medium">70% of local service searches end at the Map Pack.</span>{" "}
                For emergency plumbing calls — burst pipes, main line backups — the Map Pack is where the revenue decision happens.
              </p>
              <div className="bg-background/50 rounded-lg p-4 mb-6 border border-border/40">
                <p className="text-xs text-text-muted uppercase tracking-wider mb-2 font-medium">Maps is Behavioral</p>
                <p className="text-xs text-text-secondary leading-relaxed">
                  A GBP profile set up two years ago and never touched is losing ground to competitors posting weekly, uploading real job photos, and responding to every review.
                </p>
              </div>
              <ul className="space-y-3 mb-6 flex-1">
                {mapsPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cta mt-2 shrink-0" />
                    <span className="text-text-secondary text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/plumbing-google-maps"
                className="inline-flex items-center gap-2 text-cta text-sm font-medium hover:gap-3 transition-all"
              >
                See our GBP & Maps approach
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <p className="text-center text-text-muted text-sm mt-10 max-w-2xl mx-auto leading-relaxed">
            Organic SEO and Maps SEO are the two engines specific to plumbing. Both operate within a broader connected marketing system that includes paid ads, reputation management, email retention, and unified reporting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlumbingTwoEngines;
