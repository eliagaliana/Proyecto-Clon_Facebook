# 📘 Facebook Clone - Interfaz Social 👥

Este proyecto es una recreación de la interfaz de usuario (UI) de Facebook, desarrollada para perfeccionar habilidades en maquetación compleja. Se ha construido bajo la metodología **Mobile First**, priorizando la visualización del _Feed_ en pantallas pequeñas y expandiendo la estructura a tres columnas en escritorio.

El uso de **JavaScript** permite simular una experiencia de "Single Page Application", manejando interacciones y datos dinámicos sin recargar la página.

## 🏗️ Funcionalidades y Estructura

El proyecto replica los componentes clave de la red social:

- **Header "Sticky":** Barra de navegación superior fija con buscador, navegación por iconos y gestión de perfil (desplegable con JS).
- **Sección de Historias (Stories Reel):**
- **Feed de Noticias:**
- **Layout de 3 Columnas (Desktop):**
  - Izquierda: Accesos directos y menú de navegación.
  - Centro: Feed principal e historias.
  - Derecha: Lista de contactos y publicidad (se oculta automáticamente en móvil/tablet).

## 📂 Estructura del Archivo

El código está modularizado para facilitar el mantenimiento:

- `index.html` → Estructura semántica (uso de `main`, `section`, `aside`).
- `/css/style.css` → Estilos globales, con uso intensivo de **CSS Grid** para el layout principal.
- `/js/script.js` → Lógica para renderizar posts e interactividad de botones.
- `/images/` → Avatares y recursos gráficos.
- `README.md` → Documentación del proyecto.

## 🧰 Tecnologías Utilizadas

- **HTML5:** Semántica estructural para aplicaciones web.
- **CSS3:**
  - **Flexbox:** Para la alineación interna de componentes (tarjetas, historias).
  - **CSS Grid:** Para la estructura general de la página (Header + 3 columnas).
  - **Media Queries:** Control de puntos de ruptura (breakpoints) para ocultar paneles laterales en móvil.
- **JavaScript (Vanilla):**
  - Manejo de eventos (`addEventListener`) para interacciones de usuario.

## 📈 Resultados Destacados

- 🧩 **Maquetación Compleja:** Gestión exitosa de un layout que evoluciona de 1 columna (Móvil) a 2 (Tablet) y 3 columnas (Desktop).
- 🖱️ **Experiencia de Usuario (UX):** Estados _active_ y _hover_ en todos los elementos interactivos, replicando el _look & feel_ oficial.

## 📝 Conclusiones

Este clon de Facebook demuestra la capacidad de construir interfaces densas en información sin sacrificar el orden visual. **El proyecto refleja la importancia de un diseño limpio, jerarquizado y adaptable, principios fundamentales para el desarrollo web moderno, apoyados por la lógica de programación.**

## 📧 Contacto

Si quieres discutir sobre cómo implementé el Grid o la lógica de los posts, contáctame:

- **Autor:** Elia Galiana
- **Portfolio web:** https://eliagaliana.github.io/elia-galiana.github.io/)
- **LinkedIn:** www.linkedin.com/in/elia-galiana-sanabria-74992431a
