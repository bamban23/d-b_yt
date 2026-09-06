# Render de vídeo: imagen estática + audio

Para los mixes largos (música ambiental, el vídeo es secundario) no
hace falta visualizer ni loop animado: basta con **una imagen fija +
el audio del mix** fusionados en un único MP4. Es el formato que usan
la mayoría de canales de mixes/lo-fi/estudio.

## Uso

```bash
./render.sh imagen.png audio.wav salida.mp4
```

- `imagen.png` — la miniatura/fondo branded (recomendado 1920x1080 o
  2560x1440, incluso reutilizando el mismo diseño del lomo de caja sin
  el cronómetro dinámico).
- `audio.wav` (o `.mp3`, `.flac`...) — el mix completo.
- `salida.mp4` — el vídeo final, listo para subir a YouTube. Dura
  exactamente lo que dure el audio (`-shortest`).

Requiere `ffmpeg` instalado en tu máquina (`brew install ffmpeg` /
`sudo apt install ffmpeg` / `choco install ffmpeg`). No lo hemos
podido probar en este entorno porque aquí solo hay un ffmpeg mínimo
(el que usa Playwright para grabar vídeo, sin los códecs de audio real)
— pero el comando es estándar y funciona en cualquier ffmpeg completo.

## Qué hace exactamente

```
ffmpeg -loop 1 -i imagen.png -i audio.wav \
  -c:v libx264 -tune stillimage -pix_fmt yuv420p \
  -c:a aac -b:a 192k \
  -shortest \
  salida.mp4
```

- `-loop 1` + `-tune stillimage`: la imagen se mantiene fija todo el
  vídeo, codificada de forma eficiente (casi no pesa más por los
  fotogramas repetidos).
- `-c:a aac -b:a 192k`: audio en el formato que espera YouTube.
- `-shortest`: corta el vídeo en cuanto termina el audio.

## Si más adelante queréis algo de movimiento

Sin pasar a un visualizer reactivo completo, una alternativa barata es
un `.mp4` de 10-20s con una animación sutil en bucle (partículas,
scanline, pulso del logo) en vez de una imagen fija — mismo comando,
cambiando `-loop 1 -i imagen.png` por `-stream_loop -1 -i loop.mp4`.
Es una mejora futura, no necesaria para lanzar.
