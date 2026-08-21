import { useState } from 'react';
import { Container } from 'react-bootstrap';
import SectionTitle from './sectionTitle.js';
import Reveal from './Reveal.js';
import { useLanguage } from '../i18n/LanguageContext.js';

function ProfessionalExperience() {
    const { t } = useLanguage();
    const roles = t.experience.roles;
    const [openKey, setOpenKey] = useState(roles[0].key);

    return (
        <section id="ProfessionalExperience" className="section-spacing">
            <Container>
                <SectionTitle>{t.experience.title}</SectionTitle>
                <div className="timeline">
                    {roles.map((role, idx) => {
                        const isOpen = openKey === role.key;
                        return (
                            <Reveal
                                key={role.key}
                                as="div"
                                variant={idx % 2 === 0 ? 'left' : 'right'}
                                delay={idx * 100}
                                className={`timeline__item${isOpen ? ' timeline__item--open' : ''}`}
                            >
                                <button
                                    type="button"
                                    className="timeline__header"
                                    onClick={() => setOpenKey(isOpen ? null : role.key)}
                                    aria-expanded={isOpen}
                                    aria-controls={role.key}
                                >
                                    <span className="timeline__marker" aria-hidden="true" />
                                    <span className="timeline__heading">
                                        <span className="timeline__title">{role.title}</span>
                                        <span className="timeline__company">{role.company}</span>
                                    </span>
                                    <span className="timeline__period">{role.period}</span>
                                </button>
                                {isOpen && (
                                    <ul id={role.key} className="timeline__bullets">
                                        {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                                    </ul>
                                )}
                            </Reveal>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
export default ProfessionalExperience;
