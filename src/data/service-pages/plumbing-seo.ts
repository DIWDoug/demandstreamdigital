import { MapPin, Map, Target, TrendingUp, Shield, Search, FileText, Link2, Settings, Globe, Sparkles, Mail, BarChart3, Award, PenTool, Phone, Bot, Droplets, Zap } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const plumbingSEOConfig: ServicePageConfig = {
  slug: "plumbing-seo",
  title: "Plumbing SEO",
  metaTitle: "Plumbing SEO Services That Drive More Booked Service Calls | DemandStream Digital",
  metaDescription: "Plumbing SEO built for plumbing companies, not generic contractor marketing. DemandStream builds connected SEO systems that generate more booked service calls. See how.",
  canonicalUrl: `${SITE_URL}/plumbing-seo`,
  keywords: "plumbing SEO, plumbing SEO services, SEO for plumbers, plumbing company SEO, plumber local SEO, plumbing marketing",

  hero: {
    headline: "Plumbing SEO Services That Drive",
    highlightedText: "More Booked Service Calls",
    subheadline: {
      intro: "When a homeowner searches 'emergency plumber near me,' they are not browsing options. They are calling whoever shows up first.",
      bullets: [
        "A burst pipe discovered at midnight",
        "A main line backup on a Sunday morning",
        "A water heater that stopped working at 10pm"
      ],
      closing: "The decision happens in seconds. Whoever shows up in the Map Pack gets the call. If your plumbing company is not in the Map Pack and the top organic results for the searches that matter in your market, a competitor gets those calls. Plumbing SEO from DemandStream changes that — with a connected strategy built around how plumbing customers actually search, compare, and call. No generic contractor marketing. Plumbing companies only."
    },
    qualifierLine: "No generic home services approach. Built for plumbing operators only.",
    ctaText: "Get a Free Plumbing SEO Audit",
    ctaSubtext: "Built for plumbing companies in competitive local markets."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Generic Contractor SEO Fails Plumbing Companies",
    intro: "Plumbing is not a general home services business. It is an emergency-driven, reputation-sensitive, capacity-constrained trade where the buying decision happens in under two minutes. A dentist SEO strategy and a plumbing SEO strategy have almost nothing in common. Generic contractor packages apply the same keyword lists, the same content templates, and the same link building tactics to every trade. They don't account for how plumbing calls actually come in, or what makes a homeowner choose one plumber over another when they're standing in two inches of water.",
    introCallout: "When a homeowner's pipe bursts at midnight, they don't browse. They search and call whoever shows up in the Map Pack. Plumbing SEO has to be built around that urgency — not applied from a template designed for dentists and dog groomers.",
    painPoints: [
      {
        icon: Zap,
        title: "Emergency Intent Dominates",
        body: "The majority of high-value plumbing searches are urgent. 'Emergency plumber near me.' 'Water heater not working.' 'Burst pipe repair.' These are not research queries. The searcher has a problem right now and they are calling within minutes of finding a result. Plumbing SEO has to prioritize this intent pattern first."
      },
      {
        icon: MapPin,
        title: "Proximity Shifts Rankings Dramatically",
        body: "A plumbing company ranking #1 from three miles away may not appear at all for a searcher across the service area. Local rankings are proximity-weighted. A strategy that targets broad city-level keywords without accounting for service radius and ZIP-level competition leaves revenue on the table."
      },
      {
        icon: Award,
        title: "Review Velocity Is a Trust Signal, Not a Bonus",
        body: "When a homeowner finds two plumbers in the Map Pack, the one with 180 reviews and a response to each one gets the call. Review recency, volume, and response discipline are direct ranking factors and direct conversion factors. Generic SEO packages treat reviews as an afterthought."
      },
      {
        icon: Search,
        title: "Service Specificity Matters for Rankings",
        body: "A homeowner searching 'tankless water heater installation near me' has different intent than one searching 'plumber near me.' Generic plumbing pages that try to rank for everything rank well for nothing. Each distinct service — drain cleaning, slab leak detection, repiping, hydro jetting — needs its own page."
      },
      {
        icon: Phone,
        title: "After-Hours Calls Are High-Margin Calls",
        body: "Plumbing emergencies don't follow business hours. After-hours calls — burst pipes on weekends, no-hot-water calls on holidays — are often the highest-margin jobs in the mix. Plumbing SEO has to maintain visibility 24 hours a day, and your GBP has to be configured to capture that after-hours demand."
      }
    ],
    systemClosing: "Effective plumbing SEO requires scoping to the actual market — not templated deliverables applied from a generic contractor package.",
    closingLine: "That is why our plumbing SEO work performs consistently",
    closingHighlight: "across different markets and service areas.",
    ctaText: "Schedule a Discovery Call"
  },

  outcomes: {
    headline: "What Changes When Plumbing SEO Works",
    subheadline: "These outcomes only appear when strategy matches how plumbing demand actually works.",
    items: [
      {
        title: "More Emergency Bookings",
        description: "The calls that matter most in plumbing are the ones that happen at the worst times. When your company ranks in the Map Pack and the top organic results for emergency plumber searches in your service area, those calls come to you — not the competitor who outspent you on ads last month. Emergency SEO visibility compounds. Every month you hold position, the calls keep coming."
      },
      {
        title: "Higher Booking Rate on Organic Calls",
        description: "Organic local searchers are pre-qualified. They found your company because you showed up for the exact service they needed in the area they needed it. That intent consistency produces better booking rates than broad paid traffic. A homeowner searching 'hydro jetting near me' who finds your dedicated hydro jetting page is closer to booking than a general ad click."
      },
      {
        title: "Competitive Defense in Your Service Area",
        description: "If your plumbing company is not ranking for water heater replacements, slab leaks, and drain cleaning in your market, a competitor is. Local SEO is as much about holding your position as it is about gaining new ground. A competitor with 300 reviews, consistent GBP activity, and strong service area pages will outbook you on emergency calls regardless of how good your techs are."
      },
      {
        title: "Revenue Stability Through Predictable Call Flow",
        description: "Plumbing revenue spikes around freeze events, burst pipes, and water heater failures. When your organic presence is strong year-round — not just during emergencies — you build a more stable baseline of drain cleaning, water heater maintenance, and repiping calls. That baseline is what lets you plan capacity, manage payroll, and grow without relying entirely on seasonal spikes."
      }
    ]
  },

  roadmap: {
    eyebrow: "The System",
    headline: "Our Plumbing SEO System",
    subheadline: "A phased approach built for plumbing operators. Every phase has a purpose. Every phase builds on the last. We do not run campaigns before the foundation is solid. We do not chase rankings before the GBP is refined. We do not scale before we know your booking rate can handle the volume. The sequence matters.",
    phases: [
      {
        phase: 1,
        name: "Technical Foundation",
        title: "Technical & On-Page Foundation",
        description: "Build a crawlable, revenue-aligned plumbing SEO structure that converts high-intent searches into booked calls. The technical foundation determines your ranking ceiling — a plumbing company with a slow, poorly structured site and duplicate service pages cannot outrank a competitor with clean architecture, no matter how many links they build.",
        activities: [
          "Separate, properly structured pages for each plumbing service — no catch-all 'Plumbing Services' page that dilutes relevance across every keyword",
          "Clean, short URLs aligned to service + city structure: /water-heater-replacement-dallas/ not /services/plumbing/water-heaters/dallas-tx-2/",
          "Service cluster architecture: hub pages linking to sub-service pages and city pages in a logical hierarchy",
          "CTR-driven title tags: 'Water Heater Replacement in [City] | Same-Day Service' — not 'Our Water Heater Services'",
          "Ad-style meta descriptions that speak to urgency and booking, not feature lists",
          "Schema markup: LocalBusiness, Plumber, Service, FAQ, and Review",
          "Mobile-first speed — most emergency plumbing searches happen on a phone, often with poor signal",
          "Click-to-call prominence on every service page and landing page",
          "Internal linking across the plumbing service cluster — every sub-service page connects to the hub",
          "NAP consistency audit across all directories"
        ],
        expect: [
          "By the end of this phase, your site is built to rank for specific plumbing searches — not just appear for generic contractor queries. A homeowner searching 'slab leak detection near me' lands on a dedicated slab leak page with a clear call path. That page is fast, mobile-refined, and structured to produce a call, not a bounce.",
          "When a motivated customer finds your site at 11pm with a burst pipe, nothing should stand between them and calling your number. Technical SEO makes sure it doesn't."
        ],
        walkAway: [
          "Complete technical SEO audit and priority fix list",
          "Full plumbing service cluster architecture built and implemented",
          "On-page improvement across all core service and city pages",
          "Plumber schema markup and LocalBusiness schema implementation",
          "Mobile performance audit and remediation",
          "Internal linking map across the plumbing cluster"
        ],
        icon: Shield,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "GBP & Maps",
        title: "Google Maps & GBP Improvement",
        description: "Win Map Pack visibility for the plumbing searches that drive emergency calls and same-day bookings. The Map Pack is where most emergency plumbing calls originate — a main line backup at 9pm, a water heater that failed on a Sunday, a burst pipe during a freeze event. If your GBP is incomplete, stale, or miscategorized, you are invisible at the moment the revenue decision happens.",
        activities: [
          "Primary category set to 'Plumber' — not 'Home Services' or 'Contractor,' which dilute relevance",
          "Secondary categories selected for highest-revenue adjacent services: 'Drainage Service,' 'Water Damage Restoration Service' where applicable",
          "GBP services catalog built to mirror website service pages — every service with a dedicated page gets a GBP services entry",
          "Service area configuration aligned to actual dispatch radius, not just the major city name",
          "Weekly real-job photo uploads with location and service context",
          "Post-job SMS review acquisition system — automated, compliant, and consistent",
          "Response system for every review — positive, negative, and no-text ratings",
          "Seasonal GBP posting calendar: freeze prep in fall, water heater content before winter, drain cleaning in spring, emergency coverage year-round",
          "Service-specific language encouraged in review requests: 'Mention the service you had done and how quickly we responded'"
        ],
        expect: [
          "A plumbing company with a fully refined, actively maintained GBP holds Map Pack position more consistently than one running on a set-it-and-forget-it profile. Emergency searches surface your business at the exact moment the homeowner is ready to call. Same-day booking calls — the ones that fill your board without any back-and-forth — come disproportionately from Maps.",
          "If a competitor is in the Map Pack and you are not, they are booking your calls. This phase closes that gap."
        ],
        walkAway: [
          "Fully refined Google Business Profile — categories, services, service area, attributes",
          "Structured review acquisition workflow integrated into your job completion process",
          "Review response system and schedule",
          "Seasonal posting calendar tied to plumbing demand patterns",
          "Service area configuration aligned to dispatch reality"
        ],
        icon: Map,
        color: "hsl(200, 70%, 50%)"
      },
      {
        phase: 3,
        name: "Authority & Reviews",
        title: "Authority & Review Growth",
        description: "Build the prominence signals that stabilize rankings and strengthen trust on every call. Plumbing is a trust-first trade. Before a homeowner lets a plumber into their house, they check reviews. Before Google ranks a plumbing company in the Map Pack, it evaluates authority signals. Both processes reward the same inputs: consistent reviews, credible links, and clean citation data.",
        activities: [
          "Local link acquisition: plumbing trade associations (PHCC), local Chamber of Commerce, supplier directories, local business publications",
          "Citation cleanup: NAP consistency across Yelp, HomeAdvisor, BBB, Angi, and all data aggregators",
          "Trade-aware blog content targeting long-tail plumbing searches: 'how long does water heater replacement take,' 'signs of a slab leak,' 'what causes low water pressure'",
          "Review response discipline: consistent, service-specific responses that reinforce keyword relevance",
          "Review velocity tracking: monitoring cadence, identifying gaps, and escalating acquisition during slow periods",
          "Website review integration with schema markup for rich results"
        ],
        expect: [
          "Authority signals stabilize Map Pack rankings against algorithm updates and competitor campaigns. A plumbing company with 250 reviews, strong local links, and consistent citation data holds position better through ranking volatility than one with thin authority and occasional review activity.",
          "More 5-star proof also has a direct impact on close rate and average ticket. A homeowner who sees 200 reviews mentioning same-day service, professional techs, and transparent pricing is less likely to price-shop. That reduces discount pressure and improves margin on every call."
        ],
        walkAway: [
          "Local link portfolio from trade-relevant and geo-relevant sources",
          "Citation profile cleanup report and consistency monitoring",
          "Review velocity baseline and tracking dashboard",
          "Authority content targeting long-tail plumbing intent searches"
        ],
        icon: TrendingUp,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Market Defense",
        title: "Market Defense & Expansion",
        description: "Protect your plumbing market position and scale strategically as capacity allows. Rankings are not permanent assets. Competitors improve their GBPs, run review campaigns, and build new service pages. Market defense is not passive maintenance — it is an active, ongoing process.",
        activities: [
          "Competitor review and ranking monitoring in your plumbing service area",
          "Ranking volatility tracking with early-warning alerts before drops affect call volume",
          "Service area expansion aligned to truck capacity, not just market opportunity",
          "Defensive content for high-margin plumbing services: slab leak detection, repiping, water heater replacement, hydro jetting",
          "Emergency keyword capture pages for high-urgency searches: 'burst pipe repair near me,' '24-hour plumber near me,' 'water heater not working'",
          "Call tracking integration with booking rate data — tied to source, page, and time of day",
          "Capacity-based marketing throttling: accelerate during slow seasons, protect dispatch during peak freeze events and summer surge"
        ],
        expect: [
          "This phase prevents the outcomes that hurt plumbing operators most: a competitor pulling ahead during a freeze event, ranking drops after a Google update, dispatch overload from marketing that pushes volume the operation cannot handle. Plumbing SEO that doesn't align with operational capacity creates chaos, not growth.",
          "Expansion without capacity planning burns out your office and your techs. Growth with capacity alignment builds a company that can run more trucks and more markets without breaking."
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
      }
    ],
    executionNote: "Each phase builds on the previous. Technical foundation work is non-negotiable. Content without technical health underperforms. Links without content have nothing to point to.",
    footerNote: "Most plumbing companies see meaningful ranking movement within 3 to 4 months, with significant Map Pack improvement by month 6."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull in Competitive Plumbing Markets",
    subheadline: "Each component is scoped based on your plumbing market's competition level, your current rankings, and your specific revenue goals. No standard packages. No fixed deliverable lists that ignore what your market actually requires.",
    blocks: [
      {
        title: "On-Page Improvement",
        slug: "on-page-optimization",
        description: "Service-specific title tags, meta descriptions, and on-page content for every distinct plumbing service and city. Built to rank for 'water heater replacement near me,' not generic contractor terms.",
        icon: FileText,
        cluster: "TECHNICAL"
      },
      {
        title: "Technical SEO",
        slug: "technical-seo",
        description: "Site architecture, crawlability, Core Web Vitals, and page speed that set your ranking ceiling. Most emergency plumbing searches happen on a phone.",
        icon: Settings,
        cluster: "TECHNICAL"
      },
      {
        title: "Local Keyword Strategy",
        slug: "local-keyword-strategy",
        description: "Plumbing-specific keyword research covering emergency intent, service intent, and location intent. Drain cleaning, water heater, and slab leak searches each get different priority weights.",
        icon: Search,
        cluster: "TECHNICAL"
      },
      {
        title: "Content Development",
        slug: "content-development",
        description: "A dedicated page for every distinct plumbing call type, plus city pages and long-tail content targeting searches like 'signs you need repiping' and 'how long does sewer line replacement take.'",
        icon: PenTool,
        cluster: "AUTHORITY"
      },
      {
        title: "Link Building",
        slug: "link-building",
        description: "Local and trade-specific outreach: PHCC links, supplier directories, Chamber listings, and community publications. Every link evaluated for geographic and trade relevance, not just domain authority.",
        icon: Link2,
        cluster: "AUTHORITY"
      },
      {
        title: "AI & Generative Search",
        slug: "ai-optimization",
        description: "Structured data, FAQ schema, and content formatting that positions your plumbing business for AI Overviews and generative search citations. So you get cited, not just ranked.",
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
        description: "Post-job review acquisition and response systems built for plumbing companies. Structured to turn every completed job into a visible 5-star review.",
        icon: Award,
        cluster: "VISIBILITY"
      },
      {
        title: "Google Business Profile",
        slug: "gbp-strategy",
        description: "Full GBP buildout and ongoing management: category alignment, photo strategy, posting calendar, and response discipline. Not a one-time setup. An ongoing ranking activity.",
        icon: Map,
        cluster: "VISIBILITY"
      }
    ]
  },

  qualification: {
    eyebrow: "Selective Fit",
    headline: "Is Plumbing SEO Right for Your Company?",
    subheadline: "We work best with established plumbing companies that want to own their service area — not just generate a few more calls this month.",
    goodFit: [
      { point: "You run a plumbing company with an active dispatch board and real service capacity — ideally 2 or more trucks", detail: "We build strategies for plumbing operators that can handle the call volume local SEO produces." },
      { point: "You want more booked service calls — not impressions, traffic reports, or 'brand awareness' metrics", detail: "We measure success in booked calls and cost per booked call — not vanity metrics." },
      { point: "You understand that plumbing SEO is a 6 to 12 month investment with compounding returns, not an overnight fix", detail: "The first three to four months are foundation work that everything else builds on." },
      { point: "You are willing to invest in review velocity as a core part of the system — not an optional add-on", detail: "Review signals account for a significant portion of local ranking weight. This is non-negotiable." },
      { point: "You want a growth partner who reports on booked calls and cost per booked call — not just rank positions", detail: "Rankings are a means to an end. Booked calls are the end." },
      { point: "You have a verified, address-visible Google Business Profile", detail: "GBP is the foundation of Map Pack visibility. A hidden-address profile has structural limitations no optimization can fully overcome." }
    ],
    notFit: [
      { point: "You expect top rankings within a few weeks", detail: "If someone promised you fast results, they were not being honest. Real plumbing SEO takes time and consistent effort." },
      { point: "Your business relies solely on a hidden-address GBP listing with no physical location verification", detail: "These profiles face significant structural limitations in local search that no amount of optimization can fully overcome." },
      { point: "You are not willing to participate in review acquisition", detail: "Review velocity is a mandatory part of the system. Plumbing companies that skip this step cap their Map Pack potential." },
      { point: "You need guaranteed specific ranking positions", detail: "Anyone guaranteeing rankings is either misleading you or has no ability to keep the promise. Google controls its algorithm." },
      { point: "You are looking for the lowest-cost option available", detail: "Effective plumbing SEO in a competitive market requires real investment. We are not the cheapest option — we are the option that produces results." },
      { point: "You are not willing to commit to a minimum 6-month engagement after roadmap delivery", detail: "The first three months are foundation work. You need time for the system to compound before evaluating results." }
    ],
    ctaText: "Start the Conversation"
  },

  faq: {
    headline: "Frequently Asked Questions About Plumbing SEO",
    groups: [
      {
        category: "Results & Timing",
        items: [
          {
            question: "How long does plumbing SEO take to produce booked calls?",
            answer: "For most plumbing companies, meaningful ranking movement begins within 3 to 4 months of completing the technical foundation phase. Map Pack visibility improvements typically follow in months 4 through 6, assuming the GBP improvement phase runs concurrently with on-page work. The timeline depends on three variables: your current baseline, your market competition, and how quickly we can close technical gaps. A plumbing company in a mid-sized market with a relatively clean site and moderate Map Pack competition moves faster than one in a dense metro going up against five well-refined competitors. What we can say with confidence: plumbing SEO compounds. The calls generated in month 8 come from foundation work done in month 2."
          },
          {
            question: "How much does plumbing SEO cost?",
            answer: "We do not publish package pricing because every engagement is scoped to your specific market, competition level, and revenue goals. A plumbing company in a smaller market with a clean GBP and a solid existing site has different needs than one in a large metro competing against 30 active plumbing SEO campaigns. What we can tell you is how we frame cost: every dollar invested in plumbing SEO should be measurable against booked calls and cost per booked call. If we cannot show a clear line from marketing spend to calls on your dispatch board, the spend is not justified. The audit and roadmap phase gives you a clear picture of what your market requires and what the investment looks like before you commit to implementation."
          },
          {
            question: "Do you guarantee plumbing SEO rankings?",
            answer: "No. Any agency that guarantees specific ranking positions is either misleading you or making a promise they have no ability to keep. Google controls its algorithm. We do not. What we control — and what we are accountable for — is execution quality: technical foundation, GBP improvement, review velocity systems, link building, and service cluster content. Those inputs, done correctly and consistently, produce ranking improvements in virtually every market we operate in. We measure success in booked calls, booking rate, and cost per booked call — not in rank position fluctuations that can swing 3 positions on any given day and mean nothing on their own."
          },
          {
            question: "What if we already have some organic rankings for plumbing searches?",
            answer: "Existing rankings are an asset we build on, not something we reset. If your plumbing company already ranks for some searches, the audit phase identifies which rankings are stable and producing calls, which are fragile and at risk, and which service areas and keywords have significant untapped opportunity. A common pattern we see: a plumbing company has decent rankings for 2 or 3 broad service terms but almost no visibility for high-value searches like 'slab leak detection near me,' 'tankless water heater installation,' or specific service area combinations. The opportunity is usually in the gaps — the specific, high-intent searches that generic plumbing pages miss entirely."
          },
          {
            question: "How do you measure the success of plumbing SEO?",
            answer: "We measure against the numbers that matter on a plumbing operator's dispatch board: booked calls, answer rate, booking rate, cost per booked call, and source-level call attribution. Rankings are a leading indicator, not a success metric. Monthly reporting includes ranking movement for target keywords and service areas, GBP performance metrics — calls, direction requests, and profile interactions — review velocity, and call tracking data tied to organic search. If rankings are moving but booked calls are not, we investigate the conversion gap and address it before scaling volume."
          }
        ]
      },
      {
        category: "Eligibility & Fit",
        items: [
          {
            question: "Do you work with multiple plumbing companies in the same market?",
            answer: "No. We take one plumbing client per service area. When you work with DemandStream, your direct competitors in that market do not. This is a deliberate model. It keeps our incentives aligned with yours and makes sure the strategy we build is designed to put your company ahead — not split across two or three competitors in the same ZIP codes. If your market is available, it is worth finding out before a competitor does."
          },
          {
            question: "Can you take over from another SEO provider?",
            answer: "Yes. Many of our plumbing clients come to us after working with generalist agencies that produced rankings without revenue, or activity without transparency. We start with a full audit of what exists — what is working, what is not, and what may have been done that needs correction. We do not approach this with blame toward the previous agency. We assess the baseline, identify the gaps, and build from what is there. If there is ranking equity worth preserving, we preserve it. If there is work that needs to be corrected — thin service pages, citation inconsistencies, a mismanaged GBP — we address it in the foundation phase."
          },
          {
            question: "What size plumbing companies do you typically work with?",
            answer: "We work with plumbing companies running 2 trucks through multi-location operations. The common thread is not size — it is mindset. The plumbing operators who see the strongest results are the ones who treat marketing as an investment aligned to operations, not an expense that should produce immediate returns. Single-truck owner-operators can benefit from plumbing SEO, but the ROI math works best when there is enough dispatch capacity to handle increasing call volume."
          },
          {
            question: "How do you handle communication and reporting?",
            answer: "You receive a monthly report that covers what actually matters on your dispatch board: booked calls by source, ranking movement for your target plumbing keywords, GBP performance metrics — calls, direction requests, and photo views — and review velocity. No vanity dashboards. No impressions graphs. The numbers that connect back to revenue. Beyond monthly reports, we communicate proactively. If something shifts in your rankings, if a competitor runs a review campaign, or if a Google update affects your visibility, you hear from us before it shows up as a problem in your call volume."
          }
        ]
      },
      {
        category: "Plumbing SEO vs. Paid Ads",
        items: [
          {
            question: "Should I run plumbing SEO or Google Ads?",
            answer: "Both, ideally — but with different expectations for each. Google Ads delivers immediate visibility for emergency plumbing searches. If someone searches 'emergency plumber near me' right now, a well-run Google Ads campaign can put you in front of that caller today. Plumbing SEO cannot do that in week one. What plumbing SEO does that paid ads cannot: it builds a compounding asset. Rankings you earn in month 4 keep producing calls in month 14 without additional spend. The optimal strategy for most plumbing companies is paid ads during the SEO ramp-up, then a rebalanced mix as organic visibility builds."
          },
          {
            question: "How is plumbing SEO different from running Google Ads?",
            answer: "Paid ads generate calls while the campaign is running. When the budget stops, the calls stop. Plumbing SEO generates calls that compound over time. Rankings built in month 3 continue driving booked calls in month 18, month 24, and beyond — without proportional increases in spend. The two are not mutually exclusive. Paid ads are often the right strategy during the ramp-up phase of an SEO campaign, especially for emergency plumbing searches where immediate Map Pack or top-of-page visibility matters. SEO and paid ads work better together than either does alone. But the long-term economics of plumbing SEO — compounding visibility, lower cost per booked call over time, and protection against paid competition — make it the more durable investment."
          },
          {
            question: "What is your content creation process for plumbing SEO?",
            answer: "Every page we write is built around a specific plumbing search intent — not repurposed content from a generic contractor template. A water heater replacement page is written differently than a slab leak detection page, because the caller is different, the urgency level is different, and the conversion path is different. We write service pages, city pages, and supporting blog content. All content goes through a plumbing-specific review before it goes live. We do not publish pages that read like they could belong to any contractor in any trade. If a page could rank for HVAC with a find-and-replace, it is not doing its job for your plumbing company."
          },
          {
            question: "How do you build links for plumbing companies?",
            answer: "Link building for plumbing SEO focuses on trade relevance and geographic relevance — not raw domain authority. A link from the Plumbing-Heating-Cooling Contractors Association (PHCC), a regional plumbing supplier directory, a local Chamber of Commerce, or a community publication carries more weight for a plumbing company's local rankings than a generic high-DA link from an unrelated industry. We also prioritize citation consistency across all major data aggregators and plumbing-relevant directories. Clean NAP data validates your business identity across local search, which directly supports both Maps and organic rankings."
          }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Plumbing SEO Is Part of a",
    highlightedText: "Bigger Growth System",
    intro: "Plumbing SEO drives organic visibility and Map Pack rankings. But it produces the strongest results when it works with the rest of the marketing system — not in isolation from it.",
    body: "Your plumbing SEO feeds your Google Maps performance. Your GBP reviews improve your paid ad quality scores. Your email marketing reactivates past customers before they search for a new plumber. Your reporting dashboard ties all of it together into one clear picture of cost per booked call by source.\n\nWhen every channel is connected and pulling toward the same outcome, you get predictable call flow you can build a schedule around. When they run independently, you get gaps. Gaps mean calls going to competitors.",
    services: [
      {
        icon: Droplets,
        id: "plumbing-seo",
        title: "Plumbing SEO",
        description: "Organic visibility and Map Pack rankings for plumbing searches.",
        href: "/plumbing-seo",
        isCenter: true
      },
      {
        icon: Map,
        id: "google-maps",
        title: "Google Maps / GBP",
        description: "Dominate the local 3-pack with optimized Google Business Profiles.",
        href: "/plumbing-google-maps"
      },
      {
        icon: Sparkles,
        id: "paid-media",
        title: "Plumbing Google Ads",
        description: "Capture emergency demand immediately while organic visibility builds.",
        href: "/plumbing-paid-advertising"
      },
      {
        icon: Mail,
        id: "email",
        title: "Plumbing Email Marketing",
        description: "Reactivate past customers before they search for a new plumber.",
        href: "/plumbing-email-marketing"
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
        href: "/plumbing-reporting"
      }
    ],
    ctaText: "Explore All Plumbing Services",
    ctaHref: "/hvac-and-plumbing-seo"
  }
};
