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
- [x] **Home page** — hero section, animated intro, CTA buttons, radial glow
- [x] **Experience page** — interactive timeline with expandable entries, metrics cards
- [x] **Projects page** — card grid with hover effects (placeholder images for now)
- [x] **Skills page** — categorized tech grid with icons and hover states
- [x] **About page** — personal story, Kiraki founding, mentoring, education card
- [x] **Contact page** — form (TODO: integrate Formspree/EmailJS) + direct links
- [ ] Browser test all pages on desktop
- [ ] Browser test all pages on mobile (responsive)

## Phase 5: Polish & Animations
- [x] Page transition animations (AnimatePresence with fade in Layout)
- [x] Scroll-triggered entrance animations (whileInView on all cards, timeline, sections)
- [x] Hover effects (card lift on ProjectCard/SkillGroup, accent borders, tech badge highlights)
- [x] Animated nav indicator (spring layoutId underline on active route)
- [x] Mobile menu animation (AnimatePresence slide)
- [ ] Loading state / skeleton (if needed)
- [x] Accessibility pass (focus-visible rings on all links/buttons, aria labels, keyboard nav)
- [ ] Lighthouse audit (performance, a11y, SEO)
- [x] Reusable FadeIn component for scroll-triggered animations

## Phase 6: Infrastructure & Deployment
- [x] Terraform: S3 bucket for static hosting (OAC, no public access)
- [x] Terraform: CloudFront distribution (HTTPS, caching, SPA error handling)
- [ ] Terraform: Route53 DNS (when custom domain ready)
- [ ] Terraform: ACM certificate (when custom domain ready)
- [x] Terraform: outputs (CloudFront URL, bucket name, distribution ID)
- [x] GitHub Actions: CI pipeline (lint, type-check, build, artifact upload)
- [x] GitHub Actions: CD pipeline (deploy to S3 + invalidate CloudFront on CI success)
- [ ] Configure AWS secrets in GitHub repo settings
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
