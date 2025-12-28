import { Target, MapPin, Star, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  {
    icon: Target,
    value: 1,
    suffix: "#",
    prefix: true,
    label: "GBP Category is top local pack ranking factor",
    source: "Whitespark 2026"
  },
  {
    icon: MapPin,
    value: 47,
    suffix: "",
    label: "expert contributors analyzed 187 ranking factors",
    source: "Whitespark 2026"
  },
  {
    icon: Star,
    value: 5,
    suffix: "★",
    label: "star ratings are #1 conversion driver",
    source: "Whitespark 2026"
  },
  {
    icon: Sparkles,
    value: 3,
    suffix: "",
    prefix: true,
    label: "new AI visibility factors added for 2026",
    source: "Whitespark 2026"
  }
];

const AnimatedCounter = ({ value, suffix, prefix, isVisible }: { value: number; suffix: string; prefix?: boolean; isVisible: boolean }) => {
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
  
  return <>{prefix ? suffix : ''}{count}{!prefix ? suffix : ''}</>;
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
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} isVisible={isVisible} />
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
