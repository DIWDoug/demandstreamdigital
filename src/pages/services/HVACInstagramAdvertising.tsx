import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import HVACInstagramHero from "@/components/services/hvac-instagram-advertising/HVACInstagramHero";
import HVACInstagramMainContent from "@/components/services/hvac-instagram-advertising/HVACInstagramMainContent";
import HVACInstagramFitExclusivity from "@/components/services/hvac-instagram-advertising/HVACInstagramFitExclusivity";
import HVACPaidAdsContactForm from "@/components/services/hvac-paid-advertising/HVACPaidAdsContactForm";

const anchorItems = [
  { label: "How Instagram Works", href: "#how-instagram-works" },
  { label: "Campaign Types", href: "#campaign-types" },
  { label: "Seasonal Strategy", href: "#seasonal-strategy" },
  { label: "Tracking", href: "#tracking" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "HVAC Instagram Ads for Install Season | DSD";
const metaDescription = "System installs, seasonal tune-up promotions, and HVAC brand authority on Instagram. Visual content that builds trust and converts followers into booked service calls.";
const canonicalUrl = `${SITE_URL}/hvac-instagram-advertising`;

const HVACInstagramAdvertising = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HVACBusiness",
        "name": "DemandStream Digital",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4849 Greenville Ave, Suite 100 #176",
          "addressLocality": "Dallas",
          "addressRegion": "TX",
          "postalCode": "75206"
        },
        "telephone": "+1-214-307-2995",
        "url": "https://demandstreamdigital.com"
      },
      {
        "@type": "Service",
        "name": "HVAC Instagram Advertising",
        "provider": { "@type": "HVACBusiness", "name": "DemandStream Digital" },
        "areaServed": "United States",
        "url": "https://demandstreamdigital.com/hvac-instagram-advertising"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://demandstreamdigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "HVAC Paid Advertising", "item": "https://demandstreamdigital.com/hvac-paid-advertising" },
          { "@type": "ListItem", "position": 3, "name": "HVAC Instagram Advertising", "item": "https://demandstreamdigital.com/hvac-instagram-advertising" }
        ]
      }
    ]
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        schemaJson={pageSchema}
      />
      <Header />
      <div className="pt-16"><HVACInstagramHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <HVACInstagramMainContent />
      <HVACInstagramFitExclusivity />
      <HVACPaidAdsContactForm headline="Ready to Build Brand Authority Before Peak Demand Hits?" />
      <Footer />
    </div>
  );
};

export default HVACInstagramAdvertising;
