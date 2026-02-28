import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import HVACFacebookHero from "@/components/services/hvac-facebook-advertising/HVACFacebookHero";
import HVACFacebookMainContent from "@/components/services/hvac-facebook-advertising/HVACFacebookMainContent";
import HVACFacebookFitExclusivity from "@/components/services/hvac-facebook-advertising/HVACFacebookFitExclusivity";
import HVACFacebookContactForm from "@/components/services/hvac-facebook-advertising/HVACFacebookContactForm";

const anchorItems = [
  { label: "How Facebook Works", href: "#how-facebook-works" },
  { label: "Campaign Types", href: "#campaign-types" },
  { label: "Seasonal Strategy", href: "#seasonal-strategy" },
  { label: "Tracking", href: "#tracking" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "HVAC Facebook Advertising for Replacement and Maintenance Membership Growth | DemandStream";
const metaDescription = "HVAC Facebook advertising built to drive replacement demand and grow maintenance memberships. Campaigns tracked through ServiceTitan to booked revenue.";
const canonicalUrl = `${SITE_URL}/hvac-facebook-advertising/`;

const HVACFacebookAdvertising = () => {
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
        "name": "HVAC Facebook Advertising",
        "provider": { "@type": "HVACBusiness", "name": "DemandStream Digital" },
        "areaServed": "United States",
        "url": "https://demandstreamdigital.com/hvac-facebook-advertising/"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://demandstreamdigital.com/" },
          { "@type": "ListItem", "position": 2, "name": "HVAC Paid Advertising", "item": "https://demandstreamdigital.com/hvac-paid-advertising/" },
          { "@type": "ListItem", "position": 3, "name": "HVAC Facebook Advertising", "item": "https://demandstreamdigital.com/hvac-facebook-advertising/" }
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
        hrefLangs={[
          { hrefLang: "en-US", href: canonicalUrl },
          { hrefLang: "en-CA", href: canonicalUrl },
          { hrefLang: "x-default", href: canonicalUrl },
        ]}
        schemaJson={pageSchema}
      />
      <Header />
      <div className="pt-16"><HVACFacebookHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <HVACFacebookMainContent />
      <HVACFacebookFitExclusivity />
      <HVACFacebookContactForm />
      <Footer />
    </div>
  );
};

export default HVACFacebookAdvertising;
