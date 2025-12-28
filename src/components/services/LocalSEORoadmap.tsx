import { useState } from "react";
import { CheckCircle, FileSearch, Target, Wrench, FileText, Link2, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

interface PhaseData {
  phase: number;
  title: string;
  focus: string;
  icon: typeof FileSearch;
  color: string;
  activities: string[];
  deliverables: string[];
}

const roadmapData: PhaseData[] = [
  {
    phase: 1,
    title: "Discovery & Foundation",
    focus: "Audit, Research & Strategy",
    icon: FileSearch,
    color: "hsl(224, 60%, 55%)",
    activities: [
      "Complete site audit and existing inventory assessment",
      "Comprehensive keyword research and opportunity mapping",
      "Competitive landscape and backlink gap analysis",
      "Competitive citation gap analysis",
      "Link detox evaluation and toxic backlink assessment",
      "Technical SEO foundation evaluation",
      "Hub and spoke content gap analysis",
      "Tone, style, and brand voice documentation"
    ],
    deliverables: [
      "SEO Audit Report with prioritized recommendations",
      "Keyword Research Document with search volumes and difficulty",
      "Competitive Analysis with actionable insights",
      "Link Detox Report with disavow recommendations (if needed)",
      "Strategic Roadmap customized to goals"
    ]
  },
  {
    phase: 2,
    title: "Technical & On-Page",
    focus: "Fix, Optimize & Structure",
    icon: Wrench,
    color: "hsl(76, 42%, 41%)",
    activities: [
      "Technical SEO fixes (crawlability, indexation, Core Web Vitals)",
      "On-page optimization for priority pages",
      "Schema markup implementation (LocalBusiness, FAQ, Service)",
      "Internal linking structure improvements",
      "NAP consistency audit and corrections",
      "Google Business Profile optimization"
    ],
    deliverables: [
      "Technical fixes implemented or developer specs provided",
      "Optimized title tags, meta descriptions, and headers",
      "Schema markup deployed and validated",
      "GBP fully optimized with all features utilized"
    ]
  },
  {
    phase: 3,
    title: "Content Development",
    focus: "Create & Publish",
    icon: FileText,
    color: "hsl(35, 90%, 50%)",
    activities: [
      "Service area page creation or optimization",
      "Location-specific landing pages",
      "Blog content production (2-4 articles)",
      "FAQ content development",
      "Content calendar execution begins",
      "Internal linking from new content"
    ],
    deliverables: [
      "Service area pages live and indexed",
      "Location pages targeting key markets",
      "Published blog content with keyword targeting",
      "FAQ sections addressing common queries"
    ]
  },
  {
    phase: 4,
    title: "Authority Building",
    focus: "Links & Citations",
    icon: Link2,
    color: "hsl(280, 60%, 55%)",
    activities: [
      "Local link outreach campaign launch",
      "Citation building across 50+ directories",
      "Guest post opportunities identified and pitched",
      "Local sponsorship and partnership outreach",
      "Review generation strategy implementation",
      "Continued content production"
    ],
    deliverables: [
      "5-10 quality local/industry backlinks acquired",
      "Citations submitted to major aggregators",
      "Guest posts published on relevant sites",
      "Review generation system in place"
    ]
  },
  {
    phase: 5,
    title: "Optimization & Scale",
    focus: "Refine & Expand",
    icon: Target,
    color: "hsl(190, 70%, 45%)",
    activities: [
      "Performance analysis and strategy refinement",
      "Expand content to secondary keywords",
      "Additional service area page development",
      "Link building momentum continued",
      "GBP posting and engagement optimization",
      "Conversion rate optimization on landing pages"
    ],
    deliverables: [
      "Mid-campaign performance report",
      "Expanded content targeting new opportunities",
      "Additional backlinks from ongoing outreach",
      "Optimized landing pages for better conversions"
    ]
  },
  {
    phase: 6,
    title: "Results & Roadmap",
    focus: "Report & Plan Forward",
    icon: TrendingUp,
    color: "hsl(340, 70%, 50%)",
    activities: [
      "Comprehensive performance analysis",
      "Ranking improvements documented",
      "Traffic and conversion attribution",
      "ROI analysis and reporting",
      "Next phase strategy development",
      "Ongoing maintenance plan established"
    ],
    deliverables: [
      "Campaign Results Report with full metrics",
      "Year-over-year comparison (if applicable)",
      "Next phase strategic recommendations",
      "Ongoing optimization plan and calendar"
    ]
  }
];

const LocalSEORoadmap = () => {
  const [activePhase, setActivePhase] = useState(1);
  const activeData = roadmapData.find(p => p.phase === activePhase) || roadmapData[0];
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 section-light relative overflow-hidden reveal-section">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 transition-colors duration-700"
          style={{ background: activeData.color }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(76,42%,41%)]/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(224,60%,55%)] mb-4">
            What to Expect
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Your Local SEO Roadmap
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every local SEO engagement follows a proven framework. Here's what a typical campaign looks like, from initial audit through measurable results. 
            <span className="block mt-3 text-gray-900 font-medium">
              Timeline is budget-dependent. SEO is time. How quickly we move between phases depends on your investment level and competitive landscape.
            </span>
          </p>
        </div>

        {/* Timeline navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 lg:gap-0 lg:grid lg:grid-cols-6">
            {roadmapData.map((phase) => {
              const isActive = phase.phase === activePhase;
              const Icon = phase.icon;
              
              return (
                <button
                  key={phase.phase}
                  onClick={() => setActivePhase(phase.phase)}
                  className={`relative flex-1 min-w-[140px] lg:min-w-0 p-4 lg:p-6 text-left transition-all duration-300 border-b-2 lg:border-b-4 ${
                    isActive 
                      ? "bg-white/50" 
                      : "hover:bg-white/30"
                  }`}
                  style={{
                    borderColor: isActive ? phase.color : "hsl(220, 13%, 85%)"
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon 
                      className="w-5 h-5 transition-colors duration-300"
                      style={{ color: isActive ? phase.color : "hsl(220, 10%, 50%)" }}
                    />
                    <span 
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      Phase {phase.phase}
                    </span>
                  </div>
                  <h3 className={`text-sm lg:text-base font-medium transition-colors duration-300 ${
                    isActive ? "text-gray-900" : "text-gray-600"
                  }`}>
                    {phase.title}
                  </h3>
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
            className="rounded-2xl border p-6 lg:p-8"
            style={{
              background: "linear-gradient(135deg, white, hsl(220, 20%, 98%))",
              borderColor: `${activeData.color}30`
            }}
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <activeData.icon 
                className="w-6 h-6"
                style={{ color: activeData.color }}
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {activeData.title}
                </h3>
                <p className="text-sm text-gray-500">{activeData.focus}</p>
              </div>
            </div>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
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
                  <span className="text-gray-600">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div 
            className="rounded-2xl border p-6 lg:p-8 bg-white"
            style={{ borderColor: "hsl(220, 13%, 90%)" }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">
              What You Receive
            </h4>
            <ul className="space-y-4">
              {activeData.deliverables.map((deliverable, index) => (
                <li 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                    <div 
                      className="p-4 rounded-xl border transition-all duration-300 hover:shadow-md"
                      style={{
                        background: "linear-gradient(135deg, hsl(220, 20%, 98%), white)",
                        borderColor: "hsl(220, 13%, 90%)"
                      }}
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
                        <span className="text-gray-900 font-medium pt-1">
                          {deliverable}
                        </span>
                      </div>
                    </div>
                </li>
              ))}
            </ul>

            {/* Progress indicator */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>Roadmap Progress</span>
                <span>Phase {activePhase} of 6</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
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
        <div className="mt-12 p-6 rounded-xl bg-white/50 border border-gray-200">
          <p className="text-gray-600 text-center">
            <span className="font-semibold text-gray-900">Pace is flexible:</span>{" "}
            Some clients move through all six phases in six months. Others spread it across a year. 
            The timeline adapts to your budget, competitive dynamics, and business priorities, but the sequence remains proven.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalSEORoadmap;