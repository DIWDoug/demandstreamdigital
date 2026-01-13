const TrustReel = () => {
  // Reduced to 5 items per audit recommendation
  const trustItems = [
    "White-Label Partner",
    "100s of Campaigns Managed",
    "15+ Years Experience",
    "Built by Marketers",
    "Long-Term Partnerships",
  ];

  return (
    <section className="py-8 bg-card border-y border-border overflow-hidden">
      <div className="relative">
        {/* Single row, slower animation, more spacing */}
        <div className="flex animate-slide-left">
          {/* First set */}
          <div className="flex shrink-0 gap-16 px-8">
            {trustItems.map((item, index) => (
              <span 
                key={index} 
                className="text-sm text-muted-foreground whitespace-nowrap tracking-wide uppercase"
              >
                {item}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 gap-16 px-8">
            {trustItems.map((item, index) => (
              <span 
                key={`dup-${index}`} 
                className="text-sm text-muted-foreground whitespace-nowrap tracking-wide uppercase"
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
