import { motion } from "framer-motion";
import {
  FaCode,
  FaLayerGroup,
  FaServer,
  FaDatabase,
  FaCloud,
  FaMicrochip,
  FaBrain,
  FaVial,
  FaChartBar,
  FaTools,
  FaGamepad,
  FaSitemap,
} from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS } from "@/data/skills";
import type { SkillCategory } from "@/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  code: <FaCode />,
  layout: <FaLayerGroup />,
  state: <FaSitemap />,
  server: <FaServer />,
  database: <FaDatabase />,
  cloud: <FaCloud />,
  monitor: <FaChartBar />,
  test: <FaVial />,
  cpu: <FaMicrochip />,
  tool: <FaTools />,
  brain: <FaBrain />,
  game: <FaGamepad />,
};

const SPAN_MAP: Record<string, string> = {
  Languages: "md:col-span-2",
  Frontend: "md:col-span-2",
  "State Management": "md:col-span-2",
  Backend: "md:col-span-2",
  "Systems & Networking": "md:col-span-2",
  "AI & Applied AI": "md:col-span-2",
};

interface SkillGroupProps {
  readonly category: SkillCategory;
  readonly index: number;
}

function SkillGroup({ category, index }: SkillGroupProps) {
  const span = SPAN_MAP[category.name] ?? "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className={`rounded-2xl border border-border bg-bg-card p-8 transition-colors hover:border-accent/40 ${span}`}
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-lg text-accent">
          {ICON_MAP[category.icon]}
        </div>
        <h3 className="font-mono text-lg font-semibold text-text-primary">
          {category.name}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-border bg-bg-primary px-4 py-2 font-mono text-sm text-text-secondary transition-all hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
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
        subtitle="Technologies, frameworks, and tools I work with across the full stack."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
