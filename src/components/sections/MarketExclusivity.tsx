import { useScrollReveal } from "@/hooks/useScrollAnimation";
import ScheduleGrowthAuditCTA from "@/components/cta/ScheduleGrowthAuditCTA";

const MarketExclusivity = () => {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef as any} className="reveal-section">
      <ScheduleGrowthAuditCTA density="compact" />
    </div>
  );
};

export default MarketExclusivity;
