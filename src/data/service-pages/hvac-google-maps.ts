import { Map, MapPin, Zap, Users, Target, Star, MessageSquare, Globe, Layers, TrendingUp, Search, Sparkles, Mail, BarChart3, PenTool } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const hvacGoogleMapsConfig: ServicePageConfig = {
  slug: "hvac-google-maps",
  title: "Google Business Pro SEO",
  metaTitle: "HVAC Google Maps SEO & GBP Optimization | DemandStream",
  metaDescription: "Google Business Profile management built for HVAC companies. Reviews, seasonal GBP posts, citations, and local pack strategy that keeps your schedule full year-round.",
  canonicalUrl: `${SITE_URL}/hvac-google-maps`,

  hero: {
    headline: "Earn and Hold Google Maps Visibility",
    highlightedText: "Google Business Pro SEO for HVAC Companies",
    subheadline: "We help HVAC companies earn and hold Google Maps visibility through GBP optimization built for seasonal demand — no-cool calls in July, no-heat calls in January.",
    bullets: [
      "No cookie-cutter profile setups",
      "No generic posting calendars",
      "No ignoring seasonal demand signals"
    ],
    qualifierLine: "Every engagement is scoped to your local HVAC market, competitive landscape, and seasonal patterns so execution matches where demand actually comes from.",
    integrationNote: "GBP SEO, Local SEO, and Authority Building overlap by design. Coordinated, they drive durable map pack visibility across peak HVAC seasons.",
    ctaText: "Start the Conversation",
    ctaSubtext: "Tell us about your HVAC business. We'll take it from there."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Most HVAC GBP Management Fails",
    intro: "The profile was claimed and set up once. Then it sat idle until a no-cool emergency in August — and by then, three other HVAC companies had better reviews, fresher posts, and a stronger citations profile.",
    painPoints: [
      {
        icon: Users,
        title: "Seasonal Neglect Kills Summer Rankings",
        body: "HVAC companies go quiet in the off-season, then scramble when demand spikes. GBP signals erode without consistent activity. You show up late to the busiest months."
      },
      {
        icon: Star,
        title: "Review Velocity Drops After Every Install Season",
        body: "Reviews spike after summer, then nothing. Inconsistent velocity signals low activity to Google. Competitors who generate reviews year-round outrank you when it counts."
      },
      {
        icon: Globe,
        title: "NAP Inconsistencies From Old Directory Listings",
        body: "HVAC businesses accumulate inconsistent citations from old advertising, service directories, and manufacturer dealer listings. Each inconsistency erodes the trust signals GBP relies on."
      },
      {
        icon: Target,
        title: "No Strategy Around Emergency Intent",
        body: "No-cool and no-heat searches are high-urgency, high-value calls. Without a profile optimized for emergency intent — categories, services, posts — you miss the highest-converting traffic of the year."
      },
      {
        icon: Layers,
        title: "GBP Services Don't Match Website Pages",
        body: "HVAC services in GBP — AC repair, heat pump install, furnace tune-up — don't match the website. Signal fragmentation means Google can't confirm relevance for the queries you care about."
      }
    ],
    systemClosing: "",
    closingLine: "All five failures share one root problem: no operating system for ongoing HVAC GBP management. We provide that system",
    closingHighlight: "so visibility compounds through every season — not just summer.",
    ctaText: "Schedule a Discovery Call"
  },

  outcomes: {
    headline: "What Actually Changes When HVAC GBP Works",
    subheadline: "What changes as HVAC profiles enter the map pack and authority compounds",
    items: [
      {
        title: "Emergency Calls From the Map Pack",
        description: "No-cool and no-heat searches trigger direct calls from the map pack. Optimized HVAC profiles capture high-urgency demand before competitors can respond."
      },
      {
        title: "Year-Round Visibility Through Every Season",
        description: "Seasonal posts, maintenance reminders, and consistent updates signal ongoing activity. Your profile stays relevant in spring tune-up season and not just summer emergency season."
      },
      {
        title: "120% Profile Optimization for HVAC Services",
        description: "Every HVAC service — AC repair, heat pump install, furnace replacement, duct work — mapped to GBP services, products, and attributes. Full signal alignment for the searches that matter."
      },
      {
        title: "Review Velocity That Compounds Authority",
        description: "Systematic post-service review requests capture customer satisfaction while it's fresh. Consistent velocity signals an active, trusted HVAC business to Google Maps."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From HVAC Profile Audit to Pack Dominance",
    subheadline: "Every engagement is scoped to the market and sequenced to earn map pack visibility first, then compound it through every season.",
    phases: [
      {
        phase: 1,
        name: "Foundation",
        title: "Audit, Gap Analysis & Citation Foundation",
        description: "Comprehensive HVAC GBP audit, service gap analysis between GBP and website, competitor analysis, and citation foundation that establishes control.",
        activities: [
          "Complete GBP audit against best practices",
          "HVAC service gap analysis: GBP vs. website pages",
          "Competitor analysis for HVAC ranking terms",
          "Category optimization for HVAC primary and secondary categories",
          "Business description rewrite for HVAC intent",
          "HVAC service and product catalog setup",
          "Seasonal attribute optimization",
          "Photo audit and initial optimization",
          "Competitor citation audit via Whitespark",
          "Core citation submissions (50+ directories)",
          "Manufacturer dealer directory submissions",
          "Data aggregator submissions",
          "Review audit and baseline establishment",
          "Review response SOP development",
          "Seasonal posting schedule established",
          "Tracking and reporting setup"
        ],
        icon: Layers,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Velocity",
        title: "Review Generation & Seasonal Authority",
        description: "Systematic review acquisition tied to HVAC service cycles, continued citation building, and seasonal content development that supports GBP relevance.",
        activities: [
          "Post-service review generation campaign launch",
          "Seasonal posting schedule execution (spring tune-up, summer emergency, fall heat prep)",
          "Professional review response drafting",
          "HVAC photo drip feed and optimization",
          "Q&A monitoring: emergency HVAC queries",
          "Competitor citation gap analysis",
          "Continued structured citation building",
          "HVAC topical content: FAQ expansions",
          "People Also Ask content development",
          "Hub-spoke content linking structure",
          "Monthly performance reporting"
        ],
        icon: TrendingUp,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Expansion",
        title: "Geographic Reach & Seasonal Domination",
        description: "Strategic service area content, seasonal power posts, and continued citation authority that expands HVAC visibility beyond immediate proximity.",
        activities: [
          "Service area content strategy execution",
          "Hyperlocal HVAC landing page development",
          "Seasonal power posts: no-cool, no-heat, maintenance",
          "Geographic content expansion",
          "Competitor citation gap analysis (ongoing)",
          "Continued structured citation building",
          "Review velocity acceleration",
          "Advanced seasonal attribute optimization",
          "Multi-location coordination (if applicable)"
        ],
        icon: Zap,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Dominance",
        title: "Market Leadership & Year-Round Authority",
        description: "Maintaining top positions through continued citation building, localized link authority, and defensive optimization against competitive threats.",
        activities: [
          "Defensive optimization protocols",
          "Competitor monitoring and response",
          "Ongoing competitor citation gap analysis",
          "Continued structured citation building",
          "Localized link building authority (ongoing)",
          "Algorithm update adaptation",
          "Advanced seasonal review strategy",
          "Quarterly strategic reviews",
          "New Google feature adoption"
        ],
        icon: Target,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    executionNote: "",
    footerNote: "Execution is fully managed with documented scope and clear checkpoints. Phase duration varies by market competitiveness. Most HVAC businesses see meaningful pack movement within 3-4 months."
  },

  buildingBlocks: {
    eyebrow: "Earn and Hold HVAC Google Maps Visibility",
    headline: "The Levers We Pull Based on Market Reality",
    subheadline: "The components below are applied based on HVAC market competition and your goals, not templates.",
    blocks: [
      {
        title: "GBP Profile Optimization",
        slug: "gbp-optimization",
        description: "Profile optimization across HVAC categories, seasonal attributes, services, and descriptions to maximize relevance signals.",
        icon: MapPin
      },
      {
        title: "Review Generation & Response",
        slug: "review-management",
        description: "Systematic post-service review acquisition and response management to build trust and improve HVAC rankings.",
        icon: Star
      },
      {
        title: "Citation Building & Cleanup",
        slug: "citation-building",
        description: "NAP consistency across 50+ directories and HVAC-specific sources to validate business information and build authority.",
        icon: Globe
      },
      {
        title: "Seasonal GBP Posting",
        slug: "post-scheduling",
        description: "Seasonal posts, emergency offers, and maintenance updates that signal year-round activity to Google.",
        icon: MessageSquare
      },
      {
        title: "Photo & Media Management",
        slug: "photo-optimization",
        description: "HVAC install photos, before-and-after documentation, and visual content to increase engagement and trust.",
        icon: Map
      },
      {
        title: "Emergency Intent Strategy",
        slug: "qa-management",
        description: "Service and category optimization around no-cool and no-heat queries, plus Q&A management for high-urgency searches.",
        icon: Target
      }
    ]
  },

  qualification: {
    eyebrow: "Before We Talk",
    headline: "We Are Selective About Who We Work With",
    subheadline: "",
    goodFit: [
      {
        point: "Verified HVAC GBPs with physical addresses",
        detail: "We specialize in GBP optimization for HVAC businesses with address-visible profiles — shops, offices, and service-area businesses that display their address."
      },
      {
        point: "Competitive HVAC markets",
        detail: "GBP optimization delivers the most value when there is real competition for the local pack. Competitive metros and suburbs where multiple HVAC companies are fighting for the same calls."
      },
      {
        point: "Ongoing management, not one-time optimization",
        detail: "HVAC Google Maps visibility requires seasonal attention — pre-summer, pre-winter, and post-season. We work with businesses who understand this is continuous, not a project."
      },
      {
        point: "Willingness to participate in review generation",
        detail: "Review velocity requires your participation. Your techs need to ask for reviews after service calls. We provide the systems; you need to use them."
      },
      {
        point: "Focus on retention over quick wins",
        detail: "Our approach builds sustainable visibility that compounds through multiple HVAC seasons. If your goal is long-term market ownership, this partnership makes sense."
      },
      {
        point: "Need to replace inconsistent vendors",
        detail: "Transitioning from an inconsistent vendor is seamless. We onboard quickly, establish baselines, and deliver without disruption."
      }
    ],
    notFit: [
      {
        point: "Service-area businesses without visible addresses",
        detail: "Address-hidden GBP listings compete differently. Our core specialty is HVAC businesses with visible physical locations."
      },
      {
        point: "Expectations of pack positions in days",
        detail: "HVAC GBP optimization takes time. Meaningful visibility improvements typically require 2-4 months of consistent effort."
      },
      {
        point: "Price is the primary decision factor",
        detail: "Quality HVAC GBP management has real costs. If budget is the primary factor, the math will not work for either of us."
      },
      {
        point: "Inability or refusal to ask for reviews",
        detail: "Review velocity is critical for HVAC. If your techs won't ask after installs and service calls, results will suffer."
      },
      {
        point: "One-time optimization with no continuity",
        detail: "HVAC visibility degrades without seasonal attention. We do not offer one-time optimization services."
      }
    ],
    ctaText: "Let's Talk About Your HVAC Business"
  },

  faq: {
    headline: "Frequently Asked Questions",
    groups: [
      {
        category: "Results & Timing",
        items: [
          { question: "How long does it take to see HVAC Google Maps results?", answer: "Most HVAC businesses see meaningful movement in local pack positions within 2-4 months. Competitive markets may take longer. We set realistic expectations during discovery based on actual market data." },
          { question: "Can you improve rankings before peak HVAC season?", answer: "Yes — that's specifically why early-season engagement matters. Starting work in late winter or early spring gives time to build GBP signals before the no-cool demand spike in summer." },
          { question: "What HVAC keywords drive the most map pack traffic?", answer: "Emergency and repair queries drive the highest-urgency traffic: 'AC repair near me,' 'HVAC company near me,' 'furnace repair near me.' We optimize specifically for emergency and seasonal intent." },
          { question: "How does GBP SEO support AI search for HVAC?", answer: "AI search systems like Google's AI Overviews pull information from trusted, well-structured sources. A fully optimized HVAC GBP with consistent NAP data, reviews, and schema markup increases the likelihood of being cited in AI-generated local answers." }
        ]
      },
      {
        category: "Services & Process",
        items: [
          { question: "Do you handle review responses for HVAC companies?", answer: "Yes. We draft professional responses to all reviews — positive and negative — for your approval before posting. Our responses are designed to build trust with potential customers while addressing any concerns raised." },
          { question: "How do seasonal posts work for HVAC GBP?", answer: "We build a seasonal content calendar — spring AC tune-up promotions, summer emergency availability posts, fall heating prep, winter service reminders. Posts are written and scheduled in advance so your profile stays active year-round." },
          { question: "Can you help with suspended HVAC listings?", answer: "Yes. We have experience recovering suspended GBP listings. The process depends on the suspension reason, but we have successfully restored listings suspended for guideline violations and verification issues." }
        ]
      },
      {
        category: "Partnership & Pricing",
        items: [
          { question: "How is pricing determined for HVAC GBP management?", answer: "HVAC GBP management pricing depends on the number of locations, market competitiveness, and scope of services. We scope every engagement to the actual opportunity rather than arbitrary packages." },
          { question: "Do you require long-term contracts?", answer: "No. We work month-to-month with a 30-day notice policy. Our retention comes from results, not lock-in agreements. That said, meaningful HVAC GBP results require consistency across multiple seasons." },
          { question: "How does communication work?", answer: "You get a dedicated strategist who keeps you informed with regular updates, monthly reports, and clear next steps. We handle the execution so you can focus on running your HVAC business." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "HVAC GBP SEO Is One Piece of the",
    highlightedText: "360° Growth Engine",
    intro: "HVAC GBP SEO acts as the emergency demand capture layer, supported by authority, relevance, and conversion infrastructure across the ecosystem.",
    body: "HVAC Maps visibility improves when reinforced by local SEO, seasonal review strategy, and consistent NAP signals. We offer each service independently, but the magic happens when they work in concert.",
    services: [
      { icon: Map, id: "google-maps", title: "HVAC GBP SEO", description: "The emergency demand capture layer for HVAC.", href: "/hvac-google-maps", isCenter: true },
      { icon: Search, id: "local-seo", title: "HVAC Local SEO", description: "Organic visibility in local search results.", href: "/hvac-seo" },
      { icon: Sparkles, id: "paid-media", title: "HVAC Paid Media", description: "Accelerate results with Google Ads.", href: "/hvac-paid-advertising" },
      { icon: Mail, id: "email-marketing", title: "HVAC Email", description: "Reactivate customers between seasons.", href: "/hvac-email-marketing" },
      { icon: BarChart3, id: "reporting", title: "HVAC Reporting", description: "Dashboards that prove value in booked calls.", href: "/hvac-reporting" },
      { icon: PenTool, id: "content", title: "HVAC Content", description: "Seasonal content that earns authority.", href: "/hvac-content-marketing" }
    ],
    ctaText: "Explore All HVAC Services",
    ctaHref: "/#services"
  }
};
