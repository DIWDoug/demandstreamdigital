import { Search, MapPin, Star, TrendingUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  {
    icon: Search,
    value: 46,
    suffix: "%",
    label: "of Google searches have local intent",
    source: "Search Engine Roundtable"
  },
  {
    icon: MapPin,
    value: 42,
    suffix: "%",
    label: "of local searchers click Map Pack results",
    source: "Backlinko 2024"
  },
  {
    icon: Star,
    value: 83,
    suffix: "%",
    label: "of consumers use Google for local reviews",
    source: "BrightLocal 2025"
  },
  {
    icon: TrendingUp,
    value: 80,
    suffix: "%",
    label: "of US consumers search locally weekly",
    source: "SOCi 2024"
  }
];

const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isVisible, value]);
  
  return <>{count}{suffix}</>;
};

const LocalSEOStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-surface-dark/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-xl bg-surface-elevated/50 border border-border/50 text-center group hover:border-cta/30 transition-all duration-300"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-cta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cta/10 mb-3">
                  <stat.icon className="w-5 h-5 text-cta" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </div>
                <p className="text-text-secondary text-sm leading-snug mb-2">
                  {stat.label}
                </p>
                <p className="text-text-muted text-[10px] uppercase tracking-wider">
                  {stat.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalSEOStats;
