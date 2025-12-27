import { Settings, Zap, MessageCircle, TrendingUp, Eye, Award, DollarSign, Clock, Star } from "lucide-react";

const TopReasons = () => {
  const reasons = [
    {
      icon: Settings,
      title: "Control",
      description: "You set the tone of your brand. Choose the look, feel, and how you market it. It's your business—we just make it run smoother."
    },
    {
      icon: Zap,
      title: "Flexibility",
      description: "Take on more clients while maintaining your standard of service. We give you your time back so you can focus on closing more deals."
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Access a team of professional marketers directly. No call centers, no getting lost in the shuffle—just clear, responsive communication."
    },
    {
      icon: TrendingUp,
      title: "Unlimited Growth",
      description: "There are no limits on how far you can take your business. Scale without the ceiling that comes from doing everything in-house."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Full visibility into everything regarding your clients and their campaigns. Check in anytime—we keep you informed so you can focus on growing."
    },
    {
      icon: Award,
      title: "Reputation",
      description: "Your company receives top-tier service backed by years of industry experience. We make you look good to your clients."
    },
    {
      icon: DollarSign,
      title: "Cost-Efficiency",
      description: "Take advantage of our streamlined processes and experience to save money while receiving quality service that protects your margins."
    },
    {
      icon: Clock,
      title: "Speed",
      description: "Receive customized service at a faster pace than working with freelancers. Our dedicated teams deliver consistently without delays."
    },
    {
      icon: Star,
      title: "High-Quality Service",
      description: "We take the time and effort to deliver great work. We go above and beyond to make your clients thrive—all growth services in one place."
    }
  ];

  return (
    <section className="py-24 lg:py-32 section-light relative">
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm text-[hsl(76,42%,35%)] uppercase tracking-widest mb-6 font-medium">
            The Partnership Advantage
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Top Reasons Agencies Partner With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            When you partner with us, you customize and grow your brand as you see fit while ensuring your clients receive top-level services.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="p-6 rounded-xl bg-gradient-to-br from-white to-[#F5F5F2] border border-gray-200/60 group transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.9), 0 4px 12px rgba(0,0,0,0.06)' }}
            >
              <div className="p-3 rounded-lg bg-[hsl(76,42%,41%)]/10 border border-[hsl(76,42%,41%)]/20 w-fit mb-4">
                <reason.icon className="h-6 w-6 text-[hsl(76,42%,35%)]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0" />
    </section>
  );
};

export default TopReasons;