import ServiceFitSection from "@/components/services/generic/ServiceFitSection";

const goodFit = [
  { point: "You run a plumbing company with an active dispatch board and real service capacity" },
  { point: "You track booking rate or are willing to install call tracking before campaigns launch" },
  { point: "You use ServiceTitan or a comparable CRM with booking visibility" },
  { point: "You want to report on cost per booked call, not impressions or click-through rate" },
  { point: "You understand plumbing search advertising is a 90-day build, not an overnight result" },
  { point: "You have a verified, address-visible Google Business Profile with active reviews" },
];

const notFit = [
  { point: "You have no call tracking and are not willing to install it" },
  { point: "Your booking rate is unknown and you have no process to measure it" },
  { point: "You are not willing to participate in review acquisition" },
  { point: "You expect guaranteed ranking positions or guaranteed call volumes" },
  { point: "You are looking for the lowest cost per lead available" },
  { point: "You are not willing to commit to a minimum 6-month engagement after setup" },
];

const PlumbingSearchAdsFitExclusivity = () => (
  <ServiceFitSection
    heading="Is Plumbing Search Advertising Right for Your Company?"
    subheading="We work best with plumbing companies that have the dispatch capacity and tracking foundation to convert what we send them."
    goodFit={goodFit}
    notFit={notFit}
    tradeNoun="Plumbing"
    exclusivityBody="We partner with one plumbing company per service area for plumbing search advertising. When you work with DemandStream, your competitors do not. The strategy we build is designed to put you ahead. Not split between you and the shop down the street. If your market is available, it is worth finding out now."
  />
);

export default PlumbingSearchAdsFitExclusivity;
