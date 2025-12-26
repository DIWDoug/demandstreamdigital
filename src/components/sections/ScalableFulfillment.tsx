import { Users, Shield, Clock, Settings } from "lucide-react";

const ScalableFulfillment = () => {
  const points = [
    {
      icon: Users,
      title: "Expand Without Hiring",
      description: "Adding new services to your agency traditionally means recruiting specialists, managing training, and absorbing overhead before you've sold a single project. White-label partnerships eliminate that risk. You can offer comprehensive local marketing services immediately, scale capacity based on actual demand, and maintain healthy margins without the fixed costs of internal teams. When client needs change, you adapt instantly."
    },
    {
      icon: Shield,
      title: "Your Brand, Our Work",
      description: "Every report, every deliverable, every communication is formatted under your brand. Clients interact with your team, see your logo, and build loyalty to your agency. We operate entirely behind the scenes—no co-branding, no client-facing presence, no confusion about who they hired. This preserves the relationship equity you've built and positions you as the full-service partner your clients need."
    },
    {
      icon: Clock,
      title: "Predictable Timelines",
      description: "Inconsistent delivery destroys client trust faster than almost anything else. We operate with clear service level agreements, defined turnaround times, and proactive communication when timelines shift. You can confidently set client expectations, plan your account management capacity, and build a reputation for reliability that becomes a competitive advantage in a market full of agencies that overpromise and underdeliver."
    },
    {
      icon: Settings,
      title: "Full Control",
      description: "You own the client relationship completely. You set pricing, manage communication cadence, decide what gets shared and when. We provide the execution capacity and strategic support, but every decision about client experience remains yours. This isn't a referral partnership or revenue share arrangement—it's fulfillment infrastructure that scales with your ambition while you retain complete autonomy over your business."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-foreground">
              Why Agencies Partner With Us
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Growing an agency means constantly balancing capacity against opportunity. You can't hire ahead of revenue, but you can't serve clients without the right expertise. White-label fulfillment solves this fundamental tension—giving you the capacity to say yes to new business while maintaining the quality that keeps existing clients renewing.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {points.map((point, index) => (
              <div 
                key={index}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                    <point.icon className="h-5 w-5 text-accent-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalableFulfillment;