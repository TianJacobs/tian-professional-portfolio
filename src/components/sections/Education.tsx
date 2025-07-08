import { Book, Award, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const educationItems = [
  {
    degree: "BSc in Mathematical Sciences",
    institution: "Stellenbosch University", 
    duration: "Completed 2023",
    description: "Comprehensive degree in mathematical sciences with focus on mathematical foundations, analytical problem solving, and quantitative reasoning.",
    gpa: "3.0/4.0",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Degree.pdf?alt=media&token=e2dd275d-749e-4072-906c-6481458ddfd9"
  }
];

const certificationsRaw = [
  {
    name: "Introduction to AI",
    issuer: "CAPACITI",
    date: "May 23, 2025",
    description: "Foundational certificate in artificial intelligence concepts and applications from CAPACITI's training program.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Tian%20Jacobs-210206189%20(Quiz%201).pdf?alt=media&token=564a5d9e-2eac-44ee-b5a8-2fa9e9b1a807"
  },
  {
    name: "AI Essentials",
    issuer: "Intel",
    date: "May 19, 2025",
    description: "Foundational knowledge in artificial intelligence concepts and applications.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20AI%20Essentials.pdf?alt=media&token=20d68514-06c5-4ccb-bb84-0700db40ee83"
  },
  {
    name: "AI for Everyone",
    issuer: "DeepLearning.AI",
    date: "May 19, 2025",
    description: "Non-technical course designed to help understand AI technologies and their business implications.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20AI%20for%20Everyone.pdf?alt=media&token=54f1157e-29ce-4363-b84c-4aa4643eafc9"
  },
  {
    name: "Intro to Gen AI",
    issuer: "Google Cloud",
    date: "May 19, 2025",
    description: "Introduction to generative AI concepts, applications, and technologies.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Intro%20to%20Gen%20AI.pdf?alt=media&token=eac7177c-a9a9-4607-af49-dbdda3b1c65a"
  },
  {
    name: "Introduction to AI",
    issuer: "IBM",
    date: "May 19, 2025",
    description: "Comprehensive introduction to artificial intelligence concepts, applications, and industry use cases.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20certificate%20-%20Intro%20to%20AI.pdf?alt=media&token=df1d613a-0239-4674-952b-c3c5b2b3506c"
  },
  {
    name: "Verbal Communication and Presentation Skills",
    issuer: "Starweaver",
    date: "May 19, 2025",
    description: "Development of effective verbal communication and presentation techniques for professional settings.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Verbal%20Communication%20and%20Presentation%20Skills.pdf?alt=media&token=122db07e-4b71-4f82-b04c-5d8beb4e9535"
  },
  {
    name: "Writing Professional Emails in English",
    issuer: "Georgia Institute of Technology",
    date: "May 19, 2025",
    description: "Techniques for crafting professional and effective email communications in English.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Writing%20Pro%20Emails%20in%20Eng.pdf?alt=media&token=09caa4df-b15a-480f-add6-9fadba4e5493"
  },
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "May 30, 2025",
    description: "Comprehensive course covering Python programming fundamentals for data science and AI development applications.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Python%20for%20Data%20Science%2C%20AI%20%26%20Development.pdf?alt=media&token=95bf4894-78c4-4580-8ede-e13e3f94d672"
  },
  {
    name: "Active Listening",
    issuer: "Coursera",
    date: "May 30, 2025",
    description: "Development of active listening skills for improved communication and interpersonal relationships.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Active%20Listening.pdf?alt=media&token=1f3a3829-bdb7-44a9-95e5-ed77a96d94e8"
  },
  {
    name: "Developing Interpersonal Skills",
    issuer: "IBM",
    date: "June 2, 2025",
    description: "Development of essential interpersonal skills for effective collaboration and professional relationships.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Developing%20Interpersonal%20Skills.pdf?alt=media&token=a1e56561-2cbb-4aba-b3e6-7d2b460823a6"
  },
  {
    name: "Building AI Powered Chatbots Without Programming",
    issuer: "IBM",
    date: "June 2, 2025",
    description: "Learn to build AI-powered chatbots using no-code platforms and conversational AI technologies.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Building%20AI%20Powered%20Chatbots%20Without%20Programming.pdf?alt=media&token=dcb1963c-1e83-4cd7-bb54-e54fd5ba8b00"
  },
  {
    name: "Generative AI with Large Language Models",
    issuer: "AWS and DeepLearning.AI",
    date: "June 12, 2025",
    description: "Advanced course covering generative AI technologies and large language model applications in real-world scenarios.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Generative%20AI%20with%20Large%20Language%20Models.pdf?alt=media&token=e0c48dbd-ff56-41ff-80d3-01bf1d4428e8"
  },
  {
    name: "Time Management for Personal & Professional Productivity",
    issuer: "Division of Continuing Education",
    date: "June 13, 2025",
    description: "Comprehensive course on time management strategies and productivity techniques for personal and professional success.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20%20Time%20Management%20for%20Personal%20%26%20Professional.pdf?alt=media&token=c1d068ac-4921-48dc-babb-c5351ccde0b2"
  },
  {
    name: "Work Readiness",
    issuer: "YES (Youth Employment Service)",
    date: "June 16, 2025",
    description: "Digital learning certificate focused on developing essential work readiness skills and professional preparation.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/work_readiness_certificate_YES.pdf?alt=media&token=fa20b913-dcd1-471c-bee5-c3c3f82fcd5c"
  },
  {
    name: "Digital Learning",
    issuer: "YES (Youth Employment Service)",
    date: "June 17, 2025",
    description: "Certificate in digital learning methodologies and online education best practices.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/digital_certificate_YES.pdf?alt=media&token=4cdc6ed4-a84d-4e2f-948c-01b2b6111baa"
  },
  {
    name: "Emotional Intelligence",
    issuer: "Arizona State University",
    date: "June 17, 2025",
    description: "Development of emotional intelligence skills for better interpersonal relationships and workplace effectiveness.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Emotional%20Intelligence.pdf?alt=media&token=98711ff6-33c9-4d6d-9924-ba4407b581da"
  },
  {
    name: "AI and Public Health",
    issuer: "DeepLearning.AI",
    date: "June 19, 2025",
    description: "Comprehensive course on the intersection of artificial intelligence and public health applications.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20AI%20and%20Public%20Health.pdf?alt=media&token=abfd28b7-85b4-4598-8772-a7b56ec1bbaa"
  },
  {
    name: "Entrepreneurship",
    issuer: "YES (Youth Employment Service)",
    date: "June 20, 2025",
    description: "Comprehensive certificate in entrepreneurship fundamentals and business development strategies.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/entrepreneurship_certificate_YES.pdf?alt=media&token=5aa23060-0490-4290-8f7a-243c609c3e5f"
  },
  {
    name: "Finding Your Professional Voice",
    issuer: "University of London",
    date: "June 23, 2025",
    description: "Course focused on developing authentic professional communication skills and building confidence in workplace interactions.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate-%20Finding%20Your%20Professional%20Voice.pdf?alt=media&token=d4ddf43a-1b22-49e6-98e3-10e4c42d6bad"
  },
  {
    name: "Foundations of AI and Python Development",
    issuer: "CAPACITI",
    date: "June 23, 2025",
    description: "Comprehensive certificate covering AI fundamentals and Python development skills from CAPACITI's training program.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Tian%20Jacobs-210206189%20(Quiz%202).pdf?alt=media&token=f39b0e65-bc21-4372-a045-ef27969ed8fd"
  },
  {
    name: "AI and Climate Change",
    issuer: "DeepLearning.AI",
    date: "June 26, 2025",
    description: "Specialized course focusing on artificial intelligence applications in climate change research and environmental solutions.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20%20AI%20and%20Climate%20Change.pdf?alt=media&token=a030d2f4-e539-4ea1-90b3-d617dd80963a"
  },
  {
    name: "AI and Disaster Management",
    issuer: "DeepLearning.AI",
    date: "June 27, 2025",
    description: "Advanced course on leveraging artificial intelligence for disaster preparedness, response, and recovery management.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20%20AI%20and%20Disaster%20Management.pdf?alt=media&token=ba3a9707-f1ee-4838-bb46-153b16125aa2"
  },
  {
    name: "Introduction to Personal Branding",
    issuer: "University of Virginia",
    date: "June 30, 2025",
    description: "Comprehensive course on personal branding strategies and professional identity development.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Introduction%20to%20Personal%20Branding.pdf?alt=media&token=4ca35562-634d-48db-bcd1-3656c32831d2"
  },
  {
    name: "Trustworthy AI: Managing Bias, Ethics, and Accountability",
    issuer: "Johns Hopkins University",
    date: "July 8, 2025",
    description: "Advanced course on AI ethics, bias management, and accountability frameworks for responsible AI development and deployment.",
    link: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Coursera%20Certificate%20-%20Trustworthy%20AI.pdf?alt=media&token=7fb2c59b-839c-4a65-9cbd-9caa23e00ccf"
  }
];

// Sort certifications by date
const certifications = certificationsRaw.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA.getTime() - dateB.getTime();
});

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
