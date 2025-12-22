import bloombergLogo from "@/assets/logos/bloomberg.png";

import digitalJournalLogo from "@/assets/logos/digital-journal.png";
import googleNewsLogo from "@/assets/logos/google-news.png";
import marketwatchLogo from "@/assets/logos/marketwatch.png";
import businessInsiderLogo from "@/assets/logos/business-insider.png";
import yahooNewsLogo from "@/assets/logos/yahoo-news.png";
import apNewsLogo from "@/assets/logos/ap-news.png";

const FeaturedIn = () => {
  const logos = [
    { name: "Yahoo News", src: yahooNewsLogo },
    { name: "Business Insider", src: businessInsiderLogo },
    { name: "MarketWatch", src: marketwatchLogo },
    { name: "Google News", src: googleNewsLogo },
    { name: "Digital Journal", src: digitalJournalLogo },
    { name: "Bloomberg", src: bloombergLogo },
    { name: "AP News", src: apNewsLogo },
  ];

  return (
    <section className="py-10 bg-surface-dark border-b border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs text-text-muted uppercase tracking-widest mb-6">
          Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={`${logo.name} logo - Dialed-In Web featured in ${logo.name}`}
              className="h-6 md:h-8 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-80 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
