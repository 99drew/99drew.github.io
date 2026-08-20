// Ícones de marca (WhatsApp, LinkedIn) desenhados em SVG local — evita depender
// de um CDN de ícones só por dois glifos.
export function WhatsappIcon(props) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M16.04 3C9.4 3 4 8.36 4 14.96c0 2.2.6 4.26 1.65 6.04L4 29l8.2-2.15a12.9 12.9 0 0 0 3.84.58h.01c6.63 0 12.03-5.36 12.03-11.96C28.08 8.37 22.68 3 16.04 3Zm0 21.86h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-4.86 1.27 1.3-4.72-.24-.38a9.83 9.83 0 0 1-1.52-5.27c0-5.45 4.46-9.88 9.95-9.88 2.66 0 5.16 1.03 7.04 2.9a9.78 9.78 0 0 1 2.9 6.98c0 5.45-4.46 9.9-9.95 9.9Zm5.46-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.15 8.15 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.06c-.17-.3 0-.46.13-.6.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
    );
}

export function LinkedinIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
    );
}

export function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
            <path d="m3.5 6.5 8.5 6 8.5-6" />
        </svg>
    );
}
