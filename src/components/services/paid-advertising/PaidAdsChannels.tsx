import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const channels = [
  {
    title: "Google Search Ads",
    href: "/google-search-ads/",
    bullets: [
      "High-intent keyword targeting for emergency and install searches",
      "Repair vs install campaign segmentation",
      "Geo-priority bidding by ZIP and service corridor",
      "Negative keyword discipline to eliminate low-margin calls",
      "Device-level optimization for mobile emergency searches"
    ]
  },
  {
    title: "Local Services Ads (LSA)",
    href: "/local-services-ads/",
    bullets: [
      "Pay-per-lead structure with Google Guarantee",
      "Budget pacing aligned to peak demand windows",
      "Review score management to protect lead flow",
      "Service category optimization for high-margin call types",
      "Profile discipline and dispute tracking"
    ]
  },
  {
    title: "Microsoft / Bing Advertising",
    href: "/microsoft-advertising/",
    bullets: [
      "Lower cost-per-click than Google in most markets",
      "Older homeowner demographic with higher install intent",
      "Install-heavy and replacement-focused search behavior",
      "Market expansion beyond Google's auction"
    ]
  },
  {
    title: "Facebook Advertising",
    href: "/facebook-advertising/",
    bullets: [
      "Retargeting homeowners who visited but did not book",
      "Install and replacement promotion campaigns",
      "Financing offer pushes to increase close rate",
      "Maintenance agreement acquisition campaigns"
    ]
  },
  {
    title: "Instagram Advertising",
    href: "/instagram-advertising/",
    bullets: [
      "Visual install and replacement job showcases",
      "Story-based retargeting sequences",
      "Seasonal promotional campaigns before peak demand",
      "Brand reinforcement during high-competition windows"
    ]
  },
  {
    title: "LinkedIn Advertising",
    href: "/linkedin-advertising/",
    bullets: [
      "Commercial HVAC targeting by industry and company size",
      "Property manager and facility director outreach",
      "Multi-location service contract development",
      "Facility management and building operations audiences"
    ]
  }
];

const PaidAdsChannels = () => {
  return (
    <section id="channels" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest uppercase text-cta mb-3">What We Deploy</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paid Advertising Channels We Deploy
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Each channel serves a different part of the demand curve. No channel grouping. Each is scoped, managed, and reported separately.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {channels.map((channel, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{channel.title}</h3>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {channel.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-cta mt-0.5 shrink-0">&#10003;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={channel.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:text-cta/80 transition-colors group mt-auto"
                >
                  Explore {channel.title}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaidAdsChannels;
