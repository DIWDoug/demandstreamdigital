import { MapPin, Map, MousePointerClick, Share2, Mail, Award, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Spoke {
  title: string;
  description: string;
  slug: string;
}

export interface Hub {
  icon: LucideIcon;
  title: string;
  slug: string;
  summary: string;
  heroDescription: string;
  spokes: Spoke[];
}

export const hubs: Hub[] = [
  {
    icon: MapPin,
    title: "Local SEO",
    slug: "local-seo",
    summary: "Dominate local organic search results and drive qualified traffic from your service areas.",
    heroDescription: "We help agencies deliver comprehensive local SEO services that drive organic visibility, qualified traffic, and measurable results for their clients. Our white-label local SEO fulfillment covers everything from on-page optimization to link building.",
    spokes: [
      {
        title: "On-Page Local Optimization",
        slug: "on-page-local-optimization",
        description: "Location-specific title tags, meta descriptions, schema markup, and content that signals relevance to search engines for every target market."
      },
      {
        title: "Technical SEO for Multi-Location",
        slug: "technical-seo-multi-location",
        description: "Site architecture, internal linking, and crawlability fixes that help search engines understand your client's service area hierarchy."
      },
      {
        title: "Local Content Strategy",
        slug: "local-content-strategy",
        description: "Service area pages, location-specific blog content, and FAQ sections that capture long-tail local search queries."
      },
      {
        title: "Local Link Acquisition",
        slug: "local-link-acquisition",
        description: "Outreach to local publications, sponsorships, and community organizations that build geographic authority signals."
      },
      {
        title: "Keyword Research & Mapping",
        slug: "keyword-research-mapping",
        description: "Comprehensive local keyword discovery, search intent analysis, and strategic mapping to pages for maximum organic visibility."
      },
      {
        title: "Competitor & Market Analysis",
        slug: "competitor-market-analysis",
        description: "Deep analysis of local competitors' strategies, ranking factors, and market opportunities to identify gaps and advantages."
      }
    ]
  },
  {
    icon: Map,
    title: "Google Maps Optimization",
    slug: "google-maps",
    summary: "Own the local 3-pack and drive calls directly from Google Maps listings.",
    heroDescription: "We help agencies dominate Google Maps results for their clients. From Google Business Profile optimization to review management, our white-label GBP services ensure your clients appear prominently when local customers search.",
    spokes: [
      {
        title: "Google Business Profile Management",
        slug: "google-business-profile-management",
        description: "Complete profile optimization including categories, attributes, services, products, and posts that maximize visibility in map results."
      },
      {
        title: "Review Generation & Response",
        slug: "review-generation-response",
        description: "Systematic review acquisition strategies and professional response management that builds trust and improves rankings."
      },
      {
        title: "Citation Building & Cleanup",
        slug: "citation-building-cleanup",
        description: "NAP consistency across 50+ directories, data aggregators, and industry-specific platforms that validate business legitimacy."
      },
      {
        title: "Local Pack Ranking Strategy",
        slug: "local-pack-ranking-strategy",
        description: "Proximity optimization, category targeting, and competitive analysis to win positions in the local 3-pack for high-intent searches."
      },
      {
        title: "Photo & Media Optimization",
        slug: "photo-media-optimization",
        description: "Professional photo management, virtual tours, and visual content strategies that increase engagement and click-through rates."
      },
      {
        title: "Multi-Location GBP Management",
        slug: "multi-location-gbp-management",
        description: "Scalable systems for managing dozens or hundreds of locations with consistent branding and optimized performance."
      }
    ]
  },
  {
    icon: MousePointerClick,
    title: "Paid Media",
    slug: "paid-media",
    summary: "Capture high-intent local searches with campaigns built for calls and form submissions.",
    heroDescription: "We manage Google Ads and Meta Ads campaigns that generate qualified local leads at scale. Our white-label paid media services give agencies the expertise to deliver measurable ROI for their clients without building an internal team.",
    spokes: [
      {
        title: "Local Search Campaign Structure",
        slug: "local-search-campaign-structure",
        description: "Service area targeting, location-specific ad groups, and keyword strategies designed for local lead generation economics."
      },
      {
        title: "Landing Page Optimization",
        slug: "landing-page-optimization",
        description: "Conversion-focused landing pages with local trust signals, click-to-call buttons, and form optimization for maximum lead capture."
      },
      {
        title: "Bid Strategy & Budget Allocation",
        slug: "bid-strategy-budget-allocation",
        description: "Smart bidding configurations and budget pacing that maximize lead volume within client profitability targets."
      },
      {
        title: "Call Tracking & Attribution",
        slug: "call-tracking-attribution",
        description: "Call recording, lead scoring, and multi-touch attribution that proves ROI and informs optimization decisions."
      },
      {
        title: "Ad Copy & Extension Testing",
        slug: "ad-copy-extension-testing",
        description: "Continuous A/B testing of headlines, descriptions, callouts, and sitelinks to improve quality scores and conversion rates."
      },
      {
        title: "Negative Keyword Management",
        slug: "negative-keyword-management",
        description: "Ongoing search term analysis and negative keyword refinement to eliminate waste and improve lead quality."
      }
    ]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    slug: "email-marketing",
    summary: "Nurture leads and drive repeat business through strategic email campaigns and automation.",
    heroDescription: "We create and manage email marketing programs that nurture leads, drive repeat business, and maximize customer lifetime value. Our white-label email marketing services help agencies offer comprehensive digital marketing without the overhead.",
    spokes: [
      {
        title: "Campaign Strategy & Design",
        slug: "campaign-strategy-design",
        description: "Custom email templates, compelling copy, and strategic send schedules that maximize open rates and conversions."
      },
      {
        title: "Automation Sequences",
        slug: "automation-sequences",
        description: "Welcome series, nurture flows, and re-engagement campaigns that work around the clock to convert leads into customers."
      },
      {
        title: "List Management & Segmentation",
        slug: "list-management-segmentation",
        description: "Clean list hygiene, audience segmentation, and targeted messaging that improves deliverability and engagement."
      },
      {
        title: "Performance Analytics",
        slug: "performance-analytics",
        description: "Open rates, click-through tracking, A/B testing insights, and ROI analysis to continuously optimize campaign performance."
      },
      {
        title: "Drip Campaign Development",
        slug: "drip-campaign-development",
        description: "Multi-touch email sequences tailored to buyer stages that systematically move prospects toward conversion."
      },
      {
        title: "Deliverability & Compliance",
        slug: "deliverability-compliance",
        description: "SPF, DKIM, and DMARC configuration, CAN-SPAM compliance, and sender reputation management for maximum inbox placement."
      }
    ]
  },
  {
    icon: Award,
    title: "Authority Building",
    slug: "authority",
    summary: "Establish trust signals and credibility markers that support long-term ranking stability.",
    heroDescription: "We build the trust signals and authority markers that establish long-term ranking stability and brand credibility. Our white-label authority building services help agencies deliver comprehensive reputation and visibility campaigns.",
    spokes: [
      {
        title: "Digital PR & Media Placements",
        slug: "digital-pr-media-placements",
        description: "Press release distribution, journalist outreach, and earned media coverage that builds brand authority and backlink profiles."
      },
      {
        title: "Industry Directory Listings",
        slug: "industry-directory-listings",
        description: "Strategic placement in industry-specific directories, professional associations, and accreditation sites that signal expertise."
      },
      {
        title: "Local Sponsorship & Partnerships",
        slug: "local-sponsorship-partnerships",
        description: "Community event sponsorships, local charity partnerships, and chamber of commerce involvement that create authentic local signals."
      },
      {
        title: "Reputation & Trust Management",
        slug: "reputation-trust-management",
        description: "Review monitoring, sentiment analysis, and brand mention tracking that protects and enhances online reputation."
      },
      {
        title: "Thought Leadership Content",
        slug: "thought-leadership-content",
        description: "Expert articles, guest posts, and industry commentary that positions clients as trusted authorities in their field."
      },
      {
        title: "Awards & Recognition Strategy",
        slug: "awards-recognition-strategy",
        description: "Strategic award submissions, certification pursuits, and accolade promotion that builds credibility and differentiates from competitors."
      }
    ]
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    slug: "reporting",
    summary: "Transparent dashboards and white-label reports that prove value and retain clients.",
    heroDescription: "We provide white-label reporting and analytics dashboards that help agencies demonstrate value and retain clients. From rank tracking to ROI analysis, our reporting services give you the data story your clients need to see.",
    spokes: [
      {
        title: "White-Label Dashboards",
        slug: "white-label-dashboards",
        description: "Custom-branded live dashboards that give clients real-time visibility into campaign performance and key metrics."
      },
      {
        title: "Monthly Performance Reports",
        slug: "monthly-performance-reports",
        description: "Comprehensive monthly reports with executive summaries, detailed metrics, and actionable insights delivered on schedule."
      },
      {
        title: "Rank Tracking & Visibility",
        slug: "rank-tracking-visibility",
        description: "Daily rank monitoring for target keywords, local pack positions, and organic visibility trends across all locations."
      },
      {
        title: "Call Tracking & Lead Attribution",
        slug: "call-tracking-lead-attribution",
        description: "Dynamic number insertion, call recording, and multi-touch attribution that connects marketing spend to actual leads."
      },
      {
        title: "ROI & Revenue Analysis",
        slug: "roi-revenue-analysis",
        description: "Closed-loop reporting that ties marketing activities to revenue outcomes and proves the value of your services."
      },
      {
        title: "Client Presentation Decks",
        slug: "client-presentation-decks",
        description: "Professional slide decks and QBR materials that help you communicate wins and strategic recommendations to clients."
      }
    ]
  }
];

export const getHubBySlug = (slug: string): Hub | undefined => {
  return hubs.find(hub => hub.slug === slug);
};

export const getSpokeBySlug = (hubSlug: string, spokeSlug: string): { hub: Hub; spoke: Spoke } | undefined => {
  const hub = getHubBySlug(hubSlug);
  if (!hub) return undefined;
  const spoke = hub.spokes.find(s => s.slug === spokeSlug);
  if (!spoke) return undefined;
  return { hub, spoke };
};
