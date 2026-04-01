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
    "hero.title": "Pau Lorente Ramos<br>Programador enfocado en desarrollo de software y soluciones digitales.",
    "hero.intro": "Trabajo como programador desde <strong>2023</strong>, participando en el desarrollo de aplicaciones y soluciones orientadas a mejorar procesos y aportar valor real. Me interesa especialmente la evolución del software y la integración de nuevas tecnologías en entornos profesionales.",
    "hero.cta.contact": "Contactar",
    "hero.cta.github": "Ver GitHub",
    "hero.stat1": "Inicio profesional como programador",
    "hero.stat2": "Desarrollo de aplicaciones y soluciones digitales",
    "hero.stat3": "Interés en nuevas tecnologías y mejora continua",
    "about.title": "Sobre mí",
    "about.subtitle": "Soy programador con experiencia profesional desde 2023, centrado en el ecosistema .NET, trabajando en el desarrollo de aplicaciones y su integración con servicios en la nube, especialmente en entornos Azure.",
    "about.profile.title": "Perfil",
    "about.focus.title": "Foco técnico",
    "experience.title": "Experiencia",
    "experience.subtitle": "Experiencia profesional desde 2023 centrada en desarrollo con .NET, integración con Azure, trabajo con datos y desarrollo de soluciones backend e inteligencia artificial.",
    "experience.job1.date": "2023 - Actualidad",
    "experience.job1.title": "Programador",
    "spec.title": "Especialización",
    "spec.subtitle": "Mi trabajo se centra en el ecosistema .NET y en la integración de aplicaciones con servicios en la nube en Azure, abarcando desde el desarrollo hasta el despliegue y gestión de datos.",
    "projects.title": "Líneas de proyecto",
    "projects.subtitle": "Algunos de mis proyectos.",
    "projects.p1.title": "Aplicación empresarial en .NET",
    "projects.p1.desc": "Proyecto orientado a lógica de negocio, mantenibilidad, estructura clara y evolución controlada.",
    "projects.p2.title": "Solución cloud con Azure",
    "projects.p2.desc": "Proyecto enfocado en despliegue, servicios cloud y construcción de soluciones preparadas para entorno real.",
    "projects.p3.title": "IA aplicada al desarrollo",
    "projects.p3.desc": "Experimentación con Python, automatización y aplicación de IA a tareas reales dentro del flujo de trabajo de programación.",
    "projects.viewcode": "Ver código",
    "tag.architecture": "Arquitectura",
    "tag.services": "Servicios",
    "tag.deployment": "Despliegue",
    "education.title": "Formación",
    "education.subtitle": "Base académica orientada al desarrollo y la evolución técnica continua.",
    "contact.title": "Contacto",
    "contact.subtitle": "Vías de contactar",
    "footer.thanks": "Gracias por visitar",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.specialization": "Specialization",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.title": "Pau Lorente Ramos<br>Developer focused on software development and digital solutions.",
    "hero.intro": "I have been working as a developer since <strong>2023</strong>, participating in the development of applications and solutions aimed at improving processes and delivering real value. I am especially interested in software evolution and the integration of new technologies in professional environments.",
    "hero.cta.contact": "Contact me",
    "hero.cta.github": "View GitHub",
    "hero.stat1": "Started professional career as a developer",
    "hero.stat2": "Development of applications and digital solutions",
    "hero.stat3": "Interest in new technologies and continuous improvement",
    "about.title": "About me",
    "about.subtitle": "I am a developer with professional experience since 2023, focused on the .NET ecosystem, working on application development and its integration with cloud services, especially in Azure environments.",
    "about.profile.title": "Profile",
    "about.focus.title": "Technical focus",
    "experience.title": "Experience",
    "experience.subtitle": "Professional experience since 2023 focused on .NET development, Azure integration, data work, and development of backend and AI solutions.",
    "experience.job1.date": "2023 – Present",
    "experience.job1.title": "Developer",
    "spec.title": "Specialization",
    "spec.subtitle": "My work focuses on the .NET ecosystem and integrating applications with cloud services on Azure, ranging from development to deployment and data management.",
    "projects.title": "Project lines",
    "projects.subtitle": "Some of my projects.",
    "projects.p1.title": ".NET enterprise application",
    "projects.p1.desc": "Project focused on business logic, maintainability, clear structure, and controlled evolution.",
    "projects.p2.title": "Cloud solution with Azure",
    "projects.p2.desc": "Project focused on deployment, cloud services, and building solutions ready for a real environment.",
    "projects.p3.title": "AI applied to development",
    "projects.p3.desc": "Experimentation with Python, automation, and application of AI to real tasks within the programming workflow.",
    "projects.viewcode": "View code",
    "tag.architecture": "Architecture",
    "tag.services": "Services",
    "tag.deployment": "Deployment",
    "education.title": "Education",
    "education.subtitle": "Academic background oriented towards development and continuous technical evolution.",
    "contact.title": "Contact",
    "contact.subtitle": "Ways to get in touch",
    "footer.thanks": "Thank you for visiting",
  }
};

let currentLang = "es";

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      if (t[key].includes("<")) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = lang === "es" ? "EN" : "ES";
  document.documentElement.lang = lang;
  try { localStorage.setItem("plr-lang", lang); } catch (_) {}
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("lang-toggle");
  if (!toggle) return;

  try {
    const saved = localStorage.getItem("plr-lang");
    if (saved && translations[saved]) {
      currentLang = saved;
      applyTranslations(currentLang);
    } else {
      applyTranslations("es");
    }
  } catch (_) {
    applyTranslations("es");
  }

  toggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    applyTranslations(currentLang);
  });
});
