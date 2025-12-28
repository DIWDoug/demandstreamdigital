import { Users, Wrench, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Team of Marketing Experts",
    description: "When you partner with us, you have access to our expertise without the need to build an in-house team. We have years of experience in the industry and are equipped with the necessary knowledge and skills to help you achieve your marketing goals."
  },
  {
    icon: Wrench,
    title: "Access to the Latest Tools and Technologies",
    description: "Our team has access to the latest marketing tools and technologies, enabling us to provide top-notch marketing solutions. From SEO platforms to automation software, we invest in what delivers results."
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions for Any Size",
    description: "We provide solutions that can be adapted to the changing needs of your clients, providing them with the flexibility they need to grow and succeed—from single locations to multi-market enterprises."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-20 bg-background relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">
              The Partnership Advantage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose a White Label Partner?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Partnering with a white label agency gives you access to expertise, 
              technology, and scalability without the overhead.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-surface-elevated border border-border/50 hover:border-cta/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-cta/10 text-cta w-fit mb-4">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-3">
                  {reason.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
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

export default WhyChooseUs;
