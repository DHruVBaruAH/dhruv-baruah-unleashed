import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import AnimatedCircle from './AnimatedCircle';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground font-light animate-fade-in">
                Software Developer & Tech Enthusiast
              </p>
              <h1 className="text-4xl md:text-6xl font-light animate-slide-up">
                All-in-one
                <br />
                <span className="text-accent">Software
              </span>
                <br />
                developer.
              </h1>
              <p className="text-lg text-muted-foreground font-light max-w-md animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
                A fast and versatile developer to{' '}
                <span className="text-accent">animate</span> ideas.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <Button variant="outline" size="lg" className="anime-card font-light">
                View Portfolio
              </Button>
              <Button variant="ghost" size="lg" className="font-light text-accent hover:text-accent">
                Learn more →
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <a href="mailto:dhruvbaruah.1234@gmail.com" className="text-muted-foreground hover:text-accent transition-fast">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" className="text-muted-foreground hover:text-accent transition-fast">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" className="text-muted-foreground hover:text-accent transition-fast">
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