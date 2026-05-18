import type { Project } from "@/types";

export const PROJECTS: readonly Project[] = [
  {
    id: "spyscape-platform",
    title: "Spyscape Real-Time Gaming Platform",
    company: "Spyscape",
    role: "Senior Software Engineer",
    description:
      "Distributed AWS-based platform powering real-time interactions across physical game rooms, connected hardware, and backend services. Event-driven MQTT infrastructure handling low-latency communication across 24 game rooms and 8 interactive museum stations per venue, serving 200+ concurrent users with sub-50ms hardware response times.",
    highlights: [
      "Scaled from single NYC venue to multi-site (NYC + London)",
      "Sub-50ms latency on all real-time hardware interactions",
      "200+ concurrent users per venue, infrastructure built for 3x capacity",
      "24 game rooms + 8 museum stations per venue",
      "AI-integrated workflows with voice-to-text and handwriting recognition",
      "Unity gameplay synchronized with backend services",
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "React",
      "Next.js",
      "AWS",
      "MQTT",
      "Unity",
      "PostgreSQL",
    ],
  },
  {
    id: "equipool-platform",
    title: "Equipool — Borrower & Investor Platform",
    company: "Equipool",
    role: "Lead Frontend Engineer",
    description:
      "Fintech platform connecting borrowers with investors for equipment financing. Joined 3 weeks before a critical deadline, re-architected 4 major flows, reduced bundle size by 20%, and delivered production-ready results in 2 weeks — a week ahead of schedule.",
    highlights: [
      "Delivered production-ready 1 week ahead of a 3-week deadline",
      "Re-architected 4 major borrower and investor flows",
      "20% bundle size reduction from unoptimized baseline",
      "Centralized state management with reusable API/query wrappers",
      "Led team of 2 frontend engineers + 1 senior infra engineer",
    ],
    techStack: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Tailwind",
      "AWS",
    ],
  },
  {
    id: "report-dashboards",
    title: "Marketing & Sales Analytics Platform",
    company: "Major Beverage Company (via Kiraki Dev)",
    role: "Senior Software Engineer",
    description:
      "Real-time analytics and reporting platform for a major company in the beverage industry. Redesigned dashboard workflows, built visualization features with GraphQL, and implemented scalable data-grids handling high-volume marketing and sales data.",
    highlights: [
      "Real-time reporting with React and GraphQL",
      "Scalable data-grid with sorting, filtering, grouping across large datasets",
      "Optimized data-fetching flows reducing initial load time",
      "Multiple state management approaches (Jotai, Recoil, RTK Query)",
    ],
    techStack: [
      "TypeScript",
      "React",
      "GraphQL",
      "Jotai",
      "Recoil",
      "RTK Query",
      "AG Grid",
      "MUI",
    ],
  },
  {
    id: "bbq-hov",
    title: "BBQ-hov — Custom Oven E-Commerce",
    company: "BBQ-hov (via Kiraki Dev)",
    role: "Lead Full-Stack Engineer",
    description:
      "Greenfield e-commerce platform for a large BBQ oven retailer. Customers could personalize every single element of their oven — style, design, model, and individual components. Built from scratch through first production launch on a serverless backend.",
    highlights: [
      "Built from zero to production-ready launch",
      "Deep product customization — every element configurable",
      "Stripe payments, CRM, analytics, and mapping integrations",
      "Role-based access controls for admin workflows",
      "Serverless Firebase/Firestore backend",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Stripe",
    ],
  },
  {
    id: "kiraki-dev",
    title: "Kiraki Dev — Agency & Training Program",
    company: "Kiraki Dev",
    role: "Co-Founder & Mentor",
    description:
      "Software development agency and engineering training company. Delivered 6 client projects across analytics, e-commerce, fintech, and productivity. Mentored 4 junior engineers — all hired into development roles — and supported a new technical project manager.",
    highlights: [
      "6 client projects delivered across different industries",
      "4 junior engineers mentored — all hired into dev roles",
      "Established engineering standards across all projects",
      "Built structured training curriculum for React, TypeScript, Node.js",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Git",
    ],
  },
  {
    id: "vistarmedia-adtech",
    title: "VistarMedia — Ad Tech Platform",
    company: "VistarMedia LLC",
    role: "Senior Software Engineer",
    description:
      "Programmatic advertising platform for digital out-of-home media. Worked across DSP and SSP workflows to improve ad targeting and campaign visibility. Led the migration of legacy frontend code to TypeScript.",
    highlights: [
      "Ad suggestion and recommendation logic improvements",
      "Legacy-to-TypeScript migration across the frontend",
      "Increased unit test coverage and reduced long-standing bugs",
      "Stronger type safety and cleaner abstractions",
    ],
    techStack: ["React", "TypeScript", "Java", "Go"],
  },
] as const;
