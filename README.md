# Specteria

A professional audio-focused portfolio.

> **Status:** Phase 1 — Foundation & Project Setup.

## CI/CD

This repository uses GitHub Actions to validate the codebase.
Whenever you push to ~~~main~~~, GitHub will automatically install dependencies, run the linter, type-check, test, and build the site. You can see the results in the "Actions" tab on GitHub.

## Local Development

Run ~~~npm install~~~ on a machine with disk space to run these locally.

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| ~~~npm run dev~~~   | Start dev server (http://localhost:4321) |
| ~~~npm run build~~~ | Type-check then build to ~~~dist/~~~         |
| ~~~npm test~~~      | Vitest (single run)                      |
