import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import type { ExperienceEntry } from "@/types";

interface TimelineItemProps {
  readonly entry: ExperienceEntry;
  readonly index: number;
}

export function TimelineItem({ entry, index }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const typeLabel: Record<string, string> = {
    "full-time": "Full-time",
    contract: "Contract",
    "co-founder": "Co-founder",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-border"
    >
      <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg-primary" />

      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-xl font-semibold text-text-primary">
            {entry.role}
          </h3>
          <span className="font-mono text-base text-accent">
            @ {entry.company}
          </span>
          {entry.type && (
            <span className="rounded-full border border-border px-2.5 py-0.5 text-sm text-text-muted">
              {typeLabel[entry.type]}
            </span>
          )}
        </div>

        <p className="mt-1 font-mono text-sm text-text-muted">
          {entry.startDate} — {entry.endDate}
        </p>

        <p className="mt-1 text-base italic text-text-secondary">
          {entry.companyContext}
        </p>

        <p className="mt-2 text-base font-medium text-accent/80">
          {entry.tagline}
        </p>

        <div className="mt-3 flex items-center gap-2 text-sm text-text-muted">
          <FaChevronDown
            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
          {isExpanded ? "Collapse" : "View details"}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-4">
              {entry.metrics && entry.metrics.length > 0 && (
                <div className="rounded-lg border border-accent/20 bg-accent-glow p-4">
                  <p className="mb-2 font-mono text-sm font-medium uppercase tracking-wider text-accent">
                    Key Metrics
                  </p>
                  <ul className="space-y-1.5">
                    {entry.metrics.map((metric) => (
                      <li
                        key={metric}
                        className="flex items-start gap-2 text-base text-text-secondary"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ul className="space-y-2">
                {entry.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-base text-text-secondary"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {entry.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-bg-card px-2.5 py-1 font-mono text-sm text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
