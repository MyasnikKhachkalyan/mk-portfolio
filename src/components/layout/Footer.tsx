import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="font-mono text-sm text-text-muted">
          &copy; {currentYear} Myasnik Khachkalyan
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/myasnik-khachkalyan-437331187"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:khachkalyan.myasnik@gmail.com"
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
