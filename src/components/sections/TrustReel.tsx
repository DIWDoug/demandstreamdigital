const TrustReel = () => {
  const trustItems = [
    "White-Label Partner",
    "100s of Campaigns Managed",
    "15+ Years Experience",
    "Built by Marketers",
    "Long-Term Partnerships",
  ];

  return (
    <section className="py-6 bg-[hsl(220,20%,6%)] border-y border-border/20 overflow-hidden">
      <div className="relative flex items-center justify-center">
        {/* Single row, slower animation (35s), reduced font, increased letter spacing */}
        <div className="flex animate-slide-left-slow">
          {/* First set */}
          <div className="flex shrink-0 gap-20 px-10">
            {trustItems.map((item, index) => (
              <span 
                key={index} 
                className="text-xs text-text-muted/60 whitespace-nowrap tracking-[0.2em] uppercase"
              >
                {item}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 gap-20 px-10">
            {trustItems.map((item, index) => (
              <span 
                key={`dup-${index}`} 
                className="text-xs text-text-muted/60 whitespace-nowrap tracking-[0.2em] uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustReel;