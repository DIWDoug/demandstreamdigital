interface StreamTextureProps {
  variant?: 'light' | 'dark';
  opacity?: number;
  className?: string;
}

const StreamTexture = ({ variant = 'light', opacity = 0.06, className = '' }: StreamTextureProps) => {
  const isDark = variant === 'dark';

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Large ambient gradient blob — top left, slow drift */}
      <div
        className="absolute rounded-full blur-3xl animate-stream-drift"
        style={{
          width: '60%',
          height: '70%',
          top: '-10%',
          left: '-15%',
          background: isDark
            ? `radial-gradient(ellipse at center, hsla(213, 50%, 18%, ${opacity * 6}) 0%, transparent 70%)`
            : `radial-gradient(ellipse at center, hsla(213, 20%, 88%, ${opacity * 8}) 0%, transparent 70%)`,
        }}
      />

      {/* Medium blob — center right, reverse drift */}
      <div
        className="absolute rounded-full blur-3xl animate-stream-drift"
        style={{
          width: '50%',
          height: '60%',
          top: '20%',
          right: '-10%',
          background: isDark
            ? `radial-gradient(ellipse at center, hsla(210, 45%, 22%, ${opacity * 5}) 0%, transparent 70%)`
            : `radial-gradient(ellipse at center, hsla(210, 15%, 84%, ${opacity * 7}) 0%, transparent 70%)`,
          animationDelay: '-20s',
          animationDirection: 'reverse',
        }}
      />

      {/* Small accent blob — bottom left, offset timing */}
      <div
        className="absolute rounded-full blur-3xl animate-stream-drift"
        style={{
          width: '40%',
          height: '50%',
          bottom: '-5%',
          left: '10%',
          background: isDark
            ? `radial-gradient(ellipse at center, hsla(215, 55%, 15%, ${opacity * 4}) 0%, transparent 70%)`
            : `radial-gradient(ellipse at center, hsla(215, 18%, 90%, ${opacity * 6}) 0%, transparent 70%)`,
          animationDelay: '-40s',
        }}
      />
    </div>
  );
};

export default StreamTexture;
