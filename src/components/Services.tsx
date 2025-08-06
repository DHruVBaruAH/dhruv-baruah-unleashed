import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Brain, Database, Palette, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Building responsive, scalable web applications with modern technologies and clean, efficient code.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Clean Code"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Creating intuitive mobile applications with focus on user experience and cross-platform compatibility.",
      features: ["Cross-Platform", "Native Performance", "User-Centric Design", "App Store Optimization"]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent solutions using ML algorithms, data analysis, and predictive modeling.",
      features: ["Predictive Analytics", "Data Processing", "Algorithm Development", "Model Training"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analysis",
      description: "Extracting insights from complex datasets through advanced analytics and visualization techniques.",
      features: ["Data Visualization", "Statistical Analysis", "Report Generation", "Trend Identification"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Consultation",
      description: "Designing user-centered interfaces that are both beautiful and functional for optimal user experience.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Tech Innovation",
      description: "Exploring emerging technologies and innovative solutions to solve complex business challenges.",
      features: ["Emerging Tech", "Innovation Strategy", "Proof of Concepts", "Technology Consulting"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-secondary rounded-full opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6">
            What I Can Do <span className="text-gradient-primary">for You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer professional software development services, focusing on building clean, 
            scalable, and efficient solutions for web and mobile platforms.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-gradient-card glow-card p-6 hover:glow-primary transition-smooth hover-scale group relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground w-fit group-hover:glow-primary transition-smooth">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-space font-semibold">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-space font-bold mb-4">
                My <span className="text-gradient-secondary">Process</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to deliver high-quality solutions that meet your needs and exceed expectations
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your requirements, goals, and project scope"
                },
                {
                  step: "02", 
                  title: "Planning",
                  description: "Creating detailed project roadmap and technical architecture"
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building your solution with clean, scalable, and efficient code"
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "Testing, deployment, and ongoing support for your project"
                }
              ].map((process, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card p-6 text-center hover:glow-primary transition-smooth relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary opacity-50" />
                  
                  <div className="mb-4">
                    <span className="text-3xl font-space font-bold text-gradient-primary">
                      {process.step}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-card p-8 glow-card max-w-4xl mx-auto">
              <h3 className="text-3xl font-space font-bold mb-4">
                Ready to Start Your <span className="text-gradient-primary">Project?</span>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your ideas and create something amazing together. 
                I'm here to turn your vision into reality with cutting-edge technology and innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:glow-primary transition-smooth"
                >
                  Start a Project
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover:bg-gradient-card transition-smooth"
                >
                  Schedule Consultation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;