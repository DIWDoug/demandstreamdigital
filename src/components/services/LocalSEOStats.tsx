import { Search, MapPin, Star, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Search,
    value: "46%",
    label: "of Google searches have local intent",
    source: "Search Engine Roundtable"
  },
  {
    icon: MapPin,
    value: "42%",
    label: "of local searchers click Map Pack results",
    source: "Backlinko 2024"
  },
  {
    icon: Star,
    value: "83%",
    label: "of consumers use Google for local reviews",
    source: "BrightLocal 2025"
  },
  {
    icon: TrendingUp,
    value: "80%",
    label: "of US consumers search locally weekly",
    source: "SOCi 2024"
  }
];

const LocalSEOStats = () => {
  return (
    <section className="py-16 lg:py-20 bg-surface-dark border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cta/10 border border-cta/20 mb-4 group-hover:bg-cta/20 transition-colors">
                <stat.icon className="w-6 h-6 text-cta" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <p className="text-text-secondary text-sm md:text-base mb-1">
                {stat.label}
              </p>
              <p className="text-text-muted text-xs">
                Source: {stat.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalSEOStats;
