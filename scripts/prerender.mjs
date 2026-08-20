// Prerenderização estática do build. O site é uma SPA de rota única
// (createRoot().render(), não hydrateRoot()) — então é seguro inlinear o
// HTML já renderizado dentro de <div id="root"> no build/index.html: crawlers
// e curl passam a ver o conteúdo real sem executar JS, e o React apenas
// substitui essa árvore inteira no mount, sem risco de hydration mismatch.
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".ico": "image/x-icon", ".pdf": "application/pdf",
  ".txt": "text/plain", ".xml": "application/xml",
};

const PORT = 8942;
const buildDir = "build";
const server = createServer((req, res) => {
  const reqPath = decodeURIComponent(req.url.split("?")[0]);
  let filePath = path.join(buildDir, reqPath === "/" ? "index.html" : reqPath);
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = path.join(buildDir, "index.html");
  }
  res.setHeader("Content-Type", MIME[path.extname(filePath)] || "application/octet-stream");
  createReadStream(filePath).pipe(res);
});
await new Promise((resolve) => server.listen(PORT, resolve));

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || undefined,
});
const page = await browser.newPage();
await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle" });
await page.waitForSelector("#Contact");
const rootHtml = await page.$eval("#root", (el) => el.innerHTML);
await browser.close();
server.close();

const indexPath = "build/index.html";
const original = await readFile(indexPath, "utf8");
if (!original.includes('<div id="root"></div>')) {
  throw new Error("build/index.html não tem o placeholder <div id=\"root\"></div> esperado — build mudou?");
}
const prerendered = original.replace('<div id="root"></div>', `<div id="root">${rootHtml}</div>`);
await writeFile(indexPath, prerendered);
console.log(`Prerender ok: ${rootHtml.length} bytes injetados em ${indexPath}`);
