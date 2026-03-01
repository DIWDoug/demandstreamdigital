import { forwardRef } from "react";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";

const HVACLSAContactForm = forwardRef<HTMLElement>((_, ref) => (
  <ServiceContactForm
    ref={ref}
    formType="hvac_lsa_contact"
    headline="Ready to Own HVAC Search Visibility?"
    exclusivityLine="One HVAC company per market. Your competitors don't get in."
  />
));

HVACLSAContactForm.displayName = "HVACLSAContactForm";
export default HVACLSAContactForm;
