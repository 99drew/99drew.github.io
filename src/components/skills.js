import { Container, Row, Col, Card } from 'react-bootstrap';
import { Database, Bot, TrendingUp } from 'lucide-react';
import SectionTitle from './sectionTitle.js';

import html5 from '../img/icons/tech/html5.svg';
import css3 from '../img/icons/tech/css3.svg';
import javascript from '../img/icons/tech/javascript.svg';
import php from '../img/icons/tech/php.svg';
import python from '../img/icons/tech/python.svg';
import wordpress from '../img/icons/tech/wordpress.svg';
import git from '../img/icons/tech/git.svg';
import n8n from '../img/icons/tech/n8n.svg';
import react from '../img/icons/tech/react.svg';
import typescript from '../img/icons/tech/typescript.svg';
import bem from '../img/icons/tech/bem.svg';
import bitbucket from '../img/icons/tech/bitbucket.svg';
import jira from '../img/icons/tech/jira.svg';
import runrunit from '../img/icons/tech/runrunit.svg';
import googleAnalytics from '../img/icons/tech/google-analytics.svg';
import googleSearchConsole from '../img/icons/tech/google-search-console.svg';
import semrush from '../img/icons/tech/semrush.svg';
import lookerStudio from '../img/icons/tech/looker-studio.svg';

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

// Tecnologias — logos reais (SVG, brancos) para as que têm marca própria;
// ícone genérico só pra SQL (linguagem, não uma marca) e Agentes de IA (conceito).
const TECHNOLOGIES = [
    { name: 'HTML', src: html5 },
    { name: 'CSS', src: css3 },
    { name: 'JavaScript', src: javascript },
    { name: 'PHP', src: php },
    { name: 'SQL', Icon: Database },
    { name: 'Python', src: python },
    { name: 'WordPress', src: wordpress },
    { name: 'Git', src: git },
    { name: 'n8n', src: n8n },
    { name: 'React', src: react },
    { name: 'TypeScript', src: typescript },
    { name: 'BEM', src: bem },
    { name: 'Agentes de IA', Icon: Bot },
];

// Ferramentas — mesma lógica; Ahrefs não tem logo de marca disponível na
// biblioteca de ícones usada, então recebe um ícone genérico em vez de um
// logo de outra marca.
const TOOLS = [
    { name: 'Bitbucket', src: bitbucket },
    { name: 'Jira', src: jira },
    { name: 'Runrun.it', src: runrunit },
    { name: 'Google Analytics', src: googleAnalytics },
    { name: 'Google Search Console', src: googleSearchConsole },
    { name: 'Semrush', src: semrush },
    { name: 'Ahrefs', Icon: TrendingUp },
    { name: 'Looker Studio', src: lookerStudio },
];

function IconCard({ name, src, Icon }) {
    return (
        <Card className="card card--skills h-100">
            {src ? (
                <Card.Img className="card__picture" src={src} alt={name} title={name} />
            ) : (
                <Icon className="card__picture card__picture--icon" aria-hidden="true" />
            )}
            <Card.Title className="card__title">{name}</Card.Title>
        </Card>
    );
}

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

                <h3 className="skills__subtitle">Tecnologias</h3>
                <Row xs={2} sm={3} md={4} lg={6} className="g-3 mb-4">
                    {TECHNOLOGIES.map((t) => (
                        <Col key={t.name}><IconCard {...t} /></Col>
                    ))}
                </Row>

                <h3 className="skills__subtitle">Ferramentas</h3>
                <Row xs={2} sm={3} md={4} lg={6} className="g-3">
                    {TOOLS.map((t) => (
                        <Col key={t.name}><IconCard {...t} /></Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
export default Skills;
