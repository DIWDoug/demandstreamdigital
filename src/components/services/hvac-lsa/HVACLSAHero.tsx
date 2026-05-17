import ServiceHubHero from "@/components/services/ServiceHubHero";

const HVACLSAHero = () => (
  <ServiceHubHero
    title="HVAC Local Services Ads That Drive Booked Calls"
    breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Local Services Ads", href: "/plumbing-hvac-local-service-ads" },
      { label: "HVAC LSA" },
    ]}
    description={{
      intro: "Local Services Ads managed specifically for HVAC operators.",
      bullets: [
        "Google Guaranteed placement that builds trust at the top of the page",
        "Pay-per-lead model. You pay for HVAC leads, not clicks.",
        "Seasonal demand alignment so your ad spend matches your capacity",
        "Repair vs replacement segmentation for cleaner lead classification",
        "ServiceTitan integration for revenue tracking tied to real booked jobs",
      ],
      closing: "",
    }}
  />
);

export default HVACLSAHero;
