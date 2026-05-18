import type { SkillCategory } from "@/types";

export const SKILLS: readonly SkillCategory[] = [
  {
    name: "Languages",
    icon: "code",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C#",
      "Go",
      "Ruby",
    ],
  },
  {
    name: "Frontend",
    icon: "layout",
    skills: ["React", "Next.js", "React Native", "Angular"],
  },
  {
    name: "Backend",
    icon: "server",
    skills: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "Django",
      "Spring",
    ],
  },
  {
    name: "Data & Storage",
    icon: "database",
    skills: ["PostgreSQL", "NoSQL", "Firestore"],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS", "Docker", "CI/CD", "Firebase"],
  },
  {
    name: "Systems",
    icon: "cpu",
    skills: ["MQTT", "Event-Driven Systems", "Distributed Systems"],
  },
  {
    name: "AI / Applied AI",
    icon: "brain",
    skills: [
      "AI-Integrated Product Workflows",
      "LLM-Based Agentic Systems",
      "Prompt Engineering",
    ],
  },
] as const;
