import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from './sectionTitle.js';
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
                            {t.objective.roles.map((role) => <span key={role} className="pill pill--accent">{role}</span>)}
                        </div>
                        <p className="text-light">{t.objective.closing}</p>
                    </Col>
                    <Col md={5}>
                        <h3 className="skills__subtitle">{t.objective.educationTitle}</h3>
                        <ul className="education-list">
                            {t.objective.education.map((e) => (
                                <li key={e.course}>
                                    <span className="education-list__course">{e.course}</span>
                                    <span className="education-list__school"> — {e.school}</span>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default ObjectiveEducation;
