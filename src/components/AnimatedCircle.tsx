import { useEffect, useRef } from 'react';

const AnimatedCircle = () => {
  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Main animated circle */}
      <div className="relative w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
        {/* Outer ring with gradient */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-neon-green via-neon-cyan to-neon-red p-1 glow-accent">
          <div className="w-full h-full rounded-full bg-background"></div>
        </div>
        
        {/* Inner content area */}
        <div className="absolute inset-8 rounded-full bg-card-bg border border-border flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-light mb-2 text-accent">DB</div>
            <div className="text-sm text-muted-foreground">Developer</div>
          </div>
        </div>
      </div>
      
      {/* Animated dots around the circle */}
      <div className="absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const x = 50 + 45 * Math.cos((angle * Math.PI) / 180);
          const y = 50 + 45 * Math.sin((angle * Math.PI) / 180);
          
          return (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-pulse ${
                i % 3 === 0 ? 'bg-neon-green' : 
                i % 3 === 1 ? 'bg-neon-cyan' : 'bg-neon-red'
              }`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${i * 100}ms`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCircle;