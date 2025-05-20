
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const workExperience = [
  {
    title: "Job Title",
    company: "Company Name",
    duration: "Month Year - Present",
    description: "Brief description of your role, responsibilities, and notable achievements.",
    achievements: [
      "Specific achievement with measurable results",
      "Another major accomplishment that demonstrates your skills",
      "Additional example of your valuable contributions"
    ]
  },
  {
    title: "Previous Job Title",
    company: "Previous Company",
    duration: "Month Year - Month Year",
    description: "Brief description of your role, responsibilities, and notable achievements.",
    achievements: [
      "Specific achievement with measurable results",
      "Another major accomplishment that demonstrates your skills",
      "Additional example of your valuable contributions"
    ]
  }
];

const Resume = () => {
  return (
    <section id="resume" className="bg-muted/30">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-6">
          <FileText className="h-6 w-6 text-primary" />
          <h2 className="section-title">Resume</h2>
        </div>
        
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <Button size="lg">
              <FileText className="mr-2 h-4 w-4" /> Download Full Resume
            </Button>
          </div>
          
          <div className="space-y-8">
            <h3 className="section-subtitle text-center">Work Experience</h3>
            
            {workExperience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="text-base">{job.company}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{job.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{job.description}</p>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground">{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
