import { Zap, Users, Sliders, Shield } from "lucide-react";

import digitalJournalLogo from "@/assets/logos/digital-journal.png";
import googleNewsLogo from "@/assets/logos/google-news.png";
import marketwatchLogo from "@/assets/logos/marketwatch.png";
import businessInsiderLogo from "@/assets/logos/business-insider.png";
import yahooNewsLogo from "@/assets/logos/yahoo-news.png";
import apNewsLogo from "@/assets/logos/ap-news.png";

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
      icon: Sliders,
      title: "Customized Pricing, Not Cookie-Cutter",
      description: "Tailored solutions built around your clients' unique needs—no generic packages."
    },
    {
      icon: Shield,
      title: "Full Control Preserved",
      description: "Strategy, pricing, and client communication remain entirely yours."
    }
  ];

  const logos = [
    { name: "Yahoo News", src: yahooNewsLogo },
    { name: "Business Insider", src: businessInsiderLogo },
    { name: "MarketWatch", src: marketwatchLogo },
    { name: "Google News", src: googleNewsLogo },
    { name: "Digital Journal", src: digitalJournalLogo },
    { name: "AP News", src: apNewsLogo },
  ];

  return (
    <section className="py-24 lg:py-32 section-light relative">
      {/* Section divider top */}
      <div className="section-divider absolute top-0" />
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Featured In Logos */}
        <div className="max-w-5xl mx-auto mb-16">
          <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-8">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain brightness-0 opacity-40 hover:opacity-70 transition-all duration-300"
              />
            ))}
          </div>
        </div>

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
              className="rounded-xl p-6 bg-gradient-to-br from-white to-[#F0F0ED] border border-gray-300/50 group transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: 'inset 0 3px 6px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06), 0 8px 20px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08)' }}
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
