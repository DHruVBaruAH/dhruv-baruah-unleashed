import { Mail, Github, Linkedin } from "lucide-react";
import AnimatedCircle from './AnimatedCircle';
import InteractiveButton from './InteractiveButton';
import { useEffect, useRef } from 'react';
import { useAnimeAnimations, useScrollTrigger } from '@/hooks/useAnimeAnimations';

const Hero = () => {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const { presets } = useAnimeAnimations();

  const triggerRef = useScrollTrigger(() => {
    // Trigger animations when hero section comes into view
    if (subtitleRef.current) presets.fadeInUp(subtitleRef.current, 0).play();
    if (mainTitleRef.current) presets.fadeInUp(mainTitleRef.current, 200).play();
    if (descriptionRef.current) presets.fadeInUp(descriptionRef.current, 400).play();
    if (buttonsRef.current) presets.fadeInUp(buttonsRef.current, 600).play();
    if (socialRef.current) presets.fadeInUp(socialRef.current, 800).play();
  });

  useEffect(() => {
    // Initial page load animations
    setTimeout(() => {
      if (subtitleRef.current) presets.fadeInUp(subtitleRef.current, 0).play();
      if (mainTitleRef.current) {
        // Typewriter effect for main title
        const titleText = "All-in-one Software developer.";
        if (presets.typewriter) {
          presets.typewriter(mainTitleRef.current, titleText).play();
        }
      }
      if (descriptionRef.current) presets.fadeInUp(descriptionRef.current, 1000).play();
      if (buttonsRef.current) presets.fadeInUp(buttonsRef.current, 1200).play();
      if (socialRef.current) presets.fadeInUp(socialRef.current, 1400).play();
    }, 500);
  }, [presets]);

  return <section ref={triggerRef} id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <p ref={subtitleRef} className="text-sm text-muted-foreground font-light opacity-0">
                Software Developer & Tech Enthusiast
              </p>
              <h1 ref={mainTitleRef} className="text-4xl md:text-6xl font-light text-accent min-h-[200px]">
              </h1>
              <p ref={descriptionRef} className="text-lg text-muted-foreground font-light max-w-md opacity-0">
                A fast and versatile developer to{' '}
                <span className="text-accent">animate</span> ideas.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0">
              <InteractiveButton variant="outline" size="lg" className="anime-card font-light">
                View Portfolio
              </InteractiveButton>
              <InteractiveButton variant="ghost" size="lg" className="font-light text-accent hover:text-accent" glowEffect={false}>
                Learn more →
              </InteractiveButton>
            </div>
            
            {/* Social Links */}
            <div ref={socialRef} className="flex gap-6 justify-center lg:justify-start opacity-0">
              <a href="mailto:dhruvbaruah.1234@gmail.com" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right content - Animated Circle */}
          <div className="flex justify-center lg:justify-end">
            <AnimatedCircle />
          </div>
        </div>
      </div>
      
      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-border"></div>
      </div>
    </section>;
};
export default Hero;