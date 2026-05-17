import ServiceHubHero from "@/components/services/ServiceHubHero";

const HVACLinkedInHero = () => (
  <ServiceHubHero
    title="HVAC LinkedIn Advertising That Wins Commercial Contracts"
    breadcrumbs={[
      { label: "HVAC Paid Advertising", href: "/hvac-paid-advertising" },
      { label: "HVAC LinkedIn Advertising" },
    ]}
    description={{
      intro: "LinkedIn ads built for HVAC operators chasing commercial contracts.",
      bullets: [
        "Target property managers and facility directors by title and geography",
        "Reach decision-makers at multi-site commercial and residential properties",
        "Promote commercial HVAC maintenance contracts and service agreements",
        "Generate retrofit, upgrade, and inspection opportunities",
        "Track booked calls and revenue through ServiceTitan integration",
      ],
      closing: "",
    }}
  />
);

export default HVACLinkedInHero;
