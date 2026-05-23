export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly location: string;
  readonly email: string;
  readonly phone: readonly string[];
  readonly linkedin: string;
  readonly github: string;
  readonly twitter: string;
  readonly summary: string;
}

export interface ExperienceEntry {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly companyContext: string;
  readonly tagline: string;
  readonly type?: "full-time" | "contract" | "co-founder";
  readonly startDate: string;
  readonly endDate: string;
  readonly highlights: readonly string[];
  readonly metrics?: readonly string[];
  readonly techStack: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly techStack: readonly string[];
  readonly image?: string;
  readonly liveUrl?: string;
  readonly role: string;
}

export interface SkillCategory {
  readonly name: string;
  readonly icon: string;
  readonly skills: readonly string[];
}

export interface NavLink {
  readonly label: string;
  readonly path: string;
}