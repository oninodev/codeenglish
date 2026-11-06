# English Studio

Aplicación web autocontenida para estudiar inglés americano desde A1 hasta C2. Presenta el libro completo en una experiencia de lectura enfocada, con búsqueda, modo oscuro y progreso local sin dependencias externas.

## Ejecutar localmente

No requiere instalación ni compilación. Sirve la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 4173
```

Después abre `http://localhost:4173`.

## Funciones principales

- 493 páginas y 48 capítulos organizados por nivel.
- Búsqueda en todo el contenido y filtros por categoría.
- Marcadores, respuestas y avance guardados en `localStorage`.
- Exportación e importación del progreso en JSON.
- Modo claro/oscuro y tres tamaños de lectura.
- Encabezado fijo, indicador de avance y reanudación del punto de lectura de cada tema.
- Diseño adaptable, navegación por teclado y estilos de impresión.

## Estructura

La aplicación completa está en `index.html` y se sirve de forma estática. No requiere instalación, compilación ni servicios externos.

Al modificarlo, conviene comprobar al menos:

1. La portada y los filtros del catálogo.
2. La apertura, navegación y reanudación de un capítulo.
3. La búsqueda dentro del libro y los filtros del índice.
4. La exportación e importación del progreso.
5. Los diseños de escritorio y móvil.

## Privacidad

El progreso permanece en el navegador del estudiante. La aplicación no envía respuestas, notas ni historial de estudio a ningún servidor.
