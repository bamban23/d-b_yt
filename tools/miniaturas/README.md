# Generador de miniaturas — Split Screen Bass

Plantilla HTML/CSS (`template.html`) con la identidad visual del canal
(paleta lima/azul/naranja, marco "split screen", esquinas HUD,
scanlines) y un script (`render.js`) que la renderiza a PNG 1280x720
usando Playwright.

## Uso

```bash
npm install
npx playwright install chromium   # solo la primera vez, descarga el navegador
npm run render -- --rank "PRESTIGE 02" --series "SPLIT SCREEN BASS" \
  --title "ARENA DNB\nMIX" --duration "60 MIN" --out output/prestige-02.png
```

Parámetros:

- `--rank` — texto superior izquierdo (número de sesión/prestigio).
- `--series` — nombre de la serie/playlist.
- `--title` — título grande (usa `\n` para forzar salto de línea).
- `--duration` — duración mostrada abajo a la derecha.
- `--out` — ruta de salida del PNG (relativa a esta carpeta).

## Editar el diseño

Todo el diseño vive en `template.html` (HTML + CSS embebido, sin
dependencias externas). Cámbialo directamente para ajustar colores,
tipografía o composición; `render.js` solo rellena los campos marcados
con `data-field`.

## Alternativa manual (sin código)

Si alguien del equipo prefiere no tocar código, se puede recrear la
misma plantilla como diseño editable en **Canva** o **Figma** y
exportar a 1280x720 px. Recomendación de uso:

- **Canva** — más rápido para variaciones puntuales, plantillas ya
  hechas de "gaming/esports thumbnail" como punto de partida.
- **Figma** — mejor si vais a mantener un sistema de componentes
  (colores, textos, iconos) reutilizable entre varias personas.
- **Photopea** — alternativa gratuita tipo Photoshop en el navegador,
  útil si ya tenéis assets en `.psd`.

Sea cual sea la vía, el criterio de marca (paleta, tipografía HUD,
elementos recurrentes) es el que está descrito en
`../../docs/02-branding.md` — ese documento manda sobre cualquier
herramienta.
