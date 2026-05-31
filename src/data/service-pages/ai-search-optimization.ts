import { Bot, Sparkles, Search, MessageSquareText, Globe, Cpu, FileCode, Quote, Layers, TrendingUp, Map, Mail, PenTool, BarChart3, Target, Settings, Users, ListChecks, ShieldCheck } from "lucide-react";
import type { ServicePageConfig } from "@/types/servicePage";
import { SITE_URL } from "@/lib/constants";

export const aiSearchOptimizationConfig: ServicePageConfig = {
  slug: "ai-search-optimization",
  title: "AIO & GEO (AI Search Optimization)",
  metaTitle: "AIO & GEO for Plumbing & HVAC | AI Search Optimization | DSD",
  metaDescription: "Get cited by ChatGPT, Google AI Overviews, Perplexity and Gemini. AI search optimization (AIO) and generative engine optimization (GEO) built for plumbing & HVAC.",
  canonicalUrl: `${SITE_URL}/plumbing-and-hvac-ai-search-optimization`,

  hero: {
    headline: "AIO & GEO for",
    highlightedText: "Plumbing & HVAC Companies",
    subheadline: "Homeowners are asking ChatGPT, Google AI Overviews, Perplexity and Gemini who to call. We make sure your shop is the answer they get.",
    qualifierLine: "Built specifically for plumbing and HVAC operators. Not a generic AI checklist.",
    ctaText: "Check Your AI Visibility",
    ctaSubtext: "One plumbing client and one HVAC client per market."
  },

  problem: {
    eyebrow: "The Shift Already Happening",
    headline: "Your Next Customer Is Asking AI, Not Google",
    intro: "AI Overviews now appear on the majority of local service searches. ChatGPT, Perplexity and Gemini are pulling answers from a small handful of trusted sources. If your site is not structured for them, you are invisible at the exact moment a homeowner is choosing who to call.",
    painPoints: [
      {
        icon: Bot,
        title: "AI Picks Three Names. You Need to Be One.",
        body: "When a homeowner asks 'who is the best plumber near me,' generative engines surface two or three companies. Position four does not exist."
      },
      {
        icon: FileCode,
        title: "Your Site Was Not Built for Machines",
        body: "LLMs need clean structure, semantic HTML, schema, and entity-level context. Most contractor sites read fine to people and look like noise to a model."
      },
      {
        icon: Quote,
        title: "No Citations, No Authority",
        body: "AI answer engines weight third-party citations heavily. Without coverage in directories, reviews, and trusted local sources, models have nothing to anchor your authority to."
      },
      {
        icon: MessageSquareText,
        title: "Your Reviews Are Not Speaking AI's Language",
        body: "Generative engines parse review content for trust signals. Generic 'great service' reviews do not give the model anything specific to cite back."
      },
      {
        icon: Layers,
        title: "No One Owns This Inside Your Shop",
        body: "Your office manager is not going to fix schema markup or entity disambiguation. AI search is a discipline. It needs a system, not a side project."
      }
    ],
    closingLine: "Search did not get smaller. The window to be the answer did.",
    closingHighlight: "We build the system that puts you inside it.",
    ctaText: "See Where You Stand"
  },

  outcomes: {
    headline: "What Changes When AI Search Works for You",
    subheadline: "The outcomes operators see once they are cited by the engines homeowners actually use.",
    items: [
      {
        title: "Cited in AI Overviews and Chat Answers",
        description: "Your name surfaces inside ChatGPT, Perplexity, Gemini and Google AI Overviews when homeowners ask for plumbing or HVAC help in your market."
      },
      {
        title: "Higher-Intent Calls, Less Tire-Kicking",
        description: "Homeowners who land via AI-curated answers already know who you are and why you were recommended. Conversation starts further down the funnel."
      },
      {
        title: "Defensible Local Authority",
        description: "Structured content, entity signals and citation depth compound over time. Once you are the cited source, competitors play catch-up."
      },
      {
        title: "Future-Proof Visibility",
        description: "As more search shifts to generative answers, the work done today pays off again with every model update."
      }
    ]
  },

  roadmap: {
    eyebrow: "The Framework",
    headline: "From AI-Invisible to AI-Cited",
    subheadline: "A four-phase system built around how large language models actually retrieve and rank local service answers.",
    phases: [
      {
        phase: 1,
        name: "Audit",
        title: "AI Visibility & Entity Baseline",
        description: "We measure where you already appear, where your competitors win, and how the models currently describe your shop.",
        activities: [
          "Prompt set built for your services and cities",
          "Citation audit across ChatGPT, Gemini, Perplexity, AI Overviews",
          "Entity and brand disambiguation review",
          "Schema, structured data and crawlability audit",
          "Competitor citation gap analysis"
        ],
        icon: Search,
        color: "hsl(76, 42%, 41%)"
      },
      {
        phase: 2,
        name: "Structure",
        title: "Make the Site Machine-Readable",
        description: "We rebuild your content into the formats LLMs actually consume: clean entities, schema, and answer-ready blocks.",
        activities: [
          "LocalBusiness, Service and FAQ schema across the site",
          "Entity-rich service and city page rewrites",
          "Answer-first content blocks (definition, scope, cost, process)",
          "Semantic HTML and heading hierarchy cleanup",
          "llms.txt and AI crawler access configuration"
        ],
        icon: FileCode,
        color: "hsl(224, 60%, 55%)"
      },
      {
        phase: 3,
        name: "Authority",
        title: "Build the Citations the Models Trust",
        description: "Generative engines lean on third-party signals. We earn the mentions that move you from candidate to cited source.",
        activities: [
          "Trusted directory and citation expansion",
          "Review prompts engineered for AI-quotable language",
          "Local press, association and partner mentions",
          "GBP optimization tuned for AI Overview pull",
          "Author bios, E-E-A-T signals and brand consistency"
        ],
        icon: ShieldCheck,
        color: "hsl(35, 90%, 50%)"
      },
      {
        phase: 4,
        name: "Monitor",
        title: "Track Citations, Iterate, Compound",
        description: "AI search is not set-and-forget. We monitor model outputs monthly and adjust as engines update.",
        activities: [
          "Monthly prompt-set scoring across major LLMs",
          "Citation count and share-of-voice reporting",
          "Content refresh based on model drift",
          "New entity and topic expansion",
          "Quarterly strategy review"
        ],
        icon: TrendingUp,
        color: "hsl(280, 60%, 55%)"
      }
    ],
    footerNote: "Initial audit and structural rebuild typically runs 30 to 60 days. Citation and authority work compounds from month two forward."
  },

  buildingBlocks: {
    eyebrow: "The Levers We Pull",
    headline: "What Goes Into an AI-Visible Operator",
    subheadline: "Every component is scoped to your trade, services and market.",
    blocks: [
      { title: "AI Visibility Audit", slug: "ai-visibility-audit", description: "Baseline scoring of how often you appear in ChatGPT, Perplexity, Gemini and AI Overviews for the prompts that matter.", icon: Search },
      { title: "Schema & Structured Data", slug: "schema-structured-data", description: "Service, LocalBusiness, FAQ and HowTo schema deployed across every page LLMs need to understand.", icon: FileCode },
      { title: "Entity Optimization", slug: "entity-optimization", description: "Brand, service and location entities disambiguated so models know exactly who and where you are.", icon: Layers },
      { title: "Answer-Ready Content", slug: "answer-ready-content", description: "Page sections written in the question-answer format LLMs lift directly into chat responses.", icon: MessageSquareText },
      { title: "Citation & Authority Building", slug: "citation-authority", description: "Directory, review and local press work that earns the third-party mentions generative engines weight heavily.", icon: ShieldCheck },
      { title: "AI Citation Monitoring", slug: "ai-citation-monitoring", description: "Monthly prompt scoring across major engines so you see exactly where your visibility is moving.", icon: TrendingUp }
    ]
  },

  qualification: {
    eyebrow: "Before We Talk",
    headline: "Who AI Search Optimization Is Built For",
    subheadline: "We work with operators who treat AI visibility as a long-term moat, not a quick win.",
    goodFit: [
      { point: "You already invest in local SEO or paid search", detail: "AIO and GEO compound the work you are already doing. The infrastructure overlap is significant." },
      { point: "You want defensible visibility, not a quick spike", detail: "Citation authority builds over months and outlasts algorithm shifts. We build for the next three years, not the next quarter." },
      { point: "You have real expertise to surface", detail: "AI engines reward depth. Operators with genuine technical knowledge and customer stories have the most to gain." },
      { point: "You own your website and can implement changes", detail: "Schema, content structure and llms.txt require code-level changes. We need access to do the work properly." }
    ],
    notFit: [
      { point: "You want guaranteed top placement in ChatGPT next week", detail: "No one can guarantee LLM outputs. We build the structural and authority signals that maximize the probability." },
      { point: "You have no organic or local foundation", detail: "AIO and GEO are amplifiers. If your local SEO and GBP are non-existent, start there first." },
      { point: "Cheapest possible solution is the priority", detail: "We build durable systems. There are faster, shallower options if cost is the only filter." }
    ],
    ctaText: "See If Your Market Is Open"
  },

  faq: {
    headline: "Frequently Asked Questions",
    groups: [
      {
        category: "What AIO & GEO Actually Are",
        items: [
          { question: "What is the difference between AIO and GEO?", answer: "AIO (AI Optimization) covers the broader work of making your site readable to large language models. GEO (Generative Engine Optimization) is specifically about earning citations inside generative search experiences like Google AI Overviews, ChatGPT, Perplexity and Gemini. We run both as one connected program." },
          { question: "Is this just SEO with a new label?", answer: "No. Traditional SEO targets the ten blue links. AIO and GEO target a different surface entirely: the three or four sources a model decides to cite when answering a question. The technical work overlaps, the strategy does not." },
          { question: "Which engines do you optimize for?", answer: "Google AI Overviews, ChatGPT, Perplexity, Gemini and Claude. We track all five monthly. As new engines gain share, we add them." }
        ]
      },
      {
        category: "Results & Timeline",
        items: [
          { question: "How fast will I show up in AI answers?", answer: "Structural changes (schema, content blocks, llms.txt) start influencing outputs within 30 to 60 days. Citation authority compounds over three to six months. Operators with stronger existing SEO see faster movement." },
          { question: "Can you guarantee I will appear in ChatGPT?", answer: "Anyone who guarantees specific LLM outputs is lying. What we guarantee is the system, the structural and authority work that demonstrably increases citation probability across engines." },
          { question: "How do you report on AI visibility?", answer: "We run a fixed prompt set monthly across the major engines and score how often you appear, where you appear, and what is said about you. You see month-over-month movement and competitor benchmarks." }
        ]
      },
      {
        category: "Fit & Process",
        items: [
          { question: "Do I need traditional SEO before I do this?", answer: "It helps significantly. If you have no organic foundation, we will usually recommend pairing AIO and GEO with local SEO from day one. The two compound." },
          { question: "Will this work for a single-truck operator?", answer: "Yes, in a tight service area. Smaller operators with deep expertise in a specific city often punch above their weight in AI answers." },
          { question: "Is this included in your programs?", answer: "Foundational AIO work (schema, entity, llms.txt) is in every Source, Current and Surge program. Deeper GEO citation work scales with tier." }
        ]
      }
    ]
  },

  ecosystem: {
    eyebrow: "The Bigger Picture",
    headline: "AI Search Is One Piece of the",
    highlightedText: "Connected Growth System",
    intro: "Generative engines reward operators who already dominate the basics.",
    body: "Local SEO, GBP, reviews and content all feed the same signals AI engines lean on to decide who to cite. We run each service independently, but the compounding happens when they work together.",
    services: [
      { icon: Cpu, id: "ai-search", title: "AIO & GEO", description: "AI citation visibility.", href: "/plumbing-and-hvac-ai-search-optimization", isCenter: true },
      { icon: Search, id: "local-seo", title: "Local SEO", description: "Organic visibility in local search.", href: "/hvac-and-plumbing-seo" },
      { icon: Map, id: "google-maps", title: "Google Maps / GBP", description: "Own the local 3-pack.", href: "/plumbing-and-hvac-google-maps" },
      { icon: Sparkles, id: "paid-media", title: "Paid Advertising", description: "Google Ads and Meta campaigns.", href: "/paid-marketing" },
      { icon: PenTool, id: "content", title: "Content Marketing", description: "Service and city pages built to rank.", href: "/plumbing-and-hvac-content-marketing" },
      { icon: BarChart3, id: "reporting", title: "Reporting", description: "Citation tracking and ROI.", href: "/plumbing-and-hvac-reporting" }
    ],
    ctaText: "Explore All Services",
    ctaHref: "/#services"
  }
};

