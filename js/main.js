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
    "hero.title": "Pau Lorente Ramos<br>Programador especializado en <span style=\"color: var(--gh-accent);\">.NET</span>, <span style=\"color: var(--gh-purple);\">Azure</span> e <span style=\"color: var(--gh-success);\">IA aplicada</span>.",
    "hero.intro": "Trabajo como programador desde <strong>2023</strong>, con foco principal en desarrollo sobre <strong>.NET</strong>, especialización en <strong>cloud con Azure</strong> y conocimientos en <strong>Python</strong>. También me interesa profundamente cómo aplicar la inteligencia artificial a los flujos de trabajo reales de un desarrollador.",
    "hero.cta.contact": "Contactar",
    "hero.cta.github": "Ver GitHub",
    "hero.stat1": "Inicio profesional como programador",
    "hero.stat2": "Tecnología principal de especialización",
    "hero.stat3": "Especialización cloud y despliegue",
    "profile.summary.title": "Resumen profesional",
    "profile.summary.desc": "Perfil técnico orientado a producto, desarrollo mantenible y uso práctico de la IA dentro del trabajo diario de programación.",
    "about.title": "Sobre mí",
    "about.subtitle": "Soy un programador con experiencia profesional desde 2023, centrado principalmente en el ecosistema .NET y en soluciones cloud con Azure. Me interesa construir software útil, bien estructurado y preparado para evolucionar, sin perder claridad ni mantenibilidad.",
    "about.profile.title": "Perfil",
    "about.profile.p1": "Mi enfoque combina desarrollo práctico, visión técnica y mejora continua. Me interesa especialmente trabajar en soluciones que no solo funcionen bien a nivel de código, sino que también mejoren procesos reales y aporten valor de negocio.",
    "about.profile.p2": "Además del desarrollo clásico, dedico interés a la inteligencia artificial y al machine learning, especialmente en áreas como <strong>Deep Learning</strong>, <strong>Redes Neuronales Convolucionales (CNN)</strong> y en cómo incorporar IA a los flujos de trabajo de un programador para ganar eficiencia, automatizar tareas y asistir en análisis, desarrollo y mantenimiento.",
    "about.profile.p3": "Aunque mi especialización actual está en <strong>.NET</strong>, <strong>Azure</strong> y <strong>Python</strong>, también he trabajado en contextos con <strong>PHP</strong> y bases de datos en entornos PHP.",
    "about.focus.title": "Foco técnico",
    "experience.title": "Experiencia",
    "experience.subtitle": "Evolución profesional orientada al desarrollo de software, la especialización técnica en .NET y la adopción de tecnologías cloud e IA.",
    "experience.job1.date": "2023 - Actualidad",
    "experience.job1.title": "Programador",
    "experience.job1.desc": "Experiencia profesional continuada como programador desde 2023, con foco principal en desarrollo sobre .NET y soluciones vinculadas a la nube.",
    "experience.job1.li1": "Desarrollo y mantenimiento de aplicaciones con especialización en .NET.",
    "experience.job1.li2": "Trabajo con servicios, despliegues y soluciones cloud en Azure.",
    "experience.job1.li3": "Aplicación de buenas prácticas de estructura, mantenimiento y evolución de software.",
    "experience.job1.li4": "Interés activo en incorporar IA a procesos de desarrollo, productividad y automatización técnica.",
    "experience.job2.date": "Trayectoria complementaria",
    "experience.job2.title": "Exploración técnica y ampliación de stack",
    "experience.job2.desc": "Además de la especialización principal, he trabajado con Python y también he realizado desarrollos y tareas relacionadas con PHP y bases de datos en entornos PHP.",
    "experience.job2.li1": "Uso de Python en automatización, lógica y exploración técnica.",
    "experience.job2.li2": "Interés en machine learning y experimentación con enfoques de IA.",
    "experience.job2.li3": "Experiencia complementaria con PHP y bases de datos en proyectos o contextos específicos.",
    "spec.title": "Especialización",
    "spec.subtitle": "Mi perfil se apoya en tres pilares: desarrollo en .NET, cloud con Azure e investigación práctica sobre IA aplicada al trabajo de un programador.",
    "spec.dotnet": "Mi especialización principal. Me interesa desarrollar software sólido, bien organizado y preparado para crecer con el tiempo.",
    "spec.azure": "Especialización en nube con Azure, orientada a despliegue, servicios, escalabilidad y modernización de soluciones.",
    "spec.python": "Conocimientos en Python aplicados a automatización, análisis, experimentación técnica y apoyo a tareas de desarrollo.",
    "spec.ml": "Interés en construir y entender sistemas que aprendan de datos y puedan integrarse en procesos de software reales.",
    "spec.dl": "Interés específico en Deep Learning y Redes Neuronales Convolucionales, tanto desde la parte conceptual como desde la aplicación práctica.",
    "spec.ai.title": "IA en flujos de trabajo",
    "spec.ai.desc": "Me interesa especialmente cómo aplicar la IA a los flujos de trabajo de un programador: asistencia al desarrollo, automatización, análisis de código y mejora de productividad.",
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
    "education.degree1.title": "Grado en Multimedia",
    "education.degree1.desc": "Universitat Oberta de Catalunya (UOC). Formación complementaria en el ámbito digital y multimedia.",
    "education.degree2.title": "Ciclo Superior DAM",
    "education.degree2.desc": "Prat Educació. Base sólida en desarrollo de aplicaciones y fundamentos de software.",
    "education.degree3.title": "Aprendizaje continuo",
    "education.degree3.desc": "Interés permanente en .NET, Azure, Python, IA aplicada, Machine Learning y mejora de procesos de desarrollo.",
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
    "hero.title": "Pau Lorente Ramos<br>Developer specialized in <span style=\"color: var(--gh-accent);\">.NET</span>, <span style=\"color: var(--gh-purple);\">Azure</span> and <span style=\"color: var(--gh-success);\">applied AI</span>.",
    "hero.intro": "I have been working as a developer since <strong>2023</strong>, with a primary focus on <strong>.NET</strong> development, specialization in <strong>cloud with Azure</strong>, and knowledge of <strong>Python</strong>. I am also deeply interested in how artificial intelligence can be applied to real developer workflows.",
    "hero.cta.contact": "Contact me",
    "hero.cta.github": "View GitHub",
    "hero.stat1": "Started professional career as a developer",
    "hero.stat2": "Main specialization technology",
    "hero.stat3": "Cloud specialization & deployment",
    "profile.summary.title": "Professional summary",
    "profile.summary.desc": "Technical profile focused on product, maintainable development, and practical use of AI within the daily work of a developer.",
    "about.title": "About me",
    "about.subtitle": "I am a developer with professional experience since 2023, primarily focused on the .NET ecosystem and cloud solutions with Azure. I am interested in building useful, well-structured software that is ready to evolve without losing clarity or maintainability.",
    "about.profile.title": "Profile",
    "about.profile.p1": "My approach combines practical development, technical vision, and continuous improvement. I am especially interested in working on solutions that not only work well at the code level, but also improve real processes and deliver business value.",
    "about.profile.p2": "Beyond classic development, I have an interest in artificial intelligence and machine learning, especially in areas such as <strong>Deep Learning</strong>, <strong>Convolutional Neural Networks (CNN)</strong>, and how to incorporate AI into a developer's workflow to gain efficiency, automate tasks, and assist in analysis, development, and maintenance.",
    "about.profile.p3": "Although my current specialization is in <strong>.NET</strong>, <strong>Azure</strong>, and <strong>Python</strong>, I have also worked in contexts involving <strong>PHP</strong> and databases in PHP environments.",
    "about.focus.title": "Technical focus",
    "experience.title": "Experience",
    "experience.subtitle": "Professional evolution oriented towards software development, technical specialization in .NET, and adoption of cloud and AI technologies.",
    "experience.job1.date": "2023 – Present",
    "experience.job1.title": "Developer",
    "experience.job1.desc": "Ongoing professional experience as a developer since 2023, with a primary focus on .NET development and cloud-related solutions.",
    "experience.job1.li1": "Development and maintenance of applications with specialization in .NET.",
    "experience.job1.li2": "Work with cloud services, deployments, and Azure solutions.",
    "experience.job1.li3": "Application of best practices for software structure, maintenance, and evolution.",
    "experience.job1.li4": "Active interest in incorporating AI into development processes, productivity, and technical automation.",
    "experience.job2.date": "Complementary background",
    "experience.job2.title": "Technical exploration and stack expansion",
    "experience.job2.desc": "In addition to the main specialization, I have worked with Python and also carried out development and tasks related to PHP and databases in PHP environments.",
    "experience.job2.li1": "Use of Python in automation, logic, and technical exploration.",
    "experience.job2.li2": "Interest in machine learning and experimentation with AI approaches.",
    "experience.job2.li3": "Complementary experience with PHP and databases in specific projects or contexts.",
    "spec.title": "Specialization",
    "spec.subtitle": "My profile rests on three pillars: .NET development, cloud with Azure, and practical research on AI applied to a developer's work.",
    "spec.dotnet": "My main specialization. I am interested in developing solid, well-organized software that is ready to grow over time.",
    "spec.azure": "Cloud specialization with Azure, focused on deployment, services, scalability, and modernization of solutions.",
    "spec.python": "Python knowledge applied to automation, analysis, technical experimentation, and support for development tasks.",
    "spec.ml": "Interest in building and understanding systems that learn from data and can be integrated into real software processes.",
    "spec.dl": "Specific interest in Deep Learning and Convolutional Neural Networks, both from the conceptual side and from practical application.",
    "spec.ai.title": "AI in developer workflows",
    "spec.ai.desc": "I am especially interested in how AI can be applied to developer workflows: development assistance, automation, code analysis, and productivity improvement.",
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
    "education.degree1.title": "Degree in Multimedia",
    "education.degree1.desc": "Universitat Oberta de Catalunya (UOC). Complementary training in the digital and multimedia field.",
    "education.degree2.title": "Higher Degree in DAM",
    "education.degree2.desc": "Prat Educació. Solid foundation in application development and software fundamentals.",
    "education.degree3.title": "Continuous learning",
    "education.degree3.desc": "Ongoing interest in .NET, Azure, Python, applied AI, Machine Learning, and improving development processes.",
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
      el.innerHTML = t[key];
    }
  });
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = lang === "es" ? "EN" : "ES";
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("lang-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    applyTranslations(currentLang);
  });
});
