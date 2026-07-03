/**
 * Internal Linking Strategy for Blog Articles
 * (White-label mappings removed — DemandStream serves plumbing & HVAC contractors directly.)
 */

export interface InternalLink {
  text: string;
  url: string;
  context: string;
}

export interface ExternalAuthorityLink {
  matchPhrases: string[];
  url: string;
  source: string;
}

export interface BlogLinkMapping {
  slug: string;
  relevantLinks: InternalLink[];
  externalLink?: ExternalAuthorityLink;
  relatedFAQs: {
    hubPage: string;
    hubUrl: string;
    questions: string[];
  }[];
}

export interface FAQBlogLink {
  questionPattern: string;
  blogUrl: string;
  blogTitle: string;
}

export const faqToBlogMappings: FAQBlogLink[] = [];

export function getBlogLinkForFAQ(_question: string): FAQBlogLink | null {
  return null;
}

export const blogLinkMappings: Record<string, BlogLinkMapping> = {};

export function getExternalLink(_slug: string): ExternalAuthorityLink | null {
  return null;
}

export function injectInternalLinks(content: string, _slug: string): string {
  return content;
}

export function getRelatedFAQs(_slug: string): BlogLinkMapping['relatedFAQs'] {
  return [];
}

export function getRelevantServicePages(_slug: string): InternalLink[] {
  return [];
}
