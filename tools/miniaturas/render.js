// Genera una miniatura PNG (1280x720) a partir de template.html
// Uso: node render.js --rank "PRESTIGE 02" --series "SPLIT SCREEN BASS" --title "ARENA DNB\nMIX" --duration "60 MIN" --out output/prestige-02.png
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

function parseArgs() {
  const args = process.argv.slice(2);
  const out = {};
  for (let i = 0; i < args.length; i += 2) {
    out[args[i].replace(/^--/, "")] = args[i + 1];
  }
  return out;
}

async function main() {
  const args = parseArgs();
  const rank = args.rank || "PRESTIGE 01";
  const series = args.series || "SPLIT SCREEN BASS";
  const title = (args.title || "TACTICAL DNB\\nMIX").replace(/\\n/g, "<br>");
  const duration = args.duration || "45 MIN";
  const outPath = args.out || "output/miniatura.png";

  let html = fs.readFileSync(path.join(__dirname, "template.html"), "utf8");

  // En local: `npm install` + `npx playwright install chromium` y no hace falta nada más.
  // Si tienes un Chromium propio (p.ej. un entorno con navegador preinstalado),
  // exporta PLAYWRIGHT_CHROMIUM_PATH con la ruta al ejecutable.
  const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH;
  const browser = await chromium.launch(executablePath ? { executablePath } : {});
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.setContent(html);
  await page.evaluate(({ rank, series, title, duration }) => {
    document.querySelector('[data-field="rank"]').textContent = rank;
    document.querySelector('[data-field="series"]').textContent = series;
    document.querySelector('[data-field="title"]').innerHTML = title;
    document.querySelector('[data-field="duration"]').textContent = duration;
  }, { rank, series, title, duration });

  fs.mkdirSync(path.dirname(path.join(__dirname, outPath)), { recursive: true });
  await page.screenshot({ path: path.join(__dirname, outPath) });
  await browser.close();
  console.log("Miniatura generada en", outPath);
}

main();
