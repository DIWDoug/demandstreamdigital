import { ArrowRight, Award, Users, TrendingUp, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import StreamTexture from "@/components/StreamTexture";
import dougHeadshot from "@/assets/doug-bryson-headshot.jpeg";

const credentials = [
  { icon: Award, text: "Expert-Vetted Upwork Specialist (Top 1%)" },
  { icon: Briefcase, text: "15+ Years Digital Marketing Experience" },
  { icon: TrendingUp, text: "Managed $5M+ in Ad Spend" },
  { icon: Users, text: "100+ Clients Served" },
];

const FounderEEAT = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 section-light reveal-section relative overflow-hidden">
      <StreamTexture variant="light" opacity={0.1} />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left: Headshot + Bio */}
          <div className="text-center md:text-left">
            <img
              src={dougHeadshot}
              alt="Doug Bryson, Founder of DemandStream Digital"
              className="w-36 h-36 lg:w-44 lg:h-44 rounded-full object-cover mx-auto md:mx-0 mb-6 shadow-lg border-4 border-white"
            />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Built by a Marketer, For Plumbing & HVAC Companies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              15+ years in SEO, paid media, and local search. Hundreds of campaigns managed. Millions in ad spend optimized. I've worked with businesses across dozens of industries, but today I focus exclusively on plumbing and HVAC companies — because that's where my experience delivers the most impact. Every campaign is scoped to your market, not a template.
            </p>
          </div>

          {/* Right: Credentials + CTA */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Doug Bryson, CEO & Founder
            </h3>
            <ul className="space-y-4 mb-8">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-start gap-3">
                  <cred.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-gray-700">{cred.text}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="btn-cta group inline-flex items-center gap-2 w-full justify-center"
            >
              Meet the Founder
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderEEAT;
