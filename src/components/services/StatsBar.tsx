import { Users, TrendingUp, Award } from "lucide-react";

const StatsBar = () => {
  const stats = [
    { value: "90%", label: "Client Retention Rate", icon: TrendingUp },
    { value: "100+", label: "Agency Partners", icon: Users },
    { value: "500K+", label: "Leads Generated", icon: Award },
  ];

  return (
    <section className="py-12 bg-surface-elevated border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <stat.icon className="h-5 w-5 text-cta" />
                <span className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</span>
              </div>
              <p className="text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
