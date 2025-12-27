const SubtleOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Green orb */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-cta/5 blur-3xl animate-float"
        style={{
          top: '20%',
          left: '10%',
          animationDuration: '20s',
        }}
      />
      {/* Blue orb */}
      <div 
        className="absolute w-48 h-48 rounded-full bg-accent-blue/5 blur-3xl animate-float"
        style={{
          bottom: '20%',
          right: '15%',
          animationDuration: '25s',
          animationDelay: '5s',
        }}
      />
    </div>
  );
};

export default SubtleOrbs;
