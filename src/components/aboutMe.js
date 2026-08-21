import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import illustration from '../img/illustrations/coffee-person.svg';
import SectionTitle from './sectionTitle.js';
import Reveal from './Reveal.js';
import { useLanguage } from '../i18n/LanguageContext.js';

function AboutMe() {
    const { t } = useLanguage();
    return (
        <section id="AboutMe" className="section-spacing">
            <Container>
                <Row className="align-items-center g-4">
                    <Col md={8}>
                        <SectionTitle>{t.aboutMe.title}</SectionTitle>
                        <Reveal as="p" className="text-light fw-medium">{t.aboutMe.positioning}</Reveal>
                        <Reveal as="p" delay={80} className="text-light">{t.aboutMe.body}</Reveal>
                        <Reveal delay={160}>
                            <Card className="card__quote">
                                <Card.Body>
                                    <blockquote className="blockquote">
                                        <p>{t.aboutMe.quote}</p>
                                        <footer className="blockquote-footer">
                                            <cite title={t.aboutMe.quoteAuthor}>{t.aboutMe.quoteAuthor}</cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Reveal>
                        <Reveal as="p" delay={240} className="text-light">{t.aboutMe.closing}</Reveal>
                    </Col>
                    <Col md={4} className="d-none d-md-block text-center">
                        <Reveal variant="scale">
                            <Image fluid src={illustration} alt="" width={260} height={195} className="aboutme__illustration" />
                        </Reveal>
                    </Col>
                </Row>
            </Container>

        </section>
    );
}
export default AboutMe;
