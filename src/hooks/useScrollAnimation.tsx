import { useEffect, useRef } from "react";

export const useScrollReveal = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
};

// Component wrapper for easy usage
interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const RevealSection = ({ children, className = "" }: RevealSectionProps) => {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal-section ${className}`}
    >
      {children}
    </div>
  );
};
