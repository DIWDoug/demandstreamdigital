import { Users, Shield, Clock, Settings } from "lucide-react";

const ScalableFulfillment = () => {
  const points = [
    {
      icon: Users,
      title: "Expand Without Hiring",
      description: "Add services to your roster without building internal teams."
    },
    {
      icon: Shield,
      title: "Your Brand, Our Work",
      description: "Every deliverable is white-labeled. Clients never know we exist."
    },
    {
      icon: Clock,
      title: "Predictable Timelines",
      description: "Clear SLAs and consistent delivery you can plan around."
    },
    {
      icon: Settings,
      title: "Full Control",
      description: "You own the client relationship. We handle execution."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-foreground">
              Why Agencies Partner With Us
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Scale your services without scaling your headcount.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {points.map((point, index) => (
              <div 
                key={index}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                    <point.icon className="h-5 w-5 text-accent-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalableFulfillment;