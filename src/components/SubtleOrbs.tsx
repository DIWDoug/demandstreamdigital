import { forwardRef } from "react";

interface SubtleOrbsProps {
  variant?: 'default' | 'top-right' | 'bottom-left' | 'center' | 'scattered';
}

const SubtleOrbs = forwardRef<HTMLDivElement, SubtleOrbsProps>(
  ({ variant = 'default' }, ref) => {
    const getOrbStyles = () => {
      switch (variant) {
        case 'top-right':
          return {
            green: { top: '10%', right: '5%', left: 'auto' },
            blue: { bottom: '30%', left: '10%', right: 'auto' },
          };
        case 'bottom-left':
          return {
            green: { bottom: '15%', left: '5%', top: 'auto' },
            blue: { top: '20%', right: '10%', left: 'auto' },
          };
        case 'center':
          return {
            green: { top: '40%', left: '30%' },
            blue: { top: '50%', right: '25%', left: 'auto' },
          };
        case 'scattered':
          return {
            green: { top: '5%', right: '20%', left: 'auto' },
            blue: { bottom: '10%', left: '5%', right: 'auto' },
          };
        default:
          return {
            green: { top: '20%', left: '10%' },
            blue: { bottom: '20%', right: '15%', left: 'auto' },
          };
      }
    };

    const styles = getOrbStyles();

    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Green orb */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-cta/20 blur-3xl animate-float"
          style={{
            ...styles.green,
            animationDuration: '20s',
          }}
        />
        {/* Blue orb */}
        <div 
          className="absolute w-72 h-72 rounded-full bg-accent-blue/15 blur-3xl animate-float"
          style={{
            ...styles.blue,
            animationDuration: '25s',
            animationDelay: '5s',
          }}
        />
      </div>
    );
  }
);

SubtleOrbs.displayName = "SubtleOrbs";

export default SubtleOrbs;
