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
    { name: "AP News", src: apNewsLogo },
  ];

  return (
    <section className="py-16 lg:py-20 section-light">
      <div className="container mx-auto px-6">
        <p className="text-center text-lg md:text-xl text-gray-800 font-medium mb-10 max-w-3xl mx-auto">
          Agencies across North America trust Dialed-In Web to scale their local SEO fulfillment.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              className="h-6 md:h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
