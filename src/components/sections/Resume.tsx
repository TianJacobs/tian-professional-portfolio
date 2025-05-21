
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const workExperience = [
  {
    title: "New Graduate",
    company: "Seeking Opportunities",
    duration: "Present",
    description: "Data analysis professional entering the workforce with strong technical foundation and analytical capabilities.",
    achievements: [
      "Proficient in Microsoft Excel, MATLAB, and R Studio",
      "Programming experience in Java and Python",
      "Developing knowledge of SQL database queries and Tableau visualization"
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
            <a 
              href="https://github.com/BlessedT99/Profile/blob/main/CV%20Tian%20Josh%20Jacobs.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" /> Download Full Resume
              </Button>
            </a>
          </div>
          
          <div className="space-y-8">
            <h3 className="section-subtitle text-center">Professional Profile</h3>
            
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
                  <h4 className="font-semibold mb-2">Key Skills:</h4>
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
