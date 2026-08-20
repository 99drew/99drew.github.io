import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import illustration from '../img/illustrations/coffee-person.svg';
import SectionTitle from './sectionTitle.js';
import { useLanguage } from '../i18n/LanguageContext.js';

function AboutMe() {
    const { t } = useLanguage();
    return (
        <section id="AboutMe" className="section-spacing">
            <Container>
                <Row className="align-items-center g-4">
                    <Col md={8}>
                        <SectionTitle>{t.aboutMe.title}</SectionTitle>
                        <p className="text-light fw-medium">{t.aboutMe.positioning}</p>
                        <p className="text-light">{t.aboutMe.body}</p>
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
                        <p className="text-light">{t.aboutMe.closing}</p>
                    </Col>
                    <Col md={4} className="d-none d-md-block text-center">
                        <Image fluid src={illustration} alt="" width={260} height={195} className="aboutme__illustration" />
                    </Col>
                </Row>
            </Container>

        </section>
    );
}
export default AboutMe;
