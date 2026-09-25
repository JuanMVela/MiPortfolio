# Portfolio Web — UTN FRGP (Programación III)

Portfolio profesional desarrollado bajo las pautas de **SEO, Estructura Semántica y Accesibilidad** de la **Tecnicatura Universitaria en Programación (UTN FRGP)**, integrando un perfil técnico multidisciplinario: **Desarrollo Web Full Stack (.NET, React, Node, MongoDB)** y **Proyectista / Cadista en Ingeniería (AutoCAD, CADWorx, SolidWorks)**.

---

## 🌟 Características Principales

1. **Estructura Semántica y SEO (Pautas UTN FRGP):**
   * Metadatos completos: `viewport`, `title`, `description`, `keywords`, `robots` y OpenGraph.
   * Encabezado `<h1>` único optimizado para indexación.
   * Secciones delimitadas con etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<footer>`).
   * Enlaces descriptivos y accesibles (`aria-label`, foco visible).
   * Datos estructurados Schema.org JSON-LD (`@type: Person`).

2. **Diseño Visual & Temas Duales:**
   * **⚡ Arcane (Jinx):** Paleta ciberpunk con magenta neón (`#FF0099`), violetas profundos de Zaun y azul shimmer (`#00D4FF`).
   * **🃏 The Joker (The Dark Knight):** Paleta siniestra con carmesí intenso (`#B5121F`), púrpura Arkham (`#6E3FA3`) y verde grunge (`#52633D`).
   * Alternador de temas accesible con persistencia en `localStorage`.

3. **Selector de Idioma Dinámico (Español / Inglés):**
   * Botón `🌐 ES / EN` en el encabezado.
   * Soporte completo de internacionalización (i18n) en títulos, subtítulos, tarjetas, habilidades, proyectos y formulario.
   * Guarda la preferencia del visitante automáticamente.

4. **Marco de Fotografía de Perfil Proporcionado:**
   * Cuadro estilizado con altura equiparada al bloque de texto del hero.
   * Proporción vertical (3:4) con resplandor acorde al tema.
   * Carga de foto personal con respaldo automático a ilustración vectorial (`avatar-default.svg`).

5. **Sobre mí y Experiencia:**
   * **Formación Académica:** Tecnicatura Universitaria en Programación — UTN FRGP (Programación III).
   * **Formación Full Stack:** Curso intensivo de 1 año (HTML5, CSS3, Sass, JavaScript, React, Node.js, MongoDB).
   * **Experiencia Profesional:** Proyectista y Cadista en empresa de ingeniería (AutoCAD, CADWorx, SolidWorks).

6. **Canales de Contacto Directo:**
   * **WhatsApp:** Enlace directo con icono oficial SVG y formato para mensajería instantánea.
   * **Email Directo:** Enlace `mailto:` optimizado.
   * **GitHub & LinkedIn:** Enlaces a perfiles profesionales.
   * **Formulario de contacto:** Con validaciones y alertas accesibles.

---

## 📸 Cómo agregar tu propia foto

Colocá tu archivo de imagen con el nombre **`foto-perfil.jpg`** en esta misma carpeta:
📂 `C:/Users/Usuario/.gemini/antigravity/scratch/portfolio-utn`

Si utilizás otro formato o nombre, editalo en la línea 157 de [`index.html`](file:///C:/Users/Usuario/.gemini/antigravity/scratch/portfolio-utn/index.html):
```html
<img src="mi-foto.png" alt="Fotografía de perfil de Desarrollador Web" class="profile-img" />
```

---

## 📱 Cómo configurar tu número de WhatsApp

En el archivo [`index.html`](file:///C:/Users/Usuario/.gemini/antigravity/scratch/portfolio-utn/index.html) (línea 389), cambiá el enlace con tu número de teléfono (código de país + código de área + número):
```html
<a href="https://wa.me/54911XXXXXXXX" target="_blank" rel="noopener noreferrer" class="contact-channel">
```
