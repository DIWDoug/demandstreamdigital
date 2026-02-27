import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const goodFit = [
  "You run an HVAC company with an active dispatch board and real service capacity, ideally 2 or more trucks",
  "You track booking rate or are willing to install call tracking before campaigns launch",
  "You use ServiceTitan or a comparable CRM with booking rate visibility",
  "You want to report on cost per booked call, not impressions or click-through rate",
  "You understand HVAC search advertising compounds over a 90-day build period",
  "You have a verified, address-visible Google Business Profile with active reviews",
];

const notFit = [
  "You have no call tracking and are not willing to install it before spend begins",
  "Your booking rate is unknown and you have no process to measure it",
  "You are not willing to participate in review acquisition",
  "You expect guaranteed ranking positions or guaranteed call volumes",
  "You are looking for the lowest cost per lead available",
  "You are not willing to commit to a minimum 6-month engagement after setup",
];

const HVACSearchAdsFitExclusivity = () => {
  return (
    <>
      {/* Fit section */}
      <section id="fit" className="py-20 lg:py-28 bg-surface-dark scroll-mt-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Selective Fit</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance leading-tight">
              Is HVAC Search Advertising Right for Your Company?
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl">
              We work best with HVAC companies that have the capacity and tracking foundation to convert the calls we send them.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-surface-elevated border border-border/50 rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-5">This Could Work Well</p>
                <ul className="space-y-3">
                  {goodFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="text-accent-blue mt-0.5 shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface-elevated border border-border/50 rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-cta mb-5">Probably Not a Fit</p>
                <ul className="space-y-3">
                  {notFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="text-cta mt-0.5 shrink-0">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cta hover:bg-cta/90 text-white font-semibold rounded-lg transition-colors"
              >
                Claim Your Territory Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusivity */}
      <section
        className="bg-gradient-to-br from-surface-dark via-background to-surface-dark"
        style={{ borderTop: '1px solid rgba(220,38,38,0.6)', borderBottom: '1px solid rgba(220,38,38,0.6)', padding: '80px 0' }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-semibold uppercase mb-4" style={{ color: '#DC2626', fontSize: '11px', letterSpacing: '0.15em', fontWeight: 600 }}>EXCLUSIVE MODEL</p>
            <h2 className="font-bold text-foreground mb-6" style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.15 }}>
              One HVAC Company. Per Market.
            </h2>
            <p className="text-text-secondary mb-8" style={{ fontSize: '17px', lineHeight: 1.7 }}>
              We partner with one HVAC company per service area for HVAC search advertising. When you work with DemandStream, your competitors do not. The strategy we build is designed to put you ahead. Not split between you and the shop down the street. If your market is available, it is worth finding out now.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors hover:opacity-90"
              style={{ background: '#DC2626', minWidth: '220px', justifyContent: 'center' }}
            >
              Claim Your Territory Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HVACSearchAdsFitExclusivity;
