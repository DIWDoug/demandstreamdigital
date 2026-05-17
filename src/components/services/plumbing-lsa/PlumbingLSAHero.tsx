import ServiceHubHero from "@/components/services/ServiceHubHero";

const PlumbingLSAHero = () => (
  <ServiceHubHero
    title="Plumbing Local Services Ads That Generate Real Booked Calls"
    breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Local Services Ads", href: "/plumbing-hvac-local-service-ads" },
      { label: "Plumbing LSA" },
    ]}
    description={{
      intro: "Local Services Ads managed specifically for plumbing operators.",
      bullets: [
        "Google Guaranteed visibility for emergency and service searches",
        "Pay-per-lead structure. You pay for real plumbing leads, not clicks.",
        "Emergency-driven category setup matched to how homeowners search",
        "Booking-rate improvement strategy that protects your ranking",
        "ServiceTitan-aligned tracking for clean revenue attribution",
      ],
      closing: "",
    }}
  />
);

export default PlumbingLSAHero;
