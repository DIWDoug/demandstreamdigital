import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, Calculator, Info } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const presetAmounts = [2500, 5000, 7500, 10000, 15000, 20000];
const termOptions = [12, 24, 36, 48, 60, 72];
const aprOptions = [0, 4.99, 7.99, 9.99, 12.99, 16.99, 19.99];

const FinancingCalculator = () => {
  const [amount, setAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [term, setTerm] = useState(36);
  const [apr, setApr] = useState(9.99);

  const effectiveAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  const monthlyPayment = useMemo(() => {
    if (effectiveAmount <= 0 || term <= 0) return 0;
    if (apr === 0) return effectiveAmount / term;
    const monthlyRate = apr / 100 / 12;
    return (effectiveAmount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
  }, [effectiveAmount, term, apr]);

  const totalCost = monthlyPayment * term;
  const totalInterest = totalCost - effectiveAmount;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Financing Payment Calculator | Plumbing & HVAC | ServiceForge Digital</title>
        <meta name="description" content="Calculate monthly payments for plumbing and HVAC jobs. See what financing options look like before you commit." />
      </Helmet>

      <div className="dark">
        <Header />
      </div>

      <main className="section-light">
        <div className="container mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-semibold mb-4">
                <Calculator className="h-4 w-4" />
                Free Calculator Tool
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Financing Payment Calculator
              </h1>
              <p className="text-lg text-text-secondary max-w-xl mx-auto">
                See what monthly payments look like for your next plumbing or HVAC project.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Controls */}
              <div className="lg:col-span-3 space-y-8">
                {/* Amount */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <label className="text-sm font-semibold block mb-3">Job Cost</label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {presetAmounts.map((a) => (
                      <button
                        key={a}
                        onClick={() => { setAmount(a); setCustomAmount(""); }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                          !customAmount && amount === a
                            ? "border-cta bg-cta/10 text-cta"
                            : "border-border hover:border-cta/30"
                        }`}
                      >
                        ${a.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                    <input
                      type="number"
                      placeholder="Or enter custom amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all"
                    />
                  </div>
                </div>

                {/* Term */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <label className="text-sm font-semibold block mb-3">Loan Term (months)</label>
                  <div className="flex flex-wrap gap-2">
                    {termOptions.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTerm(t)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                          term === t
                            ? "border-cta bg-cta/10 text-cta"
                            : "border-border hover:border-cta/30"
                        }`}
                      >
                        {t} mo{t >= 12 ? ` (${t / 12}yr)` : ""}
                      </button>
                    ))}
                  </div>
                </div>

                {/* APR */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <label className="text-sm font-semibold block mb-3">Interest Rate (APR)</label>
                  <div className="flex flex-wrap gap-2">
                    {aprOptions.map((a) => (
                      <button
                        key={a}
                        onClick={() => setApr(a)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                          apr === a
                            ? "border-cta bg-cta/10 text-cta"
                            : "border-border hover:border-cta/30"
                        }`}
                      >
                        {a === 0 ? "0% Promo" : `${a}%`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Card */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg sticky top-28">
                  <p className="text-sm text-text-muted uppercase tracking-widest mb-1">Estimated Monthly Payment</p>
                  <div className="text-4xl sm:text-5xl font-bold text-cta mb-6">
                    ${monthlyPayment > 0 ? monthlyPayment.toFixed(2) : "0.00"}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Job Cost</span>
                      <span className="font-semibold">${effectiveAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Term</span>
                      <span className="font-semibold">{term} months</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">APR</span>
                      <span className="font-semibold">{apr}%</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between text-sm">
                      <span className="text-text-muted">Total Interest</span>
                      <span className="font-semibold">${totalInterest > 0 ? totalInterest.toFixed(2) : "0.00"}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Total Cost</span>
                      <span className="font-bold text-foreground">${totalCost > 0 ? totalCost.toFixed(2) : "0.00"}</span>
                    </div>
                  </div>

                  <Link to="/contact" className="btn-cta group w-full justify-center text-sm">
                    Get Real Financing Options
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-start gap-2 mt-4 text-xs text-text-muted">
                    <Info className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                    <span>This is an estimate only. Actual rates and terms depend on your credit profile and lender.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="dark">
        <Footer />
      </div>
    </div>
  );
};

export default FinancingCalculator;
