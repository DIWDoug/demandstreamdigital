import ServiceHubHero from "@/components/services/ServiceHubHero";

const HVACPaidAdsHero = () => (
  <ServiceHubHero
    title="HVAC Paid Advertising That Controls Seasonal Demand"
    breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Paid Advertising", href: "/paid-marketing" },
      { label: "HVAC Paid Advertising" },
    ]}
    description={{
      intro: "Paid advertising built for HVAC operators across every season.",
      bullets: [
        "Capture no-cool and no-heat emergency searches immediately",
        "Separate repair and replacement campaigns",
        "Retarget homeowners researching new systems who did not book",
        "Expand into commercial HVAC markets",
        "Align spend with technician capacity through every season",
      ],
      closing: "",
    }}
  />
);

export default HVACPaidAdsHero;
