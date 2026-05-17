# &lt;Alex /&gt; — Personal Portfolio

A modern, animated personal portfolio website built with React, Vite, and Tailwind CSS. Features a sleek dark theme with glass morphism effects, particle animations, and smooth scroll interactions.

## ✨ Features

- **Particle Background** — Interactive canvas-based particle system with dynamic connections
- **Floating Orbs** — Animated gradient orbs with smooth floating motion
- **Typewriter Effect** — Rotating role titles with typing/deleting animation
- **Skills Showcase** — Categorized skill cards (Frontend, Design, Backend & Tools) with tech icon cloud
- **Projects Gallery** — Featured project cards with hover glow effects, tags, and stats
- **Contact Form** — Ready-to-use contact form with social links
- **Responsive Design** — Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations** — Scroll-triggered reveal animations powered by Framer Motion
- **Glass Morphism** — Modern frosted-glass UI components throughout

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19, Vite |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Build** | Vite |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zoey-fortune/frotend-portfolio.git

# Navigate to the project
cd frontend-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
frontend-portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky navigation with scroll-aware active state
│   │   ├── Hero.jsx         # Hero section with particles, orbs & typewriter
│   │   ├── Skills.jsx       # Skill categories & tech icon grid
│   │   ├── Projects.jsx     # Featured projects with hover effects
│   │   ├── Contact.jsx      # Contact info & form
│   │   ├── Footer.jsx       # Footer with scroll-to-top
│   │   └── SocialIcons.jsx  # Reusable social media SVG icons
│   ├── App.jsx              # Root component composing all sections
│   ├── App.css              # Global & animation styles
│   ├── index.css            # Tailwind & base styles
│   └── main.jsx             # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🎨 Design System

- **Primary Colors**: Cyan (`#00f0ff`), Blue (`#3b82f6`), Purple (`#a855f7`), Pink (`#ec4899`)
- **Background**: Dark theme (`#0a0a0f` / `deep-900`)
- **Typography**: Display font for headings, system font stack for body text
- **Components**: Glass morphism cards, gradient borders, animated hover states

## 📄 License

This project is open source and available under the MIT License.