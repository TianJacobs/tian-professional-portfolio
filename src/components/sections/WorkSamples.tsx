
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface WorkItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const workItems: WorkItem[] = [
  {
    title: "Project Name 1",
    description: "Brief description of the project, what was accomplished, and your specific role and contributions.",
    tags: ["Skill 1", "Skill 2", "Skill 3"],
    link: "#"
  },
  {
    title: "Project Name 2",
    description: "Brief description of the project, what was accomplished, and your specific role and contributions.",
    tags: ["Skill 1", "Skill 4", "Skill 5"],
    link: "#"
  },
  {
    title: "Project Name 3",
    description: "Brief description of the project, what was accomplished, and your specific role and contributions.",
    tags: ["Skill 2", "Skill 6", "Skill 7"],
    link: "#"
  },
  {
    title: "Project Name 4",
    description: "Brief description of the project, what was accomplished, and your specific role and contributions.",
    tags: ["Skill 3", "Skill 5", "Skill 8"],
    link: "#"
  },
];

const WorkSamples = () => {
  return (
    <section id="work">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="section-title">Work Samples</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {workItems.map((item, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
              <CardHeader className="bg-muted/50">
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base mb-4">{item.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              {item.link && (
                <CardFooter>
                  <Button variant="outline" size="sm" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSamples;
