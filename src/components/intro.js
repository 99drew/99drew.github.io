import { Container, Row, Col, Image } from 'react-bootstrap';
import avatar from '../img/avatar.jpg';
import { useLanguage } from '../i18n/LanguageContext.js';
import Reveal from './Reveal.js';
import TypewriterRoles from './TypewriterRoles.js';

function Intro() {
    const { t } = useLanguage();
    return (
        <section id="intro" className="section-spacing">
            <Container>
                <Row className="align-items-center">
                    <Col md={5} className="d-flex justify-content-center">
                        <Reveal variant="scale">
                            <Image src={avatar} alt="Cindy Santos" className="intro__image" roundedCircle />
                        </Reveal>
                    </Col>
                    <Col md={7}>
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
