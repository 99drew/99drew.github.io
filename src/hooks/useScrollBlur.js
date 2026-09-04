import { useEffect, useRef, useState } from 'react';

function prefersReducedMotion() {
    try {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
        return false;
    }
}

// Blur (px) que cresce de 0 até maxBlur conforme a seção referenciada sai de
// vista rolando pra cima — efeito de "desfoque ao rolar" no hero. Com
// prefers-reduced-motion, fica sempre 0 (sem o listener de scroll).
export function useScrollBlur(maxBlur = 14) {
    const ref = useRef(null);
    const [blur, setBlur] = useState(0);

    useEffect(() => {
        const node = ref.current;
        if (!node || prefersReducedMotion()) return undefined;

        let ticking = false;
        const update = () => {
            ticking = false;
            const rect = node.getBoundingClientRect();
            const progress = rect.height > 0 ? Math.min(Math.max(-rect.top / rect.height, 0), 1) : 0;
            setBlur(progress * maxBlur);
        };
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [maxBlur]);

    return { ref, blur };
}
