import { useState } from "react";
import { CheckCircle, Rocket, Zap, TrendingUp, Settings } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

interface PhaseData {
  phase: number;
  month: string;
  title: string;
  focus: string;
  icon: typeof Rocket;
  color: string;
  hours: string;
  activities: string[];
  deliverables: string[];
}

const roadmapData: PhaseData[] = [
  {
    phase: 1,
    month: "Month 1",
    title: "Build & Launch",
    focus: "Foundation + First Campaigns",
    icon: Rocket,
    color: "hsl(76, 42%, 41%)",
    hours: "~42 hours",
    activities: [
      "Technical SEO audit and priority fixes",
      "Google Business Profile optimization & verification",
      "Tracking, analytics & call tracking setup",
      "Service area pages created or optimized",
      "Citation building initiated across major directories",
      "Google Ads campaign structure and launch",
      "Landing page optimization for conversions",
      "Review generation strategy activated",
      "Baseline reporting dashboard configured"
    ],
    deliverables: [
      "Technical SEO Audit with fixes implemented",
      "Fully optimized GBP with all features utilized",
      "Analytics & call tracking live and reporting",
      "Google Ads campaign live with initial data",
      "Service area pages indexed and ranking"
    ]
  },
  {
    phase: 2,
    month: "Month 2",
    title: "Expand & Refine",
    focus: "Multi-Channel + Optimization",
    icon: Zap,
    color: "hsl(224, 60%, 55%)",
    hours: "~42 hours",
    activities: [
      "Meta/Facebook ads campaign launched",
      "Retargeting campaigns live across platforms",
      "Google Ads bid optimization and refinement",
      "Local link outreach campaign begins",
      "Content calendar execution (2-4 pieces)",
      "GBP posting schedule established",
      "Citation cleanup and expansion continues",
      "First month performance analysis"
    ],
    deliverables: [
      "Meta ads live with audience targeting",
      "Retargeting pixel data collection active",
      "Google Ads performance report with optimizations",
      "Content published and indexed",
      "Month 1 Performance Report"
    ]
  },
  {
    phase: 3,
    month: "Month 3",
    title: "Authority Building",
    focus: "Trust Signals + PR",
    icon: TrendingUp,
    color: "hsl(35, 90%, 50%)",
    hours: "~42 hours",
    activities: [
      "Digital PR outreach for earned media",
      "Industry directory submissions",
      "Guest post opportunities pitched",
      "Local sponsorship outreach",
      "Email automation sequences setup",
      "Landing page A/B testing initiated",
      "Ad creative refresh and testing",
      "Review velocity maintained"
    ],
    deliverables: [
      "PR placements or submissions in progress",
      "Directory listings live",
      "Email automation flows configured",
      "A/B test variants running",
      "Month 2 Performance Report"
    ]
  },
  {
    phase: 4,
    month: "Month 4",
    title: "Scale & Optimize",
    focus: "Keyword Expansion + Growth",
    icon: Settings,
    color: "hsl(280, 60%, 55%)",
    hours: "~42 hours",
    activities: [
      "Keyword expansion to secondary terms",
      "Additional service area pages",
      "Continued content production (2-4 pieces)",
      "Link building momentum maintained",
      "Campaign budget reallocation based on data",
      "Conversion rate optimization",
      "GBP posting and engagement optimization",
      "Quarterly strategy review"
    ],
    deliverables: [
      "Expanded keyword targeting live",
      "New service area pages indexed",
      "Quarterly Performance Report",
      "Budget optimization recommendations",
      "Q2 strategic roadmap"
    ]
  },
  {
    phase: 5,
    month: "Month 5",
    title: "Momentum & Refinement",
    focus: "Continuous Improvement",
    icon: Zap,
    color: "hsl(190, 70%, 45%)",
    hours: "~42 hours",
    activities: [
      "Campaign optimization across all channels",
      "Content creation and publishing",
      "Link building and authority work",
      "Review management and response",
      "Seasonal adjustments and promotions",
      "New opportunity identification",
      "Email nurture sequence refinement",
      "Competitor monitoring and response"
    ],
    deliverables: [
      "Monthly Performance Report",
      "Ongoing content published",
      "Continued backlink acquisition",
      "Campaign optimization log",
      "Seasonal campaign adjustments"
    ]
  },
  {
    phase: 6,
    month: "Month 6",
    title: "Results & Roadmap",
    focus: "Report + Plan Forward",
    icon: TrendingUp,
    color: "hsl(340, 70%, 50%)",
    hours: "~42 hours",
    activities: [
      "Comprehensive 6-month performance analysis",
      "ROI attribution and reporting",
      "Ranking improvements documented",
      "Traffic and conversion analysis",
      "Next phase strategy development",
      "Ongoing maintenance plan established",
      "Budget recommendations for growth",
      "Client success presentation"
    ],
    deliverables: [
      "6-Month Results Report with full metrics",
      "ROI analysis and attribution",
      "Next phase strategic recommendations",
      "Ongoing optimization plan",
      "Growth roadmap for months 7-12"
    ]
  }
];

