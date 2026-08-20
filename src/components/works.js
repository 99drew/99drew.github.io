import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ExternalLink, Code2 } from 'lucide-react';
import SectionTitle from './sectionTitle.js';

const PROJECTS = [
    {
        title: 'App de Treino (PWA)',
        description: 'Aplicativo pessoal de treino: plano A/B/C, cronômetro de descanso com notificação, progresso de cargas por exercício e fotos de evolução. Instalável, funciona offline via Service Worker e persiste tudo localmente em IndexedDB.',
        tech: ['React', 'Vite', 'PWA', 'IndexedDB', 'Service Worker'],
        liveHref: 'https://99drew.github.io/treino/',
        repoHref: 'https://github.com/99drew/99drew.github.io/tree/main/treino-app',
    },
    {
        title: 'Portfólio Pessoal',
        description: 'Este site: um portfólio construído em React para reunir minha trajetória, habilidades e projetos, com foco em performance e boas práticas de SEO on-page.',
        tech: ['React', 'React Bootstrap', 'SEO on-page'],
        liveHref: 'https://99drew.github.io/',
        repoHref: 'https://github.com/99drew/99drew.github.io',
    },
];

function Works() {
    return (
        <section id="Works" className="section-spacing">
            <Container>
                <SectionTitle>Trabalhos Realizados</SectionTitle>
                <Row xs={1} md={2} className="g-4">
                    {PROJECTS.map((project) => (
                        <Col key={project.title}>
                            <Card className="card card--panel h-100">
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="card--panel__title">{project.title}</Card.Title>
                                    <Card.Text className="text-light flex-grow-1">{project.description}</Card.Text>
                                    <div className="mb-3">
                                        {project.tech.map((t) => (
                                            <span key={t} className="tech-badge me-2 mb-2 d-inline-block">{t}</span>
                                        ))}
                                    </div>
                                    <div className="d-flex gap-2">
                                        <Button as="a" href={project.liveHref} target="_blank" rel="noopener noreferrer" variant="light" size="sm">
                                            <ExternalLink size={15} className="me-1" /> Ver projeto
                                        </Button>
                                        <Button as="a" href={project.repoHref} target="_blank" rel="noopener noreferrer" variant="outline-light" size="sm">
                                            <Code2 size={15} className="me-1" /> Código
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
