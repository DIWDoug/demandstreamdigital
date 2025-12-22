import { useState } from "react";

const WhatWeSolve = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Operations",
      yourRole: "You focus on building client relationships, developing growth strategy, and scaling your agency. Your time stays on high-value activities that drive revenue.",
      ourRole: "We handle the day-to-day execution with structured workflows, defined timelines, and predictable delivery cycles. No more scrambling to meet deadlines or manage freelancer chaos."
    },
    {
      label: "Client Support",
      yourRole: "You remain the primary point of contact for your clients. You own the relationship, set expectations, and deliver the strategic vision they hired you for.",
      ourRole: "We provide fully white-labeled deliverables, reports, and campaign updates you can present as your own. Your clients never know we exist—your brand stays front and center."
    },
    {
      label: "Fulfillment",
      yourRole: "You sell and price services according to your margins. You control the packages, the positioning, and the profit. Your business model stays intact.",
      ourRole: "We execute campaigns behind the scenes with consistency, reliability, and quality. From local SEO to paid media, every deliverable meets agency-grade standards."
    },
    {
      label: "Sales",
      yourRole: "You close deals, manage client expectations, and grow your book of business. Your sales process stays yours—we don't interfere with how you win clients.",
      ourRole: "We provide the capability proof, case studies, and performance data to support your pitch. When prospects ask if you can deliver, you'll have the receipts."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              What We Solve For Agencies
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

          {/* Tab content - Reduced copy, stronger visual separation */}
          <div className="premium-card">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Your Role */}
              <div>
                <p className="text-sm text-text-muted uppercase tracking-widest mb-4">
                  Your Role
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  {tabs[activeTab].yourRole}
                </p>
              </div>

              {/* Divider for mobile */}
              <div className="md:hidden section-divider" />

              {/* Our Role */}
              <div className="md:border-l md:border-border md:pl-12">
                <p className="text-sm text-accent-blue uppercase tracking-widest mb-4">
                  Our Role
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  {tabs[activeTab].ourRole}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeSolve;
