const problems = [
  {
    title: "Template sites look identical to your competitors",
    body: "When a homeowner compares three plumbing companies in their area, a template site signals commodity. A custom build signals investment and permanence."
  },
  {
    title: "Page speed kills conversion on mobile",
    body: "Most emergency searches happen on mobile. A slow site — even by two seconds — loses the call to the next result. We build for Core Web Vitals from day one."
  },
  {
    title: "Generic websites don't rank for local service intent",
    body: "Ranking in your service area requires location-specific architecture. That means separate pages for each city, service, and service-area combination — not one page trying to rank for everything."
  },
  {
    title: "No integration between website and dispatch",
    body: "A website that doesn't connect to call tracking, booking software, or your CRM is a dead end. We build the integrations in, not on top."
  },
];

const WebDesignProblem = () => {
  return (
    <section id="why-it-matters" className="py-20 lg:py-28 bg-background scroll-mt-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">The Problem</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Most Contractor Websites Are Built to Look Good. Not to Book Calls.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Template builders, offshore agencies, and generalist web designers produce sites that pass visual inspection. They don't produce dispatch board results. The difference is intentional architecture — every page, every element, every load time decision made around a single outcome.
              </p>
              <div className="p-5 rounded-xl bg-accent-blue/8 border border-accent-blue/25">
                <p className="text-lg md:text-xl text-accent-blue font-semibold leading-relaxed">
                  "A website is not a marketing asset. It's the foundation every other channel runs on. If it's broken, everything downstream costs more."
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              {problems.map((item, i) => (
                <div key={i} className="bg-card border border-border/60 rounded-xl p-5">
                  <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignProblem;
