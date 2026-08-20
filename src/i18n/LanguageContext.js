import { createContext, useContext, useState, useMemo } from 'react';
import { content } from './content.js';

const LanguageContext = createContext(null);

function readStoredLang() {
    try {
        const stored = window.localStorage.getItem('lang');
        return stored === 'en' || stored === 'pt' ? stored : 'pt';
    } catch (e) {
        return 'pt';
    }
}

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(readStoredLang);

    const toggleLang = () => {
        setLang((prev) => {
            const next = prev === 'pt' ? 'en' : 'pt';
            try { window.localStorage.setItem('lang', next); } catch (e) { /* ignore */ }
            return next;
        });
    };

    const value = useMemo(() => ({ lang, toggleLang, t: content[lang] }), [lang]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
    return ctx;
}