const SixMonthRoadmap = () => {
  const [activePhase, setActivePhase] = useState(1);
  const activeData = roadmapData.find(p => p.phase === activePhase) || roadmapData[0];
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden reveal-section">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 transition-colors duration-700"
          style={{ background: activeData.color }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
            Example: $2,500/mo Engagement
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            6-Month Roadmap
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            At ~$60/hr, that's roughly 42 hours of execution per month. Here's how a full digital inbound marketing engagement unfolds.
            <span className="block mt-3 text-foreground font-medium">
              Heavy lifting upfront, then ongoing optimization and growth.
            </span>
          </p>
        </div>

        {/* Timeline navigation - Dropdown on mobile, tabs on desktop */}
        <div className="mb-12">
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
                  {phase.month}: {phase.title} ({phase.hours})
                </option>
              ))}
            </select>
          </div>

          {/* Desktop tabs */}
          <div className="hidden lg:grid lg:grid-cols-6">
            {roadmapData.map((phase) => {
              const isActive = phase.phase === activePhase;
              const Icon = phase.icon;
              
              return (
                <button
                  key={phase.phase}
                  onClick={() => setActivePhase(phase.phase)}
                  className={`relative p-6 text-left transition-all duration-300 border-b-4 rounded-t-lg ${
                    isActive 
                      ? "bg-surface-elevated" 
                      : "hover:bg-surface-elevated/50"
                  }`}
                  style={{
                    borderColor: isActive ? phase.color : "hsl(var(--border))"
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon 
                      className="w-5 h-5 transition-colors duration-300"
                      style={{ color: isActive ? phase.color : "hsl(var(--text-muted))" }}
                    />
                    <span 
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-text-muted"
                      }`}
                    >
                      {phase.month}
                    </span>
                  </div>
                  <h3 className={`text-base font-medium transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-text-secondary"
                  }`}>
                    {phase.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-1">{phase.hours}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active phase details */}
        <div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 animate-fade-in"
          key={activePhase}
        >
          {/* Activities */}
          <div 
            className="rounded-2xl border p-6 lg:p-8 bg-surface-elevated"
            style={{
              borderColor: `${activeData.color}30`
            }}
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <activeData.icon 
                className="w-6 h-6"
                style={{ color: activeData.color }}
              />
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {activeData.title}
                </h3>
                <p className="text-sm text-text-muted">{activeData.focus}</p>
              </div>
            </div>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
              Key Activities
            </h4>
            <ul className="space-y-3">
              {activeData.activities.map((activity, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle 
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: activeData.color }}
                  />
                  <span className="text-text-secondary">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="rounded-2xl border border-border p-6 lg:p-8 bg-surface-elevated">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-6">
              What Gets Delivered
            </h4>
            <ul className="space-y-4">
              {activeData.deliverables.map((deliverable, index) => (
                <li 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div 
                    className="p-4 rounded-xl border border-border/50 bg-background transition-all duration-300 hover:border-border"
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold"
                        style={{
                          background: `${activeData.color}20`,
                          color: activeData.color
                        }}
                      >
                        {index + 1}
                      </div>
                      <span className="text-foreground font-medium pt-1">
                        {deliverable}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Progress indicator */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between text-sm text-text-muted mb-2">
                <span>Roadmap Progress</span>
                <span>Month {activePhase} of 6</span>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(activePhase / 6) * 100}%`,
                    background: `linear-gradient(90deg, ${activeData.color}, ${activeData.color}80)`
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 p-6 rounded-xl bg-surface-elevated border border-border">
          <p className="text-text-secondary text-center">
            <span className="font-semibold text-foreground">Every engagement is scoped individually.</span>{" "}
            This example assumes full-service digital inbound marketing. Your roadmap may include fewer channels, 
            different priorities, or adjusted timelines based on your client's goals and budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SixMonthRoadmap;