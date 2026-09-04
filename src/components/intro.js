import { Container, Row, Col } from 'react-bootstrap';
import avatar from '../img/avatar.jpg';
import { useLanguage } from '../i18n/LanguageContext.js';
import Reveal from './Reveal.js';
import TypewriterRoles from './TypewriterRoles.js';
import { useScrollBlur } from '../hooks/useScrollBlur.js';

function Intro() {
    const { t } = useLanguage();
    // placeholder: a Cindy vai mandar uma foto melhor pra esse tratamento de bg depois
    const { ref: sectionRef, blur } = useScrollBlur(14);

    return (
        <section id="intro" ref={sectionRef} className="section-spacing intro--hero">
            <div className="intro__bg d-none d-md-block">
                <img
                    src={avatar}
                    alt="Cindy Santos"
                    className="intro__bg-image"
                    style={blur > 0.1 ? { filter: `blur(${blur}px)` } : undefined}
                />
                <div className="intro__bg-fade" aria-hidden="true" />
            </div>
            <Container className="position-relative">
                <Row>
                    <Col md={7} lg={6}>
                        <Reveal variant="up" as="p" className="intro__eyebrow">{t.intro.eyebrow}</Reveal>
                        <Reveal variant="up" delay={80} as="p" className="intro__role">
                            <TypewriterRoles roles={t.intro.roles} />
                        </Reveal>
                        <Reveal variant="up" delay={160} as="h1" className="intro__title">{t.intro.title}</Reveal>
                        <Reveal variant="up" delay={240} as="p" className="lead text-light">{t.intro.lead}</Reveal>
                        <Reveal variant="up" delay={320} as="p" className="intro__availability">
                            <span className="intro__availability-dot" aria-hidden="true" />
                            {t.intro.availability}
                        </Reveal>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Intro;
