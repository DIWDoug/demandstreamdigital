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
      label: "Expertise",
      yourRole: "You focus on running your plumbing or HVAC business — scheduling jobs, managing crews, keeping customers happy. The marketing gets handled by people who've done it for years.",
      yourRoleDetails: [
        "Answer customer questions knowing your online presence is handled",
        "Offer services confidently backed by strong local visibility",
        "Focus on what you're best at instead of learning marketing"
      ],
      ourRole: "We go deep on local marketing so you don't have to. Local search, paid ads, reputation management — senior-level execution without the senior-level payroll.",
      ourRoleDetails: [
        "Specialists who've run thousands of local campaigns",
        "Constant training on platform changes and algorithm shifts",
        "Deep experience in plumbing, HVAC, and home services"
      ]
    },
    {
      label: "Transparency",
      yourRole: "You stay informed without doing the work. No mysteries, no vague updates. Just clear answers and real data showing how marketing is driving calls.",
      yourRoleDetails: [
        "Check campaign status anytime without chasing anyone down",
        "Get a heads-up on issues before they cost you money",
        "Actually understand what's happening so you feel confident"
      ],
      ourRole: "We keep you in the loop with clear reporting and honest communication. You'll never be caught off guard by a bad month.",
      ourRoleDetails: [
        "Weekly updates written for business owners, not marketing nerds",
        "Live dashboards showing calls, leads, and rankings",
        "Plain language. Just what matters and why"
      ]
    },
    {
      label: "Growth",
      yourRole: "You focus on delivering great service and expanding your territory. We make sure the phone keeps ringing.",
      yourRoleDetails: [
        "Expand into new service areas knowing marketing will follow",
        "Take on more jobs without worrying about lead flow",
        "Scale revenue predictably month over month"
      ],
      ourRole: "We build marketing systems that compound over time. SEO gains build on each other. Reputation grows. Your cost per lead drops as your brand strengthens.",
      ourRoleDetails: [
        "Real results you can see in your call volume",
        "Fast onboarding so new campaigns start generating quickly",
        "Capacity that grows with your business"
      ]
    },
    {
      label: "Workflow",
      yourRole: "You run your business, not your marketing. Your time goes to customers and crews, not chasing deliverables or managing campaigns.",
      yourRoleDetails: [
        "Reclaim the hours you lose to figuring out marketing",
        "Trust that campaigns are running without constant check-ins",
        "Grow the business instead of managing the marketing"
      ],
      ourRole: "We run tight processes so you don't have to micromanage. Defined timelines, predictable delivery, minimal surprises.",
      ourRoleDetails: [
        "Structured campaigns with clear milestones",
        "Dedicated account managers who know your business",
        "Systems built for service businesses, not adapted from something else"
      ]
    },
    {
      label: "Results",
      yourRole: "You see real, measurable results — more phone calls, more booked jobs, more revenue. Not vanity metrics that don't pay the bills.",
      yourRoleDetails: [
        "Track exactly how many calls and leads come from marketing",
        "See your Google rankings climb for the searches that matter",
        "Watch your online reputation strengthen month over month"
      ],
      ourRole: "We measure what matters: calls, leads, jobs booked, revenue generated. Everything we do ties back to your bottom line.",
      ourRoleDetails: [
        "Call tracking so you know which leads come from us",
        "ROI reporting that connects marketing spend to revenue",
        "Continuous optimization to lower your cost per lead"
      ]
    },
    {
      label: "Execution",
      yourRole: "You set the goals, we handle the details. Every campaign is executed with the same quality and attention to detail.",
      yourRoleDetails: [
        "Know that your marketing runs consistently every month",
        "See steady improvement without micromanaging",
        "Trust the process and focus on your operations"
      ],
      ourRole: "We deliver the work consistently, at the standard your reputation depends on. Every campaign, every month.",
      ourRoleDetails: [
        "Processes refined over a decade of local marketing",
        "QA checkpoints before anything goes live",
        "Same quality whether you have 1 location or 10"
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
                How We Keep Your<br />Business Growing
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
