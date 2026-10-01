# 🐰 Keploy Go Quickstart — Developer Documentation & Interactive Guide

> A high-performance, single-page documentation tutorial built with **Next.js (App Router)** and **MDX** for the **Keploy DevRel Candidate Assignment**.

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)
![MDX](https://img.shields.io/badge/MDX-Enabled-orange?logo=mdx)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-blue?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 Overview & Objectives

This project fulfills the **Keploy DevRel Candidate Assignment** by delivering a beginner-friendly, visually polished, and technically deep tutorial on running Keploy with a Go application (**Gin + MongoDB**). 

The documentation site is written completely in **MDX (`.mdx`)**, mixing rich Markdown prose with custom interactive React components designed to make complex concepts (like eBPF packet capture, zero-code instrumentation, and transparent egress mocking) simple and engaging.

---

## 🏆 Key Features & Bonus Criteria

### 1. Beginner-Friendly, Authentic DevRel Voice
- **The Mental Model**: Explains the "why" behind Keploy—why traditional Go mocking (`mockgen`, `testify`) and container spin-ups (`testcontainers-go`) cause friction, and how Keploy flips the paradigm.
- **The "A-Ha!" Moments**: Real insights from running the quickstart, including how Keploy intercepts the MongoDB wire protocol so tests run hermetically **without MongoDB running at all**.
- **Gotchas & Tips**: Covers `--delay` parameter tuning, container networking (`--network container`), and dynamic timestamp noise filtering.

### 2. Rich Interactive MDX Components
- `<ArchitectureDiagram>`: An interactive toggle comparing **Record Mode** vs **Test Mode**, visualizing incoming HTTP and outgoing MongoDB packet flows.
- `<QuickstartProgress>`: An interactive checklist allowing readers to check off each tutorial milestone as they complete it.
- `<FileTree>`: An interactive explorer for `./keploy/` assets (`test-1.yaml`, `mocks.yaml`, `keploy.yml`) with live previews and syntax highlighting.
- `<Tabs>` & `<Tab>`: Switch cleanly between Linux/macOS `curl` scripts and Docker instructions.
- `<TerminalBlock>`: macOS-style simulated terminal with syntax-highlighted command output and instant copy-to-clipboard.
- `<Callout>`: Distinct visual alerts for `aha` (sparkles/gradient), `tip`, `warning`, `info`, and `success`.
- `<CodeBlock>`: Syntax-highlighted code snippets with copy button and line numbers.

### 3. Desktop & Phone Responsive Design (Bonus Point)
- **Desktop (1024px+)**: 3-column documentation layout with sticky section navigation, main MDX reading column, and a sticky scrollspy **Table of Contents** that tracks active sections.
- **Mobile / Tablets**: Responsive header with hamburger drawer navigation, touch-friendly interactive targets, and code blocks with horizontal overflow scrolling that never break the layout.

### 4. Seamless Dark / Light Mode (Bonus Point)
- Integrated using `next-themes` with zero hydration flicker (FOUC).
- Supports **Light**, **Dark**, and **System** default modes with high-contrast color palettes and custom scrollbars.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Content Engine**: Native `@next/mdx` with React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Theme**: `next-themes`
- **Icons**: `lucide-react` + Custom SVG brand marks
- **Language**: TypeScript

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ (tested on Node v20/v24)
- npm or yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/keploy-go-tutorial.git
cd keploy-go-tutorial

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the documentation site.

### Production Build

```bash
# Build static site
npm run build

# Start production server
npm run start
```

---

## ☁️ Deploy to Vercel (1-Click)

This project is built specifically to deploy seamlessly to [Vercel](https://vercel.com):

### Option A: Via Vercel Web Dashboard (Recommended)
1. Push your repository to your public GitHub account:
   ```bash
   git remote add origin https://github.com/<your-username>/keploy-go-tutorial.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your `keploy-go-tutorial` GitHub repository.
4. Keep the default settings (Framework Preset: **Next.js**).
5. Click **Deploy**. Vercel will automatically build and publish your site!

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📁 Project Structure

```
keploy-go-tutorial/
├── app/
│   ├── globals.css            # Tailwind CSS v4 styling & dark theme variables
│   ├── layout.tsx             # Root layout with ThemeProvider, fonts, metadata
│   └── page.tsx               # Client page connecting Header, Sidebar, TOC & MDX
├── components/
│   ├── icons/
│   │   └── GithubIcon.tsx     # Clean SVG brand icon
│   ├── layout/
│   │   ├── Header.tsx         # Navbar with brand logo, search mock, theme toggle
│   │   ├── Sidebar.tsx        # Responsive section drawer & navigation
│   │   ├── TableOfContents.tsx# Sticky right-hand scrollspy TOC
│   │   └── ReadingProgressBar.tsx # Top reading progress indicator
│   ├── mdx/
│   │   ├── ArchitectureDiagram.tsx # Interactive Record vs Test mode visualizer
│   │   ├── Callout.tsx        # Styled callout alerts (aha, tip, warning, info)
│   │   ├── CodeBlock.tsx      # Code blocks with copy and language pills
│   │   ├── FileTree.tsx       # Interactive generated artifact explorer
│   │   ├── QuickstartProgress.tsx  # Gamified tutorial progress tracker
│   │   ├── Tabs.tsx           # Multi-tab switcher component
│   │   └── TerminalBlock.tsx  # Simulated terminal output
│   ├── ThemeProvider.tsx      # Next-themes wrapper
│   └── ThemeToggle.tsx        # Light/Dark/System switcher
├── content/
│   └── tutorial.mdx           # The comprehensive Go Gin + Mongo Keploy guide
├── mdx-components.tsx         # MDX component bindings & typography mappings
├── next.config.ts             # withMDX configuration
├── package.json
└── README.md
```

---

## 📄 License

MIT © Keploy DevRel Candidate Assignment
