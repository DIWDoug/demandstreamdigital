import { useState } from "react";
import { Rocket, Zap, TrendingUp, Settings, FileSearch, CheckCircle, Clock } from "lucide-react";

type BudgetTier = "1200" | "2000" | "3000";

interface PhaseData {
  phase: number;
  month: string;
  title: string;
  outcome: Record<BudgetTier, string>;
  activities: Record<BudgetTier, string[]>;
  deliverables: Record<BudgetTier, string[]>;
  icon: typeof Rocket;
  color: string;
}

const budgetTiers: { id: BudgetTier; label: string; hours: string; description: string }[] = [
  { id: "1200", label: "$1,200/mo", hours: "20 hrs", description: "Foundation" },
  { id: "2000", label: "$2,000/mo", hours: "33 hrs", description: "Growth" },
  { id: "3000", label: "$3,000+/mo", hours: "50+ hrs", description: "Competitive" },
];

const roadmapData: PhaseData[] = [
  {
    phase: 1,
    month: "Month 1",
    title: "Foundation & Baseline",
    outcome: {
      "1200": "GBP optimized. Gaps identified. Keyword strategy mapped. On-page work begins.",
      "2000": "GBP optimized. Full audit complete. On-page optimization in progress. Content strategy finalized.",
      "3000": "GBP optimized. Full audit complete. On-page and schema deployed. First content live."
    },
    activities: {
      "1200": [
        "Baseline metrics report: GBP, GA4 organic, GSC, rankings",
        "Year-over-year comparison analysis",
        "Keyword research and keyword mapping",
        "Backlink gap analysis",
        "Citation gap analysis",
        "GBP audit and optimization",
        "Topical and geographical content gap analysis",
        "Hub and spoke content architecture planning",
        "On-page optimization audit",
        "On-page optimization implementation (if time permits)",
        "Schema audit and implementation (if time permits)"
      ],
      "2000": [
        "Baseline metrics report: GBP, GA4 organic, GSC, rankings",
        "Year-over-year comparison analysis",
        "Keyword research and keyword mapping",
        "Backlink gap analysis",
        "Citation gap analysis",
        "GBP audit and full optimization",
        "Topical and geographical content gap analysis",
        "Hub and spoke content architecture planning",
        "On-page optimization audit",
        "On-page optimization implementation (priority pages)",
        "Schema audit and implementation",
        "Technical SEO audit",
        "Competitor analysis"
      ],
      "3000": [
        "Baseline metrics report: GBP, GA4 organic, GSC, rankings",
        "Year-over-year comparison analysis",
        "Keyword research and keyword mapping",
        "Backlink gap analysis",
        "Citation gap analysis",
        "GBP audit and full optimization",
        "Topical and geographical content gap analysis",
        "Hub and spoke content architecture planning",
        "On-page optimization audit and implementation",
        "Schema audit and full implementation",
        "Technical SEO audit and fixes",
        "Competitor analysis (3+ competitors)",
        "First service pages created",
        "Initial citation submissions begin"
      ]
    },
    deliverables: {
      "1200": [
        "Baseline metrics report with YoY comparison",
        "Keyword research and mapping document",
        "Backlink and citation gap analysis",
        "Optimized GBP with enhanced categories",
        "Tone and style guide",
        "Content calendar with foundational topics",
        "On-page audit with priority recommendations"
      ],
      "2000": [
        "Baseline metrics report with YoY comparison",
        "Keyword research and mapping document",
        "Backlink and citation gap analysis",
        "Optimized GBP with enhanced categories",
        "Tone and style guide",
        "Content calendar with foundational topics",
        "On-page audit with priority recommendations",
        "Technical SEO audit report",
        "Competitor analysis report",
        "Priority pages optimized"
      ],
      "3000": [
        "Baseline metrics report with YoY comparison",
        "Keyword research and mapping document",
        "Backlink and citation gap analysis",
        "Optimized GBP with enhanced categories",
        "Tone and style guide",
        "Content calendar with foundational topics",
        "On-page audit and implementation complete",
        "Technical SEO audit and fixes complete",
        "Competitor analysis report (3+ competitors)",
        "Schema markup deployed",
        "First service pages published"
      ]
    },
    icon: FileSearch,
    color: "hsl(76, 42%, 41%)",
  },
  {
    phase: 2,
    month: "Month 2",
    title: "On-Page & Content Launch",
    outcome: {
      "1200": "Priority pages optimized. Schema deployed. First service pages live. Citations submitted.",
      "2000": "All priority pages optimized. Multiple service pages live. Citations and link building active.",
      "3000": "Full on-page complete. Content machine running. Citations, links, and reviews all in motion."
    },
    activities: {
      "1200": [
        "On-page optimization for priority pages (continued from Month 1)",
        "Schema markup implementation (if not completed in Month 1)",
        "First service pages created (AI-assisted with human editing)",
        "Internal linking structure built",
        "Foundational citation submissions (structured and unstructured)",
        "Data aggregator submissions if applicable",
        "GBP posts begin (ongoing through month 6)",
        "Review campaign recommendations developed"
      ],
      "2000": [
        "On-page optimization continues for remaining pages",
        "Schema markup refinement",
        "2-4 service pages created",
        "Internal linking structure expanded",
        "Foundational citation submissions (50+ directories)",
        "Data aggregator submissions",
        "GBP posts begin (ongoing through month 6)",
        "Review campaign strategy and launch",
        "Initial local link outreach begins"
      ],
      "3000": [
        "On-page optimization complete",
        "Advanced schema implementation",
        "4-6 service pages created",
        "Internal linking structure fully built",
        "Comprehensive citation submissions (75+ directories)",
        "Data aggregator submissions",
        "GBP posts begin with content calendar",
        "Review campaign launched",
        "Local link outreach active",
        "Guest post prospecting begins",
        "Supporting blog content created"
      ]
    },
    deliverables: {
      "1200": [
        "Priority pages fully optimized",
        "Schema markup validated in Search Console",
        "Service area pages published",
        "Foundational citations submitted",
        "Local link building recommendations",
        "Review campaign strategy document"
      ],
      "2000": [
        "All priority pages fully optimized",
        "Schema markup validated in Search Console",
        "2-4 service area pages published",
        "50+ citations submitted",
        "Review campaign live",
        "First link building report",
        "GBP post calendar active"
      ],
      "3000": [
        "Full site on-page optimization complete",
        "Advanced schema deployed and validated",
        "4-6 service area pages published",
        "75+ citations submitted",
        "Review campaign generating reviews",
        "Active link building report",
        "GBP post calendar active",
        "First blog/supporting content published"
      ]
    },
    icon: Rocket,
    color: "hsl(224, 60%, 55%)",
  },
  {
    phase: 3,
    month: "Month 3",
    title: "Authority & Review Velocity",
    outcome: {
      "1200": "Links acquired. Review campaign live. Topical content expanding.",
      "2000": "Strong link profile building. Reviews flowing. Content gaining traction.",
      "3000": "Authority signals strong. Review velocity established. Rankings moving significantly."
    },
    activities: {
      "1200": [
        "Local link outreach to relevant sites",
        "Citation building continues",
        "Review generation campaign launched",
        "Guest posts or local PR placement (budget dependent)",
        "Topical and geographical supporting content created",
        "Reddit SEO if applicable",
        "GBP posts continue"
      ],
      "2000": [
        "Local link outreach continues (10-15 targets)",
        "Citation building continues",
        "Review generation campaign active",
        "Guest post placement (1-2)",
        "Topical and geographical content created (2-3 pieces)",
        "Reddit SEO if applicable",
        "GBP posts continue",
        "Local PR outreach"
      ],
      "3000": [
        "Aggressive local link outreach (20+ targets)",
        "Citation building and maintenance",
        "Review generation campaign at full velocity",
        "Guest post placements (2-3)",
        "Topical and geographical content created (4-6 pieces)",
        "Reddit SEO active",
        "GBP posts continue with engagement",
        "Local PR placement",
        "Industry publication outreach"
      ]
    },
    deliverables: {
      "1200": [
        "Quality backlinks secured",
        "Full citation report with live listings",
        "Review campaign generating reviews weekly",
        "Supporting content published",
        "Authority link building report"
      ],
      "2000": [
        "10+ quality backlinks secured",
        "Full citation report with live listings",
        "Review campaign generating 3+ reviews weekly",
        "2-3 supporting content pieces published",
        "Authority link building report",
        "1-2 guest posts live"
      ],
      "3000": [
        "15+ quality backlinks secured",
        "Comprehensive citation report",
        "Review campaign generating 5+ reviews weekly",
        "4-6 supporting content pieces published",
        "Authority link building report",
        "2-3 guest posts live",
        "Local PR placement secured"
      ]
    },
    icon: TrendingUp,
    color: "hsl(35, 90%, 50%)",
  },
  {
    phase: 4,
    month: "Month 4",
    title: "Audit & Low-Hanging Fruit",
    outcome: {
      "1200": "On-page refined. Quick wins captured. Authority building diversified.",
      "2000": "Rankings consolidating. Content indexed and climbing. ROI becoming visible.",
      "3000": "Strong ranking positions. Lead flow increasing. Authority established in market."
    },
    activities: {
      "1200": [
        "On-page audit and revision where needed",
        "GSC keyword hunting for low-hanging fruit",
        "Authority link building continues",
        "Structured and unstructured citations as needed",
        "Guest posts if possible",
        "GBP posts continue",
        "Content production continues"
      ],
      "2000": [
        "On-page audit and revision",
        "GSC keyword optimization for low-hanging fruit",
        "Authority link building continues",
        "Citation maintenance and expansion",
        "Guest post outreach continues",
        "GBP posts continue",
        "Content production continues (2-3 pieces)",
        "Conversion optimization review"
      ],
      "3000": [
        "Comprehensive on-page audit and revision",
        "GSC keyword optimization (full sweep)",
        "Aggressive authority link building",
        "Citation maintenance and expansion",
        "Guest post production continues",
        "GBP posts with A/B testing",
        "Content production at scale (4-6 pieces)",
        "Conversion optimization implementation",
        "Landing page optimization"
      ]
    },
    deliverables: {
      "1200": [
        "On-page audit report with revisions",
        "Low-hanging fruit keyword targets",
        "Updated link building report",
        "Traffic and ranking movement report"
      ],
      "2000": [
        "On-page audit report with revisions complete",
        "Low-hanging fruit keywords targeted",
        "Updated link building report",
        "Traffic and ranking movement report",
        "Conversion rate analysis",
        "2-3 new content pieces published"
      ],
      "3000": [
        "Comprehensive on-page audit complete",
        "Full low-hanging fruit optimization",
        "Updated link building report",
        "Detailed traffic and ranking report",
        "Conversion optimization implemented",
        "4-6 new content pieces published",
        "Landing page improvements live"
      ]
    },
    icon: Zap,
    color: "hsl(280, 60%, 55%)",
  },
  {
    phase: 5,
    month: "Month 5",
    title: "Diversification & Scale",
    outcome: {
      "1200": "Authority channels diversified. Rankings consolidating. Pipeline building.",
      "2000": "Multiple ranking positions secured. Leads steady. Retention conversation easy.",
      "3000": "Market dominance emerging. Lead flow strong. Clear competitive advantage."
    },
    activities: {
      "1200": [
        "Local authority diversification: unstructured citations, Reddit, local links",
        "Topical and geographical content expansion",
        "GBP posts continue",
        "Citation maintenance and expansion",
        "Link profile diversification",
        "Performance analysis and refinement"
      ],
      "2000": [
        "Local authority diversification at scale",
        "Content expansion (topical and geographical)",
        "GBP optimization and posts continue",
        "Citation maintenance",
        "Link profile diversification",
        "Performance analysis and strategy refinement",
        "Secondary keyword targeting"
      ],
      "3000": [
        "Full authority diversification campaign",
        "Content expansion at scale",
        "GBP engagement optimization",
        "Citation monitoring and maintenance",
        "Aggressive link profile diversification",
        "Advanced performance analysis",
        "Secondary and tertiary keyword targeting",
        "Competitive gap exploitation",
        "New market/service expansion planning"
      ]
    },
    deliverables: {
      "1200": [
        "Diversified authority report",
        "New supporting content published",
        "GBP engagement metrics",
        "Mid-campaign performance review"
      ],
      "2000": [
        "Diversified authority report",
        "3-4 new content pieces published",
        "GBP engagement metrics",
        "Comprehensive mid-campaign review",
        "Updated strategy recommendations"
      ],
      "3000": [
        "Full authority diversification report",
        "5-6 new content pieces published",
        "GBP engagement optimization report",
        "Comprehensive performance analysis",
        "Competitive positioning report",
        "Expansion roadmap draft"
      ]
    },
    icon: Settings,
    color: "hsl(190, 70%, 45%)",
  },
  {
    phase: 6,
    month: "Month 6",
    title: "Results & Next Phase",
    outcome: {
      "1200": "Documented ROI. Client retention secured. Roadmap for continued growth.",
      "2000": "Clear ROI demonstrated. Retention locked. Growth opportunities identified.",
      "3000": "Exceptional ROI documented. Long-term partnership secured. Dominance roadmap ready."
    },
    activities: {
      "1200": [
        "Comprehensive 6-month performance audit",
        "Lead attribution and ROI calculation",
        "Strategy refinement for next phase",
        "Next 6-month roadmap development",
        "GBP posts continue",
        "Ongoing authority and content work"
      ],
      "2000": [
        "Comprehensive 6-month performance audit",
        "Detailed lead attribution and ROI calculation",
        "Strategy refinement for next phase",
        "Next 6-month roadmap development",
        "GBP posts continue",
        "Ongoing authority and content work",
        "Upsell opportunity assessment"
      ],
      "3000": [
        "Comprehensive 6-month performance audit",
        "Full lead attribution and ROI calculation",
        "Strategy refinement for next phase",
        "Next 12-month roadmap development",
        "GBP posts continue",
        "Ongoing authority and content work",
        "Market expansion planning",
        "New service/location strategy"
      ]
    },
    deliverables: {
      "1200": [
        "6-month performance report with ROI",
        "Lead and revenue attribution",
        "Next phase strategic roadmap",
        "White-labeled executive summary"
      ],
      "2000": [
        "6-month performance report with full ROI",
        "Detailed lead and revenue attribution",
        "Next phase strategic roadmap",
        "White-labeled executive summary",
        "Growth opportunity analysis"
      ],
      "3000": [
        "6-month performance report with full ROI",
        "Comprehensive lead and revenue attribution",
        "12-month strategic roadmap",
        "White-labeled executive summary",
        "Market expansion plan",
        "Competitive dominance report"
      ]
    },
    icon: TrendingUp,
    color: "hsl(340, 70%, 50%)",
  }
];

