import { motion } from "framer-motion";
import {
  FaCode,
  FaLayerGroup,
  FaServer,
  FaDatabase,
  FaCloud,
  FaMicrochip,
  FaBrain,
} from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS } from "@/data/skills";
import type { SkillCategory } from "@/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  code: <FaCode />,
  layout: <FaLayerGroup />,
  server: <FaServer />,
  database: <FaDatabase />,
  cloud: <FaCloud />,
  cpu: <FaMicrochip />,
  brain: <FaBrain />,
};

interface SkillGroupProps {
  readonly category: SkillCategory;
  readonly index: number;
}

function SkillGroup({ category, index }: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="rounded-xl border border-border bg-bg-card p-6 transition-colors hover:border-accent/40"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xl text-accent">
          {ICON_MAP[category.icon]}
        </span>
        <h3 className="font-mono text-base font-medium uppercase tracking-wider text-text-primary">
          {category.name}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-border bg-bg-primary px-3 py-1.5 font-mono text-sm text-text-secondary transition-colors hover:border-accent/40 hover:text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="mx-auto min-h-screen max-w-5xl px-6 py-20">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with across the full stack."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((category, index) => (
          <SkillGroup
            key={category.name}
            category={category}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
