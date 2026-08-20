import { useState } from 'react';
import { Container } from 'react-bootstrap';
import SectionTitle from './sectionTitle.js';

const ROLES = [
    {
        key: 'seo-coord',
        title: 'Coordenadora — SEO',
        company: 'Grupo Ideal Trends',
        period: '2024 — Atual',
        bullets: [
            'Condução de análises técnicas completas (estrutura, semântica, performance) e implementação direta de melhorias SEO on-page.',
            'Definição de estratégias de conteúdo baseadas em intenção de busca, com CRO orientado a comportamento (Clarity) e monitoramento contínuo via GA4, GSC e Semrush.',
            'Aplicação de GEO e AEO para otimizar presença da marca em buscadores por IA e mecanismos de resposta direta.',
            'Criação e manutenção de fluxos automatizados para gestão de leads e otimização operacional.',
        ],
    },
    {
        key: 'frontend-design',
        title: 'Supervisora — Front-end & Design',
        company: 'Doutores da Web / Busca Cliente',
        period: '2022 — 2024',
        bullets: [
            'Gestão técnica das equipes de Front-End e Design, com foco em SEO, qualidade e eficiência operacional.',
            'Padronização e escalabilidade dos processos por meio de POPs, dashboards com KPIs e repositório de componentes.',
            'Automação de fluxos críticos (n8n + Runrun.it), scripts de dados e agente em Python para operações de alto volume.',
        ],
    },
    {
        key: 'frontend-dev',
        title: 'Desenvolvedora — Front-end',
        company: 'Doutores da Web',
        period: '2020 — 2022',
        bullets: [
            'Desenvolvimento de sites personalizados no Site Base MPI (HTML, PHP, JS) com foco em performance e SEO.',
            'Criação de componentes reutilizáveis e otimização contínua da base de código para acelerar entregas.',
            'Participação em webscrapper de validação técnica e uso avançado de Bitbucket, Git e métodos ágeis.',
            'Apoio e treinamentos para a equipe.',
        ],
    },
];

function ProfessionalExperience() {
    const [openKey, setOpenKey] = useState(ROLES[0].key);

    return (
        <section id="ProfessionalExperience" className="section-spacing">
            <Container>
                <SectionTitle>Experiência Profissional</SectionTitle>
                <div className="timeline">
                    {ROLES.map((role) => {
                        const isOpen = openKey === role.key;
                        return (
                            <div key={role.key} className={`timeline__item${isOpen ? ' timeline__item--open' : ''}`}>
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
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
export default ProfessionalExperience;
