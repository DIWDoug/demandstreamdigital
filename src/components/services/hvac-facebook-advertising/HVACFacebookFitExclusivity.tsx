import ServiceFitSection from "@/components/services/generic/ServiceFitSection";

const goodFit = [
  { point: "You offer replacement services and want to grow install volume" },
  { point: "You promote financing options" },
  { point: "You want to grow maintenance memberships and recurring revenue" },
  { point: "You want predictable install demand ahead of peak seasons" },
  { point: "You have tracking in place or are ready to implement it" },
];

const notFit = [
  { point: "You rely only on emergency repair with no install or maintenance focus" },
  { point: "No call tracking or CRM integration in place" },
  { point: "No long-term demand generation strategy" },
  { point: "You want same-day call volume only with no interest in nurturing" },
];

const HVACFacebookFitExclusivity = () => (
  <ServiceFitSection
    heading="Is HVAC Facebook Advertising Right for Your Company?"
    subheading="Facebook works best for HVAC companies building beyond emergency-only demand."
    goodFit={goodFit}
    notFit={notFit}
    tradeNoun="HVAC"
    exclusivityBody="When you work with DemandStream, your competitors don't. We take one HVAC client per service area. That keeps our incentives consistent with yours and means the Facebook strategy we build is working to put you ahead, not split between you and the company across town."
  />
);

export default HVACFacebookFitExclusivity;
