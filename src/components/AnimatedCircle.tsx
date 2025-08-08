import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useAnimeAnimations, useMouseTracker } from '@/hooks/useAnimeAnimations';

const AnimatedCircle = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { presets } = useAnimeAnimations();
  const mousePosition = useMouseTracker();

  useEffect(() => {
    if (!containerRef.current || !circleRef.current || !dotsRef.current) return;

    // Main circle rotation with smooth easing
    const circleRotation = anime({
      targets: circleRef.current,
      rotate: 360,
      duration: 20000,
      loop: true,
      easing: 'linear'
    });

    // Floating animation for the entire container
    presets.floatingAnimation(containerRef.current).play();

    // Animate dots with staggered appearance
    const dots = dotsRef.current.children;
    anime({
      targets: dots,
      scale: [0, 1],
      opacity: [0, 1],
      duration: 800,
      delay: anime.stagger(50),
      easing: 'easeOutBack'
    });

    // Pulsing dots animation
    anime({
      targets: dots,
      scale: [1, 1.2, 1],
      duration: 2000,
      delay: anime.stagger(100, {start: 0}),
      loop: true,
      easing: 'easeInOutSine'
    });

    // Content animation
    if (contentRef.current) {
      presets.scaleIn(contentRef.current, 500).play();
    }

    // Mouse interaction
    const handleMouseMove = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (mousePosition.current.x - centerX) / 20;
      const deltaY = (mousePosition.current.y - centerY) / 20;
      
      anime({
        targets: containerRef.current,
        translateX: deltaX,
        translateY: deltaY,
        duration: 1000,
        easing: 'easeOutQuart'
      });
    };

    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      
      anime({
        targets: containerRef.current,
        translateX: 0,
        translateY: 0,
        duration: 1000,
        easing: 'easeOutQuart'
      });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      circleRotation.pause();
      container?.removeEventListener('mousemove', handleMouseMove);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [presets, mousePosition]);

  return (
    <div ref={containerRef} className="relative w-96 h-96 mx-auto cursor-pointer">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Main animated circle */}
      <div ref={circleRef} className="relative w-full h-full">
        {/* Outer ring with gradient */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-neon-green via-neon-cyan to-neon-red p-1 glow-accent">
          <div className="w-full h-full rounded-full bg-background"></div>
        </div>
        
        {/* Inner content area */}
        <div className="absolute inset-8 rounded-full bg-card-bg border border-border flex items-center justify-center">
          <div ref={contentRef} className="text-center opacity-0">
            <div className="text-6xl font-light mb-2 text-accent">DB</div>
            <div className="text-sm text-muted-foreground">Developer</div>
          </div>
        </div>
      </div>
      
      {/* Animated dots around the circle */}
      <div ref={dotsRef} className="absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const x = 50 + 45 * Math.cos((angle * Math.PI) / 180);
          const y = 50 + 45 * Math.sin((angle * Math.PI) / 180);
          
          return (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full opacity-0 ${
                i % 3 === 0 ? 'bg-neon-green' : 
                i % 3 === 1 ? 'bg-neon-cyan' : 'bg-neon-red'
              }`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCircle;