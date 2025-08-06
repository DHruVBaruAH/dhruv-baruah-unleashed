import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-secondary rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-card rounded-full text-sm font-medium border border-border">
                👋 Welcome to my digital space
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-space font-bold leading-tight mb-6">
              <span className="text-gradient-primary">Dhruv</span>{" "}
              <span className="text-foreground">Baruah</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-4 font-inter">
              Software Developer & Tech Enthusiast
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Driven by Innovation. Empowered by Code. Building impactful solutions that shape the future.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:glow-primary transition-smooth text-lg px-8"
              >
                View Portfolio
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-gradient-card transition-smooth text-lg px-8"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="mailto:dhruvbaruah.1234@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image Placeholder */}
          <div className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-30 animate-glow-pulse" />
              
              {/* Profile image container */}
              <div className="relative w-full h-full bg-gradient-card rounded-full border-2 border-border overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-secondary opacity-20 flex items-center justify-center">
                  <span className="text-6xl font-space font-bold text-muted-foreground">DB</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full opacity-80 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-secondary rounded-full opacity-80 animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;