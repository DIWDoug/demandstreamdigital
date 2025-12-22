const FeaturedIn = () => {
  const logos = [
    { name: "Yahoo News", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Yahoo_News_Logo_2019.svg/320px-Yahoo_News_Logo_2019.svg.png" },
    { name: "Business Insider", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Business_Insider_Logo.svg/320px-Business_Insider_Logo.svg.png" },
    { name: "MarketWatch", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/MarketWatch_logo.svg/320px-MarketWatch_logo.svg.png" },
    { name: "Google News", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Google_News_2020.svg/200px-Google_News_2020.svg.png" },
    { name: "Digital Journal", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Digital_Journal_Logo.svg/320px-Digital_Journal_Logo.svg.png" },
    { name: "Bloomberg", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/New_Bloomberg_Logo.svg/320px-New_Bloomberg_Logo.svg.png" },
    { name: "AP", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Associated_Press_logo_2012.svg/200px-Associated_Press_logo_2012.svg.png" },
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
              className="h-5 md:h-6 w-auto object-contain grayscale opacity-50 hover:opacity-70 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
