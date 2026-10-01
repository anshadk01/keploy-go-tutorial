# 🐰 Keploy Go Quickstart — DevRel Documentation & Interactive Guide

> An official-grade, single-page interactive documentation tutorial built with **Next.js (App Router)** and **MDX** for the **Keploy DevRel Candidate Assignment**.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![MDX](https://img.shields.io/badge/MDX-Enabled-orange?logo=mdx)](https://mdxjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🌟 Overview & Candidate Mission

This project delivers an interactive, technically authentic developer tutorial based on running the real **Keploy Go Gin + MongoDB Quickstart** (`samples-go/gin-mongo`).

It explains how Keploy achieves **zero-code regression testing** and **egress protocol virtualization** using Linux **eBPF** socket filters—enabling Go engineering teams to record production API traffic and replay regression tests without needing live databases in CI/CD.

---

## 🧭 Narrative Flow (Step-by-Step)

The tutorial strictly guides developers through the requested DevRel sequence:

1. **Foundations**: Why traditional Go testing (`mockgen`, `testify`, `testcontainers`) creates friction, and how eBPF transport interception changes the game.
2. **Architecture**: Interactive mental model contrasting **Record Mode** vs **Hermetic Test Mode**.
3. **Prerequisites & Toolchain Validation**: Checking Go 1.20+, Docker daemon, Linux/WSL2 kernel, and installing Keploy CLI.
4. **Sample App Setup**: Inspecting the real Gin URL shortener app (`main.go`, `handler.go`) and running MongoDB 6.0 on port 27017.
5. **Record Mode (`keploy record`)**: Capturing HTTP ingress (`POST /url`) and MongoDB egress traffic in real-time.
6. **Inspecting Real YAML & Mocks**: Examining actual generated `test-1.yaml` (HTTP contract + noise filters) and `mocks.yaml` (MongoDB wire opcode 2013).
7. **The Proof: Stop MongoDB**: Completely shutting off the MongoDB container to prove isolation.
8. **Replaying Tests (`keploy test`)**: Replaying tests in seconds with 0 running databases.
9. **Catching a Real Regression**: Intentionally modifying `handler.go` and watching Keploy detect the failure diff automatically.
10. **DevRel "A-Ha!" Moments**: Transport-level vs app-level mocking, zero-DB CI/CD, and automatic noise detection.
11. **Troubleshooting Guide**: Real-world fixes for `--delay 10`, `sudo -E env PATH=$PATH`, port collisions, and WSL2 requirements.
12. **Production CI/CD**: Ready-to-use GitHub Actions workflow.

---

## 🧩 Interactive MDX Widgets

- `<ArchitectureDiagram>`: Interactive toggle switching between **Record Mode** and **Test Mode (No DB!)** with animated packet flow.
- `<QuickstartProgress>`: Interactive checklist tracking 6 milestones with real-time percentage updates.
- `<FileTree>`: Visual file explorer for `./keploy/` assets (`test-1.yaml`, `mocks.yaml`, `keploy.yml`) with syntax-highlighted previews and copy actions.
- `<TerminalBlock>`: Realistic terminal simulator with status badges, command copy, and realistic Keploy v2 logs.
- `<Tabs>` & `<Tab>`: Multi-platform command switchers (Linux/WSL2 vs macOS, cURL vs HTTPie).
- `<Callout>`: Distinct visual alerts for `aha` (sparkles/gradient), `tip`, `warning`, `info`, and `success`.
- `<CodeBlock>`: Formatted code blocks with file names, language pills, and copy-to-clipboard.

---

## 🎨 Design, UX & Bonus Criteria

- **High-Contrast Dark / Light Theme**: Built with `next-themes` and Tailwind v4, supporting Light, Dark, and System default with zero hydration flicker.
- **Desktop & Phone Optimized**:
  - *Desktop*: 3-column documentation layout with sticky section navigation and a dynamic active-heading scrollspy Table of Contents.
  - *Mobile / Tablets*: Responsive slide-out hamburger drawer, fluid typography, touch-friendly tap targets, and horizontally scrollable code blocks.
- **Accessibility & SEO**: Semantic HTML, ARIA attributes, complete OpenGraph and Twitter card metadata.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone repository
git clone https://github.com/<your-username>/keploy-go-tutorial.git
cd keploy-go-tutorial

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Production Build & Verification

```bash
# Compile optimized static production build
npm run build

# Start local production server
npm run start
```

---

## ☁️ Deploy to Vercel (1-Click)

1. Push your repository to your public GitHub account:
   ```bash
   git remote add origin https://github.com/<your-username>/keploy-go-tutorial.git
   git branch -M main
   git push -u origin main
   ```
2. Navigate to [vercel.com/new](https://vercel.com/new).
3. Import your `keploy-go-tutorial` repository.
4. Keep all default settings (Next.js App Router preset is auto-detected).
5. Click **Deploy**.

---

## 📄 License

MIT © Keploy DevRel Candidate Assignment
