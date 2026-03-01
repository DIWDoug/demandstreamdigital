import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import LSAHubHero from "@/components/services/lsa-hub/LSAHubHero";
import LSAHubMainContent from "@/components/services/lsa-hub/LSAHubMainContent";
import LSAHubFitExclusivity from "@/components/services/lsa-hub/LSAHubFitExclusivity";
import LSAHubContactForm from "@/components/services/lsa-hub/LSAHubContactForm";

const anchorItems = [
  { label: "What Is LSA", href: "#what-is-lsa" },
  { label: "Ranking Factors", href: "#ranking" },
  { label: "Tracking", href: "#tracking" },
  { label: "LSA vs Search", href: "#lsa-vs-search" },
  { label: "Process", href: "#process" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Local Services Ads Management for Plumbing & HVAC Companies | DemandStream Digital";
const metaDescription = "LSA puts you above every other result on Google. We manage it for booked jobs, not lead volume. Booking-rate strategy, dispute management, and revenue tracking built for plumbing and HVAC.";
const canonicalUrl = `${SITE_URL}/plumbing-hvac-local-service-ads`;

const LSAHub = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Local Services Ads Management for Plumbing & HVAC",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Local Services Ads Management",
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
      <div className="pt-16"><LSAHubHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <LSAHubMainContent />
      <LSAHubFitExclusivity />
      <LSAHubContactForm />
      <Footer />
    </div>
  );
};

export default LSAHub;
