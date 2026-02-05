import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
  level?: number;
}

interface ListicleTableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

const ListicleTableOfContents = ({ items, className = "" }: ListicleTableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className={`bg-card border border-border rounded-xl p-5 ${className}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left mb-3"
      >
        <h3 className="font-semibold text-foreground">Table of Contents</h3>
        <ChevronRight 
          className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? "rotate-90" : ""}`} 
        />
      </button>
      
      {isExpanded && (
        <nav className="space-y-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left text-sm py-1.5 px-2 rounded transition-colors ${
                activeId === item.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              } ${item.level === 2 ? "pl-4" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
};

export default ListicleTableOfContents;
