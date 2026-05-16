import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const bookingUrl = "https://api.leadconnectorhq.com/widget/booking/PE7f9lpA0Qyu8GCa9UA0";

const AdScanThanks = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title="Book Your Ad Scan Kickoff Call | Demand Stream"
        description="Your $97 Local Lead Ad Scan is confirmed. Pick a time to kick off your scan."
        canonical="https://demandstreamdigital.com/ad-scan/thanks"
        noIndex
      />
      <Header />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-green/15 text-accent-green">
                <CheckCircle className="h-8 w-8" />
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-accent-blue">
                Payment confirmed
              </p>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                Your Ad Scan is locked in. Pick a kickoff time.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
                On this 15 minute call we confirm your accounts, walk you through the
                access grants, and set the report delivery date.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="overflow-hidden rounded-lg border border-border bg-surface-elevated shadow-2xl">
                <iframe
                  title="Book your Ad Scan kickoff call"
                  src={bookingUrl}
                  className="h-[720px] w-full bg-background"
                  loading="lazy"
                />
              </div>

              <div className="rounded-lg border border-border bg-surface-elevated p-6">
                <div className="mb-6 flex items-center gap-3 text-accent-blue">
                  <Calendar className="h-5 w-5" />
                  <p className="font-semibold">What happens on the call</p>
                </div>
                <div className="space-y-4 text-sm text-text-secondary">
                  <p>1. We confirm your Google Ads, Meta, GBP, and tracking accounts.</p>
                  <p>2. We walk you through each read only access grant, live.</p>
                  <p>3. We set the date your scored Ad Scan report hits your inbox.</p>
                  <p className="text-text-muted">
                    Want to start now? You can grant access on your own at the
                    onboarding page below.
                  </p>
                </div>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta mt-8 inline-flex items-center gap-2"
                >
                  Open calendar in new tab
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-4 text-xs text-text-muted">
                  If the calendar will not load, use the button above to schedule.
                </p>
                <Link
                  to="/ad-scan/onboarding"
                  className="mt-6 inline-flex text-sm font-medium text-accent-blue hover:underline"
                >
                  Skip the call. Grant access myself.
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdScanThanks;
