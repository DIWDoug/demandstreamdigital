import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatWeSolve = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Expertise",
      yourRole: "You stay in your lane: strategy, relationships, and growing your agency. Leave the technical heavy lifting to people who live and breathe it every day.",
      yourRoleDetails: [
        "Answer client questions with confidence, backed by real specialists",
        "Offer services you couldn't staff internally without major overhead",
        "Stop pretending to be an expert in everything"
      ],
      ourRole: "We go deep so you don't have to. Local search, paid media, reputation. Our team eats, sleeps, and breathes this stuff. You get senior-level execution without the senior-level payroll.",
      ourRoleDetails: [
        "Specialists who've run thousands of local campaigns",
        "Constant training on platform changes and algorithm shifts",
        "Experience across 50+ industries, from plumbers to plastic surgeons"
      ]
    },
    {
      label: "Transparency",
      yourRole: "You stay informed without doing the work. No mysteries, no vague updates. Just straight answers and real data you can relay to clients without breaking a sweat.",
      yourRoleDetails: [
        "Check campaign status anytime without chasing anyone down",
        "Get heads-up on issues before they become client problems",
        "Actually understand what's happening so you can speak to it"
      ],
      ourRole: "We keep you in the loop with clear reporting and honest communication. You'll never be blindsided in a client meeting or left scrambling for answers.",
      ourRoleDetails: [
        "Weekly updates written for humans, not search nerds",
        "Live dashboards you can screenshot and send",
        "No jargon dumps. Just what matters and why"
      ]
    },
    {
      label: "Growth",
      yourRole: "You focus on landing new business and expanding existing accounts. We make sure you can actually deliver what you sell, so you stop leaving money on the table.",
      yourRoleDetails: [
        "Pitch bigger deals knowing you have the bench to back it up",
        "Stop turning away work because you're maxed out",
        "Scale revenue without scaling headcount first"
      ],
      ourRole: "We arm you with proof: real results, real case studies, real numbers. When a prospect asks if you can handle their account, you won't have to bluff.",
      ourRoleDetails: [
        "Battle-tested results you can reference in proposals",
        "Fast onboarding so new clients feel handled from day one",
        "Capacity that flexes with your pipeline, not against it"
      ]
    },
    {
      label: "Workflow",
      yourRole: "You run your agency, not a fulfillment center. Your mornings go to strategy and sales, not chasing deliverables or managing task lists.",
      yourRoleDetails: [
        "Reclaim the time you lose to project management chaos",
        "Trust that deadlines get hit without your constant oversight",
        "Build the business instead of babysitting the work"
      ],
      ourRole: "We run tight processes so you don't have to micromanage. Defined timelines, predictable delivery, zero fire drills. Your operations become boring, in the best way.",
      ourRoleDetails: [
        "Structured sprints with clear milestones and owners",
        "Dedicated account managers who know your clients by name",
        "Systems built for agencies, not adapted from something else"
      ]
    },
    {
      label: "White Label",
      yourRole: "You own the client relationship completely. Every report, every update, every win comes from you. We're invisible by design.",
      yourRoleDetails: [
        "Present our work as your own without any awkward explanations",
        "Control when and how clients hear about results",
        "Build your brand equity, not someone else's"
      ],
      ourRole: "We disappear behind your brand. Custom reports, your colors, your voice. Your clients will never know we exist, and that's exactly the point.",
      ourRoleDetails: [
        "Fully branded deliverables ready for client presentation",
        "Summaries written the way you'd write them",
        "Zero co-branding, zero 'powered by' footers, zero visibility"
      ]
    },
    {
      label: "Execution",
      yourRole: "You set the pricing, you keep the margin, you control the packages. We never touch your client relationships or your revenue model.",
      yourRoleDetails: [
        "Mark up our work however your market supports",
        "Bundle services in ways that make sense for your positioning",
        "Protect your margins without cutting corners on quality"
      ],
      ourRole: "We deliver the work consistently, reliably, at the standard your reputation depends on. Every campaign, every month, no drop-offs.",
      ourRoleDetails: [
        "Processes refined over a decade of local marketing",
        "QA checkpoints before anything goes live",
        "Same quality at 5 clients or 50. We scale with you"
      ]
    }
  ];

  // Helper to render detail text with tooltip for Easter egg
  const renderDetailText = (detail: string) => {
    if (detail.includes("50+ industries")) {
      const parts = detail.split("50+ industries");
      return (
        <>
          {parts[0]}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline decoration-dotted cursor-help">50+ industries</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Yeah, we even talked with Traffic Junkie once. Don't Google it.</p>
            </TooltipContent>
          </Tooltip>
          {parts[1]}
        </>
      );
    }
    return detail;
  };

  return (
    <TooltipProvider>
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
