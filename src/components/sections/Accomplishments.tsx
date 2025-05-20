
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Accomplishment {
  title: string;
  description: string;
}

const accomplishmentsData: Accomplishment[] = [
  {
    title: "Achievement Title 1",
    description: "Detailed explanation of the accomplishment and its significance in your professional journey."
  },
  {
    title: "Achievement Title 2",
    description: "Detailed explanation of the accomplishment and its significance in your professional journey."
  },
  {
    title: "Achievement Title 3",
    description: "Detailed explanation of the accomplishment and its significance in your professional journey."
  },
  {
    title: "Achievement Title 4",
    description: "Detailed explanation of the accomplishment and its significance in your professional journey."
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
            <Card key={index} className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
