// O `bootstrap.min.css` importado inteiro em src/index.js carrega ~91% de
// regras não usadas nesta página (medido via Lighthouse). Esse script roda
// depois do build e remove o CSS que não é referenciado no HTML/JS finais,
// mantendo uma lista de classes que o Bootstrap/react-bootstrap injeta
// dinamicamente (não aparecem como string literal no bundle de forma óbvia
// o suficiente, ou mudam de estado via JS).
import { PurgeCSS } from "purgecss";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const cssDir = path.join("build", "static", "css");
const jsDir = path.join("build", "static", "js");
const cssFile = readdirSync(cssDir).find((f) => f.endsWith(".css"));
const jsFiles = readdirSync(jsDir).filter((f) => f.endsWith(".js"));

const cssPath = path.join(cssDir, cssFile);
const beforeBytes = readFileSync(cssPath, "utf8").length;

const result = await new PurgeCSS().purge({
  content: [
    { raw: readFileSync("build/index.html", "utf8"), extension: "html" },
    ...jsFiles.map((f) => ({ raw: readFileSync(path.join(jsDir, f), "utf8"), extension: "js" })),
  ],
  css: [cssPath],
  safelist: {
    standard: [
      /^collaps/, // collapse, collapsing, collapsed (Navbar)
      /^show$/, "showing",
      /^fade$/,
      /^navbar/,
      /^was-validated$/, /^is-valid$/, /^is-invalid$/, // form validation
      /^offcanvas/, /^modal/, /^dropdown/, // react-bootstrap components used elsewhere
      "visually-hidden",
      /^reveal/, // Reveal.js monta "reveal--" + variant via template literal
      // grid do react-bootstrap: Col/Row montam "col-md-5", "row-cols-md-4"
      // etc. via template literal DENTRO da própria lib — nunca aparecem
      // como string literal completa no nosso bundle, então o PurgeCSS
      // nunca acha e removia essas regras (quebrava todo layout em coluna).
      /^col(-|$)/, /^row-cols/, /^offset-/, /^order-/, /^g-/, /^gx-/, /^gy-/,
    ],
  },
});

writeFileSync(cssPath, result[0].css);
const afterBytes = Buffer.byteLength(result[0].css, "utf8");
console.log(`CSS purgado: ${beforeBytes} -> ${afterBytes} bytes (-${(100 - (afterBytes / beforeBytes) * 100).toFixed(1)}%)`);
