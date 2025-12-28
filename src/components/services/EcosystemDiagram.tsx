import { Eye, Award, MousePointerClick, Wrench, BarChart3, RefreshCcw, ArrowRight, Target, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const serviceAreas = [
  { 
    label: "Buyer Persona & Strategy Development", 
    icon: Target, 
    slug: "local-seo",
    description: "We develop accurate buyer personas that give insight into the requirements and behavioral patterns of your clients' target audience. This helps focus on the right audiences, engage them effectively, and convert them into customers."
  },
  { 
    label: "SEO & Content Strategy", 
    icon: Eye,
    slug: "local-seo",
    description: "Great SEO and content strategy is crafted according to the end goal of a campaign. Different goals require different strategies based on the buying stage of the audience—to attract, convert, or nurture."
  },
  { 
    label: "Pay-Per-Click Campaigns", 
    icon: MousePointerClick,
    slug: "paid-media",
    description: "Pay-per-click campaigns allow us to target your clients' audience directly. We continuously monitor and optimize PPC campaigns, increasing the efficiency and ROI of every dollar spent."
  },
  { 
    label: "Social Media Management", 
    icon: Users,
    slug: "paid-media",
    description: "Social media is a great way to engage with your clients' audience. We boost engagement by planning, customizing and publishing content as well as ads to generate leads and conversions effectively."
  },
  { 
    label: "Lead Generation & Nurturing", 
    icon: TrendingUp,
    slug: "authority",
    description: "Case studies, white papers, and downloadable resources are powerful lead-generation tools. We create exclusive, engaging content that draws audiences to provide their contact details and enter your funnel."
  },
  { 
    label: "Email Marketing & Automation", 
    icon: RefreshCcw,
    slug: "email-marketing",
    description: "Personalizing emails for your clients, adding a human touch and tailoring messages to lead prospects through the marketing funnel—from awareness to consideration to decision."
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
              Our Dynamic Range Of Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              White Label Inbound Marketing Services
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We offer a dynamic range of white label inbound marketing services for agencies 
              to take the hassle out of inbound marketing campaigns for your clients while 
              helping them fulfill their goals.
            </p>
          </div>

          {/* Service Grid - 3 Column with Rich Descriptions */}
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
                <h3 className="text-gray-900 font-semibold text-lg mb-3 group-hover:text-cta transition-colors">
                  {area.label}
                </h3>
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