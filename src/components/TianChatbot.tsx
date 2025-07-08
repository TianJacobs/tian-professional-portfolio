import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, User, Bot, ExternalLink } from 'lucide-react';

const TianChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! 👋 I'm Tian's AI Assistant. I can help you learn about Tian's skills, projects, certificates, and professional background. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Knowledge base based on Tian's information
  const knowledgeBase = {
    personal: {
      name: "Tian Jacobs",
      location: "Kuils River, Western Cape, South Africa",
      email: "tianjosh25@gmail.com",
      phone: "064 684 1557",
      bio: "Data analysis professional with strong foundation in technical skills and analytical capabilities. Specializes in extracting meaningful insights from complex datasets.",
      education: "BSc in Mathematical Sciences from Stellenbosch University (GPA: 3.0/4.0) - Completed 2023",
      journey: "Born and raised in Kuils River, attended De Kuilen Primary and High School, studied at Stellenbosch University, now participating in CAPACITI's demand program."
    },
    skills: {
      technical: {
        "Microsoft Excel": "Intermediate",
        "MATLAB": "Intermediate", 
        "R Studio": "Intermediate",
        "Java": "Intermediate",
        "Python": "Intermediate",
        "SQL": "Beginner",
        "Tableau": "Beginner"
      },
      soft: {
        "Problem Solving": "Advanced",
        "Critical Thinking": "Intermediate",
        "Adaptability": "Intermediate",
        "Teamwork": "Intermediate",
        "Creativity": "Intermediate"
      }
    },
    projects: [
      {
        name: "Math Solver Website",
        url: "https://math-solver2.vercel.app/",
        description: "Comprehensive math solver web application with frontend on Vercel, backend on Render, featuring step-by-step solutions and calculation history."
      },
      {
        name: "Resume Generator",
        url: "https://resume-generator-eta-lime.vercel.app/",
        description: "Comprehensive resume generator application with multiple templates (modern, classic, minimal, creative), real-time preview, and PDF download functionality."
      },
      {
        name: "AI Image Generator",
        url: "https://ai-image-generator-five-rouge.vercel.app/",
        description: "AI-powered image generation application that creates unique images based on text prompts with modern UI and real-time generation capabilities."
      },
      {
        name: "Sentiment Analysis Dashboard",
        url: "https://sentiment-dashboard-app-dsf5.vercel.app/",
        description: "Comprehensive sentiment analysis dashboard with interactive data visualization, real-time text analysis, and detailed emotional tone insights."
      },
      {
        name: "Tech Titans Website", 
        url: "https://techtitans.liveblog365.com/?i=1",
        description: "Professional website using WordPress with AI tools for content creation and custom chatbot integration."
      },
      {
        name: "Virtual Health Assistant App",
        url: "https://rp.mockplus.com/run/KD0aLF4xJD/CsQvqgHSeC/1Q73yrA5qw?cps=expand&rps=expand&nav=1&ha=0&la=0&fc=1&dt=iphone&out=0&rt=1&as=true",
        description: "Mobile app prototype for health monitoring, appointment scheduling, and AI-powered health consultations."
      },
      {
        name: "Intelligent Chatbot with Dialogflow",
        url: "https://console.dialogflow.com/api-client/demo/embedded/61d17128-9438-4e1d-966e-7f7f06e8a978",
        description: "Intelligent chatbot with natural language processing, intent recognition, and Firebase integration."
      }
    ],
    certificates: [
      { name: "Introduction to AI", provider: "CAPACITI", date: "May 23, 2025", category: "AI" },
      { name: "AI Essentials", provider: "Intel", date: "May 19, 2025", category: "AI" },
      { name: "AI for Everyone", provider: "DeepLearning.AI", date: "May 19, 2025", category: "AI" },
      { name: "Introduction to Generative AI", provider: "Google Cloud", date: "May 19, 2025", category: "AI" },
      { name: "Introduction to AI", provider: "IBM", date: "May 19, 2025", category: "AI" },
      { name: "Python for Data Science, AI & Development", provider: "IBM", date: "May 30, 2025", category: "AI" },
      { name: "Building AI Powered Chatbots Without Programming", provider: "IBM", date: "June 2, 2025", category: "AI" },
      { name: "Generative AI with Large Language Models", provider: "AWS and DeepLearning.AI", date: "June 12, 2025", category: "AI" },
      { name: "AI and Public Health", provider: "DeepLearning.AI", date: "June 19, 2025", category: "AI" },
      { name: "Foundations of AI and Python Development", provider: "CAPACITI", date: "June 23, 2025", category: "AI" },
      { name: "AI and Climate Change", provider: "DeepLearning.AI", date: "June 26, 2025", category: "AI" },
      { name: "AI and Disaster Management", provider: "DeepLearning.AI", date: "June 27, 2025", category: "AI" },
      { name: "Trustworthy AI: Managing Bias, Ethics, and Accountability", provider: "Johns Hopkins University", date: "July 8, 2025", category: "AI" },
      { name: "Verbal Communication and Presentation Skills", provider: "Starweaver", date: "May 19, 2025", category: "Communication" },
      { name: "Writing Professional Emails in English", provider: "Georgia Institute of Technology", date: "May 19, 2025", category: "Communication" },
      { name: "Active Listening", provider: "Coursera", date: "May 30, 2025", category: "Communication" },
      { name: "Developing Interpersonal Skills", provider: "IBM", date: "June 2, 2025", category: "Communication" },
      { name: "Emotional Intelligence", provider: "Arizona State University", date: "June 17, 2025", category: "Communication" },
      { name: "Finding Your Professional Voice", provider: "University of London", date: "June 23, 2025", category: "Communication" },
      { name: "Introduction to Personal Branding", provider: "University of Virginia", date: "June 30, 2025", category: "Communication" },
      { name: "Time Management for Personal & Professional Productivity", provider: "Division of Continuing Education", date: "June 13, 2025", category: "Professional Development" },
      { name: "Work Readiness", provider: "YES (Youth Employment Service)", date: "June 16, 2025", category: "Professional Development" },
      { name: "Digital Learning", provider: "YES (Youth Employment Service)", date: "June 17, 2025", category: "Professional Development" },
      { name: "Entrepreneurship", provider: "YES (Youth Employment Service)", date: "June 20, 2025", category: "Professional Development" }
    ],
    links: {
      resume: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/CV%20Tian%20Josh%20Jacobs.pdf?alt=media&token=d984645a-28f1-4d50-a8aa-701fadc1f632",
      degree: "https://firebasestorage.googleapis.com/v0/b/dialogflow-chatbot-75b84.firebasestorage.app/o/Degree.pdf?alt=media&token=e2dd275d-749e-4072-906c-6481458ddfd9",
      linkedin: "https://www.linkedin.com/in/tian-jacobs",
      github: "https://github.com/BlessedT99"
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findRelevantInfo = (question) => {
    const q = question.toLowerCase();
    
    // Personal info queries
    if (q.includes('who') || q.includes('about') || q.includes('bio') || q.includes('background')) {
      return {
        type: 'personal',
        content: `**About Tian Jacobs** 🌟\n\n${knowledgeBase.personal.bio}\n\n**Background:**\n${knowledgeBase.personal.journey}\n\n**Education:** ${knowledgeBase.personal.education}\n\n**Current Program:** Participating in CAPACITI's program for tech skills development.`
      };
    }

    // Contact info
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
      return {
        type: 'contact',
        content: `**Contact Information** 📞\n\n• **Email:** ${knowledgeBase.personal.email}\n• **Phone:** ${knowledgeBase.personal.phone}\n• **Location:** ${knowledgeBase.personal.location}\n\n**Online Presence:**\n• [LinkedIn](${knowledgeBase.links.linkedin})\n• [GitHub](${knowledgeBase.links.github})`
      };
    }

    // Skills queries
    if (q.includes('skill') || q.includes('technical') || q.includes('programming') || q.includes('tools')) {
      const techSkills = Object.entries(knowledgeBase.skills.technical)
        .map(([skill, level]) => `• **${skill}** (${level})`)
        .join('\n');
      const softSkills = Object.entries(knowledgeBase.skills.soft)
        .map(([skill, level]) => `• **${skill}** (${level})`)
        .join('\n');
      
      return {
        type: 'skills',
        content: `**Technical Skills** 💻\n${techSkills}\n\n**Soft Skills** 🧠\n${softSkills}`
      };
    }

    // Projects queries
    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('built')) {
      const projectList = knowledgeBase.projects
        .map(p => `**${p.name}**\n${p.description}\n🔗 [View Project](${p.url})`)
        .join('\n\n');
      
      return {
        type: 'projects',
        content: `**Projects & Work Samples** 🚀\n\n${projectList}`
      };
    }

    // Certificates queries
    if (q.includes('certificate') || q.includes('certification') || q.includes('course') || q.includes('learning')) {
      const aiCerts = knowledgeBase.certificates
        .filter(c => c.category === 'AI')
        .map(c => `• **${c.name}** - ${c.provider} (${c.date})`)
        .join('\n');
      const commCerts = knowledgeBase.certificates
        .filter(c => c.category === 'Communication')
        .map(c => `• **${c.name}** - ${c.provider} (${c.date})`)
        .join('\n');
      const profCerts = knowledgeBase.certificates
        .filter(c => c.category === 'Professional Development')
        .map(c => `• **${c.name}** - ${c.provider} (${c.date})`)
        .join('\n');
      
      return {
        type: 'certificates',
        content: `**Professional Certificates** 🎓\n\n**AI & Data Science (13 certificates):**\n${aiCerts}\n\n**Communication Skills (7 certificates):**\n${commCerts}\n\n**Professional Development (4 certificates):**\n${profCerts}\n\n**Total:** 24 certificates completed between May-July 2025`
      };
    }

    // Resume/CV queries
    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return {
        type: 'documents',
        content: `**Documents** 📄\n\n• [**View Resume/CV**](${knowledgeBase.links.resume})\n• [**View Degree Certificate**](${knowledgeBase.links.degree})\n\nThese documents contain detailed information about Tian's experience, education, and qualifications.`
      };
    }

    // AI/Data Science specific
    if (q.includes('ai') || q.includes('data') || q.includes('python') || q.includes('machine learning')) {
      return {
        type: 'ai_expertise',
        content: `**AI & Data Science Expertise** 🤖\n\n**Certifications:** 13 AI-related certificates from Intel, DeepLearning.AI, Google Cloud, AWS, IBM, Johns Hopkins University, and CAPACITI\n\n**Key Skills:**\n• Python programming for data science\n• AI concepts and applications\n• Generative AI technologies\n• Large Language Models\n• AI ethics and bias management\n• Trustworthy AI development\n• AI and Public Health applications\n• Chatbot development\n• Data analysis with R Studio and MATLAB\n\n**Projects:** Built intelligent chatbots, AI-powered applications, and data analysis tools.`
      };
    }

    // Default helpful response
    return {
      type: 'help',
      content: `I can help you learn about Tian Jacobs! 😊\n\n**Ask me about:**\n• 👤 Personal background and bio\n• 🛠️ Technical skills and tools\n• 🚀 Projects and work samples\n• 🎓 Certificates and education\n• 📞 Contact information\n• 🤖 AI and data science experience\n• 📄 Resume and documents\n\n**Try asking:** "What skills does Tian have?" or "Show me Tian's projects"`
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      const response = findRelevantInfo(inputValue);
      const botMessage = {
        type: 'bot',
        content: response.content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessage = (content) => {
    // Convert markdown-style formatting to JSX
    const parts = content.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\)|🔗.*?\)|[🌟💻🧠🚀🎓📄🤖😊👤🛠️📞])/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-blue-400">{part.slice(2, -2)}</strong>;
      } else if (part.match(/\[.*?\]\(.*?\)/)) {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          return (
            <a 
              key={index} 
              href={match[2]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1 transition-colors"
            >
              {match[1]} <ExternalLink size={12} />
            </a>
          );
        }
      } else if (part.match(/🔗.*?\)/)) {
        const match = part.match(/🔗\s*\[(.*?)\]\((.*?)\)/);
        if (match) {
          return (
            <a 
              key={index} 
              href={match[2]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1 ml-2 transition-colors"
            >
              🔗 {match[1]} <ExternalLink size={12} />
            </a>
          );
        }
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-500/30"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-slate-800 rounded-lg shadow-2xl w-96 h-[500px] flex flex-col border border-slate-700/50 backdrop-blur-sm">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 rounded-t-lg flex justify-between items-center border-b border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-blue-600 rounded-full">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Tian's AI Assistant</h3>
                <p className="text-slate-300 text-sm">Ask me anything about Tian!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white transition-colors p-1 hover:bg-slate-700 rounded"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-800">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  message.type === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' 
                      : 'bg-slate-700 text-slate-300'
                  }`}
                >
                  {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={`max-w-[280px] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-tr-none'
                      : 'bg-slate-700 text-slate-200 rounded-tl-none'
                  }`}
                >
                  <div className="whitespace-pre-line text-sm leading-relaxed">
                    {typeof message.content === 'string' 
                      ? formatMessage(message.content)
                      : message.content
                    }
                  </div>
                  <div className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-blue-100' : 'text-slate-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-2">
                <div className="p-2 rounded-full bg-slate-700 text-slate-300">
                  <Bot size={16} />
                </div>
                <div className="bg-slate-700 text-slate-300 p-3 rounded-lg rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-700/50 bg-slate-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Tian's skills, projects, or experience..."
                className="flex-1 border border-slate-600 bg-slate-700 text-white placeholder-slate-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white rounded-lg p-2 transition-all duration-200"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TianChatbot;
