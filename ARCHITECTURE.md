# Architecture — Specteria

- Astro 5 static output.
- Configuration: `src/config/site.ts`.
- Path aliases: `@/*` maps to `src/*`.
- Quality gates: Prettier, ESLint, Vitest, Astro Check.
- CI: GitHub Actions runs all validation checks on push.
