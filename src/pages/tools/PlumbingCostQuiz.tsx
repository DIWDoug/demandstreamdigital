import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ClipboardCheck, AlertTriangle, CheckCircle, XCircle, Droplets } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

type Question = {
  id: string;
  question: string;
  options: { label: string; score: number; detail: string }[];
};

const questions: Question[] = [
  {
    id: "water-heater-age",
    question: "How old is your water heater?",
    options: [
      { label: "Less than 5 years", score: 0, detail: "Your water heater is in great shape." },
      { label: "5 – 10 years", score: 1, detail: "Getting into the maintenance window." },
      { label: "10 – 15 years", score: 2, detail: "Nearing end of life — start budgeting for replacement." },
      { label: "15+ years or don't know", score: 3, detail: "High risk of failure. Replacement recommended soon." },
    ],
  },
  {
    id: "water-pressure",
    question: "Have you noticed changes in water pressure?",
    options: [
      { label: "Strong and consistent", score: 0, detail: "No issues detected." },
      { label: "Slightly low in some areas", score: 1, detail: "Could indicate mineral buildup." },
      { label: "Noticeably weak throughout", score: 2, detail: "May indicate pipe corrosion or a main line issue." },
      { label: "Fluctuates constantly", score: 3, detail: "Sign of a serious supply or valve problem." },
    ],
  },
  {
    id: "drain-issues",
    question: "How often do your drains clog?",
    options: [
      { label: "Rarely or never", score: 0, detail: "Your drains are healthy." },
      { label: "Once or twice a year", score: 1, detail: "Normal wear — maintenance is helpful." },
      { label: "Monthly", score: 2, detail: "Recurring clogs suggest a deeper issue." },
      { label: "Constantly dealing with clogs", score: 3, detail: "Likely a sewer line or tree root problem." },
    ],
  },
  {
    id: "leaks",
    question: "Do you have any active leaks or water stains?",
    options: [
      { label: "None that I know of", score: 0, detail: "Great — no leaks detected." },
      { label: "Small drip under a sink", score: 1, detail: "Minor fix, but don't let it linger." },
      { label: "Water stains on walls/ceiling", score: 2, detail: "Hidden leak — could be causing mold damage." },
      { label: "Standing water or sewage smell", score: 3, detail: "Emergency situation. Call a plumber now." },
    ],
  },
  {
    id: "hvac-age",
    question: "How old is your HVAC system?",
    options: [
      { label: "Less than 5 years", score: 0, detail: "Modern and efficient." },
      { label: "5 – 10 years", score: 1, detail: "Schedule annual maintenance to extend life." },
      { label: "10 – 15 years", score: 2, detail: "Efficiency declining. Budget for replacement." },
      { label: "15+ years or don't know", score: 3, detail: "Very likely costing you extra in energy bills." },
    ],
  },
  {
    id: "energy-bills",
    question: "Have your energy bills increased recently?",
    options: [
      { label: "No, they're steady", score: 0, detail: "Your systems are running efficiently." },
      { label: "Slight increase", score: 1, detail: "Could be seasonal — worth monitoring." },
      { label: "Noticeable jump (20%+)", score: 2, detail: "Likely an HVAC or insulation issue." },
      { label: "Significantly higher (40%+)", score: 3, detail: "Major efficiency problem — needs attention." },
    ],
  },
  {
    id: "maintenance",
    question: "When was your last professional plumbing/HVAC checkup?",
    options: [
      { label: "Within the last year", score: 0, detail: "You're on top of maintenance!" },
      { label: "1 – 2 years ago", score: 1, detail: "Time for a tune-up." },
      { label: "3+ years ago", score: 2, detail: "Overdue. Preventive maintenance saves money." },
      { label: "Never / can't remember", score: 3, detail: "You're likely missing hidden issues." },
    ],
  },
];

const getScoreResult = (score: number) => {
  const maxScore = questions.length * 3;
  const pct = (score / maxScore) * 100;

  if (pct <= 15) return {
    grade: "A",
    label: "Excellent",
    color: "text-green-600",
    bgColor: "bg-green-50 border-green-200",
    icon: CheckCircle,
    message: "Your home's plumbing and HVAC systems are in great shape! Keep up with annual maintenance to stay ahead.",
    savings: "$0 – $200/yr",
  };
  if (pct <= 35) return {
    grade: "B",
    label: "Good",
    color: "text-accent-blue",
    bgColor: "bg-blue-50 border-blue-200",
    icon: CheckCircle,
    message: "Minor issues detected. A professional checkup could save you from bigger problems down the road.",
    savings: "$200 – $800/yr",
  };
  if (pct <= 55) return {
    grade: "C",
    label: "Needs Attention",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 border-yellow-200",
    icon: AlertTriangle,
    message: "Several areas need attention. You're likely wasting money on inefficiency and risking costly repairs.",
    savings: "$800 – $2,000/yr",
  };
  if (pct <= 75) return {
    grade: "D",
    label: "At Risk",
    color: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-200",
    icon: AlertTriangle,
    message: "Your systems are costing you significantly. Emergency repairs are likely if you don't act soon.",
    savings: "$2,000 – $5,000/yr",
  };
  return {
    grade: "F",
    label: "Critical",
    color: "text-red-600",
    bgColor: "bg-red-50 border-red-200",
    icon: XCircle,
    message: "Multiple critical issues detected. Immediate professional attention recommended to prevent emergencies.",
    savings: "$5,000+/yr",
  };
};

const PlumbingCostQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentQ) / questions.length) * 100;
  const totalScore = Object.values(answers).reduce((sum, s) => sum + s, 0);
  const result = getScoreResult(totalScore);
  const ResultIcon = result.icon;

  const handleAnswer = (questionId: string, score: number) => {
    const newAnswers = { ...answers, [questionId]: score };
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers({});
    setShowResult(false);
  };

  const q = questions[currentQ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>How Much Is Your Plumbing Costing You? | Free Quiz | ServiceForge Digital</title>
        <meta name="description" content="Take this free quiz to find out if your plumbing and HVAC systems are secretly costing you thousands." />
      </Helmet>

      <div className="dark">
        <Header />
      </div>

      <main className="section-light">
        <div className="container mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-2xl mx-auto">
            {!showResult ? (
              <>
                {/* Header */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 text-cta text-sm font-semibold mb-4">
                    <ClipboardCheck className="h-4 w-4" />
                    Free Assessment
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                    How Much Is Your Plumbing Costing You?
                  </h1>
                  <p className="text-text-secondary">Answer {questions.length} quick questions to find out.</p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between text-xs text-text-muted mb-2">
                    <span>Question {currentQ + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% complete</span>
                  </div>
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cta rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Droplets className="h-6 w-6 text-accent-blue flex-shrink-0" />
                    <h2 className="text-xl font-bold">{q.question}</h2>
                  </div>
                  <div className="space-y-3">
                    {q.options.map((opt, i) => {
                      const isSelected = answers[q.id] === opt.score;
                      return (
                        <button
                          key={i}
                          onClick={() => handleAnswer(q.id, opt.score)}
                          className={`w-full p-4 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "border-cta bg-cta/5"
                              : "border-border bg-background hover:border-cta/30 hover:bg-card"
                          }`}
                        >
                          <span className="font-medium">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {currentQ > 0 && (
                    <button
                      onClick={() => setCurrentQ(currentQ - 1)}
                      className="flex items-center gap-2 text-sm text-accent-blue hover:underline mt-6"
                    >
                      <ArrowLeft className="h-4 w-4" /> Previous question
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* Results */
              <div className="text-center">
                <div className="text-center mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">Your Results Are In</h1>
                  <p className="text-text-muted">Here's what your plumbing & HVAC health looks like.</p>
                </div>

                <div className={`border rounded-2xl p-8 sm:p-12 mb-8 ${result.bgColor}`}>
                  <div className="flex justify-center mb-4">
                    <ResultIcon className={`h-16 w-16 ${result.color}`} />
                  </div>
                  <div className={`text-7xl font-bold mb-2 ${result.color}`}>{result.grade}</div>
                  <p className={`text-xl font-semibold mb-4 ${result.color}`}>{result.label}</p>
                  <p className="text-text-secondary max-w-md mx-auto mb-6">{result.message}</p>

                  <div className="bg-card/80 rounded-xl p-5 inline-block">
                    <p className="text-sm text-text-muted mb-1">Estimated Annual Waste</p>
                    <p className="text-2xl font-bold text-cta">{result.savings}</p>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="bg-card border border-border rounded-xl p-6 mb-8 text-left">
                  <h3 className="font-bold mb-4">Your Answers Breakdown</h3>
                  <div className="space-y-3">
                    {questions.map((q) => {
                      const score = answers[q.id] ?? 0;
                      const selectedOpt = q.options.find(o => o.score === score);
                      return (
                        <div key={q.id} className="flex items-start gap-3 text-sm">
                          <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                            score === 0 ? "bg-green-500" : score === 1 ? "bg-blue-500" : score === 2 ? "bg-yellow-500" : "bg-red-500"
                          }`} />
                          <div>
                            <p className="font-medium">{q.question}</p>
                            <p className="text-text-muted">{selectedOpt?.label} — {selectedOpt?.detail}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={reset} className="px-6 py-3 rounded-lg border border-border text-foreground hover:border-accent-blue transition-all font-medium">
                    Retake Quiz
                  </button>
                  <Link to="/contact" className="btn-cta group">
                    Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="dark">
        <Footer />
      </div>
    </div>
  );
};

export default PlumbingCostQuiz;
