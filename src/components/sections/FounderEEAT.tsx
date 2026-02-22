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
              Most Plumbing & HVAC Companies Don't Lose Customers Because of Results
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>I've been in digital marketing since 2011.</p>
              <p>I've watched plumbing and HVAC companies hire agencies that sold big promises and delivered cookie-cutter packages. Sometimes it worked. Sometimes it was a disaster. They never knew what they'd get until the report landed in their inbox.</p>
              <p>Then I realized the obvious thing:</p>
              <p><strong className="text-gray-900">Every market is different. Every company is different. Cookie-cutter campaigns forced onto unique situations is a race to the bottom.</strong></p>
              <p>So I built something different.</p>
              <p>Not as a visionary trying to scale. As a marketer who learned by doing the work. I've been the one in the trenches — building campaigns, fixing what broke, understanding why things actually rank.</p>
              <p>This experience now shapes how we scope, execute, and communicate every engagement.</p>
              <p>Work you can understand without jargon. Execution scoped to your actual market. No crossed fingers required.</p>
              <p>If that sounds like what you've been looking for, let's talk.</p>
              <p className="font-semibold text-gray-900">— Doug</p>
            </div>
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
