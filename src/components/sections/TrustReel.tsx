const TrustReel = () => {
  const items = [
    "White-Label Partner",
    "15+ Years Experience",
    "100s of Campaigns",
    "Long-Term Partnerships"
  ];

  return (
    <section className="py-5 bg-[hsl(220,20%,6%)] border-y border-border/20 overflow-hidden">
      <div className="flex animate-slide-left-slow">
        {[...items, ...items].map((item, index) => (
          <span 
            key={index} 
            className="text-xs text-text-muted/50 whitespace-nowrap tracking-[0.2em] uppercase px-12"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustReel;