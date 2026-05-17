import ServiceHubHero from "@/components/services/ServiceHubHero";

const PlumbingLinkedInHero = () => (
  <ServiceHubHero
    title="Plumbing LinkedIn Advertising That Wins Commercial Contracts"
    heroSubtitle="Built to Win Commercial Plumbing Contracts"
    breadcrumbs={[
      { label: "Plumbing Paid Advertising", href: "/plumbing-paid-advertising" },
      { label: "Plumbing LinkedIn Advertising" },
    ]}
    description={{
      intro: "LinkedIn ads built for plumbing operators chasing commercial contracts.",
      bullets: [
        "Target property managers and facility directors by title and geography",
        "Reach decision-makers at multi-site commercial and residential properties",
        "Promote commercial plumbing maintenance contracts and service agreements",
        "Generate backflow testing, hydro-jet, and repipe opportunities",
        "Track booked calls and revenue through ServiceTitan integration",
      ],
      closing: "",
    }}
  />
);

export default PlumbingLinkedInHero;
