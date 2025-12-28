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
    <section ref={sectionRef} className="py-16 lg:py-20 bg-surface-dark border-y border-border">
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
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
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
