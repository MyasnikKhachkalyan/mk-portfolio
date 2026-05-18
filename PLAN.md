# MK Portfolio — Plan & Progress

> Combined project plan and progress tracker.
> Each step is marked as it's completed. Remove this file when the site is finalized.

---

## Phase 1: Project Setup ✅
- [x] Scaffold Vite + React + TypeScript project
- [x] Install dependencies (Tailwind, React Router, Framer Motion, React Icons)
- [x] Create directory structure
- [x] Configure Vite (Tailwind plugin, path aliases)
- [x] Configure TypeScript path aliases in tsconfig
- [x] Set up Tailwind base styles and dark theme tokens
- [x] Update `index.html` (title, meta tags, fonts)
- [x] Initialize git repo with `.gitignore`
- [x] Create CLAUDE.md
- [x] Create PLAN.md
- [x] Create README.md + SETUP.md

## Phase 2: Core Layout & Routing ✅
- [x] Define shared TypeScript types (`types/index.ts`)
- [x] Build Navbar component (responsive, mobile menu)
- [x] Build Footer component
- [x] Build Layout wrapper (Navbar + outlet + Footer)
- [x] Set up React Router with all 6 routes
- [x] Add scroll-to-top on route change hook
- [ ] Verify layout renders and routing works in browser

## Phase 3: Data Layer ✅
- [x] Create `data/personal.ts` — name, title, links, summary
- [x] Create `data/experience.ts` — all work history entries (7 roles)
- [x] Create `data/projects.ts` — project cards with descriptions (6 projects)
- [x] Create `data/skills.ts` — tech stack grouped by category (7 categories)

## Phase 4: Pages — Build & Style
- [ ] **Home page** — hero section, animated intro, CTA buttons
- [ ] **Experience page** — interactive timeline with expandable entries
- [ ] **Projects page** — card grid with hover effects (placeholder images for now)
- [ ] **Skills page** — categorized tech grid with visual indicators
- [ ] **About page** — personal story, Kiraki founding, mentoring
- [ ] **Contact page** — form (Formspree/EmailJS) + direct links
- [ ] Browser test all pages on desktop
- [ ] Browser test all pages on mobile (responsive)

## Phase 5: Polish & Animations
- [ ] Page transition animations (Framer Motion)
- [ ] Scroll-triggered entrance animations on sections
- [ ] Hover effects on cards, buttons, links
- [ ] Loading state / skeleton (if needed)
- [ ] Accessibility pass (alt text, aria labels, focus states, keyboard nav)
- [ ] Lighthouse audit (performance, a11y, SEO)

## Phase 6: Infrastructure & Deployment
- [ ] Terraform: S3 bucket for static hosting
- [ ] Terraform: CloudFront distribution (HTTPS, caching)
- [ ] Terraform: Route53 DNS (if custom domain)
- [ ] Terraform: ACM certificate (if custom domain)
- [ ] Terraform: outputs (CloudFront URL, bucket name)
- [ ] GitHub Actions: CI pipeline (lint, type-check, build)
- [ ] GitHub Actions: CD pipeline (deploy to S3 + invalidate CloudFront)
- [ ] First deploy and verify live site

## Phase 7: Content & Final Review
- [ ] Add real screenshots/diagrams for projects (where available)
- [ ] Decide on placeholder strategy for older projects without screenshots
- [ ] Final copy review across all pages
- [ ] Final browser test (desktop + mobile)
- [ ] README finalized
- [ ] Remove PLAN.md (when fully approved)

---

## Decisions Log
| Date       | Decision | Reason |
|------------|----------|--------|
| 2026-05-17 | React + Vite + TS | Heavily typed, fast dev, modern tooling |
| 2026-05-17 | Tailwind CSS 4 | Already familiar from Equipool, utility-first |
| 2026-05-17 | Dark & techy theme | Personal preference |
| 2026-05-17 | Terraform + S3 + CloudFront | Full infra control, IaC best practice |
| 2026-05-17 | No backend | Static portfolio, no dynamic content needed |
| 2026-05-17 | Project screenshots TBD | Some older projects have no codebase access — will figure out presentation when we get there |

---

## Notes
- Resume PDF source: `/Users/myasnik/Desktop/pers/MK_Resume_E.pdf`
- No blog section needed
- Contact form will use a third-party service (Formspree or EmailJS) — no backend
