import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import GrowthQualifierFlow from "@/components/forms/GrowthQualifierFlow";

const GrowQualifier = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title="Grow Qualifier | DemandStream"
        description="Check your market availability and fit for Plumbing and HVAC growth services."
        canonical="https://demandstreamdigital.com/grow-qualifier"
        noIndex
      />
      <Header />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-blue">Growth Qualifier</p>
              <h1 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">Check your market and fit.</h1>
              <p className="mt-4 text-lg text-text-secondary">
                Plumbing and HVAC only. If your market is available and the fit is right, we move you to the next step.
              </p>
            </div>
            <GrowthQualifierFlow />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GrowQualifier;