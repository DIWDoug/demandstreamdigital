import brightlocal from "@/assets/logos/brightlocal.webp";
import localDominator from "@/assets/logos/local-dominator.jpg";
import semrush from "@/assets/logos/semrush.png";
import ahrefs from "@/assets/logos/ahrefs.webp";
import chatgpt from "@/assets/logos/chatgpt.webp";
import claude from "@/assets/logos/claude.webp";
import gemini from "@/assets/logos/gemini.png";
import googleAds from "@/assets/logos/google-ads.png";
import hubspot from "@/assets/logos/hubspot.svg";
import meta from "@/assets/logos/meta.svg";
import surferseo from "@/assets/logos/surferseo.png";

const TechStack = () => {
  const logos = [
    { src: semrush, alt: "Semrush" },
    { src: ahrefs, alt: "Ahrefs" },
    { src: brightlocal, alt: "BrightLocal" },
    { src: localDominator, alt: "Local Dominator" },
    { src: surferseo, alt: "Surfer SEO" },
    { src: googleAds, alt: "Google Ads" },
    { src: meta, alt: "Meta" },
    { src: hubspot, alt: "HubSpot" },
    { src: chatgpt, alt: "ChatGPT" },
    { src: claude, alt: "Claude AI" },
    { src: gemini, alt: "Google Gemini" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-surface-dark border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 mb-8">
        <p className="text-center text-sm text-text-muted uppercase tracking-widest mb-2">
          The Company We Keep
        </p>
        <p className="text-center text-xs text-text-muted italic">
          so many tools our CPA brings it up every meeting
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-slide-left">
          {/* First set */}
          <div className="flex shrink-0 items-center gap-12 px-6">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 items-center gap-12 px-6">
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="flex items-center justify-center">
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
