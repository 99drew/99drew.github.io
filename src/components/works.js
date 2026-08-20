import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ExternalLink, Code2 } from 'lucide-react';
import SectionTitle from './sectionTitle.js';
import { useLanguage } from '../i18n/LanguageContext.js';

const LINKS = [
    {
        liveHref: 'https://99drew.github.io/treino/',
        repoHref: 'https://github.com/99drew/99drew.github.io/tree/main/treino-app',
    },
    {
        liveHref: 'https://99drew.github.io/',
        repoHref: 'https://github.com/99drew/99drew.github.io',
    },
];

function Works() {
    const { t } = useLanguage();
    return (
        <section id="Works" className="section-spacing">
            <Container>
                <SectionTitle>{t.works.title}</SectionTitle>
                <Row xs={1} md={2} className="g-4">
                    {t.works.projects.map((project, idx) => (
                        <Col key={project.title}>
                            <Card className="card card--panel h-100">
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="card--panel__title">{project.title}</Card.Title>
                                    <Card.Text className="text-light flex-grow-1">{project.description}</Card.Text>
                                    <div className="mb-3">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="tech-badge me-2 mb-2 d-inline-block">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="d-flex gap-2">
                                        <Button as="a" href={LINKS[idx].liveHref} target="_blank" rel="noopener noreferrer" variant="light" size="sm">
                                            <ExternalLink size={15} className="me-1" /> {t.works.viewProject}
                                        </Button>
                                        <Button as="a" href={LINKS[idx].repoHref} target="_blank" rel="noopener noreferrer" variant="outline-light" size="sm">
                                            <Code2 size={15} className="me-1" /> {t.works.code}
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
export default Works;
