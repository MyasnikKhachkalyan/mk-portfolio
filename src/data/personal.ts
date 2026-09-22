import type { PersonalInfo } from "@/types";

export const PERSONAL: PersonalInfo = {
  name: "Myasnik Khachkalyan",
  title: "Senior Software Engineer",
  location: "London, United Kingdom",
  email: "khachkalyan.myasnik@gmail.com",
  phone: ["+447743128771", "+37494070540"],
  linkedin: "https://www.linkedin.com/in/myasnik-khachkalyan-437331187",
  github: "https://github.com/MyasnikKhachkalyan",
  twitter: "https://x.com/MyasnikK",
  summary:
    "Senior Software Engineer with 8+ years building distributed, real-time systems end to end, from web front ends to AWS infrastructure. For the past three years a core engineer on Spyscape's venue platform, where I designed and own several production subsystems across cloud services, connected-device fleets and in-venue software. Strong in TypeScript, Node.js, React and PostgreSQL. I work AI-first, shipping production software with coding agents while owning design, testing and quality.",
} as const;