const LocalSEORoadmap = () => {
  const [activePhase, setActivePhase] = useState(1);
  const [activeTier, setActiveTier] = useState<BudgetTier>("1200");
  const activeData = roadmapData.find(p => p.phase === activePhase) || roadmapData[0];

  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cta mb-4">
            The 6-Month Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 leading-tight">
            From Foundation to Measurable ROI in 6 Months
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No guessing. No vague promises. Here is exactly what happens each month based on your client's investment level.
          </p>
        </div>

        {/* Budget Tier Toggle */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-sm font-medium text-slate-500 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Budget Tier:
            </span>
            <div className="flex flex-wrap gap-2">
              {budgetTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setActiveTier(tier.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTier === tier.id
                      ? "bg-cta text-white shadow-md"
                      : "bg-white border border-slate-300 text-slate-600 hover:border-cta/50 hover:text-cta"
                  }`}
                >
                  <span className="font-semibold">{tier.label}</span>
                  <span className="hidden sm:inline text-xs ml-1 opacity-75">({tier.hours})</span>
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Based on $60/hr fulfillment rate. Higher budgets unlock faster timelines and deeper execution.
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
          key={`${activePhase}-${activeTier}`}
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
              <p className="text-slate-500 text-sm">{activeData.month} · {budgetTiers.find(t => t.id === activeTier)?.label}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 mb-8">
            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: activeData.color }} />
            <p className="text-lg text-slate-900 font-medium">{activeData.outcome[activeTier]}</p>
          </div>

          {/* Activities and Deliverables */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Key Activities */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Key Activities</h4>
              <ul className="space-y-3">
                {activeData.activities[activeTier].map((activity, index) => (
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
                {activeData.deliverables[activeTier].map((deliverable, index) => (
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
