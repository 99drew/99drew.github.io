import { useReveal } from '../hooks/useReveal.js';

// Wrapper genérico de scroll-reveal. `variant` escolhe a direção da entrada
// (classes .reveal--up/left/right/scale em style.css); `delay` (ms) permite
// escalonar itens de uma mesma lista sem precisar de keyframes por item.
function Reveal({ children, as: Tag = 'div', variant = 'up', delay = 0, className = '', ...rest }) {
    const { ref, visible } = useReveal();
    const classes = ['reveal', `reveal--${variant}`, visible ? 'reveal--visible' : '', className]
        .filter(Boolean)
        .join(' ');
    return (
        <Tag ref={ref} className={classes} style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }} {...rest}>
            {children}
        </Tag>
    );
}

export default Reveal;
