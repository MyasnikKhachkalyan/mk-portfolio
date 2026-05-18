# MK Portfolio — Claude Rules

## Project Overview
Personal portfolio website for Myasnik Khachkalyan — Senior Software Engineer.
Static React + TypeScript site with Tailwind CSS, deployed via Terraform to AWS S3 + CloudFront.

## Tech Stack
- **Framework:** React 19 + TypeScript (strict, heavily typed — no `any`)
- **Build:** Vite 8
- **Styling:** Tailwind CSS 4 (utility-first, no custom CSS files unless absolutely necessary)
- **Routing:** React Router v7
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deploy:** AWS S3 + CloudFront via Terraform
- **CI:** GitHub Actions (build + deploy)

## Design Direction
- **Theme:** Dark & techy — dark backgrounds, cyan/teal accents, terminal/code aesthetic
- **Typography:** Clean sans-serif body, monospace accents for labels/tags
- **Animations:** Subtle entrance animations, smooth transitions — nothing flashy
- **Responsive:** Mobile-first, works on all breakpoints

## Architecture
```
src/
  types/           — Shared TypeScript interfaces and types
  data/            — Static data (experience, projects, skills, personal info)
  components/
    layout/        — Navbar, Footer, Layout wrapper
    ui/            — Reusable UI primitives (badges, cards, timeline items)
  pages/           — Route-level page components
  hooks/           — Custom React hooks
  assets/images/   — Static images, screenshots, diagrams
terraform/         — AWS infrastructure (S3, CloudFront, Route53)
```

## Code Conventions
- Path alias: `@/` maps to `src/`
- All component props must have explicit TypeScript interfaces
- Data files export typed `as const` arrays — no inline data in components
- One component per file, named export matching filename
- Tailwind only — no CSS modules, no styled-components, no inline style objects
- Framer Motion for all animations — no raw CSS transitions/keyframes
- No `any`, no `// @ts-ignore`, no type assertions unless genuinely required

## Pages (6 total)
1. **Home** — Hero section with name, title, summary, CTA links
2. **Experience** — Interactive timeline of work history
3. **Projects** — Card grid showcasing key projects (screenshots/diagrams TBD)
4. **Skills** — Visual tech stack grouped by category
5. **About** — Personal background, mentoring, Kiraki story
6. **Contact** — Contact form (Formspree/EmailJS) + direct links

## Working Process
- Track all progress in PLAN.md — update after completing each step
- Do not delete PLAN.md until the project is fully complete and approved
- Commit after each major step is done
- Test in browser before marking any UI step as complete

## Do Not
- Add a backend — this is a static site
- Use `any` type anywhere
- Add dependencies without discussing first
- Create blog/CMS functionality (not needed)
- Over-engineer — this is a portfolio, keep it lean
