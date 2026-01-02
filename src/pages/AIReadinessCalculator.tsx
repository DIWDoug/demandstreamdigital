import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactForm from "@/components/sections/ContactForm";
import AgencyPartnerVideos from "@/components/calculators/AgencyPartnerVideos";
import PricingComparisonTable from "@/components/calculators/PricingComparisonTable";
import { useState, useMemo } from "react";
import { Brain, CheckCircle2, AlertTriangle, XCircle, TrendingUp, Zap, Shield, Database, Users, Settings, Target, ArrowRight, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

interface Question {
  id: string;
  category: string;
  question: string;
  tooltip?: string;
}

interface CategoryConfig {
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const categories: Record<string, CategoryConfig> = {
  strategy: { name: "Strategy & Leadership", icon: Target, color: "text-cta", bgColor: "bg-cta/10" },
  data: { name: "Data Infrastructure", icon: Database, color: "text-accent-blue", bgColor: "bg-accent-blue/10" },
  technology: { name: "Technology Stack", icon: Settings, color: "text-purple-500", bgColor: "bg-purple-500/10" },
  team: { name: "Team & Skills", icon: Users, color: "text-emerald-500", bgColor: "bg-emerald-500/10" },
  governance: { name: "Governance & Ethics", icon: Shield, color: "text-orange-500", bgColor: "bg-orange-500/10" },
  integration: { name: "Integration Readiness", icon: Zap, color: "text-teal-500", bgColor: "bg-teal-500/10" },
};

const questions: Question[] = [
  // Strategy & Leadership
  { id: "s1", category: "strategy", question: "Leadership has defined clear objectives for AI adoption", tooltip: "Does your client's leadership team understand AI's potential and have specific goals?" },
  { id: "s2", category: "strategy", question: "There is executive sponsorship for AI initiatives", tooltip: "Is there a C-level champion who supports and advocates for AI projects?" },
  { id: "s3", category: "strategy", question: "AI is included in the organization's strategic roadmap", tooltip: "Has AI been formally incorporated into long-term business planning?" },
  
  // Data Infrastructure
  { id: "d1", category: "data", question: "Customer and business data is centralized and accessible", tooltip: "Is data stored in organized systems rather than scattered across spreadsheets?" },
  { id: "d2", category: "data", question: "Data quality is regularly monitored and maintained", tooltip: "Are there processes to ensure data accuracy, completeness, and consistency?" },
  { id: "d3", category: "data", question: "Historical data is available for AI training purposes", tooltip: "Is there sufficient historical data (12+ months) to train or fine-tune AI models?" },
  { id: "d4", category: "data", question: "Data privacy and compliance frameworks are in place", tooltip: "Are there policies for GDPR, CCPA, or industry-specific data regulations?" },
  
  // Technology Stack
  { id: "t1", category: "technology", question: "Current systems support API integrations", tooltip: "Can existing software connect with third-party AI tools via APIs?" },
  { id: "t2", category: "technology", question: "Cloud infrastructure is available or planned", tooltip: "Is the business using or planning to use cloud services (AWS, GCP, Azure)?" },
  { id: "t3", category: "technology", question: "Website and marketing platforms are modern and maintained", tooltip: "Are digital properties using current CMS platforms with regular updates?" },
  
  // Team & Skills
  { id: "tm1", category: "team", question: "Staff is open to adopting new technologies", tooltip: "Is there a culture of learning and adaptability within the team?" },
  { id: "tm2", category: "team", question: "Someone is designated to lead AI implementation", tooltip: "Is there a point person responsible for evaluating and deploying AI tools?" },
  { id: "tm3", category: "team", question: "Budget exists for training and upskilling", tooltip: "Are resources allocated for team education on AI tools and best practices?" },
  
  // Governance & Ethics
  { id: "g1", category: "governance", question: "There are policies for responsible AI use", tooltip: "Are there guidelines on how AI should and shouldn't be used in the business?" },
  { id: "g2", category: "governance", question: "Human oversight is planned for AI-assisted decisions", tooltip: "Will humans review and validate important AI outputs before action?" },
  { id: "g3", category: "governance", question: "Risk assessment has been conducted for AI adoption", tooltip: "Has the business evaluated potential risks and mitigation strategies?" },
  
  // Integration Readiness
  { id: "i1", category: "integration", question: "Key workflows are documented and standardized", tooltip: "Are business processes documented in a way that could be automated or enhanced?" },
  { id: "i2", category: "integration", question: "There are specific use cases identified for AI", tooltip: "Has the business identified concrete problems AI could solve (e.g., customer service, content, analytics)?" },
  { id: "i3", category: "integration", question: "Quick wins have been identified for initial AI projects", tooltip: "Are there low-risk, high-impact opportunities to start with AI adoption?" },
  { id: "i4", category: "integration", question: "Success metrics are defined for AI initiatives", tooltip: "Are there KPIs to measure whether AI implementations are successful?" },
];

const AIReadinessCalculator = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const results = useMemo(() => {
    const categoryScores: Record<string, { score: number; maxScore: number; percentage: number }> = {};
    
    Object.keys(categories).forEach(cat => {
      const categoryQuestions = questions.filter(q => q.category === cat);
      const answered = categoryQuestions.filter(q => answers[q.id] !== undefined);
      const score = answered.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
      const maxScore = categoryQuestions.length * 3;
      categoryScores[cat] = {
        score,
        maxScore,
        percentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0
      };
    });

    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const maxTotalScore = questions.length * 3;
    const overallPercentage = maxTotalScore > 0 ? Math.round((totalScore / maxTotalScore) * 100) : 0;
    const questionsAnswered = Object.keys(answers).length;
    const isComplete = questionsAnswered === questions.length;

    let readinessLevel: "emerging" | "developing" | "ready" | "innovating";
    let levelLabel: string;
    let levelDescription: string;

    if (overallPercentage < 33) {
      readinessLevel = "emerging";
      levelLabel = "Emerging";
      levelDescription = "Focus on building foundational infrastructure, developing leadership buy-in, and identifying initial AI use cases.";
    } else if (overallPercentage < 55) {
      readinessLevel = "developing";
      levelLabel = "Developing";
      levelDescription = "Address key gaps while beginning low-risk AI pilots. Build internal AI literacy through targeted training.";
    } else if (overallPercentage < 75) {
      readinessLevel = "ready";
      levelLabel = "AI Ready";
      levelDescription = "Launch AI pilots in priority areas and develop governance frameworks. Strong foundation for meaningful AI adoption.";
    } else {
      readinessLevel = "innovating";
      levelLabel = "Innovating";
      levelDescription = "Expand AI across operations, explore advanced use cases, and measure ROI. Position for competitive advantage through AI.";
    }

    return {
      categoryScores,
      totalScore,
      maxTotalScore,
      overallPercentage,
      questionsAnswered,
      isComplete,
      readinessLevel,
      levelLabel,
      levelDescription
    };
  }, [answers]);

  const ScoreOption = ({ 
    value, 
    label, 
    selected, 
    onClick 
  }: { 
    value: number; 
    label: string; 
    selected: boolean; 
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all border",
        selected
          ? value === 1 ? "bg-red-500/20 border-red-500/50 text-red-400"
          : value === 2 ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-400"
          : "bg-green-500/20 border-green-500/50 text-green-400"
          : "bg-surface-dark border-border/30 text-text-muted hover:border-border/50"
      )}
    >
      {label}
    </button>
  );

  const SectionDivider = () => (
    <div className="container mx-auto px-6 lg:px-8 py-4">
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </div>
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case "emerging": return "text-red-400";
      case "developing": return "text-yellow-400";
      case "ready": return "text-accent-blue";
      case "innovating": return "text-green-400";
      default: return "text-text-muted";
    }
  };

  const getLevelBgColor = (level: string) => {
    switch (level) {
      case "emerging": return "from-red-500/10 to-red-600/5";
      case "developing": return "from-yellow-500/10 to-yellow-600/5";
      case "ready": return "from-accent-blue/10 to-accent-blue/5";
      case "innovating": return "from-green-500/10 to-green-600/5";
      default: return "from-surface-dark to-surface-elevated";
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Readiness Assessment | White-Label Agency Partner Tools | Dialed-In Web</title>
        <meta name="description" content="Assess your client's AI readiness across strategy, data, technology, team, governance, and integration domains. Identify gaps and opportunities for AI adoption." />
        <link rel="canonical" href="https://www.dialedinweb.com/ai-readiness-calculator" />
      </Helmet>
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-surface-dark via-surface-elevated to-surface-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cta/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-blue/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-medium mb-6">
                <Brain className="h-4 w-4" />
                Agency Partner Tools
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                AI Readiness Assessment
              </h1>
              <p className="text-text-secondary text-lg font-body mb-8">
                Evaluate your client's organizational readiness for AI adoption. Identify strengths, gaps, and a strategic roadmap for implementation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/content-marketing-calculator" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/50 text-text-secondary hover:text-foreground hover:border-accent-blue/50 transition-colors font-medium"
                >
                  <TrendingUp className="h-4 w-4" />
                  Content ROI Calculator
                </Link>
                <Link 
                  to="/roi-calculator" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/50 text-text-secondary hover:text-foreground hover:border-accent-blue/50 transition-colors font-medium"
                >
                  <Target className="h-4 w-4" />
                  Inbound ROI Calculator
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Assessment Section */}
        <section className="py-16 lg:py-24 bg-surface-dark">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-text-muted">
                    {results.questionsAnswered} of {questions.length} questions answered
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {Math.round((results.questionsAnswered / questions.length) * 100)}% complete
                  </p>
                </div>
                <Progress value={(results.questionsAnswered / questions.length) * 100} className="h-2" />
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4 mb-8">
                <p className="text-xs text-yellow-600 dark:text-yellow-500">
                  <strong>Note:</strong> This assessment provides a general readiness score. Actual AI implementation requirements vary by industry, use case, and organizational complexity. Use this as a conversation starter with clients.
                </p>
              </div>

              {/* Questions by Category */}
              {Object.entries(categories).map(([catKey, catConfig]) => {
                const categoryQuestions = questions.filter(q => q.category === catKey);
                const Icon = catConfig.icon;
                
                return (
                  <div key={catKey} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", catConfig.bgColor)}>
                        <Icon className={cn("h-5 w-5", catConfig.color)} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{catConfig.name}</h3>
                        <p className="text-xs text-text-muted">
                          {results.categoryScores[catKey]?.percentage || 0}% complete
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-surface-elevated rounded-xl border border-border/30 divide-y divide-border/20">
                      {categoryQuestions.map((q) => (
                        <div key={q.id} className="p-4">
                          <div className="flex items-start gap-2 mb-3">
                            <p className="text-sm text-foreground flex-1">{q.question}</p>
                            {q.tooltip && (
                              <TooltipProvider delayDuration={0}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button type="button" className="text-text-muted hover:text-accent-blue transition-colors flex-shrink-0">
                                      <Info className="h-4 w-4" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent side="top" className="max-w-xs bg-surface-elevated border-border/50 text-foreground z-50">
                                    <p className="text-sm">{q.tooltip}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <ScoreOption 
                              value={1} 
                              label="Not Yet" 
                              selected={answers[q.id] === 1} 
                              onClick={() => handleAnswer(q.id, 1)} 
                            />
                            <ScoreOption 
                              value={2} 
                              label="Developing" 
                              selected={answers[q.id] === 2} 
                              onClick={() => handleAnswer(q.id, 2)} 
                            />
                            <ScoreOption 
                              value={3} 
                              label="Established" 
                              selected={answers[q.id] === 3} 
                              onClick={() => handleAnswer(q.id, 3)} 
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Results Section */}
              {results.questionsAnswered > 0 && (
                <div className="mt-12 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground text-center mb-8">Assessment Results</h2>
                  
                  {/* Overall Score */}
                  <div className={cn(
                    "rounded-2xl p-8 border border-border/30 bg-gradient-to-br",
                    getLevelBgColor(results.readinessLevel)
                  )}>
                    <div className="text-center mb-6">
                      <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">AI Readiness Level</p>
                      <p className={cn("text-4xl md:text-5xl font-bold mb-2", getLevelColor(results.readinessLevel))}>
                        {results.levelLabel}
                      </p>
                      <p className="text-3xl font-bold text-foreground">{results.overallPercentage}%</p>
                    </div>
                    <p className="text-center text-text-muted max-w-lg mx-auto">
                      {results.levelDescription}
                    </p>
                    
                    {/* Level Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                      <div className={cn(
                        "w-3 h-3 rounded-full",
                        results.readinessLevel === "emerging" ? "bg-red-400" : "bg-red-400/30"
                      )} />
                      <div className={cn(
                        "w-3 h-3 rounded-full",
                        results.readinessLevel === "developing" ? "bg-yellow-400" : "bg-yellow-400/30"
                      )} />
                      <div className={cn(
                        "w-3 h-3 rounded-full",
                        results.readinessLevel === "ready" ? "bg-accent-blue" : "bg-accent-blue/30"
                      )} />
                      <div className={cn(
                        "w-3 h-3 rounded-full",
                        results.readinessLevel === "innovating" ? "bg-green-400" : "bg-green-400/30"
                      )} />
                    </div>
                  </div>

                  {/* Category Breakdown */}
                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30">
                    <h3 className="font-semibold text-foreground mb-6">Category Breakdown</h3>
                    <div className="space-y-4">
                      {Object.entries(categories).map(([catKey, catConfig]) => {
                        const score = results.categoryScores[catKey];
                        const Icon = catConfig.icon;
                        return (
                          <div key={catKey} className="flex items-center gap-4">
                            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", catConfig.bgColor)}>
                              <Icon className={cn("h-4 w-4", catConfig.color)} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center mb-1">
                                <p className="text-sm font-medium text-foreground truncate">{catConfig.name}</p>
                                <p className="text-sm text-text-muted">{score?.percentage || 0}%</p>
                              </div>
                              <div className="h-2 bg-surface-dark rounded-full overflow-hidden">
                                <div 
                                  className={cn(
                                    "h-full rounded-full transition-all duration-500",
                                    score?.percentage >= 75 ? "bg-green-500" 
                                    : score?.percentage >= 50 ? "bg-accent-blue"
                                    : score?.percentage >= 33 ? "bg-yellow-500"
                                    : "bg-red-500"
                                  )}
                                  style={{ width: `${score?.percentage || 0}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-surface-elevated rounded-2xl p-6 md:p-8 border border-border/30">
                    <h3 className="font-semibold text-foreground mb-4">Priority Recommendations</h3>
                    <div className="space-y-3">
                      {Object.entries(results.categoryScores)
                        .filter(([_, score]) => score.percentage < 66)
                        .sort((a, b) => a[1].percentage - b[1].percentage)
                        .slice(0, 3)
                        .map(([catKey, score]) => {
                          const cat = categories[catKey];
                          const Icon = cat.icon;
                          return (
                            <div key={catKey} className="flex items-start gap-3 p-3 bg-surface-dark rounded-lg">
                              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", cat.bgColor)}>
                                <Icon className={cn("h-4 w-4", cat.color)} />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-foreground">{cat.name}</p>
                                <p className="text-xs text-text-muted">
                                  Scoring {score.percentage}%. Focus on strengthening this area before expanding AI initiatives.
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      {Object.entries(results.categoryScores).filter(([_, score]) => score.percentage < 66).length === 0 && (
                        <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                          <CheckCircle2 className="h-5 w-5 text-green-400" />
                          <p className="text-sm text-green-400">Strong foundation across all categories. Ready for advanced AI implementation.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Educational Content */}
        <section className="py-16 lg:py-24 bg-surface-elevated">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The Six Pillars of AI Readiness
                </h2>
                <p className="text-text-muted max-w-2xl mx-auto">
                  Successful AI adoption requires alignment across strategy, data, technology, people, governance, and integration.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(categories).map(([catKey, cat]) => {
                  const Icon = cat.icon;
                  return (
                    <div key={catKey} className="bg-surface-dark rounded-xl p-6 border border-border/30">
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", cat.bgColor)}>
                        <Icon className={cn("h-6 w-6", cat.color)} />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{cat.name}</h3>
                      <p className="text-sm text-text-muted">
                        {catKey === "strategy" && "Clear objectives and executive sponsorship ensure AI initiatives align with business goals."}
                        {catKey === "data" && "Quality data is the foundation of AI. Without clean, accessible data, AI models cannot deliver value."}
                        {catKey === "technology" && "Modern systems with API capabilities enable seamless AI tool integration."}
                        {catKey === "team" && "A skilled, adaptable team with AI literacy drives successful implementation."}
                        {catKey === "governance" && "Ethical frameworks and human oversight ensure responsible, trusted AI use."}
                        {catKey === "integration" && "Documented workflows and defined use cases enable practical AI deployment."}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Next Steps */}
              <div className="mt-12 bg-gradient-to-br from-cta/10 to-accent-blue/10 rounded-2xl p-8 border border-cta/30">
                <h3 className="font-semibold text-foreground mb-4 text-center">Using This Assessment With Clients</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-cta">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Discovery Conversation</p>
                      <p className="text-xs text-text-muted">Walk through questions together to understand their current state and aspirations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-cta">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Identify Quick Wins</p>
                      <p className="text-xs text-text-muted">Find low-risk opportunities where AI can deliver immediate value.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-cta">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Build a Roadmap</p>
                      <p className="text-xs text-text-muted">Address gaps systematically before pursuing advanced AI use cases.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-cta">4</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Measure Progress</p>
                      <p className="text-xs text-text-muted">Reassess quarterly to track improvement and adjust strategy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        <PricingComparisonTable />

        <SectionDivider />

        <AgencyPartnerVideos />

        <SectionDivider />

        <ContactForm />
      </main>
      
      <Footer />
    </>
  );
};

export default AIReadinessCalculator;