import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from './sectionTitle.js';

const TARGET_ROLES = [
    'SEO',
    'Desenvolvimento Front-end com ou sem WordPress',
    'Automação de processos e fluxos',
];

const EDUCATION = [
    { course: 'Curso Técnico em Informática', school: 'ETEC' },
    { course: 'Curso de HTML, CSS e JS', school: 'Udemy' },
    { course: 'Análise e Desenvolvimento de Sistemas', school: 'Cursando' },
];

function ObjectiveEducation() {
    return (
        <section id="Objective" className="section-spacing">
            <Container>
                <Row className="g-4">
                    <Col md={7}>
                        <SectionTitle>Objetivo Profissional</SectionTitle>
                        <p className="text-light">Busco atuar de forma operacional e estratégica em:</p>
                        <div className="pill-list mb-3">
                            {TARGET_ROLES.map((role) => <span key={role} className="pill pill--accent">{role}</span>)}
                        </div>
                        <p className="text-light">Sem restrições de modelo (híbrido, remoto ou presencial), aberta a empresas de qualquer porte.</p>
                    </Col>
                    <Col md={5}>
                        <h3 className="skills__subtitle">Formação</h3>
                        <ul className="education-list">
                            {EDUCATION.map((e) => (
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
