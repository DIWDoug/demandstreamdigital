import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Target, Map, CalendarCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { SmsConsentText } from "@/components/legal/SmsConsentText";
import {
  consumeGrowLeadVerified,
  isBookingSuccessfulMessage,
  pushGrowDataLayer,
  safeTrackCustom,
  safeTrackLead,
} from "@/lib/growFunnel";

const bookingUrl = "https://api.leadconnectorhq.com/widget/booking/PE7f9lpA0Qyu8GCa9UA0";

const GrowThanks = () => {
  const [leadReady, setLeadReady] = useState(false);

  useEffect(() => {
    const verified = consumeGrowLeadVerified();
    if (verified && !window.__dsdGrowLeadFired) {
      safeTrackLead(verified.formType);
      pushGrowDataLayer("lead_submitted", { form_type: verified.formType });
      window.__dsdGrowLeadFired = true;
      setLeadReady(true);
    }
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!isBookingSuccessfulMessage(event.data)) return;

      safeTrackCustom("GrowStrategyCallBooked", { funnel: "grow" });
      pushGrowDataLayer("grow_strategy_call_booked", { funnel: "grow" });
      window.location.assign("/grow/booked");
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEOHead
        title="Book Your Strategy Call | Demand Stream"
        description="Your spot is reserved. Pick a time for your Grow strategy call with Demand Stream."
        canonical="https://demandstreamdigital.com/grow/thanks"
        noIndex
      />
      <Header />
      <div className="pt-32 pb-24">
        <section className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent-green/15 text-accent-green">
                <CheckCircle className="h-8 w-8" />
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-accent-blue">
                You qualified
              </p>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                Your spot is reserved. Pick a strategy call time.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
                On this 20 minute call we review your service area, current lead volume,
                and confirm whether your market is still open for a Grow engagement.
              </p>
              {!leadReady ? (
                <p className="mx-auto mt-3 max-w-2xl text-sm text-text-muted">
                  Lead verification is tied to a real submit, so direct visits here will not count as a lead.
                </p>
              ) : null}
            </div>

            <div className="overflow-hidden rounded-lg border border-border bg-surface-elevated shadow-2xl">
              <iframe
                title="Book your Grow strategy call"
                src={bookingUrl}
                className="h-[820px] w-full bg-background"
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex flex-col items-center gap-2 text-center">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent-blue hover:underline"
              >
                Calendar not loading? Open it in a new tab.
              </a>
              <p className="text-sm text-text-secondary">
                Scroll down to see exactly what we cover on the call.
              </p>
              <ArrowRight className="h-4 w-4 rotate-90 text-accent-blue" />
            </div>

            {/* Reiterated, larger "What happens on the call" section */}
            <div className="mt-16 rounded-xl border border-border bg-surface-elevated p-8 md:p-12 shadow-2xl">
              <div className="text-center max-w-3xl mx-auto">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-accent-blue">
                  20 minutes. 3 outcomes.
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  You hang up knowing if your market is open and what growth looks like.
                </h2>
                <p className="mt-4 text-lg text-text-secondary">
                  Three working outcomes inside one call. No pitch deck, no fluff,
                  just a scoped plan tailored to your service area.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-border bg-background p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue/15 text-accent-blue">
                    <Target className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
                    Minutes 0 to 7
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    Confirm your service area and lead reality
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary">
                    Outcome: we lock in the cities you serve, current monthly lead
                    volume, and the booked call rate we need to move.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-background p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue/15 text-accent-blue">
                    <Map className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
                    Minutes 7 to 15
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    Verify market availability in your zip codes
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary">
                    Outcome: we confirm on screen whether your primary service area is
                    still open. We only run one Plumbing or HVAC partner per market.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-background p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue/15 text-accent-blue">
                    <CalendarCheck className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">
                    Minutes 15 to 20
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    Walk away with scoped next steps
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary">
                    Outcome: a clear recommendation, an investment range, and either a
                    proposal date or a friendly "not a fit right now."
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
                  Pick your strategy call time
                  <ArrowRight className="h-4 w-4" />
                </a>
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

            <SmsConsentText
              className="mt-12 text-center text-xs leading-relaxed text-text-muted"
              linkClassName="underline font-medium text-text-secondary hover:text-foreground"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default GrowThanks;
