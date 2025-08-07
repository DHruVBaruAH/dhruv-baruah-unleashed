import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <AnimatedSection animationType="fadeInUp">
        <About />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInLeft">
        <Experience />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInRight">
        <Projects />
      </AnimatedSection>
      <AnimatedSection animationType="scaleIn">
        <Services />
      </AnimatedSection>
      <AnimatedSection animationType="fadeInUp">
        <Contact />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
