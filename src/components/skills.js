import { Container, Row, Col, Card } from 'react-bootstrap';
import html from '../img/icons/html.png';
import css from '../img/icons/css.png';
import js from '../img/icons/js.png';
import ts from '../img/icons/ts.png';
import react from '../img/icons/react.png';
import php from '../img/icons/php.png';
import git from '../img/icons/git.png';
import bem from '../img/icons/bem.png';
import SectionTitle from './sectionTitle.js';

const COMPETENCIES = [
    {
        title: 'SEO',
        text: 'Arquitetura semântica, auditorias e execuções on-page, indexação e rastreabilidade, otimização de performance, criação de conteúdo, seleção de palavras-chave e estratégia de funis topic cluster. Aplico GEO e AEO para visibilidade em buscadores por IA e respostas diretas.',
    },
    {
        title: 'Automação e Processos',
        text: 'Automação de fluxos, webscrapers para validação e coleta de dados, e padronização de processos escaláveis (POPs).',
    },
    {
        title: 'Front-end SEO-driven',
        text: 'Desenvolvimento front-end com HTML, CSS, JavaScript e PHP, e SEO em sites WordPress.',
    },
    {
        title: 'Inteligência Artificial Aplicada',
        text: 'Manipulação e orquestração de agentes de IA aplicados a automação de processos, geração de conteúdo e otimização de fluxos de trabalho.',
    },
];

const TECH_ICONS = [
    { src: html, alt: 'HTML 5', title: 'HTML 5' },
    { src: css, alt: 'CSS 3', title: 'CSS 3' },
    { src: js, alt: 'JavaScript', title: 'JavaScript' },
    { src: php, alt: 'PHP', title: 'PHP' },
    { src: react, alt: 'React', title: 'React' },
    { src: ts, alt: 'TypeScript', title: 'TypeScript' },
    { src: git, alt: 'Git', title: 'GIT' },
    { src: bem, alt: 'BEM (Block, Element, Modifier)', title: 'BEM' },
];

const TECHNOLOGIES = ['HTML', 'CSS', 'JS', 'PHP', 'SQL', 'Python', 'WordPress', 'Git', 'n8n', 'Agentes de IA'];
const TOOLS = ['Bitbucket', 'Jira', 'Runrun.it', 'Google Analytics', 'Google Search Console', 'Semrush', 'Ahrefs', 'Looker Studio'];

function Skills() {
    return (
        <section id="Skills" className="section-spacing">
            <Container>
                <SectionTitle>Skills</SectionTitle>

                <Row className="g-3 mb-4">
                    {COMPETENCIES.map((c) => (
                        <Col key={c.title} md={6}>
                            <Card className="card card--panel h-100">
                                <Card.Body>
                                    <Card.Title className="card--panel__title">{c.title}</Card.Title>
                                    <Card.Text className="text-light">{c.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row xs={2} sm={3} md={4} lg={8} className="g-3 mb-4">
                    {TECH_ICONS.map((icon) => (
                        <Col key={icon.title}>
                            <Card className="card card--skills h-100">
                                <Card.Img className="card__picture" src={icon.src} alt={icon.alt} title={icon.title} />
                                <Card.Title className="card__title">{icon.title}</Card.Title>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row className="g-3">
                    <Col md={6}>
                        <h3 className="skills__subtitle">Tecnologias</h3>
                        <div className="pill-list">
                            {TECHNOLOGIES.map((t) => <span key={t} className="pill">{t}</span>)}
                        </div>
                    </Col>
                    <Col md={6}>
                        <h3 className="skills__subtitle">Ferramentas</h3>
                        <div className="pill-list">
                            {TOOLS.map((t) => <span key={t} className="pill">{t}</span>)}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Skills;
