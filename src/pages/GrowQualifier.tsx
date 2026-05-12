import SEOHead from "@/components/SEOHead";
import GrowthQualifierFlow from "@/components/forms/GrowthQualifierFlow";

const GrowQualifier = () => {
  return (
    <>
      <SEOHead
        title="Check Your Market | DemandStream Growth Qualifier"
        description="Two minute qualifier for Plumbing and HVAC operators. Check your market availability and fit."
        canonical="https://demandstreamdigital.com/grow-qualifier"
        noIndex
      />
      <GrowthQualifierFlow />
    </>
  );
};

export default GrowQualifier;
