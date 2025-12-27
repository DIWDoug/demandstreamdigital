import { ArrowRight, Phone } from "lucide-react";

interface MidPageCTAProps {
  variant?: "light" | "dark";
}

const MidPageCTA = ({ variant = "dark" }: MidPageCTAProps) => {
  const isLight = variant === "light";
  
  return (
    <section className={`py-12 lg:py-16 ${isLight ? "section-light" : "bg-surface-dark"}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
          {/* Primary CTA Button */}
          <a 
            href="#contact" 
            className="btn-cta group flex items-center gap-2"
          >
            Schedule Strategy Session
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          {/* OR Divider */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground text-background font-bold text-sm mx-4">
            OR
          </div>
          
          {/* Secondary CTA - Phone */}
          <a 
            href="tel:2143072995"
            className={`flex items-center gap-3 px-8 py-4 rounded-lg border-2 transition-colors font-semibold ${
              isLight 
                ? "border-gray-800 text-gray-900 hover:bg-gray-100" 
                : "border-foreground text-foreground hover:bg-surface-elevated"
            }`}
          >
            <Phone className="h-5 w-5" />
            Call Us (214) 307-2995
          </a>
        </div>
      </div>
    </section>
  );
};

export default MidPageCTA;
