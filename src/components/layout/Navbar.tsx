import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "@/data/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-mono text-lg font-medium text-accent transition-colors hover:text-accent-hover"
        >
          mk<span className="text-text-muted">.</span>dev
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-colors ${
                pathname === link.path
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-text-secondary transition-colors hover:text-accent md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-bg-primary/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-2 text-sm transition-colors ${
                  pathname === link.path
                    ? "bg-accent-glow text-accent"
                    : "text-text-secondary hover:bg-bg-card hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
