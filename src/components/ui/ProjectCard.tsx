import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-xl border border-border bg-bg-card p-6 transition-all hover:border-accent/40 hover:bg-bg-card-hover"
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-lg font-semibold text-text-primary">
          {project.title}
        </h3>
      </div>

      <p className="mt-1 font-mono text-sm text-accent">{project.role}</p>

      <p className="mt-3 text-base leading-relaxed text-text-secondary">
        {project.description}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-base text-text-muted"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-bg-primary px-2.5 py-1 font-mono text-sm text-text-muted transition-colors group-hover:border-accent/30 group-hover:text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
