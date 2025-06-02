import { Book, Award, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const educationItems = [
  {
    degree: "BSc in Mathematical Sciences",
    institution: "Stellenbosch University",
    duration: "Completed",
    description: "Comprehensive degree in mathematical sciences with focus on mathematical foundations, analytical problem solving, and quantitative reasoning.",
    gpa: "3.0/4.0",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Degree.pdf?alt=media&token=e2dd275d-749e-4072-906c-6481458ddfd9"
  }
];

const certifications = [
  {
    name: "AI Essentials",
    issuer: "Intel",
    date: "2023",
    description: "Foundational knowledge in artificial intelligence concepts and applications.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20AI%20Essentials.pdf?alt=media&token=20d68514-06c5-4ccb-bb84-0700db40ee83"
  },
  {
    name: "AI for Everyone",
    issuer: "DeepLearning.AI",
    date: "2023",
    description: "Non-technical course designed to help understand AI technologies and their business implications.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20AI%20for%20Everyone.pdf?alt=media&token=54f1157e-29ce-4363-b84c-4aa4643eafc9"
  },
  {
    name: "Intro to Gen AI",
    issuer: "Google Cloud",
    date: "2023",
    description: "Introduction to generative AI concepts, applications, and technologies.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Intro%20to%20Gen%20AI.pdf?alt=media&token=eac7177c-a9a9-4607-af49-dbdda3b1c65a"
  },
  {
    name: "Verbal Communication and Presentation Skills",
    issuer: "Starweaver",
    date: "2023",
    description: "Development of effective verbal communication and presentation techniques for professional settings.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Verbal%20Communication%20and%20Presentation%20Skills.pdf?alt=media&token=122db07e-4b71-4f82-b04c-5d8beb4e9535"
  },
  {
    name: "Writing Professional Emails in English",
    issuer: "Georgia Institute of Technology",
    date: "2023",
    description: "Techniques for crafting professional and effective email communications in English.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Writing%20Pro%20Emails%20in%20Eng.pdf?alt=media&token=09caa4df-b15a-480f-add6-9fadba4e5493"
  },
  {
    name: "Introduction to AI",
    issuer: "IBM",
    date: "2023",
    description: "Comprehensive introduction to artificial intelligence concepts, applications, and industry use cases.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20certificate%20-%20Intro%20to%20AI.pdf?alt=media&token=df1d613a-0239-4674-952b-c3c5b2b3506c"
  },
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "2023",
    description: "Comprehensive course covering Python programming fundamentals for data science and AI development applications.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Python%20for%20Data%20Science%2C%20AI%20%26%20Development.pdf?alt=media&token=95bf4894-78c4-4580-8ede-e13e3f94d672"
  },
  {
    name: "Active Listening",
    issuer: "Coursera",
    date: "2023",
    description: "Development of active listening skills for improved communication and interpersonal relationships.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Active%20Listening.pdf?alt=media&token=1f3a3829-bdb7-44a9-95e5-ed77a96d94e8"
  },
  {
    name: "Developing Interpersonal Skills",
    issuer: "IBM",
    date: "2023",
    description: "Development of essential interpersonal skills for effective collaboration and professional relationships.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Developing%20Interpersonal%20Skills.pdf?alt=media&token=a1e56561-2cbb-4aba-b3e6-7d2b460823a6"
  },
  {
    name: "Building AI Powered Chatbots Without Programming",
    issuer: "IBM",
    date: "2023",
    description: "Learn to build AI-powered chatbots using no-code platforms and conversational AI technologies.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Building%20AI%20Powered%20Chatbots%20Without%20Programming.pdf?alt=media&token=dcb1963c-1e83-4cd7-bb54-e54fd5ba8b00"
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
                  <p className="mb-4"><span className="font-medium">GPA:</span> <span className="text-muted-foreground">{item.gpa}</span></p>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <GraduationCap className="mr-2 h-4 w-4" /> View Degree
                    </Button>
                  </a>
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
