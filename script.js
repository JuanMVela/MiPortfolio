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
  let currentLang = "es";
  // El HTML conserva el contenido actual mientras las traducciones están pendientes.
  if (langToggle && !TRANSLATIONS.en) {
    langToggle.disabled = true;
    langToggle.title = "Traducción al inglés pendiente";
    langToggle.setAttribute("aria-label", "Traducción al inglés pendiente");
  }
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
  const savedTheme = readPreference("portfolio-theme") || "arcane";
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const activeTheme = root.getAttribute("data-theme") || "arcane";
      const nextTheme = activeTheme === "arcane" ? "joker" : "arcane";
      setTheme(nextTheme);
    });
  }

  function setTheme(theme) {
    theme = theme === "joker" ? "joker" : "arcane";
    root.setAttribute("data-theme", theme);
    if (themeToggle) themeToggle.setAttribute("aria-label", theme === "arcane" ? "Activar tema Joker" : "Activar tema Arcane");
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
    const dots = slides.map((slide, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Ver imagen " + (index + 1));
      dot.addEventListener("click", () => show(index));
      gallery.querySelector(".gallery-dots").append(dot);
      const button = slide.querySelector(".gallery-image-button");
      button.addEventListener("click", () => {
        const img = slide.querySelector("img");
        const fullImage = dialog.querySelector("img");
        fullImage.src = img.src;
        fullImage.alt = img.alt;
        dialog.querySelector("p").textContent = slide.querySelector("figcaption")?.textContent || img.alt;
        dialog.showModal();
      });
      return dot;
    });
    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.hidden = i !== current;
        dots[i].setAttribute("aria-current", String(i === current));
      });
      gallery.querySelector(".gallery-count").textContent = (current + 1) + " / " + slides.length;
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
