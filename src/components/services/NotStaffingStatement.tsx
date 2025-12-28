import { Shield } from "lucide-react";

const NotStaffingStatement = () => {
  return (
    <section className="py-12 bg-surface-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-elevated border border-border/50 flex items-center justify-center">
            <Shield className="h-5 w-5 text-text-muted" />
          </div>
          <div>
            <h4 className="text-foreground font-medium mb-1">
              We are not a staffing company.
            </h4>
            <p className="text-text-secondary text-sm">
              We deliver execution with standards and accountability. We don't place people—we own fulfillment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotStaffingStatement;
