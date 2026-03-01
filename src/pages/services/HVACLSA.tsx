import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import HVACLSAHero from "@/components/services/hvac-lsa/HVACLSAHero";
import HVACLSAMainContent from "@/components/services/hvac-lsa/HVACLSAMainContent";
import HVACLSAFitExclusivity from "@/components/services/hvac-lsa/HVACLSAFitExclusivity";
import HVACLSAContactForm from "@/components/services/hvac-lsa/HVACLSAContactForm";

const anchorItems = [
  { label: "What Is LSA", href: "#what-is-lsa" },
  { label: "Ranking Factors", href: "#ranking" },
  { label: "Booking Rate", href: "#booking-rate" },
  { label: "Seasonal Strategy", href: "#seasonal-strategy" },
  { label: "Tracking", href: "#tracking" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "HVAC Local Services Ads Management | Seasonal LSA Strategy | DemandStream Digital";
const metaDescription = "HVAC search demand spikes hard and drops fast. We manage HVAC LSA around your season, your capacity, and your booking rate. Pay-per-lead visibility built for booked jobs.";
const canonicalUrl = `${SITE_URL}/hvac-local-service-ads`;

const HVACLSA = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HVAC Local Services Ads Management",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "HVAC Local Services Ads Management",
    "provider": { "@type": "Organization", "name": "DemandStream Digital", "url": SITE_URL },
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
      <div className="pt-16"><HVACLSAHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <HVACLSAMainContent />
      <HVACLSAFitExclusivity />
      <HVACLSAContactForm />
      <Footer />
    </div>
  );
};

export default HVACLSA;
