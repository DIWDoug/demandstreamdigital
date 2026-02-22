import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import StreamTexture from "@/components/StreamTexture";
import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";

const FounderEEAT = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 section-light reveal-section relative overflow-hidden">
      <StreamTexture variant="light" opacity={0.1} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={dougHeadshot}
            alt="Doug Bryson, Founder of DemandStream Digital"
            className="w-28 h-28 rounded-full object-cover mx-auto mb-6 shadow-lg border-4 border-white"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built on 15+ Years of Digital Marketing Experience
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            DemandStream Digital was founded by a digital marketing strategist with over 15 years of experience in SEO and paid media. Today, we focus exclusively on plumbing and HVAC companies — helping them compete and win in local search markets across the country.
          </p>
          <Link
            to="/about"
            className="btn-cta group inline-flex items-center gap-2"
          >
            Meet the Founder
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FounderEEAT;
