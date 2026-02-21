interface TopoTextureProps {
  opacity?: number;
  className?: string;
}

const TopoTexture = ({ opacity = 0.06, className = '' }: TopoTextureProps) => {
  const strokeColor = 'hsl(213, 64%, 16%)';

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}
      aria-hidden="true"
    >
      <svg 
        className="absolute w-full h-full"
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Outer contour rings */}
        <path 
          d="M200,400 C200,250 350,150 550,180 S850,100 1000,250 S1100,500 900,600 S550,700 350,620 S200,550 200,400Z"
          stroke={strokeColor}
          strokeWidth="0.8"
          opacity={opacity}
          strokeLinecap="round"
        />
        <path 
          d="M250,410 C250,280 380,190 560,210 S830,140 970,270 S1060,490 880,580 S560,660 380,590 S250,530 250,410Z"
          stroke={strokeColor}
          strokeWidth="0.7"
          opacity={opacity * 0.8}
          strokeLinecap="round"
        />
        <path 
          d="M300,415 C300,310 400,230 570,240 S810,180 940,290 S1020,470 860,555 S570,625 410,565 S300,510 300,415Z"
          stroke={strokeColor}
          strokeWidth="0.6"
          opacity={opacity * 0.6}
          strokeLinecap="round"
        />
        <path 
          d="M350,420 C350,340 430,270 580,270 S790,220 910,310 S980,455 840,530 S580,590 440,540 S350,490 350,420Z"
          stroke={strokeColor}
          strokeWidth="0.5"
          opacity={opacity * 0.5}
          strokeLinecap="round"
        />

        {/* Second cluster - top right */}
        <path 
          d="M700,100 C750,40 900,20 1050,80 S1200,200 1150,300 S1000,350 850,300 S700,200 700,100Z"
          stroke={strokeColor}
          strokeWidth="0.7"
          opacity={opacity * 0.7}
          strokeLinecap="round"
        />
        <path 
          d="M740,120 C780,70 890,55 1020,100 S1160,210 1120,290 S990,330 870,285 S740,190 740,120Z"
          stroke={strokeColor}
          strokeWidth="0.5"
          opacity={opacity * 0.5}
          strokeLinecap="round"
        />

        {/* Third cluster - bottom left */}
        <path 
          d="M-50,550 C0,480 120,430 250,470 S400,550 380,650 S250,740 120,700 S-50,630 -50,550Z"
          stroke={strokeColor}
          strokeWidth="0.7"
          opacity={opacity * 0.6}
          strokeLinecap="round"
        />
        <path 
          d="M0,560 C40,510 140,470 250,500 S370,560 355,640 S250,710 140,680 S0,630 0,560Z"
          stroke={strokeColor}
          strokeWidth="0.5"
          opacity={opacity * 0.4}
          strokeLinecap="round"
        />

        {/* Scattered single contour lines for depth */}
        <path 
          d="M900,500 C920,460 1000,440 1080,470 S1150,540 1100,590 S980,610 920,570 S900,540 900,500Z"
          stroke={strokeColor}
          strokeWidth="0.5"
          opacity={opacity * 0.4}
          strokeLinecap="round"
        />
        <path 
          d="M50,200 C70,160 150,140 230,170 S300,240 260,290 S150,310 80,270 S50,240 50,200Z"
          stroke={strokeColor}
          strokeWidth="0.5"
          opacity={opacity * 0.35}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default TopoTexture;
