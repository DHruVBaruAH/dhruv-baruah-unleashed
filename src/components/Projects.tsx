import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "EV Usage Detection & Prediction",
      subtitle: "Machine Learning Project",
      description: "Built a comprehensive Python-based model to forecast electric vehicle adoption trends in the USA till 2030. Implemented advanced ML algorithms for data preprocessing, analysis, and visualization of real-world EV usage patterns.",
      tech: ["Python", "Machine Learning", "Data Science", "Pandas", "Scikit-learn", "Matplotlib"],
      features: [
        "Real-world data analysis and preprocessing",
        "Predictive modeling with multiple ML algorithms", 
        "Interactive data visualizations and trends",
        "Forecasting EV adoption patterns through 2030"
      ],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Personalized Learning Platform",
      subtitle: "ADHD-Focused Educational Tool",
      description: "Currently developing an innovative learning platform specifically designed for ADHD students. The platform focuses on creating inclusive educational experiences with personalized learning paths and adaptive content delivery.",
      tech: ["Python", "AI/ML", "Educational Technology", "Inclusive Design", "Web Development"],
      features: [
        "Personalized learning algorithms",
        "ADHD-specific interface design",
        "Adaptive content delivery system",
        "Progress tracking and analytics"
      ],
      status: "In Development",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-secondary rounded-full opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions and impactful applications that showcase my technical expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-gradient-card glow-card p-8 hover:glow-primary transition-smooth relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-secondary opacity-5 rounded-full blur-3xl" />
                
                <div className="relative">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Project Info */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                          {project.icon}
                        </div>
                        <div>
                          <Badge 
                            variant={project.status === "Completed" ? "default" : "secondary"}
                            className={project.status === "Completed" ? 
                              "bg-gradient-secondary text-accent-foreground" : 
                              "bg-gradient-primary text-primary-foreground"
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl lg:text-3xl font-space font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="outline"
                              className="hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button 
                          variant="default" 
                          className="bg-gradient-primary hover:glow-primary transition-smooth"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                        
                        <Button 
                          variant="outline"
                          className="hover:bg-gradient-card transition-smooth"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Project Features */}
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold">Key Features</h4>
                      
                      <div className="space-y-4">
                        {project.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="flex items-start gap-3 p-3 bg-darker-surface rounded-lg border border-border"
                          >
                            <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground">{feature}</p>
                          </div>
                        ))}
                      </div>

                      {/* Project Metrics or Additional Info */}
                      <Card className="bg-darker-surface p-4 border-border">
                        <h5 className="font-semibold mb-2">Project Impact</h5>
                        <p className="text-sm text-muted-foreground">
                          {project.status === "Completed" ? 
                            "Successfully implemented predictive modeling with high accuracy forecasting capabilities." :
                            "Ongoing development with focus on inclusive design and accessibility features."
                          }
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-card p-8 glow-card">
              <h3 className="text-2xl font-space font-bold mb-4">
                Interested in <span className="text-gradient-primary">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new projects, innovative ideas, and opportunities to create impactful solutions together.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:glow-primary transition-smooth"
              >
                Let's Build Something Amazing
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;