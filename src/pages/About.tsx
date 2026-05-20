import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const sections = [
  {
    title: "Background",
    content:
      "I'm a Senior Software Engineer based in London with 8+ years of experience building production systems across gaming, fintech, ad tech, e-commerce, and analytics. I studied Computer Science at the American University of Armenia (GPA 3.9) and have been shipping software professionally since 2017.",
  },
  {
    title: "What I Do",
    content:
      "I specialize in building scalable platforms and distributed systems — from real-time gaming infrastructure handling hundreds of concurrent users at sub-50ms latency, to fintech platforms serving borrower and investor workflows. I'm most productive working across the full stack with TypeScript, React, Node.js, and AWS, and I've recently been working with AI-integrated product workflows and LLM-based agentic systems.",
  },
  {
    title: "Kiraki — Building a Company",
    content:
      "In 2020, I co-founded Kiraki Dev, a software development agency and training company. We delivered 6 client projects across analytics, e-commerce, fintech, and productivity, while running Kiraki Classes — an engineering training program where I mentored 4 junior developers who all went on to be hired as engineers. Building Kiraki taught me as much about leadership, technical decision-making, and managing delivery under pressure as any engineering role.",
  },
  {
    title: "How I Work",
    content:
      "I care about owning systems end-to-end — from architecture through deployment and operational reliability. I've led TypeScript migrations, rescued projects at risk of missing deadlines, scaled platforms across continents, and shaped engineering standards for teams. I value clean abstractions, strong type safety, and building things that last.",
  },
] as const;

export function About() {
  return (
    <section className="mx-auto min-h-screen max-w-3xl px-6 py-20">
      <SectionHeading
        title="About"
        subtitle="The person behind the code."
      />

      <div className="space-y-10">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h2 className="font-mono text-lg font-semibold text-text-primary">
              <span className="text-accent">{">"}</span> {section.title}
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mt-12 rounded-xl border border-border bg-bg-card p-6"
      >
        <h2 className="font-mono text-lg font-semibold text-text-primary">
          <span className="text-accent">{">"}</span> Education
        </h2>
        <div className="mt-3">
          <p className="text-text-primary">
            Bachelor of Science in Computer Science
          </p>
          <p className="font-mono text-sm text-accent">
            American University of Armenia
          </p>
          <p className="mt-1 font-mono text-xs text-text-muted">
            Aug 2018 — Jun 2022 &middot; GPA 3.9
          </p>
        </div>
      </motion.div>
    </section>
  );
}
