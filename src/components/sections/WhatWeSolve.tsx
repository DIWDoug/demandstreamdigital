import { useState, useEffect, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import StreamTexture from "@/components/StreamTexture";


const WhatWeSolve = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Market & Competitor Analysis",
      yourRole: "Share your goals, service area, and the competitors you see in the field. We handle the research.",
      yourRoleDetails: [
        "Tell us which markets and services matter most",
        "Share what you know about your competition",
        "Identify your growth priorities"
      ],
      ourRole: "We analyze your local market, competitor positioning, and search landscape to identify the biggest opportunities.",
      ourRoleDetails: [
        "Competitive keyword and ranking analysis",
        "Local search opportunity mapping",
        "Market gap identification"
      ]
    },
    {
      label: "Strategy Development",
      yourRole: "Review and approve a clear marketing plan built around your business goals and budget.",
      yourRoleDetails: [
        "Understand the plan before anything launches",
        "Set realistic expectations together",
        "Know exactly what you're investing in"
      ],
      ourRole: "We build a custom strategy combining the right channels (SEO, ads, maps, reputation) based on your market data.",
      ourRoleDetails: [
        "Channel selection based on your market and budget",
        "Prioritized action plan with clear milestones",
        "Transparent pricing and deliverables"
      ]
    },
    {
      label: "SEO & Paid Campaign Launch",
      yourRole: "Focus on running your business while we handle the marketing execution.",
      yourRoleDetails: [
        "No need to learn SEO or Google Ads",
        "We handle setup, targeting, and optimization",
        "Campaigns launch on your timeline"
      ],
      ourRole: "We launch and manage SEO, Google Ads, Local Services Ads, and Google Maps campaigns designed to generate calls.",
      ourRoleDetails: [
        "Keyword targeting for high-intent local searches",
        "Ad campaigns built around emergency and installation searches",
        "Google Business Profile optimization"
      ]
    },
    {
      label: "Website & Conversion Optimization",
      yourRole: "You provide feedback on design and messaging. We make sure your website turns visitors into calls.",
      yourRoleDetails: [
        "Review your website with fresh eyes",
        "Approve changes before they go live",
        "See conversion improvements in your call volume"
      ],
      ourRole: "We improve your website for speed, mobile experience, and conversion so the traffic we drive actually turns into booked jobs.",
      ourRoleDetails: [
        "Landing pages built for local service searches",
        "Click-to-call and form optimization",
        "Page speed and mobile improvements"
      ]
    },
    {
      label: "Review & Reputation Growth",
      yourRole: "Deliver great service. We make it easy for happy customers to leave reviews.",
      yourRoleDetails: [
        "Focus on what you do best: the work",
        "Watch your online reputation strengthen",
        "More reviews means more trust and more calls"
      ],
      ourRole: "We implement review systems and manage your online reputation so new customers trust you before they ever pick up the phone.",
      ourRoleDetails: [
        "Automated review request systems",
        "Professional review response management",
        "Reputation monitoring across platforms"
      ]
    },
    {
      label: "Ongoing Optimization & Reporting",
      yourRole: "You see real, measurable results: more phone calls, more booked jobs, more revenue. Not vanity metrics.",
      yourRoleDetails: [
        "Track exactly how many calls and leads come from marketing",
        "See your Google rankings climb for the searches that matter",
        "Watch your cost per lead drop over time"
      ],
      ourRole: "We continuously optimize campaigns and provide clear reporting that connects marketing spend to revenue.",
      ourRoleDetails: [
        "Monthly performance reports in plain English",
        "Continuous campaign optimization",
        "ROI tracking that ties spend to booked jobs"
      ]
    }
  ];

  const renderDetailText = (detail: string) => {
    return detail;
  };

  return (
    <TooltipProvider>
      <section className="pt-24 pb-8 lg:pt-32 lg:pb-10 bg-background relative overflow-hidden">
        <StreamTexture variant="dark" opacity={0.08} />
        <div className="absolute top-0 left-0 right-0 z-[1]">
          <div className="section-divider" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                How Digital Marketing Works for Plumbing & HVAC
              </h2>
            </div>

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

            <div className="premium-card py-10">
              <div className="grid md:grid-cols-2 gap-10 md:gap-12">
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

                <div className="md:hidden section-divider" />

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
                        <span>{renderDetailText(detail)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default WhatWeSolve;
