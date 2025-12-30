import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { hubs } from "@/data/services";

interface OtherServicesProps {
  currentHubSlug: string;
}

const OtherServices = ({ currentHubSlug }: OtherServicesProps) => {
  const otherHubs = hubs.filter((hub) => hub.slug !== currentHubSlug);

  return (
    <section className="py-16 lg:py-20 section-light relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cta mb-3">
            Explore More
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Other White-Label Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {otherHubs.map((hub) => {
            const Icon = hub.icon;
            return (
              <Link
                key={hub.slug}
                to={`/white-label-inbound-marketing-services/${hub.slug}`}
                className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-cta/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-cta transition-colors mb-1 flex items-center gap-2">
                      {hub.title}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {hub.summary}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
