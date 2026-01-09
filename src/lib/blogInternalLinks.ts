/**
 * Internal Linking Strategy for Blog Articles
 * Maps blog content topics to relevant hub and spoke pages
 * AND maps FAQ questions to relevant blog posts (bidirectional linking)
 */

export interface InternalLink {
  text: string;
  url: string;
  context: string; // When to use this link
}

export interface ExternalAuthorityLink {
  matchPhrases: string[]; // Multiple phrases to try matching
  url: string;
  source: string; // e.g., "Moz", "SEMrush", "HubSpot"
}

export interface BlogLinkMapping {
  slug: string;
  relevantLinks: InternalLink[];
  externalLink?: ExternalAuthorityLink; // One high-authority external link per post
  relatedFAQs: {
    hubPage: string;
    hubUrl: string;
    questions: string[];
  }[];
}

/**
 * Bidirectional FAQ → Blog mapping
 * Maps FAQ question patterns to relevant blog posts
 */
export interface FAQBlogLink {
  questionPattern: string; // Substring to match in FAQ question
  blogUrl: string;
  blogTitle: string;
}

export const faqToBlogMappings: FAQBlogLink[] = [
  // Local SEO FAQs
  { questionPattern: 'how long does it take', blogUrl: '/blog/benefits-of-white-label-seo-services', blogTitle: 'Seven Proven Benefits of White Label SEO' },
  { questionPattern: 'local seo results', blogUrl: '/blog/benefits-of-white-label-seo-services', blogTitle: 'Seven Proven Benefits of White Label SEO' },
  { questionPattern: 'guarantee', blogUrl: '/blog/benefits-of-white-label-seo-services', blogTitle: 'Seven Proven Benefits of White Label SEO' },
  { questionPattern: 'ai overviews', blogUrl: '/blog/benefits-of-white-label-seo-services', blogTitle: 'Seven Proven Benefits of White Label SEO' },
  { questionPattern: 'rankings drop', blogUrl: '/blog/white-label-seo-for-agencies-checklist', blogTitle: 'White Label SEO Checklist for Agencies' },
  { questionPattern: 'measure local seo', blogUrl: '/blog/white-label-seo-for-agencies-checklist', blogTitle: 'White Label SEO Checklist for Agencies' },
  { questionPattern: 'content creation process', blogUrl: '/blog/on-page-optimization-local-seo', blogTitle: 'On-Page Optimization for Local SEO' },
  { questionPattern: 'build links', blogUrl: '/blog/benefits-of-white-label-seo-services', blogTitle: 'Seven Proven Benefits of White Label SEO' },
  { questionPattern: 'long-term contracts', blogUrl: '/blog/what-is-white-label-digital-marketing', blogTitle: 'What Is White Label Digital Marketing?' },
  { questionPattern: 'industries do you work', blogUrl: '/blog/what-is-white-label-digital-marketing', blogTitle: 'What Is White Label Digital Marketing?' },
  { questionPattern: 'service-area businesses', blogUrl: '/blog/on-page-optimization-local-seo', blogTitle: 'On-Page Optimization for Local SEO' },
  { questionPattern: 'take over from another', blogUrl: '/blog/white-label-seo-for-agencies-checklist', blogTitle: 'White Label SEO Checklist for Agencies' },
  { questionPattern: 'multiple locations', blogUrl: '/blog/on-page-optimization-local-seo', blogTitle: 'On-Page Optimization for Local SEO' },
  
  // Paid Media FAQs  
  { questionPattern: 'quickly will we see results', blogUrl: '/blog/white-label-local-ppc', blogTitle: 'White Label Local PPC Guide' },
  { questionPattern: 'minimum ad spend', blogUrl: '/blog/white-label-local-ppc', blogTitle: 'White Label Local PPC Guide' },
  { questionPattern: 'google ads and meta ads', blogUrl: '/blog/white-label-local-ppc', blogTitle: 'White Label Local PPC Guide' },
  { questionPattern: 'white-label communication', blogUrl: '/blog/what-is-white-label-digital-marketing', blogTitle: 'What Is White Label Digital Marketing?' },
  { questionPattern: 'white-labeled reports', blogUrl: '/blog/what-is-white-label-digital-marketing', blogTitle: 'What Is White Label Digital Marketing?' },
  
  // Generic patterns
  { questionPattern: 'white label', blogUrl: '/blog/what-is-white-label-digital-marketing', blogTitle: 'What Is White Label Digital Marketing?' },
  { questionPattern: 'client communication', blogUrl: '/blog/what-is-white-label-digital-marketing', blogTitle: 'What Is White Label Digital Marketing?' },
  { questionPattern: 'report on progress', blogUrl: '/blog/white-label-seo-for-agencies-checklist', blogTitle: 'White Label SEO Checklist for Agencies' },
];

/**
 * Get a blog link for an FAQ question if one exists
 */
