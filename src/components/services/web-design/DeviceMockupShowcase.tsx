import { Monitor, Smartphone, Laptop } from "lucide-react";

const DeviceMockupShowcase = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#0F1E2D] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-accent-blue text-xs font-semibold uppercase tracking-widest mb-4">What You Get</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Websites That Look Right on Every Screen
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Over 70% of plumbing and HVAC searches happen on mobile. Every site we build is designed for the device your customer is actually using when they need you.
            </p>
          </div>

          {/* Triple Device Mockup */}
          <div className="relative flex items-end justify-center gap-4 md:gap-8 lg:gap-12 px-4">
            
            {/* Desktop Monitor - Left */}
            <div className="hidden md:block flex-shrink-0 w-[340px] lg:w-[420px]">
              <div className="bg-zinc-800 rounded-t-lg p-1.5 pt-4 relative">
                {/* Camera dot */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-600 rounded-full" />
                {/* Screen */}
                <div className="bg-zinc-900 rounded-sm overflow-hidden aspect-[16/10]">
                  <div className="w-full h-full bg-gradient-to-br from-[#0D1B2A] to-[#1B3A5C] p-4 flex flex-col">
                    {/* Fake website content */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded bg-cta/30" />
                      <div className="flex gap-2">
                        <div className="w-10 h-1.5 rounded bg-white/20" />
                        <div className="w-8 h-1.5 rounded bg-white/20" />
                        <div className="w-12 h-1.5 rounded bg-white/20" />
                      </div>
                      <div className="ml-auto w-14 h-4 rounded bg-cta/40" />
                    </div>
                    <div className="flex-1 flex gap-3">
                      <div className="flex-1 space-y-2">
                        <div className="w-3/4 h-3 rounded bg-white/25" />
                        <div className="w-full h-2 rounded bg-white/10" />
                        <div className="w-5/6 h-2 rounded bg-white/10" />
                        <div className="w-16 h-5 rounded bg-cta/50 mt-2" />
                      </div>
                      <div className="w-24 lg:w-32 bg-white/5 rounded-lg border border-white/10 p-2 space-y-2">
                        <div className="w-full h-2 rounded bg-white/15" />
                        <div className="w-full h-2 rounded bg-white/10" />
                        <div className="w-full h-6 rounded bg-accent-blue/30 mt-1" />
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white/5 rounded p-2 space-y-1">
                          <div className="w-full h-8 rounded bg-white/8" />
                          <div className="w-3/4 h-1.5 rounded bg-white/15" />
                          <div className="w-full h-1 rounded bg-white/8" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Monitor Stand */}
              <div className="bg-gradient-to-b from-zinc-700 to-zinc-800 h-3 rounded-b-sm" />
              <div className="w-20 h-12 bg-gradient-to-b from-zinc-700 to-zinc-800 mx-auto" />
              <div className="w-32 h-2 bg-zinc-700 mx-auto rounded-full" />
              {/* Label */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <Monitor className="w-4 h-4 text-accent-blue" />
                <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Desktop</span>
              </div>
            </div>

            {/* Laptop - Center (primary) */}
            <div className="flex-shrink-0 w-[280px] md:w-[380px] lg:w-[460px] relative z-10">
              <div className="bg-zinc-800 rounded-t-xl p-2 pt-5 relative">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-zinc-600 rounded-full" />
                <div className="bg-zinc-900 rounded-lg overflow-hidden aspect-[16/10] shadow-2xl shadow-accent-blue/10">
                  <div className="w-full h-full bg-gradient-to-br from-[#0D1B2A] to-[#1B3A5C] p-4 md:p-6 flex flex-col">
                    {/* Navigation bar */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-cta/30" />
                      <div className="flex gap-3">
                        <div className="w-12 h-2 rounded bg-white/20" />
                        <div className="w-10 h-2 rounded bg-white/20" />
                        <div className="w-14 h-2 rounded bg-white/20" />
                        <div className="w-10 h-2 rounded bg-white/20" />
                      </div>
                      <div className="ml-auto flex gap-2">
                        <div className="w-8 h-2 rounded bg-white/15" />
                        <div className="w-16 h-6 rounded bg-cta/50" />
                      </div>
                    </div>
                    {/* Hero section */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <div className="space-y-3 flex flex-col justify-center">
                        <div className="w-4/5 h-4 rounded bg-white/30" />
                        <div className="w-full h-3 rounded bg-white/20" />
                        <div className="w-full h-2 rounded bg-white/10" />
                        <div className="w-3/4 h-2 rounded bg-white/10" />
                        <div className="flex gap-2 mt-1">
                          <div className="w-20 h-6 rounded bg-cta/50" />
                          <div className="w-16 h-6 rounded border border-white/20" />
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-xl border border-white/10 p-3 flex flex-col justify-center space-y-2">
                        <div className="w-3/4 h-2.5 rounded bg-white/20 mx-auto" />
                        <div className="w-full h-2 rounded bg-white/10" />
                        <div className="w-full h-2 rounded bg-white/10" />
                        <div className="w-full h-2 rounded bg-white/10" />
                        <div className="w-full h-7 rounded bg-cta/40 mt-1" />
                      </div>
                    </div>
                    {/* Stats bar */}
                    <div className="mt-4 flex gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex-1 bg-white/5 rounded-lg p-2 text-center">
                          <div className="w-8 h-3 rounded bg-accent-blue/30 mx-auto mb-1" />
                          <div className="w-12 h-1.5 rounded bg-white/15 mx-auto" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-b from-zinc-700 to-zinc-800 h-4 rounded-b-lg relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-zinc-600 rounded-b-full" />
              </div>
              <div className="bg-zinc-800 h-2 mx-8 rounded-b-xl shadow-lg" />
              {/* Label */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <Laptop className="w-4 h-4 text-accent-blue" />
                <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Laptop</span>
              </div>
            </div>

            {/* Mobile Phone - Right */}
            <div className="flex-shrink-0 w-[100px] md:w-[120px] lg:w-[140px] mb-4 md:mb-0">
              <div className="bg-zinc-800 rounded-[20px] p-1.5 pt-5 pb-5 relative shadow-xl">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-zinc-900 rounded-full" />
                {/* Screen */}
                <div className="bg-zinc-900 rounded-[12px] overflow-hidden aspect-[9/19]">
                  <div className="w-full h-full bg-gradient-to-br from-[#0D1B2A] to-[#1B3A5C] p-2 flex flex-col">
                    {/* Mobile nav */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-4 h-4 rounded bg-cta/30" />
                      <div className="w-4 h-3 flex flex-col gap-0.5">
                        <div className="w-full h-[2px] bg-white/30" />
                        <div className="w-full h-[2px] bg-white/30" />
                        <div className="w-full h-[2px] bg-white/30" />
                      </div>
                    </div>
                    {/* Mobile hero */}
                    <div className="space-y-1.5 mb-2">
                      <div className="w-full h-2 rounded bg-white/25" />
                      <div className="w-3/4 h-2 rounded bg-white/25" />
                      <div className="w-full h-1.5 rounded bg-white/10" />
                      <div className="w-5/6 h-1.5 rounded bg-white/10" />
                    </div>
                    {/* CTA */}
                    <div className="w-full h-5 rounded bg-cta/50 mb-2" />
                    {/* Phone button */}
                    <div className="w-full h-5 rounded border border-white/20 mb-2 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-accent-blue/30" />
                    </div>
                    {/* Service cards */}
                    <div className="space-y-1.5 flex-1">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white/5 rounded p-1.5 flex gap-1.5">
                          <div className="w-6 h-6 rounded bg-white/10 shrink-0" />
                          <div className="flex-1 space-y-1">
                            <div className="w-3/4 h-1.5 rounded bg-white/15" />
                            <div className="w-full h-1 rounded bg-white/8" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-zinc-600 rounded-full" />
              </div>
              {/* Label */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <Smartphone className="w-4 h-4 text-accent-blue" />
                <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Mobile</span>
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {[
              { stat: "100%", label: "Mobile-First Design" },
              { stat: "<2s", label: "Page Load Target" },
              { stat: "A+", label: "Core Web Vitals" },
              { stat: "24/7", label: "Call-First UX" },
            ].map((item, i) => (
              <div key={i} className="text-center bg-[#162233] border border-white/10 rounded-xl p-5">
                <p className="text-2xl md:text-3xl font-bold text-accent-blue mb-1">{item.stat}</p>
                <p className="text-xs text-text-secondary uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceMockupShowcase;
