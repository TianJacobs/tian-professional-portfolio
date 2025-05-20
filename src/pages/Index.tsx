
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import WorkSamples from "@/components/sections/WorkSamples";
import Resume from "@/components/sections/Resume";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Accomplishments from "@/components/sections/Accomplishments";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to the section if the URL contains a hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WorkSamples />
      <Resume />
      <Skills />
      <Education />
      <Accomplishments />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
