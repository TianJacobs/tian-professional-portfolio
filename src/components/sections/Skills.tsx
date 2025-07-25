import { Star } from "lucide-react";

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Data Analysis & Programming",
    skills: [
      { name: "MATLAB", level: "Intermediate" },
      { name: "R Studio", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "Microsoft SQL Server Management Studio (SSMS)", level: "Beginner" },
      { name: "Tableau", level: "Beginner" },
    ]
  },
  {
    category: "Microsoft Office Suite",
    skills: [
      { name: "Microsoft Excel", level: "Intermediate" },
      { name: "Microsoft Word", level: "Intermediate" },
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: "Advanced" },
      { name: "Critical Thinking", level: "Intermediate" },
      { name: "Adaptability", level: "Intermediate" },
      { name: "Teamwork", level: "Intermediate" },
      { name: "Creativity", level: "Intermediate" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Star className="h-6 w-6 text-primary" />
          <h2 className="section-title">Skills & Abilities</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className={index === skillCategories.length - 1 && skillCategories.length % 2 !== 0 ? "md:col-span-2" : ""}>
              <h3 className="section-subtitle mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground bg-muted px-3 py-1 rounded-full text-sm">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
