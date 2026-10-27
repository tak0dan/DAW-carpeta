# Quincena 3b — Tareas 6 y 7 (Lenguaje de marcas)

**Período:** Desde el 18 de mayo de 2026 (continuación)

## Tarea 6 — CSS y botón

### Introducción
Mejorar la página `index.php` con una hoja de estilos propia y añadir un botón para navegar al mapa de estaciones.

### Solución
**Hoja de estilos (`styles.css`):**
- Paleta de colores personalizada: verde corporativo #006d77 sobre fondo oscuro #0d2236
- Tarjetas resumen (métricas): total estaciones, bicis disponibles, anclajes libres, última actualización
- Tabla con estilo alternativo en filas y efecto hover
- Diseño responsive
- Botones con estilo de píldora

**Botón "Ver mapa de estaciones":**
- Enlace a `mapearbicis.php`
- Estilo primary (blanco sobre verde)

**Selector de idioma:**
- Botón que alterna entre español e inglés mediante `?lang=es` / `?lang=en`

---

## Tarea 7 — Mostrando la localización de las bicicletas en un mapa

### Introducción
Crear la página `mapearbicis.php` que muestre las estaciones en un mapa interactivo con Leaflet e incluya una barra lateral con la lista de estaciones.

### Solución
**Mapa interactivo:**
- Librería Leaflet con mapas de OpenStreetMap
- Marcadores para cada estación con popups (número, dirección, bicis, anclajes)
- Ajuste automático de zoom para mostrar todas las estaciones

**Barra lateral:**
- Lista de todas las estaciones con información resumida

**Enlace bidireccional mapa ↔ sidebar:**
- Al hacer clic en un marcador → se resalta el elemento correspondiente en la lista (borde verde)
- Al hacer clic en un elemento de la lista → el mapa se centra en el marcador y abre su popup

**Cache de datos:**
- `data.json` generado por `index.php` y reutilizado por `mapearbicis.php`

### Capturas requeridas
- [ ] Captura de index.php con los cambios CSS y el botón
- [ ] Captura de mapearbicis.php con el mapa y la barra lateral
- [ ] Captura de la página en inglés (?lang=en)

### Archivos incluidos
- `index.php` (copia mejorada)
- `mapearbicis.php` (copia)
- `includes/valenbici.php` (copia)
- `styles.css` (copia)
