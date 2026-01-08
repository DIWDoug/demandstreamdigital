// Centralized Schema.org markup utilities
// Implements best practices for Organization, LocalBusiness, Service, and page-specific schemas

import { PHONE_NUMBER_RAW, EMAIL, ADDRESS, BUSINESS_NAME, SITE_URL } from "./constants";

// Core business information
export const BUSINESS_INFO = {
  name: BUSINESS_NAME,
  legalName: BUSINESS_NAME,
  alternateName: "Dialed-In Web",
  foundingDate: "2011",
  url: SITE_URL,
  logo: `${SITE_URL}/dialedinweb-logo.png`,
  email: EMAIL,
  telephone: PHONE_NUMBER_RAW,
  address: {
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.zip,
    addressCountry: "US"
  },
  geo: {
    latitude: 32.8406,
    longitude: -96.7693
  },
  sameAs: [
    "https://www.linkedin.com/company/dialed-in-web/",
    "https://www.facebook.com/dialedinweb",
    "https://www.instagram.com/dialedinweb/",
    "https://share.google/IXw0qAzlgpjR1SIKP"
  ],
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 21
  }
};

// Organization Schema - Used site-wide
export const getOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://dialedinweb.com/#organization",
  "name": BUSINESS_INFO.name,
  "legalName": BUSINESS_INFO.legalName,
  "alternateName": BUSINESS_INFO.alternateName,
  "url": BUSINESS_INFO.url,
  "logo": {
    "@type": "ImageObject",
    "@id": "https://dialedinweb.com/#logo",
    "url": BUSINESS_INFO.logo,
    "contentUrl": BUSINESS_INFO.logo,
    "caption": "Dialed-In Web Logo"
  },
  "image": BUSINESS_INFO.logo,
  "email": BUSINESS_INFO.email,
  "telephone": BUSINESS_INFO.telephone,
  "foundingDate": BUSINESS_INFO.foundingDate,
  "address": {
    "@type": "PostalAddress",
    ...BUSINESS_INFO.address
  },
  "sameAs": BUSINESS_INFO.sameAs,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": BUSINESS_INFO.aggregateRating.ratingValue,
    "reviewCount": BUSINESS_INFO.aggregateRating.reviewCount,
    "bestRating": 5,
    "worstRating": 1
  }
});

// LocalBusiness Schema - For local SEO
export const getLocalBusinessSchema = () => ({
  "@type": "LocalBusiness",
  "@id": "https://dialedinweb.com/#localbusiness",
  "name": BUSINESS_INFO.name,
  "image": BUSINESS_INFO.logo,
  "url": BUSINESS_INFO.url,
  "telephone": BUSINESS_INFO.telephone,
  "email": BUSINESS_INFO.email,
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    ...BUSINESS_INFO.address
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": BUSINESS_INFO.geo.latitude,
    "longitude": BUSINESS_INFO.geo.longitude
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": BUSINESS_INFO.sameAs,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": BUSINESS_INFO.aggregateRating.ratingValue,
    "reviewCount": BUSINESS_INFO.aggregateRating.reviewCount,
    "bestRating": 5,
    "worstRating": 1
  }
});

// WebSite Schema with SearchAction
export const getWebSiteSchema = () => ({
  "@type": "WebSite",
  "@id": "https://dialedinweb.com/#website",
  "url": BUSINESS_INFO.url,
  "name": BUSINESS_INFO.name,
  "description": "White-label digital marketing fulfillment for agencies",
  "publisher": { "@id": "https://dialedinweb.com/#organization" },
  "inLanguage": "en-US"
});

// Service Schema generator
export const getServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) => ({
  "@type": "Service",
  "@id": `${service.url}#service`,
  "name": service.name,
  "description": service.description,
  "url": service.url,
  "serviceType": service.serviceType || "Marketing Service",
  "provider": { "@id": "https://dialedinweb.com/#organization" },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": service.name,
    "itemListElement": [{
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name
      }
    }]
  }
});

