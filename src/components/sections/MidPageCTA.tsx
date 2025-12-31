import { ArrowRight, Phone } from "lucide-react";

interface MidPageCTAProps {
  variant?: "light" | "dark";
}

const MidPageCTA = ({ variant = "dark" }: MidPageCTAProps) => {
  const isLight = variant === "light";
  
  return (
    <section className={`py-10 lg:py-14 ${isLight ? "section-light" : "bg-background"}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA Button */}
          <a 
            href="#contact" 
            className="btn-cta group flex items-center gap-2"
          >
            Let's Talk Partnership
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          {/* OR Divider */}
          <span className={`text-sm font-medium ${isLight ? "text-gray-400" : "text-text-muted"}`}>
            or
          </span>
          
          {/* Secondary CTA - Phone */}
          <a 
            href="tel:2143072995"
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all font-medium text-sm ${
              isLight 
                ? "border-gray-300 text-gray-700 hover:bg-accent-blue hover:border-accent-blue hover:text-white" 
                : "border-border text-text-secondary hover:text-white hover:border-accent-blue hover:bg-accent-blue"
            }`}
          >
            <Phone className="h-4 w-4" />
            (214) 307-2995
          </a>
        </div>
      </div>
    </section>
  );
};

export default MidPageCTA;
