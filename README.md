# Netflix Clone

> Modern streaming platform UI rebuilt from the ground up — a senior frontend showcase.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com)

---

## Overview

A Netflix-inspired streaming interface built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **shadcn-style** UI components (CVA + lucide-react).

This project demonstrates senior-level frontend patterns: component composition, design tokens, responsive layouts, and production-ready Docker deployment.

---

## Features

- **Hero section** with featured content and call-to-action buttons
- **Content rows** with horizontal movie/show cards
- **Sticky navigation** with search and notifications
- **Design system** — Button, Card, Badge variants via `class-variance-authority`
- **Dark theme** optimized for streaming UX
- **Docker** multi-stage build with nginx

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| UI | React 19 |
| Language | TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Components | CVA + lucide-react (shadcn pattern) |
| Deploy | Docker + nginx |

---

## Quick Start

### Prerequisites

- Node.js 20+
- npm or yarn

### Local development

```bash
git clone https://github.com/jonathasribeiro/netflix-clone.git
cd netflix-clone
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production build

```bash
npm run build
npm run preview
```

---

## Docker

```bash
docker build -t netflix-clone .
docker run -p 8080:80 netflix-clone
```

Visit [http://localhost:8080](http://localhost:8080)

---

## Project Structure

```
src/
├── components/ui/     # shadcn-style primitives (Button, Card, Badge)
├── lib/utils.ts       # cn() helper (clsx + tailwind-merge)
├── App.tsx            # Main layout + hero + content rows
├── main.tsx
└── index.css          # Tailwind v4 theme tokens
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build |

---

## Author

**Jonathas Ribeiro** — Senior Fullstack Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-jonathasribeiroreal-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/jonathasribeiroreal)
[![GitHub](https://img.shields.io/badge/GitHub-jonathasribeiro-181717?style=flat-square&logo=github)](https://github.com/jonathasribeiro)
