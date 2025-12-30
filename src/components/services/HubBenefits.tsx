import { ClipboardCheck, MessageSquareText, Target, BellOff, GraduationCap, Users, Zap, TrendingUp, type LucideIcon } from "lucide-react";

interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface HubBenefitsProps {
  hubSlug: string;
}

const benefitsByHub: Record<string, { headline: string; subheadline: string; benefits: BenefitItem[] }> = {
  "local-seo": {
    headline: "What Actually Changes When Local SEO Works",
    subheadline: "The outcomes your clients experience when execution is done right.",
    benefits: [
      {
        icon: Target,
        title: "More Calls From the Map Pack",
        description: "Clients appear in the local 3-pack for their highest-intent keywords. Phone rings more often from people ready to book."
      },
      {
        icon: MessageSquareText,
        title: "Reviews That Build Trust",
        description: "A steady stream of fresh, authentic reviews signals credibility to both Google and future customers."
      },
      {
        icon: Zap,
        title: "Website Traffic That Converts",
        description: "Organic visitors who find what they're looking for, stay longer, and take action. Not vanity metrics."
      },
      {
        icon: Users,
        title: "Visibility Across AI Platforms",
        description: "Optimized content and authority signals help clients surface in ChatGPT, Gemini, and AI Overviews. Not just traditional search."
      },
      {
        icon: TrendingUp,
        title: "Rankings That Compound Over Time",
        description: "Each month builds on the last. Content, links, and signals accumulate into lasting visibility your clients can count on."
      },
      {
        icon: ClipboardCheck,
        title: "Clear Reporting They Understand",
        description: "Monthly reports that show progress in plain language. Rankings, traffic, calls, and leads. No jargon, no confusion."
      }
    ]
  },
  "google-maps": {
    headline: "What Actually Changes When GBP Works",
    subheadline: "Consistent Google Business Profile management transforms client results. Here's what that looks like.",
    benefits: [
      {
        icon: Zap,
        title: "Direct Response from Maps",
        description: "Calls, directions, and website clicks flow directly from optimized profiles. No middleman, no friction."
      },
      {
        icon: MessageSquareText,
        title: "Review Strategy That Builds Trust",
        description: "Systematic review generation and professional responses that convert browsers into callers."
      },
      {
        icon: ClipboardCheck,
        title: "Citation Consistency Handled",
        description: "NAP accuracy across 50+ directories, cleaned up and maintained without you chasing discrepancies."
      },
      {
        icon: BellOff,
        title: "Proactive Issue Resolution",
        description: "Suspension risks, spam reviews, and guideline changes caught early. No surprises for you or your clients."
      },
      {
        icon: GraduationCap,
        title: "GBP Specialists, Not Generalists",
        description: "Team members who live in Google Business Profile daily, not checking a box on a broader checklist."
      },
      {
        icon: TrendingUp,
        title: "Local Pack Visibility Compounds",
        description: "Consistent optimization builds prominence over time. Rankings achieved today keep delivering."
      }
    ]
  }
};

// Default fallback for hubs not yet customized
const defaultBenefits: { headline: string; subheadline: string; benefits: BenefitItem[] } = {
  headline: "What Actually Changes When Fulfillment Works",
  subheadline: "When fulfillment runs smoothly, everything else gets easier.",
  benefits: [
    {
      icon: ClipboardCheck,
      title: "Clear Scope. Fewer Headaches.",
      description: "Everyone knows what's included and how work moves forward. No gray areas."
    },
    {
      icon: MessageSquareText,
      title: "Work You Can Confidently Explain",
      description: "Execution delivered in a way you can stand behind without hedging."
    },
    {
      icon: Target,
      title: "Scoped to Each Client's Market",
      description: "Campaigns built around actual competition and opportunity."
    },
    {
      icon: BellOff,
      title: "Problems Surface Early",
      description: "Structured communication catches issues before they become client-facing problems."
    },
    {
      icon: GraduationCap,
      title: "Marketers, Not Rented Headcount",
      description: "Experienced specialists who understand execution standards."
    },
    {
      icon: TrendingUp,
      title: "Clients Stay Longer",
      description: "Better work means better retention. That's margin you keep."
    }
  ]
};

const HubBenefits = ({ hubSlug }: HubBenefitsProps) => {
  const content = benefitsByHub[hubSlug] || defaultBenefits;

  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            {content.headline}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {content.subheadline}
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {content.benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="text-center p-8 rounded-xl border bg-surface-elevated border-border/50"
            >
              <div className="inline-flex items-center justify-center p-4 rounded-xl mb-5 bg-cta/10 border border-cta/20">
                <benefit.icon className="w-7 h-7 text-cta" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubBenefits;
