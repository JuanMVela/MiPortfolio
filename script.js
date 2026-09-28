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
  "en": {
    "nav.about": "About me",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "Hi, I’m <br><span class=\"highlight-text\">Juan Manuel</span>",
    "hero.subtitle": "I work as a mechanical drafter and designer at an engineering company and I am currently studying for a <strong>University Technical Degree in Programming at UTN FRGP</strong>. My professional experience focuses on design and technical documentation. I am now building on that background by learning programming and developing academic projects, seeking to broaden my knowledge and grow professionally.",
    "hero.btn_projects": "View featured projects",
    "hero.btn_contact": "Get in touch",
    "hero.link_github": "View projects on GitHub",
    "hero.status": "Available",
    "about.tag": "Get to know me",
    "about.title": "About me",
    "about.card1_title": "Education",
    "about.card1_desc": "I am currently studying for a <strong>University Technical Degree in Programming</strong> at <strong>Universidad Tecnológica Nacional, General Pacheco Regional Faculty (UTN FRGP)</strong>, developing programming and database skills through practical projects.",
    "about.card1_item1": "Algorithms and data structures",
    "about.card1_item2": "Object-oriented programming (OOP) in C# .NET",
    "about.card1_item3": "Layered architecture, relational databases and technical SEO",
    "about.card3_title": "Professional Experience (Engineering)",
    "about.card3_desc": "I work as a <strong>designer and CAD drafter</strong> at an <strong>engineering company</strong>, producing technical documentation with organization and attention to detail, as well as 3D modeling and design.",
    "about.card3_item1": "General arrangement, section and detail drawings with AutoCAD",
    "about.card3_item2": "Introductory pipe routing with CADWorx",
    "about.card3_item3": "3D modeling of mechanical parts and assemblies with SolidWorks",
    "about.card2_title": "Full Stack Training (1 Year)",
    "about.card2_desc": "I completed a one-year intensive <strong>Full Stack web development</strong> course, gaining proficiency in modern frontend, backend and database technologies.",
    "about.card2_item1": "Frontend: HTML5, CSS3, Sass, JavaScript and React",
    "about.card2_item2": "Backend: Node.js, Express and RESTful API design",
    "about.card2_item3": "NoSQL databases: MongoDB &amp; data modeling",
    "skills.tag": "Expertise",
    "skills.title": "Skills and Technologies",
    "skills.cat1_title": "Programming and databases",
    "skills.cat1_desc": "Knowledge developed during my degree and applied to academic projects involving object-oriented programming, desktop applications and databases.",
    "skills.cat2_title": "Web development training",
    "skills.cat2_desc": "I completed a one-year intensive Full Stack development course. I am currently strengthening my programming foundations through my degree.",
    "skills.cat3_title": "Engineering and CAD design",
    "skills.cat3_desc": "General arrangement, section and detail drawings for mechanical projects, with organization and attention to detail. Engineering documentation and 3D modeling.",
    "skills.cat4_title": "Development tools",
    "skills.cat4_desc": "Tools I use to program, work with databases and manage code for team-based academic projects.",
    "projects.tag": "Practical portfolio",
    "projects.title": "Featured Projects",
    "projects.card1_cat": "Engineering · Surveying and technical documentation",
    "projects.card1_title": "Scanner survey and piping layout — TGN",
    "projects.card1_desc": "I took part in an on-site scanner survey for TGN with the team. Using the resulting point cloud, I produced general plan layouts of the site and its piping, preserving the surveyed pipe diameters to document the existing installations.",
    "projects.card2_cat": "WEB DEVELOPMENT",
    "projects.card2_title": "Website inspired by an engineering company",
    "projects.card2_desc": "I developed a website inspired by the engineering company where I work, using my professional environment as a reference to apply my web development knowledge and create my own proposal.",
    "projects.btn_site": "View website",
    "contact.tag": "Let’s connect",
    "contact.title": "Contact",
    "contact.info_title": "Have a proposal or project in mind?",
    "contact.info_desc": "I am currently open to professional opportunities in <strong>.NET</strong>, <strong>Full Stack</strong> development or projects related to <strong>engineering and CAD</strong>. Feel free to get in touch to collaborate.",
    "contact.wa_title": "WhatsApp",
    "contact.wa_desc": "+54 9 11 1234-5678 (Direct message)",
    "contact.email_title": "Email",
    "form.name_label": "Full name *",
    "form.email_label": "Email address *",
    "form.subject_label": "Subject *",
    "form.message_label": "Message *",
    "form.submit_btn": "Send message",
    "form.name_placeholder": "Your full name",
    "form.email_placeholder": "you@example.com",
    "form.subject_placeholder": "What would you like to discuss?",
    "form.message_placeholder": "Tell me about your project or question",
    "footer.copy": "University Technical Degree in Programming — <strong>UTN FRGP</strong> (Programming III).",
    "footer.bottom": "© 2026 Web Developer. All rights reserved. Optimized for SEO &amp; Accessibility.",
    "form.validation_error": "Please complete all required fields.",
    "form.email_error": "Please enter a valid email address.",
    "form.success_msg": "This form is not yet connected to a delivery service. Please use the contact links.",
    "seo_title": "Juan Manuel | Web Development & CAD",
    "seo_desc": "Juan Manuel’s portfolio: programming projects, web development, engineering and CAD.",
    "extra.69": "Project images coming soon",
    "extra.70": "Scanner survey",
    "extra.71": "Point cloud",
    "extra.72": "Plan layouts",
    "extra.73": "Piping",
    "extra.74": "Project images coming soon",
    "extra.75": "Close ✕"
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
  // Español: se captura del HTML para respetar el contenido editado.
  TRANSLATIONS.es = {};
  document.querySelectorAll("[data-i18n]").forEach(el => {
    TRANSLATIONS.es[el.dataset.i18n] = el.innerHTML;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    TRANSLATIONS.es[el.dataset.i18nPlaceholder] = el.placeholder;
  });
  TRANSLATIONS.es.seo_title = document.title;
  TRANSLATIONS.es.seo_desc = document.querySelector('meta[name="description"]').content;
  const translatedAttributes = [];
  document.querySelectorAll("[aria-label], [alt], [title]").forEach(el => {
    ["aria-label", "alt", "title"].forEach(attr => {
      if (el.hasAttribute(attr)) translatedAttributes.push([el, attr, el.getAttribute(attr)]);
    });
  });
  let currentLang = readPreference("portfolio-lang") === "en" ? "en" : "es";
  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      applyLanguage(currentLang);
    });
  }

  function applyLanguage(lang) {
    root.setAttribute("lang", lang);
    savePreference("portfolio-lang", lang);

    const dict = TRANSLATIONS[lang] || TRANSLATIONS.es || {};
    const attributeTranslations = {"Volver al inicio del portfolio": "Back to portfolio home", "Navegación principal del sitio": "Main navigation", "Abrir menú de navegación": "Open navigation menu", "Presentación y bienvenida": "Introduction and welcome", "Ver lista de proyectos desarrollados": "View featured projects", "Ir al formulario de contacto": "Go to contact form", "Imágenes del proyecto 1": "Project 1 images", "Ampliar imagen": "Enlarge image", "Imagen anterior": "Previous image", "Elegir imagen": "Choose image", "Imagen siguiente": "Next image", "Imágenes del proyecto 2": "Project 2 images", "Diseño Web Escritorio": "Desktop web design", "Diseño Web Móvil": "Mobile web design", "Visitar el sitio web publicado en GitHub Pages": "Visit the website hosted on GitHub Pages", "Volver arriba": "Back to top", "Enlaces rápidos del pie de página": "Footer quick links", "Imagen ampliada del proyecto": "Enlarged project image", "Cerrar imagen": "Close image", "Foto de perfil de Juan Manuel": "Profile photo of Juan Manuel", "Layout Digitalizado": "Digitized layout", "Imagen Satelital": "Satellite image", "Tecnologías de backend": "Backend technologies", "Tecnologías de frontend": "Frontend technologies", "Herramientas de ingeniería y CAD": "Engineering and CAD tools", "Herramientas de trabajo": "Work tools", "Cambiar entre tema Arcane y Joker": "Switch between Arcane and Joker themes", "Visitar el perfil y repositorios en GitHub (abre en pestaña nueva)": "Visit my GitHub profile and repositories (opens in a new tab)", "Enviar un mensaje directo de WhatsApp (abre en pestaña nueva)": "Send a WhatsApp message (opens in a new tab)", "Enviar un correo electrónico a contacto.programador@ejemplo.com": "Send an email to contacto.programador@ejemplo.com", "Ver el perfil de GitHub del desarrollador (abre en pestaña nueva)": "View the developer’s GitHub profile (opens in a new tab)", "Ver el perfil profesional en LinkedIn (abre en pestaña nueva)": "View professional profile on LinkedIn (opens in a new tab)", "Ver proyectos en GitHub (abre en pestaña nueva)": "View projects on GitHub (opens in a new tab)"};
    translatedAttributes.forEach(([el, attr, spanish]) => {
      el.setAttribute(attr, lang === "en" ? (attributeTranslations[spanish] || spanish) : spanish);
    });
    if (formFeedback) { formFeedback.textContent = ""; formFeedback.className = "form-feedback"; }



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

    updateThemeLabel();

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
  const savedTheme = readPreference("portfolio-theme") || "arcane";
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const activeTheme = root.getAttribute("data-theme") || "arcane";
      const nextTheme = activeTheme === "arcane" ? "joker" : "arcane";
      setTheme(nextTheme);
    });
  }

  // Comunicar el estado actual y la acción también al cambiar de idioma.
  function updateThemeLabel() {
    if (!themeToggle) return;
    const active = root.getAttribute("data-theme") === "joker" ? "Dark Knight" : "Arcane";
    const next = active === "Arcane" ? "Dark Knight" : "Arcane";
    const label = root.lang === "en"
      ? "Active theme: " + active + ". Switch to " + next
      : "Tema activo: " + active + ". Cambiar a " + next;
    themeToggle.setAttribute("aria-label", label);
    themeToggle.title = label;
  }

  function setTheme(theme) {
    theme = theme === "joker" ? "joker" : "arcane";
    root.setAttribute("data-theme", theme);
    updateThemeLabel();
    savePreference("portfolio-theme", theme);
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

      const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.es || {};
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
      const successTemplate = dict["form.success_msg"] || "El formulario todavía no está conectado a un servicio de envío. Usá los enlaces de contacto.";
      showFeedback(`¡${name}! ${successTemplate}`, "success");

    });
  }

  function showFeedback(msg, type) {
    if (!formFeedback) return;
    formFeedback.textContent = msg;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});


