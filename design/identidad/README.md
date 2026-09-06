# Identidad visual — fuente del lienzo de diseño

> **Estado**: el lienzo de Claude Design sirvió para explorar
> direcciones de logo y cerrar el sistema de marca (colores,
> tipografía, layout), pero su edición por arrastre no es fiable para
> una composición tan densa de capas superpuestas (HUD/carátula) — los
> elementos "saltan" a otro sitio en vez de moverse con libertad. La
> plantilla de miniatura pasa a reconstruirse en **Canva** siguiendo
> [`canva-handoff.md`](canva-handoff.md), donde el movimiento de
> capas sí funciona con normalidad. El lienzo se queda como referencia
> visual (las fuentes se ven bien ahí) y como origen del sistema de
> marca (paleta, tipografía, logo elegido).

Código fuente de los tableros del lienzo de identidad publicado en
Claude Design:
[claude.ai/code/artifact/4c522442-7414-446d-a391-6c78914c874a](https://claude.ai/code/artifact/4c522442-7414-446d-a391-6c78914c874a)

El lienzo en sí (donde se ve, con las fuentes correctas) vive en esa
URL. Estos archivos son la fuente versionada — sin ellos en el repo, el
único sitio donde existía el diseño era la sesión de Claude Code que
lo creó.

## Qué hay aquí

| Archivo | Contenido |
|---|---|
| `Logo1.dc.html` | Dirección A — retícula táctica |
| `Logo2.dc.html` | Dirección B — insignia de prestigio (**elegida**) |
| `Logo3.dc.html` | Dirección C — señal / pantalla partida |
| `BrandBoard.dc.html` | Paleta, tipografía y librería de elementos HUD |
| `Main.dc.html` | Plantilla de miniatura aprobada (lomo de caja) |
| `MainTacticalHUD.dc.html` | Variante de prueba: letras más grandes (Turret Road) + HUD estilo shooter táctico |
| `canvas.json` | Layout: posición de cada tablero en el lienzo |

## Cómo editar y volver a publicar

Esto usa el formato "Design Components" de Claude Design (`.dc.html`).
Para tocarlo:

1. Pide a Claude Code que edite el `.dc.html` correspondiente (o edítalo
   tú mismo si conoces el formato).
2. Vuelve a sembrar el lienzo con el helper de la skill `design` y
   publícalo con la herramienta Artifact, apuntando a la misma URL de
   arriba (así se actualiza en el mismo enlace en vez de crear uno
   nuevo).

También se puede editar directamente en el lienzo publicado (clic para
seleccionar, panel de propiedades, edición de texto en línea) si tienes
permiso de guardado ahí — en ese caso, después de guardar, vuelve a
traer los archivos actualizados a esta carpeta para que no se
desincronicen del repo.

## Reglas de marca que aplican aquí

Todo lo de esta carpeta sigue las reglas de
[`../../docs/06-guia-guinos-vs-plagio.md`](../../docs/06-guia-guinos-vs-plagio.md):
guiños recreados desde cero a la estética de Xbox360/PS3 y a Modern
Warfare, Halo, Mirror's Edge, GTA y FIFA/PES — nunca logos, tipografías
propietarias o assets reales de esas marcas.
