import ServiceHubHero from "@/components/services/ServiceHubHero";

const PlumbingProgrammaticHero = () => (
  <ServiceHubHero
    title="Plumbing Programmatic Advertising That Keeps Your Brand Visible Across Every Screen"
    breadcrumbs={[
      { label: "Plumbing Paid Advertising", href: "/plumbing-paid-advertising" },
      { label: "Plumbing Programmatic Advertising" },
    ]}
    description={{
      intro: "Programmatic display and CTV built for plumbing operators across every screen.",
      bullets: [
        "Retarget website visitors across display networks and streaming platforms",
        "Deploy Connected TV campaigns through Mountain to reach cord-cutters",
        "Reinforce water heater replacement and repipe messaging before peak demand",
        "Run programmatic display through AdRoll across high-traffic content sites",
        "Track conversions and revenue through ServiceTitan integration",
      ],
      closing: "",
    }}
  />
);

export default PlumbingProgrammaticHero;
