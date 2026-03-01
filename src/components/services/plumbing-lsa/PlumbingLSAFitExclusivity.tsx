import ServiceFitSection from "@/components/services/generic/ServiceFitSection";

const goodFit = [
  { point: "You generate consistent plumbing service volume" },
  { point: "You respond quickly to inbound calls" },
  { point: "You maintain strong reviews" },
  { point: "You use ServiceTitan or a structured CRM" },
  { point: "You want more booked jobs, not just leads" },
  { point: "You want to own the top spot for emergency plumbing searches" },
];

const notFit = [
  { point: "You miss calls frequently" },
  { point: "You are looking for the cheapest lead source" },
  { point: "You do not track booking rate" },
  { point: "You avoid managing disputes" },
  { point: "You expect instant results without operational discipline" },
];

const PlumbingLSAFitExclusivity = () => (
  <ServiceFitSection
    heading="Is Plumbing LSA Management the Right Fit?"
    subheading="We work with established plumbing companies that want to own emergency visibility in their market."
    goodFit={goodFit}
    notFit={notFit}
    tradeNoun="Plumbing"
    exclusivityBody="We partner with one plumbing company per service area for LSA management. When you work with DemandStream, your competitors do not. The profile we build is designed to own emergency plumbing visibility in your market. If your territory is open, it is worth finding out now."
  />
);

export default PlumbingLSAFitExclusivity;
