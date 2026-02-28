import ServiceFitSection from "@/components/services/generic/ServiceFitSection";

const goodFit = [
  { point: "You run an HVAC company with an active dispatch board and real service capacity, ideally 2 or more trucks" },
  { point: "You track booking rate or are willing to install call tracking before campaigns launch" },
  { point: "You use ServiceTitan or a comparable CRM with booking rate visibility" },
  { point: "You want to report on cost per booked call, not impressions or click-through rate" },
  { point: "You understand HVAC search advertising compounds over a 90-day build period" },
  { point: "You have a verified, address-visible Google Business Profile with active reviews" },
];

const notFit = [
  { point: "You have no call tracking and are not willing to install it before spend begins" },
  { point: "Your booking rate is unknown and you have no process to measure it" },
  { point: "You are not willing to participate in review acquisition" },
  { point: "You expect guaranteed ranking positions or guaranteed call volumes" },
  { point: "You are looking for the lowest cost per lead available" },
  { point: "You are not willing to commit to a minimum 6-month engagement after setup" },
];

const HVACSearchAdsFitExclusivity = () => (
  <ServiceFitSection
    heading="Is HVAC Search Advertising Right for Your Company?"
    subheading="We work best with HVAC companies that have the capacity and tracking foundation to convert the calls we send them."
    goodFit={goodFit}
    notFit={notFit}
    tradeNoun="HVAC"
    exclusivityBody="We partner with one HVAC company per service area for HVAC search advertising. When you work with DemandStream, your competitors do not. The strategy we build is designed to put you ahead. Not split between you and the shop down the street. If your market is available, it is worth finding out now."
  />
);

export default HVACSearchAdsFitExclusivity;
