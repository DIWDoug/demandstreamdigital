import { MapPin, Map, Target, TrendingUp, Shield, Search, FileText, Link2, Settings, Globe, Sparkles, Mail, BarChart3, Award, PenTool, Phone, Bot, Zap, Thermometer } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const hvacSEOConfig: ServicePageConfig = {
  slug: "hvac-seo",
  title: "HVAC SEO",
  metaTitle: "HVAC SEO That Generates More Booked Calls | DemandStream",
  metaDescription: "SEO for HVAC companies that ranks seasonal, emergency, and replacement pages. Structured around no-cool, no-heat, and tune-up intent to put your company at the top when demand spikes.",
  canonicalUrl: `${SITE_URL}/hvac-seo`,
  keywords: "HVAC SEO, HVAC SEO services, SEO for HVAC companies, HVAC company SEO, HVAC local SEO, HVAC marketing",

  hero: {
    headline: "HVAC SEO Services That Drive",
    highlightedText: "More Booked Service Calls",
    subheadline: {
      intro: "When a homeowner searches 'AC repair near me' during a heat wave, they are not browsing options. They are calling whoever shows up first.",
      bullets: [
        "A no-cool call at 9pm in July",
        "A furnace that stopped working during a freeze",
        "A heat pump that has not responded since Monday"
      ],
      closing: "Whoever shows up in the Map Pack gets the call. HVAC SEO from DemandStream is built around how HVAC customers actually search and call. No generic contractor marketing. HVAC companies only."
    },
    qualifierLine: "",
    ctaText: "Claim My Territory",
    ctaSubtext: "HVAC companies only. No plumbing. No general contractors."
  },

  problem: {
    eyebrow: "The Problem With Generic SEO",
    headline: "Why Generic Contractor SEO Fails HVAC Companies",
    intro: "HVAC is not a general home services business. It is a seasonal, emergency-driven trade where demand spikes in July and January — and misses the Map Pack during those windows mean real revenue walking out the door.\n\nGeneric contractor packages apply the same keyword lists, the same content templates, and the same link building tactics to every trade. They don't account for how HVAC calls actually come in, or what makes a homeowner choose one HVAC company over another when their AC is out in the middle of summer.",
    introCallout: "When a homeowner's AC goes out at 4pm on the hottest day of the year, they don't browse. They search and call whoever shows up first. HVAC SEO has to be built around that urgency. Not applied from a template designed for dentists and dog groomers.",
    painPoints: [
      {
        icon: Zap,
        title: "Seasonal Urgency Dominates",
        body: "The majority of high-value HVAC searches are seasonally urgent: 'AC not working near me,' 'furnace not turning on,' 'no heat repair.' These are not research queries. They are active emergencies. HVAC SEO has to be built around peak-season demand first, not retrofitted from a template that treats July and January the same as April."
      },
      {
        icon: MapPin,
        title: "Proximity Shifts Rankings Dramatically",
        body: "An HVAC company ranking #1 from three miles away may not appear at all for a searcher on the other side of the service area. Google weights proximity heavily for emergency local searches. A strategy that ignores ZIP-level competition leaves high-margin calls on the table every single day."
      },
      {
        icon: Award,
        title: "Review Velocity Is a Trust Signal, Not a Bonus",
        body: "When a homeowner finds two HVAC companies in the Map Pack, the one with more recent reviews and a response to each one gets the call. Review recency and response discipline are direct ranking and conversion factors. Not a nice-to-have, not a bonus. They are part of the system."
      },
      {
        icon: Search,
        title: "Service Specificity Matters for Rankings",
        body: "A homeowner searching 'AC tune-up near me' has different intent than 'HVAC company near me.' Each distinct service needs its own page. Generic catch-all HVAC pages rank well for nothing because they signal relevance for everything and authority for nothing."
      },
      {
        icon: Phone,
        title: "After-Hours Calls Are High-Margin Calls",
        body: "HVAC emergencies don't follow business hours. An AC failure at 9pm in July or a no-heat call at midnight in January is often the highest-margin job of the day. The customer is not price shopping — they need help now. Your GBP and site have to be configured to capture that demand 24 hours a day."
      }
    ],
    systemClosing: "Effective HVAC SEO requires scoping to the actual market. Not templated deliverables applied from a generic contractor package.",
    closingLine: "That is why our HVAC SEO work performs consistently",
    closingHighlight: "across different markets and service areas.",
    ctaText: "Claim Your Territory Today"
  },

  outcomes: {
    headline: "What Changes When HVAC SEO Works",
    subheadline: "These outcomes only appear when strategy matches how HVAC demand actually works.",
    items: [
      {
        title: "More No-Cool and No-Heat Emergency Bookings",
        description: "The calls that matter most in HVAC happen at the worst times. When your company ranks in the Map Pack and top organic results for emergency HVAC searches in your service area, those calls come to you. Every month you hold position, the calls keep coming."
      },
      {
        title: "Higher Booking Rate for Repair and Install Searches",
        description: "Organic local searchers are pre-qualified. They found your company because you showed up for the exact service they needed in the area they needed it. A homeowner searching 'heat pump installation near me' who finds your dedicated install page is closer to booking than a general ad click."
      },
      {
        title: "Defending Your Service Area Through Peak Season",
        description: "If your HVAC company is not ranking for AC repair, furnace replacement, and heat pump installation in your market, a competitor is. A competitor with consistent GBP activity and strong service area pages will outrank you on emergency calls regardless of how good your techs are."
      },
      {
        title: "Revenue Stability Through Heating and Cooling Cycles",
        description: "HVAC revenue spikes around heat waves, freeze events, and system failures. When your organic presence is strong year-round, not just during emergencies, you build a more stable baseline of maintenance, tune-up, and replacement calls. That baseline lets you plan capacity, manage payroll, and grow without relying entirely on seasonal spikes."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Process",
    headline: "Our HVAC SEO System",
    subheadline: "A phased approach built for HVAC operators. Every phase has a purpose. Every phase builds on the last. We do not run campaigns before the foundation is solid. We do not chase rankings before the GBP is refined. We do not scale before we know your booking rate can handle the volume. The sequence matters.",
    phases: [
      {
        phase: 1,
        name: "Technical Foundation",
        title: "Technical & On-Page Foundation",
        description: "Build a crawlable, revenue-aligned HVAC SEO structure that converts high-intent searches into booked calls. The technical foundation sets your ranking ceiling. An HVAC company with a slow, poorly structured site and duplicate service pages cannot outrank a competitor with clean architecture, no matter how many links they build.",
        activities: [
          "Separate, properly structured pages for each HVAC service. No catch-all 'HVAC Services' page that dilutes relevance across every keyword",
          "Service cluster architecture: hub pages linking to sub-service pages and city pages in a logical hierarchy",
          "Ad-style meta descriptions that speak to urgency and booking, not feature lists",
          "Clean, short URLs aligned to service + city structure: /ac-repair-dallas/ not /services/hvac/air-conditioning/dallas-tx-2/",
          "CTR-driven title tags: 'AC Repair in [City] | Same-Day Service' and not 'Our Air Conditioning Services'",
          "Schema markup: LocalBusiness, HVACContractor, Service, FAQ, and Review"
        ],
        expect: [
          "By the end of this phase, your site is built to rank for specific HVAC searches, not just appear for generic contractor queries. A homeowner searching 'AC repair near me' lands on a dedicated AC repair page with a clear call path. That page is fast, mobile-refined, and structured to produce a call, not a bounce.",
          "When a motivated customer finds your site at 8pm with no air conditioning, nothing should stand between them and calling your number. Technical SEO makes sure it doesn't."
        ],
        walkAway: [
          "Complete technical SEO audit and priority fix list",
          "Full HVAC service cluster architecture built and implemented",
          "On-page improvement across all core service and city pages",
          "HVACContractor schema markup and LocalBusiness schema implementation",
          "Mobile performance audit and remediation",
          "Internal linking map across the HVAC cluster"
        ],
        icon: Shield,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "GBP & Maps",
        title: "Google Maps & GBP Improvement",
        description: "Win Map Pack visibility for the HVAC searches that drive emergency calls and same-day bookings. The Map Pack is where most emergency HVAC calls originate: an AC breakdown on a 98-degree afternoon, a furnace failure in a snowstorm, a heat pump that stopped working overnight. If your GBP is incomplete, stale, or miscategorized, you are invisible at the moment the revenue decision happens.",
        activities: [
          "Primary category set to 'HVAC Contractor'. Not 'Home Services' or 'Contractor,' which dilute relevance",
          "Secondary categories selected for highest-revenue adjacent services: 'Air Conditioning Contractor,' 'Heating Contractor,' and 'Indoor Air Quality' where applicable",
          "GBP services catalog built to mirror website service pages exactly",
          "Service area configuration aligned to actual dispatch radius",
          "Weekly real-job photo uploads: AC installations, furnace replacements, heat pump jobs",
          "Post-job SMS review acquisition system — automated, compliant, and consistent",
          "Response system for every review: positive, negative, and no-text ratings",
          "Seasonal GBP posting calendar: pre-season tune-up content before summer and winter",
          "Review velocity as an ongoing activity, not a one-time setup"
        ],
        expect: [
          "An HVAC company with a fully refined, actively maintained GBP holds Map Pack position more consistently than one running on a set-it-and-forget-it profile. Emergency searches surface your business at the exact moment the homeowner is ready to call. Same-day booking calls, the ones that fill your board without any back-and-forth, come disproportionately from Maps.",
          "If a competitor is in the Map Pack and you are not, they are booking your calls. This phase closes that gap."
        ],
        walkAway: [
          "Fully refined Google Business Profile: categories, services, service area, attributes",
          "Structured review acquisition workflow integrated into your job completion process",
          "Review response system and schedule",
          "Seasonal posting calendar tied to HVAC demand patterns",
          "Service area configuration aligned to dispatch reality"
        ],
        icon: Map,
        color: "hsl(200, 70%, 50%)"
      },
      {
        phase: 3,
        name: "Authority & Reviews",
        title: "Authority & Review Growth",
        description: "Build the prominence signals that stabilize rankings and strengthen trust on every call. HVAC is a trust-first trade. Before a homeowner lets a technician into their home, they check reviews. Before Google ranks an HVAC company in the Map Pack, it evaluates authority signals. Both processes reward the same inputs: consistent reviews, credible links, and clean citation data.",
        activities: [
          "Trade-specific link building: ACCA, supplier directories, local chamber, community publications",
          "Citation cleanup: NAP consistency across Yelp, HomeAdvisor, BBB, Angi, and all data aggregators",
          "Install case study content and reputation signals that compound over time",
          "Review response discipline: consistent, service-specific responses that reinforce keyword relevance",
          "Review velocity tracking: monitoring cadence, identifying gaps, and escalating acquisition during slow periods",
          "Website review integration with schema markup for rich results"
        ],
        expect: [
          "Authority signals stabilize Map Pack rankings against algorithm updates and competitor campaigns. An HVAC company with 250 reviews, strong local links, and consistent citation data holds position better through ranking volatility than one with thin authority and occasional review activity.",
          "More 5-star proof also has a direct impact on close rate and average ticket. A homeowner who sees 200 reviews mentioning fast response, professional techs, and transparent pricing is less likely to price-shop. That reduces discount pressure and improves margin on every call."
        ],
        walkAway: [
          "Local link portfolio from trade-relevant and geo-relevant sources",
          "Citation profile cleanup report and consistency monitoring",
          "Review velocity baseline and tracking dashboard",
          "Authority content targeting long-tail HVAC intent searches"
        ],
        icon: TrendingUp,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Market Defense",
        title: "Market Defense & Expansion",
        description: "Protect your HVAC market position and scale strategically as capacity allows. Rankings are not permanent assets. Competitors improve their GBPs, run review campaigns, and build new service pages. Market defense is not passive maintenance. It is an active, ongoing process.",
        activities: [
          "Peak season competitor monitoring in your HVAC service area",
          "Install-focused content expansion during shoulder season",
          "Territory scaling strategy for multi-truck operators",
          "Protecting Map Pack position during high-demand periods",
          "Ranking volatility tracking with early-warning alerts before drops affect call volume",
          "Capacity-based marketing throttling: accelerate during slow seasons, protect dispatch during peak summer and winter demand",
          "Call tracking integration with booking rate data, tied to source, page, and time of day"
        ],
        expect: [
          "This phase prevents the outcomes that hurt HVAC operators most: a competitor pulling ahead during a heat wave, ranking drops after a Google update, dispatch overload from marketing that pushes volume the operation cannot handle. HVAC SEO that doesn't align with operational capacity creates chaos, not growth.",
          "Expansion without capacity planning burns out your office and your technicians. Growth with capacity alignment builds a company that can run more trucks and more markets without breaking."
        ],
        walkAway: [
          "Ranking volatility monitoring and rapid response protocol",
          "Competitor activity reporting by service and geography",
          "Capacity-aligned service area expansion roadmap",
          "Emergency and high-margin keyword coverage across your full service radius",
          "Call tracking tied to booking rate by source and page"
        ],
        icon: Target,
        color: "hsl(280, 60%, 55%)"
      },
      {
        phase: 5,
        name: "AI & GEO",
        title: "AI & Generative Search Visibility",
        description: "Position your HVAC company to be cited by AI Overviews and generative search engines — not just ranked on the traditional blue-link results page. Search behavior is shifting. AI-generated answers are appearing above organic results for informational and service-intent HVAC queries. If your content and schema are not structured for citation, you are invisible to an increasing share of searchers.",
        activities: [
          "FAQ-rich content clusters targeting repair vs replace comparison searches",
          "Structured data implementation: FAQ, HowTo, Service, and LocalBusiness markup",
          "'How much does X cost' content that earns AI citations: 'how much does AC replacement cost,' 'how much does furnace replacement cost'",
          "Conversational query capture for voice and assistant queries: 'HVAC company open now near me'",
          "GBP Q&A seeded with high-intent HVAC questions and direct answers",
          "AI Overview monitoring: tracking which HVAC queries trigger AI Overviews and whether your company is cited",
          "E-E-A-T signal reinforcement: author credibility, trade credentials, and first-hand experience signals"
        ],
        expect: [
          "Generative search is not replacing traditional SEO — it is adding a new visibility layer that rewards the same inputs: authoritative content, clean structured data, and a credible business entity. HVAC companies whose pages are formatted for citation will appear in AI Overviews while competitors relying on legacy on-page SEO alone are filtered out.",
          "This phase ensures your HVAC company is visible in both the traditional organic results and the AI-generated answer layer that is now appearing above them for a growing share of local search queries."
        ],
        walkAway: [
          "Full schema audit and implementation: FAQ, HowTo, Service, and LocalBusiness markup",
          "Content reformatting for AI citation readiness across core service pages",
          "Entity profile strengthening and Knowledge Panel optimization",
          "AI Overview monitoring setup for target HVAC search queries",
          "Voice and conversational query content coverage"
        ],
        icon: Bot,
        color: "hsl(160, 60%, 45%)"
      }
    ],
    executionNote: "",
    footerNote: "Most HVAC companies see meaningful ranking movement within 3 to 4 months, with significant Map Pack improvement by month 6."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull in Competitive HVAC Markets",
    subheadline: "Each component is scoped based on your HVAC market's competition level, your current rankings, and your specific revenue goals. No standard packages. No fixed deliverable lists that ignore what your market actually requires.",
    blocks: [
      {
        title: "On-Page Improvement",
        slug: "on-page-optimization",
        description: "Service-specific title tags, meta descriptions, and on-page content for every distinct HVAC service and city. Built to rank for 'AC replacement near me,' not generic contractor terms.",
        icon: FileText,
        cluster: "TECHNICAL"
      },
      {
        title: "Technical SEO",
        slug: "technical-seo",
        description: "Site architecture, crawlability, Core Web Vitals, and page speed that set your ranking ceiling. Most emergency HVAC searches happen on a phone.",
        icon: Settings,
        cluster: "TECHNICAL"
      },
      {
        title: "Local Keyword Strategy",
        slug: "local-keyword-strategy",
        description: "HVAC-specific keyword research covering emergency intent, repair intent, install intent, and location intent. AC repair, furnace replacement, and heat pump installation each get different priority weights.",
        icon: Search,
        cluster: "TECHNICAL"
      },
      {
        title: "Content Development",
        slug: "content-development",
        description: "A dedicated page for every distinct HVAC service and call type, plus city pages and long-tail content targeting searches like 'how much does AC replacement cost' and 'signs your furnace needs replacing.'",
        icon: PenTool,
        cluster: "AUTHORITY"
      },
      {
        title: "Link Building",
        slug: "link-building",
        description: "Local and trade-specific outreach: ACCA links, supplier directories, chamber listings, and community publications. Every link evaluated for geographic and trade relevance, not just domain authority.",
        icon: Link2,
        cluster: "AUTHORITY"
      },
      {
        title: "AI & Generative Search",
        slug: "ai-optimization",
        description: "Structured data, FAQ schema, and content formatting that positions your HVAC business for AI Overviews and generative search citations. So you get cited, not just ranked.",
        icon: Bot,
        cluster: "AUTHORITY"
      },
      {
        title: "NAP Citations",
        slug: "nap-citations",
        description: "Citation audits and cleanup across Yelp, HomeAdvisor, Angi, BBB, and all major data aggregators. Consistent NAP data strengthens both Maps and organic rankings.",
        icon: Globe,
        cluster: "VISIBILITY"
      },
      {
        title: "Local Reputation Management",
        slug: "reputation-management",
        description: "Post-job review acquisition and response systems built for HVAC companies. Structured to turn every completed job into a visible 5-star review.",
        icon: Award,
        cluster: "VISIBILITY"
      },
      {
        title: "Google Business Profile",
        slug: "gbp-strategy",
        description: "Full GBP buildout and ongoing management: category setup, photo strategy, posting calendar, and response discipline. Not a one-time setup. An ongoing ranking activity.",
        icon: Map,
        cluster: "VISIBILITY"
      }
    ]
  },

  qualification: {
    eyebrow: "Selective Fit",
    headline: "Is HVAC SEO Right for Your Company?",
    subheadline: "We work best with established HVAC companies that want to own their service area, not just generate a few more calls this month.",
    goodFit: [
      { point: "You run an HVAC company with an active dispatch board and real service capacity, ideally 2 or more trucks", detail: "We build strategies for HVAC operators that can handle the call volume local SEO produces." },
      { point: "You want more booked service calls. Not impressions, traffic reports, or 'brand awareness' metrics", detail: "We measure success in booked calls and cost per booked call, not vanity metrics." },
      { point: "You understand that HVAC SEO is a 6 to 12 month investment with compounding returns, not an overnight fix", detail: "The first three to four months are foundation work that everything else builds on." },
      { point: "You are willing to invest in review velocity as a core part of the system, not an optional add-on", detail: "Review signals account for a significant portion of local ranking weight. This is non-negotiable." },
      { point: "You want a growth partner who reports on booked calls and cost per booked call, not just rank positions", detail: "Rankings are a means to an end. Booked calls are the end." },
      { point: "You have a verified, address-visible Google Business Profile", detail: "GBP is the foundation of Map Pack visibility. A hidden-address profile has structural limitations no optimization can fully overcome." }
    ],
    notFit: [
      { point: "You expect top rankings within a few weeks", detail: "If someone promised you fast results, they were not being honest. Real HVAC SEO takes time and consistent effort." },
      { point: "Your business relies solely on a hidden-address GBP listing with no physical location verification", detail: "These profiles face significant structural limitations in local search that no amount of optimization can fully overcome." },
      { point: "You are not willing to participate in review acquisition", detail: "Review velocity is a mandatory part of the system. HVAC companies that skip this step cap their Map Pack potential." },
      { point: "You need guaranteed specific ranking positions", detail: "Anyone guaranteeing rankings is either misleading you or has no ability to keep the promise. Google controls its algorithm." },
      { point: "You are looking for the lowest-cost option available", detail: "Effective HVAC SEO in a competitive market requires real investment. We are not the cheapest option. We are the option that produces results." },
      { point: "You are not willing to commit to a minimum 6-month engagement after roadmap delivery", detail: "The first three months are foundation work. You need time for the system to compound before evaluating results." }
    ],
    ctaText: "Start the Conversation"
  },

  faq: {
    headline: "Frequently Asked Questions About HVAC SEO",
    groups: [
      {
        category: "Results & Timing",
        items: [
          {
            question: "How long does HVAC SEO take to produce booked calls?",
            answer: "For most HVAC companies, meaningful ranking movement begins within 3 to 4 months of completing the technical foundation phase. Map Pack visibility improvements typically follow in months 4 through 6, assuming the GBP improvement phase runs concurrently with on-page work. The timeline depends on three variables: your current baseline, your market competition, and how quickly we can close technical gaps. An HVAC company in a mid-sized market with a relatively clean site and moderate Map Pack competition moves faster than one in a dense metro going up against five well-refined competitors. What we can say with confidence: HVAC SEO compounds. The calls generated in month 8 come from foundation work done in month 2."
          },
          {
            question: "How much does HVAC SEO cost?",
            answer: "We do not publish package pricing because every engagement is scoped to your specific market, competition level, and revenue goals. An HVAC company in a smaller market with a clean GBP and a solid existing site has different needs than one in a large metro competing against 30 active HVAC SEO campaigns. What we can tell you is how we frame cost: every dollar invested in HVAC SEO should be measurable against booked calls and cost per booked call. If we cannot show a clear line from marketing spend to calls on your dispatch board, the spend is not justified."
          },
          {
            question: "Do you guarantee HVAC SEO rankings?",
            answer: "No. Any agency that guarantees specific ranking positions is either misleading you or making a promise they have no ability to keep. Google controls its algorithm. We do not. What we control — and what we are accountable for — is execution quality: technical foundation, GBP improvement, review velocity systems, link building, and service cluster content. Those inputs, done correctly and consistently, produce ranking improvements in virtually every market we operate in. We measure success in booked calls, booking rate, and cost per booked call — not in rank position fluctuations."
          },
          {
            question: "What if we already have some organic rankings for HVAC searches?",
            answer: "Existing rankings are an asset we build on, not something we reset. If your HVAC company already ranks for some searches, the audit phase identifies which rankings are stable and producing calls, which are fragile and at risk, and which service areas and keywords have significant untapped opportunity. A common pattern we see: an HVAC company has decent rankings for 2 or 3 broad service terms but almost no visibility for high-value searches like 'AC replacement near me,' 'heat pump installation,' or specific service area combinations."
          },
          {
            question: "How do you measure the success of HVAC SEO?",
            answer: "We measure against the numbers that matter on an HVAC operator's dispatch board: booked calls, answer rate, booking rate, cost per booked call, and source-level call attribution. Rankings are a leading indicator, not a success metric. Monthly reporting includes ranking movement for target keywords and service areas, GBP performance metrics — calls, direction requests, and profile interactions — review velocity, and call tracking data tied to organic search."
          }
        ]
      },
      {
        category: "HVAC SEO vs. Paid Ads",
        items: [
          {
            question: "Should I run HVAC SEO or Google Ads?",
            answer: "Both, ideally — but with different expectations for each. Google Ads delivers immediate visibility for emergency HVAC searches. If someone searches 'AC repair near me' right now, a well-run Google Ads campaign can put you in front of that caller today. HVAC SEO cannot do that in week one. What HVAC SEO does that paid ads cannot: it builds a compounding asset. Rankings you earn in month 4 keep producing calls in month 14 without additional spend."
          },
          {
            question: "How is HVAC SEO different from running Google Ads?",
            answer: "Paid ads generate calls while the campaign is running. When the budget stops, the calls stop. HVAC SEO generates calls that compound over time. Rankings built in month 3 continue driving booked calls in month 18, month 24, and beyond — without proportional increases in spend. The two are not mutually exclusive. Paid ads are often the right strategy during the ramp-up phase of an SEO campaign, especially for emergency HVAC searches where immediate visibility matters."
          },
          {
            question: "Can SEO help generate install leads, not just repair calls?",
            answer: "Yes. Install leads and repair calls require different page architectures. A homeowner researching 'AC replacement cost' or 'how long does a heat pump last' is in a different stage than one searching 'AC not cooling near me.' Install-focused content — replacement cost guides, repair vs. replace comparison pages, system lifespan content — targets the research phase and pulls in higher-ticket leads before the homeowner has already chosen a competitor. We build both: emergency capture pages for repair demand and research-phase content for replacement and install pipeline."
          },
          {
            question: "How does HVAC SEO perform differently during peak season?",
            answer: "Emergency search volume spikes during heat waves and freeze events. An HVAC company with a strong Map Pack presence and emergency-specific landing pages captures a disproportionate share of those calls when demand is highest. The companies that see the largest peak-season gains from SEO are the ones who built their foundation during shoulder season — so when July or January hits, the infrastructure is already in place. SEO built for peak demand has to be executed before peak demand arrives."
          },
          {
            question: "How do you build links for HVAC companies?",
            answer: "Link building for HVAC SEO focuses on trade relevance and geographic relevance — not raw domain authority. A link from the Air Conditioning Contractors of America (ACCA), a regional HVAC supplier directory, a local Chamber of Commerce, or a community publication carries more weight for an HVAC company's local rankings than a generic high-DA link from an unrelated industry."
          }
        ]
      },
      {
        category: "Eligibility & Fit",
        items: [
          {
            question: "Do you work with multiple HVAC companies in the same market?",
            answer: "No. We take one HVAC client per service area. When you work with DemandStream, your direct competitors in that market do not. This is a deliberate model. It keeps our incentives aligned with yours and makes sure the strategy we build is designed to put your company ahead — not split across two or three competitors in the same ZIP codes. If your market is available, it is worth finding out before a competitor does."
          },
          {
            question: "Can you take over from another SEO provider?",
            answer: "Yes. Many of our HVAC clients come to us after working with generalist agencies that produced rankings without revenue, or activity without transparency. We start with a full audit of what exists — what is working, what is not, and what may have been done that needs correction. We do not approach this with blame toward the previous agency. We assess the baseline, identify the gaps, and build from what is there."
          },
          {
            question: "What size HVAC companies do you typically work with?",
            answer: "We work with HVAC companies running 2 trucks through multi-location operations. The common thread is not size — it is mindset. The HVAC operators who see the strongest results are the ones who treat marketing as an investment aligned to operations, not an expense that should produce immediate returns."
          },
          {
            question: "How do you handle communication and reporting?",
            answer: "You receive a monthly report that covers what actually matters on your dispatch board: booked calls by source, ranking movement for your target HVAC keywords, GBP performance metrics — calls, direction requests, and photo views — and review velocity. No vanity dashboards. No impressions graphs. The numbers that connect back to revenue."
          }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "HVAC SEO Is Part of a",
    highlightedText: "Bigger Growth System",
    intro: "HVAC SEO drives organic visibility and Map Pack rankings. But it produces the strongest results when it works with the rest of the marketing system, not in isolation from it.",
    body: "Your HVAC SEO feeds your Google Maps performance. Your GBP reviews improve your paid ad quality scores. Your email marketing reactivates past customers before they search for a new HVAC company. Your reporting dashboard ties all of it into one clear picture of cost per booked call by source.\n\nWhen every channel is connected and pulling toward the same outcome, you get predictable call flow you can build a schedule around. When they run independently, you get gaps. Gaps mean calls going to competitors.",
    services: [
      {
        icon: Thermometer,
        id: "hvac-seo",
        title: "HVAC SEO",
        description: "Organic visibility and Map Pack rankings for HVAC searches.",
        href: "/hvac-seo",
        isCenter: true
      },
      {
        icon: Map,
        id: "google-maps",
        title: "Google Maps / GBP",
        description: "Dominate the local 3-pack with optimized Google Business Profiles.",
        href: "/hvac-google-maps"
      },
      {
        icon: Sparkles,
        id: "paid-media",
        title: "HVAC Google Ads",
        description: "Capture emergency demand immediately while organic visibility builds.",
        href: "/hvac-paid-advertising"
      },
      {
        icon: Mail,
        id: "email",
        title: "HVAC Email Marketing",
        description: "Reactivate past customers before they search for a new HVAC company.",
        href: "/hvac-email-marketing"
      },
      {
        icon: Award,
        id: "reputation",
        title: "Reputation Management",
        description: "Review systems that turn completed jobs into visible 5-star proof.",
        href: "/hvac-and-plumbing-seo"
      },
      {
        icon: BarChart3,
        id: "reporting",
        title: "Reporting & Dashboards",
        description: "Dashboards that prove value in booked calls — not impressions.",
        href: "/hvac-reporting"
      }
    ],
    ctaText: "Explore All HVAC Services",
    ctaHref: "/hvac-and-plumbing-seo"
  }
};
