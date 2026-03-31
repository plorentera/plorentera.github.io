# plorentera.github.io

Personal portfolio website for **Pau Lorente Ramos** — a developer specialized in .NET, Azure, and applied AI.

🌐 **Live site:** [plorentera.github.io](https://plorentera.github.io)

---

## About

This is a static portfolio site built to showcase professional experience, technical specializations, and personal projects. It is designed with a GitHub-inspired dark theme and is fully responsive.

## Features

- GitHub-inspired dark theme
- Responsive layout using Bootstrap 5
- Live GitHub contribution graph
- Tech stack icon showcase (Devicons)
- Smooth scroll navigation with active link highlighting
- Sections: Home, About, Experience, Specialization, Projects, Education, Contact

## Tech stack

| Technology | Purpose |
|---|---|
| HTML5 / CSS3 | Structure & styling |
| Bootstrap 5 | Responsive grid and components |
| JavaScript (vanilla) | Scroll spy, interactivity |
| [Devicons](https://devicons.github.io/devicon/) | Technology icons |
| [ghchart.rshah.org](https://ghchart.rshah.org) | GitHub contribution graph image |

## Project structure

```
plorentera.github.io/
├── index.html          # Main HTML file
├── css/
│   ├── styles.css      # Core custom styles
│   └── overrides.css   # Bootstrap overrides
├── js/
│   └── main.js         # Scroll-spy and interactivity
└── vendor/
    └── bootstrap/      # Bootstrap 5 (local copy)
```

## Local development

No build step is required. Just open `index.html` in your browser, or serve the folder with any static file server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve .
```

Then open [http://localhost:8080](http://localhost:8080).

## License

This project is open source. Feel free to use it as a reference or starting point for your own portfolio.
