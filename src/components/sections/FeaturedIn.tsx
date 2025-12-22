import bloombergLogo from "@/assets/logos/bloomberg.png";
import benzingaLogo from "@/assets/logos/benzinga.png";
import digitalJournalLogo from "@/assets/logos/digital-journal.png";
import googleNewsLogo from "@/assets/logos/google-news.png";
import marketwatchLogo from "@/assets/logos/marketwatch.png";
import businessInsiderLogo from "@/assets/logos/business-insider.png";
import yahooNewsLogo from "@/assets/logos/yahoo-news.png";
import dailyTechGeekLogo from "@/assets/logos/daily-tech-geek.png";
import apNewsLogo from "@/assets/logos/ap-news.png";

const FeaturedIn = () => {
  const logos = [
    { name: "Yahoo News", src: yahooNewsLogo },
    { name: "Business Insider", src: businessInsiderLogo },
    { name: "MarketWatch", src: marketwatchLogo },
    { name: "Google News", src: googleNewsLogo },
    { name: "Digital Journal", src: digitalJournalLogo },
    { name: "Benzinga", src: benzingaLogo },
    { name: "Bloomberg", src: bloombergLogo },
    { name: "AP News", src: apNewsLogo },
    { name: "Daily Tech Geek", src: dailyTechGeekLogo },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-8">
          Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              className="h-6 md:h-8 w-auto object-contain grayscale invert opacity-60 hover:opacity-80 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
