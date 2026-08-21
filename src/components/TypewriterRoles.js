import { useEffect, useRef, useState } from 'react';

const TYPE_MS = 55;
const DELETE_MS = 30;
const HOLD_MS = 1400;

function prefersReducedMotion() {
    try {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
        return false;
    }
}

// Cicla pelas roles (ex: "SEO Técnico" -> "Front-End Developer" -> ...),
// digitando e apagando com um cursor piscando. Com prefers-reduced-motion,
// mostra só a primeira role, parada. Máquina de estados simples: cada
// render agenda o próximo passo (digitar +1 char, segurar, apagar -1 char,
// avançar pra próxima role) via um único setTimeout encadeado pelo effect.
function TypewriterRoles({ roles }) {
    const reduced = useRef(prefersReducedMotion());
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState(reduced.current ? (roles[0] || '') : '');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (reduced.current || roles.length === 0) return undefined;
        const current = roles[roleIndex % roles.length];

        if (!deleting && text === current) {
            const id = setTimeout(() => setDeleting(true), HOLD_MS);
            return () => clearTimeout(id);
        }

        if (deleting && text === '') {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
            return undefined;
        }

        const id = setTimeout(() => {
            setText((prev) => (deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)));
        }, deleting ? DELETE_MS : TYPE_MS);
        return () => clearTimeout(id);
    }, [text, deleting, roleIndex, roles]);

    return (
        <span className="typewriter">
            {text}
            <span className="typewriter__cursor" aria-hidden="true" />
        </span>
    );
}

export default TypewriterRoles;
