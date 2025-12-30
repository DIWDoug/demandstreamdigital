import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Factor {
  label: string;
  weight: number;
  color: string;
}

interface FactorGroup {
  id: string;
  title: string;
  subtitle: string;
  factors: Factor[];
}

const factorGroups: FactorGroup[] = [
  {
    id: "local-pack",
    title: "Local Pack/Maps",
    subtitle: "Ranking Factors",
    factors: [
      { label: "GBP signals", weight: 32, color: "bg-rose-500" },
      { label: "Review signals", weight: 20, color: "bg-fuchsia-400" },
      { label: "On-page signals", weight: 15, color: "bg-violet-600" },
      { label: "Behavioural signals", weight: 9, color: "bg-blue-500" },
      { label: "Link signals", weight: 8, color: "bg-violet-500" },
      { label: "Citation signals", weight: 6, color: "bg-emerald-500" },
      { label: "Personalization", weight: 6, color: "bg-cyan-400" },
      { label: "Social signals", weight: 4, color: "bg-blue-600" },
    ],
  },
  {
    id: "local-organic",
    title: "Local Organic",
    subtitle: "Ranking Factors",
    factors: [
      { label: "On-page signals", weight: 33, color: "bg-violet-600" },
      { label: "Link signals", weight: 24, color: "bg-violet-500" },
      { label: "Behavioural signals", weight: 10, color: "bg-blue-500" },
      { label: "Personalization", weight: 8, color: "bg-cyan-400" },
      { label: "GBP signals", weight: 7, color: "bg-rose-500" },
      { label: "Citation signals", weight: 7, color: "bg-emerald-500" },
      { label: "Review signals", weight: 6, color: "bg-fuchsia-400" },
      { label: "Social signals", weight: 5, color: "bg-blue-600" },
    ],
  },
  {
    id: "ai-search",
    title: "AI Search",
    subtitle: "Visibility Factors",
    factors: [
      { label: "On-page signals", weight: 24, color: "bg-violet-600" },
      { label: "Review signals", weight: 16, color: "bg-fuchsia-400" },
      { label: "Citation signals", weight: 13, color: "bg-emerald-500" },
      { label: "Link signals", weight: 13, color: "bg-violet-500" },
      { label: "GBP signals", weight: 12, color: "bg-rose-500" },
      { label: "Personalization", weight: 9, color: "bg-cyan-400" },
      { label: "Social signals", weight: 9, color: "bg-cyan-500" },
      { label: "Behavioural signals", weight: 4, color: "bg-blue-500" },
    ],
  },
];

const LocalRankingFactors = () => {
  const [activeTab, setActiveTab] = useState("local-pack");

  return (
    <section className="py-20 lg:py-28 section-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-4">
              2026 Research
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
              Local Search Ranking Factor Groups
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Based on Whitespark's 2026 Local Search Ranking Factors research. The data behind every strategy we build.
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-10 bg-slate-200 p-1.5 rounded-xl">
              {factorGroups.map((group) => (
                <TabsTrigger
                  key={group.id}
                  value={group.id}
                  className="rounded-lg py-3 px-4 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-md text-slate-700"
                >
                  <span className="hidden sm:inline">{group.title}</span>
                  <span className="sm:hidden">{group.title.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {factorGroups.map((group) => (
              <TabsContent key={group.id} value={group.id} className="mt-0">
                <div className="bg-slate-900 rounded-2xl p-8 lg:p-10">
                  {/* Tab Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {group.title}
                    </h3>
                    <p className="text-slate-400 uppercase tracking-wider text-sm">
                      {group.subtitle}
                    </p>
                  </div>

                  {/* Color Bar Visualization */}
                  <div className="flex h-12 md:h-14 rounded-lg overflow-hidden mb-8">
                    {group.factors.map((factor, idx) => (
                      <div
                        key={idx}
                        className={`${factor.color} transition-all duration-300 hover:opacity-80`}
                        style={{ width: `${factor.weight}%` }}
                        title={`${factor.weight}% ${factor.label}`}
                      />
                    ))}
                  </div>

                  {/* Factor List */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {group.factors.map((factor, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${factor.color} flex-shrink-0`} />
                        <span className="text-white text-sm">
                          <span className="font-bold">{factor.weight}%</span>{" "}
                          <span className="text-slate-300">{factor.label}</span>
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Source */}
                  <div className="mt-8 pt-6 border-t border-slate-700 flex items-center justify-between">
                    <p className="text-slate-500 text-sm">
                      Source: Whitespark 2026 Local Search Ranking Factors
                    </p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default LocalRankingFactors;