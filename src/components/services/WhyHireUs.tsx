import { Trophy, Brain, Cpu, Settings, UserCheck, Target } from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "With years of experience delivering white label fulfillment, we have a proven record of success. Our team is committed to providing measurable results and helping your agency reach its marketing objectives."
  },
  {
    icon: Brain,
    title: "Experienced Marketing Team",
    description: "Our team brings years of experience and knowledge of the marketing industry. We stay up-to-date on the latest trends and strategies to guarantee the best outcomes for you and your clients."
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description: "We offer our partners the most effective solutions with the use of cutting-edge technology and tools. We make effective use of available resources—SEO platforms, automation, and analytics—to maximize results."
  },
  {
    icon: Settings,
    title: "Customizable & Scalable",
    description: "Every business has unique needs. We provide customized solutions, working closely with you to understand your clients' goals and deliver the specific services necessary to grow and succeed."
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Management",
    description: "We ensure you receive personalized service. We believe in long-term partnerships and dedicate ourselves fully to understanding your objectives and delivering solutions that work."
  },
  {
    icon: Target,
    title: "Commitment to Measurable Results",
    description: "We strive to provide measurable results. Our experienced team is committed to helping you achieve marketing objectives, boost ROI, and generate more revenue for your clients."
  }
];

const WhyHireUs = () => {
  return (
    <section className="py-16 lg:py-20 section-light relative">
      <div className="section-divider absolute top-0" />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              Why Partner With Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Hire Us for White Label Services?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just another vendor—we're an extension of your team with the 
              expertise, tools, and commitment to deliver consistent results.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-cta/50 hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-cta/10 text-cta w-fit mb-4">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;
