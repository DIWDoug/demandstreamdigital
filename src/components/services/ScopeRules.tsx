const rules = [
  "Fulfillment is planned on a monthly cadence",
  "Standalone or multi-service engagements are scoped intentionally",
  "We do not pivot execution mid-cycle",
  "Scope changes are reviewed during planning windows",
  "Fulfillment operates independently of end-client churn"
];

const ScopeRules = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-surface-elevated border border-border/50 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Scope & Activation Rules
            </h3>
            <ul className="space-y-3">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cta/60 mt-1.5 flex-shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopeRules;
