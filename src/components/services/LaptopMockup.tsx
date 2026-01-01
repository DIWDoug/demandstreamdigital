const LaptopMockup = () => {
  // Placeholder until user adds their dashboard screenshot
  const dashboardScreenshot = "/placeholder.svg";
  
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            White-Label Reporting Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your clients see your brand, your insights, your value—powered by our infrastructure.
          </p>
        </div>
        
        {/* Laptop Frame */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Laptop Screen */}
            <div className="bg-zinc-800 rounded-t-xl p-2 pt-6 relative">
              {/* Camera notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-700 rounded-full" />
              
              {/* Screen bezel */}
              <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-2xl aspect-[16/10] flex items-center justify-center">
                <img 
                  src={dashboardScreenshot} 
                  alt="White-label reporting dashboard showing organic visibility metrics, ranking positions, and value trends"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Laptop Base */}
            <div className="bg-gradient-to-b from-zinc-700 to-zinc-800 h-4 rounded-b-lg relative">
              {/* Trackpad notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-zinc-600 rounded-b-full" />
            </div>
            
            {/* Laptop Bottom Edge */}
            <div className="bg-zinc-800 h-2 mx-8 rounded-b-xl shadow-lg" />
          </div>
          
          {/* Reflection/Shadow */}
          <div className="h-8 bg-gradient-to-b from-zinc-900/20 to-transparent rounded-full mx-16 blur-xl" />
        </div>
      </div>
    </section>
  );
};

export default LaptopMockup;
