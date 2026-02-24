import { MapPin, Map, Target, TrendingUp, Shield, Search, FileText, Link2, Settings, Code, Zap, Globe, Sparkles, Mail, BarChart3, Award, PenTool, Phone, Bot } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const localSEOConfig: ServicePageConfig = {
  slug: "local-seo",
  title: "Local SEO",
  metaTitle: "Plumbing & HVAC Local SEO Services for More Booked Calls | DemandStream Digital",
  metaDescription: "Tired of local SEO that reports rankings but not revenue? DemandStream builds connected local SEO systems for plumbing and HVAC companies that generate more booked service calls. See how.",
  canonicalUrl: `${SITE_URL}/hvac-and-plumbing-seo`,

  hero: {
    headline: "Local SEO for Plumbing & HVAC Companies",
    highlightedText: "That Want More Booked Service Calls",
    subheadline: "Most plumbing and HVAC companies are invisible in local search during the moments that matter most. When a homeowner searches for a water heater replacement or an emergency no-cool call, the top three results in Google Maps take the call. Everyone else waits. Plumbing and HVAC local SEO from DemandStream is built to put your company in those three spots and keep it there. Not with templated packages. With a connected strategy built around how customers search for plumbers and HVAC companies in your specific market.",
    qualifierLine: "No generic home services approach. Built for plumbing and HVAC operators only.",
    ctaText: "Get a Free Local SEO Audit",
    ctaSubtext: "Built for plumbing and HVAC companies in competitive local markets."
  },

  problem: {
    eyebrow: "The Pattern We See",
    headline: "Why Cookie-Cutter Local SEO Fails Plumbing & HVAC Companies",
    intro: "Plumbing and HVAC are not generic home service businesses. They are regulated, seasonal, capacity-constrained trades where a missed call in peak season is real revenue walking out the door. Generic local SEO packages don't account for any of that.",
    introCallout: "When a homeowner's AC goes out in July, they don't browse. They search and they call whoever shows up first. Plumbing and HVAC local SEO has to be built around that urgency, not applied from a template that works the same way for a dentist or a dog groomer.",
    painPoints: [
      {
        icon: MapPin,
        title: "Proximity Changes Everything",
        body: "A plumbing company ranking #1 from three miles away may not appear at all from across the service area. Local rankings shift based on where the searcher is standing. A strategy built around one ZIP code is not a strategy — it's a starting point."
      },
      {
        icon: Search,
        title: "Emergency Intent Is Different",
        body: "A homeowner searching 'no-heat repair' at 6am on a cold morning is not comparison shopping. That call goes to whoever shows up in the Map Pack right now. HVAC local SEO and plumbing local SEO have to prioritize emergency and high-intent searches first — not just high-volume keywords."
      },
      {
        icon: Target,
        title: "Competition Varies by Market",
        body: "A plumber in Boise competes in a completely different landscape than one in Dallas or Chicago. Market density, review counts, and GBP signal requirements are different in every market. Applying the same tactics everywhere produces inconsistent results."
      },
      {
        icon: TrendingUp,
        title: "Review Velocity Drives Rankings",
        body: "Review volume, recency, and response discipline are direct ranking factors in local search. Most generic SEO packages treat reviews as an afterthought. In plumbing and HVAC, review velocity is one of the highest-leverage activities in the entire strategy."
      },
      {
        icon: Shield,
        title: "Authority Requirements Differ",
        body: "Some markets require aggressive local link building. Others need citation cleanup and GBP signal refinement. A package that delivers the same deliverables everywhere misses the actual bottleneck in each market."
      }
    ],
    systemClosing: "Effective plumbing & HVAC local SEO requires scoping to the actual market — not templated deliverables.",
    closingLine: "That is why our local SEO work performs consistently",
    closingHighlight: "across different markets and trade types.",
    ctaText: "Schedule a Discovery Call"
  },

  outcomes: {
    headline: "What Actually Changes When Local SEO Works",
    subheadline: "These outcomes only appear when strategy matches market reality.",
    items: [
      {
        title: "More Booked Service Calls",
        description: "Rankings achieved today continue driving booked calls months and years from now. Unlike paid ads, local SEO compounds. Every improvement to your Maps position, your review velocity, and your service area pages builds on the last. The calls don't stop when you stop paying."
      },
      {
        title: "Higher-Quality Calls",
        description: "Organic local searchers are ready to book. They have a problem that needs solving today. When your company shows up in the Map Pack for 'water heater replacement near me' or 'HVAC tune-up,' the person calling already knows they need service. Fewer price shoppers. Better booking rate."
      },
      {
        title: "Competitive Defense",
        description: "If your company is not ranking in your market, someone else is taking those calls. Local SEO is as much about protecting your market position as it is about growing. A competitor with strong Maps visibility and consistent review velocity will consistently outbook a company that ignores local search."
      },
      {
        title: "Revenue Stability",
        description: "Predictable local visibility reduces the volatility that makes dispatch planning difficult. When your organic presence is strong across your service area — for emergency calls, seasonal demand, and planned maintenance — you build a more stable call flow. That stability protects capacity and margin."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Five Pillars",
    headline: "How We Execute Plumbing & HVAC Local SEO",
    subheadline: "We don't work in sequential phases. We operate across five pillars simultaneously, prioritizing based on your market and what moves the needle fastest.",
    phases: [
      {
        phase: 1,
        name: "On-Page & Technical",
        title: "On-Page & Technical SEO",
        description: "The foundation everything else builds on. Clean site architecture, optimized service pages, and technical health that lets Google crawl, index, and rank your content.",
        activities: [
          "Separate, properly structured pages for plumbing and HVAC services",
          "Clean URLs aligned to service + city structure and truck coverage radius",
          "Primary keyword in H1, CTR-driven title tags, and ad-style meta descriptions",
          "Schema markup: LocalBusiness, Service, FAQ, and Review",
          "Mobile-first performance and Core Web Vitals optimization",
          "Click-to-call prominence on every key page",
          "NAP consistency audit across all platforms",
          "Internal linking structure supporting plumbing and HVAC authority silos",
          "Complete technical SEO audit and priority fix list",
          "Service category buildouts for each trade and location"
        ],
        icon: Shield,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "GBP Optimization",
        title: "Google Business Profile & Maps",
        description: "Over 70% of local searches end at the Map Pack. For emergency plumbing and HVAC calls, Maps is where the revenue decision happens. GBP optimization starts on day one.",
        activities: [
          "Primary and secondary category selection aligned to highest-revenue services",
          "Fully built-out services list with service-specific descriptions",
          "Accurate service area configuration aligned to truck coverage",
          "Weekly photo uploads with location and service relevance",
          "Geo-aligned content updates tied to seasonal demand patterns",
          "Active GBP posting tied to seasonal demand cycles",
          "Seasonal GBP posting calendar and service area alignment"
        ],
        icon: Map,
        color: "hsl(200, 70%, 50%)"
      },
      {
        phase: 3,
        name: "Off-Page & Authority",
        title: "Authority & Link Building",
        description: "Rankings in competitive markets require more than clean pages and a strong GBP. Prominence signals are built deliberately through local link acquisition and strategic content.",
        activities: [
          "Local link acquisition: Chamber of Commerce, trade associations, suppliers",
          "Citation cleanup: NAP consistency across directories and data aggregators",
          "Trade-aware blog and authority content targeting high-intent long-tail searches",
          "Local link portfolio aligned to trade and geography",
          "Guest post and authority link building where budget allows"
        ],
        icon: TrendingUp,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Engagement & Reputation",
        title: "Reputation Management & Acceleration",
        description: "Review velocity, response discipline, and engagement signals that compound rankings and trust. There is always room to grow. This pillar ensures you keep accelerating.",
        activities: [
          "Post-job SMS review acquisition system",
          "Review response discipline with service-specific replies",
          "Review velocity tracking and gap identification",
          "Website review integration with schema markup for rich results",
          "Competitive review monitoring and response strategy",
          "Call tracking integration with booking rate optimization",
          "Service area expansion aligned to capacity and truck coverage",
          "Defensive content for high-margin services: water heater replacements, HVAC changeouts, slab leak repairs",
          "Emergency keyword capture pages for high-urgency, high-conversion searches",
          "Capacity-based marketing throttling: pulling back when boards are full, accelerating during shoulder season"
        ],
        icon: Target,
        color: "hsl(280, 60%, 55%)"
      },
      {
        phase: 5,
        name: "AI & GEO",
        title: "AI Optimization & Generative Engine Visibility",
        description: "AI-powered search is changing how customers find plumbing and HVAC companies. We optimize your presence for AI Overviews, generative search engines, and conversational AI platforms so your business gets cited, not just ranked.",
        activities: [
          "FAQ schema markup optimized for AI Overview citations",
          "Structured data aligned to generative engine extraction patterns",
          "Content structured for conversational AI retrieval and citation",
          "Entity optimization to strengthen knowledge graph signals",
          "AI Overview monitoring and citation tracking",
          "Question-based content targeting AI-surfaced queries",
          "Local authority signals that reinforce AI trust and citation likelihood"
        ],
        icon: Bot,
        color: "hsl(200, 80%, 55%)"
      }
    ],
    executionNote: "All five pillars run concurrently. Priority is scoped to your market — what moves the needle fastest gets the most attention first.",
    footerNote: "Most businesses see meaningful movement within 3 to 4 months, with substantial results by month 6."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "The Levers We Pull Based on Market Reality",
    subheadline: "Each component is scoped based on your market competition and goals — not bundled into a package that delivers the same thing everywhere.",
    blocks: [
      {
        title: "On-Page Optimization",
        slug: "on-page-optimization",
        description: "Location-specific title tags, meta descriptions, headers, and on-page content that targets how customers in your market search for plumbing and HVAC services.",
        icon: FileText
      },
      {
        title: "Technical SEO",
        slug: "technical-seo",
        description: "Site architecture, crawlability, Core Web Vitals, and technical fixes that establish the ranking ceiling. Foundation work that makes every other tactic more effective.",
        icon: Settings
      },
      {
        title: "Local Keyword Strategy",
        slug: "local-keyword-strategy",
        description: "Seed keyword development, implicit vs. explicit local intent classification, competitor gap analysis, and keyword-to-URL mapping aligned to your service area and truck coverage.",
        icon: Search
      },
      {
        title: "Content Development",
        slug: "content-development",
        description: "Service area pages, trade-specific blog content, and FAQ sections built to capture high-intent local searches and turn that visibility into calls.",
        icon: FileText
      },
      {
        title: "Link Building",
        slug: "link-building",
        description: "Outreach to local publications, community organizations, trade associations, and relevant industry sites to build geographic authority that strengthens Map Pack and organic rankings.",
        icon: Link2
      },
      {
        title: "AI & GEO Optimization",
        slug: "ai-optimization",
        description: "Structured data, FAQ schema, entity optimization, and content formatting that positions your business for AI Overviews, generative search engines, and conversational AI citations.",
        icon: Bot
      },
      {
        title: "NAP Citations",
        slug: "nap-citations",
        description: "NAP consistency audits, citation cleanup, and strategic directory submissions that validate business identity for rankings, trust signals, and AI search visibility.",
        icon: Globe
      },
      {
        title: "Local Reputation Management",
        slug: "reputation-management",
        description: "Review generation systems, response management, and reputation monitoring that build trust signals and directly influence local ranking performance.",
        icon: Award
      },
      {
        title: "Google Business Pro",
        slug: "gbp-strategy",
        description: "Advanced Google Business Profile strategy including post scheduling, Q&A management, photo optimization, and attribute management to maximize local pack visibility.",
        icon: Map
      }
    ]
  },

  qualification: {
    eyebrow: "Selective Fit",
    headline: "Is This Local SEO Strategy Right for Your Business?",
    subheadline: "We work best with established plumbing and HVAC companies that want to own their service area — not just generate random traffic.",
    goodFit: [
      { point: "You run a plumbing or HVAC company with an active dispatch board and real service capacity", detail: "We build strategies for shops that can actually handle the call volume local SEO produces." },
      { point: "You want more booked service calls — not impressions, clicks, or 'brand awareness'", detail: "We measure success in booked calls and cost per booked call — not vanity metrics." },
      { point: "You understand that local SEO is a 6 to 12 month investment, not an overnight fix", detail: "The first three to four months are foundation work that everything else builds on." },
      { point: "You are willing to invest in review velocity as part of the system", detail: "Review signals account for a significant portion of local ranking weight. This is non-negotiable." },
      { point: "You want a growth partner who reports on booked calls and cost per booked call — not just rankings", detail: "Rankings are a means to an end. Booked calls are the end." }
    ],
    notFit: [
      { point: "You expect top rankings within weeks", detail: "If someone promised you fast results, they were not being honest. Real SEO takes time and consistent effort." },
      { point: "Your business relies solely on service-area or address-hidden Google Business Profile listings", detail: "These profiles face significant structural limitations in local search that no amount of optimization can fully overcome." },
      { point: "You are not willing to invest in content, links, or reviews", detail: "Local SEO requires ongoing content and authority building. If the budget only covers 'basic optimization,' results will reflect that." },
      { point: "You need guaranteed specific ranking positions", detail: "Anyone guaranteeing rankings is either misleading you or has no idea what they are promising. We focus on systematic improvement and accountability." },
      { point: "You are looking for the cheapest option available", detail: "Effective local SEO for competitive trades requires real investment. We are not the cheapest option — we are the option that produces results." }
    ],
    ctaText: "Start the Conversation"
  },

  faq: {
    headline: "FAQ for Plumbing and HVAC Contractors",
    groups: [
      {
        category: "Results & Timing",
        items: [
          { question: "How long does local SEO take to produce booked calls?", answer: "The honest answer depends on three things: your current baseline, your market competition, and how quickly we can close technical gaps. In most cases, plumbing and HVAC companies start seeing measurable movement in local rankings within 3 to 4 months of completing the technical foundation phase. Meaningful improvements to Map Pack visibility typically follow in months 4 through 6. The reason SEO takes time is not mysterious. Google has to crawl and index changes, review signals have to accumulate, and authority builds incrementally. What does not take time is identifying where you are leaking calls right now. The audit phase shows that immediately. Local SEO compounds. A company that starts today and stays consistent will have significantly stronger local visibility in 12 months than one that waits. The calls you generate in month 8 come from work done in month 2." },
          { question: "How much does plumbing or HVAC local SEO cost?", answer: "We do not publish package pricing because every engagement is scoped to your market, your competition, and your specific revenue goals. A plumbing company in a mid-sized market with a clean GBP and moderate competition has different needs than an HVAC company in a dense metro with 50 competitors all running active SEO campaigns. What we can tell you is how we think about cost: every dollar of SEO investment should be measurable against booked calls and cost per booked call. If we cannot show you a clear line from marketing spend to calls on your dispatch board, the spend is not justified. The audit phase gives you a clear picture of what your market requires and what the investment looks like before you commit to implementation. There are no surprises." },
          { question: "Do you guarantee specific rankings?", answer: "No. Any agency that guarantees specific rankings is either misleading you or has no idea what they are promising. Google controls its algorithm. We do not. What we do control — and what we are accountable for — is execution quality: technical foundation, GBP optimization, review velocity systems, authority building, and content that targets the right intent. Those inputs, done consistently and correctly, produce ranking improvements over time. That is what we stand behind. We measure success in booked calls, booking rate, and cost per booked call — not in rank position fluctuations that mean nothing on their own." },
          { question: "How do AI Overviews affect local SEO for plumbing and HVAC companies?", answer: "AI Overviews appear more frequently for informational and research-style searches. For high-intent local searches — 'HVAC repair near me,' 'emergency plumber [city],' 'water heater replacement [city]' — the Map Pack and standard organic results remain the dominant format. Those are the searches that produce booked calls, and local SEO directly influences them. That said, structured data, schema markup, and authoritative content do factor into AI Overview citations. The technical work we do in the foundation phase — particularly schema implementation — contributes to both traditional local visibility and emerging AI search formats." },
          { question: "What happens if rankings drop?", answer: "Ranking volatility happens. Algorithm updates, seasonal shifts, and competitor improvements all affect local rankings. Our job is to catch drops early and respond before they affect call volume. Clients receive ranking volatility monitoring and get notified when significant changes occur. We diagnose the cause, implement corrections, and report on recovery. We do not wait for the end of the month to surface a problem." }
        ]
      },
      {
        category: "Eligibility & Fit",
        items: [
          { question: "Do you work with service-area businesses that don't have a physical address listed on their GBP?", answer: "This is an important question. Google Business Profile requires a verified, address-visible listing to rank competitively in the Map Pack for most plumbing and HVAC searches. Service-area-only businesses — those that hide their address — face significant structural limitations in local search that no amount of optimization can fully overcome. If your business operates this way, we will be direct about those limitations during the audit. In some cases, there are strategies that improve visibility within those constraints. In others, the limitations are significant enough that we will tell you what we can realistically deliver before you invest." },
          { question: "Do you require long-term contracts?", answer: "We work on a minimum six-month commitment after roadmap delivery. This is not arbitrary. Local SEO produces compounding results — and the first three to four months are foundation work that everything else builds on. A 90-day engagement does not produce the outcomes that justify the investment. We are not in the business of locking clients in. We are in the business of producing results that make clients want to stay. The six-month minimum protects both sides: it gives the strategy time to work, and it gives you enough data to evaluate whether it is performing." },
          { question: "What industries do you work with?", answer: "Plumbing and HVAC only. Not general home services. Not electrical. Not roofing. Plumbing and HVAC. This is a deliberate choice. The depth of trade-specific knowledge required to execute local SEO well for plumbing and HVAC — the seasonal patterns, the keyword intent structures, the compliance signals, the review dynamics — is significant. We built everything around these two trades specifically so that we can execute at a level that a generalist agency cannot match." },
          { question: "Can you take over from another SEO provider?", answer: "Yes. A significant portion of our new clients come to us after working with generalist agencies that produced rankings without results, or results without transparency. We start with a full audit of what exists — what is working, what is not, and what has been done that may need to be corrected. We do not blame the previous agency or make promises about quick recovery. We assess the baseline and build from what is there." },
          { question: "Do you work with multiple companies in the same market?", answer: "No. We take one plumbing client and one HVAC client per service area. That is the model. It keeps our incentives aligned with yours and ensures that the strategy we build is designed to put your company ahead — not split between you and a competitor. If your market is available, it is worth finding out before someone else does." }
        ]
      },
      {
        category: "Process & Delivery",
        items: [
          { question: "How do you handle communication and reporting?", answer: "You receive clear monthly reports showing rankings, calls, booking metrics, and campaign performance. Reports are built around the numbers that show up on your dispatch board — not impressions and click-through rates. Beyond monthly reports, we communicate proactively when something changes: a ranking drop, new competitor activity, or a seasonal shift that affects campaign direction. You are not waiting until month-end to hear about a problem." },
          { question: "What access do you need from us?", answer: "At minimum: Google Business Profile access, Google Search Console access, and Google Analytics access. For clients running paid ads concurrently, Google Ads access as well. The more visibility we have into actual booking and revenue data, the better we can optimize the system." },
          { question: "What is your content creation process?", answer: "We research the keyword intent, competitive landscape, and service-specific language for your market before writing anything. Service area pages are written to rank for specific city and service combinations. Blog content targets high-intent informational searches that lead to bookings. All content goes through a review process before publishing. We do not produce generic marketing copy — everything is written from the perspective of a plumbing or HVAC expert speaking to homeowners who need service." },
          { question: "How do you build links for local businesses?", answer: "Through targeted outreach to local and trade-relevant sources: Chamber of Commerce listings, local business associations, supplier and distributor directories, trade associations like ACCA and PHCC, and locally relevant publications. We do not use link farms or low-quality directory blasts. Link building is scoped to what your market requires. Some markets need aggressive authority building. Others need citation cleanup and GBP signal work first. We do not apply the same approach everywhere." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "Local SEO Is One Piece of the",
    highlightedText: "Connected Growth System",
    intro: "Local SEO drives organic visibility in search and Google Maps. But it compounds when it works with the rest of the system — not in isolation.",
    body: "Your GBP optimization reinforces your organic rankings. Your paid ads capture demand that organic SEO misses during ramp-up. Your review velocity improves both Maps performance and paid ad quality scores. Your email marketing reactivates past customers before they search for someone new. When every channel is connected and pulling in the same direction, you get predictable call flow you can build a schedule around. When they operate in silos, you get gaps — and gaps mean calls going to competitors.",
    services: [
      {
        icon: MapPin,
        id: "local-seo",
        title: "Local SEO",
        description: "Organic visibility in local search results.",
        href: "/hvac-and-plumbing-seo",
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
        title: "Paid Advertising",
        description: "Capture demand immediately while organic visibility builds.",
        href: "/plumbing-paid-advertising"
      },
      {
        icon: Mail,
        id: "email",
        title: "Email Marketing",
        description: "Reactivate past customers before they search for someone new.",
        href: "/plumbing-email-marketing"
      },
      {
        icon: PenTool,
        id: "content",
        title: "Content Development",
        description: "Strategic content that ranks and converts.",
        href: "/plumbing-content-marketing"
      },
      {
        icon: BarChart3,
        id: "reporting",
        title: "Reporting & Dashboards",
        description: "Dashboards that prove value in booked calls.",
        href: "/plumbing-reporting"
      }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/#services"
  }
};
