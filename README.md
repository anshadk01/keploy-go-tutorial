# 🐰 Keploy Go Quickstart — DevRel Documentation & Interactive Guide

> An official-grade, single-page interactive documentation tutorial built with **Next.js (App Router)** and **MDX** for the **Keploy DevRel Candidate Assignment**.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![MDX](https://img.shields.io/badge/MDX-Enabled-orange?logo=mdx)](https://mdxjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 💡 The Approach: Bridging Tech & Non-Tech

Developer Relations (DevRel) is the bridge between deep systems engineering and clear, empathetic communication. When approaching this assignment, my goal was to create a documentation experience that **makes sense to a non-technical product manager or executive within 30 seconds**, while delivering the **exact technical depth and real-world precision required by a senior Go backend engineer**.

### 🍕 The Non-Technical Lens: "The Chef & The Smart Pantry"
> *How do you explain Keploy to someone who doesn't write code?*

Imagine you run a popular restaurant. To test if your kitchen works, the traditional approach is exhausting: you have to hire actors pretending to be customers, write a 40-page script for the chef, and buy 50 pounds of fresh cheese every time you want to practice.

**Keploy is like an invisible flight recorder.** It quietly records a real customer ordering dinner once, notes down what ingredients the chef pulled from the pantry, and saves that recipe. Later, you can test if the chef still knows how to cook—**even with the pantry completely locked and empty!** Keploy simply hands the chef the recorded ingredients.

### ⚙️ The Technical Lens: Zero-Code eBPF Transport Interception
> *How does Keploy actually work under the hood?*

Traditional Go integration testing forces developers into painful trade-offs: either write hundreds of lines of brittle interface mocks (`mockgen`, `testify`) or spin up heavyweight Docker containers (`testcontainers-go`) that slow down CI pipelines and fail randomly due to network timeouts.

Keploy shifts the testing boundary down to the **Linux network transport layer**:
- Uses **eBPF (Extended Berkeley Packet Filter)** socket filters to passively monitor ingress HTTP traffic (`:8080`) and egress database TCP streams (`:27017`).
- Captures MongoDB's raw binary wire protocol (`OpMsg` opcode 2013) and records exact request/response pairs into human-readable YAML.
- Replays tests in complete isolation: **MongoDB is shut down**, and Keploy acts as a virtual server, supplying recorded BSON responses directly to the Go MongoDB driver.

---

## 🛠️ How I Built This Project (Methodology & Architecture)

### 1. Grounded in Real-World Code (No Hallucinations)
Instead of inventing synthetic examples, I analyzed Keploy's official [`samples-go/gin-mongo`](https://github.com/keploy/samples-go/tree/main/gin-mongo) repository. All commands, Go structures (`main.go`, `handler.go`), and generated YAML files in this tutorial (`test-1.yaml`, `mocks.yaml`) represent verified, production-grade Keploy v2 artifacts—including actual noise filters (`body.ts: []`, `header.Date: []`) that eliminate timestamp flakiness.

### 2. Next.js 16 (App Router) + Native MDX Architecture
The website is built entirely on Next.js with `@next/mdx`:
- **Content as Code**: The complete tutorial resides in [`content/tutorial.mdx`](./content/tutorial.mdx), blending rich prose with interactive React components.
- **Static Site Generation (SSG)**: Pre-rendered into 100% static HTML (`○ Static`), delivering near-instant page loads, zero runtime server overhead, and perfect SEO indexing.
- **Strict Linting & Type Safety**: Configured with strict TypeScript and ESLint rules (0 errors, 0 warnings).

### 3. Purpose-Built Interactive Widgets
Rather than passive text, the documentation features interactive tools designed to accelerate comprehension:
- **Dual-Lens Architecture Diagram**: Toggles between a non-technical story view and a technical eBPF packet flow diagram.
- **Interactive File Explorer**: A simulated VS Code/GitHub file tree allowing readers to inspect real YAML contracts.
- **Quickstart Progress Tracker**: An interactive milestone checklist with dynamic completion percentage calculation.
- **Terminal Simulator**: Realistic macOS/Linux terminal blocks with output syntax highlighting and instant copy-to-clipboard.

### 4. Intentional UI/UX Optimization (Eliminating Redundancy)
A key refinement in this project was UX auditing:
- In earlier iterations, having duplicate sidebars (left section navigation and right table of contents) cluttered the screen and cramped the central reading area.
- I streamlined the layout into an expansive, comfortable 2-column layout (`max-w-4xl`), giving code blocks and terminal logs room to breathe without horizontal squishing.
- Integrated high-contrast **Dark / Light mode** using React's `useSyncExternalStore` to eliminate hydration flicker.
- Full responsiveness on mobile phones, with a smooth hamburger drawer and touch-friendly tap targets.

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
- `<Callout>`: Distinct visual alerts for `aha` (sparkles/gradient), `analogy` (purple), `why` (teal), `tip`, `warning`, `info`, and `success`.
- `<CodeBlock>`: Formatted code blocks with file names, language pills, and copy-to-clipboard.

---

## 🎨 Design, UX & Bonus Criteria

- **High-Contrast Dark / Light Theme**: Built with `next-themes` and Tailwind v4, supporting Light, Dark, and System default with zero hydration flicker.
- **Desktop & Phone Optimized**:
  - *Desktop*: Spacious 2-column documentation layout with sticky section navigation and active-heading scrollspy tracking.
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
