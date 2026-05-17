import { ArrowRight, Calendar, CheckCircle, ShieldCheck, Link2, CalendarCheck } from "lucide-react";
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

                {/* Video testimonial under the sidebar */}
                <div className="mt-8 border-t border-border pt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">
                    Hear it from a customer
                  </p>
                  <div className="mx-auto w-full max-w-[240px] aspect-[9/16] rounded-md overflow-hidden bg-black border border-border shadow-lg">
                    <video
                      src="/videos/doug-testimonial.mp4"
                      controls
                      preload="metadata"
                      playsInline
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="mt-2 text-center text-[11px] text-text-muted">
                    Real customer. Posted with permission.
                  </p>
                </div>
              </div>
            </div>

            {/* Reiterated, larger "What happens on the call" section */}
            <div className="mt-16 rounded-xl border border-border bg-surface-elevated p-8 md:p-12 shadow-2xl">
              <div className="text-center max-w-3xl mx-auto">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-accent-blue">
                  Your 15 minute kickoff call
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Here is exactly what happens on the call.
                </h2>
                <p className="mt-4 text-lg text-text-secondary">
                  No pitch, no fluff. We confirm your accounts, walk you through read only
                  access grants live, and lock in the date your scored Ad Scan report hits
                  your inbox.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-border bg-background p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue/15 text-accent-blue">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
                    Step 1
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    Confirm your accounts
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary">
                    We verify your Google Ads, Meta, Google Business Profile, and tracking
                    setup so the scan covers every channel driving calls today.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-background p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue/15 text-accent-blue">
                    <Link2 className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
                    Step 2
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    Grant read only access, live
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary">
                    We screen share and walk you through each access grant. No passwords,
                    no admin handoff, no changes to your accounts. View only.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-background p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue/15 text-accent-blue">
                    <CalendarCheck className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
                    Step 3
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    Lock the delivery date
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary">
                    We set the date your scored Ad Scan report lands in your inbox,
                    typically within 5 business days of the call.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center gap-3">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta inline-flex items-center gap-2"
                >
                  Pick your kickoff time
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/ad-scan/onboarding"
                  className="text-sm font-medium text-accent-blue hover:underline"
                >
                  Skip the call. Grant access myself.
                </Link>
              </div>
            </div>

            {/* Horizontal review screenshots */}
            <div className="mt-12">
              <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-accent-blue">
                Verified Google reviews
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-md overflow-hidden bg-white border border-border shadow-xl">
                  <img
                    src="https://demandstreamdigital.com/assets/pure-plumbing-review-1-jNLNRLF3.png"
                    alt="Pure Plumbing 5-star Google review"
                    className="w-full block"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-md overflow-hidden bg-white border border-border shadow-xl">
                  <img
                    src="https://demandstreamdigital.com/assets/pure-plumbing-review-2-CWW5rTqV.png"
                    alt="Pure Plumbing & Air 5-star Google review"
                    className="w-full block"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-text-muted">
                From Pure Plumbing &amp; Air on Google.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdScanThanks;
