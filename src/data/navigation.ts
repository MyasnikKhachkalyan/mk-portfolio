import type { NavLink } from "@/types";

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
] as const;
