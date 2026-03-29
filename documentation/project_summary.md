# AceMart-Group Project Summary

## Overview
AceMart-Group is a modern, high-performance web application built with **React 19**, **Vite**, and **Tailwind CSS 4**. The project is designed for "AceMart-Group," potentially as a landing page or professional business website, featuring smooth animations and advanced AI integration capabilities.

---

## Technical Stack

### Core Frameworks
- **React 19**: Utilizing the latest React features for efficient UI rendering and state management.
- **TypeScript**: Ensuring type safety across the codebase.
- **Vite**: Modern build tool providing extremely fast development and build processes.

### Styling & UI
- **Tailwind CSS 4**: A utility-first CSS framework for rapid and consistent styling.
- **Lucide React**: A suite of clean, lightweight icons for better visual communication.

### Animations
- **GSAP**: Industry-standard animation library for high-performance visual effects.
- **Framer Motion**: Used for declarative and intuitive UI transitions.

### AI Capabilities
- **Google Generative AI (@google/genai)**: Integrated with the Gemini API to provide smart, context-aware functionalities.

---

## Project Structure

```text
AceMart-Group/
â”œâ”€â”€ documentation/        # Project documentations
â”œâ”€â”€ public/               # Static assets
â”œâ”€â”€ src/                  # Source code
â”‚   â”œâ”€â”€ components/       # UI Components (Navbar, Hero, Footer, etc.)
â”‚   â”œâ”€â”€ App.tsx           # Main application entry point
â”‚   â”œâ”€â”€ main.tsx          # React DOM mounting
â”‚   â””â”€â”€ index.css         # Global styles
â”œâ”€â”€ index.html            # Main HTML file
â”œâ”€â”€ package.json           # Project dependencies and scripts
â”œâ”€â”€ vite.config.ts        # Vite configuration
â””â”€â”€ tsconfig.json         # TypeScript configuration
```

### Key Components in `src/components/`
- **Hero**: The main banner section with engaging visuals.
- **Navbar**: Main navigation menu.
- **Services**: Highlights the primary services offered.
- **About**: Detailed brand or company information.
- **WhyChooseUs**: Competitive advantages and value propositions.
- **Markets**: Information on target markets or sectors.
- **CTA**: Call-to-action section for higher engagement.
- **Footer**: Bottom navigation and contact info.
- **TrustStrip**: Social proof and credibility indicators.

---

## Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Rich Animations**: Smooth scrolling and interactive elements using GSAP and Framer Motion.
- **AI-Powered**: Ready to leverage Google's Gemini models for innovative user experiences.
- **Fast Performance**: Optimized build using Vite 6 and Tailwind 4.

---

## Getting Started
To run the project locally:
1.  **Install dependencies**: `npm install`
2.  **Setup Environment**: Configure `GEMINI_API_KEY` in `.env`.
3.  **Run Development Server**: `npm run dev` (runs on port 3000 by default).
4.  **Build for Production**: `npm run build`.
