import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import StreamTexture from "@/components/StreamTexture";

interface MidPageCTAProps {
  variant?: "light" | "dark";
}

const MidPageCTA = ({ variant = "dark" }: MidPageCTAProps) => {
  const isLight = variant === "light";
  
  return (
    <section className={`py-10 lg:py-14 ${isLight ? "section-light" : "bg-background"} relative overflow-hidden`}>
      <StreamTexture variant={isLight ? "light" : "dark"} opacity={isLight ? 0.1 : 0.08} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link 
            to="/contact" 
            className="btn-cta group flex items-center gap-2"
          >
            Get a Free Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <span className={`text-sm font-medium ${isLight ? "text-gray-400" : "text-text-muted"}`}>
            or
          </span>
          
          <a 
            href={PHONE_HREF}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all font-medium text-sm ${
              isLight 
                ? "border-gray-300 text-gray-700 hover:bg-primary hover:border-primary hover:text-white" 
                : "border-border text-text-secondary hover:text-white hover:border-primary hover:bg-primary"
            }`}
          >
            <Phone className="h-4 w-4" />
            {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MidPageCTA;
