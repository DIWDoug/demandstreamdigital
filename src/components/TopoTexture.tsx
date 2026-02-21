interface TopoTextureProps {
  opacity?: number;
  className?: string;
}

const TopoTexture = ({ opacity = 0.06, className = '' }: TopoTextureProps) => {
  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Soft warm wash — upper area, drifts right */}
      <div
        className="absolute rounded-full blur-3xl animate-stream-drift"
        style={{
          width: '65%',
          height: '60%',
          top: '-5%',
          left: '-10%',
          background: `radial-gradient(ellipse at center, hsla(213, 20%, 86%, ${opacity * 14}) 0%, transparent 70%)`,
        }}
      />

      {/* Cool accent — right side, drifts with delay */}
      <div
        className="absolute rounded-full blur-3xl animate-stream-drift"
        style={{
          width: '50%',
          height: '55%',
          top: '15%',
          right: '-8%',
          background: `radial-gradient(ellipse at center, hsla(210, 18%, 82%, ${opacity * 12}) 0%, transparent 70%)`,
          animationDelay: '-20s',
          animationDirection: 'reverse',
        }}
      />

      {/* Subtle depth — bottom center, offset timing */}
      <div
        className="absolute rounded-full blur-3xl animate-stream-drift"
        style={{
          width: '45%',
          height: '45%',
          bottom: '0%',
          left: '25%',
          background: `radial-gradient(ellipse at center, hsla(215, 15%, 89%, ${opacity * 10}) 0%, transparent 70%)`,
          animationDelay: '-40s',
        }}
      />
    </div>
  );
};

export default TopoTexture;
