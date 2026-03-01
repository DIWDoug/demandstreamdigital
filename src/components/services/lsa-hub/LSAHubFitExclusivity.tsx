import ServiceFitSection from "@/components/services/generic/ServiceFitSection";

const goodFit = [
  { point: "You already generate consistent service calls" },
  { point: "You respond quickly to inbound leads" },
  { point: "You have strong reviews or are actively building them" },
  { point: "You use ServiceTitan or a structured CRM" },
  { point: "You want more booked jobs, not just more leads" },
  { point: "You want to own the top position in local search" },
];

const notFit = [
  { point: "You ignore incoming calls" },
  { point: "You want the cheapest option available" },
  { point: "You do not track booking rate" },
  { point: "You avoid managing disputes" },
  { point: "You expect overnight results" },
  { point: "You have given up on marketing entirely" },
];

const LSAHubFitExclusivity = () => (
  <ServiceFitSection
    heading="Is LSA Management the Right Fit for Your Shop?"
    subheading="We work with established plumbing and HVAC companies that want to own the top of Google, not just turn on LSA and hope for the best."
    goodFit={goodFit}
    notFit={notFit}
    tradeNoun="Plumbing or HVAC"
    exclusivityBody="We partner with one plumbing company and one HVAC company per service area for LSA management. When you work with DemandStream, your competitors do not. The profile we build is designed to put you ahead — not split between you and the shop down the street. If your market is available, it is worth finding out now."
  />
);

export default LSAHubFitExclusivity;
