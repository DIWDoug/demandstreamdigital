/**
 * Internal Linking Strategy for Blog Articles
 * Maps blog content topics to relevant hub and spoke pages
 */

export interface InternalLink {
  text: string;
  url: string;
  context: string; // When to use this link
}

export interface BlogLinkMapping {
  slug: string;
  relevantLinks: InternalLink[];
  relatedFAQs: {
    hubPage: string;
    hubUrl: string;
    questions: string[];
  }[];
}

// Define internal linking mappings for each blog article
export const blogLinkMappings: Record<string, BlogLinkMapping> = {
  'benefits-of-white-label-seo-services': {
    slug: 'benefits-of-white-label-seo-services',
    relevantLinks: [
      { text: 'white label local SEO', url: '/white-label-local-seo', context: 'local seo services' },
      { text: 'on-page optimization', url: '/white-label-onpage-optimization', context: 'on-page seo' },
      { text: 'technical SEO', url: '/white-label-technical-seo', context: 'technical seo' },
      { text: 'link building', url: '/white-label-link-building', context: 'link building' },
      { text: 'content development', url: '/white-label-content-development', context: 'content creation' },
      { text: 'NAP citations', url: '/white-label-nap-citations', context: 'citations' },
      { text: 'schema markup', url: '/white-label-schema-markup', context: 'schema' },
      { text: 'white-label reporting', url: '/white-label-reporting', context: 'reporting dashboards' },
    ],
    relatedFAQs: [
      {
        hubPage: 'Local SEO',
        hubUrl: '/white-label-local-seo#faq',
        questions: [
          'How long until we see results from local SEO?',
          'Do you require long-term contracts?',
          'How do you handle client communication?'
        ]
      }
    ]
  },
  'white-label-local-ppc': {
    slug: 'white-label-local-ppc',
    relevantLinks: [
      { text: 'white label paid media', url: '/white-label-paid-media', context: 'ppc management' },
      { text: 'Google Ads management', url: '/white-label-google-ads', context: 'google ads' },
      { text: 'Meta Ads', url: '/white-label-meta-ads', context: 'facebook ads meta' },
      { text: 'Local Service Ads', url: '/white-label-local-service-ads', context: 'lsa local service' },
      { text: 'retargeting campaigns', url: '/white-label-retargeting-campaigns', context: 'retargeting remarketing' },
      { text: 'conversion tracking', url: '/white-label-conversion-tracking', context: 'conversion tracking' },
      { text: 'landing page design', url: '/white-label-landing-page-design', context: 'landing pages' },
      { text: 'call tracking', url: '/white-label-call-tracking-lead-attribution', context: 'call tracking' },
    ],
    relatedFAQs: [
      {
        hubPage: 'Paid Media',
        hubUrl: '/white-label-paid-media#faq',
        questions: [
          'How quickly will we see results?',
          'What is your minimum ad spend requirement?',
          'Do you manage both Google Ads and Meta Ads?'
        ]
      }
    ]
  },
  'on-page-optimization-local-seo': {
    slug: 'on-page-optimization-local-seo',
    relevantLinks: [
      { text: 'on-page optimization services', url: '/white-label-onpage-optimization', context: 'on-page' },
      { text: 'local SEO', url: '/white-label-local-seo', context: 'local seo' },
      { text: 'technical SEO', url: '/white-label-technical-seo', context: 'technical seo' },
      { text: 'local keyword strategy', url: '/white-label-local-keyword-strategy', context: 'keyword research' },
      { text: 'schema markup', url: '/white-label-schema-markup', context: 'schema structured data' },
      { text: 'content development', url: '/white-label-content-development', context: 'content' },
      { text: 'GBP optimization', url: '/white-label-gbp-optimization', context: 'google business profile' },
    ],
    relatedFAQs: [
      {
        hubPage: 'Local SEO',
        hubUrl: '/white-label-local-seo#faq',
        questions: [
          'What is your content creation process?',
          'What access do you need from clients?'
        ]
      }
    ]
  },
  'white-label-social-media': {
    slug: 'white-label-social-media',
    relevantLinks: [
      { text: 'content marketing', url: '/white-label-content-marketing', context: 'content marketing' },
      { text: 'Meta Ads', url: '/white-label-meta-ads', context: 'social media advertising' },
      { text: 'post scheduling', url: '/white-label-post-scheduling', context: 'social posting' },
      { text: 'white-label reporting', url: '/white-label-reporting', context: 'reporting' },
      { text: 'branded dashboards', url: '/white-label-branded-dashboards', context: 'dashboards' },
    ],
    relatedFAQs: []
  },
  'white-label-seo-for-agencies-checklist': {
    slug: 'white-label-seo-for-agencies-checklist',
    relevantLinks: [
      { text: 'white label local SEO', url: '/white-label-local-seo', context: 'local seo' },
      { text: 'on-page optimization', url: '/white-label-onpage-optimization', context: 'on-page' },
      { text: 'link building', url: '/white-label-link-building', context: 'link building' },
      { text: 'technical SEO audits', url: '/white-label-technical-seo', context: 'technical seo' },
      { text: 'white-label reporting', url: '/white-label-reporting', context: 'reporting' },
      { text: 'monthly performance reports', url: '/white-label-monthly-performance-reports', context: 'reports' },
      { text: 'authority building', url: '/white-label-local-authority-building', context: 'authority backlinks' },
    ],
    relatedFAQs: [
      {
        hubPage: 'Local SEO',
        hubUrl: '/white-label-local-seo#faq',
        questions: [
          'Can you take over from another SEO provider?',
          'How often do you report on progress?',
          'Do you require long-term contracts?'
        ]
      }
    ]
  },
  'what-is-white-label-digital-marketing': {
    slug: 'what-is-white-label-digital-marketing',
    relevantLinks: [
      { text: 'white label services', url: '/white-label-inbound-marketing-services', context: 'white label services' },
      { text: 'local SEO', url: '/white-label-local-seo', context: 'local seo' },
      { text: 'paid media', url: '/white-label-paid-media', context: 'ppc paid media' },
      { text: 'email marketing', url: '/white-label-email-marketing', context: 'email marketing' },
      { text: 'content marketing', url: '/white-label-content-marketing', context: 'content marketing' },
      { text: 'GBP SEO', url: '/white-label-gbp-seo', context: 'google business profile' },
      { text: 'authority building', url: '/white-label-local-authority-building', context: 'authority' },
    ],
    relatedFAQs: [
      {
        hubPage: 'Local SEO',
        hubUrl: '/white-label-local-seo#faq',
        questions: [
          'How do you handle client communication?',
          'What industries do you work with?'
        ]
      },
      {
        hubPage: 'Paid Media',
        hubUrl: '/white-label-paid-media#faq',
        questions: [
          'How does white-label communication work?',
          'Do you provide white-labeled reports?'
        ]
      }
    ]
  }
};

