import { Helmet } from "react-helmet-async";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CalculatorTabs from "@/components/services/CalculatorTabs";
import { ArrowRight, Calculator, TrendingUp, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AgencyCalculator = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Demonstrate Value",
      description: "Show clients exactly how your services translate to revenue growth."
    },
    {
      icon: DollarSign,
      title: "Protect Your Margins",
      description: "Calculate your pricing with our OEM rates and set your own MSRP."
    },
    {
      icon: Users,
      title: "Close More Deals",
      description: "Use data-driven projections to build confidence in sales conversations."
    }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Agency Partner Calculator | ROI & Investment Tools | Dialed-In Web</title>
        <meta 
          name="description" 
          content="Free agency partner tools to calculate client ROI and estimate monthly investment for white-label inbound marketing services. Built for agencies selling local marketing." 
        />
        <link rel="canonical" href="https://dialedinweb.com/agency-calculator" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-surface-dark relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-accent-blue/20 to-transparent blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-cta/15 to-transparent blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-6">
              <Calculator className="h-4 w-4" />
              Agency Partner Tools
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Calculate Client Value.<br />
              <span className="text-accent-blue">Close More Deals.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              Two powerful calculators designed for agency partners. Demonstrate ROI to prospects 
              and estimate monthly investment based on real market data.
            </p>
            
            {/* Benefit Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-surface-elevated/50 border border-border/30 backdrop-blur-sm text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-5 w-5 text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-text-secondary">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Calculator Section */}
      <section className="py-16 lg:py-24 bg-surface-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <CalculatorTabs />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-surface-elevated relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Partner?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              These calculators give you a starting point. Let's have a conversation about 
              how we can help you scale your agency with white-label fulfillment.
            </p>
            <Link 
              to="/#contact" 
              className="btn-cta inline-flex items-center gap-2"
            >
              Start a Conversation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AgencyCalculator;