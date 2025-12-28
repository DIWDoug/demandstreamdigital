import { Eye, Award, MousePointerClick, Wrench, BarChart3, RefreshCcw, ArrowRight, Target, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const serviceAreas = [
  { 
    label: "Buyer Persona & Strategy Development", 
    icon: Target, 
    slug: "local-seo",
    output: "Clear target audience profiles that drive campaign focus",
    description: "Documented buyer personas with behavioral insights, purchase triggers, and messaging frameworks your team can use immediately."
  },
  { 
    label: "SEO & Content Strategy", 
    icon: Eye,
    slug: "local-seo",
    output: "Organic traffic growth and improved search rankings",
    description: "Higher keyword positions, increased organic sessions, and content that ranks—measured monthly with transparent reporting."
  },
  { 
    label: "Pay-Per-Click Campaigns", 
    icon: MousePointerClick,
    slug: "paid-media",
    output: "Qualified leads at a predictable cost-per-acquisition",
    description: "More conversions, lower CPA, and optimized ad spend with full transparency on what's working and what's being tested."
  },
  { 
    label: "Social Media Management", 
    icon: Users,
    slug: "paid-media",
    output: "Consistent brand presence and measurable engagement",
    description: "Scheduled content, growing follower counts, increased engagement rates, and social-driven leads tracked to source."
  },
  { 
    label: "Lead Generation & Nurturing", 
    icon: TrendingUp,
    slug: "authority",
    output: "A growing pipeline of qualified, sales-ready prospects",
    description: "More MQLs entering the funnel, higher conversion rates through nurture sequences, and documented lead scores."
  },
  { 
    label: "Email Marketing & Automation", 
    icon: RefreshCcw,
    slug: "email-marketing",
    output: "Automated sequences that convert subscribers to customers",
    description: "Higher open rates, improved click-throughs, and automated workflows that move leads toward purchase without manual effort."
  },
];

const EcosystemDiagram = () => {
  return (
    <section className="py-20 lg:py-28 section-light relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              Outcomes You Can Promise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              White Label Inbound Marketing Services
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Every service delivers measurable outputs your clients can see. 
              Here's what gets delivered—and what your agency can confidently sell.
            </p>
          </div>

          {/* Service Grid - 3 Column with Output Focus */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.label}
                to={`/inbound-marketing-services/${area.slug}`}
                className="group flex flex-col p-6 rounded-xl bg-white border border-gray-200 hover:border-cta/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-cta/10 text-cta w-fit mb-4 group-hover:bg-cta group-hover:text-white transition-colors duration-300">
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2 group-hover:text-cta transition-colors">
                  {area.label}
                </h3>
                <p className="text-cta/90 font-medium text-sm mb-3">
                  → {area.output}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {area.description}
                </p>
                <div className="flex items-center gap-1 mt-4 text-cta text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemDiagram;