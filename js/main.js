const sections = document.querySelectorAll("header[id], section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ─── i18n ─────────────────────────────────────────────────────────────── */
const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.specialization": "Especialización",
    "nav.projects": "Proyectos",
    "nav.education": "Formación",
    "nav.contact": "Contacto",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.specialization": "Specialization",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
  }
};

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  /* For now, translations are simple nav items. Extend as needed. */
  applyTranslations("es");
});
