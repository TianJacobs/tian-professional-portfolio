
import { Book, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const educationItems = [
  {
    degree: "BSc in Mathematical Sciences",
    institution: "Stellenbosch University",
    duration: "Completed",
    description: "Comprehensive degree in mathematical sciences with focus on mathematical foundations, analytical problem solving, and quantitative reasoning.",
    gpa: "3.0/4.0"
  }
];

const certifications = [
  {
    name: "AI Essentials",
    issuer: "Intel",
    date: "2023",
    description: "Foundational knowledge in artificial intelligence concepts and applications.",
    link: "https://github.com/BlessedT99/Profile/blob/main/Coursera%20Certificate%20-%20AI%20Essentials.pdf"
  },
  {
    name: "AI for Everyone",
    issuer: "DeepLearning.AI",
    date: "2023",
    description: "Non-technical course designed to help understand AI technologies and their business implications.",
    link: "https://github.com/BlessedT99/Profile/blob/main/Coursera%20Certificate%20-%20AI%20for%20Everyone.pdf"
  },
  {
    name: "Intro to Gen AI",
    issuer: "Google Cloud",
    date: "2023",
    description: "Introduction to generative AI concepts, applications, and technologies.",
    link: "https://github.com/BlessedT99/Profile/blob/main/Coursera%20Certificate%20-%20Intro%20to%20Gen%20AI.pdf"
  },
  {
    name: "Verbal Communication and Presentation Skills",
    issuer: "Starweaver",
    date: "2023",
    description: "Development of effective verbal communication and presentation techniques for professional settings.",
    link: "https://github.com/BlessedT99/Profile/blob/main/Coursera%20Certificate%20-%20Verbal%20Communication%20and%20Presentation%20Skills.pdf"
  },
  {
    name: "Writing Professional Emails in English",
    issuer: "Georgia Institute of Technology",
    date: "2023",
    description: "Techniques for crafting professional and effective email communications in English.",
    link: "https://github.com/BlessedT99/Profile/blob/main/Coursera%20Certificate%20-%20Writing%20Pro%20Emails%20in%20Eng.pdf"
  },
  {
    name: "Introduction to AI",
    issuer: "IBM",
    date: "2023",
    description: "Comprehensive introduction to artificial intelligence concepts, applications, and industry use cases.",
    link: "https://github.com/BlessedT99/Profile/blob/main/Coursera%20certificate%20-%20Intro%20to%20AI.pdf"
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
                  <p className="mb-4">{cert.description}</p>
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Award className="mr-2 h-4 w-4" /> View Certificate
                    </Button>
                  </a>
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