// AboutPage Schema
export const getAboutPageSchema = () => ({
  "@type": "AboutPage",
  "@id": "https://dialedinweb.com/about#webpage",
  "url": "https://dialedinweb.com/about",
  "name": "About Dialed-In Web - White-Label Marketing Fulfillment",
  "description": "Learn about Dialed-In Web, a white-label digital marketing fulfillment partner for agencies. Founded in 2011.",
  "isPartOf": { "@id": "https://dialedinweb.com/#website" },
  "about": { "@id": "https://dialedinweb.com/#organization" },
  "mainEntity": { "@id": "https://dialedinweb.com/#organization" }
});

// BreadcrumbList Schema generator
export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Review Schema generator
export const getReviewSchema = (review: {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished?: string;
}) => ({
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": review.author
  },
  "reviewBody": review.reviewBody,
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.ratingValue,
    "bestRating": 5,
    "worstRating": 1
  },
  "datePublished": review.datePublished || new Date().toISOString().split('T')[0],
  "itemReviewed": { "@id": "https://dialedinweb.com/#organization" }
});

// FAQPage Schema generator
export const getFAQPageSchema = (faqs: { question: string; answer: string }[]) => ({
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Full homepage schema graph
export const getHomepageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id": "https://dialedinweb.com/#webpage",
      "url": "https://dialedinweb.com",
      "name": "White-Label Digital Marketing Fulfillment for Agencies | Dialed-In Web",
      "isPartOf": { "@id": "https://dialedinweb.com/#website" },
      "about": { "@id": "https://dialedinweb.com/#organization" },
      "description": "We partner with agencies to deliver custom white-label SEO, local search, paid media, and authority building."
    }
  ]
});

// Services page schema with all service offerings
export const getServicesPageSchema = () => {
  const services = [
    {
      name: "White-Label Local SEO",
      description: "Comprehensive local SEO services including Google Business Profile optimization, local keyword strategy, and citation building.",
      url: "https://dialedinweb.com/white-label-local-seo",
      serviceType: "Local SEO Service"
    },
    {
      name: "White-Label Google Business Profile SEO",
      description: "Google Business Profile optimization, review management, and local map pack visibility services.",
      url: "https://dialedinweb.com/white-label-gbp-seo",
      serviceType: "GBP SEO Service"
    },
    {
      name: "White-Label Paid Media",
      description: "Google Ads, Meta Ads, and local service ads management for agencies.",
      url: "https://dialedinweb.com/white-label-paid-media",
      serviceType: "PPC Advertising Service"
    },
    {
      name: "White-Label Email Marketing",
      description: "Email campaign strategy, automation, and list management services.",
      url: "https://dialedinweb.com/white-label-email-marketing",
      serviceType: "Email Marketing Service"
    },
    {
      name: "White-Label Authority Building",
      description: "Link building, digital PR, and content marketing for local authority.",
      url: "https://dialedinweb.com/white-label-local-authority-building",
      serviceType: "Link Building Service"
    },
    {
      name: "White-Label Reporting",
      description: "Custom dashboards, rank tracking, and ROI reporting for agency clients.",
      url: "https://dialedinweb.com/white-label-reporting",
      serviceType: "Marketing Analytics Service"
    },
    {
      name: "White-Label Content Marketing",
      description: "Blog content, location pages, and topical authority content development.",
      url: "https://dialedinweb.com/white-label-content-marketing",
      serviceType: "Content Marketing Service"
    }
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      {
        "@type": "WebPage",
        "@id": "https://dialedinweb.com/white-label-inbound-marketing-services#webpage",
        "url": "https://dialedinweb.com/white-label-inbound-marketing-services",
        "name": "White-Label Inbound Marketing Services for Agencies",
        "isPartOf": { "@id": "https://dialedinweb.com/#website" },
        "about": { "@id": "https://dialedinweb.com/#organization" }
      },
      ...services.map(service => getServiceSchema(service))
    ]
  };
};

