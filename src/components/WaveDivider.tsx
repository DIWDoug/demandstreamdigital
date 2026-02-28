interface WaveDividerProps {
  position: 'top' | 'bottom';
  fromColor?: string;
  toColor?: string;
  variant?: 'wave' | 'curve' | 'tilt' | 'layered';
  flip?: boolean;
  animated?: boolean;
}

const WaveDivider = ({ 
  position, 
  fromColor = 'hsl(var(--background))', 
  toColor = 'hsl(var(--surface-dark))',
  variant = 'wave',
  flip = false,
  animated = false,
}: WaveDividerProps) => {
  const isTop = position === 'top';
  
  const getPath = () => {
    switch (variant) {
      case 'curve':
        return "M0,64 C320,120 880,0 1200,64 L1200,120 L0,120 Z";
      case 'tilt':
        return "M0,0 L1200,80 L1200,120 L0,120 Z";
      case 'layered':
        return "M0,64 Q300,120 600,80 T1200,64 L1200,120 L0,120 Z";
      case 'wave':
      default:
        return "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";
    }
  };

  const getHeight = () => {
    switch (variant) {
      case 'tilt':
        return animated ? '100px' : '80px';
      case 'layered':
        return animated ? '90px' : '70px';
      default:
        return animated ? '80px' : '60px';
    }
  };

  // Animated morph path variants for the wave
  const animPath1 = "M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z";
  const animPath2 = "M0,40 C200,20 400,90 600,50 C800,10 1000,80 1200,40 L1200,120 L0,120 Z";
  const animPath3 = "M0,70 C200,40 400,110 600,70 C800,30 1000,90 1200,50 L1200,120 L0,120 Z";

  const animId = `wave-anim-${Math.random().toString(36).substr(2, 6)}`;
  
  return (
    <div 
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none ${isTop ? 'top-0' : 'bottom-0'}`}
      style={{ 
        height: getHeight(),
        transform: `${isTop ? 'rotate(180deg)' : ''} ${flip ? 'scaleX(-1)' : ''}`.trim() || 'none'
      }}
    >
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ display: 'block' }}
      >
        {animated && (
          <defs>
            <style>{`
              @keyframes ${animId}-morph {
                0%   { d: path("${animPath1}"); }
                33%  { d: path("${animPath2}"); }
                66%  { d: path("${animPath3}"); }
                100% { d: path("${animPath1}"); }
              }
              @keyframes ${animId}-glow {
                0%, 100% { opacity: 0.25; }
                50%       { opacity: 0.55; }
              }
              .${animId}-main {
                animation: ${animId}-morph 6s ease-in-out infinite;
              }
              .${animId}-shine {
                animation: ${animId}-glow 3s ease-in-out infinite;
              }
            `}</style>
          </defs>
        )}

        {variant === 'layered' && (
          <>
            <path 
              d="M0,80 Q400,40 800,80 T1200,60 L1200,120 L0,120 Z"
              fill={isTop ? fromColor : toColor}
              opacity="0.3"
            />
            <path 
              d="M0,70 Q350,100 700,60 T1200,70 L1200,120 L0,120 Z"
              fill={isTop ? fromColor : toColor}
              opacity="0.5"
            />
          </>
        )}

        {/* Trailing glow wave behind the main (animated only) */}
        {animated && (
          <path 
            className={`${animId}-shine`}
            d={animPath2}
            fill={isTop ? fromColor : toColor}
            opacity="0"
          />
        )}

        <path 
          className={animated ? `${animId}-main` : undefined}
          d={animated ? animPath1 : getPath()}
          fill={isTop ? fromColor : toColor}
        />
      </svg>

      {/* Animated scroll-cue chevrons */}
      {animated && (
        <div
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 pointer-events-none"
          style={{
            bottom: isTop ? 'auto' : '6px',
            top: isTop ? '6px' : 'auto',
            transform: `translateX(-50%) ${isTop ? 'rotate(180deg)' : ''}`,
          }}
        >
          {[0, 1, 2].map((i) => (
            <svg
              key={i}
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              style={{
                opacity: 0,
                animation: `chevron-fade 1.8s ease-in-out ${i * 0.28}s infinite`,
              }}
            >
              <path d="M1 1L9 9L17 1" stroke={toColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ))}
        </div>
      )}

      {/* Keyframes injected globally for chevrons */}
      {animated && (
        <style>{`
          @keyframes chevron-fade {
            0%   { opacity: 0; transform: translateY(-4px); }
            40%  { opacity: 0.7; transform: translateY(0px); }
            80%  { opacity: 0; transform: translateY(4px); }
            100% { opacity: 0; }
          }
        `}</style>
      )}
    </div>
  );
};

export default WaveDivider;