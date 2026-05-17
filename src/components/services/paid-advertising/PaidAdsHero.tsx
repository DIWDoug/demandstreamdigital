import ServiceHubHero from "@/components/services/ServiceHubHero";

const PaidAdsHero = () => (
  <ServiceHubHero
    title="Paid Advertising for Plumbing & HVAC Companies"
    heroSubtitle="Built to Drive More Booked Service Calls"
    breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Paid Advertising" },
    ]}
    description={{
      intro: "Paid advertising built for plumbing and HVAC operators in competitive local markets.",
      bullets: [
        "Capture high-intent emergency searches immediately",
        "Fill install gaps during shoulder seasons",
        "Retarget homeowners who searched but did not book",
        "Defend your service area from aggressive competitors",
        "Align ad spend with technician capacity",
      ],
      closing: "",
    }}
  />
);

export default PaidAdsHero;
