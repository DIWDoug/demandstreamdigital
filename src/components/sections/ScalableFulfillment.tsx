import { Zap, Users, TrendingUp, Shield } from "lucide-react";

const ScalableFulfillment = () => {
  const features = [
    {
      icon: Zap,
      title: "Expand Services, Not Payroll",
      description: "Scale into new local markets without hiring, training, or managing additional staff."
    },
    {
      icon: Users,
      title: "Your Brand, Our Execution",
      description: "We operate behind the scenes. You maintain the relationship and the margin."
    },
    {
      icon: TrendingUp,
      title: "Predictable Delivery",
      description: "Structured workflows and consistent cycles so you can grow without chaos."
    },
    {
      icon: Shield,
      title: "Full Control Preserved",
      description: "Strategy, pricing, and client communication remain entirely yours."
    }
  ];

  return (
    <section className="py-24 lg:py-32 section-light relative">
      {/* Section divider top */}
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-6">
            <span className="text-[hsl(76,42%,35%)]">Scalable</span> White-Label Local Fulfillment
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Dialed-In Web removes the burden of execution while preserving your control over every aspect of your agency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rounded-xl p-6 bg-[#FCFCFA] shadow-sm border border-gray-200/50 group transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[hsl(76,42%,41%)]/10 border border-[hsl(76,42%,41%)]/20">
                  <feature.icon className="h-6 w-6 text-[hsl(76,42%,35%)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section divider bottom */}
      <div className="section-divider absolute bottom-0" />
    </section>
  );
};

export default ScalableFulfillment;
