import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "dhruvbaruah.1234@gmail.com",
      link: "mailto:dhruvbaruah.1234@gmail.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "#"
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "View my code",
      link: "#"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Assam, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-secondary rounded-full opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat about technology? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card glow-card p-8">
              <h3 className="text-2xl font-space font-semibold mb-6">
                Send me a <span className="text-gradient-primary">message</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-darker-surface border-border focus:border-primary transition-smooth"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-darker-surface border-border focus:border-primary transition-smooth"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-darker-surface border-border focus:border-primary transition-smooth resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:glow-primary transition-smooth"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-space font-semibold mb-6">
                  Get in <span className="text-gradient-secondary">touch</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, innovative projects, 
                  and ways to leverage technology for positive impact. Whether you have 
                  a specific project in mind or just want to connect, feel free to reach out!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="bg-gradient-card p-4 hover:glow-primary transition-smooth"
                  >
                    {info.link ? (
                      <a 
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground group-hover:glow-primary transition-smooth">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <p className="text-muted-foreground group-hover:text-primary transition-smooth">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-gradient-secondary rounded-lg text-accent-foreground">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              {/* Quick Response */}
              <Card className="bg-gradient-card p-6 glow-card">
                <h4 className="font-semibold mb-3">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  feel free to mention it in your message for priority handling.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-sm text-neon-green">Currently available for new projects</span>
                </div>
              </Card>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="font-semibold mb-4">Follow my journey</h4>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href="mailto:dhruvbaruah.1234@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;