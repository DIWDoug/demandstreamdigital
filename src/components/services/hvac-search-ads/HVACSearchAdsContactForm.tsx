import { forwardRef } from "react";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";

const HVAC_SEARCH_STEPS = [
  { title: "Discovery & Alignment", content: "We learn how your HVAC business operates: service area, capacity, dispatch process, and seasonal patterns. This shapes everything that follows." },
  { title: "Scope & Pricing", content: "We scope the campaign architecture based on your service mix, market, and growth targets. You know exactly what you are buying before any work begins." },
  { title: "Smooth Onboarding", content: "Tracking setup, call attribution, and CRM integration happen before a single dollar of ad spend. We do not run campaigns on broken data." },
  { title: "Execute with Precision", content: "Campaigns are built, launched, and refined. Emergency repair campaigns run first. Install and replacement campaigns are layered in as data confirms the foundation." },
  { title: "Deliver & Communicate", content: "Monthly reporting shows cost per booked call by campaign and service type. You see what the dispatch board sees, not just what the ad platform reports." },
  { title: "Delight & Retain", content: "Seasonal bid calendars, capacity throttle protocols, and continuous refinement keep your campaigns aligned with how your HVAC business actually runs." },
];

const HVACSearchAdsContactForm = forwardRef<HTMLElement>((_, ref) => (
  <ServiceContactForm
    ref={ref}
    formType="hvac_search_ads_contact"
    headline="Ready to Capture Seasonal Demand?"
    exclusivityLine="One HVAC company per market. Your competitors don't get in."
    steps={HVAC_SEARCH_STEPS}
  />
));

HVACSearchAdsContactForm.displayName = "HVACSearchAdsContactForm";
export default HVACSearchAdsContactForm;