// Testimonials page schema
export const getTestimonialsPageSchema = (reviews: { author: string; reviewBody: string; ratingValue: number }[]) => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": "https://dialedinweb.com/testimonials#webpage",
      "url": "https://dialedinweb.com/testimonials",
      "name": "Client Testimonials & Reviews | Dialed-In Web",
      "isPartOf": { "@id": "https://dialedinweb.com/#website" }
    },
    ...reviews.map(review => getReviewSchema(review))
  ]
});

// About page schema
export const getAboutSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getAboutPageSchema()
  ]
});

// Service hub page schema generator (includes FAQ)
export const getServiceHubSchema = (config: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  faqGroups?: { category: string; items: { question: string; answer: string }[] }[];
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getServiceSchema(config),
      {
        "@type": "WebPage",
        "@id": `${config.url}#webpage`,
        "url": config.url,
        "name": config.name,
        "description": config.description,
        "isPartOf": { "@id": "https://dialedinweb.com/#website" },
        "about": { "@id": "https://dialedinweb.com/#organization" }
      }
    ]
  };

  // Add FAQ schema if FAQ groups exist
  if (config.faqGroups && config.faqGroups.length > 0) {
    const allFaqs = config.faqGroups.flatMap(group => 
      group.items.map(item => ({
        question: item.question,
        answer: item.answer
      }))
    );
    // Add unique @id based on the page URL to prevent duplicate schema issues
    const faqSchemaWithId = {
      ...getFAQPageSchema(allFaqs),
      "@id": `${config.url}#faq`
    };
    schema["@graph"].push(faqSchemaWithId);
  }

  return schema;
};

// ContactPage Schema
export const getContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    {
      "@type": "ContactPage",
      "@id": "https://dialedinweb.com/contact#webpage",
      "url": "https://dialedinweb.com/contact",
      "name": "Contact Dialed-In Web - Start a White Label Partnership",
      "description": "Reach out to Dialed-In Web to explore a white label partnership for SEO, paid ads, and content marketing services.",
      "isPartOf": { "@id": "https://dialedinweb.com/#website" },
      "about": { "@id": "https://dialedinweb.com/#organization" },
      "mainEntity": {
        "@type": "Organization",
        "@id": "https://dialedinweb.com/#organization"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://dialedinweb.com/#localbusiness",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.telephone,
      "email": BUSINESS_INFO.email,
      "address": {
        "@type": "PostalAddress",
        ...BUSINESS_INFO.address
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ]
    }
  ]
});

// Blog Schema
export const getBlogSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    {
      "@type": "Blog",
      "@id": "https://dialedinweb.com/blog#blog",
      "url": "https://dialedinweb.com/blog",
      "name": "Digital Marketing Insights - White Label SEO & PPC Blog",
      "description": "Actionable tips for agency owners. Explore white label SEO, PPC, email, and more on the Dialed-In Web digital marketing blog.",
      "publisher": { "@id": "https://dialedinweb.com/#organization" },
      "isPartOf": { "@id": "https://dialedinweb.com/#website" },
      "inLanguage": "en-US"
    },
    {
      "@type": "WebPage",
      "@id": "https://dialedinweb.com/blog#webpage",
      "url": "https://dialedinweb.com/blog",
      "name": "Digital Marketing Insights | White Label SEO & PPC Blog",
      "isPartOf": { "@id": "https://dialedinweb.com/#website" },
      "about": { "@id": "https://dialedinweb.com/blog#blog" }
    }
  ]
});

// SoftwareApplication Schema for Calculators
export const getCalculatorSchema = (config: {
  name: string;
  description: string;
  url: string;
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    {
      "@type": "SoftwareApplication",
      "@id": `${config.url}#application`,
      "name": config.name,
      "description": config.description,
      "url": config.url,
      "applicationCategory": config.category || "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": { "@id": "https://dialedinweb.com/#organization" },
      "provider": { "@id": "https://dialedinweb.com/#organization" }
    },
    {
      "@type": "WebPage",
      "@id": `${config.url}#webpage`,
      "url": config.url,
      "name": config.name,
      "description": config.description,
      "isPartOf": { "@id": "https://dialedinweb.com/#website" }
    }
  ]
});
