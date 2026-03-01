import SEOHead from "@/components/SEOHead";

const RegionBlocked = () => {
  return (
    <>
      <SEOHead
        title="Region Access Restricted | DemandStream Digital"
        description="This page is restricted in your region. DemandStream Digital serves marketing agencies in North America, Europe, Australia, Africa, and South America."
        canonical="https://demandstreamdigital.com/region-blocked"
        noIndex={true}
      />
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-accent-blue/10 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-accent-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Not Available in Your Region
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">
              We're sorry, but our services are not currently available in your region or 
              we've detected you may be using a VPN or proxy service. We focus exclusively 
              on serving marketing agencies in North America, Europe, Australia, Africa, 
              and South America.
            </p>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-sm text-text-muted">
              If you believe you're seeing this message in error, please contact us at{" "}
              <a 
                href="mailto:hello@dialedinweb.com" 
                className="text-accent-blue hover:underline"
              >
                hello@dialedinweb.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegionBlocked;
