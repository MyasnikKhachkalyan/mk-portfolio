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
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Angular",
      "Tailwind CSS",
      "MUI",
      "Framer Motion",
    ],
  },
  {
    name: "State Management",
    icon: "state",
    skills: [
      "Zustand",
      "TanStack Query",
      "Redux",
      "Redux-Saga",
      "RTK Query",
      "Jotai",
      "Recoil",
    ],
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
    skills: [
      "PostgreSQL",
      "Firestore",
      "SQLite",
      "NoSQL",
      "AG Grid",
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      "AWS",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
      "Firebase",
    ],
  },
  {
    name: "Monitoring & Observability",
    icon: "monitor",
    skills: [
      "Datadog",
      "Sentry",
    ],
  },
  {
    name: "Testing",
    icon: "test",
    skills: [
      "Jest",
      "Vitest",
    ],
  },
  {
    name: "Systems & Networking",
    icon: "cpu",
    skills: [
      "MQTT",
      "WebSockets",
      "UDP",
      "TCP",
      "Event-Driven Architecture",
      "Distributed Systems",
    ],
  },
  {
    name: "Tooling",
    icon: "tool",
    skills: [
      "Vite",
      "Webpack",
      "ESLint",
      "Prettier",
      "Git",
      "Stripe",
    ],
  },
  {
    name: "AI & Applied AI",
    icon: "brain",
    skills: [
      "Claude Code",
      "Cursor",
      "AI-Integrated Workflows",
      "LLM-Based Agentic Systems",
      "Prompt Engineering",
    ],
  },
  {
    name: "Game & Interactive",
    icon: "game",
    skills: [
      "Unity",
    ],
  },
] as const;
