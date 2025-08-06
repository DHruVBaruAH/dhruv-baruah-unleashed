import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 border-t border-border relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-primary opacity-5 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-space font-bold text-gradient-primary">
              Dhruv Baruah
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Software Developer & Tech Enthusiast passionate about building 
              innovative solutions that make a real impact.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="mailto:dhruvbaruah.1234@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <div className="space-y-2">
              <div className="text-muted-foreground">Web Development</div>
              <div className="text-muted-foreground">Mobile Apps</div>
              <div className="text-muted-foreground">AI & ML Solutions</div>
              <div className="text-muted-foreground">Data Analysis</div>
              <div className="text-muted-foreground">Tech Consulting</div>
            </div>
          </div>

          {/* Education & Status */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Current Status</h4>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-muted-foreground">Education</div>
                <div className="font-medium">B.Tech CSE, 2026</div>
                <div className="text-sm text-muted-foreground">Assam Down Town University</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="text-sm text-neon-green">Available for projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Dhruv Baruah. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and modern technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;