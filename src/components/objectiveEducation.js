import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from './sectionTitle.js';
import Reveal from './Reveal.js';
import { useLanguage } from '../i18n/LanguageContext.js';

function ObjectiveEducation() {
    const { t } = useLanguage();
    return (
        <section id="Objective" className="section-spacing">
            <Container>
                <Row className="g-4">
                    <Col md={7}>
                        <SectionTitle>{t.objective.title}</SectionTitle>
                        <p className="text-light">{t.objective.intro}</p>
                        <div className="pill-list mb-3">
                            {t.objective.roles.map((role, idx) => (
                                <Reveal key={role} as="span" variant="scale" delay={idx * 70} className="pill pill--accent">{role}</Reveal>
                            ))}
                        </div>
                        <p className="text-light">{t.objective.closing}</p>
                    </Col>
                    <Col md={5}>
                        <h3 className="skills__subtitle">{t.objective.educationTitle}</h3>
                        <ul className="education-list">
                            {t.objective.education.map((e, idx) => (
                                <Reveal key={e.course} as="li" variant="left" delay={idx * 80}>
                                    <span className="education-list__course">{e.course}</span>
                                    <span className="education-list__school"> — {e.school}</span>
                                </Reveal>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default ObjectiveEducation;
