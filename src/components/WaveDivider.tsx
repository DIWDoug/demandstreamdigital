interface WaveDividerProps {
  position: 'top' | 'bottom';
  fromColor?: string;
  toColor?: string;
  variant?: 'wave' | 'curve' | 'tilt' | 'layered';
  flip?: boolean;
}

const WaveDivider = ({ 
  position, 
  fromColor = 'hsl(var(--background))', 
  toColor = 'hsl(var(--surface-dark))',
  variant = 'wave',
  flip = false
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
        return '80px';
      case 'layered':
        return '70px';
      default:
        return '60px';
    }
  };
  
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
        {variant === 'layered' && (
          <>
            {/* Background layer */}
            <path 
              d="M0,80 Q400,40 800,80 T1200,60 L1200,120 L0,120 Z"
              fill={isTop ? fromColor : toColor}
              opacity="0.3"
            />
            {/* Middle layer */}
            <path 
              d="M0,70 Q350,100 700,60 T1200,70 L1200,120 L0,120 Z"
              fill={isTop ? fromColor : toColor}
              opacity="0.5"
            />
          </>
        )}
        <path 
          d={getPath()}
          fill={isTop ? fromColor : toColor}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;