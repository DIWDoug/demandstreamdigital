import { CheckCircle, Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/constants";
import HeroForm from "./HeroForm";
import heroImage from "@/assets/hero-homeowner.jpg";

const Hero = () => {
  const trustPoints = [
    "SEO & Google Maps",
    "Paid Ads (PPC)",
    "Reputation Management",
    "Content Marketing",
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Happy homeowner greeting HVAC technician"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-28 pb-20 md:pt-40 md:pb-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column — Headline & copy */}
          <div className="max-w-xl">
            <p className="text-sm text-cta uppercase tracking-widest mb-4 font-medium animate-fade-in-up">
              Growth Marketing for Plumbing & HVAC Companies
            </p>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6 animate-fade-in-up text-foreground"
              style={{ animationDelay: "0.1s", lineHeight: "1.1" }}
            >
              More Calls. More Jobs.{" "}
              <span className="text-accent-blue drop-shadow-[0_0_30px_hsl(var(--accent-blue)/0.5)]">
                More Growth.
              </span>
            </h1>

            <p
              className="text-lg text-text-secondary leading-relaxed mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              We help plumbing and HVAC companies fill their schedules with high-quality leads — through SEO, Google Ads, reputation management, and content marketing built specifically for the trades.
            </p>

            {/* Trust points */}
            <ul className="space-y-3 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cta flex-shrink-0" />
                  <span className="text-text-secondary font-medium">{point}</span>
                </li>
              ))}
            </ul>

            {/* Phone CTA */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-foreground font-semibold text-lg hover:text-cta transition-colors group"
              >
                <Phone className="h-5 w-5 text-cta" />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-cta after:transition-all after:duration-300 group-hover:after:w-full">
                  Call {PHONE_NUMBER}
                </span>
              </a>
            </div>
          </div>

          {/* Right column — Lead capture form */}
          <div className="animate-fade-in-up lg:pl-4" style={{ animationDelay: "0.3s" }}>
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
