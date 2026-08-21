import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal.js';

function SectionTitle({ children }) {
    return (
        <Reveal as="h2" variant="left" className="emp-title">
            <ChevronRight aria-hidden="true" />
            <span>{children}</span>
        </Reveal>
    );
}

export default SectionTitle;
