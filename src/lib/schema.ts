// Centralized Schema.org markup utilities
import { PHONE_NUMBER_RAW, EMAIL, ADDRESS, BUSINESS_NAME, SITE_URL } from "./constants";

export const BUSINESS_INFO = {
  name: BUSINESS_NAME,
  legalName: "Demand Stream Digital LLC",
  alternateName: "Demand Stream Digital",
  foundingDate: "2011",
  url: SITE_URL,
  logo: `${SITE_URL}/demand-stream-digital-logo.png`,
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
    "https://www.linkedin.com/company/demand-stream-digital/",
    "https://www.facebook.com/demandstreamdigital",
    "https://www.instagram.com/demandstreamdigital/",
  ],
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 21
  }
};

export const getOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": BUSINESS_INFO.name,
  "legalName": BUSINESS_INFO.legalName,
  "alternateName": BUSINESS_INFO.alternateName,
  "url": BUSINESS_INFO.url,
  "logo": {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    "url": BUSINESS_INFO.logo,
    "contentUrl": BUSINESS_INFO.logo,
    "caption": "Demand Stream Digital Logo"
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

export const getLocalBusinessSchema = () => ({
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
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

export const getWebSiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": BUSINESS_INFO.url,
  "name": BUSINESS_INFO.name,
  "description": "Growth marketing for plumbing and HVAC companies — SEO, paid ads, reputation management, and more.",
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "inLanguage": "en-US"
});

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
  "provider": { "@id": `${SITE_URL}/#organization` },
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

export const getAboutPageSchema = () => ({
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#webpage`,
  "url": `${SITE_URL}/about`,
  "name": "About Demand Stream Digital - Growth Marketing for Plumbing & HVAC",
  "description": "Learn about Demand Stream Digital, a growth marketing company built specifically for plumbing and HVAC businesses. Founded in 2011.",
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "about": { "@id": `${SITE_URL}/#organization` },
  "mainEntity": { "@id": `${SITE_URL}/#organization` }
});

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

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
  "itemReviewed": { "@id": `${SITE_URL}/#organization` }
});

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

export const getHomepageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      "url": SITE_URL,
      "name": "Growth Marketing for Plumbing & HVAC Companies | Demand Stream Digital",
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "about": { "@id": `${SITE_URL}/#organization` },
      "description": "More calls, more jobs, more growth. SEO, Google Ads, reputation management, and content marketing built specifically for plumbing and HVAC companies."
    }
  ]
});

export const getServicesPageSchema = () => {
  const services = [
    {
      name: "Local SEO for Plumbing & HVAC",
      description: "Comprehensive local SEO services including Google Business Profile optimization, local keyword strategy, and citation building for plumbing and HVAC companies.",
      url: `${SITE_URL}/plumbing-seo`,
      serviceType: "Local SEO Service"
    },
    {
      name: "Google Business Profile SEO",
      description: "Google Business Profile optimization, review management, and local map pack visibility for plumbing and HVAC businesses.",
      url: `${SITE_URL}/plumbing-google-maps`,
      serviceType: "GBP SEO Service"
    },
    {
      name: "Paid Media for Plumbing & HVAC",
      description: "Google Ads, Meta Ads, and local service ads management to generate calls and booked jobs.",
      url: `${SITE_URL}/plumbing-paid-advertising`,
      serviceType: "PPC Advertising Service"
    },
    {
      name: "Email Marketing",
      description: "Email campaign strategy, automation, and list management for plumbing and HVAC companies.",
      url: `${SITE_URL}/plumbing-email-marketing`,
      serviceType: "Email Marketing Service"
    },
    {
      name: "Authority Building",
      description: "Link building, digital PR, and content marketing for local authority in the plumbing and HVAC space.",
      url: `${SITE_URL}/plumbing-authority-building`,
      serviceType: "Link Building Service"
    },
    {
      name: "Reporting & Dashboards",
      description: "Custom dashboards, rank tracking, and ROI reporting so you always know what's working.",
      url: `${SITE_URL}/plumbing-reporting`,
      serviceType: "Marketing Analytics Service"
    },
    {
      name: "Content Marketing",
      description: "Blog content, location pages, and topical authority content development for plumbing and HVAC businesses.",
      url: `${SITE_URL}/plumbing-content-marketing`,
      serviceType: "Content Marketing Service"
    }
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/services#webpage`,
        "url": `${SITE_URL}/services`,
        "name": "Growth Marketing Services for Plumbing & HVAC Companies",
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/#organization` }
      },
      ...services.map(service => getServiceSchema(service))
    ]
  };
};

export const getTestimonialsPageSchema = (reviews: { author: string; reviewBody: string; ratingValue: number }[]) => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/testimonials#webpage`,
      "url": `${SITE_URL}/testimonials`,
      "name": "Client Testimonials & Reviews | Demand Stream Digital",
      "isPartOf": { "@id": `${SITE_URL}/#website` }
    },
    ...reviews.map(review => getReviewSchema(review))
  ]
});

export const getAboutSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getAboutPageSchema()
  ]
});

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
        "isPartOf": { "@id": `${SITE_URL}/#website` },
        "about": { "@id": `${SITE_URL}/#organization` }
      }
    ]
  };

  if (config.faqGroups && config.faqGroups.length > 0) {
    const allFaqs = config.faqGroups.flatMap(group => 
      group.items.map(item => ({
        question: item.question,
        answer: item.answer
      }))
    );
    const faqSchemaWithId = {
      ...getFAQPageSchema(allFaqs),
      "@id": `${config.url}#faq`
    };
    schema["@graph"].push(faqSchemaWithId);
  }

  return schema;
};

export const getContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact#webpage`,
      "url": `${SITE_URL}/contact`,
      "name": "Contact Demand Stream Digital - Get a Free Strategy Call",
      "description": "Reach out to Demand Stream Digital to explore growth marketing for your plumbing or HVAC business.",
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "about": { "@id": `${SITE_URL}/#organization` },
      "mainEntity": {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
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

export const getBlogSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      "url": `${SITE_URL}/blog`,
      "name": "Plumbing & HVAC Marketing Blog | Demand Stream Digital",
      "description": "Actionable marketing tips for plumbing and HVAC business owners. SEO, Google Ads, reputation management, and growth strategies.",
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "inLanguage": "en-US"
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog#webpage`,
      "url": `${SITE_URL}/blog`,
      "name": "Plumbing & HVAC Marketing Blog | Demand Stream Digital",
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "about": { "@id": `${SITE_URL}/blog#blog` }
    }
  ]
});

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
      "author": { "@id": `${SITE_URL}/#organization` },
      "provider": { "@id": `${SITE_URL}/#organization` }
    },
    {
      "@type": "WebPage",
      "@id": `${config.url}#webpage`,
      "url": config.url,
      "name": config.name,
      "description": config.description,
      "isPartOf": { "@id": `${SITE_URL}/#website` }
    }
  ]
});
