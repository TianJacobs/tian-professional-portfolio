
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
              As a [your profession] with [X] years of experience, I've developed expertise in [key areas]. 
              My approach combines analytical thinking with creative problem-solving to deliver exceptional results.
            </p>
            <p className="text-muted-foreground">
              Throughout my career, I've focused on [specific focus areas], helping organizations achieve 
              [specific achievements or outcomes]. I'm particularly passionate about [your passion within the field].
            </p>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Professional Bio</h3>
              <p className="text-muted-foreground mb-4">
                [Your name] is a [professional title] specializing in [specialization]. With a background in [relevant background],
                [he/she/they] has worked with [types of clients/companies] to [accomplish what].
              </p>
              <p className="text-muted-foreground">
                When not [professional activity], you can find [your name] [personal interests or hobbies].
                [He/She/They] holds [degrees/certifications] from [institutions].
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
