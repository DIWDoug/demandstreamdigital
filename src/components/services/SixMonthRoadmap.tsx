import { useState } from "react";
import { Rocket, Zap, TrendingUp, Settings, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

interface PhaseData {
  phase: number;
  month: string;
  title: string;
  outcome: string;
  activities: string[];
  deliverables: string[];
  icon: typeof Rocket;
  color: string;
}

const roadmapData: PhaseData[] = [
  {
    phase: 1,
    month: "Month 1",
    title: "Build & Launch",
    outcome: "Foundation live. Tracking active. First campaigns running.",
    activities: [
      "Technical SEO audit and fixes",
      "Google Business Profile optimization",
      "Analytics and tracking setup",
      "Initial paid media campaigns",
      "Content calendar development"
    ],
    deliverables: [
      "Technical audit report",
      "Optimized GBP listings",
      "Tracking dashboard",
      "First campaign live"
    ],
    icon: Rocket,
    color: "hsl(76, 42%, 41%)",
  },
  {
    phase: 2,
    month: "Month 2",
    title: "Expand & Refine",
    outcome: "Multi-channel campaigns active. First performance data analyzed.",
    activities: [
      "Content production begins",
      "Link building outreach",
      "Paid media optimization",
      "Email sequence development",
      "Review generation strategy"
    ],
    deliverables: [
      "First content pieces published",
      "Initial backlinks secured",
      "Campaign performance report",
      "Email sequences live"
    ],
    icon: Zap,
    color: "hsl(224, 60%, 55%)",
  },
  {
    phase: 3,
    month: "Month 3",
    title: "Authority Building",
    outcome: "Trust signals established. PR and directory placements secured.",
    activities: [
      "PR outreach and placements",
      "Industry directory submissions",
      "Guest posting campaign",
      "Citation building",
      "Social proof collection"
    ],
    deliverables: [
      "Media mentions secured",
      "Directory listings live",
      "Guest posts published",
      "Citation report"
    ],
    icon: TrendingUp,
    color: "hsl(35, 90%, 50%)",
  },
  {
    phase: 4,
    month: "Month 4",
    title: "Scale & Optimize",
    outcome: "Keyword expansion complete. Budget optimized based on data.",
    activities: [
      "Secondary keyword targeting based on Month 1-3 performance data",
      "Content production scaled to 2-3x initial volume",
      "Paid media budget reallocation to top-performing campaigns",
      "Landing page A/B testing with conversion tracking",
      "Email list segmentation and personalized nurture paths"
    ],
    deliverables: [
      "Expanded keyword strategy document with 50+ new targets",
      "Published content batch (blog posts, location pages)",
      "Optimized budget allocation report with ROI by channel",
      "CRO audit with prioritized recommendations"
    ],
    icon: Settings,
    color: "hsl(280, 60%, 55%)",
  },
  {
    phase: 5,
    month: "Month 5",
    title: "Momentum",
    outcome: "Continuous optimization. Seasonal adjustments implemented.",
    activities: [
      "Seasonal campaign development and scheduling",
      "Competitor gap analysis with actionable opportunities",
      "Advanced remarketing audience setup (site visitors, converters)",
      "Underperforming content refresh and republish",
      "Performance benchmarking against industry standards"
    ],
    deliverables: [
      "Seasonal campaign assets and launch schedule",
      "Competitor analysis report with keyword gaps",
      "Remarketing audience segments (5-10 custom audiences)",
      "Content refresh log with before/after metrics"
    ],
    icon: Zap,
    color: "hsl(190, 70%, 45%)",
  },
  {
    phase: 6,
    month: "Month 6",
    title: "Results & Roadmap",
    outcome: "6-month ROI documented. Next phase strategy delivered.",
    activities: [
      "Comprehensive performance audit across all channels",
      "ROI calculation with documented cost-per-lead by source",
      "Strategy refinement based on 6-month learnings",
      "Next-phase roadmap development with prioritized initiatives",
      "Quarterly review presentation preparation"
    ],
    deliverables: [
      "6-month performance report with YoY comparisons",
      "Channel-by-channel ROI documentation",
      "Next 6-month strategic roadmap",
      "Executive summary for client presentation"
    ],
    icon: TrendingUp,
    color: "hsl(340, 70%, 50%)",
  }
];

const SixMonthRoadmap = () => {
  const [activePhase, setActivePhase] = useState(1);
  const activeData = roadmapData.find(p => p.phase === activePhase) || roadmapData[0];
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-surface-elevated relative overflow-hidden reveal-section">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 transition-colors duration-700"
          style={{ background: activeData.color }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
            Example Engagement
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
            White Label Marketing: 6-Month Roadmap
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-3">
            Heavy lifting upfront, then ongoing optimization.{" "}
            <span className="text-foreground font-medium">Here's what gets delivered.</span>
          </p>
          <p className="text-sm text-text-muted italic">
            This is a typical engagement pattern, not a fixed package. Execution adapts to performance data and client priorities.
          </p>
        </div>

        {/* Timeline - Horizontal on desktop */}
        <div className="mb-8">
          {/* Mobile dropdown */}
          <div className="lg:hidden">
            <select
              value={activePhase}
              onChange={(e) => setActivePhase(Number(e.target.value))}
              className="w-full p-4 rounded-xl bg-surface-elevated border border-border text-foreground text-base font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta/50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.5rem'
              }}
            >
              {roadmapData.map((phase) => (
                <option key={phase.phase} value={phase.phase}>
                  {phase.month}: {phase.title}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop timeline */}
          <div className="hidden lg:flex items-center justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-border" />
            <div 
              className="absolute top-6 left-6 h-0.5 transition-all duration-500"
              style={{
                width: `${((activePhase - 1) / 5) * 100}%`,
                background: activeData.color
              }}
            />
            
            {roadmapData.map((phase) => {
              const isActive = phase.phase === activePhase;
              const isPast = phase.phase < activePhase;
              const Icon = phase.icon;
              
              return (
                <button
                  key={phase.phase}
                  onClick={() => setActivePhase(phase.phase)}
                  className="relative z-10 flex flex-col items-center group"
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "ring-4 ring-offset-2 ring-offset-surface-dark ring-cta/40" 
                        : isPast 
                          ? "opacity-60" 
                          : "bg-surface-elevated border border-border hover:border-text-muted"
                    }`}
                    style={{
                      background: isActive || isPast ? phase.color : undefined
                    }}
                  >
                    <Icon className={`w-5 h-5 ${isActive || isPast ? "text-white" : "text-text-muted"}`} />
                  </div>
                  <span className={`mt-3 text-sm font-medium transition-colors ${
                    isActive ? "text-foreground" : "text-text-muted"
                  }`}>
                    {phase.month}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active phase details */}
        <div 
          className="rounded-2xl border p-8 bg-surface-elevated animate-fade-in"
          style={{ borderColor: `${activeData.color}30` }}
          key={activePhase}
        >
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${activeData.color}20` }}
            >
              <activeData.icon className="w-6 h-6" style={{ color: activeData.color }} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{activeData.title}</h3>
              <p className="text-text-muted text-sm">{activeData.month}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 mb-8">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: activeData.color }} />
            <p className="text-lg text-foreground font-medium">{activeData.outcome}</p>
          </div>

          {/* Activities and Deliverables */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Key Activities */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Key Activities</h4>
              <ul className="space-y-3">
                {activeData.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: activeData.color }}
                    />
                    <span className="text-text-secondary">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Deliverables</h4>
              <ul className="space-y-3">
                {activeData.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle 
                      className="w-4 h-4 mt-0.5 flex-shrink-0" 
                      style={{ color: activeData.color }} 
                    />
                    <span className="text-text-secondary">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-text-muted text-sm text-center">
          Digital inbound marketing requires a 6-month agreement. Every engagement is scoped individually based on goals.
        </p>
      </div>
    </section>
  );
};

export default SixMonthRoadmap;