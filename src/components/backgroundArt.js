// Recria em SVG/CSS o motivo decorativo do antigo bg-html.png (blobs em
// gradiente rosa→roxo→azul + feixes de linhas onduladas), inteiramente
// vetorial — sem depender de uma imagem rasterizada de fundo.
//
// Composição revisada: a primeira versão espalhava blobs do mesmo tamanho
// em intervalos regulares descendo a página inteira, o que lia como um
// padrão repetido (bolinha-bolinha-bolinha). Referências bem avaliadas de
// mesh-gradient/hero background (ver pesquisa) convergem em: poucos blobs
// grandes, bastante desfocados, empurrados pra fora da área de conteúdo
// (sangrando pra fora da viewport), com variação forte de escala — em vez
// de muitos blobs médios nítidos e igualmente espaçados. Aqui: só 2 "glows"
// grandes e desfocados (que também carregam o feixe de linhas onduladas,
// como bookend no topo e no rodapé — o único detalhe repetido, e só duas
// vezes), 2 glows médios no meio da página pra continuidade, e 3 acentos
// pequenos e nítidos pra pontuação — nada de ritmo mecânico, nem um em
// cada seção.

// PRNG determinístico (mesmo seed => mesmo blob sempre, sem re-render aleatório)
function mulberry32(seed) {
    let s = seed;
    return function random() {
        s |= 0; s = (s + 0x6d2b79f5) | 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// Blob orgânico: N pontos ao redor de um círculo com raio levemente
// irregular, conectados por curvas suaves (Catmull-Rom -> Bézier fechada).
function blobPath(seed, size = 200, points = 9, irregularity = 0.32) {
    const rand = mulberry32(seed);
    const angleStep = (Math.PI * 2) / points;
    const pts = Array.from({ length: points }, (_, i) => {
        const r = size * (1 - irregularity / 2 + rand() * irregularity);
        const angle = i * angleStep;
        return [size + r * Math.cos(angle), size + r * Math.sin(angle)];
    });
    const n = pts.length;
    const d = [];
    for (let i = 0; i < n; i++) {
        const p0 = pts[(i - 1 + n) % n];
        const p1 = pts[i];
        const p2 = pts[(i + 1) % n];
        const p3 = pts[(i + 2) % n];
        const cp1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
        const cp2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        if (i === 0) d.push(`M${p1[0].toFixed(1)},${p1[1].toFixed(1)}`);
        d.push(`C${cp1[0].toFixed(1)},${cp1[1].toFixed(1)} ${cp2[0].toFixed(1)},${cp2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`);
    }
    d.push('Z');
    return d.join(' ');
}

// Feixe de linhas onduladas concêntricas (o padrão "topográfico" fino e
// branco que aparece sobre os blobs de topo/rodapé na imagem original).
function wavyLines(seed, count = 13, width = 480, height = 230) {
    const rand = mulberry32(seed);
    const lines = [];
    for (let i = 0; i < count; i++) {
        const y0 = (i / (count - 1)) * height;
        const amp = 16 + rand() * 12;
        const phase = rand() * Math.PI * 2;
        const segments = 6;
        let d = `M0,${(y0 + amp * Math.sin(phase)).toFixed(1)}`;
        for (let s = 1; s <= segments; s++) {
            const x = (s / segments) * width;
            const prevX = ((s - 1) / segments) * width;
            const midX = (prevX + x) / 2;
            const y = y0 + amp * Math.sin(phase + s * 1.3);
            const cpY = y0 + amp * Math.sin(phase + (s - 0.5) * 1.3);
            d += ` Q${midX.toFixed(1)},${cpY.toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)}`;
        }
        lines.push(d);
    }
    return lines;
}

// Três variantes do mesmo trio de cores (rosa/roxo/azul, extraídas por
// amostragem da imagem original) em ordens diferentes, pra cada glow ter
// uma personalidade sem sair da paleta.
const GRADIENTS = {
    a: ['#FF5595', '#9A20C4', '#3C00FA'],
    b: ['#3C00FA', '#9A20C4', '#FF5595'],
    c: ['#9A20C4', '#3C00FA', '#FF5595'],
};

// left/top em %, size em px. blur em px (grande = glow atmosférico, baixo =
// acento nítido). opacity controla o quão presente cada um é.
const CLUSTERS = [
    { seed: 1, size: 640, left: -22, top: -10, rot: -8, blur: 70, opacity: 0.55, grad: 'a', waves: true, waveSeed: 101 },
    { seed: 2, size: 150, left: 80, top: 2, rot: 25, flip: true, blur: 6, opacity: 0.85, grad: 'b' },
    { seed: 3, size: 560, left: 68, top: 44, rot: 10, flip: true, blur: 75, opacity: 0.45, grad: 'c' },
    { seed: 4, size: 130, left: -5, top: 63, rot: -18, blur: 5, opacity: 0.8, grad: 'a' },
    { seed: 5, size: 600, left: -20, top: 84, rot: -6, blur: 68, opacity: 0.55, grad: 'b', waves: true, waveSeed: 404 },
    { seed: 6, size: 140, left: 85, top: 97, rot: 16, flip: true, blur: 6, opacity: 0.75, grad: 'c' },
];

function BlobCluster({ cfg }) {
    const { seed, size, left, top, rot, flip, waves, waveSeed, blur, opacity, grad } = cfg;
    const path = blobPath(seed, 200, 9, 0.32);
    const gradId = `blobGrad${seed}`;
    const colors = GRADIENTS[grad];
    const lines = waves ? wavyLines(waveSeed, 13, 480, 230) : null;
    return (
        <div
            className="bg-art__cluster"
            style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                opacity,
                filter: `blur(${blur}px)`,
                transform: `rotate(${rot}deg) scaleX(${flip ? -1 : 1})`,
            }}
        >
            <svg viewBox="0 0 400 400" width="100%" height="100%">
                <defs>
                    <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={colors[0]} />
                        <stop offset="45%" stopColor={colors[1]} />
                        <stop offset="100%" stopColor={colors[2]} />
                    </linearGradient>
                </defs>
                <path d={path} fill={`url(#${gradId})`} />
            </svg>
            {waves && (
                <svg className="bg-art__waves" viewBox="0 0 480 230" preserveAspectRatio="xMidYMid meet">
                    {lines.map((d, i) => (
                        <path key={i} d={d} fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />
                    ))}
                </svg>
            )}
        </div>
    );
}

function BackgroundArt() {
    return (
        <div className="bg-art" aria-hidden="true">
            {CLUSTERS.map((cfg) => <BlobCluster key={cfg.seed} cfg={cfg} />)}
        </div>
    );
}

export default BackgroundArt;
