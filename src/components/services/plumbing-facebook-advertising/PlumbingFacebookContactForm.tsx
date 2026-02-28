import { forwardRef } from "react";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";

const PlumbingFacebookContactForm = forwardRef<HTMLElement>((_, ref) => (
  <ServiceContactForm
    ref={ref}
    formType="plumbing_facebook_contact"
    headline="Ready to Build Replacement Demand Before the Next Call Comes In?"
    exclusivityLine="One plumbing company per market. Your competitors don't get in."
  />
));

PlumbingFacebookContactForm.displayName = "PlumbingFacebookContactForm";
export default PlumbingFacebookContactForm;
