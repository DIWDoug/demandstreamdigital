import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found | Demand Stream Digital"
        description="The page you're looking for doesn't exist. Return to Demand Stream Digital's homepage for growth marketing services for plumbing and HVAC companies."
        canonical="https://demandstreamdigital.com/404"
        noIndex={true}
      />
      <div className="dark min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] bg-gradient-to-br from-cta/50 to-accent-blue/30" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px] bg-gradient-to-tl from-accent-blue/40 to-cta/20" />
      </div>
      
      <div className="text-center relative z-10 px-6">
        <div className="mb-6">
          <span className="text-8xl md:text-9xl font-bold text-foreground/10">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
          Looks like this page got lost somewhere between the algorithm updates. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="btn-cta group flex items-center gap-2"
          >
            <Home className="h-5 w-5" />
            Back to Home
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-4 rounded-lg border border-border text-foreground hover:bg-surface-elevated transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default NotFound;
