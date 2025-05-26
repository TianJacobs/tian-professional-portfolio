
import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Data Analysis & Programming",
    skills: [
      { name: "MATLAB", level: 70 },
      { name: "R Studio", level: 70 },
      { name: "Microsoft SQL", level: 40 },
      { name: "Tableau", level: 40 },
    ]
  },
  {
    category: "Microsoft Office Suite",
    skills: [
      { name: "Microsoft Excel", level: 70 },
      { name: "Microsoft Word", level: 70 },
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Leadership", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Time Management", level: 80 },
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
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
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
