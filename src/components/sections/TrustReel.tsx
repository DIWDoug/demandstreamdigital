const TrustReel = () => {
  const trustItems = [
    "Plumbing & HVAC Marketing Specialists",
    "SEO & Google Maps Experts",
    "Paid Search & Local Services Ads",
    "Reputation & Review Growth",
    "Email & Retention Marketing",
    "High-Converting Website Design",
    "Franchise & Multi-Location Ready",
  ];

  return (
    <section className="py-8 bg-card border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-slide-left">
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
