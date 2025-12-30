import ServicePageLayout from "@/components/services/ServicePageLayout";
import { googleMapsConfig } from "@/data/service-pages/google-maps";
import LocalRankingFactors from "@/components/services/local-seo/LocalRankingFactors";

const GoogleMaps = () => {
  return (
    <ServicePageLayout 
      config={googleMapsConfig}
      customSections={{
        afterOutcomes: <LocalRankingFactors />
      }}
    />
  );
};

export default GoogleMaps;
