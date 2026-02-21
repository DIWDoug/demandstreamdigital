interface StreamTextureProps {
  variant?: 'light' | 'dark';
  opacity?: number;
  className?: string;
}

const StreamTexture = ({ variant = 'light', opacity = 0.06, className = '' }: StreamTextureProps) => {
  const strokeColor = variant === 'dark' 
    ? 'hsl(210, 60%, 70%)' 
    : 'hsl(213, 64%, 16%)';

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}
      aria-hidden="true"
    >
      <svg 
        className="absolute w-[200%] h-full left-[-50%] top-0 animate-stream-drift"
        viewBox="0 0 2400 1000" 
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Primary flowing stream lines */}
        <path 
          d="M-100,200 C200,180 400,300 700,250 S1100,150 1400,220 S1800,320 2100,200 S2400,280 2500,250"
          stroke={strokeColor}
          strokeWidth="1.5"
          opacity={opacity}
          strokeLinecap="round"
        />
        <path 
          d="M-100,240 C250,220 450,340 750,280 S1150,170 1450,250 S1850,350 2150,230 S2450,310 2500,280"
          stroke={strokeColor}
          strokeWidth="1"
          opacity={opacity * 0.7}
          strokeLinecap="round"
        />
        <path 
          d="M-100,270 C300,250 500,370 800,310 S1200,200 1500,280 S1900,370 2200,260 S2500,340 2600,310"
          stroke={strokeColor}
          strokeWidth="0.8"
          opacity={opacity * 0.5}
          strokeLinecap="round"
        />

        {/* Secondary stream cluster - offset */}
        <path 
          d="M-50,500 C300,480 550,600 850,540 S1250,430 1550,510 S1950,620 2250,490 S2500,570 2600,540"
          stroke={strokeColor}
          strokeWidth="1.2"
          opacity={opacity * 0.8}
          strokeLinecap="round"
        />
        <path 
          d="M-50,530 C350,510 600,630 900,570 S1300,450 1600,540 S2000,650 2300,520 S2550,600 2650,570"
          stroke={strokeColor}
          strokeWidth="0.8"
          opacity={opacity * 0.5}
          strokeLinecap="round"
        />
        <path 
          d="M-50,555 C370,535 620,650 920,590 S1320,470 1620,560 S2020,670 2320,540 S2570,620 2670,590"
          stroke={strokeColor}
          strokeWidth="0.6"
          opacity={opacity * 0.35}
          strokeLinecap="round"
        />

        {/* Tertiary accent stream */}
        <path 
          d="M-100,780 C200,760 500,880 800,820 S1200,710 1500,790 S1900,890 2200,770 S2500,850 2600,820"
          stroke={strokeColor}
          strokeWidth="1"
          opacity={opacity * 0.6}
          strokeLinecap="round"
        />
        <path 
          d="M-100,810 C250,790 550,910 850,850 S1250,740 1550,820 S1950,920 2250,800 S2550,880 2650,850"
          stroke={strokeColor}
          strokeWidth="0.6"
          opacity={opacity * 0.35}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default StreamTexture;
