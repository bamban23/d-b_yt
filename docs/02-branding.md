# Branding e identidad visual

## Nombre del canal: Most Wanted Sessions ✅ (definitivo)

Guiño directo al "wanted level" de GTA (las estrellas de búsqueda),
sin usar el nombre de ningún juego ni marca registrada.

**Diligencia hecha antes de cerrarlo:**
- No existe canal de YouTube ni cuenta de Instagram/TikTok con el nombre
  exacto "Most Wanted Sessions" ni "Most Wanted Bass".
- Se descartó **"Most Wanted Bass"** (la opción inicial) por solape
  dentro de la propia escena drum & bass: existen compilaciones
  **"Most Wanted Drum & Bass"** (2017, 2018...) y el DJ/productor
  **Ray Keith** usa el alias **"London's Most Wanted"**. Añadir
  "Sessions" en vez de "Bass" diferencia el nombre de ambos y sigue el
  patrón de naming de series que ya usa el canal (ver más abajo).
- Se descartó **"Respawn Bass"** por chocar con la marca registrada
  "RESPAWN ENTERTAINMENT" (estudio de EA) y con la marca de sillas
  gaming "Respawn" — mismo nicho de audiencia, riesgo de marca real.
- No es una garantía permanente (habría que re-verificar antes de
  registrar el handle definitivo en cada plataforma), pero a fecha de
  esta decisión el nombre está limpio.

## Candidatos descartados (histórico)

1. ~~Split Screen Bass~~ — referencia a la pantalla dividida del
   multijugador local; buena opción pero menos específica que Most
   Wanted Sessions.
2. ~~Respawn Radio~~ / ~~Respawn Bass~~ — descartado, ver arriba.
3. ~~Prestige Sessions~~ — se reutiliza como nombre de una serie interna
   (ver "Naming de series/playlists"), no como nombre de canal.
4. ~~LAN Party Bass~~
5. ~~Killcam Bass~~
6. ~~16:9 Bass~~
7. ~~Wanted Level Bass~~ — la opción intermedia antes de llegar a Most
   Wanted Sessions.

## Identidad visual

Referencia estética, no assets: recreamos la *sensación* de las UI de la
época con diseño propio, nunca capturas ni logos originales.

**Lienzo de identidad (trabajo en curso):**
[claude.ai/code/artifact/4c522442-7414-446d-a391-6c78914c874a](https://claude.ai/code/artifact/4c522442-7414-446d-a391-6c78914c874a)
— direcciones de logo, panel de marca (paleta/tipografía/librería HUD) y
plantilla de miniatura editables en vivo. El código fuente de cada
tablero está versionado en [`design/identidad/`](../design/identidad/);
esa URL es donde se ve y se edita visualmente, y el repo es donde vive
la fuente de verdad. Cuando cerremos una dirección definitiva,
exportamos los assets finales (PNG/SVG del logo, plantilla de miniatura)
como imágenes normales dentro del repo.

- **Paleta principal**: verde lima sobre negro (guiño a "Xbox Live"),
  combinado con azul degradado tipo XMB de PS3, y acentos naranja/rojo
  tipo HUD de shooter militar.
- **Tipografía**: fuentes geométricas/técnicas tipo HUD (estilo
  "Eurostile"/"Bank Gothic"), todo en mayúsculas para títulos, imitando
  menús de rango y logros.
- **Elementos gráficos recurrentes**:
  - Barra de "logro desbloqueado" como transición entre temas del mix.
  - Barra de señal/conexión (como el indicador de ping) como VU-metro del bajo.
  - Marco tipo "pantalla dividida" (2 o 4 cuadrantes) para miniaturas.
  - Textura de escaneo CRT / ruido VHS sutil para dar sensación de TV de tubo.
  - Iconografía de rango/estrellas/prestigio para numerar episodios
    ("Prestige 01", "Prestige 02"...).
- **Guiños por franquicia** (recreados con diseño propio, nunca assets
  reales — detalle y límites en
  [`06-guia-guinos-vs-plagio.md`](06-guia-guinos-vs-plagio.md)):
  - *Modern Warfare*: contador de racha de bajas propio, HUD militar,
    estética de visor/radio táctica.
  - *Halo*: ping de radar/motion tracker propio, paleta nave espacial
    verde-negro, barra de escudo de energía.
  - *Mirror's Edge*: destello rojo "runner vision" que marca el camino
    del beat, motion graphics de velocidad/parkour.
  - *GTA*: estrellas de "búsqueda policial" rediseñadas como medidor de
    intensidad del mix, estética de dial de radio.
  - *FIFA/PES*: marcador de partido y animación de alineación aplicada
    al tracklist del mix.
- **Miniaturas (thumbnails)**: fondo oscuro, tipografía HUD grande,
  silueta abstracta de "jugador" o controlador (dibujo propio, no logo de
  marca), número de sesión bien visible, paleta de 2 colores máximo.
  Se producen con generador de imagen (IA) siguiendo estos criterios de
  marca, sin plantilla de código propia.
- **Vídeo de los mixes**: al ser música ambiental, el vídeo no necesita
  visualizer ni animación — una imagen fija (la misma estética de
  marca) fusionada con el audio es suficiente. Ver
  [`tools/render-video/`](../tools/render-video/) para el script que
  genera el MP4 final.

## Tono de voz

- Directo, entusiasta, "de colega gamer", sin tecnicismos de producción
  musical innecesarios.
- Guiños generacionales concretos ("modo Hardcore a las 3 de la mañana",
  "el pitido del matchmaking") sin nombrar marcas registradas en textos
  promocionales si se busca evitar fricción con Content ID/():
  se puede nombrar el juego como referencia cultural en la descripción
  ("inspirado en la época de los shooters militares de 2007"), evitando
  el uso de logos o nombres como marca en el título si se quiere reducir
  riesgo de reclamos de marca (ver `04-monetizacion.md`).
- Cercano en redes (Shorts, comunidad), casi "meme" en el tono de los
  Shorts, más "inmersivo/atmosférico" en los mixes largos.

## Naming de series/playlists

- **"Prestige Sessions"** — mixes largos (60-120 min), numerados como
  rangos militares/prestigios.
- **"Split Screen"** — mixes cortos (15-25 min) temáticos por mood de juego.
- **"Loading Screen Loops"** — mixes ambientales/chill de bajo bpm para
  estudiar, con estética de pantalla de carga.
- **"Achievement Unlocked"** — serie de Shorts con "stingers" musicales
  estilo logro desbloqueado.
