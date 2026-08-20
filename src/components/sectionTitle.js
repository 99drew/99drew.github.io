import { ChevronRight } from 'lucide-react';

function SectionTitle({ children }) {
    return (
        <h2 className="emp-title">
            <ChevronRight aria-hidden="true" />
            <span>{children}</span>
        </h2>
    );
}

export default SectionTitle;
