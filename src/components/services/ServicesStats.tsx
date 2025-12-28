import { Search, MapPin, Star, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Search,
    value: "46%",
    label: "of Google searches have local intent",
    source: "GOOGLE"
  },
  {
    icon: MapPin,
    value: "78%",
    label: "of local mobile searches result in offline purchases",
    source: "THINK WITH GOOGLE"
  },
  {
    icon: Star,
    value: "87%",
    label: "of consumers read online reviews for local businesses",
    source: "BRIGHTLOCAL 2023"
  },
  {
    icon: TrendingUp,
    value: "28%",
    label: "of local searches result in a purchase within 24 hours",
    source: "GOOGLE"
  }
];

const ServicesStats = () => {
  return (
    <section className="py-12 lg:py-16 bg-surface-dark border-t border-b border-border/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-surface-elevated border border-border/30 mb-4">
                <stat.icon className="h-4 w-4 text-accent-blue" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-text-secondary text-sm leading-snug mb-2">
                {stat.label}
              </p>
              <p className="text-text-muted text-xs uppercase tracking-wider">
                {stat.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesStats;
