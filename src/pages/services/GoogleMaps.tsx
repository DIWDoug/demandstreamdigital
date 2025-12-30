import ServicePageLayout from "@/components/services/ServicePageLayout";
import { googleMapsConfig } from "@/data/service-pages/google-maps";

const GoogleMaps = () => {
  return <ServicePageLayout config={googleMapsConfig} />;
};

export default GoogleMaps;
