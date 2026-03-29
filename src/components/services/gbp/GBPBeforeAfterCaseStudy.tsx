import { useState } from "react";
import { TrendingUp, MapPin, Calendar, ArrowRight } from "lucide-react";
import scanBefore from "@/assets/case-study/gbp-scan-before.png";
import scanAfter from "@/assets/case-study/gbp-scan-after.png";

const metrics = [
  { label: "Avg. Rank", before: "5.82", after: "3.80", change: "-2.02", improved: true },
  { label: "High Visibility", before: "49%", after: "71%", change: "+22%", improved: true },
  { label: "Medium", before: "34%", after: "20%", change: "-14%", improved: true },
  { label: "Low", before: "13%", after: "6%", change: "-7%", improved: true },
  { label: "Not Ranking", before: "4%", after: "3%", change: "-1%", improved: true },
];

const GBPBeforeAfterCaseStudy = () => {
  const [activeView, setActiveView] = useState<"before" | "after">("after");

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-4">
            Client Results
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            From 5.82 to 3.8 Average Rank in{" "}
            <span className="text-cta">79 Days</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Pure Plumbing &amp; Air, Las Vegas. Keyword: "water heater installation las vegas." 95 grid points across a 5-mile radius.
          </p>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-surface-elevated rounded-xl border border-border/40 p-4 text-center"
            >
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                {m.label}
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-text-secondary text-sm line-through">
                  {m.before}
                </span>
                <ArrowRight className="h-3 w-3 text-text-secondary" />
                <span className="text-foreground font-bold text-lg">
                  {m.after}
                </span>
              </div>
              <p className="text-xs font-semibold text-emerald-400 mt-1">
                {m.change}
              </p>
            </div>
          ))}
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveView("before")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeView === "before"
                ? "bg-cta text-white"
                : "bg-surface-elevated text-text-secondary hover:text-foreground border border-border/40"
            }`}
          >
            <Calendar className="inline h-4 w-4 mr-1.5 -mt-0.5" />
            Jan 5, 2026
          </button>
          <button
            onClick={() => setActiveView("after")}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeView === "after"
                ? "bg-cta text-white"
                : "bg-surface-elevated text-text-secondary hover:text-foreground border border-border/40"
            }`}
          >
            <Calendar className="inline h-4 w-4 mr-1.5 -mt-0.5" />
            Mar 24, 2026
          </button>
        </div>

        {/* Map Images */}
        <div className="relative rounded-2xl overflow-hidden border border-border/40 bg-surface-elevated">
          {/* Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/40">
            <MapPin className="h-4 w-4 text-cta" />
            <span className="text-xs font-semibold text-foreground">
              {activeView === "before" ? "Before — Jan 5, 2026" : "After — Mar 24, 2026"}
            </span>
            {activeView === "after" && (
              <span className="flex items-center gap-1 text-xs font-bold text-emerald-400">
                <TrendingUp className="h-3 w-3" /> +2.02 avg rank
              </span>
            )}
          </div>

          <img
            src={activeView === "before" ? scanBefore : scanAfter}
            alt={`Google Maps grid scan for "water heater installation las vegas" — ${
              activeView === "before" ? "January 5, 2026" : "March 24, 2026"
            }`}
            className="w-full h-auto"
            loading="lazy"
            width={1280}
            height={960}
          />
        </div>

        {/* Caption */}
        <p className="text-center text-xs text-text-secondary mt-4">
          95-point grid scan, 1.6 km spacing, 5-mile radius from business location. Green = top 3 (Map Pack). Data from local rank tracking tools.
        </p>
      </div>
    </section>
  );
};

export default GBPBeforeAfterCaseStudy;
