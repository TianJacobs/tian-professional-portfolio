
import { Book } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const educationItems = [
  {
    degree: "Degree Name",
    institution: "University Name",
    duration: "Year - Year",
    description: "Brief description of your studies, focus areas, and any notable projects or distinctions.",
    gpa: "4.0/4.0"
  },
  {
    degree: "Another Degree Name",
    institution: "Another University Name",
    duration: "Year - Year",
    description: "Brief description of your studies, focus areas, and any notable projects or distinctions.",
    gpa: "3.9/4.0"
  }
];

const certifications = [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "Month Year",
    description: "Brief description of the certification and skills it validates."
  },
  {
    name: "Another Certification",
    issuer: "Another Organization",
    date: "Month Year",
    description: "Brief description of the certification and skills it validates."
  },
  {
    name: "Professional Development Course",
    issuer: "Training Provider",
    date: "Month Year",
    description: "Brief description of what you learned and how it has benefited your career."
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-muted/30">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Book className="h-6 w-6 text-primary" />
          <h2 className="section-title">Education & Professional Development</h2>
        </div>
        
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-2">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="development">Professional Development</TabsTrigger>
          </TabsList>
          
          <TabsContent value="education" className="space-y-6">
            {educationItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle>{item.degree}</CardTitle>
                      <CardDescription className="text-base">{item.institution}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{item.description}</p>
                  <p><span className="font-medium">GPA:</span> <span className="text-muted-foreground">{item.gpa}</span></p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="development" className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle>{cert.name}</CardTitle>
                      <CardDescription className="text-base">{cert.issuer}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Education;
