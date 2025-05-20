
import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-muted/30">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-6">
          <User className="h-6 w-6 text-primary" />
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="section-subtitle">Professional Summary</h3>
            <p className="text-muted-foreground">
              Analytically-minded professional entering the workforce with a strong foundation in technical 
              skills and data analysis capabilities. Proficient in Microsoft Excel, MATLAB, and R Studio, with 
              additional programming experience in Java and Python.
            </p>
            <p className="text-muted-foreground">
              Developing knowledge of SQL database queries and Tableau visualization tools. Demonstrates natural 
              aptitude for teamwork, creativity, problem-solving, and critical thinking through academic projects 
              and collaborative environments.
            </p>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Professional Bio</h3>
              <p className="text-muted-foreground mb-4">
                Tian Jacobs is a data analysis professional specializing in extracting meaningful insights from complex datasets.
                With a strong foundation in technical tools and analytical methodologies, they excel at transforming raw data into
                actionable information.
              </p>
              <p className="text-muted-foreground">
                Eager to apply technical expertise and analytical mindset to contribute immediate value while growing professionally.
                Tian combines technical proficiency with strong problem-solving abilities to approach data challenges with creativity
                and precision.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
