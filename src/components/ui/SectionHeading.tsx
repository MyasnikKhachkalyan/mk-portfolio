import { motion } from "framer-motion";

interface SectionHeadingProps {
  readonly title: string;
  readonly subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h1 className="font-mono text-3xl font-bold text-text-primary md:text-4xl">
        <span className="text-accent">#</span> {title}
      </h1>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-text-muted">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-20 bg-accent" />
    </motion.div>
  );
}
