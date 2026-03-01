import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ServiceHubAnchorNav from "@/components/services/ServiceHubAnchorNav";
import { SITE_URL } from "@/lib/constants";
import PlumbingLSAHero from "@/components/services/plumbing-lsa/PlumbingLSAHero";
import PlumbingLSAMainContent from "@/components/services/plumbing-lsa/PlumbingLSAMainContent";
import PlumbingLSAFitExclusivity from "@/components/services/plumbing-lsa/PlumbingLSAFitExclusivity";
import PlumbingLSAContactForm from "@/components/services/plumbing-lsa/PlumbingLSAContactForm";

const anchorItems = [
  { label: "What Is LSA", href: "#what-is-lsa" },
  { label: "Ranking Factors", href: "#ranking" },
  { label: "Booking Rate", href: "#booking-rate" },
  { label: "Tracking", href: "#tracking" },
  { label: "Process", href: "#process" },
  { label: "Fit", href: "#fit" },
  { label: "Get Started", href: "#contact" },
];

const metaTitle = "Plumbing Local Services Ads Management | Google Guaranteed Plumbing Leads | DemandStream Digital";
const metaDescription = "Emergency plumbing searches start at the top of Google. We manage plumbing LSA for booked jobs, not lead count. Booking-rate strategy, dispute protection, and revenue tracking.";
const canonicalUrl = `${SITE_URL}/plumbing-local-service-ads`;

const PlumbingLSA = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Plumbing Local Services Ads Management",
    "description": metaDescription,
    "url": canonicalUrl,
    "serviceType": "Plumbing Local Services Ads Management",
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
      <div className="pt-16"><PlumbingLSAHero /></div>
      <ServiceHubAnchorNav items={anchorItems} />
      <PlumbingLSAMainContent />
      <PlumbingLSAFitExclusivity />
      <PlumbingLSAContactForm />
      <Footer />
    </div>
  );
};

export default PlumbingLSA;
