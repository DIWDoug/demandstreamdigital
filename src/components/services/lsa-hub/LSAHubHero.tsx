import ServiceHubHero from "@/components/services/ServiceHubHero";

const LSAHubHero = () => (
  <ServiceHubHero
    title="Local Services Ads for Plumbing & HVAC Companies"
    breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Local Services Ads" },
    ]}
    description={{
      intro: "Local Services Ads built specifically for plumbing and HVAC operators.",
      bullets: [
        "Google Guaranteed positioning that builds trust before the phone rings",
        "Pay-per-lead structure so you pay for real opportunities, not clicks",
        "Booking-rate strategy that improves how Google ranks your profile",
        "Review-driven ranking influence tied to your reputation growth system",
        "ServiceTitan integration for clean revenue tracking",
      ],
      closing: "",
    }}
  />
);

export default LSAHubHero;
