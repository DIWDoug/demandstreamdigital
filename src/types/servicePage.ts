import type { LucideIcon } from "lucide-react";

/**
 * SERVICE PAGE FRAMEWORK
 * 
 * This defines the structure for all service hub pages.
 * The narrative arc follows: Problem → Value → Outcomes → Framework → Building Blocks → Qualification → Social Proof → FAQ → Cross-sell → CTA
 * 
 * To create a new service page:
 * 1. Create a config file in src/data/service-pages/[service-slug].ts
 * 2. Export a ServicePageConfig object
 * 3. Create the page component using ServicePageLayout
 */

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PainPoint {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface Outcome {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface RoadmapPhase {
  phase: number;
  name: string;
  title: string;
  description: string;
  activities: string[];
  icon: LucideIcon;
  color: string; // HSL value
}

export interface BuildingBlock {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  cluster?: string; // Optional cluster grouping for visual organization
}

export interface FitCriterion {
  point: string;
  detail: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQGroup {
  category: string;
  items: FAQItem[];
}

export interface EcosystemService {
  icon: LucideIcon;
  id: string;
  title: string;
  description: string;
  href: string;
  isCenter?: boolean;
}

export interface ServicePageConfig {
  // SEO & Meta
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  keywords?: string;

  // Hero Section
  hero: {
    headline: string;
    highlightedText: string;
    subheadline: string;
    bullets?: string[]; // Optional bullet points for anti-package stances
    qualifierLine: string;
    integrationNote?: string; // Optional note about service integration
    ctaText: string;
    ctaSubtext: string;
  };

  // Problem Section (Why Most X Fails)
  problem: {
    eyebrow: string;
    headline: string;
    intro: string;
    painPoints: PainPoint[];
    systemClosing?: string; // Optional summary line after pain points
    closingLine: string;
    closingHighlight: string;
    ctaText: string;
  };

  // Value Section (Dollar Framing)
  value?: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    closingLine: string;
    closingHighlight: string;
    // Dashboard data is service-specific, can be customized
  };

  // Outcomes Section
  outcomes: {
    headline: string;
    subheadline: string;
    items: Outcome[];
  };

  // Framework/Roadmap Section
  roadmap: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    phases: RoadmapPhase[];
    executionNote?: string; // Optional line about white-label execution
    footerNote: string;
  };

  // Building Blocks Section
  buildingBlocks: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    blocks: BuildingBlock[];
  };

  // Qualification Section
  qualification: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    goodFit: FitCriterion[];
    notFit: FitCriterion[];
    ctaText: string;
  };

  // FAQ Section
  faq: {
    headline: string;
    groups: FAQGroup[];
  };

  // Ecosystem/Cross-sell Section
  ecosystem: {
    eyebrow: string;
    headline: string;
    highlightedText: string;
    intro: string;
    body: string;
    services: EcosystemService[];
    ctaText: string;
    ctaHref: string;
  };

  // Optional: Custom sections
  customSections?: {
    afterOutcomes?: React.ComponentType;
    afterBuildingBlocks?: React.ComponentType;
  };
}

/**
 * Helper function to create a service page config with defaults
 */
export const createServicePageConfig = (config: ServicePageConfig): ServicePageConfig => {
  return config;
};
