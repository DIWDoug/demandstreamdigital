import { useState } from "react";

const WhatWeSolve = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Operations",
      yourRole: "You focus on building client relationships, developing growth strategy, and scaling your agency. Your time stays on high-value activities that drive revenue.",
      yourRoleDetails: [
        "Spend your mornings on strategy calls, not task management",
        "Build relationships that lead to referrals and upsells",
        "Focus on agency growth instead of putting out fires"
      ],
      ourRole: "We handle the day-to-day execution with structured workflows, defined timelines, and predictable delivery cycles. No more scrambling to meet deadlines or manage freelancer chaos.",
      ourRoleDetails: [
        "Weekly sprint cycles with clear deliverable schedules",
        "Dedicated project managers who know your accounts",
        "Real-time dashboards so you always know where things stand"
      ]
    },
    {
      label: "Client Support",
      yourRole: "You remain the primary point of contact for your clients. You own the relationship, set expectations, and deliver the strategic vision they hired you for.",
      yourRoleDetails: [
        "Present insights and recommendations as your own expertise",
        "Control the narrative and timing of all client communications",
        "Build trust through consistent, high-quality delivery"
      ],
      ourRole: "We provide fully white-labeled deliverables, reports, and campaign updates you can present as your own. Your clients never know we exist. Your brand stays front and center.",
      ourRoleDetails: [
        "Custom-branded reports with your logo and colors",
        "Executive summaries written in your voice",
        "Data visualizations that make you look sharp in QBRs"
      ]
    },
    {
      label: "Fulfillment",
      yourRole: "You sell and price services according to your margins. You control the packages, the positioning, and the profit. Your business model stays intact.",
      yourRoleDetails: [
        "Set your own pricing. We never talk to your clients",
        "Bundle services however makes sense for your market",
        "Keep 100% of the margin you build into your proposals"
      ],
      ourRole: "We execute campaigns behind the scenes with consistency, reliability, and quality. From local SEO to paid media, every deliverable meets agency-grade standards.",
      ourRoleDetails: [
        "SOPs built from 10+ years of local marketing experience",
        "Quality checks at every stage before anything goes live",
        "Scalable processes that work whether you have 5 or 50 clients"
      ]
    },
    {
      label: "Sales",
      yourRole: "You close deals, manage client expectations, and grow your book of business. Your sales process stays yours—we don't interfere with how you win clients.",
      yourRoleDetails: [
        "Sell with confidence knowing you can actually deliver",
        "Take on bigger accounts without hiring ahead of revenue",
        "Say yes to opportunities you used to turn down"
      ],
      ourRole: "We provide the capability proof, case studies, and performance data to support your pitch. When prospects ask if you can deliver, you'll have the receipts.",
      ourRoleDetails: [
        "Access to anonymized case studies across industries",
        "Performance benchmarks that help you set expectations",
        "Onboarding support that makes new clients feel handled"
      ]
    },
    {
      label: "Competency",
      yourRole: "You stay focused on strategic vision and client relationships. You don't need to become an expert in every channel or tactic—that's what partners are for.",
      yourRoleDetails: [
        "Trust that the work is done by specialists, not generalists",
        "Lean on our expertise when clients ask tough technical questions",
        "Expand your service offerings without expanding your learning curve"
      ],
      ourRole: "We bring deep, specialized knowledge across local SEO, paid media, and reputation management. Our team stays current so yours doesn't have to.",
      ourRoleDetails: [
        "Certified specialists in Google Ads, Meta, and local search",
        "Continuous training on algorithm updates and best practices",
        "Industry-specific experience across 50+ verticals"
      ]
    }
  ];

  return (
    <section className="pt-24 pb-8 lg:pt-32 lg:pb-10 bg-surface-dark relative">
      {/* Section divider from ContinuingEducation */}
      <div className="absolute top-0 left-0 right-0">
        <div className="section-divider" />
      </div>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="mb-6 text-foreground">
              How We Keep Your Clients<br />Coming Back
            </h2>
          </div>

          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === index
                    ? "bg-accent-blue text-white"
                    : "bg-surface-elevated text-text-secondary hover:text-foreground border border-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content - Expanded copy with details */}
          <div className="premium-card py-10">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12">
              {/* Your Role */}
              <div>
                <p className="text-sm text-text-muted uppercase tracking-widest mb-4">
                  Your Role
                </p>
                <p className="text-lg text-foreground mb-6">
                  {tabs[activeTab].yourRole}
                </p>
                <ul className="space-y-3">
                  {tabs[activeTab].yourRoleDetails.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-2.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider for mobile */}
              <div className="md:hidden section-divider" />

              {/* Our Role */}
              <div className="md:border-l md:border-border md:pl-12">
                <p className="text-sm text-accent-blue uppercase tracking-widest mb-4">
                  Our Role
                </p>
                <p className="text-lg text-foreground mb-6">
                  {tabs[activeTab].ourRole}
                </p>
                <ul className="space-y-3">
                  {tabs[activeTab].ourRoleDetails.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeSolve;
