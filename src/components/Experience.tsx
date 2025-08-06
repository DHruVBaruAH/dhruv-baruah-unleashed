import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Code, BookOpen } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Co-Head, Android Development",
      company: "Google Developer Student Clubs",
      period: "2023",
      type: "Leadership",
      description: "Led development initiatives and mentored junior members in mobile app development. Organized workshops and hackathons to foster tech community growth.",
      skills: ["Leadership", "Android Development", "Team Management", "Mentoring"]
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Tech Intern",
      company: "Edunet Foundation", 
      period: "2024",
      type: "Internship",
      description: "Worked on real-world tech problem statements, contributing to innovative solutions in the education technology sector.",
      skills: ["Problem Solving", "Tech Innovation", "Research", "Development"]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Personalized Learning Platform",
      company: "Current Project",
      period: "2024 - Present",
      type: "Project",
      description: "Developing an inclusive learning platform specifically designed for ADHD students, focusing on personalized educational experiences and accessibility.",
      skills: ["AI/ML", "Educational Technology", "Inclusive Design", "Python"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-secondary rounded-full opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6">
            My <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of leadership, innovation, and impactful contributions to the tech community
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="bg-gradient-card glow-card p-8 hover:glow-primary transition-smooth relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-2xl" />
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon & Type */}
                    <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-2">
                      <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                        {exp.icon}
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={
                          exp.type === "Leadership" ? "bg-gradient-primary text-primary-foreground" :
                          exp.type === "Internship" ? "bg-gradient-secondary text-accent-foreground" :
                          "bg-gradient-card"
                        }
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                          <p className="text-primary font-medium">{exp.company}</p>
                          <span className="hidden sm:block text-muted-foreground">•</span>
                          <p className="text-muted-foreground">{exp.period}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="outline"
                            className="text-xs hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-space font-bold mb-4">
              Technical <span className="text-gradient-secondary">Skills</span>
            </h3>
            <p className="text-muted-foreground">Technologies and domains I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card p-6 text-center hover:glow-primary transition-smooth">
              <Code className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Languages</h4>
              <p className="text-sm text-muted-foreground">C (Proficient)<br />Python (Intermediate)</p>
            </Card>

            <Card className="bg-gradient-card p-6 text-center hover:glow-primary transition-smooth">
              <Building2 className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Development</h4>
              <p className="text-sm text-muted-foreground">Software Development<br />Mobile Apps</p>
            </Card>

            <Card className="bg-gradient-card p-6 text-center hover:glow-primary transition-smooth">
              <BookOpen className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">AI & ML</h4>
              <p className="text-sm text-muted-foreground">Machine Learning<br />Data Science</p>
            </Card>

            <Card className="bg-gradient-card p-6 text-center hover:glow-primary transition-smooth">
              <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Soft Skills</h4>
              <p className="text-sm text-muted-foreground">Leadership<br />Problem Solving</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;