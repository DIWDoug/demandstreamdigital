import ServiceHubHero from "@/components/services/ServiceHubHero";

const WebDesignHero = () => (
  <ServiceHubHero
    title="Web Design for Plumbing & HVAC Companies That Converts Visitors Into Calls"
    breadcrumbs={[
      { label: "Services", href: "/services" },
      { label: "Web Design" },
    ]}
    description={{
      intro: "Custom plumbing and HVAC websites engineered for booked service calls.",
      bullets: [
        "Custom builds only. No templates, no page builders.",
        "Mobile-first, conversion-optimized for service calls",
        "Deep SEO architecture with location and service area pages",
        "Integrated call tracking and lead capture",
        "Built specifically for plumbing and HVAC operators",
      ],
      closing: "",
    }}
  />
);

export default WebDesignHero;
