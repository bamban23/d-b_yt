#!/usr/bin/env bash
# Fusiona una imagen estática + un audio en un único MP4 listo para subir a YouTube.
# Uso: ./render.sh imagen.png audio.wav salida.mp4
set -euo pipefail

if [ $# -ne 3 ]; then
  echo "Uso: $0 <imagen> <audio> <salida.mp4>" >&2
  exit 1
fi

IMG="$1"
AUDIO="$2"
OUT="$3"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg no está instalado. Instálalo con:" >&2
  echo "  macOS:   brew install ffmpeg" >&2
  echo "  Ubuntu:  sudo apt install ffmpeg" >&2
  echo "  Windows: choco install ffmpeg" >&2
  exit 1
fi

ffmpeg -y -loop 1 -i "$IMG" -i "$AUDIO" \
  -c:v libx264 -tune stillimage -pix_fmt yuv420p \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
  -c:a aac -b:a 192k \
  -shortest \
  "$OUT"

echo "Listo: $OUT"
