# Baseline Rhapsody 🎵

A Journey Through CSS Evolution — From static effects to dynamic interactions

## 📌 Project Status

- Current state: **COMPLETE** — All 45 slides implemented and ready
- Implementation progress: 100% (M1 ✅, M2 ✅, M3 ✅, M4 ✅, M5 ✅, M6 ✅, M7 ✅)
- Single source of truth for planning: see `.github/ROADMAP.md`

## �📖 Abstract

In recent years, CSS has undergone an extraordinary evolution. We once relied on float and clear to manage layouts, used tables to structure pages, and resorted to sprites to implement simple hover effects. Today we have advanced tools like math and trigonometric functions, container queries, filters, masks, custom properties, `@layer`, `@scope`, Popover API, scroll-driven animations, and View Transitions. The near future promises custom functions, the ternary `if()` operator, anchor positioning, and invoker commands.

Thanks to Baseline, the standard that certifies support for HTML, CSS, and JavaScript APIs, developers and designers can finally know which features are reliable and ready for production.

This talk is a journey through the transformation of CSS and web APIs, from static effects to dynamic interactions that make the frontend more powerful than ever.

## 🧭 Talk Structure (target)

- Introduction (5 min) — What Baseline is and why it matters
- The Past (5–8 min) — The Dark Ages of CSS (floats, tables, sprites, hacks)
- The Present (25–30 min) — The Renaissance (modern APIs with Baseline status)
  - Layout: Flexbox, Grid
  - Cascade: Custom Properties, `@layer`, `@scope`
  - Math: `calc()`, `clamp()`, trig functions
  - Responsive: Container Queries, `:has()`
  - Visual: Filters, Masks, Blend Modes
  - Interactivity: Popover API, Dialog
  - Animations: Scroll-driven, View Transitions
  - Color & Typography: color functions, Variable Fonts
- The Future (10 min) — The Horizon (upcoming features)
- Baseline Deep Dive (3–5 min)
- Conclusion (5 min)

See `.github/TALK_STRUCTURE.md` for the complete, per-slide outline (45 slides).

## 🚀 Quick Start

Prerequisites
- Node.js (LTS)
- pnpm (recommended)

Installation
```bash
# Clone the repository
# git clone <repository-url>
cd baseline-rhapsody

# Install dependencies
pnpm install
```

Development
```bash
# Start development server (default port 6001)
pnpm start
```

Build
```bash
# Build for production
pnpm build
```

## 📁 Target Project Structure

This is the intended structure to create during implementation.

```
baseline-rhapsody/
├── src/
│   ├── index.html              # Main entry point
│   ├── assets/                 # Images, logos, audio, qrcodes
│   ├── brand/                  # Branding components
│   ├── slides/
│   │   ├── intro/
│   │   ├── topics/
│   │   │   ├── past/
│   │   │   ├── present/
│   │   │   ├── limited-availability/
│   │   │   └── baseline/
│   │   ├── summary/
│   │   └── outro/
│   ├── scripts/
│   └── styles/
├── .github/
│   ├── ROADMAP.md              # Implementation plan (authoritative)
│   ├── TALK_STRUCTURE.md       # Detailed talk outline
│   └── copilot-instructions.md # Project guidance
└── README.md
```

## 🎨 Baseline Badge System

- ✅ Widely Available (Green) — Supported 30+ months across major browsers
- 🟡 Newly Available (Yellow/Orange) — Recently available across major browsers
- 🔴 Limited Availability (Red) — Not broadly supported yet

## 🛠️ Technology Stack

- Reveal.js (presentation framework)
- Parcel (build tool, dev server)
- PostHTML (templating with includes)
- Modern CSS (nesting, functions)

## 📚 Documentation

Start here:
- Roadmap: `.github/ROADMAP.md`
- Structure: `.github/TALK_STRUCTURE.md`
- Assistant guidance: `.github/copilot-instructions.md`

Additional references (limited/experimental features):
- `.github/docs/LIMITED_AVAILABILITY_OCT_2025.md`
- `.github/docs/LIMITED_AVAILABILITY_QUICK_REF.md`

## � External Resources

- Baseline: https://web.dev/baseline
- MDN Web Docs: https://developer.mozilla.org
- Can I Use: https://caniuse.com
- CSS Working Group: https://www.w3.org/Style/CSS/

## 📝 License

MIT License — see `LICENSE`.

## 👨‍💻 Author

Emiliano Pisu ([@pixu1980](https://github.com/pixu1980))
- Senior Design Engineer & Sensei @ Dev Dojo IT
- LinkedIn: https://linkedin.com/in/pixu1980
- CodePen: https://codepen.io/pixu1980

---

Made with ❤️ for the web community
