import { ReactNode, useRef, useEffect } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import * as anime from 'animejs';
import { cn } from '@/lib/utils';

interface InteractiveButtonProps extends ButtonProps {
  children: ReactNode;
  magneticEffect?: boolean;
  glowEffect?: boolean;
}

const InteractiveButton = ({ 
  children, 
  className, 
  magneticEffect = true,
  glowEffect = true,
  ...props 
}: InteractiveButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let currentAnimation: any = null;

    const handleMouseEnter = () => {
      if (glowRef.current && glowEffect) {
        anime({
          targets: glowRef.current,
          scale: [0, 1],
          opacity: [0, 0.6],
          duration: 300,
          easing: 'easeOutQuart'
        });
      }

      anime({
        targets: button,
        scale: 1.05,
        duration: 300,
        easing: 'easeOutQuart'
      });
    };

    const handleMouseLeave = () => {
      if (currentAnimation) {
        currentAnimation.pause();
      }

      if (glowRef.current && glowEffect) {
        anime({
          targets: glowRef.current,
          scale: [1, 0],
          opacity: [0.6, 0],
          duration: 300,
          easing: 'easeOutQuart'
        });
      }

      anime({
        targets: button,
        scale: 1,
        translateX: 0,
        translateY: 0,
        duration: 600,
        easing: 'easeOutElastic(1, .6)'
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!magneticEffect) return;

      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = Math.max(rect.width, rect.height) / 2;
      
      if (distance < maxDistance) {
        const strength = (maxDistance - distance) / maxDistance;
        const moveX = (x / maxDistance) * 10 * strength;
        const moveY = (y / maxDistance) * 10 * strength;

        if (currentAnimation) {
          currentAnimation.pause();
        }

        currentAnimation = anime({
          targets: button,
          translateX: moveX,
          translateY: moveY,
          duration: 300,
          easing: 'easeOutQuart'
        });
      }
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mousemove', handleMouseMove);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousemove', handleMouseMove);
      if (currentAnimation) {
        currentAnimation.pause();
      }
    };
  }, [magneticEffect, glowEffect]);

  return (
    <div className="relative inline-block">
      {glowEffect && (
        <div
          ref={glowRef}
          className="absolute inset-0 bg-accent/20 rounded-md blur-md scale-0 opacity-0"
          style={{ zIndex: -1 }}
        />
      )}
      <Button
        ref={buttonRef}
        className={cn("relative z-10 transition-all duration-300", className)}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
};

export default InteractiveButton;