import { forwardRef } from "react";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";

const HVACFacebookContactForm = forwardRef<HTMLElement>((_, ref) => (
  <ServiceContactForm
    ref={ref}
    formType="hvac_facebook_contact"
    headline="Ready to Build Replacement Demand Before Peak Season?"
    exclusivityLine="One HVAC company per market. Your competitors don't get in."
  />
));

HVACFacebookContactForm.displayName = "HVACFacebookContactForm";
export default HVACFacebookContactForm;
