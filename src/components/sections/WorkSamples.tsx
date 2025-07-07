import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface WorkItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  comingSoon?: boolean;
  image?: string;
}

const workItems: WorkItem[] = [
  {
    title: "Math Solver Website",
    description: "Developed a comprehensive math solver web application with frontend hosted on Vercel and backend on Render. Features include solving various mathematical equations, providing step-by-step solutions, and a history feature to track previous calculations for enhanced user experience.",
    tags: ["Frontend Development", "Backend Development", "Vercel", "Render", "Math Algorithms", "History Feature"],
    link: "https://math-solver2.vercel.app/",
    image: "/lovable-uploads/700ea3c4-79e7-41d8-8cd7-9cbf27fc3548.png"
  },
  {
    title: "Resume Generator",
    description: "Built a comprehensive resume generator application that allows users to create professional resumes using multiple templates (modern, classic, minimal, or creative). Features include real-time preview functionality and downloadable PDF generation for enhanced user experience.",
    tags: ["React", "PDF Generation", "Template Design", "Vercel", "Resume Builder", "Modern UI"],
    link: "https://resume-generator-eta-lime.vercel.app/",
    image: "/lovable-uploads/b0caae1b-ed9d-40a0-a4cc-c914fdb8b141.png"
  },
  {
    title: "AI Image Generator",
    description: "Developed an AI-powered image generation application that creates unique images based on text prompts. Features modern UI design with real-time image generation capabilities and user-friendly interface for creative content creation.",
    tags: ["AI", "Image Generation", "React", "API Integration", "Modern UI", "Creative Tools"],
    link: "https://ai-image-generator-five-rouge.vercel.app/",
    image: "/lovable-uploads/4a48adf2-fe4f-44fd-b80d-6dbc7d7fb12c.png"
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "Built a comprehensive sentiment analysis dashboard that analyzes text input and provides detailed sentiment insights. Features interactive data visualization, real-time analysis, and user-friendly interface for understanding emotional tone in text data.",
    tags: ["Data Analysis", "Sentiment Analysis", "Dashboard", "Data Visualization", "React", "Analytics"],
    link: "https://sentiment-dashboard-app-dsf5.vercel.app/",
    image: "/lovable-uploads/7f51b6c5-15e2-4220-9672-130075b59076.png"
  },
  {
    title: "Tech Titans Website",
    description: "Developed a professional website using Profreehost domain hosting and WordPress for layout design. Leveraged AI tools for content creation and design optimization, then integrated a custom chatbot using CSS and JavaScript plugins to enhance user interaction and engagement.",
    tags: ["WordPress", "CSS", "JavaScript", "AI Integration", "Chatbot Development"],
    link: "https://techtitans.liveblog365.com/?i=1",
    image: "/lovable-uploads/98237d8c-0ef7-448a-a5c3-383bc8b2f61a.png"
  },
  {
    title: "Virtual Health Assistant App Prototype",
    description: "Collaborated with my Tech Titans team to design and build a comprehensive mock-up of a virtual health assistant mobile application using Mockplus. The prototype demonstrates user-friendly interfaces for health monitoring, appointment scheduling, and AI-powered health consultations.",
    tags: ["Mockplus", "UI/UX Design", "Mobile App Prototype", "Healthcare Technology", "Team Collaboration"],
    link: "https://rp.mockplus.com/run/KD0aLF4xJD/CsQvqgHSeC/1Q73yrA5qw?cps=expand&rps=expand&nav=1&ha=0&la=0&fc=1&dt=iphone&out=0&rt=1&as=true",
    image: "/lovable-uploads/434b8d0f-4c28-4506-936c-584e303fa04d.png"
  },
  {
    title: "Intelligent Chatbot with Dialogflow",
    description: "Built an intelligent chatbot using Dialogflow Essentials for natural language processing and intent recognition. Integrated Firebase to handle all query requests from users by matching the intents created in Dialogflow Essentials, providing seamless conversational experiences.",
    tags: ["Dialogflow Essentials", "Firebase", "Natural Language Processing", "Intent Recognition", "Cloud Integration"],
    link: "https://console.dialogflow.com/api-client/demo/embedded/61d17128-9438-4e1d-966e-7f7f06e8a978",
    image: "/lovable-uploads/6f8a7f66-be52-42ce-baa9-8684be133300.png"
  },
  {
    title: "Project Coming Soon",
    description: "Another exciting project in the pipeline. More details will be available soon.",
    tags: ["Work in Progress"],
    comingSoon: true
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
            <Card key={index} className={`overflow-hidden transition-all hover:shadow-md ${item.comingSoon ? 'opacity-75' : ''}`}>
              {item.image && !item.comingSoon && (
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}
              <CardHeader className="bg-muted/50">
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base mb-4">{item.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`text-xs px-2.5 py-1 rounded ${item.comingSoon ? 'bg-muted text-muted-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              {item.link && !item.comingSoon && (
                <CardFooter>
                  <Button variant="outline" size="sm" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              )}
              {item.comingSoon && (
                <CardFooter>
                  <Button variant="outline" size="sm" disabled>
                    Coming Soon
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
