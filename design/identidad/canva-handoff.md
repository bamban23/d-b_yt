# Traspaso a Canva — plantilla de miniatura

Ficha con todos los valores exactos (posición, tamaño, color, tipografía)
de la plantilla `MainTacticalHUD.dc.html` para reconstruirla en Canva.
Una vez montada ahí, se mueve todo con arrastre normal — sin depender
de editar código.

> **Referencia visual**: intenté generar una captura de pantalla exacta
> aquí, pero este entorno no puede cargar las tipografías de Google
> Fonts al renderizar (fallan a una fuente genérica y el texto se
> descuadra). El lienzo publicado en Claude Design SÍ carga las fuentes
> bien en un navegador normal, así que úsalo como referencia visual real
> mientras reconstruyes con esta ficha:
> [claude.ai/code/artifact/4c522442-7414-446d-a391-6c78914c874a](https://claude.ai/code/artifact/4c522442-7414-446d-a391-6c78914c874a)

## Lienzo

- Tamaño: **1280 × 720 px**
- Fondo: `#05070a` (casi negro) con un degradado radial suave azul
  (`#1f6fff` al 22%) arriba-derecha y lima (`#b6ff3c` al 12%)
  abajo-izquierda — opcional, se puede aproximar con la herramienta de
  degradado de Canva o simplemente dejar el fondo plano.

## Paleta

| Uso | Color |
|---|---|
| Fondo / panel | `#05070a` / `#0d1117` |
| Lima (acento principal) | `#b6ff3c` |
| Azul | `#1f6fff` |
| Naranja | `#ff5a1f` |
| Naranja claro (texto alerta) | `#ffb38a` |
| Cian (HUD táctico) | `#4ce0d2` |
| Texto/blanco | `#f5f5f0` |
| Gris apagado | `#7a8a91` |

## Tipografías (buscar por nombre en Canva, son Google Fonts gratuitas)

- **Turret Road** (peso 700/800) — logo, lomo, "ADVISORY", título del mix.
- **Rajdhani** (peso 600/700) — texto del banner de alerta.
- **Share Tech Mono** — todas las lecturas tipo HUD (duración, rango,
  BPM, nombres de escuadra, contador de pista).

## Capas (posición = esquina superior izquierda del elemento)

### Foto de fondo
- Caja: x=170, y=116, ancho=1054, alto=548 — aquí va la foto generada
  con IA a sangre completa dentro de esta caja.

### Lomo lateral
- Franja: x=0, y=0, ancho=96, alto=720, fondo negro, borde derecho 2px
  lima al 40%.
- Icono de barras (5 barras de color, estilo ecualizador) centrado
  arriba, ~24px del borde superior.
- Texto vertical "MOST WANTED SESSIONS": Turret Road 800, 30px, blanco,
  espaciado de letra 3px, rotado 90° (se lee de abajo a arriba).
- Texto pequeño "NTSC-BASS" al pie: Share Tech Mono 10px, gris, vertical.

### Badge + sticker de aviso (columna izquierda superior)
- Grupo en x=116, y=24, ancho=220.
- Badge cuadrado 88×88: fondo `#0d1117`, borde 2px lima, radio 6px.
  - "MWS": Turret Road 800, 22px, lima.
  - "ADVISORY": Share Tech Mono 9px, blanco, espaciado 1px.
- Sticker de 3 franjas debajo (separación 8px), ancho 220:
  - Franja negra: "BASS" — Turret Road 700, 13px, blanco, espaciado 4px.
  - Franja blanca: "ADVISORY" — Turret Road 800, **40px**, negro,
    espaciado 1px (la palabra grande, como el Parental Advisory real
    pero con nuestro texto).
  - Franja negra: "EXTREME SUB BASS" — Turret Road 700, 13px, blanco,
    espaciado 1.5px.

### Sello de edad (esquina superior derecha)
- Grupo en x=1158, y=24, ancho=90.
- Caja 64×64: fondo `#0d1117`, borde 2px naranja, radio 4px.
  - "18+": Turret Road 800, 20px, naranja.
- Debajo: "RATED BY MWS" — Share Tech Mono 8px, gris.

### Banner de alerta
- x=190, y=136, ancho=230, fondo negro al 55%, borde izquierdo 4px
  naranja, padding 8x14.
- Icono de aviso (triángulo con exclamación, trazo naranja).
- Texto "BASS SECTOR ENGAGED": Rajdhani bold, 14px, `#ffb38a`,
  mayúsculas, espaciado 1px.

### Minimapa + escuadra
- Grupo en x=190, y=190, ancho=150, alto=270.
- Fila superior: "DROPS 12" (cian, izquierda) / "BPM 174" (naranja,
  derecha) — Share Tech Mono 12px.
- Mapa 150×150: fondo verde-azulado oscuro, borde cian, rejilla sutil,
  anillo circular 110×110, rombo cian brillante en el centro (posición
  propia), 3 puntos de color (1 lima, 2 naranja) como jugadores.
- Lista de escuadra (3 filas): cuadradito de color + nombre — Share
  Tech Mono 11px: `DJ_GHOST` (cian), `BASSRUNNER` (lima), `NIGHT0PS`
  (naranja).

### Icono de cámara
- Círculo 34×34 en x=190, y=616, borde cian, fondo negro al 50%, icono
  de cámara cian dentro.

### Contador "Now Playing" + loadout
- Grupo en x=1028, y=520, ancho=220, alto=100, alineado a la derecha.
- "NOW PLAYING": Share Tech Mono 11px, gris, espaciado 2px.
- "TRACK 03 / 12": "TRACK 03" en Share Tech Mono 34px cian (con brillo
  suave), "/ 12" en Share Tech Mono 20px gris.
- Fila de 4 iconos con número debajo cada uno (auriculares "1", diana
  "2" en cian; rayo "1", llama "6" en naranja).

### Rango + intensidad + título
- Grupo en x=140, y=484, ancho=880, alto=180, contenido pegado abajo.
- Fila: "PRESTIGE 07" (Share Tech Mono 14px, naranja, espaciado 3px) +
  5 estrellas (17×17, 3 encendidas en cian/lima, 2 apagadas en gris) —
  medidor de intensidad rediseñado, no las estrellas de GTA.
- Título "TACTICAL DNB MIX" (2 líneas): Turret Road 800, 52px, blanco,
  mayúsculas, espaciado 1px, con resplandor lima suave.

### Cronómetro de duración
- x=1120, y=648, ancho=128, alto=40, fondo negro al 60%, borde 1px lima
  al 40%, radio 4px.
- Icono de nota musical (lima) + "46:11" — Share Tech Mono 20px, lima.

## Después de reconstruirlo en Canva

Una vez montada la plantilla ahí, guárdala como plantilla base y
duplícala para cada vídeo — solo cambian el título, "PRESTIGE XX", la
duración, el track counter y la foto de fondo. El resto de la marca
(`docs/02-branding.md`, `docs/06-guia-guinos-vs-plagio.md`) sigue
mandando sobre qué se puede y no se puede usar.
