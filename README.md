# English Studio

Aplicación web autocontenida para estudiar inglés americano desde A1 hasta C2. Combina el libro completo con una biblioteca de lecturas temáticas en inglés, audio sincronizado, búsqueda, modo oscuro y progreso local sin dependencias externas.

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
- Cursos de Philosophy, History, Startups, Economy, Cinema y Literature.
- 93 lecturas desarrolladas con contexto, análisis, aplicaciones, preguntas y vocabulario clave.
- Tiempo estimado de lectura visible en el catálogo y dentro de cada capítulo.
- Narración con una sola voz inglesa seleccionada automáticamente y seguimiento palabra por palabra.
- Diseño adaptable y navegación por teclado.

## Estructura

La aplicación completa está en `index.html` y se sirve de forma estática. No requiere instalación, compilación ni servicios externos.

Al modificarlo, conviene comprobar al menos:

1. La portada, los filtros del catálogo y el selector de cursos de Lecturas.
2. La apertura, navegación y reanudación de un capítulo.
3. La reproducción, pausa, reinicio y resaltado de palabras en una lectura.
4. La búsqueda dentro del libro y los filtros del índice.
5. La exportación e importación del progreso.
6. Los diseños de escritorio y móvil.

## Privacidad

El progreso permanece en el navegador del estudiante. La aplicación no envía respuestas, notas ni historial de estudio a ningún servidor.
