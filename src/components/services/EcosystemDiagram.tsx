import { Eye, Award, MousePointerClick, Wrench, BarChart3, RefreshCcw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const serviceAreas = [
  { 
    label: "Local SEO", 
    icon: Eye, 
    slug: "local-seo",
    outcome: "Organic visibility in local search"
  },
  { 
    label: "Google Maps", 
    icon: Award,
    slug: "google-maps",
    outcome: "Dominate the local 3-pack"
  },
  { 
    label: "Paid Media", 
    icon: MousePointerClick,
    slug: "paid-media",
    outcome: "Capture demand with intent-driven spend"
  },
  { 
    label: "Conversion Infrastructure", 
    icon: Wrench,
    slug: "paid-media",
    outcome: "Turn traffic into leads"
  },
  { 
    label: "Reporting & Measurement", 
    icon: BarChart3,
    slug: "reporting",
    outcome: "Clarity without vanity metrics"
  },
  { 
    label: "Email & Retention", 
    icon: RefreshCcw,
    slug: "email-marketing",
    outcome: "Maximize lifetime value"
  },
];

const EcosystemDiagram = () => {
  return (
    <section className="py-16 lg:py-20 section-light relative">
      <div className="section-divider absolute top-0" />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              What You Can Plug Into
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Six Execution Areas,{" "}
              <span className="text-cta">One Coordinated System</span>
            </h2>
            <div className="w-16 h-1 bg-cta rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Each service can be activated individually or as part of a complete engagement. 
              Scope determines priority—not bundled packages.
            </p>
          </div>

          {/* Static Service Grid - Clean, No Interactivity */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.label}
                to={`/inbound-marketing-services/${area.slug}`}
                className="group flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:border-cta/50 hover:shadow-md transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-cta/10 text-cta flex-shrink-0 group-hover:bg-cta group-hover:text-white transition-colors duration-300">
                  <area.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-900 font-semibold mb-1 group-hover:text-cta transition-colors">
                    {area.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.outcome}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-cta transition-colors mt-1 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemDiagram;