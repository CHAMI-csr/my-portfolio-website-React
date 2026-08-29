# Chami — Ranasinha | Portfolio

A bespoke, high-craft developer portfolio built with React 18, TypeScript, Vite, and Tailwind CSS, featuring an editorial dark & cream luxury aesthetic.

## Features

- **Editorial Hero**: Infinite marquee typography with layered portrait cutouts and smooth entrance animations.
- **Sticky & Floating Luxury Navbar**: Appears dynamically on scroll, with active section indicators and responsive mobile drawer navigation.
- **Story (Background & Philosophy)**: Narrative detailing background as a Software Developer & Gaming Enthusiast, core engineering principles, and key impact statistics.
- **Skills Matrix & Capabilities**: Interactive categorized tech stack filtering (Frontend, Backend & APIs, Cloud & DB, Gaming & Creative) with proficiency indicators and daily workflow toolset.
- **Featured Work & Case Studies**: Filterable project gallery with metrics, GitHub repository links, and interactive deep-dive **Case Study Modals** detailing architecture, challenges, and solutions.
- **Career Journey Timeline**: Interactive, expandable milestones covering software development roles, key contributions, and computer science education.
- **Message & Connect Center**: Interactive message form with submission feedback, one-click copy email button with toast confirmation, and social links.
- **Performance & Polish**: Zero layout shift, GPU-accelerated CSS animations, and full mobile/tablet/desktop responsiveness.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Structure

```
src/
├── assets/             # Cutout portrait & background images
├── components/
│   ├── Navbar.tsx      # Floating top navigation & mobile menu
│   ├── Hero.tsx        # Layered hero section & marquee animation
│   ├── Story.tsx       # Bio, principles, & highlight metrics
│   ├── Skills.tsx      # Interactive categorized skills matrix
│   ├── Projects.tsx    # Featured work & interactive case study modal
│   ├── Experience.tsx  # Career journey timeline & expandable milestones
│   ├── Contact.tsx     # Message form, email copy, & social links
│   └── Footer.tsx      # Minimalist footer & back-to-top button
├── App.tsx             # Main application layout & scroll spy
├── index.css           # Global Tailwind styles & animations
└── main.tsx            # Application entry point
```
