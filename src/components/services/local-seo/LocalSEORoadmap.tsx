import { useState } from "react";
import { Rocket, Zap, TrendingUp, Settings, FileSearch, CheckCircle } from "lucide-react";

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
    title: "Foundation & Baseline",
    outcome: "GBP audited and optimized. All gaps identified. Content strategy mapped.",
    activities: [
      "Baseline metrics report: GBP, GA4 organic, GSC, rankings",
      "Year-over-year comparison analysis",
      "Backlink gap analysis",
      "Citation gap analysis",
      "GBP audit and optimization",
      "Topical and geographical content gap analysis",
      "Hub and spoke content architecture planning"
    ],
    deliverables: [
      "Baseline metrics report with YoY comparison",
      "Backlink and citation gap analysis",
      "Optimized GBP with enhanced categories",
      "Tone and style guide",
      "Content calendar with foundational topics"
    ],
    icon: FileSearch,
    color: "hsl(76, 42%, 41%)",
  },
  {
    phase: 2,
    month: "Month 2",
    title: "On-Page & Content Launch",
    outcome: "Priority pages optimized. First service pages live. Citations submitted.",
    activities: [
      "On-page optimization for priority pages",
      "Schema markup implementation",
      "First service pages created (AI-assisted with human editing)",
      "Internal linking structure built",
      "Foundational citation submissions (structured and unstructured)",
      "Data aggregator submissions if applicable",
      "GBP posts begin (ongoing through month 6)",
      "Review campaign recommendations developed"
    ],
    deliverables: [
      "Priority pages fully optimized",
      "Schema markup validated in Search Console",
      "Service area pages published",
      "Foundational citations submitted",
      "Local link building recommendations",
      "Review campaign strategy document"
    ],
    icon: Rocket,
    color: "hsl(224, 60%, 55%)",
  },
  {
    phase: 3,
    month: "Month 3",
    title: "Authority & Review Velocity",
    outcome: "Links acquired. Review campaign live. Topical content expanding.",
    activities: [
      "Local link outreach to relevant sites",
      "Citation building continues",
      "Review generation campaign launched",
      "Guest posts or local PR placement (budget dependent)",
      "Topical and geographical supporting content created",
      "Reddit SEO if applicable",
      "GBP posts continue"
    ],
    deliverables: [
      "Quality backlinks secured",
      "Full citation report with live listings",
      "Review campaign generating reviews weekly",
      "Supporting content published",
      "Authority link building report"
    ],
    icon: TrendingUp,
    color: "hsl(35, 90%, 50%)",
  },
  {
    phase: 4,
    month: "Month 4",
    title: "Audit & Low-Hanging Fruit",
    outcome: "On-page refined. Quick wins captured. Authority building diversified.",
    activities: [
      "On-page audit and revision where needed",
      "GSC keyword hunting for low-hanging fruit",
      "Authority link building continues",
      "Structured and unstructured citations as needed",
      "Guest posts if possible",
      "GBP posts continue",
      "Content production continues"
    ],
    deliverables: [
      "On-page audit report with revisions",
      "Low-hanging fruit keyword targets",
      "Updated link building report",
      "Traffic and ranking movement report"
    ],
    icon: Zap,
    color: "hsl(280, 60%, 55%)",
  },
  {
    phase: 5,
    month: "Month 5",
    title: "Diversification & Scale",
    outcome: "Authority channels diversified. Rankings consolidating. Pipeline building.",
    activities: [
      "Local authority diversification: unstructured citations, Reddit, local links",
      "Topical and geographical content expansion",
      "GBP posts continue",
      "Citation maintenance and expansion",
      "Link profile diversification",
      "Performance analysis and refinement"
    ],
    deliverables: [
      "Diversified authority report",
      "New supporting content published",
      "GBP engagement metrics",
      "Mid-campaign performance review"
    ],
    icon: Settings,
    color: "hsl(190, 70%, 45%)",
  },
  {
    phase: 6,
    month: "Month 6",
    title: "Results & Next Phase",
    outcome: "Documented ROI. Client retention secured. Roadmap for continued growth.",
    activities: [
      "Comprehensive 6-month performance audit",
      "Lead attribution and ROI calculation",
      "Strategy refinement for next phase",
      "Next 6-month roadmap development",
      "GBP posts continue",
      "Ongoing authority and content work"
    ],
    deliverables: [
      "6-month performance report with ROI",
      "Lead and revenue attribution",
      "Next phase strategic roadmap",
      "White-labeled executive summary"
    ],
    icon: TrendingUp,
    color: "hsl(340, 70%, 50%)",
  }
];

const LocalSEORoadmap = () => {
  const [activePhase, setActivePhase] = useState(1);
  const activeData = roadmapData.find(p => p.phase === activePhase) || roadmapData[0];

  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cta mb-4">
            The 6-Month Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 leading-tight">
            From Foundation to Measurable ROI in 6 Months
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No guessing. No vague promises. Here is exactly what happens each month, what you will see, and what your clients get. This is a proven sequence, adapted to each market's competitive reality.
          </p>
        </div>

        {/* Timeline - Horizontal on desktop */}
        <div className="mb-8">
          {/* Mobile dropdown */}
          <div className="lg:hidden">
            <select
              value={activePhase}
              onChange={(e) => setActivePhase(Number(e.target.value))}
              className="w-full p-4 rounded-xl bg-white border border-slate-300 text-slate-900 text-base font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-cta/50"
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
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-slate-300" />
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
                        ? "ring-4 ring-offset-2 ring-offset-white ring-cta/40" 
                        : isPast 
                          ? "opacity-60" 
                          : "bg-white border border-slate-300 hover:border-slate-400"
                    }`}
                    style={{
                      background: isActive || isPast ? phase.color : undefined
                    }}
                  >
                    <Icon className={`w-5 h-5 ${isActive || isPast ? "text-white" : "text-slate-500"}`} />
                  </div>
                  <span className={`mt-3 text-sm font-medium transition-colors ${
                    isActive ? "text-slate-900" : "text-slate-500"
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
          className="rounded-2xl border p-8 bg-white shadow-sm animate-fade-in"
          style={{ borderColor: `${activeData.color}40` }}
          key={activePhase}
        >
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${activeData.color}15` }}
            >
              <activeData.icon className="w-6 h-6" style={{ color: activeData.color }} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{activeData.title}</h3>
              <p className="text-slate-500 text-sm">{activeData.month}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 mb-8">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: activeData.color }} />
            <p className="text-lg text-slate-900 font-medium">{activeData.outcome}</p>
          </div>

          {/* Activities and Deliverables */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Key Activities */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Key Activities</h4>
              <ul className="space-y-3">
                {activeData.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: activeData.color }}
                    />
                    <span className="text-slate-600">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Deliverables</h4>
              <ul className="space-y-3">
                {activeData.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle 
                      className="w-4 h-4 mt-0.5 flex-shrink-0" 
                      style={{ color: activeData.color }} 
                    />
                    <span className="text-slate-600">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-slate-500 text-sm text-center">
          Most clients see measurable ranking and traffic improvements by month 3. Sustainable, compounding results emerge by month 6.
        </p>
      </div>
    </section>
  );
};

export default LocalSEORoadmap;
