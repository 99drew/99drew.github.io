import { Container, Row, Col, Card } from 'react-bootstrap';
import { Database, Bot, TrendingUp } from 'lucide-react';
import SectionTitle from './sectionTitle.js';
import Reveal from './Reveal.js';
import { useLanguage } from '../i18n/LanguageContext.js';

import html5 from '../img/icons/tech/html5.svg';
import css3 from '../img/icons/tech/css3.svg';
import javascript from '../img/icons/tech/javascript.svg';
import php from '../img/icons/tech/php.svg';
import python from '../img/icons/tech/python.svg';
import wordpress from '../img/icons/tech/wordpress.svg';
import git from '../img/icons/tech/git.svg';
import n8n from '../img/icons/tech/n8n.svg';
import react from '../img/icons/tech/react.svg';
import googleAnalytics from '../img/icons/tech/google-analytics.svg';
import googleSearchConsole from '../img/icons/tech/google-search-console.svg';
import semrush from '../img/icons/tech/semrush.svg';

// Tecnologias — logos reais (SVG, brancos) para as que têm marca própria;
// ícone genérico só pra SQL (linguagem, não uma marca) e Agentes de IA (conceito).
function getTechnologies(aiAgentsLabel) {
    return [
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
        { name: aiAgentsLabel, Icon: Bot },
    ];
}

// Ferramentas — mesma lógica; Ahrefs não tem logo de marca disponível na
// biblioteca de ícones usada, então recebe um ícone genérico em vez de um
// logo de outra marca. Bitbucket/Jira/Runrun.it/Looker Studio não entram
// como cards de destaque — só uma observação discreta (toolsNote) abaixo
// da grade, já que são ferramentas de apoio, não o foco principal.
const TOOLS = [
    { name: 'Google Analytics', src: googleAnalytics },
    { name: 'Google Search Console', src: googleSearchConsole },
    { name: 'Semrush', src: semrush },
    { name: 'Ahrefs', Icon: TrendingUp },
];

function IconCard({ name, src, Icon }) {
    return (
        <Card className="card card--skills card--hoverable h-100">
            <span className="card__picture-badge">
                {src ? (
                    <Card.Img className="card__picture" src={src} alt={name} title={name} />
                ) : (
                    <Icon className="card__picture card__picture--icon" aria-hidden="true" />
                )}
            </span>
            <Card.Title className="card__title">{name}</Card.Title>
        </Card>
    );
}

function Skills() {
    const { t, lang } = useLanguage();
    const technologies = getTechnologies(lang === 'en' ? 'AI Agents' : 'Agentes de IA');
    return (
        <section id="Skills" className="section-spacing">
            <Container>
                <SectionTitle>{t.skills.title}</SectionTitle>

                <Row className="g-3 mb-4">
                    {t.skills.competencies.map((c, idx) => (
                        <Col key={c.title} md={6}>
                            <Reveal delay={idx * 60}>
                                <Card className="card card--panel card--hoverable h-100">
                                    <Card.Body>
                                        <Card.Title className="card--panel__title">{c.title}</Card.Title>
                                        <Card.Text className="text-light">{c.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Reveal>
                        </Col>
                    ))}
                </Row>

                <h3 className="skills__subtitle">{t.skills.technologiesLabel}</h3>
                <Row xs={2} sm={3} md={4} lg={6} className="g-3 mb-4">
                    {technologies.map((tech, idx) => (
                        <Col key={tech.name}>
                            <Reveal variant="scale" delay={(idx % 6) * 45}><IconCard {...tech} /></Reveal>
                        </Col>
                    ))}
                </Row>

                <h3 className="skills__subtitle">{t.skills.toolsLabel}</h3>
                <Row xs={2} sm={3} md={4} lg={6} className="g-3">
                    {TOOLS.map((tool, idx) => (
                        <Col key={tool.name}>
                            <Reveal variant="scale" delay={(idx % 6) * 45}><IconCard {...tool} /></Reveal>
                        </Col>
                    ))}
                </Row>
                <Reveal as="p" className="skills__tools-note">{t.skills.toolsNote}</Reveal>
            </Container>
        </section>
    );
}
export default Skills;
