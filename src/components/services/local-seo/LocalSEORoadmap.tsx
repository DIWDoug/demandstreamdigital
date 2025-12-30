import { useState } from "react";
import { Layers, TrendingUp, Zap, Target, CheckCircle, ChevronDown } from "lucide-react";

interface PhaseData {
  phase: number;
  name: string;
  title: string;
  description: string;
  activities: string[];
  icon: typeof Layers;
  color: string;
}

const roadmapData: PhaseData[] = [
  {
    phase: 1,
    name: "Foundation",
    title: "Establishing Control, Clarity & Measurable Baselines",
    description: "Comprehensive discovery, technical setup, and foundational work that removes ambiguity and sets the stage for everything that follows.",
    activities: [
      "Baseline metrics and year-over-year comparison analysis",
      "Keyword research and mapping",
      "On-page optimization audit and implementation",
      "Backlink and citation gap analysis",
      "GBP audit and optimization",
      "Topical and geographical content gap analysis",
      "Hub-and-spoke content architecture planning",
      "Schema (AIO) audit and implementation",
      "Foundational citation building",
      "Foundational link building",
      "Local link building opportunity evaluations",
      "Analytics, tracking, and dashboard setups",
      "Baseline ranking connections established",
      "Priority pages mapped, rewritten, and deployed",
      "GBP service pages written and rolled out",
      "Internal linking hub-and-spoke methodology implemented",
      "Data aggregator submissions through partners",
      "GBP posting schedule established",
      "Review campaign audit and recommendations",
      "Photo optimization and drip feed syndication",
      "Introduction to local link outreach (resource links, chambers, associations, event sponsorships)",
      "Unstructured citation submissions",
      "Guest post opportunity submissions (if budget allows)",
      "Topical and geographical supporting content rolled out",
      "Reddit account warming for SEO purposes",
      "Authority link building initiated"
    ],
    icon: Layers,
    color: "hsl(76, 42%, 41%)",
  },
  {
    phase: 2,
    name: "Performance",
    title: "Reducing Risk, Capturing Quick Wins & Building Authority",
    description: "Refining what is working, capturing low-hanging fruit, and building sustainable authority signals that compound.",
    activities: [
      "On-page audit revisions where needed",
      "GSC keyword hunting for low-hanging fruit",
      "Authority link building continues",
      "Structured and unstructured citations as needed",
      "Guest post or authority link building where possible",
      "GBP optimization and syndication",
      "Continuation of topical and geographical content",
      "Local authority diversification syndication",
      "Topical and geographical content expansion",
      "GBP maintenance and optimization",
      "Citation submission cleanup and finalization",
      "Quarterly link detox and evaluation",
      "Roadmap for next 6 months developed"
    ],
    icon: TrendingUp,
    color: "hsl(224, 60%, 55%)",
  },
  {
    phase: 3,
    name: "Momentum",
    title: "Leveraging Wins & Accelerating Market Share",
    description: "Early wins create leverage. This phase accelerates visibility and captures expanding market share before competitors adjust.",
    activities: [
      "Aggressive content scaling based on performance data",
      "High-value link acquisition campaigns",
      "Expanded geographical targeting where applicable",
      "Advanced schema implementation",
      "Conversion rate optimization on top-performing pages",
      "Review velocity acceleration",
      "Competitive gap exploitation",
      "Local PR and community partnerships",
      "Content refresh and consolidation strategy",
      "Authority building through thought leadership content"
    ],
    icon: Zap,
    color: "hsl(35, 90%, 50%)",
  },
  {
    phase: 4,
    name: "Peak",
    title: "Defending Position & Expanding Opportunity",
    description: "Maintaining top positions while expanding into adjacent opportunities. Control, not complacency.",
    activities: [
      "Defensive SEO to protect rankings",
      "New service area or location expansion",
      "Competitor monitoring and response strategy",
      "Brand search optimization",
      "Featured snippet and AI visibility optimization",
      "Cross-channel integration (paid + organic synergy)",
      "Advanced analytics and attribution modeling",
      "Long-term content strategy development",
      "Authority maintenance and reputation management",
      "Quarterly strategic reviews and roadmap updates"
    ],
    icon: Target,
    color: "hsl(280, 60%, 55%)",
  }
];

