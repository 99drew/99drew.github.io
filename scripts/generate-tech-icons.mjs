// Gera versões brancas dos logos de tecnologias/ferramentas a partir do pacote
// simple-icons (MIT), pra usar como <img> nos cards de Skills.
// Rodar com: node scripts/generate-tech-icons.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.join(__dirname, "..", "node_modules", "simple-icons", "icons");
const OUT_DIR = path.join(__dirname, "..", "src", "img", "icons", "tech");

mkdirSync(OUT_DIR, { recursive: true });

// slug (arquivo em simple-icons/icons) -> nome do arquivo de saída
const ICONS = {
  html5: "html5",
  css: "css3",
  javascript: "javascript",
  php: "php",
  python: "python",
  wordpress: "wordpress",
  git: "git",
  n8n: "n8n",
  react: "react",
  typescript: "typescript",
  bem: "bem",
  bitbucket: "bitbucket",
  jira: "jira",
  runrundotit: "runrunit",
  googleanalytics: "google-analytics",
  googlesearchconsole: "google-search-console",
  semrush: "semrush",
  looker: "looker-studio",
};

for (const [slug, outName] of Object.entries(ICONS)) {
  const svg = readFileSync(path.join(SRC_DIR, `${slug}.svg`), "utf8");
  // simple-icons SVGs usam currentColor implicitamente (sem fill no path);
  // fixamos fill="#fff" no <svg> raiz pra sempre renderizar branco.
  const white = svg.replace("<svg ", '<svg fill="#fff" ');
  writeFileSync(path.join(OUT_DIR, `${outName}.svg`), white);
  console.log("gerado", outName + ".svg");
}
