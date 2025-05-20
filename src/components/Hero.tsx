
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)",
        }}
      ></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Hello, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl animate-fade-up">
            Professional title here. I specialize in your expertise area and am passionate about creating impactful solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild>
              <a href="#work">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