const LocalSEORoadmap = () => {
  const [activePhase, setActivePhase] = useState(1);
  const [showAllActivities, setShowAllActivities] = useState(false);
  const activeData = roadmapData.find(p => p.phase === activePhase) || roadmapData[0];

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cta mb-4">
            The Framework
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
            From Foundation to Peak Performance
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Every engagement is scoped to the market. This is how the work sequences, adapted to competitive reality.
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
                  Phase {phase.phase}: {phase.name}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop timeline */}
          <div className="hidden lg:flex items-center justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-12 right-12 h-0.5 bg-border" />
            <div 
              className="absolute top-6 left-12 h-0.5 transition-all duration-500"
              style={{
                width: `${((activePhase - 1) / 3) * 100}%`,
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
                  className="relative z-10 flex flex-col items-center group flex-1"
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "ring-4 ring-offset-2 ring-offset-background ring-cta/40" 
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
                  <span className={`mt-3 text-sm font-semibold transition-colors ${
                    isActive ? "text-foreground" : "text-text-muted"
                  }`}>
                    {phase.name}
                  </span>
                  <span className={`text-xs transition-colors ${
                    isActive ? "text-text-secondary" : "text-text-muted"
                  }`}>
                    Phase {phase.phase}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active phase details */}
        <div 
          className="rounded-2xl border p-8 bg-surface-elevated shadow-sm animate-fade-in"
          style={{ borderColor: `${activeData.color}40` }}
          key={activePhase}
        >
          {/* Phase 1 duration callout */}
          {activePhase === 1 && (
            <div className="flex items-center gap-2 mb-6 px-4 py-2.5 rounded-lg bg-surface-dark border border-border w-fit">
              <span className="text-sm text-text-secondary">
                <span className="font-semibold text-foreground">Longest phase:</span> Foundation typically spans 2 to 4 months depending on scope and market complexity.
              </span>
            </div>
          )}
          
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${activeData.color}15` }}
            >
              <activeData.icon className="w-6 h-6" style={{ color: activeData.color }} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{activeData.title}</h3>
              <p className="text-text-muted text-sm">Phase {activeData.phase}: {activeData.name}</p>
            </div>
          </div>
          
          <p className="text-lg text-text-secondary mb-8">{activeData.description}</p>

          {/* Activities */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">What This Phase Includes</h4>
            {/* Show first 6 by default, rest expandable - all content in DOM for crawlability */}
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {activeData.activities.slice(0, 6).map((activity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle 
                    className="w-4 h-4 mt-0.5 flex-shrink-0" 
                    style={{ color: activeData.color }} 
                  />
                  <span className="text-text-secondary">{activity}</span>
                </li>
              ))}
            </ul>
            
            {activeData.activities.length > 6 && (
              <>
                {/* Remaining activities - always in DOM for SEO, visibility controlled */}
                <ul 
                  className={`grid md:grid-cols-2 gap-x-8 gap-y-3 mt-3 transition-all duration-300 overflow-hidden ${
                    showAllActivities ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!showAllActivities}
                >
                  {activeData.activities.slice(6).map((activity, index) => (
                    <li key={index + 6} className="flex items-start gap-3">
                      <CheckCircle 
                        className="w-4 h-4 mt-0.5 flex-shrink-0" 
                        style={{ color: activeData.color }} 
                      />
                      <span className="text-text-secondary">{activity}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setShowAllActivities(!showAllActivities)}
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-cta hover:text-cta/80 transition-colors"
                >
                  <span>{showAllActivities ? "Show less" : "View full execution checklist"}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllActivities ? "rotate-180" : ""}`} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-text-muted text-sm text-center">
          Phase duration varies by market competitiveness and scope. Most clients progress through all four phases within 6 to 12 months.
        </p>
      </div>
    </section>
  );
};

export default LocalSEORoadmap;
