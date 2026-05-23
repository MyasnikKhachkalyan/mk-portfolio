import { FaLinkedin, FaEnvelope, FaGithub, FaXTwitter } from "react-icons/fa6";
import { PERSONAL } from "@/data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="font-mono text-base text-text-muted">
          &copy; {currentYear} {PERSONAL.name}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={PERSONAL.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="X"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
