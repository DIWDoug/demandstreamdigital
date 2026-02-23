import { useState } from "react";
import { ClipboardList, Wrench, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import StreamTexture from "@/components/StreamTexture";

const phases = [
  {
    number: "01",
    icon: ClipboardList,
    name: "Audit & Roadmap",
    overview:
      "Before anything is rebuilt or launched, we map the next 6 to 12 months of growth.",
    focusGroups: [
      {
        label: null,
        items: [
          "Evaluating your website and visibility",
          "Reviewing competitors in your service area",
          "Identifying your most profitable services",
          "Analyzing local opportunities",
          "Mapping SEO and paid priorities",
        ],
      },
    ],
    expectIntro: "By the end of this phase, you have clarity.",
    expectNote:
      "You know what needs to be fixed, what should be prioritized, and where growth will come from.",
    expectBullets: [
      "A written strategic roadmap",
      "Defined revenue priorities",
      "Clear execution sequence",
      "Zero guesswork",
    ],
  },
  {
    number: "02",
    icon: Wrench,
    name: "Launch",
    overview:
      "This is where we front-load the heavy work and rebuild your marketing foundation correctly.",
    focusGroups: [
      {
        label: "Website & SEO Foundation",
        items: [
          "Full rebuild with structured service pages",
          "Proper service-area targeting",
          "Conversion-focused content",
          "Technical and on-page SEO",
        ],
      },
      {
        label: "Activation Setup",
        items: [
          "Google Business Profile optimization",
          "Paid Search and Local Service Ads launch",
          "Email marketing strategy",
          "Tracking and reporting setup",
        ],
      },
    ],
    expectIntro: "This is when your online presence changes.",
    expectNote: null,
    expectBullets: [
      "A fully rebuilt, SEO-structured website",
      "Stronger Google Maps positioning",
      "Paid campaigns generating demand",
      "Clear tracking tied to revenue",
    ],
    expectClosing: "The foundation is built correctly.",
  },
  {
    number: "03",
    icon: TrendingUp,
    name: "Improve",
    overview:
      "This is where we operate like your marketing department. Every month, we focus on what will move the business forward fastest.",
    focusGroups: [
      {
        label: "Local SEO Growth",
        items: [
          "Strategic ranking acceleration",
          "Profit-first prioritization",
          "Service-area and content expansion",
        ],
      },
      {
        label: "Authority & Presence",
        items: [
          "Ongoing credibility strengthening",
          "Google Business Profile management",
          "Review engagement",
        ],
      },
      {
        label: "Performance Optimization",
        items: ["Paid campaign refinement", "Email campaign execution"],
      },
    ],
    expectIntro: "This is where growth becomes visible.",
    expectNote: null,
    expectBullets: [
      "Rankings breaking onto page one",
      "More calls tied to high-value services",
      "Increased market visibility",
      "Measurable improvement month over month",
    ],
    expectClosing: "Momentum builds here.",
  },
  {
    number: "04",
    icon: Shield,
    name: "Grow & Retain",
    overview:
      "With traction established, we focus on strengthening your position and expanding your reach.",
    focusGroups: [
      {
        label: null,
        items: [
          "Scaling high-performing services",
          "Expanding into additional service areas",
          "Reinforcing authority signals",
          "Improving conversion performance",
          "Defending top rankings",
        ],
      },
    ],
    expectIntro: "At this stage, you are not chasing visibility.",
    expectNote:
      "You are building long-term stability and market presence.",
    expectBullets: [
      "Broader visibility",
      "More predictable lead flow",
      "Stronger competitive positioning",
    ],
    expectClosing: "Growth compounds.",
  },
];

const managedServices = [
  "SEO",
  "Google Maps",
  "Paid Ads",
  "Email Marketing",
  "Reviews",
  "Tracking & Reporting",
];

const GrowthProcess = () => {
  const sectionRef = useScrollReveal();
  const [activePhase, setActivePhase] = useState(0);
  const phase = phases[activePhase];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 section-light reveal-section relative overflow-hidden"
    >
      <StreamTexture variant="light" opacity={0.08} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
         <div className="text-center mb-8 max-w-3xl mx-auto">
           <p className="text-sm font-semibold uppercase tracking-wider text-cta mb-3">Our Process</p>
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
             From Audit to Growth
           </h2>
          <p className="text-slate-500 text-lg">
            A structured approach. No guesswork. No random tactics.
          </p>
        </div>

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-slate-700 text-base leading-relaxed">
            We do not treat marketing like a monthly experiment. We build it in phases.
            Every phase has a purpose. Every phase builds on the last.
          </p>
        </div>

        {/* Phase Tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {phases.map((p, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activePhase === index
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-primary/30 hover:text-slate-900"
                }`}
              >
                <p.icon className="h-4 w-4" />
                <span className="hidden sm:inline">Phase {p.number}:</span> {p.name}
              </button>
            ))}
          </div>

          {/* Active Phase Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
            {/* Phase header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                <phase.icon className="h-6 w-6" />
              </div>
              <div>
                <span className="text-primary font-semibold text-xs tracking-widest uppercase">
                  Phase {phase.number}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  {phase.name}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8">
              {phase.overview}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What We Focus On */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                  What We Focus On
                </h4>
                <div className="space-y-4">
                  {phase.focusGroups.map((group, gi) => (
                    <div key={gi}>
                      {group.label && (
                        <p className="text-primary font-medium text-sm mb-2">
                          {group.label}
                        </p>
                      )}
                      <ul className="space-y-2">
                        {group.items.map((item, ii) => (
                          <li
                            key={ii}
                            className="flex items-start gap-2 text-slate-600 text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You Can Expect */}
              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                  What You Can Expect
                </h4>
                <p className="text-slate-900 font-medium text-sm mb-1">
                  {phase.expectIntro}
                </p>
                {phase.expectNote && (
                  <p className="text-slate-500 text-sm mb-3">
                    {phase.expectNote}
                  </p>
                )}
                <ul className="space-y-2 mb-3">
                  {phase.expectBullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-2 text-slate-600 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                {phase.expectClosing && (
                  <p className="text-slate-900 font-semibold text-sm">
                    {phase.expectClosing}
                  </p>
                )}
              </div>
            </div>

            {/* 30-Day Roadmap Note (Phase 1 only) */}
            {activePhase === 0 && (
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-slate-500 text-sm leading-relaxed">
                  The 30-Day Strategic Growth Roadmap is a standalone engagement. If you move forward with implementation, a minimum six-month commitment begins after roadmap delivery.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Closing block */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Every Channel Working Together. That's the Difference.
          </h3>
          <p className="text-slate-600 mb-6">
            We do not sell isolated services. All working together under one roof.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {managedServices.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-sm mb-8">
            You get strategy, execution, and ongoing refinement — under one roof.
          </p>
          <Link
            to="/contact"
            className="btn-cta group inline-flex items-center gap-2"
          >
            Start With a Growth Roadmap
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GrowthProcess;