/**
 * Inject internal links into blog content
 * Replaces first occurrence of contextual phrases with links
 */
export function injectInternalLinks(content: string, slug: string): string {
  const mapping = blogLinkMappings[slug];
  if (!mapping) return content;

  let updatedContent = content;
  const usedLinks = new Set<string>();

  for (const link of mapping.relevantLinks) {
    // Skip if we've already used this link
    if (usedLinks.has(link.url)) continue;

    // Find contextual phrases that aren't already linked
    const contextWords = link.context.split(' ');
    
    // Try to find the link text or similar phrases
    const patterns = [
      new RegExp(`(?<!\\[)\\b(${escapeRegex(link.text)})\\b(?!\\])(?![^\\[]*\\])`, 'i'),
      ...contextWords.map(word => 
        new RegExp(`(?<!\\[)\\b(${escapeRegex(word)}(?:\\s+(?:seo|services?|optimization|management|strategy|marketing))?)\\b(?!\\])(?![^\\[]*\\])`, 'i')
      )
    ];

    for (const pattern of patterns) {
      const match = updatedContent.match(pattern);
      if (match && !usedLinks.has(link.url)) {
        // Only replace the first occurrence
        updatedContent = updatedContent.replace(
          pattern,
          `[${match[1]}](${link.url})`
        );
        usedLinks.add(link.url);
        break;
      }
    }
  }

  return updatedContent;
}

/**
 * Get related FAQ links for a blog article
 */
export function getRelatedFAQs(slug: string): BlogLinkMapping['relatedFAQs'] {
  const mapping = blogLinkMappings[slug];
  return mapping?.relatedFAQs || [];
}

/**
 * Get all relevant hub/spoke pages for a blog article
 */
export function getRelevantServicePages(slug: string): InternalLink[] {
  const mapping = blogLinkMappings[slug];
  return mapping?.relevantLinks || [];
}

function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