// La página funciona incluso si el navegador bloquea el almacenamiento.
function readPreference(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch { /* Preferencia solo en esta sesión. */ }
}

document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("image-dialog");
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

  document.querySelectorAll("[data-gallery]").forEach(gallery => {
    const slides = Array.from(gallery.querySelectorAll(".gallery-slide"));
    const controls = gallery.querySelector(".gallery-controls");
    gallery.querySelector(".gallery-placeholder").hidden = slides.length > 0;
    controls.hidden = slides.length < 2;
    if (!slides.length) return;
    let current = 0;
    slides.forEach((slide, index) => {
      const button = slide.querySelector(".gallery-image-button");
      button.addEventListener("click", () => {
        const img = slide.querySelector("img");
        const fullImage = dialog.querySelector("img");
        fullImage.src = img.src;
        fullImage.alt = img.alt;
        dialog.querySelector("p").textContent = slide.querySelector("figcaption")?.textContent || img.alt;
        dialog.showModal();
      });
    });
    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.hidden = i !== current;
      });
    }
    gallery.querySelector("[data-prev]").addEventListener("click", () => show(current - 1));
    gallery.querySelector("[data-next]").addEventListener("click", () => show(current + 1));
    gallery.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        show(current + (event.key === "ArrowRight" ? 1 : -1));
      }
    });
    show(0);
  });
});
