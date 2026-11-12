# Reyaa Divakar — Interactive Portfolio

An interactive portfolio built around a 3D workshop. Explore mechanical engineering, robotics, education, and creative work through a room that responds to the seasons.

**Live portfolio:** [reyaadivakar.com](https://reyaadivakar.com)

## Explore

- **Interactive View:** Drag to orbit the workshop, scroll to zoom, and select numbered markers to explore portfolio items.
- **Classic View:** Switch to a conventional, easy-to-scan portfolio layout.
- **Seasonal scenes:** The workshop changes with the visitor's local date, with decorations and animations for holidays and birthdays.
- **Animated details:** The window scenery, room lighting, and ambient effects bring the workshop to life.

## Built with

- JavaScript, HTML, and CSS
- Three.js for the 3D workshop
- Vite for local development and production builds
- Cloudflare Pages Functions and Resend for the optional birthday email interaction

## Run locally

```bash
git clone https://github.com/Cloudie-Rey/my-website-portfolio.git
cd my-website-portfolio
npm install
npm run dev
```

To check a production build and run the automated tests:

```bash
npm run build
npm test
```

For holiday previews, date rules, and optional birthday-email configuration, see the [developer notes](README.developer.md).
