// Central authors data file for E-E-A-T attribution
// Used for author pages and blog post bylines

import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";
import richardBaylon from "@/assets/team/richard-baylon.webp";
import desireeAbbariao from "@/assets/team/desiree-abbariao.webp";

export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string;
  image: string;
  shortBio: string;
  fullBio: string;
  expertise: string[];
  credentials: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    upwork?: string;
  };
  schemaData: {
    sameAs: string[];
    knowsAbout: { name: string; sameAs: string }[];
  };
}

export const authors: Author[] = [
  {
    id: "doug-bryson",
    slug: "doug-bryson",
    name: "Doug Bryson",
    role: "CEO & Founder",
    image: dougHeadshot,
    shortBio: "Digital marketing veteran with 14+ years of experience in SEO, paid advertising, and agency operations.",
    fullBio: `Doug Bryson is the founder and CEO of Dialed-In Web, a white-label fulfillment partner for digital marketing agencies. With over 14 years in the industry, Doug has managed millions of dollars in ad spend across Google Ads, Meta, and local service advertising platforms.

Before founding Dialed-In Web, Doug built his expertise working directly with clients ranging from local service businesses to billion-dollar energy companies, theme parks, and multi-location automotive franchises. This diverse experience shaped his understanding of what agencies actually need from a fulfillment partner: reliability, transparency, and work they can confidently present to their clients.

Doug is an Expert-Vetted specialist on Upwork—a distinction held by less than 1% of freelancers on the platform—and has served over 100 clients across local SEO, paid media, and authority building campaigns. His approach emphasizes clear communication, documented processes, and sustainable results over quick wins.`,
    expertise: [
      "Local SEO Strategy",
      "Google Ads Management",
      "Agency Operations",
      "White-Label Fulfillment",
      "GBP Optimization",
      "Paid Media Strategy"
    ],
    credentials: [
      "Expert-Vetted Upwork Specialist (Top 1%)",
      "14+ Years Digital Marketing Experience",
      "Managed $5M+ in Ad Spend",
      "100+ Clients Served"
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dougbryson/",
      upwork: "https://www.upwork.com/freelancers/~01a0f9b5c9a8d0a0b0"
    },
    schemaData: {
      sameAs: [
        "https://www.linkedin.com/in/dougbryson/",
        "https://www.upwork.com/freelancers/~01a0f9b5c9a8d0a0b0"
      ],
      knowsAbout: [
        { name: "Local SEO", sameAs: "https://en.wikipedia.org/wiki/Local_search_(Internet)" },
        { name: "Google Ads", sameAs: "https://en.wikipedia.org/wiki/Google_Ads" },
        { name: "Search Engine Optimization", sameAs: "https://en.wikipedia.org/wiki/Search_engine_optimization" },
        { name: "Pay-per-click Advertising", sameAs: "https://en.wikipedia.org/wiki/Pay-per-click" }
      ]
    }
  },
  {
    id: "richard-baylon",
    slug: "richard-baylon",
    name: "Richard Baylon",
    role: "Content Strategist",
    image: richardBaylon,
    shortBio: "Content strategist specializing in local SEO content, service area pages, and topical authority development.",
    fullBio: `Richard Baylon is a Content Strategist at Dialed-In Web, where he develops localized content strategies that help service businesses dominate their target markets. His work focuses on creating content that ranks—and converts—by aligning search intent with conversion architecture.

Richard specializes in geographical content development, creating unique service area pages that avoid doorway page penalties while capturing local search demand. He understands that great local content isn't just about swapping city names—it's about demonstrating genuine local relevance and expertise.

His approach to content development emphasizes E-E-A-T signals, semantic structure for AI visibility, and strategic internal linking that builds topical authority over time.`,
    expertise: [
      "Local Content Strategy",
      "Service Area Page Development",
      "Topical Authority Building",
      "E-E-A-T Optimization",
      "Geographical Content",
      "AI-Optimized Content"
    ],
    credentials: [
      "Content Strategist at Dialed-In Web",
      "Local SEO Content Specialist"
    ],
    schemaData: {
      sameAs: [],
      knowsAbout: [
        { name: "Content Marketing", sameAs: "https://en.wikipedia.org/wiki/Content_marketing" },
        { name: "Search Engine Optimization", sameAs: "https://en.wikipedia.org/wiki/Search_engine_optimization" },
        { name: "Copywriting", sameAs: "https://en.wikipedia.org/wiki/Copywriting" }
      ]
    }
  },
  {
    id: "desiree-abbariao",
    slug: "desiree-abbariao",
    name: "Desiree Abbariao",
    role: "Content Strategist",
    image: desireeAbbariao,
    shortBio: "Content strategist focused on blog content, power posts, and comprehensive content development for local businesses.",
    fullBio: `Desiree Abbariao is a Content Strategist at Dialed-In Web, where she creates comprehensive content that positions local businesses as trusted authorities in their industries. Her work spans blog content, power posts, and topical cluster development.

Desiree understands that content marketing for local businesses requires a different approach than national brands. She develops content strategies that balance informational value with conversion architecture—ensuring that traffic turns into leads, not just pageviews.

Her expertise includes developing hub-and-spoke content architectures, FAQ content optimized for featured snippets, and long-form guides that earn natural backlinks and establish topical authority.`,
    expertise: [
      "Blog Content Development",
      "Power Post Creation",
      "Hub-and-Spoke Architecture",
      "FAQ Content Strategy",
      "Lead Magnet Development",
      "Content Conversion Optimization"
    ],
    credentials: [
      "Content Strategist at Dialed-In Web",
      "Topical Content Specialist"
    ],
    schemaData: {
      sameAs: [],
      knowsAbout: [
        { name: "Content Marketing", sameAs: "https://en.wikipedia.org/wiki/Content_marketing" },
        { name: "Blogging", sameAs: "https://en.wikipedia.org/wiki/Blog" },
        { name: "Search Engine Optimization", sameAs: "https://en.wikipedia.org/wiki/Search_engine_optimization" }
      ]
    }
  }
];

export const getAuthorBySlug = (slug: string): Author | undefined => {
  return authors.find(author => author.slug === slug);
};

export const getAuthorById = (id: string): Author | undefined => {
  return authors.find(author => author.id === id);
};
