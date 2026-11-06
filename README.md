# English Studio

Aplicación web autocontenida para estudiar inglés americano desde A1 hasta C2. Incluye el libro completo, búsqueda, tarjetas, actividades, modo oscuro, notas y progreso local sin dependencias externas.

## Ejecutar localmente

No requiere instalación ni compilación. Sirve la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 4173
```

Después abre `http://localhost:4173`.

## Funciones principales

- 493 páginas y 48 capítulos organizados por nivel.
- Búsqueda en todo el contenido y filtros por categoría.
- 369 tarjetas con pronunciación mediante la voz del navegador.
- Marcadores, notas, respuestas y avance guardados en `localStorage`.
- Exportación e importación del progreso en JSON.
- Modo claro/oscuro y tres tamaños de lectura.
- Encabezado fijo, indicador de avance y reanudación del punto de lectura de cada tema.
- Diseño adaptable, navegación por teclado y estilos de impresión.

## Estructura

El proyecto se distribuye como un único `index.html`. El contenido del libro, el PDF original, los estilos y la lógica están incorporados para que pueda copiarse y utilizarse sin conexión ni servicios externos.

Al modificarlo, conviene comprobar al menos:

1. La portada y los filtros del catálogo.
2. La apertura, navegación y reanudación de un capítulo.
3. Las tarjetas y la síntesis de voz.
4. La exportación e importación del progreso.
5. Los diseños de escritorio y móvil.

## Privacidad

El progreso permanece en el navegador del estudiante. La aplicación no envía respuestas, notas ni historial de estudio a ningún servidor.
