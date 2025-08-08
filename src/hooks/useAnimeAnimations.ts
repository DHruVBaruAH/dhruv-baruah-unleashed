import { useEffect, useRef, useCallback } from 'react';
import anime from 'animejs';

export interface AnimationPresets {
  fadeInUp: (targets: string | HTMLElement | HTMLElement[], delay?: number) => any;
  fadeInDown: (targets: string | HTMLElement | HTMLElement[], delay?: number) => any;
  fadeInLeft: (targets: string | HTMLElement | HTMLElement[], delay?: number) => any;
  fadeInRight: (targets: string | HTMLElement | HTMLElement[], delay?: number) => any;
  scaleIn: (targets: string | HTMLElement | HTMLElement[], delay?: number) => any;
  slideInStagger: (targets: string | HTMLElement | HTMLElement[], stagger?: number) => any;
  typewriter: (targets: string | HTMLElement, text: string) => any;
  morphShape: (targets: string | HTMLElement, morphPath: string) => any;
  floatingAnimation: (targets: string | HTMLElement) => any;
  pulseGlow: (targets: string | HTMLElement) => any;
}

export const useAnimeAnimations = () => {
  const animationsRef = useRef<any[]>([]);

  const addAnimation = useCallback((animation: any) => {
    animationsRef.current.push(animation);
  }, []);

  const clearAnimations = useCallback(() => {
    animationsRef.current.forEach(animation => {
      if (animation.pause) animation.pause();
    });
    animationsRef.current = [];
  }, []);

  const presets: AnimationPresets = {
    fadeInUp: (targets, delay = 0) => {
      const animation = anime({
        targets,
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        delay,
        easing: 'easeOutExpo',
        autoplay: false
      });
      addAnimation(animation);
      return animation;
    },

    fadeInDown: (targets, delay = 0) => {
      const animation = anime({
        targets,
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        delay,
        easing: 'easeOutExpo',
        autoplay: false
      });
      addAnimation(animation);
      return animation;
    },

    fadeInLeft: (targets, delay = 0) => {
      const animation = anime({
        targets,
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 800,
        delay,
        easing: 'easeOutExpo',
        autoplay: false
      });
      addAnimation(animation);
      return animation;
    },

    fadeInRight: (targets, delay = 0) => {
      const animation = anime({
        targets,
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 800,
        delay,
        easing: 'easeOutExpo',
        autoplay: false
      });
      addAnimation(animation);
      return animation;
    },

    scaleIn: (targets, delay = 0) => {
      const animation = anime({
        targets,
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 600,
        delay,
        easing: 'easeOutBack',
        autoplay: false
      });
      addAnimation(animation);
      return animation;
    },

    slideInStagger: (targets, stagger = 100) => {
      const animation = anime({
        targets,
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(stagger),
        easing: 'easeOutExpo',
        autoplay: false
      });
      addAnimation(animation);
      return animation;
    },

    typewriter: (targets, text) => {
      const element = typeof targets === 'string' ? document.querySelector(targets) : targets;
      if (element) {
        (element as HTMLElement).textContent = '';
        const chars = text.split('');
        
        const animation = anime({
          targets: { progress: 0 },
          progress: 100,
          duration: 50,
          easing: 'linear',
          update: function(anim) {
            const progress = Math.round((anim.animatables[0].target as any).progress);
            const charsToShow = Math.ceil(chars.length * progress / 100);
            (element as HTMLElement).textContent = chars.slice(0, charsToShow).join('');
          },
          autoplay: false
        });
        addAnimation(animation);
        return animation;
      }
      return anime({ targets: [], autoplay: false });
    },

    morphShape: (targets, morphPath) => {
      const animation = anime({
        targets,
        d: morphPath,
        duration: 1200,
        easing: 'easeInOutQuart',
        autoplay: false
      });
      addAnimation(animation);
      return animation;
    },

    floatingAnimation: (targets) => {
      const animation = anime({
        targets,
        translateY: [-8, 8],
        duration: 3000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        autoplay: false
      });
      addAnimation(animation);
      return animation;
    },

    pulseGlow: (targets) => {
      const animation = anime({
        targets,
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
        duration: 2000,
        loop: true,
        easing: 'easeInOutSine',
        autoplay: false
      });
      addAnimation(animation);
      return animation;
    }
  };

  useEffect(() => {
    return () => {
      clearAnimations();
    };
  }, [clearAnimations]);

  return { presets, addAnimation, clearAnimations };
};

export const useScrollTrigger = (callback: () => void, threshold = 0.1) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [callback, threshold]);

  return elementRef;
};

export const useMouseTracker = () => {
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};