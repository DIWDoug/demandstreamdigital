import { useState } from "react";

const WhatWeSolve = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Operations",
      yourRole: "You focus on client relationships and growth strategy.",
      ourRole: "We handle execution with structured workflows and predictable delivery cycles."
    },
    {
      label: "Client Support",
      yourRole: "You remain the primary point of contact for your clients.",
      ourRole: "We provide white-label deliverables and reporting you can present as your own."
    },
    {
      label: "Fulfillment",
      yourRole: "You sell and price services according to your margins.",
      ourRole: "We execute campaigns behind the scenes with consistency and reliability."
    },
    {
      label: "Sales",
      yourRole: "You close deals and manage client expectations.",
      ourRole: "We provide the capability proof and case studies to support your pitch."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
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
