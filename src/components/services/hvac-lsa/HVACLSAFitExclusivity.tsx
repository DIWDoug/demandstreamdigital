import ServiceFitSection from "@/components/services/generic/ServiceFitSection";

const goodFit = [
  { point: "You respond quickly to calls" },
  { point: "You maintain strong reviews" },
  { point: "You track booking rate" },
  { point: "You use ServiceTitan or a structured CRM" },
  { point: "You want consistent booked jobs across seasons" },
  { point: "You operate 5 to 40+ trucks with a growth mindset" },
];

const notFit = [
  { point: "You struggle with response time" },
  { point: "You do not track revenue by source" },
  { point: "You want set-and-forget management" },
  { point: "You are focused only on lowest cost per lead" },
  { point: "You expect results without operational discipline" },
];

const HVACLSAFitExclusivity = () => (
  <ServiceFitSection
    heading="Is HVAC LSA Management the Right Fit?"
    subheading="We work with HVAC companies serious about owning peak-season visibility and building year-round call stability."
    goodFit={goodFit}
    notFit={notFit}
    tradeNoun="HVAC"
    exclusivityBody="We partner with one HVAC company per service area for LSA management. When you work with DemandStream, your competitors do not. The profile we build is designed to own seasonal visibility and drive consistent booked calls year-round. If your market is available, it is worth finding out now."
  />
);

export default HVACLSAFitExclusivity;
