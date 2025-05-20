
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal, Code } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "I specialize in technology solutions.";
  const typingSpeed = 70;

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Grid background with animation */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute w-96 h-96 rounded-full bg-blue-600/20 blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-600/10 blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full tech-border bg-secondary/50 animate-fade-in">
            <Terminal size={14} className="text-primary" />
            <span className="text-xs font-semibold">Tech Professional</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Hello, I'm <span className="text-primary">Your Name</span>
          </h1>
          
          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground code-font">
              {typedText}<span className="animate-pulse">_</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 group-hover:opacity-90 transition-opacity"></span>
              <a href="#work" className="absolute inset-0"></a>
            </Button>
            
            <Button size="lg" variant="outline" className="border-blue-500/40 hover:border-blue-500/80" asChild>
              <a href="#contact" className="flex items-center gap-2">
                <Code size={18} /> Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down" className="p-2 rounded-full bg-secondary/50 tech-border">
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
