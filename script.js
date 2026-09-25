/**
 * PORTFOLIO WEB - UTN FRGP (PROGRAMACIÓN III)
 * Funcionalidades:
 * 1. Theme Switcher dinámico (Arcane / Joker) con persistencia en localStorage.
 * 2. Language Switcher (Español / Inglés) con i18n dinámico y persistencia.
 * 3. Menú móvil accesible.
 * 4. Navegación activa sincronizada con scroll (Scrollspy).
 * 5. Validación y feedback del formulario de contacto.
 */

// =========================================================
// DICCIONARIO DE INTERNACIONALIZACIÓN (i18n: ES / EN)
// =========================================================
const TRANSLATIONS = {
  es: {
    seo_title: "Portfolio de Desarrollador Web | Full Stack & .NET",
    seo_desc: "Portfolio profesional de Desarrollador Web y Full Stack con C# .NET, React, Node.js, MongoDB y experiencia técnica en ingeniería CAD (AutoCAD, SolidWorks).",
    "nav.about": "Sobre mí",
    "nav.skills": "Skills",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.title": 'Portfolio de <span class="highlight-text">Desarrollador Web</span>',
    "hero.subtitle": 'Estudiante de la <strong>Tecnicatura Universitaria en Programación (UTN FRGP)</strong>, desarrollador <strong>Full Stack</strong> (.NET, React, Node.js, SQL &amp; MongoDB) y proyectista/cadista en empresa de ingeniería (AutoCAD, CADWorx, SolidWorks).',
    "hero.btn_projects": "Ver proyectos destacados",
    "hero.btn_contact": "Contactar ahora",
    "hero.link_github": "Ver proyectos en GitHub",
    "hero.status": "Disponible",
    "about.tag": "Conoceme más",
    "about.title": "Sobre mí",
    "about.card1_title": "Formación Académica",
    "about.card1_desc": 'Curso la <strong>Tecnicatura Universitaria en Programación</strong> en la <strong>Facultad Regional General Pacheco (UTN FRGP)</strong>, afianzando conocimientos en la materia <strong>Programación III</strong>.',
    "about.card1_item1": "Algoritmos y estructuras de datos",
    "about.card1_item2": "Programación Orientada a Objetos (POO) en C# .NET",
    "about.card1_item3": "Arquitectura en capas, bases relacionales y SEO técnico",
    "about.card2_title": "Formación Full Stack (1 Año)",
    "about.card2_desc": 'Completé un curso intensivo de <strong>desarrollo web Full Stack</strong> de un año de duración, dominando el ecosistema moderno de frontend, backend y bases de datos.',
    "about.card2_item1": "Frontend: HTML5, CSS3, Sass, JavaScript y React",
    "about.card2_item2": "Backend: Node.js, Express y diseño de APIs RESTful",
    "about.card2_item3": "Bases de datos NoSQL: MongoDB &amp; modelado de datos",
    "about.card3_title": "Experiencia Profesional (Ingeniería)",
    "about.card3_desc": 'Trabajo en una <strong>empresa de ingeniería</strong> desempeñándome como <strong>proyectista y cadista</strong>, aplicando rigor técnico, modelado 3D y diseño de precisión.',
    "about.card3_item1": "Planimetría técnica y layouts con AutoCAD",
    "about.card3_item2": "Ruteo de cañerías y plantas de procesos con CADWorx",
    "about.card3_item3": "Modelado 3D de piezas y ensamblajes mecánicos con SolidWorks",
    "skills.tag": "Competencias",
    "skills.title": "Habilidades y Tecnologías",
    "skills.cat1_title": "Backend & .NET",
    "skills.cat1_desc": "Lógica de servidor, servicios web y gestión de bases de datos relacionales y NoSQL.",
    "skills.cat2_title": "Frontend & Full Stack",
    "skills.cat2_desc": "Interfaces modernas, reactivas, maquetación avanzada y optimización SEO.",
    "skills.cat3_title": "Ingeniería & Diseño CAD",
    "skills.cat3_desc": "Proyección técnica, documentación de ingeniería y modelado computacional 3D.",
    "skills.cat4_title": "Herramientas & DevOps",
    "skills.cat4_desc": "Control de versiones colaborativo, entornos de desarrollo y testing de APIs.",
    "projects.tag": "Portfolio práctico",
    "projects.title": "Proyectos Destacados",
    "projects.card1_cat": "Aplicación Web .NET",
    "projects.card1_title": "Sistema de Gestión de Alumnos y Cursos",
    "projects.card1_desc": "Solución integral desarrollada en C# .NET y SQL Server para administración académica. Implementa operaciones CRUD, validaciones de reglas de negocio, autenticación por roles y reportes dinámicos.",
    "projects.card2_cat": "Backend API REST",
    "projects.card2_title": "E-Commerce Web API RESTful",
    "projects.card2_desc": "API para catálogo de productos, carrito de compras y pasarela de órdenes. Diseñada con arquitectura en capas (Domain, Data, Services, Controllers), paginación, DTOs y documentación interactiva con Swagger.",
    "projects.card3_cat": "Frontend & Accesibilidad",
    "projects.card3_title": "Portfolio Web Multilingüe & SEO",
    "projects.card3_desc": "Sitio web estructurado según las directivas de SEO de la UTN FRGP. Integra metadatos completos, etiquetas semánticas, accesibilidad a11y, selector de idioma (ES/EN) y temas duales (Arcane y Joker).",
    "projects.btn_code": "Ver código en GitHub",
    "projects.btn_demo": "Ver demo en vivo",
    "projects.btn_swagger": "Ver Swagger Docs",
    "projects.btn_current": "Ver demo actual",
    "contact.tag": "Conectemos",
    "contact.title": "Contacto",
    "contact.info_title": "¿Tenés una propuesta o proyecto?",
    "contact.info_desc": 'Actualmente estoy abierto a oportunidades profesionales en desarrollo <strong>.NET</strong>, <strong>Full Stack</strong> o proyectos vinculados a <strong>ingeniería y CAD</strong>. No dudes en escribirme para colaborar.',
    "contact.wa_title": "WhatsApp",
    "contact.wa_desc": "+54 9 11 1234-5678 (Mensaje directo)",
    "contact.email_title": "Email Directo",
    "form.name_label": "Nombre y Apellido *",
    "form.name_placeholder": "Ej: Lucas Romero",
    "form.email_label": "Correo Electrónico *",
    "form.email_placeholder": "Ej: lucas@empresa.com",
    "form.subject_label": "Asunto *",
    "form.subject_placeholder": "Ej: Propuesta laboral / Proyecto Full Stack",
    "form.message_label": "Mensaje *",
    "form.message_placeholder": "Escribí aquí los detalles de tu consulta...",
    "form.submit_btn": "Enviar mensaje",
    "form.validation_error": "Por favor, completá todos los campos requeridos.",
    "form.email_error": "Por favor, ingresá un correo electrónico válido.",
    "form.success_msg": "¡Muchas gracias! Tu mensaje fue registrado exitosamente. Te responderé a la brevedad.",
    "footer.copy": 'Tecnicatura Universitaria en Programación — <strong>UTN FRGP</strong> (Programación III).',
    "footer.bottom": "© 2026 Desarrollador Web. Todos los derechos reservados. Optimizado para SEO & Accesibilidad."
  },
  en: {
    seo_title: "Web Developer Portfolio | Full Stack & .NET",
    seo_desc: "Professional Web and Full Stack Developer portfolio featuring C# .NET, React, Node.js, MongoDB, and technical background in CAD engineering (AutoCAD, SolidWorks).",
    "nav.about": "About me",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": '<span class="highlight-text">Web Developer</span> Portfolio',
    "hero.subtitle": 'Student of the <strong>University Degree in Programming (UTN FRGP)</strong>, <strong>Full Stack</strong> developer (.NET, React, Node.js, SQL &amp; MongoDB), and CAD designer/draftsman at an engineering firm (AutoCAD, CADWorx, SolidWorks).',
    "hero.btn_projects": "View featured projects",
    "hero.btn_contact": "Contact now",
    "hero.link_github": "View projects on GitHub",
    "hero.status": "Available",
    "about.tag": "Get to know me",
    "about.title": "About me",
    "about.card1_title": "Academic Education",
    "about.card1_desc": 'Studying the <strong>University Degree in Programming</strong> at the <strong>National Technological University (UTN FRGP)</strong>, consolidating skills in <strong>Programming III</strong>.',
    "about.card1_item1": "Algorithms and data structures",
    "about.card1_item2": "Object-Oriented Programming (OOP) with C# .NET",
    "about.card1_item3": "Layered architecture, relational databases, and technical SEO",
    "about.card2_title": "Full Stack Training (1 Year)",
    "about.card2_desc": 'Completed an intensive **one-year Full Stack web development** course, mastering the modern frontend, backend, and database ecosystem.',
    "about.card2_item1": "Frontend: HTML5, CSS3, Sass, JavaScript, and React",
    "about.card2_item2": "Backend: Node.js, Express, and RESTful API design",
    "about.card2_item3": "NoSQL Databases: MongoDB &amp; data modeling",
    "about.card3_title": "Professional Experience (Engineering)",
    "about.card3_desc": 'Working at an **engineering company** as a **CAD designer and draftsman**, applying technical discipline, 3D modeling, and precision layout.',
    "about.card3_item1": "Technical drafting and layout drawings with AutoCAD",
    "about.card3_item2": "Piping routing and industrial plants with CADWorx",
    "about.card3_item3": "3D mechanical parts and assembly modeling with SolidWorks",
    "skills.tag": "Competencies",
    "skills.title": "Skills & Technologies",
    "skills.cat1_title": "Backend & .NET",
    "skills.cat1_desc": "Server-side logic, web services, and management of relational and NoSQL databases.",
    "skills.cat2_title": "Frontend & Full Stack",
    "skills.cat2_desc": "Modern reactive interfaces, advanced styling, and SEO performance optimization.",
    "skills.cat3_title": "Engineering & CAD Software",
    "skills.cat3_desc": "Technical drafting, engineering documentation, and 3D computer modeling.",
    "skills.cat4_title": "Tools & DevOps",
    "skills.cat4_desc": "Collaborative version control, development environments, and API testing.",
    "projects.tag": "Practical Portfolio",
    "projects.title": "Featured Projects",
    "projects.card1_cat": ".NET Web Application",
    "projects.card1_title": "Student & Course Management System",
    "projects.card1_desc": "End-to-end solution built with C# .NET and SQL Server for academic operations. Features CRUD management, business validations, role-based authorization, and dynamic reports.",
    "projects.card2_cat": "Backend REST API",
    "projects.card2_title": "E-Commerce RESTful Web API",
    "projects.card2_desc": "API for product catalogs, cart handling, and order pipelines. Structured in clean layers (Domain, Data, Services, Controllers) with DTOs, pagination, and Swagger docs.",
    "projects.card3_cat": "Frontend & Accessibility",
    "projects.card3_title": "Multilingual & SEO Web Portfolio",
    "projects.card3_desc": "Website engineered according to UTN FRGP SEO standards. Includes rich metadata, semantic tags, a11y accessibility, language switcher (ES/EN), and dual themes.",
    "projects.btn_code": "View code on GitHub",
    "projects.btn_demo": "View live demo",
    "projects.btn_swagger": "View Swagger Docs",
    "projects.btn_current": "View current demo",
    "contact.tag": "Let's Connect",
    "contact.title": "Contact",
    "contact.info_title": "Have a proposal or project?",
    "contact.info_desc": 'Currently open to opportunities in <strong>.NET</strong>, <strong>Full Stack</strong> development, or <strong>engineering &amp; CAD</strong> technical projects. Feel free to get in touch.',
    "contact.wa_title": "WhatsApp",
    "contact.wa_desc": "+54 9 11 1234-5678 (Direct message)",
    "contact.email_title": "Direct Email",
    "form.name_label": "Full Name *",
    "form.name_placeholder": "e.g., Lucas Romero",
    "form.email_label": "Email Address *",
    "form.email_placeholder": "e.g., lucas@company.com",
    "form.subject_label": "Subject *",
    "form.subject_placeholder": "e.g., Job Opportunity / Full Stack Project",
    "form.message_label": "Message *",
    "form.message_placeholder": "Write your inquiry details here...",
    "form.submit_btn": "Send message",
    "form.validation_error": "Please fill in all required fields.",
    "form.email_error": "Please provide a valid email address.",
    "form.success_msg": "Thank you! Your message was received successfully. I will get back to you shortly.",
    "footer.copy": 'University Degree in Programming — <strong>UTN FRGP</strong> (Programming III).',
    "footer.bottom": "© 2026 Web Developer. All rights reserved. Optimized for SEO & Accessibility."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const langToggle = document.getElementById("lang-toggle");
  const langCurrentLabel = document.getElementById("lang-current-label");
  const langTargetLabel = document.getElementById("lang-target-label");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mainNav = document.getElementById("main-nav");
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  // =========================================================
  // 1. GESTIÓN DEL IDIOMA (i18n: ES / EN)
  // =========================================================
  let currentLang = localStorage.getItem("portfolio-lang") || "es";
  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      applyLanguage(currentLang);
    });
  }

  function applyLanguage(lang) {
    root.setAttribute("lang", lang);
    localStorage.setItem("portfolio-lang", lang);

    const dict = TRANSLATIONS[lang] || TRANSLATIONS.es;

    // Actualizar etiquetas del botón de idioma
    if (langCurrentLabel && langTargetLabel) {
      if (lang === "es") {
        langCurrentLabel.textContent = "ES";
        langTargetLabel.textContent = "EN";
        langToggle.setAttribute("aria-label", "Cambiar idioma a Inglés / Switch to English");
      } else {
        langCurrentLabel.textContent = "EN";
        langTargetLabel.textContent = "ES";
        langToggle.setAttribute("aria-label", "Cambiar idioma a Español / Switch to Spanish");
      }
    }

    // Actualizar título y descripción SEO
    const seoTitle = document.getElementById("seo-title");
    if (seoTitle && dict.seo_title) {
      seoTitle.textContent = dict.seo_title;
    }
    const seoDesc = document.getElementById("seo-description");
    if (seoDesc && dict.seo_desc) {
      seoDesc.setAttribute("content", dict.seo_desc);
    }

    // Actualizar todos los elementos con data-i18n
    const i18nElements = document.querySelectorAll("[data-i18n]");
    i18nElements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Actualizar placeholders de inputs y textareas
    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
    placeholderElements.forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });
  }

  // =========================================================
  // 2. GESTIÓN DEL TEMA VISUAL (ARCANE / JOKER)
  // =========================================================
  const savedTheme = localStorage.getItem("portfolio-theme") || "arcane";
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const activeTheme = root.getAttribute("data-theme") || "arcane";
      const nextTheme = activeTheme === "arcane" ? "joker" : "arcane";
      setTheme(nextTheme);
    });
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }

  // =========================================================
  // 3. MENÚ MÓVIL ACCESIBLE
  // =========================================================
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Cerrar al pulsar sobre cualquier enlace de navegación
    const navLinks = mainNav.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (mainNav.classList.contains("open")) {
          mainNav.classList.remove("open");
          mobileMenuBtn.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // =========================================================
  // 4. SCROLLSPY (RESALTADO DE NAVEGACIÓN ACTIVA)
  // =========================================================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNavigation() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation, { passive: true });

  // =========================================================
  // 5. FORMULARIO DE CONTACTO CON VALIDACIÓN LOCALIZADA
  // =========================================================
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.es;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !subject || !message) {
        showFeedback(dict["form.validation_error"] || "Por favor, completá todos los campos requeridos.", "error");
        return;
      }

      // Validación estándar de formato de correo
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFeedback(dict["form.email_error"] || "Por favor, ingresá un correo electrónico válido.", "error");
        return;
      }

      // Mensaje de éxito
      const successTemplate = dict["form.success_msg"] || "¡Muchas gracias! Tu mensaje fue registrado exitosamente.";
      showFeedback(`¡${name}! ${successTemplate}`, "success");
      contactForm.reset();
    });
  }

  function showFeedback(msg, type) {
    if (!formFeedback) return;
    formFeedback.textContent = msg;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});
