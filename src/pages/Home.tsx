import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { PERSONAL } from "@/data/personal";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-glow)_0%,_transparent_70%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm tracking-widest text-accent"
        >
          &gt; hello_world
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 text-5xl font-bold tracking-tight text-text-primary md:text-7xl"
        >
          {PERSONAL.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-xl text-text-secondary md:text-2xl"
        >
          {PERSONAL.title}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl leading-relaxed text-text-muted"
        >
          {PERSONAL.summary}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/experience"
            className="group flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-6 py-3 font-mono text-base text-accent transition-all hover:bg-accent/20"
          >
            View my work
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="rounded-lg border border-border px-6 py-3 font-mono text-base text-text-secondary transition-all hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
