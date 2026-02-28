import { forwardRef } from "react";
import ServiceContactForm from "@/components/services/generic/ServiceContactForm";

const PlumbingInstagramContactForm = forwardRef<HTMLElement>((_, ref) => (
  <ServiceContactForm
    ref={ref}
    formType="plumbing_instagram_contact"
    headline="Ready to Build Brand Authority Before Peak Demand Hits?"
    exclusivityLine="One plumbing company per market. Your competitors don't get in."
  />
));

PlumbingInstagramContactForm.displayName = "PlumbingInstagramContactForm";
export default PlumbingInstagramContactForm;
