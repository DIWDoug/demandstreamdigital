const FeaturedIn = () => {
  const logos = [
    "Yahoo! News",
    "Business Insider",
    "MarketWatch",
    "Google News",
    "Digital Journal",
    "Bloomberg",
    "AP",
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-text-muted uppercase tracking-widest mb-10">
          Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <span 
              key={index}
              className="text-text-secondary/50 text-sm md:text-base font-medium tracking-wide hover:text-text-secondary transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