export const plumbingAiSearchConfig: ServicePageConfig = {
  ...aiSearchOptimizationConfig,
  slug: "plumbing-ai-search-optimization",
  title: "Plumbing AIO & GEO",
  metaTitle: "Plumbing AIO & GEO | AI Search Optimization for Plumbers | DSD",
  metaDescription: "Plumbing AI search optimization. Get cited by ChatGPT, Google AI Overviews, Perplexity and Gemini when homeowners ask for a plumber in your market.",
  canonicalUrl: `${SITE_URL}/plumbing-ai-search-optimization`,
  hero: {
    ...aiSearchOptimizationConfig.hero,
    highlightedText: "Plumbing Companies",
    subheadline: "When a homeowner asks ChatGPT 'who should I call for a burst pipe' or 'best plumber near me,' we make sure your shop is the answer the model gives.",
  }
};

export const hvacAiSearchConfig: ServicePageConfig = {
  ...aiSearchOptimizationConfig,
  slug: "hvac-ai-search-optimization",
  title: "HVAC AIO & GEO",
  metaTitle: "HVAC AIO & GEO | AI Search Optimization for HVAC | DSD",
  metaDescription: "HVAC AI search optimization. Get cited by ChatGPT, Google AI Overviews, Perplexity and Gemini when homeowners ask for HVAC help in your market.",
  canonicalUrl: `${SITE_URL}/hvac-ai-search-optimization`,
  hero: {
    ...aiSearchOptimizationConfig.hero,
    highlightedText: "HVAC Companies",
    subheadline: "When a homeowner asks ChatGPT 'why is my AC not cooling' or 'best HVAC company near me,' we make sure your shop is the answer the model gives.",
  }
};