export function getBlogLinkForFAQ(question: string): FAQBlogLink | null {
  const lowerQuestion = question.toLowerCase();
  return faqToBlogMappings.find(mapping => 
    lowerQuestion.includes(mapping.questionPattern.toLowerCase())
  ) || null;
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
    externalLink: {
      matchPhrases: ['map pack', 'local visibility', 'local rankings', 'algorithm'],
      url: 'https://moz.com/local-search-ranking-factors',
      source: 'Moz'
    },
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
    externalLink: {
      matchPhrases: ['pay-per-click', 'PPC specialists', 'paid advertising', 'location extensions'],
      url: 'https://support.google.com/google-ads/answer/6167118',
      source: 'Google Ads Help'
    },
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
    externalLink: {
      matchPhrases: ['backlinks', 'title tags', 'meta descriptions', 'header tags'],
      url: 'https://ahrefs.com/blog/on-page-seo/',
      source: 'Ahrefs'
    },
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
    externalLink: {
      matchPhrases: ['social media agency', 'content calendar', 'engagement', 'platforms'],
      url: 'https://blog.hubspot.com/marketing/social-media-marketing',
      source: 'HubSpot'
    },
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
    externalLink: {
      matchPhrases: ['SEO agency', 'outsource', 'fulfillment', 'white labeling'],
      url: 'https://www.semrush.com/blog/seo-audit/',
      source: 'SEMrush'
    },
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
    externalLink: {
      matchPhrases: ['mid-sized agency', 'offer everything', 'adding full-time staff', 'Hiring takes time'],
      url: 'https://www.searchenginejournal.com/marketing-agency-growth-strategies/475231/',
      source: 'Search Engine Journal'
    },
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
 * Get external authority link for a blog article
 */
export function getExternalLink(slug: string): ExternalAuthorityLink | null {
  const mapping = blogLinkMappings[slug];
  return mapping?.externalLink || null;
}

/**
 * Check if a position in text is inside a markdown heading
 */
function isInsideHeading(content: string, position: number): boolean {
  // Find the start of the current line
  const lineStart = content.lastIndexOf('\n', position - 1) + 1;
  const lineContent = content.substring(lineStart, position);
  
  // Check if line starts with markdown heading (# through ######)
  return /^#{1,6}\s/.test(lineContent);
}

/**
 * Inject internal links into blog content
 * Replaces first occurrence of contextual phrases with links
 * Skips headings to preserve headline readability
 */
export function injectInternalLinks(content: string, slug: string): string {
  const mapping = blogLinkMappings[slug];
  if (!mapping) return content;

  let updatedContent = content;
  const usedLinks = new Set<string>();

  // First, inject the external authority link if available
  if (mapping.externalLink) {
    const extLink = mapping.externalLink;
    let externalInjected = false;
    
    // Try each match phrase until one works
    for (const phrase of extLink.matchPhrases) {
      if (externalInjected) break;
      
      // Use simpler word boundary matching without lookbehinds for better compatibility
      const extPattern = new RegExp(`\\b(${escapeRegex(phrase)})\\b`, 'gi');
      const matches = updatedContent.match(extPattern);
      
      if (matches && matches.length > 0) {
        // Find the first occurrence that's not already within a markdown link or heading
        const phraseIndex = updatedContent.search(extPattern);
        if (phraseIndex !== -1) {
          // Skip if inside a heading
          if (isInsideHeading(updatedContent, phraseIndex)) continue;
          
          // Check if this position is inside a markdown link by looking for unmatched [ before it
          const textBefore = updatedContent.substring(0, phraseIndex);
          const openBrackets = (textBefore.match(/\[/g) || []).length;
          const closeBrackets = (textBefore.match(/\]/g) || []).length;
          
          // If brackets are balanced, we're not inside a link
          if (openBrackets === closeBrackets) {
            updatedContent = updatedContent.replace(
              new RegExp(`\\b(${escapeRegex(phrase)})\\b`, 'i'),
              `[$1](${extLink.url})`
            );
            externalInjected = true;
          }
        }
      }
    }
  }

  // Then inject internal links (skip headings)
  for (const link of mapping.relevantLinks) {
    // Skip if we've already used this link
    if (usedLinks.has(link.url)) continue;

    // Find contextual phrases that aren't already linked
    const contextWords = link.context.split(' ');
    
    // Try to find the link text or similar phrases
    const patterns = [
      new RegExp(`\\b(${escapeRegex(link.text)})\\b`, 'gi'),
      ...contextWords.map(word => 
        new RegExp(`\\b(${escapeRegex(word)}(?:\\s+(?:seo|services?|optimization|management|strategy|marketing))?)\\b`, 'gi')
      )
    ];

    for (const pattern of patterns) {
      // Find all matches and pick the first one not in a heading or existing link
      let match;
      let foundValidMatch = false;
      
      while ((match = pattern.exec(updatedContent)) !== null) {
        const matchIndex = match.index;
        
        // Skip if inside a heading
        if (isInsideHeading(updatedContent, matchIndex)) continue;
        
        // Check if inside a markdown link
        const textBefore = updatedContent.substring(0, matchIndex);
        const openBrackets = (textBefore.match(/\[/g) || []).length;
        const closeBrackets = (textBefore.match(/\]/g) || []).length;
        
        if (openBrackets === closeBrackets) {
          // Replace this specific occurrence
          updatedContent = 
            updatedContent.substring(0, matchIndex) + 
            `[${match[1]}](${link.url})` + 
            updatedContent.substring(matchIndex + match[0].length);
          usedLinks.add(link.url);
          foundValidMatch = true;
          break;
        }
      }
      
      if (foundValidMatch) break;
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
