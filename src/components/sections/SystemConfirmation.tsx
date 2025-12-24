import { Check } from "lucide-react";

const SystemConfirmation = () => {
  const points = [
    {
      text: "Start with one service if needed",
      subtext: "We meet you where you are"
    },
    {
      text: "Results compound when deployed together",
      subtext: "The system is designed to interconnect"
    },
    {
      text: "Most partners expand within 90 days",
      subtext: "Because the foundation proves itself"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-surface-dark relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Calm, wide, minimal layout */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            {/* Left side - messaging */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-text-muted text-sm uppercase tracking-widest mb-3">
                Modular by design
              </p>
              <h3 className="text-xl lg:text-2xl font-medium text-foreground mb-4">
                You don't have to buy everything.
              </h3>
              <p className="text-text-secondary leading-relaxed">
                But most agencies find that once the foundation is working, 
                adding amplification layers is the obvious next step.
              </p>
            </div>

            {/* Right side - proof points with BLUE checkmarks, not green */}
            <div className="flex-1 space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent-blue/20 border border-accent-blue/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{point.text}</p>
                    <p className="text-text-muted text-sm">{point.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemConfirmation;