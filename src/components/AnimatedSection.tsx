import { ReactNode, useRef } from 'react';
import { useAnimeAnimations, useScrollTrigger } from '@/hooks/useAnimeAnimations';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInStagger';
  delay?: number;
  stagger?: boolean;
}

const AnimatedSection = ({ 
  children, 
  className, 
  animationType = 'fadeInUp',
  delay = 0,
  stagger = false
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { presets } = useAnimeAnimations();

  const triggerRef = useScrollTrigger(() => {
    if (!sectionRef.current) return;
    
    if (stagger) {
      const childElements = Array.from(sectionRef.current.children) as HTMLElement[];
      const animation = presets.slideInStagger(childElements, 100);
      if (animation && typeof animation.play === 'function') animation.play();
    } else {
      const animation = presets[animationType](sectionRef.current, delay);
      if (animation && typeof animation.play === 'function') animation.play();
    }
  }, 0.1);

  return (
    <div ref={triggerRef as React.RefObject<HTMLDivElement>} className={cn("opacity-0", className)}>
      <div ref={sectionRef}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;