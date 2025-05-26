
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Accomplishment {
  title: string;
  description: string;
  inProgress?: boolean;
}

const accomplishmentsData: Accomplishment[] = [
  {
    title: "Accomplishment Coming Soon",
    description: "Currently working on achieving significant milestones in my professional journey. Stay tuned for updates.",
    inProgress: true
  },
  {
    title: "Achievement in Progress",
    description: "Actively pursuing new accomplishments and professional development goals. More details to follow.",
    inProgress: true
  },
  {
    title: "Future Achievement",
    description: "Working towards meaningful accomplishments that will showcase growth and expertise in my field.",
    inProgress: true
  },
  {
    title: "Upcoming Milestone",
    description: "Focused on reaching important career milestones and professional achievements. Updates coming soon.",
    inProgress: true
  }
];

const Accomplishments = () => {
  return (
    <section id="accomplishments">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="section-title">Accomplishments</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {accomplishmentsData.map((item, index) => (
            <Card key={index} className={`${item.inProgress ? 'bg-muted/30 opacity-75' : 'bg-muted/50'}`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {item.inProgress && (
                  <span className="inline-block mt-3 text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded">
                    Work in Progress
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
