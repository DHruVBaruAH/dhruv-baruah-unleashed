import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Target, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Curiosity",
      description: "Always learning and exploring new technologies"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Innovation", 
      description: "Building solutions that make a real difference"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Ambition",
      description: "Constantly pushing boundaries and escaping mediocrity"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6">
                About <span className="text-gradient-primary">Me</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm Dhruv Baruah, a final-year B.Tech Computer Science student passionate about AI, 
                emerging tech, and software development. I constantly strive to break free from 
                mediocrity and build impactful solutions that shape the future.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently focused on agentic AI and creating inclusive educational experiences, 
                I believe in the power of technology to transform lives and create meaningful change.
              </p>
            </div>

            {/* Education */}
            <Card className="bg-gradient-card glow-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Educational Background</h3>
                  <p className="text-muted-foreground">Current Academic Journey</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-lg">B.Tech in Computer Science</h4>
                <p className="text-primary">Assam Down Town University</p>
                <p className="text-muted-foreground">2022 – 2026 (Expected)</p>
              </div>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-space font-semibold text-center lg:text-left">
              My Core <span className="text-gradient-secondary">Values</span>
            </h3>
            
            <div className="grid gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card p-6 hover:glow-primary transition-smooth hover-scale"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-secondary rounded-lg text-accent-foreground">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Skills Preview */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                  C Programming
                </Badge>
                <Badge variant="secondary" className="bg-gradient-secondary text-accent-foreground">
                  Python
                </Badge>
                <Badge variant="outline">
                  Machine Learning
                </Badge>
                <Badge variant="outline">
                  Software Development
                </Badge>
                <Badge variant="outline">
                  AI & Data Science
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;