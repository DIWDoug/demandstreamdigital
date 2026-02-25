import { Link } from "react-router-dom";

const services = [
  { label: "Local SEO", href: "/hvac-and-plumbing-seo" },
  { label: "Google Maps / GBP", href: "/plumbing-google-maps" },
  { label: "Reputation Management", href: "/hvac-and-plumbing-seo" },
  { label: "Paid Advertising", href: "/hvac-and-plumbing-paid-ads" },
  { label: "Email Marketing", href: "/plumbing-email-marketing" },
  { label: "Reporting & Dashboards", href: "/plumbing-reporting" },
];

// 6 orbit nodes evenly spaced
const orbitNodes = [
  { label: "Local SEO", angle: 0 },
  { label: "Google Maps / GBP", angle: 60 },
  { label: "Reputation Management", angle: 120 },
  { label: "Email Marketing", angle: 180 },
  { label: "Reporting & Dashboards", angle: 240 },
  { label: "Web Design", angle: 300 },
];

const PaidAdsBiggerPicture = () => {
  return (
    <section className="py-20 lg:py-28 bg-background scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Bigger Picture</p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Paid Advertising Is Part of a Bigger Growth System
              </h2>

              <p className="font-semibold text-foreground mb-5 leading-relaxed">
                Paid advertising produces the strongest results when it runs inside a connected system. Not as a standalone channel managed in isolation.
              </p>

              <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
                <p>
                  Your paid campaigns perform better when your GBP reviews are strong, your landing pages are built for intent, and your call tracking feeds data back into campaign decisions. Your SEO lowers the blended cost per booked call over time. Your email marketing reactivates past customers before they search and click on a competitor's ad.
                </p>
                <p>
                  When every channel pulls toward the same outcome, more booked service calls at a lower cost, the system compounds. When paid advertising runs alone, it works. When it runs connected, it works harder.
                </p>
              </div>

              {/* Service checklist two-col */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {services.map((svc, i) => (
                  <Link
                    key={i}
                    to={svc.href}
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-blue transition-colors group"
                  >
                    <span className="text-accent-blue">&#10003;</span>
                    <span className="group-hover:underline">{svc.label}</span>
                  </Link>
                ))}
              </div>

              <Link to="/plumbing-hvac-digital-marketing/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-blue/80 transition-colors">
                See How the Full System Works
                <span>&#8594;</span>
              </Link>
            </div>

            {/* Right — hub and spoke diagram */}
            <div className="flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-blue/20" />

                {/* Center node */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-cta text-white rounded-full w-28 h-28 flex flex-col items-center justify-center text-center p-2 shadow-lg z-10">
                    <p className="text-xs font-bold leading-tight">Paid</p>
                    <p className="text-xs font-bold leading-tight">Advertising</p>
                    <p className="text-[9px] text-white/75 mt-1 leading-tight px-1">Demand control across 6 channels</p>
                  </div>
                </div>

                {/* Orbit nodes */}
                {orbitNodes.map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const r = 130;
                  const x = 160 + r * Math.sin(rad);
                  const y = 160 - r * Math.cos(rad);
                  return (
                    <div
                      key={i}
                      className="absolute w-16 h-16 bg-surface-elevated border border-border rounded-full flex items-center justify-center text-center shadow-sm"
                      style={{ left: x - 32, top: y - 32 }}
                    >
                      <p className="text-[9px] font-semibold text-foreground leading-tight px-1">{node.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidAdsBiggerPicture;
