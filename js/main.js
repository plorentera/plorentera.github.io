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
    "hero.innovation": "Innovación",
    "hero.summary.title": "Resumen profesional",
    "hero.summary.desc": "Desarrollador enfocado en crear soluciones eficientes, mantenibles y orientadas a necesidades reales.",
    "about.title": "Sobre mí",
    "about.subtitle": "Soy programador con experiencia profesional desde 2023, centrado en el ecosistema .NET, trabajando en el desarrollo de aplicaciones y su integración con servicios en la nube, especialmente en entornos Azure.",
    "about.profile.title": "Perfil",
    "about.profile.p1": "He trabajado con bases de datos en Azure, incluyendo Cosmos DB y SQL Server.",
    "about.profile.p2": "He trabajado con Azure Storage gestionando blobs y contenedores, aplicando SAS tokens y políticas de acceso. He diseñado modelos de datos relacionales y no relacionales para indexar y acceder a archivos de gran tamaño, vinculando metadatos y rutas desde la base de datos a los recursos en la nube.",
    "about.profile.p3": "En desarrollo multiplataforma, he utilizado .NET MAUI integrando servicios de Azure como autenticación, almacenamiento de datos, notificaciones push con Firebase y Azure Functions para lógica backend.",
    "about.profile.p4": "He desarrollado aplicaciones de escritorio con WinForms utilizando SQLite para persistencia de datos, y aplicaciones web con Blazor desplegadas en Azure.",
    "about.profile.p5": "En backend, he desarrollado APIs en Python, contenedorizadas con Docker y desplegadas en Azure.",
    "about.profile.p6": "También tengo experiencia en desarrollo web con PHP y MySQL.",
    "about.profile.p7": "En inteligencia artificial, he desarrollado sistemas de clasificación utilizando PyTorch.",
    "about.focus.title": "Foco técnico",
    "about.focus.cloud": "Integración cloud",
    "experience.title": "Experiencia",
    "experience.subtitle": "Experiencia profesional desde 2023 centrada en desarrollo con .NET, integración con Azure, trabajo con datos y desarrollo de soluciones backend e inteligencia artificial.",
    "experience.job1.date": "2023 - Actualidad",
    "experience.job1.title": "Programador",
    "experience.job1.intro": "Trabajo principalmente en el ecosistema .NET y en la integración de aplicaciones con servicios en la nube en Azure, abarcando desarrollo, despliegue, almacenamiento y backend.",
    "experience.job1.li1": "Desarrollo de aplicaciones multiplataforma con .NET MAUI integradas con Azure para autenticación, almacenamiento, notificaciones push y Azure Functions.",
    "experience.job1.li2": "Desarrollo de aplicaciones web con Blazor desplegadas en Azure.",
    "experience.job1.li3": "Desarrollo de aplicaciones de escritorio con WinForms utilizando SQLite para persistencia de datos.",
    "experience.job1.li4": "Trabajo con bases de datos en Azure, incluyendo Cosmos DB y SQL Server.",
    "experience.job1.li5": "Gestión de Azure Storage con blobs y contenedores, aplicando SAS tokens y políticas de acceso, y vinculando almacenamiento y base de datos para acceso a archivos de gran tamaño.",
    "experience.job1.li6": "Integración de Firebase para notificaciones push y funcionalidades móviles.",
    "experience.job1.li7": "Desarrollo de APIs en Python, contenedorizadas con Docker y desplegadas en Azure.",
    "experience.job1.li8": "Desarrollo de sistemas de clasificación con PyTorch.",
    "experience.job1.li9": "Experiencia adicional en desarrollo web con PHP y MySQL.",
    "spec.title": "Especialización",
    "spec.subtitle": "Mi trabajo se centra en el ecosistema .NET y en la integración de aplicaciones con servicios en la nube en Azure, abarcando desde el desarrollo hasta el despliegue y gestión de datos.",
    "spec.dotnet.title": ".NET",
    "spec.dotnet.desc": "Desarrollo de aplicaciones con .NET en distintos entornos: multiplataforma (MAUI), escritorio (WinForms) y web (Blazor).",
    "spec.azure.title": "Azure",
    "spec.azure.desc": "Integración con servicios de Azure: autenticación, almacenamiento, Azure Functions y despliegue de aplicaciones y APIs.",
    "spec.data.title": "Datos",
    "spec.data.desc": "Trabajo con bases de datos SQL y NoSQL, junto con Azure Storage para gestionar grandes volúmenes de datos y su acceso desde aplicaciones.",
    "spec.backend.title": "Backend",
    "spec.backend.desc": "Desarrollo de APIs en Python, contenedorización con Docker y despliegue en entornos cloud.",
    "spec.integration.title": "Integración",
    "spec.integration.desc": "Conexión de servicios como Firebase y sistemas de notificaciones push con aplicaciones y backend en Azure.",
    "spec.ai.title": "Inteligencia artificial",
    "spec.ai.desc": "Desarrollo de sistemas de clasificación con PyTorch e integración de modelos en aplicaciones.",
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
    "edu.degree0.title": "Máster en Desarrollo Web (Prox)",
    "edu.degree0.desc": "Universitat Oberta de Catalunya (UOC). Formación avanzada en desarrollo web y tecnologías digitales.",
    "edu.degree1.title": "Grado en Multimedia",
    "edu.degree1.desc": "Universitat Oberta de Catalunya (UOC). Formación complementaria en el ámbito digital y multimedia.",
    "edu.degree2.title": "Ciclo Superior DAM",
    "edu.degree2.desc": "Prat Educació. Base sólida en desarrollo de aplicaciones y fundamentos de software.",
    "edu.continuous.title": "Aprendizaje continuo",
    "edu.continuous.desc": "Interés permanente en .NET, Azure, Python, IA aplicada, Machine Learning y mejora de procesos de desarrollo.",
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
    "hero.innovation": "Innovation",
    "hero.summary.title": "Professional summary",
    "hero.summary.desc": "Developer focused on creating efficient, maintainable solutions oriented to real needs.",
    "about.title": "About me",
    "about.subtitle": "I am a developer with professional experience since 2023, focused on the .NET ecosystem, working on application development and its integration with cloud services, especially in Azure environments.",
    "about.profile.title": "Profile",
    "about.profile.p1": "I have worked with databases on Azure, including Cosmos DB and SQL Server.",
    "about.profile.p2": "I have worked with Azure Storage managing blobs and containers, applying SAS tokens and access policies. I have designed relational and non-relational data models to index and access large files, linking metadata and paths from the database to cloud resources.",
    "about.profile.p3": "In cross-platform development, I have used .NET MAUI integrating Azure services such as authentication, data storage, push notifications with Firebase, and Azure Functions for backend logic.",
    "about.profile.p4": "I have developed desktop applications with WinForms using SQLite for data persistence, and web applications with Blazor deployed on Azure.",
    "about.profile.p5": "In backend, I have developed APIs in Python, containerized with Docker and deployed on Azure.",
    "about.profile.p6": "I also have experience in web development with PHP and MySQL.",
    "about.profile.p7": "In artificial intelligence, I have developed classification systems using PyTorch.",
    "about.focus.title": "Technical focus",
    "about.focus.cloud": "Cloud integration",
    "experience.title": "Experience",
    "experience.subtitle": "Professional experience since 2023 focused on .NET development, Azure integration, data work, and development of backend and AI solutions.",
    "experience.job1.date": "2023 – Present",
    "experience.job1.title": "Developer",
    "experience.job1.intro": "I primarily work in the .NET ecosystem and in integrating applications with cloud services on Azure, covering development, deployment, storage, and backend.",
    "experience.job1.li1": "Cross-platform application development with .NET MAUI integrated with Azure for authentication, storage, push notifications, and Azure Functions.",
    "experience.job1.li2": "Web application development with Blazor deployed on Azure.",
    "experience.job1.li3": "Desktop application development with WinForms using SQLite for data persistence.",
    "experience.job1.li4": "Working with databases on Azure, including Cosmos DB and SQL Server.",
    "experience.job1.li5": "Azure Storage management with blobs and containers, applying SAS tokens and access policies, and linking storage and database for large file access.",
    "experience.job1.li6": "Firebase integration for push notifications and mobile features.",
    "experience.job1.li7": "Development of APIs in Python, containerized with Docker and deployed on Azure.",
    "experience.job1.li8": "Development of classification systems with PyTorch.",
    "experience.job1.li9": "Additional experience in web development with PHP and MySQL.",
    "spec.title": "Specialization",
    "spec.subtitle": "My work focuses on the .NET ecosystem and integrating applications with cloud services on Azure, ranging from development to deployment and data management.",
    "spec.dotnet.title": ".NET",
    "spec.dotnet.desc": "Development of applications with .NET in different environments: cross-platform (MAUI), desktop (WinForms), and web (Blazor).",
    "spec.azure.title": "Azure",
    "spec.azure.desc": "Integration with Azure services: authentication, storage, Azure Functions, and deployment of applications and APIs.",
    "spec.data.title": "Data",
    "spec.data.desc": "Working with SQL and NoSQL databases, along with Azure Storage to manage large volumes of data and access from applications.",
    "spec.backend.title": "Backend",
    "spec.backend.desc": "Development of APIs in Python, containerization with Docker, and deployment in cloud environments.",
    "spec.integration.title": "Integration",
    "spec.integration.desc": "Connecting services like Firebase and push notification systems with applications and backend on Azure.",
    "spec.ai.title": "Artificial Intelligence",
    "spec.ai.desc": "Development of classification systems with PyTorch and integration of models in applications.",
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
    "edu.degree0.title": "Master in Web Development (Coming)",
    "edu.degree0.desc": "Universitat Oberta de Catalunya (UOC). Advanced training in web development and digital technologies.",
    "edu.degree1.title": "Degree in Multimedia",
    "edu.degree1.desc": "Universitat Oberta de Catalunya (UOC). Complementary training in the digital and multimedia field.",
    "edu.degree2.title": "Higher Degree in DAM",
    "edu.degree2.desc": "Prat Educació. Solid foundation in application development and software fundamentals.",
    "edu.continuous.title": "Continuous Learning",
    "edu.continuous.desc": "Ongoing interest in .NET, Azure, Python, applied AI, Machine Learning, and improving development processes.",
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
