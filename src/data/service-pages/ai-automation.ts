import { Bot, Zap, Phone, MessageSquare, Calendar, BarChart3, Settings, Users, Target, Mail, Search, Map, PenTool, Repeat, AlertCircle } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const aiAutomationConfig: ServicePageConfig = {
  slug: "ai-automation",
  title: "AI Automation",
  metaTitle: "AI Automation for Plumbing & HVAC Companies | Missed Call Recovery & Lead Follow-Up | Demand Stream Digital",
  metaDescription: "Missed call recovery, estimate follow-up, and lead reactivation on autopilot. AI automation built specifically for plumbing and HVAC dispatch operations.",
  canonicalUrl: `${SITE_URL}/ai-automation`,
  keywords: "AI automation plumbing HVAC, missed call recovery, lead follow-up automation, AI chatbot plumbing, automated scheduling HVAC, CRM automation trades",

  hero: {
    headline: "AI Automation for",
    highlightedText: "Plumbing & HVAC Companies",
    subheadline: "Every missed call, unanswered estimate, and cold lead is lost revenue. AI-powered workflows respond instantly, follow up automatically, and keep your pipeline moving — even when your team is on the truck.",
    qualifierLine: "You stay focused on running jobs. The automation handles the follow-up that turns leads into booked calls.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Built specifically for plumbing and HVAC companies that are losing revenue to slow follow-up."
  },

  problem: {
    eyebrow: "The Revenue Leak",
    headline: "Why Plumbing & HVAC Companies Lose Jobs After Already Earning Them",
    intro: "The lead came in. You earned it with your SEO, your ads, your reputation. Then it slipped through. A missed call. An estimate that sat in the inbox for four days. A prospect who searched three more competitors before you followed up. This is the most expensive problem in the trades — and it's almost entirely fixable.",
    painPoints: [
      {
        icon: Phone,
        title: "Missed Calls with No Recovery",
        body: "A homeowner calls during a job. No answer. No callback. They move on. Most trade businesses have no system to automatically re-engage these missed calls within minutes — the window when conversion rates are highest."
      },
      {
        icon: MessageSquare,
        title: "Estimates That Sit Unanswered",
        body: "You sent the estimate. The homeowner went quiet. Three days later they booked someone else. Without an automated follow-up sequence, your pipeline relies on manual memory — and manual memory doesn't scale."
      },
      {
        icon: Calendar,
        title: "Booking Friction That Costs Jobs",
        body: "Customers want to book at 9pm after getting quotes. If booking requires a phone call during business hours, they book the competitor who had an online scheduler. Friction is attrition."
      },
      {
        icon: Users,
        title: "Cold Leads Left to Go Cold Forever",
        body: "Your CRM has contacts who requested quotes 60, 90, 120 days ago. No follow-up. No reactivation. Those are real jobs sitting in a database doing nothing — because no one has time to manually work the list."
      },
      {
        icon: AlertCircle,
        title: "Review Requests Nobody Remembers to Send",
        body: "The job was great. The customer was happy. You meant to ask for a review. Three weeks later the moment has passed. Automated post-job review requests capture the positive sentiment before it fades."
      }
    ],
    closingLine: "We build AI workflows that close these gaps — without adding to your team's workload.",
    closingHighlight: "The revenue was already earned. Automation is what actually captures it.",
    ctaText: "Start the Conversation"
  },

  outcomes: {
    headline: "What Changes for Your Business",
    subheadline: "The measurable shifts when automation is working correctly.",
    items: [
      {
        title: "Missed Calls Recovered Within Minutes",
        description: "An AI text message goes out the moment a call is missed. The homeowner gets an instant response, keeps their attention on your business, and gets a path to book — before they dial the next number on the list."
      },
      {
        title: "Estimate Follow-Up on Autopilot",
        description: "Multi-touch follow-up sequences launch the moment an estimate is sent. Reminders, value-adds, urgency nudges — all without manual effort. More estimates convert. Pipeline stays active."
      },
      {
        title: "24/7 Booking Without Staff",
        description: "An AI scheduling assistant answers common questions, qualifies the job type, and gets the appointment on the calendar. Any time of day. Any day of the week."
      },
      {
        title: "Dormant Leads Reactivated",
        description: "Automated reactivation campaigns reach into your existing contact list and re-engage cold leads with relevant, timely messages. Jobs you thought were lost come back."
      },
      {
        title: "Reviews Requested Consistently",
        description: "Post-job automation sends review requests at the optimal moment — while the job is fresh and customer satisfaction is highest. Consistent reviews build ranking signals over time."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Build",
    headline: "From Audit to Active Automation",
    subheadline: "We map your current lead flow, identify the highest-value gaps, and deploy automations sequentially — starting with the fastest revenue recovery.",
    phases: [
      {
        phase: 1,
        name: "Audit & Architecture",
        title: "Map the Revenue Leaks",
        description: "Before building anything, we document exactly where leads are falling through and where automation will have the highest immediate impact.",
        activities: [
          "Current lead flow documentation",
          "CRM and phone system audit",
          "Missed call volume analysis",
          "Estimate conversion rate baseline",
          "Existing follow-up sequence review",
          "Platform compatibility assessment",
          "Automation stack selection",
          "Priority sequencing and roadmap"
        ],
        icon: Settings,
        color: "hsl(213, 64%, 45%)"
      },
      {
        phase: 2,
        name: "Core Automations",
        title: "Missed Call Recovery & Estimate Follow-Up",
        description: "The highest-ROI automations go live first. Missed call recovery and estimate follow-up sequences typically recapture 15-25% of previously lost opportunities.",
        activities: [
          "Missed call AI text response setup",
          "Estimate follow-up sequence (3-5 touch)",
          "CRM integration and trigger configuration",
          "Response message copywriting",
          "A/B test variants for messages",
          "Phone number and send configuration",
          "Team notification workflows",
          "Performance baseline tracking"
        ],
        icon: Zap,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 3,
        name: "Booking & Scheduling",
        title: "24/7 AI Scheduling Assistant",
        description: "Deploy an AI assistant that handles inbound inquiries, qualifies job type and urgency, and books appointments directly into your calendar.",
        activities: [
          "AI chatbot configuration and training",
          "Service type qualification flows",
          "Calendar integration and availability sync",
          "Dispatch routing logic",
          "Escalation triggers for complex inquiries",
          "Website and Google Business Profile integration",
          "Testing across devices and entry points"
        ],
        icon: Calendar,
        color: "hsl(160, 60%, 40%)"
      },
      {
        phase: 4,
        name: "Long-Term Pipeline",
        title: "Reactivation, Reviews & Optimization",
        description: "Expand into dormant lead reactivation, post-job review collection, and seasonal re-engagement campaigns — then continuously optimize based on performance data.",
        activities: [
          "Cold lead reactivation campaign build",
          "Post-job review request automation",
          "Seasonal and maintenance reminder sequences",
          "Win-back campaigns for past customers",
          "Automation performance reporting",
          "Message and sequence optimization",
          "Cross-channel coordination with paid ads and SEO"
        ],
        icon: Repeat,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Most businesses see measurable improvements in lead conversion within the first 30 days of core automation deployment."
  },

  buildingBlocks: {
    eyebrow: "The Automations We Deploy",
    headline: "Built Around the Gaps That Cost You the Most",
    subheadline: "Each automation is scoped to your specific platform stack, business model, and lead volume.",
    blocks: [
      {
        title: "Missed Call Recovery",
        slug: "missed-call-recovery",
        description: "Instant AI text response when a call goes unanswered. Keeps the lead engaged and provides a path to book before they call someone else.",
        icon: Phone
      },
      {
        title: "Estimate Follow-Up",
        slug: "estimate-followup",
        description: "Multi-touch automated sequences that follow up on open estimates with reminders, value reinforcement, and urgency nudges.",
        icon: MessageSquare
      },
      {
        title: "AI Scheduling Assistant",
        slug: "ai-scheduling",
        description: "Conversational AI that qualifies job type, checks availability, and books appointments 24/7 without human involvement.",
        icon: Calendar
      },
      {
        title: "Lead Reactivation",
        slug: "lead-reactivation",
        description: "Campaigns that reach into your existing CRM and re-engage cold leads with relevant, timely messages to recover previously lost opportunities.",
        icon: Zap
      },
      {
        title: "Review Request Automation",
        slug: "review-requests",
        description: "Post-job sequences that request reviews at the optimal moment — right after job completion when satisfaction is highest.",
        icon: Target
      },
      {
        title: "Performance Reporting",
        slug: "automation-reporting",
        description: "Dashboard visibility into automation performance: recovery rates, conversion rates, booking volume, and revenue attribution.",
        icon: BarChart3
      }
    ]
  },

  qualification: {
    eyebrow: "Before We Talk",
    headline: "We Are Selective About Who We Work With",
    subheadline: "Automation delivers the highest returns in specific business conditions. Here's who's the right fit — and who should wait.",
    goodFit: [
      {
        point: "You're losing jobs to missed calls or slow follow-up",
        detail: "If your team is on the truck and calls go unanswered regularly, missed call recovery automation will have an immediate, measurable impact on booked jobs."
      },
      {
        point: "You have an existing CRM or can adopt one",
        detail: "Automation requires a system of record. Whether you're on ServiceTitan, Jobber, GoHighLevel, or a basic CRM, we work with your stack — or help you get on one."
      },
      {
        point: "You're sending estimates that don't convert",
        detail: "If you're generating estimates but seeing a low close rate, automated follow-up sequences typically add 15-25% more conversions without changing your pricing."
      },
      {
        point: "You want to grow without proportionally growing headcount",
        detail: "Automation extends your team's capacity. More leads get handled, more bookings get made, more reviews get requested — without adding a CSR."
      },
      {
        point: "You have a measurable lead volume to optimize",
        detail: "Automation amplifies existing lead flow. You need at least 30-50 inbound leads per month to see meaningful performance data and optimization opportunities."
      }
    ],
    notFit: [
      {
        point: "You have fewer than 30 inbound leads per month",
        detail: "Below a certain lead volume, automation infrastructure costs outweigh benefits. Build lead flow first — then automate it."
      },
      {
        point: "You don't have or won't adopt a CRM",
        detail: "Automation requires a data layer. Without a CRM, there's no place for contacts to live, sequences to trigger, or performance to track."
      },
      {
        point: "You expect automation to replace all human interaction",
        detail: "Automation handles the mechanical parts — follow-up, reminders, scheduling. Complex jobs, pricing conversations, and relationship-building still need people."
      },
      {
        point: "You want a one-time setup with no ongoing optimization",
        detail: "The best automations are continuously refined based on performance data. A set-it-and-forget-it mindset produces diminishing results over time."
      }
    ],
    ctaText: "Let's See if Automation Fits Your Business"
  },

  faq: {
    headline: "Frequently Asked Questions",
    groups: [
      {
        category: "Results & ROI",
        items: [
          {
            question: "How quickly will I see results from automation?",
            answer: "Missed call recovery and estimate follow-up automations typically show measurable improvements within the first 2-4 weeks. Booking automation and reactivation campaigns build results over 30-60 days as sequences are optimized."
          },
          {
            question: "What kind of ROI should I expect?",
            answer: "Most plumbing and HVAC businesses recover 15-25% of previously lost leads through missed call and estimate follow-up automation alone. At average ticket values of $400-800, even a small number of recovered jobs per month generates significant ROI."
          },
          {
            question: "How do you measure automation performance?",
            answer: "We track recovery rates (missed calls responded to), estimate conversion rates, booking rates from AI scheduling, review acquisition rates, and when possible, revenue attribution from automation-triggered jobs."
          }
        ]
      },
      {
        category: "Platforms & Integration",
        items: [
          {
            question: "Which platforms do you work with?",
            answer: "We work with most major trade platforms including ServiceTitan, Jobber, GoHighLevel, HouseCall Pro, and FieldEdge. We also integrate with standard CRMs and phone systems. Platform compatibility is assessed during the initial audit."
          },
          {
            question: "Do I need to change my current software?",
            answer: "Not necessarily. We build automation within your existing stack where possible. In some cases, we recommend adding or switching to a platform with stronger automation capabilities — but we assess this before recommending any changes."
          },
          {
            question: "Can automation work with my current phone system?",
            answer: "In most cases, yes. Missed call recovery integrates with call tracking systems and most VoIP platforms. We assess your current setup during onboarding to confirm compatibility."
          }
        ]
      },
      {
        category: "Process & Partnership",
        items: [
          {
            question: "How involved does my team need to be?",
            answer: "Initial setup requires input on your business processes, typical job types, and approval of messaging. Ongoing, your team monitors flagged conversations and handles escalations. The automation handles the routine work independently."
          },
          {
            question: "What happens when a lead needs a human?",
            answer: "Escalation triggers are built into every automation. When a conversation exceeds the AI's scope — complex pricing, emergency dispatch, frustrated customers — it flags for human review and notifies your team immediately."
          },
          {
            question: "Do you require long-term contracts?",
            answer: "No mandatory long-term contracts. We operate month-to-month. Automation systems do require a ramp period to optimize, so we recommend a minimum 90-day engagement to see full performance."
          }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Automation Amplifies Every Other",
    highlightedText: "Marketing Channel You Run",
    intro: "AI automation doesn't replace your marketing — it captures the value it generates.",
    body: "Your SEO and paid ads drive leads. Automation ensures those leads actually convert. Email nurtures the ones not ready to book today. The channels multiply each other when they're connected.",
    services: [
      { icon: Bot, id: "ai-automation", title: "AI Automation", description: "Recover leads and automate follow-up.", href: "/ai-automation", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search.", href: "/hvac-and-plumbing-seo" },
      { icon: Map, id: "google-maps", title: "GBP SEO", description: "Dominate the local 3-pack.", href: "/plumbing-google-maps" },
      { icon: Target, id: "paid-media", title: "Paid Advertising", description: "Google Ads and Meta campaigns.", href: "/hvac-and-plumbing-paid-ads" },
      { icon: Mail, id: "email", title: "Email Marketing", description: "Nurture and convert your list.", href: "/plumbing-email-marketing" },
      { icon: PenTool, id: "content", title: "Content Development", description: "Content that earns and converts.", href: "/plumbing-content-marketing" }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/#services"
  }
};
