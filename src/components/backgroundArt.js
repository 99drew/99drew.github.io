// Recria em SVG/CSS o motivo decorativo do antigo bg-html.png (blobs em
// gradiente rosa→roxo→azul + feixes de linhas onduladas), inteiramente
// vetorial — sem depender de uma imagem rasterizada de fundo. Como agora é
// gerado por código, dá pra espalhar o motivo por toda a extensão da página
// (não só na primeira tela), em vez de ficar preso ao tamanho de uma imagem.

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
// branco que aparece sobre dois dos blobs na imagem original).
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

// left/top em %, size em px, rot em graus, gradiente invertido opcional, e
// se carrega ou não o feixe de linhas onduladas junto.
const CLUSTERS = [
    { seed: 1, size: 260, left: -8, top: 0, rot: -12, waves: true, waveSeed: 101 },
    { seed: 2, size: 190, left: 88, top: 6, rot: 20, flip: true },
    { seed: 3, size: 170, left: -6, top: 17, rot: 8 },
    { seed: 4, size: 230, left: 90, top: 24, rot: -18, flip: true },
    { seed: 5, size: 200, left: -7, top: 34, rot: 15 },
    { seed: 6, size: 250, left: 86, top: 42, rot: 5, flip: true, waves: true, waveSeed: 202 },
    { seed: 7, size: 180, left: -5, top: 52, rot: -10 },
    { seed: 8, size: 210, left: 89, top: 60, rot: 22, flip: true },
    { seed: 9, size: 240, left: -9, top: 70, rot: -6, waves: true, waveSeed: 303 },
    { seed: 10, size: 190, left: 87, top: 79, rot: 14, flip: true },
    { seed: 11, size: 220, left: -7, top: 88, rot: 10 },
    { seed: 12, size: 270, left: 84, top: 94, rot: -15, flip: true, waves: true, waveSeed: 404 },
];

function BlobCluster({ cfg }) {
    const { seed, size, left, top, rot, flip, waves, waveSeed } = cfg;
    const path = blobPath(seed, 200, 9, 0.32);
    const gradId = `blobGrad${seed}`;
    const lines = waves ? wavyLines(waveSeed, 13, 480, 230) : null;
    return (
        <div
            className="bg-art__cluster"
            style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                transform: `rotate(${rot}deg) scaleX(${flip ? -1 : 1})`,
            }}
        >
            <svg viewBox="0 0 400 400" width="100%" height="100%">
                <defs>
                    <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF5595" />
                        <stop offset="45%" stopColor="#9A20C4" />
                        <stop offset="100%" stopColor="#3C00FA" />
                    </linearGradient>
                </defs>
                <path d={path} fill={`url(#${gradId})`} />
            </svg>
            {waves && (
                <svg className="bg-art__waves" viewBox="0 0 480 230" preserveAspectRatio="xMidYMid meet">
                    {lines.map((d, i) => (
                        <path key={i} d={d} fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.35" />
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
