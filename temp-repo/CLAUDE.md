# CLAUDE.md

This is a Next.js 15 web application focused on cybersecurity.

---
description: Web Cybersecurity
alwaysApply: true
---

## Stack
- Next.js (App Router), TypeScript, TailwindCSS
- React 19, Fonts: Geist Sans/Mono
- ESLint strict mode

## Rules
- Components → `src/components/ui/` (PascalCase)
- No inline styles, only Tailwind / tokens
- Semantic HTML + WCAG AA accessibility
- Mobile-first responsive (sm/md/lg)
- Images/SVG → `public/assets/<feature>/` (via `get_image`)
- Reuse patterns as subcomponents
- No hardcoding values → use tokens

## Figma Integration
- Use `#get_code` with Figma Dev Mode frames
- Map text/spacing/colors to tokens
- Save assets via `get_image`

## Git Workflow
- Branch: `main` (protected)
- Feature branches: `feature/<name>`
- Commit message format: `feat:`, `fix:`, etc.
- Use PR for merging

## Testing
- Jest + RTL for unit test
- Test files → alongside components

## Prompts
- `#get_code` – generate from Figma
- `#refactor <path>` – refactor to match rules
- `#doc <path>` – add docs
